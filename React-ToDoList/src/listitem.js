import React, { Component } from 'react';

class Item extends Component {
  constructor(props){
    super(props)
    this.state = {
      id: this.props.id,
      textID: "text-" + this.props.id,
      deleteID: "delete-"+ this.props.id,
      newTextID: "newText-" + this.props.id,
    }
  }
  isComplete = () => {
    return (
      this.props.completed ? <img src="./img/circle-check.png" onClick={() => this.props.onCompleteItem(this.props.index)} alt='circle icon'/> : <img src="./img/circle.png" onClick={() => this.props.onCompleteItem(this.props.index)} alt='circle icon'/>
    )
  }
  showEdit = (event) => {
    document.getElementById(event.target.id).style.display = "none"
    document.getElementById(this.state.deleteID).style.display = "none"
    document.getElementById(this.state.newTextID).className = "show"
    document.getElementById(this.state.newTextID).focus()
    return null
  }
  show = (e) => {
    document.getElementById(this.state.deleteID).style.visibility = "visible"
    return null
  }
  hide = (e) => {
    document.getElementById(this.state.deleteID).style.visibility = "hidden"
    return null
  }
  render (){
    return (
      <li className="list-item" id={this.state.id} onMouseOver={(e) => this.show(e)} onMouseOut={(e) => this.hide(e)}>
        {this.isComplete()}
        <p id={this.state.textID} onDoubleClick={(e) => this.showEdit(e)}>{this.props.text}</p>
        <img id={this.state.deleteID} onClick={() => this.props.onDeleteItem(this.state.id)} className="delete" src="./img/delete.png" alt="delete icon" />
        <input className="hidden" id={this.state.newTextID} type="text" defaultValue={this.props.text} onKeyPress={(e) => {if(e.key === "Enter"){this.props.onEditItem(e, this.state.id)}}}></input>
      </li>
    )
  }
}

export default Item
