import React from 'react'
export default function StatCard({ icon, label, value }){
  return (
    <div className="p-6 rounded-2xl bg-white shadow-sm border">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-slate-500 mt-1">{label}</div>
    </div>
  )
}
