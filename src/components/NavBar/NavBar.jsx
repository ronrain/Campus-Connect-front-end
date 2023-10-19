// npm modules
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul>
          <NavLink to="/"><img src={logo} alt="CampusConnectLogo" className={styles.logo}/></NavLink>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/schools">Schools</NavLink></li>
          <li><NavLink to="/myProfile">My Profile</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>Logout</NavLink></li>
        </ul>
      :
        <ul>
          <li><NavLink to="/auth/login">Log In</NavLink></li>
          <li><NavLink to="/auth/signup">Sign Up</NavLink></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
