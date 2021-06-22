import React from 'react'
import {
  HashRouter,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import './App.css';

import { MainScreen } from './components/MainScreen';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <HashRouter>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        
      </div>
    </HashRouter>
  );
}

export default App;
