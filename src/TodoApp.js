import React, { Component } from 'react';
import TodoItems from "./TodoItems";

export default class TodoApp extends Component{
  constructor(props){
    super(props);
    this.initialState={
      item: [],
      name: '',
      email:'',
      phone:'',
    }
    this.state=this.initialState;
    this.HandelChange=this.HandelChange.bind(this);
    this.addItem=this.addItem.bind(this);
    this.FormClick=this.FormClick.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
  }
  addItem(e){
    if (this._inputElement.value !=="") {
      var newItem={
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState)=>{
        return{
          item: prevState.item.concat(newItem)
        };
      });
      this._inputElement.value="";

    }
    console.log(this.state.item);

    e.preventDefault();
  }
  HandelChange(event){
    const name=event.target.name;
    const value=event.target.value;
    this.setState({

      [name]: value

    })

  }
  FormClick(event){
    event.preventDefault();
    this.setState(this.initialState);
    console.log(this.state);
  }

deleteItem(key){
  var filterItems=this.state.item.filter(function(items){
    return (items.key !==key);
  });
  this.setState({
    item: filterItems
  });
}

  render() {
    return(
      <div className="container">

        <h1>this is ToDo Form</h1>
        <form onSubmit={this.FormClick}>

        <div>
        items:
        <input type="" name="name" value={this.state.name} onChange={this.HandelChange}  />
        </div>
        <div>
        email:
        <input type="" name="email" value={this.state.email} onChange={this.HandelChange}  />
        </div>
        <div>
        phone:
        <input type="" name="phone" value={this.state.phone} onChange={this.HandelChange}  />
        </div>
        <button type="submit"> Add items</button>
        </form>
        <form onSubmit={this.addItem}>
          <div>
            <input ref={(a)=>this._inputElement=a} placeholder="enter item name"/>
        </div>
        <div>
          <button type="submit"> Add</button>
        </div>
        </form>
        <TodoItems entries={this.state.item} delete={this.deleteItem} />
      </div>
    )
  }
}
