import { useState } from "react";

const NewService = (props) => {
  const [formData, setFormData] = useState({
    type: '', 
    description: '',
    price: 0,
    availability: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

  }

  return (
    <main>
      <form action="">
        <label htmlFor="type">Type</label>
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
          <option value="Other">Other</option>
        </select>
        <label htmlFor="description">Description</label>
        <input
          required
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="price">Price</label>
        <input
          required
          type="number"
          min={0}
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
        <label htmlFor="availability">Availability</label>
        <input
          required
          type="text"
          name="availability"
          value={formData.availability}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </main>
  );
}

export default NewService;