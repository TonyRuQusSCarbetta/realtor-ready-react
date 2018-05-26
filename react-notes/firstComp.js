//WHAT WE ARE DOING?
//#1 using a render() method
//#2 we have a class inside the render()
//#3 we return our JSX
//SIMPLE 


import React, { Component} from 'react'
// this means we are importing React the library & importing the function Component from react
import ReactDOM from 'react-dom'
//this means we are importing ReactDOM which shows/renders our code to the page for us


class Layout extends Component {
  //extends means we are sharing all the methods that this component has, so the Layout class has cloned Component
  constructor () {
  // constructor () is the first thing that will be triggered/run
    super()
    //super means we both have component and they both share the same method name at the same time... which in this case is constructor()
    this.state = {
    // is an object that saves/has our data ... like when you kill an enemy in a game
      name: 'Tony'
    }
  }

  render () {
  //displays the jsx below to our page
    return (
      //we return our jsx and than that gets rendered when we run ReactDOM.render at the bottom of this page
      <img src="bape.png" alt="bape"/>
  )
  }
}

const app = document.getElementById('app')
// this is in the public folder's index.html

ReactDOM.render(<Layout />, app)
//render/display the jsx we created above at line 19, than we are passing down Layout as a component, than we are going to use the element titled "app" from the index.html





//MORE NOTES
//react is Always expecting an opening and closing tag, so if you are using something that is self closing like an  IMAGE tag... you must write it with a BACKSLASH at the end
//example:
// <img src="bape.png" alt="bape"/>
