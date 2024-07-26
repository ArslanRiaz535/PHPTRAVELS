import { Box, Container, Typography, Button, Grid, IconButton } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/system';


const VideoContainer = styled(Box)({
  position: 'relative',
  borderRadius: '39px',
  overflow: 'hidden',
});



const SupportIcon = styled(Box)({
  border: '1px solid #e0e0e0',
  backgroundColor: '#fff',
  borderRadius: '0.4rem',
  padding: '1rem',
  textAlign: 'center',
  '& img': {
    width: '100%',
    padding: '0.5rem',
  },
  '& p': {
    fontSize: '12px',
    fontWeight: 'bold',
    margin: '0.5rem 0 0 0',
    color:'#0d6efd'
  },
});


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

function SupportTeam() {
    const classes = useStyles();  
  return (
    <>
        <Container sx={{marginTop:'40px', width:'1140px', maxWidth:'100%'}}>
            <Box align='center'>
               <Box display='flex' justifyContent='center' alignItems='center' border='1px solid #dee2e6' borderRadius='50%' width='70px' height='70px'>
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" style={{maxHeight: "70px",  maxWidth: "70px"}}  viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="#000" stroke="none">
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
               <Box>
                <Typography mt={2} fontSize='28px' fontWeight={500}>Helping Small Businesses</Typography>
                <Typography fontSize='28px' fontWeight={500}>To Solve Big Problems</Typography>
                <Typography fontSize='16px' fontWeight={500}>Our mission is to deliver industry-leading solutions at an affordable price.</Typography>
                <Typography fontSize='16px' fontWeight={500}>Learn why this matters and how we are delivering it today.</Typography>
               </Box>
               <Box my={5} display='grid' gap={2} width='fit-content' gridAutoFlow='column'>
         <Button variant='contained'   sx={{padding:'4px 80px', boxShadow:'none' ,borderRadius:'11px', backgroundColor:'#0d6efd', '&:hover':{boxShadow:"none", backgroundColor:'blue'}}}>Pricing</Button>
         <Button
      variant="outlined"
      sx={{
        padding: '7px 76px',
        border:'1px solid #0d6efd',
        borderRadius: '11px',
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
        <Typography fontSize='28px' fontWeight={500}>Dedicated Support Team</Typography>
        <Typography fontSize='16px' fontWeight={500}>Our Premium Support includes with highly-qualified Software Engineers, Developers, and DevOps.</Typography>
            </Box>
            
        </Container>





        <Container
      sx={{
        width:'1140px',
        maxWidth:'100%',
        border: '1px solid #e0e0e0',
        backgroundColor: '#f8f9fa',
        borderRadius: '1rem',
        mt: 5,
        p: 3,
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={3}>
          <VideoContainer>
            <video autoPlay muted style={{ width: '100%' }} src="/Support/Video/support.mp4" />
          
          </VideoContainer>
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography variant="body1"  fontWeight="bold" sx={{ fontSize: '13px', textAlign: 'center' }}>
            We are available through all channels
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            {[
              { src: '/Support/email.svg', label: 'Email Support', link: '' },
              { src: '/Support/whatsapp.svg', label: 'Whatsapp', link: '' },
              { src: '/Support/livechat.svg', label: 'Live Chat', link: '' },
              { src: '/Support/call.svg', label: 'Call Support', link: '' },
              { src: '/Support/ticket.svg', label: 'Ticket Support', link: '' },
              { src: '/Support/contact.svg', label: 'Contact Us', link: '' },
            ].map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <SupportIcon>
                  <a href={item.link}>
                    <img src={item.src} alt={item.label} />
                    <Typography component="p">{item.label}</Typography>
                  </a>
                </SupportIcon>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </>
  )
}

export default SupportTeam