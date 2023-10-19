// npm modules
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"

// css
import styles from './EditService.module.css'

import * as schoolService from "../../services/schoolService";


const EditService = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate()
  const [schools, setSchools] = useState([])

  useEffect(() => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }, [])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const updatedAvailabilities = [...formData.availability]
    updatedAvailabilities[index][name] = value
    setFormData({ ...formData, availability: updatedAvailabilities })
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleUpdateService(formData)
    navigate(`/schools/${formData.school}`)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.serviceForm}>
      <div className={styles.header}>Edit Service</div>
      <div className={styles.inputContainer}>
        <label htmlFor="title" className={styles.label}>Title</label>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        className={styles.editInput}
        onChange={handleChange}
      />
    </div>
    <div className={styles.inputContainer}>
      <label className={styles.label}htmlFor="description">Description</label>
      <input
        required
        type="text"
        name="description"
        value={formData.description}
        className={styles.editInput}
        onChange={handleChange}
      />
    </div>
    <div className={styles.inputContainer}>
      <select
        name="type"
        value={formData.type}
        className={styles.editInput}
        onChange={handleChange}
      >
        <option value="">Select Type</option>
        <option value="Haircut">Haircut</option>
        <option value="Tutoring">Tutoring</option>
        <option value="HandyWork">HandyWork</option>
        <option value="Cooking">Cooking</option>
        <option value="DIY">DIY</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor="price">Price</label>
      <input
        required
        type="number"
        min={0}
        name="price"
        value={formData.price}
        className={styles.editInput}
        onChange={handleChange}
      />
    </div>
    {formData.availability.map((availability, index) => (
    <div key={index}>
      <label className={styles.label}>Day:</label>
      <input type="text" name="day" className={styles.editInput} value={availability.day} onChange={(e) => handleInputChange(e, index)} required />

      <label className={styles.label}>Start Time:</label>
      <input type="time" name="startTime" className={styles.editInput} value={availability.startTime} onChange={(e) => handleInputChange(e, index)} required />

      <label className={styles.label}>End Time:</label>
      <input type="time" name="endTime" className={styles.editInput} value={availability.endTime} onChange={(e) => handleInputChange(e, index)} required />
    </div>
    ))}
    <div className={styles.inputContainer}>
      <select name="schoolId" value={formData.school} onChange={handleChange}>
        <option value="">Select School</option>
        {props.schools.map(school => (
          <option key={school._id} value={school._id}>{school.name}</option>
        ))}
      </select>
    </div>
    <div>
      <button type="button" className={styles.button30} onClick={toggleEditMode}>Cancel</button>
      {" "} 
    </div>
      <button type="submit" className={styles.button30} onClick={handleSubmit}>Save</button>  
    </form>
  )
}

export default EditService