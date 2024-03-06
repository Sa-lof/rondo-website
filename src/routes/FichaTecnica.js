import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer/Footer";

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});
function Ficha() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Footer />
    </ThemeProvider>
  );
}

export default Ficha;
