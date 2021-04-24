"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlIdGenerator = htmlIdGenerator;

var _uuid = require("uuid");

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

/**
 * This function returns a function to generate ids.
 * This can be used to generate unique, but predictable ids to pair labels
 * with their inputs. It takes an optional prefix as a parameter. If you don't
 * specify it, it generates a random id prefix. If you specify a custom prefix
 * it should begin with an letter to be HTML4 compliant.
 */
function htmlIdGenerator() {
  var idPrefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var staticUuid = (0, _uuid.v1)();
  return function () {
    var idSuffix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var prefix = "".concat(idPrefix).concat(idPrefix !== '' ? '_' : 'i');
    var suffix = idSuffix ? "_".concat(idSuffix) : '';
    return "".concat(prefix).concat(suffix ? staticUuid : (0, _uuid.v1)()).concat(suffix);
  };
}