const ReviewDetails = (props) => {
  return (
    <>
    {props.reviews.map((review) => 
    <div className="review-container" key={review._id}>
      <p>{review.text}</p>
      <p>Rating:{review.rating}</p>
    </div>)}
    </>
  );
}

export default ReviewDetails;