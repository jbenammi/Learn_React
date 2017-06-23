class Board extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      squares: [
        [{id:1, value:'•'},{id:2, value:'•'},{id:3, value:'•'}],
        [{id:4, value:'•'},{id:5, value:'•'},{id:6, value:'•'}],
        [{id:7, value:'•'},{id:8, value:'•'},{id:9, value:'•'}],
      ],
      nextIs: 'X',
      winner: false,
      gameText: "Lest play Tic Tac Toe! X goes first!"
    }
  }

  checkWin = (props) => {
    console.log(props);
    var winner = false
    const wins = [
      [[0,0],[0,1],[0,2]],
      [[0,0],[1,1],[2,2]],
      [[1,0],[1,1],[1,2]],
      [[2,0],[2,1],[2,2]],
      [[0,0],[1,0],[2,0]],
      [[0,1],[1,1],[2,1]],
      [[0,2],[1,2],[2,2]],
      [[0,2],[1,1],[2,2]],
    ]
    wins.map((win) => {
      if(props.squares[win[0][0]][win[0][1]].value == props.player && props.squares[win[1][0]][win[1][1]].value == props.player && props.squares[win[2][0]][win[2][1]].value == props.player){
        winner = true
      }
    })
    return winner
  }

  markBox = (props) => {
    var tempSquares = this.state.squares
    if(this.state.winner || tempSquares[props.row][props.box].value != '•'){
      return
    }
    if(this.state.nextIs == 'X'){
      tempSquares[props.row][props.box].value = 'X'
    }
    else{
      tempSquares[props.row][props.box].value = 'O'
    }
    if(this.checkWin({squares:tempSquares, player:this.state.nextIs})){
      this.setState({squares: tempSquares, gameText: 'Game Over ' + this.state.nextIs + ' is the winner!', winner: true})
    }
    else if(this.state.nextIs == 'X'){
      this.setState({squares: tempSquares, nextIs:'O', gameText: "O goes next!"})
    }
    else{
      this.setState({squares: tempSquares, nextIs:'X', gameText: "X goes next!"})
    }
  }

  makeBoard = () => {
    return (
      this.state.squares.map((row, rindex) => {
        return (
          <div key={'row' + rindex} className='row'>
            {row.map((box, bindex) => {
              return (
                <button key={'box' + box.id} onClick={() => this.markBox({row:rindex, box:bindex})}>{box.value}</button>
              )
            })}
          </div>
        )
      })
    )
  }
  render() {
    return (
      <div>
        <h1>{this.state.gameText}</h1>
        {this.makeBoard()}
      </div>
    )
  }
}
ReactDOM.render(<Board />, document.getElementById('app'))
