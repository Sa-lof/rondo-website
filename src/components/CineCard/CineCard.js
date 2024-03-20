import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

function MovieCard({ title, duration, mainImage, smallImages, onClick }) { // Añade onClick aquí
    const [selectedImage, setSelectedImage] = useState(mainImage);
    const [hover, setHover] = useState(false);

    return (
      <Grid container>
          <Grid item xs={12}>
            <Card
              onMouseEnter={() => setHover(true)} 
              onMouseLeave={() => setHover(false)} 
              sx={{ position: 'relative', width: 1, height: 280, boxShadow: 15}}
            >
              <CardMedia
                component="img"
                image={selectedImage}
                alt={title}
                sx={{
                  width: 1,
                  height: 280,
                  opacity: hover ? 0.3 : 1, 
                  transition: 'opacity 0.5s',
                  boxShadow: 3
                }}
              />
              {hover && (
                <Grid onClick={onClick}
                  container
                  sx={{
                    position: 'absolute', 
                    top: 0,
                    width: 1,
                    height: 280,
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <IconButton size="large" sx={{ color: 'black', position: 'absolute', 
                      top: 8, 
                      right: 8, }}>
                    <PlayCircleOutlineIcon sx={{ fontSize: '4rem' }} />
                  </IconButton>
                  <Typography variant="h4" component="h2" sx={{ color: 'black', fontWeight: 'bold', position: 'absolute', 
                      bottom: 8, 
                      left: 8,}}>
                    {title}
                  </Typography>
                </Grid>
              )}
            </Card>
          </Grid>

          <Grid item container xs={12} alignItems="center" justifyContent="space-between" paddingTop={2} paddingBottom={2}>
            <Grid item xs={12} lg={5} md={5} sm={5}>
              <Typography gutterBottom variant="h5" component="div"
              sx={{
                marginBottom: "20px",
                fontSize: {
                  xs: "23px",
                  sm: "25px",
                  md: "35px",
                  lg: "35px",
              }, 
                fontWeight: "bold",
                textAlign: {
                    xs: "center", 
                    sm: "left",  
                    md: "left", 
                    lg: "left",
                  },
              }}>
                {duration}
              </Typography>
            </Grid>

            <Grid item container xs={12} lg={7} md={7} sm={7} spacing={2} sx={{
                  justifyContent: {
                    xs: "center", 
                    sm: "flex-end",
                    md: "flex-end",
                    lg: "flex-end",
                  }
                }}>
                {smallImages.map((image, index) => (
                    <Grid item key={index}>
                    <CardMedia
                        component="img"
                        style={{ height: '80px', width: '80px', borderRadius: '10px', boxShadow: 3}} 
                        image={image}
                        alt={`Small Image ${index + 1}`}
                        onClick={() => setSelectedImage(image)}
                    />
                    </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
    );
}
  
export default MovieCard;
