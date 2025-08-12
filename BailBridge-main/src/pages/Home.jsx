import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import RoleCard from '../components/RoleCard';
import '../components/RoleCard.css';
import '../pages/Home.css';

const pieData = [
  { name: 'Pending', value: 60 },
  { name: 'Granted', value: 25 },
  { name: 'Rejected', value: 15 },
];
const COLORS = ['#f59e0b', '#10b981', '#ef4444'];

const barData = [
  { name: 'Investigation', cases: 40 },
  { name: 'Charges Framed', cases: 28 },
  { name: 'Trial', cases: 20 },
];

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="home">
      <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="hero">
        <h1>Welcome to <span className="accent">Bail Bridge</span></h1>
        <p className="lead">Smart bail eligibility & streamlined workflows for prisoners, lawyers and courts.</p>
        <div className="hero-actions">
          <button onClick={() => nav('/undertrial-prisoner')} className="btn-primary">Get Started</button>
          
        </div>
      </motion.header>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="cards-grid">
        <RoleCard title="Undertrial Prisoner" desc="Kiosk-friendly input, countdown & steps" onClick={() => nav('/undertrial-prisoner')} />
        <RoleCard title="Lawyer / Legal Aid" desc="Drafts, citations, download" onClick={() => nav('/lawyer-legal-aid')} />
        <RoleCard title="Court Staff" desc="Receive requests & issue decisions" onClick={() => nav('/court-staff')} />
      </motion.section>

      <div className="charts">
        <div className="chart-card">
          <h4>Case Distribution</h4>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
                {pieData.map((entry, idx) => <Cell key={idx} fill={COLORS[idx % COLORS.length]} />)}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h4>Cases by Stage</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cases" fill="#2563eb" animationDuration={800} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}