import React from 'react';
import BarsContainer from './UpperPageComponent/SortBars';
import Grid from '@material-ui/core/Grid'

function Page(props){
    // let algoType = props.match.path.split('/')[1] 
    return(
        <div>
            <BarsContainer Algo={props.match.params.AlgoId}
            algoType = {props.match.path.split('/')[1]} />
            <Grid container>
                <Grid item>
                    {/* static photo and facts */}
                </Grid>
                <Grid item>
                    {/* analysis */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Page;