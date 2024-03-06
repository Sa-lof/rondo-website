import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function MovieCard() {
    const [selectedImage, setSelectedImage] = useState("https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png");

    const smallImages = [
        "https://img.asmedia.epimg.net/resizer/UzT6yeOIk7P6R1Nwx31_wWi5lcU=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/Z5JQ6IIK25PZZOGLPNYW7TNW3Y.jpg",
        "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/713EAC98B3CEC6A774A84243AD1FA532576F243B8A152FEA0C03C4E32BBFE018/scale?width=1200&amp;aspectRatio=1.78&amp;format=webp",
        "https://www.lavanguardia.com/files/image_449_220/files/fp/uploads/2023/02/07/63e26dd00be55.r_d.589-392.jpeg"
    ];

    return (  
        <Grid container>
          <Grid item xs={12}>
            <Card>
                <CardMedia
                component="img"
                height="280"
                image={selectedImage}
                alt="Movie Title"
                />
            </Card>
          </Grid>
  
          <Grid item container xs={12} alignItems="center" justifyContent="space-between" paddingTop={2} paddingBottom={2}>
            <Grid item xs={5}>
              <Typography gutterBottom variant="h5" component="div" marginLeft={2}
              sx={{
                marginBottom: "20px",
                fontSize: "35px",
                fontWeight: "bold",
              }}>
                4 minutos
              </Typography>
            </Grid>
  
            <Grid item container xs={7} spacing={2} justifyContent="flex-end">
                {smallImages.map((image, index) => (
                    <Grid item key={index}>
                    <CardMedia
                        component="img"
                        style={{ height: '80px', width: '80px' }} 
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
