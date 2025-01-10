import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Chip,
  IconButton,
  InputBase,
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  School as SchoolIcon,
  Article as ArticleIcon,
  Search as SearchIcon,
  Lightbulb as LightbulbIcon,
} from '@mui/icons-material';
import AnimatedButton from '../../components/buttons/AnimatedButton';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [searchTerm, setSearchTerm] = useState('');
  
  // Mock data - later we can connect to real APIs
  const trendingTopics = [
    {
      title: 'Web3 Basics',
      description: 'Aprende los fundamentos de Web3 y blockchain',
      image: 'https://placeholder.com/400x200',
      category: 'Educational'
    },
    {
      title: 'NFTs en Argentina',
      description: 'Estado actual del mercado NFT en Latinoamérica',
      image: 'https://placeholder.com/400x200',
      category: 'Market Analysis'
    },
    {
      title: 'Smart Contracts',
      description: 'Guía básica de contratos inteligentes',
      image: 'https://placeholder.com/400x200',
      category: 'Technology'
    }
  ];

  const NewsCard = ({ title, description, image, category }) => (
    <Card 
      sx={{ 
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: theme.shadows[4]
        }
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Chip 
          label={category}
          size="small"
          color={
            category === 'Educational' ? 'primary' :
            category === 'Market Analysis' ? 'secondary' : 'default'
          }
          sx={{ mb: 1 }}
        />
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {/* Hero Section */}
      <Paper
        sx={{
          p: { xs: 3, md: 6 },
          mb: 4,
          background: theme.palette.mode === 'dark'
            ? `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.secondary.dark} 90%)`
            : `linear-gradient(45deg, ${theme.palette.primary.light} 30%, ${theme.palette.secondary.light} 90%)`,
          color: 'white',
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url(/path/to/pattern.svg)',
            opacity: 0.1,
            zIndex: 1,
          },
        }}
      >
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
              mb: 3,
            }}
          >
            Explorá el Mundo Web3
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 4,
              maxWidth: 600,
              lineHeight: 1.4,
            }}
          >
            Noticias, tutoriales y análisis sobre blockchain, NFTs e innovación digital
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <AnimatedButton onClick={() => console.log('Comenzar')}>
              Comienza ahora
            </AnimatedButton>
          </Box>

          {/* Search Bar */}
          <Paper
            elevation={3}
            sx={{
              p: '2px 4px',
              display: 'flex',
              alignItems: 'center',
              width: { xs: '100%', sm: '400px' },
              borderRadius: 2,
              bgcolor: 'background.paper',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
              },
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Buscar artículos y tutoriales..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton type="button" sx={{ p: '10px' }} color="primary">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Box>
      </Paper>

      {/* Categories */}
      <Grid container spacing={3} sx={{ mb: 6 }}>
        {[
          { icon: <SchoolIcon sx={{ fontSize: 40 }} />, title: 'Tutoriales', color: 'primary.main' },
          { icon: <TrendingUpIcon sx={{ fontSize: 40 }} />, title: 'Análisis', color: 'secondary.main' },
          { icon: <ArticleIcon sx={{ fontSize: 40 }} />, title: 'Noticias', color: 'primary.main' },
          { icon: <LightbulbIcon sx={{ fontSize: 40 }} />, title: 'Innovación', color: 'secondary.main' },
        ].map((category, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                textAlign: 'center', 
                p: 3,
                height: '100%',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 6,
                },
              }}
            >
              <Box 
                sx={{ 
                  mb: 2,
                  color: category.color,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                {category.icon}
              </Box>
              <Typography 
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: 'text.primary',
                }}
              >
                {category.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Trending Topics */}
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={{ 
          mb: 4,
          fontWeight: 600,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: 60,
            height: 4,
            bgcolor: 'primary.main',
            borderRadius: 2,
          },
        }}
      >
        Temas Destacados
      </Typography>

      <Grid container spacing={4}>
        {trendingTopics.map((topic, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: 8,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={topic.image}
                alt={topic.title}
                sx={{
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={topic.category}
                    size="small"
                    color={
                      topic.category === 'Educational' ? 'primary' :
                      topic.category === 'Market Analysis' ? 'secondary' : 'default'
                    }
                    sx={{ 
                      borderRadius: '16px',
                      fontWeight: 500,
                    }}
                  />
                </Box>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 600,
                    lineHeight: 1.4,
                  }}
                >
                  {topic.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{ lineHeight: 1.6 }}
                >
                  {topic.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* AI-Powered Insights */}
      <Paper 
        sx={{ 
          mt: 6, 
          p: 4,
          bgcolor: theme.palette.mode === 'dark' 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'rgba(0, 0, 0, 0.02)',
          borderRadius: 3,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box 
          sx={{ 
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box 
            display="flex" 
            alignItems="center" 
            mb={3}
          >
            <LightbulbIcon 
              color="primary" 
              sx={{ 
                fontSize: 40,
                mr: 2,
              }} 
            />
            <Typography 
              variant="h5"
              sx={{ fontWeight: 600 }}
            >
              Insights Impulsados por IA
            </Typography>
          </Box>
          <Typography 
            variant="body1"
            sx={{ 
              maxWidth: 800,
              lineHeight: 1.6,
            }}
          >
            Nuestro sistema de IA analiza las últimas tendencias y noticias para brindarte 
            información relevante y actualizada sobre el ecosistema Web3. Descubre patrones, 
            tendencias emergentes y oportunidades en el mundo de la tecnología blockchain.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Dashboard;
