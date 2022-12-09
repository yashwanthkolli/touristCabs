import React, { useState } from 'react'
import { MdShareLocation } from 'react-icons/md'
import { BsClockHistory } from 'react-icons/bs'
import './AiportCabsSection.Styles.scss'
import AirportDropDialogue from '../AirportDropDialogue/AirportDropDialogue'

const AiportCabsSection = () => {
    const [openDropDialogue, setOpenDropDialogue] = useState(false)
    const [type, setType] = useState('')

    const onClose = () => {
        setOpenDropDialogue(false)
        setType('')
    }

    const onDropClick = () => {
        setType('drop')
        setOpenDropDialogue(true)
    }

    const onDurationClick = () => {
        setType('duration')
        setOpenDropDialogue(true)
    }
    
    return (
        <section className='airport-section'>
            <h1 className='heading-secondary' data-aos="fade-up">Airport Pick and Drop</h1>
            <div className='content' data-aos="fade-up">
                <div className='location-booking part'>
                    <div className='text'>Select a drop location. We will pick you up and drop at the destination within no time.</div>
                    <div className='icon'>
                        <MdShareLocation />
                    </div>
                    <button className='btn-primary' onClick={onDropClick}>Book with Drop Location</button>
                </div>
                <div className='timing-booking part'>
                    <div className='text'>A pick up and drop back and forth the airport for you, be that 6 hours or 8 hours</div>
                    <div className='icon'>
                        <BsClockHistory />
                    </div>
                    <button className='btn-primary' onClick={onDurationClick}>Book with Timing</button>
                </div>
            </div>

            <AirportDropDialogue open={openDropDialogue} handleClose={onClose} typ={type} />
        </section>
    )
}

export default AiportCabsSection