import React, {Suspense} from 'react';
import Home from './Components/Home';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden'
//
import SvgL from './Images/Global/waveL.svg'
import SvgD from './Images/Global/waveD.svg'

//
const Header = React.lazy(()=>import('./Components/Header'));
const List = React.lazy(()=>import('./Components/LL'));
const Sort = React.lazy(()=>import('./Components/Sort'));
const Search = React.lazy(()=>import('./Components/Search'));
const AboutUs = React.lazy(()=>import('./Components/AboutUs'));
const Page = React.lazy(()=>import('./Components/Page'));
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
            <Route path='/Search/:AlgoId' component={Page} />
            <Route path='/List' component={List} />
            <Route path='/Sort' component={Sort} />
            <Route path='/Search' component={Search} />
          </Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
