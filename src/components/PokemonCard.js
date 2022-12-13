import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


 
const useStyles = makeStyles((theme)=>({
    card:{
        cursor:'pointer',
        backgroundColor:'black',
        color:'white',
        "&:hover": {
            backgroundColor:"rgb(90, 90, 90)"
        }
        ,
    },
    cardMedia:{
        margin:"auto",
        width: 130,
        height: 130,
    },
    cardContent:{
        textAlign:"center",
    },
    link:{
        textDecoration: "none",
    },

   
}))
function PokemonCard(props) {
    
   
    const classes= useStyles();
    const {pokemon, image} = props;
    //console.log(image)
    const {id, name}= pokemon ;
    return (
     <Grid item xs={12} sm={2} key={id}>
        <Link to={"/pokemon/" + id} className={classes.link}>
        <Card className={classes.card}>
        <CardMedia  className={classes.cardMedia} image={image}></CardMedia>
            <CardContent className={classes.cardContent}>
                <Typography>{name}</Typography>
            </CardContent>
        </Card>
        </Link>
     </Grid>
    );
}

export default PokemonCard;