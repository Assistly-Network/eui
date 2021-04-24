"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeLevels = exports.LEVEL_COLORS = void 0;

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
var LEVEL_COLORS = ['primary', 'success', 'warning', 'danger'];
exports.LEVEL_COLORS = LEVEL_COLORS;

var EuiRangeLevels = function EuiRangeLevels(_ref) {
  var _ref$levels = _ref.levels,
      levels = _ref$levels === void 0 ? [] : _ref$levels,
      max = _ref.max,
      min = _ref.min,
      showTicks = _ref.showTicks,
      compressed = _ref.compressed;

  var validateLevelIsInRange = function validateLevelIsInRange(level) {
    if (level.min < min) {
      throw new Error("The level min of ".concat(level.min, " is lower than the min value of ").concat(min, "."));
    }

    if (level.max > max) {
      throw new Error("The level max of ".concat(level.max, " is higher than the max value of ").concat(max, "."));
    }
  };

  var classes = (0, _classnames.default)('euiRangeLevels', {
    'euiRangeLevels--hasTicks': showTicks,
    'euiRangeLevels--compressed': compressed
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes
  }, levels.map(function (level, index) {
    validateLevelIsInRange(level);
    var range = level.max - level.min;
    var width = range / (max - min) * 100;
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      style: {
        width: "".concat(width, "%")
      },
      className: "euiRangeLevel euiRangeLevel--".concat(level.color)
    });
  }));
};

exports.EuiRangeLevels = EuiRangeLevels;
EuiRangeLevels.propTypes = {
  levels: _propTypes.default.arrayOf(_propTypes.default.shape({
    min: _propTypes.default.number.isRequired,
    max: _propTypes.default.number.isRequired,
    color: _propTypes.default.oneOf(["primary", "success", "warning", "danger"]).isRequired
  }).isRequired),
  max: _propTypes.default.number.isRequired,
  min: _propTypes.default.number.isRequired,
  showTicks: _propTypes.default.bool,
  compressed: _propTypes.default.bool
};