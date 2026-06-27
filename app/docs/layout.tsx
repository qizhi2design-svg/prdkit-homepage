import Link from 'next/link'
import { SiteShell } from '@/components/site-shell'

const docsLinks = [
  { href: '/docs', label: '文档总览' },
  { href: '/docs/quick-start', label: '快速开始' },
  { href: '/docs/workbench', label: '工作台漫游' },
  { href: '/docs/prd-lifecycle', label: '撰写 PRD' },
  { href: '/docs/prototype', label: '原型与标注' },
  { href: '/docs/sharing', label: '发布与分享' },
  { href: '/docs/cli-ref', label: 'CLI 参考' }
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
          <div className="docs-mobile-nav">
            <span className="docs-mobile-nav__eyebrow">精选文档</span>
            <nav className="docs-mobile-nav__list" aria-label="移动端文档目录">
              {docsLinks.map((item) => (
                <Link key={item.href} href={item.href} className="docs-mobile-nav__link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="docs-article__inner">{children}</div>
        </article>
      </main>
    </SiteShell>
  )
}
