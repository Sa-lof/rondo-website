import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AboutBannerPlaceholder from '../../assets/nosotros/El cine es.jpg';

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
              },
            }}
          >
            <img
              src={AboutBannerPlaceholder}
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
                fontSize: { xs: '30px', sm: '48px', md: '64px' },
                fontWeight: 'bold',
                lineHeight: 'normal',
              }}
            >
              “¡Por primera vez en toda mi vida, sé lo que quiero hacer! ¡Y por primera vez, lo haré!”.
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '16px', sm: '18px', md: '24px' },
                mt: { xs: 2, md: 4 },
              }}
            >
              - La sociedad de los poetas muertos
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBanner;
