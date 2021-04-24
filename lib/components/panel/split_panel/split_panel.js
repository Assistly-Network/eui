"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSplitPanel = exports._EuiSplitPanelOuter = exports._EuiSplitPanelInner = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _panel = require("../panel");

var _hooks = require("../../../services/hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Consumed via `EuiSplitPanel.Inner`.
 * Extends most `EuiPanelProps`.
 */
var _EuiSplitPanelInner = function _EuiSplitPanelInner(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["children", "className"]);

  var classes = (0, _classnames.default)('euiSplitPanel__inner', className);
  var panelProps = {
    hasShadow: false,
    color: 'transparent',
    borderRadius: 'none',
    hasBorder: false
  };
  return /*#__PURE__*/_react.default.createElement(_panel.EuiPanel, _extends({
    element: "div",
    className: classes
  }, panelProps, rest), children);
};

exports._EuiSplitPanelInner = _EuiSplitPanelInner;
_EuiSplitPanelInner.propTypes = {
  /**
     * Padding for all four sides
     */
  paddingSize: _propTypes.default.any,

  /**
     * When true the panel will grow in height to match `EuiFlexItem`
     */
  grow: _propTypes.default.bool,
  panelRef: _propTypes.default.any,

  /**
     * Background color of the panel;
     * Usually a lightened form of the brand colors
     */
  color: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};

/**
 * Consumed via `EuiSplitPanel.Outer`.
 * Extends most `EuiPanelProps`.
 */
var _EuiSplitPanelOuter = function _EuiSplitPanelOuter(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      _ref2$direction = _ref2.direction,
      direction = _ref2$direction === void 0 ? 'column' : _ref2$direction,
      _ref2$responsive = _ref2.responsive,
      responsive = _ref2$responsive === void 0 ? ['xs', 's'] : _ref2$responsive,
      rest = _objectWithoutProperties(_ref2, ["children", "className", "direction", "responsive"]);

  var isResponsive = (0, _hooks.useIsWithinBreakpoints)(responsive, !!responsive);
  var classes = (0, _classnames.default)('euiSplitPanel', {
    'euiSplitPanel--row': direction === 'row',
    'euiSplitPanel-isResponsive': isResponsive
  }, className);
  return /*#__PURE__*/_react.default.createElement(_panel.EuiPanel, _extends({
    paddingSize: "none",
    grow: false,
    className: classes
  }, rest), children);
};

exports._EuiSplitPanelOuter = _EuiSplitPanelOuter;
_EuiSplitPanelOuter.propTypes = {
  /**
     * Any number of _EuiSplitPanelInner components
     */
  children: _propTypes.default.node,

  /**
     * Changes the flex-direction
     */
  direction: _propTypes.default.oneOf(["column", "row"]),

  /**
     * Stacks row display on small screens.
     * Remove completely with `false` or provide your own list of breakpoint sizes to stack on.
     */
  responsive: _propTypes.default.oneOfType([_propTypes.default.oneOf([false]), _propTypes.default.arrayOf(_propTypes.default.oneOf(["xs", "s", "m", "l", "xl"]).isRequired).isRequired])
};
var EuiSplitPanel = {
  Outer: _EuiSplitPanelOuter,
  Inner: _EuiSplitPanelInner
};
exports.EuiSplitPanel = EuiSplitPanel;