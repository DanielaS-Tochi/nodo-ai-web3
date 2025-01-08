import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const userData = { email }; // Aquí podrías validar los datos o autenticar
    login(userData);
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <Typography variant="h5" gutterBottom>Iniciar sesión</Typography>
      <form onSubmit={handleLogin}>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Box>
        <Box mb={2}>
          <TextField
            fullWidth
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Box>
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Iniciar sesión
        </Button>
      </form>
    </Paper>
  );
};

export default Login;
