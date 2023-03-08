import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/ResumePage/ResumePage';

function App() {
  const [isMainBanner, setMainBanner] = useState(true)

  function handleMainBanner(boolean) {
    setMainBanner(boolean);
  }


  return (
    <Routes>
      <Route path='/portfolio' element={<LandingPage isMainBanner={isMainBanner} handleMainBanner={handleMainBanner} />} />
      <Route path='/portfolio/resume' element={<ResumePage  />} />
    </Routes>
  )
}

export default App
