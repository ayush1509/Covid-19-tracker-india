import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import './Home.css'
export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{background: 'linear-gradient(to bottom right, #330066,#c299ff)', height: 'auto', padding:'5px',textAlign:'center' ,border: '1px solid purple'}} >
            COVID-19 is the infectious disease caused by the most recently
            discovered corona virus. This new virus and disease were unknown
            before the outbreak began in Wuhan, China, in December 2019. 
        </Typography>
      </Container>
    </React.Fragment>
  );
}
