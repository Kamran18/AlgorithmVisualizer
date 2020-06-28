import React from 'react';
import Grid from '@material-ui/core/Grid';

export default (props)=>{
    const num = props.Num, algoType = props.algoType
    const [AlignItems, boxes, Height] = (algoType === 'Sort') ? ['flex-end', SortBars(num), 460]: ['center', ListBars(num), 'auto']

    return(
        <>
            <Grid item container xs={12} 
                style={{ overflow:'hidden', maxHeight:800, minHeight:300,height:Height}}//,,
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
                        margin: 'auto 6px 6px 6px'}}
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
                <Grid container item 
                direction='column-reverse' justify='flex-end' alignItems='center'
                style={{
                    height: 200,
                    width: 42,
                    // border: '1px solid blue',
                    margin: 10,
                }}>
                    <Grid item                                  //  HEAD POINTER
                        id="Head"
                        style={{
                            height:40,
                            borderRadius:5,
                            width:40,
                            border:"2px solid #00796b",
                            marginTop: 55,
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
                {num.map((value, index)=>(
                    <Grid item container                    //   Single Node 
                    key={index} direction='column'
                    style={{
                        width:86,
                        // backgroundColor:'yellow',
                        // border:'1px solid green',
                        textAlign: 'center',
                        fontSize: 18,
                        margin: 10,
                        color: '#00695c',
                        transition: 'filter 200ms'
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
                {/* /////////////   TEMP NODE   ///////////////// */}
            <Grid item container                    //   Single Node 
                    direction='column'
                    style={{
                        position: 'fixed',
                        top: 80,
                        width:86,
                        // backgroundColor:'yellow',
                        // border:'1px solid green',
                        textAlign: 'center',
                        fontSize: 18,
                        margin: 10,
                        filter: 'blur(100px)',
                        color: '#00695c',
                        transition: 'filter 200ms'
                    }}>
                        <Grid item                          //  Alphabet (pointer)
                        style={{
                            height:20,
                            paddingBottom:30,
                            // color: '#00695c'
                            // backgroundColor:'blue'
                        }}>
                            {AlphaId[num.length]}
                        </Grid>
                        <Grid item container 
                        alignItems='center' justify ="space-between" 
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
                                -22
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
            </>
        )
}



