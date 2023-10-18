// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// css
import styles from './EditService.module.css'

const EditService = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] = useState(state)
  const [editMode, setEditMode] = useState(false)

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value})
  }

  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <div>
        <form className={styles.serviceForm}>
          <div className={styles.header}><h1>Create Service</h1></div>
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
        <div className={styles.inputContainer}>
          <input
            required
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder=" "
          />
          <label className={styles.label} htmlFor="availability">Availability</label>
        </div>
        <div className={styles.inputContainer}>
          <select name="schoolId" value={formData.school} onChange={handleChange}>
            <option value="">Select School</option>
            {props.schools.map(school => (
              <option key={school._id} value={school._id}>{school.name}</option>
            ))}
          </select>
        </div>
        <div>
          <button onClick={toggleEditMode}>Edit</button>  
        </div>
        </form>
    </div>
  )
}

export default EditService