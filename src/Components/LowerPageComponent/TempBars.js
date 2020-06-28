import React from 'react';
import Grid from '@material-ui/core/Grid';

export default (props)=>{
    const num = props.Num, algoType = props.algoType,
    AlignItems = (algoType === 'Sort') ? 'flex-end' : 'center'
    const boxes = (algoType === 'Sort') ? SortBars(num) : ListBars(num)

    return(
        <>
            <Grid item container xs={12} 
                style={{ overflow:'hidden', maxHeight:728, minHeight:300}}//,,
                justify ="center" alignItems={AlignItems}
            >
                    {boxes}
            </Grid>
        </>
    )
}

function SortBars(num) {
    return(
        num.map((value, index)=>{
            return(
                <Grid item key={index} 
                style={{height:value*4,
                        borderRadius:'5px 5px 0 0',
                        width:25,
                        transition:'height 200ms ease-out',
                        backgroundColor:"#64b5f6",
                        margin: '40px 6px 6px 6px'}}
                className="Bar"
            ></Grid>
            )
        })
    )
}

function ListBars(num){
    let AlphaId = []
    for(let k=0; k<num.length+1; k++)
        AlphaId.push(String.fromCharCode(65+k))
    // console.log(AlphaId)
    return(
            <>
                <Grid container item xs={12} sm={1}
                direction='column' justify='flex-end' alignItems='center'
                style={{
                    // height: 200,
                    width: 42,
                    border: '1px solid black',
                    // margin: 10,
                }}>
                    <Grid item                                  //  HEAD POINTER
                        id="Head"
                        style={{
                            height:40,
                            borderRadius:5,
                            width:40,
                            border:"2px solid #00796b",
                            marginBottom: 24,
                            fontSize: 26,
                            textAlign: 'center'  
                        }}> 
                            A 
                    </Grid>
                    <Grid item                                  //  TEMP POINTER
                        id="Temp"
                        style={{
                            height:40,
                            borderRadius:5,
                            width:40,
                            border:"2px solid transparent",
                            fontSize: 26,
                            textAlign: 'center',
                            color: 'white'
                        }}> 
                            T 
                    </Grid>
                </Grid>
                <Grid container item xs={12} sm={11}
                direction='column' justify='center' alignItems='center'
                style={{
                    // height: 200,
                    // width: 42,
                    border: '1px solid blue',
                    // margin: 10,
                }}>
                    <Grid container item 
                    direction='row' justify='center' alignItems='center'
                    style={{
                        // height: 200,
                        // width: 42,
                        border: '1px solid red',
                        // margin: 10,
                    }}>
                        {num.map((value, index)=>(
                            <Grid item container xs={12} sm="auto"              //   Single Node 
                            key={index} direction='column'
                            style={{
                                width:86,
                                // backgroundColor:'yellow',
                                // border:'1px solid green',
                                textAlign: 'center',
                                fontSize: 18,
                                margin: 10,
                                color: '#00695c'
                            }}>
                                <Grid item                          //  Alphabet (pointer)
                                style={{
                                    height:20,
                                    paddingBottom:30,
                                    // color: '#00695c'
                                    // backgroundColor:'blue'
                                }}>
                                    {AlphaId[index]}
                                </Grid>
                                <Grid item container 
                                alignItems='center' justify ="space-between" 
                                className="Bar"
                                style={{
                                    height:40,
                                    borderRadius:5,
                                    width:84,
                                    backgroundColor: '#00796b',
                                    border:"2px solid transparent",
                                }}>
                                    <Grid item 
                                    style={{
                                        height:36,
                                        color:'white',
                                        borderRadius:'5px 0 0 5px',
                                        width:40, 
                                        fontSize: 26,
                                    }}>
                                        {value}
                                    </Grid>
                                    <Grid item className='ptrBox'
                                    style={{
                                        height:36,
                                        backgroundColor: 'white',
                                        borderRadius:'0 5px 5px 0',
                                        width:40,
                                        paddingTop:5
                                    }}>
                                        {(num.length === index+1)?'X':AlphaId[index+1]}
                                    </Grid>    
                                </Grid>
                            </Grid>))
                        }
                    </Grid>
                    <Grid item container                    //   Temp Node 
                        direction='column'
                        style={{
                            width:86,
                            // backgroundColor:'yellow',
                            border:'1px solid green',
                            textAlign: 'center',
                            fontSize: 18,
                            margin: 10,
                            color: '#00695c'
                        }}>
                            <Grid item                          //  Alphabet (pointer)
                            style={{
                                height:20,
                                paddingBottom:30,
                                // color: '#00695c'
                                // backgroundColor:'blue'
                            }}>
                                Temp
                            </Grid>
                            <Grid item container 
                            alignItems='center' justify ="space-between" 
                            className="Bar"
                            style={{
                                height:40,
                                borderRadius:5,
                                width:84,
                                backgroundColor: '#00796b',
                                border:"2px solid transparent",
                            }}>
                                <Grid item 
                                style={{
                                    height:36,
                                    color:'white',
                                    borderRadius:'5px 0 0 5px',
                                    width:40, 
                                    fontSize: 26,
                                }}>
                                    -99
                                </Grid>
                                <Grid item className='ptrBox'
                                style={{
                                    height:36,
                                    backgroundColor: 'white',
                                    borderRadius:'0 5px 5px 0',
                                    width:40,
                                    paddingTop:5
                                }}>
                                    X
                                </Grid>    
                            </Grid>
                        </Grid>
                </Grid>
            </>
        )
}



