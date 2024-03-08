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
      fontFamily: ["Sono", "monospace"].join(","),
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
        <Grid container spacing={0} sx={{ minHeight: "45vh"}}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 2,
                height: {
                  xs: "90%",
                  sm: "95%",
                  md: "80%",
                  lg: "80%",
                },
                width: {
                  xs: "60%",
                  sm: "60%",
                  md: "80%",
                  lg: "85%",
                },
                margin: "0 auto",
                paddingBottom: {
                  xs: 7,
                  sm: 8,
                  md: 8,
                  lg: 4,
                }
              }}
            >
              <img
                src={"https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png"}
                alt="About us banner"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  maxHeight: "100%",
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={8} sx={{paddingBottom: {
        xs: 3,
        sm: 4,
        md: 5,
        lg: 4,
      }}}>
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
                Viaja más allá de la pantalla
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
