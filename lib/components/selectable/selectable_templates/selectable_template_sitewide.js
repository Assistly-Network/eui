"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSelectableTemplateSitewide = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../../services");

var _selectable = require("../selectable");

var _popover = require("../../popover");

var _popover2 = require("../../popover/popover");

var _i18n = require("../../i18n");

var _selectable_message = require("../selectable_message");

var _loading = require("../../loading");

var _selectable_template_sitewide_option = require("./selectable_template_sitewide_option");

var _breakpoint = require("../../../services/breakpoint");

var _utils = require("../../color_picker/utils");

var _spacer = require("../../spacer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiSelectableTemplateSitewide = function EuiSelectableTemplateSitewide(_ref) {
  var children = _ref.children,
      className = _ref.className,
      options = _ref.options,
      popoverProps = _ref.popoverProps,
      popoverTitle = _ref.popoverTitle,
      popoverFooter = _ref.popoverFooter,
      searchProps = _ref.searchProps,
      listProps = _ref.listProps,
      isLoading = _ref.isLoading,
      popoverButton = _ref.popoverButton,
      popoverButtonBreakpoints = _ref.popoverButtonBreakpoints,
      rest = _objectWithoutProperties(_ref, ["children", "className", "options", "popoverProps", "popoverTitle", "popoverFooter", "searchProps", "listProps", "isLoading", "popoverButton", "popoverButtonBreakpoints"]);

  /**
   * Breakpoint management
   */
  var _useState = (0, _react.useState)(typeof window !== 'undefined' && popoverButtonBreakpoints ? (0, _breakpoint.isWithinBreakpoints)(window.innerWidth, popoverButtonBreakpoints) : true),
      _useState2 = _slicedToArray(_useState, 2),
      canShowPopoverButton = _useState2[0],
      setCanShowPopoverButton = _useState2[1];

  var functionToCallOnWindowResize = (0, _utils.throttle)(function () {
    var newWidthIsWithinBreakpoint = popoverButtonBreakpoints ? (0, _breakpoint.isWithinBreakpoints)(window.innerWidth, popoverButtonBreakpoints) : true;

    if (newWidthIsWithinBreakpoint !== canShowPopoverButton) {
      setCanShowPopoverButton(newWidthIsWithinBreakpoint);
    } // reacts every 50ms to resize changes and always gets the final update

  }, 50); // Add window resize handlers

  (0, _react.useEffect)(function () {
    window.addEventListener('resize', functionToCallOnWindowResize);
    return function () {
      window.removeEventListener('resize', functionToCallOnWindowResize);
    };
  }, [functionToCallOnWindowResize]);
  /**
   * i18n text
   */

  var _useEuiI18n = (0, _i18n.useEuiI18n)(['euiSelectableTemplateSitewide.searchPlaceholder'], ['Search for anything...']),
      _useEuiI18n2 = _slicedToArray(_useEuiI18n, 1),
      searchPlaceholder = _useEuiI18n2[0];
  /**
   * Popover helpers
   */


  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      popoverRef = _useState4[0],
      setPopoverRef = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      popoverIsOpen = _useState6[0],
      setPopoverIsOpen = _useState6[1];

  var _popoverProps = _objectSpread({}, popoverProps),
      _closePopover = _popoverProps.closePopover,
      panelRef = _popoverProps.panelRef,
      width = _popoverProps.width,
      popoverRest = _objectWithoutProperties(_popoverProps, ["closePopover", "panelRef", "width"]);

  var closePopover = function closePopover() {
    setPopoverIsOpen(false);
    _closePopover && _closePopover();
  };

  var togglePopover = function togglePopover() {
    setPopoverIsOpen(!popoverIsOpen);
  }; // Width applied to the internal div


  var popoverWidth = width || 600;
  var setPanelRef = (0, _services.useCombinedRefs)([setPopoverRef, panelRef]);
  /**
   * Search helpers
   */

  var searchOnFocus = function searchOnFocus(e) {
    searchProps && searchProps.onFocus && searchProps.onFocus(e);
    if (canShowPopoverButton) return;
    setPopoverIsOpen(true);
  };

  var onSearchInput = function onSearchInput(e) {
    searchProps && searchProps.onInput && searchProps.onInput(e);
    setPopoverIsOpen(true);
  };

  var searchOnBlur = function searchOnBlur(e) {
    searchProps && searchProps.onBlur && searchProps.onBlur(e);
    if (canShowPopoverButton) return;

    if (!(popoverRef === null || popoverRef === void 0 ? void 0 : popoverRef.contains(e.relatedTarget))) {
      setPopoverIsOpen(false);
    }
  };
  /**
   * Classes
   */


  var classes = (0, _classnames.default)('euiSelectableTemplateSitewide', className);
  var searchClasses = (0, _classnames.default)('euiSelectableTemplateSitewide__search', searchProps && searchProps.className);
  var listClasses = (0, _classnames.default)('euiSelectableTemplateSitewide__list', listProps && listProps.className);
  /**
   * List options
   */

  var formattedOptions = (0, _selectable_template_sitewide_option.euiSelectableTemplateSitewideFormatOptions)(options);

  var loadingMessage = /*#__PURE__*/_react.default.createElement(_selectable_message.EuiSelectableMessage, {
    style: {
      minHeight: 300
    }
  }, /*#__PURE__*/_react.default.createElement(_loading.EuiLoadingSpinner, {
    size: "l"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiSelectableTemplateSitewide.loadingResults",
    default: "Loading results"
  })));

  var emptyMessage = /*#__PURE__*/_react.default.createElement(_selectable_message.EuiSelectableMessage, {
    style: {
      minHeight: 300
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiSelectableTemplateSitewide.noResults",
    default: "No results available"
  })));
  /**
   * Changes based on showing the `popoverButton` if provided.
   * This will move the search input into the popover
   * and use the passed `popoverButton` as the popover trigger.
   */


  var popoverTrigger;

  if (popoverButton && canShowPopoverButton) {
    popoverTrigger = /*#__PURE__*/_react.default.cloneElement(popoverButton, _objectSpread(_objectSpread({}, popoverButton.props), {}, {
      onClick: togglePopover,
      onKeyDown: function onKeyDown(e) {
        // Selectable preventsDefault on Enter which kills browser controls for pressing the button
        e.stopPropagation();
      }
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_selectable.EuiSelectable, _extends({
    isLoading: isLoading,
    options: formattedOptions,
    renderOption: _selectable_template_sitewide_option.euiSelectableTemplateSitewideRenderOptions,
    singleSelection: true,
    searchProps: _objectSpread(_objectSpread({
      placeholder: searchPlaceholder,
      isClearable: true
    }, searchProps), {}, {
      onFocus: searchOnFocus,
      onBlur: searchOnBlur,
      onInput: onSearchInput,
      className: searchClasses
    }),
    listProps: _objectSpread(_objectSpread({
      rowHeight: 68,
      showIcons: false,
      onFocusBadge: {
        iconSide: 'right',
        children: /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
          token: "euiSelectableTemplateSitewide.onFocusBadgeGoTo",
          default: "Go to"
        })
      }
    }, listProps), {}, {
      className: listClasses
    }),
    loadingMessage: loadingMessage,
    emptyMessage: emptyMessage,
    noMatchesMessage: emptyMessage
  }, rest, {
    className: classes,
    searchable: true
  }), function (list, search) {
    return /*#__PURE__*/_react.default.createElement(_popover2.EuiPopover, _extends({
      panelPaddingSize: "none",
      isOpen: popoverIsOpen,
      ownFocus: !!popoverTrigger,
      display: popoverTrigger ? 'inlineBlock' : 'block'
    }, popoverRest, {
      panelRef: setPanelRef,
      button: popoverTrigger ? popoverTrigger : search,
      closePopover: closePopover
    }), /*#__PURE__*/_react.default.createElement("div", {
      style: {
        width: popoverWidth,
        maxWidth: '100%'
      }
    }, popoverTitle || popoverTrigger ? /*#__PURE__*/_react.default.createElement(_popover.EuiPopoverTitle, {
      paddingSize: "s"
    }, popoverTitle, popoverTitle && search && /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, null), search) : undefined, list, popoverFooter && /*#__PURE__*/_react.default.createElement(_popover.EuiPopoverFooter, {
      paddingSize: "s"
    }, popoverFooter)));
  });
};

