(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./resources/js/src/containers/Backend/Admin/Agencies/Actions/Add.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Agencies/Actions/Add.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var position = [51.505, -0.09];

var Add = /*#__PURE__*/function (_Component) {
  _inherits(Add, _Component);

  var _super = _createSuper(Add);

  function Add() {
    var _this;

    _classCallCheck(this, Add);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      company_id: '',
      country_id: '',
      city_id: '',
      name: '',
      latitude: '',
      longitude: '',
      radius: '',
      hasLocation: false,
      latlng: {
        lat: 51.505,
        lng: -0.09
      }
    });

    _defineProperty(_assertThisInitialized(_this), "mapRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var map = _this.mapRef.current;
      if (map != null) map.leafletElement.locate();
    });

    _defineProperty(_assertThisInitialized(_this), "handleLocationFound", function (e) {
      _this.setState({
        hasLocation: true,
        latlng: e.latlng
      });
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.onSubmit(e.target);
    });

    return _this;
  }

  _createClass(Add, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          company_id = _this$state.company_id,
          country_id = _this$state.country_id,
          city_id = _this$state.city_id,
          name = _this$state.name,
          latitude = _this$state.latitude,
          longitude = _this$state.longitude,
          radius = _this$state.radius;
      var companies = this.props.backend.agencies.companies;
      var marker = this.state.hasLocation ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__["Marker"], {
        position: this.state.latlng
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__["Popup"], null, "You are here")) : null;
      var countries = [];
      var cities = [];
      if (company_id !== '') countries = companies.find(function (_ref) {
        var id = _ref.id;
        return +company_id === +id;
      }).countries;
      if (country_id !== '') cities = countries.find(function (_ref2) {
        var id = _ref2.id;
        return +country_id === +id;
      }).cities;
      var companiesOptions = companies.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (company) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: JSON.stringify(company),
          value: company.id
        }, company.name);
      });
      var countriesOptions = countries.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (country) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: JSON.stringify(country),
          value: country.id
        }, country.name);
      });
      var citiesOptions = cities.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (city) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: JSON.stringify(city),
          value: city.id
        }, city.name);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "company_id",
        placeholder: "Company",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: company_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Select a company"), companiesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "country_id",
        placeholder: "Country",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFlag"],
        validation: {
          required: true
        },
        required: true,
        value: country_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Select a country"), countriesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "city_id",
        placeholder: "City",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCity"],
        validation: {
          required: true
        },
        required: true,
        value: city_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Select a city"), citiesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "name",
        placeholder: "Name",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "radius",
        placeholder: "Radius in meters(m)",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRuler"],
        validation: {
          required: true
        },
        required: true,
        value: radius
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "latitude",
        placeholder: "Latitude",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRulerVertical"],
        validation: {
          required: true
        },
        required: true,
        value: latitude
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "longitude",
        placeholder: "Longitude",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRulerHorizontal"],
        validation: {
          required: true
        },
        required: true,
        value: longitude
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__["Map"], {
        center: this.state.latlng,
        length: 4,
        onClick: this.handleClick,
        onLocationfound: this.handleLocationFound,
        ref: this.mapRef,
        zoom: 13
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__["TileLayer"], {
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution: "\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors"
      }), marker)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: "brokenblue",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"]
      }, "Submit")));
    }
  }]);

  return Add;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit(data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["postAgencies"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Add)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Agencies/Actions/Edit.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Agencies/Actions/Edit.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var html_to_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! html-to-react */ "./node_modules/html-to-react/index.js");
/* harmony import */ var html_to_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html_to_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../shared/utility */ "./resources/js/src/shared/utility.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      company_id: '',
      country_id: '',
      city_id: '',
      name: '',
      latitude: '',
      longitude: '',
      radius: '',
      id: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type,
          files = _e$target.files;
      if (type === 'file') return _this.setState(_defineProperty({}, name, files));

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.submit(_this.state.id, _this.state);
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          company_id = _this$state.company_id,
          country_id = _this$state.country_id,
          city_id = _this$state.city_id,
          name = _this$state.name,
          latitude = _this$state.latitude,
          longitude = _this$state.longitude,
          radius = _this$state.radius;
      var companies = this.props.backend.agencies.companies;
      var countries = [];
      var cities = [];
      if (company_id !== '') countries = companies.find(function (_ref) {
        var id = _ref.id;
        return +company_id === +id;
      }).countries;
      if (country_id !== '') cities = countries.find(function (_ref2) {
        var id = _ref2.id;
        return +country_id === +id;
      }).cities;
      var companiesOptions = companies.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (company) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: JSON.stringify(company),
          value: company.id
        }, company.name);
      });
      var countriesOptions = countries.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (country) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: JSON.stringify(country),
          value: country.id
        }, country.name);
      });
      var citiesOptions = cities.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (city) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          key: JSON.stringify(city),
          value: city.id
        }, city.name);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "company_id",
        placeholder: "Company",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: company_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Select a company"), companiesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "country_id",
        placeholder: "Country",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFlag"],
        validation: {
          required: true
        },
        required: true,
        value: country_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Select a country"), countriesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "city_id",
        placeholder: "Country",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCity"],
        validation: {
          required: true
        },
        required: true,
        value: city_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "Select a city"), citiesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "name",
        placeholder: "Name",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: name
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "radius",
        placeholder: "Radius in meters(m)",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRuler"],
        validation: {
          required: true
        },
        required: true,
        value: radius
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "latitude",
        placeholder: "Latitude",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRulerVertical"],
        validation: {
          required: true
        },
        required: true,
        value: latitude
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "longitude",
        placeholder: "Longitude",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRulerHorizontal"],
        validation: {
          required: true
        },
        required: true,
        value: longitude
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
        color: "brokenblue",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPaperPlane"]
      }, "Submit")));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.agency && prevState.name === '') return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_11__["updateObject"])(prevState, _objectSpread({}, nextProps.agency));
      return prevState;
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submit: function submit(id, data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_10__["patchAgencies"](id, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Edit)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Agencies/Actions/View.js":
/*!****************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Agencies/Actions/View.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/utility */ "./resources/js/src/shared/utility.js");






