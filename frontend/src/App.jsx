import React from "react";
//import api from './api';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/base/base.css";

import Header from "./components/Header";

import Home from "./paginas/Home";
import Predio from "./paginas/Predio";
import Apartamentos from "./paginas/Apartamentos";
import Pagina404 from "./paginas/Pagina404";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/predios">
          <Predio />
        </Route>
        <Route path="/apartamentos">
          <Apartamentos />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
