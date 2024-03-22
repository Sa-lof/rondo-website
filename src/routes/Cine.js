import React, { Suspense, useState, useEffect } from 'react';
import "../components/loader.css"; // Asegúrate de que este archivo exista y contenga otros estilos necesarios
import Nav from "../components/Nav/Nav";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom'; // Añadir esta línea
import loaderGif from '../assets/RONDO LOGO.gif';

const CineCard = React.lazy(() => import("../components/CineCard/CineCard"));

const theme = createTheme({
  typography: {
    fontFamily: ["Sono", "monospace"].join(","),
  },
});

function Cine() {
  const navigate = useNavigate();
  const handleMovieClick = (movieId) => {
    navigate(`/ficha/audiovisual/${movieId}`);
  };

  const movies = [
    {
      id:"5",
      title: "La verdadera historia de la princesa turandot",
      duration: "Live Sesion",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/turandot/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS90dXJhbmRvdC8xLnBuZyIsImlhdCI6MTcxMTA3NDg2OSwiZXhwIjoxNzQyNjEwODY5fQ.wicC65ZsQ1R8Zb10NZLbyrX7QBf_XRj3i6VX3fZ3_68&t=2024-03-22T02%3A35%3A47.007Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/turandot/2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS90dXJhbmRvdC8yLnBuZyIsImlhdCI6MTcxMTA3NDg3NywiZXhwIjoxNzQyNjEwODc3fQ.xIMutxbpFQlEBt7DKNb3OHjJtyajrfg20TdK_ABPfls&t=2024-03-22T02%3A35%3A54.857Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/turandot/2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS90dXJhbmRvdC8yLnBuZyIsImlhdCI6MTcxMTA3NDg3NywiZXhwIjoxNzQyNjEwODc3fQ.xIMutxbpFQlEBt7DKNb3OHjJtyajrfg20TdK_ABPfls&t=2024-03-22T02%3A35%3A54.857Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/turandot/4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS90dXJhbmRvdC80LnBuZyIsImlhdCI6MTcxMTA3NDg5MSwiZXhwIjoxNzQyNjEwODkxfQ.FfL-W7ff_MGvwC7coG2SQNKiNRfz2j2cyErrT1TTRrM&t=2024-03-22T02%3A36%3A09.479Z',
      ],
    },
    {
      id:"6",
      title: "Escrito y hecho",
      duration: "Video Musical",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/escrito/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9lc2NyaXRvLzEucG5nIiwiaWF0IjoxNzExMDc0OTIwLCJleHAiOjE3NDI2MTA5MjB9.XsJiEr_dmCnYngcLTNjoOjklZ2jFm_Bu0HFTeT-KJuE&t=2024-03-22T02%3A36%3A38.100Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/escrito/2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9lc2NyaXRvLzIucG5nIiwiaWF0IjoxNzExMDc0OTI4LCJleHAiOjE3NDI2MTA5Mjh9.WpTSgU0GBwammqgtgDnbM9eKb_EidElCVt31L1UOVZA&t=2024-03-22T02%3A36%3A45.932Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/escrito/3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9lc2NyaXRvLzMucG5nIiwiaWF0IjoxNzExMDc0OTM1LCJleHAiOjE3NDI2MTA5MzV9.zI-021pAOYirzXTM_NBhAoAMRcnERL41fjX7iYXdKs8&t=2024-03-22T02%3A36%3A52.932Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/escrito/4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9lc2NyaXRvLzQucG5nIiwiaWF0IjoxNzExMDc0OTQyLCJleHAiOjE3NDI2MTA5NDJ9.y6ZEy8SpjHHYJXKztuQWAtbm_RJpuTu1UFeCpQGA2cQ&t=2024-03-22T02%3A36%3A59.888Z',
      ],
    },
    {
      id:"7",
      title: "La lucha",
      duration: "Cortrometraje",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/lucha/1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9sdWNoYS8xLnBuZyIsImlhdCI6MTcxMTA3NDk3MiwiZXhwIjoxNzQyNjEwOTcyfQ.oXhWGsBSo5ld30diWxUIYSf-mi1YMy0LruSU4-mC1ZE&t=2024-03-22T02%3A37%3A30.822Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/lucha/2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9sdWNoYS8yLnBuZyIsImlhdCI6MTcxMTA3NDk4MSwiZXhwIjoxNzQyNjEwOTgxfQ.JqpFEJZVPp2XHYAgfgKc7RQVJsI90t2f5RmHlOu6S2A&t=2024-03-22T02%3A37%3A39.022Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/lucha/2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9sdWNoYS8yLnBuZyIsImlhdCI6MTcxMTA3NDk4MSwiZXhwIjoxNzQyNjEwOTgxfQ.JqpFEJZVPp2XHYAgfgKc7RQVJsI90t2f5RmHlOu6S2A&t=2024-03-22T02%3A37%3A39.022Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/lucha/4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9sdWNoYS80LnBuZyIsImlhdCI6MTcxMTA3NDk5NCwiZXhwIjoxNzQyNjEwOTk0fQ.V_MRFUWJHennzOK8Q1olt2cREJ7BKLcT50RSyNZTmQY&t=2024-03-22T02%3A37%3A52.690Z',
      ],
    },
    {
      id:"3",
      title: "Bailar es lo más difícil",
      duration: "Cortrometraje Original",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/bailar/1.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9iYWlsYXIvMS5qcGVnIiwiaWF0IjoxNzExMDc0NzQzLCJleHAiOjE3NDI2MTA3NDN9.tGOrNDDIPzyl6d7dL7oAe7dXA8lL_VR3DtCgbC8H1O8&t=2024-03-22T02%3A33%3A41.557Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/bailar/2.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9iYWlsYXIvMi5qcGVnIiwiaWF0IjoxNzExMDc0NzU1LCJleHAiOjE3NDI2MTA3NTV9.1wRcclkg2RbEP6mfxxdRwDdXXuCEECEY-9IadeW7CF0&t=2024-03-22T02%3A33%3A52.720Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/bailar/3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9iYWlsYXIvMy5qcGVnIiwiaWF0IjoxNzExMDc0NzYxLCJleHAiOjE3NDI2MTA3NjF9.Q95FooHNyRVZ-j0NCniMdd2IljwR9310qkFRCc_LOtA&t=2024-03-22T02%3A33%3A59.755Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/bailar/3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9iYWlsYXIvMy5qcGVnIiwiaWF0IjoxNzExMDc0NzYxLCJleHAiOjE3NDI2MTA3NjF9.Q95FooHNyRVZ-j0NCniMdd2IljwR9310qkFRCc_LOtA&t=2024-03-22T02%3A33%3A59.755Z',
      ],
    },
    {
      id:"1",
      title: "Sembrar",
      duration: "Cortrometraje Original",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/sembrar/1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9zZW1icmFyLzEuanBnIiwiaWF0IjoxNzExMDc0NTExLCJleHAiOjE3NDI2MTA1MTF9.BJBnoR0lvp-kFPJ_Li49qsWphLhxSe-t3OfEFx-DADg&t=2024-03-22T02%3A29%3A49.589Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/sembrar/2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9zZW1icmFyLzIuanBnIiwiaWF0IjoxNzExMDc0NTU3LCJleHAiOjE3NDI2MTA1NTd9.qwXjzAJch-Bm2p4AJ4d4NDxkYKjvTCw2WfB8gVxqcFM&t=2024-03-22T02%3A30%3A35.085Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/sembrar/3.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9zZW1icmFyLzMuanBnIiwiaWF0IjoxNzExMDc0NTcyLCJleHAiOjE3NDI2MTA1NzJ9.AhPUeeteWv67Drm-H2_qFV6Vc2GJxVjz84jpmdIKMcg&t=2024-03-22T02%3A30%3A50.136Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/sembrar/4.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9zZW1icmFyLzQuanBnIiwiaWF0IjoxNzExMDc0NTgzLCJleHAiOjE3NDI2MTA1ODN9.xAz6_Dh_CeJrCXCB-BMMvtmFcnuR-tEQF_DNd0jT6WM&t=2024-03-22T02%3A31%3A00.786Z',
      ],
    },
    {
      id:"4",
      title: "Amar es libertad",
      duration: "Cortrometraje Original",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/bailar/3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9iYWlsYXIvMy5qcGVnIiwiaWF0IjoxNzExMDc0NzYxLCJleHAiOjE3NDI2MTA3NjF9.Q95FooHNyRVZ-j0NCniMdd2IljwR9310qkFRCc_LOtA&t=2024-03-22T02%3A33%3A59.755Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/bailar/3.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9iYWlsYXIvMy5qcGVnIiwiaWF0IjoxNzExMDc0NzYxLCJleHAiOjE3NDI2MTA3NjF9.Q95FooHNyRVZ-j0NCniMdd2IljwR9310qkFRCc_LOtA&t=2024-03-22T02%3A33%3A59.755Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/amar/3.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9hbWFyLzMuUE5HIiwiaWF0IjoxNzExMDc0ODIxLCJleHAiOjE3NDI2MTA4MjF9.SgQrfaLzEqOr0R4stIa1gGCEQDKb8FtIaPGHDb1E8xQ&t=2024-03-22T02%3A34%3A58.842Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/amar/4.PNG?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9hbWFyLzQuUE5HIiwiaWF0IjoxNzExMDc0ODMyLCJleHAiOjE3NDI2MTA4MzJ9.oEa221f-uhsj8-oH3Vx_IlMUCxRk3DuZFfkYAbR5u1c&t=2024-03-22T02%3A35%3A09.843Z',
      ],
    },
    {
      id:"2",
      title: "Confabulados",
      duration: "Cortrometraje Original",
      mainImage: 'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/confabulados/1.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9jb25mYWJ1bGFkb3MvMS5qcGciLCJpYXQiOjE3MTEwNzQ2NTUsImV4cCI6MTc0MjYxMDY1NX0.WwuG9f2r4fqeNNnDi0lPwfYzoCGa7gie5K_bzgrnLsA&t=2024-03-22T02%3A32%3A13.286Z',
      smallImages: [
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/confabulados/2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9jb25mYWJ1bGFkb3MvMi5wbmciLCJpYXQiOjE3MTEwNzQ2NzEsImV4cCI6MTc0MjYxMDY3MX0.uDDvOP1xa8edeH_mW_qeeFt_CxyNQWObbJGo51CQ7Xg&t=2024-03-22T02%3A32%3A28.839Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/confabulados/3.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9jb25mYWJ1bGFkb3MvMy5wbmciLCJpYXQiOjE3MTEwNzQ2NzgsImV4cCI6MTc0MjYxMDY3OH0.q1SQjnNvnKO7X_oTlFBEAYNphaZH1rb-fmjmoWfPO5c&t=2024-03-22T02%3A32%3A36.326Z',
        'https://axgsqowkqvumwqhilzkk.supabase.co/storage/v1/object/sign/rondo-assets/cine/confabulados/4.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJyb25kby1hc3NldHMvY2luZS9jb25mYWJ1bGFkb3MvNC5wbmciLCJpYXQiOjE3MTEwNzQ2ODcsImV4cCI6MTc0MjYxMDY4N30.hz6cjVcidZyXbstsPaNlQoie0oJYfodyQKcrJ_PgtHg&t=2024-03-22T02%3A32%3A45.441Z',
      ],
    }
  ];

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      {loading && (
        <div className="loader-container">
          <img src={loaderGif} alt="Cargando..." style={{ width: "200px", height: "200px" }} />
        </div>
      )}
      <Box sx={{ width: "100vw", boxSizing: "border-box", minHeight: "50vh", marginBottom: 5, paddingTop: 7}}>
        <Grid container spacing={0} sx={{ minHeight: {
                  xs: "25vh",
                  sm: "30vh",
                  md: "35vh",
                  lg: "39vh",
                },}}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                height: {
                  xs: "65%",
                  sm: "70%",
                  md: "80%",
                  lg: "80%",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                padding: 2,
                paddingTop: {
                  xs: 10,
                  sm: 8,
                  md: 6,
                  lg: 4,
                }
              }}
            >
              <Typography
                variant="h1"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "30px",
                    sm: "40px",
                    md: "50px",
                    lg: "64px",
                  },
                  fontWeight: "bold",
                }}
              >
                “¡Por primera vez en toda mi vida, sé lo que quiero hacer! ¡Y por primera vez, lo haré!”.
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: {
                    xs: "18px", 
                    sm: "20px",
                    md: "22px",
                    lg: "24px",
                  },
                }}
              >
              - La sociedad de los poetas muertos
              </Typography>
            </Box>
          </Grid>
        </Grid>
      <Box sx={{
        flexGrow: 1,
        overflow: "hidden",
        backgroundImage: `
          repeating-linear-gradient(-45deg, black, black 10px, transparent 10px, transparent 20px),
          repeating-linear-gradient(-45deg, black, black 10px, transparent 10px, transparent 20px)
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 20px",
        backgroundPosition: "top, bottom",
        paddingBottom: 3,
        paddingTop: 3,
      }}>
        <Slider {...settings}>
          {movies.map((movie, index) => (
            <Box key={index} sx={{ textAlign: "center"}}>
              <Typography variant="h6" component="h2" sx={{fontWeight: "bold", marginTop:1.5,  marginBottom:1.5}}>
                {movie.title}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>

          <Suspense fallback={<div>Cargando...</div>}>
            <Grid container spacing={5} sx={{ marginTop: 4, padding: 5 }}>
              {movies.map((movie, index) => (
                <Grid item xs={12} sm={12} md={12} lg={6} key={movie.id}>
                  <CineCard
                    title={movie.title}
                    duration={movie.duration}
                    mainImage={movie.mainImage}
                    smallImages={movie.smallImages}
                    onClick={() => handleMovieClick(movie.id)}
                  />
                </Grid>
              ))}
            </Grid>
          </Suspense>
        </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default Cine;
