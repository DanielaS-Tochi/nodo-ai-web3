import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
  Divider,
} from '@mui/material';
import {
  Twitter as TwitterIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();

  const sections = [
    {
      title: 'Recursos',
      links: [
        { name: 'Tutoriales', href: '/tutorials' },
        { name: 'Documentación', href: '/docs' },
        { name: 'Blog', href: '/blog' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { name: 'Foro', href: '/forum' },
        { name: 'Discord', href: '#' },
        { name: 'Eventos', href: '/events' },
        { name: 'Contribuir', href: '/contribute' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacidad', href: '/privacy' },
        { name: 'Términos', href: '/terms' },
        { name: 'Cookies', href: '/cookies' },
        { name: 'Licencias', href: '/licenses' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <TwitterIcon />, href: 'https://twitter.com/danielas_tochi', label: 'Twitter', target: '_blank' },
    { icon: <GitHubIcon />, href: 'https://github.com/danielas-tochi', label: 'GitHub', target: '_blank' },
    { icon: <LinkedInIcon />, href: 'https://www.linkedin.com/in/daniela-silvana-tochi', label: 'LinkedIn', target: '_blank' },
    { icon: <TelegramIcon />, href: 'https://t.me/danielas_tochi', label: 'Telegram', target: '_blank' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        px: 2,
        mt: 'auto',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Brand and Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              Nodo AI Web3
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Explora el futuro de la web descentralizada con nuestra plataforma educativa
              impulsada por IA. Aprende sobre blockchain, NFTs y tecnologías emergentes.
            </Typography>
            <Box sx={{ mt: 2 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  color="primary"
                  href={social.href}
                  aria-label={social.label}
                  sx={{ mr: 1 }}
                  target={social.target}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Sections */}
          {sections.map((section) => (
            <Grid item xs={6} sm={4} md={2} key={section.title}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ py: 0.5 }}>
                    <Link
                      href={link.href}
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        textDecoration: 'none',
                        '&:hover': {
                          color: 'primary.main',
                          textDecoration: 'underline',
                        },
                      }}
                    >
                      {link.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Copyright */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            {new Date().getFullYear()} Nodo AI Web3 by Daniela Tochi. Todos los derechos reservados.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hecho con ❤️ en Argentina
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
