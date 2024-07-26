import React from 'react';
import { Container, Grid, Box, Typography, TextField, Button } from '@mui/material';
import SvgIcon from '@mui/material/SvgIcon';

const NewsletterSection = () => {
  return (
    <Box 
      sx={{ 
        py: 2, 
        backgroundColor: 'primary.main', 
        backgroundImage: 'url(/Newsletter/headine.webp)',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat'
      }}
    >
      <Container sx={{ width: '1140px', maxWidth: '100%' }}>
        <Grid container >
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <SvgIcon sx={{ fontSize: 90, color: '#fff' }}>
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700.000000 700.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,700.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
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
            </SvgIcon>
            <Box sx={{ color: 'white' }}>
              <Typography fontSize='28px' fontWeight={500} sx={{ mb: 0 }}>
                Join our newsletter
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: '15px', mt: 0, pt: 0 }}>
                And stay updated
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: 2 }}>
            <TextField
              variant="outlined"
              type="email"
              placeholder="your@email.com"
              fullWidth
              sx={{
                backgroundColor: 'white',
                borderRadius: '10px',
                fontSize: '16px',
                height: '50px',
                '& .MuiOutlinedInput-root': {
                  '& input': {
                    padding: '14px',
                    '&::placeholder': {
                      color: '#212529', 
                      opacity: 1,
                    },
                  },
                  '& fieldset': {
                    borderRadius: '10px',
                    borderColor: 'transparent', 
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent', 
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent', 
                  },
                },
                '@media (min-width: 0px) and (max-width: 600px)': {
                  width: '100%',
                },
                '@media (min-width: 600px)': {
                  
                }
              }}
            />
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{
                border:'1px solid white',
                borderRadius: '9px',
                textTransform: 'none',
                px: 7,
                height: '50px',
                fontSize: '19px',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'navy',
                  border: '1px solid white',
                },
                '@media (min-width: 0px) and (max-width: 600px)': {
                  width: '100%',
                },
                '@media (min-width: 600px)': {
                  width: 'auto',
                }
              }}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
