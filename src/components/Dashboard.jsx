import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Paper, Typography, Grid, Card, CardContent, CircularProgress, Avatar } from '@mui/material';

const Dashboard = () => {
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para obtener los datos de criptomonedas
  const fetchCryptoData = async () => {
        try {
          const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,litecoin,cardano,dogecoin,polkadot', // Agregamos más criptomonedas
            },
          });
          setCryptoData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching crypto data:', error);
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchCryptoData();
      }, []);
    
      if (loading) {
        return <CircularProgress />;
      }
    
  return (
    <Paper style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom style={{ color: '#333', textAlign: 'center' }}>
        Dashboard de Criptomonedas
      </Typography>

      <Typography variant="h5" gutterBottom style={{ color: '#555', marginBottom: '20px' }}>
        Criptomonedas
      </Typography>

      <Grid container spacing={2}>
        {cryptoData.map((crypto) => (
          <Grid item xs={12} sm={6} md={4} key={crypto.id}>
            <Card style={{ borderRadius: '15px', backgroundColor: '#fff', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
              <CardContent style={{ textAlign: 'center' }}>
                {/* Logo */}
                <Avatar
                  src={crypto.image}
                  alt={crypto.name}
                  style={{ width: '60px', height: '60px', margin: '0 auto 10px' }}
                />
                {/* Nombre */}
                <Typography variant="h6" style={{ color: '#333', fontWeight: 'bold' }}>
                  {crypto.name}
                </Typography>
                {/* Precio */}
                <Typography style={{ color: '#28a745', fontSize: '1.2rem', margin: '10px 0' }}>
                  ${crypto.current_price.toLocaleString()}
                </Typography>
                {/* Cambio en 24h */}
                <Typography
                  style={{
                    color: crypto.price_change_percentage_24h >= 0 ? '#28a745' : '#dc3545',
                    fontWeight: 'bold',
                  }}
                >
                  {crypto.price_change_percentage_24h >= 0 ? '+' : ''}
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Grid, Card, CardContent, Typography, CircularProgress, CardMedia } from '@mui/material';

// const Dashboard = () => {
//   const [cryptoData, setCryptoData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchCryptoData = async () => {
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
//         params: {
//           vs_currency: 'usd',
//           ids: 'bitcoin,ethereum,litecoin,cardano,dogecoin,polkadot', // Agregamos más criptomonedas
//         },
//       });
//       setCryptoData(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error fetching crypto data:', error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchCryptoData();
//   }, []);

//   if (loading) {
//     return <CircularProgress />;
//   }

//   return (
//     <div>
//       <Typography variant="h5" gutterBottom>
//         Criptomonedas Populares
//       </Typography>
//       <Grid container spacing={2}>
//         {cryptoData.map((crypto) => (
//           <Grid item xs={12} sm={6} md={4} key={crypto.id}>
//             <Card>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={crypto.image}
//                 alt={`${crypto.name} logo`}
//               />
//               <CardContent>
//                 <Typography variant="h6">{crypto.name}</Typography>
//                 <Typography variant="body1">Precio: ${crypto.current_price}</Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   24h Cambio: {crypto.price_change_percentage_24h}%
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </div>
//   );
// };

// export default Dashboard;
