"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiAbsoluteTab = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _date_picker = require("../../date_picker");

var _form = require("../../../form");

var _to_case = require("../../../../services/string/to_case");

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

var EuiAbsoluteTab = /*#__PURE__*/function (_Component) {
  _inherits(EuiAbsoluteTab, _Component);

  var _super = _createSuper(EuiAbsoluteTab);

  function EuiAbsoluteTab(props) {
    var _this;

    _classCallCheck(this, EuiAbsoluteTab);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "state", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (date, event) {
      var onChange = _this.props.onChange;

      if (date === null) {
        return;
      }

      onChange(date.toISOString(), event);
      var valueAsMoment = (0, _moment.default)(date);

      _this.setState({
        valueAsMoment: valueAsMoment,
        textInputValue: valueAsMoment.format(_this.props.dateFormat),
        isTextInvalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextChange", function (event) {
      var onChange = _this.props.onChange;
      var valueAsMoment = (0, _moment.default)(event.target.value, _this.props.dateFormat, true);
      var dateIsValid = valueAsMoment.isValid();

      if (dateIsValid) {
        onChange(valueAsMoment.toISOString(), event);
      }

      _this.setState({
        textInputValue: event.target.value,
        isTextInvalid: !dateIsValid,
        valueAsMoment: dateIsValid ? valueAsMoment : null
      });
    });

    var sentenceCasedPosition = (0, _to_case.toSentenceCase)(props.position);

    var parsedValue = _datemath.default.parse(props.value, {
      roundUp: props.roundUp
    });

    var _valueAsMoment = parsedValue && parsedValue.isValid() ? parsedValue : (0, _moment.default)();

    var textInputValue = _valueAsMoment.locale(_this.props.locale || 'en').format(_this.props.dateFormat);

    _this.state = {
      isTextInvalid: false,
      sentenceCasedPosition: sentenceCasedPosition,
      textInputValue: textInputValue,
      valueAsMoment: _valueAsMoment
    };
    return _this;
  }

  _createClass(EuiAbsoluteTab, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          dateFormat = _this$props.dateFormat,
          timeFormat = _this$props.timeFormat,
          locale = _this$props.locale,
          utcOffset = _this$props.utcOffset;
      var _this$state = this.state,
          valueAsMoment = _this$state.valueAsMoment,
          isTextInvalid = _this$state.isTextInvalid,
          textInputValue = _this$state.textInputValue,
          sentenceCasedPosition = _this$state.sentenceCasedPosition;
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_date_picker.EuiDatePicker, {
        inline: true,
        showTimeSelect: true,
        shadow: false,
        selected: valueAsMoment,
        onChange: this.handleChange,
        dateFormat: dateFormat,
        timeFormat: timeFormat,
        locale: locale,
        utcOffset: utcOffset
      }), /*#__PURE__*/_react.default.createElement(_form.EuiFormRow, {
        className: "euiSuperDatePicker__absoluteDateFormRow",
        isInvalid: isTextInvalid,
        error: isTextInvalid ? "Expected format ".concat(dateFormat) : undefined
      }, /*#__PURE__*/_react.default.createElement(_form.EuiFieldText, {
        compressed: true,
        isInvalid: isTextInvalid,
        value: textInputValue,
        onChange: this.handleTextChange,
        "data-test-subj": 'superDatePickerAbsoluteDateInput',
        prepend: /*#__PURE__*/_react.default.createElement(_form.EuiFormLabel, null, sentenceCasedPosition, " date")
      })));
    }
  }]);

  return EuiAbsoluteTab;
}(_react.Component);

exports.EuiAbsoluteTab = EuiAbsoluteTab;
EuiAbsoluteTab.propTypes = {
  dateFormat: _propTypes.default.string.isRequired,
  timeFormat: _propTypes.default.string.isRequired,
  locale: _propTypes.default.any,
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  roundUp: _propTypes.default.bool.isRequired,
  position: _propTypes.default.oneOf(["start", "end"]).isRequired,
  utcOffset: _propTypes.default.number
};