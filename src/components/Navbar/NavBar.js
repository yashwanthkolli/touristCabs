import React, { useState, useEffect } from 'react'
import logo from '../../assets/images/logo.png'
import logo2 from '../../assets/images/logo2.png'
import { Link, useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'
import './NavBar.Styles.scss'

const NavBar = () => {
  const location = useLocation()
  const [offset, setOffset] = useState(false);

  useEffect(() => {
    if (location.hash) {
        scrollTo(location.hash.slice(1))
    } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
}, [location])

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset > 200);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (section) => {
    scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        offset: -100,
        smooth: 'easeInOutQuart'
    })
  }

  return (
    <nav data-aos-duration="1000" data-aos-delay="500" data-aos='fade-down' className={offset || location.pathname!=='/' ? 'navbar-white' : 'navbar'}>
      <div className='nav-container'>
        <div className='logo-container'>
          <img src={offset || location.pathname!=='/' ? logo2 : logo} alt='Logo' />
        </div>
        <div className='nav-links'>
          <Link className='nav-option' to='/'>Home</Link>
          <Link className='nav-option' to='/#about-us-section'>About Us</Link>
          <Link className='nav-option' to='/cars'>Cars</Link>
          <Link className='nav-option' to={location.pathname === '/' ? '/#contact-us-section' : '/cars/#contact-us-section'}>Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar