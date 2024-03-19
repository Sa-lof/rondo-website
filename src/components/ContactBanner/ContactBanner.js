import React from "react";
import { Box, Typography, Grid, Link } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const ContactBanner = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "2rem 0", marginBottom: 10 }}>
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        fontWeight="bold"
        sx={{
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' } // Responsive font size
        }}
      >
        Contáctanos
      </Typography>
      <Grid container justifyContent="center" spacing={2} sx={{ paddingTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } // Responsive font size
            }}
          >
            info@rondoproductions.com
          </Typography>
        </Grid>
        {/*
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } // Responsive font size
            }}
          >
            55445656787
          </Typography>
        </Grid>*/}
      </Grid>

      <Grid container justifyContent="center" spacing={2} sx={{ paddingTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } // Responsive font size
            }}
          >
            CDMX
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="https://www.instagram.com/rondo.productions/" target="_blank">
              <InstagramIcon sx={{ color: "black", fontSize: "2rem", marginX: 1 }} />
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100084389084321" target="_blank">
              <FacebookIcon sx={{ color: "black", fontSize: "2rem", marginX: 1 }} />
            </Link>
            <Link href="https://m.imdb.com/name/nm15819071/?language=es-mx" target="_blank">
              <img src="https://www.svgrepo.com/show/333553/imdb.svg" alt="IMDb Icon" style={{ width: '2rem', marginX: '1rem' }} />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBanner;
