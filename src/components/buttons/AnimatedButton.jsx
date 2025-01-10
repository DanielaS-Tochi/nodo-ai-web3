import React from 'react';
import { Button } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50;
  }
  50% {
    box-shadow: 0 0 10px #4caf50, 0 0 20px #4caf50, 0 0 30px #4caf50;
  }
  100% {
    box-shadow: 0 0 5px #4caf50, 0 0 10px #4caf50, 0 0 15px #4caf50;
  }
`;

const scaleAnimation = keyframes`
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

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.success.main,
  color: '#fff',
  border: 0,
  borderRadius: 50,
  boxShadow: '0 3px 5px 2px rgba(76, 175, 80, .3)',
  height: 48,
  padding: '0 30px',
  fontWeight: 600,
  fontSize: '1.1rem',
  textTransform: 'none',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.success.dark,
    transform: 'translateY(-3px)',
    animation: `${scaleAnimation} 2s ease-in-out infinite`,
    boxShadow: '0 6px 10px 4px rgba(76, 175, 80, .3)',
  },
  '&:active': {
    transform: 'translateY(-1px)',
    backgroundColor: theme.palette.success.dark,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 50,
    animation: `${glowAnimation} 2s ease-in-out infinite`,
    zIndex: -1,
  },
}));

const AnimatedButton = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
};

export default AnimatedButton;
