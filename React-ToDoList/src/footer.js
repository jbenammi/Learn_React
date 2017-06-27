import React, { Component } from 'react';

class Footer extends Component {

  viewButton = () => {
    const buttonList = ['all', 'incomplete', 'complete']
    return (
      buttonList.map((button) => {
        if(this.props.view === button){
          return (
            <p key={button} className='view selected' onClick={() => this.props.onChangeView({view: button})}>{button.toUpperCase()}</p>
          )
        }
        else {
          return (
            <p key={button} className='view' onClick={() => this.props.onChangeView({view: button})}>{button.toUpperCase()}</p>
          )
        }
      })
    )
  };

  count = () => {
    var counter = 0
    this.props.list.map((item) => {
      if(!item.completed){
        counter ++
      }
      return null
    })
    return (counter)
  }

  renderCompleted = () => {
    var counter = 0
    this.props.list.map((item) => {
      if(item.completed){
        counter ++
      }
      return null
    })
    return counter ? <p onClick={() => this.props.onDelete()}>clear completed</p> : null
  }

  render(){
    if(this.props.list.length){
      return (
        <footer className="footer">
          <p>{this.count()} to complete</p>
          {this.viewButton()}
          {this.renderCompleted(this.count())}
        </footer>
      )
    }
    return null
  }
}

export default Footer;
