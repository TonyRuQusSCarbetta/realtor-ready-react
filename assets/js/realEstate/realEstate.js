import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'
// ------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
      listingsData,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 9999999,
      min_floor_space: 0,
      max_floor_space: 50000,
      elevator: false,
      finished_basement: false,
      garage: false,
      gym: false,
      swimming_pool: false,
      filteredData: listingsData
    }

    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
  }

  change(event){
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
      [name]: value
    }, () => {
      console.log(this.state);
      // anytime the state is changed, trigger filteredData function
      this.filteredData()
    })
  }

  // checks listingsData first than the current state selected by the user, to filter/return the results of the listings
  //item parameter represents each individual listing being passed through the filter method
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price
      && item.price <= this.state.max_price
      && item.floorSpace >= this.state.min_floor_space
      && item.floorSpace <= this.state.max_floor_space
      && item.bedrooms >= this.state.bedrooms

    })

//Since the lisitngsData value is NOT a number we can't use >= ... So have to check if the current state set by the user is not the default word "All"... than filter/return the results of the item/listing based on the user's selected value.
    if (this.state.city != "All") {
      newData = newData.filter((item) => {
        return item.city == this.state.city
      })
    }

    if (this.state.homeType != "All") {
      newData = newData.filter((item) => {
        return item.homeType == this.state.homeType
      })
    }


//fliter the listings data that has swimming_pool
    // if (this.state.swimming_pool = 'true') {
    //   newData = newData.filter((item) => {
    //     return item.swimming_pool == this.state.swimming_pool
    //   })
    // }

    this.setState({
      filteredData: newData
    })

  }
// <div className=""></div>
  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <div className="col-md-3">
        <Filter change={this.change} globalState={this.state} />
        </div>

        <div className="col-md-9">
        <Listings listingsData={this.state.filteredData} />
        </div>
      </section>
      </div>)
  }
}
// ------------------------------------------------------------------------------
const app = document.getElementById('app')

ReactDOM.render(<App />, app)
