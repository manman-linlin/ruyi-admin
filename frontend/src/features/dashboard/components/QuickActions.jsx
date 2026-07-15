import { quickActions } from '../../../mock/data'

export default function QuickActions() {
  return (
    <>
      <div className="section-header">
        <h2 className="section-title">快捷操作</h2>
      </div>
      <div className="actions-row">
        {quickActions.map(a => (
          <button key={a.key} className="action-card" style={{ '--ac': a.color }}>
            <span className="action-icon">{a.icon}</span>
            <span className="action-label">{a.label}</span>
          </button>
        ))}
      </div>
    </>
  )
}
