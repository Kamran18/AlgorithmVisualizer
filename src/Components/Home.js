import React from 'react';
import Card from './Card';
import Grid from '@material-ui/core/Grid'
import { motion } from 'framer-motion'
import FramerFunc from './FramerCards'
import SortLogo from '../Images/Sort/Selection.svg'
import ListLogo from '../Images/Home/List.svg'
import SearchLogo from '../Images/List/Search.svg'

export default function Home(){
    const Sorts = [{
                        title:'Sort',
                        img: SortLogo,
                        intro: `Sorting algorithms puts elements of a list in a certain order.
                        The most frequently orders ...`,//are lexicographical and numerical orders.
                    },
                    {
                        title:'List',
                        img: ListLogo,
                        intro:`Linked list is an abstract data structure.Commonly perform 
                        operations like Insertion, Deletion ...`,
                    },
                    {
                        title:'Coming soon',
                        img: SearchLogo,
                        intro:`Searching algorithms are use to search/find the element from a 
                        given list. The elements in the list ...`,
                    }]

    let itemList = Sorts.map((item, index)=>{
        return(
            <Grid item key={index} >
                <motion.div variants={FramerFunc.framerItem}>
                    <Card link={'/'+(item.title !== 'Coming soon' ? item.title : 'AlgorithmVisualizer')} 
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