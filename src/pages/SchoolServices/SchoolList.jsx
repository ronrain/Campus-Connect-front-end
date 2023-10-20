import { useState, useEffect } from "react";
import SearchForm from "../../components/SearchForm/SearchForm"
import SchoolDetails from "../../components/Schools/SchoolDetails"
import * as schoolService from '../../services/schoolService';

// css
import styles from './SchoolList.module.css'

const SchoolList = (props) => {
  const [schools, setSchools] = useState([])
  
  const refreshList = () => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }

  useEffect(() => {
    const fetchSchools = async () => {
      const data = await schoolService.getAllSchools()
      setSchools(data);
    }
    fetchSchools()
  }, [])
  
  return (
    <>
      <SearchForm handleSchoolSearch={props.handleSchoolSearch} />
      <div className={styles.buttonContainer}>
        <button className={styles.button30} onClick={refreshList}>Refresh</button>
      </div>
      <div className={styles.container}>
        {schools.map(school => <SchoolDetails key={school._id} school={school} />)}
      </div>
    </>
  );
}

export default SchoolList;