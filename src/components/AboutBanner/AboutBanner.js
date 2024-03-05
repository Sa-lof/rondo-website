import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AboutBannerPlaceholder from "../../assets/placeholders/AboutBannerPlaceholder.png";

const AboutBanner = () => {
  return (
    <Box sx={{ width: "100vw", boxSizing: "border-box", minHeight: "100vh", marginBottom: 10}}>
      <Grid container spacing={0} sx={{ minHeight: "100vh" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              height: "100%",
            }}
          >
            <img
              src={AboutBannerPlaceholder}
              alt="About us banner"
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
            }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                marginBottom: "20px",
                fontSize: "64px",
                fontWeight: "bold",
              }}
            >
              "El cine es un espejo que flota a través del tiempo y captura las
              emociones de una época."
            </Typography>
            <Typography variant="subtitle1" sx={{ fontSize: "24px" }}>
              -Steven Spielberg
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBanner;
