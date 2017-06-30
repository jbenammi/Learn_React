import React, { Component } from 'react';
import Square from './square'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      colors: ['red','red','orange','orange','yellow','yellow','green','green','blue','blue','purple','purple'],
      board: [],
      col: 4,
      row: 3,
      matchCheck: null,
      match: 0,
    }
  }

  createBoard = (event) => {
    if(!this.state.board.length){
      var board = []
      this.shuffle(this.state.colors)
      var color_idx = 0
      for(var ridx=0; ridx<this.state.row; ridx += 1){
        board.push([])
        for(var cidx=0; cidx<this.state.col; cidx += 1){
          board[ridx].push({id: ridx+'-'+cidx, color: this.state.colors[color_idx]})
          color_idx += 1
        }
      }
      this.setState({board: board})
      console.log(board);
    }
    return null
  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  renderBoard = () => {
    this.createBoard()
    return (
      this.state.board.map((row, ridx) => {
        return (
          <div key={"row-"+ridx} id={"row-"+ridx} className="row">
            {row.map((color, cidx) => {
              return(
                <Square
                  key={color['id']}
                  color={color['color']}
                  id={color['id']}
                  onFlip={this.onFlip}
                />
              )
            })}
          </div>
        )
      })
    )
  }
  onCheck = (squareid) => {
    if(!this.state.matchCheck){
      this.setState({matchCheck: squareid})
    }else {
      var square_1 = this.state.matchCheck
      var square_2 = squareid
      console.log(square_1);
      console.log(square_2);
      if(this.state.board[square_1[0]][square_1[2]]['color'] !== this.state.board[square_2[0]][square_2[2]]['color']){
        document.getElementById(this.state.board[square_1[0]][square_1[2]]['color']+"-"+square_1).style.display = 'none'
        document.getElementById(this.state.board[square_2[0]][square_2[2]]['color']+"-"+square_2).style.display = 'none'
        document.getElementById("grey-"+square_1).style.display = 'inline-block'
        document.getElementById("grey-"+square_2).style.display = 'inline-block'
        this.setState({matchCheck: null})
      }else{
        this.setState({matchCheck: null, match: this.state.match + 2})
      }
    }
  }

  onFlip = (event,colorid) => {
    const square = document.getElementById(event.target.id).parentNode
    document.getElementById(event.target.id).style.display = 'none'
    document.getElementById(colorid).style.display = 'inline-block'
    setTimeout(() => {
      this.onCheck(square.id)
    }, 1000)
  }

  checkWin = () => {
    if(this.state.colors.length === this.state.match){
      return (
        <button onClick={(e) => this.playAgain(e)}>Play Again?</button>
      )
    }
  }

  playAgain = (event) => {
    event.target.style.display = 'none'
    document.getElementById('start').style.display = "block"
    this.setState({board: [], matchCheck: null, match: 0})
  }

  startGame = (event) => {
    var time = 3
    event.target.style.display = 'none'
    var timer = setInterval(() => {
      if(time){
        document.getElementById('count').style.display = "block"
        document.getElementById('count').innerHTML = "Get ready to memorize in "+time
        time -= 1
      }else {
        document.getElementById('count').style.display = "none"
        this.state.board.map((row) => {
          row.map((color) => {
            document.getElementById(color['color']+'-'+color['id']).style.display = 'inline-block'
            document.getElementById('grey-'+color['id']).style.display = 'none'
            return null
          })
          return null
        })
        setTimeout(()=> {
          this.state.board.map((row) => {
            row.map((color) => {
              document.getElementById(color['color']+'-'+color['id']).style.display = 'none'
              document.getElementById('grey-'+color['id']).style.display = 'inline-block'
              return null
            })
            return null
          })
        }, 2000)
        clearInterval(timer)
      }
    }, 1000)
  }

  render() {
    return (
      <div className="App">
        <h1>Let's Play Memory!</h1>
        {this.renderBoard()}
        <button id="start" onClick={(e) => this.startGame(e)}>Start Game</button>
        <p className="hide" id="count"></p>
        {this.checkWin()}
      </div>
    );
  }
}

export default App;
