import React, { Component } from 'react';

export default class TodoApp extends Component{
  constructor(props){
    super(props);
    this.state={

      item: [],
      title: '',
      content: '',
      selected:'',
    }
    this.fetchDate();
  }

  fetchDate = () => {
    fetch("http://192.168.100.79:3000/articals", {
      method: 'GET',
    })
    .then((response) => response.json())
    .then((responseText) => {
      console.log(responseText);
      this.setState({
        item: responseText
      })
    })
    .catch((error) => {
      console.error(error);
    });
  }



  HandelChangeTitle = (event) =>{
    const value=event.target.value;
    this.setState({
      title: value
    })
  }

  HandelChangeContent = (event) => {
    const value=event.target.value;
    this.setState({
      content: value
    })
  }

  formClick=()=>{
     // event.preventDefault();
     if(this.state.selected !==""){
       this.updateItems(this.state.selected)

     }else {


    fetch("http://192.168.100.79:3000/articals?title="+this.state.title+"&content="+this.state.content, {
      method: 'POST',
      body: JSON.stringify({
       title:this.state.title,
       content: this.state.content
     })
    })
    .then(res => res.json())
    .then((responseText) => {
      this.setState({
        title: "",
        content: "",
      });
      console.log(responseText);
      // this.state.item.push(responseText)

      // alert(responseText);
    })
    .catch((error)=>{
      console.error(error);
    })
   // .catckeyh(err => console.log(err);
   }
  }


deleteItem = async(key) =>{
  alert("Are you sure "+key);
  console.log(this.state.key);
  var arr =await this.state.item.filter(function(item) {
     return item.id !== key
  })
  this.setState({item: arr})
  fetch("http://192.168.100.79:3000/articals/"+key, {
    method: 'DELETE',

  })
  .then((response) => response.json())
  .then((responseText) => {

  })
  .catch((error) => {
    console.error(error);
  });
}
updateItems=(key)=>{
  alert("Update item : "+key);
  console.log(this.state.key);
  fetch("http://192.168.100.79:3000/articals/"+key+"?title="+this.state.title+"&content="+this.state.content, {
    method: 'PUT',
  })
  .then((response) => response.json())
  .then((responseText) => {
    console.log(responseText);

  })
  .catch((error) => {
    console.error(error);
  });

}
updateForm=(key)=>{
  alert("this is update");
   this.setState({
      title: key.title,
      content: key.content,
      selected: key.id,

   })

}
createTask=(items)=>{
  return(

    <tr key={items.id} >
        <th>{items.id}</th>
        <th>{items.title}</th>
        <th>{items.content}</th>
      {/* <th><button type="button" class="btn btn-success">update</button></th> */}
    <th><button onClick={()=>this.updateForm(items)} type="button" className="btn btn-success">Update</button></th>
      <th><button onClick={()=>this.deleteItem(items.id)} type="button" className="btn btn-danger">Delete</button></th>
    </tr>


  )
}

  render() {
    var todoentries=this.state.item;
    var listitem=todoentries.map(this.createTask);
    return(

      <div className="container">

        <center> <h1>This is ToDo App</h1></center>

      <form onSubmit={this.formClick}>
        <center>
          <div>
            <input type="text" name="title" value={this.state.title} onChange={this.HandelChangeTitle} placeholder="enter item name"/>
          </div><br />
          <div>
            <input type="text" name="content" value={this.state.content} onChange={this.HandelChangeContent} placeholder="enter item name"/>
          </div><br />
          <div>
            <button type='submit'> Add</button>
          </div><br />
          </center>
        </form>
        <div>
          <div className="table-responsive">
            <div className="table">
              <tr>
                <th>#ID</th>
                <th>Title</th>
                <th>Content</th>
                <th >Update</th>
                <th>Delete</th>
              </tr>
              {listitem}
          </div>
        </div>
        </div>

      </div>
    )
  }
}
