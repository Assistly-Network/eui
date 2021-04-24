"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiDatePopoverContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tabs = require("../../../tabs");

var _text = require("../../../text");

var _button = require("../../../button");

var _absolute_tab = require("./absolute_tab");

var _relative_tab = require("./relative_tab");

var _date_modes = require("../date_modes");

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
var EuiDatePopoverContent = function EuiDatePopoverContent(_ref) {
  var value = _ref.value,
      _ref$roundUp = _ref.roundUp,
      roundUp = _ref$roundUp === void 0 ? false : _ref$roundUp,
      onChange = _ref.onChange,
      dateFormat = _ref.dateFormat,
      timeFormat = _ref.timeFormat,
      locale = _ref.locale,
      position = _ref.position,
      utcOffset = _ref.utcOffset;

  var onTabClick = function onTabClick(selectedTab) {
    switch (selectedTab.id) {
      case _date_modes.DATE_MODES.ABSOLUTE:
        onChange((0, _date_modes.toAbsoluteString)(value, roundUp));
        break;

      case _date_modes.DATE_MODES.RELATIVE:
        onChange((0, _date_modes.toRelativeString)(value));
        break;
    }
  };

  var ariaLabel = "".concat(position === 'start' ? 'Start' : 'End', " date:");
  var renderTabs = [{
    id: _date_modes.DATE_MODES.ABSOLUTE,
    name: 'Absolute',
    content: /*#__PURE__*/_react.default.createElement(_absolute_tab.EuiAbsoluteTab, {
      dateFormat: dateFormat,
      timeFormat: timeFormat,
      locale: locale,
      value: value,
      onChange: onChange,
      roundUp: roundUp,
      position: position,
      utcOffset: utcOffset
    }),
    'data-test-subj': 'superDatePickerAbsoluteTab',
    'aria-label': "".concat(ariaLabel, " Absolute")
  }, {
    id: _date_modes.DATE_MODES.RELATIVE,
    name: 'Relative',
    content: /*#__PURE__*/_react.default.createElement(_relative_tab.EuiRelativeTab, {
      dateFormat: dateFormat,
      locale: locale,
      value: (0, _date_modes.toAbsoluteString)(value, roundUp),
      onChange: onChange,
      roundUp: roundUp,
      position: position
    }),
    'data-test-subj': 'superDatePickerRelativeTab',
    'aria-label': "".concat(ariaLabel, " Relative")
  }, {
    id: _date_modes.DATE_MODES.NOW,
    name: 'Now',
    content: /*#__PURE__*/_react.default.createElement(_text.EuiText, {
      size: "s",
      color: "subdued",
      className: "euiDatePopoverContent__padded--large"
    }, /*#__PURE__*/_react.default.createElement("p", null, "Setting the time to \"now\" means that on every refresh this time will be set to the time of the refresh."), /*#__PURE__*/_react.default.createElement(_button.EuiButton, {
      "data-test-subj": "superDatePickerNowButton",
      onClick: function onClick() {
        onChange('now');
      },
      fullWidth: true,
      size: "s",
      fill: true
    }, "Set ", position, " date and time to now")),
    'data-test-subj': 'superDatePickerNowTab',
    'aria-label': "".concat(ariaLabel, " Now")
  }];
  var initialSelectedTab = renderTabs.find(function (tab) {
    return tab.id === (0, _date_modes.getDateMode)(value);
  });
  return /*#__PURE__*/_react.default.createElement(_tabs.EuiTabbedContent, {
    className: "euiDatePopoverContent",
    tabs: renderTabs,
    autoFocus: "selected",
    initialSelectedTab: initialSelectedTab,
    onTabClick: onTabClick,
    size: "s",
    expand: true
  });
};

exports.EuiDatePopoverContent = EuiDatePopoverContent;
EuiDatePopoverContent.propTypes = {
  value: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func.isRequired,
  roundUp: _propTypes.default.bool,
  dateFormat: _propTypes.default.string.isRequired,
  timeFormat: _propTypes.default.string.isRequired,
  locale: _propTypes.default.any,
  position: _propTypes.default.oneOf(["start", "end"]).isRequired,
  utcOffset: _propTypes.default.number
};
EuiDatePopoverContent.displayName = 'EuiDatePopoverContent';