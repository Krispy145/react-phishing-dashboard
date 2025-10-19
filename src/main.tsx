import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './index.css';
import { routes } from './routes/routes';
import { useAuthStore } from './store/authStore';
import { ThemeProvider } from './theme/ThemeProvider';

function Protected({ children }: { children: JSX.Element }) {
  const isAuthed = useAuthStore((s) => !!s.accessToken);
  return isAuthed ? children : <Navigate to="/login" replace />;
}

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                route.protected ? (
                  <Protected>
                    <route.element />
                  </Protected>
                ) : (
                  <route.element />
                )
              }
            />
          ))}
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
