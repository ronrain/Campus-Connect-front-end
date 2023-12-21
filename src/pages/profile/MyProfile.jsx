// npm modules
import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'

// services
import * as bookingService from '../../services/bookingService'
import * as serviceService from '../../services/serviceService'

// components
import Sidebar from "../../components/SideBar/SideBar"

// styles
import styles from './Profiles.module.css'

const MyProfile = (props) => {
  const [myBookings, setMyBookings] = useState([])
  const [myServices, setMyServices] = useState([])
  const [averageRating, setAverageRating] = useState([])

  console.log(props.user.profile)

  useEffect(() => {
    const fetchMyServices = async () => {
      const myServices = await serviceService.fetchServicesByCreator(props.user.profile)
      setMyServices(myServices)

      let averageRating = 0
      let totalRatings = 0
      myServices.forEach(service => {
        service.reviews.forEach(review => {
          averageRating += review.rating
          totalRatings++
        })  
      })
      setAverageRating((averageRating / totalRatings).toFixed(2))
    }
    fetchMyServices()

    const fetchMyBookings = async () => {
      const myBookings = await bookingService.fetchBookingByCustomer(props.user.profile)
      setMyBookings(myBookings)
    }
    fetchMyBookings()
  }, [props.user.profile])

  return (
    <>
    <Sidebar />
    <div className={styles.container}> 
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Total Services: {myServices.length}</h1>
          <Link className={styles.linkTotal} to={'/profile/services'}>View All Services</Link>
        </div>
        </div>
    </div>
    <div className={styles.container}> 
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h1>Total Bookings: {myBookings.length}</h1>
          <Link className={styles.linkTotal} to={'/profile/bookings'}>View All Bookings</Link>
        </div>
        </div>
    </div>
    <div className={styles.container}> 
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          {averageRating > 0 ? <h1>my Average Rating is: {averageRating}</h1> : <h1>Average Rating: No reviews yet</h1>}
        </div>
        </div>
    </div>
    </>
  )
}

export default MyProfile