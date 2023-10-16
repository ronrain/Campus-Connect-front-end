// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/services`

async function create(serviceFormData, schoolId) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(serviceFormData, schoolId),

    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export { create }