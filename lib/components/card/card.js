"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCard = exports.LAYOUT_ALIGNMENTS = exports.ALIGNMENTS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _services = require("../../services");

var _text = require("../text");

var _title = require("../title");

var _beta_badge = require("../badge/beta_badge");

var _card_select = require("./card_select");

var _accessibility = require("../../services/accessibility");

var _href_validator = require("../../services/security/href_validator");

var _panel = require("../panel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var textAlignToClassNameMap = {
  left: 'euiCard--leftAligned',
  center: 'euiCard--centerAligned',
  right: 'euiCard--rightAligned'
};
var ALIGNMENTS = (0, _common.keysOf)(textAlignToClassNameMap);
exports.ALIGNMENTS = ALIGNMENTS;
var layoutToClassNameMap = {
  vertical: '',
  horizontal: 'euiCard--horizontal'
};
var LAYOUT_ALIGNMENTS = (0, _common.keysOf)(layoutToClassNameMap);
/**
 * Certain props are only allowed when the layout is vertical
 */

exports.LAYOUT_ALIGNMENTS = LAYOUT_ALIGNMENTS;

var EuiCard = function EuiCard(_ref) {
  var className = _ref.className,
      description = _ref.description,
      _isDisabled = _ref.isDisabled,
      title = _ref.title,
      _ref$titleElement = _ref.titleElement,
      titleElement = _ref$titleElement === void 0 ? 'span' : _ref$titleElement,
      _ref$titleSize = _ref.titleSize,
      titleSize = _ref$titleSize === void 0 ? 's' : _ref$titleSize,
      icon = _ref.icon,
      image = _ref.image,
      children = _ref.children,
      footer = _ref.footer,
      onClick = _ref.onClick,
      href = _ref.href,
      rel = _ref.rel,
      target = _ref.target,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'center' : _ref$textAlign,
      betaBadgeLabel = _ref.betaBadgeLabel,
      betaBadgeTooltipContent = _ref.betaBadgeTooltipContent,
      betaBadgeTitle = _ref.betaBadgeTitle,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'vertical' : _ref$layout,
      selectable = _ref.selectable,
      display = _ref.display,
      paddingSize = _ref.paddingSize,
      rest = _objectWithoutProperties(_ref, ["className", "description", "isDisabled", "title", "titleElement", "titleSize", "icon", "image", "children", "footer", "onClick", "href", "rel", "target", "textAlign", "betaBadgeLabel", "betaBadgeTooltipContent", "betaBadgeTitle", "layout", "selectable", "display", "paddingSize"]);

  var isHrefValid = !href || (0, _href_validator.validateHref)(href);
  var isDisabled = _isDisabled || !isHrefValid;
  var isClickable = !isDisabled && (onClick || href || selectable && !selectable.isDisabled);
  /**
   * For a11y, we simulate the same click that's provided on the title when clicking the whole card
   * without having to make the whole card a button or anchor tag.
   * *Card Accessibility: The redundant click event https://inclusive-components.design/cards/*
   */

  var link = null;

  var outerOnClick = function outerOnClick(e) {
    if (link && link !== e.target) {
      link.click();
    }
  };

  if (layout === 'horizontal') {
    if (image || footer || textAlign !== 'center') {
      throw new Error('EuiCard: `layout="horizontal"` cannot be used in conjunction with `image`, `footer`, or `textAlign`.');
    }
  }

  var selectableColorClass = selectable ? "euiCard--isSelectable--".concat((0, _card_select.euiCardSelectableColor)(selectable.color, selectable.isSelected)) : undefined;
  var classes = (0, _classnames.default)('euiCard', textAlignToClassNameMap[textAlign], layoutToClassNameMap[layout], {
    'euiCard--isClickable': isClickable,
    'euiCard--hasBetaBadge': betaBadgeLabel,
    'euiCard--hasIcon': icon,
    'euiCard--isSelectable': selectable,
    'euiCard-isSelected': selectable && selectable.isSelected,
    'euiCard-isDisabled': isDisabled
  }, selectableColorClass, className);
  var ariaId = (0, _accessibility.htmlIdGenerator)()();
  var ariaDesc = description ? "".concat(ariaId, "Description") : '';
  /**
   * Top area containing image, icon or both
   */

  var imageNode;

  if (image && layout === 'vertical') {
    if ( /*#__PURE__*/(0, _react.isValidElement)(image) || typeof image === 'string') {
      imageNode = /*#__PURE__*/_react.default.createElement("div", {
        className: "euiCard__image"
      }, /*#__PURE__*/(0, _react.isValidElement)(image) ? image : /*#__PURE__*/_react.default.createElement("img", {
        src: image,
        alt: ""
      }));
    } else {
      imageNode = null;
    }
  }

  var iconNode;

  if (icon) {
    iconNode = /*#__PURE__*/_react.default.cloneElement(icon, {
      className: (0, _classnames.default)(icon.props.className, 'euiCard__icon')
    });
  }

  var optionalCardTop;

  if (imageNode || iconNode) {
    optionalCardTop = /*#__PURE__*/_react.default.createElement("div", {
      className: "euiCard__top"
    }, imageNode, iconNode);
  }
  /**
   * Optional EuiBetaBadge
   */


  var optionalBetaBadge;
  var optionalBetaBadgeID = '';

  if (betaBadgeLabel) {
    optionalBetaBadgeID = "".concat(ariaId, "BetaBadge");
    optionalBetaBadge = /*#__PURE__*/_react.default.createElement("span", {
      className: "euiCard__betaBadgeWrapper"
    }, /*#__PURE__*/_react.default.createElement(_beta_badge.EuiBetaBadge, {
      id: optionalBetaBadgeID,
      label: betaBadgeLabel,
      title: betaBadgeTitle,
      tooltipContent: betaBadgeTooltipContent,
      className: "euiCard__betaBadge"
    })); // Increase padding size when there is a beta badge unless it's already determined

    paddingSize = paddingSize || 'l';
  }
  /**
   * Optional selectable button
   */


  if (selectable && isDisabled && selectable.isDisabled === undefined) {
    selectable.isDisabled = isDisabled;
  }

  var optionalSelectButton;

  if (selectable) {
    optionalSelectButton = /*#__PURE__*/_react.default.createElement(_card_select.EuiCardSelect, _extends({
      "aria-describedby": "".concat(ariaId, "Title ").concat(ariaDesc)
    }, selectable, {
      buttonRef: function buttonRef(node) {
        link = node;
      }
    }));
  }
  /**
   * Wraps the title with the link (<a>) or button.
   * This makes the title element a11y friendly and gets described by its content if its interactable.
   */


  var theTitle;

  if (!isDisabled && href) {
    theTitle = /*#__PURE__*/_react.default.createElement("a", {
      className: "euiCard__titleAnchor",
      onClick: onClick,
      href: href,
      target: target,
      "aria-describedby": ariaDesc,
      rel: (0, _services.getSecureRelForTarget)({
        href: href,
        target: target,
        rel: rel
      }),
      ref: function ref(node) {
        link = node;
      }
    }, title);
  } else if (isDisabled || onClick) {
    theTitle = /*#__PURE__*/_react.default.createElement("button", {
      className: "euiCard__titleButton",
      onClick: onClick,
      disabled: isDisabled,
      "aria-describedby": "".concat(optionalBetaBadgeID, " ").concat(ariaDesc),
      ref: function ref(node) {
        link = node;
      }
    }, title);
  } else {
    theTitle = title;
  }
  /**
   * Convert titleElement to a capital TitleElement
   */


  var TitleElement = titleElement;
  return /*#__PURE__*/_react.default.createElement(_panel.EuiPanel, _extends({
    element: "div",
    className: classes,
    onClick: isClickable ? outerOnClick : undefined,
    color: isDisabled ? 'subdued' : display,
    hasShadow: isDisabled || display ? false : true,
    hasBorder: display ? false : undefined,
    paddingSize: paddingSize
  }, rest), optionalCardTop, /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCard__content"
  }, /*#__PURE__*/_react.default.createElement(_title.EuiTitle, {
    id: "".concat(ariaId, "Title"),
    className: "euiCard__title",
    size: titleSize
  }, /*#__PURE__*/_react.default.createElement(TitleElement, null, theTitle)), description && /*#__PURE__*/_react.default.createElement(_text.EuiText, {
    id: ariaDesc,
    size: "s",
    className: "euiCard__description"
  }, /*#__PURE__*/_react.default.createElement("p", null, description)), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCard__children"
  }, children)), optionalBetaBadge, layout === 'vertical' && footer && /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCard__footer"
  }, footer), optionalSelectButton);
};

