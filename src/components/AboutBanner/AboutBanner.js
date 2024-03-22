import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AboutBanner = () => {
  return (
    <Box sx={{ width: '100%', boxSizing: 'border-box', overflow: 'hidden', marginBottom: 10}}>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: { xs: 2, md: 4 },
              height: { xs: '50vh', md: '100vh' },
              '& img': {
                width: '100%',
                maxHeight: { xs: '50vh', md: '100vh' },
                objectFit: 'cover',
                borderRadius: 10,
                boxShadow: 3,
              },
            }}
          >
            <img
              src='https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/nosotros/NOSOTROS.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvbm9zb3Ryb3MvTk9TT1RST1MuanBnIiwiaWF0IjoxNzExMDc0MTg4LCJleHAiOjE3NDI2MTAxODh9.AmsSXlV1f40f6AzXy87WEf8Cx89V92FfIG0apSwyM8c&t=2024-03-22T02%3A24%3A25.847Z'
              alt="About us banner"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: { xs: 'auto', md: '100vh' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: { xs: 2, md: 4 },
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontSize: { xs: '30px', sm: '44px', md: '40px',  lg: '50px' },
                fontWeight: 'bold',
                lineHeight: 'normal',
              }}
            >
              RONDO es una compañía productora de ideas creativas. Contamos historias a través de la imagen audiovisual, para transmitir emociones de una manera innovadora y arriesgada.
            </Typography>
            {/*
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '16px', sm: '18px', md: '24px' },
                mt: { xs: 2, md: 4 },
              }}
            >
              - La sociedad de los poetas muertos
            </Typography>*/}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBanner;
