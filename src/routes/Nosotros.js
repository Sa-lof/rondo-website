import React, { useState, useEffect } from "react";
import "../components/loader.css"; // Asegúrate de que este archivo exista y contenga otros estilos necesarios
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import ObjectiveBanner from "../components/ObjectiveBanner/ObjectiveBanner";
import SkillsBanner from "../components/SkillsBanner/SkillsBanner";
import Team from "../components/Team/Team";
import ContactBanner from "../components/ContactBanner/ContactBanner";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});
function Nosotros() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

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
      <AboutBanner />
      <ObjectiveBanner />
      <SkillsBanner />
      <Team />
      <ContactBanner />
      <Footer />
    </ThemeProvider>
  );
}

export default Nosotros;
