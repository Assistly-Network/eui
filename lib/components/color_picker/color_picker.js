"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorPicker = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _chromaJs = _interopRequireDefault(require("chroma-js"));

var _accessibility = require("../accessibility");

var _color_picker_swatch = require("./color_picker_swatch");

var _focus_trap = require("../focus_trap");

var _flex = require("../flex");

var _form = require("../form");

var _i18n = require("../i18n");

var _popover = require("../popover");

var _spacer = require("../spacer");

var _services = require("../../services");

var _hue = require("./hue");

var _saturation = require("./saturation");

var _utils = require("./utils");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function isKeyboardEvent(event) {
  return _typeof(event) === 'object' && 'key' in event;
}

var getOutput = function getOutput(text) {
  var showAlpha = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var color = (0, _utils.getChromaColor)(text, true);
  var isValid = true;

  if (!showAlpha && color !== null) {
    isValid = color.alpha() === 1;
  } // Note that if a consumer has disallowed opacity,
  // we still return the color with an alpha channel, but mark it as invalid


  return color ? {
    rgba: color.rgba(),
    hex: color.hex(),
    isValid: isValid
  } : {
    rgba: _utils.RGB_FALLBACK,
    hex: _utils.HEX_FALLBACK,
    isValid: false
  };
};

var getHsv = function getHsv(hsv) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Chroma's passthrough (RGB) parsing determines that black/white/gray are hue-less and returns `NaN`
  // For our purposes we can process `NaN` as `0` if necessary
  if (!hsv) return _utils.HSV_FALLBACK;
  var hue = isNaN(hsv[0]) ? fallback : hsv[0];
  return [hue, hsv[1], hsv[2]];
};

