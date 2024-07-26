import { Avatar, Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import HeroImg from '/Hero/bg.jpg';
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';

const HeroBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${HeroImg})`,
  width: '100%',
  height: '100%',
  backgroundPosition: '100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  paddingBottom: '30px',
  [theme.breakpoints.down('sm')]: {
    backgroundSize: 'cover',
  },
}));

const useStyles = makeStyles((theme) => ({
  icon: {
    transform: 'translate(-140px, 3px)',
  },
  svg: {
    transition: 'color 0.3s, stroke 0.3s, outline 0.3s',
    '&:hover': {
      stroke: 'white',
      color: 'white',
      outline: 'white',
    },
  },
}));

function HeroSection() {
  const classes = useStyles();
  return (
    <>
      <HeroBox>
        <Container sx={{ width: '1140px', maxWidth: '100%' }}>
          <Grid container mb={5}>
            <Grid item md={5} sm={12} xs={12}>
              <Box mt={12}>
                <Typography variant="h4" fontSize="2.5rem" fontWeight={600}>
                  Start an Online{' '}
                  <Box style={{ color: '#0d6efd' }} sx={{ display: 'inline', position: 'relative' }}>
                    Travel&nbsp;
                    <Box className={classes.icon} sx={{ position: 'absolute', display: 'inline' }}>
                      <svg width="150px" height="90px" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652" stroke="#FA6823" strokeWidth="4px" fill="none"></path>
                        <path d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786" stroke="#FA6823" strokeWidth="2px" fill="none"></path>
                      </svg>
                    </Box>
                  </Box>
                  Business Today!
                </Typography>
                <Typography variant="body2" mt={2} fontWeight="500" sx={{ maxWidth: '390px' }}>
                  100% Open-source Code and Pre-integrated API Suppliers Sell Flights, Hotels, Tours, Cars, Visa and much more.
                </Typography>
              </Box>
              <Box mt={3} display="flex" gap={3}>
                <Button
                  variant="contained"
                  sx={{
                    padding: '4px 35px',
                    boxShadow: 'none',
                    borderRadius: '8px',
                    backgroundColor: '#0d6efd',
                    '&:hover': { boxShadow: 'none', backgroundColor: 'blue' },
                  }}
                >
                  Pricing
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    padding: '7px 35px',
                    border: '1px solid #0d6efd',
                    borderRadius: '8px',
                    '&:hover': {
                      boxShadow: 'none',
                      backgroundColor: 'blue',
                      color: 'white',
                      '& svg': {
                        stroke: 'white',
                        color: 'white',
                        outline: 'white',
                      },
                    },
                  }}
                >
                  Demo
                  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} mb={0.3}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={classes.svg}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="royalblue"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h13M12 5l7 7-7 7"></path>
                    </svg>
                  </Box>
                </Button>
              </Box>

              <Box display="flex" alignItems="center" gap={3} mt={6}>
                <Avatar sx={{ width: 55, height: 55 }} alt="Qasim Hussain" src="/Hero/qasim.jpeg" />
                <Box>
                  <Typography fontWeight={600} fontSize="0.9rem">
                    15 min discovery call
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    fontSize="1rem"
                    sx={{ textDecoration: 'underline', cursor: 'pointer', color: '#0d6efd' }}
                  >
                    Talk with a specialist
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7} display="flex" alignItems="center" justifyContent="center">
              <Box sx={{ display: { sm: 'none', xs: 'none', md: 'block' }, marginLeft: '29px' }} mt={3}>
                <img src="./Hero/screen2.png" width="100%" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </HeroBox>
    </>
  );
}

export default HeroSection;