var I = function I(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 6 : _ref$size,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: size,
    className: "pb-3"
  }, label ? label + ': ' : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-green text-500"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var agency = _ref2.agency;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "m-0 p-3 rounded bg-green-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-green text-700 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"],
    className: "mr-2",
    fixedWidth: true
  }), "Branch details"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Company"
  }, agency.company), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Country"
  }, agency.country), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "City"
  }, agency.city), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Name"
  }, agency.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Radius in meters"
  }, agency.radius), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Latitude"
  }, agency.latitude), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Longitude"
  }, agency.longitude), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Creation Date"
  }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_4__["convertDate"])(agency.created_at))));
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Agencies/index.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Agencies/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Backend/UI/List/List */ "./resources/js/src/components/Backend/UI/List/List.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_UI_WithTooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/UI/WithTooltip/WithTooltip */ "./resources/js/src/components/UI/WithTooltip/WithTooltip.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _components_Backend_UI_Counter_Counter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/Backend/UI/Counter/Counter */ "./resources/js/src/components/Backend/UI/Counter/Counter.js");
/* harmony import */ var _Actions_Edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Actions/Edit */ "./resources/js/src/containers/Backend/Admin/Agencies/Actions/Edit.js");
/* harmony import */ var _Actions_Add__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Actions/Add */ "./resources/js/src/containers/Backend/Admin/Agencies/Actions/Add.js");
/* harmony import */ var _Actions_View__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Actions/View */ "./resources/js/src/containers/Backend/Admin/Agencies/Actions/View.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






 // Components


















var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    _classCallCheck(this, Index);

    return _super.apply(this, arguments);
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props$backend$a = this.props.backend.agencies,
          loading = _this$props$backend$a.loading,
          error = _this$props$backend$a.error,
          message = _this$props$backend$a.message,
          agencies = _this$props$backend$a.agencies;
      var content;
      var errors;
      var feedback;
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
          err: error
        }));

        if (agencies) {
          feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_13__["default"], {
            message: message
          });
          var data = agencies.map(function (agency) {
            var colors = ['orange', 'pink', 'green'];
            var texts = ['Pending', 'Unachieved', 'Achieved'];
            var icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"]];
            var viewContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_View__WEBPACK_IMPORTED_MODULE_19__["default"], {
              agency: agency
            });
            var editContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_Edit__WEBPACK_IMPORTED_MODULE_17__["default"], {
              agency: agency
            });
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["updateObject"])(agency, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(agency.created_at),
              lat: agency.position.lat,
              lng: agency.position.lng,
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Branch details: ' + agency.name,
                content: viewContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Branch edit: ' + agency.name,
                content: editContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_14__["default"], {
                deleteAction: function deleteAction() {
                  return _this.props["delete"](agency.id);
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })))
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
            array: data,
            data: JSON.stringify(agencies),
            bordered: true,
            add: "Add Branch",
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_Add__WEBPACK_IMPORTED_MODULE_18__["default"], null),
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCodeBranch"],
            title: "Branches",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'City',
              key: 'city'
            }, {
              name: 'Country',
              key: 'country'
            }, {
              name: 'Company',
              key: 'company'
            }, {
              name: 'Representative',
              key: 'representative'
            }, {
              name: 'Name',
              key: 'name'
            }, {
              name: 'Latitude',
              key: 'lat'
            }, {
              name: 'Longitude',
              key: 'lng'
            }, {
              name: 'Radius',
              key: 'radius'
            }, {
              name: 'Creation Date',
              key: 'created_at'
            }, {
              name: 'Action',
              key: 'action',
              fixed: true
            }]
          })));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
        main: "Branches",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCodeBranch"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCodeBranch"]
      }, "Admin panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: true
      }, "Branches")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Agencies p-4 pb-0"
      }, errors, feedback, content));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["getAgencies"]());
    },
    "delete": function _delete(id) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["deleteAgencies"](id));
    },
    patch: function patch(id, data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["patchAgencies"](id, data));
    },
    reset: function reset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["agenciesReset"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Index)));

/***/ }),

/***/ 1:
/*!**********************************!*\
  !*** ./WritableStream (ignored) ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);