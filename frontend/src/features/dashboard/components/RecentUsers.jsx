import { recentUsers } from '../../../mock/data'

function StatusTag({ status }) {
  const active = status === 'active'
  return (
    <span className={`status-tag ${active ? 'on' : 'off'}`}>
      {active ? '正常' : '停用'}
    </span>
  )
}

export default function RecentUsers() {
  return (
    <div className="panel">
      <div className="panel-head">
        <h3 className="panel-title">最近加入用户</h3>
        <a href="#/users" className="panel-link">查看全部 →</a>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>用户</th><th>角色</th><th>状态</th><th>加入时间</th>
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
  )
}
