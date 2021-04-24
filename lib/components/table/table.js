"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiTable = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var tableLayoutToClassMap = {
  fixed: null,
  auto: 'euiTable--auto'
};

var EuiTable = function EuiTable(_ref) {
  var children = _ref.children,
      className = _ref.className,
      compressed = _ref.compressed,
      _ref$tableLayout = _ref.tableLayout,
      tableLayout = _ref$tableLayout === void 0 ? 'fixed' : _ref$tableLayout,
      _ref$responsive = _ref.responsive,
      responsive = _ref$responsive === void 0 ? true : _ref$responsive,
      rest = _objectWithoutProperties(_ref, ["children", "className", "compressed", "tableLayout", "responsive"]);

  var classes = (0, _classnames.default)('euiTable', className, {
    'euiTable--compressed': compressed,
    'euiTable--responsive': responsive
  }, tableLayoutToClassMap[tableLayout]);
  return /*#__PURE__*/_react.default.createElement("table", _extends({
    tabIndex: -1,
    className: classes
  }, rest), children);
};

exports.EuiTable = EuiTable;
EuiTable.propTypes = {
  compressed: _propTypes.default.bool,
  responsive: _propTypes.default.bool,

  /**
     * Sets the table-layout CSS property
     */
  tableLayout: _propTypes.default.oneOf(["fixed", "auto"]),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};