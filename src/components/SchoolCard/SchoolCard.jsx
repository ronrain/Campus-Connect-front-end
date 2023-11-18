import { Link } from "react-router-dom";

import styles from '../../pages/SchoolList/SchoolList.module.css'


const SchoolDetails = (props) => {
  return ( 
    <div className={styles.schoolCard}>
      <Link to={`/schools/${props.school._id}`} state={props.school}>
        <div className={styles.schoolName}>{props.school.name}</div>
      </Link>
      <div className={styles.schoolState}>{props.school.state}</div>
    </div>
  );
}

export default SchoolDetails;