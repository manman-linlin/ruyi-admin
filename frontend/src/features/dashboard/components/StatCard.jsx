import useSpotlight from '../../../hooks/useSpotlight'
import { cn } from '../../../utils/cn'

function MiniBars({ trend, data = [] }) {
  const heights = data.length > 0 ? data : (trend === 'up'
    ? [6, 8, 5, 10, 7, 11, 9]
    : [9, 11, 7, 10, 5, 8, 6])
  return (
    <span className="mini-bars">
      {heights.map((h, i) => (
        <span key={i} className="mini-bar" style={{ height: h * 2.2 }} />
      ))}
    </span>
  )
}

const iconColors = {
  users: 'stat-icon-blue', active: 'stat-icon-green',
  new: 'stat-icon-gold', visits: 'stat-icon-indigo',
}

export default function StatCard({ label, value, change, trend, icon, desc, iconKey }) {
  const spotlightRef = useSpotlight()

  return (
    <div ref={spotlightRef} className="stat-card-glass card-spotlight">
      <div className="stat-top">
        <div className={cn('stat-icon-box', iconColors[iconKey] || 'stat-icon-blue')}>
          <span className="stat-icon-emoji">{icon}</span>
        </div>
        <div className="stat-spark">
          <MiniBars trend={trend} />
        </div>
      </div>
      <div className="stat-value-row">
        <span className="stat-number">{typeof value === 'number' ? value.toLocaleString() : value}</span>
        <span className={cn('stat-change-badge', trend)}>
          {trend === 'up' ? '↑' : '↓'} {change}
        </span>
      </div>
      <div className="stat-footer">
        <span className="stat-label">{label}</span>
        <span className="stat-subtitle">{desc}</span>
      </div>
    </div>
  )
}
