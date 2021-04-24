"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiHighlight = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mark = require("../mark");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var highlight = function highlight(searchSubject, searchValue, isStrict, highlightAll) {
  if (!searchValue) {
    return searchSubject;
  }

  if (!searchSubject) {
    return null;
  }

  if (highlightAll) {
    var chunks = getHightlightWords(searchSubject, searchValue, isStrict);
    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, chunks.map(function (chunk) {
      var end = chunk.end,
          highlight = chunk.highlight,
          start = chunk.start;
      var value = searchSubject.substr(start, end - start);

      if (highlight) {
        return /*#__PURE__*/_react.default.createElement(_mark.EuiMark, {
          key: start
        }, value);
      }

      return value;
    }));
  }

  var normalizedSearchSubject = isStrict ? searchSubject : searchSubject.toLowerCase();
  var normalizedSearchValue = isStrict ? searchValue : searchValue.toLowerCase();
  var indexOfMatch = normalizedSearchSubject.indexOf(normalizedSearchValue);

  if (indexOfMatch === -1) {
    return searchSubject;
  }

  var preMatch = searchSubject.substr(0, indexOfMatch);
  var match = searchSubject.substr(indexOfMatch, searchValue.length);
  var postMatch = searchSubject.substr(indexOfMatch + searchValue.length);
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, preMatch, /*#__PURE__*/_react.default.createElement(_mark.EuiMark, null, match), postMatch);
};

var getHightlightWords = function getHightlightWords(searchSubject, searchValue, isStrict) {
  var regex = new RegExp(searchValue, isStrict ? 'g' : 'gi');
  var matches = [];
  var match;

  while ((match = regex.exec(searchSubject)) !== null) {
    matches.push({
      start: match.index,
      end: (match.index || 0) + match[0].length
    });
  }

  return fillInChunks(matches, searchSubject.length);
};

var fillInChunks = function fillInChunks(chunksToHighlight, totalLength) {
  var allChunks = [];

  var append = function append(start, end, highlight) {
    if (end - start > 0) {
      allChunks.push({
        start: start,
        end: end,
        highlight: highlight
      });
    }
  };

  if (chunksToHighlight.length === 0) {
    append(0, totalLength, false);
  } else {
    var lastIndex = 0;
    chunksToHighlight.forEach(function (chunk) {
      append(lastIndex, chunk.start, false);
      append(chunk.start, chunk.end, true);
      lastIndex = chunk.end;
    });
    append(lastIndex, totalLength, false);
  }

  return allChunks;
};

var EuiHighlight = function EuiHighlight(_ref) {
  var children = _ref.children,
      className = _ref.className,
      search = _ref.search,
      _ref$strict = _ref.strict,
      strict = _ref$strict === void 0 ? false : _ref$strict,
      _ref$highlightAll = _ref.highlightAll,
      highlightAll = _ref$highlightAll === void 0 ? false : _ref$highlightAll,
      rest = _objectWithoutProperties(_ref, ["children", "className", "search", "strict", "highlightAll"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({
    className: className
  }, rest), highlight(children, search, strict, highlightAll));
};

exports.EuiHighlight = EuiHighlight;
EuiHighlight.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * string to highlight as this component's content
       */
  children: _propTypes.default.string.isRequired,

  /**
       * What to search for
       */
  search: _propTypes.default.string.isRequired,

  /**
       * Should the search be strict or not
       */
  strict: _propTypes.default.bool,

  /**
       * Should highlight all matches
       */
  highlightAll: _propTypes.default.bool
};