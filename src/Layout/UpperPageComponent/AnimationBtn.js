import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AutorenewIcon from '@material-ui/icons/Autorenew';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();
  // const [newAni, NewAniCheck] = useState(0)
  const [newIcon, ToggleIcon] = useState(1)

  const newAni = () => {
    props.updateData()
    ToggleIcon(1)
  }

  const startAni = () => {
    props.toggleInputStartAniIndicator(0)
    props.startAni()
    ToggleIcon(0)
  }

  return (
    <div className={classes.root} 
    // style={{backgroundColor:"#000"}}
    >
      <Fab color="primary" 
      aria-label="edit" 
      disabled={props.disableBtn}
      onClick={(newIcon===1) ? startAni : props.InputStartAniIndicator ? startAni : newAni }>{/*  Change handler with icon */}
        { (newIcon===1) ? <PlayArrowIcon /> : props.InputStartAniIndicator ? <PlayArrowIcon /> : <AutorenewIcon/> }
      </Fab>
    </div>
  );
}
