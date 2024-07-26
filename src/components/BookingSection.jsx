import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function BookingSection() {
  return (
    <>
        <Container sx={{marginTop:'40px', width:'1140px', maxWidth:'100%'}}>
          <Box align='center' sx={{border:'1px solid #dee2e6', borderRadius:'30px',width:'130px', margin:'auto'}}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" style={{width:'95px', height:'115px'}} width="700.000000pt" height="700.000000pt" viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="logo" x1="2%" y1="1%" x2="100%" y2="1%">
                  <stop offset="0%" style={{stopColor:"#2667ff", stopOpacity:1}}></stop>
                  <stop offset="100%" style={{stopColor:"#072ac8",stopOpacity:1}}></stop>
                </linearGradient>
              </defs>
              <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="url(#logo)" stroke="none">
                <path d="M4435 5753 c-307 -19 -533 -75 -848 -209 l-156 -66 -78 45 c-146 86
              -349 156 -563 193 -115 20 -360 23 -445 5 -141 -29 -285 -91 -330 -141 -42
              -46 -7 -157 90 -288 l44 -60 68 34 c112 55 204 74 367 74 87 0 164 -6 202 -15
              74 -17 174 -54 174 -64 0 -8 -171 -70 -275 -100 -320 -91 -556 -73 -658 50
              -54 67 -97 165 -97 222 0 60 -12 54 -40 -21 -28 -73 -28 -158 -2 -278 43 -196
              136 -378 224 -443 94 -69 244 -98 431 -81 317 28 432 73 1177 461 489 255 824
              365 1145 376 157 6 237 -7 327 -53 72 -36 153 -116 185 -183 25 -49 28 -67 27
              -146 0 -105 -22 -172 -89 -275 -65 -101 -174 -196 -415 -361 -188 -129 -664
              -429 -682 -429 -4 0 -8 19 -8 43 0 107 -57 347 -126 536 -30 82 -175 390 -202
              429 -6 10 -59 -13 -218 -94 -115 -59 -210 -108 -212 -110 -2 -1 14 -33 35 -71
              134 -235 217 -551 248 -944 l6 -76 -138 -78 c-245 -139 -511 -317 -803 -538
              -172 -131 -243 -191 -368 -312 -275 -265 -473 -617 -489 -865 -4 -75 -2 -94
              22 -160 66 -182 187 -375 300 -478 54 -49 138 -103 182 -116 20 -7 20 -3 -13
              61 -123 241 -21 584 288 969 189 236 545 536 869 732 789 479 1159 721 1514
              987 267 200 412 385 494 630 107 320 19 641 -248 905 -148 146 -286 223 -484
              270 -75 18 -310 43 -361 38 -12 -1 -43 -3 -71 -5z"></path>
                <path d="M3955 2994 c-154 -91 -285 -171 -291 -177 -7 -7 -24 -50 -39 -97 -85
              -260 -216 -498 -365 -662 -116 -128 -345 -305 -490 -378 -30 -15 -91 -40 -135
              -55 -44 -16 -85 -32 -91 -37 -19 -14 -36 -88 -35 -153 1 -114 63 -232 148
              -282 37 -21 56 -26 109 -24 121 3 264 51 412 138 294 172 642 576 832 968 100
              206 159 392 200 633 19 114 37 292 29 292 -2 -1 -130 -75 -284 -166z"></path>
              </g>
            </svg>
          </Box>

          <Typography mt={3} align='center' variant='h4'  fontWeight={600}>World's Leading Booking System</Typography>
          <Typography align='center' variant='body1'  fontWeight={500}>We offer the most cutting-edge online travel & booking solutions for the market</Typography>

            <Grid container  mt={4} spacing={3}>
              <Grid item md={8} sm={12} xs={12} paddingBottom={2}>
                <Box  sx={{border:'1px solid #dee2e6', backgroundColor:'#f8f9fa', borderRadius:'20px', overflow:'hidden'}} p={3}>
                    <Typography paddingTop={4} align='center'  fontSize={26} fontWeight={700}>Self Hosted</Typography>
                    <Typography align='center' fontWeight={500}>You have everything you need to build a travel booking engine</Typography>
                    <img style={{maxWidth:'100%', transform: 'translateY(80px)', borderRadius:'5px' }} src='/Booking/selfhost.png' />
                </Box>
              </Grid>
              <Grid item md={4} sm={12} xs={12} >
                <Box sx={{border:'1px solid #dee2e6', backgroundColor:'#f8f9fa', borderRadius:'20px', overflow:'hidden'}} p={3}>
                    <Typography paddingTop={4} align='center'  fontSize={25} fontWeight={700}>Ready to Scale</Typography>
                    <Typography align='center' fontWeight={500}>100% Opensource-Code</Typography>
                    <img style={{maxWidth:'100%' , transform: 'translateY(36px)', marginTop:'39px',borderRadius:'5px' }} src='/Booking/opensource.webp' />
                </Box>
              </Grid>
            </Grid>
        </Container>
    </>
  )
}

export default BookingSection