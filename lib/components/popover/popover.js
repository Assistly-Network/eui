"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopoverPositionFromAnchorPosition = getPopoverPositionFromAnchorPosition;
exports.getPopoverAlignFromAnchorPosition = getPopoverAlignFromAnchorPosition;
exports.EuiPopover = exports.DISPLAY = exports.ANCHOR_POSITIONS = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tabbable = _interopRequireDefault(require("tabbable"));

var _focus_trap = require("../focus_trap");

var _services = require("../../services");

var _accessibility = require("../accessibility");

var _panel = require("../panel");

var _portal = require("../portal");

var _mutation_observer = require("../observer/mutation_observer");

var _popover = require("../../services/popover");

var _i18n = require("../i18n");

var _outside_click_detector = require("../outside_click_detector");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var generateId = (0, _services.htmlIdGenerator)();
var anchorPositionToPopoverPositionMap = {
  up: 'top',
  right: 'right',
  down: 'bottom',
  left: 'left'
};

function getPopoverPositionFromAnchorPosition(anchorPosition) {
  // maps the anchor position to the matching popover position
  // e.g. "upLeft" -> "top", "downRight" -> "bottom"
  // extract the first positional word from anchorPosition:
  // starts at the beginning (" ^ ") of anchorPosition and
  // captures all of the characters (" (.*?) ") until the
  // first capital letter (" [A-Z] ") is encountered
  var _ref = anchorPosition.match(/^(.*?)[A-Z]/),
      _ref2 = _slicedToArray(_ref, 2),
      primaryPosition = _ref2[1];

  return anchorPositionToPopoverPositionMap[primaryPosition];
}

function getPopoverAlignFromAnchorPosition(anchorPosition) {
  // maps the gravity to the matching popover position
  // e.g. "upLeft" -> "left", "rightDown" -> "bottom"
  // extract the second positional word from anchorPosition:
  // starts a capture group at the first capital letter
  // and includes everything after it
  var _ref3 = anchorPosition.match(/([A-Z].*)/),
      _ref4 = _slicedToArray(_ref3, 2),
      align = _ref4[1]; // this performs two tasks:
  // 1. normalizes the align position by lowercasing it
  // 2. `center` doesn't exist in the lookup map which converts it to `undefined` meaning no align


  return anchorPositionToPopoverPositionMap[align.toLowerCase()];
}

var anchorPositionToClassNameMap = {
  upCenter: 'euiPopover--anchorUpCenter',
  upLeft: 'euiPopover--anchorUpLeft',
  upRight: 'euiPopover--anchorUpRight',
  downCenter: 'euiPopover--anchorDownCenter',
  downLeft: 'euiPopover--anchorDownLeft',
  downRight: 'euiPopover--anchorDownRight',
  leftCenter: 'euiPopover--anchorLeftCenter',
  leftUp: 'euiPopover--anchorLeftUp',
  leftDown: 'euiPopover--anchorLeftDown',
  rightCenter: 'euiPopover--anchorRightCenter',
  rightUp: 'euiPopover--anchorRightUp',
  rightDown: 'euiPopover--anchorRightDown'
};
var ANCHOR_POSITIONS = Object.keys(anchorPositionToClassNameMap);
exports.ANCHOR_POSITIONS = ANCHOR_POSITIONS;
var displayToClassNameMap = {
  inlineBlock: undefined,
  block: 'euiPopover--displayBlock'
};
var DISPLAY = Object.keys(displayToClassNameMap);
exports.DISPLAY = DISPLAY;
var DEFAULT_POPOVER_STYLES = {
  top: 50,
  left: 50
};

function getElementFromInitialFocus(initialFocus) {
  var initialFocusType = _typeof(initialFocus);

  if (initialFocusType === 'string') {
    return document.querySelector(initialFocus);
  }

  if (initialFocusType === 'function') {
    return initialFocus();
  }

  return initialFocus;
}

var returnFocusConfig = {
  preventScroll: true
};

