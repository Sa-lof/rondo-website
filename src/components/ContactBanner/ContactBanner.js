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
        fontWeight={"bold"}
        fontSize={"64px"}
      >
        Contáctanos
      </Typography>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ paddingTop: 3 }}
      >
        <Grid item md={6} xs={12}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          >
            rondo@gmail.com
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          >
            55445656787
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        spacing={2}
        sx={{ paddingTop: 3 }}
      >
        <Grid item md={6} xs={12}>
          <Typography
            variant="body1"
            sx={{ fontWeight: "bold", fontSize: "25px" }}
          >
            Dirección
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Link href="https://instagram.com" target="_blank">
              <InstagramIcon
                sx={{ color: "black", fontSize: "2rem", marginX: 2 }}
              />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FacebookIcon
                sx={{ color: "black", fontSize: "2rem", marginX: 2 }}
              />
            </Link>
            <Link href="https://imdb.com" target="_blank">
              {/* Custom SVG for IMDb Icon */}
              <Box
                component="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                sx={{ color: "black", fontSize: "2rem", marginX: 2 }} // Apply uniform size and margin
              >

                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48M21.3 229.2H21c.1-.1.2-.3.3-.4zM97 319.8H64V192h33zm113.2 0h-28.7v-86.4l-11.6 86.4h-20.6l-12.2-84.5v84.5h-29V192h42.8c3.3 19.8 6 39.9 8.7 59.9l7.6-59.9h43zm11.4 0V192h24.6c17.6 0 44.7-1.6 49 20.9c1.7 7.6 1.4 16.3 1.4 24.4c0 88.5 11.1 82.6-75 82.5m160.9-29.2c0 15.7-2.4 30.9-22.2 30.9c-9 0-15.2-3-20.9-9.8l-1.9 8.1h-29.8V192h31.7v41.7c6-6.5 12-9.2 20.9-9.2c21.4 0 22.2 12.8 22.2 30.1zM265 229.9c0-9.7 1.6-16-10.3-16v83.7c12.2.3 10.3-8.7 10.3-18.4zm85.5 26.1c0-5.4 1.1-12.7-6.2-12.7c-6 0-4.9 8.9-4.9 12.7c0 .6-1.1 39.6 1.1 44.7c.8 1.6 2.2 2.4 3.8 2.4c7.8 0 6.2-9 6.2-14.4z" />
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactBanner;
