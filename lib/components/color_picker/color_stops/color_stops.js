"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiColorStops = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../../services");

var _color_stop_thumb = require("./color_stop_thumb");

var _utils = require("./utils");

var _utils2 = require("../utils");

var _i18n = require("../../i18n");

var _accessibility = require("../../accessibility");

var _range_highlight = require("../../form/range/range_highlight");

var _range_track = require("../../form/range/range_track");

var _range_wrapper = require("../../form/range/range_wrapper");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Because of how the thumbs are rendered in the popover, using ref results in an infinite loop.
// We'll instead use old fashioned namespaced DOM selectors to get references
var STOP_ATTR = 'euiColorStop_';
var DEFAULT_MIN = 0;
var DEFAULT_MAX = 100;

function isTargetAThumb(target) {
  var element = target;
  var attr = element.getAttribute('data-index');
  return attr && attr.indexOf(STOP_ATTR) > -1;
}

function sortStops(colorStops) {
  return colorStops.map(function (el, index) {
    return _objectSpread(_objectSpread({}, el), {}, {
      id: index
    });
  }).sort(function (a, b) {
    return a.stop - b.stop;
  });
}

function getValidStops(colorStops) {
  return colorStops.map(function (el) {
    return el.stop;
  }).filter(function (stop) {
    return !isNaN(stop);
  });
}

function getRangeMin(colorStops, min) {
  var rangeMin = min || DEFAULT_MIN;
  var stops = getValidStops(colorStops);
  var first = Math.min.apply(Math, _toConsumableArray(stops)); // https://johnresig.com/blog/fast-javascript-maxmin/

  if (first < rangeMin) {
    if (stops.length === 1) {
      return first - DEFAULT_MIN;
    } else if (stops.length >= 2) {
      return first;
    }
  }

  return DEFAULT_MIN;
}

function getRangeMax(colorStops, max) {
  var rangeMax = max || DEFAULT_MAX;
  var stops = getValidStops(colorStops);
  var last = Math.max.apply(Math, _toConsumableArray(stops)); // https://johnresig.com/blog/fast-javascript-maxmin/

  if (last > rangeMax) {
    if (stops.length === 1) {
      return last + DEFAULT_MAX;
    } else if (stops.length >= 2) {
      return last;
    }
  }

  return DEFAULT_MAX;
}

