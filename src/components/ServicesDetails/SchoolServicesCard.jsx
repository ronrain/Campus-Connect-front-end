import './SchoolServicesCard.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const SchoolServicesCard = (props) => {
  const service = props.service
  return (
    <section className='flex-container'>
    <div className='service-container'>
      <div className="profile-img" style={{backgroundImage: {logo}}}>
      </div>
      <h1 className='name'>
        {service.createdBy.name}
      </h1>
      <div className="description">
        {service.description}
      </div>
      <div className="social">
        <p>Type: {service.type}</p>
        <p>Price: {service.price}</p>
      </div>
      <button className='card-btn'><Link to={`/service/${service._id}`}>Book Me</Link></button>
        {service.createdBy._id &&
          <>
            {/* <Link state={props.service} to={`/blogs/${props.service._id}/edit`}>Edit</Link> */}
            <button onClick={() => props.handleDeleteService(props.service._id)}>Delete</button>
          </>
        }
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