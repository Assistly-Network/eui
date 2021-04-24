"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeExecution = timeExecution;
exports.benchmarkFunction = benchmarkFunction;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
function timeExecution(fn) {
  var start = process.hrtime();
  fn();

  var _process$hrtime = process.hrtime(start),
      _process$hrtime2 = _slicedToArray(_process$hrtime, 2),
      seconds = _process$hrtime2[0],
      nanoseconds = _process$hrtime2[1];

  var milliseconds = seconds * 1000 + nanoseconds / 1000000;
  return milliseconds;
}

function benchmarkFunction(fn) {
  var warmupRuns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var benchmarkRuns = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;

  // warmup v8 optimizations, cache, etc
  for (var i = 0; i < warmupRuns; i++) {
    fn();
  }

  var runTimes = [];

  for (var _i2 = 0; _i2 < benchmarkRuns; _i2++) {
    runTimes.push(timeExecution(fn));
  }

  return Math.min.apply(null, runTimes);
}