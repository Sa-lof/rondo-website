import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ObjectiveBannerPlaceholder from "../../assets/placeholders/ObjectiveBannerPlaceholder.png";

const ObjectiveBanner = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        boxSizing: "border-box",
        marginBottom: 10,
      }}
    >
      <Grid
        container
        alignItems="center"
        style={{ width: "100%", margin: 0, padding: 3}}
      >
        <Grid item xs={12} sm={6} sx={{padding: 3}}>
          <Box textAlign={"center"} padding={0}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              fontWeight={"bold"}
              fontSize={"64px"}
            >
              Nuestro objetivo
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{padding: 0}}>
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
              src={ObjectiveBannerPlaceholder}
              alt="Objective banner"
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ObjectiveBanner;
