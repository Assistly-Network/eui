"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiI18nNumber = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("../context");

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
var defaultFormatter = new Intl.NumberFormat('en');

function defaultFormatNumber(value) {
  return defaultFormatter.format(value);
}

function hasValues(x) {
  return x.values != null;
}

var EuiI18nNumber = function EuiI18nNumber(props) {
  return /*#__PURE__*/_react.default.createElement(_context.EuiI18nConsumer, null, function (i18nConfig) {
    var formatNumber = i18nConfig.formatNumber || defaultFormatNumber;

    if (hasValues(props)) {
      return props.children(props.values.map(function (value) {
        return formatNumber(value);
      }));
    }

    var formattedValue = (formatNumber || defaultFormatNumber)(props.value);

    if (props.children) {
      return props.children(formattedValue);
    } else {
      return formattedValue;
    }
  });
};

exports.EuiI18nNumber = EuiI18nNumber;
EuiI18nNumber.propTypes = {
  value: _propTypes.default.number,

  /**
     * ReactNode to render as this component's content
     */
  children: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.func.isRequired]),
  values: _propTypes.default.arrayOf(_propTypes.default.number.isRequired)
};