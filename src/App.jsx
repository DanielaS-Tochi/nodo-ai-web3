import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, CircularProgress, Box } from '@mui/material';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import AppRoutes from './AppRoutes';

// Loading component for Suspense fallback
const Loading = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
  >
    <CircularProgress />
  </Box>
);

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            padding: 0,
            marginTop: '64px', // Height of the AppBar
            minHeight: 'calc(100vh - 64px)', // Full height minus AppBar
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Suspense fallback={<Loading />}>
            <AppRoutes />
          </Suspense>
        </Container>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
