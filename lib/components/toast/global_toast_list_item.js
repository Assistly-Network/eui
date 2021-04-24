"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiGlobalToastListItem = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EuiGlobalToastListItem = function EuiGlobalToastListItem(_ref) {
  var children = _ref.children,
      isDismissed = _ref.isDismissed;

  if (!children) {
    return null;
  }

  var classes = (0, _classnames.default)('euiGlobalToastListItem', children.props.className, {
    'euiGlobalToastListItem-isDismissed': isDismissed
  });
  return /*#__PURE__*/(0, _react.cloneElement)(children, _objectSpread(_objectSpread({}, children.props), {
    className: classes
  }));
};

exports.EuiGlobalToastListItem = EuiGlobalToastListItem;
EuiGlobalToastListItem.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  isDismissed: _propTypes.default.bool,

  /**
     * ReactElement to render as this component's content
     */
  children: _propTypes.default.element
};