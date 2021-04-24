"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiFlyoutBody = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiFlyoutBody = function EuiFlyoutBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      banner = _ref.banner,
      rest = _objectWithoutProperties(_ref, ["children", "className", "banner"]);

  var classes = (0, _classnames.default)('euiFlyoutBody', className);
  var overflowClasses = (0, _classnames.default)('euiFlyoutBody__overflow', {
    'euiFlyoutBody__overflow--hasBanner': banner
  });
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: classes
  }, rest), /*#__PURE__*/_react.default.createElement("div", {
    className: overflowClasses
  }, banner && /*#__PURE__*/_react.default.createElement("div", {
    className: "euiFlyoutBody__banner"
  }, banner), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiFlyoutBody__overflowContent"
  }, children)));
};

exports.EuiFlyoutBody = EuiFlyoutBody;
EuiFlyoutBody.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
         * Use to display a banner at the top of the body. It is suggested to use `EuiCallOut` for it.
         */
  banner: _propTypes.default.node
};