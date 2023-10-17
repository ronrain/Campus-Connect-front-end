const ReviewDetails = (props) => {
  return (
    <>
    {props.reviews.map((review) => <p>{review.text}</p>  )}
    </>
  );
}
 
export default ReviewDetails;