import React, {Component} from 'react'
// ------------------------------------------------------------------
export default class Filter extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Tony'
    }
  }

  render () {
    return (<section id="filter">
      <div className="inside">
        <h4>Filter</h4>
        <select name="neighborhood" className="neighborhood" onChange={this.props.change}>
          <option>Location</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Miami">Miami</option>
          <option value="New York City">New York City</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Atlanta">Atlanta</option>
          <option value="Denver">Denver</option>
          <option value="Daly City">Daly City</option>
          <option value="Houston">Houston</option>
        </select>
        <select name="housetype" className="housetype" onChange={this.props.change}>
          <option>Home Type</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Room">Room</option>
        </select>
        <select name="bedrooms" className="bedrooms" onChange={this.props.change}>
          <option>Bedrooms</option>
          <option value="1">1 BR</option>
          <option value="2">2 BR</option>
          <option value="3">3 BR</option>
          <option value="4">4 BR</option>
          <option value="5">5 BR</option>
          <option value="6">6 BR</option>

        </select>
        <select name="restrooms" className="bathrooms" onChange={this.props.change}>
          <option>bathrooms</option>
          <option value="1">1 RR</option>
          <option value="2">2 RR</option>
          <option value="3">3 RR</option>
          <option value="4">4 RR</option>
          <option value="5">5 RR</option>
          <option value="6">6 RR</option>
        </select>

        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price" placeholder="min" onChange={this.props.change} value="0"/>
          <input type="text" name="max-price" className="max-price" placeholder="max" onChange={this.props.change} value="10000000"/>
        </div>

        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-floor-space" className="min-floor-space" placeholder="min" onChange={this.props.change} value="0"/>
          <input type="text" name="max-floor-space" className="max-floor-space" placeholder="max" onChange={this.props.change} value="50000"/>
        </div>

        <div className="filters extras">
          <span className="title">
          Extras
          </span>

          <label htmlFor="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox"onChange={this.props.change}/>
          </label>

          <label htmlFor="extras">
            <span>Elevators</span>
            <input name="extras" value="elevator" type="checkbox"onChange={this.props.change}/>
          </label>

          <label htmlFor="extras">
            <span>Garage</span>
            <input name="extras" value="gym" type="checkbox"onChange={this.props.change}/>
          </label>

          <label htmlFor="extras">
            <span>Finished Basement</span>
            <input name="extras" value="finished basement" type="checkbox"onChange={this.props.change}/>
          </label>

          <label htmlFor="extras">
            <span>Gym</span>
            <input name="extras" value="gym" type="checkbox"onChange={this.props.change}/>
          </label>
        </div>
      </div>
    </section>)
  }
}
