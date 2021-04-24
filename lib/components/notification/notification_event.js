"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiNotificationEvent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _notification_event_meta = require("./notification_event_meta");

var _notification_event_messages = require("./notification_event_messages");

var _notification_event_read_button = require("./notification_event_read_button");

var _button = require("../button");

var _link = require("../link");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var EuiNotificationEvent = function EuiNotificationEvent(_ref) {
  var id = _ref.id,
      type = _ref.type,
      severity = _ref.severity,
      badgeColor = _ref.badgeColor,
      iconType = _ref.iconType,
      iconAriaLabel = _ref.iconAriaLabel,
      time = _ref.time,
      title = _ref.title,
      isRead = _ref.isRead,
      primaryAction = _ref.primaryAction,
      primaryActionProps = _ref.primaryActionProps,
      messages = _ref.messages,
      onRead = _ref.onRead,
      onOpenContextMenu = _ref.onOpenContextMenu,
      onClickTitle = _ref.onClickTitle,
      onClickPrimaryAction = _ref.onClickPrimaryAction,
      _ref$headingLevel = _ref.headingLevel,
      headingLevel = _ref$headingLevel === void 0 ? 'h2' : _ref$headingLevel;
  var classes = (0, _classnames.default)('euiNotificationEvent', {
    'euiNotificationEvent--withReadState': typeof isRead === 'boolean'
  });
  var classesTitle = (0, _classnames.default)('euiNotificationEvent__title', {
    'euiNotificationEvent__title--isRead': isRead
  });
  var randomHeadingId = (0, _services.htmlIdGenerator)()();
  var titleProps = {
    id: randomHeadingId,
    className: classesTitle,
    'data-test-subj': "".concat(id, "-notificationEventTitle")
  };
  return /*#__PURE__*/_react.default.createElement("article", {
    "aria-labelledby": randomHeadingId,
    className: classes,
    key: id
  }, typeof isRead === 'boolean' && /*#__PURE__*/_react.default.createElement("div", {
    className: "euiNotificationEvent__readButton"
  }, /*#__PURE__*/_react.default.createElement(_notification_event_read_button.EuiNotificationEventReadButton, {
    isRead: isRead,
    onClick: function onClick() {
      return onRead === null || onRead === void 0 ? void 0 : onRead(id, isRead);
    },
    eventName: title,
    id: id
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiNotificationEvent__content"
  }, /*#__PURE__*/_react.default.createElement(_notification_event_meta.EuiNotificationEventMeta, {
    id: id,
    type: type,
    severity: severity,
    badgeColor: badgeColor,
    iconType: iconType,
    iconAriaLabel: iconAriaLabel,
    time: time,
    onOpenContextMenu: onOpenContextMenu ? function () {
      return onOpenContextMenu(id);
    } : undefined,
    eventName: title
  }), onClickTitle ? /*#__PURE__*/_react.default.createElement(_link.EuiLink, _extends({
    onClick: function onClick() {
      return onClickTitle(id);
    }
  }, titleProps), /*#__PURE__*/(0, _react.createElement)(headingLevel, null, title)) : /*#__PURE__*/(0, _react.createElement)(headingLevel, titleProps, title), /*#__PURE__*/_react.default.createElement(_notification_event_messages.EuiNotificationEventMessages, {
    messages: messages,
    eventName: title
  }), onClickPrimaryAction && primaryAction && /*#__PURE__*/_react.default.createElement("div", {
    className: "euiNotificationEvent__primaryAction"
  }, /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, _extends({
    flush: "left",
    size: "s"
  }, primaryActionProps, {
    onClick: function onClick() {
      return onClickPrimaryAction === null || onClickPrimaryAction === void 0 ? void 0 : onClickPrimaryAction(id);
    },
    "data-test-subj": "".concat(id, "-notificationEventPrimaryAction")
  }), primaryAction))));
};

exports.EuiNotificationEvent = EuiNotificationEvent;
EuiNotificationEvent.propTypes = {
  /**
     * Type of event (e.g. "Alert", "Cloud", etc..). Shows inside a badge.
     */
  type: _propTypes.default.string.isRequired,

  /**
     * Type of severity (e.g. "Critical", "Warning", etc..). Shows as a text after the `type` following the format "Alert: Critical".
     */
  severity: _propTypes.default.string,

  /**
     * Accepts either our palette colors (primary, secondary ..etc) or a hex value `#FFFFFF`, `#000`.
     */
  badgeColor: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]),

  /**
     * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
     */
  iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),

  /**
     * Specify an `aria-label` for the icon.
     * If no `aria-label` is passed we assume the icon is purely decorative.
     */
  iconAriaLabel: _propTypes.default.string,

  /**
     * Indicates when the event was received.
     */
  time: _propTypes.default.node.isRequired,
  "aria-label": _propTypes.default.string,
  "aria-labelledby": _propTypes.default.string,

  /**
     * Size of the icon only.
     * This will not affect the overall size of the button
     */
  iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

  /**
     * Sets the display style for matching other EuiButton types.
     * `base` is equivelant to a typical EuiButton
     * `fill` is equivelant to a filled EuiButton
     * `empty` (default) is equivelant to an EuiButtonEmpty
     */
  display: _propTypes.default.oneOf(["base", "empty", "fill"]),
  className: _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * A unique identifier
       */
  id: _propTypes.default.string.isRequired,

  /**
       * The title of the event.
       */
  title: _propTypes.default.string.isRequired,

  /**
       * The heading level of the title.
       */
  headingLevel: _propTypes.default.oneOf(["h2", "h3", "h4", "h5", "h6"]),

  /**
       * Returns the `id` and applies an `onClick` handler to the title.
       */
  onClickTitle: _propTypes.default.func,

  /**
       * The label of the primary action
       */
  primaryAction: _propTypes.default.string,

  /**
       * Apply more props to the `primaryAction` button. See #EuiPrimaryActionProps.
       */
  primaryActionProps: _propTypes.default.shape({
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

  /**
       * Returns the `id` and applies an `onClick` handler to the `primaryAction`.
       */
  onClickPrimaryAction: _propTypes.default.func,

  /**
       * Notification messages as an array of strings. More than one message wraps in an accordion.
       */
  messages: _propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired,

  /**
       * Shows an indicator of the read state of the event. Leave as `undefined` to hide the indicator.
       */
  isRead: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.oneOf([undefined])]),

  /**
       * Returns the `id` and `isRead` state. Applies an `onClick` handler to the `read` indicator.
       */
  onRead: _propTypes.default.func,

  /**
       * Provided the `id` of the event must return an array of #EuiContextMenuItem elements.
       */
  onOpenContextMenu: _propTypes.default.func
};