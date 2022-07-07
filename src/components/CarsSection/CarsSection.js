import React from 'react'
import { Link } from 'react-router-dom'
import './CarsSection.Styles.scss'
import Cars from './Cars'
import CarCard from '../CarCard/CarCard'

const CarsSection = () => {
  return (
    <section className='cars-section'>
      <h1 className='heading-secondary'>Book Your Suitable Car</h1>
      <div className='text'>Select a car, click on 'Request A Quote'. Our dealer will contact you immediately.</div>
      <div className='cards-container'>
      {
        Cars.slice(0,3).map(car => <CarCard car={car} />)
      }
      </div>
      <Link to='/cars'><button className='btn btn-primary'>More Cars &#8594;</button></Link>
    </section>
  )
}

export default CarsSection