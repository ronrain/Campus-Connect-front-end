import { useState } from "react"
import { Link } from "react-router-dom"

import styles from './UserServices.module.css'

const UserServices = (props) => {
  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className={styles.servicesContainer} >
        <p className={styles.title}>{props.service.title}</p>
          <p className={styles.about}>{props.service.description}</p>
          <p className={styles.about}>{props.service.type}</p>
      <div className={styles.buttons}>
      <button className={`${styles.button30} ${styles.seeBookings}`}>
        <Link className={styles.seeBookings} to={`/profile/services/${props.service._id}/bookings`}>
          See Bookings
        </Link>
      </button>
      <button 
        className={styles.button30} 
        onClick={() => props.handleDeleteService(props.service._id)}
      >
        Delete
      </button>
      {" "}
      <button className={styles.button30}><Link className={styles.edit} to={`/service/${props.service._id}/edit`}state={props.service}>Edit</Link></button>
    </div>
    </div>
  );
}
export default UserServices;