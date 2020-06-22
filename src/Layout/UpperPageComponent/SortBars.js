import React from 'react';
import {Grid, Paper, Divider} from '@material-ui/core';
import { motion } from 'framer-motion'
import {GetSelectionAni, GetBubbleAni, GetSortInsertionAni, GetQuickAni, GetMergeAni} from '../../Sort/Sort';
import {SelectionRealizer, BubbleRealizer, InsertionRealizer, QuickRealizer, MergeRealizer} from "../../AniRealizer/Sort/AniRealizer"
import {GetDeletionAni, GetSearchAni, GetTraversalAni, GetListInsertionAni} from '../../List/List';
import {TraversalRealizer, SearchRealizer, ListInsertionRealizer, DeletionRealizer} from "../../AniRealizer/List/AniRealizer"
import Controls from "./Controls"
import SudoCode from './Sudo';
import Bars from './Bars'

class BarsContainer extends React.PureComponent{
    constructor(props){
        super(props)

        this.state = {
            speed: 600,//ms
            num : [],
            bigNum: 0,
            disableBtn: false,
        }
    }
    
    updateData = ()=>{
        //values = random values array in the state
        this.setState({
            num: this.getRandomNum()
        })
    }
    
    getRandomNum = ()=>{
        //generates and returns random numbers array 
        const {algoType} = this.props
        let num = [],
        [NumberOfElements, NumRange] = (algoType==='Sort') ? [6, 100] : [4, 94]
        for(let i=0; i<Math.floor(Math.random()*3+NumberOfElements); i++)
            num.push(Math.floor((Math.random()*NumRange)+5))
        return num
    }

    speedControler = speed=>{
        //controlls the speed of animation
        this.setState(
            { speed: speed }
        )
    }

    setNum = arr=>{
        //sets the number array entered in the state
        this.setState(
            { 
                num: arr
            }
        )
    }

    // startAnimation(){
    //     get animation and visualize it better to make code file
    // }
    startAnimation = ()=>{
        const {num, speed} = this.state;
        switch(this.props.Algo){
            case "Bubble":
                return BubbleRealizer(GetBubbleAni(num), speed)
            case "Selection":
                return SelectionRealizer(GetSelectionAni(num), speed)
            case "Insertion":
                return InsertionRealizer(GetSortInsertionAni(num), speed)
            case "Quick":
                return QuickRealizer(GetQuickAni(num), speed)
            case "Merge":
                return MergeRealizer(GetMergeAni(num), speed)
            case "Traversal":
                return TraversalRealizer(GetTraversalAni(num), speed)
            case "ListInsertion":
                return ListInsertionRealizer(GetListInsertionAni(num), speed)
            case "Searching":
                return SearchRealizer(GetSearchAni(num), speed)
            case "Deletion":
                return DeletionRealizer(GetDeletionAni(num), speed)
            default:
                return BubbleRealizer(GetBubbleAni(num), speed)
        }   
    }

    startBtn = event => {
        this.setState(
            { 
                disableBtn: true 
                //disabled textfield Btns until animation finishes
            },
            ()=>{
                const time = this.startAnimation()
                setTimeout(()=>{
                    this.setState(
                        { 
                            disableBtn: false 
                            //disabled textfield Btns until animation finishes
                        })
                },time) 
            }
        )

        
    }

    componentDidMount(){
        this.updateData()
    }

    render(){
        // console.log(this.state,this.props)
        const {num} = this.state,
        {algoType} = this.props
        return(
            <div>
                <Grid container >
                    {/* style={{marginTop: '64px'}} */}
                    <Grid item xs={12} md={7}
                    //  style={{backgroundColor:'yellow'}}
                     >
                        <motion.div variants={framerContainer}
                        initial='hidden'
                        animate='visible'>
                            <Paper style={{margin:10,}} elevation={4}>{/* paddingBottom:12 */}
                                <Bars Num = {num} algoType={algoType}/>
                                <Grid item style={{padding:'5px 0 10px 0'}}>
                                    <Divider variant="middle" />
                                </Grid>
                                <Grid item container xs={12}
                                style={{
                                    // backgroundColor:'#bbdefb',
                                    paddingBottom:12,
                                    borderRadius: '0 0 3px 3px'}} //style
                                justify="space-around" wrap="wrap">
                                    <Controls 
                                    disableBtn={this.state.disableBtn}
                                    startAni={this.startBtn}
                                    setNum={this.setNum}
                                    speed = {this.speedControler}
                                    updateData = {this.updateData}/>{/**/}
                                </Grid>
                            </Paper>
                        </motion.div>
                    </Grid>    
                    <Grid item xs={12} md={5} 
                    // style={{backgroundColor: 'pink'}}
                    >
                        <motion.div variants={framerContainer2}
                        initial='hidden'
                        animate='visible'>
                            <Paper style={{margin:10, padding:20}} elevation={4}>
                                <SudoCode algo={this.props.Algo}/>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const framerContainer = {
    hidden: { x: -15},
    visible: {
    x: 0,
    transition: {
        duration: .8
    }
    }
}

const framerContainer2 = {
    hidden: { x: -25},
    visible: {
    x: 0,
    transition: {
        duration: .8,
        when: "beforeChildren",
        staggerChildren: .1
    }
    }
}
export default BarsContainer;