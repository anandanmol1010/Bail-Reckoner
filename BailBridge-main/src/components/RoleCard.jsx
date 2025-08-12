import React from 'react';
import { motion } from 'framer-motion';
import './RoleCard.css';

export default function RoleCard({ title, desc, to, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -6 }}
      className="role-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
    >
      <div className="role-card-inner">
        <h3>{title}</h3>
        <p>{desc}</p>
        {to && <div className="role-cta">Open</div>}
      </div>
    </motion.div>
  );
}