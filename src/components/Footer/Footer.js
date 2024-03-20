import React from 'react';
import Grid from '@mui/material/Grid';
import './Footer.css'; // Make sure your CSS is adjusted for Material-UI if necessary
import logoImage from '../../assets/logos/LOGO_W.PNG';
import { Box, Typography, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <img
              src={logoImage}
              alt="Logo"
              className="footer-logo"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Link href="https://www.instagram.com/rondo.productions/" target="_blank">
                <InstagramIcon sx={{ color: "white", fontSize: "2rem", marginX: 1 }} />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100084389084321" target="_blank">
                <FacebookIcon sx={{ color: "white", fontSize: "2rem", marginX: 1, marginRight: "20px"}} />
              </Link>
              <Link href="https://m.imdb.com/name/nm15819071/?language=es-mx" target="_blank">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3enwwitVdsTzKe1O73kGule5HsYnRmAM2Lg&usqp=CAU" alt="IMDb Icon" style={{ width: '1.5rem', marginX: 1}} />
              </Link>
            </Box>
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
