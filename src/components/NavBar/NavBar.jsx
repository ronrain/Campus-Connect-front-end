// npm modules
import { NavLink } from 'react-router-dom'
import logo from '../../../public/logo.jpg'

// css
import styles from './NavBar.module.css'

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.container}>
      {user ?
        <ul>
          <img src={logo} className={styles.logo}/>
          <li>Welcome, {user.name}</li>
          <li><NavLink to="/schools">Schools</NavLink></li>
          <li><NavLink to="/profile">Profiles</NavLink></li>
          <li><NavLink to="" onClick={handleLogout}>LOG OUT</NavLink></li>
          {/* <li><NavLink to="/auth/change-password">Change Password</NavLink></li> */}
          {/* <li><NavLink to="/service/new">Create Service</NavLink></li> */}
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
