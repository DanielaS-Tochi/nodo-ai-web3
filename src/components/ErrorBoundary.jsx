import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

class ErrorBoundaryClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    // You could also log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback onReset={() => {
        this.setState({ hasError: false });
        window.location.reload();
      }} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ onReset }) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding={3}
      textAlign="center"
    >
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Ups! Algo salió mal
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Ha ocurrido un error inesperado. Puedes intentar:
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={onReset}
        >
          Recargar página
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate('/')}
        >
          Ir al inicio
        </Button>
      </Stack>
    </Box>
  );
};

// Wrapper component to provide router context
const ErrorBoundary = (props) => {
  return <ErrorBoundaryClass {...props} />;
};

export default ErrorBoundary;
