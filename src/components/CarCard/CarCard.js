import React, { useState } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { GiComputerFan, GiGears, GiGasPump } from 'react-icons/gi'
import DialogueBox from '../DialogueBox/DialogueBox'
import './CarCard.Styles.scss'

const CarCard = ({car}) => {
  const [openDialogue, setOpenDialogue] = useState(false)
  const [selectedCar, setSelectedCar] = useState({})

  const onClose = () => {
    setOpenDialogue(false)
    setSelectedCar({})
  }

  const handleClick = () => {
    setOpenDialogue(true)
    setSelectedCar(car)
  }

  return(
    <div data-aos="fade-up" className='card'>
      <div className='card-title'>{car.name}</div>
      <div className='image-container'>
        <img src={car.image} alt='CarImage' />
      </div>
      <div className='card-text'>{`₹${car.pricePerDay}/Day`}</div>
      <div className='card-details'>
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
      <button className='rent-btn' onClick={handleClick}>Rent</button>

      
      <DialogueBox open={openDialogue} handleClose={onClose} selectedCar={selectedCar} />
    </div>
  )
}

export default CarCard