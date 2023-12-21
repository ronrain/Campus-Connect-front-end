import ReviewCard from "../ReviewCard/ReviewCard"

const ReviewDetails = (props) => {

  return (
    <>
    {props.reviews.map((review) => <ReviewCard key={review._id} review={review} user={props.user} serviceId={props.serviceId} handleDeleteReview={props.handleDeleteReview}/>)}
    </>
  )
}

export default ReviewDetails