import React from "react";
import { Typography, Card, CardMedia, CardContent, Box } from "@mui/material";
import logoImage from '../../assets/contacto/RONDO LOGO.png';

const teamMember = {
  name: "Omar Drioli y Sebastián Rigel",
  position: "Socios",
  image: logoImage,
};

const Team = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 3,
        marginBottom: 10,
      }}
    >
      <Card
        sx={{
          maxWidth: { xs: "100%", md: 600 }, // 100% width on small screens and 600px on medium screens and above
          mx: "auto", // Horizontal margin auto for centering
          textAlign: "center",
          borderRadius: 10,
          boxShadow: 3, // Optional shadow for the card
        }}
      >
        <CardMedia
          component="img"
          image={teamMember.image}
          alt={`${teamMember.name} profile`}
          sx={{
            maxHeight: { xs: 300, md: 450 }, // Responsive image height
            objectFit: "contain",
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {teamMember.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {teamMember.position}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Team;
