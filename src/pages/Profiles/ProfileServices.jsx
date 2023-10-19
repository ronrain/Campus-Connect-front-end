import { useState, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../../components/SideBar/SideBar";
import UserServices from "../../components/ServicesDetails/UserServices";

import * as serviceService from "../../services/serviceService";

import styles from './Profiles.module.css'

const ProfileListings = (props) => {
  const [services, setServices] = useState([])
  const [editMode, setEditMode] = useState(false)

  useEffect(() => {
    const fetchListings = async () => {
      const profileId = props.user.profile
      const serviceData = await serviceService.index()
      const userService = serviceData.filter((listing) => listing.createdBy._id === profileId)
      setServices(userService)
    } 
    fetchListings()
  }, [])

  const handleDeleteService = async (serviceId) => {
    await serviceService.deleteService(serviceId)
    setServices(services.filter(service => service._id !== serviceId))
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className={styles.serviceCard}>
      <Sidebar />
      <div className={styles.serviceCardWrap}></div>
      {services.map((service) => 
      <UserServices 
        key={service._id} 
        service={service}  
        handleDeleteService={handleDeleteService}
        toggleEditMode={toggleEditMode}
        /> )}
    </div>
  );
}
export default ProfileListings; 