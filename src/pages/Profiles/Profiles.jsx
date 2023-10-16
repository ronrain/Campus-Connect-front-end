// npm modules
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../services/profileService'

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
      const userProfile = profileData.find((profile) => profile._id === props.user.profile)
      setProfiles(userProfile)
    }
    fetchProfiles()
  }, [])

  if (profiles.length === 0) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <>
      <Sidebar profile={profiles}/>
      <main className={styles.container}>
      <p>{profiles.name}</p>
      </main>
    </>
  )
}

export default Profiles
