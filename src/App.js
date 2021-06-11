import './App.css';
import './index.css';
import React, { useEffect, useState } from 'react';
import {Route,Switch} from 'react-router-dom';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC'

const App = () => {

  return ( 
    <>
    <CompC/>
    <Switch>
    <Route exact path='/' component={CompA}/>
    <Route path='/contact' component={CompB}/>
    </Switch>
    </>
  );
};

export default App;
