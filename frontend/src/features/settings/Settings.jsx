import Card from '../../components/ui/Card'

export default function Settings() {
  return (
    <div style={{ maxWidth: 'var(--content-max-w)', margin: '0 auto' }}>
      <div className="welcome-bar" style={{ marginBottom: 24 }}>
        <div>
          <h1 className="welcome-title">系统设置</h1>
          <p className="welcome-date">配置系统参数和个性化选项</p>
        </div>
      </div>
      <Card variant="elevated">
        <div className="empty-state">
          <div className="empty-state-icon">⚙️</div>
          <div className="empty-state-title">系统设置模块</div>
          <div className="empty-state-desc">此模块将在后续版本中实现主题配置和系统参数设置</div>
        </div>
      </Card>
    </div>
  )
}
