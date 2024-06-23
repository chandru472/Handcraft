import { Box, ImageListItem, Typography } from '@mui/material'
import React from 'react'
import hand from './handcraft1.jpg'

const Product = () => {
    return (
        <Box>
            <Box>
                <Typography sx={{
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, textAlign: 'center', letterSpacing: 1.5, background: 'linear-gradient(90deg, #C0C0C0 33%, #C0C0C0 33%, #800020  66%, #800020 66%)',

                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 600,
                    mt: 4
                }}>Our Products</Typography>
            </Box>

            <Box sx={{ mx: {xs:2,md:4}, mt: 4, display: { xs: 'block', sm: 'flex' }, justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ width: { xs: '100%', sm: '50%', md: '48%' } }}>
                    <ImageListItem sx={{ border: '4px solid #800020', borderRadius: '20px' }}>
                        <img src={hand} alt='productphoto' style={{ borderRadius: '16px' }} />
                    </ImageListItem>
                </Box>
                <Box sx={{ width: { xs: '100%', sm: '45%', md: '48%' } }}>
                    <Typography sx={{ textAlign: 'justify', letterSpacing: 0.5, fontSize: { xs: '1rem',sm:'0.9rem', md: '1.3rem' }, mt: { xs: 3, sm: 0 }, fontFamily: 'sans-serif',color:'#C0C0C0' }}>
                        Explore our exquisite range of handcrafted products, including photo frames, keychains, and bangles. Each piece is meticulously crafted, showcasing unique designs and intricate details. Perfect for adding a touch of elegance and personal flair, these items blend functionality with artistic expression. Discover the beauty and tradition of artisanal craftsmanship in every piece.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Product