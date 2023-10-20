import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as schoolService from "../../services/schoolService";

import SearchForm from "../../components/SearchForm/SearchForm"

// css
import styles from './SchoolList.module.css'

const SchoolList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools)
    }
    fetchSchools()
  }, [])

  const handleSchoolSearch = formData => {
    const filteredSchoolResults = schools.filter(school => (
      school.name.toLowerCase().includes(formData.query.toLowerCase()) 
    ))
    setSchools(filteredSchoolResults)
  }

  const refreshList = () => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }

  return (
    <>
      <SearchForm handleSchoolSearch={handleSchoolSearch} />
      <button className={styles.button30} onClick={refreshList}>Refresh</button>
      <div className={styles.container}>
        {schools.map(school => (<div className={styles.details} key={school._id}> <Link className={styles.schoolName} to={`/${school._id}`}><p>{school.name}</p></Link> <p>{school.state}</p> </div>))}
      </div>
    </> 
  );
}

export default SchoolList;