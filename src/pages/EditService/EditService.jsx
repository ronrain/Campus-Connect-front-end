// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

// css
import styles from './EditService.module.css'


const EditService = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  const [editMode, setEditMode] = useState(false)
  const navigate = useNavigate()

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

console.log(formData.school)
  return (
    <div>
        <form onSubmit={handleSubmit} className={styles.serviceForm}>
          <div className={styles.header}><h1>Edit Service</h1></div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            placeholder=" "
          />
          <label htmlFor="title" className={styles.label}>Title</label>
        </div>
        <div className={styles.inputContainer}>
          <input
            required
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder=" "
          />
          <label className={styles.label}htmlFor="description">Description</label>
        </div>
        <div className={styles.inputContainer}>
          {/* <label className={styles.label}   htmlFor="type">Type</label> */}
          <select
            name="type"
            value={formData.type}
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
          <label className={styles.price} htmlFor="price">Price</label>
          <input
            required
            type="number"
            min={0}
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        {formData.availability.map((availability, index) => (
        <div key={index}>
          <label>Day:</label>
          <input type="text" name="day" value={availability.day} onChange={(e) => handleInputChange(e, index)} required />

          <label>Start Time:</label>
          <input type="time" name="startTime" value={availability.startTime} onChange={(e) => handleInputChange(e, index)} required />

          <label>End Time:</label>
          <input type="time" name="endTime" value={availability.endTime} onChange={(e) => handleInputChange(e, index)} required />
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
          <button type="button" onClick={toggleEditMode}>Cancel</button>
          {" "} 
        </div>
          <button type="submit" onClick={handleSubmit}>Save</button>  
        </form>
    </div>
  )
}

export default EditService