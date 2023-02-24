import {Route, Routes, Navigate} from 'react-router-dom';
import './index.css';

import LandingPage from './pages/LandingPage/LandingPage';
import ResumePage from './pages/LandingPage/ResumePage/ResumePage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <Routes>
      <Route path='/portfolio' element={<LandingPage />} />
      <Route path='/portfolio/resume' element={<ResumePage />} />
      <Route path='/portfolio/contact' element={<ContactPage />} />
    </Routes>
  )
}

export default App
