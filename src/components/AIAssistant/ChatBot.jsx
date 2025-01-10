import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  Fab,
  Drawer,
  useTheme,
  useMediaQuery,
  Avatar,
  CircularProgress,
  Zoom,
  Tooltip,
} from '@mui/material';
import {
  Close as CloseIcon,
  Send as SendIcon,
  SmartToy as BotIcon,
  Person as PersonIcon,
} from '@mui/icons-material';

const ChatBot = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Mock messages for now - later connect to a real AI service
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: '¡Hola! Soy tu asistente de Web3. ¿En qué puedo ayudarte?',
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!message.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: message }]);
    const userMessage = message;
    setMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: `Gracias por tu pregunta sobre "${userMessage}". Como asistente de Web3, puedo ayudarte con información sobre blockchain, criptomonedas y tecnologías descentralizadas.`
      }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const MessageBubble = ({ message }) => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
        mb: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          maxWidth: '80%',
        }}
      >
        <Avatar
          sx={{
            bgcolor: message.type === 'user' ? 'primary.main' : 'secondary.main',
            mr: message.type === 'user' ? 1 : 0,
            ml: message.type === 'bot' ? 1 : 0,
            order: message.type === 'user' ? 2 : 1,
          }}
        >
          {message.type === 'user' ? <PersonIcon /> : <BotIcon />}
        </Avatar>
        <Paper
          sx={{
            p: 2,
            bgcolor: message.type === 'user' ? 'primary.main' : 'background.paper',
            color: message.type === 'user' ? 'primary.contrastText' : 'text.primary',
            borderRadius: 2,
            order: message.type === 'user' ? 1 : 2,
            ml: message.type === 'user' ? 0 : 1,
            mr: message.type === 'bot' ? 0 : 1,
          }}
        >
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
    </Box>
  );

  return (
    <>
      <Zoom in={!isOpen}>
        <Tooltip title="Abrir asistente de IA" arrow>
          <Fab
            color="primary"
            aria-label="abrir chat"
            onClick={() => setIsOpen(true)}
            sx={{
              position: 'fixed',
              bottom: 80, // Increased to avoid overlap with accessibility bar
              right: 16,
              zIndex: theme.zIndex.drawer + 1,
            }}
          >
            <BotIcon />
          </Fab>
        </Tooltip>
      </Zoom>

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: isMobile ? '100%' : 400,
            height: isMobile ? 'calc(100% - 48px)' : 'calc(100% - 148px)', // Adjusted for accessibility bar
            bottom: isMobile ? 48 : 98, // Adjusted for accessibility bar
            right: isMobile ? 0 : 16,
            borderRadius: isMobile ? '12px 12px 0 0' : 2,
            boxShadow: 3,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {/* Header */}
          <Box
            sx={{
              p: 2,
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="h6">Asistente Web3</Typography>
            <IconButton
              color="inherit"
              onClick={() => setIsOpen(false)}
              aria-label="cerrar chat"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box
            sx={{
              flex: 1,
              overflowY: 'auto',
              p: 2,
              bgcolor: 'background.default',
            }}
          >
            {messages.map((msg, index) => (
              <MessageBubble key={index} message={msg} />
            ))}
            {isTyping && (
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
                <CircularProgress size={20} />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  Escribiendo...
                </Typography>
              </Box>
            )}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box sx={{ p: 2, bgcolor: 'background.paper' }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta..."
              InputProps={{
                endAdornment: (
                  <IconButton
                    color="primary"
                    onClick={handleSend}
                    disabled={!message.trim()}
                    aria-label="enviar mensaje"
                  >
                    <SendIcon />
                  </IconButton>
                ),
              }}
              inputRef={inputRef}
              aria-label="mensaje de chat"
            />
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default ChatBot;
