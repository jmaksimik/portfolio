import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  const [isLandingPage, setLandingPage] = useState(true)

  function handleLandingPage(boolean) {
    setLandingPage(boolean);
  }


  return (
    <Routes>
      <Route path='/portfolio' element={<LandingPage isLandingPage={isLandingPage} handleLandingPage={handleLandingPage} />} />
      <Route path='/portfolio/resume' element={<ResumePage isLandingPage={isLandingPage} handleLandingPage={handleLandingPage}  />} />
      <Route path='/portfolio/contact' element={<ContactPage isLandingPage={isLandingPage} handleLandingPage={handleLandingPage} />} />
    </Routes>
  )
}

export default App
