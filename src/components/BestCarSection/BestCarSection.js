import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiComputerFan } from 'react-icons/gi'
import DialogueBox from '../DialogueBox/DialogueBox'
import './BestCarSection.Styles.scss'
import Cars from '../CarsSection/Cars'

const BestCarSection = () => {
  const car = Cars[0]

  const [openDialogue, setOpenDialogue] = useState(false)

  const onClose = () => {
    setOpenDialogue(false)
  }

  const handleClick = () => {
    setOpenDialogue(true)
  }

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
            
          </div>
        </div>
        <button onClick={handleClick} className='btn btn-primary'>Rent {car.name}</button>
        <div className='image-container'>
            <img src={car.image} alt='CarImage' />
        </div>
      </div>
        
      <DialogueBox open={openDialogue} handleClose={onClose} selectedCar={car} />
    </div>
  )
}

export default BestCarSection