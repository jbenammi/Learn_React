class CounterApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counters: [],
      nextCounter: 1,
    }
  }

  renderCounters = () => {
    return (
      this.state.counters.map((item) => {
        console.log("in renderCounters", item);
        return (
          item.renderCounter()
        )
      })
    )
  }

  addCounter = () => {
    var counters = this.state.counters
    counters.push( new Counter(this.state.nextCounter) )
    this.setState({counters: counters, nextCounter: this.state.nextCounter +1})
  }

  render(){
    return (
      <div>
        <button onClick={() => this.addCounter()}>Add Counter</button>
        <div>
          {this.renderCounters()}
        </div>
      </div>
    )
  }
}

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: props,
      count: 0,
    }
  }

  changeCount = (props) => {
    if(props == "+"){
      this.state.count ++
    }
    else if(props == "-"){
      this.state.count --
    }
    ReactDOM.render(<CounterApp />, document.getElementById('app'))
  }

  renderCounter = () => {
    return (
      <div key={this.state.id}>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.changeCount("+")}>Increase</button>
        <button onClick={() => this.changeCount("-")}>Decrease</button>
      </div>
    )
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))
