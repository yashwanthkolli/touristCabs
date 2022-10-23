import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import CarsPage from './components/CarsPage/CarsPage';
import ToursPage from './components/ToursPage/ToursPage';

function App() {
  useEffect(() => {
    AOS.init();
    document.addEventListener("touchstart", function() {}, true)
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact  path="/" element={<HomePage />} />
        <Route exact path="/cars" element={<CarsPage />} />
        <Route exact path="/tours/:tourName" element={<ToursPage />} />
      </Routes>
    </div>
  );
}

export default App;
