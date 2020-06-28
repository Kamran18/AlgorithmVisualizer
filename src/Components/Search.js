import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'
import FramerFunc from './FramerCards'
import BinaryLogo from '../Images/Sort/Bubble.svg'
import LinearLogo from '../Images/Home/List.svg'

export default function List(){
    const Sorts = [
        {title:'Linear', img: LinearLogo, intro: `**An inplace comparison sorting algorithm that divides the input list into two parts: a sorted ...`},
        {title:'Binary', img: BinaryLogo , intro: `**Algorithm which repeatedly steps through the list, compares adjacent elements and swaps ...`}]

    let itemList = Sorts.map((item, index)=>{
        return(
        <Grid item key={index} >
            <motion.div variants={FramerFunc.framerItem}>
                <Card link={'/Search/'+item.title} 
                title={item.title}
                intro={item.intro}
                imgUrl={item.img}/>
            </motion.div>
        </Grid>
    )})

    return(
        <motion.div variants={FramerFunc.framerContainer}
        initial='hidden'
        animate='visible'>
            <Grid 
                container
                direction="row"
                justify="center"
                spacing={3}
                style={{marginTop: '18vh'}}
                >
                {itemList }
            </Grid> 
        </motion.div>
        )}