// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/bookings`

async function index() {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function create(bookingFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingFormData),

    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function updateStatus(bookingId, newStatus) {
  try {
    const res = await fetch(`${BASE_URL}/${bookingId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({status: newStatus}),
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteBooking(bookingId) {
  try {
    const res = await fetch(`${BASE_URL}/${bookingId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {index, create, updateStatus, deleteBooking} 