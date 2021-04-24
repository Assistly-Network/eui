"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCommentEvent = exports.TYPES = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../common");

var _classnames = _interopRequireDefault(require("classnames"));

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
var typeToClassNameMap = {
  regular: 'euiCommentEvent--regular',
  update: 'euiCommentEvent--update'
};
var TYPES = (0, _common.keysOf)(typeToClassNameMap);
exports.TYPES = TYPES;

var EuiCommentEvent = function EuiCommentEvent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      username = _ref.username,
      timestamp = _ref.timestamp,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'regular' : _ref$type,
      event = _ref.event,
      actions = _ref.actions;
  var classes = (0, _classnames.default)('euiCommentEvent', typeToClassNameMap[type], className);
  var isFigure = type === 'regular' || type === 'update' && typeof children !== 'undefined';
  var Element = isFigure ? 'figure' : 'div';
  var HeaderElement = isFigure ? 'figcaption' : 'div';
  return /*#__PURE__*/_react.default.createElement(Element, {
    className: classes
  }, /*#__PURE__*/_react.default.createElement(HeaderElement, {
    className: "euiCommentEvent__header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCommentEvent__headerData"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCommentEvent__headerUsername"
  }, username), /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCommentEvent__headerEvent"
  }, event), timestamp ? /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCommentEvent__headerTimestamp"
  }, /*#__PURE__*/_react.default.createElement("time", null, timestamp)) : undefined), actions ? /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCommentEvent__headerActions"
  }, actions) : undefined), children ? /*#__PURE__*/_react.default.createElement("div", {
    className: "euiCommentEvent__body"
  }, children) : undefined);
};

exports.EuiCommentEvent = EuiCommentEvent;
EuiCommentEvent.propTypes = {
  /**
     * Author of the comment. Display a small icon or avatar with it if needed.
     */
  username: _propTypes.default.node.isRequired,

  /**
     * Time of occurrence of the event. Its format is set on the consumer's side
     */
  timestamp: _propTypes.default.node,

  /**
     * Describes the event that took place
     */
  event: _propTypes.default.node,

  /**
     * Custom actions that the user can perform from the comment's header
     */
  actions: _propTypes.default.node,

  /**
     * Use "update" when the comment is primarily showing info about actions that the user or the system has performed (e.g. "user1 edited a case").
     */
  type: _propTypes.default.oneOf(["regular", "update"]),
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string
};