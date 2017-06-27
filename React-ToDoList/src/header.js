import React, { Component } from 'react';

class Header extends Component {

  renderArrow = () => {
    if(this.props.list.length){
      return (
        this.props.allComplete ? <img className="arrow" src="./img/Down-Arrow-All.png" alt="down arrow" onClick={() => this.props.onMarkAllComplete()}/> : <img className="arrow" src="./img/Down-Arrow.png" alt="down arrow" onClick={() => this.props.onMarkAllComplete()}/>
      )
    }
  }
  render(){
    return (
      <header>
        <h1 className="App-header">todos</h1>
        <section className="list-input">
          {this.renderArrow()}
          <input id="newText" type="text" placeholder="What needs to be done" onKeyPress={(e) => {if(e.key === "Enter"){this.props.onAddItem(e)}}}></input>
        </section>
      </header>
    )
  }
}

export default Header;
