"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSecureRelForTarget = void 0;

var _url = require("../url");

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
 * Secures outbound links. For more info:
 * https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
 */
var getSecureRelForTarget = function getSecureRelForTarget(_ref) {
  var href = _ref.href,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '' : _ref$target,
      rel = _ref.rel;
  var isElasticHref = !!href && (0, _url.isDomainSecure)(href);
  var relParts = !!rel ? rel.split(' ').filter(function (part) {
    return !!part.length && part !== 'noreferrer';
  }) : [];

  if (!isElasticHref) {
    relParts.push('noreferrer');
  }

  if (target.includes('_blank') && relParts.indexOf('noopener') === -1) {
    relParts.push('noopener');
  }

  return relParts.sort().join(' ').trim();
};

exports.getSecureRelForTarget = getSecureRelForTarget;