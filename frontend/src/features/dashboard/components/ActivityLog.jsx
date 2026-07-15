import { recentLogs } from '../../../mock/data'

const logTypeMeta = {
  create:  { color: 'var(--success)', bg: 'var(--success-soft)', label: '新增' },
  update:  { color: 'var(--accent)',  bg: 'var(--accent-soft)',   label: '修改' },
  export:  { color: 'var(--warning)', bg: 'var(--warning-soft)', label: '导出' },
  delete:  { color: 'var(--danger)',  bg: 'var(--danger-soft)',  label: '删除' },
  approve: { color: 'var(--info)',   bg: 'var(--info-soft)',   label: '审核' },
}

export default function ActivityLog() {
  return (
    <div className="panel">
      <div className="panel-head">
        <h3 className="panel-title">最近操作</h3>
      </div>
      <div className="log-list">
        {recentLogs.map(log => {
          const m = logTypeMeta[log.type]
          return (
            <div key={log.id} className="log-item">
              <span className="log-badge" style={{ background: m.bg, color: m.color }}>{m.label}</span>
              <div className="log-body">
                <span className="log-user">{log.user}</span>
                <span className="log-action">{log.action}</span>
              </div>
              <span className="log-time">{log.time}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
