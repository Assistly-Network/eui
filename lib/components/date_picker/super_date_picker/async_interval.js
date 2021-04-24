"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AsyncInterval = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
var AsyncInterval = function AsyncInterval(_fn, refreshInterval) {
  var _this = this;

  _classCallCheck(this, AsyncInterval);

  _defineProperty(this, "timeoutId", null);

  _defineProperty(this, "isStopped", false);

  _defineProperty(this, "__pendingFn", function () {});

  _defineProperty(this, "setAsyncInterval", function (fn, milliseconds) {
    if (!_this.isStopped) {
      _this.timeoutId = window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fn();

              case 2:
                _this.__pendingFn = _context.sent;

                _this.setAsyncInterval(fn, milliseconds);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), milliseconds);
    }
  });

  _defineProperty(this, "stop", function () {
    _this.isStopped = true;

    if (_this.timeoutId !== null) {
      window.clearTimeout(_this.timeoutId);
    }
  });

  this.setAsyncInterval(_fn, refreshInterval);
};

exports.AsyncInterval = AsyncInterval;