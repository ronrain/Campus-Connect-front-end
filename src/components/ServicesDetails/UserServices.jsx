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
      <div className={styles.title}> 
        <p>{props.service.title}</p>
        <div className={styles.about}>
          <p>{props.service.description}</p>
          <p>{props.service.type}</p>
        </div>
      </div>
      <div className={styles.buttons}>
      <button 
        className={styles.button30} 
        onClick={() => props.handleDeleteService(props.service._id)}
      >
        Delete
      </button>
      {" "}
      <button className={styles.button30}><Link to={`/service/${props.service._id}/edit`}state={props.service}>Edit</Link></button>
      <button className={`${styles.button30} ${styles.seeBookings}`}>
        <Link to={`/profile/services/${props.service._id}/bookings`}>
          See Bookings
        </Link>
      </button>
    </div>
    </div>
  );
}
export default UserServices;