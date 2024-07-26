import React from 'react';
import { Container, Box, Grid, Typography, Link, SvgIcon } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box component="footer" sx={{ pt: 5, bgcolor: '#000', color: 'white' }}>
      <Container sx={{width:'1140px', maxWidth:'100%'}}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" alignItems="center" gap={1} color="white">
              <img src="/Footer/brand.png" alt="brand" style={{ maxWidth: 36, maxHeight: 36, marginTop: 2 }} />
              <Box>
                <Typography variant="h6" fontWeight="bold" mb={0} pb={0}>PHPTRAVELS</Typography>
                <Typography fontSize='12px' fontWeight={300}>Travel Tech Partner</Typography>
              </Box>
            </Box>
            <Box display="flex" gap={1} mt={3}>
              <Link href="#" color="inherit" display='flex' justifyContent='center' alignItems='center' width={36} height={36} border='1px solid white' borderRadius='50%' bgcolor='white'>
                <SvgIcon component={FacebookIcon} style={{ fill: '#005cff' }} />
              </Link>
              <Link href="#" color="inherit" display='flex' justifyContent='center' alignItems='center' width={36} height={36} border='1px solid white' borderRadius='50%' bgcolor='white'>
                <SvgIcon component={TwitterIcon} style={{ fill: '#005cff' }} />
              </Link>
              <Link href="#" color="inherit" display='flex' justifyContent='center' alignItems='center' width={36} height={36} border='1px solid white' borderRadius='50%' bgcolor='white'>
                <SvgIcon component={LinkedInIcon} style={{ fill: '#005cff' }} />
              </Link>
              <Link href="#" color="inherit" display='flex' justifyContent='center' alignItems='center' width={36} height={36} border='1px solid white' borderRadius='50%' bgcolor='white'>
                <SvgIcon component={YouTubeIcon} style={{ fill: '#005cff' }} />
              </Link>
              <Link href="#" color="inherit" display='flex' justifyContent='center' alignItems='center' width={36} height={36} border='1px solid white' borderRadius='50%' bgcolor='white'>
                <SvgIcon component={InstagramIcon} style={{ fill: '#005cff' }} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {[
                { title: 'PRODUCT', links: ['Demo', 'Mobile Apps', 'Pricing', 'Features', 'Technology'] },
                { title: 'RESOURCES', links: ['Changelog', 'Updates', 'Requirements', 'Affiliate', 'Road Map'] },
                { title: 'SERVICES', links: ['Product' ,'Services', 'Customizations', 'Changelog', 'EAN Hotel'] },
                { title: 'SERVICES', links: ['Blog', 'About Us', 'Contact Us', 'Jobs WE ARE HIRING!'] }
              ].map((section, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <Typography variant="h7" fontWeight="bold">{section.title}</Typography>
                  <Box mt={3}>
                    {section.links.map((link, linkIndex) => (
                      <Link fontWeight={300} sx={{textDecoration:'none', fontSize:'15px'}} key={linkIndex} href="#" display="block" color="inherit">{link}</Link>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Box component="hr" sx={{ bgcolor: 'white', mt: 5, backgroundColor: "gray", height: "1px", border: "none", opacity:'0.4' }} />
        <Grid container mt={5}>
          <Grid item xs={12} md={8}>
            <img src="Footer/gateway.webp" alt="payment gateways" />
            <Typography variant="h6" mt={1} mb={0} fontWeight="bold">Accepted Payments</Typography>
            <Typography variant="body2" my={0} mt={0} style={{ fontSize: 14 }}>
              All the major e-payment gateways are accepted here
            </Typography>
            <Typography variant="body2" mt={0} pt={0} style={{ fontSize: 14 }}>
              including Paypal, Credit Card, Western Union, Skrill, Crypto, Transferwise.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <Grid container spacing={5}>
              <Grid item xs={6} md={6}>
                <img src="/Footer/captera.png" alt="captera" style={{ width: '100%' }} />
              </Grid>
              <Grid item xs={6} md={6}>
                <img src="/Footer/g-for-startups.svg" alt="startups" style={{ width: '100%' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box component="hr" sx={{ bgcolor: 'white', mt: 5, backgroundColor: "gray", height: "1px", border: "none", opacity:'0.4' }} />
        <Container disableGutters sx={{ p: 0 }}>
          <Grid container mt={3} pb={4}>
            <Grid item xs={12} md={5} textAlign={{ xs: 'center', md: 'start' }}>
              <Typography variant="body2" fontWeight={600} style={{ fontSize: 15 }}>© 2023 PHPTRAVELS. All Rights Reserved.</Typography>
            </Grid>
            <Grid item xs={12} md={7} >
              <Grid container fontSize='15px' p={0} m={0} width='100%' display='flex' justifyContent='space-between' fontWeight={600} >
                {['Abuse Policy', 'Privacy Policy', 'Terms Service', 'Live Chat', 'Content Program'].map((policy, index) => (
                  <Grid item xs={6} md={2}  key={index}   textAlign="center">
                    <Link sx={{textDecoration:'none', color:'white', }} href="#" >{policy}</Link>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default Footer;
