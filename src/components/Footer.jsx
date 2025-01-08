// src/components/Footer.jsx
// import React from 'react';
// import { Box, Typography, Link } from '@mui/material';
// import { LinkedIn, GitHub, Email } from '@mui/icons-material';

// const Footer = () => (
//   <Box
//     component="footer"
//     sx={{
//       mt: 4,
//       py: 2,
//       px: 3,
//       textAlign: 'center',
//       bgcolor: '#f5f5f5',
//       borderTop: '1px solid #ddd',
//     }}
//   >
//     <Typography variant="body2" color="textSecondary">
//       Design by [Daniela Silvana Tochi] © {new Date().getFullYear()}. All rights reserved.
//     </Typography>
//     <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', gap: 2 }}>
//       <Link href="https://www.linkedin.com/in/daniela-silvana-tochi" target="_blank" color="inherit">
//         <LinkedIn />
//       </Link>
//       <Link href="https://github.com/danielas-tochi" target="_blank" color="inherit">
//         <GitHub />
//       </Link>
//       <Link href="mailto:danielastochi@gmail.com" color="inherit">
//         <Email />
//       </Link>
//     </Box>
//   </Box>
// );

// export default Footer;

import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn as LinkedInIcon, GitHub as GitHubIcon, Email as EmailIcon } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
    component="footer"
    sx={{
      width: '100%',
      backgroundColor: '#ffecb4',
      padding: '20px 0',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
    }}
  >
      <Typography variant="body2" color="textSecondary">
        Design by <strong>Daniela Silvana Tochi</strong> &copy; {new Date().getFullYear()}
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <IconButton
          href="https://www.linkedin.com/in/daniela-silvana-tochi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          href="https://github.com/danielas-tochi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton href="mailto:danielastochi@gmail.com">
          <EmailIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;