exports.EuiCard = EuiCard;
EuiCard.propTypes = {
  /**
       * Change to "horizontal" if you need the icon to be left of the content.
       * Horizontal layouts cannot be used in conjunction with `image`, `footer`, or `textAlign`.
       */
  layout: _propTypes.default.oneOfType([_propTypes.default.oneOf(["vertical"]), _propTypes.default.oneOf(["horizontal"]).isRequired]),

  /**
       * Changes alignment of the title and description
       */
  textAlign: _propTypes.default.oneOf(["left", "center", "right"]),

  /**
       * Accepts any combination of elements
       */
  footer: _propTypes.default.node,

  /**
       * Accepts a url in string form or ReactElement for a custom image component
       */
  image: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]),

  /**
       * Cards are required to have at least a title and a description and/or children
       */
  title: _propTypes.default.any.isRequired,

  /**
       * Determines the title's heading element
       */
  titleElement: _propTypes.default.oneOf(["h2", "h3", "h4", "h5", "h6", "span"]),

  /**
       * Determines the title's size, matching that of EuiTitle.
       * Though, card titles can't be too large or small relative to the description text.
       */
  titleSize: _propTypes.default.oneOf(["s", "xs"]),
  // description is required if children is omitted
  // description becomes optional when children is present

  /**
       * Placed within a small EuiText `<p>` tag
       */
  description: _propTypes.default.any,

  /**
       * Accepts an `<EuiIcon>` node or `null`
       */
  icon: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.oneOf([null])]),

  /**
       * Custom children
       */
  children: _propTypes.default.node,

  /**
       * Use only if you want to forego a button in the footer and make the whole card clickable
       */
  onClick: _propTypes.default.oneOfType([_propTypes.default.func.isRequired, _propTypes.default.func.isRequired]),
  isDisabled: _propTypes.default.bool,
  href: _propTypes.default.string,
  target: _propTypes.default.string,
  rel: _propTypes.default.string,

  /**
       * Add a badge to the card to label it as "Beta" or other non-GA state
       */
  betaBadgeLabel: _propTypes.default.string,

  /**
       * Add a description to the beta badge (will appear in a tooltip)
       */
  betaBadgeTooltipContent: _propTypes.default.node,

  /**
       * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
       */
  betaBadgeTitle: _propTypes.default.string,

  /**
       * Matches to the color property of EuiPanel. If defined, removes any border & shadow.
       * Leave as `undefined` to display as a default panel.
       * Selectable cards will always display as a default panel.
       */
  display: _propTypes.default.any,

  /**
       * Padding applied around the content of the card
       */
  paddingSize: _propTypes.default.any,

  /**
       * Adds a button to the bottom of the card to allow for in-place selection
       */
  selectable: _propTypes.default.shape({
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
       * Is in the selected state
       */

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
  })
};