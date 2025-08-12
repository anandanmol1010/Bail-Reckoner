import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FormPages.css';
import './Requests.css';

const mockRequests = [
  { id: 1, caseNumber: 'FIR-2024/123', name: 'Ramesh', sections: '420, 406', daysServed: 35, status: 'pending' },
  { id: 2, caseNumber: 'FIR-2024/200', name: 'Sita', sections: '302', daysServed: 10, status: 'pending' },
];

export default function CourtStaff() {
  const [requests, setRequests] = useState(mockRequests);

  function decide(id, decision, note) {
    setRequests(rs => rs.map(r => r.id === id ? {...r, status: decision, note} : r));
    alert(`Case ${id} marked as ${decision}. (In real app, create order + notify)`);
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="form-page">
      <h2>Court Staff — Review & Decide</h2>
      <div className="requests">
        {requests.map(req => (
          <div key={req.id} className={`request-card ${req.status}`}>
            <div className="req-left">
              <strong>{req.caseNumber}</strong>
              <div>{req.name} • Sections: {req.sections}</div>
              <div>Days served: {req.daysServed}</div>
            </div>
            <div className="req-right">
              <div className="decision-row">
                <button className="btn-primary" onClick={() => decide(req.id, 'granted', 'Eligible')}>Grant Bail</button>
                <button className="btn-danger" onClick={() => decide(req.id, 'rejected', 'Not eligible')}>Reject</button>
              </div>
              <textarea placeholder="Notes / Order draft" rows={3} onBlur={(e)=> console.log('save note', e.target.value)} />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}