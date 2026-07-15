import { systemInfo } from '../../../mock/data'

export default function SystemInfo() {
  return (
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
  )
}
