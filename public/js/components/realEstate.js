webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '77 Hollywood Blvd',
  city: 'Los Angeles',
  state: 'CA',
  bedrooms: 3,
  restrooms: 2,
  price: 2499000,
  floorSpace: 6000,
  extras: ['garage', 'elevator', 'gym'],
  homeType: 'Apartment',
  image: 'https://cdn.homedit.com/wp-content/uploads/2012/10/kitchen-island-industrial.jpg'
}, {
  address: '17 Post Ave',
  city: 'New York City',
  state: 'NY',
  bedrooms: 2,
  restrooms: 2,
  price: 1499000,
  floorSpace: 3900,
  extras: ['elevator', 'garage'],
  homeType: 'Apartment',
  image: 'https://cdn.vox-cdn.com/thumbor/d34hMccFF_L--7D3mmXX0nk9ro8=/0x0:900x600/920x690/filters:focal(378x228:522x372):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/59780343/204413204.0.jpg'
  // 'https://cdn.vox-cdn.com/thumbor/FxSsbaksW3lxunrTcQDgCRBS3jY=/0x0:900x600/920x690/filters:focal(378x228:522x372):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/59780339/atelier85mil.0.0.gif'

}, {
  address: '306 Cutler Dr',
  city: 'Miami',
  state: 'FL',
  bedrooms: 5,
  restrooms: 3,
  price: 949000,
  floorSpace: 11000,
  extras: ['finished basement', 'gym', 'garage', 'swimming_pool'],
  homeType: 'Condo',
  image: 'https://static1.squarespace.com/static/5759b85c37013bac29d4d37b/t/588fdd3b5016e1497f5fc81a/1485823293041/windsor.jpg?format=1500w'
}, {
  address: '42 Union Square',
  city: 'San Francisco',
  state: 'CA',
  bedrooms: 4,
  restrooms: 2,
  price: 2999000,
  floorSpace: 8000,
  extras: ['elevator', 'gym'],
  homeType: 'Studio',
  image: 'http://www.allconceptcreation.fr/wp-content/uploads/2015/11/1201-laurel-way33.jpg'
  //'https://www.dha.gov.au/images/default-source/default-album/liv-apartments---artist-rendor_870x340.jpg?sfvrsn=22c96b2b_0'
  // 'https://www.amli.com/AMLIContent/Files/apartments/denver/ridgegate/amenity-exterior/ridgegate-amenity-exterior-pool2.jpg'
}, {
  address: '30 Colfax Ave',
  city: 'Denver',
  state: 'CO',
  bedrooms: 3,
  restrooms: 3,
  price: 649000,
  floorSpace: 9000,
  extras: ['garage', 'finished basement', 'gym', 'swimming_pool'],
  homeType: 'Apartment',
  image: 'https://cdnblog.rentcafe.com/blog/wp-content/uploads/2017/03/best-rated-apartments-phoenix-featured.jpg'
}, {
  address: '7 Star Blvd',
  city: 'Houston',
  state: 'TX',
  bedrooms: 4,
  restrooms: 4,
  price: 499000,
  floorSpace: 10000,
  extras: ['garage', 'finished basement'],
  homeType: 'Ranch',
  image: 'https://www.ansthailandrealestate.com/uploads/9/2/2/0/922085/17-copy-copy-770x386_1_orig.jpg'
  //'http://www.allconceptcreation.fr/wp-content/uploads/2015/11/1201-laurel-way33.jpg'
}, {
  address: '29 Sullivan Ave',
  city: 'Daly City',
  state: 'CA',
  bedrooms: 4,
  restrooms: 3,
  price: 799000,
  floorSpace: 12000,
  extras: ['garage', 'finished basement', 'gym'],
  homeType: 'House',
  image: 'http://media.pinterest.com.s3.amazonaws.com/750x/f2/e1/8c/f2e18c3d9f3f5280fde81135c2c3c31e.jpg'
  //'https://bt-wpstatic.freetls.fastly.net/wp-content/blogs.dir/1238/files/2017/09/Jelmberg-Luxury-Estates-1024x402.jpg'
}, {
  address: '4659 Bridgeway Point',
  city: 'Atlanta',
  state: 'GA',
  bedrooms: 6,
  restrooms: 5,
  price: 749000,
  floorSpace: 17000,
  extras: ['garage', 'finished basement', 'gym'],
  homeType: 'House',
  image: 'http://danielsteamhomes.com/agent_files/Luxury%20home.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ------------------------------------------------------------------
var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      firstName: 'Tony',
      listingsData: _listingsData2.default,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      restrooms: 0,
      min_price: 0,
      max_price: 9999999,
      min_floor_space: 0,
      max_floor_space: 49999,
      elevator: false,
      finished_basement: false,
      garage: false,
      gym: false,
      swimming_pool: false,
      filteredData: _listingsData2.default
    };

    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        // anytime the state is changed, trigger this callback filteredData function
        _this2.filteredData();
      });
    }

    // checks listingsData first than the current state selected by the user, to filter/return the results of the listings
    // the item parameter represents each individual listing being passed through the filter method
    // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
    //newData is just our listingsData being filtered under a certain condition

    //for the input boxes

  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.bedrooms >= _this3.state.bedrooms && item.restrooms >= _this3.state.restrooms;
      });

      // For the selectboxes, Since the lisitngsData value is NOT a number like price was, we can't use >= ... So have to check if the current state set by the user is not the default word "All"... than filter/return the results of the item/listing based on the user's selected value.
      //Basically what is returned from the filter method must match the users selection, or else it returns nothing

      if (this.state.city != "All") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }

      if (this.state.homeType != "All") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      // For the checkboxes.. if the value does not equal false, loop through the listings/item, check the extras category, if it includes the name that was checked, send it to the globalState
      if (this.state.swimming_pool != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('swimming_pool') == _this3.state.swimming_pool;
        });
        console.log(newData);
      }

      if (this.state.elevator != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('elevator') == _this3.state.elevator;
        });
        console.log(newData);
      }

      if (this.state.garage != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('garage') == _this3.state.garage;
        });
        console.log(newData);
      }

      if (this.state.finished_basement != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('finished_basement') == _this3.state.finished_basement;
        });
        console.log(newData);
      }

      if (this.state.gym != false) {
        newData = newData.filter(function (item) {
          return item.extras.includes('gym') == _this3.state.gym;
        });
        console.log(newData);
      }

      //change our current state to what the user has selected via the filter
      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-3 mx- flex-container' },
            _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-sm-9 mx-auto flex-container' },
            _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);
