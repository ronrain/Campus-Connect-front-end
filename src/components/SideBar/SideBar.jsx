import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Sidebar.css"


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className='sidebar-button' onClick={toggleSidebar}>Toggle Sidebar</button>
      <ul className={`sidebar ${isOpen ? 'open' : ''}`}>
        <li className='sidebar-item'><Link to="/profiles">Your Profile</Link></li>
        <li className='sidebar-item'><Link to="/auth/change-password">Change Password</Link></li>
        <li className='sidebar-item'>Your Listings</li>
        <li className='sidebar-item'>Your Bookings</li>
        <li className='sidebar-item'><Link to="/service/new">Create Service</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </>
  )
}

export default Sidebar






