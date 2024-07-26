import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';

const GrowingSection = () => {
  return (
    <>
      <Container disableGutters sx={{ textAlign: 'center', marginTop: '80px' }}>
        <Typography variant="h5" fontWeight={500} >
          We are Growing!
        </Typography>
      </Container>
      <Container
        disableGutters
        sx={{
          position: { xs: 'static', md: 'relative' },
          zIndex: -1,
          width: '1140px',
          maxWidth: '100%',
          transform: { xs: 'none', md: 'translate(10px, 140px)' }
        }}
      >
        <img src="/Growing/globeBackground.svg" alt="Globe Background" style={{ width: '100%' }} />
        <Box
          sx={{
            position: { xs: 'static', md: 'absolute' },
            top: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 5
          }}
          className="globe-img"
        >
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={4} sx={{ marginTop: { md: 5 } }}>
              <Paper
                elevation={3}
                sx={{
                  py: 4,
                  mx: 'auto',
                  width: { xs: '80%', md: '50%' },
                  borderRadius: '15px',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h3" color="#0d6efd" fontWeight="bold" sx={{ mt: 0 }}>
                  4K+
                </Typography>
                <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '14px' }}>
                  Live Websites
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4} sx={{ marginTop: { xs: 3, md: 0 } }}>
              <Paper
                elevation={3}
                sx={{
                  py: 4,
                  mx: 'auto',
                  width: { xs: '80%', md: '50%' },
                  borderRadius: '15px',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h3" color="#0d6efd" fontWeight="bold" sx={{ mt: 1 }}>
                  180K+
                </Typography>
                <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '14px' }}>
                  Users
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4} sx={{ marginTop: { xs: 3, md: 5 } }}>
              <Paper
                elevation={3}
                sx={{
                  py: 4,
                  mx: 'auto',
                  width: { xs: '80%', md: '50%' },
                  borderRadius: '15px',
                  textAlign: 'center'
                }}
              >
                <Typography variant="h3" color="#0d6efd" fontWeight="bold" sx={{ mt: 0 }}>
                  6M+
                </Typography>
                <Typography variant="body2" fontWeight="bold" sx={{ fontSize: '14px' }}>
                  Bookings
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default GrowingSection;
