import { Box, CircularProgress, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';
import PokemonCard from '../components/PokemonCard';


export default function Pokedex(props) {
    const [pokemonData, setPokemonData]= useState(null)
    useEffect(()=>{
    axios.get(POKEMON_API_URL+"?limit=800").then((response)=>{
        //console.log(response.data)

        if(response.status >= 200 && response.status <300){
            const {results}= response.data;
            let newPokemonData = [];
            results.forEach((pokemon, index) => {
                index++
                let pokemonObject={
                    id: index,
                    url: IMAGE_API_URL + index + ".png",
                    name: pokemon.name               
                }

              //  console.log("pokemonObject", pokemonObject)
               // console.log("pokemon", pokemon)
                newPokemonData.push(pokemonObject)
                
            });

            setPokemonData(newPokemonData)

        }
    })
    },[])//run everytime when this component renders  
   
    return (
     <Box mt={10}>
        {pokemonData ? 
        <Grid container spacing={2} style={{backgroundColor :'rgb(68, 68, 68)'}}>
        {pokemonData.map((pokemon)=>{
            return (<PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>)

        })} </Grid> 
        : 
        <CircularProgress style={{margin: "auto"}}/>}
     </Box>
    );
}

