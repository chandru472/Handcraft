import { Box, ImageListItem, Typography, Card, CardContent, Grid, useTheme } from '@mui/material'
import React from 'react'
import p1 from './photo1.jpg'
import p2 from './photo2.jpg'
import p3 from './photo3.jpg'
import p4 from './photo4.jpg'
import p5 from './photo5.jpg'
import p6 from './photo6.jpg'
import p7 from './photo7.jpg'
import p8 from './photo8.jpg'

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

            <Box sx={{mx:4,display:{xs:'none',sm:'block'}}}>
                <Grid container spacing={5} justifyContent="space-evenly">
                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>


                    <Grid item xs={5.5} sm={5} md={3}>
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
                                sx={{ borderTopRightRadius: '12px', borderTopLeftRadius: '12px', width: '100%', height: { xs: '150px', sm: '247px' }, objectFit: 'cover' }}
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
                                    textAlign:'center'
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
                                    mb:2
                                }}
                            >
                                Starting at &#8377; 800
                            </Typography>
                        </Box>
                    </Grid>



                </Grid>
            </Box>
        </Box>



    )
}

export default Bangle