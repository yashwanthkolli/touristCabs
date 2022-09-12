import React, { useState } from 'react'
import { FiMapPin } from 'react-icons/fi';
import TourCard from '../TourCard/TourCard';
import './ToursSection.Styles.scss'
import tours from './ToursDetails';
import { Link } from 'react-router-dom';
import TourDialogueBox from '../TourDialogueBox/TourDialogueBox';

const ToursSection = () => {
    const [openDialogue, setOpenDialogue] = useState(false)
    const [selectedTour, setSelectedTour] = useState('')

    const onClose = () => {
        setOpenDialogue(false)
    }
    
    const handlePopularPlaces = () => {
        setOpenDialogue(true)
    }

    const handleOtherPlaces = (e) => {
        setOpenDialogue(true)
        setSelectedTour(e.target.innerText)
    }

    return (
        <section className='tours-section'>
            <h1 className='heading-secondary' data-aos="fade-up">Popular Tours</h1>
            <div className='content' data-aos="fade-up">
                <div className='other-tours'>
                    <p className='text'>
                        We provide you with interesting and exciting tours to different parts of the Southern India. 
                        Contact us for visiting any other South Indian place.
                    </p>
                    <div className='places-list'>
                        <span className='place' onClick={handleOtherPlaces}><FiMapPin className='icon' />Ooty/Coonore</span>
                        <span className='place' onClick={handleOtherPlaces}><FiMapPin className='icon' />Wayanad</span>
                        <span className='place' onClick={handleOtherPlaces}><FiMapPin className='icon' />Coorg</span>
                        <span className='place' onClick={handleOtherPlaces}><FiMapPin className='icon' />Munnar</span>
                        <span className='place' onClick={handleOtherPlaces}><FiMapPin className='icon' />Mysore</span>
                    </div>
                    <Link to='/#contact-us-section'><button data-aos="fade-up" className='btn btn-primary'>Contact Us</button></Link>
                </div>
                <div className='popular-tours'>
                    <TourCard tour={tours[0]} onClick={handlePopularPlaces} setPlace={setSelectedTour} />
                    <TourCard tour={tours[1]} onClick={handlePopularPlaces} setPlace={setSelectedTour} />
                </div>
            </div>

            <TourDialogueBox open={openDialogue} handleClose={onClose} selectedTour={selectedTour} />
        </section>
    )
}

export default ToursSection