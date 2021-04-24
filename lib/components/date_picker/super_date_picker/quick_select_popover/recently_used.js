"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiRecentlyUsed = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pretty_duration = require("../pretty_duration");

var _i18n = require("../../../i18n");

var _services = require("../../../../services");

var _title = require("../../../title");

var _link = require("../../../link");

var _horizontal_rule = require("../../../horizontal_rule");

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

var EuiRecentlyUsed = function EuiRecentlyUsed(_ref) {
  var applyTime = _ref.applyTime,
      commonlyUsedRanges = _ref.commonlyUsedRanges,
      dateFormat = _ref.dateFormat,
      _ref$recentlyUsedRang = _ref.recentlyUsedRanges,
      recentlyUsedRanges = _ref$recentlyUsedRang === void 0 ? [] : _ref$recentlyUsedRang;
  var legendId = generateId();

  if (recentlyUsedRanges.length === 0) {
    return null;
  }

  var links = recentlyUsedRanges.map(function (_ref2) {
    var start = _ref2.start,
        end = _ref2.end;

    var applyRecentlyUsed = function applyRecentlyUsed() {
      applyTime({
        start: start,
        end: end
      });
    };

    return /*#__PURE__*/_react.default.createElement("li", {
      className: "euiQuickSelectPopover__sectionItem",
      key: "".concat(start, "-").concat(end)
    }, /*#__PURE__*/_react.default.createElement(_link.EuiLink, {
      onClick: applyRecentlyUsed
    }, (0, _pretty_duration.prettyDuration)(start, end, commonlyUsedRanges, dateFormat)));
  });
  return /*#__PURE__*/_react.default.createElement("fieldset", null, /*#__PURE__*/_react.default.createElement(_title.EuiTitle, {
    size: "xxxs"
  }, /*#__PURE__*/_react.default.createElement("legend", {
    id: legendId
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiRecentlyUsed.legend",
    default: "Recently used date ranges"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiQuickSelectPopover__section"
  }, /*#__PURE__*/_react.default.createElement("ul", null, links)), /*#__PURE__*/_react.default.createElement(_horizontal_rule.EuiHorizontalRule, {
    margin: "s"
  }));
};

exports.EuiRecentlyUsed = EuiRecentlyUsed;
EuiRecentlyUsed.propTypes = {
  applyTime: _propTypes.default.func.isRequired,
  commonlyUsedRanges: _propTypes.default.arrayOf(_propTypes.default.shape({
    end: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,
    label: _propTypes.default.string,
    start: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired
  }).isRequired).isRequired,
  dateFormat: _propTypes.default.string.isRequired,
  recentlyUsedRanges: _propTypes.default.arrayOf(_propTypes.default.shape({
    end: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired,
    label: _propTypes.default.string,
    start: _propTypes.default.oneOfType([_propTypes.default.oneOf(["now"]), _propTypes.default.string.isRequired]).isRequired
  }).isRequired)
};
EuiRecentlyUsed.displayName = 'EuiRecentlyUsed';