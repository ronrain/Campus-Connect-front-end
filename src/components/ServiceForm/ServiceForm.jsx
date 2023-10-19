import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../SideBar/SideBar";

import * as schoolService from "../../services/schoolService";

import styles from "./ServiceForm.module.css";

const NewService = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '', 
    price: 0,
    contactinfo: '',
    availability: [
      { day: '', startTime: '', endTime: ''}
    ],
    schoolId: 0,
  })
  const [schools, setSchools] = useState([])

  useEffect(() => {
    const fetchSchools = async () => {
      const schools = await schoolService.getAllSchools()
      setSchools(schools);
    }
    fetchSchools()
  }, [])

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const updatedAvailabilities = [...formData.availability]
    updatedAvailabilities[index][name] = value
    setFormData({ ...formData, availability: updatedAvailabilities })
  }
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddService(formData)
  }

  const addAvailability = () => {
    setFormData({
      ...formData,
      availability: [...formData.availability, { day: '', startTime: '', endTime: '' }]
    })
  }

  return (
    <main>
      <Sidebar />
      <div className={styles.container}>
        <form className={styles.serviceForm}>
          <div className={styles.header}>Create Service</div>
        <div className={styles.inputContainer}>
          <input
            required
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
          <label htmlFor="description" className={styles.label}>Description</label>
        </div>
        <div className={styles.inputContainer}>
          <select
            required
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
            name="contactinfo"
            value={formData.contactinfo}
            placeholder=" "
            onChange={handleChange}
          />
          <label className={styles.label}  htmlFor="contactinfo">Contact Info </label>
        </div>
        {formData.availability.map((availability, index) => (
        <div key={index}>
          <div className={styles.inputContainer}>

          <input 
            type="text" 
            name="day" 
            placeholder=" " 
            value={availability.day} 
            onChange={(e) => handleInputChange(e, index)} 
            required 
          />
          <label className={styles.label}>Day</label>
          </div>
          <label>Start Time:</label>
          <input 
            type="time" 
            name="startTime" 
            value={availability.startTime} 
            onChange={(e) => handleInputChange(e, index)} 
            required 
          />

          <label>End Time:</label>
          <input 
            type="time" 
            name="endTime" 
            value={availability.endTime} 
            onChange={(e) => handleInputChange(e, index)} 
            required 
          />
        </div>
      ))}
        <button className={styles.button30} type="button" onClick={addAvailability}>Add Availability</button>
        <div className={styles.inputContainer}>
          <select 
            required
            name="schoolId" 
            value={formData.school} 
            onChange={handleChange}
          >
            <option value="">Select School</option>
            {schools.map(school => (
              <option key={school._id} value={school._id}>{school.name}</option>
            ))}
          </select>
        </div>
          <button className={styles.button30} type="submit"   onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </main>
  );
}

export default NewService;