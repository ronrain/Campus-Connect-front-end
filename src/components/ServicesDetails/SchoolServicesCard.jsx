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