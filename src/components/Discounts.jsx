import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';

const Support=[
    {
        icon:'CheckIcon',
        name:'Support',
        description:'We have a dedicated and expert support team for you, We communicate and help you with Livechat, Skype, Whatsapp and ticket system in real-time 24/7.',
    },
    {
        icon:'CheckIcon',
        name:'100% Opensource',
        description:'Developed using the latest technologies, PHP, JS, jQuery, HTML5, Bootstrap and Codeigniter framework with HMVC coding pattern.',
    },
    {
        icon:'CheckIcon',
        name:'Responsive Design',
        description:'Responsive themes for seamless full-blow user experience by managing a steady look and feel of your site across devices.',
    },
    {
        icon:'CheckIcon',
        name:'Security',
        description:'We take security seriously and back our product with a Security Bounty Program to encourage responsible disclosure by researchers..',
    },
    {
        icon:'CheckIcon',
        name:'Flexible',
        description:'With our streamlined technology we give you an unprecedented level of control. User-friendly fast, easy to understand and manage.',
    },
    {
        icon:'CheckIcon',
        name:'Multi-Lingual',
        description:'Ability to add, edit or customize any language as per your requirements. RTL & LTR both versions available with an editable option.',
    },
    {
        icon:'CheckIcon',
        name:'Payment Gateways',
        description:'Supports with all the payment gateways carried by major e-payments to power your customers transfer payments hassle-free.',
    },
    {
        icon:'CheckIcon',
        name:'Customizations',
        description:'A flexible and powerful templating engine and many built-in options allow you to fully customize the system to your needs.',
    },
    {
        icon:'CheckIcon',
        name:'Performance',
        description:'Robust search engine, and secure payment system provide an all-in-one solution for customers to easily make their travel arrangements.',
    },
  
]

function Discounts() {
  return (
    <>
        <Container sx={{marginTop:'220px', width:'1140px', maxWidth:'100%'}}>
          <Box align='center' border='1px solid #dee2e6' bgcolor='#f8f9fa' borderRadius='16px' pb={5}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{marginTop:'50px'}} width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#004bff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            <Typography mt={2} fontSize='27px' fontWeight={500}>Do you offer discounts for non-profits or educational institutions?</Typography>
            <Typography fontSize='14px' fontWeight={600}>Yes we do. We are happy to offer verified non-profits, school, and universities a 25% discount on the all products.</Typography>
            <Typography fontSize='14px' fontWeight={600}>You can email <span style={{cursor:'pointer', color:'#0d6efd'}}>info@phptravel.com</span>  to get the process started.</Typography>
          </Box>
          <Grid container mt={3}>
          {Support.map((Support, index)=>(

            <Grid item md={4} sm={6} xs={12} key={index} p={1} mt={2}>
                <Box>
                   <Box display='flex' alignItems='center' >
                     <CheckIcon sx={{color:'blue'}}>{Support.icon}</CheckIcon>
                      <Typography fontWeight={600} fontSize='20px'>{Support.name}</Typography>
                    </Box>
                    <Typography fontSize='14px' mt={1} fontWeight={600}>{Support.description}</Typography>
                </Box>
            </Grid>
          ))}
          </Grid>
        </Container>
    </>
  )
}

export default Discounts