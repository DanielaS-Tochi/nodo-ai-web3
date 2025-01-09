import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  Alert,
  CircularProgress
} from '@mui/material';
import {
  login,
  selectAuthError,
  selectAuthLoading,
  selectIsAuthenticated,
  clearError
} from '../../store/slices/authSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const error = useSelector(selectAuthError);
  const loading = useSelector(selectAuthLoading);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  useEffect(() => {
    // Clear any existing errors when component mounts
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    // Redirect if authenticated
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const validateForm = () => {
    if (!email || !password) {
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    return true;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    dispatch(login({ email, password }));
  };

  return (
    <Paper 
      elevation={3}
      sx={{
        padding: 3,
        maxWidth: '400px',
        margin: '50px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Iniciar sesión
      </Typography>

      {error && (
        <Alert severity="error" onClose={() => dispatch(clearError())}>
          {error}
        </Alert>
      )}

      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <TextField
          fullWidth
          label="Correo electrónico"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />

        <TextField
          fullWidth
          label="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
          required
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Iniciar sesión'
          )}
        </Button>

        <Button
          color="primary"
          onClick={() => navigate('/register')}
          disabled={loading}
          sx={{ mt: 1 }}
        >
          ¿No tienes una cuenta? Regístrate
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
