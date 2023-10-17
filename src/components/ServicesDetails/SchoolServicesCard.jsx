import './SchoolServicesCard.css'
import logo from '../../assets/logo.jpg'

const SchoolServicesCard = (props) => {

  return (
    <section className='flex-container'>
    <div className='service-container'>
      <div className="profile-img" style={{backgroundImage: {logo}}}>
      </div>
      <h1 className='name'>
        {props.service.createdBy.name}
      </h1>
      <div className="description">
        {props.service.description}
      </div>
        <div className="social">
          <p>Service Type: {props.service.type}</p>
          <p>Price: {props.service.price}</p>
        </div>


        <button className='card-btn'>Book Me</button>

        {true &&
          <>
            {/* <Link state={props.service} to={`/blogs/${props.service._id}/edit`}>Edit</Link> */}
            <button onClick={() => props.handleDeleteService(props.service._id)}>Delete</button>
          </>
        }

        {/* {props.service.createdBy._id === logedInUser._id &&
          <>
          <button className='card-btn'>Book Me</button>
            <Link state={props.service} to={`/blogs/${props.service._id}/edit`}>Edit</Link>
            <button onClick={() => props.handleDeleteBlog(props.service._id)}>Delete</button>
          </>
        } */}
      <footer className='card-footer'>
        <div className="likes">
          <p>Ratings: 1.5K</p>
        </div>
        <div className="projects">
          <p>Bookings:</p>
        </div>
      </footer>
    </div>
    </section>
  );
}

export default SchoolServicesCard;