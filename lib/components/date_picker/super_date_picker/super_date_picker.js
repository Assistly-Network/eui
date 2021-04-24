"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "prettyDuration", {
  enumerable: true,
  get: function get() {
    return _pretty_duration.prettyDuration;
  }
});
Object.defineProperty(exports, "commonDurationRanges", {
  enumerable: true,
  get: function get() {
    return _pretty_duration.commonDurationRanges;
  }
});
exports.EuiSuperDatePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pretty_duration = require("./pretty_duration");

var _pretty_interval = require("./pretty_interval");

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _super_update_button = require("./super_update_button");

var _quick_select_popover = require("./quick_select_popover/quick_select_popover");

var _date_popover_button = require("./date_popover/date_popover_button");

var _date_picker_range = require("../date_picker_range");

var _form = require("../../form");

var _flex = require("../../flex");

var _async_interval = require("./async_interval");

var _i18n = require("../../i18n");

var _context = require("../../context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function isRangeInvalid(start, end) {
  if (start === 'now' && end === 'now') {
    return true;
  }

  var startMoment = _datemath.default.parse(start);

  var endMoment = _datemath.default.parse(end, {
    roundUp: true
  });

  if (!startMoment || !endMoment || !startMoment.isValid() || !endMoment.isValid()) {
    return true;
  }

  if (startMoment.isAfter(endMoment)) {
    return true;
  }

  return false;
}

