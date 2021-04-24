"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRefreshInterval = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _time_units = require("../time_units");

var _i18n = require("../../../i18n");

var _flex = require("../../../flex");

var _title = require("../../../title");

var _spacer = require("../../../spacer");

var _form = require("../../../form");

var _button = require("../../../button");

var _services = require("../../../../services");

var _accessibility = require("../../../accessibility");

var _common = require("../../../common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var refreshUnitsOptions = (0, _common.keysOf)(_time_units.timeUnits).filter(function (timeUnit) {
  return timeUnit === 'h' || timeUnit === 'm' || timeUnit === 's';
}).map(function (timeUnit) {
  return {
    value: timeUnit,
    text: _time_units.timeUnitsPlural[timeUnit]
  };
});
var MILLISECONDS_IN_SECOND = 1000;
var MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;
var MILLISECONDS_IN_HOUR = MILLISECONDS_IN_MINUTE * 60;

function fromMilliseconds(milliseconds) {
  var round = function round(value) {
    return parseFloat(value.toFixed(2));
  };

  if (milliseconds > MILLISECONDS_IN_HOUR) {
    return {
      units: 'h',
      value: round(milliseconds / MILLISECONDS_IN_HOUR)
    };
  }

  if (milliseconds > MILLISECONDS_IN_MINUTE) {
    return {
      units: 'm',
      value: round(milliseconds / MILLISECONDS_IN_MINUTE)
    };
  }

  return {
    units: 's',
    value: round(milliseconds / MILLISECONDS_IN_SECOND)
  };
}

function toMilliseconds(units, value) {
  switch (units) {
    case 'h':
      return Math.round(value * MILLISECONDS_IN_HOUR);

    case 'm':
      return Math.round(value * MILLISECONDS_IN_MINUTE);

    case 's':
    default:
      return Math.round(value * MILLISECONDS_IN_SECOND);
  }
}

var EuiRefreshInterval = /*#__PURE__*/function (_Component) {
  _inherits(EuiRefreshInterval, _Component);

  var _super = _createSuper(EuiRefreshInterval);

  function EuiRefreshInterval() {
    var _this;

    _classCallCheck(this, EuiRefreshInterval);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", fromMilliseconds(_this.props.refreshInterval));

    _defineProperty(_assertThisInitialized(_this), "generateId", (0, _services.htmlIdGenerator)());

    _defineProperty(_assertThisInitialized(_this), "onValueChange", function (event) {
      var sanitizedValue = parseFloat(event.target.value);

      _this.setState({
        value: isNaN(sanitizedValue) ? '' : sanitizedValue
      }, _this.applyRefreshInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "onUnitsChange", function (event) {
      _this.setState({
        units: event.target.value
      }, _this.applyRefreshInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "startRefresh", function () {
      var applyRefreshInterval = _this.props.applyRefreshInterval;
      var _this$state = _this.state,
          value = _this$state.value,
          units = _this$state.units;

      if (value !== '' && value > 0 && applyRefreshInterval !== undefined) {
        applyRefreshInterval({
          refreshInterval: toMilliseconds(units, value),
          isPaused: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (_ref) {
      var key = _ref.key;

      if (key === 'Enter') {
        _this.startRefresh();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "applyRefreshInterval", function () {
      var _this$props = _this.props,
          applyRefreshInterval = _this$props.applyRefreshInterval,
          isPaused = _this$props.isPaused;
      var _this$state2 = _this.state,
          units = _this$state2.units,
          value = _this$state2.value;

      if (value === '') {
        return;
      }

      if (!applyRefreshInterval) {
        return;
      }

      var refreshInterval = toMilliseconds(units, value);
      applyRefreshInterval({
        refreshInterval: refreshInterval,
        isPaused: refreshInterval <= 0 ? true : isPaused
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleRefresh", function () {
      var _this$props2 = _this.props,
          applyRefreshInterval = _this$props2.applyRefreshInterval,
          isPaused = _this$props2.isPaused;
      var _this$state3 = _this.state,
          units = _this$state3.units,
          value = _this$state3.value;

      if (!applyRefreshInterval || value === '') {
        return;
      }

      applyRefreshInterval({
        refreshInterval: toMilliseconds(units, value),
        isPaused: !isPaused
      });
    });

    return _this;
  }

  _createClass(EuiRefreshInterval, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          applyRefreshInterval = _this$props3.applyRefreshInterval,
          isPaused = _this$props3.isPaused;
      var _this$state4 = this.state,
          value = _this$state4.value,
          units = _this$state4.units;
      var legendId = this.generateId();
      var refreshSelectionId = this.generateId();

      if (!applyRefreshInterval) {
        return null;
      }

      var options = refreshUnitsOptions.find(function (_ref2) {
        var value = _ref2.value;
        return value === units;
      });
      var optionText = options ? options.text : '';
      return /*#__PURE__*/_react.default.createElement("fieldset", null, /*#__PURE__*/_react.default.createElement(_title.EuiTitle, {
        size: "xxxs"
      }, /*#__PURE__*/_react.default.createElement("legend", {
        id: legendId
      }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiRefreshInterval.legend",
        default: "Refresh every"
      }))), /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, {
        size: "s"
      }), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
        gutterSize: "s",
        responsive: false
      }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, null, /*#__PURE__*/_react.default.createElement(_form.EuiFieldNumber, {
        compressed: true,
        value: value,
        onChange: this.onValueChange,
        onKeyDown: this.handleKeyDown,
        "aria-label": "Refresh interval value",
        "aria-describedby": "".concat(refreshSelectionId, " ").concat(legendId),
        "data-test-subj": "superDatePickerRefreshIntervalInput"
      })), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, null, /*#__PURE__*/_react.default.createElement(_form.EuiSelect, {
        compressed: true,
        "aria-label": "Refresh interval units",
        "aria-describedby": "".concat(refreshSelectionId, " ").concat(legendId),
        value: units,
        options: refreshUnitsOptions,
        onChange: this.onUnitsChange,
        onKeyDown: this.handleKeyDown,
        "data-test-subj": "superDatePickerRefreshIntervalUnitsSelect"
      })), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, /*#__PURE__*/_react.default.createElement(_button.EuiButton, {
        className: "euiRefreshInterval__startButton",
        iconType: isPaused ? 'play' : 'stop',
        size: "s",
        onClick: this.toggleRefresh,
        disabled: value === '' || value <= 0,
        "data-test-subj": "superDatePickerToggleRefreshButton",
        "aria-describedby": refreshSelectionId
      }, isPaused ? /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiRefreshInterval.start",
        default: "Start"
      }) : /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiRefreshInterval.stop",
        default: "Stop"
      })))), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("p", {
        id: refreshSelectionId
      }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiRefreshInterval.fullDescription",
        default: "Refresh interval currently set to {optionValue} {optionText}.",
        values: {
          optionValue: value,
          optionText: optionText
        }
      }))));
    }
  }]);

  return EuiRefreshInterval;
}(_react.Component);

exports.EuiRefreshInterval = EuiRefreshInterval;
EuiRefreshInterval.propTypes = {
  applyRefreshInterval: _propTypes.default.func,
  isPaused: _propTypes.default.bool.isRequired,
  refreshInterval: _propTypes.default.number.isRequired
};