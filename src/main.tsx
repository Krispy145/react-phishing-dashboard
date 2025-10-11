import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import App from './pages/App'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { useAuthStore } from './store/authStore'

function Protected({ children }: { children: JSX.Element }) {
  const isAuthed = useAuthStore((s) => !!s.accessToken)
  return isAuthed ? children : <Navigate to="/login" replace />
}

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)