const Ratings = (props) => {

  const stars = [1,2,3,4,5]

  return (
    <div style={{ fontSize: '2rem' }}>
    {stars.map((star) => (
      <span
        key={star}
        style={{ cursor: 'pointer', color: star <= props.review.rating ? 'gold' : 'gray' }}
      >
        ★
      </span>
    ))}
  </div>
  )
}

export default Ratings