
import Ratings from "./Ratings";

const ReviewDetails = (props) => {


  return (
    <>
    {props.reviews.map((review) => 
    <div className="review-container" key={review._id}>
      <p>{review.text}</p>
      <Ratings review={review} />
      {review.author === props.user.profile && 
      <button onClick={() => props.handleDeleteReview(review._id)}>delete</button>}
    </div>)}
    </>
  );
}

export default ReviewDetails;