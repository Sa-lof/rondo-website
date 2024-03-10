import React from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Box,
} from "@mui/material";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4, md: 8 }, marginTop: 4 }}>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} lg={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Contacto
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField
              label="Servicio"
              variant="outlined"
              select
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value="servicio1">Servicio 1</MenuItem>
              <MenuItem value="servicio2">Servicio 2</MenuItem>
            </TextField>
            <TextField
              label="Mensaje"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              multiline
              rows={4}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "black",
                "&:hover": { backgroundColor: "grey" },
              }}
              fullWidth
            >
              Enviar
            </Button>
          </form>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Paper
            variant="outlined"
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              minHeight: { sm: 300 },
            }}
          >
            <img
              src="ruta_a_tu_imagen.jpg" // Reemplaza con la ruta a tu imagen
              alt="Imagen descriptiva"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
