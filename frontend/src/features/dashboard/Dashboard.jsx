import { statsData } from '../../mock/data'
import WelcomeBar from './components/WelcomeBar'
import StatCard from './components/StatCard'
import QuickActions from './components/QuickActions'
import RecentUsers from './components/RecentUsers'
import ActivityLog from './components/ActivityLog'
import SystemInfo from './components/SystemInfo'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <div className="dashboard stagger-children">
      <WelcomeBar />

      <div className="stats-grid">
        {statsData.map(s => <StatCard key={s.key} {...s} iconKey={s.key} />)}
      </div>

      <QuickActions />

      <div className="two-col">
        <RecentUsers />
        <div className="right-col">
          <ActivityLog />
          <SystemInfo />
        </div>
      </div>
    </div>
  )
}
