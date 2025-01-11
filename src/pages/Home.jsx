import React from 'react';
import { Typography, Paper, Button } from '@mui/material';
import Model from '../components/Model';
import Dashboard from '../components/Dashboard';
import { useNavigate } from 'react-router-dom'; // Importar el hook useNavigate

const Home = () => {
  const navigate = useNavigate(); // Obtener la función navigate

  return (
    <Paper style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        ¡Bienvenido a nodo: DApp AI + Web3!
      </Typography>
      <Typography variant="body1" paragraph>
        Esta es una plataforma de inteligencia artificial integrada con Web3.
      </Typography>
      <Button
        variant="contained"
        color="success"
        style={{ marginBottom: '20px' }}
        onClick={() => navigate('/login')} // Redirigir a la ruta de login
      >
        Comienza ahora
      </Button>
      <Model />
      <Dashboard />
    </Paper>
  );
};

export default Home;
