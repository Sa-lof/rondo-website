import React from "react";
import Nav from "../components/Nav/Nav";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeatroCard from "../components/TeatroCard/TeatroCard";

const theme = createTheme({
    typography: {
      fontFamily: ["Sono", "monospace"].join(","),
    },
  });
function Teatro() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Box sx={{ width: "100vw", boxSizing: "border-box", minHeight: "50vh", marginBottom: 5, paddingTop: 0}}>
        <Grid container spacing={0} sx={{ minHeight: {
                  xs: "25vh",
                  sm: "30vh",
                  md: "35vh",
                  lg: "39vh",
                },}}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                height: {
                  xs: "65%",
                  sm: "70%",
                  md: "80%",
                  lg: "80%",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                paddingTop: {
                  xs: 10,
                  sm: 8,
                  md: 6,
                  lg: 4,
                }
              }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "30px",
                    sm: "40px",
                    md: "50px",
                    lg: "64px",
                  },
                  fontWeight: "bold",
                }}
              >
                Traspasa las cortinas
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: {
                    xs: "18px", 
                    sm: "20px",
                    md: "22px",
                    lg: "24px",
                  },
                }}
              >
                y descubre la intensidad de nuestras producciones en cada acto
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={10} sx={{ padding: 3 }}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={12} md={12} key={index}>
              <TeatroCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Teatro;
