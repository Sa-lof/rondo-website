/* global Email */ // Esto le dice a ESLint que Email es un objeto global

import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Box,
  Modal,
} from "@mui/material";
import logoImage from '../../assets/contacto/RONDO LOGO.png';

const ContactForm = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://smtpjs.com/v3/smtp.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const nombre = form.nombre.value;
    const email = form.email.value;
    const servicio = form.servicio.value;
    const mensaje = form.mensaje.value;

    const style = `
              padding: 5px;
              border: 1px solid #ccc;
              border-radius: 8px;
              background-color: black;
              font-family: Arial, sans-serif;
              color: white;
              text-align: center;
          `

    Email.send({
      SecureToken: "0f0ecf8b-8735-47e9-99d8-fac0323d1bfa", 
      To: 'info@rondoproductions.com',
      From: "amoxtlidev@gmail.com",
      Subject: `Nuevo mensaje de contacto de ${nombre}`,
      Body: `
        <div>
          <img src="https://rondo-producciones.netlify.app/static/media/logo.ecacd97503da64e0de6c.png" alt="Imagen" style="display: block; margin-left: auto; margin-right: auto; width: 50%; padding-bottom: 10px;" />
        </div>
        <div style="${style}">
            <h3 style="color: #fefefe;">Nuevo contacto</h3>
        </div>
        <h3 style="color: black;">Datos del cliente</h3>
        <p style="color: black;"><strong style="color: black;">Nombre:</strong> ${nombre}</p>
        <p style="color: black;"><strong style="color: black;">Correo:</strong> ${email}</p>
        <p style="color: black;"><strong style="color: black;">Servicio:</strong> ${servicio}</p>
        <p style="color: black;"><strong style="color: black;">Mensaje:</strong> ${mensaje}</p>
      `,
    }).then(message => {
      if (message === "OK") {
        setModalOpen(true);
        form.reset();
      } else {
        console.error("Error al enviar el correo");
      }
    });
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
              name="nombre" // Asegúrate de agregar el atributo 'name' para identificar cada campo
              label="Nombre"
              variant="outlined"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              name="email"
              label="Correo electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              type="email"
            />
            <TextField
              name="servicio"
              label="Servicio"
              variant="outlined"
              select
              fullWidth
              margin="normal"
              required
            >
              <MenuItem value="Cine">Cine</MenuItem>
              <MenuItem value="Publicidad">Publicidad</MenuItem>
              <MenuItem value="Video musical">Video musical</MenuItem>
              <MenuItem value="Social y corporativo">Social y corporativo</MenuItem>
              <MenuItem value="Post producción">Post producción</MenuItem>
              <MenuItem value="Teatro">Teatro</MenuItem>
            </TextField>
            <TextField
              name="mensaje"
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
              border: "none", 
            }}
          >
            <img
              src={logoImage}
              alt="Imagen descriptiva"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Paper>
        </Grid>
      </Grid>
      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            width: {
              sx: 200,
              sm: 400,
              md: 400,
              lg: 500,
            },
            textAlign: 'center',
            borderRadius: 10,
          }}
        >
          <img
            src={logoImage} 
            alt="Imagen descriptiva"
            style={{
              display: "block",
              margin: "auto",
              marginBottom: "20px",
              maxWidth: "80%",
            }}
          />
          <Typography id="modal-title" variant="h6" component="h2">
            ¡Gracias por contactarnos!
          </Typography>
          <Typography variant="body2" component="p">
            Su correo se ha enviado exitosamente. Recibirá pronta respuesta.
          </Typography>
          <Button onClick={() => setModalOpen(false)} sx={{ mt: 2 }}>
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactForm;

