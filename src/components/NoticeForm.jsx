import React, { useState } from 'react'
import { createNotice } from '../api'

export default function NoticeForm({ token, onCreated }){
  const [form, setForm] = useState({ title:'', content:'', author:'Admin' })
  const [busy, setBusy] = useState(false)

  const set = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const submit = async (e) => {
    e.preventDefault(); setBusy(true)
    try { const n = await createNotice(form, token); onCreated?.(n); setForm({ title:'', content:'', author:'Admin' }) }
    finally { setBusy(false) }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 max-w-xl">
      <input className="border p-2 rounded" value={form.title} onChange={e=>set('title', e.target.value)} placeholder="Title" />
      <textarea rows={6} className="border p-2 rounded" value={form.content} onChange={e=>set('content', e.target.value)} placeholder="Content" />
      <input className="border p-2 rounded" value={form.author} onChange={e=>set('author', e.target.value)} placeholder="Author" />
      <button disabled={busy} className="px-3 py-2 rounded bg-blue-600 text-white disabled:opacity-50">{busy ? 'Posting…' : 'Post Notice'}</button>
    </form>
  )
}
