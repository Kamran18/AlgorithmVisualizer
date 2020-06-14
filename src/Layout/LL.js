import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'
import FramerFunc from './FramerCards'
import T from '../Images/List/Traverse.png'
import I from '../Images/List/Insert.png'
import S from '../Images/List/Search.png'
import D from '../Images/List/Deletion.png'

export default function List(){
    const Lists = [
        {title:'Traversal', img: T, intro: 'An algorithm which traverse through all the elements in the list with time complexity of O(n)...'},
        {title:'Deletion', img: D, intro: 'An algorithm which deletes a node in the linked list with time and space complexity of O(1).'},
        {title:'Searching', img: S, intro: 'An algorithm which search a node in the linked list with time complexity of O(n) and space complexity of O(1).'},
        {title:'ListInsertion', img: I, intro: 'An algorithm which insert a new node in the linked list with time and space complexity of O(1).'}]

    let itemList = Lists.map((item, index)=>{
        return(
        <Grid item key={index} >
            <motion.div variants={FramerFunc.framerItem}>
                <Card link={'/List/'+item.title} 
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