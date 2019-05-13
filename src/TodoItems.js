import React, { Component } from 'react';
import TodoApp from "./TodoApp";

class TodoItems extends Component{
  constructor(props){
    super(props);
    this.createTask=this.createTask.bind(this);
  }

  delete(key){
    this.props.delete(key);
  }

  createTask(items){
    return <li onClick={()=>this.delete(items.key)}
            key={items.key} >{items.text} > </li>
  }
  render() {
    var todoentries=this.props.entries;
    var listitem=todoentries.map(this.createTask);
    return (
      <ul className="thelist" >
      {listitem}
      </ul>
    );
  }
}

export default TodoItems;
