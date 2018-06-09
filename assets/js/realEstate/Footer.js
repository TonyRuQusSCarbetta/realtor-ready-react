import React, {Component} from 'react'
// ------------------------------------------------------------------
export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Tony'
    }
  }

  render() {
    return (
      <section id="footer">
      <div className="row">
        <div className="col-xs-12 flex-container hvr-grow img-fluid">
          <a href="http://www.tonycarbetta.com"><img src="img/CarbettaCoding-Logo.png" alt="CarbettaCoding"/></a>
        </div>
      </div>
      </section>
    )
  }
}
