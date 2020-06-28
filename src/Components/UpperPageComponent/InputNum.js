import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function BasicTextFields(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  // ,checkError = false,helpText;

  const handleSubmit = (event)=>{
    event.preventDefault();
    // console.log(value.split(",").map(numStr=>Number(numStr)))
    const numArr = value.split(",").map(numStr=>Number(numStr))
    props.toggleInputStartAniIndicator(1)
    props.setNum(numArr)
    // setValue("") props s clear kraooo
  }

  return (
    <form className={classes.root}  
    // style={{backgroundColor:"yellow"}}
    onSubmit={handleSubmit} 
    noValidate autoComplete="off">
        <TextField 
        id="standard-basic" 
        label="Enter Values" 
        onChange={handleChange} 
        value={value}
        disabled={props.disableBtn}
        />
    </form>
  );
}
