"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHeaderLinks = exports.GUTTER_SIZES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../../common");

var _icon = require("../../icon");

var _popover = require("../../popover");

var _i18n = require("../../i18n");

var _header_section = require("../header_section");

var _responsive = require("../../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var gutterSizeToClassNameMap = {
  xs: '--gutterXS',
  s: '--gutterS',
  m: '--gutterM',
  l: '--gutterL'
};
var GUTTER_SIZES = (0, _common.keysOf)(gutterSizeToClassNameMap);
exports.GUTTER_SIZES = GUTTER_SIZES;

var EuiHeaderLinks = function EuiHeaderLinks(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$gutterSize = _ref.gutterSize,
      gutterSize = _ref$gutterSize === void 0 ? 's' : _ref$gutterSize,
      _ref$popoverBreakpoin = _ref.popoverBreakpoints,
      popoverBreakpoints = _ref$popoverBreakpoin === void 0 ? ['xs', 's'] : _ref$popoverBreakpoin,
      popoverButtonProps = _ref.popoverButtonProps,
      popoverProps = _ref.popoverProps,
      rest = _objectWithoutProperties(_ref, ["children", "className", "gutterSize", "popoverBreakpoints", "popoverButtonProps", "popoverProps"]);

  var _popoverButtonProps = _objectSpread({}, popoverButtonProps),
      _onClick = _popoverButtonProps.onClick,
      _popoverButtonProps$i = _popoverButtonProps.iconType,
      iconType = _popoverButtonProps$i === void 0 ? 'apps' : _popoverButtonProps$i,
      popoverButtonRest = _objectWithoutProperties(_popoverButtonProps, ["onClick", "iconType"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      mobileMenuIsOpen = _useState2[0],
      setMobileMenuIsOpen = _useState2[1];

  var onMenuButtonClick = function onMenuButtonClick(e) {
    _onClick && _onClick(e);
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  var closeMenu = function closeMenu() {
    setMobileMenuIsOpen(false);
  };

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', closeMenu);
    return function () {
      window.removeEventListener('resize', closeMenu);
    };
  });
  var classes = (0, _classnames.default)('euiHeaderLinks', className);

  var button = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiHeaderLinks.openNavigationMenu",
    default: "Open menu"
  }, function (openNavigationMenu) {
    return /*#__PURE__*/_react.default.createElement(_header_section.EuiHeaderSectionItemButton, _extends({
      "aria-label": openNavigationMenu,
      onClick: onMenuButtonClick
    }, popoverButtonRest), /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
      type: iconType,
      size: "m"
    }));
  });

  return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiHeaderLinks.appNavigation",
    default: "App menu"
  }, function (appNavigation) {
    return /*#__PURE__*/_react.default.createElement("nav", _extends({
      className: classes,
      "aria-label": appNavigation
    }, rest), /*#__PURE__*/_react.default.createElement(_responsive.EuiHideFor, {
      sizes: popoverBreakpoints
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('euiHeaderLinks__list', ["euiHeaderLinks__list".concat(gutterSizeToClassNameMap[gutterSize])])
    }, children)), /*#__PURE__*/_react.default.createElement(_responsive.EuiShowFor, {
      sizes: popoverBreakpoints
    }, /*#__PURE__*/_react.default.createElement(_popover.EuiPopover, _extends({
      button: button,
      isOpen: mobileMenuIsOpen,
      anchorPosition: "downRight",
      closePopover: closeMenu,
      panelPaddingSize: "none"
    }, popoverProps), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)('euiHeaderLinks__mobileList', ["euiHeaderLinks__mobileList".concat(gutterSizeToClassNameMap[gutterSize])])
    }, children))));
  });
};

exports.EuiHeaderLinks = EuiHeaderLinks;
EuiHeaderLinks.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * Spacing between direct children
       */
  gutterSize: _propTypes.default.oneOf(["xs", "s", "m", "l"]),

  /**
       * A list of named breakpoints at which to show the popover version
       */
  popoverBreakpoints: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.oneOf(["xs", "s", "m", "l", "xl"]).isRequired).isRequired, _propTypes.default.oneOf(["all", "none"])]),

  /**
       * Extend the functionality of the EuiPopover.button which is a EuiHeaderSectionItemButton.
       * With the addition of `iconType` to change the display icon which defaults to `apps`
       */
  popoverButtonProps: _propTypes.default.shape({
    iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired])
  }),

  /**
       * Extend the functionality of the EuiPopover
       */
  popoverProps: _propTypes.default.shape({
    /**
       * Class name passed to the direct parent of the button
       */
    anchorClassName: _propTypes.default.string,

    /**
       * Alignment of the popover and arrow relative to the button
       */
    anchorPosition: _propTypes.default.oneOf(["upCenter", "upLeft", "upRight", "downCenter", "downLeft", "downRight", "leftCenter", "leftUp", "leftDown", "rightCenter", "rightUp", "rightDown"]),

    /**
       * Style and position alteration for arrow-less, left-aligned
       * attachment. Intended for use with inputs as anchors, e.g.
       * EuiInputPopover
       */
    attachToAnchor: _propTypes.default.bool,
    buttonRef: _propTypes.default.any,

    /**
       * Restrict the popover's position within this element
       */
    container: _propTypes.default.any,

    /**
       * CSS display type for both the popover and anchor
       */
    display: _propTypes.default.oneOf(["inlineBlock", "block"]),

    /**
       * Object of props passed to EuiFocusTrap
       */
    focusTrapProps: _propTypes.default.any,

    /**
       * Show arrow indicating to originating button
       */
    hasArrow: _propTypes.default.bool,

    /**
       * Specifies what element should initially have focus; Can be a DOM
       * node, or a selector string (which will be passed to
       * document.querySelector() to find the DOM node), or a function that
       * returns a DOM node
       */
    initialFocus: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired, _propTypes.default.func.isRequired]),

    /**
       * Passed directly to EuiPortal for DOM positioning. Both properties are
       * required if prop is specified
       */
    insert: _propTypes.default.shape({
      sibling: _propTypes.default.any.isRequired,
      position: _propTypes.default.oneOf(["before", "after"]).isRequired
    }),

    /**
       * Visibility state of the popover
       */
    isOpen: _propTypes.default.bool,

    /**
       * Traps tab focus within the popover contents
       */
    ownFocus: _propTypes.default.bool,

    /**
       * Custom class added to the EuiPanel containing the popover contents
       */
    panelClassName: _propTypes.default.string,

    /**
       * EuiPanel padding on all sides
       */
    panelPaddingSize: _propTypes.default.any,

    /**
       * Standard DOM `style` attribute. Passed to the EuiPanel
       */
    panelStyle: _propTypes.default.any,

    /**
       * Object of props passed to EuiPanel
       */
    panelProps: _propTypes.default.any,
    panelRef: _propTypes.default.any,
    popoverRef: _propTypes.default.any,

    /**
       * When `true`, the popover's position is re-calculated when the user
       * scrolls, this supports having fixed-position popover anchors
       */
    repositionOnScroll: _propTypes.default.bool,

    /**
       * By default, popover content inherits the z-index of the anchor
       * component; pass `zIndex` to override
       */
    zIndex: _propTypes.default.number,

    /**
       * Function callback for when the focus trap is deactivated
       */
    onTrapDeactivation: _propTypes.default.any,

    /**
       * Distance away from the anchor that the popover will render
       */
    offset: _propTypes.default.number,

    /**
       * Minimum distance between the popover and the bounding container;
       * Pass an array of 4 values to adjust each side differently: `[top, right, bottom, left]`
       * Default is 16
       */
    buffer: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.any.isRequired]),

    /**
       * Element to pass as the child element of the arrow;
       * Use case is typically limited to an accompanying `EuiBeacon`
       */
    arrowChildren: _propTypes.default.node,

    /**
       * Provide a name to the popover panel
       */
    "aria-label": _propTypes.default.string,

    /**
       * Alternative option to `aria-label` that takes an `id`.
       * Usually takes the `id` of the popover title
       */
    "aria-labelledby": _propTypes.default.string
  })
};