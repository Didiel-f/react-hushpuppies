import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import './App.css';

import { MainScreen } from './components/MainScreen';
import Cart from './components/Cart/Cart';


function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <div className="app">
        <Switch>
          <Route exact path="/" component={MainScreen} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
