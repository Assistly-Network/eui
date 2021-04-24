"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTour = void 0;

var _useEuiTour3 = require("./useEuiTour");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var EuiTour = function EuiTour(_ref) {
  var children = _ref.children,
      steps = _ref.steps,
      initialState = _ref.initialState;

  var _useEuiTour = (0, _useEuiTour3.useEuiTour)(steps, initialState),
      _useEuiTour2 = _slicedToArray(_useEuiTour, 3),
      stepProps = _useEuiTour2[0],
      actions = _useEuiTour2[1],
      state = _useEuiTour2[2];

  return children(stepProps, actions, state);
};

exports.EuiTour = EuiTour;
EuiTour.propTypes = {
  children: _propTypes.default.func.isRequired,
  steps: _propTypes.default.arrayOf(_propTypes.default.any.isRequired).isRequired,
  initialState: _propTypes.default.shape({
    currentTourStep: _propTypes.default.number.isRequired,
    isTourActive: _propTypes.default.bool.isRequired,
    tourPopoverWidth: _propTypes.default.number.isRequired,
    tourSubtitle: _propTypes.default.string.isRequired
  }).isRequired
};