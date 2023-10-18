import { useState } from "react"

import styles from './UserServices.module.css'

const UserServices = (props) => {
  const [editMode, setEditMode] = useState(false)

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div className={styles.servicesContainer} >
    <p>{props.service.title}</p>
    <p>{props.service.description}</p>
    <p>{props.service.type}</p>
    <button onClick={() => props.handleDeleteService(props.service._id)}>Delete</button>
    <button onClick={toggleEditMode}>Edit</button> 
    </div>
  );
}
export default UserServices;