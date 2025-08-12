import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

function LawyerLegalAid() {
  const [form, setForm] = useState({ caseNumber: '', client: '', notes: '' });
  const [draftReady, setDraftReady] = useState(null);
  const nav = useNavigate();

  function submit(e) {
    e.preventDefault();
    // mock draft generation
    setDraftReady({
      title: `Bail Application — ${form.caseNumber || 'Unknown'}`,
      content: `Draft for ${form.client || 'Client'}: notes: ${form.notes}`
    });
  }

  function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    nav('/login-lawyer');
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="form-page">
      <h2>Lawyer / Legal Aid — Assist Client</h2>
      <button className="btn-ghost" style={{ float: 'right', marginBottom: 8 }} onClick={logout}>Logout</button>
      <div style={{ marginBottom: 16 }}>
        <Link to="/login-lawyer" className="btn-primary" style={{ marginRight: 8 }}>Login</Link>
        <Link to="/signup-lawyer" className="btn-ghost">Sign up</Link>
      </div>
      <form onSubmit={submit} className="case-form">
        <input value={form.caseNumber} onChange={e => setForm({...form, caseNumber: e.target.value})} placeholder="Case number" />
        <input value={form.client} onChange={e => setForm({...form, client: e.target.value})} placeholder="Client name" />
        <textarea value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} placeholder="Legal notes / arguments" rows={5}/>
        <div className="form-actions">
          <button className="btn-primary" type="submit">Generate Draft</button>
          <button type="button" className="btn-ghost" onClick={() => { setForm({caseNumber:'',client:'',notes:''}); setDraftReady(null); }}>Clear</button>
        </div>
      </form>

      {draftReady && (
        <div className="draft-card">
          <h3>{draftReady.title}</h3>
          <pre>{draftReady.content}</pre>
          <div className="form-actions">
            <button className="btn-primary" onClick={() => alert('Download mock draft (replace with file API)')}>Download</button>
            <button className="btn-ghost" onClick={() => navigator.clipboard?.writeText(draftReady.content)}>Copy</button>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default LawyerLegalAid;