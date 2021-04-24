"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatchingOptions = void 0;

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
var getSearchableLabel = function getSearchableLabel(option) {
  var normalize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var searchableLabel = option.searchableLabel || option.label;
  return normalize ? searchableLabel.trim().toLowerCase() : searchableLabel;
};

var getSelectedOptionForSearchValue = function getSelectedOptionForSearchValue(searchValue, selectedOptions) {
  var normalizedSearchValue = searchValue.toLowerCase();
  return selectedOptions.find(function (option) {
    return getSearchableLabel(option) === normalizedSearchValue;
  });
};

var collectMatchingOption = function collectMatchingOption(accumulator, option, normalizedSearchValue, isPreFiltered, selectedOptions) {
  // Don't show options that have already been requested if
  // the selectedOptions list exists
  if (selectedOptions) {
    var selectedOption = getSelectedOptionForSearchValue(getSearchableLabel(option, false), selectedOptions);

    if (selectedOption) {
      return false;
    }
  } // If the options have already been prefiltered then we can skip filtering against the search value.
  // TODO: I still don't quite understand how this works when hooked up to async


  if (isPreFiltered) {
    accumulator.push(option);
    return;
  }

  if (!normalizedSearchValue) {
    accumulator.push(option);
    return;
  }

  var normalizedOption = getSearchableLabel(option);

  if (normalizedOption.includes(normalizedSearchValue)) {
    accumulator.push(option);
  }
};

var getMatchingOptions = function getMatchingOptions(options, searchValue, isPreFiltered, selectedOptions) {
  var normalizedSearchValue = searchValue.toLowerCase();
  var matchingOptions = [];
  options.forEach(function (option) {
    collectMatchingOption(matchingOptions, option, normalizedSearchValue, isPreFiltered, selectedOptions);
  });
  return matchingOptions;
};

exports.getMatchingOptions = getMatchingOptions;