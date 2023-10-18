import { useState } from "react";

import Ratings from "./Ratings";

import * as serviceService from '../../services/serviceService'

const ReviewCard = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    text: props.review.text,
    rating: props.review.rating
  })

  const [rating, setRating] = useState(props.review.rating)

  
  const handleRatingClick = (selectedRating) => {
      setRating(selectedRating)
      setFormData({...formData, rating: selectedRating })
    };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const serviceId = props.serviceId
  const reviewId = props.review._id
  const stars = [1, 2, 3, 4, 5]

  const handleSubmit = async (e) => {
    e.preventDefault()
    await serviceService.updateReview(serviceId, reviewId, formData )
    setFormData({text: '', rating: 0})
    setEditMode(false)
  }


  const toggleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <>
    {editMode ? ( <form onSubmit={handleSubmit}>
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
        type="text" 
        name="text" 
        id="text-input"
        value={formData.text}
        onChange={handleChange}
      />
      <button 
        className="icon-btn" 
        type="submit"
      >
        Save
      </button>
      <button 
        type="button" 
        onClick={toggleEditMode}
      >
        Cancel
      </button>
    </form>) : (<div className="review-container" key={props.review._id}>
      <p>{props.review.text}</p>
      <Ratings review={props.review} />
      {props.review.author === props.user.profile && 
        <div>
          <button 
            onClick={() => props.handleDeleteReview(props.review._id)}
          >
            Delete
          </button>
          <button 
            onClick={toggleEditMode}
          >
            Edit
          </button>  
        </div>}
    </div>) }

    </>
  );
}

export default ReviewCard;