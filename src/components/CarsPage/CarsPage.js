import React from 'react'
import BestCarSection from '../BestCarSection/BestCarSection'
import NavBar from '../Navbar/NavBar'
import ContactUsSection from '../ContactUsSection/ContactUsSection'
import './CarPage.Styles.scss'
import CarsList from '../CarsList/CarsList'

const CarsPage = () => {
  return (
    <div className='carspage'>
        <NavBar />
        <BestCarSection />
        <CarsList />
        <ContactUsSection />
    </div>
  )
}

export default CarsPage