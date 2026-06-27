import Link from 'next/link'

const highlights = ['Skills', 'PRD', 'Prototype', 'Marks', 'Checkpoints', 'Release'] as const

const notes = [
  '把方案、PRD、原型和标注放回同一条工作流，不再依赖碎片化工具跳转。',
  '默认保留版本与上下文，适合高频试错、回滚和团队评审。',
  '官网聚焦文档，桌面端承接真实编辑、预览和发布动作。'
] as const

export default async function HomePage() {
  return (
    <main className="marketing-page">
      <section className="hero">
        <div className="hero__copy">
          <p className="hero__kicker">PRDKit Desktop</p>
          <h1>
            为产品经理准备的
            <br />
            桌面工作台
          </h1>
          <p className="hero__description">
            用更稳定的方式承接
            PRD、原型、标注、版本和发布。少一点工具切换，多一点真正能沉淀的工作流。
          </p>

          <div className="hero__actions">
            <Link href="/docs" className="button button--primary">
              浏览精选文档
            </Link>
          </div>

          <div className="hero__meta">
            {highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

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
          <p className="hero__kicker">Why it feels different</p>
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
