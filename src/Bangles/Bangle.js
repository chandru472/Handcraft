import { Box, ImageListItem, Typography, Card, CardContent, Grid, useTheme } from '@mui/material'
import p1 from './photo1.jpg'
import p2 from './photo2.jpg'
import p3 from './photo3.jpg'
import p4 from './photo4.jpg'
import p5 from './photo5.jpg'
import p6 from './photo6.jpg'
import p7 from './photo7.jpg'
import p8 from './photo8.jpg'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules


const Bangle = () => {
    const theme = useTheme();


    return (
        <Box>
            <Box>
                <Typography sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, textAlign: 'center', letterSpacing: 1, background: 'linear-gradient(90deg, #C0C0C0 33%, #C0C0C0 33%, #800020  66%, #800020 66%)',

                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    mt: 4
                }}>Bangles</Typography>
            </Box>

            <Box sx={{ mx: { xs: 2, sm: 4 }, display: { xs: 'none', sm: 'none' } }}>
                <Grid container spacing={6} justifyContent="space-evenly">
                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p1}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' } }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p2}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p3}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, objectFit: 'cover' }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p4}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, objectFit: 'cover' }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p5}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, objectFit: 'cover' }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p6}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, objectFit: 'cover' }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p7}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, objectFit: 'cover' }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={12} sm={6} md={3}>
                        <Box
                            sx={{

                                backgroundColor: '#000000',
                                borderRadius: '16px',
                                border: '4px solid #800020',
                                boxShadow: 3,
                                [theme.breakpoints.up('md')]: {
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'translateY(-10px)'
                                    }
                                }
                            }}>
                            <Box
                                component='img'
                                src={p8}
                                alt='p'
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '200px', sm: '225px' }, objectFit: 'cover' }}
                            />
                            <Typography
                                sx={{
                                    fontWeight: "550",
                                    fontFamily: "sans-serif",
                                    fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                                    color: "#800020",
                                    letterSpacing: 0,
                                    mt: 2,
                                    mx: 2,
                                    textAlign: 'center'
                                }}
                            >
                                Muhurtham Bangles
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                                    fontWeight: '600',
                                    fontFamily: 'sans-serif',
                                    mt: 1,
                                    mx: 2,
                                    color: '#C0C0C0',
                                    textAlign: 'center',
                                    mb: 2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>



                </Grid>
            </Box>

            <Box sx={{ mt: 4, mx: {xs:2,sm:4}, display: { xs: 'block', sm: 'flex', justifyContent: 'space-between', alignItems: 'center' } }}>
                <Box sx={{ width: { xs: '100%', sm: '49%', md: '48%' }, p: 0 }}>
                    <Swiper loop pagination={false}  style={{ border: '4px solid #800020', borderRadius: '20px', padding: 0 }}>
                        <SwiperSlide>
                            <Box component='img' src={p1} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p2} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p3} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, objectFit: 'fill', display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p4} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p5} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p6} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p7} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>

                        <SwiperSlide>
                            <Box component='img' src={p8} alt='p' sx={{ width: '100%', height: { xs: '275px', sm: '300px', md: '405px' }, display: 'block' }} />
                        </SwiperSlide>
                    </Swiper>
                </Box>

                <Box sx={{ width: { xs: '100%', sm: '49%', md: '48%' }, p: 0 }}>

                    <Typography
                        sx={{
                            fontWeight: "550",
                            fontFamily: "sans-serif",
                            fontSize: { xs: "1.4rem", sm: "1.6rem", md: "1.8rem" },
                            color: "#800020",
                            letterSpacing: 0,
                            mt: 2,
                      
                      
                        }}
                    >
                        Muhurtham Bangles
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' },
                            fontWeight: '600',
                            fontFamily: 'sans-serif',
                            mt: 1,
                   
                            color: '#C0C0C0',
                           
                            mb:1
                        }}
                    >
                        Starting at &#8377; 800
                    </Typography>

                    <Typography sx={{ textAlign: 'justify', letterSpacing: 0, fontSize: { xs: '1rem', md: '1.3rem' }, mt: { xs: 3, sm: 0 }, fontFamily: 'sans-serif', color: '#C0C0C0' }}>
                        Handcrafted bangles are a testament to artisanal skill, each piece uniquely designed with intricate patterns. Crafted from various materials like wood, metal, and beads, they add a touch of elegance to any outfit. These bangles reflect cultural heritage and tradition, making them timeless accessories. Perfect for both casual and formal wear, handcrafted bangles are cherished for their beauty and craftsmanship.

                    </Typography>
                </Box>
            </Box>

        </Box>



    )
}

export default Bangle