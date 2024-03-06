import React from "react";
import Nav from "../components/Nav/Nav";
import CineCard from "../components/CineCard/CineCard";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Arimo", "sans-serif"].join(","),
  },
});

function Cine() {
  const movieTitles = [
    "Titulo película 1",
    "Titulo película 2",
    "Titutlo película 3",
    "Titutlo película 4",
    "Titutlo película 5",
  ];

  const settings = {
    infinite: true,
    speed: 500, 
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Box sx={{ width: "100vw", boxSizing: "border-box", minHeight: "50vh", marginBottom: 5, paddingTop: 7}}>
        <Grid container spacing={0} sx={{ minHeight: "50vh"}}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                height: "80%",
              }}
            >
              <img
                src={"https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png"}
                alt="About us banner"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
              }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  marginBottom: "20px",
                  fontSize: {
                    xs: "53px",
                    sm: "77px",
                    md: "86px",
                    lg: "114px",
                  },
                  fontWeight: "bold",
                }}
              >
                Viaja más allá de la pantalla
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: {
                    xs: "30px", 
                    sm: "40px",
                    md: "35px",
                    lg: "49px",
                  },
                }}
              >
                y adéntrate en la magia de nuestro trabajo cinematográfico
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{
          flexGrow: 1, 
          overflow: "hidden", 
          borderTop: "2px solid black",
          borderBottom: "2px solid black",
          paddingBottom: 3,
          paddingTop: 3,
        }}>
          <Slider {...settings}>
            {movieTitles.map((title, index) => (
              <Box key={index} sx={{ textAlign: "center"}}>
                <Typography variant="h6" component="h2">
                  {title}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
        <Grid container spacing={5} sx={{ marginTop: 4, padding: 5 }}>
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={12} md={12} lg={6} key={index}>
              <CineCard />
            </Grid>
          ))}
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default Cine;
