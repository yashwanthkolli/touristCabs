import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { PrimaryButton } from '../Buttons/Buttons';
import './LandingSection.Styles.scss'

const LandingSection = () => {
  return (
    <section className='homepage'>
      <h1 data-aos="fade-up" className='heading-secondary'>With RT Tours and Travels</h1>
      <Typewriter
        data-aos="fade-up"
        data-aos-delay="500" 
        options={{
            strings: ['Explore', 'Travel', 'Discover'],
            autoStart: true,
            loop: true,
            wrapperClassName: 'heading-primary',
            cursorClassName: 'heading-cursor',
            pauseFor: 2000,
            delay: 200
        }}
      />
      <Link data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" to='/#cars-section' className='btn-container'>
        <PrimaryButton label='Rent Now' />
      </Link>
    </section>
  )
}

export default LandingSection