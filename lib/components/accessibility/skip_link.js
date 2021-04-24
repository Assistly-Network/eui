"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSkipLink = exports.POSITIONS = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../button/button");

var _screen_reader = require("../accessibility/screen_reader");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var POSITIONS = ['static', 'fixed', 'absolute'];
exports.POSITIONS = POSITIONS;

var EuiSkipLink = function EuiSkipLink(_ref) {
  var destinationId = _ref.destinationId,
      tabIndex = _ref.tabIndex,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? 'static' : _ref$position,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["destinationId", "tabIndex", "position", "children", "className"]);

  var classes = (0, _classnames.default)('euiSkipLink', ["euiSkipLink--".concat(position)], className); // Create the `href` from `destinationId`

  var optionalProps = {};

  if (destinationId) {
    optionalProps = {
      href: "#".concat(destinationId)
    };
  }

  return /*#__PURE__*/_react.default.createElement(_screen_reader.EuiScreenReaderOnly, {
    showOnFocus: true
  }, /*#__PURE__*/_react.default.createElement(_button.EuiButton, _extends({
    className: classes,
    tabIndex: position === 'fixed' ? 0 : tabIndex,
    size: "s",
    fill: true
  }, optionalProps, rest), children));
};

exports.EuiSkipLink = EuiSkipLink;
EuiSkipLink.propTypes = {
  href: _propTypes.default.string,
  onClick: _propTypes.default.func,

  /**
     * Change the display position of the element when focused.
     * If 'fixed', the link will be fixed to the top left of the viewport
     */

  /**
     * Change the display position of the element when focused.
     * If 'fixed', the link will be fixed to the top left of the viewport
     */
  position: _propTypes.default.oneOf(["static", "fixed", "absolute"]),

  /**
     * Typically an anchor id (e.g. `a11yMainContent`), the value provided
     * will be prepended with a hash `#` and used as the link `href`
     */

  /**
     * Typically an anchor id (e.g. `a11yMainContent`), the value provided
     * will be prepended with a hash `#` and used as the link `href`
     */
  destinationId: _propTypes.default.string.isRequired,

  /**
     * When position is fixed, this is forced to `0`
     */

  /**
     * When position is fixed, this is forced to `0`
     */
  tabIndex: _propTypes.default.number,
  children: _propTypes.default.node,

  /**
     * Make button a solid color for prominence
     */
  fill: _propTypes.default.bool,

  /**
     * Any of our named colors
     */
  color: _propTypes.default.oneOf(["primary", "secondary", "warning", "danger", "ghost", "text"]),

  /**
     * Use size `s` in confined spaces
     */
  size: _propTypes.default.oneOf(["s", "m"]),

  /**
     * `disabled` is also allowed
     */
  isDisabled: _propTypes.default.bool,

  /**
     * Applies the boolean state as the `aria-pressed` property to create a toggle button.
     * *Only use when the readable text does not change between states.*
     */
  isSelected: _propTypes.default.bool,

  /**
     * Extends the button to 100% width
     */
  fullWidth: _propTypes.default.bool,

  /**
     * Override the default minimum width
     */
  minWidth: _propTypes.default.any,

  /**
     * Force disables the button and changes the icon to a loading spinner
     */
  isLoading: _propTypes.default.bool,

  /**
     * Object of props passed to the <span/> wrapping the button's content
     */
  contentProps: _propTypes.default.any,
  style: _propTypes.default.any,

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
  "data-test-subj": _propTypes.default.string,
  buttonRef: _propTypes.default.any
};