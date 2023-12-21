// npm modules
import { useState,useEffect } from "react"

// components
import * as bookingService from '../../services/bookingService'
import Sidebar from "../../components/SideBar/SideBar"

// styles
import styles from './BookingList.module.css'

const UserBookingsList = (props) => {
  const [displayedBookings, setDisplayedBookings] = useState([])

  useEffect(() => {
    const fetchAllBookings = async () => {
      const data = await bookingService.index()
      const newData = data.filter(booking => booking.customer._id === props.user.profile )
      setDisplayedBookings(newData)
    }
    fetchAllBookings()
  }, [props.user.profile])

  return (
    <>
      <Sidebar />
      <ul className="bookings-container">
        {displayedBookings.map((booking) => (
          <li key={booking._id}>
            <div className={styles.container}>
              <div className={styles.contentContainer}>
                <h1>Date: {booking.date}</h1>
                <h1>Customer: {booking.customer.name}</h1>
                {booking.status ? (
                  <h3>Status: Confirmed</h3>
                ) : (
                  <h3>Status: Pending </h3>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
} 

export default UserBookingsList