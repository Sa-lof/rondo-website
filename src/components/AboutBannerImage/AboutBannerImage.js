import React from "react";
import { Box, CardMedia } from "@mui/material";
import AboutBannerImagePlaceholder from "../../assets/placeholders/AboutBannerImagePlaceholder.png";

const AboutBannerImage = () => {
  return (
    <Box
      sx={{
        boxShadow: 3, // Adjust the shadow intensity as needed
        borderRadius: 10, // You can adjust the border-radius as needed
        width: "100vw", // Adjust width as per your layout
        mx: "auto", // Centers the box if it's not full width
        marginBottom: 10,
      }}
    >
      <CardMedia
        component="img"
        image={AboutBannerImagePlaceholder} // Replace with the path to your image
        alt="About banner"
        sx={{
          width: "100%", // This will make sure the image scales with the box
          height: "auto", // This will keep the image's aspect ratio
        }}
      />
    </Box>
  );
};

export default AboutBannerImage;
