import { useState } from 'react'
import { getGreeting, getToday } from '../../../utils/formatters'

export default function WelcomeBar() {
  const [greeting] = useState(getGreeting)
  const [today] = useState(getToday)

  return (
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
  )
}
