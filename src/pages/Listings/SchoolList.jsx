import { useState, useEffect } from "react";

import * as schoolService from "../../services/schoolService";

// css
import styles from './SchoolList.module.css'

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
    <div className={styles.container}>
      {schools.map(school => (<div className={styles.details} key={school.id}><p>{school.name}</p> <p>{school.state}</p> </div>))}
    </div>
    </>
  );
}

export default SchoolList;