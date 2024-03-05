import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import ObjectiveBanner from "../components/ObjectiveBanner/ObjectiveBanner";
import SkillsBanner from "../components/SkillsBanner/SkillsBanner";
import Team from "../components/Team/Team";
import AboutBannerImage from "../components/AboutBannerImage/AboutBannerImage";
import ContactBanner from "../components/ContactBanner/ContactBanner";

const theme = createTheme({
  typography: {
    fontFamily: ["Arimo", "sans-serif"].join(","),
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
      <AboutBannerImage />
      <ContactBanner />
    </ThemeProvider>
  );
}

export default Nosotros;
