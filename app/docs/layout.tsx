import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'

const docsLinks = [
  { href: '/docs', label: '文档总览' },
  { href: '/docs/quick-start', label: '安装与快速开始' },
  { href: '/docs/workflow', label: '工作流概览' },
  { href: '/docs/desktop', label: 'CLI 与 Desktop' },
  { href: '/docs/sharing', label: '发布与分享' },
  { href: '/docs/product-guide', label: '产品使用指南' }
] as const

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SiteShell currentPath="/docs">
      <main className="docs-page">
        <aside className="docs-sidebar">
          <div className="docs-sidebar__inner">
            <span className="docs-sidebar__eyebrow">精选文档</span>
            <nav className="docs-sidebar__nav" aria-label="文档目录">
              {docsLinks.map((item) => (
                <Link key={item.href} href={item.href} className="docs-sidebar__link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        <article className="docs-article">
          <div className="docs-article__inner">{children}</div>
        </article>
      </main>
    </SiteShell>
  )
}
