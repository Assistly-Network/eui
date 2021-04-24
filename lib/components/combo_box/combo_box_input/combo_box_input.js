"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiComboBoxInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInputAutosize = _interopRequireDefault(require("react-input-autosize"));

var _accessibility = require("../../accessibility");

var _form_control_layout = require("../../form/form_control_layout");

var _combo_box_pill = require("./combo_box_pill");

var _services = require("../../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var EuiComboBoxInput = /*#__PURE__*/function (_Component) {
  _inherits(EuiComboBoxInput, _Component);

  var _super = _createSuper(EuiComboBoxInput);

  function EuiComboBoxInput() {
    var _this;

    _classCallCheck(this, EuiComboBoxInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasFocus: false
    });

    _defineProperty(_assertThisInitialized(_this), "updatePosition", function () {
      // Wait a beat for the DOM to update, since we depend on DOM elements' bounds.
      requestAnimationFrame(function () {
        _this.props.updatePosition();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      _this.props.onFocus(event);

      _this.setState({
        hasFocus: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      _this.setState({
        hasFocus: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "inputOnChange", function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          searchValue = _this$props.searchValue;

      if (onChange) {
        onChange(event.target.value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "inputRefCallback", function (ref) {
      var autoSizeInputRef = _this.props.autoSizeInputRef;

      if (autoSizeInputRef) {
        autoSizeInputRef(ref);
      }
    });

    return _this;
  }

  _createClass(EuiComboBoxInput, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var searchValue = prevProps.searchValue; // We need to update the position of everything if the user enters enough input to change
      // the size of the input.

      if (searchValue !== this.props.searchValue) {
        this.updatePosition();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          compressed = _this$props2.compressed,
          focusedOptionId = _this$props2.focusedOptionId,
          fullWidth = _this$props2.fullWidth,
          hasSelectedOptions = _this$props2.hasSelectedOptions,
          id = _this$props2.id,
          inputRef = _this$props2.inputRef,
          isDisabled = _this$props2.isDisabled,
          isListOpen = _this$props2.isListOpen,
          noIcon = _this$props2.noIcon,
          onClear = _this$props2.onClear,
          onClick = _this$props2.onClick,
          onCloseListClick = _this$props2.onCloseListClick,
          onOpenListClick = _this$props2.onOpenListClick,
          onRemoveOption = _this$props2.onRemoveOption,
          placeholder = _this$props2.placeholder,
          rootId = _this$props2.rootId,
          searchValue = _this$props2.searchValue,
          selectedOptions = _this$props2.selectedOptions,
          singleSelectionProp = _this$props2.singleSelection,
          toggleButtonRef = _this$props2.toggleButtonRef,
          value = _this$props2.value,
          prepend = _this$props2.prepend,
          append = _this$props2.append,
          isLoading = _this$props2.isLoading;
      var singleSelection = Boolean(singleSelectionProp);
      var asPlainText = singleSelectionProp && _typeof(singleSelectionProp) === 'object' && singleSelectionProp.asPlainText || false;
      var pills = selectedOptions ? selectedOptions.map(function (option) {
        var key = option.key,
            label = option.label,
            color = option.color,
            onClick = option.onClick,
            rest = _objectWithoutProperties(option, ["key", "label", "color", "onClick"]);

        var pillOnClose = isDisabled || singleSelection || onClick ? undefined : onRemoveOption;
        return /*#__PURE__*/_react.default.createElement(_combo_box_pill.EuiComboBoxPill, _extends({
          option: option,
          onClose: pillOnClose,
          key: key !== null && key !== void 0 ? key : label.toLowerCase(),
          color: color,
          onClick: onClick,
          onClickAriaLabel: onClick ? 'Change' : undefined,
          asPlainText: asPlainText
        }, rest), label);
      }) : null;
      var removeOptionMessage;
      var removeOptionMessageId;

      if (this.state.hasFocus) {
        var readPlaceholder = placeholder ? "".concat(placeholder, ".") : '';
        var removeOptionMessageContent = "Combo box. Selected. ".concat(searchValue ? "".concat(searchValue, ". Selected. ") : '').concat(selectedOptions && selectedOptions.length > 0 ? "".concat(value, ". Press Backspace to delete ").concat(selectedOptions[selectedOptions.length - 1].label, ". ") : '', "Combo box input. ").concat(readPlaceholder, " Type some text or, to display a list of choices, press Down Arrow. ") + 'To exit the list of choices, press Escape.';
        removeOptionMessageId = (0, _services.htmlIdGenerator)()(); // aria-live="assertive" will read this message aloud immediately once it enters the DOM.
        // We'll render to the DOM when the input gains focus and remove it when the input loses focus.
        // We'll use aria-hidden to prevent default aria information from being read by the screen
        // reader.

        removeOptionMessage = /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("span", {
          "aria-live": "assertive",
          id: removeOptionMessageId
        }, removeOptionMessageContent));
      }

      var placeholderMessage;

      if (placeholder && selectedOptions && !selectedOptions.length && !searchValue) {
        placeholderMessage = /*#__PURE__*/_react.default.createElement("p", {
          className: "euiComboBoxPlaceholder"
        }, placeholder);
      }

      var clickProps = {};

      if (!isDisabled && onClear && hasSelectedOptions) {
        clickProps.clear = {
          'data-test-subj': 'comboBoxClearButton',
          onClick: onClear
        };
      }

      var icon;

      if (!noIcon) {
        icon = {
          'aria-label': isListOpen ? 'Close list of options' : 'Open list of options',
          'data-test-subj': 'comboBoxToggleListButton',
          disabled: isDisabled,
          onClick: isListOpen && !isDisabled ? onCloseListClick : onOpenListClick,
          ref: toggleButtonRef,
          side: 'right',
          type: 'arrowDown'
        };
      }

      var wrapClasses = (0, _classnames.default)('euiComboBox__inputWrap', {
        'euiComboBox__inputWrap--compressed': compressed,
        'euiComboBox__inputWrap--fullWidth': fullWidth,
        'euiComboBox__inputWrap--noWrap': singleSelection,
        'euiComboBox__inputWrap-isLoading': isLoading,
        'euiComboBox__inputWrap-isClearable': onClear,
        'euiComboBox__inputWrap--inGroup': prepend || append
      });
      return /*#__PURE__*/_react.default.createElement(_form_control_layout.EuiFormControlLayout, _extends({
        icon: icon
      }, clickProps, {
        isLoading: isLoading,
        compressed: compressed,
        fullWidth: fullWidth,
        prepend: prepend,
        append: append
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: wrapClasses,
        "data-test-subj": "comboBoxInput",
        onClick: onClick,
        tabIndex: -1 // becomes onBlur event's relatedTarget, otherwise relatedTarget is null when clicking on this div

      }, !singleSelection || !searchValue ? pills : null, placeholderMessage, /*#__PURE__*/_react.default.createElement(_reactInputAutosize.default, {
        "aria-activedescendant": focusedOptionId,
        "aria-controls": isListOpen ? rootId('listbox') : '',
        className: "euiComboBox__input",
        "data-test-subj": "comboBoxSearchInput",
        disabled: isDisabled,
        id: id,
        inputRef: inputRef,
        onBlur: this.onBlur,
        onChange: this.inputOnChange,
        onFocus: this.onFocus,
        ref: this.inputRefCallback,
        role: "textbox",
        style: {
          fontSize: 14
        },
        value: searchValue
      }), removeOptionMessage));
    }
  }]);

  return EuiComboBoxInput;
}(_react.Component);

exports.EuiComboBoxInput = EuiComboBoxInput;
EuiComboBoxInput.propTypes = {
  autoSizeInputRef: _propTypes.default.any,
  compressed: _propTypes.default.bool.isRequired,
  focusedOptionId: _propTypes.default.string,
  fullWidth: _propTypes.default.bool,
  hasSelectedOptions: _propTypes.default.bool.isRequired,
  id: _propTypes.default.string,
  inputRef: _propTypes.default.any,
  isDisabled: _propTypes.default.bool,
  isListOpen: _propTypes.default.bool.isRequired,
  noIcon: _propTypes.default.bool.isRequired,
  onBlur: _propTypes.default.any,
  onChange: _propTypes.default.func,
  onClear: _propTypes.default.func,
  onClick: _propTypes.default.func,
  onCloseListClick: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.any.isRequired,
  onOpenListClick: _propTypes.default.func.isRequired,
  onRemoveOption: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  rootId: _propTypes.default.any.isRequired,
  searchValue: _propTypes.default.string.isRequired,
  selectedOptions: _propTypes.default.arrayOf(_propTypes.default.shape({
    isGroupLabelOption: _propTypes.default.bool,
    label: _propTypes.default.string.isRequired,
    key: _propTypes.default.string,
    options: _propTypes.default.arrayOf(_propTypes.default.shape({
      isGroupLabelOption: _propTypes.default.bool,
      label: _propTypes.default.string.isRequired,
      key: _propTypes.default.string,
      options: _propTypes.default.arrayOf(_propTypes.default.any.isRequired),
      value: _propTypes.default.any,
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string
    }).isRequired),
    value: _propTypes.default.any,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired),
  singleSelection: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    asPlainText: _propTypes.default.bool
  }).isRequired]),
  toggleButtonRef: _propTypes.default.any,
  updatePosition: _propTypes.default.func.isRequired,
  value: _propTypes.default.string,
  prepend: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),
  append: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),
  isLoading: _propTypes.default.bool,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};