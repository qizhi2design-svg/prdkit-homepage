import Link from 'next/link'
import { DownloadIcon } from '@/components/icon'

export async function HeroSection({ downloadUrl }: { downloadUrl: string }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <a href="/docs" className="hero__badge">
          PRDKit Desktop v1.0 <span aria-hidden="true">🎉</span>
        </a>

        <h1 className="hero__headline">
          <span className="hero__headline-line">想法 原型 PRD 资料管理</span>
          <span className="hero__headline-line">
            一个工作台就够了。
            <span className="hero__cursor" aria-hidden="true" />
          </span>
        </h1>

        <p className="hero__description">
          <span className="hero__description-line">
            承接 PRD 编写、原型预览、标注评审、版本管理和发布流程，
          </span>
          <span className="hero__description-line">
            链接主流项目管理软件，一切收敛到一个桌面应用。
          </span>
        </p>

        <div className="hero__actions">
          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            download
            className="button button--primary"
          >
            <DownloadIcon />
            下载 Mac 版
          </a>
          <Link href="/docs" className="button button--secondary">
            浏览精选文档
          </Link>
        </div>
      </div>
    </section>
  )
}
