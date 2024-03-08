import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'; 

function MovieCard() {
    const [selectedImage, setSelectedImage] = useState("https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png");
    const [hover, setHover] = useState(false);

    const smallImages = [
        "https://img.asmedia.epimg.net/resizer/UzT6yeOIk7P6R1Nwx31_wWi5lcU=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/Z5JQ6IIK25PZZOGLPNYW7TNW3Y.jpg",
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/713EAC98B3CEC6A774A84243AD1FA532576F243B8A152FEA0C03C4E32BBFE018/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
        "https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2023/02/07/63e26dd00be55.r_d.589-392.jpeg"
    ];

    return (  
        <Grid container>
          <Grid item xs={12}>
            <Card
              onMouseEnter={() => setHover(true)} 
              onMouseLeave={() => setHover(false)} 
              sx={{ position: 'relative', width: 1, height: 280 }}
            >
              <CardMedia
                component="img"
                image={selectedImage}
                alt="Movie Title"
                sx={{
                  width: 1,
                  height: 280,
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
                    height: 280,
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
                    Título película
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
                fontSize: "35px",
                fontWeight: "bold",
                textAlign: {
                    xs: "center", 
                    sm: "left",  
                    md: "left", 
                    lg: "left",
                  },
              }}>
                4 minutos
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
                        style={{ height: '80px', width: '80px', borderRadius: '10px' }} 
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
