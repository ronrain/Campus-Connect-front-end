import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ServiceList = () => {
  const {state} = useLocation()
  const [school, setSchools] = useState(state);
  return (
    <>
    <Link to={`/${school._id}/services/new`}>Create Service</Link>
    <h1>hi</h1>
    </>
  );
}
 
export default ServiceList;