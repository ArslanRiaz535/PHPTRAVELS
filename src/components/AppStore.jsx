import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function AppStore() {
  return (
    <>
        <Box sx={{backgroundColor:'black'}}>
            <Container sx={{width:'1140px', maxWidth:'100%', color:'white', paddingBottom:'90px'}}>
              <Typography variant='h4' fontWeight={600} align='center' pt={8}>Sell Travel Anytime Anywhere</Typography>
              <Box mt={12}>
                <Grid container display='flex' justifyContent='center' gap='14px' >
                  <Grid item sm={12} xs={12} md={3}>
                    <Box display='flex' border='1px solid white' borderRadius='15px' gap='8px' sx={{padding:'11px 14px', cursor:'pointer'}}>
                      <Box display='flex' justifyContent='center' alignItems='center'>
                      <img src="/App/download.svg" alt="AppStore" />
                      </Box>
                      <Box mt={0.4}>
                        <Typography variant='body2'>Download on the</Typography>
                        <Typography variant='h5' fontWeight={600}>AppStore</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} xs={12} md={3}>
                    <Box display='flex' border='1px solid white' borderRadius='15px' gap='8px' sx={{padding:'11px 14px', cursor:'pointer'}}>
                      <Box display='flex' justifyContent='center' alignItems='center'><img src="/App/download (1).svg" alt="AppStore" /></Box>
                      <Box mt={0.4}>
                        <Typography variant='body2'>Download on the</Typography>
                        <Typography variant='h5' fontWeight={600}>AppStore</Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item sm={12} xs={12} md={3}>
                    <Box display='flex' border='1px solid white' borderRadius='15px' gap='8px' sx={{padding:'11px 14px', md:{maxWidth:'230px'}, cursor:'pointer'}}>
                      <Box display='flex' justifyContent='center' alignItems='center'><img src="/App/download (2).svg" alt="AppStore" /></Box>
                      <Box mt={0.4}>
                        <Typography variant='body2'>Download on the</Typography>
                        <Typography variant='h5' fontWeight={600}>AppStore</Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box align='center' mt={5}><img src="/App/mob.png" alt="MobileView" width="50%"/></Box>
              <Box align='center' mt={4}>
                <Button variant='contained'  sx={{textTransform:'none', fontSize:'20px', fontWeight:'400',boxShadow:'none' ,borderRadius:'5px', backgroundColor:'#0d6efd', '&:hover':{boxShadow:"none", backgroundColor:'blue'}}} >Read More About Apps</Button>
               </Box>
            </Container>
        </Box>
    </>
  )
}

export default AppStore