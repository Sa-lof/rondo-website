import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
      fontFamily: ["Sono", "monospace"].join(","),
    },
  });
function Teatro() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
}

export default Teatro;
