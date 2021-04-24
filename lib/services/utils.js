"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.times = times;
exports.memoize = memoize;
exports.browserTick = void 0;

var _times2 = _interopRequireDefault(require("lodash/times"));

var _memoize2 = _interopRequireDefault(require("lodash/memoize"));

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
function times(count, iteratee) {
  if (iteratee === undefined) {
    return (0, _times2.default)(count);
  }

  return (0, _times2.default)(count, iteratee);
}

function memoize(func, resolver) {
  return (0, _memoize2.default)(func, resolver);
}

var browserTick = function browserTick(callback) {
  requestAnimationFrame(callback);
};

exports.browserTick = browserTick;