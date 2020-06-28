import React, { useState } from 'react'
import {Grid, Hidden} from '@material-ui/core';
import Slider from "./Speedslider";
import InputField from "./InputNum"
import AniBtn from "./AnimationBtn"

function Controls(props){
    const [InputStartAniIndicator, toggleInputStartAniIndicator] = useState(0)
    return(
        <>
        {/* {console.log(props)} */}
            <Grid item >
                <Hidden smUp >
                    <AniBtn 
                    disableBtn={props.disableBtn} 
                    startAni={props.startAni}
                    updateData = {props.updateData} 
                    InputStartAniIndicator = {InputStartAniIndicator}
                    toggleInputStartAniIndicator = {toggleInputStartAniIndicator}/>
                </Hidden>
            </Grid>
            <Grid item >
                <InputField 
                setNum={props.setNum} 
                disableBtn={props.disableBtn} 
                toggleInputStartAniIndicator = {toggleInputStartAniIndicator}/>
            </Grid>
            <Grid item >
                <Hidden only='xs'>
                    <AniBtn 
                    disableBtn={props.disableBtn} 
                    startAni={props.startAni}
                    updateData = {props.updateData} 
                    InputStartAniIndicator = {InputStartAniIndicator}
                    toggleInputStartAniIndicator = {toggleInputStartAniIndicator}/>
                </Hidden>
            </Grid>
            <Grid item >
                <Slider 
                speed = {props.speed} 
                disableBtn={props.disableBtn}/>
            </Grid>
        </>
                    
    )
}

export default React.memo(Controls)