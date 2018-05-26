import React, {Component} from 'react'
import ReactDOM from 'react-dom'
// ------------------------------------------------------------------
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

  clickedGirl () {
    this.setState({
      health: this.state.health - 25
    }, function () {
      console.log('HEY I CLICKED THE GIRL, HER HEALTH IS NOW ' + this.state.health)
    })
  }

  render () {
    return (<div id={'parent'}>
      <Header />
      <div className={`blue-bg ${(this.state.health < 55)
          ? this.state.lowLevelClass
          : ''}`}>
        <div className={'user-info'}>
          <h3>Name: {this.state.name}</h3>
          <h3>Level: {this.state.level}</h3>
        </div>
        <GirlImage clickedGirl={this.clickedGirl} health={this.state.health} />
      </div>
    </div>)
  }
}

// ------------------------------------------------------------------------------
class GirlImage extends Component {
  constructor () {
    super()
    this.state = {
      gameOver: 'SORRY YOU ARE DEAD!!!!'
    }
  }
  render () {
    return (<div className='GirlImageComp'>
      <img src='img/bape.png' alt={'girl with bape on'} onClick={this.props.clickedGirl} />
      <h3>Health: {(this.props.health <= 0) ? this.state.gameOver : this.props.health }</h3>
    </div>)
  }
}

// ------------------------------------------------------------------------------
// Header is a "dumb" Component
var Header = function () {
  return (<header>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </header>)
}

// ------------------------------------------------------------------------------
const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)

// WHAT WE ARE DOING?
// #1 using a render() method
// #2 we have a class inside the render()
// #3 we return our JSX to the designated area
// SIMPLE
// Whenever you see CURLY BRACKETS, it means youre running vanilla js
// ------------------------------------------------------------------------------
// We can pass down the data or even functions down to other Components from one parent to the child.  And we do that with props
// https://medium.com/@manojsinghnegi/react-state-vs-props-explained-51beebd73b21
// #1 We take the health property from the Layout component and placed it under the image in the GirlImage component (it is now on line 49)
// #2 The onclick function doesn't work so we must use props to pass it down (line34 & line48)
// @3:25 of video this is better explained
// We have it at the parent component, and because the girl image component is inside the parent component we can pass it down and say use the clickedGirl function
// So basically we now have access to the function from the parent component

// Now we pass down the h3, but at the bottom we changed state to props.
// <h3>Health: {this.props.health}</h3>

// Next we update the state with gameOver, than we made an if statement
// <h3>Health: {(this.props.health <= 0) ? this.state.gameOver : this.props.health }</h3>
// IF STATEMENTS READS LIKE this
// if this.props.health is less than or equal to 0 THAN print this.state.gameOver ELSE/IF NOT print this.props.health
// the question mark and the : is a Conditional (ternary) Operator...
// ? = if   : = else
// https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript
