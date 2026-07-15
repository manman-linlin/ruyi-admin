import { useState } from 'react'
import { statsData, recentLogs, quickActions, recentUsers, systemInfo } from '../mock/data'
import './Dashboard.css'

/* ---- 趋势微图 (纯CSS柱) ---- */
function MiniBars({ trend }) {
  const heights = trend === 'up' ? [6, 8, 5, 10, 7, 11, 9] : [9, 11, 7, 10, 5, 8, 6]
  return (
    <span className="mini-bars">
      {heights.map((h, i) => (
        <span key={i} className="mini-bar" style={{ height: h * 2.2 }} />
      ))}
    </span>
  )
}

/* ---- 统计卡片 ---- */
function StatCard({ label, value, change, trend, icon, desc }) {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-icon-wrap">
          <span className="stat-icon">{icon}</span>
        </div>
        <div className="stat-spark">
          <MiniBars trend={trend} />
        </div>
      </div>
      <div className="stat-card-body">
        <span className="stat-value">{value.toLocaleString?.() ?? value}</span>
        <span className={`stat-change ${trend}`}>
          {trend === 'up' ? '↑' : '↓'} {change}
        </span>
      </div>
      <div className="stat-card-foot">
        <span className="stat-label">{label}</span>
        <span className="stat-desc">{desc}</span>
      </div>
    </div>
  )
}

/* ---- 日志类型标记 ---- */
const logTypeMeta = {
  create:  { color: 'var(--success)', bg: 'rgba(34,197,94,0.1)', label: '新增' },
  update:  { color: 'var(--accent)',  bg: 'var(--accent-soft)',   label: '修改' },
  export:  { color: 'var(--warning)', bg: 'rgba(245,158,11,0.1)', label: '导出' },
  delete:  { color: 'var(--danger)',  bg: 'rgba(239,68,68,0.1)',  label: '删除' },
  approve: { color: 'var(--info)',   bg: 'rgba(99,102,241,0.1)',  label: '审核' },
}

/* ---- 状态标签 ---- */
function StatusTag({ status }) {
  const active = status === 'active'
  return (
    <span className={`status-tag ${active ? 'on' : 'off'}`}>
      {active ? '正常' : '停用'}
    </span>
  )
}

function Dashboard() {
  const [greeting] = useState(() => {
    const h = new Date().getHours()
    if (h < 6) return '夜深了'
    if (h < 9) return '早上好'
    if (h < 12) return '上午好'
    if (h < 14) return '中午好'
    if (h < 18) return '下午好'
    return '晚上好'
  })

  const today = new Date().toLocaleDateString('zh-CN', {
    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
  })

  return (
    <div className="dashboard">

      {/* ---- 欢迎 ---- */}
      <div className="welcome-bar">
        <div>
          <h1 className="welcome-title">{greeting}，如意 👋</h1>
          <p className="welcome-date">{today}</p>
        </div>
        <div className="welcome-tag">
          <span className="tag-dot"></span>
          系统运行正常
        </div>
      </div>

      {/* ---- 统计卡片 ---- */}
      <div className="stats-grid">
        {statsData.map(s => (
          <StatCard key={s.key} {...s} />
        ))}
      </div>

      {/* ---- 快捷操作 ---- */}
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

      {/* ---- 双栏：最近用户 + 操作日志 ---- */}
      <div className="two-col">
        {/* 最近用户 */}
        <div className="panel">
          <div className="panel-head">
            <h3 className="panel-title">最近加入用户</h3>
            <a href="#/users" className="panel-link">查看全部 →</a>
          </div>
          <table className="data-table">
            <thead>
              <tr>
                <th>用户</th>
                <th>角色</th>
                <th>状态</th>
                <th>加入时间</th>
              </tr>
            </thead>
            <tbody>
              {recentUsers.map(u => (
                <tr key={u.id}>
                  <td>
                    <div className="cell-user">
                      <span className="cell-avatar">{u.avatar}</span>
                      <div>
                        <div className="cell-name">{u.name}</div>
                        <div className="cell-email">{u.email}</div>
                      </div>
                    </div>
                  </td>
                  <td><span className="role-tag">{u.role}</span></td>
                  <td><StatusTag status={u.status} /></td>
                  <td className="cell-date">{u.joinAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 操作日志 + 系统信息 */}
        <div className="right-col">
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

          {/* 系统信息 */}
          <div className="panel sys-info">
            <div className="panel-head">
              <h3 className="panel-title">系统信息</h3>
            </div>
            <div className="sys-info-grid">
              <div className="sys-item">
                <span className="sys-label">版本</span>
                <span className="sys-val">{systemInfo.version}</span>
              </div>
              <div className="sys-item">
                <span className="sys-label">运行时长</span>
                <span className="sys-val">{systemInfo.uptime}</span>
              </div>
              <div className="sys-item">
                <span className="sys-label">节点</span>
                <span className="sys-val">{systemInfo.node}</span>
              </div>
              <div className="sys-item">
                <span className="sys-label">数据库</span>
                <span className="sys-val">{systemInfo.database}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
