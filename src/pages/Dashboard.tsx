import React from 'react'
import { api } from '../shared/api'
import { useAuthStore } from '../store/authStore'
import { toast } from '../shared/toast'

type Sample = { id?: string|number; url?: string; label?: string|number|boolean; score?: number }

export default function Dashboard() {
  const { logout } = useAuthStore()
  const [loading, setLoading] = React.useState(false)
  const [items, setItems] = React.useState<Sample[]>([])

  const testPing = async () => {
    try {
      const { data } = await api.get('/ping')
      toast(`API OK: ${JSON.stringify(data)}`)
    } catch (e: any) {
      toast(e?.message ?? 'Ping failed')
    }
  }

  const loadSamples = async () => {
    setLoading(true)
    try {
      const { data } = await api.get('/phishing/samples')
      const arr = Array.isArray(data) ? data : data?.items || []
      setItems(arr)
      toast(`Loaded ${arr.length} samples`)
    } catch (e: any) {
      toast(e?.message ?? 'Failed to load samples')
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => { loadSamples() }, [])

  return (
    <main style={{ maxWidth: 900, margin: '40px auto', padding: 16 }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button onClick={testPing}>Test API /ping</button>
        <button onClick={loadSamples} disabled={loading}>{loading ? 'Loading…' : 'Reload Samples'}</button>
        <button onClick={logout}>Logout</button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>ID</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>URL</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Label</th>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: 8 }}>Score</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it, idx) => (
              <tr key={(it.id as any) ?? idx}>
                <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{String(it.id ?? idx)}</td>
                <td style={{ borderBottom: '1px solid #eee', padding: 8, maxWidth: 380, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.url || '-'}</td>
                <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{String(it.label ?? '-')}</td>
                <td style={{ borderBottom: '1px solid #eee', padding: 8 }}>{typeof it.score === 'number' ? it.score.toFixed(3) : '-'}</td>
              </tr>
            ))}
            {!items.length && !loading && (
              <tr><td colSpan={4} style={{ padding: 12, color: '#666' }}>No data yet. Wire /phishing/samples on your API.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}