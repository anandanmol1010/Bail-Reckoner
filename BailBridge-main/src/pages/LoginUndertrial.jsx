import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

export default function LoginUndertrial() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password, role: 'undertrial' });
      if (res.data.token) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('role', 'undertrial');
      }
      alert('Login successful!');
      nav('/undertrial-prisoner');
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        alert(err.response.data.error);
      } else {
        alert('Login failed');
      }
    }
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    nav('/login-undertrial');
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="login-page">
      <div className="login-card">
        <h2>Undertrial Login</h2>
        <button className="btn-ghost" style={{ float: 'right', marginBottom: 8 }} onClick={logout}>Logout</button>
        <form onSubmit={submit} className="case-form">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          <div className="form-actions">
            <button className="btn-primary" type="submit">Login</button>
            <button type="button" className="btn-ghost" onClick={() => { setEmail(''); setPassword(''); }}>Clear</button>
          </div>
        </form>
        <div style={{ marginTop: 16 }}>
          Don't have an account? <Link to="/signup-undertrial">Sign up</Link>
        </div>
      </div>
    </motion.div>
  );
}
