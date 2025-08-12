import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const loc = useLocation();
  return (
    <nav className="nav">
      <div className="nav-left">
        <Link to="/" className="brand">⚖️ Bail Bridge</Link>
      </div>
      <div className="nav-right">
        <Link className={`nav-link ${loc.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
        <Link className={`nav-link ${loc.pathname === '/login' ? 'active' : ''}`} to="/login">Login</Link>
        <Link className={`nav-link ${loc.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
      </div>
    </nav>
  );
}