import { SiteShell } from '@/components/site-shell'

export default function MarketingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteShell>{children}</SiteShell>
}
