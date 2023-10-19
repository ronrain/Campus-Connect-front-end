import { useState,useEffect } from "react";
import { Link } from 'react-router-dom'

import * as bookingService from '../../services/bookingService';
import * as serviceService from '../../services/serviceService';

import Sidebar from "../../components/SideBar/SideBar";
import styles from './Profiles.module.css'

const MyProfile = (props) => {
  const [myBookings, setMyBookings] = useState([])
  const [myServices, setMyServices] = useState([])
  const [averageRating, setAverageRating] = useState([])

  useEffect(() => {
    const fetchMyServices = async () => {
      const myServices = await serviceService.fetchServicesByCreator(props.user._id)
      setMyServices(myServices)

      let averageRating = 0
      let totalRatings = 0
      myServices.forEach(service => {
        service.reviews.forEach(review => {
          averageRating += review.rating
          totalRatings++
        })  
      });
      setAverageRating((averageRating / totalRatings).toFixed(2))
    }
    fetchMyServices()

    const fetchMyBookings = async () => {
      const myBookings = await bookingService.fetchBookingByCustomer(props.user._id)
      setMyBookings(myBookings)
    }
    fetchMyBookings()
  }, [])



  return (
    <>
    <Sidebar />
    <div className={styles.container}> 
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Total Services: {myServices.length}</h1>
          <Link to={'/profile/services'}>view all Services</Link>
        </div>
        </div>
    </div>
    <div className={styles.container}> 
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Total Bookings: {myBookings.length}</h1>
          <Link to={'/profile/bookings'}>view all Bookings</Link>
        </div>
        </div>
    </div>
    <div className={styles.container}> 
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Average Rating: {averageRating}</h1>
        </div>
        </div>
    </div>
    </>
  );
}

export default MyProfile;