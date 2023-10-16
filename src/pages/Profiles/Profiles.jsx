// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'
import * as tokenService from '../../services/tokenService'

// css
import styles from './Profiles.module.css'

import Sidebar from '../../components/SideBar/SideBar'

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
      <Sidebar />
      <main className={styles.container}>
      <p>{profiles.name}</p>
      </main>
    </>
  )
}

export default Profiles
