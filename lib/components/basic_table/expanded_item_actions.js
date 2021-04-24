"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandedItemActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _default_item_action = require("./default_item_action");

var _custom_item_action = require("./custom_item_action");

var _action_types = require("./action_types");

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
var ExpandedItemActions = function ExpandedItemActions(_ref) {
  var actions = _ref.actions,
      itemId = _ref.itemId,
      item = _ref.item,
      actionEnabled = _ref.actionEnabled,
      className = _ref.className;
  var moreThanThree = actions.length > 2;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, actions.reduce(function (tools, action, index) {
    var available = action.available ? action.available(item) : true;

    if (!available) {
      return tools;
    }

    var enabled = actionEnabled(action);
    var key = "item_action_".concat(itemId, "_").concat(index);
    var classes = (0, _classnames.default)(className, {
      expandedItemActions__completelyHide: moreThanThree && index < 2
    });

    if ((0, _action_types.isCustomItemAction)(action)) {
      // custom action has a render function
      tools.push( /*#__PURE__*/_react.default.createElement(_custom_item_action.CustomItemAction, {
        key: key,
        className: classes,
        index: index,
        action: action,
        enabled: enabled,
        item: item
      }));
    } else {
      tools.push( /*#__PURE__*/_react.default.createElement(_default_item_action.DefaultItemAction, {
        key: key,
        className: classes,
        action: action,
        enabled: enabled,
        item: item
      }));
    }

    return tools;
  }, []));
};

exports.ExpandedItemActions = ExpandedItemActions;