import React from 'react'
import { BiTime, BiCar, BiUser } from 'react-icons/bi'
import './TourCard.Styles.scss'

const TourCard = ({tour, onClick, setPlace}) => {
    const handleClick = () => {
        setPlace(tour.place)
        onClick()
    }

    return (
        <div className='tour-card' onClick={handleClick}>
            <div className='bg-image'>
                <img src={tour.img} alt={tour.place} />
            </div>
            <div className='details'>
                <h1 className='name'>{tour.place}</h1>
                <div className='underline'></div>
                <div className='other-details'>
                    <span className='detail'><BiTime className='icon' />{tour.duration} days</span>
                    <span className='detail'><BiUser className='icon' />{tour.people}</span>
                    <span className='detail'><BiCar className='icon' />{tour.car}</span>
                </div>
            </div>

            <ul className='visiting-places'>
                {
                    tour.visitingPlaces.map(place => <li>{place}</li>)
                }
            </ul>

            <div className='price'>₹ {tour.cost}</div>
        </div>
    )
}

export default TourCard