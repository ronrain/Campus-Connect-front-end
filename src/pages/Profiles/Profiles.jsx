// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'
import * as tokenService from '../../services/tokenService'

// css
import styles from './Profiles.module.css'

const Profiles = (props) => {
  const [profiles, setProfiles] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      const profileId = tokenService.getUserFromToken().profile
      const userProfile = profileData.find((profile) => profile._id === profileId)
      setProfiles(userProfile)
    }
    fetchProfiles()
  }, [])

  if (profiles.length === 0) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        {/* Add more menu items as needed */}
      </ul>
    </div>
      <main className={styles.container}>
      <p>{profiles.name}</p>
      </main>
    </>
  )
}

export default Profiles
