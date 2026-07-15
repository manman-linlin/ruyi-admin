import Card from '../../components/ui/Card'

export default function Users() {
  return (
    <div style={{ maxWidth: 'var(--content-max-w)', margin: '0 auto' }}>
      <div className="welcome-bar" style={{ marginBottom: 24 }}>
        <div>
          <h1 className="welcome-title">用户管理</h1>
          <p className="welcome-date">管理系统中的所有用户账号</p>
        </div>
      </div>
      <Card variant="elevated">
        <div className="empty-state">
          <div className="empty-state-icon">👥</div>
          <div className="empty-state-title">用户管理模块</div>
          <div className="empty-state-desc">此模块将在后续版本中实现完整的 CRUD 功能</div>
        </div>
      </Card>
    </div>
  )
}