exports.EuiSelectableTemplateSitewide = EuiSelectableTemplateSitewide;
EuiSelectableTemplateSitewide.propTypes = {
  /**
     * Extends the typical EuiSelectable #Options with the addition of pre-composed elements
     * such as `icon`, `avatar`and `meta`
     */
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
       * Displayed on the left (`prepend`).
       * Object of `EuiIconProps` for display of the solution/application's logo
       */
    icon: _propTypes.default.shape({
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string,

      /**
           * One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value.
           * Note that coloring only works if your SVG is removed of fill attributes.
           */
      color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]),

      /**
           * Descriptive title for naming the icon based on its use
           */
      title: _propTypes.default.string,

      /**
           * A unique identifier for the title element
           */
      titleId: _propTypes.default.string,

      /**
           * Its value should be one or more element IDs
           */
      "aria-labelledby": _propTypes.default.string,

      /**
           * Callback when the icon has been loaded & rendered
           */
      onIconLoad: _propTypes.default.func
    }),

    /**
       * Displayed on the right (`append`).
       * Object of `EuiAvatarProps` for display of the space (default) or user
       */
    avatar: _propTypes.default.shape({
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string,

      /**
             * Custom initials (max 2 characters).
             * By default will take the first character (of each word).
             */
      initials: _propTypes.default.string,

      /**
             * Specify how many characters to show (1 or 2).
             * By default, will show based on number of words (max first 2).
             */
      initialsLength: _propTypes.default.oneOf([1, 2]),

      /**
             * Path to an image to display instead of initials
             */
      imageUrl: _propTypes.default.string,

      /**
           * Any EUI glyph, logo or custom icon to display instead of initials
           */
      iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]),

      /**
           * Manually change icon size
           */
      iconSize: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

      /**
           * Manually change icon color
           */
      iconColor: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]).isRequired, _propTypes.default.oneOf([null])]),

      /**
           * Full name of avatar for title attribute and calculating initial if not provided
           */
      name: _propTypes.default.string.isRequired,

      /**
           * Accepts hex values like `#FFFFFF`, `#000` otherwise a viz palette color will be assigned.
           * Or pass `'plain'` for an empty shade or `null` to remove entirely and the text/icon color will `inherit`
           */
      color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["plain", null])]),

      /**
           * The type of avatar mainly controlling the shape.
           * `user` = circle
           * `space` = rounded square
           */
      type: _propTypes.default.oneOf(["space", "user"]),
      size: _propTypes.default.oneOf(["s", "m", "l", "xl"]),

      /**
           * Grays out the avatar to simulate being disabled
           */
      isDisabled: _propTypes.default.bool
    }),

    /**
       * An array of inline #MetaData displayed beneath the label and separated by bullets.
       */
    meta: _propTypes.default.arrayOf(_propTypes.default.shape({
      /**
         * Required to display the metadata
         */
      text: _propTypes.default.string.isRequired,

      /**
         * Styles the metadata according to Elastic's schema.
         * Can be one of 'application', 'deployment', 'article', 'case', 'platform',
         * or a custom string to associate with your own schema.
         * Appends the string to the class name as `euiSelectableTemplateSitewide__optionMeta--[type]`
         */
      type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["application", "deployment", "article", "case", "platform"]), _propTypes.default.string.isRequired]),

      /**
         * Will wrap the meta tag in EuiHighlight to mark the portions that match the search text
         */
      highlightSearchString: _propTypes.default.bool,
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string
    }).isRequired),

    /**
       * Optional `boolean`.
       * Set to `true` to indicate object is just a grouping label, not a selectable item
       */
    isGroupLabel: _propTypes.default.oneOfType([_propTypes.default.oneOf([true]).isRequired, _propTypes.default.oneOf([false])]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,

    /**
       * Visible label of option.
       * Must be unique across items if `key` is not supplied
       */
    label: _propTypes.default.string,

    /**
       * Optionally change the searchable term by passing a different string other than the `label`.
       * Best used when creating a custom `optionRender` to separate the label from metadata but allowing to search on both
       */
    searchableLabel: _propTypes.default.string,

    /**
       * Must be unique across items.
       * Will be used to match options instead of `label`
       */
    key: _propTypes.default.string,

    /**
       * Leave `undefined` to indicate not selected,
       * 'on' to indicate inclusion and
       * 'off' to indicate exclusion
       */
    checked: _propTypes.default.oneOf(["on", "off", undefined]),
    disabled: _propTypes.default.bool,

    /**
       * Node to add between the selection icon and the label
       */
    prepend: _propTypes.default.node,

    /**
       * Node to add to the far right of the item
       */
    append: _propTypes.default.node,
    ref: _propTypes.default.func
  }).isRequired).isRequired,

  /**
     * Override some of the EuiPopover props housing the list.
     * The default width is `600`
     */
  popoverProps: _propTypes.default.shape({
    width: _propTypes.default.any
  }),

  /**
     * Optionally provide a title for the popover
     */
  popoverTitle: _propTypes.default.node,

  /**
     * Optionally provide a footer for the popover
     */
  popoverFooter: _propTypes.default.node,

  /**
     * Optionally provide a separate button for toggling the display of the popover.
     */
  popoverButton: _propTypes.default.element,

  /**
     * Pass an array of named breakpoints for which to show the `popoverButton`.
     * If `undefined`, the `popoverButton` will always show (if provided)
     */
  popoverButtonBreakpoints: _propTypes.default.arrayOf(_propTypes.default.oneOf(["xs", "s", "m", "l", "xl"]).isRequired)
};