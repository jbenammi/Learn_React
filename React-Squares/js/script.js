ReactDOM.render(
  React.createElement('div', null,
    React.createElement('h1', {style: {display: 'inline-block', width: '200px', height: '200px', backgroundColor: 'blue', color: 'white'}}, "white on blue"),
    React.createElement('h1', {style: {display: 'inline-block', width: '200px', height: '200px', backgroundColor: 'red', color: 'blue'}}, "blue on red"),
    React.createElement('h1', {style: {display: 'inline-block', width: '200px', height: '200px', backgroundColor: 'pink', color: 'green'}}, "green on pink"),
  ),
  document.getElementById('app')
)
