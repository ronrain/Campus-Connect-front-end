import styles from './UserServices.module.css'

const UserServices = (props) => {
  return (
    <div className={styles.servicesContainer} >
    <p>{props.services.title}</p>
    <p>{props.services.description}</p>
    <p>{props.services.type}</p>
    </div>
  );
}
export default UserServices;