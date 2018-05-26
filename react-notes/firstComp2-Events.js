import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tony',
      health: 100,
      level: 2,
      lowLevelClass: 'danger-red'
    }
    this.clickedGirl = this.clickedGirl.bind(this)
  }

  clickedGirl(){
    this.setState({
      health: this.state.health - 25}, function() {
      console.log("HEY I CLICKED THE GIRL, HER HEALTH IS NOW " + this.state.health)
    })
  }

  render () {
    return (<div id={"parent"}>
        <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ''}`}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
          <img src="img/bape.png" alt={"girl with bape on"} onClick={this.clickedGirl}/>
        </div>
      </div>
    )
  }
}

var Header = function () {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    </header>)
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

//WHAT WE ARE DOING?
//#1 using a render() method
//#2 we have a class inside the render()
//#3 we return our JSX to the designated area
//SIMPLE
//Whenever you see CURLY BRACKETS, it means youre running vanilla js


//HANDLING EVENTS
//#1 create the function by calling it as a method, than curly brackets, and your action inside the curly brackets

// Example1:
//  clickedGirl(){
//    console.log("hey i clicked the girl");
//  }

//#2 write the function in the jsx

//Example1:
//<img src="img/bape.png" alt={"girl with bape on"} onClick={this.clickedGirl}/>



// Example2:
//  clickedGirl(){
//    this.setState({
//      health: this.state.health - 25
//    })
//  }

// in Example 2 this.setState is a Function, INSIDE the function/parentheses is our method, that we are changing!

//Example3
//clickedGirl(){
//  this.setState({
//    health: this.state.health - 25
//  }, function () {
//    console.log("HEY I CLICKED THE GIRL, HER HEALTH IS NOW" + this.state.health);
//  })
//}

// in Example3 we added a callback function
// example3 is changing the health property by -25, than the callback function console.logs the new change.

//WE MUST BIND (future proof javascript course goes over this)
//anytime we create a method we must bind! (like append child)
//in the following Example4 we are binding our clickedGirl() method to the Layout component    @ 7:20 of the video
//Example4:
//class Layout extends Component {
//  constructor () {
//    super()
//    this.state = {
//      name: 'Tony',
//      health: 100,
//      level: 2,
//      lowLevelClass: 'danger-red'
//    }
//    this.clickedGirl = this.clickedGirl.bind(this)
//  }
