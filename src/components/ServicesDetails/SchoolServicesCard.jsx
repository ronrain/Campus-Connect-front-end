import './SchoolServicesCard.css'

const SchoolServicesCard = () => {
  return (
    <section className='flex-container'>
    <div className='service-container'>
      <div className="profile-img"></div>
      <h1 className='name'>
        Maddie
      </h1>
      <div className="description">
        Maddie is a front end web developer in New York. She has worked in the field for 10 years now. Check out her projects in the links below. She is available for hire as well.
      </div>
      <div className="social">
        <p>Service Type: </p>
      </div>
      <button className='card-btn'>Hire Me</button>
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