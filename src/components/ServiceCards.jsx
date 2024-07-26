import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Container, CardMedia } from '@mui/material';
import CardActions from '@mui/material/CardActions';



const services = [
  {
    title: 'Flights',
    description: 'Connectivity to GDS OTAs & airline suppliers plus database flights module management.',
    image: '/Services/flight.svg' 
  },
  {
    title: 'Hotels',
    description: 'Connectivity to global hotel suppliers along with manual databased hotels inventory.',
    image: '/Services/hotel.svg' 
  },
  {
    title: 'Tours',
    description: 'Connectivity to international tours suppliers with local tour operators management.',
    image: '/Services/tours.svg' 
  },
  {
    title: 'Cars',
    description: 'Connectivity to world-wide car transfers suppliers and manual cars transfer module.',
    image: '/Services/cars.svg' 
  },
];

const suppliers = [
  { name: 'Kiwi Flights', 
    description: 'Kiwi.com is a pioneering online travel agency that revolutionizes travel planning. Leveraging advanced technology, Kiwi.com offers unique solutions like Virtual Interlining, connecting flights from various carriers seamlessly. With a user-friendly interface and innovative features, Kiwi.com empowers travelers to create customized itineraries and discover cost-effective.', 
    logo: '/Services/kiwi.png'
  },
  { name: 'Amadeus Flights', 
    description: 'Viator.com is a leading online platform for discovering and booking tours, activities, and experiences worldwide. Offering a diverse array of options, Viator connects travelers with trusted local operators, ensuring seamless exploration of destinations. With user-friendly features and a vast selection, Viator simplifies the travel planning process for memorable and immersive adventures.', 
    logo: '/Services/amadeus.png' 
  },
  { name: 'TBO Flights', 
    description: 'Amadeus.com is a leading provider of advanced technology solutions for the global travel industry. Offering innovative software and services, Amadeus facilitates seamless travel experiences, enabling businesses in aviation, hospitality, and tourism to optimize operations and enhance customer satisfaction. Their comprehensive platform empowers travel professionals with cutting-edge tools and insights.', 
    logo: '/Services/tbo.png' 
  },
  { name: 'Travelport Flights', 
    description: 'Duffel.com is a travel technology platform that facilitates airline booking integrations for travel agencies, developers, and businesses. Offering a modern API, Duffel.com simplifies the process of accessing and booking flights, enhancing efficiency and innovation within the travel industry. it has a very comprehensive API plus b2b interface with limited to features to book direct flights or via API.', 
    logo: '/Services/travelport.jpg' 
  },
  { name: 'Duffel Flights', 
    description: 'Tiqets.com is a leading online platform offering seamless access to cultural and entertainment experiences worldwide. With a user-friendly interface, Tiqets enables travelers to effortlessly discover and book tickets to museums, attractions, shows, and more. Their innovative platform simplifies the ticketing process, enhancing global access to enriching experiences.', 
    logo: '/Services/duffel.png' 
  },
  { name: 'Hotelbeds Hotels', 
    description: 'Travelport.com is a leading travel technology company providing innovative solutions for the travel industry. With a global presence, it offers a comprehensive platform connecting travel providers and agencies. Their advanced technology facilitates seamless travel experiences, enhancing efficiency, and enabling businesses to thrive in the dynamic travel landscape.', 
    logo: '/Services/hotelbeds.png' 
  },
  { name: 'Agoda Hotels', 
    description: 'TBO Holidays is a leading online travel platform offering a comprehensive range of travel services. With a user-friendly interface, it provides seamless access to hotels, flights, and holiday packages worldwide. TBO Holidays is trusted by travel agents and businesses, delivering tailored solutions and exceptional customer experiences in the travel industry.', 
    logo: '/Services/agoda.png' 
  },
  { name: 'Viator Tours', 
    description: 'Hotelbeds.com is a leading global travel trade platform, connecting hotels, travel agents, and tour operators. Offering a vast inventory of accommodations and travel services, it facilitates seamless bookings for businesses in the travel industry. With a user-friendly interface and extensive network, Hotelbeds.com ensures efficient and reliable travel solutions worldwide.', 
    logo: '/Services/viator.png' 
  },
  { name: 'Tiqets Tours', 
    description: 'PayPal.com is a widely-used online payment platform that enables secure transactions globally. Founded in 1998, it allows users to make payments, transfer money, and shop online without revealing sensitive financial information. With millions of users, PayPal facilitates e-commerce and serves as a trusted intermediary in the digital financial landscape.', 
    logo: '/Services/tiqets.png' 
  },
  { name: 'Paypal Gateway', 
    description: 'Stripe.com is a leading online payment platform that enables businesses to other then that accept and manage payments securely. With a user-friendly interface and robust API, Stripe simplifies the complexities of online transactions, supporting a wide range of currencies and payment methods. Trusted by businesses worldwide, Stripe revolutionizes e-commerce and financial technology.', 
    logo: '/Services/paypal.png' 
  },
  { name: 'Stripe Gateway', 
    description: 'Custom payment gateway integration involves seamlessly integrating a unique payment solution tailored to specific business needs. This process ensures a secure and efficient transaction experience for users. By customizing the payment gateway, businesses gain flexibility, brand consistency, and the ability to cater to specific industry requirements, enhancing overall payment functionality.', 
    logo: '/Services/stripe.png' 
  },
  { name: 'Custom Gateway', 
    description: 'Custom payment gateway integration involves seamlessly integrating a unique payment solution tailored to specific business needs. This process ensures a secure and efficient transaction experience for users. By customizing the payment gateway, businesses gain flexibility, brand consistency, and the ability to cater to specific industry requirements, enhancing overall payment functionality.', 
    logo: '/Services/custom.png' 
  },
];

