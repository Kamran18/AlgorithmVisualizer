import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'
import FramerFunc from './FramerCards'
import S from '../Images/Sort/Selection.png'
import L from '../Images/Home/List.png'

export default function Home(){
    const Sorts = [{
                        title:'Sort',
                        img: S,
                        intro: `Sorting algorithms puts elements of a list in a certain order.
                        The most frequently orders ...`,//are lexicographical and numerical orders.
                    },
                        {title:'List',
                        img: L,
                        intro:`Linked list is an abstract data structure.Commonly perform 
                        operations like Insertion, Deletion ...`,
                    }]

    let itemList = Sorts.map((item, index)=>{
        return(
            <Grid item key={index} >
                <motion.div variants={FramerFunc.framerItem}>
                    <Card link={'/'+item.title} 
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
                {itemList}
            </Grid>
        </motion.div>
    )}