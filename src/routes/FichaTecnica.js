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
import poster5 from '../assets/cine/turandot/poster.jpeg';
import poster6 from '../assets/cine/Escrito/poster.jpeg';
import poster7 from '../assets/cine/Lucha/poster.jpeg';
import laurel1 from '../assets/cine/ Confabulados/AMAR ES LIBERTAD_CONFABULADOS_OFFICIAL SELECTION - MAX3MIN FESTIVAL - 2021.png';
import laurel2 from '../assets/cine/Amar/OFFICIAL SELECTION - CINEASTE INTERNATIONAL FILM FESTIVAL OF INDIA - CIFFI - 2022.png';
import laurel3 from '../assets/contacto/RONDO LOGO.png';

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
      produccion: "Rondo",
      ano: "2023",
      descripcion: "En un mundo donde la naturaleza esta por desaparecer, un grupo de amigas se reune por última vez para salvar al planeta tierra. ",
      idioma: "Español",
      poster: poster1,
      laureles: laurel3,
      links: [
        {
          label: "IMDb",
          url: "https://www.imdb.com/title/tt31462284/?ref_=ext_shr_lnk",
          icon: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png",
        },
      ],
  
      cast: [
        "María Ibarra Paleta",
        "Sofía Valdés",
        "Sabina Kuruzawa",
      ],
      genero: [
        "Drama",
        "Cambio Climático",
      ],
    },
    {
      id:"2",
      title: "Confabulados",
      duracion: "4:00 mins",
      dirigida: "Omar Drioli",
      produccion: "Rondo",
      ano: "2021",
      descripcion: "Poesía audiovisual que explora las emociones de conectar por primera vez, a través, de una conversación atemporal que construyen momentos del pasasdo.",
      idioma: "Español",
      poster: poster2,
      laureles: laurel1,
      links: [
        {
          label: "IMDb",
          url: "https://www.imdb.com/title/tt31462109/?ref_=ext_shr_lnk",
          icon: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png",
        },
        {
          label: "Letterboxd",
          url: "https://boxd.it/FkrC",
          icon: "https://a.ltrbxd.com/logos/letterboxd-mac-icon.png",
        },
        {
          label: "Filminlatino",
          url: "https://nuestrocine.mx/",
          icon: "https://play-lh.googleusercontent.com/07RVCovGaKl5m8g09v0u_JVPbHw3wFRg0PYdlyTTpRG0ZsB1kCt01DqsepLene6mSQ",
        },
      ],
      cast: [
        "Analú Flores",
        "Santiago Bautista",
      ],
      genero: [
        "Drama",
        "Romance",
        "Experimental",
      ],
    },
    {
      id:"3",
      title: "Bailar es lo más dificil",
      duracion: "Post Producción",
      dirigida: "Omar Drioli y Fernando Luna",
      produccion: "Rondo",
      ano: "Post producción",
      descripcion: "Sara terminó una relación que no le permitía ser quien era. Le cuesta volver a confiar en lo que siente. En su camino de seguir adelante conoce a Uriel. Él sin buscarlo, le contagia su manera de ver la vida, de vivir el momento, de estar presentes el uno para el otro y de darse cuenta que el amor no siempre funciona, pero a veces solo se necesita una canción y volver a intentarlo.",
      idioma: "Español",
      poster: poster3,
      laureles: laurel3,
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
      duracion: "1:46 mins",
      dirigida: "Omar Drioli",
      produccion: "Rondo",
      ano: "2022",
      descripcion: "Un cortrometraje narrado a través de la voz de Titania, una mujer que se alimenta de las almas culpables que habitan el planeta tierra, buscando sembrar una flor de amor y esperanza por cada vida que ha vengado.",
      idioma: "Español",
      poster: poster4,
      laureles: laurel2,
      links: [
        {
          label: "IMDb",
          url: "https://www.imdb.com/title/tt31462225/?ref_=ext_shr_lnk",
          icon: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png",
        },
      ],
      cast: [
        "Analú Flores",
        "Ottmar Russo",
      ],
      genero: [
        "Drama",
        "Experimental",
      ],
    },
    {
      id:"5",
      title: "La verdadera historia de la princesa turandot",
      duracion: "11:01 min",
      dirigida: "Omar Drioli",
      produccion: "Rondo",
      descripcion: "Live session de la música de la obra de teatro: La verdadera historia de la princesa turandot, en un formato estilo live session para su promoción en redes.",
      ano: "2024",
      idioma: "Español",
      poster: poster5,
      laureles: laurel3,
      links: [
        {
          label: "IMDb",
          url: "https://www.imdb.com/title/tt31462225/?ref_=ext_shr_lnk",
          icon: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png",
        },
      ],
      cast: [
        "Kaveh Parmas",
        "Daniela Momo",
        "Raúl Román",
        "Manuel Mejía",
        "Acción Sonora",
      ],
      genero: [
        "Live Session",
      ],
    },
    {
      id:"6",
      title: "Escrito y hecho ",
      duracion: "Post Producción",
      dirigida: "Omar Drioli",
      produccion: "Rondo",
      ano: "Post producción",
      descripcion: "Video musical para banda dependiente.",
      idioma: "Español",
      poster: poster6,
      laureles: laurel3,
      links: [
        {
          label: "IMDb",
          url: "https://www.imdb.com/title/tt31462225/?ref_=ext_shr_lnk",
          icon: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png",
        },
      ],
      cast: [
        "Melissa Martz",
        "Jose María Esquivel",
        "Alejandra Campos",
        "Azul Balderas",
      ],
      genero: [
        "Video Musical",
      ],
    },
    {
      id:"7",
      title: "La lucha",
      duracion: "1:00 min",
      dirigida: "Gabriel Heredia",
      produccion: "Rondo - Servicio de producción",
      ano: "2023",
      descripcion: "Valentina es una niña a la que no solo le fascina la lucha libre, sino que también algún día aspira a ser luchadora. Sin embargo, los sistemas y sociedad no dejan que ella logre ese sueño.",
      idioma: "Español",
      poster: poster7,
      laureles: laurel3,
      links: [
        {
          label: "IMDb",
          url: "https://www.imdb.com/title/tt31462225/?ref_=ext_shr_lnk",
          icon: "https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_imdb_icon_158850.png",
        },
      ],
      cast: [
        "Danna",
        "Nidia Bermejo",
        "Emma Malacara",
      ],
      genero: [
        "Drama",
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
            {selectedMovie.descripcion}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={5} style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={selectedMovie.laureles} alt="Descripción de la imagen" style={{ width: '60%' }} />
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
          {selectedMovie.links?.map((link, index) => (
    <IconButton
      key={index}
      aria-label={link.label}
      onClick={() => window.open(link.url, '_blank')}
      sx={{
        // Add custom styles if needed
      }}
    >
      <img src={link.icon} alt={link.label} style={{ width: 60, height: 60 }} />
    </IconButton>
  ))}
        </Box>
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Ficha;
