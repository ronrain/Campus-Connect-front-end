import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import * as bookingService from '../../../services/bookingService'

import styles from './BookingForm.module.css'

const BookingForm = () => {
  
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedStartTime, setSelectedStartTime] = useState('')
  const [selectedEndTime, setSelectedEndTime] = useState('')
  const [availableTimeSlots, setAvailableTimeSlots] = useState([])
  const {state} = useLocation()
  const availabilityData = state.service.availability
  const [formData, setFormData] = useState({
    date: '',
    request:'',
    contactinfo:'',
    serviceId: state.service._id
  })

  const navigate = useNavigate()


  useEffect(() => {
    const timeSlots = generateTimeSlots(selectedStartTime, selectedEndTime, 60)
    setAvailableTimeSlots(timeSlots)
  }, [selectedStartTime, selectedEndTime, selectedDate])

  const handleDateChange = (event) => {
    const selectedDate = event.target.value
    setSelectedDate(selectedDate)
    const selectedAvailability = availabilityData.find(item => item.day === selectedDate)
  
    if (selectedAvailability) {
      setSelectedStartTime(selectedAvailability.startTime)
      setSelectedEndTime(selectedAvailability.endTime)
      const timeSlots = generateTimeSlots(selectedAvailability.startTime, selectedAvailability.endTime, 60)
      setAvailableTimeSlots(timeSlots)
      const combinedDateTime = `${selectedDate} ${selectedAvailability.startTime}`
      setFormData(prevData => ({
        ...prevData,
        date: combinedDateTime,
      }))
    } else {
      setSelectedStartTime('')
      setSelectedEndTime('')
      setAvailableTimeSlots([])
      setFormData(prevData => ({
        ...prevData,
        date: '',
      }))
    }
  }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    if (evt.target.name === 'selectedTime') {
      const combinedDateTime = `${selectedDate} ${evt.target.value}`;
      setFormData((prevData) => ({
        ...prevData,
        date: combinedDateTime,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    bookingService.create(formData)
    navigate(`/service/${formData.serviceId}`)
  }

  const generateTimeSlots = (startTime, endTime, interval = 60) => {
    const timeSlots = []
    const start = new Date(`2000-01-01T${startTime}`)
    const end = new Date(`2000-01-01T${endTime}`)
    const intervalMilliseconds = interval * 60 * 1000
    let currentTime = start
    while (currentTime <= end) {
      const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      timeSlots.push(formattedTime)
      currentTime = new Date(currentTime.getTime() + intervalMilliseconds)
    }
  
    return timeSlots
  }

  const uniqueDates = Array.from(new Set(availabilityData.map(item => item.day)))

  const handleReturn = () => {
    navigate(`/service/${state.service._id}`)
  }

  return (
    <>
    <div className={styles.buttonContainer}>
    <button className={styles.button30}onClick={handleReturn}>Return</button>
    </div>
      <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Select Date:</label>
      <select 
        required
        className={styles.select} 
        name="selectedDate" 
        value={selectedDate} 
        onChange={handleDateChange}
      >
        <option value="">Select a date</option>
        {uniqueDates.map((day, index) => (
          <option key={index} value={day}>
            {day}
          </option>
        ))}
      </select>

      <label className={styles.label}>Select Time:</label>
      <select 
        required
        className={styles.select} 
        name="selectedTime" 
        onChange={handleChange}
      >
        <option value="">Select a time</option>
        {availableTimeSlots.map((timeSlot, index) => (
            <option key={index} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
      </select>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="">Describe Your Request</label>
        <input
          required
          type="text" 
          name='request'
          className={styles.inputField}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor="">Your Contact Info</label>
        <input
          required
          type="text" 
          name='contactinfo'
          className={styles.inputField}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
      <button className={styles.button30} type="submit">Submit</button>
    </form>
    </>
  );
}

export default BookingForm


