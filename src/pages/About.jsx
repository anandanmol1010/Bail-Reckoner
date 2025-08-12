import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="about">
      <h2>About Bail Bridge</h2>
      <p>
        Bail Bridge is designed to reduce delays and confusion in bail procedures.
        It helps undertrial prisoners check eligibility, lawyers prepare drafts, and courts process requests efficiently.
      </p>
      <ul>
        <li>Bail countdown & eligibility</li>
        <li>AI-assisted draft (mock) for lawyers</li>
        <li>Court dashboard for quick decisions</li>
      </ul>
    </motion.div>
  );
}