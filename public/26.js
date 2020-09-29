(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/src/components/Backend/Dashboard/Card/Card.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/Backend/Dashboard/Card/Card.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var card = function card(_ref) {
  var title = _ref.title,
      _ref$titleColor = _ref.titleColor,
      titleColor = _ref$titleColor === void 0 ? 'white' : _ref$titleColor,
      details = _ref.details,
      children = _ref.children,
      link = _ref.link,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light,
      icon = _ref.icon,
      color = _ref.color,
      _ref$circleBorder = _ref.circleBorder,
      circleBorder = _ref$circleBorder === void 0 ? 'orange' : _ref$circleBorder,
      _ref$circleColor = _ref.circleColor,
      circleColor = _ref$circleColor === void 0 ? 'white' : _ref$circleColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    md: 12,
    lg: 6,
    xl: 3,
    className: "pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "h-100 rounded overflow-hidden position-relative bg-".concat(color)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "py-3 border-bottom border-show position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-large text-700 text-".concat(titleColor)
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle position-absolute bg-".concat(color, " border border-2 border-").concat(circleBorder),
    style: {
      width: 20,
      height: 20,
      bottom: 0,
      left: 16,
      transform: 'translateY(50%)',
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle w-100 h-100 bg-".concat(circleColor)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "py-3 pl-5 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      zIndex: 0,
      top: 16,
      right: 16
    },
    className: "position-absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    style: {
      zIndex: 0
    },
    className: "text-" + (light ? "black" : "white") + "-20",
    size: "4x"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      zIndex: 10
    },
    className: "text-white text-montserrat text-700"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      zIndex: 10
    },
    className: "text-white text-300"
  }, details)))));
};

/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Table/Table.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Table/Table.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var fields = _ref.fields,
      array = _ref.array,
      limit = _ref.limit,
      bordered = _ref.bordered,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      icon = _ref.icon,
      dark = _ref.dark,
      borderless = _ref.borderless,
      _ref$innerClassName = _ref.innerClassName,
      innerClassName = _ref$innerClassName === void 0 ? '' : _ref$innerClassName,
      _ref$outerClassName = _ref.outerClassName,
      outerClassName = _ref$outerClassName === void 0 ? '' : _ref$outerClassName,
      p0 = _ref.p0,
      select = _ref.select,
      children = _ref.children,
      selectHandler = _ref.selectHandler,
      style = _ref.style,
      searchable = _ref.searchable,
      draggable = _ref.draggable,
      closable = _ref.closable;
  var titles = fields.map(function (_ref2) {
    var name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "align-middle text-nowrap",
      key: name
    }, name);
  });
  titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center align-middle",
    key: "#"
  }, "SL"));
  if (select) titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "align-middle text-center",
    key: "select_all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    onClick: selectHandler,
    className: "select_all"
  })));
  var content = array.map(function (item, index) {
    if (limit && index >= limit) return null;
    var inside = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'primary' + index
    }, index + 1)];
    if (select) inside.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'secondary' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      value: item._id
    })));
    fields.forEach(function (_ref3) {
      var key = _ref3.key,
          minWidth = _ref3.minWidth;
      inside.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "align-middle text-nowrap",
        style: {
          minWidth: minWidth
        },
        key: key
      }, item[key]));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "align-middle",
      key: index + 1
    }, inside);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    className: outerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column h-100 " + (dark ? "text-secondary " : " ") + className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 border-bottom border-soft text-700 text-brokenblue d-flex position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-inline-flex align-items-center"
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    fixedWidth: true,
    className: "mr-2 text-orange",
    icon: icon,
    size: "lg"
  }) : null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute",
    style: {
      top: '50%',
      right: 16,
      transform: 'translateY(-50%)'
    }
  }, searchable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "search",
    placeholder: "Search here...",
    className: "small bg-soft rounded-0 border-0 text-secondary mr-3"
  }) : null, draggable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowsAlt"],
    size: "lg",
    className: "mr-3"
  }) : null, closable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
    size: "2x"
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-fill d-flex flex-column " + (!p0 ? "p-3" : "p-0")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dark: dark,
    bordered: bordered,
    borderless: borderless,
    className: innerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "bg-soft text-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, titles)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: "bg-soft-50 text-secondary"
  }, content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3"
  }, children))));
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Dashboard/Dashboard.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Dashboard/Dashboard.js ***!
  \**************************************************************************/
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
/* harmony import */ var react_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-calendar */ "./node_modules/react-calendar/dist/esm/index.js");
/* harmony import */ var _WorkTimeTracker_WorkTimeTracker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WorkTimeTracker/WorkTimeTracker */ "./resources/js/src/containers/Backend/Admin/Dashboard/WorkTimeTracker/WorkTimeTracker.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/Backend/Dashboard/Card/Card */ "./resources/js/src/components/Backend/Dashboard/Card/Card.js");
/* harmony import */ var _components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/Backend/UI/Table/Table */ "./resources/js/src/components/Backend/UI/Table/Table.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_Backend_UI_Counter_Counter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../components/Backend/UI/Counter/Counter */ "./resources/js/src/components/Backend/UI/Counter/Counter.js");
/* harmony import */ var _components_UI_WithTooltip_WithTooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../components/UI/WithTooltip/WithTooltip */ "./resources/js/src/components/UI/WithTooltip/WithTooltip.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-calendar/dist/Calendar.css */ "./node_modules/react-calendar/dist/Calendar.css");
/* harmony import */ var react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_calendar_dist_Calendar_css__WEBPACK_IMPORTED_MODULE_22__);
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







 // Components


















