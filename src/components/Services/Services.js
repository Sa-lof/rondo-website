import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, Typography } from '@mui/material';

export default function Service({ title, imagen }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card 
      sx={{ maxWidth: 300, margin: 'auto', position: 'relative', borderRadius:10, boxShadow: 15}}
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        sx={{ height: 300 }}
        image={imagen}
        title={title}
      />
      {isHovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
           <Typography variant="h4" component="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                    {title}
            </Typography>
        </Box>
      )}
    </Card>
  );
}
