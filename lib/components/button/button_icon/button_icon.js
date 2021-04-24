"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButtonIcon = exports.SIZES = exports.COLORS = exports.DISPLAYS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../../services");

var _common = require("../../common");

var _icon = require("../../icon");

var _href_validator = require("../../../services/security/href_validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var displayToClassNameMap = {
  base: null,
  empty: 'euiButtonIcon--empty',
  fill: 'euiButtonIcon--fill'
};
var DISPLAYS = (0, _common.keysOf)(displayToClassNameMap);
exports.DISPLAYS = DISPLAYS;
var colorToClassNameMap = {
  accent: 'euiButtonIcon--accent',
  danger: 'euiButtonIcon--danger',
  ghost: 'euiButtonIcon--ghost',
  primary: 'euiButtonIcon--primary',
  subdued: 'euiButtonIcon--subdued',
  success: 'euiButtonIcon--success',
  text: 'euiButtonIcon--text',
  warning: 'euiButtonIcon--warning'
};
var COLORS = (0, _common.keysOf)(colorToClassNameMap);
exports.COLORS = COLORS;
var sizeToClassNameMap = {
  xs: 'euiButtonIcon--xSmall',
  s: 'euiButtonIcon--small',
  m: 'euiButtonIcon--medium'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

var EuiButtonIcon = function EuiButtonIcon(_ref) {
  var className = _ref.className,
      iconType = _ref.iconType,
      _ref$iconSize = _ref.iconSize,
      iconSize = _ref$iconSize === void 0 ? 'm' : _ref$iconSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'primary' : _ref$color,
      _isDisabled = _ref.isDisabled,
      href = _ref.href,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'empty' : _ref$display,
      target = _ref.target,
      rel = _ref.rel,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'xs' : _ref$size,
      buttonRef = _ref.buttonRef,
      isSelected = _ref.isSelected,
      rest = _objectWithoutProperties(_ref, ["className", "iconType", "iconSize", "color", "isDisabled", "href", "type", "display", "target", "rel", "size", "buttonRef", "isSelected"]);

  var isHrefValid = !href || (0, _href_validator.validateHref)(href);
  var isDisabled = _isDisabled || !isHrefValid;
  var ariaHidden = rest['aria-hidden'];
  var isAriaHidden = ariaHidden === 'true' || ariaHidden === true;

  if (!rest['aria-label'] && !rest['aria-labelledby'] && !isAriaHidden) {
    console.warn("EuiButtonIcon requires aria-label or aria-labelledby to be specified because icon-only\n      buttons are screen-reader-inaccessible without them.");
  }

  var classes = (0, _classnames.default)('euiButtonIcon', {
    'euiButtonIcon-isDisabled': isDisabled
  }, colorToClassNameMap[color], display && displayToClassNameMap[display], size && sizeToClassNameMap[size], className); // Add an icon to the button if one exists.

  var buttonIcon;

  if (iconType) {
    buttonIcon = /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
      className: "euiButtonIcon__icon",
      type: iconType,
      size: iconSize,
      "aria-hidden": "true"
    });
  } // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
  // this is a button and piggyback off its disabled styles.


  if (href && !isDisabled) {
    var secureRel = (0, _services.getSecureRelForTarget)({
      href: href,
      target: target,
      rel: rel
    });
    return /*#__PURE__*/_react.default.createElement("a", _extends({
      tabIndex: isAriaHidden ? -1 : undefined,
      className: classes,
      href: href,
      target: target,
      rel: secureRel,
      ref: buttonRef
    }, rest), buttonIcon);
  }

  var buttonType;
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    tabIndex: isAriaHidden ? -1 : undefined,
    disabled: isDisabled,
    className: classes,
    "aria-pressed": isSelected,
    type: type,
    ref: buttonRef
  }, rest), buttonIcon);
};

exports.EuiButtonIcon = EuiButtonIcon;
EuiButtonIcon.propTypes = {
  type: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.oneOf(["submit", "reset", "button"])]),
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]).isRequired,

  /**
     * Any of the named color palette options.
     * **`subdued` set to be DEPRECATED**
     */

  /**
     * Any of the named color palette options.
     * **`subdued` set to be DEPRECATED**
     */
  color: _propTypes.default.oneOf(["accent", "danger", "ghost", "primary", "subdued", "success", "text", "warning"]),
  "aria-label": _propTypes.default.string,
  "aria-labelledby": _propTypes.default.string,
  isDisabled: _propTypes.default.bool,

  /**
     * Overall size of button.
     * Matches the sizes of other EuiButtons
     */

  /**
     * Overall size of button.
     * Matches the sizes of other EuiButtons
     */
  size: _propTypes.default.oneOf(["xs", "s", "m"]),

  /**
     * Size of the icon only.
     * This will not affect the overall size of the button
     */
  iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

  /**
     * Applies the boolean state as the `aria-pressed` property to create a toggle button.
     * *Only use when the readable text does not change between states.*
     */

  /**
     * Applies the boolean state as the `aria-pressed` property to create a toggle button.
     * *Only use when the readable text does not change between states.*
     */
  isSelected: _propTypes.default.bool,

  /**
     * Sets the display style for matching other EuiButton types.
     * `base` is equivelant to a typical EuiButton
     * `fill` is equivelant to a filled EuiButton
     * `empty` (default) is equivelant to an EuiButtonEmpty
     */

  /**
     * Sets the display style for matching other EuiButton types.
     * `base` is equivelant to a typical EuiButton
     * `fill` is equivelant to a filled EuiButton
     * `empty` (default) is equivelant to an EuiButtonEmpty
     */
  display: _propTypes.default.oneOf(["base", "empty", "fill"]),
  className: _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  buttonRef: _propTypes.default.any
};