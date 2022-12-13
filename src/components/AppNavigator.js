import React from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme)=>({
    Appbar:{
        backgroundColor: "black",
    
    },
    link :{
        textDecoration:'none'

    },
    title:{
        cursor:'pointer',
        color:'white',
    },
}))


function AppNavigator() {
    const classes= useStyles();

    return (
     <AppBar className={classes.Appbar} position='fixed'>

        <Toolbar>
            <Link to="/" className={classes.link} > 
            <Typography className={classes.title}>Pokedex</Typography>
            </Link>
        </Toolbar>

     </AppBar>
    );
}

export default AppNavigator;