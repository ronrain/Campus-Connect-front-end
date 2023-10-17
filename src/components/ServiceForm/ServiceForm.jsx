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
    availability: '',
    schoolId: 0,
  })
  
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddService(formData)
  }

  return (
    <main>
      <Sidebar />
        <div className={styles.container}>
      <form className={styles.serviceForm}>
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
        {/* <label className={styles.label} htmlFor="type">Type</label> */}
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
        <label htmlFor="price">Price</label>
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
        <button className={styles.button30} type="submit" onClick={handleSubmit}>Submit</button>
      </form>
            </div>
    </main>
  );
}

export default NewService;