function ServiceCards() {
  return (
    <Box sx={{ background: 'linear-gradient(137deg, rgb(115 147 255) 0%, rgb(24 67 211) 24%, rgb(1 46 126) 100%)', paddingTop:'45px', paddingBottom:'70px' }}>
    <Container disableGutters sx={{border:'1px solid #3d65e7', padding:'2rem', borderRadius:'7px', width:'1140px', maxWidth:'100%'}}>
    <Grid container spacing={2.5} width='100%'>
        {services.map((service, index) => (
          <Grid item  xs={12} sm={6} md={3} key={index}>
            <Card sx={{ textAlign: 'start', backgroundColor: 'inherit', color: 'white', width:'112%', boxShadow: 'none', border: 'none', padding: { xs: 0, sm: 0}  }}>
              <CardContent  >
                <Box px={5}  py={4} sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', marginBottom: 2, backgroundColor:'white', borderRadius:'6px',  }}>
                  <img src={service.image} alt={service.title} style={{maxHeight:'110px'}} />
                </Box>
                <Box>
                <Typography variant="h5" fontWeight={500} component="div" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">
                  {service.description}
                </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>


    <Container disableGutters sx={{border:'1px solid #3d65e7', padding:'2rem', marginTop:'20px' ,borderRadius:'7px', width:'1140px', maxWidth:'100%'}}>
    <Grid container spacing={2} sx={{ padding: '12px' }}>
      <Grid item xs={12}>
        <Typography variant="h6" fontSize={17} color="white" sx={{ marginBottom: '10px' }}>
          SUPPORTED SUPPLIERS
        </Typography>
      </Grid>
      {suppliers.map((supplier, index) => (
        <Grid  item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ height: '100%',  }}>
            <CardContent>
              <Grid container spacing={2} sx={{ display:'flex', flexDirection:'column', paddingBottom:'20px'  }}>
                <Grid item >
                <Box>
                  <img src={supplier.logo} alt={supplier.name} style={{ width: 70, height: 70, borderRadius:'4px' }} />
                </Box>
                </Grid>
                <Grid item xs>
                  <Typography variant="h7" sx={{ fontWeight: '600'}}>{supplier.name}</Typography>
                  <Typography variant="body2" mt={2} fontWeight='500'>{supplier.description}</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Container>

    </Box>
  );
}

export default ServiceCards;
