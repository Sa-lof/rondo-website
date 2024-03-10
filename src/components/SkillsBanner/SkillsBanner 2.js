import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SkillsBannerPlaceholder from "../../assets/placeholders/SkillsBannerPlaceholder.png";

const skills = [
  {
    title: "Desarrollo Creativo y Preproducción",
    description:
      "Concepto e ideación creativa / Producción / Guiones gráficos / Escritura de guiones / Casting / Localización de abastecimiento, exploración y permisos / Planificación y estrategia de producción",
  },
  {
    title: "Dirección y Producción",
    description:
      "Dirección de actores / Dirección de arte / Dirección de fotografía / Dirección de producción / Dirección de sonido / Dirección de vestuario / Dirección de maquillaje",
  },
  {
    title: "Postproducción",
    description:
      "Edición / Corrección de color / Efectos visuales / Animación / Música / Sonido / Mezcla de sonido / Masterización",
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
                maxHeight: { xs: "30vh", sm: "40vh", md: "50vh" }, // Adjust the value as needed
              }}
              src={SkillsBannerPlaceholder}
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
                marginBottom: { xs: 2, md: 4 },
              }}
            >
              Nuestras Habilidades
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
                    marginY: 2, // Creates space above and below the line
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
