import React from 'react';
import { Paper, Grid, Typography } from '@mui/material';

function FichaDecripcion() {
  return (
    <Paper elevation={0} style={{ padding: 10, margin: 40, borderBottom: '1px solid black' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="body1" display="block" gutterBottom>
              DIRIGIDA Y PRODUCIDA POR
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                    Omar Drioli
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" display="block" gutterBottom>
              AÑO
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                    2021
                </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="body1" display="block" gutterBottom>
              DURACIÓN
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                    4 min
                </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={3}>
            <Typography variant="body1" display="block" gutterBottom>
              IDIOMA
            </Typography>
            <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                    Español
                </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" display="block" gutterBottom>
              CAST
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                    Analú Flores
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
              <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                    Santiago Bautista
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="body1" display="block" gutterBottom>
              GÉNERO
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={6}>
              <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                   Drama
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
              <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                   Romance
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6}>
              <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "30px",
                                md: "40px",
                                lg: "45px",
                            },
                            fontWeight: "bold",
                            }}>
                   Experimental
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}

export default FichaDecripcion;