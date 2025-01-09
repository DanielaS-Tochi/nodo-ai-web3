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
  register,
  selectAuthError,
  selectAuthLoading,
  selectIsAuthenticated,
  clearError
} from '../../store/slices/authSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [validationError, setValidationError] = useState('');

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
    setValidationError('');

    if (!email || !password || !confirmPassword) {
      setValidationError('Todos los campos son requeridos');
      return false;
    }

    if (password !== confirmPassword) {
      setValidationError('Las contraseñas no coinciden');
      return false;
    }

    if (password.length < 6) {
      setValidationError('La contraseña debe tener al menos 6 caracteres');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError('Por favor ingrese un email válido');
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    dispatch(register({ email, password: confirmPassword }));
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
        Registrarse
      </Typography>

      {(error || validationError) && (
        <Alert severity="error" onClose={() => {
          dispatch(clearError());
          setValidationError('');
        }}>
          {validationError || error}
        </Alert>
      )}

      <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
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

        <TextField
          fullWidth
          label="Confirmar Contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
            'Registrarse'
          )}
        </Button>

        <Button
          color="primary"
          onClick={() => navigate('/login')}
          disabled={loading}
          sx={{ mt: 1 }}
        >
          ¿Ya tienes una cuenta? Inicia sesión
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
