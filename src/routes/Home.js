import React from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe 
          src="https://player.vimeo.com/video/818467012?h=3c97dc420f&autoplay=1&title=0&byline=0&portrait=0" 
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }} 
          frameBorder="0" 
          allow="autoplay; fullscreen; picture-in-picture" 
          allowFullScreen 
          title="Unique Title for Iframe"
        ></iframe>
      </div>
    </ThemeProvider>
  );
}

export default Home;
