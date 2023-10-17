import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewDetails from "../../components/Reviews/ReviewDetails"
import ReviewForm from "../../components/Reviews/ReviewForm"

import * as serviceService from '../../services/serviceService';

const ServicesShow = (props) => {
  const { serviceId } = useParams()
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      const data = await serviceService.show(serviceId)
      setService(data)
    }
    fetchService()
  }, [])


  const handleAddReview = async (reviewFormData) => {
    const newReview = await serviceService.createReview(serviceId, reviewFormData)
    setService({ ...service, reviews: [...service.reviews, newReview] })
  }

  const handleDeleteReview = async (reviewId) => {
    await serviceService.deleteReview(serviceId, reviewId)
    setService({...service, reviews: service.reviews.filter((review) => review._id !== reviewId)})
  }

  if (!service) return <h1>loading</h1>

  return (
    <>
    <h1>{service.title}</h1>
    <h3>Offered by: {service.createdBy.name}</h3>
    <h3>Type Of Service: {service.type}</h3>
    <h3>Description: {service.description}</h3>
    <h4>Price:{service.price}</h4>
    <h4>Availability: {service.availability}</h4>
    <br />
    <br />
    <h2>Reviews</h2>
    <ReviewForm handleAddReview={handleAddReview}/>
    {service.reviews.length ? (<ReviewDetails reviews={service.reviews} user={props.user} handleDeleteReview={handleDeleteReview} serviceId={serviceId}/>) : <p>Be The First To Review</p>}
    </>
  );
}

export default ServicesShow;