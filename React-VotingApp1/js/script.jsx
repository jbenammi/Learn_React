var jsList = [
  {name: "React", likes: 0},
  {name: "Vue", likes: 0},
  {name: "Angular", likes: 0},
  {name: "Ember", likes: 0},
]
let titleText = "Vote for your Favorite JS Library"
const Vote = (props) => {
  const getTitle = () => {
    console.log("in Get Title");
    return (
      <h1>Vote for your favorite JS Framework</h1>
    )
  };
  const addLike = (name) => {
    alert("You Liked " + name + "!")
    jsList.map((item) => {
      if(name === item.name){
        item.likes ++
      }
    })
    jsList.sort((a,b) => {
      return b.likes - a.likes;
    })
    return ReactDOM.render(<Vote list={jsList} />, document.getElementById('app'))
  };
  const voteItems = props.list.map((jsitems) => {
    console.log(jsitems);
    return (
      <div key={jsitems.name}>
        <p>{jsitems.likes}</p>
        <p>{jsitems.name}</p>
        <button onClick={() => addLike(jsitems.name)}>Like</button>
      </div>
    )
  });

  return (
    <div className="voteBox">
      {getTitle()}
      {voteItems}
    </div>
  )
};
ReactDOM.render(<Vote list={jsList} />, document.getElementById('app'))
