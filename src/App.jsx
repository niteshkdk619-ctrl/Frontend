import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';

export default function App() {

  return (
    <BrowserRouter>
 <Routes >
  <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<About />} />

    </Routes>
 </BrowserRouter>
  
  )
}