var twoDigits = function twoDigits(number) {
  return number < 10 ? '0' + number : number;
};

var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _this;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      blocksData: null,
      tasks: null,
      employees: null,
      events: null,
      chatBox: null,
      messages: null,
      workTimeTracker: null,
      interval: null
    });

    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var _this$props$backend = this.props.backend,
          dashboard = _this$props$backend.dashboard,
          attendanceReport = _this$props$backend.attendanceReport,
          requests = _this$props$backend.requests;

      if (!attendanceReport.loading && prevProps.backend.attendanceReport.loading) {
        var blocksData = this.state.blocksData;
        blocksData.workedTime = attendanceReport.workedTime;
        blocksData.status = attendanceReport.status;
        this.setState({
          blocksData: blocksData
        }, function () {
          var blocksData = _this2.state.blocksData;

          if (blocksData.status) {
            var interval = setInterval(function () {
              blocksData.workedTime++;

              _this2.setState({
                blocksData: blocksData
              });
            }, 1000);

            _this2.setState({
              interval: interval
            });
          } else {
            var _interval = _this2.state.interval;

            if (_interval) {
              clearInterval(_interval);

              _this2.setState({
                interval: null
              });
            }
          }
        });
      }

      if (this.state.blocksData && !prevState.blocksData) {
        if (this.state.blocksData.status) {
          var interval = setInterval(function () {
            var blocksData = _this2.state.blocksData;
            blocksData.workedTime++;

            _this2.setState({
              blocksData: blocksData
            });
          }, 1000);
          this.setState({
            interval: interval
          });
        }
      }

      if (dashboard.blocksData && !prevProps.backend.dashboard.blocksData) {
        var channel = Echo.channel('public');
        channel.listen('UserDashboard', function (_ref) {
          var blocksData = _ref.blocksData,
              tasks = _ref.tasks,
              attendanceReport = _ref.attendanceReport,
              calendar = _ref.calendar,
              chatBox = _ref.chatBox,
              messages = _ref.messages,
              workTimeTracker = _ref.workTimeTracker;
          if (_this2.props.auth.token) _this2.setState({
            blocksData: blocksData,
            tasks: tasks,
            attendanceReport: attendanceReport,
            calendar: calendar,
            chatBox: chatBox,
            messages: messages,
            workTimeTracker: workTimeTracker
          });
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.state.interval);
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          blocksData = _this$state.blocksData,
          tasks = _this$state.tasks,
          employees = _this$state.employees,
          events = _this$state.events,
          chatBox = _this$state.chatBox,
          messages = _this$state.messages,
          workTimeTracker = _this$state.workTimeTracker;
      var _this$props$backend$d = this.props.backend.dashboard,
          loading = _this$props$backend$d.loading,
          error = _this$props$backend$d.error;
      var content = null;
      var errors = null;
      var colors = ['orange', 'green'];
      var texts = ['Pending', 'Completed'];
      var icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"]];
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_14__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_13__["default"], {
          err: error
        }));

        if (blocksData) {
          var totalEmployees = blocksData.totalEmployees,
              totalEvents = blocksData.totalEvents,
              unreadMessages = blocksData.unreadMessages,
              totalTasks = blocksData.totalTasks;
          var data = [{
            title: 'Total Employees',
            children: totalEmployees,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faClock"],
            link: '/admin/employees/',
            color: 'paleblue',
            details: "Employee".concat(totalEmployees > 1 ? 's' : ''),
            titleColor: 'white',
            circleColor: 'white',
            circleBorder: 'orange'
          }, {
            title: 'Total Events',
            children: totalEvents,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLandmark"],
            link: '/admin/calendar/',
            color: 'nightblue',
            details: "Event".concat(totalEvents > 1 ? 's' : ''),
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }, {
            title: 'Unread Messages',
            children: unreadMessages,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            link: '/admin/messages',
            color: 'pink',
            details: "Unread Message".concat(unreadMessages > 1 ? 's' : ''),
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }, {
            title: 'Total Tasks',
            children: totalTasks,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStopwatch"],
            link: '/admin/tasks',
            color: 'green',
            details: "Task".concat(totalTasks > 1 ? 's' : ''),
            titleColor: 'white',
            circleColor: 'white',
            circleBorder: 'white'
          }];
          var cards = data.map(function (_ref2, index) {
            var title = _ref2.title,
                titleColor = _ref2.titleColor,
                icon = _ref2.icon,
                link = _ref2.link,
                color = _ref2.color,
                children = _ref2.children,
                details = _ref2.details,
                circleBorder = _ref2.circleBorder,
                circleColor = _ref2.circleColor,
                light = _ref2.light;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
              color: color,
              key: index,
              title: title,
              titleColor: titleColor,
              details: details,
              circleBorder: circleBorder,
              circleColor: circleColor,
              icon: icon,
              link: link,
              light: light
            }, children);
          });
          var tasksData = tasks.map(function (task) {
            // const viewContent = <RequestView task={task} country={country} />;
            // const editContent = <Edit task={updateObject(task, { page_status: 'dashboard' })} />;
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["updateObject"])(task, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(task.created_at),
              date_due: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(task.date_due),
              status: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: colors[task.status],
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: icons[task.status],
                className: task.status === 0 ? "fa-spin" : "",
                fixedWidth: true
              }), " ", texts[task.status]),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Task details',
                content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Task edit',
                content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                deleteAction: function deleteAction() {
                  return alert('Deleted');
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })))
            });
          });
          var employeesData = employees.map(function (employee) {
            // const viewContent = <RequestView employee={employee} country={country} />;
            // const editContent = <Edit employee={updateObject(employee, { page_status: 'dashboard' })} />;
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["updateObject"])(employee, {
              name: employee.first_name + ' ' + employee.last_name,
              last_login: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(employee.last_login),
              hired_on: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(employee.hired_on),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Employee details',
                content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Employee edit',
                content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                deleteAction: function deleteAction() {
                  return alert('Deleted');
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })))
            });
          });
          var eventsData = events.map(function (event) {
            var colors = ['orange', 'pink', 'green'];
            var texts = ['Pending', 'Unachieved', 'Achieved'];
            var icons = [_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimesCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheckCircle"]];
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["updateObject"])(event, {
              start_date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(event.start_time),
              start_time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: "text-700"
              }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertTime"])(event.start_time)),
              finish_time: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
                className: "text-700"
              }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertTime"])(event.finish_time)),
              finish_date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(event.finish_time),
              status: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: colors[event.status],
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: icons[event.status],
                className: [0].includes(event.status) ? "fa-spin" : "",
                fixedWidth: true
              }), " ", texts[event.status]),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_16__["default"], {
                deleteAction: function deleteAction() {
                  return alert(event.id);
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })))
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, cards), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
            array: tasksData,
            draggable: true,
            closable: true,
            title: "Tasks Board",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTasks"],
            bordered: true,
            limit: 5,
            lg: 6,
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Creation Date',
              key: 'created_at'
            }, {
              name: 'Author',
              key: 'author'
            }, {
              name: 'Date Due',
              key: 'date_due'
            }, {
              name: 'Comment',
              key: 'comment'
            }, {
              name: 'Status',
              key: 'status',
              minWidth: 130
            }, {
              name: 'Action',
              key: 'action'
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/admin/tasks",
            className: "text-secondary"
          }, 'View full task list | >')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            lg: 6,
            className: "pt-3 pt-lg-0"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "bg-brokenblue shadow-sm text-soft h-100 d-flex flex-column"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "p-3 border-bottom border-border text-700 position-relative d-flex"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
            className: "d-inline-flex align-items-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            size: "lg",
            className: "text-orange mr-2",
            fixedWidth: true,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTasks"]
          }), "Work Time Tracker"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-soft position-absolute",
            style: {
              top: '50%',
              right: 16,
              transform: 'translateY(-50%)'
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowsAlt"],
            size: "lg",
            className: "mr-3"
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"],
            size: "2x"
          }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "p-3 flex-fill d-flex flex-column justify-content-center"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            xs: 12,
            lg: 11,
            style: {
              minHeight: 150
            }
          })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
            array: employeesData,
            draggable: true,
            closable: true,
            title: "Employees Board",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faList"],
            bordered: true,
            limit: 5,
            lg: 6,
            outerClassName: "pt-3",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Name',
              key: 'name'
            }, {
              name: 'Job',
              key: 'job'
            }, {
              name: 'E-Mail Address',
              key: 'email'
            }, {
              name: 'Hired on',
              key: 'hired_on'
            }, {
              name: 'Last Login',
              key: 'last_login'
            }, {
              name: 'Action',
              key: 'action'
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/admin/employees",
            className: "text-secondary"
          }, 'View full employee list | >')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_12__["default"], {
            array: eventsData,
            draggable: true,
            closable: true,
            title: "Last Events",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            bordered: true,
            limit: 5,
            lg: 6,
            outerClassName: "pt-3",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Event Title',
              key: 'title'
            }, {
              name: 'Start Date',
              key: 'start_date'
            }, {
              name: 'Start Time',
              key: 'start_time'
            }, {
              name: 'End Date',
              key: 'finish_date'
            }, {
              name: 'Finish Time',
              key: 'finish_time'
            }, {
              name: 'Event Type',
              key: 'event_type'
            }, {
              name: 'Event Description',
              key: 'description'
            }, {
              name: 'Status',
              key: 'status',
              minWidth: 140
            }, {
              name: 'Action',
              key: 'action',
              fixed: true
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/user/events",
            className: "text-secondary"
          }, 'View full event list | >'))));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_8__["default"], {
        main: "Dashboard",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"]
      }, "Admin panel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
        user: true
      }, "Dashboard")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, content));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
        var _nextProps$backend$da = nextProps.backend.dashboard,
            blocksData = _nextProps$backend$da.blocksData,
            tasks = _nextProps$backend$da.tasks,
            employees = _nextProps$backend$da.employees,
            events = _nextProps$backend$da.events,
            chatBox = _nextProps$backend$da.chatBox,
            messages = _nextProps$backend$da.messages,
            workTimeTracker = _nextProps$backend$da.workTimeTracker;
        return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["updateObject"])(prevState, {
          blocksData: blocksData,
          tasks: tasks,
          employees: employees,
          events: events,
          chatBox: chatBox,
          messages: messages,
          workTimeTracker: workTimeTracker
        });
      } // if (nextProps.backend.requests.requests && !prevState.requestsRequests) return updateObject(prevState, { requestsRequests: nextProps.backend.requests.requests });


      return prevState;
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    get: function get() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["getAdminDashboard"]());
    },
    reset: function reset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["dashboardReset"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/Admin/Dashboard/WorkTimeTracker/WorkTimeTracker.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/Admin/Dashboard/WorkTimeTracker/WorkTimeTracker.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FinanceTracker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
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




var FinanceTracker = /*#__PURE__*/function (_PureComponent) {
  _inherits(FinanceTracker, _PureComponent);

  var _super = _createSuper(FinanceTracker);

  function FinanceTracker() {
    _classCallCheck(this, FinanceTracker);

    return _super.apply(this, arguments);
  }

  _createClass(FinanceTracker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
        data: this.props.data
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "pending",
        fill: "#e79300"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "cancelled",
        fill: "#ff0b33"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "solved",
        fill: "#049d27"
      })));
    }
  }]);

  return FinanceTracker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(FinanceTracker, "jsfiddleUrl", 'https://jsfiddle.net/alidingling/30763kr7/');



/***/ })

}]);