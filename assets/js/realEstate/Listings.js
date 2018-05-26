import React, {Component} from 'react'
// ------------------------------------------------------------------
export default class Header extends Component {
  constructor() {
    super()
    this.state = {
      firstName: 'Tony'
    }
  }

  render() {
    return (<section id="listings">

      <section className="search-area">
        <input type="text" name="search"/>
      </section>

      <section className="sortby-area">
        <div className="results">390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortby">
            <option value="price-asc">Highest Price</option>
            <option value="price-asc">Lowest Price</option>
          </select>
          <div className="view">
            <i className="fas fa-list"></i>
            <i className="fas fa-th"></i>
          </div>
        </div>
      </section>

      <section className="listings-results">
        <div className="listing">
          <div className="listing-img">
            <span className="address">2028 Leavenworth St</span>
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
                    <span>1000ft&sup2;</span>
                    <div className="bedrooms">
                      <i className="fas fa-bed"></i>
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn center">View Listing</div>
                </div>
                </div>


            </div>
          </div>
          <div className="bottom-info">
            <span className="price">$4000 / month</span>
            <span className="location">
              <i className="fas fa-map-marker-alt"></i> San Francisco, CA</span>
          </div>
        </div>





        <div className="listing">
          <div className="listing-img">
            <span className="address">2028 Leavenworth St</span>
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
                    <span>1000ft&sup2;</span>
                    <div className="bedrooms">
                      <i className="fas fa-bed"></i>
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn center">View Listing</div>
                </div>
                </div>


            </div>
          </div>
          <div className="bottom-info">
            <span className="price">$4000 / month</span>
            <span className="location">
              <i className="fas fa-map-marker-alt"></i> San Francisco, CA</span>
          </div>
        </div>



        <div className="listing">
          <div className="listing-img">
            <span className="address">2028 Leavenworth St</span>
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
                    <span>1000ft&sup2;</span>
                    <div className="bedrooms">
                      <i className="fas fa-bed"></i>
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn center">View Listing</div>
                </div>
                </div>


            </div>
          </div>
          <div className="bottom-info">
            <span className="price">$4000 / month</span>
            <span className="location">
              <i className="fas fa-map-marker-alt"></i> San Francisco, CA</span>
          </div>
        </div>


        <div className="listing">
          <div className="listing-img">
            <span className="address">2028 Leavenworth St</span>
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
                    <span>1000ft&sup2;</span>
                    <div className="bedrooms">
                      <i className="fas fa-bed"></i>
                      <span>3 bedrooms</span>
                    </div>
                  </div>
                  <div className="view-btn center">View Listing</div>
                </div>
                </div>


            </div>
          </div>
          <div className="bottom-info">
            <span className="price">$4000 / month</span>
            <span className="location">
              <i className="fas fa-map-marker-alt"></i> San Francisco, CA</span>
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
    </section>)
  }
}
