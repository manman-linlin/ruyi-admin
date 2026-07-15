import Card from '../../components/ui/Card'

export default function DataManagement() {
  return (
    <div style={{ maxWidth: 'var(--content-max-w)', margin: '0 auto' }}>
      <div className="welcome-bar" style={{ marginBottom: 24 }}>
        <div>
          <h1 className="welcome-title">数据管理</h1>
          <p className="welcome-date">管理业务数据和数据导入导出</p>
        </div>
      </div>
      <Card variant="elevated">
        <div className="empty-state">
          <div className="empty-state-icon">📊</div>
          <div className="empty-state-title">数据管理模块</div>
          <div className="empty-state-desc">此模块将在后续版本中实现数据表格和导入导出功能</div>
        </div>
      </Card>
    </div>
  )
}
