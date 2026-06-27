# PRDKit Homepage Production Deploy

This directory contains the production Docker Compose entrypoint used by GitHub Actions.

## GitHub Setup

Required secret:

- `SERVER_SSH_KEY`: private key text for `root@43.153.205.242`.

Optional secret:

- `GHCR_READ_TOKEN`: a GitHub token with `read:packages`, only needed if the GHCR package is private.

Optional repository variables:

- `SERVER_HOST`: defaults to `43.153.205.242`.
- `SERVER_USER`: defaults to `root`.
- `SERVER_PORT`: defaults to `22`.

The workflow publishes:

- `ghcr.io/qizhi2design-svg/prdkit-homepage:<commit-sha>`
- `ghcr.io/qizhi2design-svg/prdkit-homepage:latest`

## One-Time Server Bootstrap

SSH must work before CI/CD can deploy:

```sh
ssh -i /Users/purity3/Documents/Projects/prdkit/prdkit.pem root@43.153.205.242
```

Then make sure Docker and the Compose plugin are installed, and prepare the app directory:

```sh
APP_DIR=/opt/prdkit-homepage sh deploy/production/bootstrap-server.sh
```

If running the bootstrap script locally, copy it to the server first.

## 宝塔 Nginx

Keep 宝塔 in charge of the domain and HTTPS certificate. Only change the site reverse proxy target:

```nginx
location / {
  proxy_pass http://127.0.0.1:3030;
  proxy_http_version 1.1;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

Validate before reload:

```sh
nginx -t
```

## Manual Server Deploy

```sh
cd /opt/prdkit-homepage
cat > .env <<'EOF'
IMAGE_NAME=ghcr.io/qizhi2design-svg/prdkit-homepage
IMAGE_TAG=latest
NEXT_PUBLIC_RELEASE_BASE_URL=https://www.prdkit.xyz
EOF

docker compose pull
docker compose up -d --remove-orphans
docker compose ps
curl -fsS http://127.0.0.1:3030/
```
