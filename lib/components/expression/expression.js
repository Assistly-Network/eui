"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiExpression = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _icon = require("../icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var colorToClassNameMap = {
  subdued: 'euiExpression--subdued',
  primary: 'euiExpression--primary',
  secondary: 'euiExpression--secondary',
  accent: 'euiExpression--accent',
  warning: 'euiExpression--warning',
  danger: 'euiExpression--danger'
};
var textWrapToClassNameMap = {
  'break-word': null,
  truncate: 'euiExpression--truncate'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;
var displayToClassNameMap = {
  inline: null,
  columns: 'euiExpression--columns'
};

var EuiExpression = function EuiExpression(_ref) {
  var className = _ref.className,
      description = _ref.description,
      descriptionProps = _ref.descriptionProps,
      value = _ref.value,
      valueProps = _ref.valueProps,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$uppercase = _ref.uppercase,
      uppercase = _ref$uppercase === void 0 ? true : _ref$uppercase,
      _ref$isActive = _ref.isActive,
      isActive = _ref$isActive === void 0 ? false : _ref$isActive,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'inline' : _ref$display,
      _ref$descriptionWidth = _ref.descriptionWidth,
      descriptionWidth = _ref$descriptionWidth === void 0 ? '20%' : _ref$descriptionWidth,
      onClick = _ref.onClick,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$textWrap = _ref.textWrap,
      textWrap = _ref$textWrap === void 0 ? 'break-word' : _ref$textWrap,
      rest = _objectWithoutProperties(_ref, ["className", "description", "descriptionProps", "value", "valueProps", "color", "uppercase", "isActive", "display", "descriptionWidth", "onClick", "isInvalid", "textWrap"]);

  var calculatedColor = isInvalid ? 'danger' : color;
  var classes = (0, _classnames.default)('euiExpression', className, {
    'euiExpression-isActive': isActive,
    'euiExpression-isClickable': onClick,
    'euiExpression-isUppercase': uppercase
  }, displayToClassNameMap[display], colorToClassNameMap[calculatedColor], textWrapToClassNameMap[textWrap]);
  var Component = onClick ? 'button' : 'span';
  var descriptionStyle = descriptionProps && descriptionProps.style;
  var customWidth = display === 'columns' && descriptionWidth ? _objectSpread({
    flexBasis: descriptionWidth
  }, descriptionStyle) : undefined;
  var invalidIcon = isInvalid ? /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
    className: "euiExpression__icon",
    type: "alert",
    color: calculatedColor
  }) : undefined;
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: classes,
    onClick: onClick
  }, rest), /*#__PURE__*/_react.default.createElement("span", _extends({
    className: "euiExpression__description",
    style: customWidth
  }, descriptionProps), description), ' ', value && /*#__PURE__*/_react.default.createElement("span", _extends({
    className: "euiExpression__value"
  }, valueProps), value), invalidIcon);
};

exports.EuiExpression = EuiExpression;
EuiExpression.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * First part of the expression
     */

  /**
     * First part of the expression
     */
  description: _propTypes.default.node.isRequired,
  descriptionProps: _propTypes.default.any,

  /**
     * Second part of the expression
     */

  /**
     * Second part of the expression
     */
  value: _propTypes.default.node,
  valueProps: _propTypes.default.any,

  /**
     * Color of the `description`
     */

  /**
     * Color of the `description`
     */
  color: _propTypes.default.oneOf(["subdued", "primary", "secondary", "accent", "warning", "danger"]),

  /**
     * Should the `description` auto-uppercase?
     */

  /**
     * Should the `description` auto-uppercase?
     */
  uppercase: _propTypes.default.bool,

  /**
     * Adds an solid border at the bottom
     */

  /**
     * Adds an solid border at the bottom
     */
  isActive: _propTypes.default.bool,

  /**
     * Turns the component into a button and adds an editable style border at the bottom
     */

  /**
     * Turns the component into a button and adds an editable style border at the bottom
     */
  onClick: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.func.isRequired]), _propTypes.default.func]),

  /**
     * Sets the display style for the expression. Defaults to `inline`
     */

  /**
     * Sets the display style for the expression. Defaults to `inline`
     */
  display: _propTypes.default.oneOf(["inline", "columns"]),

  /**
     * Forces color to display as `danger` and shows an `alert` icon
     */

  /**
     * Forces color to display as `danger` and shows an `alert` icon
     */
  isInvalid: _propTypes.default.bool,

  /**
     * Sets a custom width for the description when using the columns layout.
     * Set to a number for a custom width in `px`.
     * Set to a string for a custom width in custom measurement.
     * Defaults to `20%`
     */

  /**
     * Sets a custom width for the description when using the columns layout.
     * Set to a number for a custom width in `px`.
     * Set to a string for a custom width in custom measurement.
     * Defaults to `20%`
     */
  descriptionWidth: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),

  /**
     * Sets how to handle the wrapping of long text.
     */

  /**
     * Sets how to handle the wrapping of long text.
     */
  textWrap: _propTypes.default.oneOf(["break-word", "truncate"])
};