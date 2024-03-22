import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const skills = [
  {
    title: "Desarrollo creativo y preproducción",
    description:
      "Escuchar ideas / Conceptualizar / Proponer / Escritura de guiones / Storyboard / Agenda de Producción / Casting / Scouting de locación / Permisos de filmación / Logística / Aprobación",
  },
  {
    title: "Dirección y producción",
    description:
      "Ejecución en tiempo y forma establecida / Dirección de actores / Dirección de Cámara / Iluminación / Dirección de arte /  Sonorización /  Vestuario / Maquillaje / Monitoreo de imagen en tiempo real ",
  },
  {
    title: "Postproducción",
    description:
      "Edición / Montaje de imagen / Corrección de color / Efectos visuales / Animación / Musicalización / Diseńo sonoro / Mezcla / Masterización / Entregable en todo tipo de dispositivos y formatos",
  },
];

const SkillsBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        marginBottom: 10,
        padding: { xs: 2, md: 3 },
      }}
    >
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Box
              component="img"
              sx={{
                maxWidth: "100%",
                objectFit: "cover",
                maxHeight: { xs: "30vh", sm: "40vh", md: "50vh" },
                borderRadius:10,
                boxShadow: 3
              }}
              src='https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/nosotros/Nuestras%20Habilidades.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvbm9zb3Ryb3MvTnVlc3RyYXMgSGFiaWxpZGFkZXMuanBlZyIsImlhdCI6MTcxMTA3NDMxOCwiZXhwIjoxNzQyNjEwMzE4fQ.1BVfqY2-tfOXvJFOAwfGSk5XNDC0tM-ly157herDkvo&t=2024-03-22T02%3A26%3A36.344Z'
              alt="Objective banner"
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box textAlign="justify" padding={{ xs: 2, md: 3 }}>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "2rem", md: "3rem" },
                textAlign: { xs: "center", md: "left" },
                paddingBottom:{xs: 6, md: 0},
                marginBottom: { xs: 2, md: 4 },
              }}
            >
             Nuestras habilidades y metodología
            </Typography>
            {skills.map((skill, index) => (
              <Box key={index} marginBottom={4}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "1.5rem", md: "2rem" },
                    textAlign: { xs: "center", md: "left" },
                    marginBottom: 1,
                  }}
                >
                  {skill.title}
                </Typography>
                <Typography
                  sx={{
                    color: "#5A656D",
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {skill.description}
                </Typography>
                <Box
                  sx={{
                    height: "2px",
                    backgroundColor: "black",
                    marginY: 2,
                  }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsBanner;
