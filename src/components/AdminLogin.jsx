
import React, { useState } from 'react'
import { login } from '../api'

export default function AdminLogin({ onLogin }){
  const [u, setU] = useState('admin')
  const [p, setP] = useState('admin')
  const [err, setErr] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    try { const t = await login(u, p); onLogin(t.access_token) } catch { setErr('Invalid') }
  }

  return (
    <form onSubmit={submit} className="grid gap-3 max-w-sm">
      <input className="border p-2 rounded" value={u} onChange={e=>setU(e.target.value)} placeholder="Username" />
      <input type="password" className="border p-2 rounded" value={p} onChange={e=>setP(e.target.value)} placeholder="Password" />
      {err && <div className="text-red-600 text-sm">{err}</div>}
      <button className="px-3 py-2 rounded bg-blue-600 text-white">Login</button>
    </form>
  )
}
