import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import * as servicesService from '../../services/serviceService';

import SchoolServicesCard from "../../components/ServicesDetails/SchoolServicesCard";

import styles from "./ServiceList.module.css"

const ServiceList = (props) => {
  const {state} = useLocation()
  const [school, setSchools] = useState(state);
  const [services, setServices] = useState([]);

  const handleDeleteService = async (serviceId) => {
    await servicesService.deleteService(serviceId)
    refreshServiceList()
  }

  const refreshServiceList = () => {
    const fetchServices = async () => {
      const services = await servicesService.index()
      setServices(services);
      console.log(services)
    }
    fetchServices()
  }
  
  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await servicesService.index()
      const filterServicesData = servicesData.filter(service => service.school === school._id)
      setServices(filterServicesData)
    } 
    fetchServices()
  }, [])

  const handleTypeChange = async (e) => {
    const newData = await servicesService.index()
    const filteredServicesData = newData.filter(service => service.type === e.target.value)
    setServices(filteredServicesData)
  }

  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.title}>Please select the type of seervice offered by the school from the drop down menu:</h1>
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
    {services.map(service => ( 
      <SchoolServicesCard 
        key={service._id}
        service={service}
        handleDeleteService={handleDeleteService}
        user={props.user}
      />
    ))}
    </>
  );
}

export default ServiceList;