var EuiPopover = /*#__PURE__*/function (_Component) {
  _inherits(EuiPopover, _Component);

  var _super = _createSuper(EuiPopover);

  _createClass(EuiPopover, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevProps.isOpen && !nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          },
          isClosing: true,
          isOpening: false
        };
      }

      if (prevState.prevProps.isOpen !== nextProps.isOpen) {
        return {
          prevProps: {
            isOpen: nextProps.isOpen
          }
        };
      }

      return null;
    }
  }]);

  function EuiPopover(props) {
    var _this;

    _classCallCheck(this, EuiPopover);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "respositionTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "closingTransitionTimeout", void 0);

    _defineProperty(_assertThisInitialized(_this), "closingTransitionAnimationFrame", void 0);

    _defineProperty(_assertThisInitialized(_this), "updateFocusAnimationFrame", void 0);

    _defineProperty(_assertThisInitialized(_this), "button", null);

    _defineProperty(_assertThisInitialized(_this), "panel", null);

    _defineProperty(_assertThisInitialized(_this), "closePopover", function () {
      if (_this.props.isOpen) {
        _this.props.closePopover();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscapeKey", function (event) {
      if (_this.props.isOpen) {
        event.preventDefault();
        event.stopPropagation();

        _this.closePopover();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (event.key === _services.cascadingMenuKeys.ESCAPE) {
        _this.onEscapeKey(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClickOutside", function (event) {
      // only close the popover if the event source isn't the anchor button
      // otherwise, it is up to the anchor to toggle the popover's open status
      if (_this.button && _this.button.contains(event.target) === false) {
        _this.closePopover();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onOpenPopover", function () {
      clearTimeout(_this.closingTransitionTimeout); // We need to set this state a beat after the render takes place, so that the CSS
      // transition can take effect.

      _this.closingTransitionAnimationFrame = window.requestAnimationFrame(function () {
        _this.setState({
          isOpening: true
        });
      }); // for each child element of `this.panel`, find any transition duration we should wait for before stabilizing

      var _Array$prototype$slic = Array.prototype.slice.call(_this.panel ? [_this.panel].concat(_toConsumableArray(Array.from(_this.panel.children))) : []).reduce(function (_ref5, element) {
        var durationMatch = _ref5.durationMatch,
            delayMatch = _ref5.delayMatch;
        var transitionTimings = (0, _services.getTransitionTimings)(element);
        return {
          durationMatch: Math.max(durationMatch, transitionTimings.durationMatch),
          delayMatch: Math.max(delayMatch, transitionTimings.delayMatch)
        };
      }, {
        durationMatch: 0,
        delayMatch: 0
      }),
          durationMatch = _Array$prototype$slic.durationMatch,
          delayMatch = _Array$prototype$slic.delayMatch;

      _this.respositionTimeout = window.setTimeout(function () {
        _this.setState({
          isOpenStable: true
        }, function () {
          _this.positionPopoverFixed();

          _this.updateFocus();
        });
      }, durationMatch + delayMatch);
    });

    _defineProperty(_assertThisInitialized(_this), "onMutation", function (records) {
      var waitDuration = (0, _services.getWaitDuration)(records);

      _this.positionPopoverFixed();

      (0, _services.performOnFrame)(waitDuration, _this.positionPopoverFixed);
    });

    _defineProperty(_assertThisInitialized(_this), "positionPopover", function (allowEnforcePosition) {
      if (_this.button == null || _this.panel == null) return;
      var _ref6 = _this.props,
          anchorPosition = _ref6.anchorPosition;
      var position = getPopoverPositionFromAnchorPosition(anchorPosition);
      var forcePosition = undefined;

      if (allowEnforcePosition && _this.state.isOpenStable && _this.state.openPosition != null) {
        position = _this.state.openPosition;
        forcePosition = true;
      }

      var _findPopoverPosition = (0, _popover.findPopoverPosition)({
        container: _this.props.container,
        position: position,
        forcePosition: forcePosition,
        align: getPopoverAlignFromAnchorPosition(anchorPosition),
        anchor: _this.button,
        popover: _this.panel,
        offset: !_this.props.attachToAnchor && _this.props.hasArrow ? 16 + (_this.props.offset || 0) : 8 + (_this.props.offset || 0),
        arrowConfig: {
          arrowWidth: 24,
          arrowBuffer: 10
        },
        returnBoundingBox: _this.props.attachToAnchor,
        buffer: _this.props.buffer
      }),
          top = _findPopoverPosition.top,
          left = _findPopoverPosition.left,
          foundPosition = _findPopoverPosition.position,
          arrow = _findPopoverPosition.arrow,
          anchorBoundingBox = _findPopoverPosition.anchorBoundingBox; // the popover's z-index must inherit from the button
      // this keeps a button's popover under a flyout that would cover the button
      // but a popover triggered inside a flyout will appear over that flyout


      var zIndexProp = _this.props.zIndex;
      var zIndex = zIndexProp == null ? (0, _popover.getElementZIndex)(_this.button, _this.panel) + 2000 : zIndexProp;

      var popoverStyles = _objectSpread(_objectSpread({}, _this.props.panelStyle), {}, {
        top: top,
        left: _this.props.attachToAnchor && anchorBoundingBox ? anchorBoundingBox.left : left,
        zIndex: zIndex
      });

      var willRenderArrow = !_this.props.attachToAnchor && _this.props.hasArrow;
      var arrowStyles = willRenderArrow ? arrow : undefined;
      var arrowPosition = foundPosition;

      _this.setState({
        popoverStyles: popoverStyles,
        arrowStyles: arrowStyles,
        arrowPosition: arrowPosition,
        openPosition: foundPosition
      });
    });

    _defineProperty(_assertThisInitialized(_this), "positionPopoverFixed", function () {
      _this.positionPopover(true);
    });

    _defineProperty(_assertThisInitialized(_this), "positionPopoverFluid", function () {
      _this.positionPopover(false);
    });

    _defineProperty(_assertThisInitialized(_this), "panelRef", function (node) {
      _this.panel = node;
      _this.props.panelRef && _this.props.panelRef(node);

      if (node == null) {
        // panel has unmounted, restore the state defaults
        _this.setState({
          popoverStyles: DEFAULT_POPOVER_STYLES,
          arrowStyles: {},
          arrowPosition: null,
          openPosition: null,
          isOpenStable: false
        });

        window.removeEventListener('resize', _this.positionPopoverFluid);
      } else {
        // panel is coming into existence
        _this.positionPopoverFluid();

        window.addEventListener('resize', _this.positionPopoverFluid);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "buttonRef", function (node) {
      _this.button = node;
      _this.props.buttonRef && _this.props.buttonRef(node);
    });

    _this.state = {
      prevProps: {
        isOpen: props.isOpen
      },
      suppressingPopover: props.isOpen,
      // only suppress if created with isOpen=true
      isClosing: false,
      isOpening: false,
      popoverStyles: DEFAULT_POPOVER_STYLES,
      arrowStyles: {},
      arrowPosition: null,
      openPosition: null,
      // once a stable position has been found, keep the contents on that side
      isOpenStable: false // wait for any initial opening transitions to finish before marking as stable

    };
    return _this;
  }

  _createClass(EuiPopover, [{
    key: "updateFocus",
    value: function updateFocus() {
      var _this2 = this;

      // Wait for the DOM to update.
      this.updateFocusAnimationFrame = window.requestAnimationFrame(function () {
        if (!_this2.props.ownFocus || !_this2.panel) {
          return;
        } // If we've already focused on something inside the panel, everything's fine.


        if (_this2.panel.contains(document.activeElement)) {
          return;
        } // Otherwise let's focus the first tabbable item and expedite input from the user.


        var focusTarget;

        if (_this2.props.initialFocus != null) {
          focusTarget = getElementFromInitialFocus(_this2.props.initialFocus);
        } else {
          var tabbableItems = (0, _tabbable.default)(_this2.panel);

          if (tabbableItems.length) {
            focusTarget = tabbableItems[0];
          }
        } // there's a race condition between the popover content becoming visible and this function call
        // if the element isn't visible yet (due to css styling) then it can't accept focus
        // so wait for another render and try again


        if (focusTarget == null) {
          // there isn't a focus target, one of two reasons:
          // #1 is the whole panel hidden? If so, schedule another check
          // #2 panel is visible but no tabbables exist, move focus to the panel
          var panelVisibility = window.getComputedStyle(_this2.panel).visibility;

          if (panelVisibility === 'hidden') {
            // #1
            _this2.updateFocus();
          } else {
            // #2
            focusTarget = _this2.panel;
          }
        } else {
          // found an element to focus, but is it visible?
          var visibility = window.getComputedStyle(focusTarget).visibility;

          if (visibility === 'hidden') {
            // not visible, check again next render frame
            _this2.updateFocus();
          }
        }

        if (focusTarget != null) focusTarget.focus();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      if (this.state.suppressingPopover) {
        // component was created with isOpen=true; now that it's mounted
        // stop suppressing and start opening
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({
          suppressingPopover: false,
          isOpening: true
        }, function () {
          _this3.onOpenPopover();
        });
      }

      if (this.props.repositionOnScroll) {
        window.addEventListener('scroll', this.positionPopoverFixed);
      }

      this.updateFocus();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;

      // The popover is being opened.
      if (!prevProps.isOpen && this.props.isOpen) {
        this.onOpenPopover();
      } // update scroll listener


      if (prevProps.repositionOnScroll !== this.props.repositionOnScroll) {
        if (this.props.repositionOnScroll) {
          window.addEventListener('scroll', this.positionPopoverFixed);
        } else {
          window.removeEventListener('scroll', this.positionPopoverFixed);
        }
      } // The popover is being closed.


      if (prevProps.isOpen && !this.props.isOpen) {
        // If the user has just closed the popover, queue up the removal of the content after the
        // transition is complete.
        this.closingTransitionTimeout = window.setTimeout(function () {
          _this4.setState({
            isClosing: false
          });
        }, 250);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.positionPopoverFixed);
      clearTimeout(this.respositionTimeout);
      clearTimeout(this.closingTransitionTimeout);
      cancelAnimationFrame(this.closingTransitionAnimationFrame);
      cancelAnimationFrame(this.updateFocusAnimationFrame);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          anchorClassName = _this$props.anchorClassName,
          anchorPosition = _this$props.anchorPosition,
          button = _this$props.button,
          buttonRef = _this$props.buttonRef,
          insert = _this$props.insert,
          isOpen = _this$props.isOpen,
          ownFocus = _this$props.ownFocus,
          children = _this$props.children,
          className = _this$props.className,
          closePopover = _this$props.closePopover,
          panelClassName = _this$props.panelClassName,
          panelPaddingSize = _this$props.panelPaddingSize,
          panelProps = _this$props.panelProps,
          panelRef = _this$props.panelRef,
          panelStyle = _this$props.panelStyle,
          popoverRef = _this$props.popoverRef,
          hasArrow = _this$props.hasArrow,
          arrowChildren = _this$props.arrowChildren,
          repositionOnScroll = _this$props.repositionOnScroll,
          zIndex = _this$props.zIndex,
          initialFocus = _this$props.initialFocus,
          attachToAnchor = _this$props.attachToAnchor,
          display = _this$props.display,
          onTrapDeactivation = _this$props.onTrapDeactivation,
          buffer = _this$props.buffer,
          ariaLabel = _this$props['aria-label'],
          ariaLabelledBy = _this$props['aria-labelledby'],
          container = _this$props.container,
          focusTrapProps = _this$props.focusTrapProps,
          rest = _objectWithoutProperties(_this$props, ["anchorClassName", "anchorPosition", "button", "buttonRef", "insert", "isOpen", "ownFocus", "children", "className", "closePopover", "panelClassName", "panelPaddingSize", "panelProps", "panelRef", "panelStyle", "popoverRef", "hasArrow", "arrowChildren", "repositionOnScroll", "zIndex", "initialFocus", "attachToAnchor", "display", "onTrapDeactivation", "buffer", "aria-label", "aria-labelledby", "container", "focusTrapProps"]);

      var descriptionId = generateId();
      var classes = (0, _classnames.default)('euiPopover', anchorPosition ? anchorPositionToClassNameMap[anchorPosition] : null, display ? displayToClassNameMap[display] : null, {
        'euiPopover-isOpen': this.state.isOpening
      }, className);
      var anchorClasses = (0, _classnames.default)('euiPopover__anchor', anchorClassName);
      var panelClasses = (0, _classnames.default)('euiPopover__panel', "euiPopover__panel--".concat(this.state.arrowPosition), {
        'euiPopover__panel-isOpen': this.state.isOpening
      }, {
        'euiPopover__panel-noArrow': !hasArrow || attachToAnchor
      }, {
        'euiPopover__panel-isAttached': attachToAnchor
      }, panelClassName, panelProps === null || panelProps === void 0 ? void 0 : panelProps.className);
      var panel;

      if (!this.state.suppressingPopover && (isOpen || this.state.isClosing)) {
        var tabIndex;

        var _initialFocus;

        var ariaDescribedby;
        var ariaLive;

        if (ownFocus) {
          tabIndex = 0;
          ariaLive = 'off';

          _initialFocus = function _initialFocus() {
            return _this5.panel;
          };
        } else {
          ariaLive = 'assertive';
        }

        var focusTrapScreenReaderText;

        if (ownFocus) {
          ariaDescribedby = descriptionId;
          focusTrapScreenReaderText = /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("p", {
            id: descriptionId
          }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
            token: "euiPopover.screenReaderAnnouncement",
            default: "You are in a dialog. To close this dialog, hit escape."
          })));
        }

        var arrowClassNames = (0, _classnames.default)('euiPopover__panelArrow', "euiPopover__panelArrow--".concat(this.state.arrowPosition));
        var returnFocus = this.state.isOpenStable ? returnFocusConfig : false;
        panel = /*#__PURE__*/_react.default.createElement(_portal.EuiPortal, {
          insert: insert
        }, /*#__PURE__*/_react.default.createElement(_focus_trap.EuiFocusTrap, _extends({
          clickOutsideDisables: true
        }, focusTrapProps, {
          returnFocus: returnFocus // Ignore temporary state of indecisive focus
          ,
          initialFocus: _initialFocus,
          onDeactivation: onTrapDeactivation,
          onClickOutside: this.onClickOutside,
          onEscapeKey: this.onEscapeKey,
          disabled: !ownFocus || !this.state.isOpenStable || this.state.isClosing
        }), /*#__PURE__*/_react.default.createElement(_panel.EuiPanel, _extends({}, panelProps, {
          panelRef: this.panelRef,
          className: panelClasses,
          hasShadow: false,
          paddingSize: panelPaddingSize,
          tabIndex: tabIndex,
          "aria-live": ariaLive,
          role: "dialog",
          "aria-label": ariaLabel,
          "aria-labelledby": ariaLabelledBy,
          "aria-modal": "true",
          "aria-describedby": ariaDescribedby,
          style: _objectSpread(_objectSpread({}, this.state.popoverStyles), {}, {
            // Adding `will-change` to reduce risk of a blurry animation in Chrome 86+
            willChange: !this.state.isOpenStable ? 'transform, opacity' : undefined
          })
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: arrowClassNames,
          style: this.state.arrowStyles
        }, arrowChildren), focusTrapScreenReaderText, /*#__PURE__*/_react.default.createElement(_mutation_observer.EuiMutationObserver, {
          observerOptions: {
            attributes: true,
            // element attribute changes
            childList: true,
            // added/removed elements
            characterData: true,
            // text changes
            subtree: true // watch all child elements

          },
          onMutation: this.onMutation
        }, function (mutationRef) {
          return /*#__PURE__*/_react.default.createElement("div", {
            ref: mutationRef
          }, children);
        }))));
      } // react-focus-on and relataed do not register outside click detection
      // when disabled, so we still need to conditionally check for that ourselves


      if (ownFocus) {
        return /*#__PURE__*/_react.default.createElement("div", _extends({
          className: classes,
          ref: popoverRef
        }, rest), /*#__PURE__*/_react.default.createElement("div", {
          className: anchorClasses,
          ref: this.buttonRef
        }, button instanceof HTMLElement ? null : button), panel);
      } else {
        return /*#__PURE__*/_react.default.createElement(_outside_click_detector.EuiOutsideClickDetector, {
          onOutsideClick: this.closePopover
        }, /*#__PURE__*/_react.default.createElement("div", _extends({
          className: classes,
          ref: popoverRef,
          onKeyDown: this.onKeyDown
        }, rest), /*#__PURE__*/_react.default.createElement("div", {
          className: anchorClasses,
          ref: this.buttonRef
        }, button instanceof HTMLElement ? null : button), panel));
      }
    }
  }]);

  return EuiPopover;
}(_react.Component);

exports.EuiPopover = EuiPopover;

_defineProperty(EuiPopover, "defaultProps", {
  isOpen: false,
  ownFocus: true,
  anchorPosition: 'downCenter',
  panelPaddingSize: 'm',
  hasArrow: true,
  display: 'inlineBlock'
});

EuiPopover.propTypes = {
  className: _propTypes.default.string,

  /**
     * Provide a name to the popover panel
     */
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Class name passed to the direct parent of the button
     */
  anchorClassName: _propTypes.default.string,

  /**
     * Alignment of the popover and arrow relative to the button
     */
  anchorPosition: _propTypes.default.oneOf(["upCenter", "upLeft", "upRight", "downCenter", "downLeft", "downRight", "leftCenter", "leftUp", "leftDown", "rightCenter", "rightUp", "rightDown"]),

  /**
     * Style and position alteration for arrow-less, left-aligned
     * attachment. Intended for use with inputs as anchors, e.g.
     * EuiInputPopover
     */
  attachToAnchor: _propTypes.default.bool,

  /**
     * Triggering element for which to align the popover to
     */
  button: _propTypes.default.any.isRequired,
  buttonRef: _propTypes.default.any,

  /**
     * Callback to handle hiding of the popover
     */
  closePopover: _propTypes.default.func.isRequired,

  /**
     * Restrict the popover's position within this element
     */
  container: _propTypes.default.any,

  /**
     * CSS display type for both the popover and anchor
     */
  display: _propTypes.default.oneOf(["inlineBlock", "block"]),

  /**
     * Object of props passed to EuiFocusTrap
     */
  focusTrapProps: _propTypes.default.any,

  /**
     * Show arrow indicating to originating button
     */
  hasArrow: _propTypes.default.bool,

  /**
     * Specifies what element should initially have focus; Can be a DOM
     * node, or a selector string (which will be passed to
     * document.querySelector() to find the DOM node), or a function that
     * returns a DOM node
     */
  initialFocus: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired, _propTypes.default.func.isRequired]),

  /**
     * Passed directly to EuiPortal for DOM positioning. Both properties are
     * required if prop is specified
     */
  insert: _propTypes.default.shape({
    sibling: _propTypes.default.any.isRequired,
    position: _propTypes.default.oneOf(["before", "after"]).isRequired
  }),

  /**
     * Visibility state of the popover
     */
  isOpen: _propTypes.default.bool,

  /**
     * Traps tab focus within the popover contents
     */
  ownFocus: _propTypes.default.bool,

  /**
     * Custom class added to the EuiPanel containing the popover contents
     */
  panelClassName: _propTypes.default.string,

  /**
     * EuiPanel padding on all sides
     */
  panelPaddingSize: _propTypes.default.any,

  /**
     * Standard DOM `style` attribute. Passed to the EuiPanel
     */
  panelStyle: _propTypes.default.any,

  /**
     * Object of props passed to EuiPanel
     */
  panelProps: _propTypes.default.any,
  panelRef: _propTypes.default.any,
  popoverRef: _propTypes.default.any,

  /**
     * When `true`, the popover's position is re-calculated when the user
     * scrolls, this supports having fixed-position popover anchors
     */
  repositionOnScroll: _propTypes.default.bool,

  /**
     * By default, popover content inherits the z-index of the anchor
     * component; pass `zIndex` to override
     */
  zIndex: _propTypes.default.number,

  /**
     * Function callback for when the focus trap is deactivated
     */
  onTrapDeactivation: _propTypes.default.any,

  /**
     * Distance away from the anchor that the popover will render
     */
  offset: _propTypes.default.number,

  /**
     * Minimum distance between the popover and the bounding container;
     * Pass an array of 4 values to adjust each side differently: `[top, right, bottom, left]`
     * Default is 16
     */
  buffer: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.any.isRequired]),

  /**
     * Element to pass as the child element of the arrow;
     * Use case is typically limited to an accompanying `EuiBeacon`
     */
  arrowChildren: _propTypes.default.node,

  /**
     * Alternative option to `aria-label` that takes an `id`.
     * Usually takes the `id` of the popover title
     */
  "aria-labelledby": _propTypes.default.string
};