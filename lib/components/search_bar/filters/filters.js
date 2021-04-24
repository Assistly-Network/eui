"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFilter = void 0;

var _react = _interopRequireDefault(require("react"));

var _is_filter = require("./is_filter");

var _field_value_selection_filter = require("./field_value_selection_filter");

var _field_value_toggle_filter = require("./field_value_toggle_filter");

var _field_value_toggle_group_filter = require("./field_value_toggle_group_filter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var createFilter = function createFilter(index, config, query, onChange) {
  var props = {
    index: index,
    query: query,
    onChange: onChange
  }; // We don't put `config` into `props` above because until we check
  // `config.type`, TS only knows that it's a `FilterConfig`, and that type
  // is used to define `props` as well. Once we've checked `config.type`
  // below, its type is narrowed correctly, hence we pass down `config`
  // separately.

  switch (config.type) {
    case 'is':
      return /*#__PURE__*/_react.default.createElement(_is_filter.IsFilter, _extends({}, props, {
        config: config
      }));

    case 'field_value_selection':
      return /*#__PURE__*/_react.default.createElement(_field_value_selection_filter.FieldValueSelectionFilter, _extends({}, props, {
        config: config
      }));

    case 'field_value_toggle':
      return /*#__PURE__*/_react.default.createElement(_field_value_toggle_filter.FieldValueToggleFilter, _extends({}, props, {
        config: config
      }));

    case 'field_value_toggle_group':
      return /*#__PURE__*/_react.default.createElement(_field_value_toggle_group_filter.FieldValueToggleGroupFilter, _extends({}, props, {
        config: config
      }));

    default:
      // @ts-ignore TS knows that we've checked `config.type` exhaustively
      throw new Error("Unknown search filter type [".concat(config.type, "]"));
  }
};

exports.createFilter = createFilter;