import React from 'react'
export default function NoticeCard({ n }){
  return (
    <article className="p-5 bg-white border rounded-2xl shadow-sm">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{n.title}</h3>
        {n.category && <span className="text-xs px-2 py-1 rounded bg-blue-50 text-blue-700">{n.category.name}</span>}
      </div>
      <p className="text-slate-600 mt-2 whitespace-pre-line">{n.content}</p>
      <div className="text-xs text-slate-500 mt-3">By {n.author} • {new Date(n.created_at).toLocaleString()}</div>
    </article>
  )
}
