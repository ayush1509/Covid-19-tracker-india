import React ,{useState, useEffect}from 'react';
import axios from "axios";

import { Grid } from '@material-ui/core';
import OutlinedCard from '../city/city';

export interface data {
    name:String;
    _id: String;
    confirmed: number;
    cured: number;
    death: number;
    total: number;

}

const State: React.FC =() => {
    const [obj,setObj] = useState([])
    useEffect(()=>{
          axios.get('http://covid19-india-adhikansh.herokuapp.com/states')
          .then(res => {  
            setObj(res.data.state)
          })
      },[])
  return (
    <div className="State">
        <Grid container direction="row"justify="space-around"alignItems="flex-start">
            {console.log(obj)}
            {obj.map( (city: data)=> (
                <OutlinedCard city = {city} />    
            ))}

        </Grid>
    </div>
  );
}

export default State;
