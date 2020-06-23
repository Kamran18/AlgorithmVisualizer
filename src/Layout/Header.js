import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, IconButton, Typography, Hidden} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import { motion } from 'framer-motion'

const framerAppBar = {
  hidden: { y: -60, opacity: 0 },
  visible: { 
  y: 0,
  opacity: 1,
  transition: {
      duration: 1
  }
  }
}

const useStyles = makeStyles(theme=>({
  linkStyle: {
    color: 'white',
    textDecoration: 'none'
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Magneto'
  },
  btnStyles: {
    color: 'white',
    marginLeft: '10px',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <motion.div
    variants={framerAppBar}
    initial='hidden'
    animate='visible'>
      <AppBar position="relative">
        <Toolbar>
        <Typography variant="h4" className={classes.title}>
          AlgoViz
        </Typography>
          <div variant="text" color='primary' aria-label="text primary button group">
            <Hidden smDown>
              <Button size="medium" startIcon={<HomeIcon />} className={classes.btnStyles}>
                <Link to="/AlgorithmVisualizer" className={classes.linkStyle}>
                  <Typography variant="h6" >
                    HOME
                  </Typography>
                </Link>
              </Button>
              <Button size="medium" startIcon={<InfoIcon />} className={classes.btnStyles}>
                <Link to="/About" className={classes.linkStyle}>
                  <Typography variant="h6" >
                    ABOUT
                  </Typography>
                </Link>
              </Button>
            </Hidden>
            <Hidden smUp>
              <IconButton aria-label='Home'>
                <Link to="/AlgorithmVisualizer" className={classes.linkStyle}>
                  <HomeIcon />
                </Link>
              </IconButton>
              <IconButton aria-label='About'>
                <Link to="/About" className={classes.linkStyle}>
                  <InfoIcon />
                </Link>
              </IconButton>
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}