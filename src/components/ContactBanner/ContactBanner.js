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
            rondo@gmail.com
          </Typography>
        </Grid>
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
        </Grid>
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
            Dirección
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon sx={{ color: "black", fontSize: "2rem", marginX: 1 }} />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FacebookIcon sx={{ color: "black", fontSize: "2rem", marginX: 1 }} />
            </Link>
            {/* Your custom IMDb icon */}
            <Box component="span" sx={{ marginX: 1 }}>
              {/* Your SVG code */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBanner;
