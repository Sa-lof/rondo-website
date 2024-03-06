import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'; 

function TeatroCard() {
    const [selectedImage, setSelectedImage] = useState("https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png");
    const [hover, setHover] = useState(false);

    const smallImages = [
        "https://img.asmedia.epimg.net/resizer/UzT6yeOIk7P6R1Nwx31_wWi5lcU=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/Z5JQ6IIK25PZZOGLPNYW7TNW3Y.jpg",
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/713EAC98B3CEC6A774A84243AD1FA532576F243B8A152FEA0C03C4E32BBFE018/scale?width=1200&aspectRatio=1.78&format=webp",
        "https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2023/02/07/63e26dd00be55.r_d.589-392.jpeg"
    ];

    return (  
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8} sm={10} lg={7} md={7}>
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

            <Grid item xs={4} sm={2} lg={1} md={1} container direction="column" justifyContent="center" alignItems="center">
                {smallImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        style={{ height: '95px', width: '95px', padding: '5px', borderRadius: '10px'}} 
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
                                sm: "35px",
                                md: "45px",
                                lg: "50px",
                            },
                            fontWeight: "bold",
                            }}>
                    2020
                </Typography>
                <Typography variant="body1" display="block" gutterBottom>
                    DURACIÓN
                </Typography>
                <Typography variant="h3" display="block" gutterBottom sx={{
                            marginBottom: "20px",
                            fontSize: {
                                xs: "23px",
                                sm: "35px",
                                md: "45px",
                                lg: "50px",
                            },
                            fontWeight: "bold",
                            }}>
                    4 min
                </Typography>
            </Grid>
        </Grid>
    );
}
  
export default TeatroCard;
