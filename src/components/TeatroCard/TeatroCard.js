import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'; 

function TeatroCard({title, mainImage, smallImages, duracion, ano }) {
  const [selectedImage, setSelectedImage] = useState(mainImage);
  const [hover, setHover] = useState(false);

    return (  
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8} sm={10} lg={7} md={7}>
            <Card
              onMouseEnter={() => setHover(true)} 
              onMouseLeave={() => setHover(false)} 
              sx={{ position: 'relative', width: 1, height: 300 }}
            >
              <CardMedia
                component="img"
                image={selectedImage}
                alt={title}
                sx={{
                  width: 1,
                  height: 300,
                  opacity: hover ? 0.3 : 1, 
                  transition: 'opacity 0.5s'
                }}
              />
              {hover && ( 
                <Grid
                  container
                  sx={{
                    position: 'absolute', 
                    top: 0,
                    width: 1,
                    height: 300,
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center'
                  }}
                >
                  <IconButton size="large" sx={{ color: 'black', position: 'absolute', // Posición absoluta
                      top: 8, // Superior derecho
                      right: 8, }}>
                    <PlayCircleOutlineIcon sx={{ fontSize: '4rem' }} />
                  </IconButton>
                  <Typography variant="h4" component="h2" sx={{ color: 'black', fontWeight: 'bold', position: 'absolute', // Posición absoluta
                      bottom: 8, // Inferior izquierdo
                      left: 8,}}>
                    {title}
                  </Typography>
                </Grid>
              )}
            </Card>
            </Grid>

            <Grid item xs={4} sm={2} lg={1} md={1} container direction="column" justifyContent="center" alignItems="center">
            {smallImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                style={{ height: '100px', width: '95px', padding: '5px', borderRadius: '10px' }}
                onClick={() => setSelectedImage(image)}
              />
            ))}
            </Grid>
            <Grid item xs={12} sm={12} lg={3} md={3} container direction="column" justifyContent="center" alignItems="center" sx={{ borderTop: '2px solid black',  marginTop: {
        xs: '30px',
        sm: '30px',
        md: '0px',
        lg: '0px'
    }, marginLeft:{
        xs: '0px',
        sm: '0px',
        md: '30px',
        lg: '30px'
    }}}>
                <Typography variant="body1" display="block" gutterBottom>
                    AÑO
                </Typography>
                <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "25px",
                                md: "35px",
                                lg: "35px",
                            },
                            fontWeight: "bold",
                            }}>
                   {ano}
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    DURACIÓN
                </Typography>
                <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                              xs: "23px",
                              sm: "25px",
                              md: "35px",
                              lg: "35px",
                            },
                            fontWeight: "bold",
                            }}>
                    {duracion}
                </Typography>
            </Grid>
        </Grid>
    );
}
  
export default TeatroCard;