var EuiColorStops = function EuiColorStops(_ref) {
  var _ref$addColor = _ref.addColor,
      addColor = _ref$addColor === void 0 ? _services.DEFAULT_VISUALIZATION_COLOR : _ref$addColor,
      max = _ref.max,
      min = _ref.min,
      _ref$mode = _ref.mode,
      mode = _ref$mode === void 0 ? 'default' : _ref$mode,
      colorStops = _ref.colorStops,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      readOnly = _ref.readOnly,
      compressed = _ref.compressed,
      fullWidth = _ref.fullWidth,
      className = _ref.className,
      label = _ref.label,
      _ref$stopType = _ref.stopType,
      stopType = _ref$stopType === void 0 ? 'gradient' : _ref$stopType,
      _ref$stepNumber = _ref.stepNumber,
      stepNumber = _ref$stepNumber === void 0 ? 10 : _ref$stepNumber,
      swatches = _ref.swatches,
      _ref$showAlpha = _ref.showAlpha,
      showAlpha = _ref$showAlpha === void 0 ? false : _ref$showAlpha,
      valueInputProps = _ref.valueInputProps;
  var sortedStops = (0, _react.useMemo)(function () {
    return sortStops(colorStops);
  }, [colorStops]);
  var rangeMax = (0, _react.useMemo)(function () {
    var result = max != null ? max : getRangeMax(colorStops, max);
    var width = max != null ? 0 : Math.round(result * 0.05);
    return !isNaN(result) ? result + width : DEFAULT_MAX;
  }, [colorStops, max]);
  var rangeMin = (0, _react.useMemo)(function () {
    var result = min != null ? min : getRangeMin(colorStops, min);
    var width = min != null ? 0 : Math.round(rangeMax * 0.05);
    return !isNaN(result) ? result - width : DEFAULT_MIN;
  }, [colorStops, min, rangeMax]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasFocus = _useState2[0],
      setHasFocus = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedStopIndex = _useState4[0],
      setFocusedStopIndex = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      openedStopId = _useState6[0],
      setOpenedStopId = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      wrapperRef = _useState8[0],
      setWrapperRef = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      addTargetPosition = _useState10[0],
      setAddTargetPosition = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isHoverDisabled = _useState12[0],
      setIsHoverDisabled = _useState12[1];

  var _useState13 = (0, _react.useState)(null),
      _useState14 = _slicedToArray(_useState13, 2),
      focusStopOnUpdate = _useState14[0],
      setFocusStopOnUpdate = _useState14[1];

  var isNotInteractive = disabled || readOnly;
  var classes = (0, _classnames.default)('euiColorStops', {
    'euiColorStops-isDragging': isHoverDisabled,
    'euiColorStops-isDisabled': disabled,
    'euiColorStops-isReadOnly': readOnly
  }, className);

  var getStopFromMouseLocationFn = function getStopFromMouseLocationFn(location) {
    // Guard against `null` ref in usage
    return (0, _utils.getStopFromMouseLocation)(location, wrapperRef, min || rangeMin, max || rangeMax);
  };

  var getPositionFromStopFn = function getPositionFromStopFn(stop) {
    // Guard against `null` ref in usage
    return (0, _utils.getPositionFromStop)(stop, wrapperRef, min || rangeMin, max || rangeMax);
  };

  var handleOnChange = (0, _react.useCallback)(function (colorStops) {
    onChange(colorStops, (0, _utils.isInvalid)(colorStops, showAlpha));
  }, [onChange, showAlpha]);
  var onFocusStop = (0, _react.useCallback)(function (index) {
    if (disabled || !wrapperRef) return;
    var toFocus = wrapperRef.querySelector("[data-index=".concat(STOP_ATTR).concat(index, "]"));

    if (toFocus) {
      setHasFocus(false);
      setFocusedStopIndex(index);
      toFocus.focus();
    }
  }, [disabled, wrapperRef]);
  (0, _react.useEffect)(function () {
    if (focusStopOnUpdate !== null) {
      var toFocusIndex = sortedStops.map(function (el) {
        return el.stop;
      }).indexOf(focusStopOnUpdate);
      var toFocusId = toFocusIndex > -1 ? sortedStops[toFocusIndex].id : null;
      onFocusStop(toFocusIndex);
      setOpenedStopId(toFocusId);
      setFocusStopOnUpdate(null);
    }
  }, [sortedStops, onFocusStop, setFocusStopOnUpdate, focusStopOnUpdate]);
  var onFocusWrapper = (0, _react.useCallback)(function () {
    setFocusedStopIndex(null);

    if (wrapperRef) {
      wrapperRef.focus();
    }
  }, [wrapperRef]);

  var setWrapperHasFocus = function setWrapperHasFocus(e) {
    if (e.target === wrapperRef) {
      setHasFocus(true);
    }
  };

  var removeWrapperFocus = function removeWrapperFocus() {
    setHasFocus(false);
  };

  var onAdd = function onAdd() {
    var stops = sortedStops.map(function (_ref2) {
      var color = _ref2.color,
          stop = _ref2.stop;
      return {
        color: color,
        stop: stop
      };
    });
    var newColorStops = (0, _utils.addStop)(stops, addColor, max || rangeMax);
    setFocusStopOnUpdate(newColorStops[colorStops.length].stop);
    handleOnChange(newColorStops);
  };

  var onRemove = (0, _react.useCallback)(function (index) {
    var newColorStops = (0, _utils.removeStop)(colorStops, index);
    onFocusWrapper();
    handleOnChange(newColorStops);
  }, [colorStops, handleOnChange, onFocusWrapper]);

  var disableHover = function disableHover() {
    if (disabled) return;
    setIsHoverDisabled(true);
  };

  var enableHover = function enableHover() {
    if (disabled) return;
    setIsHoverDisabled(false);
  };

  var handleAddHover = function handleAddHover(e) {
    if (isNotInteractive || !wrapperRef) return;
    var stop = getStopFromMouseLocationFn({
      x: e.pageX,
      y: e.pageY
    });
    var position = getPositionFromStopFn(stop);
    setAddTargetPosition(position);
  };

  var handleAddClick = function handleAddClick(e) {
    if (isNotInteractive || isTargetAThumb(e.target) || !wrapperRef) return;
    var newStop = getStopFromMouseLocationFn({
      x: e.pageX,
      y: e.pageY
    });
    var newColorStops = (0, _utils.addDefinedStop)(colorStops, newStop, addColor);
    setFocusStopOnUpdate(newStop);
    handleOnChange(newColorStops);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (disabled) return;

    switch (event.key) {
      case _services.keys.ESCAPE:
        onFocusWrapper();
        break;

      case _services.keys.ENTER:
        if (readOnly || !hasFocus) return;
        onAdd();
        break;

      case _services.keys.BACKSPACE:
        if (readOnly || hasFocus || focusedStopIndex == null) return;

        if (isTargetAThumb(event.target)) {
          if (min == null && focusedStopIndex === 0 || max == null && focusedStopIndex === sortedStops.length - 1) {
            return;
          }

          var index = sortedStops[focusedStopIndex].id;
          onRemove(index);
        }

        break;

      case _services.keys.ARROW_DOWN:
        if (event.target === wrapperRef || isTargetAThumb(event.target)) {
          event.preventDefault();

          if (focusedStopIndex == null) {
            onFocusStop(0);
          } else {
            var next = focusedStopIndex === sortedStops.length - 1 ? focusedStopIndex : focusedStopIndex + 1;
            onFocusStop(next);
          }
        }

        break;

      case _services.keys.ARROW_UP:
        if (event.target === wrapperRef || isTargetAThumb(event.target)) {
          event.preventDefault();

          if (focusedStopIndex == null) {
            onFocusStop(0);
          } else {
            var _next = focusedStopIndex === 0 ? focusedStopIndex : focusedStopIndex - 1;

            onFocusStop(_next);
          }
        }

        break;
    }
  };

  var thumbs = (0, _react.useMemo)(function () {
    var handleStopChange = function handleStopChange(stop, id) {
      var newColorStops = _toConsumableArray(colorStops);

      newColorStops.splice(id, 1, stop);
      handleOnChange(newColorStops);
    };

    return sortedStops.map(function (colorStop, index) {
      return /*#__PURE__*/_react.default.createElement(_color_stop_thumb.EuiColorStopThumb, {
        isRangeMin: min == null && colorStop.stop === rangeMin,
        isRangeMax: max == null && colorStop.stop === rangeMax,
        "data-index": "".concat(STOP_ATTR).concat(index),
        key: colorStop.id,
        globalMin: min || rangeMin,
        globalMax: max || rangeMax,
        min: min,
        max: max,
        localMin: index === 0 ? min || rangeMin : sortedStops[index - 1].stop + 1,
        localMax: index === sortedStops.length - 1 ? max || rangeMax : sortedStops[index + 1].stop - 1,
        stop: colorStop.stop,
        color: colorStop.color,
        onRemove: sortedStops.length > 1 ? function () {
          return onRemove(colorStop.id);
        } : undefined,
        onChange: function onChange(stop) {
          return handleStopChange(stop, colorStop.id);
        },
        onFocus: function onFocus() {
          return setFocusedStopIndex(index);
        },
        parentRef: wrapperRef,
        colorPickerMode: mode,
        colorPickerShowAlpha: showAlpha,
        colorPickerSwatches: swatches,
        disabled: disabled,
        readOnly: readOnly,
        "aria-valuetext": "Stop: ".concat(colorStop.stop, ", Color: ").concat(colorStop.color, " (").concat(index + 1, " of ").concat(colorStops.length, ")"),
        isPopoverOpen: colorStop.id === openedStopId,
        openPopover: function openPopover() {
          setOpenedStopId(colorStop.id);
        },
        closePopover: function closePopover() {
          setOpenedStopId(null);
        },
        valueInputProps: valueInputProps
      });
    });
  }, [colorStops, disabled, handleOnChange, max, min, mode, onRemove, openedStopId, rangeMax, rangeMin, readOnly, showAlpha, sortedStops, swatches, wrapperRef, valueInputProps]);
  var positions = wrapperRef ? sortedStops.map(function (_ref3) {
    var stop = _ref3.stop;
    return getPositionFromStopFn(stop);
  }) : [];

  var gradientStop = function gradientStop(colorStop, index) {
    var color = (0, _utils2.getChromaColor)(colorStop.color, showAlpha);
    var rgba = color ? color.css() : 'currentColor';

    if (index === 0) {
      return "currentColor, currentColor ".concat(positions[index], "%, ").concat(rgba, " ").concat(positions[index], "%");
    }

    return "".concat(rgba, " ").concat(positions[index], "%");
  };

  var fixedStop = function fixedStop(colorStop, index) {
    if (index === sortedStops.length - 1) {
      return gradientStop(colorStop, index);
    } else {
      return "".concat(gradientStop(colorStop, index), ", ").concat(gradientStop(colorStop, index + 1));
    }
  };

  var gradient = '';

  if (stopType === 'stepped' && positions.length > 0) {
    var trailingPercentage = positions[0];
    var endingPercentage = positions[positions.length - 1];
    var steppedColors = (0, _services.getSteppedGradient)(colorStops, stepNumber);
    var steppedGradient = '';
    var percentage = (endingPercentage - trailingPercentage) / steppedColors.length;
    var percentageSteps = (endingPercentage - trailingPercentage) / steppedColors.length + trailingPercentage;
    steppedColors.forEach(function (color) {
      steppedGradient = steppedGradient.concat("".concat(color, " ").concat(percentageSteps - percentage, "% ").concat(percentageSteps, "%, "));
      percentageSteps = percentageSteps + percentage;
    });
    steppedGradient = steppedGradient.substring(0, steppedGradient.length - 2);
    gradient = "linear-gradient(to right, currentColor ".concat(trailingPercentage, "%, ").concat(steppedGradient, ")");
  } else {
    var linearGradient = sortedStops.map(stopType === 'gradient' ? gradientStop : fixedStop);
    gradient = "linear-gradient(to right,".concat(linearGradient, ")");
  }

  return /*#__PURE__*/_react.default.createElement(_range_wrapper.EuiRangeWrapper, {
    "data-test-subj": "euiColorStops",
    ref: setWrapperRef,
    className: classes,
    fullWidth: fullWidth,
    tabIndex: disabled ? -1 : 0,
    onMouseDown: disableHover,
    onMouseUp: enableHover,
    onMouseLeave: enableHover,
    onKeyDown: handleKeyDown,
    onFocus: setWrapperHasFocus,
    onBlur: removeWrapperFocus
  }, /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("p", {
    "aria-live": "polite"
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    values: {
      label: label,
      disabled: disabled ? 'Disabled.' : '',
      readOnly: readOnly ? 'Read-only.' : ''
    },
    token: "euiColorStops.screenReaderAnnouncement",
    default: "{label}: {readOnly} {disabled} Color stop picker. Each stop consists of a number and corresponding color value. Use the Down and Up arrow keys to select individual stops. Press the Enter key to create a new stop."
  }))), /*#__PURE__*/_react.default.createElement(_range_track.EuiRangeTrack, {
    min: min || rangeMin,
    max: max || rangeMax,
    compressed: compressed,
    disabled: disabled,
    step: 1
  }, /*#__PURE__*/_react.default.createElement(_range_highlight.EuiRangeHighlight, {
    className: "euiColorStops__highlight",
    min: min || rangeMin,
    max: max || rangeMax,
    lowerValue: min || rangeMin,
    upperValue: max || rangeMax,
    background: gradient,
    compressed: compressed
  }), /*#__PURE__*/_react.default.createElement("div", {
    "data-test-subj": "euiColorStopsAdd",
    className: (0, _classnames.default)('euiColorStops__addContainer', {
      'euiColorStops__addContainer-isDisabled': isHoverDisabled || disabled || readOnly
    }),
    onClick: handleAddClick,
    onMouseMove: handleAddHover
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "euiColorStops__addTarget",
    style: {
      left: "".concat(addTargetPosition, "%")
    }
  })), thumbs));
};

