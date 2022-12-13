import React, { useEffect, useState } from 'react';
import axios  from 'axios';

import { POKEMON_API_URL } from '../config';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import FavouriteIcon from "@mui/icons-material/Favorite"
import { useParams } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    pokedexContainer:{
        height: "84vh",
        backgroundColor: "black",
        color: "white",
        marginTop: 75,
        textAlign: "center",
        borderRadius:5,
        paddingTop:30
        
    },
    textTitles:{
        textTransform: "uppercase",
        fontFamily: "Fantasy",
    },
    pokemonImage:{
        width:"170px",
        height:"170px",
    },
    pokemonInfoContainer:{
        bottom:80,
        position: "absolute",
        width:"100%",
     

    },
    seperator:{
        height: "0.01mm",
        width:"95%",

    },
    favourite:{
        height:50,
        width:50,
        marginTop:15,
    },
    text:{
        fontSize:30, 
    }
}))

function PokemonDetails(props) {
    const params= useParams()
   // console.log("this is use params", params.id)
    const classes= useStyles();
    const [pokemonName, setpokemonName]= useState(null);
    const [pokemonHeight, setpokemonHeight]= useState(null);
    const [pokemonWidth, setpokemonWidth]= useState(null);
    const [pokemonType, setpokemonType]= useState(null);
    const [pokemonImage, setpokemonImage]= useState(null);
    
   
 

    useEffect(()=>{
       
        const  id  = params.id;
        console.log("id is",id)
        axios.get(POKEMON_API_URL + "/" + id).then((response)=>{
            console.log(response.data)
    
            if(response.status >= 200 && response.status < 300){
                             console.log("here is the data")
                             console.log(response)
                             setpokemonName(response.data.name)
                             setpokemonHeight(response.data.height)
                             setpokemonWidth(response.data.weight)
                             setpokemonType(response.data.types)
                             setpokemonImage(response.data.sprites.front_default)

                            
                         }
        })
        },[])//run everytime when this component renders  


    return (
        <div>
          
            <Box>
            <Box className={classes.pokedexContainer}>
                <Typography className={classes.textTitles} variant="h1"  >
                {pokemonName}
                </Typography>
                <img className={classes.pokemonImage} src={pokemonImage} />
                <Box className={classes.pokemonInfoContainer}>
                    <hr className={classes.seperator}/>
                
                <Grid container>
                    <Grid item md={1}>
                        <Button className={classes.favourite}>
                            <FavouriteIcon style={{color: "white", fontSize: 50}}/>
                        </Button>
                    
                    </Grid>
                    <Grid item md={2}>
                        <Typography className={classes.text}>
                            Name
                            <br/>
                            {pokemonName}
                        </Typography>

                    </Grid>
                    <Grid item md={2}>
                        <Typography className={classes.text}>
                            Height
                            <br/>
                           {pokemonHeight}
                        </Typography>

                    </Grid>
                    <Grid item md={2}>
                        <Typography className={classes.text}>
                            Weight
                            <br/>
                            {pokemonWidth}
                        </Typography>

                    </Grid>
                
                    
                    {pokemonType.map ((i) => {
                        const typename = i.type.name
                        return (
                            <Grid item md={2}>
                            <Typography className={classes.text}>
                                Type
                                <br/>
                                {typename}
                            </Typography>
    
                        </Grid>
                        );
                    
                    })} 

                </Grid>
                </Box>
            </Box>
        </Box>
        </div>
    );
}

export default PokemonDetails;