// ------------------------------------------------------------------------------


var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ------------------------------------------------------------------
var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      firstName: 'Tony'
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'city' },
            'City'
          ),
          _react2.default.createElement(
            'select',
            { name: 'city', className: 'filters city', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            _react2.default.createElement(
              'option',
              { value: 'San Francisco' },
              'San Francisco'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Miami' },
              'Miami'
            ),
            _react2.default.createElement(
              'option',
              { value: 'New York City' },
              'New York City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Los Angeles' },
              'Los Angeles'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Atlanta' },
              'Atlanta'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Denver' },
              'Denver'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Daly City' },
              'Daly City'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Houston' },
              'Houston'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'homeType' },
            'Home Type'
          ),
          _react2.default.createElement(
            'select',
            { name: 'homeType', className: 'filters homeType', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All Homes'
            ),
            _react2.default.createElement(
              'option',
              { value: 'House' },
              'House'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Condo' },
              'Condo'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Apartment' },
              'Apartment'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Studio' },
              'Studio'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Room' },
              'Room'
            ),
            _react2.default.createElement(
              'option',
              { value: 'Ranch' },
              'Ranch'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'bedrooms' },
            'Bedrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'bedrooms', className: 'filters bedrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              '1+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              '5+ BR'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              '6+ BR'
            )
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'Restrooms' },
            'Restrooms'
          ),
          _react2.default.createElement(
            'select',
            { name: 'restrooms', className: 'filters restrooms', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: '0' },
              '0+ RR'
            ),
            _react2.default.createElement(
              'option',
              { value: '1' },
              '1+ RR'
            ),
            _react2.default.createElement(
              'option',
              { value: '2' },
              '2+ RR'
            ),
            _react2.default.createElement(
              'option',
              { value: '3' },
              '3+ RR'
            ),
            _react2.default.createElement(
              'option',
              { value: '4' },
              '4+ RR'
            ),
            _react2.default.createElement(
              'option',
              { value: '5' },
              '5+ RR'
            ),
            _react2.default.createElement(
              'option',
              { value: '6' },
              '6+ RR'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters floor-space' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Floor Space'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_floor_space', className: 'min-floor-space', onChange: this.props.change, value: this.props.globalState.min_floor_space }),
            _react2.default.createElement('input', { type: 'text', name: 'max_floor_space', className: 'max-floor-space', onChange: this.props.change, value: this.props.globalState.max_floor_space })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Swimming Pool'
              ),
              _react2.default.createElement('input', { name: 'swimming_pool', value: 'swimming_pool', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Elevator'
              ),
              _react2.default.createElement('input', { name: 'elevator', value: 'elevator', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Garage'
              ),
              _react2.default.createElement('input', { name: 'garage', value: 'garage', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Finished Basement'
              ),
              _react2.default.createElement('input', { name: 'finished_basement', value: 'finished basement', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Gym'
              ),
              _react2.default.createElement('input', { name: 'gym', value: 'gym', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import ReactDOM from 'react-dom'
// ------------------------------------------------------------------
var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      firstName: 'Tony'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'mx-left d-inline-block' },
          _react2.default.createElement(
            'em',
            null,
            'Realtor Ready'
          ),
          _react2.default.createElement(
            'nav',
            { className: 'd-inline-block' },
            _react2.default.createElement(
              'a',
              { className: 'd-inline-block hide', href: '#' },
              'Create Ads'
            ),
            _react2.default.createElement(
              'a',
              { className: 'd-inline-block hide', href: '#' },
              'About Us'
            ),
            _react2.default.createElement(
              'a',
              { className: 'd-inline-block', href: '#' },
              'Log In'
            ),
            _react2.default.createElement(
              'a',
              { className: 'd-inline-block', href: '#' },
              'Register'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// ------------------------------------------------------------------
var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      firstName: 'Tony'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    //by binding loopListingsto this class , it says Hey, i know which version of this you are talking about.
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      // var data = this.props.lisitngsData is the same as the variable below
      var listingsData = this.props.listingsData;
      //we are able to access listingsData here because we passed it down to this Listings Component in the render section of realEstate.js, so we can use it here with props

      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any listing";
      }
      // The map() method is used to apply a function on every element in an array. A new array is then returned.
      // We are looping through each listing (which are objects in an array), and applying a function which returns all this jsx to display each individual listing when called.
      //(we called the function at a parcticular spot in the render section)
      // Each child in an array should have a unique key prop, the second parameter in map represents the index, therefore we set the key equal to index which gives it a unique key/index number.
      // we used inline css for each listing background image, style= has two objects, passing in an ojbect that has the background property with a template string for the value
      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'listing', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
            _react2.default.createElement(
              'span',
              { className: 'address' },
              listing.address
            ),
            _react2.default.createElement(
              'div',
              { className: 'details' },
              _react2.default.createElement(
                'div',
                { className: 'col-md-3' },
                _react2.default.createElement('div', { className: 'user-image' })
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-9' },
                _react2.default.createElement(
                  'div',
                  { className: 'user-details' },
                  _react2.default.createElement(
                    'span',
                    { className: 'user-name' },
                    'Marissa Martinez'
                  ),
                  _react2.default.createElement(
                    'span',
                    { className: 'post-date' },
                    '05/26/2018'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-md-12' },
                _react2.default.createElement(
                  'div',
                  { className: 'listing-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'floor-space' },
                    _react2.default.createElement('i', { className: 'far fa-square' }),
                    _react2.default.createElement(
                      'span',
                      null,
                      listing.floorSpace,
                      'ft\xB2'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fas fa-bed' }),
                      _react2.default.createElement(
                        'span',
                        null,
                        listing.bedrooms,
                        ' bedrooms'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn center' },
                    'View Listing'
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'bottom-info' },
            _react2.default.createElement(
              'span',
              { className: 'price' },
              '$',
              listing.price
            ),
            _react2.default.createElement(
              'span',
              { className: 'city' },
              _react2.default.createElement('i', { className: 'fas fa-map-marker-alt' }),
              listing.city,
              ', ',
              listing.state
            )
          )
        );
      });
    }

    //in the render we called this.loopListings() function in a specific spot which displays each listing.

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'section',
            { className: 'listings-results' },
            this.loopListings()
          ),
          _react2.default.createElement(
            'section',
            { id: 'pagination' },
            _react2.default.createElement(
              'ul',
              { className: 'pages' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);