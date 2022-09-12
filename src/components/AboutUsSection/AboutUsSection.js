import React from 'react'
import './AboutUs.Styles.scss'
import { AiOutlineThunderbolt } from 'react-icons/ai'
import { MdMoney } from 'react-icons/md'
import { CgSmileMouthOpen } from 'react-icons/cg'

const AboutUsSection = () => {
  return (
    <section className='about-us-section'>
      <h1 className='heading-secondary' data-aos="fade-up">Why Choose Us?</h1>
      <div className='cards-container'>
        <div className='about-us-card card-1' data-aos="fade-up">
          <div className='card-icon'>
            <AiOutlineThunderbolt />
          </div>
          <div className='card-title'>Fast and easy booking</div>
          <div className='card-text'>Follow the easy procedure to book a car online. We will reach you in no time.</div>
        </div>
        <div className='about-us-card card-2' data-aos="fade-up">
          <div className='card-icon'>
            <MdMoney />
          </div>
          <div className='card-title'>Value for money</div>
          <div className='card-text'>We will make it as easy as possible for them to get the best deal and price for whatever they need.</div>
        </div>
        <div className='about-us-card card-3' data-aos="fade-up">
          <div className='card-icon'>
            <CgSmileMouthOpen />
          </div>
          <div className='card-title'>Easier interactions for clients</div>
          <div className='card-text'>Choose from a versatile section of cars. We have the expertise to help you find your perfect car.</div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection
