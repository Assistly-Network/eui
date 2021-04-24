"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.euiResizablePanelWithControls = euiResizablePanelWithControls;
exports.EuiResizablePanel = exports.getToggleOptions = exports.getModeType = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _context = require("./context");

var _services = require("../../services");

var _panel = require("../panel");

var _panel2 = require("../panel/panel");

var _i18n = require("../i18n");

var _resizable_collapse_button = require("./resizable_collapse_button");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var defaultToggleOptions = {
  className: null,
  'data-test-subj': undefined,
  position: 'middle'
};

var getModeType = function getModeType(mode) {
  return _typeof(mode) === 'object' ? mode[0] : mode;
};

exports.getModeType = getModeType;

var getToggleOptions = function getToggleOptions(mode) {
  return _typeof(mode) === 'object' ? _objectSpread(_objectSpread({}, defaultToggleOptions), mode[1]) : defaultToggleOptions;
};

exports.getToggleOptions = getToggleOptions;
var paddingSizeToClassNameMap = {
  none: null,
  s: 'euiResizablePanel--paddingSmall',
  m: 'euiResizablePanel--paddingMedium',
  l: 'euiResizablePanel--paddingLarge'
};

var getPosition = function getPosition(ref) {
  var position = 'middle';

  if (ref.matches(':first-of-type')) {
    position = 'first';
  } else if (ref.matches(':last-of-type')) {
    position = 'last';
  }

  return position;
};

var generatePanelId = (0, _services.htmlIdGenerator)('resizable-panel');

var EuiResizablePanel = function EuiResizablePanel(_ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      isHorizontal = _ref.isHorizontal,
      size = _ref.size,
      initialSize = _ref.initialSize,
      _ref$minSize = _ref.minSize,
      minSize = _ref$minSize === void 0 ? '0px' : _ref$minSize,
      _ref$scrollable = _ref.scrollable,
      scrollable = _ref$scrollable === void 0 ? true : _ref$scrollable,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style,
      mode = _ref.mode,
      registration = _ref.registration,
      onToggleCollapsed = _ref.onToggleCollapsed,
      onToggleCollapsedInternal = _ref.onToggleCollapsedInternal,
      wrapperProps = _ref.wrapperProps,
      _ref$hasShadow = _ref.hasShadow,
      hasShadow = _ref$hasShadow === void 0 ? false : _ref$hasShadow,
      _ref$borderRadius = _ref.borderRadius,
      borderRadius = _ref$borderRadius === void 0 ? 'none' : _ref$borderRadius,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'transparent' : _ref$color,
      _ref$paddingSize = _ref.paddingSize,
      paddingSize = _ref$paddingSize === void 0 ? 'm' : _ref$paddingSize,
      _ref$wrapperPadding = _ref.wrapperPadding,
      wrapperPadding = _ref$wrapperPadding === void 0 ? 'none' : _ref$wrapperPadding,
      rest = _objectWithoutProperties(_ref, ["children", "className", "id", "isHorizontal", "size", "initialSize", "minSize", "scrollable", "style", "mode", "registration", "onToggleCollapsed", "onToggleCollapsedInternal", "wrapperProps", "hasShadow", "borderRadius", "color", "paddingSize", "wrapperPadding"]);

  var _useEuiResizableConta = (0, _context.useEuiResizableContainerContext)(),
      _useEuiResizableConta2 = _useEuiResizableConta.registry;

  _useEuiResizableConta2 = _useEuiResizableConta2 === void 0 ? {
    panels: {},
    resizers: {}
  } : _useEuiResizableConta2;
  var panels = _useEuiResizableConta2.panels,
      resizers = _useEuiResizableConta2.resizers;
  var divRef = (0, _react.useRef)(null);
  var panelId = (0, _react.useRef)(id || generatePanelId());
  var resizerIds = (0, _react.useRef)([]);
  var modeType = (0, _react.useMemo)(function () {
    return getModeType(mode);
  }, [mode]);
  var toggleOpts = (0, _react.useMemo)(function () {
    return getToggleOptions(mode);
  }, [mode]);
  var innerSize = (0, _react.useMemo)(function () {
    var _ref2;

    return (_ref2 = panels[panelId.current] && panels[panelId.current].size) !== null && _ref2 !== void 0 ? _ref2 : initialSize || 0;
  }, [panels, initialSize]);
  var isCollapsed = (0, _react.useMemo)(function () {
    return panels[panelId.current] && panels[panelId.current].isCollapsed || false;
  }, [panels]);
  var position = (0, _react.useMemo)(function () {
    return panels[panelId.current] && panels[panelId.current].position || 'middle';
  }, [panels]);
  var isCollapsible = (0, _react.useMemo)(function () {
    return modeType === 'collapsible';
  }, [modeType]);
  var direction = (0, _react.useMemo)(function () {
    var direction = null;

    if (position === 'middle' && (isCollapsible || isCollapsed)) {
      var ids = Object.keys(panels);
      var index = ids.indexOf(panelId.current);
      var prevPanel = panels[ids[index - 1]];
      var nextPanel = panels[ids[index + 1]];
      var prevPanelMode = prevPanel ? getModeType(prevPanel.mode) : null;
      var nextPanelMode = nextPanel ? getModeType(nextPanel.mode) : null; // Intentional, preferential order

      if (prevPanelMode === 'main') {
        direction = 'right';
      } else if (nextPanelMode === 'main') {
        direction = 'left';
      } else if (prevPanelMode && prevPanelMode !== 'collapsible') {
        direction = 'right';
      } else if (nextPanelMode && nextPanelMode !== 'collapsible') {
        direction = 'left';
      } else if (prevPanel && nextPanel) {
        direction = prevPanel.size > nextPanel.size ? 'right' : 'left';
      } else if (prevPanel) {
        direction = 'right';
      } else if (nextPanel) {
        direction = 'left';
      }
    }

    return direction;
  }, [isCollapsed, isCollapsible, position, panels]);
  var padding = (0, _react.useMemo)(function () {
    return "".concat(_panel2.panelPaddingValues[paddingSize] * 2, "px");
  }, [paddingSize]);
  var classes = (0, _classnames.default)('euiResizablePanel', paddingSizeToClassNameMap[wrapperPadding], {
    'euiResizablePanel--collapsible': isCollapsible,
    'euiResizablePanel-isCollapsed': isCollapsed
  }, "euiResizablePanel--".concat(position), wrapperProps && wrapperProps.className);
  var panelClasses = (0, _classnames.default)('euiResizablePanel__content', {
    'euiResizablePanel__content--scrollable': scrollable
  }, className);
  var dimensions;

  if (size) {
    dimensions = {
      width: isHorizontal ? "".concat(size, "%") : '100%',
      height: isHorizontal ? 'auto' : "".concat(size, "%")
    };
  } else {
    dimensions = {
      width: isHorizontal ? "".concat(innerSize, "%") : '100%',
      height: isHorizontal ? 'auto' : "".concat(innerSize, "%")
    };
  }

  var styles = _objectSpread(_objectSpread({}, style), dimensions);

  (0, _react.useEffect)(function () {
    if (!registration) return;
    var id = panelId.current;
    var initSize = size !== null && size !== void 0 ? size : initialSize || 0;
    resizerIds.current = [divRef.current.previousElementSibling ? divRef.current.previousElementSibling.id : '', divRef.current.nextElementSibling ? divRef.current.nextElementSibling.id : ''];
    registration.register({
      id: id,
      size: initSize,
      prevSize: initSize,
      getSizePx: function getSizePx() {
        return isHorizontal ? divRef.current.getBoundingClientRect().width : divRef.current.getBoundingClientRect().height;
      },
      minSize: [minSize, padding],
      mode: modeType,
      isCollapsed: false,
      position: getPosition(divRef.current)
    });
    return function () {
      registration.deregister(id);
    };
  }, [initialSize, isHorizontal, minSize, size, registration, modeType, padding]);

  var onClickCollapse = function onClickCollapse(options) {
    onToggleCollapsedInternal && onToggleCollapsedInternal(panelId.current, options);
    onToggleCollapsed && onToggleCollapsed(panelId.current, options);
  };

  var collapseRight = function collapseRight(e) {
    onClickCollapse({
      direction: 'right'
    });
    if (e.detail) e.currentTarget.blur();
  };

  var collapseLeft = function collapseLeft(e) {
    onClickCollapse({
      direction: 'left'
    });
    if (e.detail) e.currentTarget.blur();
  };

  var toggleButtonAriaLabel = (0, _i18n.useEuiI18n)('euiResizablePanel.toggleButtonAriaLabel', 'Press to toggle this panel');
  var hasLeftToggle = (isCollapsible || isCollapsed) && (position === 'last' || position === 'middle' && direction === 'right');
  var hasRightToggle = (isCollapsible || isCollapsed) && (position === 'first' || position === 'middle' && direction === 'left');
  var hasVisibleToggle = modeType === 'custom' && isCollapsed || isCollapsible;
  var theToggle;
  var theResizer;

  if ((isCollapsible || modeType === 'custom') && hasLeftToggle) {
    theResizer = resizers[resizerIds.current[0]];
    theToggle = /*#__PURE__*/_react.default.createElement(_resizable_collapse_button.EuiResizableCollapseButton, {
      externalPosition: "before",
      direction: isHorizontal ? 'horizontal' : 'vertical',
      isVisible: theResizer && (theResizer.isFocused || theResizer.isDisabled),
      isCollapsed: theResizer && theResizer.isDisabled,
      internalPosition: toggleOpts.position,
      "data-test-subj": toggleOpts['data-test-subj'],
      "aria-label": toggleButtonAriaLabel,
      onClick: collapseRight
    });
  } else if ((isCollapsible || modeType === 'custom') && hasRightToggle) {
    theResizer = resizers[resizerIds.current[1]];
    theToggle = /*#__PURE__*/_react.default.createElement(_resizable_collapse_button.EuiResizableCollapseButton, {
      externalPosition: "after",
      direction: isHorizontal ? 'horizontal' : 'vertical',
      isVisible: theResizer && (theResizer.isFocused || theResizer.isDisabled),
      isCollapsed: theResizer && theResizer.isDisabled,
      internalPosition: toggleOpts.position,
      "data-test-subj": toggleOpts['data-test-subj'],
      "aria-label": toggleButtonAriaLabel,
      onClick: collapseLeft
    });
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, wrapperProps, {
    id: panelId.current,
    ref: divRef,
    style: styles,
    className: classes
  }), hasVisibleToggle && hasLeftToggle && theToggle, /*#__PURE__*/_react.default.createElement(_panel.EuiPanel, _extends({
    className: panelClasses,
    hasShadow: hasShadow,
    borderRadius: borderRadius,
    color: color,
    paddingSize: isCollapsed ? 'none' : paddingSize
  }, rest), children), hasVisibleToggle && hasRightToggle && theToggle);
};

