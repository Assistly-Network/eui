"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.icon = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiIconTokenGeo = function EuiIconTokenGeo(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8 3c1.636 0 3.088.785 4 2 .628.836 1 1.875 1 3a4.978 4.978 0 01-.999 3H12a4.992 4.992 0 01-4 2 4.992 4.992 0 01-4-1.999V11a5 5 0 014-8zm.948 8H7.052c.277.626.623 1 .948 1 .325 0 .67-.374.948-1zM6 11l-.645.001c.274.242.581.446.914.606A5.445 5.445 0 016 11.001zm4.645.001H10a5.51 5.51 0 01-.269.606c.333-.16.64-.364.914-.606zm-5.133-2.5H4.031c.068.54.243 1.048.505 1.5h1.172a9.186 9.186 0 01-.196-1.5zm3.975 0H6.513c.03.544.104 1.05.21 1.5h2.553c.107-.45.182-.956.21-1.5zm2.482 0h-1.481a9.186 9.186 0 01-.196 1.5h1.172c.262-.452.437-.96.505-1.5zM5.708 6L4.535 6c-.261.452-.437.96-.504 1.5h1.481A9.187 9.187 0 015.708 6zm3.568 0H6.724c-.107.449-.182.955-.21 1.499h2.973a8.479 8.479 0 00-.21-1.5zM11.465 6h-1.173c.102.467.17.972.196 1.5h1.481a3.974 3.974 0 00-.504-1.5zM6.269 4.393l-.124.062c-.286.15-.551.333-.79.545H6a5.51 5.51 0 01.269-.607zM8 4c-.326 0-.671.375-.948 1h1.896C8.671 4.376 8.326 4 8 4zm1.73.393l.038.071c.083.168.161.347.232.536h.646a4.006 4.006 0 00-.915-.607z"
  }));
};

var icon = EuiIconTokenGeo;
exports.icon = icon;