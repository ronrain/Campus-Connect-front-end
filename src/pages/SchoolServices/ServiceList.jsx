import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import * as servicesService from '../../services/serviceService';

import SchoolServicesCard from "../../components/ServicesDetails/SchoolServicesCard";

const ServiceList = () => {
  const {state} = useLocation()
  const [school, setSchools] = useState(state);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const servicesData = await servicesService.index()
      const filterServicesData = servicesData.filter(service => service.school === school._id)
      setServices(filterServicesData)
    } 
    fetchServices()
  }, [])
  console.log(services)

  const handleTypeChange = async (e) => {
    const newData = await servicesService.index()
    const filteredServicesData = newData.filter(service => service.type === e.target.value)
    setServices(filteredServicesData)
  }

  return (
    <>
    <select name="type" onChange={handleTypeChange}>
      <option value="">Search By Type</option>
      <option value="Haircut">Haircut</option>
      <option value="Tutoring">Tutoring</option>
      <option value="HandWork">HandWork</option>
      <option value="Cooking">Cooking</option>
      <option value="DIY">DIY</option>
      <option value="Other">Other</option>
    </select>
    {services.map(service => ( <SchoolServicesCard key={service._id} service={service}/>
    ))}
    </>
  );
}

export default ServiceList;