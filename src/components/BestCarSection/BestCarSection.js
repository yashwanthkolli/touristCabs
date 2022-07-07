import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiComputerFan, GiGears, GiGasPump } from 'react-icons/gi'
import './BestCarSection.Styles.scss'
import Cars from '../CarsSection/Cars'

const BestCarSection = () => {
  const car = Cars[0]
  return (
    <div className='best-car-section'>
      <div className='content'>
          <div className='car-info'>
            <h1 className='title'>{car.name}</h1>
            <div className='price'>Rs. {car.pricePerDay}/Day</div>
            <div className='details-list'>
                <div className='detail'>
                <div className='icon'>
                  <FaRegUserCircle />
                </div>
                <div className='text'>{`${car.noOfSeats} Seats`}</div>
              </div>
              <div className='detail'>
                <div className='icon'>
                  <GiComputerFan />
                </div>
                <div className='text'>{car.type}</div>
              </div>
              <div className='detail'>
                <div className='icon'>
                  <GiGears />
                </div>
                <div className='text'>{car.transition}</div>
              </div>
              <div className='detail'>
                <div className='icon'>
                  <GiGasPump />
                </div>
                <div className='text'>{car.fuel}</div>
              </div>
            </div>
          </div>
          <div className='image-container'>
              <img src={car.image} alt='CarImage' />
          </div>
          <button className='btn btn-primary'>Rent {car.name}</button>
        </div>
    </div>
  )
}

export default BestCarSection