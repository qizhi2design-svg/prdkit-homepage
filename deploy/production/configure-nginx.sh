#!/usr/bin/env sh
set -eu

DOMAIN="${DOMAIN:-www.prdkit.xyz}"
UPSTREAM="${UPSTREAM:-http://127.0.0.1:3030}"
VHOST_DIR="${VHOST_DIR:-/www/server/panel/vhost/nginx}"

if [ ! -d "$VHOST_DIR" ]; then
  echo "Nginx vhost directory not found: $VHOST_DIR" >&2
  exit 1
fi

config_file="$(grep -Rsl "server_name .*${DOMAIN}" "$VHOST_DIR"/*.conf 2>/dev/null | head -n 1 || true)"

if [ -z "$config_file" ]; then
  echo "Could not find a Baota Nginx vhost config for ${DOMAIN} in ${VHOST_DIR}" >&2
  exit 1
fi

backup_file="${config_file}.bak.$(date +%Y%m%d%H%M%S)"
cp "$config_file" "$backup_file"

tmp_file="$(mktemp)"
awk -v upstream="$UPSTREAM" '
  function print_proxy_blocks() {
    print "    location ^~ /_next/ {"
    print "        proxy_pass " upstream ";"
    print "        proxy_http_version 1.1;"
    print "        proxy_set_header Host $host;"
    print "        proxy_set_header X-Real-IP $remote_addr;"
    print "        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"
    print "        proxy_set_header X-Forwarded-Proto $scheme;"
    print "    }"
    print ""
    print "    location / {"
    print "        proxy_pass " upstream ";"
    print "        proxy_http_version 1.1;"
    print "        proxy_set_header Host $host;"
    print "        proxy_set_header X-Real-IP $remote_addr;"
    print "        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;"
    print "        proxy_set_header X-Forwarded-Proto $scheme;"
    print "        proxy_set_header Upgrade $http_upgrade;"
    print "        proxy_set_header Connection \"upgrade\";"
    print "    }"
  }

  in_location == 0 && $0 ~ /^[[:space:]]*location[[:space:]]+\^~[[:space:]]+\/_next\/[[:space:]]*\{/ {
    in_location = 1
    depth = 0
  }

  in_location == 0 && $0 ~ /^[[:space:]]*location[[:space:]]+\/[[:space:]]*\{/ {
    in_location = 1
    depth = 0
  }

  in_location == 1 {
    for (i = 1; i <= length($0); i++) {
      char = substr($0, i, 1)
      if (char == "{") depth++
      if (char == "}") depth--
    }
    if (depth <= 0) {
      in_location = 0
    }
    next
  }

  { lines[++line_count] = $0 }
  /^[[:space:]]*}[[:space:]]*$/ { last_closing = line_count }

  END {
    for (i = 1; i <= line_count; i++) {
      if (i == last_closing) {
        print_proxy_blocks()
      }
      print lines[i]
    }
  }
' "$config_file" > "$tmp_file"

mv "$tmp_file" "$config_file"

if ! nginx -t; then
  cp "$backup_file" "$config_file"
  nginx -t || true
  echo "Nginx config test failed. Restored backup: $backup_file" >&2
  exit 1
fi

nginx -s reload
echo "Configured ${DOMAIN} -> ${UPSTREAM}"
echo "Backup: ${backup_file}"
