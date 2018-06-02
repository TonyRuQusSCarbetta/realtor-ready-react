import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// ------------------------------------------------------------------
export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony'
    }
  }

  render () {
    return (
      <header>
        <div className="mx-left d-inline-block"><em>Realtor Ready</em>

        <nav className="d-inline-block">
          <a className="d-inline-block" href="#">Create Ads</a>
          <a className="d-inline-block" href="#">About Us</a>
          <a className="d-inline-block" href="#">Log In</a>
          <a className="d-inline-block" href="#">Register</a>
        </nav>
        </div>

      </header>
    )
  }
}
