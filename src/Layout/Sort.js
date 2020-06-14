import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'
import FramerFunc from './FramerCards'
import B from '../Images/Sort/Bubble.png'
import S from '../Images/Sort/Selection.png'
import I from '../Images/Sort/Insertion.png'
import M from '../Images/Sort/Merge.png'
import Q from '../Images/Sort/Quick.png'

export default function List(){
    const Sorts = [
        {title:'Selection', img: S, intro: `An inplace comparison sorting algorithm that divides the input list into two parts: a sorted ...`},
        {title:'Bubble', img: B, intro: `Algorithm which repeatedly steps through the list, compares adjacent elements and swaps ...`},
        {title:'Insertion', img: I, intro: `It removes one element from the input data, finds its correct location and place it on sorted ...`},
        {title:'Quick', img: Q, intro: `It places the pivot elements to its correct location and the other elemets into two sub-arrays, according ... `},
        {title:'Merge', img: M, intro: `It first divides the list into sub-lists and then merge them when they are in sorted order ...`}]

    let itemList = Sorts.map((item, index)=>{
        return(
        <Grid item key={index} >
            <motion.div variants={FramerFunc.framerItem}>
                <Card link={'/Sort/'+item.title} 
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