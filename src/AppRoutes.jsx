import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './components/Dashboard';

// Error page
const NotFound = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h1>404 - Página no encontrada</h1>
    <p>Lo sentimos, la página que buscas no existe.</p>
  </div>
);

const AppRoutes = () => (
  <Routes>
    {/* Public routes */}
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* Protected routes */}
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />

    {/* Error handling */}
    <Route path="/404" element={<NotFound />} />
    <Route path="*" element={<Navigate to="/404" replace />} />
  </Routes>
);

export default AppRoutes;
