"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _field_number = require("../field_number");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiRangeInput = function EuiRangeInput(_ref) {
  var min = _ref.min,
      max = _ref.max,
      step = _ref.step,
      value = _ref.value,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      onChange = _ref.onChange,
      name = _ref.name,
      _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'max' : _ref$side,
      digitTolerance = _ref.digitTolerance,
      fullWidth = _ref.fullWidth,
      _ref$autoSize = _ref.autoSize,
      autoSize = _ref$autoSize === void 0 ? true : _ref$autoSize,
      rest = _objectWithoutProperties(_ref, ["min", "max", "step", "value", "disabled", "compressed", "onChange", "name", "side", "digitTolerance", "fullWidth", "autoSize"]);

  // Chrome will properly size the input based on the max value, but FF & IE do not.
  // Calculate the width of the input based on highest number of characters.
  // Add 2 to accommodate for input stepper
  var widthStyle = autoSize ? {
    width: "".concat(digitTolerance / 1.25 + 2, "em")
  } : undefined;
  return /*#__PURE__*/_react.default.createElement(_field_number.EuiFieldNumber, _extends({
    name: name,
    className: "euiRangeInput euiRangeInput--".concat(side),
    min: Number(min),
    max: Number(max),
    step: step,
    value: value === '' ? '' : Number(value),
    disabled: disabled,
    compressed: compressed,
    onChange: onChange,
    style: widthStyle,
    fullWidth: fullWidth
  }, rest));
};

exports.EuiRangeInput = EuiRangeInput;
EuiRangeInput.propTypes = {
  autoSize: _propTypes.default.bool,
  digitTolerance: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  min: _propTypes.default.number.isRequired,
  side: _propTypes.default.oneOf(["min", "max"]),
  value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]).isRequired
};