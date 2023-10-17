import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./SideBar.css"


const Sidebar = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button className='sidebar-button' onClick={toggleSidebar}>Toggle Sidebar</button>
      <ul className={`sidebar ${isOpen ? 'open' : ''}`}>
        <li className='sidebar-item'><Link to="/profile">Your Profile</Link></li>
        <li className='sidebar-item'><Link to="/auth/change-password">Change Password</Link></li>
        <li className='sidebar-item'><Link to='/profile/services' state={props.profile}> Your Services</Link></li>
        <li className='sidebar-item'>Your Bookings</li>
        <li className='sidebar-item'><Link to="/service/new">Create Service</Link></li>
        {/* Add more menu items as needed */}
      </ul>
    </>
  )
}

export default Sidebar