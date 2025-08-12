import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UndertrialPrisoner from './pages/UndertrialPrisoner';
import LawyerLegalAid from './pages/LawyerLegalAid';
import CourtStaff from './pages/CourtStaff';
import PrivateRoute from './components/PrivateRoute';
import Signup from './pages/Signup';
import LoginLawyer from './pages/LoginLawyer';
import SignupLawyer from './pages/SignupLawyer';
import LoginCourtStaff from './pages/LoginCourtStaff';
import SignupCourtStaff from './pages/SignupCourtStaff';
import LoginUndertrial from './pages/LoginUndertrial';
import SignupUndertrial from './pages/SignupUndertrial';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/undertrial-prisoner" element={
            <PrivateRoute role="undertrial">
              <UndertrialPrisoner />
            </PrivateRoute>
          } />
          <Route path="/lawyer-legal-aid" element={
            <PrivateRoute role="lawyer">
              <LawyerLegalAid />
            </PrivateRoute>
          } />
          <Route path="/court-staff" element={
            <PrivateRoute role="courtstaff">
              <CourtStaff />
            </PrivateRoute>
          } />
        
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/login-lawyer" element={<LoginLawyer />} />
          <Route path="/signup-lawyer" element={<SignupLawyer />} />
          <Route path="/login-courtstaff" element={<LoginCourtStaff />} />
          <Route path="/signup-courtstaff" element={<SignupCourtStaff />} />
          <Route path="/login-undertrial" element={<LoginUndertrial />} />
          <Route path="/signup-undertrial" element={<SignupUndertrial />} />
        </Routes>
      </div>
    </Router>
  );
}