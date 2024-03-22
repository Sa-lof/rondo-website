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
import Footer from "../components/Footer/Footer";
import { useNavigate } from 'react-router-dom'; // Añadir esta línea
import loaderGif from '../assets/RONDO LOGO.gif';

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
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/cu4tro/1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL2N1NHRyby8xLmpwZyIsImlhdCI6MTcxMTA3NTIxMywiZXhwIjoxNzQyNjExMjEzfQ.Z6SPfZKaHKQ2HOuKJogQJ_gqaBcQlCGURzc977im64E&t=2024-03-22T02%3A41%3A31.546Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/cu4tro/2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL2N1NHRyby8yLmpwZyIsImlhdCI6MTcxMTA3NTIzMywiZXhwIjoxNzQyNjExMjMzfQ.axPaiiJ-O8LFadQ83RbOg52-s81BBYrF3HrLLNwWq2c&t=2024-03-22T02%3A41%3A51.134Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/cu4tro/3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL2N1NHRyby8zLmpwZyIsImlhdCI6MTcxMTA3NTI0MiwiZXhwIjoxNzQyNjExMjQyfQ.AVxnC9Afq3Zsd2xvZAqdx1azYvUUNpJMi3tr1DnuG0Q&t=2024-03-22T02%3A42%3A00.249Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/cu4tro/4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL2N1NHRyby80LmpwZyIsImlhdCI6MTcxMTA3NTI1MSwiZXhwIjoxNzQyNjExMjUxfQ.FFKoM7uc9_DmJgKCKzQ7M2jqNjD0d68GR5SiGCsJrqo&t=2024-03-22T02%3A42%3A09.236Z',
      ],
      ano: "2022",
    },
    {
      id:"2",
      title: "Mamá se fue a la luna",
      duration: "Musicalización",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/mama/1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL21hbWEvMS5qcGciLCJpYXQiOjE3MTEwNzUxNDksImV4cCI6MTc0MjYxMTE0OX0.PbGwjApV3iHqDwXkviJ5wklLEKgEnWrkUlykZyojs18&t=2024-03-22T02%3A40%3A27.640Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/mama/2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL21hbWEvMi5qcGciLCJpYXQiOjE3MTEwNzUxNTgsImV4cCI6MTc0MjYxMTE1OH0.2RU9eLGeUAyPXN3qKM_GLGZlcdd9hE00odlhMf35VPU&t=2024-03-22T02%3A40%3A36.175Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/mama/3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL21hbWEvMy5qcGciLCJpYXQiOjE3MTEwNzUxNjYsImV4cCI6MTc0MjYxMTE2Nn0.sqUKp8SsVTaH8oKuZcKmCOiU5WpyrKRHV7pxNNk84-M&t=2024-03-22T02%3A40%3A44.636Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/teatro/mama/4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdGVhdHJvL21hbWEvNC5qcGciLCJpYXQiOjE3MTEwNzUxNzgsImV4cCI6MTc0MjYxMTE3OH0.qFlfcjIlZPEYpoRfKhNQ-pOSmHmcX1tSfkybDRGgUj4&t=2024-03-22T02%3A40%3A55.799Z',
      ],
      ano: "2022",
    },
  ];

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {loading && (
  <div className="loader-container">
    <img src={loaderGif} alt="Cargando..." style={{ width: "200px", height: "200px" }} />
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
                “El teatro no se hace para cantar las cosas sino para cambiarlas"
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
                 – Vittorio Gassman
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
