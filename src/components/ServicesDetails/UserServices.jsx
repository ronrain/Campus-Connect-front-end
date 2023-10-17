import styles from './UserServices.module.css'


const UserServices = (props) => {


  return (
    <div className={styles.servicesContainer} >
    <p>{props.service.title}</p>
    <p>{props.service.description}</p>
    <p>{props.service.type}</p>
    <button onClick={() => props.handleDeleteService(props.service._id)}>Delete</button>
    <button>Edit</button>
    </div>
  );
}
export default UserServices;