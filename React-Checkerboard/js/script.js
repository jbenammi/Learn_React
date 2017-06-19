const CheckerBoard = (props) => {
  var isOdd = true
  var board = Array(number).fill(null)
  var newboard = board.map(function(board, index){
    return ( React.createElement(Row, {odd:isOdd = !isOdd, idx: index}) )
  })
  return React.createElement('div', null, newboard)
}
const Row = (props) => {
  var row = Array(number).fill(null)
  var isRed = props.odd
  var newrow = row.map(function(row, index) {
    return ( React.createElement(Cell, { red: isRed = !isRed, idx: index }))
    }
  )
  return React.createElement('div', {style:styles.row, key: props.idx}, newrow)
}
const Cell = (props) => {
  console.log(props);
  return React.createElement('div', {style: props.red ? styles.cellB : styles.cellA, key: props.idx}, null)
}
var styles = {
  row: {height: '20px'},
  cellA: {height: '20px', width: '20px', display:'inline-block', backgroundColor:'black'},
  cellB: {height: '20px', width: '20px', display:'inline-block', backgroundColor:'red'},
}
var number = parseInt(prompt("Please enter number of rows"))
while(!number){
  number = parseInt(prompt("Please enter number of rows"))
}
ReactDOM.render(CheckerBoard(), document.getElementById('app'))
