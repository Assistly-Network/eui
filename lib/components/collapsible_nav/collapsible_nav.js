"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCollapsibleNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../color_picker/utils");

var _services = require("../../services");

var _focus_trap = require("../focus_trap");

var _overlay_mask = require("../overlay_mask");

var _button = require("../button");

var _i18n = require("../i18n");

var _accessibility = require("../accessibility");

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiCollapsibleNav = function EuiCollapsibleNav(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$isDocked = _ref.isDocked,
      isDocked = _ref$isDocked === void 0 ? false : _ref$isDocked,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      button = _ref.button,
      _ref$showButtonIfDock = _ref.showButtonIfDocked,
      showButtonIfDocked = _ref$showButtonIfDock === void 0 ? false : _ref$showButtonIfDock,
      _ref$dockedBreakpoint = _ref.dockedBreakpoint,
      dockedBreakpoint = _ref$dockedBreakpoint === void 0 ? 992 : _ref$dockedBreakpoint,
      _ref$showCloseButton = _ref.showCloseButton,
      showCloseButton = _ref$showCloseButton === void 0 ? true : _ref$showCloseButton,
      closeButtonProps = _ref.closeButtonProps,
      onClose = _ref.onClose,
      id = _ref.id,
      maskProps = _ref.maskProps,
      rest = _objectWithoutProperties(_ref, ["children", "className", "isDocked", "isOpen", "button", "showButtonIfDocked", "dockedBreakpoint", "showCloseButton", "closeButtonProps", "onClose", "id", "maskProps"]);

  var _useState = (0, _react.useState)(id || (0, _services.htmlIdGenerator)()('euiCollapsibleNav')),
      _useState2 = _slicedToArray(_useState, 1),
      flyoutID = _useState2[0];

  var _useState3 = (0, _react.useState)((typeof window === 'undefined' ? Infinity : window.innerWidth) >= dockedBreakpoint),
      _useState4 = _slicedToArray(_useState3, 2),
      windowIsLargeEnoughToDock = _useState4[0],
      setWindowIsLargeEnoughToDock = _useState4[1];

  var navIsDocked = isDocked && windowIsLargeEnoughToDock;
  var functionToCallOnWindowResize = (0, _utils.throttle)(function () {
    if (window.innerWidth < dockedBreakpoint) {
      setWindowIsLargeEnoughToDock(false);
    } else {
      setWindowIsLargeEnoughToDock(true);
    } // reacts every 50ms to resize changes and always gets the final update

  }, 50); // Watch for docked status and appropriately add/remove body classes and resize handlers

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', functionToCallOnWindowResize);

    if (navIsDocked) {
      document.body.classList.add('euiBody--collapsibleNavIsDocked');
    } else if (isOpen) {
      document.body.classList.add('euiBody--collapsibleNavIsOpen');
    }

    return function () {
      document.body.classList.remove('euiBody--collapsibleNavIsDocked');
      document.body.classList.remove('euiBody--collapsibleNavIsOpen');
      window.removeEventListener('resize', functionToCallOnWindowResize);
    };
  }, [navIsDocked, functionToCallOnWindowResize, isOpen]);

  var onKeyDown = function onKeyDown(event) {
    if (event.key === _services.keys.ESCAPE) {
      event.preventDefault();
      collapse();
    }
  };

  var collapse = function collapse() {
    // Skip collapsing if it is docked
    if (navIsDocked) {
      return;
    } else {
      onClose && onClose();
    }
  };

  var classes = (0, _classnames.default)('euiCollapsibleNav', {
    'euiCollapsibleNav--isDocked': navIsDocked
  }, className);
  var optionalOverlay;

  if (!navIsDocked) {
    optionalOverlay = /*#__PURE__*/_react.default.createElement(_overlay_mask.EuiOverlayMask, _extends({
      onClick: collapse,
      headerZindexLocation: "below"
    }, maskProps));
  } // Show a trigger button if one was passed but
  // not if navIsDocked and showButtonIfDocked is false


  var trigger = navIsDocked && !showButtonIfDocked ? undefined : button && /*#__PURE__*/(0, _react.cloneElement)(button, {
    'aria-controls': flyoutID,
    'aria-expanded': isOpen,
    'aria-pressed': isOpen,
    className: (0, _classnames.default)(button.props.className, 'euiCollapsibleNav__toggle')
  });

  var closeButton = showCloseButton && /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, {
    showOnFocus: true
  }, /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, _extends({
    onClick: collapse,
    size: "xs",
    textProps: {
      className: 'euiCollapsibleNav__closeButtonText'
    },
    iconType: "cross"
  }, closeButtonProps, {
    className: (0, _classnames.default)('euiCollapsibleNav__closeButton', closeButtonProps && closeButtonProps.className)
  }), /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiCollapsibleNav.closeButtonLabel",
    default: "close"
  })));

  var flyout = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_services.EuiWindowEvent, {
    event: "keydown",
    handler: onKeyDown
  }), optionalOverlay, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, {
    disabled: navIsDocked,
    clickOutsideDisables: true
  }, /*#__PURE__*/_react.default.createElement("nav", _extends({
    id: flyoutID,
    className: classes
  }, rest), children, closeButton)));

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, trigger, (isOpen || navIsDocked) && flyout);
};

