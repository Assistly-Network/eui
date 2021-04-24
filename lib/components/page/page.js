"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPage = exports.DIRECTIONS = exports.SIZES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _restrict_width = require("./_restrict_width");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiPage--paddingSmall',
  m: 'euiPage--paddingMedium',
  l: 'euiPage--paddingLarge'
};
var directionToClassNameMap = {
  row: null,
  column: 'euiPage--column'
};
var SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.SIZES = SIZES;
var DIRECTIONS = (0, _common.keysOf)(directionToClassNameMap);
exports.DIRECTIONS = DIRECTIONS;

var EuiPage = function EuiPage(_ref) {
  var children = _ref.children,
      _ref$restrictWidth = _ref.restrictWidth,
      restrictWidth = _ref$restrictWidth === void 0 ? false : _ref$restrictWidth,
      style = _ref.style,
      className = _ref.className,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'm' : _ref$paddingSize,
      _ref$grow = _ref.grow,
      grow = _ref$grow === void 0 ? true : _ref$grow,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      rest = _objectWithoutProperties(_ref, ["children", "restrictWidth", "style", "className", "paddingSize", "grow", "direction"]);

  var _setPropsForRestricte = (0, _restrict_width.setPropsForRestrictedPageWidth)(restrictWidth, style),
      widthClassName = _setPropsForRestricte.widthClassName,
      newStyle = _setPropsForRestricte.newStyle;

  var classes = (0, _classnames.default)('euiPage', paddingSizeToClassNameMap[paddingSize], directionToClassNameMap[direction], _defineProperty({
    'euiPage--grow': grow
  }, "euiPage--".concat(widthClassName), widthClassName), className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes,
    style: newStyle || style
  }, rest), children);
};

exports.EuiPage = EuiPage;
EuiPage.propTypes = {
  /**
     * Adjust the padding.
     * When using this setting it's best to be consistent throughout all similar usages
     */
  paddingSize: _propTypes.default.any,

  /**
     * Adds `flex-grow: 1` to the whole page for stretching to fit vertically.
     * Must be wrapped inside a flexbox, preferrably with `min-height: 100vh`
     */
  grow: _propTypes.default.bool,

  /**
     * Changes the `flex-direction` property.
     * Flip to `column` when not including a sidebar.
     */
  direction: _propTypes.default.oneOf(["row", "column"]),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Sets the max-width of the page,
     * set to `true` to use the default size of `1000px (1200 for Amsterdam)`,
     * set to `false` to not restrict the width,
     * set to a number for a custom width in px,
     * set to a string for a custom width in custom measurement.
     */
  restrictWidth: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.number.isRequired, _propTypes.default.string.isRequired])
};