import React, { Component } from 'react';
import BasicForm from './form'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      submit: false
    }
  }

  isSubmitted = () => {
    this.setState({submit: true})
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Form Validation</h2>
        </div>
        {this.state.submit ? <h3>Thank You For Submitting</h3> :  <BasicForm isSubmitted={this.isSubmitted}/>}
      </div>
    );
  }
}

export default App;
