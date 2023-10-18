import styles from './SchoolServicesCard.module.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SchoolServicesCard = (props) => {
  const [averageRating, setAverageRating] = useState(0)
  const service = props.service
  
  useEffect(() => {
    const calculateAverageRating = () => {
      if (service.reviews.length > 0) {
      const reviews = service.reviews
      const ratings = reviews.map(review => review.rating)
      const totalRating = ratings.reduce((total, rating) => total + rating, 0)
      const average = totalRating / ratings.length
      const roundedAverage = average.toFixed(1)
      setAverageRating(roundedAverage)
    } else setAverageRating(0)
    }
    calculateAverageRating()
  }, [])


  return (
    <div className={styles.serviceContainer}>
      <div className={styles.profileHeader}>

      <div className={styles.profileImg} style={{backgroundImage: {logo}}}>
      </div>
      <div className={styles.name}>
        {service.createdBy.name}
      </div>
      </div>
      <div className={styles.description}>
        {service.description}
      </div>
      <div className={styles.social}>
        <p>Type: {service.type}</p>
        <p>Price: {service.price}</p>
      </div>
      <button className={styles.cardBtn}><Link to={`/service/${service._id}`}>Book Me</Link></button>
        {service.createdBy._id.slice(0, -1) === props.user._id.slice(0, -1) &&
          <>
            <div className={styles.button}>
              <button className={styles.button30}><Link to={`/service/${service._id}/edit`}>Edit</Link></button>
              {" "}
              <button
                className={styles.button30}
                onClick={() => props.handleDeleteService(props.service._id)}>Delete
              </button>
            </div>
          </>
        }
      <footer className={styles.cardFooter}>
        <div className={styles.likes}>
          <p>Ratings: {averageRating}</p>
        </div>
        <div className={styles.projects}>
          <p>Bookings:</p>
        </div>
      </footer>
    </div>
  );
}

export default SchoolServicesCard;