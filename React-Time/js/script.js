setInterval(function(){
  const today_date = new Date()
  const time = today_date.toLocaleTimeString()
  console.log(time);
  const myTime = React.createElement('h3', null, "The Time is: " + time);
  ReactDOM.render(myTime, document.getElementById('app'));
}, 1000)
