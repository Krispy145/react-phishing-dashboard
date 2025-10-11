import React from 'react'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <main style={{ maxWidth: 720, margin: '40px auto', padding: 16 }}>
      <h1>Phishing Classifier Dashboard (React)</h1>
      <p><Link to="/login">Login</Link> to view the protected <Link to="/dashboard">Dashboard</Link>.</p>
    </main>
  )
}