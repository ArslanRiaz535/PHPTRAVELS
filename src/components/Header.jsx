import { Box, Button, Container, Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';


const useStyles = makeStyles((theme) => ({
  img: {
    cursor: 'pointer',
    
  },
 


}));
const navLinks = {
  color: 'rgb(82, 82, 82)',
  fontSize: '17px',
  fontWeight: '500',
  '&:hover': {
    color: 'rgb(37, 37, 37)',
  },
};
const navBtn={
  padding:'3px  28px', 
  border:'1px solid black', 
  borderRadius:'7px', 
  color:"black",
  '&:hover':{
    border:'1px solid royalblue',
    color:'blue',
    backgroundColor: 'white'
  },

};



function Header() {
  const classes = useStyles();
  return (
    <>
    
      <Container disableGutters sx={{marginTop:'4px',  marginBottom:'5px', padding:0,  width:'1140px', maxWidth:'100%'}}>
    
        <Toolbar sx={{ display: { md:'flex', justifyContent:'space-between' } }} >
        <Box display="flex" alignItems='center'>
        <img src="Logo/logo.png" className={classes.img} alt="Logo" width="30.34px" height="36px" />
          <Box marginLeft={1}>
            <Typography fontWeight={700}  sx={{ fontSize: "1.2rem", cursor:'pointer', color:'black', marginTop:'-2px' }}>
              PHPTRAVELS
            </Typography>
            <Typography
              sx={{ fontSize: "11px", fontWeight: "600", boxShadow: "none", cursor:'pointer', color:'black', marginTop:'-2px' }}
            >
              Travel Tech Partner
            </Typography>
          </Box>
        </Box>
         
          <Box sx={{ display: { sm: 'none', xs:'none', md:'flex' } }} display='flex' m='auto' paddingTop='10px' gap={2} >
          <Link sx={navLinks}  href="#" underline="none">Demo</Link>
          <Link sx={navLinks} href="#" underline="none">Pricing</Link>
          <Link sx={navLinks} href="#" underline="none">Themes</Link>
          <Box display='flex' >
          <Link sx={navLinks} href="#" underline="none">Product</Link>
          <Box style={{cursor:'pointer', marginTop:'5px'}}>
        
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#919eab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"></path>
            </svg>
          </Box>
          </Box>
          <Box display='flex' >
          <Link sx={navLinks} href="#" underline="none">Features</Link>
          <Box style={{cursor:'pointer', marginTop:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#919eab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"></path>
            </svg>
          </Box>
          </Box>
          <Box display='flex' >
          <Link sx={navLinks} href="#" underline="none">Company</Link>
          <Box style={{cursor:'pointer', marginTop:'5px'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#919eab" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6"></path>
            </svg>
          </Box>
          </Box>
          </Box>
        
          <Box sx={{ display: { sm: 'none', xs:'none', md:'flex' } }}  display='flex' gap={1}>
            <Button variant="outlined" sx={navBtn}>Login</Button>
            <Button variant="contained" sx={{padding:'6px  28px', boxShadow:'none' ,borderRadius:'7px', backgroundColor:'#0d6efd','&:hover':{boxShadow:"none", backgroundColor:'blue'}}}>Signup</Button>
          </Box>
          <Box >
            <MenuIcon sx={{ display: {md:'none', sm:'inline-block', xs:'inline-block' } }} />
          </Box>
        </Toolbar>
      </Container> 
    </>
  );
}

export default Header;
