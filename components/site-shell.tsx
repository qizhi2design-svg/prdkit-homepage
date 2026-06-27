import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { GithubIcon } from '@/components/icon'

const navigation = [
  { href: '/', label: '首页' },
  { href: '/docs', label: '文档' }
] as const

export function SiteShell({
  children,
  currentPath
}: Readonly<{
  children: React.ReactNode
  currentPath?: string
}>) {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <Link href="/" className="site-brand" aria-label="PRDKit 首页">
            <img src="/logo.svg" alt="PRDKit" className="site-brand__logo" />
            <span className="site-brand__wordmark">
              <span className="site-brand__prd">PRD</span>
              <span className="site-brand__kit">Kit</span>
            </span>
          </Link>

          <div className="site-header__right">
            <nav className="site-nav" aria-label="主导航">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    currentPath === item.href ? 'site-nav__link is-active' : 'site-nav__link'
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="site-header__actions">
              <ThemeToggle />
              <a
                href="https://github.com/qizhi2design-svg/prdkit"
                target="_blank"
                rel="noreferrer"
                className="site-header__icon-link"
                aria-label="GitHub"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="site-frame">
        {children}

        <footer className="site-footer">
          <div className="site-footer__inner">
            <div className="site-footer__columns">
              <div className="site-footer__col is-brand">
                <div className="site-footer__brand">
                  <strong>PRDKit</strong>
                  <p>产品经理的 AI 工作台，从 PRD 到原型再到发布，一切收敛到一个桌面应用。</p>
                </div>
                <div className="site-footer__social">
                  <a
                    href="https://github.com/qizhi2design-svg/prdkit"
                    target="_blank"
                    rel="noreferrer"
                    className="site-footer__social-link"
                    aria-label="GitHub"
                  >
                    <GithubIcon size={18} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              <div className="site-footer__col">
                <span className="site-footer__col-label">资源</span>
                <nav className="site-footer__nav" aria-label="资源导航">
                  <Link href="/docs">精选文档</Link>
                  <Link href="/docs/quick-start">快速开始</Link>
                  <Link href="/docs/workflow">工作流概览</Link>
                  <Link href="/docs/sharing">发布与分享</Link>
                </nav>
              </div>

              <div className="site-footer__col">
                <span className="site-footer__col-label">关于</span>
                <nav className="site-footer__nav" aria-label="关于导航">
                  <a
                    href="https://github.com/qizhi2design-svg/prdkit"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub 仓库
                  </a>
                  <a
                    href="https://github.com/qizhi2design-svg/prdkit/releases"
                    target="_blank"
                    rel="noreferrer"
                  >
                    更新日志
                  </a>
                  <a
                    href="https://github.com/qizhi2design-svg/prdkit/issues"
                    target="_blank"
                    rel="noreferrer"
                  >
                    反馈与建议
                  </a>
                </nav>
              </div>
            </div>

            <div className="site-footer__bottom">
              <p className="site-footer__copyright">
                &copy; {new Date().getFullYear()} PRDKit. All rights reserved.
              </p>
              <div className="site-footer__legal">
                <a href="/docs/privacy">隐私政策</a>
                <a href="/docs/terms">服务条款</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
