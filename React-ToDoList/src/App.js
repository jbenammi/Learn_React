import React, { Component } from 'react';
import Footer from './footer'
import Header from './header'
import Item from './listitem'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: "all",
      list: [],
      nextID: 1,
      allComplete: false,
    }
  }
  onAddItem = (event) => {
    if(event.key === "Enter"){
      var tempList = this.state.list
      const tempNextID = this.state.nextID + 1
      tempList.push({
        id: this.state.nextID,
        text: event.target.value,
        completed: false
      })
      event.target.value = null
      this.setState({list: tempList, nextID: tempNextID, allComplete: false})
    }
  }
  onDeleteItem = (itemID) => {
    itemID = parseInt(itemID, 10) || null
    var tempList = this.state.list
    if(itemID){
      tempList.map((item, idx) => {
        if(item.id === itemID){
          tempList.splice(idx, 1)
        }
        return null
      })
    }else {
      for(var idx=0; idx<tempList.length; idx++){
        if(tempList[idx].completed){
         tempList.splice(idx, 1)
         idx --
        }
      }
    }
    this.setState({list: tempList})
  }

  onCompleteItem = (idx) => {
    var tempList = this.state.list
    var completeCount = 0
    tempList[idx].completed = !tempList[idx].completed
    tempList.map((item) => {
      if(item.completed){
        completeCount ++
      }
      return null
    })
    const allDone = completeCount === tempList.length ? true : false
    this.setState({list: tempList, allComplete: allDone})
  }

  onMarkAllComplete = () => {
    const tempList = this.state.list
    if(this.state.allComplete){
      tempList.map((item) => {
        item.completed = false
        return null
      })
      this.setState({allComplete: false})
    }else {
      tempList.map((item) => {
        item.completed = true
        return null
      })
      this.setState({allComplete: true})
    }
  }

  onEditItem = (event, itemID) => {
    var tempList = this.state.list
    for(var idx=0; idx<tempList.length; idx++){
      if(tempList[idx].id === itemID){
        tempList[idx].text = event.target.value
        break
      }
    }
    document.getElementById('newText-'+itemID).className = 'hidden'
    document.getElementById('text-'+itemID).style.display = "inline-block"
    document.getElementById('delete-'+itemID).style.display = "inline-block"
    this.setState({list: tempList})
  }

  onChangeView = (prop) => {
    this.setState(prop)
  }

  renderList = () => {
    if(this.state.view === 'incomplete'){
      return (
        this.state.list.map((item, idx) => {
          if(!item.completed){
            return (
              <Item
                key={item.id}
                index={idx}
                text={item.text}
                id={item.id}
                completed={item.completed}
                onDeleteItem={this.onDeleteItem}
                onCompleteItem={this.onCompleteItem}
                showEdit={this.showEdit}
                onEditItem={this.onEditItem}
              />
            )
          }
          return null
        })
      )
    }else if(this.state.view === 'complete'){
      return (
        this.state.list.map((item, idx) => {
          if(item.completed){
            return (
              <Item
                key={item.id}
                index={idx}
                text={item.text}
                id={item.id}
                completed={item.completed}
                onDeleteItem={this.onDeleteItem}
                onCompleteItem={this.onCompleteItem}
                showEdit={this.showEdit}
                onEditItem={this.onEditItem}
              />
            )
          }
          return null
        })
      )
    }else {
      return(
        this.state.list.map((item, idx) => {
          return (
            <Item
              key={item.id}
              index={idx}
              text={item.text}
              id={item.id}
              completed={item.completed}
              onDeleteItem={this.onDeleteItem}
              onCompleteItem={this.onCompleteItem}
              showEdit={this.showEdit}
              onEditItem={this.onEditItem}
            />
          )
        })
      )
    }
  }
  render() {
    return (
      <main className="App">
        <Header
          list={this.state.list}
          allComplete={this.state.allComplete}
          onMarkAllComplete={this.onMarkAllComplete}
          onAddItem={this.onAddItem}
        />
        <ul>
          {this.renderList()}
        </ul>
        <Footer
          list={this.state.list}
          setState={this.setState}
          view={this.state.view}
          onDelete={this.onDeleteItem}
          onChangeView={this.onChangeView}
        />
      </main>
    );
  }
}


export default App;
