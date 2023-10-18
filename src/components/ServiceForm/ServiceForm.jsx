import { useState } from "react";
import { useParams } from "react-router-dom";

import Sidebar from "../SideBar/SideBar";

import styles from "./ServiceForm.module.css";

const NewService = (props) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: '', 
    price: 0,
    availability: [
      { day: '', startTime: '', endTime: ''}
    ],
    schoolId: 0,
  })

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedAvailabilities = [...formData.availability];
    updatedAvailabilities[index][name] = value;
    setFormData({ ...formData, availability: updatedAvailabilities });
  };
  
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
    });
  };

  return (
    <main>
      <Sidebar />
      <div className={styles.container}>
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
        {/* <div className={styles.inputContainer}>
          <input
            required
            type="text"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            placeholder=" "
          />
          <label className={styles.label} htmlFor="availability">Availability</label>
        </div> */}
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
        <button type="button" onClick={addAvailability}>Add Availability</button>
        <div className={styles.inputContainer}>
          <select name="schoolId" value={formData.school} onChange={handleChange}>
            <option value="">Select School</option>
            {props.schools.map(school => (
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