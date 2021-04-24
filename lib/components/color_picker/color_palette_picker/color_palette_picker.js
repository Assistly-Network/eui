"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorPalettePicker = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _form = require("../../form");

var _color_palette_display = require("../color_palette_display");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiColorPalettePicker = function EuiColorPalettePicker(_ref) {
  var className = _ref.className,
      _ref$compressed = _ref.compressed,
      compressed = _ref$compressed === void 0 ? false : _ref$compressed,
      disabled = _ref.disabled,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      onChange = _ref.onChange,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      valueOfSelected = _ref.valueOfSelected,
      palettes = _ref.palettes,
      append = _ref.append,
      prepend = _ref.prepend,
      _ref$selectionDisplay = _ref.selectionDisplay,
      selectionDisplay = _ref$selectionDisplay === void 0 ? 'palette' : _ref$selectionDisplay,
      rest = _objectWithoutProperties(_ref, ["className", "compressed", "disabled", "fullWidth", "isInvalid", "onChange", "readOnly", "valueOfSelected", "palettes", "append", "prepend", "selectionDisplay"]);

  var getPalette = function getPalette(_ref2) {
    var type = _ref2.type,
        palette = _ref2.palette;
    // Working around ExclusiveUnion
    return type === 'gradient' ? /*#__PURE__*/_react.default.createElement(_color_palette_display.EuiColorPaletteDisplay, {
      type: type,
      palette: palette
    }) : /*#__PURE__*/_react.default.createElement(_color_palette_display.EuiColorPaletteDisplay, {
      type: type,
      palette: palette
    });
  };

  var paletteOptions = palettes.map(function (item) {
    var type = item.type,
        value = item.value,
        title = item.title,
        palette = item.palette,
        rest = _objectWithoutProperties(item, ["type", "value", "title", "palette"]);

    var paletteForDisplay = item.type !== 'text' ? getPalette(item) : null;
    return _objectSpread({
      value: String(value),
      inputDisplay: selectionDisplay === 'title' || type === 'text' ? title : paletteForDisplay,
      dropdownDisplay: /*#__PURE__*/_react.default.createElement("div", {
        className: "euiColorPalettePicker__item"
      }, title && type !== 'text' && /*#__PURE__*/_react.default.createElement("div", {
        className: "euiColorPalettePicker__itemTitle"
      }, title), type === 'text' ? title : paletteForDisplay)
    }, rest);
  });
  return /*#__PURE__*/_react.default.createElement(_form.EuiSuperSelect, _extends({
    className: className,
    options: paletteOptions,
    valueOfSelected: valueOfSelected,
    onChange: onChange,
    hasDividers: true,
    isInvalid: isInvalid,
    compressed: compressed,
    disabled: disabled,
    readOnly: readOnly,
    fullWidth: fullWidth,
    append: append,
    prepend: prepend
  }, rest));
};

exports.EuiColorPalettePicker = EuiColorPalettePicker;
EuiColorPalettePicker.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  compressed: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  isInvalid: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  name: _propTypes.default.string,

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
  valueOfSelected: _propTypes.default.any,

  /**
       * Classes for the context menu item
       */
  itemClassName: _propTypes.default.string,

  /**
       * You must pass an `onChange` function to handle the update of the value
       */
  onChange: _propTypes.default.func,

  /**
       * Applied to the outermost wrapper (popover)
       */
  popoverClassName: _propTypes.default.string,

  /**
       * Controls whether the options are shown. Default: false
       */
  isOpen: _propTypes.default.bool,

  /**
       *  Specify what should be displayed after a selection: a `palette` or `title`
       */
  selectionDisplay: _propTypes.default.oneOf(["palette", "title"]),

  /**
       * An array of one of the following objects: #EuiColorPalettePickerPaletteText, #EuiColorPalettePickerPaletteFixed, #EuiColorPalettePickerPaletteGradient
       */
  palettes: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
    /**
       *  For storing unique value of item
       */
    value: _propTypes.default.string.isRequired,

    /**
       *  The name of your palette
       */
    title: _propTypes.default.string.isRequired,

    /**
       * `text`: a text only option (a title is required).
       */
    type: _propTypes.default.oneOf(["text"]).isRequired,

    /**
       * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
       */
    palette: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired, _propTypes.default.arrayOf(_propTypes.default.shape({
      stop: _propTypes.default.number.isRequired,
      color: _propTypes.default.string.isRequired
    }).isRequired).isRequired]),
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    /**
       *  For storing unique value of item
       */
    value: _propTypes.default.string.isRequired,

    /**
       *  The name of your palette
       */
    title: _propTypes.default.string,

    /**
       * `fixed`: individual color blocks
       */
    type: _propTypes.default.oneOf(["fixed"]).isRequired,

    /**
       * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
       */
    palette: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired, _propTypes.default.arrayOf(_propTypes.default.shape({
      stop: _propTypes.default.number.isRequired,
      color: _propTypes.default.string.isRequired
    }).isRequired).isRequired]).isRequired,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    /**
       *  For storing unique value of item
       */
    value: _propTypes.default.string.isRequired,

    /**
       *  The name of your palette
       */
    title: _propTypes.default.string,

    /**
       * `gradient`: each color fades into the next
       */
    type: _propTypes.default.oneOf(["gradient"]).isRequired,

    /**
       * Array of color `strings` or an array of #ColorStop. The stops must be numbers in an ordered range.
       */
    palette: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.string.isRequired).isRequired, _propTypes.default.arrayOf(_propTypes.default.shape({
      stop: _propTypes.default.number.isRequired,
      color: _propTypes.default.string.isRequired
    }).isRequired).isRequired]).isRequired,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired]).isRequired).isRequired
};