exports.EuiCollapsibleNav = EuiCollapsibleNav;
EuiCollapsibleNav.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * ReactNode to render as this component's content
       */
  children: _propTypes.default.node,

  /**
       * Keeps navigation flyout visible and push `<body>` content via padding
       */
  isDocked: _propTypes.default.bool,

  /**
       * Pixel value for customizing the minimum window width for enabling docking
       */
  dockedBreakpoint: _propTypes.default.number,

  /**
       * Shows the navigation flyout
       */
  isOpen: _propTypes.default.bool,

  /**
       * Button for controlling visible state of the nav
       */
  button: _propTypes.default.element,

  /**
       * Keeps the display of toggle button when in docked state
       */
  showButtonIfDocked: _propTypes.default.bool,

  /**
       * Keeps the display of floating close button.
       * If `false`, you must then keep the `button` displayed at all breakpoints.
       */
  showCloseButton: _propTypes.default.bool,

  /**
       * Extend the props of the close button, an EuiButtonEmpty
       */
  closeButtonProps: _propTypes.default.shape({
    href: _propTypes.default.string,
    onClick: _propTypes.default.func,

    /**
       * Any of our named colors
       */

    /**
       * Any of our named colors
       */
    color: _propTypes.default.oneOf(["primary", "danger", "text", "ghost", "success", "warning"]),
    size: _propTypes.default.oneOf(["xs", "s", "l"]),

    /**
       * Ensure the text of the button sits flush to the left, right, or both sides of its container
       */

    /**
       * Ensure the text of the button sits flush to the left, right, or both sides of its container
       */
    flush: _propTypes.default.oneOf(["left", "right", "both"]),

    /**
       * `disabled` is also allowed
       */

    /**
       * `disabled` is also allowed
       */
    isDisabled: _propTypes.default.bool,

    /**
       * Force disables the button and changes the icon to a loading spinner
       */

    /**
       * Force disables the button and changes the icon to a loading spinner
       */
    isLoading: _propTypes.default.bool,

    /**
       * Applies the boolean state as the `aria-pressed` property to create a toggle button.
       * *Only use when the readable text does not change between states.*
       */

    /**
       * Applies the boolean state as the `aria-pressed` property to create a toggle button.
       * *Only use when the readable text does not change between states.*
       */
    isSelected: _propTypes.default.bool,
    target: _propTypes.default.string,
    rel: _propTypes.default.string,
    type: _propTypes.default.oneOf(["button", "submit"]),
    buttonRef: _propTypes.default.any,

    /**
       * Object of props passed to the <span/> wrapping the button's content
       */
    contentProps: _propTypes.default.any,

    /**
       * Any `type` accepted by EuiIcon
       */
    iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),

    /**
       * Can only be one side `left` or `right`
       */
    iconSide: _propTypes.default.oneOf(["left", "right"]),

    /**
       * Object of props passed to the <span/> wrapping the content's text/children only (not icon)
       */
    textProps: _propTypes.default.shape({
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string,
      ref: _propTypes.default.any,
      "data-text": _propTypes.default.string
    }),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }),
  onClose: _propTypes.default.func,

  /**
       * Adjustments to the EuiOverlayMask
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
  })
};