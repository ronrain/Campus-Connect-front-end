import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import * as schoolService from "../../services/schoolService";

import SearchForm from "../../components/SearchForm/SearchForm"
import SchoolDetails from "../../components/Schools/SchoolDetails"

// css
import styles from './SchoolList.module.css'

const SchoolList = (props) => {

  return (
    <>
      <SearchForm handleSchoolSearch={props.handleSchoolSearch}/>
      <div className={styles.buttonContainer}>
        <button className={styles.button30} onClick={props.refreshList}>Refresh</button>
      </div>
      <div className={styles.container}>
        {props.schools.map(school => <SchoolDetails key={school.id} school={school} />)}
      </div>
    </>
  );
}

export default SchoolList;