var EuiColorPicker = function EuiColorPicker(_ref) {
  var _ref8;

  var button = _ref.button,
      className = _ref.className,
      color = _ref.color,
      _ref$compressed = _ref.compressed,
      compressed = _ref$compressed === void 0 ? false : _ref$compressed,
      disabled = _ref.disabled,
      _ref$display = _ref.display,
      display = _ref$display === void 0 ? 'default' : _ref$display,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      id = _ref.id,
      isInvalid = _ref.isInvalid,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'default' : _ref$mode,
      onBlur = _ref.onBlur,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      _ref$readOnly = _ref.readOnly,
      readOnly = _ref$readOnly === void 0 ? false : _ref$readOnly,
      _ref$swatches = _ref.swatches,
      swatches = _ref$swatches === void 0 ? _services.VISUALIZATION_COLORS : _ref$swatches,
      popoverZIndex = _ref.popoverZIndex,
      prepend = _ref.prepend,
      append = _ref.append,
      _ref$showAlpha = _ref.showAlpha,
      showAlpha = _ref$showAlpha === void 0 ? false : _ref$showAlpha,
      format = _ref.format,
      _ref$secondaryInputDi = _ref.secondaryInputDisplay,
      secondaryInputDisplay = _ref$secondaryInputDi === void 0 ? 'none' : _ref$secondaryInputDi,
      _ref$isClearable = _ref.isClearable,
      isClearable = _ref$isClearable === void 0 ? false : _ref$isClearable,
      placeholder = _ref.placeholder;
  var preferredFormat = (0, _react.useMemo)(function () {
    if (format) return format;
    var parsed = (0, _utils.parseColor)(color);
    return parsed != null && _typeof(parsed) === 'object' ? 'rgba' : 'hex';
  }, [color, format]);
  var chromaColor = (0, _react.useMemo)(function () {
    return (0, _utils.getChromaColor)(color, showAlpha);
  }, [color, showAlpha]);

  var _useState = (0, _react.useState)('100'),
      _useState2 = _slicedToArray(_useState, 2),
      alphaRangeValue = _useState2[0],
      setAlphaRangeValue = _useState2[1];

  var alphaChannel = (0, _react.useMemo)(function () {
    return chromaColor ? chromaColor.alpha() : 1;
  }, [chromaColor]);
  (0, _react.useEffect)(function () {
    var percent = (alphaChannel * 100).toFixed();
    setAlphaRangeValue(percent);
  }, [alphaChannel]);

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isColorSelectorShown = _useState4[0],
      setIsColorSelectorShown = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      inputRef = _useState6[0],
      setInputRef = _useState6[1]; // Ideally this is uses `useRef`, but `EuiFieldText` isn't ready for that


  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      popoverShouldOwnFocus = _useState8[0],
      setPopoverShouldOwnFocus = _useState8[1];

  var prevColor = (0, _react.useRef)(chromaColor ? chromaColor.rgba().join() : null);

  var _useState9 = (0, _react.useState)(chromaColor ? getHsv(chromaColor.hsv()) : _utils.HSV_FALLBACK),
      _useState10 = _slicedToArray(_useState9, 2),
      colorAsHsv = _useState10[0],
      setColorAsHsv = _useState10[1];

  var usableHsv = (0, _react.useMemo)(function () {
    if (chromaColor && chromaColor.rgba().join() !== prevColor.current) {
      var _chromaColor$hsv = chromaColor.hsv(),
          _chromaColor$hsv2 = _slicedToArray(_chromaColor$hsv, 3),
          h = _chromaColor$hsv2[0],
          s = _chromaColor$hsv2[1],
          v = _chromaColor$hsv2[2];

      var hue = isNaN(h) ? colorAsHsv[0] : h;
      return [hue, s, v];
    }

    return colorAsHsv;
  }, [chromaColor, colorAsHsv]);
  var satruationRef = (0, _react.useRef)(null);
  var swatchRef = (0, _react.useRef)(null);

  var updateColorAsHsv = function updateColorAsHsv(_ref2) {
    var _ref3 = _slicedToArray(_ref2, 3),
        h = _ref3[0],
        s = _ref3[1],
        v = _ref3[2];

    setColorAsHsv(getHsv([h, s, v], usableHsv[0]));
  };

  var classes = (0, _classnames.default)('euiColorPicker', className);
  var popoverClass = 'euiColorPicker__popoverAnchor';
  var panelClasses = (0, _classnames.default)('euiColorPicker__popoverPanel', {
    'euiColorPicker__popoverPanel--pickerOnly': mode === 'picker' && secondaryInputDisplay !== 'bottom',
    'euiColorPicker__popoverPanel--customButton': button
  });
  var swatchClass = 'euiColorPicker__swatchSelect';
  var testSubjAnchor = 'colorPickerAnchor';
  var testSubjPopover = 'colorPickerPopover';
  var inputClasses = (0, _classnames.default)('euiColorPicker__input', {
    'euiColorPicker__input--inGroup': prepend || append
  });

  var handleOnChange = function handleOnChange(text) {
    var output = getOutput(text, showAlpha);

    if (output.isValid) {
      prevColor.current = output.rgba.join();
    }

    onChange(text, output);
  };

  var closeColorSelector = function closeColorSelector() {
    var shouldDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (onBlur) {
      onBlur();
    }

    if (shouldDelay) {
      setTimeout(function () {
        return setIsColorSelectorShown(false);
      });
    } else {
      setIsColorSelectorShown(false);
    }
  };

  var showColorSelector = function showColorSelector() {
    var shouldFocusInside = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    if (isColorSelectorShown || readOnly) return;

    if (onFocus) {
      onFocus();
    }

    setPopoverShouldOwnFocus(shouldFocusInside);
    setIsColorSelectorShown(true);
  };

  var handleToggle = function handleToggle() {
    if (isColorSelectorShown) {
      closeColorSelector();
    } else {
      showColorSelector(true);
    }
  };

  var handleFinalSelection = function handleFinalSelection() {
    // When the trigger is an input, focus the input so you can adjust
    if (inputRef) {
      inputRef.focus();
    }

    closeColorSelector(true);
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (event.key === _services.keys.ENTER) {
      if (isColorSelectorShown) {
        handleFinalSelection();
      } else {
        showColorSelector();
      }
    }
  };

  var handleInputActivity = function handleInputActivity(event) {
    if (isKeyboardEvent(event)) {
      if (event.key === _services.keys.ENTER) {
        event.preventDefault();
        handleToggle();
      }
    } else {
      showColorSelector();
    }
  };

  var handleToggleOnKeyDown = function handleToggleOnKeyDown(event) {
    if (event.key === _services.keys.ARROW_DOWN) {
      event.preventDefault();

      if (isColorSelectorShown) {
        var nextFocusEl = mode !== 'swatch' ? satruationRef : swatchRef;

        if (nextFocusEl.current) {
          nextFocusEl.current.focus();
        }
      } else {
        showColorSelector(true);
      }
    }
  };

  var handleColorInput = function handleColorInput(event) {
    handleOnChange(event.target.value);
    var newColor = (0, _utils.getChromaColor)(event.target.value, showAlpha);

    if (newColor) {
      updateColorAsHsv(newColor.hsv());
    }
  };

  var handleClearInput = function handleClearInput() {
    handleOnChange('');

    if (secondaryInputDisplay === 'none' && isColorSelectorShown) {
      closeColorSelector();
    }
  };

  var updateWithHsv = function updateWithHsv(hsv) {
    var color = _chromaJs.default.hsv.apply(_chromaJs.default, _toConsumableArray(hsv)).alpha(alphaChannel);

    var formatted;

    if (preferredFormat === 'rgba') {
      formatted = alphaChannel < 1 ? color.rgba().join(_utils.RGB_JOIN) : color.rgb().join(_utils.RGB_JOIN);
    } else {
      formatted = color.hex();
    }

    handleOnChange(formatted);
    updateColorAsHsv(hsv);
  };

  var handleColorSelection = function handleColorSelection(color) {
    var _usableHsv = _slicedToArray(usableHsv, 1),
        h = _usableHsv[0];

    var _color = _slicedToArray(color, 3),
        s = _color[1],
        v = _color[2];

    var newHsv = [h, s, v];
    updateWithHsv(newHsv);
  };

  var handleHueSelection = function handleHueSelection(hue) {
    var _usableHsv2 = _slicedToArray(usableHsv, 3),
        s = _usableHsv2[1],
        v = _usableHsv2[2];

    var newHsv = [hue, s, v];
    updateWithHsv(newHsv);
  };

  var handleSwatchSelection = function handleSwatchSelection(color) {
    var newColor = (0, _utils.getChromaColor)(color, showAlpha);
    handleOnChange(color);

    if (newColor) {
      updateColorAsHsv(newColor.hsv());
    }

    handleFinalSelection();
  };

  var handleAlphaSelection = function handleAlphaSelection(e, isValid) {
    var target = e.target;
    setAlphaRangeValue(target.value || '');

    if (isValid) {
      var alpha = parseInt(target.value, 10) / 100;
      var newColor = chromaColor ? chromaColor.alpha(alpha) : null;
      var hex = newColor ? newColor.hex() : _utils.HEX_FALLBACK;
      var rgba = newColor ? newColor.rgba() : _utils.RGB_FALLBACK;

      var _text;

      if (preferredFormat === 'rgba') {
        _text = alpha < 1 ? rgba.join(_utils.RGB_JOIN) : rgba.slice(0, 3).join(_utils.RGB_JOIN);
      } else {
        _text = hex;
      }

      onChange(_text, {
        hex: hex,
        rgba: rgba,
        isValid: !!newColor
      });
    }
  };

  var inlineInput = secondaryInputDisplay !== 'none' && /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    tokens: ['euiColorPicker.colorLabel', 'euiColorPicker.colorErrorMessage', 'euiColorPicker.transparent'],
    defaults: ['Color value', 'Invalid color value', 'Transparent']
  }, function (_ref4) {
    var _ref5 = _slicedToArray(_ref4, 3),
        colorLabel = _ref5[0],
        colorErrorMessage = _ref5[1],
        transparent = _ref5[2];

    return /*#__PURE__*/_react.default.createElement(_form.EuiFormRow, {
      display: "rowCompressed",
      isInvalid: isInvalid,
      error: isInvalid ? colorErrorMessage : null
    }, /*#__PURE__*/_react.default.createElement(_form.EuiFormControlLayout, {
      clear: isClearable && color && !readOnly && !disabled ? {
        onClick: handleClearInput
      } : undefined,
      readOnly: readOnly,
      compressed: compressed
    }, /*#__PURE__*/_react.default.createElement(_form.EuiFieldText, {
      compressed: true,
      value: color ? color.toUpperCase() : _utils.HEX_FALLBACK,
      placeholder: !color ? placeholder || transparent : undefined,
      onChange: handleColorInput,
      isInvalid: isInvalid,
      disabled: disabled,
      readOnly: readOnly,
      "aria-label": colorLabel,
      autoComplete: "off",
      "data-test-subj": "".concat(secondaryInputDisplay, "ColorPickerInput")
    })));
  });

  var showSecondaryInputOnly = mode === 'secondaryInput';
  var showPicker = mode !== 'swatch' && !showSecondaryInputOnly;
  var showSwatches = mode !== 'picker' && !showSecondaryInputOnly;

  var composite = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, secondaryInputDisplay === 'top' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, inlineInput, /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, {
    size: "s"
  })), showPicker && /*#__PURE__*/_react.default.createElement("div", {
    onKeyDown: handleOnKeyDown
  }, /*#__PURE__*/_react.default.createElement(_saturation.EuiSaturation, {
    id: id,
    color: usableHsv,
    hex: chromaColor ? chromaColor.hex() : undefined,
    onChange: handleColorSelection,
    ref: satruationRef
  }), /*#__PURE__*/_react.default.createElement(_hue.EuiHue, {
    id: id,
    hue: usableHsv[0],
    hex: chromaColor ? chromaColor.hex() : undefined,
    onChange: handleHueSelection
  })), showSwatches && /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
    wrap: true,
    responsive: false,
    gutterSize: "s",
    role: "listbox"
  }, swatches.map(function (swatch, index) {
    return /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
      grow: false,
      key: swatch
    }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiColorPicker.swatchAriaLabel",
      values: {
        swatch: swatch
      },
      default: "Select {swatch} as the color"
    }, function (swatchAriaLabel) {
      return /*#__PURE__*/_react.default.createElement(_color_picker_swatch.EuiColorPickerSwatch, {
        className: swatchClass,
        color: swatch,
        onClick: function onClick() {
          return handleSwatchSelection(swatch);
        },
        "aria-label": swatchAriaLabel,
        role: "option",
        ref: index === 0 ? swatchRef : undefined
      });
    }));
  })), secondaryInputDisplay === 'bottom' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mode !== 'picker' && /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, {
    size: "s"
  }), inlineInput), showAlpha && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, {
    size: "s"
  }), /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiColorPicker.alphaLabel",
    default: "Alpha channel (opacity) value"
  }, function (alphaLabel) {
    return /*#__PURE__*/_react.default.createElement(_form.EuiRange, {
      className: "euiColorPicker__alphaRange",
      "data-test-subj": "colorPickerAlpha",
      compressed: true,
      showInput: true,
      max: 100,
      min: 0,
      value: alphaRangeValue,
      append: "%",
      onChange: handleAlphaSelection,
      "aria-label": alphaLabel
    });
  })));

  var buttonOrInput;

  if (button) {
    buttonOrInput = /*#__PURE__*/(0, _react.cloneElement)(button, {
      onClick: handleToggle,
      id: id,
      disabled: disabled,
      'data-test-subj': testSubjAnchor
    });
  } else {
    var colorStyle = chromaColor ? chromaColor.css() : undefined;
    buttonOrInput = /*#__PURE__*/_react.default.createElement(_form.EuiFormControlLayout, {
      icon: !readOnly ? {
        type: 'arrowDown',
        side: 'right'
      } : undefined,
      clear: isClearable && color && !readOnly && !disabled ? {
        onClick: handleClearInput
      } : undefined,
      readOnly: readOnly,
      fullWidth: fullWidth,
      compressed: compressed,
      onKeyDown: handleToggleOnKeyDown,
      prepend: prepend,
      append: append
    }, /*#__PURE__*/_react.default.createElement("div", {
      // Used to pass the chosen color through to form layout SVG using currentColor
      style: {
        color: colorStyle
      }
    }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiColorPicker.openLabel', 'euiColorPicker.closeLabel', 'euiColorPicker.transparent'],
      defaults: ['Press the escape key to close the popover', 'Press the down key to open a popover containing color options', 'Transparent']
    }, function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 3),
          openLabel = _ref7[0],
          closeLabel = _ref7[1],
          transparent = _ref7[2];

      return /*#__PURE__*/_react.default.createElement(_form.EuiFieldText, {
        className: inputClasses,
        onClick: handleInputActivity,
        onKeyDown: handleInputActivity,
        value: color ? color.toUpperCase() : _utils.HEX_FALLBACK,
        placeholder: !color ? placeholder || transparent : undefined,
        id: id,
        onChange: handleColorInput,
        icon: chromaColor ? 'swatchInput' : 'stopSlash',
        inputRef: setInputRef,
        isInvalid: isInvalid,
        compressed: compressed,
        disabled: disabled,
        readOnly: readOnly,
        fullWidth: fullWidth,
        autoComplete: "off",
        "data-test-subj": testSubjAnchor,
        "aria-label": isColorSelectorShown ? openLabel : closeLabel
      });
    })));
  }

  return display === 'inline' ? /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, composite) : /*#__PURE__*/_react.default.createElement(_popover.EuiPopover, {
    ownFocus: popoverShouldOwnFocus,
    initialFocus: (_ref8 = mode !== 'swatch' ? satruationRef.current : swatchRef.current) !== null && _ref8 !== void 0 ? _ref8 : undefined,
    button: buttonOrInput,
    isOpen: isColorSelectorShown,
    closePopover: handleFinalSelection,
    zIndex: popoverZIndex,
    className: popoverClass,
    panelClassName: panelClasses,
    display: button ? 'inlineBlock' : 'block',
    attachToAnchor: button ? false : true,
    anchorPosition: "downLeft",
    panelPaddingSize: "s"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    "data-test-subj": testSubjPopover
  }, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, {
    clickOutsideDisables: true
  }, /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("p", {
    "aria-live": "polite"
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiColorPicker.screenReaderAnnouncement",
    default: "A popup with a range of selectable colors opened. Tab forward to cycle through colors choices or press escape to close this popup."
  }))), composite)));
};

