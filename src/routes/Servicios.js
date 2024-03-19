import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Service from "../components/Services/Services";
import Grid from "@mui/material/Grid";
import service1 from '../assets/services/01Publicidad.jpg';
import service2 from '../assets/services/02Cine.jpeg';
import service3 from '../assets/services/03Video musical.png';
import service4 from '../assets/services/Social y Corporativo.jpg';
import service5 from '../assets/services/05PostProducción.png';
import service6 from '../assets/services/06Teatro.jpg';
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

const servicesData = [
  { title: "Cine", imagen: service2},
  { title: "Publicidad", imagen: service1},
  { title: "Video musical", imagen: service3 },
  { title: "Social y corporativo", imagen: service4},
  { title: "Post Producción", imagen: service5},
  { title: "Teatro", imagen: service6},
];

function Servicios() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
                  variant="h1"
                  sx={{
                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      md: "50px",
                      lg: "64px",
                    },
                    fontWeight: "bold",
                    paddingBottom:10,
                    paddingLeft:10,
                    paddingTop:10
                  }}
                >
                  Servicios de producción
            </Typography>
          </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center" alignItems="center" style={{paddingBottom:30}}>
        {servicesData.map((service, index) => (
          <Grid item key={index} xs={12} sm={12} md={6} lg={4}>
            <Service title={service.title} imagen={service.imagen} />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </ThemeProvider>
  );
}

export default Servicios;
