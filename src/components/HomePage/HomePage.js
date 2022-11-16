import AboutUsSection from '../AboutUsSection/AboutUsSection';
import CarsSection from '../CarsSection/CarsSection';
import ContactUsSection from '../ContactUsSection/ContactUsSection';
import LandingSection from '../LandingSection/LandingSection';
import AirportCabsSection from '../AiportCabsSection/AiportCabsSection';
import NavBar from '../Navbar/NavBar';
import ToursSection from '../ToursSection/ToursSection';
import './HomePage.Styles.scss'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <AboutUsSection />
      <CarsSection />
      <AirportCabsSection />
      <ToursSection />
      <ContactUsSection />
    </div>
  )
}

export default HomePage