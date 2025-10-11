import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authStore'
import { toast } from '../shared/toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { login } = useAuthStore()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const ok = await login({ email, password })
    toast(ok ? 'Signed in' : 'Login failed')
    if (ok) navigate('/dashboard')
  }

  return (
    <main style={{ maxWidth: 420, margin: '40px auto', padding: 16 }}>
      <h2>Sign in</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ display: 'block', width: '100%', padding: 10, marginBottom: 8 }} />
        <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ display: 'block', width: '100%', padding: 10, marginBottom: 8 }} />
        <button type="submit">Sign in</button>
      </form>
    </main>
  )
}