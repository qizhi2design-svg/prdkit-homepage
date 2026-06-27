import Link from 'next/link'

const notes = [
  '把方案、PRD、原型和标注放回同一条工作流，不再依赖碎片化工具跳转。',
  '默认保留版本与上下文，适合高频试错、回滚和团队评审。',
  '官网聚焦文档，桌面端承接真实编辑、预览和发布动作。'
] as const

export default async function HomePage() {
  return (
    <main className="marketing-page">
      <section className="hero">
        <div className="hero__inner">
          <a href="/docs" className="hero__badge">
            PRDKit Desktop v1.0 <span aria-hidden="true">🎉</span>
          </a>

          <h1>
            想法 原型 PRD 资料管理
            <br />
            一个工作台就够了。
            <span className="hero__cursor" aria-hidden="true" />
          </h1>

          <p className="hero__description">
            承接 PRD 编写、原型预览、标注评审、版本管理和发布流程，
            <br />
            链接主流项目管理软件，一切收敛到一个桌面应用。
          </p>

          <div className="hero__actions">
            <a
              href="https://github.com/qizhi2design-svg/prdkit/releases"
              target="_blank"
              rel="noreferrer"
              className="button button--primary"
            >
              <svg width="16" height="16" viewBox="0 0 1024 1024" fill="none" aria-hidden="true">
                <path
                  d="M849.124134 704.896288c-1.040702 3.157923-17.300015 59.872622-57.250912 118.190843-34.577516 50.305733-70.331835 101.018741-126.801964 101.909018-55.532781 0.976234-73.303516-33.134655-136.707568-33.134655-63.323211 0-83.23061 32.244378-135.712915 34.110889-54.254671 2.220574-96.003518-54.951543-130.712017-105.011682-70.934562-102.549607-125.552507-290.600541-52.30118-416.625816 36.040844-63.055105 100.821243-103.135962 171.364903-104.230899 53.160757-1.004887 103.739712 36.012192 136.028093 36.012192 33.171494 0 94.357018-44.791136 158.90615-38.089503 27.02654 1.151219 102.622262 11.298324 151.328567 81.891102-3.832282 2.607384-90.452081 53.724599-89.487104 157.76107C739.079832 663.275355 847.952448 704.467523 849.124134 704.896288M633.69669 230.749408c29.107945-35.506678 48.235584-84.314291 43.202964-132.785236-41.560558 1.630127-92.196819 27.600615-122.291231 62.896492-26.609031 30.794353-50.062186 80.362282-43.521213 128.270409C557.264926 291.935955 604.745311 264.949324 633.69669 230.749408"
                  fill="currentColor"
                />
              </svg>
              下载 Mac 版
            </a>
            <Link href="/docs" className="button button--secondary">
              浏览精选文档
            </Link>
          </div>
        </div>
      </section>

      <section className="preview-section">
        <div className="hero-preview">
          <div className="hero-preview__window">
            <div className="hero-preview__chrome">
              <div className="hero-preview__dots" aria-hidden="true">
                <span className="is-close" />
                <span className="is-minimize" />
                <span className="is-expand" />
              </div>
              <div className="hero-preview__chrome-label">PRDKit Desktop</div>
            </div>

            <div className="hero-preview__toolbar">
              <div className="hero-preview__toolbar-left">
                <div className="hero-preview__segmented">
                  <span className="is-active">原型</span>
                  <span>PRD</span>
                  <span>知识库</span>
                </div>
                <button
                  type="button"
                  className="hero-preview__sidebar-toggle"
                  aria-label="切换文件树"
                >
                  <span />
                  <span />
                </button>
              </div>

              <div className="hero-preview__toolbar-actions">
                <button type="button" className="hero-preview__toolbar-icon" aria-label="帮助">
                  i
                </button>
                <button type="button" className="hero-preview__toolbar-icon" aria-label="设置">
                  ·
                </button>
                <button
                  type="button"
                  className="hero-preview__toolbar-icon is-active"
                  aria-label="聊天"
                >
                  3
                </button>
                <span className="hero-preview__toolbar-divider" aria-hidden="true" />
                <button type="button" className="hero-preview__toolbar-text">
                  历史记录
                </button>
                <button type="button" className="hero-preview__toolbar-primary">
                  发布项目
                </button>
              </div>
            </div>

            <div className="hero-preview__workspace">
              <aside className="hero-preview__sidebar">
                <div className="hero-preview__sidebar-toolbar">
                  <div className="hero-preview__search">搜索当前工作区</div>
                  <button type="button" className="hero-preview__nav-icon" aria-label="新建">
                    +
                  </button>
                </div>

                <div className="hero-preview__project">
                  <div>
                    <p className="hero-preview__project-label">项目</p>
                    <strong className="hero-preview__project-title">增长实验平台</strong>
                  </div>
                  <span className="hero-preview__project-count">12 files</span>
                </div>

                <div className="hero-preview__file-tree">
                  <div className="hero-preview__file-item is-folder">
                    <span className="hero-preview__caret is-open" />
                    <span className="hero-preview__file-icon" />
                    <span>prd</span>
                  </div>
                  <div className="hero-preview__file-item is-selected is-depth-1">
                    <span className="hero-preview__caret" />
                    <span className="hero-preview__file-icon is-doc" />
                    <span>增长实验平台.prd.md</span>
                  </div>
                  <div className="hero-preview__file-item is-folder">
                    <span className="hero-preview__caret is-open" />
                    <span className="hero-preview__file-icon" />
                    <span>prototype</span>
                  </div>
                  <div className="hero-preview__file-item is-depth-1">
                    <span className="hero-preview__caret" />
                    <span className="hero-preview__file-icon is-doc" />
                    <span>首页实验看板</span>
                  </div>
                  <div className="hero-preview__file-item is-depth-1">
                    <span className="hero-preview__caret" />
                    <span className="hero-preview__file-icon is-doc" />
                    <span>实验详情页</span>
                  </div>
                  <div className="hero-preview__file-item is-folder">
                    <span className="hero-preview__caret is-open" />
                    <span className="hero-preview__file-icon" />
                    <span>mark</span>
                  </div>
                  <div className="hero-preview__file-item is-depth-1">
                    <span className="hero-preview__caret" />
                    <span className="hero-preview__file-icon is-doc" />
                    <span>主指标区说明</span>
                  </div>
                  <div className="hero-preview__file-item is-folder">
                    <span className="hero-preview__caret" />
                    <span className="hero-preview__file-icon" />
                    <span>checkpoint</span>
                  </div>
                </div>

                <div className="hero-preview__brand">
                  <strong>PRDKit</strong>
                  <span />
                  <small>工作区</small>
                </div>
              </aside>

              <div className="hero-preview__canvas-shell">
                <section className="hero-preview__canvas">
                  <div className="hero-preview__canvas-stage">
                    <div className="hero-preview__preview-banner">
                      <div className="hero-preview__preview-banner-text">
                        <div className="hero-preview__preview-banner-left">
                          <div className="hero-preview__tool-toggle-group">
                            <span className="is-active">预览</span>
                            <span>检查</span>
                            <span>标注</span>
                          </div>
                          <div className="hero-preview__preview-banner-meta">
                            <span className="hero-preview__selection-badge">3 个上下文</span>
                            <span className="hero-preview__preview-banner-status">
                              已进入产品需求到原型发布闭环
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="hero-preview__preview-banner-hotkeys">
                        <div className="hero-preview__preview-banner-controls">
                          <div className="hero-preview__history-chip-group">
                            <span className="hero-preview__history-badge">v1.0</span>
                            <span className="hero-preview__history-return">返回当前版本</span>
                          </div>
                          <div className="hero-preview__preview-action-group">
                            <span className="hero-preview__copy-batch-button">批量复制</span>
                            <span className="hero-preview__selection-toggle-button is-active">
                              选择元素
                            </span>
                          </div>
                        </div>
                        <span className="hero-preview__preview-banner-divider" aria-hidden="true" />
                        <div className="hero-preview__zoom-controls">
                          <span className="hero-preview__zoom-step">-</span>
                          <span className="hero-preview__zoom-value">100%</span>
                          <span className="hero-preview__zoom-step">+</span>
                          <span className="hero-preview__fit-button">适应</span>
                        </div>
                        <span className="hero-preview__save-button">保存版本</span>
                      </div>
                    </div>

                    <div className="hero-preview__preview-body">
                      <div className="hero-preview__preview-stage">
                        <div className="hero-preview__stage-caption">
                          <span className="hero-preview__stage-caption-line" />
                          <span className="hero-preview__stage-caption-text">
                            Prototype / 首页实验看板
                          </span>
                        </div>
                        <div className="hero-preview__stage-canvas">
                          <div className="hero-preview__frame-shell">
                            <div className="hero-preview__frame-topbar">
                              <span className="hero-preview__frame-pill" />
                              <span className="hero-preview__frame-address">
                                localhost:16732/preview
                              </span>
                            </div>
                            <div className="hero-preview__frame-page">
                              <div className="hero-preview__frame-hero">
                                <div className="hero-preview__frame-title" />
                                <div className="hero-preview__frame-subtitle" />
                                <div className="hero-preview__frame-stats">
                                  <div />
                                  <div />
                                  <div />
                                </div>
                              </div>
                              <div className="hero-preview__frame-panels">
                                <div className="hero-preview__frame-panel is-wide" />
                                <div className="hero-preview__frame-panel" />
                                <div className="hero-preview__frame-panel" />
                              </div>
                            </div>

                            <div className="hero-preview__highlight-overlay is-selected">
                              <div className="hero-preview__highlight-tag selected">section</div>
                            </div>
                            <div className="hero-preview__mark-highlight">
                              <div className="hero-preview__mark-number">1</div>
                            </div>
                            <div className="hero-preview__mark-highlight is-secondary">
                              <div className="hero-preview__mark-number">2</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <aside className="hero-preview__inspector">
                  <div className="hero-preview__inspector-header">
                    <div>
                      <small>AI 协作</small>
                      <strong>当前会话</strong>
                    </div>
                    <div className="hero-preview__inspector-actions" aria-hidden="true">
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="hero-preview__inspector-status">
                    <span className="hero-preview__inspector-status-dot" />
                    <span>已关联当前 PRD、页面与标注上下文</span>
                  </div>
                  <div className="hero-preview__inspector-thread">
                    <div className="hero-preview__message">
                      <span className="hero-preview__message-role">系统</span>
                      <p>已载入当前 PRD、原型页面与标注上下文。</p>
                    </div>
                    <div className="hero-preview__message">
                      <span className="hero-preview__message-role">你</span>
                      <p>补充首页实验看板的主指标区说明，并创建一个可回滚 checkpoint。</p>
                    </div>
                    <div className="hero-preview__message is-highlight">
                      <span className="hero-preview__message-role">PRDKit</span>
                      <p>已生成标注草稿，准备创建 checkpoint 并同步到发布记录。</p>
                    </div>
                    <div className="hero-preview__message hero-preview__message--typing">
                      <span className="hero-preview__message-role">PRDKit</span>
                      <div className="hero-preview__typing">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                  <div className="hero-preview__composer">
                    <div className="hero-preview__composer-chips">
                      <span>/page</span>
                      <span>/mark</span>
                      <span>/checkpoint</span>
                    </div>
                    <div className="hero-preview__composer-input">继续描述你要修改的内容...</div>
                    <div className="hero-preview__composer-actions" aria-hidden="true">
                      <span className="hero-preview__composer-plus">+</span>
                      <span className="hero-preview__composer-send" />
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="notes-section">
        <div className="notes-section__intro">
          <p className="section-kicker">Why it feels different</p>
          <h2>不是把 AI 塞进产品流程，而是把产品流程重新整理成一套更稳定的工具链。</h2>
        </div>
        <div className="notes-list">
          {notes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>
    </main>
  )
}
