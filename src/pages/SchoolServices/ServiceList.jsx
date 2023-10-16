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

  return (
    <>
    {services.map(service => ( <SchoolServicesCard key={service._id} />
    ))}
    </>
  );
}

export default ServiceList;