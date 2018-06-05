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
      //using the variables above which target the name of the input fields that the user is changing, we send the name & the new value UP to the global state... for example if the select box is changed to San Francisco, the constructor would have a city: 'San Francisco'... city represents name & san francisco represents value! (the name & value were already created in the Filter Component )
      [name]: value
    }, () => {
      console.log(this.state);
      // anytime the state is changed, trigger this callback filteredData function
      this.filteredData()
    })
  }

  // checks listingsData first than the current state selected by the user, to filter/return the results of the listings
  // the item parameter represents each individual listing being passed through the filter method
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  //newData is just our listingsData being filtered under a certain condition

//for the input boxes
  filteredData(){
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price
      && item.price <= this.state.max_price
      && item.floorSpace >= this.state.min_floor_space
      && item.floorSpace <= this.state.max_floor_space
      && item.bedrooms >= this.state.bedrooms
      && item.restrooms >= this.state.restrooms

    })

// For the selectboxes, Since the lisitngsData value is NOT a number like price was, we can't use >= ... So have to check if the current state set by the user is not the default word "All"... than filter/return the results of the item/listing based on the user's selected value.
//Basically what is returned from the filter method must match the users selection, or else it returns nothing

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

// For the checkboxes.. if the value does not equal false, loop through the listings/item, check the extras category, if it includes the name that was checked, send it to the globalState
    if(this.state.swimming_pool != false){
      newData = newData.filter((item) =>{
        return item.extras.includes('swimming_pool') == this.state.swimming_pool
      })
      console.log(newData)
    }

    if(this.state.elevator != false){
      newData = newData.filter((item) =>{
        return item.extras.includes('elevator') == this.state.elevator
      })
      console.log(newData)
    }

    if(this.state.garage != false){
      newData = newData.filter((item) =>{
        return item.extras.includes('garage') == this.state.garage
      })
      console.log(newData)
    }

    if(this.state.finished_basement != false){
      newData = newData.filter((item) =>{
        return item.extras.includes('finished_basement') == this.state.finished_basement
      })
      console.log(newData)
    }

    if(this.state.gym != false){
      newData = newData.filter((item) =>{
        return item.extras.includes('gym') == this.state.gym
      })
      console.log(newData)
    }

//change our current state to what the user has selected via the filter
    this.setState({
      filteredData: newData
    })

  }

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
