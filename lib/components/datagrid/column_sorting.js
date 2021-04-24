"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDataGridColumnSorting = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _popover = require("../popover");

var _i18n = require("../i18n");

var _text = require("../text");

var _button = require("../button");

var _flex = require("../flex");

var _drag_and_drop = require("../drag_and_drop");

var _column_sorting_draggable = require("./column_sorting_draggable");

var _data_grid_schema = require("./data_grid_schema");

var _token = require("../token");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useDataGridColumnSorting = function useDataGridColumnSorting(columns, sorting, schema, schemaDetectors, displayValues) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      avilableColumnsisOpen = _useState4[0],
      setAvailableColumnsIsOpen = _useState4[1]; // prune any non-existent/hidden columns from sorting


  (0, _react.useEffect)(function () {
    if (sorting) {
      var nextSortingColumns = [];
      var availableColumnIds = new Set(columns.map(function (_ref) {
        var id = _ref.id;
        return id;
      }));

      for (var i = 0; i < sorting.columns.length; i++) {
        var column = sorting.columns[i];

        if (availableColumnIds.has(column.id)) {
          nextSortingColumns.push(column);
        }
      } // if the column array lengths differ then the sorting columns have been pruned


      if (nextSortingColumns.length !== sorting.columns.length) {
        sorting.onSort(nextSortingColumns);
      }
    }
  }, [columns, sorting]);
  if (sorting == null) return [null];
  var activeColumnIds = new Set(sorting.columns.map(function (_ref2) {
    var id = _ref2.id;
    return id;
  }));

  var _columns$reduce = columns.reduce(function (acc, column) {
    if (activeColumnIds.has(column.id)) {
      acc.activeColumns.push(column);
    } else {
      acc.inactiveColumns.push(column);
    }

    return acc;
  }, {
    activeColumns: [],
    inactiveColumns: []
  }),
      inactiveColumns = _columns$reduce.inactiveColumns;

  function onDragEnd(_ref3) {
    var sourceIndex = _ref3.source.index,
        destination = _ref3.destination;
    var destinationIndex = destination.index;
    var nextColumns = (0, _drag_and_drop.euiDragDropReorder)(sorting.columns, sourceIndex, destinationIndex);
    sorting.onSort(nextColumns);
  }

  var controlBtnClasses = (0, _classnames.default)('euiDataGrid__controlBtn', {
    'euiDataGrid__controlBtn--active': sorting.columns.length > 0
  });
  var numberOfSortedFields = sorting.columns.length;

  var schemaDetails = function schemaDetails(id) {
    return schema.hasOwnProperty(id) && schema[id].columnType != null ? (0, _data_grid_schema.getDetailsForSchema)(schemaDetectors, schema[id].columnType) : null;
  };

  var inactiveSortableColumns = inactiveColumns.filter(function (_ref4) {
    var id = _ref4.id,
        isSortable = _ref4.isSortable;
    var schemaDetail = schemaDetails(id);
    var sortable = true;

    if (isSortable != null) {
      sortable = isSortable;
    } else if (schemaDetail != null) {
      sortable = schemaDetail.hasOwnProperty('isSortable') ? schemaDetail.isSortable : true;
    }

    return sortable;
  });

  var columnSorting = /*#__PURE__*/_react.default.createElement(_popover.EuiPopover, {
    "data-test-subj": "dataGridColumnSortingPopover",
    isOpen: isOpen,
    closePopover: function closePopover() {
      return setIsOpen(false);
    },
    anchorPosition: "downLeft",
    panelPaddingSize: "s",
    panelClassName: "euiDataGridColumnSortingPopover",
    button: /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      tokens: ['euiColumnSorting.button', 'euiColumnSorting.buttonActive'],
      defaults: ['Sort fields', 'fields sorted']
    }, function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 2),
          button = _ref6[0],
          buttonActive = _ref6[1];

      return /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, {
        size: "xs",
        iconType: "sortable",
        color: "text",
        className: controlBtnClasses,
        "data-test-subj": "dataGridColumnSortingButton",
        onClick: function onClick() {
          return setIsOpen(!isOpen);
        }
      }, numberOfSortedFields > 0 ? "".concat(numberOfSortedFields, " ").concat(buttonActive) : button);
    })
  }, sorting.columns.length > 0 ? /*#__PURE__*/_react.default.createElement("div", {
    role: "region",
    "aria-live": "assertive",
    className: "euiDataGrid__controlScroll"
  }, /*#__PURE__*/_react.default.createElement(_drag_and_drop.EuiDragDropContext, {
    onDragEnd: onDragEnd
  }, /*#__PURE__*/_react.default.createElement(_drag_and_drop.EuiDroppable, {
    droppableId: "columnSorting"
  }, /*#__PURE__*/_react.default.createElement(_react.Fragment, null, sorting.columns.map(function (_ref7, index) {
    var id = _ref7.id,
        direction = _ref7.direction;
    return /*#__PURE__*/_react.default.createElement(_column_sorting_draggable.EuiDataGridColumnSortingDraggable, {
      key: id,
      id: id,
      display: displayValues[id],
      direction: direction,
      index: index,
      sorting: sorting,
      schema: schema,
      schemaDetectors: schemaDetectors
    });
  }))))) : /*#__PURE__*/_react.default.createElement(_text.EuiText, {
    size: "s",
    color: "subdued"
  }, /*#__PURE__*/_react.default.createElement("p", {
    role: "alert"
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSorting.emptySorting",
    default: "Currently no fields are sorted"
  }))), (inactiveSortableColumns.length > 0 || sorting.columns.length > 0) && /*#__PURE__*/_react.default.createElement(_popover.EuiPopoverFooter, null, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
    gutterSize: "m",
    justifyContent: "spaceBetween",
    responsive: false
  }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, inactiveSortableColumns.length > 0 && /*#__PURE__*/_react.default.createElement(_popover.EuiPopover, {
    "data-test-subj": "dataGridColumnSortingPopoverColumnSelection",
    isOpen: avilableColumnsisOpen,
    closePopover: function closePopover() {
      return setAvailableColumnsIsOpen(false);
    },
    anchorPosition: "downLeft",
    panelPaddingSize: "none",
    button: /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, {
      size: "xs",
      flush: "left",
      iconType: "arrowDown",
      iconSide: "right",
      onClick: function onClick() {
        return setAvailableColumnsIsOpen(!avilableColumnsisOpen);
      }
    }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiColumnSorting.pickFields",
      default: "Pick fields to sort by"
    }))
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSorting.sortFieldAriaLabel",
    default: "Sort by: "
  }, function (sortFieldAriaLabel) {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "euiDataGridColumnSorting__fieldList",
      role: "listbox"
    }, inactiveSortableColumns.map(function (_ref8) {
      var id = _ref8.id,
          defaultSortDirection = _ref8.defaultSortDirection;
      return /*#__PURE__*/_react.default.createElement("button", {
        key: id,
        className: "euiDataGridColumnSorting__field",
        "aria-label": "".concat(sortFieldAriaLabel, " ").concat(id),
        role: "option",
        "aria-selected": "false",
        "data-test-subj": "dataGridColumnSortingPopoverColumnSelection-".concat(id),
        onClick: function onClick() {
          var nextColumns = _toConsumableArray(sorting.columns);

          nextColumns.push({
            id: id,
            direction: defaultSortDirection || schemaDetails(id) && schemaDetails(id).defaultSortDirection || 'asc'
          });
          sorting.onSort(nextColumns);
        }
      }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
        alignItems: "center",
        gutterSize: "s",
        component: "span",
        responsive: false
      }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, /*#__PURE__*/_react.default.createElement(_token.EuiToken, {
        iconType: schemaDetails(id) != null ? (0, _data_grid_schema.getDetailsForSchema)(schemaDetectors, schema[id].columnType).icon : 'tokenString',
        color: schemaDetails(id) != null ? (0, _data_grid_schema.getDetailsForSchema)(schemaDetectors, schema[id].columnType).color : undefined
      })), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, /*#__PURE__*/_react.default.createElement(_text.EuiText, {
        size: "xs"
      }, displayValues[id]))));
    }));
  }))), sorting.columns.length > 0 ? /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
    grow: false
  }, /*#__PURE__*/_react.default.createElement(_button.EuiButtonEmpty, {
    size: "xs",
    flush: "right",
    onClick: function onClick() {
      return sorting.onSort([]);
    }
  }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiColumnSorting.clearAll",
    default: "Clear sorting"
  }))) : null)));

  return columnSorting;
};

exports.useDataGridColumnSorting = useDataGridColumnSorting;