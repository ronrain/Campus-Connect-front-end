import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import * as serviceService from '../../services/serviceService';

import SchoolServicesCard from "../../components/ServicesDetails/SchoolServicesCard";

import styles from "./ServiceList.module.css"

const ServiceList = (props) => {
  const {schoolId} = useParams()
  const [services, setServices] = useState([])
console.log(schoolId)

  const handleDeleteService = async (serviceId) => {
    await serviceService.deleteService(serviceId)
    refreshServiceList()
  }

  const refreshServiceList = () => {
    const fetchServices = async () => {
      const services = await serviceService.index()
      setServices(services);
    }
    fetchServices()
  }
  
  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await serviceService.index()
      console.log(servicesData)
      const filterServicesData = servicesData.filter(service => service.school === schoolId)
      setServices(filterServicesData)
    } 
    fetchServices()
  }, [])

  const handleTypeChange = async (e) => {
    const servicesData = await serviceService.index()
      const filterServicesData = servicesData.filter(service => service.school === school._id)
    const typeServicesData = filterServicesData.filter(service => service.type === e.target.value)
    setServices(typeServicesData)
  }



  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.title}>Please select the type of service offered by the school from the drop down menu:</h1>
    <select className={styles.selectService} name="type" onChange={handleTypeChange}>
      <option value="">Search By Type</option>
      <option value="Haircut">Haircut</option>
      <option value="Tutoring">Tutoring</option>
      <option value="HandWork">HandWork</option>
      <option value="Cooking">Cooking</option>
      <option value="DIY">DIY</option>
      <option value="Other">Other</option>
    </select>
    </div>
    <div className={styles.cardContainer}>
    {services.map(service => ( 
      <SchoolServicesCard 
      key={service._id}
      service={service}
      handleDeleteService={handleDeleteService}
      user={props.user}
      />
      ))}
      </div>
    </>
  );
}

export default ServiceList;