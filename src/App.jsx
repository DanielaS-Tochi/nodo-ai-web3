import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import AppRoutes from './AppRoutes'; // Archivo que maneja las rutas
import { AuthProvider } from './context/AuthContext'; // Nuevo contexto para autenticación

const App = () => {
  return (
    <AuthProvider>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">nodo: DApp AI + Web3</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <AppRoutes />
      </Container>
    </AuthProvider>
  );
};

export default App;
