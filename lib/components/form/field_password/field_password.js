"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFieldPassword = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _form_control_layout = require("../form_control_layout");

var _validatable_control = require("../validatable_control");

var _button = require("../../button");

var _i18n = require("../../i18n");

var _services = require("../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFieldPassword = function EuiFieldPassword(_ref) {
  var className = _ref.className,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      isInvalid = _ref.isInvalid,
      fullWidth = _ref.fullWidth,
      isLoading = _ref.isLoading,
      compressed = _ref.compressed,
      _inputRef = _ref.inputRef,
      prepend = _ref.prepend,
      append = _ref.append,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'password' : _ref$type,
      dualToggleProps = _ref.dualToggleProps,
      rest = _objectWithoutProperties(_ref, ["className", "id", "name", "placeholder", "value", "isInvalid", "fullWidth", "isLoading", "compressed", "inputRef", "prepend", "append", "type", "dualToggleProps"]);

  // Set the initial input type to `password` if they want dual
  var _useState = (0, _react.useState)(type === 'dual' ? 'password' : type),
      _useState2 = _slicedToArray(_useState, 2),
      inputType = _useState2[0],
      setInputType = _useState2[1]; // Setup toggle aria-label


  var _useEuiI18n = (0, _i18n.useEuiI18n)(['euiFieldPassword.showPassword', 'euiFieldPassword.maskPassword'], ['Show password as plain text. Note: this will visually expose your password on the screen.', 'Mask password']),
      _useEuiI18n2 = _slicedToArray(_useEuiI18n, 2),
      showPasswordLabel = _useEuiI18n2[0],
      maskPasswordLabel = _useEuiI18n2[1]; // Setup the inputRef to auto-focus when toggling visibility


  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      inputRef = _useState4[0],
      _setInputRef = _useState4[1];

  var setInputRef = (0, _services.useCombinedRefs)([_setInputRef, _inputRef]);

  var handleToggle = function handleToggle(event, isVisible) {
    setInputType(isVisible ? 'password' : 'text');

    if (inputRef) {
      inputRef.focus();
    }

    if (dualToggleProps && dualToggleProps.onClick) {
      dualToggleProps.onClick(event);
    }
  }; // Convert any `append` elements to an array so the visibility
  // toggle can be added to it


  var appends = Array.isArray(append) ? append : [];
  if (append && !Array.isArray(append)) appends.push(append); // Add a toggling button to switch between `password` and `input` if consumer wants `dual`
  // https://www.w3schools.com/howto/howto_js_toggle_password.asp

  if (type === 'dual') {
    var isVisible = inputType === 'text';

    var visibilityToggle = /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, _extends({
      iconType: isVisible ? 'eyeClosed' : 'eye',
      "aria-label": isVisible ? maskPasswordLabel : showPasswordLabel,
      title: isVisible ? maskPasswordLabel : showPasswordLabel,
      disabled: rest.disabled
    }, dualToggleProps, {
      onClick: function onClick(e) {
        return handleToggle(e, isVisible);
      }
    }));

    appends = [].concat(_toConsumableArray(appends), [visibilityToggle]);
  }

  var finalAppend = appends.length ? appends : undefined;
  var classes = (0, _classnames.default)('euiFieldPassword', {
    'euiFieldPassword--fullWidth': fullWidth,
    'euiFieldPassword--compressed': compressed,
    'euiFieldPassword-isLoading': isLoading,
    'euiFieldPassword--inGroup': prepend || finalAppend,
    'euiFieldPassword--withToggle': type === 'dual'
  }, className);
  return /*#__PURE__*/_react.default.createElement(_form_control_layout.EuiFormControlLayout, {
    icon: "lock",
    fullWidth: fullWidth,
    isLoading: isLoading,
    compressed: compressed,
    prepend: prepend,
    append: finalAppend
  }, /*#__PURE__*/_react.default.createElement(_validatable_control.EuiValidatableControl, {
    isInvalid: isInvalid
  }, /*#__PURE__*/_react.default.createElement("input", _extends({
    type: inputType,
    id: id,
    name: name,
    placeholder: placeholder,
    className: classes,
    value: value,
    ref: setInputRef
  }, rest))));
};

exports.EuiFieldPassword = EuiFieldPassword;
EuiFieldPassword.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  isInvalid: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  compressed: _propTypes.default.bool,
  inputRef: _propTypes.default.any,

  /**
       * Creates an input group with element(s) coming before input.
       * `string` | `ReactElement` or an array of these
       */
  prepend: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),

  /**
       * Creates an input group with element(s) coming after input.
       * `string` | `ReactElement` or an array of these
       */
  append: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),
  value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]),

  /**
       * Change the `type` of input for manually handling obfuscation.
       * The `dual` option adds the ability to toggle the obfuscation of the input by
       * adding an icon button as the first `append` element
       */
  type: _propTypes.default.oneOf(["password", "text", "dual"]),

  /**
       * Additional props to apply to the dual toggle. Extends EuiButtonIcon
       */
  dualToggleProps: _propTypes.default.any
};
EuiFieldPassword.defaultProps = {
  value: undefined,
  fullWidth: false,
  isLoading: false,
  compressed: false
};