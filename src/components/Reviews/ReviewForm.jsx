import { useState } from "react";

import Icon  from "../Icon/icon";
import './ReviewForm.css'

const ReviewForm = (props) => {
  const [formData, setFormData] = useState({ 
    text: '' ,
    rating: 1
  })

  const [rating, setRating] = useState(0);

  
  const handleRatingClick = (selectedRating) => {
      setRating(selectedRating)
      setFormData({...formData, rating: selectedRating })
    }

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  
  const stars = [1, 2, 3, 4, 5]
  
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleAddReview(formData)
    setFormData({text: '', rating: 0})
    setRating(0)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ fontSize: '2rem' }}>
        {stars.map((star) => (
          <span
            key={star}
            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
            onClick={() => handleRatingClick(star)}
          >
            ★
          </span>
        ))}
      </div>
      <textarea
        required
        rows={4}
        cols={40}
        type="text" 
        name="text" 
        id="text-input"
        value={formData.text}
        placeholder="Add a review"
        onChange={handleChange}
      />
      <button 
        className="icon-btn" 
        type="submit"
      >
        <Icon category="Create" />
      </button>
    </form>
  )
}

export default ReviewForm;