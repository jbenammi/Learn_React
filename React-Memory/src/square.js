import React, { Component } from 'react';

class Square extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: this.props.color,
      squareid: this.props.id,
      greyid: "grey-"+this.props.id,
      colorid: this.props.color+'-'+this.props.id
    }
  }
  render(){
    return(
      <div id={this.state.squareid} className="square">
        <div id={this.state.greyid} className="grey" onClick={(e) => this.props.onFlip(e,this.state.colorid)}>
        </div>
        <div id={this.state.colorid} className={this.state.color}>
        </div>
      </div>
    )
  }
}

export default Square;
