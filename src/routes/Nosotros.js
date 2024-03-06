import React from "react";
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
  return (
    <ThemeProvider theme={theme}>
      <Nav />
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
