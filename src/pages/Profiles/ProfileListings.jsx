import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Sidebar from "../../components/SideBar/SideBar";
import UserServices from "../../components/ServicesDetails/UserServices";

import * as serviceService from "../../services/serviceService";

import styles from './Profiles.module.css'

const ProfileListings = (props) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const profileId = props.user.profile
      const serviceData = await serviceService.index()
      const userService = serviceData.filter((listing) => listing.createdBy._id === profileId)
      setServices(userService)
    } 
    fetchListings()
  }, [])
  
  return (
    <div>
      <Sidebar />
      {services.map((service) => <UserServices services={service}/> )}
    </div>
  );
}
export default ProfileListings;