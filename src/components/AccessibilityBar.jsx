import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  ZoomIn as ZoomInIcon,
  ZoomOut as ZoomOutIcon,
  Contrast as ContrastIcon,
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
        boxShadow: '0px -2px 4px rgba(0,0,0,0.1)',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar 
        variant="dense" 
        sx={{ 
          justifyContent: 'center', 
          gap: 2,
          minHeight: '48px',
        }}
      >
        <Tooltip title={darkMode ? "Modo claro" : "Modo oscuro"} arrow>
          <IconButton
            onClick={toggleDarkMode}
            aria-label={darkMode ? "cambiar a modo claro" : "cambiar a modo oscuro"}
            color="inherit"
            sx={{ 
              '&:hover': { 
                bgcolor: theme.palette.action.hover 
              }
            }}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Tooltip>

        <Tooltip title={highContrast ? "Contraste normal" : "Alto contraste"} arrow>
          <IconButton
            onClick={toggleHighContrast}
            aria-label={highContrast ? "cambiar a contraste normal" : "cambiar a alto contraste"}
            color={highContrast ? "primary" : "inherit"}
            sx={{ 
              '&:hover': { 
                bgcolor: theme.palette.action.hover 
              }
            }}
          >
            <ContrastIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Reducir tamaño de texto" arrow>
          <span>
            <IconButton
              onClick={decreaseFontSize}
              aria-label="reducir tamaño de texto"
              color="inherit"
              disabled={fontSize <= 80}
              sx={{ 
                '&:hover': { 
                  bgcolor: theme.palette.action.hover 
                }
              }}
            >
              <ZoomOutIcon />
            </IconButton>
          </span>
        </Tooltip>

        <Tooltip title="Aumentar tamaño de texto" arrow>
          <span>
            <IconButton
              onClick={increaseFontSize}
              aria-label="aumentar tamaño de texto"
              color="inherit"
              disabled={fontSize >= 150}
              sx={{ 
                '&:hover': { 
                  bgcolor: theme.palette.action.hover 
                }
              }}
            >
              <ZoomInIcon />
            </IconButton>
          </span>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default AccessibilityBar;
