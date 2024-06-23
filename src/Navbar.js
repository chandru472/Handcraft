import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ImageListItem from '@mui/material/ImageListItem';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo1 from './logoh.png';
import Slide from '@mui/material/Slide';
import { Divider } from '@mui/material';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {React.cloneElement(children, {
        style: trigger ? {
          backgroundColor: "transparent",
          boxShadow: 'none',
          transition: 'all 0.2s ease-in-out',
          backdropFilter: 'none',
          borderBottomLeftRadius: '0',
          borderBottomRightRadius: '0',
        } : {
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
          transition: 'all 0.2s ease-in-out',
          backdropFilter: "blur(25px)",
          borderBottomLeftRadius: '0.8rem',
          borderBottomRightRadius: '0.8rem',
        }
      })}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};



export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Box onClick={handleDrawerToggle} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <IconButton sx={{ my: 1, mx: 1 }}>
          <CloseIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexGrow: 1 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText sx={{ textAlign: 'center', color: 'white', '&:hover': { color: 'red', transform: 'scale(1)', transition: 'all 0.2s ease-out 0s' } }}>About</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText sx={{ textAlign: 'center', color: 'white', '&:hover': { color: 'red', transform: 'scale(1)', transition: 'all 0.2s ease-out 0s' } }}>Services</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText sx={{ textAlign: 'center', color: 'white', '&:hover': { color: 'red', transform: 'scale(1)', transition: 'all 0.3s ease-in-out' } }}>Products</ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton >
              <ListItemText sx={{ textAlign: 'center', color: 'white', '&:hover': { color: 'red', transform: 'scale(1)', transition: 'all 0.3s ease-in-out' } }}>Contact Us</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar component="nav">
          <Toolbar>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", mx: { sm: 2, md: 6 }, my: { sm: 0.5, md: 0.5 } }}>
              <Box sx={{ my: 0 }}>
                <ImageListItem sx={{ width: { xs: 58, sm: 72 }, height: { xs: 58, sm: 72 } }}>
                  <img src={logo1} alt='logo' />
                </ImageListItem>
              </Box>

              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Typography sx={{ mx: { sm: 1, md: 2 }, color: "white", fontSize: { sm: "0.9rem", md: "1rem" }, '&:hover': { color: 'red', transform: 'scale(1.1)', transition: 'all 0.3s ease-in-out' } }}>About</Typography>
                  <Typography sx={{ mx: { sm: 1, md: 2 }, color: "white", fontSize: { sm: "0.9rem", md: "1rem" }, '&:hover': { color: 'red', transform: 'scale(1.1)', transition: 'all 0.3s ease-in-out' } }}>Services</Typography>

                  <Box sx={{ position: 'relative' }}>
                    <FormControl variant="">
                      <Select
                        displayEmpty
                        renderValue={() => (
                          <Typography sx={{ mx: { sm: 1, md: 2 }, color: "white", fontSize: { sm: "0.9rem", md: "1rem" }, '&:hover': { color: 'red', transform: 'scale(1.1)', transition: 'all 0.3s ease-in-out', cursor: 'pointer' } }}>
                            Products
                          </Typography>
                        )}
                        sx={{
                          '& .MuiSelect-icon': { display: 'none' },
                          '&:hover .MuiSelect-icon': { display: 'none' },
                          '& .MuiOutlinedInput-notchedOutline': { border: 'none' }, // Remove outline/border
                        }}
                      >
                        <MenuItem>
                          Bangles
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Box>

                  <Typography sx={{ mx: { sm: 1, md: 2 }, color: "white", fontSize: { sm: "0.9rem", md: "1rem" }, '&:hover': { color: 'red', transform: 'scale(1.1)', transition: 'all 0.3s ease-in-out' } }}>Contact Us</Typography>
                </Box>
              </Box>
            </Box>

            <IconButton
              color="black"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: 'none' }, ml: 'auto' }}
            >
              <MenuIcon sx={{ color: 'white' }} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: { xs: '100%', sm: 240 }, backgroundColor: 'black' },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
      <Container>
        <Box sx={{ my: 2 }}>
          {/* Content goes here */}
        </Box>
      </Container>
    </React.Fragment>
  );
}
