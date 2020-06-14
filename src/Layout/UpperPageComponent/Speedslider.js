import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: '25ch',
  },
});

export default function ContinuousSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(40);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.speed(1000-newValue*10)
  };

  return (
    <div className={classes.root} 
    // style={{backgroundColor:"yellow"}}
    >
      <Typography id="continuous-slider" gutterBottom style={{paddingTop: '11px'}}>
        Speed
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs >
          <Slider value={value} 
          onChange={handleChange} 
          aria-labelledby="continuous-slider"
          disabled={props.disableBtn} />
        </Grid>
      </Grid>
    </div>
  );
}
