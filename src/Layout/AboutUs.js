import React from 'react'
import {Paper, Grid, Typography} from '@material-ui/core'
import Card from "./Card"
import Avatar from '../Images/About/Avatar.png' 
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme=>({
    linkStyle: {
        textDecoration: 'none'
    },
    paperStyle: {
        padding: 50,
        height: 170
    },
    cardStyle:{
        maxWidth: 220,
    }
  }));

function About(){
    const classes = useStyles();

    return(
    <h1 style={{marginTop:100}}>
        <Grid container justify='center' alignContent='center' spacing={2}>
            <Grid item className={classes.cardStyle}>
                <Card link={'#'} 
                    title={'KAMRAN ASHRAF'}
                    intro={'REACT DEVELOPER'}
                    imgUrl={Avatar}/>
            </Grid>
            <Grid item xs={12} md={5}>
                <Paper className={classes.paperStyle}>
                    <Typography>
                        This project is made for the begineers and visual learners that will help them in 
                        understanding the working of different algorthims.The source code will be
                        available on request.
                        <br/><br/>
                        For any query contact at 
                        <a href = "mailto: umar17ash@gmail.com" className={classes.linkStyle}> umar17ash@gmail.com</a>
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    </h1>)
}

export default React.memo(About)