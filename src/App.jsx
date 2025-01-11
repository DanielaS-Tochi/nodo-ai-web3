import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container, CircularProgress, Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './AppRoutes';
import ChatBot from './components/AIAssistant/ChatBot';
import AccessibilityBar from './components/AccessibilityBar';
import useAccessibility from './hooks/useAccessibility';

// Loading component for Suspense fallback
const Loading = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    minHeight="100vh"
    role="progressbar"
    aria-label="Cargando contenido"
  >
    <CircularProgress />
  </Box>
);

const App = () => {
  const {
    fontSize,
    highContrast,
    darkMode,
    prefersReducedMotion,
  } = useAccessibility();

  // Create a theme instance with accessibility preferences
  const theme = React.useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
      },
      secondary: {
        main: '#f50057',
        light: '#ff4081',
        dark: '#c51162',
      },
      success: {
        main: '#4caf50',
        light: '#81c784',
        dark: '#388e3c',
      },
      background: {
        default: darkMode ? '#303030' : '#f5f5f5',
        paper: darkMode ? '#424242' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#212121',
        secondary: darkMode ? '#b0b0b0' : '#757575',
      },
      ...(highContrast && {
        background: {
          default: darkMode ? '#000000' : '#ffffff',
          paper: darkMode ? '#121212' : '#ffffff',
        },
        text: {
          primary: darkMode ? '#ffffff' : '#000000',
          secondary: darkMode ? '#e0e0e0' : '#424242',
        },
      }),
    },
    typography: {
      htmlFontSize: 16 * (fontSize / 100),
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: prefersReducedMotion ? 'none' : 'all 0.3s ease-in-out',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '8px 16px',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: {
            borderRadius: '12px 12px 0 0',
          },
        },
      },
    },
    shape: {
      borderRadius: 8,
    },
  }), [darkMode, highContrast, fontSize, prefersReducedMotion]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ErrorBoundary>
        <Router future={{ v7_relativeSplatPath: true }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh',
              bgcolor: 'background.default',
              color: 'text.primary',
            }}
          >
            <Navbar />
            <Container
              maxWidth="xl"
              component="main"
              sx={{
                flexGrow: 1,
                pt: { xs: 2, sm: 3 },
                pb: { xs: 8, sm: 10 },
                px: { xs: 2, sm: 3 },
                mt: '64px',
              }}
            >
              <Suspense fallback={<Loading />}>
                <AppRoutes />
              </Suspense>
            </Container>
            <Footer />
            <ChatBot />
            <AccessibilityBar />
          </Box>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
