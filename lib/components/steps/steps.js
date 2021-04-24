"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiSteps = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _step = require("./step");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function renderSteps(steps, firstStepNumber, headingElement, titleSize) {
  return steps.map(function (step, index) {
    var className = step.className,
        children = step.children,
        title = step.title,
        status = step.status,
        rest = _objectWithoutProperties(step, ["className", "children", "title", "status"]);

    return /*#__PURE__*/_react.default.createElement(_step.EuiStep, _extends({
      className: className,
      key: index,
      headingElement: headingElement,
      step: firstStepNumber + index,
      title: title,
      titleSize: titleSize,
      status: status
    }, rest), children);
  });
}

var EuiSteps = function EuiSteps(_ref) {
  var className = _ref.className,
      _ref$firstStepNumber = _ref.firstStepNumber,
      firstStepNumber = _ref$firstStepNumber === void 0 ? 1 : _ref$firstStepNumber,
      _ref$headingElement = _ref.headingElement,
      headingElement = _ref$headingElement === void 0 ? 'p' : _ref$headingElement,
      titleSize = _ref.titleSize,
      steps = _ref.steps,
      rest = _objectWithoutProperties(_ref, ["className", "firstStepNumber", "headingElement", "titleSize", "steps"]);

  var classes = (0, _classnames.default)('euiSteps', className);
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, rest), renderSteps(steps, firstStepNumber, headingElement, titleSize));
};

exports.EuiSteps = EuiSteps;
EuiSteps.propTypes = {
  /**
     * An array of `EuiStep` objects excluding the `step` prop
     */
  steps: _propTypes.default.arrayOf(_propTypes.default.any.isRequired).isRequired,

  /**
     * The number the steps should begin from
     */
  firstStepNumber: _propTypes.default.number,

  /**
     * The HTML tag used for the title
     */
  headingElement: _propTypes.default.string,

  /**
     * Title sizing equivalent to EuiTitle, but only `m`, `s` and `xs`. Defaults to `s`
     */
  titleSize: _propTypes.default.any,
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};