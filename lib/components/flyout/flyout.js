"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlyout = exports.PADDING_SIZES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _common = require("../common");

var _focus_trap = require("../focus_trap");

var _overlay_mask = require("../overlay_mask");

var _button = require("../button");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var sizeToClassNameMap = {
  s: 'euiFlyout--small',
  m: 'euiFlyout--medium',
  l: 'euiFlyout--large'
};
var paddingSizeToClassNameMap = {
  none: 'euiFlyout--paddingNone',
  s: 'euiFlyout--paddingSmall',
  m: 'euiFlyout--paddingMedium',
  l: 'euiFlyout--paddingLarge'
};
var PADDING_SIZES = (0, _common.keysOf)(paddingSizeToClassNameMap);
exports.PADDING_SIZES = PADDING_SIZES;

var EuiFlyout = function EuiFlyout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$hideCloseButton = _ref.hideCloseButton,
      hideCloseButton = _ref$hideCloseButton === void 0 ? false : _ref$hideCloseButton,
      onClose = _ref.onClose,
      _ref$ownFocus = _ref.ownFocus,
      ownFocus = _ref$ownFocus === void 0 ? false : _ref$ownFocus,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'm' : _ref$size,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'l' : _ref$paddingSize,
      closeButtonAriaLabel = _ref.closeButtonAriaLabel,
      _ref$maxWidth = _ref.maxWidth,
      maxWidth = _ref$maxWidth === void 0 ? false : _ref$maxWidth,
      style = _ref.style,
      maskProps = _ref.maskProps,
      rest = _objectWithoutProperties(_ref, ["className", "children", "hideCloseButton", "onClose", "ownFocus", "size", "paddingSize", "closeButtonAriaLabel", "maxWidth", "style", "maskProps"]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === _services.keys.ESCAPE) {
      event.preventDefault();
      onClose();
    }
  };

  (0, _react.useEffect)(function () {
    document.body.classList.add('euiBody--hasFlyout');
    return function () {
      document.body.classList.remove('euiBody--hasFlyout');
    };
  });
  var newStyle;
  var widthClassName;

  if (maxWidth === true) {
    widthClassName = 'euiFlyout--maxWidth-default';
  } else if (maxWidth !== false) {
    var value = typeof maxWidth === 'number' ? "".concat(maxWidth, "px") : maxWidth;
    newStyle = _objectSpread(_objectSpread({}, style), {}, {
      maxWidth: value
    });
  }

  var classes = (0, _classnames.default)('euiFlyout', sizeToClassNameMap[size], paddingSizeToClassNameMap[paddingSize], widthClassName, className);
  var closeButton;

  if (onClose && !hideCloseButton) {
    closeButton = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiFlyout.closeAriaLabel",
      default: "Close this dialog"
    }, function (closeAriaLabel) {
      return /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, {
        className: "euiFlyout__closeButton",
        iconType: "cross",
        color: "text",
        "aria-label": closeButtonAriaLabel || closeAriaLabel,
        onClick: function onClick() {
          onClose();
        },
        "data-test-subj": "euiFlyoutCloseButton"
      });
    });
  }

  var flyoutContent = /*#__PURE__*/_react.default.createElement("div", _extends({
    role: "dialog",
    className: classes,
    tabIndex: 0,
    style: newStyle || style
  }, rest), closeButton, children); // If ownFocus is set, show an overlay behind the flyout and allow the user
  // to click it to close it.


  var optionalOverlay;

  if (ownFocus) {
    optionalOverlay = /*#__PURE__*/_react.default.createElement(_overlay_mask.EuiOverlayMask, _extends({
      onClick: onClose,
      headerZindexLocation: "below"
    }, maskProps));
  }

  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_services.EuiWindowEvent, {
    event: "keydown",
    handler: onKeyDown
  }), optionalOverlay, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, {
    clickOutsideDisables: !ownFocus
  }, flyoutContent));
};

exports.EuiFlyout = EuiFlyout;
EuiFlyout.propTypes = {
  onClose: _propTypes.default.func.isRequired,

  /**
     * Defines the width of the panel
     */
  size: _propTypes.default.oneOf(["s", "m", "l"]),

  /**
     * Customize the padding around the content of the flyout header, body and footer
     */
  paddingSize: _propTypes.default.any,

  /**
     * Hides the default close button. You must provide another close button somewhere within the flyout.
     */
  hideCloseButton: _propTypes.default.bool,

  /**
     * Adds an EuiOverlayMask when set to `true`
     */
  ownFocus: _propTypes.default.bool,

  /**
     * Specify an aria-label for the close button of the flyout.
     * Default is `'Close this dialog'`.
     */
  closeButtonAriaLabel: _propTypes.default.string,

  /**
     * Sets the max-width of the panel,
     * set to `true` to use the default size,
     * set to `false` to not restrict the width,
     * set to a number for a custom width in px,
     * set to a string for a custom width in custom measurement.
     */
  maxWidth: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),
  style: _propTypes.default.any,

  /**
     * Adjustments to the EuiOverlayMask that is added when `ownFocus = true`
     */
  maskProps: _propTypes.default.shape({
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,

    /**
       * Function that applies to clicking the mask itself and not the children
       */
    onClick: _propTypes.default.func,

    /**
       * ReactNode to render as this component's content
       */
    children: _propTypes.default.node,

    /**
       * Should the mask visually sit above or below the EuiHeader (controlled by z-index)
       */
    headerZindexLocation: _propTypes.default.oneOf(["above", "below"])
  }),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};