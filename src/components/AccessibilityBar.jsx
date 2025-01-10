import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Box,
  useTheme,
} from '@mui/material';
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  TextFields as FontSizeIcon,
  Contrast as ContrastIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
} from '@mui/icons-material';
import useAccessibility from '../hooks/useAccessibility';

const AccessibilityBar = () => {
  const theme = useTheme();
  const {
    fontSize,
    highContrast,
    darkMode,
    increaseFontSize,
    decreaseFontSize,
    toggleHighContrast,
    toggleDarkMode,
  } = useAccessibility();

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      sx={{ 
        top: 'auto', 
        bottom: 0,
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Toolbar variant="dense">
        <Box sx={{ flexGrow: 1 }} />
        
        <Tooltip title="Reducir tamaño de texto" arrow>
          <IconButton
            onClick={decreaseFontSize}
            aria-label="reducir tamaño de texto"
            color="inherit"
          >
            <ZoomOutIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Aumentar tamaño de texto" arrow>
          <IconButton
            onClick={increaseFontSize}
            aria-label="aumentar tamaño de texto"
            color="inherit"
          >
            <ZoomInIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Alternar alto contraste" arrow>
          <IconButton
            onClick={toggleHighContrast}
            aria-label="alternar alto contraste"
            color={highContrast ? 'primary' : 'inherit'}
          >
            <ContrastIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Alternar modo oscuro" arrow>
          <IconButton
            onClick={toggleDarkMode}
            aria-label="alternar modo oscuro"
            color="inherit"
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default AccessibilityBar;
