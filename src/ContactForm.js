import React from 'react';

class ContactForm extends React.Component{
  constructor(props){
    super(props);
    this.initialState={
      name: '',
      email: '',
      city:'',
      message:'',
    }
    this.state=this.initialState;
    this.HandelChange=this.HandelChange.bind(this);
    this.SubmitHand=this.SubmitHand.bind(this);
  }

  HandelChange(event){
    const name=event.target.name;
    const value=event.target.value;
    this.setState({
      [name]: value
    })
  }
  SubmitHand(event){
    event.preventDefault();
    this.setState(this.initialState);
    console.log(this.state);
  }

  render(){
    return(

      <div>
        <h1>this is contact form </h1>
        <form onSubmit={this.SubmitHand}>
        <div>
          name:
          <input type="text" name="name" value={this.state.name} onChange={this.HandelChange} />
        </div>
        <div>
          email:
          <input type="text" name="email" value={this.state.email} onChange={this.HandelChange} />
        </div>
        <div>
          city:
          <select name="city" value={this.state.city} onChange={this.HandelChange} >
            <option value="">Select City</option>
            <option value="lahor">lahore</option>
            <option value="karachi">karachi</option>
            <option value="sialkot">sialkot</option>
            <option value="islambad">islambad</option>
            <option value="multan">multan</option>
          </select>
        </div>
        <div>
          message:
          <textarea type="text" name="message" value={this.state.message} onChange={this.HandelChange} />
        </div>
          <button type="submit">send message </button>
        </form>
      </div>
    )
  }
}
export default ContactForm;
