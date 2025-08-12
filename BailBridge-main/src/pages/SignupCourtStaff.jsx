import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function SignupCourtStaff() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', { email, password, role: 'courtstaff' });
      alert('Signup successful! Please login.');
      nav('/login-courtstaff');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error);
      } else {
        alert('Signup failed');
      }
    }
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="login-page">
      <div className="login-card">
        <h2>Court Staff Signup</h2>
        <form onSubmit={submit} className="case-form">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          <div className="form-actions">
            <button className="btn-primary" type="submit">Sign Up</button>
            <button type="button" className="btn-ghost" onClick={() => { setEmail(''); setPassword(''); }}>Clear</button>
          </div>
        </form>
        <div style={{ marginTop: 16 }}>
          Already have an account? <Link to="/login-courtstaff">Login</Link>
        </div>
      </div>
    </motion.div>
  );
}
