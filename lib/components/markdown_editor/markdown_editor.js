"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiMarkdownEditor = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _unified = _interopRequireDefault(require("unified"));

var _classnames = _interopRequireDefault(require("classnames"));

var _markdown_actions = _interopRequireWildcard(require("./markdown_actions"));

var _markdown_editor_toolbar = require("./markdown_editor_toolbar");

var _markdown_editor_text_area = require("./markdown_editor_text_area");

var _markdown_format = require("./markdown_format");

var _markdown_editor_drop_zone = require("./markdown_editor_drop_zone");

var _services = require("../../services/");

var _markdown_modes = require("./markdown_modes");

var _modal = require("../modal");

var _markdown_context = require("./markdown_context");

var MarkdownTooltip = _interopRequireWildcard(require("./plugins/markdown_tooltip"));

var _markdown_default_plugins = require("./plugins/markdown_default_plugins");

var _resize_observer = require("../observer/resize_observer");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x2) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// TODO I wanted to use the useCombinedRefs
// but I can't because it's not allowed to use react hooks
// inside a callback.
var mergeRefs = function mergeRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  var filteredRefs = refs.filter(Boolean);
  if (!filteredRefs.length) return null;
  if (filteredRefs.length === 0) return filteredRefs[0];
  return function (inst) {
    var _iterator = _createForOfIteratorHelper(filteredRefs),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var ref = _step.value;

        if (typeof ref === 'function') {
          ref(inst);
        } else if (ref) {
          ref.current = inst;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
};

function isNewLine(char) {
  if (char == null) return true;
  return !!char.match(/[\r\n]/);
}

function padWithNewlinesIfNeeded(textarea, text) {
  var selectionStart = textarea.selectionStart;
  var selectionEnd = textarea.selectionEnd; // block parsing requires two leading new lines and none trailing, but we add an extra trailing line for readability

  var isPrevNewLine = isNewLine(textarea.value[selectionStart - 1]);
  var isPrevPrevNewLine = isNewLine(textarea.value[selectionStart - 2]);
  var isNextNewLine = isNewLine(textarea.value[selectionEnd]); // pad text with newlines as needed

  text = "".concat(isPrevNewLine ? '' : '\n').concat(isPrevPrevNewLine ? '' : '\n').concat(text).concat(isNextNewLine ? '' : '\n');
  return text;
}

var EuiMarkdownEditor = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
      _editorId = _ref.editorId,
      value = _ref.value,
      _onChange = _ref.onChange,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 250 : _ref$height,
      _ref$maxHeight = _ref.maxHeight,
      maxHeight = _ref$maxHeight === void 0 ? 500 : _ref$maxHeight,
      _ref$autoExpandPrevie = _ref.autoExpandPreview,
      autoExpandPreview = _ref$autoExpandPrevie === void 0 ? true : _ref$autoExpandPrevie,
      _ref$parsingPluginLis = _ref.parsingPluginList,
      parsingPluginList = _ref$parsingPluginLis === void 0 ? _markdown_default_plugins.defaultParsingPlugins : _ref$parsingPluginLis,
      _ref$processingPlugin = _ref.processingPluginList,
      processingPluginList = _ref$processingPlugin === void 0 ? _markdown_default_plugins.defaultProcessingPlugins : _ref$processingPlugin,
      _ref$uiPlugins = _ref.uiPlugins,
      uiPlugins = _ref$uiPlugins === void 0 ? _markdown_default_plugins.defaultUiPlugins : _ref$uiPlugins,
      onParse = _ref.onParse,
      _ref$errors = _ref.errors,
      errors = _ref$errors === void 0 ? [] : _ref$errors,
      ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      ariaDescribedBy = _ref['aria-describedby'],
      _ref$initialViewMode = _ref.initialViewMode,
      initialViewMode = _ref$initialViewMode === void 0 ? _markdown_modes.MODE_EDITING : _ref$initialViewMode,
      _ref$dropHandlers = _ref.dropHandlers,
      dropHandlers = _ref$dropHandlers === void 0 ? [] : _ref$dropHandlers,
      rest = _objectWithoutProperties(_ref, ["className", "editorId", "value", "onChange", "height", "maxHeight", "autoExpandPreview", "parsingPluginList", "processingPluginList", "uiPlugins", "onParse", "errors", "aria-label", "aria-labelledby", "aria-describedby", "initialViewMode", "dropHandlers"]);

  var _useState = (0, _react.useState)(initialViewMode),
      _useState2 = _slicedToArray(_useState, 2),
      viewMode = _useState2[0],
      setViewMode = _useState2[1];

  var editorId = (0, _react.useMemo)(function () {
    return _editorId || (0, _services.htmlIdGenerator)()();
  }, [_editorId]);

  var _useState3 = (0, _react.useState)(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      pluginEditorPlugin = _useState4[0],
      setPluginEditorPlugin = _useState4[1];

  var toolbarPlugins = _toConsumableArray(uiPlugins); // @ts-ignore __originatedFromEui is a custom property


  if (!uiPlugins.__originatedFromEui) {
    toolbarPlugins.unshift(MarkdownTooltip.plugin);
    console.warn('Deprecation warning: uiPlugins passed to EuiMarkdownEditor does not include the tooltip plugin, which has been added for you. This automatic inclusion has been deprecated and will be removed in the future, see https://github.com/elastic/eui/pull/4383');
  }

  var markdownActions = (0, _react.useMemo)(function () {
    return new _markdown_actions.default(editorId, toolbarPlugins);
  }, // toolbarPlugins _is_ accounted for
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [editorId, toolbarPlugins.map(function (_ref2) {
    var name = _ref2.name;
    return name;
  }).join(',')]);
  var parser = (0, _react.useMemo)(function () {
    var Compiler = function Compiler(tree) {
      return tree;
    };

    function identityCompiler() {
      this.Compiler = Compiler;
    }

    return (0, _unified.default)().use(parsingPluginList).use(identityCompiler);
  }, [parsingPluginList]);

  var _useMemo = (0, _react.useMemo)(function () {
    try {
      var _parsed = parser.processSync(value);

      return [_parsed, null];
    } catch (e) {
      return [null, e];
    }
  }, [parser, value]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      parsed = _useMemo2[0],
      parseError = _useMemo2[1];

  var isPreviewing = viewMode === _markdown_modes.MODE_VIEWING;
  var isEditing = viewMode === _markdown_modes.MODE_EDITING;
  var replaceNode = (0, _react.useCallback)(function (position, next) {
    var leading = value.substr(0, position.start.offset);
    var trailing = value.substr(position.end.offset);

    _onChange("".concat(leading).concat(next).concat(trailing));
  }, [value, _onChange]);
  var contextValue = (0, _react.useMemo)(function () {
    return {
      openPluginEditor: function openPluginEditor(plugin) {
        return setPluginEditorPlugin(function () {
          return plugin;
        });
      },
      replaceNode: replaceNode
    };
  }, [replaceNode]);

  var _useState5 = (0, _react.useState)(),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedNode = _useState6[0],
      setSelectedNode = _useState6[1];

  var textareaRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (textareaRef == null) return;
    if (parsed == null) return;

    var getCursorNode = function getCursorNode() {
      var _parsed$result;

      var _ref3 = textareaRef.current,
          selectionStart = _ref3.selectionStart;
      var node = (_parsed$result = parsed.result) !== null && _parsed$result !== void 0 ? _parsed$result : parsed.contents;

      outer: while (true) {
        if (node.children) {
          for (var i = 0; i < node.children.length; i++) {
            var child = node.children[i];

            if (child.position.start.offset < selectionStart && selectionStart < child.position.end.offset) {
              if (child.type === 'text') break outer; // don't dive into `text` nodes

              node = child;
              continue outer;
            }
          }
        }

        break;
      }

      setSelectedNode(node);
    };

    var textarea = textareaRef.current;
    textarea.addEventListener('keyup', getCursorNode);
    textarea.addEventListener('mouseup', getCursorNode);
    return function () {
      textarea.removeEventListener('keyup', getCursorNode);
      textarea.removeEventListener('mouseup', getCursorNode);
    };
  }, [parsed]);
  (0, _react.useEffect)(function () {
    if (onParse) {
      var _parsed$result2;

      var messages = parsed ? parsed.messages : [];
      var ast = parsed ? (_parsed$result2 = parsed.result) !== null && _parsed$result2 !== void 0 ? _parsed$result2 : parsed.contents : null;
      onParse(parseError, {
        messages: messages,
        ast: ast
      });
    }
  }, [onParse, parsed, parseError]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      textarea: textareaRef.current,
      replaceNode: replaceNode
    };
  }, [replaceNode]);
  var textarea = textareaRef.current;
  var previewRef = (0, _react.useRef)(null);
  var editorToolbarRef = (0, _react.useRef)(null);

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasUnacceptedItems = _React$useState2[0],
      setHasUnacceptedItems = _React$useState2[1];

  var _useState7 = (0, _react.useState)(height),
      _useState8 = _slicedToArray(_useState7, 2),
      currentHeight = _useState8[0],
      setCurrentHeight = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      editorFooterHeight = _useState10[0],
      setEditorFooterHeight = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      editorToolbarHeight = _useState12[0],
      setEditorToolbarHeight = _useState12[1];

  var classes = (0, _classnames.default)('euiMarkdownEditor', {
    'euiMarkdownEditor--fullHeight': height === 'full'
  }, {
    'euiMarkdownEditor--isPreviewing': isPreviewing
  }, className);

  var onResize = function onResize() {
    if (textarea && isEditing && height !== 'full') {
      var resizedTextareaHeight = textarea.offsetHeight + editorFooterHeight;
      setCurrentHeight(resizedTextareaHeight);
    }
  };

  (0, _react.useEffect)(function () {
    setEditorToolbarHeight(editorToolbarRef.current.offsetHeight);
  }, [setEditorToolbarHeight]);
  (0, _react.useEffect)(function () {
    if (isPreviewing && autoExpandPreview && height !== 'full') {
      if (previewRef.current.scrollHeight > currentHeight) {
        // scrollHeight does not include the border or margin
        // so we ask for the computed value for those,
        // which is always in pixels because getComputedValue
        // returns the resolved values
        var elementComputedStyle = window.getComputedStyle(previewRef.current);
        var borderWidth = parseFloat(elementComputedStyle.borderTopWidth) + parseFloat(elementComputedStyle.borderBottomWidth);
        var marginWidth = parseFloat(elementComputedStyle.marginTop) + parseFloat(elementComputedStyle.marginBottom); // then add an extra pixel for safety and because the scrollHeight value is rounded

        var extraHeight = borderWidth + marginWidth + 1;
        setCurrentHeight(previewRef.current.scrollHeight + extraHeight);
      }
    }
  }, [currentHeight, isPreviewing, height, autoExpandPreview]);
  var previewHeight = height === 'full' ? "calc(100% - ".concat(editorFooterHeight, "px)") : currentHeight;
  var textAreaHeight = height === 'full' ? '100%' : "calc(".concat(height - editorFooterHeight, "px)");
  var textAreaMaxHeight = height !== 'full' ? "".concat(maxHeight - editorFooterHeight, "px") : ''; // safari needs this calc when the height is set to full

  var editorToggleContainerHeight = "calc(100% - ".concat(editorToolbarHeight, "px)");
  return /*#__PURE__*/_react.default.createElement(_markdown_context.EuiMarkdownContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/_react.default.createElement(_markdown_editor_toolbar.EuiMarkdownEditorToolbar, {
    ref: editorToolbarRef,
    selectedNode: selectedNode,
    markdownActions: markdownActions,
    onClickPreview: function onClickPreview() {
      return setViewMode(isPreviewing ? _markdown_modes.MODE_EDITING : _markdown_modes.MODE_VIEWING);
    },
    viewMode: viewMode,
    uiPlugins: toolbarPlugins
  }), isPreviewing && /*#__PURE__*/_react.default.createElement("div", {
    ref: previewRef,
    className: "euiMarkdownEditorPreview",
    style: {
      height: previewHeight
    }
  }, /*#__PURE__*/_react.default.createElement(_markdown_format.EuiMarkdownFormat, {
    parsingPluginList: parsingPluginList,
    processingPluginList: processingPluginList
  }, value)), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiMarkdownEditor__toggleContainer",
    style: {
      height: editorToggleContainerHeight
    }
  }, /*#__PURE__*/_react.default.createElement(_markdown_editor_drop_zone.EuiMarkdownEditorDropZone, {
    setEditorFooterHeight: setEditorFooterHeight,
    isEditing: isEditing,
    dropHandlers: dropHandlers,
    insertText: function insertText(text, config) {
      if (config.block) {
        text = padWithNewlinesIfNeeded(textareaRef.current, text);
      }

      var originalSelectionStart = textareaRef.current.selectionStart;
      var newSelectionPoint = originalSelectionStart + text.length;
      (0, _markdown_actions.insertText)(textareaRef.current, {
        text: text,
        selectionStart: newSelectionPoint,
        selectionEnd: newSelectionPoint
      });
    },
    uiPlugins: toolbarPlugins,
    errors: errors,
    hasUnacceptedItems: hasUnacceptedItems,
    setHasUnacceptedItems: setHasUnacceptedItems
  }, /*#__PURE__*/_react.default.createElement(_resize_observer.EuiResizeObserver, {
    onResize: onResize
  }, function (resizeRef) {
    return /*#__PURE__*/_react.default.createElement(_markdown_editor_text_area.EuiMarkdownEditorTextArea, _extends({
      height: textAreaHeight,
      maxHeight: textAreaMaxHeight,
      ref: mergeRefs(textareaRef, resizeRef),
      id: editorId,
      onChange: function onChange(e) {
        return _onChange(e.target.value);
      },
      value: value,
      onFocus: function onFocus() {
        return setHasUnacceptedItems(false);
      }
    }, {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      'aria-describedby': ariaDescribedBy
    }));
  })), pluginEditorPlugin && /*#__PURE__*/_react.default.createElement(_modal.EuiModal, {
    onClose: function onClose() {
      return setPluginEditorPlugin(undefined);
    }
  }, /*#__PURE__*/(0, _react.createElement)(pluginEditorPlugin.editor, {
    node: selectedNode && selectedNode.type === pluginEditorPlugin.name ? selectedNode : null,
    onCancel: function onCancel() {
      return setPluginEditorPlugin(undefined);
    },
    onSave: function onSave(markdown, config) {
      if (selectedNode && selectedNode.type === pluginEditorPlugin.name) {
        // modifying an existing node
        textareaRef.current.setSelectionRange(selectedNode.position.start.offset, selectedNode.position.end.offset);
      } else {
        // creating a new node
        if (config.block) {
          // inject newlines if needed
          markdown = padWithNewlinesIfNeeded(textareaRef.current, markdown);
        }
      }

      (0, _markdown_actions.insertText)(textareaRef.current, {
        text: markdown,
        selectionStart: undefined,
        selectionEnd: undefined
      });
      setPluginEditorPlugin(undefined);
    }
  })))));
});
exports.EuiMarkdownEditor = EuiMarkdownEditor;
EuiMarkdownEditor.propTypes = {
  className: _propTypes.default.string,

  /** aria-label OR aria-labelledby must be set */
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /** aria-label OR aria-labelledby must be set */
  "aria-labelledby": _propTypes.default.string,

  /** ID of an element describing the text editor, useful for associating error messages */
  "aria-describedby": _propTypes.default.string,

  /** a unique ID to attach to the textarea. If one isn't provided, a random one
       * will be generated */
  editorId: _propTypes.default.string,

  /** A markdown content */
  value: _propTypes.default.string.isRequired,

  /** callback function when markdown content is modified */
  onChange: _propTypes.default.func.isRequired,

  /**
       * Sets the `height` in pixels of the editor/preview area or pass `full` to allow
       * the EuiMarkdownEditor to fill the height of its container.
       * When in `full` mode the vertical resize is not allowed.
       */
  height: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.oneOf(["full"])]),

  /**
       * Sets the `max-height` in pixels of the editor/preview area.
       * It has no effect when the `height` is set to `full`.
       */
  maxHeight: _propTypes.default.number,

  /**
       * Automatically adjusts the preview height to fit all the content and avoid a scrollbar.
       */
  autoExpandPreview: _propTypes.default.bool,

  /** plugins to identify new syntax and parse it into an AST node */
  parsingPluginList: _propTypes.default.any,

  /** plugins to process the markdown AST nodes into a React nodes */
  processingPluginList: _propTypes.default.any,

  /** defines UI for plugins' buttons in the toolbar as well as any modals or extra UI that provides content to the editor */
  uiPlugins: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    button: _propTypes.default.shape({
      label: _propTypes.default.string.isRequired,
      iconType: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]).isRequired
    }).isRequired,
    helpText: _propTypes.default.node,
    formatting: _propTypes.default.shape({
      prefix: _propTypes.default.string,
      suffix: _propTypes.default.string,
      blockPrefix: _propTypes.default.string,
      blockSuffix: _propTypes.default.string,
      multiline: _propTypes.default.bool,
      replaceNext: _propTypes.default.string,
      prefixSpace: _propTypes.default.bool,
      scanFor: _propTypes.default.string,
      surroundWithNewlines: _propTypes.default.bool,
      orderedList: _propTypes.default.bool,
      trimFirst: _propTypes.default.bool
    }),
    editor: _propTypes.default.elementType
  }).isRequired),

  /** errors to bubble up */
  errors: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.any.isRequired, _propTypes.default.any.isRequired]).isRequired),

  /** callback triggered when parsing results are available */
  onParse: _propTypes.default.func,

  /** initial display mode for the editor */
  initialViewMode: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.any.isRequired]),

  /** array defining any drag&drop handlers */
  dropHandlers: _propTypes.default.arrayOf(_propTypes.default.shape({
    supportedFiles: _propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired,
    accepts: _propTypes.default.func.isRequired,
    getFormattingForItem: _propTypes.default.func.isRequired
  }).isRequired)
};
EuiMarkdownEditor.displayName = 'EuiMarkdownEditor';