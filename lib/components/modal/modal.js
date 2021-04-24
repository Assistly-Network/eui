"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiModal = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _button = require("../button");

var _focus_trap = require("../focus_trap");

var _overlay_mask = require("../overlay_mask");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiModal = function EuiModal(_ref) {
  var className = _ref.className,
      children = _ref.children,
      initialFocus = _ref.initialFocus,
      onClose = _ref.onClose,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? true : _ref$maxWidth,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["className", "children", "initialFocus", "onClose", "maxWidth", "style"]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === _services.keys.ESCAPE) {
      event.preventDefault();
      event.stopPropagation();
      onClose(event);
    }
  };

  var newStyle;
  var widthClassName;

  if (maxWidth === true) {
    widthClassName = 'euiModal--maxWidth-default';
  } else if (maxWidth !== false) {
    var value = typeof maxWidth === 'number' ? "".concat(maxWidth, "px") : maxWidth;
    newStyle = _objectSpread(_objectSpread({}, style), {}, {
      maxWidth: value
    });
  }

  var classes = (0, _classnames.default)('euiModal', widthClassName, className);
  return /*#__PURE__*/_react.default.createElement(_overlay_mask.EuiOverlayMask, null, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, {
    initialFocus: initialFocus
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes,
    onKeyDown: onKeyDown,
    tabIndex: 0,
    style: newStyle || style
  }, rest), /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiModal.closeModal",
    default: "Closes this modal window"
  }, function (closeModal) {
    return /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, {
      iconType: "cross",
      onClick: onClose,
      className: "euiModal__closeIcon",
      color: "text",
      "aria-label": closeModal
    });
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiModal__flex"
  }, children))));
};

exports.EuiModal = EuiModal;
EuiModal.propTypes = {
  className: _propTypes.default.string,

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.node.isRequired,
  onClose: _propTypes.default.func.isRequired,

  /**
     * Sets the max-width of the modal.
     * Set to `true` to use the default (`euiBreakpoints 'm'`),
     * set to `false` to not restrict the width,
     * set to a number for a custom width in px,
     * set to a string for a custom width in custom measurement.
     */
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),

  /**
     * Specifies what element should initially have focus.
     * Can be a DOM node, or a selector string (which will be passed to document.querySelector() to find the DOM node), or a function that returns a DOM node.
     */
  initialFocus: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired, _propTypes.default.string.isRequired])
};