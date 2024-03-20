import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ObjectiveBannerPlaceholder from '../../assets/nosotros/Nuestro obj.jpg';

const ObjectiveBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflow: "hidden",
        marginBottom: 10,
        padding: 3,
      }}
    >
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
              }}
            >
              Nuestro objetivo
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
              }}
            >
              RONDO es una compañía productora de ideas creativas. Contamos historias a través de la imagen audiovisual. Para transmitir emociones de una manera innovadora y arriesgada.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                objectFit: "cover",
                maxHeight: { xs: "30vh", sm: "40vh", md: "50vh" },
                borderRadius: 10,
                boxShadow: 3
              }}
              src={ObjectiveBannerPlaceholder}
              alt="Objective banner"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ObjectiveBanner;