exports.EuiColorStops = EuiColorStops;
EuiColorStops.propTypes = {
  addColor: _propTypes.default.string,

  /**
     * An array of #ColorStop. The stops must be numbers in an ordered range.
     */
  colorStops: _propTypes.default.arrayOf(_propTypes.default.shape({
    stop: _propTypes.default.number.isRequired,
    color: _propTypes.default.string.isRequired
  }).isRequired).isRequired,
  onChange: _propTypes.default.func.isRequired,
  fullWidth: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  readOnly: _propTypes.default.bool,
  invalid: _propTypes.default.bool,
  compressed: _propTypes.default.bool,
  className: _propTypes.default.string,
  max: _propTypes.default.number,
  min: _propTypes.default.number,
  label: _propTypes.default.string.isRequired,

  /**
     *  Specify the type of stops:
     *  `fixed`: individual color blocks.
     *  `gradient`: each color fades into the next.
     *  `stepped`: interpolation between colors with a fixed number of steps.
     */
  stopType: _propTypes.default.oneOf(["fixed", "gradient", "stepped"]),

  /**
     * Only works when `stopType="stepped"`
     */
  stepNumber: _propTypes.default.number,
  mode: _propTypes.default.oneOf(["default", "swatch", "picker", "secondaryInput"]),
  swatches: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
  showAlpha: _propTypes.default.bool,

  /**
     * Props passed to the value input field in the color stop popover.
     * Can be used to configure functionality like append or prepend.
     */
  valueInputProps: _propTypes.default.any,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};