import React from 'react';
import { Container, Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const ContainerStyled = styled(Container)(({ theme }) => ({
  position: 'relative',
  textAlign: 'center',
  padding: theme.spacing(4),
}));

const CentralImage = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto',
  zIndex: -1,
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const SurroundingBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: 350,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: 'auto',
    padding: theme.spacing(1),
    position: 'relative',
    marginBottom: theme.spacing(2),
  },
}));

const TopLeftBox = styled(SurroundingBox)(({ theme }) => ({
  top: '12%',
  left: '0%',
  [theme.breakpoints.down('sm')]: {
    top: 'auto',
    left: 'auto',
  },
}));

const TopRightBox = styled(SurroundingBox)(({ theme }) => ({
  top: '11%',
  right: '0%',
  [theme.breakpoints.down('sm')]: {
    top: 'auto',
    right: 'auto',
  },
}));

const BottomLeftBox = styled(SurroundingBox)(({ theme }) => ({
  bottom: '3%',
  left: '0%',
  [theme.breakpoints.down('sm')]: {
    bottom: 'auto',
    left: 'auto',
  },
}));

const BottomRightBox = styled(SurroundingBox)(({ theme }) => ({
  bottom: '6%',
  right: '0%',
  [theme.breakpoints.down('sm')]: {
    bottom: 'auto',
    right: 'auto',
  },
}));
const BottomBox = styled(SurroundingBox)(({ theme }) => ({
  bottom: '-25%',
  right: '34%',
  [theme.breakpoints.down('sm')]: {
    bottom: 'auto',
    right: 'auto',
  },
}));

const CenterText = styled(Typography)({
  color: '#333',
  fontWeight: 'bold',
});

const SocialNetwork = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container sx={{ width: '1140px', maxWidth: '100%', paddingTop: '50px' }}>
      <ContainerStyled>
        {!isSmallScreen && (
          <CentralImage>
            <CenterText>
              <img src='/Social/engine.webp' width='480px' alt="Central Logo" />
            </CenterText>
          </CentralImage>
        )}
        <TopLeftBox>
          <Typography fontWeight={600} align="center">LIFETIME UPDATES & SUPPORT</Typography>
          <Typography lineHeight={1.8} mt={1} color='#495057' fontWeight={600}>
            Lifetime license for your domain with updates and premium support to help you troubleshoot at any point of product.
          </Typography>
        </TopLeftBox>
        <TopRightBox>
          <Typography fontWeight={600} align="center">PRE-INTEGRATED API's</Typography>
          <Typography lineHeight={1.8} mt={1} color='#495057' fontWeight={600}>
            Travel suppliers integration ready. no need expensive developers hiring or development. single click enable disable suppliers
          </Typography>
        </TopRightBox>
        <BottomLeftBox>
          <Typography fontWeight={600} align="center">EXTRA MODULES</Typography>
          <Typography lineHeight={1.8} mt={1} color='#495057' fontWeight={600}>
            It's not typical booking engine PHPTRAVELS comes with bundle of extra modules such as CMS, Blog, Newsletter, Coupon-codes and much more.
          </Typography>
        </BottomLeftBox>
        <BottomRightBox>
          <Typography fontWeight={600} align="center">MULTI ACCOUNTS</Typography>
          <Typography lineHeight={1.8} mt={1} color='#495057' fontWeight={600}>
            Based on multiple user permissions and accounts privileges. super admin, admin staff, users, guests, suppliers and agents.
          </Typography>
        </BottomRightBox>
        <BottomBox>
          <Typography fontWeight={600} align="center">AGGREGATED API's CONTENT</Typography>
          <Typography lineHeight={1.8} mt={1} color='#495057' fontWeight={600}>
          Premium feature to aggregate mix and show content from all suppliers on same page with filteration and senitization.
          </Typography>
        </BottomBox>
      </ContainerStyled>
     
    </Container>
  );
};

export default SocialNetwork;
