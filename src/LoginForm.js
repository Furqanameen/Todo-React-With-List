import React from 'react';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.initialState={
      email:'',
      password:'',
    }
    this.state=this.initialState;
    this.HandelChange=this.HandelChange.bind(this);
    this.ValSubmit=this.ValSubmit.bind(this);
  }
  HandelChange(event){
    const name=event.target.name;
    const val=event.target.val;
    this.setState({
      [name]: val
    })
  }

  ValSubmit(event){
    this.preventDefault();
    this.setState(this.initialState);
    console.log(this.state);
  }

  render(){
    return(
        <div> this is login form her now
          <form>
            <div>
              email:
              <input type="text" name="email" value={this.state.name} onChange={this.HandelChange} />
            </div>
            <div>
              password:
              <input type="text" name="password" value={this.state.password} onChange={this.HandelChange} />
            </div>
            <div>
              <button type="submit ">Submit </button>
            </div>
          </form>
        </div>
    );
  }
}
export default LoginForm;
