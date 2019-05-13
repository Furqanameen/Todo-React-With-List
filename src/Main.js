import React from 'react';
// import { Button } from 'reactstrap';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from './Home';
import Staff from './Staff';
import Contact from './Contact';
import TodoApp from './TodoApp';

export default class Main extends React.Component{
  render(){
    return(
<div>
      <HashRouter>

        <div>
        <h1>Simple SPA </h1>
      <ul className="header">
          <li><NavLink to="/home">home</NavLink></li>
          <li><NavLink to="/staff">staff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/todoapp">Todoapp</NavLink></li>
        </ul>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route path="/staff" component={Staff} />
              <Route path="/contact" component={Contact} />
            <Route path="/todoapp" component={TodoApp} />
            </div>
            </div>
      </HashRouter>
      </div>
    )
  }
}
