// npm modules
import { useState, useEffect } from "react";

// components
import SearchForm from "../../components/SearchForm/SearchForm"
import SchoolCard from "../../components/SchoolCard/SchoolCard"

// services
import * as schoolService from '../../services/schoolService'

// css
import styles from './SchoolList.module.css'

const SchoolList = () => {
  const [schools, setSchools] = useState([])
  
  const refreshList = () => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools)
    }
    fetchSchools()
  }
  
  const handleSchoolSearch = formData => {
    const filteredSchoolResults = schools.filter(school => (
      school.name.toLowerCase().includes(formData.query.toLowerCase()) 
    ))
    setSchools(filteredSchoolResults)
  }

  useEffect(() => {
    const fetchSchools = async () => {
      const data = await schoolService.getAllSchools()
      setSchools(data)
    }
    fetchSchools()
  }, [])
  
  return (
    <>
      <div className={styles.appbanner}>
        <div className={styles.bannercontent}>
          <h1>Welcome to Our Campus Community</h1>
          <p>Discover and book services tailored for your college life</p>
          <button className={styles.bannerBtn}>Explore Services</button>
        </div>
      </div>
      <SearchForm handleSchoolSearch={handleSchoolSearch} />
      <div className={styles.buttonContainer}>
        <button className={styles.button30} onClick={refreshList}>Refresh</button>
      </div>
      <div className={styles.container}>
        {schools.map(school => <SchoolCard key={school._id} school={school} />)}
      </div>
    </>
  )
}

export default SchoolList