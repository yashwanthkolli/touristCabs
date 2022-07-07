import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import CarsPage from './components/CarsPage/CarsPage';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route exact  path="/" element={<HomePage />} />
        <Route exact path="/cars" element={<CarsPage />} />
      </Routes>
    </div>
  );
}

export default App;
