"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCodeEditor = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactAce = _interopRequireDefault(require("react-ace"));

var _common = require("../common");

var _services = require("../../services");

var _i18n = require("../i18n");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_MODE = 'text';
var DEFAULT_THEME = 'textmate';

function setOrRemoveAttribute(element, attributeName, value) {
  if (value === null || value === undefined) {
    element.removeAttribute(attributeName);
  } else {
    element.setAttribute(attributeName, value);
  }
}

var EuiCodeEditor = /*#__PURE__*/function (_Component) {
  _inherits(EuiCodeEditor, _Component);

  var _super = _createSuper(EuiCodeEditor);

  function EuiCodeEditor() {
    var _this;

    _classCallCheck(this, EuiCodeEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isHintActive: true,
      isEditing: false,
      name: (0, _services.htmlIdGenerator)()()
    });

    _defineProperty(_assertThisInitialized(_this), "idGenerator", (0, _services.htmlIdGenerator)());

    _defineProperty(_assertThisInitialized(_this), "aceEditor", null);

    _defineProperty(_assertThisInitialized(_this), "editorHint", null);

    _defineProperty(_assertThisInitialized(_this), "aceEditorRef", function (aceEditor) {
      if (aceEditor) {
        _this.aceEditor = aceEditor;
        var textbox = aceEditor.editor.textInput.getElement();
        textbox.tabIndex = -1;
        textbox.addEventListener('keydown', _this.onKeydownAce);
        setOrRemoveAttribute(textbox, 'aria-label', _this.props['aria-label']);
        setOrRemoveAttribute(textbox, 'aria-labelledby', _this.props['aria-labelledby']);
        setOrRemoveAttribute(textbox, 'aria-describedby', _this.props['aria-describedby']);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscToExit", function () {
      _this.stopEditing();

      if (_this.editorHint) {
        _this.editorHint.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeydownAce", function (event) {
      if (event.key === _services.keys.ESCAPE) {
        event.preventDefault();
        event.stopPropagation(); // Handles exiting edit mode when `isReadOnly` is set.
        // Other 'esc' cases handled by `stopEditingOnEsc` command.
        // Would run after `stopEditingOnEsc`.

        if (_this.aceEditor !== null && !_this.aceEditor.editor.completer && _this.state.isEditing) {
          _this.onEscToExit();
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onFocusAce", function (event, editor) {
      _this.setState({
        isEditing: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event, editor);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurAce", function (event, editor) {
      _this.stopEditing();

      if (_this.props.onBlur) {
        _this.props.onBlur(event, editor);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "startEditing", function () {
      _this.setState({
        isHintActive: false
      });

      if (_this.aceEditor !== null) {
        _this.aceEditor.editor.textInput.focus();
      }
    });

    return _this;
  }

  _createClass(EuiCodeEditor, [{
    key: "stopEditing",
    value: function stopEditing() {
      this.setState({
        isHintActive: true,
        isEditing: false
      });
    }
  }, {
    key: "isCustomMode",
    value: function isCustomMode() {
      return _typeof(this.props.mode) === 'object';
    }
  }, {
    key: "setCustomMode",
    value: function setCustomMode() {
      if (this.aceEditor !== null) {
        this.aceEditor.editor.getSession().setMode(this.props.mode);
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isCustomMode()) {
        this.setCustomMode();
      }

      var _this$props = this.props,
          isReadOnly = _this$props.isReadOnly,
          id = _this$props.id;
      var textareaProps = {
        id: id,
        readOnly: isReadOnly
      };
      var el = document.getElementById(this.state.name);

      if (el) {
        var textarea = el.querySelector('textarea');
        if (textarea) (0, _common.keysOf)(textareaProps).forEach(function (key) {
          if (textareaProps[key]) textarea.setAttribute("".concat(key), textareaProps[key].toString());
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.mode !== prevProps.mode && this.isCustomMode()) {
        this.setCustomMode();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          onBlur = _this$props2.onBlur,
          isReadOnly = _this$props2.isReadOnly,
          setOptions = _this$props2.setOptions,
          cursorStart = _this$props2.cursorStart,
          _this$props2$mode = _this$props2.mode,
          mode = _this$props2$mode === void 0 ? DEFAULT_MODE : _this$props2$mode,
          _this$props2$dataTes = _this$props2['data-test-subj'],
          dataTestSubj = _this$props2$dataTes === void 0 ? 'codeEditorContainer' : _this$props2$dataTes,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? DEFAULT_THEME : _this$props2$theme,
          _this$props2$commands = _this$props2.commands,
          commands = _this$props2$commands === void 0 ? [] : _this$props2$commands,
          rest = _objectWithoutProperties(_this$props2, ["width", "height", "onBlur", "isReadOnly", "setOptions", "cursorStart", "mode", "data-test-subj", "theme", "commands"]);

      var classes = (0, _classnames.default)('euiCodeEditorWrapper', {
        'euiCodeEditorWrapper-isEditing': this.state.isEditing
      });
      var promptClasses = (0, _classnames.default)('euiCodeEditorKeyboardHint', {
        'euiCodeEditorKeyboardHint-isInactive': !this.state.isHintActive
      });
      var filteredCursorStart;

      var options = _objectSpread({}, setOptions);

      if (isReadOnly) {
        // Put the cursor at the beginning of the editor, so that it doesn't look like
        // a prompt to begin typing.
        filteredCursorStart = -1;
        Object.assign(options, {
          readOnly: true,
          highlightActiveLine: false,
          highlightGutterLine: false
        });
      } else {
        filteredCursorStart = cursorStart;
      }

      var prompt = /*#__PURE__*/_react.default.createElement("button", {
        className: promptClasses,
        id: this.idGenerator('codeEditor'),
        ref: function ref(hint) {
          _this2.editorHint = hint;
        },
        onClick: this.startEditing,
        "data-test-subj": "codeEditorHint"
      }, /*#__PURE__*/_react.default.createElement("p", {
        className: "euiText"
      }, isReadOnly ? /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.startInteracting",
        default: "Press Enter to start interacting with the code."
      }) : /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.startEditing",
        default: "Press Enter to start editing."
      })), /*#__PURE__*/_react.default.createElement("p", {
        className: "euiText"
      }, isReadOnly ? /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.stopInteracting",
        default: "When you're done, press Escape to stop interacting with the code."
      }) : /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiCodeEditor.stopEditing",
        default: "When you're done, press Escape to stop editing."
      })));

      if (typeof window === 'undefined') {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: classes,
        style: {
          width: width,
          height: height
        },
        "data-test-subj": dataTestSubj
      }, prompt, /*#__PURE__*/_react.default.createElement(_reactAce.default // Setting a default, existing `mode` is necessary to properly initialize the editor
      // prior to dynamically setting a custom mode (https://github.com/elastic/eui/pull/2616)
      , _extends({
        mode: this.isCustomMode() ? DEFAULT_MODE : mode // https://github.com/securingsincity/react-ace/pull/771
        ,
        name: this.state.name,
        theme: theme,
        ref: this.aceEditorRef,
        width: width,
        height: height,
        onFocus: this.onFocusAce,
        onBlur: this.onBlurAce,
        setOptions: options,
        editorProps: {
          $blockScrolling: Infinity
        },
        cursorStart: filteredCursorStart,
        commands: [// Handles exiting edit mode in all cases except `isReadOnly`
        // Runs before `onKeydownAce`.
        {
          name: 'stopEditingOnEsc',
          bindKey: {
            win: 'Esc',
            mac: 'Esc'
          },
          exec: this.onEscToExit
        }].concat(_toConsumableArray(commands))
      }, rest)));
    }
  }]);

  return EuiCodeEditor;
}(_react.Component);

exports.EuiCodeEditor = EuiCodeEditor;

_defineProperty(EuiCodeEditor, "defaultProps", {
  setOptions: {}
});

EuiCodeEditor.propTypes = {
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  onBlur: _propTypes.default.any,
  onFocus: _propTypes.default.any,
  isReadOnly: _propTypes.default.bool,
  setOptions: _propTypes.default.any.isRequired,
  cursorStart: _propTypes.default.number,
  "data-test-subj": _propTypes.default.string,

  /**
     * Select the `brace` theme
     * The matching theme file must also be imported from `brace` (e.g., `import 'brace/theme/github';`)
     */
  theme: _propTypes.default.any,

  /**
     * Use string for a built-in mode or object for a custom mode
     */
  mode: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.any.isRequired]),
  id: _propTypes.default.string
};