class Vote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      jsList: [
        {name: "React", likes: 0},
        {name: "Vue", likes: 0},
        {name: "Angular", likes: 0},
        {name: "Ember", likes: 0},
      ],
      titleText: "Vote for your Favorite JS Library",
    }
  }
  addLike = (props) => {
    var tempList = this.state.jsList
    tempList[props].likes ++
    console.log(tempList[props]);
    tempList.sort((a,b) => {
      return b.likes - a.likes
    })
    this.setState({jsList: tempList})
  }
  renderList = () => {
    return (
      this.state.jsList.map((item, index) => {
        return(
          <div key={item.name}>
            <p>{item.likes}</p>
            <p>{item.name}</p>
            <button onClick={() => this.addLike(index)}>Like</button>
          </div>
        )
      })
    )
  }

  render(){
    return (
      <div className="voteBox">
        <h1>{this.state.titleText}</h1>
        {this.renderList()}
      </div>
    )
  }
}

ReactDOM.render(<Vote />, document.getElementById('app'))
