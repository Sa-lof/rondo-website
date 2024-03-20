import React, { useState, useEffect } from "react";
import "../components/loader.css"; // Asegúrate de que este archivo exista y contenga otros estilos necesarios
import Nav from "../components/Nav/Nav";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeatroCard from "../components/TeatroCard/TeatroCard";
import mainImageCuatro1 from '../assets/teatro/cu4tro/1.jpg';
import mainImageCuatro2 from '../assets/teatro/cu4tro/2.jpg';
import mainImageCuatro3 from '../assets/teatro/cu4tro/3.jpg';
import mainImageCuatro4 from '../assets/teatro/cu4tro/4.jpg';
import mainImageMama1 from '../assets/teatro/Mama/1.jpg';
import mainImageMama2 from '../assets/teatro/Mama/2.jpg';
import mainImageMama3 from '../assets/teatro/Mama/3.jpg';
import mainImageMama4 from '../assets/teatro/Mama/4.jpg';
import Footer from "../components/Footer/Footer";
import { useNavigate } from 'react-router-dom'; // Añadir esta línea

const theme = createTheme({
    typography: {
      fontFamily: ["Sono", "monospace"].join(","),
    },
  });
function Teatro() {
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/ficha/teatro/${movieId}`); // Navega a la página de detalles de la película con el ID de la película
  };

  const peliculas = [
    {
      id:"1",
      title: "Cu4tro Cu4rtos",
      duration: "Producción original",
      mainImage: mainImageCuatro1,
      smallImages: [
        mainImageCuatro2,
        mainImageCuatro3,
        mainImageCuatro4,
      ],
      ano: "2022",
    },
    {
      id:"2",
      title: "Mamá se fue a la luna",
      duration: "Musicalización",
      mainImage: mainImageMama1,
      smallImages: [
        mainImageMama2,
        mainImageMama3,
        mainImageMama4,
      ],
      ano: "2022",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {loading && (
  <div className="loader-container">
    <div className="loader"></div>
  </div>
)}
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
        {peliculas.map((pelicula, index) => (
          <Grid item xs={12} sm={12} md={12} key={index}>
            <TeatroCard
              title={pelicula.title}
              mainImage={pelicula.mainImage}
              smallImages={pelicula.smallImages}
              duracion={pelicula.duration}
              ano={pelicula.ano}
              onClick={() => handleMovieClick(pelicula.id)}
            />
          </Grid>
        ))}
      </Grid>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default Teatro;
