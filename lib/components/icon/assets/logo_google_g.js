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

var EuiIconLogoGoogleG = function EuiIconLogoGoogleG(_ref) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 32 32",
    width: 32,
    height: 32,
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("path", {
    id: "a",
    d: "M15.319 3.278c0-1.131-.102-2.22-.29-3.264H0v6.172h8.587c-.37 1.995-1.494 3.685-3.184 4.816v4.004h5.157c3.017-2.778 4.758-6.869 4.758-11.728z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "c",
    d: "M14.343 12.956c4.308 0 7.92-1.43 10.56-3.866l-5.157-4.004c-1.429.958-3.256 1.523-5.403 1.523-4.156 0-7.674-2.806-8.928-6.578H.084v4.134c2.625 5.215 8.021 8.79 14.259 8.79z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "e",
    d: "M7.028 10.25a9.59 9.59 0 01-.5-3.032 9.59 9.59 0 01.5-3.032V.052h-5.33A15.95 15.95 0 000 7.218c0 2.575.617 5.012 1.697 7.166l5.331-4.134z"
  }), /*#__PURE__*/React.createElement("path", {
    id: "g",
    d: "M14.343 6.392c2.342 0 4.446.805 6.1 2.386l4.576-4.576C22.256 1.627 18.644.046 14.343.046 8.105.046 2.709 3.622.083 8.836l5.332 4.134c1.254-3.77 4.772-6.578 8.928-6.578z"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(15.955 13.087)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "b",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#a"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    fillRule: "nonzero",
    mask: "url(#b)",
    d: "M.001 15.006h15.318V.014H.001z"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(1.613 19.003)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "d",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#c"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    fillRule: "nonzero",
    mask: "url(#d)",
    d: "M.084 12.956h24.819V.031H.084z"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 8.784)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "f",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#e"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC04",
    fillRule: "nonzero",
    mask: "url(#f)",
    d: "M0 14.384h7.028V.052H0z"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(1.613)"
  }, /*#__PURE__*/React.createElement("mask", {
    id: "h",
    fill: "#fff"
  }, /*#__PURE__*/React.createElement("use", {
    xlinkHref: "#g"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    fillRule: "nonzero",
    mask: "url(#h)",
    d: "M.084 12.97h24.935V.046H.084z"
  }))));
};

var icon = EuiIconLogoGoogleG;
exports.icon = icon;