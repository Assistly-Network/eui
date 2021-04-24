"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseTimeParts = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _datemath = _interopRequireDefault(require("@elastic/datemath"));

var _predicate = require("../../../../services/predicate");

var _relative_options = require("../relative_options");

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
var LAST = 'last';
var NEXT = 'next';

var isNow = function isNow(value) {
  return value === _date_modes.DATE_MODES.NOW;
};
/**
 * This function returns time value, time unit and time tense for a given time string.
 *
 * For example: for `now-40m` it will parse output as time value to `40` time unit to `m` and time unit to `last`.
 *
 * If given a datetime string it will return a default value.
 *
 * If the given string is in the format such as `now/d` it will parse the string to moment object and find the time value, time unit and time tense using moment
 *
 * This function accepts two strings start and end time. I the start value is now then it uses the end value to parse.
 */


var parseTimeParts = function parseTimeParts(start, end) {
  var results = {
    timeTense: LAST,
    timeUnits: 'm',
    timeValue: 15
  };
  var value = isNow(start) ? end : start;
  var matches = (0, _predicate.isString)(value) && value.match(/now(([-+])(\d+)([smhdwMy])(\/[smhdwMy])?)?/);

  if (!matches) {
    return results;
  }

  var operator = matches[2];
  var matchedTimeValue = matches[3];
  var timeUnits = matches[4];

  if (matchedTimeValue && timeUnits && operator) {
    return {
      timeTense: operator === '+' ? NEXT : LAST,
      timeUnits: timeUnits,
      timeValue: parseInt(matchedTimeValue, 10)
    };
  }

  var duration = _moment.default.duration((0, _moment.default)().diff(_datemath.default.parse(value)));

  var unitOp = '';

  for (var i = 0; i < _relative_options.relativeUnitsFromLargestToSmallest.length; i++) {
    var as = duration.as(_relative_options.relativeUnitsFromLargestToSmallest[i]);

    if (as < 0) {
      unitOp = '+';
    }

    if (Math.abs(as) > 1) {
      return {
        timeValue: Math.round(Math.abs(as)),
        timeUnits: _relative_options.relativeUnitsFromLargestToSmallest[i],
        timeTense: unitOp === '+' ? NEXT : LAST
      };
    }
  }

  return results;
};

exports.parseTimeParts = parseTimeParts;