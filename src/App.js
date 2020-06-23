import React, {Suspense} from 'react';
import Home from './Layout/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden'
//
import SvgL from './Images/Global/waveL.svg'
import SvgD from './Images/Global/waveD.svg'

//
const Header = React.lazy(()=>import('./Layout/Header'));
const List = React.lazy(()=>import('./Layout/LL'));
const Sort = React.lazy(()=>import('./Layout/Sort'));
const AboutUs = React.lazy(()=>import('./Layout/AboutUs'));
const Page = React.lazy(()=>import('./Layout/Page'));
//



const wave={
    position: 'fixed',
    zIndex: -1
}
//
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<p>...</p>}>
          <Header/>
        </Suspense>
        <Hidden lgUp>
          <img src={SvgD} style={wave} alt='Default wave svg'/>
        </Hidden>
        <Hidden mdDown>
          <img src={SvgL} style={wave} alt='Large wave svg'/>
        </Hidden>
        
        <Route exact path='/AlgorithmVisualizer' component={Home} />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path='/About' component={AboutUs} />
            <Route path='/List/:AlgoId' component={Page} />
            <Route path='/Sort/:AlgoId' component={Page} />
            <Route path='/List' component={List} />
            <Route path='/Sort' component={Sort} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
