import React from 'react';
import { Typography, Paper, Button } from '@mui/material';
import Model from '../components/Model';
import Dashboard from '../components/Dashboard';

const Home = () => (
  <Paper style={{ padding: '20px', textAlign: 'center' }}>
    <Typography variant="h4" gutterBottom>
      ¡Bienvenido a nodo: DApp AI + Web3!
    </Typography>
    <Typography variant="body1" paragraph>
      Esta es una plataforma de inteligencia artificial integrada con Web3.
    </Typography>
    <Button variant="contained" color="secondary">
      Comienza ahora
    </Button>
    <Model />
    <Dashboard />
  </Paper>
);

export default Home;

