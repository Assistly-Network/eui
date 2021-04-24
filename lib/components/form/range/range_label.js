"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRangeLabel = void 0;

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
var EuiRangeLabel = function EuiRangeLabel(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      _ref$side = _ref.side,
      side = _ref$side === void 0 ? 'max' : _ref$side;
  var classes = (0, _classnames.default)('euiRangeLabel', "euiRangeLabel--".concat(side), {
    'euiRangeLabel--isDisabled': disabled
  });
  return /*#__PURE__*/_react.default.createElement("label", {
    className: classes
  }, children);
};

exports.EuiRangeLabel = EuiRangeLabel;
EuiRangeLabel.propTypes = {
  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired]).isRequired,
  disabled: _propTypes.default.bool,
  side: _propTypes.default.oneOf(["min", "max"])
};