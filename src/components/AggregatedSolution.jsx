import React from 'react';
import { Container, Grid, Box, Typography, Divider, List, ListItem, ListItemText } from '@mui/material';

const AggregatedSolution = () => {
  return (
    <Container disableGutters sx={{ width: '1140px', maxWidth: '100%' }}>
      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 6,
              pt: 6,
              pb: 5,
              borderRadius: '15px',
              background: "linear-gradient(137deg, rgb(115 147 255) 0%, rgb(24 67 211) 24%, rgb(1 46 126) 100%)",
              maxWidth: { xs: '100%', md: '100%' },
              overflow: 'hidden',
            
            }}
          >
            <img
              src="/Aggregated/integrations.png"
              alt="Integrations"
              style={{ maxWidth: '450px', height: 'auto' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: 10 }}>
          <Typography fontSize='2.5rem' fontWeight="bold" align="left" sx={{ ml: 3 }}>
            Aggregated Solution
          </Typography>
          <Typography variant="body1" fontWeight="bold" align="left" sx={{ mt: 2, ml: 3, fontSize: '15px' }}>
            With our multiple channel aggregation feature now we can get inventory from different APIs with realtime pricing and booking.
          </Typography>
          <Divider sx={{ ml: 3, mt: 2 }} />
          <List sx={{ ml: 5, mt: 0, listStyleType: 'disc', paddingLeft: '20px' }}>
            {[
              'GDS & OTA Integration',
              'Realtime APIs and Dashboards',
              '100% Opensource Platform Structure',
              'Highly Scalable and Extensive',
              'Secure by Additional Layers',
              'Latest Technology Implemented',
              'Self-Hosted Structure',
              'Developer Friendly Documentation',
              'Live Testing Demonstration',
            ].map((text, index) => (
              <ListItem sx={{ padding: '0px', display: 'list-item' }} key={index}>
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{ fontWeight: 'bold', fontSize: '16px', lineHeight: '14px' }}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AggregatedSolution;
