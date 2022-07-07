import React, { useState } from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
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
    axios.post(`${process.env.REACT_APP_API}/subscribe/register`, { email })
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
      <div className='contacts'>
          <div className='contact'>
            <Link to='/' className='contact-icon'>
              <FiPhoneCall />
            </Link>
            <div className='contact-detail'>
              <span>Call Us</span>
              <span>+91 999999999</span>
            </div>
          </div>
          <div className='contact'>
            <Link to='/' className='contact-icon'>
              <FiMail />
            </Link>
            <div className='contact-detail'>
              <span>Write To Us</span>
              <span>touristCabs@gmail.com</span>
            </div>
          </div>
          <div className='contact'>
            <Link to='/' className='contact-icon'>
              <FiMapPin />
            </Link>
            <div className='contact-detail'>
              <span>Opp BusStand, Majestic, </span>
              <span>Banglore- 583121</span>
            </div>
          </div>
      </div>
      <div className='details'>
        <div className='company-text'>
          <div className='logo'>
            <img src={logo} alt='logo' />
          </div>
          <div className='text'>
            Why stay at home when you can travel the world? You can reserve the car as long as you wish.
            Your freedom at you fingertips.
          </div>
        </div>
        <div className='subscribe'>
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
        Made to Perfection by <span><Link to='/'>Yashwanth Kolli</Link></span>
      </div>
    </section>
  )
}

export default ContactUsSection