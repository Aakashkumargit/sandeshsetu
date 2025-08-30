import React, { useEffect, useState } from 'react'
import { listNotices } from '../api'
import NoticeCard from './NoticeCard'

export default function NoticeList(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    listNotices().then(setItems).finally(() => setLoading(false))
  }, [])

  if (loading) return <div>Loading notices…</div>
  if (!items.length) return <div>No notices yet.</div>

  return (
    <div className="grid gap-4">
      {items.map(n => <NoticeCard key={n.id} n={n} />)}
    </div>
  )
}
