import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './SideBar.module.css'


const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <div className={styles.containerBar}>
      <button className={styles.sidebarButton} onClick={toggleSidebar}>Toggle Sidebar</button>
      <ul className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <li className={styles.item}><Link to="/profile">Your Profile</Link></li>
        <li className={styles.item}><Link to="/auth/change-password">Change Password</Link></li>
        <li className={styles.item}><Link to='/profile/services' state={props.profile}> Your Services</Link></li>
        <li className={styles.item}><Link to={'/profile/bookings'}>Your Bookings</Link></li>
        <li className={styles.item}><Link to="/service/new">Create Service</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Sidebar