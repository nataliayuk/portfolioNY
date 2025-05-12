import { NavLink } from 'react-router-dom'
import './Navbar.css'

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-nav">
        <NavLink to="/"       className={({ isActive }) => isActive ? 'active' : ''}>HOME</NavLink>
        <NavLink to="/about"  className={({ isActive }) => isActive ? 'active' : ''}>ABOUT</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>PROJECTS</NavLink>
        <NavLink to="/contact"  className={({ isActive }) => isActive ? 'active' : ''}>CONTACT</NavLink>
      </div>
    </nav>
  )
}