exports.EuiColorPicker = EuiColorPicker;
EuiColorPicker.propTypes = {
  /**
     *  Custom element to use instead of text input
     */
  button: _propTypes.default.element,

  /**
     *  Use the compressed style for EuiFieldText
     */
  compressed: _propTypes.default.bool,
  display: _propTypes.default.oneOf(["default", "inline"]),
  disabled: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  id: _propTypes.default.string,

  /**
     *  Custom validation flag
     */
  isInvalid: _propTypes.default.bool,

  /**
     * Choose between swatches with gradient picker (default), swatches only, gradient picker only, or secondary input only.
     */
  mode: _propTypes.default.oneOf(["default", "swatch", "picker", "secondaryInput"]),

  /**
     *  Custom z-index for the popover
     */
  popoverZIndex: _propTypes.default.number,
  readOnly: _propTypes.default.bool,

  /**
     *  Array of hex strings (3 or 6 character) to use as swatch options. Defaults to EUI visualization colors
     */
  swatches: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),

  /**
     * Creates an input group with element(s) coming before input. It only shows when the `display` is set to `default`.
     * `string` | `ReactElement` or an array of these
     */
  prepend: _propTypes.default.any,

  /**
     * Creates an input group with element(s) coming after input. It only shows when the `display` is set to `default`.
     * `string` | `ReactElement` or an array of these
     */
  append: _propTypes.default.any,

  /**
     * Whether to render the alpha channel (opacity) value range slider.
     */
  showAlpha: _propTypes.default.bool,

  /**
     * Will format the text input in the provided format when possible (hue and saturation selection)
     * Exceptions: Manual text input and swatches will display as-authored
     * Default is to display the last format entered by the user
     */
  format: _propTypes.default.oneOf(["hex", "rgba"]),

  /**
     * Placement option for a secondary color value input.
     */
  secondaryInputDisplay: _propTypes.default.oneOf(["top", "bottom", "none"]),

  /**
     * Add a button to the primary input to clear its value.
     */
  isClearable: _propTypes.default.bool,

  /**
     * Text to replace the default 'Transparent' placeholder for unset color values.
     */
  placeholder: _propTypes.default.string,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * hex (string)
     * RGB (as comma separated string)
     * RGBa (as comma separated string)
     * Empty string will register as 'transparent'
     */
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf([null])]),
  onBlur: _propTypes.default.func,

  /**
     * text (string, as entered or selected)
     * hex (8-digit hex if alpha < 1, otherwise 6-digit hex)
     * RGBa (as array; values of NaN if color is invalid)
     * isValid (boolean signifying if the input text is a valid color)
     */
  onChange: _propTypes.default.func.isRequired,
  onFocus: _propTypes.default.func
};