import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FormPages.css';

export default function LawyerLegalAid() {
  const [form, setForm] = useState({ caseNumber: '', client: '', notes: '' });
  const [draftReady, setDraftReady] = useState(null);

  function submit(e) {
    e.preventDefault();
    // mock draft generation
    setDraftReady({
      title: `Bail Application — ${form.caseNumber || 'Unknown'}`,
      content: `Draft for ${form.client || 'Client'}: notes: ${form.notes}`
    });
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="form-page">
      <h2>Lawyer / Legal Aid — Assist Client</h2>
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