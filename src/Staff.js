import React from 'react';
import { Button } from 'reactstrap';

export default class Staff extends React.Component{
  render(){
    return(
      <div>
        <h2>Staff Page </h2>
      <div className="jumbutron">
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <Button color="danger">Danger!</Button>
        <button type="button" className="btn btn-primary">Primary</button>


        </div>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
