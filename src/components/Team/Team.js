import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";

import TeamPlaceholder from "../../assets/placeholders/TeamPlaceholder.png";

const teamMembers = [
  {
    name: "Nombre",
    position: "Puesto",
    image: TeamPlaceholder,
  },
  {
    name: "Nombre",
    position: "Puesto",
    image: TeamPlaceholder,
  },
  // ... add more team members as needed
];

const Team = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        boxSizing: "border-box",
        marginBottom: 10,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        fontWeight={"bold"}
        fontSize={"64px"}
      >
        Conoce al equipo
      </Typography>
      <Grid container spacing={2} justifyContent="center" display={"flex"}>
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} justifyContent={"center"} display={"flex"}>
            <Card
              sx={{
                maxWidth: 345,
                textAlign: "center",
                borderRadius: 10,
                border: "none",
              }}
            >
              <CardMedia
                component="img"
                height="400"
                image={member.image}
                alt={`${member.name} profile`}
              />
              <CardContent sx={{textAlign: "justify", paddingRight: 5, paddingLeft: 5}}>
                <Typography gutterBottom variant="h5" component="p" fontWeight={"bold"}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Team;
