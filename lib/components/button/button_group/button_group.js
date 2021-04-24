"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiButtonGroup = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _accessibility = require("../../accessibility");

var _button_group_button = require("./button_group_button");

var _button = require("../button");

var _services = require("../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var groupSizeToClassNameMap = {
  s: '--small',
  m: '--medium',
  compressed: '--compressed'
};

var EuiButtonGroup = function EuiButtonGroup(_ref) {
  var className = _ref.className,
      _ref$buttonSize = _ref.buttonSize,
      buttonSize = _ref$buttonSize === void 0 ? 's' : _ref$buttonSize,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text' : _ref$color,
      _ref$idSelected = _ref.idSelected,
      idSelected = _ref$idSelected === void 0 ? '' : _ref$idSelected,
      _ref$idToSelectedMap = _ref.idToSelectedMap,
      idToSelectedMap = _ref$idToSelectedMap === void 0 ? {} : _ref$idToSelectedMap,
      _ref$isDisabled = _ref.isDisabled,
      isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
      _ref$isFullWidth = _ref.isFullWidth,
      isFullWidth = _ref$isFullWidth === void 0 ? false : _ref$isFullWidth,
      _ref$isIconOnly = _ref.isIconOnly,
      isIconOnly = _ref$isIconOnly === void 0 ? false : _ref$isIconOnly,
      legend = _ref.legend,
      name = _ref.name,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'single' : _ref$type,
      rest = _objectWithoutProperties(_ref, ["className", "buttonSize", "color", "idSelected", "idToSelectedMap", "isDisabled", "isFullWidth", "isIconOnly", "legend", "name", "onChange", "options", "type"]);

  // Compressed style can't support `ghost` color because it's more like a form field than a button
  var badColorCombo = buttonSize === 'compressed' && color === 'ghost';
  var resolvedColor = badColorCombo ? 'text' : color;

  if (badColorCombo) {
    console.warn('EuiButtonGroup of compressed size does not support the ghost color. It will render as text instead.');
  }

  var classes = (0, _classnames.default)('euiButtonGroup', "euiButtonGroup".concat(groupSizeToClassNameMap[buttonSize]), "euiButtonGroup".concat(_button.colorToClassNameMap[resolvedColor]), {
    'euiButtonGroup--fullWidth': isFullWidth,
    'euiButtonGroup--isDisabled': isDisabled
  }, className);
  var typeIsSingle = type === 'single';
  var nameIfSingle = name || (0, _services.htmlIdGenerator)()();
  return /*#__PURE__*/_react.default.createElement("fieldset", _extends({
    className: classes
  }, rest, {
    disabled: isDisabled
  }), /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("legend", null, legend)), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiButtonGroup__buttons"
  }, options.map(function (option, index) {
    return /*#__PURE__*/_react.default.createElement(_button_group_button.EuiButtonGroupButton, _extends({
      key: index,
      name: nameIfSingle,
      isDisabled: isDisabled
    }, option, {
      element: typeIsSingle ? 'label' : 'button',
      isSelected: typeIsSingle ? option.id === idSelected : idToSelectedMap[option.id],
      color: resolvedColor,
      size: buttonSize,
      isIconOnly: isIconOnly,
      onChange: onChange
    }));
  })));
};

exports.EuiButtonGroup = EuiButtonGroup;
EuiButtonGroup.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Typical sizing is `s`. Medium `m` size should be reserved for major features.
     * `compressed` is meant to be used alongside and within compressed forms.
     */
  buttonSize: _propTypes.default.oneOf(["s", "m", "compressed"]),
  isDisabled: _propTypes.default.bool,

  /**
     * Expands the whole group to the full width of the container.
     * Each button gets equal widths no matter the content
     */
  isFullWidth: _propTypes.default.bool,

  /**
     * Hides the label to only show the `iconType` provided by the `option`
     */
  isIconOnly: _propTypes.default.bool,

  /**
     * A hidden group title (required for accessibility)
     */
  legend: _propTypes.default.string.isRequired,

  /**
     * Compressed styles don't support `ghost` color (Color will be changed to "text")
     */
  color: _propTypes.default.oneOf(["primary", "secondary", "warning", "danger", "ghost", "text"]),

  /**
           * Default for `type` is single so it can also be excluded
           */

  /**
     * Actual type is `'single' | 'multi'`.
     * Determines how the selection of the group should be handled.
     * With `'single'` only one option can be selected at a time (similar to radio group).
     * With `'multi'` multiple options selected (similar to checkbox group).
     */
  type: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["single", "multi"]), _propTypes.default.oneOf(["single"])]), _propTypes.default.oneOf(["multi"])]),

  /**
     * An array of #EuiButtonGroupOptionProps
     */
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Each option must have a unique `id` for maintaining selection
       */
    id: _propTypes.default.string.isRequired,

    /**
       * Each option must have a `label` even for icons which will be applied as the `aria-label`
       */
    label: _propTypes.default.node.isRequired,
    isDisabled: _propTypes.default.bool,

    /**
       * The value of the radio input.
       */
    value: _propTypes.default.any,

    /**
       * The type of the underlying HTML button
       */
    type: _propTypes.default.oneOf(["button", "submit", "reset"]),

    /**
       * Any `type` accepted by EuiIcon
       */
    iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),

    /**
       * Can only be one side `left` or `right`
       */
    iconSide: _propTypes.default.oneOf(["left", "right"]),
    isLoading: _propTypes.default.bool,

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
    className: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),
    "aria-label": _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]),
    "data-test-subj": _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string])
  }).isRequired).isRequired,

  /**
           * The `name` attribute for radio inputs;
           * Defaults to a random string
           */
  name: _propTypes.default.string,

  /**
           * Styles the selected option to look selected (usually with `fill`)
           * Required by and only used in `type='single'`.
           */
  idSelected: _propTypes.default.string,

  /**
           * Multi: Returns the `id` of the clicked option
           */

  /**
           * Single: Returns the `id` of the clicked option and the `value`
           */
  onChange: _propTypes.default.func,

  /**
           * A map of `id`s as keys with the selected boolean values.
           * Required by and only used in `type='multi'`.
           */
  idToSelectedMap: _propTypes.default.shape({})
};