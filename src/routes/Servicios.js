import React, { useState, useEffect } from "react";
import "../components/loader.css"; // Asegúrate de que este archivo exista y contenga otros estilos necesarios
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Service from "../components/Services/Services";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Footer from "../components/Footer/Footer";
import loaderGif from '../assets/RONDO LOGO.gif';

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

const servicesData = [
  { title: "Cine", imagen: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/servicios/02Cine.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvc2VydmljaW9zLzAyQ2luZS5qcGVnIiwiaWF0IjoxNzExMDgyOTEyLCJleHAiOjE3NDI2MTg5MTJ9.UhYXBsPAJ7nJXA-sM4svsAwu9zn5PNG2zx7rS_bAwcU&t=2024-03-22T04%3A49%3A49.949Z'},
  { title: "Publicidad", imagen: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/servicios/01Publicidad.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvc2VydmljaW9zLzAxUHVibGljaWRhZC5qcGciLCJpYXQiOjE3MTEwODI4ODksImV4cCI6MTc0MjYxODg4OX0.7sbHFzLX9ij908eOLXA_TMgOCpHfLmQYe0IhwwLvfMQ&t=2024-03-22T04%3A49%3A27.397Z'},
  { title: "Video musical", imagen: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/servicios/03Video%20musical.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvc2VydmljaW9zLzAzVmlkZW8gbXVzaWNhbC5wbmciLCJpYXQiOjE3MTEwODI5MjQsImV4cCI6MTc0MjYxODkyNH0.MIkhYnNzNwnyCUeBf-6zdQoiEtc8ltElBlwP79ohMTs&t=2024-03-22T04%3A50%3A02.048Z' },
  { title: "Social y corporativo", imagen: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/servicios/WhatsApp%20Image%202024-03-22%20at%2008.04.56.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvc2VydmljaW9zL1doYXRzQXBwIEltYWdlIDIwMjQtMDMtMjIgYXQgMDguMDQuNTYuanBlZyIsImlhdCI6MTcxMTEyMDAzMSwiZXhwIjoxNzQyNjU2MDMxfQ.IqshHrTK-5snU7dNGdlwy_9lyyNxcYHuSlOqe8SV5kM&t=2024-03-22T15%3A08%3A28.962Z'},
  { title: "Post Producción", imagen: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/servicios/05PostProduccion.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvc2VydmljaW9zLzA1UG9zdFByb2R1Y2Npb24ucG5nIiwiaWF0IjoxNzExMDgyOTUwLCJleHAiOjE3NDI2MTg5NTB9.qFQVxKEmXJilKP66EUYKKMUvPOIgGaICtx3UAXDQVJs&t=2024-03-22T04%3A50%3A28.505Z'},
  { title: "Teatro", imagen: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/servicios/06Teatro.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvc2VydmljaW9zLzA2VGVhdHJvLmpwZyIsImlhdCI6MTcxMTA4Mjk2MCwiZXhwIjoxNzQyNjE4OTYwfQ.yANfogkfTSpqrWm3kEIRhzSSrmz0nCnamxaQN-7jPfA&t=2024-03-22T04%3A50%3A38.478Z'},
];

function Servicios() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
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