var EuiSuperDatePicker = /*#__PURE__*/function (_Component) {
  _inherits(EuiSuperDatePicker, _Component);

  var _super = _createSuper(EuiSuperDatePicker);

  function EuiSuperDatePicker() {
    var _this;

    _classCallCheck(this, EuiSuperDatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "asyncInterval", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      prevProps: {
        start: _this.props.start,
        end: _this.props.end
      },
      start: _this.props.start,
      end: _this.props.end,
      isInvalid: isRangeInvalid(_this.props.start, _this.props.end),
      hasChanged: false,
      showPrettyDuration: (0, _pretty_duration.showPrettyDuration)(_this.props.start, _this.props.end, _this.props.commonlyUsedRanges),
      isStartDatePopoverOpen: false,
      isEndDatePopoverOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "setTime", function (_ref) {
      var end = _ref.end,
          start = _ref.start;
      var isInvalid = isRangeInvalid(start, end);

      _this.setState({
        start: start,
        end: end,
        isInvalid: isInvalid,
        hasChanged: !(_this.state.prevProps.start === start && _this.state.prevProps.end === end)
      });

      if (!_this.props.showUpdateButton) {
        _this.props.onTimeChange({
          start: start,
          end: end,
          isQuickSelection: false,
          isInvalid: isInvalid
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      if (!_this.props.isPaused) {
        _this.startInterval(_this.props.refreshInterval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function () {
      _this.stopInterval();

      if (!_this.props.isPaused) {
        _this.startInterval(_this.props.refreshInterval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.stopInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "setStart", function (start) {
      _this.setTime({
        start: start,
        end: _this.state.end
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setEnd", function (end) {
      _this.setTime({
        start: _this.state.start,
        end: end
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyTime", function () {
      _this.props.onTimeChange({
        start: _this.state.start,
        end: _this.state.end,
        isQuickSelection: false,
        isInvalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "applyQuickTime", function (_ref2) {
      var start = _ref2.start,
          end = _ref2.end;

      _this.setState({
        showPrettyDuration: (0, _pretty_duration.showPrettyDuration)(start, end, _pretty_duration.commonDurationRanges)
      });

      _this.props.onTimeChange({
        start: start,
        end: end,
        isQuickSelection: true,
        isInvalid: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hidePrettyDuration", function () {
      _this.setState({
        showPrettyDuration: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onStartDatePopoverToggle", function () {
      _this.setState(function (prevState) {
        return {
          isStartDatePopoverOpen: !prevState.isStartDatePopoverOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onStartDatePopoverClose", function () {
      _this.setState({
        isStartDatePopoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEndDatePopoverToggle", function () {
      _this.setState(function (prevState) {
        return {
          isEndDatePopoverOpen: !prevState.isEndDatePopoverOpen
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onEndDatePopoverClose", function () {
      _this.setState({
        isEndDatePopoverOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onRefreshChange", function (_ref3) {
      var refreshInterval = _ref3.refreshInterval,
          isPaused = _ref3.isPaused;

      _this.stopInterval();

      if (!isPaused) {
        _this.startInterval(refreshInterval);
      }

      if (_this.props.onRefreshChange) {
        _this.props.onRefreshChange({
          refreshInterval: refreshInterval,
          isPaused: isPaused
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "stopInterval", function () {
      if (_this.asyncInterval) {
        _this.asyncInterval.stop();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "startInterval", function (refreshInterval) {
      var onRefresh = _this.props.onRefresh;

      if (onRefresh) {
        var handler = function handler() {
          var _this$props = _this.props,
              start = _this$props.start,
              end = _this$props.end;
          onRefresh({
            start: start,
            end: end,
            refreshInterval: refreshInterval
          });
        };

        _this.asyncInterval = new _async_interval.AsyncInterval(handler, refreshInterval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderDatePickerRange", function () {
      var _this$state = _this.state,
          end = _this$state.end,
          hasChanged = _this$state.hasChanged,
          isEndDatePopoverOpen = _this$state.isEndDatePopoverOpen,
          isInvalid = _this$state.isInvalid,
          isStartDatePopoverOpen = _this$state.isStartDatePopoverOpen,
          showPrettyDuration = _this$state.showPrettyDuration,
          start = _this$state.start;
      var _this$props2 = _this.props,
          commonlyUsedRanges = _this$props2.commonlyUsedRanges,
          dateFormat = _this$props2.dateFormat,
          isAutoRefreshOnly = _this$props2.isAutoRefreshOnly,
          isDisabled = _this$props2.isDisabled,
          isPaused = _this$props2.isPaused,
          locale = _this$props2.locale,
          refreshInterval = _this$props2.refreshInterval,
          timeFormat = _this$props2.timeFormat,
          utcOffset = _this$props2.utcOffset;

      if (isAutoRefreshOnly) {
        return /*#__PURE__*/_react.default.createElement(_date_picker_range.EuiDatePickerRange, {
          className: "euiDatePickerRange--inGroup",
          iconType: false,
          isCustom: true,
          startDateControl: /*#__PURE__*/_react.default.createElement("div", null),
          endDateControl: /*#__PURE__*/_react.default.createElement("div", null),
          readOnly: true
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "euiSuperDatePicker__prettyFormat"
        }, (0, _pretty_interval.prettyInterval)(Boolean(isPaused), refreshInterval)));
      }

      if (showPrettyDuration && !isStartDatePopoverOpen && !isEndDatePopoverOpen) {
        return /*#__PURE__*/_react.default.createElement(_date_picker_range.EuiDatePickerRange, {
          className: "euiDatePickerRange--inGroup",
          iconType: false,
          isCustom: true,
          startDateControl: /*#__PURE__*/_react.default.createElement("div", null),
          endDateControl: /*#__PURE__*/_react.default.createElement("div", null)
        }, /*#__PURE__*/_react.default.createElement("button", {
          className: (0, _classnames.default)('euiSuperDatePicker__prettyFormat', {
            'euiSuperDatePicker__prettyFormat--disabled': isDisabled
          }),
          "data-test-subj": "superDatePickerShowDatesButton",
          disabled: isDisabled,
          onClick: _this.hidePrettyDuration
        }, (0, _pretty_duration.prettyDuration)(start, end, commonlyUsedRanges, dateFormat), /*#__PURE__*/_react.default.createElement("span", {
          className: "euiSuperDatePicker__prettyFormatLink"
        }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
          token: "euiSuperDatePicker.showDatesButtonLabel",
          default: "Show dates"
        }))));
      }

      return /*#__PURE__*/_react.default.createElement(_context.EuiI18nConsumer, null, function (_ref4) {
        var contextLocale = _ref4.locale;
        return /*#__PURE__*/_react.default.createElement(_date_picker_range.EuiDatePickerRange, {
          className: "euiDatePickerRange--inGroup",
          iconType: false,
          isCustom: true,
          startDateControl: /*#__PURE__*/_react.default.createElement(_date_popover_button.EuiDatePopoverButton, {
            className: "euiSuperDatePicker__startPopoverButton",
            position: "start",
            needsUpdating: hasChanged,
            isInvalid: isInvalid,
            isDisabled: isDisabled,
            onChange: _this.setStart,
            value: start,
            dateFormat: dateFormat,
            utcOffset: utcOffset,
            timeFormat: timeFormat,
            locale: locale || contextLocale,
            isOpen: _this.state.isStartDatePopoverOpen,
            onPopoverToggle: _this.onStartDatePopoverToggle,
            onPopoverClose: _this.onStartDatePopoverClose
          }),
          endDateControl: /*#__PURE__*/_react.default.createElement(_date_popover_button.EuiDatePopoverButton, {
            position: "end",
            needsUpdating: hasChanged,
            isInvalid: isInvalid,
            isDisabled: isDisabled,
            onChange: _this.setEnd,
            value: end,
            dateFormat: dateFormat,
            utcOffset: utcOffset,
            timeFormat: timeFormat,
            locale: locale || contextLocale,
            roundUp: true,
            isOpen: _this.state.isEndDatePopoverOpen,
            onPopoverToggle: _this.onEndDatePopoverToggle,
            onPopoverClose: _this.onEndDatePopoverClose
          })
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClickUpdateButton", function () {
      if (!_this.state.hasChanged && _this.props.onRefresh) {
        var _this$props3 = _this.props,
            start = _this$props3.start,
            end = _this$props3.end,
            refreshInterval = _this$props3.refreshInterval;

        _this.props.onRefresh({
          start: start,
          end: end,
          refreshInterval: refreshInterval
        });
      } else {
        _this.applyTime();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderUpdateButton", function () {
      if (!_this.props.showUpdateButton || _this.props.isAutoRefreshOnly) {
        return;
      }

      return /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, /*#__PURE__*/_react.default.createElement(_super_update_button.EuiSuperUpdateButton, {
        needsUpdate: _this.state.hasChanged,
        showTooltip: !_this.state.isStartDatePopoverOpen && !_this.state.isEndDatePopoverOpen,
        isLoading: _this.props.isLoading,
        isDisabled: _this.props.isDisabled || _this.state.isInvalid,
        onClick: _this.handleClickUpdateButton,
        "data-test-subj": "superDatePickerApplyTimeButton"
      }));
    });

    return _this;
  }

  _createClass(EuiSuperDatePicker, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          commonlyUsedRanges = _this$props4.commonlyUsedRanges,
          customQuickSelectPanels = _this$props4.customQuickSelectPanels,
          dateFormat = _this$props4.dateFormat,
          end = _this$props4.end,
          isAutoRefreshOnly = _this$props4.isAutoRefreshOnly,
          isDisabled = _this$props4.isDisabled,
          isPaused = _this$props4.isPaused,
          onRefreshChange = _this$props4.onRefreshChange,
          recentlyUsedRanges = _this$props4.recentlyUsedRanges,
          refreshInterval = _this$props4.refreshInterval,
          showUpdateButton = _this$props4.showUpdateButton,
          start = _this$props4.start;

      var quickSelect = /*#__PURE__*/_react.default.createElement(_quick_select_popover.EuiQuickSelectPopover, {
        applyRefreshInterval: onRefreshChange ? this.onRefreshChange : undefined,
        applyTime: this.applyQuickTime,
        commonlyUsedRanges: commonlyUsedRanges,
        customQuickSelectPanels: customQuickSelectPanels,
        dateFormat: dateFormat,
        end: end,
        isAutoRefreshOnly: isAutoRefreshOnly,
        isDisabled: isDisabled,
        isPaused: isPaused,
        recentlyUsedRanges: recentlyUsedRanges,
        refreshInterval: refreshInterval,
        start: start
      });

      var flexWrapperClasses = (0, _classnames.default)('euiSuperDatePicker__flexWrapper', {
        'euiSuperDatePicker__flexWrapper--noUpdateButton': !showUpdateButton,
        'euiSuperDatePicker__flexWrapper--isAutoRefreshOnly': isAutoRefreshOnly
      });
      return /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
        gutterSize: "s",
        responsive: false,
        className: flexWrapperClasses
      }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, null, /*#__PURE__*/_react.default.createElement(_form.EuiFormControlLayout, {
        className: "euiSuperDatePicker",
        isDisabled: isDisabled,
        prepend: quickSelect
      }, this.renderDatePickerRange())), this.renderUpdateButton());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.start !== prevState.prevProps.start || nextProps.end !== prevState.prevProps.end) {
        return {
          prevProps: {
            start: nextProps.start,
            end: nextProps.end
          },
          start: nextProps.start,
          end: nextProps.end,
          isInvalid: isRangeInvalid(nextProps.start, nextProps.end),
          hasChanged: false,
          showPrettyDuration: (0, _pretty_duration.showPrettyDuration)(nextProps.start, nextProps.end, nextProps.commonlyUsedRanges)
        };
      }

      return null;
    }
  }]);

  return EuiSuperDatePicker;
}(_react.Component);

exports.EuiSuperDatePicker = EuiSuperDatePicker;

_defineProperty(EuiSuperDatePicker, "defaultProps", {
  commonlyUsedRanges: _pretty_duration.commonDurationRanges,
  dateFormat: 'MMM D, YYYY @ HH:mm:ss.SSS',
  end: 'now',
  isAutoRefreshOnly: false,
  isDisabled: false,
  isPaused: true,
  recentlyUsedRanges: [],
  refreshInterval: 0,
  showUpdateButton: true,
  start: 'now-15m',
  timeFormat: 'HH:mm'
});

EuiSuperDatePicker.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  commonlyUsedRanges: _propTypes.default.arrayOf(_propTypes.default.shape({
    end: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,
    label: _propTypes.default.string,
    start: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired
  }).isRequired).isRequired,
  customQuickSelectPanels: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    content: _propTypes.default.element.isRequired
  }).isRequired),

  /**
     * Specifies the formatted used when displaying dates and/or datetimes
     */
  dateFormat: _propTypes.default.string.isRequired,
  end: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,

  /**
     * Set isAutoRefreshOnly to true to limit the component to only display auto refresh content.
     */
  isAutoRefreshOnly: _propTypes.default.bool.isRequired,
  isDisabled: _propTypes.default.bool.isRequired,
  isLoading: _propTypes.default.bool,
  isPaused: _propTypes.default.bool.isRequired,

  /**
     * Used to localize e.g. month names, passed to `moment`
     */
  locale: _propTypes.default.any,

  /**
     * Callback for when the refresh interval is fired.
     * EuiSuperDatePicker will only manage a refresh interval timer when onRefresh callback is supplied
     * If a promise is returned, the next refresh interval will not start until the promise has resolved.
     * If the promise rejects the refresh interval will stop and the error thrown
     */
  onRefresh: _propTypes.default.func,

  /**
     * Callback for when the refresh interval changes.
     * Supply onRefreshChange to show refresh interval inputs in quick select popover
     */
  onRefreshChange: _propTypes.default.func,

  /**
     * Callback for when the time changes.
     */
  onTimeChange: _propTypes.default.func.isRequired,
  recentlyUsedRanges: _propTypes.default.arrayOf(_propTypes.default.shape({
    end: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,
    label: _propTypes.default.string,
    start: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired
  }).isRequired).isRequired,

  /**
     * Refresh interval in milliseconds
     */
  refreshInterval: _propTypes.default.number.isRequired,

  /**
     * Set showUpdateButton to false to immediately invoke onTimeChange for all start and end changes.
     */
  showUpdateButton: _propTypes.default.bool.isRequired,
  start: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,

  /**
     * Specifies the formatted used when displaying times
     */
  timeFormat: _propTypes.default.string.isRequired,
  utcOffset: _propTypes.default.number
};