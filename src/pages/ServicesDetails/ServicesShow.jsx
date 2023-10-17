import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ReviewDetails from "../../components/Reviews/ReviewDetails"
import ReviewForm from "../../components/Reviews/ReviewForm"

import * as serviceService from '../../services/serviceService';

import styles from './ServiceShow.module.css'

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
    <div className={styles.container}> 
    <div className={styles.contentContainer}>
    <div className={styles.title}>
      <h1>{service.title}</h1>
    </div>
    <div className={styles.content}>
      <h3>Offered by: {service.createdBy.name}</h3>
      <h3>Type Of Service: {service.type}</h3>
      <h3>Description: {service.description}</h3>
      <h4>Price:{service.price}</h4>
      <h4>Availability: {service.availability}</h4>
    </div>
    </div>
    <div className={styles.review}>
    <div className={styles.titleReview}>
    <h2>Reviews</h2>
    </div>
    <div className={styles.reviewForm}>
    <ReviewForm handleAddReview={handleAddReview}/>
    {service.reviews.length 
    ? (<ReviewDetails reviews={service.reviews} user={props.user} handleDeleteReview={handleDeleteReview}/>) 
    : <p className={styles.reviewConditional}>Be The First To Review</p>}
    </div>
    </div>
    </div>
    </>
  );
}

export default ServicesShow;