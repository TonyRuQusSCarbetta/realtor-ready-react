import React, {Component} from 'react'
// ------------------------------------------------------------------
export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Tony'
    }
    this.loopListings = this.loopListings.bind(this)
    //by binding loopListingsto this class , it says Hey, i know which version of this you are talking about.
  }
  loopListings () {
    // var data = this.props.lisitngsData is the same as the variable below
    var {listingsData} = this.props
    //we are able to access listingsData here because we passed it down to this Listings Component in the render section of realEstate.js, so we can use it here with props

    if (listingsData == undefined || listingsData.length == 0 ) {
      return "Sorry your filter did not match any listing";
    }
// The map() method is used to apply a function on every element in an array. A new array is then returned.
// We are looping through each listing (which are objects in an array), and applying a function which returns all this jsx to display each individual listing when called.
//(we called the function at a parcticular spot in the render section)
// Each child in an array should have a unique key prop, the second parameter in map represents the index, therefore we set the key equal to index which gives it a unique key/index number.
// we used inline css for each listing background image, style= has two objects, passing in an ojbect that has the background property with a template string for the value
    return listingsData.map((listing, index) =>{
      return (<div className="listing" key={index}>
        <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}} >
          <span className="address">{listing.address}</span>
          <div className="details">
            <div className="col-md-3">
              <div className="user-image"></div>
            </div>

            <div className="col-md-9">
              <div className="user-details">
                <span className="user-name">Marissa Martinez</span>
                <span className="post-date">05/26/2018</span>
              </div>
              </div>
              <div className="col-md-12">
              <div className="listing-details">
                <div className="floor-space">
                  <i className="far fa-square"></i>
                  <span>{listing.floorSpace}ft&sup2;</span>
                  <div className="bedrooms">
                    <i className="fas fa-bed"></i>
                    <span>{listing.bedrooms} bedrooms</span>
                  </div>
                </div>
                <div className="view-btn center">View Listing</div>
              </div>
              </div>

          </div>
        </div>
        <div className="bottom-info">
          <span className="price">${listing.price}</span>
          <span className="city">
            <i className="fas fa-map-marker-alt"></i>{listing.city}, {listing.state}</span>
        </div>
      </div>)
    })
  }

//in the render we called this.loopListings() function in a specific spot which displays each listing.
  render() {
    return (
      <section id="listings">
      <div className="row">



      <section className="listings-results">
      {this.loopListings()}
      </section>

      <section id="footer">
      <div className="row">
        <div className="col-xs-12 flex-container">
          <a href="http://www.tonycarbetta.com" target="_blank" className="hvr-grow"><img src="img/CarbettaCoding-Logo.png" alt="CarbettaCoding"/></a>
        </div>
      </div>
      </section>

      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>



      </section>
      </div>
      </section>
    )
  }
}
