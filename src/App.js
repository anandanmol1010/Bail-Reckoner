import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UndertrialPrisoner from './pages/UndertrialPrisoner';
import LawyerLegalAid from './pages/LawyerLegalAid';
import CourtStaff from './pages/CourtStaff';
import Login from './pages/Login';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/undertrial-prisoner" element={<UndertrialPrisoner />} />
          <Route path="/lawyer-legal-aid" element={<LawyerLegalAid />} />
          <Route path="/court-staff" element={<CourtStaff />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}