const items = [
  {id: 'first', element: 'h1', content: 'Hello React!'},
  {id: 'second', element: 'h2', content: 'things I need to do:'},
  {id: 'third', element: 'p', content: '* Learn React'},
  {id: 'fourth', element: 'p', content: '* Climb Mt Everest'},
  {id: 'fifth', element: 'p', content: '* Run a Marathon'},
  {id: 'sixth', element: 'p', content: '* Feed the dogs'},
]
// const header = React.createElement('h1', null, 'Hello React!');
// const subhead = React.createElement('h2', null, 'Things I need to do:')
// const todolist = React.createElement('p', null, '* Learn React')
// ReactDOM.render(header, subhead, todolist, document.getElementById('app'));

for (var idx=0; idx<items.length; idx++){
  ReactDOM.render(React.createElement(items[idx].element, null, items[idx].content), document.getElementById(items[idx].id))
}
