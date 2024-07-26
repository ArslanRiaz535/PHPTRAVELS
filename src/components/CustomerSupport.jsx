import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function CustomerSupport() {
  return (
    <>
        <Box bgcolor='#f8f9fa' mt={7} pb={7}>
            <Container  sx={{width:'1140px', maxWidth:'100%', paddingTop:'60px'}} >
              <Grid container spacing={3}>
               <Grid item md={4} sm={12} xs={12}>
                <Box>
                    <img src='/Customer/sales.svg' width='100%' style={{borderRadius:'8px'}}/>
                    <Typography mt={1} variant='h6' fontWeight={600}>Real-time sales & reports</Typography>
                    <Typography mt={0.5} variant='body2' fontWeight={600}>Your business on the go! Monitor your sales and generate reports on the go with our mobile-friendly platform.</Typography>
                </Box>
               </Grid>
               <Grid item md={4} sm={12} xs={12}>
                <Box>
                    <img src='/Customer/service.svg' width='100%' style={{borderRadius:'8px'}}/>
                    <Typography mt={1} variant='h6' fontWeight={600}>Dedicated account support</Typography>
                    <Typography mt={0.5} variant='body2' fontWeight={600}>Your dedicated account manager is with you every step of the way, with technical, marketing and analytics expertise.</Typography>
                </Box>
               </Grid>
               <Grid item md={4} sm={12} xs={12}>
                <Box>
                    <img src='/Customer/supports.svg' width='100%' style={{borderRadius:'8px'}}/>
                    <Typography mt={1} variant='h6' fontWeight={600}>8/5 customer support</Typography>
                    <Typography mt={0.5} variant='body2' fontWeight={600}>We’ve got your back! Your customers can reach us 24/7 via email and phone through our three customer support centres.</Typography>
                </Box>
               </Grid>
              </Grid>
            </Container>
        </Box>
    </>
  )
}

export default CustomerSupport