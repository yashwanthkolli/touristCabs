import React from 'react'
import './CarsList.Styles.scss'
import CarCard from '../CarCard/CarCard'
import Cars from '../CarsSection/Cars'

const CarsList = () => {
  return (
    <div className='car-list-section'>
        <div className='cards-container'>
            {
                Cars.map(car => <CarCard car={car} />)
            }
        </div>
    </div>
  )
}

export default CarsList