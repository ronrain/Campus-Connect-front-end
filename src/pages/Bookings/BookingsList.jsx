import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import * as bookingService from '../../services/bookingService'

const BookingsList = (props) => {
  const [displayedBookings, setDisplayedBookings] = useState([])

  useEffect(() => {
    const fetchAllBookings = async () => {
      const data = await bookingService.index()
      console.log(data)
      const newData = data.filter(booking => booking.service.createdBy === props.user.profile )
      console.log(newData)
      setDisplayedBookings(newData)
    }
    fetchAllBookings()
  }, [])

  const onAccept = async (bookingId) => {
    await bookingService.updateStatus(bookingId, true)
  }

  const onReject = (bookingId) => {

  }


  return (
    <>
      <ul>
      {displayedBookings.map((booking) => (
        <li key={booking._id}>
          <h1>Date: {booking.date}</h1>
          <h1>Customer: {booking.customer.name}</h1>
          {booking.status ? (
            <h3>Status: Confirmed</h3>
          ) : (
            <>
            <h3>Status: Pending </h3>
              <button onClick={() => onAccept(booking._id)}>Accept</button>
              <button onClick={() => onReject(booking._id)}>Reject</button>
            </>
          )}
        </li>
      ))}
    </ul>
    </>
  );
}

export default BookingsList;