import React, { useState } from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './ContactUsSection.Styles.scss';
import logo from '../../assets/images/logo.png'
import axios from 'axios';

const ContactUsSection = () => {
  const [email, setEmail] = useState('')
  const onChange = (e) => {
    setEmail(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const id = toast.loading("Please wait...")
    axios.post(`https://rttoursandtravels.com/5000/subscribe/register`, { email })
    .then(async (res) => {
      toast.update(id, { 
        render: "Subscribed", 
        type: "success", 
        isLoading: false,
        icon: true,
        autoClose: true
      });
      setEmail('')
    })
    .catch((err) => {
      toast.update(id, { 
        render: "Error! Please try later", 
        type: "error", 
        isLoading: false, 
        icon: true, 
        autoClose: true
      });
    })
  }

  return (
    <section className='contact-us-section'>
      <div className='contacts' data-aos="fade-up">
          <div className='contact'>
            <a href='tel:8792451980' className='contact-icon'>
              <FiPhoneCall />
            </a>
            <div className='contact-detail'>
              <span>Call Us</span>
              <span>+91 8792451980</span>
            </div>
          </div>
          <div className='contact'>
            <a href='mailto:rt.toursandtravels.blr@gmail.com' className='contact-icon'>
              <FiMail />
            </a>
            <div className='contact-detail'>
              <span>Write To Us</span>
              <span>rt.toursandtravels.blr@gmail.com</span>
            </div>
          </div>
          <div className='contact'>
            <a href='https://goo.gl/maps/K7PPk7BaY6g7fKcm7' target='_blanck' rel='noreferrer' className='contact-icon'>
              <FiMapPin />
            </a>
            <div className='contact-detail'>
              <span>#7, GreenLand Layout, Bellahalli </span>
              <span>Village, Yelahanka, Banglore- 560064</span>
            </div>
          </div>
      </div>
      <div className='details'>
        <div className='company-text' data-aos="fade-up">
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='text'>
            Why stay at home when you can travel the world? You can reserve the car as long as you wish.
            Travel hassle free.
          </div>
        </div>
        <div className='subscribe' data-aos="fade-up">
          <h2 className='subscribe-heading'>Subscribe</h2>
          <p className='subscribe-text'>Sign up to get regular updates about our travels and tours</p>
          <form onSubmit={onSubmit} className='subscribe-input'>
            <input 
              type='email'
              placeholder='Email Address' 
              value={email} 
              onChange={onChange}
              required
            />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className='footer'>
        Made to Perfection by <span><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/'>Yashwanth Kolli</a></span>
      </div>
    </section>
  )
}

export default ContactUsSection