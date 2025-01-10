import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  useTheme,
} from '@mui/material';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Por favor ingresa un email válido';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Aquí iría la lógica para enviar el formulario
      console.log('Formulario enviado:', formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpiar error cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          mt: 4,
          mb: 4,
          borderRadius: 2,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 600,
            mb: 3,
            fontSize: '1.5rem',
            letterSpacing: '0.5px',
          }}
        >
          Contáctanos
        </Typography>
        <form onSubmit={handleSubmit} noValidate aria-label="Formulario de contacto">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              fullWidth
              label="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              variant="outlined"
              required
              inputProps={{
                'aria-label': 'Nombre',
                'aria-required': 'true',
                'aria-invalid': !!errors.name,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1rem',
                  lineHeight: '1.5',
                },
                '& .MuiInputLabel-root': {
                  fontSize: '1rem',
                },
                '& .MuiFormHelperText-root': {
                  fontSize: '0.875rem',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              variant="outlined"
              required
              inputProps={{
                'aria-label': 'Email',
                'aria-required': 'true',
                'aria-invalid': !!errors.email,
                'aria-describedby': errors.email ? 'email-error' : undefined,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1rem',
                  lineHeight: '1.5',
                },
                '& .MuiInputLabel-root': {
                  fontSize: '1rem',
                },
                '& .MuiFormHelperText-root': {
                  fontSize: '0.875rem',
                },
              }}
            />
            <TextField
              fullWidth
              label="Mensaje"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              variant="outlined"
              required
              inputProps={{
                'aria-label': 'Mensaje',
                'aria-required': 'true',
                'aria-invalid': !!errors.message,
              }}
              sx={{
                '& .MuiInputBase-input': {
                  fontSize: '1rem',
                  lineHeight: '1.5',
                },
                '& .MuiInputLabel-root': {
                  fontSize: '1rem',
                },
                '& .MuiFormHelperText-root': {
                  fontSize: '0.875rem',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="success"
              size="large"
              sx={{
                mt: 2,
                py: 1.5,
                fontWeight: 600,
                fontSize: '1rem',
                letterSpacing: '0.5px',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 4,
                  animation: `${pulse} 1s ease-in-out infinite`,
                },
                '&:focus': {
                  outline: '2px solid',
                  outlineColor: theme.palette.success.main,
                  outlineOffset: '2px',
                },
              }}
              aria-label="Enviar mensaje"
            >
              Enviar Mensaje
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactForm;
