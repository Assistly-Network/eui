"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keysOf = keysOf;
exports.assertNever = void 0;

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
var assertNever = function assertNever(x) {
  throw new Error("Unexpected value ".concat(x));
}; // utility types:

/**
 * XOR for some properties applied to a type
 * (XOR is one of these but not both or neither)
 *
 * Usage: OneOf<typeToExtend, one | but | not | multiple | of | these | are | required>
 *
 * To require aria-label or aria-labelledby but not both
 * Example: OneOf<Type, 'aria-label' | 'aria-labelledby'>
 */


exports.assertNever = assertNever;

/**
 * Wraps Object.keys with proper typescript definition of the resulting array
 */
function keysOf(obj) {
  return Object.keys(obj);
}