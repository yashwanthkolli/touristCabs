import AboutUsSection from '../AboutUsSection/AboutUsSection';
import CarsSection from '../CarsSection/CarsSection';
import ContactUsSection from '../ContactUsSection/ContactUsSection';
import LandingSection from '../LandingSection/LandingSection';
import NavBar from '../Navbar/NavBar';
import './HomePage.Styles.scss'

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <LandingSection />
      <AboutUsSection />
      <CarsSection />
      <ContactUsSection />
    </div>
  )
}

export default HomePage