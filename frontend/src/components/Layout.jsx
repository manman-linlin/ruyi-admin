import { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import './Layout.css'

/* ---- 侧栏导航项 ---- */
const navItems = [
  { path: '/dashboard', label: '首页概览', icon: 'dashboard' },
  { path: '/users',     label: '用户管理', icon: 'users' },
  { path: '/data',      label: '数据管理', icon: 'data' },
  { path: '/settings',  label: '系统设置', icon: 'settings' },
]

/* ---- 面包屑映射 ---- */
const breadcrumbMap = {
  '/dashboard': '首页概览',
  '/users':     '用户管理',
  '/data':      '数据管理',
  '/settings':  '系统设置',
}

/* ---- 简易 SVG 图标 ---- */
function Icon({ name, size = 20 }) {
  const p = { stroke: 'currentColor', fill: 'none', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'dashboard':
      return <svg width={size} height={size} viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="9" rx="1.5" {...p}/><rect x="14" y="3" width="7" height="5" rx="1.5" {...p}/><rect x="3" y="16" width="7" height="5" rx="1.5" {...p}/><rect x="14" y="12" width="7" height="9" rx="1.5" {...p}/></svg>
    case 'users':
      return <svg width={size} height={size} viewBox="0 0 24 24"><circle cx="9" cy="7" r="4" {...p}/><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" {...p}/><circle cx="18" cy="7" r="3" {...p}/><path d="M22 21v-2a3 3 0 0 0-2.2-2.9" {...p}/></svg>
    case 'data':
      return <svg width={size} height={size} viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" {...p}/><line x1="3" y1="9" x2="21" y2="9" {...p}/><line x1="9" y1="21" x2="9" y2="9" {...p}/></svg>
    case 'settings':
      return <svg width={size} height={size} viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" {...p}/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" {...p}/></svg>
    case 'bell':
      return <svg width={size} height={size} viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" {...p}/><path d="M13.73 21a2 2 0 0 1-3.46 0" {...p}/></svg>
    case 'search':
      return <svg width={size} height={size} viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" {...p}/><line x1="21" y1="21" x2="16.65" y2="16.65" {...p}/></svg>
    case 'logout':
      return <svg width={size} height={size} viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" {...p}/><polyline points="16,17 21,12 16,7" {...p}/><line x1="21" y1="12" x2="9" y2="12" {...p}/></svg>
    case 'menu':
      return <svg width={size} height={size} viewBox="0 0 24 24"><line x1="3" y1="6" x2="21" y2="6" {...p}/><line x1="3" y1="12" x2="21" y2="12" {...p}/><line x1="3" y1="18" x2="21" y2="18" {...p}/></svg>
    default:
      return null
  }
}

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const { pathname } = useLocation()
  const pageTitle = breadcrumbMap[pathname] || '如意管理'

  return (
    <div className="app-shell">

      {/* ======== 顶栏 ======== */}
      <header className="header">
        <div className="header-left">
          <button className="menu-toggle" onClick={() => setSidebarOpen(v => !v)} title="折叠侧栏">
            <Icon name="menu" size={20} />
          </button>
          <span className="header-breadcrumb">
            <span className="breadcrumb-root">如意</span>
            <span className="breadcrumb-sep">›</span>
            <span className="breadcrumb-current">{pageTitle}</span>
          </span>
        </div>
        <div className="header-right">
          <button className="header-icon-btn" title="搜索">
            <Icon name="search" size={19} />
          </button>
          <button className="header-icon-btn has-dot" title="通知">
            <Icon name="bell" size={19} />
          </button>
          <div className="header-user">
            <div className="user-avatar">如</div>
            <span className="user-name">如意</span>
          </div>
        </div>
      </header>

      {/* ======== 侧栏 ======== */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
        {/* Logo */}
        <div className="sidebar-brand">
          <div className="brand-icon">
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="brandGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3b82f6"/>
                  <stop offset="100%" stopColor="#60a5fa"/>
                </linearGradient>
              </defs>
              <circle cx="16" cy="16" r="14" fill="none" stroke="url(#brandGrad)" strokeWidth="1.8"/>
              <path d="M10 16h12M16 10v12M10 12l6 4-6 4M22 12l-6 4 6 4" stroke="url(#brandGrad)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          {sidebarOpen && (
            <div className="brand-text">
              <span className="brand-name">如意管理系统</span>
              <span className="brand-sub">Ruyi Admin</span>
            </div>
          )}
        </div>

        {/* 分割线 */}
        <div className="sidebar-divider">
          <span className="divider-dot"></span>
          <span className="divider-line"></span>
          <span className="divider-diamond">◇</span>
          <span className="divider-line"></span>
          <span className="divider-dot"></span>
        </div>

        {/* 导航 */}
        <nav className="sidebar-nav">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            >
              <span className="nav-icon"><Icon name={item.icon} size={20} /></span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
              {sidebarOpen && <span className="nav-indicator" />}
            </NavLink>
          ))}
        </nav>

        {/* 底部信息 */}
        {sidebarOpen && (
          <div className="sidebar-footer">
            <div className="footer-status">
              <span className="status-dot online"></span>
              <span className="status-text">系统运行中</span>
            </div>
            <button className="logout-btn">
              <Icon name="logout" size={16} />
              <span>退出登录</span>
            </button>
          </div>
        )}
      </aside>

      {/* ======== 内容区 ======== */}
      <main className={`main-content ${sidebarOpen ? '' : 'full'}`}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
