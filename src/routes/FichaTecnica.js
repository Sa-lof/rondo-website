import React from "react";
import Nav from "../components/Nav/Nav";
import FichaDecripcion from "../components/FichaDescripcion/FichaDescripción";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import { Grid, Typography, Box, Card, CardMedia, IconButton} from '@mui/material';
import poster1 from '../assets/cine/Sembrar/poster.png';
import poster2 from '../assets/cine/ Confabulados/poster.png';
import poster3 from '../assets/cine/Bailar/poster.png';
import poster4 from '../assets/cine/Amar/poster.png';
import { useParams } from 'react-router-dom';

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});
function Ficha() {
  const { id } = useParams();
  console.log(id);

  const movies = [
    {
      id:"1",
      title: "Sembrar",
      duracion: "1:05 Min",
      dirigida: "Omar Drioli y Lilly Maldonado",
      ano: "2023",
      descripcion: "mainImageSembrar1",
      idioma: "Español",
      poster: poster1,
      link: "https://www.imdb.com/title/tt31462284/?ref_=ext_shr_lnk",
      cast: [
        "María Ibarra Paleta",
        "Sofía Valdés",
        "Sabina Kuruzawa",
      ],
      genero: [
        "Drama",
        "Ficción",
        "Cambio Ambiental",
      ],
    },
    {
      id:"2",
      title: "Confabulados",
      duracion: "4 mins",
      dirigida: "Omar Drioli",
      ano: "2021",
      descripcion: "mainImageSembrar1",
      idioma: "Español",
      poster: poster2,
      link: "https://www.imdb.com/title/tt31462109/?ref_=ext_shr_lnk",
      cast: [
        "Analú Flores",
        "Santiago Bautista",
      ],
      genero: [
        "Corto",
      ],
    },
    {
      id:"3",
      title: "Bailar es lo más dificil",
      duracion: "POST PRODUCCIÓN",
      dirigida: "Omar Drioli y Fernando Luna",
      ano: "2023",
      descripcion: "mainImageSembrar1",
      idioma: "Español",
      poster: poster3,
      cast: [
        "Monica Gutierrez",
        "Alan Soto",
        "Santiago Bautista",
      ],
      genero: [
        "Drama",
        "Romance",
        "Musical",
      ],
    },
    {
      id:"4",
      title: "Amar es libertad",
      duracion: "2:46 mins",
      dirigida: "Omar Drioli",
      ano: "2022",
      descripcion: "mainImageSembrar1",
      idioma: "Español",
      poster: poster4,
      link: "https://www.imdb.com/title/tt31462225/?ref_=ext_shr_lnk",
      cast: [
        "Analú Flores",
        "Ottmar Russo",
      ],
      genero: [
        "Drama",
        "Thriller",
        "Experimental",
      ],
    },
  ];

  const selectedMovie = movies.find(movie => movie.id === id);

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div style={{ padding: "56.25% 0 0 0", position: "relative", paddingBottom:15}}>
        <iframe 
          src="https://player.vimeo.com/video/818467012?h=3c97dc420f&autoplay=1&title=0&byline=0&portrait=0" 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen 
          title="Unique Title for Iframe"
        ></iframe>
      </div>
      <FichaDecripcion {...selectedMovie} />
      <Grid container spacing={5} justifyContent="center" alignItems="center" style={{paddingTop:80, paddingBottom:80}}>
        <Grid item xs={12} sm={12} md={7}>
          <Typography style={{ padding: 10, margin: 40 }}>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png" alt="Descripción de la imagen" style={{ width: '60%' }} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: 3,
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: "100%", md: "100%", lg:"100%" },
              mx: "auto", 
              textAlign: "center",
              borderRadius: 10,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={selectedMovie.poster}
              alt={`imagen`}
              sx={{
                maxHeight: { xs: 300, md: 550 },
                objectFit: "contain",
              }}
            />
          </Card>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", 
            marginBottom: 2,
          }}
        >
          <IconButton
            aria-label="imdb"
            onClick={() => window.open(selectedMovie.link, '_blank')}
            sx={{
            
            }}
          >
            <img src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png" alt="IMDb" style={{ width: 60, height: 60 }} />
          </IconButton>
        </Box>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Ficha;
