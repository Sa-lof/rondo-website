import React, { useState, useEffect } from "react";
import Nav from "../components/Nav/Nav";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../components/loader.css";
import loaderGif from '../assets/RONDO LOGO.gif';

const videoUrl = 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/video/omar_drioli_reel_director%20(1080p).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvdmlkZW8vb21hcl9kcmlvbGlfcmVlbF9kaXJlY3RvciAoMTA4MHApLm1wNCIsImlhdCI6MTcxMTA3MzUyNywiZXhwIjoxNzQyNjA5NTI3fQ.kFCc4nvSamlqQSHhRyznxPD9HsgiWac59dB6ycL52qY&t=2024-03-22T02%3A13%3A25.712Z';

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

function Home() {
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
      <Nav className="navbar" />
      {loading && (
        <div className="loader-container">
          <img src={loaderGif} alt="Cargando..." style={{ width: "200px", height: "200px" }} />
        </div>
      )}
      <div className="video-container" style={{ visibility: loading ? "hidden" : "visible", padding: "56.25% 0 0 0", position: "relative" }}>
      <video 
          style={{
            position: "fixed", 
            top: 0,
            left: 0,
            minWidth: "100vw", 
            minHeight: "100vh",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }} 
          controls
          autoPlay
          loop
          muted
          playsInline
          controlsList="nodownload"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </ThemeProvider>
  );
}

export default Home;
