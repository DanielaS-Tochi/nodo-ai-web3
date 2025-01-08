import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Paper } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para registrar al usuario
    alert(`Usuario registrado: ${email}`);
  };

  return (
    <Paper style={{ padding: '20px', maxWidth: '400px', margin: '50px auto' }}>
      <Typography variant="h5" gutterBottom>Registrarse</Typography>
      <form onSubmit={handleRegister}>
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
          Registrarse
        </Button>
      </form>
    </Paper>
  );
};

export default Register;
