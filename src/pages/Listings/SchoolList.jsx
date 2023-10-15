import { useState, useEffect } from "react";

import * as schoolService from "../../services/schoolService";

import './SchoolList.css'

const SchoolList = () => {
  const [schools, setSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }, [])

  return (
    <>
    <div className="school-container">
      {schools.map(school => (<div className="school-details" key={school.id}><p>{school.name}</p> <p>{school.state}</p> </div>))}
    </div>
    </>
  );
}

export default SchoolList;