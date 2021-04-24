"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCommonlyUsedTimeRanges = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _i18n = require("../../../i18n");

var _flex = require("../../../flex");

var _title = require("../../../title");

var _link = require("../../../link");

var _horizontal_rule = require("../../../horizontal_rule");

var _services = require("../../../../services");

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
var generateId = (0, _services.htmlIdGenerator)();

var EuiCommonlyUsedTimeRanges = function EuiCommonlyUsedTimeRanges(_ref) {
  var applyTime = _ref.applyTime,
      commonlyUsedRanges = _ref.commonlyUsedRanges;
  var legendId = generateId();
  var links = commonlyUsedRanges.map(function (_ref2) {
    var start = _ref2.start,
        end = _ref2.end,
        label = _ref2.label;

    var applyCommonlyUsed = function applyCommonlyUsed() {
      applyTime({
        start: start,
        end: end
      });
    };

    var dataTestSubj = label ? "superDatePickerCommonlyUsed_".concat(label.replace(' ', '_')) : undefined;
    return /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
      key: label,
      component: "li",
      className: "euiQuickSelectPopover__sectionItem"
    }, /*#__PURE__*/_react.default.createElement(_link.EuiLink, {
      onClick: applyCommonlyUsed,
      "data-test-subj": dataTestSubj
    }, label));
  });
  return /*#__PURE__*/_react.default.createElement("fieldset", null, /*#__PURE__*/_react.default.createElement(_title.EuiTitle, {
    size: "xxxs"
  }, /*#__PURE__*/_react.default.createElement("legend", {
    id: legendId
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiCommonlyUsedTimeRanges.legend",
    default: "Commonly used"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiQuickSelectPopover__section"
  }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGrid, {
    "aria-labelledby": legendId,
    gutterSize: "s",
    columns: 2,
    direction: "column",
    responsive: false,
    component: "ul"
  }, links)), /*#__PURE__*/_react.default.createElement(_horizontal_rule.EuiHorizontalRule, {
    margin: "s"
  }));
};

exports.EuiCommonlyUsedTimeRanges = EuiCommonlyUsedTimeRanges;
EuiCommonlyUsedTimeRanges.propTypes = {
  applyTime: _propTypes.default.func.isRequired,
  commonlyUsedRanges: _propTypes.default.arrayOf(_propTypes.default.shape({
    end: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,
    label: _propTypes.default.string,
    start: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired
  }).isRequired).isRequired
};
EuiCommonlyUsedTimeRanges.displayName = 'EuiCommonlyUsedTimeRanges';