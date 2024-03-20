import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';

function FichaDecripcion(props) {
    const {duracion, dirigida, ano, cast, genero, produccion} = props;
    const etiquetaDuracion = props.isPlay ? "DRAMATURGIA" : "DURACIÓN";
  return (
    <Paper elevation={0} style={{ padding: 10, margin: 40, borderBottom: '1px solid black' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="body1" display="block" gutterBottom>
              DIRECCIÓN
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "40px",
                            },
                            fontWeight: "bold",
                            }}>
                   {dirigida}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="body1" display="block" gutterBottom>
              {etiquetaDuracion}
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "40px",
                            },
                            fontWeight: "bold",
                            }}>
                    {duracion}
                </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="body1" display="block" gutterBottom>
              GÉNERO
            </Typography>
            <Grid container spacing={1}>
            {genero?.map((genre, index) => (
              <Grid item key={index} xs={12} sm={12} md={12}>
                <Typography variant="h3" display="block" gutterBottom sx={{
                  marginBottom: "20px",
                  fontSize: {
                    xs: "23px",
                    sm: "30px",
                    md: "40px",
                    lg: "40px",
                  },
                  fontWeight: "bold",
                }}>
                  {genre}
                </Typography>
              </Grid>
            ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="body1" display="block" gutterBottom>
              PRODUCCIÓN
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "40px",
                            },
                            fontWeight: "bold",
                            }}>
                    {produccion}
                </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="body1" display="block" gutterBottom>
              ELENCO
            </Typography>
            <Grid container spacing={1}>
            {cast?.map((castMember, index) => (
              <Grid item key={index} xs={12} sm={12} md={12}>
                <Typography variant="h3" display="block" gutterBottom sx={{
                  marginBottom: "20px",
                  fontSize: {
                    xs: "23px",
                    sm: "30px",
                    md: "40px",
                    lg: "40px",
                  },
                  fontWeight: "bold",
                }}>
                  {castMember}
                </Typography>
              </Grid>
            ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Typography variant="body1" display="block" gutterBottom>
              AÑO
            </Typography>
            <Grid container spacing={1}>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "40px",
                            },
                            fontWeight: "bold",
                            }}>
                    {ano}
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}

export default FichaDecripcion;