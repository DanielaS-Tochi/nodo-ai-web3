import React from 'react';
import { Container } from '@mui/material';
import AppRoutes from './AppRoutes'; // Rutas
import { AuthProvider } from './context/AuthContext'; // Contexto de autenticación
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          padding: 0,
          marginTop: '56px', // Espacio para que no cubra el contenido
        }}
      >
        <AppRoutes />
      </Container>
      <Footer />
    </AuthProvider>
  );
};

export default App;
