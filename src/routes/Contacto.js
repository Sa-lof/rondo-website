import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";
import "../components/loader.css"; // Asegúrate de que este archivo exista y contenga otros estilos necesarios
import loaderGif from '../assets/RONDO LOGO.gif';

const theme = createTheme({
    typography: {
      fontFamily: ["Sono", "monospace"].join(","),
    },
  });
function Contacto() {
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
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default Contacto;
