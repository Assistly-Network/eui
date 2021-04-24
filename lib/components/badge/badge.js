"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiBadge = exports.ICON_SIDES = exports.COLORS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _common = require("../common");

var _services = require("../../services");

var _inner_text = require("../inner_text");

var _icon = require("../icon");

var _utils = require("../color_picker/utils");

var _href_validator = require("../../services/security/href_validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO - replace with variables once https://github.com/elastic/eui/issues/2731 is closed
var colorInk = '#000';
var colorGhost = '#fff'; // The color blind palette has some stricter accessibility needs with regards to
// charts and contrast. We use the euiPaletteColorBlindBehindText variant here since our
// accessibility concerns pertain to foreground (text) and background contrast

var visColors = (0, _services.euiPaletteColorBlindBehindText)();
var colorToHexMap = {
  // TODO - replace with variable once https://github.com/elastic/eui/issues/2731 is closed
  default: '#d3dae6',
  primary: visColors[1],
  secondary: visColors[0],
  accent: visColors[2],
  warning: visColors[5],
  danger: visColors[9]
};
var COLORS = (0, _common.keysOf)(colorToHexMap);
exports.COLORS = COLORS;
var iconSideToClassNameMap = {
  left: 'euiBadge--iconLeft',
  right: 'euiBadge--iconRight'
};
var ICON_SIDES = (0, _common.keysOf)(iconSideToClassNameMap);
exports.ICON_SIDES = ICON_SIDES;

var EuiBadge = function EuiBadge(_ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'default' : _ref$color,
      iconType = _ref.iconType,
      _ref$iconSide = _ref.iconSide,
      iconSide = _ref$iconSide === void 0 ? 'left' : _ref$iconSide,
      className = _ref.className,
      _isDisabled = _ref.isDisabled,
      onClick = _ref.onClick,
      iconOnClick = _ref.iconOnClick,
      onClickAriaLabel = _ref.onClickAriaLabel,
      iconOnClickAriaLabel = _ref.iconOnClickAriaLabel,
      closeButtonProps = _ref.closeButtonProps,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      style = _ref.style,
      rest = _objectWithoutProperties(_ref, ["children", "color", "iconType", "iconSide", "className", "isDisabled", "onClick", "iconOnClick", "onClickAriaLabel", "iconOnClickAriaLabel", "closeButtonProps", "href", "rel", "target", "style"]);

  var isHrefValid = !href || (0, _href_validator.validateHref)(href);
  var isDisabled = _isDisabled || !isHrefValid;
  var optionalCustomStyles = style;
  var textColor = null; // TODO - replace with variable once https://github.com/elastic/eui/issues/2731 is closed

  var wcagContrastBase = 4.5; // WCAG AA contrast level

  var wcagContrast = null;
  var colorHex = null; // Check if a valid color name was provided

  try {
    if (COLORS.indexOf(color) > -1) {
      // Get the hex equivalent for the provided color name
      colorHex = colorToHexMap[color]; // Set dark or light text color based upon best contrast

      textColor = setTextColor(colorHex);
      optionalCustomStyles = _objectSpread({
        backgroundColor: colorHex,
        color: textColor
      }, optionalCustomStyles);
    } else if (color !== 'hollow') {
      // This is a custom color that is neither from the base palette nor hollow
      // Let's do our best to ensure that it provides sufficient contrast
      // Set dark or light text color based upon best contrast
      textColor = setTextColor(color); // Check the contrast

      wcagContrast = getColorContrast(textColor, color);

      if (wcagContrast < wcagContrastBase) {
        // It's low contrast, so lets show a warning in the console
        console.warn('Warning: ', color, ' badge has low contrast of ', wcagContrast.toFixed(2), '. Should be above ', wcagContrastBase, '.');
      }

      optionalCustomStyles = _objectSpread({
        backgroundColor: color,
        color: textColor
      }, optionalCustomStyles);
    }
  } catch (err) {
    handleInvalidColor(color);
  }

  var classes = (0, _classnames.default)('euiBadge', {
    'euiBadge-isClickable': (onClick || href) && !iconOnClick,
    'euiBadge-isDisabled': isDisabled,
    'euiBadge--hollow': color === 'hollow'
  }, iconSideToClassNameMap[iconSide], className);
  var closeClassNames = (0, _classnames.default)('euiBadge__icon', closeButtonProps && closeButtonProps.className);
  var Element = href && !isDisabled ? 'a' : 'button';
  var relObj = {};

  if (href && !isDisabled) {
    relObj.href = href;
    relObj.target = target;
    relObj.rel = (0, _services.getSecureRelForTarget)({
      href: href,
      target: target,
      rel: rel
    });
  }

  if (onClick) {
    relObj.onClick = onClick;
  }

  var optionalIcon = null;

  if (iconType) {
    if (iconOnClick) {
      if (!iconOnClickAriaLabel) {
        console.warn('When passing the iconOnClick props to EuiBadge, you must also provide iconOnClickAriaLabel');
      }

      optionalIcon = /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        className: "euiBadge__iconButton",
        "aria-label": iconOnClickAriaLabel,
        disabled: isDisabled,
        title: iconOnClickAriaLabel,
        onClick: iconOnClick
      }, /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, _extends({
        type: iconType,
        size: "s"
      }, closeButtonProps, {
        className: closeClassNames
      })));
    } else {
      optionalIcon = /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        type: iconType,
        size: children ? 's' : 'm',
        className: "euiBadge__icon"
      });
    }
  }

  if (onClick && !onClickAriaLabel) {
    console.warn('When passing onClick to EuiBadge, you must also provide onClickAriaLabel');
  }

  var content = /*#__PURE__*/_react.default.createElement("span", {
    className: "euiBadge__content"
  }, children && /*#__PURE__*/_react.default.createElement("span", {
    className: "euiBadge__text"
  }, children), optionalIcon);

  if (iconOnClick) {
    return onClick || href ? /*#__PURE__*/_react.default.createElement("span", {
      className: classes,
      style: optionalCustomStyles
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: "euiBadge__content"
    }, /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return /*#__PURE__*/_react.default.createElement(Element, _extends({
        className: "euiBadge__childButton",
        disabled: isDisabled,
        "aria-label": onClickAriaLabel,
        ref: ref,
        title: innerText
      }, relObj, rest), children);
    }), optionalIcon)) : /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return /*#__PURE__*/_react.default.createElement("span", _extends({
        className: classes,
        style: optionalCustomStyles,
        ref: ref,
        title: innerText
      }, rest), content);
    });
  } else if (onClick || href) {
    return /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return /*#__PURE__*/_react.default.createElement(Element, _extends({
        disabled: isDisabled,
        "aria-label": onClickAriaLabel,
        className: classes,
        style: optionalCustomStyles,
        ref: ref,
        title: innerText
      }, relObj, rest), content);
    });
  } else {
    return /*#__PURE__*/_react.default.createElement(_inner_text.EuiInnerText, null, function (ref, innerText) {
      return /*#__PURE__*/_react.default.createElement("span", _extends({
        className: classes,
        style: optionalCustomStyles,
        ref: ref,
        title: innerText
      }, rest), content);
    });
  }
};

