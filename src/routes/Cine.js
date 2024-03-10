import React, { Suspense } from 'react';
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
import cine1 from '../assets/cine/Viaje Mas alla.jpg';
import { useNavigate } from 'react-router-dom'; // Añadir esta línea
const CineCard = React.lazy(() => import("../components/CineCard/CineCard"));

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

function Cine() {
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/ficha/${movieId}`);
  };

  const movies = [
    {
      id:"3",
      title: "Bailar es lo más difícil",
      duration: "Post producción",
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
      duration: "1:05 minutos",
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
      duration: "2:46 minutos",
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
      duration: "4 minutos",
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
                src={cine1}
                alt="About us banner"
                style={{
                  maxWidth: "100%",
                  objectFit: "cover",
                  maxHeight: "100%",
                  borderRadius: '10px',
                  boxShadow: 10
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
