import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Footer.css'; // Make sure your CSS is adjusted for Material-UI if necessary

const Footer = () => {
  return (
    <footer className="footer-container">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src="/path-to-your-logo.png"
              alt="Logo"
              className="footer-logo"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginTop: { xs: 5, md: 5 },
              textAlign: { xs: 'center', md: 'start' },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "10px",
                color: "#9D9D9D",
              }}
            >
              © 2024 Rondo Producciones
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ marginTop: { xs: 5, md: 5 }, textAlign: 'center' }}
          >
            <a
              href="/aviso-de-privacidad"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{ fontSize: "10px", color: "#9D9D9D" }}
              >
                Aviso de Privacidad
              </Typography>
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              marginTop: { xs: 5, md: 5 },
              textAlign: { xs: 'center', md: 'end' },
            }}
          >
            <a
              href="https://amoxtli.tech/"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "10px",
                  color: "#9D9D9D",
                }}
              >
                Desarrollado por Amoxtil Web Developers
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
