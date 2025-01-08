// src/components/Navbar.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          nodo: DApp AI + Web3
        </Typography>
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
          <MenuItem onClick={handleMenuClose}>Inicio</MenuItem>
          <MenuItem onClick={handleMenuClose}>Sobre Nosotros</MenuItem>
          <MenuItem onClick={handleMenuClose}>Contacto</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

