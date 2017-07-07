import React, { Component } from 'react';


class BasicForm extends Component {
  constructor(props){
    super(props);
    this.state = {
    name: "",
    email: "",
    }
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.EMAILREG = new RegExp('^[a-zA-Z0-9.-_+]+@[a-zA-Z0-9.-_]+\\.[a-zA-Z]{2,}$')
  }

  handleFormSubmit = (event) => {
    this.props.isSubmitted()
    event.preventDefault()
  }
  isValid = (item) => {
    const minLength = 8
    if((item === "name" && this.state[item].length < minLength) || (item === "email" && !this.EMAILREG.test(this.state[item]))){
      return false
    }
    return true
  }

  handleFormChange = (event) => {
    var name = event.target.name
    this.setState({[name]: event.target.value})
  }
  render(){
    const buttonRender = this.isValid("name") && this.isValid("email");

    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <input type="text" value={this.state.name} placeholder="Name" name="name" onChange={this.handleFormChange}/>
          {this.isValid("name") ? <img src="./img/circle-check.png" alt="checked"/> : <img src="./img/circle-x.png" alt="error circle"/>}
        </div>
        <div>
          <input type="email" value={this.state.email} placeholder="Email" name="email" onChange={this.handleFormChange}/>
          {this.isValid("email") ? <img src="./img/circle-check.png" alt="checked"/> : <img src="./img/circle-x.png" alt="error circle"/>}
        </div>
        {buttonRender ? <button type="submit" >Submit</button> : null}
      </form>
    )
  }
}

export default BasicForm;
