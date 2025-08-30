import React from 'react'

export default function Marquee({ items = [] }){
  return (
    <div className="w-full bg-blue-600 text-white text-sm">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="flex gap-8 animate-[marquee_18s_linear_infinite] whitespace-nowrap py-2">
          {items.concat(items).map((it, i) => (
            <span key={i} className="flex items-center gap-2">
              <span className="font-medium">{it.text}</span>
              {it.badge && <span className="text-[10px] px-2 py-0.5 rounded bg-white/20">{it.badge}</span>}
            </span>
          ))}
        </div>
      </div>
      <style>
        {`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}
      </style>
    </div>
  )
}
