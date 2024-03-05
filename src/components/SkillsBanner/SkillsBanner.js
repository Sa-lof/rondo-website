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
        width: "100vw",
        boxSizing: "border-box",
        marginBottom: 10,
      }}
    >
      <Grid
        container
        alignItems="center"
        style={{ width: "100%", margin: 0, padding: 3 }}
      >
        <Grid item xs={12} sm={6} sx={{ padding: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 2,
              height: "100%",
            }}
          >
            <img
              src={SkillsBannerPlaceholder}
              alt="Sills banner"
              style={{
                maxWidth: "100%",
                objectFit: "cover",
                height: "100%",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ padding: 3 }}>
          <Box textAlign={"justify"} padding={0}>
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              fontWeight={"bold"}
              fontSize={"64px"}
            >
              Nuestras Habilidades
            </Typography>
            {skills.map((skill, index) => (
              <Box key={index} sx={{ marginBottom: "3rem" }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    marginTop: "2rem",
                  }}
                >
                  {skill.title}
                </Typography>
                <hr
                  style={{
                    borderTop: "1px solid black",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                ></hr>
                <Typography
                  variant="body"
                  sx={{
                    textTransform: "uppercase",
                    textAlign: "justify",
                    color: "#5A656D",
                  }}
                >
                  {skill.description}
                </Typography>
                <hr
                  style={{
                    borderTop: "1px solid black",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                ></hr>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillsBanner;
