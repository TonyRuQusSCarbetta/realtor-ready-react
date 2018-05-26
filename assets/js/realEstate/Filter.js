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
        <select name="neighborhood" className="neighborhood">
          <option>neighborhood</option>
        </select>
        <select name="housetype" className="housetype">
          <option>house type</option>
        </select>
        <select name="bedrooms" className="bedrooms">
          <option>bedrooms</option>
        </select>
        <select name="bathrooms" className="bathrooms">
          <option>bathrooms</option>
        </select>

        <div className="filters price">
          <span className="title">Price</span>
          <input type="text" name="min-price" className="min-price" placeholder="min" />
          <input type="text" name="max-price" className="max-price" placeholder="max" />
        </div>

        <div className="filters floor-space">
          <span className="title">Floor Space</span>
          <input type="text" name="min-floor-space" className="min-floor-space" placeholder="min" />
          <input type="text" name="max-floor-space" className="max-floor-space" placeholder="max" />
        </div>

        <div className="filters extras">
          <span className="title">
          Extras
          </span>

          <label for="extras">
            <span>Swimming Pool</span>
            <input name="extras" value="swimming-pool" type="checkbox"/>
          </label>

          <label for="extras">
            <span>Elevators</span>
            <input name="extras" value="elevator" type="checkbox"/>
          </label>

          <label for="extras">
            <span>Garage</span>
            <input name="extras" value="gym" type="checkbox"/>
          </label>

          <label for="extras">
            <span>Finished Basement</span>
            <input name="extras" value="finished basement" type="checkbox"/>
          </label>

          <label for="extras">
            <span>Gym</span>
            <input name="extras" value="gym" type="checkbox"/>
          </label>
        </div>
      </div>
    </section>)
  }
}
