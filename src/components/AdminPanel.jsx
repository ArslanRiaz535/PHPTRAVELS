import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";

const AdminPanel = () => {
  return (
    <>
      <Container sx={{ marginTop: "40px", width: "1140px", maxWidth: "100%" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
        >
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  border: "1px solid #dee2e6",
                  borderRadius: "19px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Box
                  component="img"
                  src="/Admin/admin.png"
                  alt="Laptop 1"
                  width="100%"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} mt={5}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
                Self Hosted & Complete Admin Control Panel
              </Typography>
              <Typography variant="body2" fontWeight={600} paragraph mr={3}>
                Enable disable modules, Drag and drop content to create stunning
                travel portal in minutes. You have everything you need to build
                creative travel booking website, interactive design including
                high quality demo data by default. Discover all features.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  padding: "7px 25px",
                  border: "1px solid #0d6efd",
                  borderRadius: "4px",
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "blue",
                    color: "white",
                    "& svg": {
                      stroke: "white",
                      color: "white",
                      outline: "white",
                    },
                  },
                }}
              >
                Learn More
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  ml={2}
                  mb={0.5}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    style={{ fontWeight: "bold" }}
                    height="10"
                    viewBox="0 0 14 14"
                  >
                    <path
                      id=""
                      data-name="패스 1346"
                      d="M1.7,0V1.269H11.842L0,13.1l.9.9L12.731,2.17V12.3H14V0Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ width: "1140px", maxWidth: "100%" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          
          
        >
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  border: "1px solid #dee2e6",
                  borderRadius: "19px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Box
                  component="img"
                  src="/Admin/compatible.png"
                  alt="Laptop 1"
                  width="100%"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} mt={5}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
              Compatible with Every Size of Travel Business
              </Typography>
              <Typography variant="body2" fontWeight={600} paragraph mr={3}>
              PHPTRAVELS is designed for travel agencies and agents that want to move their operations online, helping them setup a fully-working booking system. Where users can search, check availability, book, flights, tours, cars, packages and much more all via a simple interface.
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  padding: "7px 25px",
                  border: "1px solid #0d6efd",
                  borderRadius: "4px",
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "blue",
                    color: "white",
                    "& svg": {
                      stroke: "white",
                      color: "white",
                      outline: "white",
                    },
                  },
                }}
              >
                Learn More
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                  ml={2}
                  mb={0.5}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    style={{ fontWeight: "bold" }}
                    height="10"
                    viewBox="0 0 14 14"
                  >
                    <path
                      id=""
                      data-name="패스 1346"
                      d="M1.7,0V1.269H11.842L0,13.1l.9.9L12.731,2.17V12.3H14V0Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container sx={{ width: "1140px", maxWidth: "100%" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          py={2}
          
        >
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  border: "1px solid #dee2e6",
                  borderRadius: "19px",
                  backgroundColor: "#f8f9fa",
                }}
              >
                <Box
                  component="img"
                  src="/Admin/bookingengine.png"
                  alt="Laptop 1"
                  width="100%"
                />
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={6} mt={5}>
              <Typography variant="h4" fontWeight={600} gutterBottom>
              The Booking Engine you Ever Require
              </Typography>
              <Typography variant="body2" fontWeight={600} paragraph mr={3}>
              PHPTRAVELS is an online reservations solution that acts as your work of travel platform. It functions as a combination of both booking and reporting programs and can work on any device. With it, you can make pages for content and travel guides. The flexible solution which can be used on various reservation services
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  padding: "7px 25px",
                  border: "1px solid #0d6efd",
                  borderRadius: "4px",
                  "&:hover": {
                    boxShadow: "none",
                    backgroundColor: "blue",
                    color: "white",
                    "& svg": {
                      stroke: "white",
                      color: "white",
                      outline: "white",
                    },
                  },
                }}
              >
                Learn More
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  ml={2}
                  mb={0.5}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    style={{ fontWeight: "bold" }}
                    height="10"
                    viewBox="0 0 14 14"
                  >
                    <path
                      id=""
                      data-name="패스 1346"
                      d="M1.7,0V1.269H11.842L0,13.1l.9.9L12.731,2.17V12.3H14V0Z"
                      fill="currentcolor"
                    ></path>
                  </svg>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default AdminPanel;
