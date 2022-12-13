import axios  from 'axios';
import React, { Component } from 'react';

import { POKEMON_API_URL } from '../config';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { withStyles } from '@mui/styles';

// const useStyles = makeStyles((theme)=>({
//     pokedexContainer:{
//         height: "80vh",
//         backgroundColor: "black",
        
//     },
// }))

function PokemonDetails () {
    const classes= useStyles();
//     constructor(props ){
//         super(props)
//         this.state = {
//             pokemon:null
//         }

//     }
// componentDidMount(){
//     const {match} = this.props
//     console.log(match)
//     const { id } = match.params.id;
//     axios.get(POKEMON_API_URL + "/" + id).then((response) => {
//         if(response.status >= 200 && response.status < 300){
//             console.log("here is the data")
//             console.log(response.data)
//             this.setState({pokemon :response.data})
//         }
//     })
// }
    
        return (
      <div>
        <h1 style={{marginTop:200}}> Hello</h1>
      </div>
        );
    
}

export default PokemonDetails;