"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBottomBar = exports.POSITIONS = exports.paddingSizeToClassNameMap = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _services = require("../../services");

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _resize_observer = require("../observer/resize_observer");

var _portal = require("../portal");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Exported for testing
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiBottomBar--paddingSmall',
  m: 'euiBottomBar--paddingMedium',
  l: 'euiBottomBar--paddingLarge'
};
exports.paddingSizeToClassNameMap = paddingSizeToClassNameMap;
var POSITIONS = ['static', 'fixed', 'sticky'];
exports.POSITIONS = POSITIONS;
var EuiBottomBar = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'fixed' : _ref$position,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'm' : _ref$paddingSize,
      _ref$affordForDisplac = _ref.affordForDisplacement,
      affordForDisplacement = _ref$affordForDisplac === void 0 ? true : _ref$affordForDisplac,
      children = _ref.children,
      className = _ref.className,
      bodyClassName = _ref.bodyClassName,
      landmarkHeading = _ref.landmarkHeading,
      _ref$usePortal = _ref.usePortal,
      usePortal = _ref$usePortal === void 0 ? true : _ref$usePortal,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? 0 : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? 0 : _ref$right,
      _ref$bottom = _ref.bottom,
      bottom = _ref$bottom === void 0 ? 0 : _ref$bottom,
      top = _ref.top,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["position", "paddingSize", "affordForDisplacement", "children", "className", "bodyClassName", "landmarkHeading", "usePortal", "left", "right", "bottom", "top", "style"]);

  // Force some props if `fixed` position, but not if the user has supplied these
  affordForDisplacement = position !== 'fixed' ? false : affordForDisplacement;
  usePortal = position !== 'fixed' ? false : usePortal;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      resizeRef = _useState2[0],
      setResizeRef = _useState2[1];

  var setRef = (0, _services.useCombinedRefs)([setResizeRef, ref]); // TODO: Allow this hooke to be conditional

  var dimensions = (0, _resize_observer.useResizeObserver)(resizeRef);
  (0, _react.useEffect)(function () {
    if (affordForDisplacement && usePortal) {
      document.body.style.paddingBottom = "".concat(dimensions.height, "px");
    }

    if (bodyClassName) {
      document.body.classList.add(bodyClassName);
    }

    return function () {
      if (affordForDisplacement && usePortal) {
        document.body.style.paddingBottom = '';
      }

      if (bodyClassName) {
        document.body.classList.remove(bodyClassName);
      }
    };
  }, [affordForDisplacement, usePortal, dimensions, bodyClassName]);
  var classes = (0, _classnames.default)('euiBottomBar', "euiBottomBar--".concat(position), paddingSizeToClassNameMap[paddingSize], className);

  var newStyle = _objectSpread({
    left: left,
    right: right,
    bottom: bottom,
    top: top
  }, style);

  var bar = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiBottomBar.screenReaderHeading",
    default: "Page level controls"
  }, function (screenReaderHeading) {
    return (
      /*#__PURE__*/
      // Though it would be better to use aria-labelledby than aria-label and not repeat the same string twice
      // A bug in voiceover won't list some landmarks in the rotor without an aria-label
      _react.default.createElement("section", _extends({
        "aria-label": landmarkHeading ? landmarkHeading : screenReaderHeading,
        className: classes,
        ref: setRef,
        style: newStyle
      }, rest), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("h2", null, landmarkHeading ? landmarkHeading : screenReaderHeading)), children)
    );
  }), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("p", {
    "aria-live": "assertive"
  }, landmarkHeading ? /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiBottomBar.customScreenReaderAnnouncement",
    default: "There is a new region landmark called {landmarkHeading} with page level controls at the end of the document.",
    values: {
      landmarkHeading: landmarkHeading
    }
  }) : /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiBottomBar.screenReaderAnnouncement",
    default: "There is a new region landmark with page level controls at the end of the document."
  }))));

  return usePortal ? /*#__PURE__*/_react.default.createElement(_portal.EuiPortal, null, bar) : bar;
});
exports.EuiBottomBar = EuiBottomBar;
EuiBottomBar.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * How to position the bottom bar against its parent.
       */
  position: _propTypes.default.oneOfType([_propTypes.default.oneOf(["fixed"]), _propTypes.default.oneOf(["static", "sticky"]).isRequired]),

  /**
       * Whether to wrap in an EuiPortal which appends the component to the body element.
       * Only works if `position` is `fixed`.
       */
  usePortal: _propTypes.default.bool,

  /**
       * Whether the component should apply padding on the document body element to afford for its own displacement height.
       * Only works if `usePortal` is true and `position` is `fixed`.
       */
  affordForDisplacement: _propTypes.default.bool,

  /**
       * Padding applied to the bar. Default is 'm'.
       */
  paddingSize: _propTypes.default.oneOf(["none", "s", "m", "l"]),

  /**
       * Optional class applied to the body element on mount.
       */
  bodyClassName: _propTypes.default.string,

  /**
       * Customize the screen reader heading that helps users find this control. Default is 'Page level controls'.
       */
  landmarkHeading: _propTypes.default.string,

  /**
       * Starting vertical position when `fixed` position.
       * Offset from the top of the window when `sticky` position.
       * Has no affect on `static` positions.
       */
  top: _propTypes.default.any,

  /**
       * Ending horizontal position when `fixed` position.
       * Has no affect on `static` or `sticky` positions.
       */
  right: _propTypes.default.any,

  /**
       * Starting vertical position when `fixed` position.
       * Offset from the bottom of the window when `sticky` position.
       * Has no affect on `static` positions.
       */
  bottom: _propTypes.default.any,

  /**
       * Starting horizontal position when `fixed` position.
       * Has no affect on `static` or `sticky` positions.
       */
  left: _propTypes.default.any
};
EuiBottomBar.displayName = 'EuiBottomBar';