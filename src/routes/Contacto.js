import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";
import ContactForm from "../components/ContactForm/ContactForm";

const theme = createTheme({
    typography: {
      fontFamily: ["Sono", "monospace"].join(","),
    },
  });
function Contacto() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <ContactForm />
      <Footer />
    </ThemeProvider>
  );
}

export default Contacto;
