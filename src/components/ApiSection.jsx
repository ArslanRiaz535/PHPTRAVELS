import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const ApiData=[
    {
        name:'Instant Configuration',
        description:'Enable what you sell',
        img:'/Api/modules.webp'
    },
    {
        name:"API's & Suppliers",
        description:'20+ Integrated suppliers',
        img:'/Api/api.webp'
    },
    {
        name:'Multi-Language',
        description:'10+ Translated languages',
        img:'/Api/trans.webp'
    },
]

function ApiSection() {
  return (
    <>
        <Container sx={{width:'1140px', maxWidth:'100%', marginTop:'30px'}}>
         <Grid container spacing={3}>
          {ApiData.map((API, index)=> (

           <Grid item md={4} sm={12} xs={12} key={index} >
              <Box sx={{border:'1px solid #dee2e6', borderRadius:'19px',backgroundColor:'#f8f9fa'}} pr={3} pl={3}>
                <Typography mt={5} align='center' fontWeight={600}  variant='h5'>{API.name}</Typography>
                <Typography align='center' fontWeight={500} variant='body1'>{API.description}</Typography>
                <Box sx={{overflow:'hidden'}} mt={2}>
                <img src={API.img} style={{maxWidth:'100%', borderRadius:'5px', transform:'translateY(30px)'}} />
                </Box>
              </Box>
           </Grid>

          ))}
         </Grid>
        </Container>
    </>
  )
}

export default ApiSection