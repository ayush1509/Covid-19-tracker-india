import React, { useEffect,useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './Card.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,

  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();
  const [confirmed,setConfirmed] = useState(0);
  const [active,setActive] = useState(0);
  const [cured,setCured] = useState(0);
  const [death, setDeath] = useState(0);
  
  useEffect(()=>{
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
      axios.get('http://covid19-india-adhikansh.herokuapp.com/summary')
      .then(res => {
        setConfirmed(res.data['Total Confirmed cases'])
        setCured(res.data['Cured/Discharged/Migrated'])
        setDeath(res.data['Death'])
        var activecal = res.data['Total Confirmed cases'] - res.data['Cured/Discharged/Migrated'] - res.data['Death']
        setActive(activecal)
        
      })

  },[])

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent className="change">
          <Typography gutterBottom variant="h5" component="h2">
            Summary
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span> <b>Total No. of cases: {confirmed}</b></span><br/><br/>
            <span><b>No. of active cases: {active} </b></span><br/><br/>
            <span><b> Discharged or Cured: {cured}</b></span><br/><br/>
            <span><b> Deaths : {death}</b></span><br/><br/>
            <span><b>Maharastra is the hardest hit State in the country with over 20,000 active cases</b></span>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