exports.EuiBadge = EuiBadge;
EuiBadge.propTypes = {
  /**
     * Accepts any string from our icon library
     */
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),

  /**
     * The side of the badge the icon should sit
     */
  iconSide: _propTypes.default.oneOf(["left", "right"]),

  /**
     * Accepts either our palette colors (primary, secondary ..etc) or a hex value `#FFFFFF`, `#000`.
     */
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]),

  /**
     * Will override any color passed through the `color` prop.
     */
  isDisabled: _propTypes.default.bool,

  /**
     * Props passed to the close button.
     */
  closeButtonProps: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Will apply an onclick to icon within the badge
     */
  iconOnClick: _propTypes.default.func,

  /**
     * Aria label applied to the iconOnClick button
     */
  iconOnClickAriaLabel: _propTypes.default.any,

  /**
     * Will apply an onclick to the badge itself
     */
  onClick: _propTypes.default.func,

  /**
     * Aria label applied to the onClick button
     */
  onClickAriaLabel: _propTypes.default.any,
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  rel: _propTypes.default.string
};

function getColorContrast(textColor, color) {
  var contrastValue = _chromaJs.default.contrast(textColor, color);

  return contrastValue;
}

function setTextColor(bgColor) {
  var textColor = _services.isColorDark.apply(void 0, _toConsumableArray((0, _chromaJs.default)(bgColor).rgb())) ? colorGhost : colorInk;
  return textColor;
}

function handleInvalidColor(color) {
  var isNamedColor = color && COLORS.includes(color) || color === 'hollow';
  var isValidColorString = color && (0, _utils.chromaValid)((0, _utils.parseColor)(color) || '');

  if (!isNamedColor && !isValidColorString) {
    console.warn('EuiBadge expects a valid color. This can either be a three or six ' + "character hex value, rgb(a) value, hsv value, hollow, or one of the following: ".concat(COLORS, ". ") + "Instead got ".concat(color, "."));
  }
}