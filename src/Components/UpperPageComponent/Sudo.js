import React from 'react'
import {Grid, Paper,Typography, Divider} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {Bubble, Selection, Insertion, Quick, Merge, Default } from '../../Store/SortStore'
import {Traversal, Searching, ListInsertion, Deletion}  from '../../Store/ListStore'
// import { motion } from 'framer-motion';

// const frameritem = {
//     hidden: { y: -5, opacity: 0},
//     visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//         duration: .2
//     }
//     }
// }

const useStyles = makeStyles({
    // containerStyle:{
    //     paddingBottom: 20
    // },
    paperStyle:{
        transition: 'boxShadow',
    },
    typoStyle:{
        padding: '10px 20px',
        marginTop: 5,
        wordSpacing: 4
    }
  });

function SudoCode(props){
    const classes = useStyles();
    
    const algoType = ()=>{
        switch(props.algo){
            case 'Bubble':return Bubble
            case 'Selection':return Selection
            case 'Insertion':return Insertion
            case 'Quick':return Quick
            case 'Merge':return Merge
            case 'Traversal':return Traversal
            case 'Searching':return Searching
            case 'Deletion':return Deletion
            case 'ListInsertion':return ListInsertion
            default: return Default
        }
    }

    const algoCode = algoType()

    return(
        <Grid container alignContent='flex-start' >
        {/* className={classes.containerStyle} */}
            <Grid item xs={12} style={{marginBottom: 10}}>
                <Typography variant="h4" align="center">
                    Code
                </Typography>
                <Divider variant="middle" style={{marginTop: 10}}/>
            </Grid>
            {algoCode.map((item, index)=>{
                return(
                    <Grid item key={index} xs={12} >
                        {/* <motion.div variants={frameritem}> */}
                            <Paper elevation={0} 
                            className={classes.paperStyle + ' paper'}>   
                                <Typography variant="h6" 
                                className={classes.typoStyle}
                                style={{textIndent:item[0]}}>
                                    {item[1]}
                                </Typography>
                            </Paper> 
                        {/* </motion.div> */}
                    </Grid>
                )
                })}
        </Grid>
    )
} 

export default React.memo(SudoCode)
