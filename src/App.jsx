import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  const [isMainBanner, setMainBanner] = useState(true)

  function handleMainBanner(boolean) {
    setMainBanner(boolean);
  }


  return (
    <Routes>
      <Route path='/portfolio' element={<LandingPage isMainBanner={isMainBanner} handleMainBanner={handleMainBanner} />} />
      <Route path='/portfolio/resume' element={<ResumePage  />} />
      <Route path='/portfolio/contact' element={<ContactPage isMainBanner={isMainBanner} handleMainBanner={handleMainBanner} />} />
    </Routes>
  )
}

export default App
