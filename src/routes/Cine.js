import React, { Suspense, useState, useEffect } from 'react';
import "../components/loader.css"; // Asegúrate de que este archivo exista y contenga otros estilos necesarios
import Nav from "../components/Nav/Nav";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainImageSembrar1 from '../assets/cine/Sembrar/1.jpg';
import mainImageSembrar2 from '../assets/cine/Sembrar/2.jpg';
import mainImageSembrar3 from '../assets/cine/Sembrar/3.jpg';
import mainImageSembrar4 from '../assets/cine/Sembrar/4.jpg';
import mainImageConfabulados1 from '../assets/cine/ Confabulados/1.jpg';
import mainImageConfabulados2 from '../assets/cine/ Confabulados/2.png';
import mainImageConfabulados3 from '../assets/cine/ Confabulados/3.png';
import mainImageConfabulados4 from '../assets/cine/ Confabulados/4.png';
import mainImageBailar1 from '../assets/cine/Bailar/1.jpeg';
import mainImageBailar2 from '../assets/cine/Bailar/2.jpeg';
import mainImageBailar3 from '../assets/cine/Bailar/3.jpeg';
import mainImageBailar4 from '../assets/cine/Bailar/4.jpeg';
import mainImageAmar1 from '../assets/cine/Amar/1.PNG';
import mainImageAmar2 from '../assets/cine/Amar/2.PNG';
import mainImageAmar3 from '../assets/cine/Amar/3.PNG';
import mainImageAmar4 from '../assets/cine/Amar/4.PNG';
import mainImageTurandot1 from '../assets/cine/turandot/1.png';
import mainImageTurandot2 from '../assets/cine/turandot/2.png';
import mainImageTurandot3 from '../assets/cine/turandot/3.png';
import mainImageTurandot4 from '../assets/cine/turandot/4.png';
import mainImageEscrito1 from '../assets/cine/Escrito/1.png';
import mainImageEscrito2 from '../assets/cine/Escrito/2.png';
import mainImageEscrito3 from '../assets/cine/Escrito/3.png';
import mainImageEscrito4 from '../assets/cine/Escrito/4.png';
import mainImageLucha1 from '../assets/cine/Lucha/1.png';
import mainImageLucha2 from '../assets/cine/Lucha/2.png';
import mainImageLucha3 from '../assets/cine/Lucha/3.png';
import mainImageLucha4 from '../assets/cine/Lucha/4.png';
import { useNavigate } from 'react-router-dom'; // Añadir esta línea
import loaderGif from '../assets/RONDO LOGO.gif';

const CineCard = React.lazy(() => import("../components/CineCard/CineCard"));

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

function Cine() {
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/ficha/audiovisual/${movieId}`);
  };

  const movies = [
    {
      id:"5",
      title: "La verdadera historia de la princesa turandot",
      duration: "Live Sesion",
      mainImage: mainImageTurandot1,
      smallImages: [
        mainImageTurandot2,
        mainImageTurandot3,
        mainImageTurandot4,
      ],
    },
    {
      id:"6",
      title: "Escrito y hecho",
      duration: "Video Musical",
      mainImage: mainImageEscrito1,
      smallImages: [
        mainImageEscrito2,
        mainImageEscrito3,
        mainImageEscrito4,
      ],
    },
    {
      id:"7",
      title: "La lucha",
      duration: "Cortrometraje",
      mainImage: mainImageLucha1,
      smallImages: [
        mainImageLucha2,
        mainImageLucha3,
        mainImageLucha4,
      ],
    },
    {
      id:"3",
      title: "Bailar es lo más difícil",
      duration: "Cortrometraje Original",
      mainImage: mainImageBailar1,
      smallImages: [
        mainImageBailar2,
        mainImageBailar3,
        mainImageBailar4,
      ],
    },
    {
      id:"1",
      title: "Sembrar",
      duration: "Cortrometraje Original",
      mainImage: mainImageSembrar1,
      smallImages: [
        mainImageSembrar2,
        mainImageSembrar3,
        mainImageSembrar4,
      ],
    },
    {
      id:"4",
      title: "Amar es libertad",
      duration: "Cortrometraje Original",
      mainImage: mainImageAmar1,
      smallImages: [
        mainImageAmar2,
        mainImageAmar3,
        mainImageAmar4,
      ],
    },
    {
      id:"2",
      title: "Confabulados",
      duration: "Cortrometraje Original",
      mainImage: mainImageConfabulados1,
      smallImages: [
        mainImageConfabulados2,
        mainImageConfabulados3,
        mainImageConfabulados4,
      ],
    }
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
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
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
          <img src={loaderGif} alt="Cargando..." style={{ width: "200px", height: "200px" }} />
        </div>
      )}
      <Box sx={{ width: "100vw", boxSizing: "border-box", minHeight: "50vh", marginBottom: 5, paddingTop: 7}}>
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
                “¡Por primera vez en toda mi vida, sé lo que quiero hacer! ¡Y por primera vez, lo haré!”.
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
              - La sociedad de los poetas muertos
              </Typography>
            </Box>
          </Grid>
        </Grid>
      <Box sx={{
        flexGrow: 1,
        overflow: "hidden",
        backgroundImage: `
          repeating-linear-gradient(-45deg, black, black 10px, transparent 10px, transparent 20px),
          repeating-linear-gradient(-45deg, black, black 10px, transparent 10px, transparent 20px)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 20px",
        backgroundPosition: "top, bottom",
        paddingBottom: 3,
        paddingTop: 3,
      }}>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <Box key={index} sx={{ textAlign: "center"}}>
              <Typography variant="h6" component="h2" sx={{fontWeight: "bold", marginTop:1.5,  marginBottom:1.5}}>
                {movie.title}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

          <Suspense fallback={<div>Cargando...</div>}>
            <Grid container spacing={5} sx={{ marginTop: 4, padding: 5 }}>
              {movies.map((movie, index) => (
                <Grid item xs={12} sm={12} md={12} lg={6} key={movie.id}>
                  <CineCard
                    title={movie.title}
                    duration={movie.duration}
                    mainImage={movie.mainImage}
                    smallImages={movie.smallImages}
                    onClick={() => handleMovieClick(movie.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </Suspense>
        </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default Cine;
