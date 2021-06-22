import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";
import './App.css';

import { MainScreen } from './components/MainScreen';
import Cart from './components/Cart/Cart';
import { Page404 } from './components/Page404/Page404';

const settingsGH_pages = window.location.pathname;

//////////////////  PARA PROBAR EN LOCAL SOLO SE DEBE REEMPLAZAR LA VARIABLE settingsGH_pages POR "/" o simplemente eliminar la propiedad basename

function App() {
  return (
    <Router basename={settingsGH_pages}>
      <div className="app">
        <Switch>
          
          <Route exact path="/cart" component={Cart} />

          <Route exact path="/" component={MainScreen} />

          <Route component={Page404} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
