// npm modules
import { Link } from "react-router-dom"

// styles
import styles from './UserServices.module.css'

const UserServices = (props) => {
  console.log(props.service._id)
  return (
    <div className={styles.servicesContainer} >
      <h2 className={styles.title}>{props.service.title.toUpperCase()}</h2>
      <hr />
        <p className={styles.about}>{props.service.description.toUpperCase()}</p>
        <p className={styles.about}>Type: {props.service.type}</p>
        <p className={styles.about}>Price: ${props.service.price}</p>
        <hr />
        <h4>Availability: </h4>
        {props.service.availability.map((availability, index) => (
          <div key={index}>
            <p><strong>Day:</strong> {availability.day}</p>
            <p><strong>Start Time:</strong> {availability.startTime}</p>
            <p><strong>End Time:</strong> {availability.endTime}</p>
          </div>
        ))}
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
      <button className={styles.button30}><Link className={styles.edit} to={`/service/${props.service._id}/edit`}state={props.service}>Edit</Link></button>
    </div>
    </div>
  )
}
export default UserServices