exports.EuiResizablePanel = EuiResizablePanel;
EuiResizablePanel.propTypes = {
  /**
     * Specify a desired minimum panel size in pixels or percents,
     * for example "300px" or "30%"
     * The actual minimum size will be calculated,
     * using the larger of this prop and the panelProps.paddingSize
     */
  minSize: _propTypes.default.string,

  /**
     * Specify id of panel if you want to track panel size in "onPanelWidthChange" callback
     */
  id: _propTypes.default.string,

  /**
     * Initial size of the panel in percents
     * Specify this prop if you don't need to handle the panel size from outside
     */
  initialSize: _propTypes.default.number,

  /**
     * Size of the panel in percents.
     * Specify this prop if you want to control the size from outside, the panel will ignore the "initialSize"
     */
  size: _propTypes.default.number,

  /**
     * Add Eui scroll and overflow for the panel
     */
  scrollable: _propTypes.default.bool,

  /*
     * For use with collapsible panels.
     * Specify either `'collapsible'`, `'main'`, or `'custom'`.
     * `'collapsible'` also accepts an array where
     * the second item is attributes for the toggle button:
     * `['collapsible', {'data-test-subj'?: string, className?: string;}]
     */
  mode: _propTypes.default.oneOfType([_propTypes.default.oneOf(["collapsible", "main", "custom"]).isRequired, _propTypes.default.any.isRequired]),

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.node.isRequired,

  /**
     * Custom CSS properties applied to the wrapping `.euiResizablePanel` div
     */
  style: _propTypes.default.any,

  /**
     * Props to add to the wrapping `.euiResizablePanel` div
     */
  wrapperProps: _propTypes.default.any,

  /**
     * Padding to add directly to the wrapping `.euiResizablePanel` div
     * Gives space around the actual panel.
     */
  wrapperPadding: _propTypes.default.any,

  /**
     * Adds a medium shadow to the panel;
     * Only works when `color="plain"`
     */
  hasShadow: _propTypes.default.bool,

  /**
     * Adds a slight 1px border on all edges.
     * Only works when `color="plain | transparent"`
     * Default is `undefined` and will default to that theme's panel style
     */
  hasBorder: _propTypes.default.bool,

  /**
     * Padding for all four sides
     */
  paddingSize: _propTypes.default.any,

  /**
     * Corner border radius
     */
  borderRadius: _propTypes.default.any,

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
  className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),
  "aria-label": _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),
  "data-test-subj": _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string])
};

function euiResizablePanelWithControls(controls) {
  return function (props) {
    return /*#__PURE__*/_react.default.createElement(EuiResizablePanel, _extends({}, controls, props));
  };
}