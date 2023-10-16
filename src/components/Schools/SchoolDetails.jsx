import { useState } from "react";
import { Link } from "react-router-dom";

import styles from '../../pages/SchoolServices/SchoolList.module.css'


const SchoolDetails = (props) => {
  return ( 

      <div className={styles.details} key={props.school.id}> 
      <Link to={`/${props.school._id}`} state={props.school}>
        <p>{props.school.name}</p>
        </Link> <p>{props.school.state}</p> </div>

  );
}

export default SchoolDetails;