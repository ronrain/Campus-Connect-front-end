import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import { parse, format } from 'date-fns'

import * as bookingService from '../../services/bookingService'

import Sidebar from "../../components/SideBar/SideBar"

import styles from './BookingList.module.css'

const BookingsList = () => {
  const { serviceId } = useParams()
  const [displayedBookings, setDisplayedBookings] = useState([])
  const navigate = useNavigate()
  console.log(serviceId)
  const fetchAllBookings = async () => {
    const data = await bookingService.index()
    console.log(data)
    const newData = data.filter(booking => booking.service && booking.service._id === serviceId )
    setDisplayedBookings(newData)
  }

  useEffect(() => {
    fetchAllBookings()
  },)

  const onAccept = async (bookingId) => {
    await bookingService.updateStatus(bookingId, true)
    fetchAllBookings()
  }

  const onReject = async (bookingId) => {
    await bookingService.deleteBooking(bookingId)
    fetchAllBookings()
  }

  const handleReturn = () => {
    navigate('/profile/services')
  }

  return (
    <>
      <Sidebar />
      <button className="return-btn" onClick={handleReturn}>Return</button>
      {/* <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
      /> */}
      <ul className={styles.container}>
      {displayedBookings.map((booking) => (
        <li key={booking._id}>
          <div className={styles.contentContainer}>
          <h1>Date: {booking.date}</h1>
          <h1>Customer: {booking.customer.name}</h1>
          <h3>Contact info: {booking.contactinfo}</h3>
          {booking.status ? (
            <h3>Status: Confirmed</h3>
            ) : (
              <>
            <h3>Status: Pending </h3>
              <button className={styles.button30} onClick={() => onAccept(booking._id)}>Accept</button>
              {" "}
              <button className={styles.button30} onClick={() => onReject(booking._id)}>Reject</button>
            </>
          )}
          </div>
        </li>
      ))}
    </ul>
    </>
  )
}

export default BookingsList;