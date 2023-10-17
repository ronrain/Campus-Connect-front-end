// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/services`

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

async function show(serviceId) {
  try {
    const res = await fetch(`${BASE_URL}/${serviceId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function create(serviceFormData) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(serviceFormData),

    })
    return res.json()
  } catch (error) {
    console.log(error)
  }

}

async function createReview(serviceId, reviewFormData) {
  try {
    const res = await fetch(`${BASE_URL}/${serviceId}/reviews`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reviewFormData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteReview(serviceId, reviewId) {
  try {
    const res = await fetch(`${BASE_URL}/${serviceId}/reviews/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

async function deleteService(serviceId) {
  try {
    const res = await fetch(`${BASE_URL}/${serviceId}`, {
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
export { create, index, show, createReview, deleteService, deleteReview}

