import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './SideBar.module.css'


const Sidebar = (props) => {
  return (
    <>
    <div className={styles.containerBar}>
      <div className={styles.sidebarTitle}>Sidebar</div>
      <ul className={styles.sidebar}>
        <li className={styles.item}><Link className={styles.itemLink} to="/myProfile">Your Profile</Link></li>
        <li className={styles.item}><Link className={styles.itemLink} to="/auth/change-password">Change Password</Link></li>
        <li className={styles.item}><Link className={styles.itemLink} to='/profile/services' state={props.profile}> Your Services</Link></li>
        <li className={styles.item}><Link className={styles.itemLink} to={'/profile/bookings'}>Your Bookings</Link></li>
        <li className={styles.item}><Link className={styles.itemLink} to="/service/new">Create Service</Link></li>
      </ul>
    </div>
    </>
  )
}

export default Sidebar