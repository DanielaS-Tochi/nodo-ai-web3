import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Avatar,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  logout,
  selectUser,
  selectIsAuthenticated
} from '../store/slices/authSlice';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    navigate('/');
  };

  const handleLogin = () => {
    handleMenuClose();
    navigate('/login');
  };

  const handleRegister = () => {
    handleMenuClose();
    navigate('/register');
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          nodo: DApp AI + Web3
        </Typography>

        {isAuthenticated ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: 'secondary.main',
                width: 32,
                height: 32,
                fontSize: '0.875rem'
              }}
            >
              {user?.email?.[0]?.toUpperCase() || 'U'}
            </Avatar>
            <Typography variant="body2" sx={{ mr: 2 }}>
              {user?.email}
            </Typography>
            <Button
              color="inherit"
              onClick={handleLogout}
              sx={{ mr: 1 }}
            >
              Cerrar Sesión
            </Button>
            <IconButton
              color="inherit"
              edge="end"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={() => {
                handleMenuClose();
                navigate('/dashboard');
              }}>
                Dashboard
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button color="inherit" onClick={handleLogin}>
              Iniciar Sesión
            </Button>
            <Button color="inherit" onClick={handleRegister}>
              Registrarse
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
