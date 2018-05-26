import React, { Component} from 'react'
import ReactDOM from 'react-dom'

class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Tony'
    }
  }

  render () {
    return (<div>
      <Header />
      <img src="img/bape.png" alt="bape"/>
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
