import { Box } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import Product from './Product'
import Bangle from './Bangles/Bangle'

const App = () => {
  return (
    <Box>
      <Navbar />
      <Product />
      <Bangle/>
    </Box>
  )
}

export default App