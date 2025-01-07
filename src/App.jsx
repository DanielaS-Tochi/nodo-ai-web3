import React from 'react';
import { Button, AppBar, Toolbar, Typography, Container } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6">nodo: DApp AI + Web3</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" style={{ marginTop: '2rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Conectar Wallet
        </Button>
      </Container>
    </Router>
  );
};

export default App;

