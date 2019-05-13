import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
} from 'react-router-dom';


export default class RoutingMethod (){
  return(
    <div>
    <Router>
      <ul>
        <li><link to="/">Home</link></li>
        <li><link to="/about  ">About</link></li>
      </ul>
      <Route path="/" component={Home} />
      <Route path="/" component={About} />
    </Router>
    </div>
  )
}
function Home() {
    return(
      <div>
      <h2>this is home page</h2>
      </div>
    )
}
function About() {
    return(
      <div>
      <h2>this is about page</h2></div>
    )
}
