import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tony',
      health: 20,
      level: 2,
      lowLevelClass: 'danger-red'
    }
  }

  render () {
    return (<div id={"parent"}>
        <div className={`blue-bg ${(this.state.health < 55) ? this.state.lowLevelClass : ''}`}>
          <h3>Name: {this.state.name}</h3>
          <h3>Health: {this.state.health}</h3>
          <h3>Level: {this.state.level}</h3>
          <img src="img/bape.png" alt={"girl with bape on"}/>
        </div>
      </div>
    )
  }
}
//the above render is returning the div, the className statement reads like this.. background is blue, if health is below 55 than add the html class 'danger-red'...

//the question mark is a Conditional (ternary) Operator...
//when reading you can replace the ? with the word THAN.... sounds like this, if this happens than do this

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

//WRITE ATTRIBUTES TO HTML TAG
//only difference is using className & using curly brackets around your string
