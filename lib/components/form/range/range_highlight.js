"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeHighlight = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var EuiRangeHighlight = function EuiRangeHighlight(_ref) {
  var className = _ref.className,
      hasFocus = _ref.hasFocus,
      showTicks = _ref.showTicks,
      lowerValue = _ref.lowerValue,
      upperValue = _ref.upperValue,
      max = _ref.max,
      min = _ref.min,
      compressed = _ref.compressed,
      background = _ref.background,
      onClick = _ref.onClick;
  // Calculate the width the range based on value
  // const rangeWidth = (value - min) / (max - min);
  var leftPosition = (lowerValue - min) / (max - min);
  var rangeWidth = (upperValue - lowerValue) / (max - min);
  var rangeWidthStyle = {
    background: background,
    marginLeft: "".concat(leftPosition * 100, "%"),
    width: "".concat(rangeWidth * 100, "%")
  };
  var classes = (0, _classnames.default)('euiRangeHighlight', {
    'euiRangeHighlight--hasTicks': showTicks,
    'euiRangeHighlight--compressed': compressed
  }, className);
  var progressClasses = (0, _classnames.default)('euiRangeHighlight__progress', {
    'euiRangeHighlight__progress--hasFocus': hasFocus
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes,
    onClick: onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: progressClasses,
    style: rangeWidthStyle
  }));
};

exports.EuiRangeHighlight = EuiRangeHighlight;
EuiRangeHighlight.propTypes = {
  className: _propTypes.default.string,
  background: _propTypes.default.string,
  compressed: _propTypes.default.bool,
  hasFocus: _propTypes.default.bool,
  showTicks: _propTypes.default.bool,
  lowerValue: _propTypes.default.number.isRequired,
  upperValue: _propTypes.default.number.isRequired,
  max: _propTypes.default.number.isRequired,
  min: _propTypes.default.number.isRequired,
  onClick: _propTypes.default.func
};