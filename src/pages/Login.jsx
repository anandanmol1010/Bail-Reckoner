import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState(''); const [password, setPassword] = useState('');
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    // mock login
    alert('Logged in (mock).');
    nav('/');
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="login-page">
      <div className="login-card">
        <h2>Login to Bail Bridge</h2>
        <form onSubmit={submit} className="case-form">
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" />
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" />
          <div className="form-actions">
            <button className="btn-primary" type="submit">Login</button>
            <button type="button" className="btn-ghost" onClick={() => { setEmail(''); setPassword(''); }}>Clear</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}