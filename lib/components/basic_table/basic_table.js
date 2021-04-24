"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItemId = getItemId;
exports.EuiBasicTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _services = require("../../services");

var _predicate = require("../../services/predicate");

var _objects = require("../../services/objects");

var _flex = require("../flex");

var _form = require("../form");

var _table = require("../table");

var _collapsed_item_actions = require("./collapsed_item_actions");

var _expanded_item_actions = require("./expanded_item_actions");

var _pagination_bar = require("./pagination_bar");

var _icon = require("../icon");

var _accessibility = require("../accessibility");

var _i18n = require("../i18n");

var _delay_render = require("../delay_render");

var _accessibility2 = require("../../services/accessibility");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var dataTypesProfiles = {
  auto: {
    align: _services.LEFT_ALIGNMENT,
    render: function render(value) {
      return (0, _services.formatAuto)(value);
    }
  },
  string: {
    align: _services.LEFT_ALIGNMENT,
    render: function render(value) {
      return (0, _services.formatText)(value);
    }
  },
  number: {
    align: _services.RIGHT_ALIGNMENT,
    render: function render(value) {
      return (0, _services.formatNumber)(value);
    }
  },
  boolean: {
    align: _services.LEFT_ALIGNMENT,
    render: function render(value) {
      return (0, _services.formatBoolean)(value);
    }
  },
  date: {
    align: _services.LEFT_ALIGNMENT,
    render: function render(value) {
      return (0, _services.formatDate)(value);
    }
  }
};
var DATA_TYPES = Object.keys(dataTypesProfiles);

function getItemId(item, itemId) {
  if (itemId) {
    if ((0, _predicate.isFunction)(itemId)) {
      return itemId(item);
    } // @ts-ignore never mind about the index signature


    return item[itemId];
  }
}

function getRowProps(item, rowProps) {
  if (rowProps) {
    if ((0, _predicate.isFunction)(rowProps)) {
      return rowProps(item);
    }

    return rowProps;
  }

  return {};
}

function getCellProps(item, column, cellProps) {
  if (cellProps) {
    if ((0, _predicate.isFunction)(cellProps)) {
      return cellProps(item, column);
    }

    return cellProps;
  }

  return {};
}

function getColumnFooter(column, _ref) {
  var items = _ref.items,
      pagination = _ref.pagination;
  var _ref2 = column,
      footer = _ref2.footer;

  if (footer) {
    if ((0, _predicate.isFunction)(footer)) {
      return footer({
        items: items,
        pagination: pagination
      });
    }

    return footer;
  }

  return undefined;
}

function hasPagination(x) {
  return x.hasOwnProperty('pagination') && !!x.pagination;
}

var EuiBasicTable = /*#__PURE__*/function (_Component) {
  _inherits(EuiBasicTable, _Component);

  var _super = _createSuper(EuiBasicTable);

  _createClass(EuiBasicTable, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.selection) {
        // next props doesn't have a selection, reset our state
        return {
          selection: []
        };
      }

      var itemId = nextProps.itemId;
      var selection = prevState.selection.filter(function (selectedItem) {
        return nextProps.items.findIndex(function (item) {
          return getItemId(item, itemId) === getItemId(selectedItem, itemId);
        }) !== -1;
      });

      if (selection.length !== prevState.selection.length) {
        if (nextProps.selection.onSelectionChange) {
          nextProps.selection.onSelectionChange(selection);
        }

        return {
          selection: selection
        };
      }

      return null;
    } // used for moving in & out of `loading` state

  }]);

  function EuiBasicTable(props) {
    var _this;

    _classCallCheck(this, EuiBasicTable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "cleanups", []);

    _defineProperty(_assertThisInitialized(_this), "tbody", null);

    _defineProperty(_assertThisInitialized(_this), "setTbody", function (tbody) {
      // remove listeners from an existing element
      _this.removeLoadingListeners(); // update the ref


      _this.tbody = tbody; // if loading, add listeners

      if (_this.props.loading === true && tbody) {
        _this.addLoadingListeners(tbody);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "addLoadingListeners", function (tbody) {
      var listener = function listener(event) {
        event.stopPropagation();
        event.preventDefault();
      };

      ['mousedown', 'mouseup', 'mouseover', 'mouseout', 'mouseenter', 'mouseleave', 'click', 'dblclick', 'keydown', 'keyup', 'keypress'].forEach(function (event) {
        tbody.addEventListener(event, listener, true);

        _this.cleanups.push(function () {
          tbody.removeEventListener(event, listener, true);
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeLoadingListeners", function () {
      _this.cleanups.forEach(function (cleanup) {
        return cleanup();
      });

      _this.cleanups.length = 0;
    });

    _defineProperty(_assertThisInitialized(_this), "tableId", (0, _accessibility2.htmlIdGenerator)('__table')());

    _defineProperty(_assertThisInitialized(_this), "renderSelectAll", function (isMobile) {
      var _this$props = _this.props,
          items = _this$props.items,
          selection = _this$props.selection;

      if (!selection) {
        return;
      }

      var selectableItems = items.filter(function (item) {
        return !selection.selectable || selection.selectable(item);
      });
      var checked = _this.state.selection && selectableItems.length > 0 && _this.state.selection.length === selectableItems.length;
      var disabled = selectableItems.length === 0;

      var onChange = function onChange(event) {
        if (event.target.checked) {
          _this.changeSelection(selectableItems);
        } else {
          _this.changeSelection([]);
        }
      };

      return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiBasicTable.selectAllRows",
        default: "Select all rows"
      }, function (selectAllRows) {
        return /*#__PURE__*/_react.default.createElement(_form.EuiCheckbox, {
          id: "_selection_column-checkbox_".concat((0, _accessibility2.htmlIdGenerator)()()),
          type: isMobile ? undefined : 'inList',
          checked: checked,
          disabled: disabled,
          onChange: onChange // Only add data-test-subj to one of the checkboxes
          ,
          "data-test-subj": isMobile ? undefined : 'checkboxSelectAll',
          "aria-label": selectAllRows,
          label: isMobile ? selectAllRows : null
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resolveColumnSortDirection", function (column) {
      var sorting = _this.props.sorting;
      var _ref3 = column,
          sortable = _ref3.sortable,
          field = _ref3.field,
          name = _ref3.name;

      if (!sorting || !sorting.sort || !sortable) {
        return;
      }

      if (sorting.sort.field === field || sorting.sort.field === name) {
        return sorting.sort.direction;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resolveColumnOnSort", function (column) {
      var sorting = _this.props.sorting;
      var _ref4 = column,
          sortable = _ref4.sortable,
          name = _ref4.name;

      if (!sorting || !sortable) {
        return;
      }

      if (!_this.props.onChange) {
        throw new Error("BasicTable is configured to be sortable on column [".concat(name, "] but\n          [onChange] is not configured. This callback must be implemented to handle the sort requests"));
      }

      return function () {
        return _this.onColumnSortChange(column);
      };
    });

    _this.state = {
      // used for checking if  initial selection is rendered
      initialSelectionRendered: false,
      selection: []
    };
    return _this;
  }

  _createClass(EuiBasicTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.loading && this.tbody) this.addLoadingListeners(this.tbody);
      this.getInitialSelection();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.loading !== this.props.loading) {
        if (this.props.loading && this.tbody) {
          this.addLoadingListeners(this.tbody);
        } else {
          this.removeLoadingListeners();
        }
      }

      this.getInitialSelection();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeLoadingListeners();
    }
  }, {
    key: "getInitialSelection",
    value: function getInitialSelection() {
      if (this.props.selection && this.props.selection.initialSelected && !this.state.initialSelectionRendered && this.props.items.length > 0) {
        this.setState({
          selection: this.props.selection.initialSelected
        });
        this.setState({
          initialSelectionRendered: true
        });
      }
    }
  }, {
    key: "setSelection",
    value: function setSelection(newSelection) {
      this.changeSelection(newSelection);
    }
  }, {
    key: "buildCriteria",
    value: function buildCriteria(props) {
      var criteria = {};

      if (hasPagination(props)) {
        criteria.page = {
          index: props.pagination.pageIndex,
          size: props.pagination.pageSize
        };
      }

      if (props.sorting) {
        criteria.sort = props.sorting.sort;
      }

      return criteria;
    }
  }, {
    key: "changeSelection",
    value: function changeSelection(selection) {
      if (!this.props.selection) {
        return;
      }

      this.setState({
        selection: selection
      });

      if (this.props.selection.onSelectionChange) {
        this.props.selection.onSelectionChange(selection);
      }
    }
  }, {
    key: "clearSelection",
    value: function clearSelection() {
      this.changeSelection([]);
    }
  }, {
    key: "onPageSizeChange",
    value: function onPageSizeChange(size) {
      this.clearSelection();
      var currentCriteria = this.buildCriteria(this.props);

      var criteria = _objectSpread(_objectSpread({}, currentCriteria), {}, {
        page: {
          index: 0,
          // when page size changes, we take the user back to the first page
          size: size
        }
      });

      if (this.props.onChange) {
        this.props.onChange(criteria);
      }
    }
  }, {
    key: "onPageChange",
    value: function onPageChange(index) {
      this.clearSelection();
      var currentCriteria = this.buildCriteria(this.props);

      var criteria = _objectSpread(_objectSpread({}, currentCriteria), {}, {
        page: _objectSpread(_objectSpread({}, currentCriteria.page), {}, {
          index: index
        })
      });

      if (this.props.onChange) {
        this.props.onChange(criteria);
      }
    }
  }, {
    key: "onColumnSortChange",
    value: function onColumnSortChange(column) {
      this.clearSelection();
      var currentCriteria = this.buildCriteria(this.props);
      var direction = _services.SortDirection.ASC;

      if (currentCriteria && currentCriteria.sort && (currentCriteria.sort.field === column.field || currentCriteria.sort.field === column.name)) {
        direction = _services.SortDirection.reverse(currentCriteria.sort.direction);
      }

      var criteria = _objectSpread(_objectSpread({}, currentCriteria), {}, {
        // resetting the page if the criteria has one
        page: !currentCriteria.page ? undefined : {
          index: 0,
          size: currentCriteria.page.size
        },
        sort: {
          field: column.field || column.name,
          direction: direction
        }
      });

      if (this.props.onChange) {
        // @ts-ignore complex relationship between pagination's existence and criteria, the code logic ensures this is correctly maintained
        this.props.onChange(criteria);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          loading = _this$props2.loading,
          items = _this$props2.items,
          itemId = _this$props2.itemId,
          columns = _this$props2.columns,
          pagination = _this$props2.pagination,
          sorting = _this$props2.sorting,
          selection = _this$props2.selection,
          onChange = _this$props2.onChange,
          error = _this$props2.error,
          noItemsMessage = _this$props2.noItemsMessage,
          compressed = _this$props2.compressed,
          itemIdToExpandedRowMap = _this$props2.itemIdToExpandedRowMap,
          responsive = _this$props2.responsive,
          isSelectable = _this$props2.isSelectable,
          isExpandable = _this$props2.isExpandable,
          hasActions = _this$props2.hasActions,
          rowProps = _this$props2.rowProps,
          cellProps = _this$props2.cellProps,
          tableCaption = _this$props2.tableCaption,
          rowHeader = _this$props2.rowHeader,
          tableLayout = _this$props2.tableLayout,
          rest = _objectWithoutProperties(_this$props2, ["className", "loading", "items", "itemId", "columns", "pagination", "sorting", "selection", "onChange", "error", "noItemsMessage", "compressed", "itemIdToExpandedRowMap", "responsive", "isSelectable", "isExpandable", "hasActions", "rowProps", "cellProps", "tableCaption", "rowHeader", "tableLayout"]);

      var classes = (0, _classnames.default)('euiBasicTable', {
        'euiBasicTable-loading': loading
      }, className);
      var table = this.renderTable();
      var paginationBar = this.renderPaginationBar();
      return /*#__PURE__*/_react.default.createElement("div", _extends({
        className: classes
      }, rest), table, paginationBar);
    }
  }, {
    key: "renderTable",
    value: function renderTable() {
      var _this$props3 = this.props,
          compressed = _this$props3.compressed,
          responsive = _this$props3.responsive,
          tableLayout = _this$props3.tableLayout;
      var mobileHeader = responsive ? /*#__PURE__*/_react.default.createElement(_table.EuiTableHeaderMobile, null, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexGroup, {
        responsive: false,
        justifyContent: "spaceBetween",
        alignItems: "baseline"
      }, /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, this.renderSelectAll(true)), /*#__PURE__*/_react.default.createElement(_flex.EuiFlexItem, {
        grow: false
      }, this.renderTableMobileSort()))) : undefined;
      var caption = this.renderTableCaption();
      var head = this.renderTableHead();
      var body = this.renderTableBody();
      var footer = this.renderTableFooter();
      return /*#__PURE__*/_react.default.createElement("div", null, mobileHeader, /*#__PURE__*/_react.default.createElement(_table.EuiTable, {
        id: this.tableId,
        tableLayout: tableLayout,
        responsive: responsive,
        compressed: compressed
      }, caption, head, body, footer));
    }
  }, {
    key: "renderTableMobileSort",
    value: function renderTableMobileSort() {
      var _this2 = this;

      var _this$props4 = this.props,
          columns = _this$props4.columns,
          sorting = _this$props4.sorting;
      var items = [];

      if (!sorting) {
        return null;
      }

      columns.forEach(function (column, index) {
        if (column.field && sorting.sort && !!sorting.enableAllColumns && column.sortable == null) {
          column = _objectSpread(_objectSpread({}, column), {}, {
            sortable: true
          });
        }

        if (!column.sortable || column.hideForMobile) {
          return;
        }

        var sortDirection = _this2.resolveColumnSortDirection(column);

        items.push({
          name: column.name,
          key: "_data_s_".concat(column.field, "_").concat(index),
          onSort: _this2.resolveColumnOnSort(column),
          isSorted: !!sortDirection,
          isSortAscending: sortDirection ? _services.SortDirection.isAsc(sortDirection) : undefined
        });
      });
      return items.length ? /*#__PURE__*/_react.default.createElement(_table.EuiTableSortMobile, {
        items: items
      }) : null;
    }
  }, {
    key: "renderTableCaption",
    value: function renderTableCaption() {
      var _this$props5 = this.props,
          items = _this$props5.items,
          pagination = _this$props5.pagination,
          tableCaption = _this$props5.tableCaption;
      var captionElement;

      if (tableCaption) {
        if (pagination) {
          captionElement = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
            token: "euiBasicTable.tableCaptionWithPagination",
            default: "{tableCaption}; Page {page} of {pageCount}.",
            values: {
              tableCaption: tableCaption,
              page: pagination.pageIndex + 1,
              pageCount: Math.ceil(pagination.totalItemCount / pagination.pageSize)
            }
          });
        } else {
          captionElement = tableCaption;
        }
      } else {
        if (pagination) {
          if (pagination.totalItemCount > 0) {
            captionElement = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
              token: "euiBasicTable.tableAutoCaptionWithPagination",
              default: "This table contains {itemCount} rows out of {totalItemCount} rows; Page {page} of {pageCount}.",
              values: {
                totalItemCount: pagination.totalItemCount,
                itemCount: items.length,
                page: pagination.pageIndex + 1,
                pageCount: Math.ceil(pagination.totalItemCount / pagination.pageSize)
              }
            });
          } else {
            captionElement = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
              token: "euiBasicTable.tableSimpleAutoCaptionWithPagination",
              default: "This table contains {itemCount} rows; Page {page} of {pageCount}.",
              values: {
                itemCount: items.length,
                page: pagination.pageIndex + 1,
                pageCount: Math.ceil(pagination.totalItemCount / pagination.pageSize)
              }
            });
          }
        } else {
          captionElement = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
            token: "euiBasicTable.tableAutoCaptionWithoutPagination",
            default: "This table contains {itemCount} rows.",
            values: {
              itemCount: items.length
            }
          });
        }
      }

      return /*#__PURE__*/_react.default.createElement(_accessibility.EuiScreenReaderOnly, null, /*#__PURE__*/_react.default.createElement("caption", {
        className: "euiTableCaption"
      }, /*#__PURE__*/_react.default.createElement(_delay_render.EuiDelayRender, null, captionElement)));
    }
  }, {
    key: "renderTableHead",
    value: function renderTableHead() {
      var _this3 = this;

      var _this$props6 = this.props,
          columns = _this$props6.columns,
          selection = _this$props6.selection;
      var headers = [];

      if (selection) {
        headers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableHeaderCellCheckbox, {
          key: "_selection_column_h"
        }, this.renderSelectAll(false)));
      }

      columns.forEach(function (column, index) {
        var _ref5 = column,
            field = _ref5.field,
            width = _ref5.width,
            name = _ref5.name,
            align = _ref5.align,
            dataType = _ref5.dataType,
            sortable = _ref5.sortable,
            mobileOptions = _ref5.mobileOptions,
            isMobileHeader = _ref5.isMobileHeader,
            hideForMobile = _ref5.hideForMobile,
            readOnly = _ref5.readOnly;

        var columnAlign = align || _this3.getAlignForDataType(dataType); // actions column


        if (column.actions) {
          headers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableHeaderCell, {
            key: "_actions_h_".concat(index),
            align: "right",
            width: width,
            mobileOptions: mobileOptions
          }, name));
          return;
        } // computed column


        if (!column.field) {
          var _sorting = {}; // computed columns are only sortable if their `sortable` is a function

          if (_this3.props.sorting && typeof sortable === 'function') {
            var sortDirection = _this3.resolveColumnSortDirection(column);

            _sorting.isSorted = !!sortDirection;
            _sorting.isSortAscending = sortDirection ? _services.SortDirection.isAsc(sortDirection) : undefined;
            _sorting.onSort = _this3.resolveColumnOnSort(column);
            _sorting.allowNeutralSort = _this3.props.sorting.allowNeutralSort;
            _sorting.readOnly = _this3.props.sorting.readOnly || readOnly;
          }

          headers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableHeaderCell, _extends({
            key: "_computed_column_h_".concat(index),
            align: columnAlign,
            width: width,
            mobileOptions: mobileOptions,
            "data-test-subj": "tableHeaderCell_".concat(name, "_").concat(index)
          }, _sorting), name));
          return;
        } // field data column


        var sorting = {};

        if (_this3.props.sorting) {
          if (_this3.props.sorting.sort && !!_this3.props.sorting.enableAllColumns && column.sortable == null) {
            column = _objectSpread(_objectSpread({}, column), {}, {
              sortable: true
            });
          }

          var _ref6 = column,
              _sortable = _ref6.sortable;

          if (_sortable) {
            var _sortDirection = _this3.resolveColumnSortDirection(column);

            sorting.isSorted = !!_sortDirection;
            sorting.isSortAscending = _sortDirection ? _services.SortDirection.isAsc(_sortDirection) : undefined;
            sorting.onSort = _this3.resolveColumnOnSort(column);
            sorting.allowNeutralSort = _this3.props.sorting.allowNeutralSort;
            sorting.readOnly = _this3.props.sorting.readOnly || readOnly;
          }
        }

        headers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableHeaderCell, _extends({
          key: "_data_h_".concat(field, "_").concat(index),
          align: columnAlign,
          width: width,
          isMobileHeader: isMobileHeader,
          hideForMobile: hideForMobile,
          mobileOptions: mobileOptions,
          "data-test-subj": "tableHeaderCell_".concat(field, "_").concat(index)
        }, sorting), name));
      });
      return /*#__PURE__*/_react.default.createElement(_table.EuiTableHeader, null, headers);
    }
  }, {
    key: "renderTableFooter",
    value: function renderTableFooter() {
      var _this$props7 = this.props,
          items = _this$props7.items,
          columns = _this$props7.columns,
          pagination = _this$props7.pagination,
          selection = _this$props7.selection;
      var footers = [];
      var hasDefinedFooter = false;

      if (selection) {
        // Create an empty cell to compensate for additional selection column
        footers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableFooterCell, {
          key: "_selection_column_f"
        }, undefined));
      }

      columns.forEach(function (column) {
        var footer = getColumnFooter(column, {
          items: items,
          pagination: pagination
        });
        var _ref7 = column,
            mobileOptions = _ref7.mobileOptions,
            isMobileHeader = _ref7.isMobileHeader,
            field = _ref7.field,
            align = _ref7.align;

        if (mobileOptions && mobileOptions.only || isMobileHeader) {
          return; // exclude columns that only exist for mobile headers
        }

        if (footer) {
          footers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableFooterCell, {
            key: "footer_".concat(field, "_").concat(footers.length - 1),
            align: align
          }, footer));
          hasDefinedFooter = true;
        } else {
          // Footer is undefined, so create an empty cell to preserve layout
          footers.push( /*#__PURE__*/_react.default.createElement(_table.EuiTableFooterCell, {
            key: "footer_empty_".concat(footers.length - 1),
            align: align
          }, undefined));
        }
      });
      return footers.length && hasDefinedFooter ? /*#__PURE__*/_react.default.createElement(_table.EuiTableFooter, null, footers) : null;
    }
  }, {
    key: "renderTableBody",
    value: function renderTableBody() {
      var _this4 = this;

      if (this.props.error) {
        return this.renderErrorBody(this.props.error);
      }

      var items = this.props.items;

      if (items.length === 0) {
        return this.renderEmptyBody();
      }

      var rows = items.map(function (item, index) {
        // if there's pagination the item's index must be adjusted to the where it is in the whole dataset
        var tableItemIndex = hasPagination(_this4.props) ? _this4.props.pagination.pageIndex * _this4.props.pagination.pageSize + index : index;
        return _this4.renderItemRow(item, tableItemIndex);
      });
      return /*#__PURE__*/_react.default.createElement(_table.EuiTableBody, {
        bodyRef: this.setTbody
      }, rows);
    }
  }, {
    key: "renderErrorBody",
    value: function renderErrorBody(error) {
      var colSpan = this.props.columns.length + (this.props.selection ? 1 : 0);
      return /*#__PURE__*/_react.default.createElement(_table.EuiTableBody, null, /*#__PURE__*/_react.default.createElement(_table.EuiTableRow, null, /*#__PURE__*/_react.default.createElement(_table.EuiTableRowCell, {
        align: "center",
        colSpan: colSpan,
        isMobileFullWidth: true
      }, /*#__PURE__*/_react.default.createElement(_icon.EuiIcon, {
        type: "minusInCircle",
        color: "danger"
      }), " ", error)));
    }
  }, {
    key: "renderEmptyBody",
    value: function renderEmptyBody() {
      var _this$props8 = this.props,
          columns = _this$props8.columns,
          selection = _this$props8.selection,
          noItemsMessage = _this$props8.noItemsMessage;
      var colSpan = columns.length + (selection ? 1 : 0);
      return /*#__PURE__*/_react.default.createElement(_table.EuiTableBody, null, /*#__PURE__*/_react.default.createElement(_table.EuiTableRow, null, /*#__PURE__*/_react.default.createElement(_table.EuiTableRowCell, {
        align: "center",
        colSpan: colSpan,
        isMobileFullWidth: true
      }, noItemsMessage)));
    }
  }, {
    key: "renderItemRow",
    value: function renderItemRow(item, rowIndex) {
      var _this5 = this;

      var _this$props9 = this.props,
          columns = _this$props9.columns,
          selection = _this$props9.selection,
          isSelectable = _this$props9.isSelectable,
          hasActions = _this$props9.hasActions,
          rowHeader = _this$props9.rowHeader,
          _this$props9$itemIdTo = _this$props9.itemIdToExpandedRowMap,
          itemIdToExpandedRowMap = _this$props9$itemIdTo === void 0 ? {} : _this$props9$itemIdTo,
          isExpandable = _this$props9.isExpandable;
      var cells = [];
      var itemIdCallback = this.props.itemId;
      var itemId = getItemId(item, itemIdCallback) != null ? getItemId(item, itemIdCallback) : rowIndex;
      var selected = !selection ? false : this.state.selection && !!this.state.selection.find(function (selectedItem) {
        return getItemId(selectedItem, itemIdCallback) === itemId;
      });
      var calculatedHasSelection;

      if (selection) {
        cells.push(this.renderItemSelectionCell(itemId, item, selected));
        calculatedHasSelection = true;
      }

      var calculatedHasActions;
      columns.forEach(function (column, columnIndex) {
        if (column.actions) {
          cells.push(_this5.renderItemActionsCell(itemId, item, column, columnIndex));
          calculatedHasActions = true;
        } else if (column.field) {
          var fieldDataColumn = column;
          cells.push(_this5.renderItemFieldDataCell(itemId, item, column, columnIndex, fieldDataColumn.field === rowHeader));
        } else {
          cells.push(_this5.renderItemComputedCell(itemId, item, column, columnIndex));
        }
      }); // Occupy full width of table, taking checkbox & mobile only columns into account.

      var expandedRowColSpan = selection ? columns.length + 1 : columns.length;
      var mobileOnlyCols = columns.reduce(function (num, column) {
        if (column.mobileOptions && column.mobileOptions.only) {
          return num + 1;
        }

        return column.isMobileHeader ? num + 1 : num + 0; // BWC only
      }, 0);
      expandedRowColSpan = expandedRowColSpan - mobileOnlyCols; // We'll use the ID to associate the expanded row with the original.

      var hasExpandedRow = itemIdToExpandedRowMap.hasOwnProperty(itemId);
      var expandedRowId = hasExpandedRow ? "row_".concat(itemId, "_expansion") : undefined;
      var expandedRow = hasExpandedRow ? /*#__PURE__*/_react.default.createElement(_table.EuiTableRow, {
        id: expandedRowId,
        isExpandedRow: true,
        isSelectable: isSelectable
      }, /*#__PURE__*/_react.default.createElement(_table.EuiTableRowCell, {
        colSpan: expandedRowColSpan,
        textOnly: false
      }, itemIdToExpandedRowMap[itemId])) : undefined;
      var rowPropsCallback = this.props.rowProps;
      var rowProps = getRowProps(item, rowPropsCallback);

      var row = /*#__PURE__*/_react.default.createElement(_table.EuiTableRow, _extends({
        "aria-owns": expandedRowId,
        isSelectable: isSelectable == null ? calculatedHasSelection : isSelectable,
        isSelected: selected,
        hasActions: hasActions == null ? calculatedHasActions : hasActions,
        isExpandable: isExpandable
      }, rowProps), cells);

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: "row_".concat(itemId)
      }, rowProps.onClick ? /*#__PURE__*/_react.default.createElement(_accessibility.EuiKeyboardAccessible, null, row) : row, expandedRow);
    }
  }, {
    key: "renderItemSelectionCell",
    value: function renderItemSelectionCell(itemId, item, selected) {
      var _this6 = this;

      var selection = this.props.selection;
      var key = "_selection_column_".concat(itemId);
      var checked = selected;
      var disabled = selection.selectable && !selection.selectable(item);
      var title = selection.selectableMessage && selection.selectableMessage(!disabled, item);

      var onChange = function onChange(event) {
        if (event.target.checked) {
          _this6.changeSelection([].concat(_toConsumableArray(_this6.state.selection), [item]));
        } else {
          var itemIdCallback = _this6.props.itemId;

          _this6.changeSelection(_this6.state.selection.reduce(function (selection, selectedItem) {
            if (getItemId(selectedItem, itemIdCallback) !== itemId) {
              selection.push(selectedItem);
            }

            return selection;
          }, []));
        }
      };

      return /*#__PURE__*/_react.default.createElement(_table.EuiTableRowCellCheckbox, {
        key: key
      }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        token: "euiBasicTable.selectThisRow",
        default: "Select this row"
      }, function (selectThisRow) {
        return /*#__PURE__*/_react.default.createElement(_form.EuiCheckbox, {
          id: "".concat(key, "-checkbox"),
          type: "inList",
          disabled: disabled,
          checked: checked,
          onChange: onChange,
          title: title || selectThisRow,
          "aria-label": title || selectThisRow,
          "data-test-subj": "checkboxSelectRow-".concat(itemId)
        });
      }));
    }
  }, {
    key: "renderItemActionsCell",
    value: function renderItemActionsCell(itemId, item, column, columnIndex) {
      var _this7 = this;

      var actionEnabled = function actionEnabled(action) {
        return _this7.state.selection.length === 0 && (!action.enabled || action.enabled(item));
      };

      var actualActions = column.actions.filter(function (action) {
        return !action.available || action.available(item);
      });

      if (actualActions.length > 2) {
        // if any of the actions `isPrimary`, add them inline as well, but only the first 2
        var primaryActions = actualActions.filter(function (o) {
          return o.isPrimary;
        });
        actualActions = primaryActions.slice(0, 2); // if we have more than 1 action, we don't show them all in the cell, instead we
        // put them all in a popover tool. This effectively means we can only have a maximum
        // of one tool per row (it's either and normal action, or it's a popover that shows multiple actions)
        //
        // here we create a single custom action that triggers the popover with all the configured actions

        actualActions.push({
          name: 'All actions',
          render: function render(item) {
            return /*#__PURE__*/_react.default.createElement(_collapsed_item_actions.CollapsedItemActions, {
              actions: column.actions,
              itemId: itemId,
              item: item,
              actionEnabled: actionEnabled
            });
          }
        });
      }

      var tools = /*#__PURE__*/_react.default.createElement(_expanded_item_actions.ExpandedItemActions, {
        actions: actualActions,
        itemId: itemId,
        item: item,
        actionEnabled: actionEnabled
      });

      var key = "record_actions_".concat(itemId, "_").concat(columnIndex);
      return /*#__PURE__*/_react.default.createElement(_table.EuiTableRowCell, {
        showOnHover: true,
        key: key,
        align: "right",
        textOnly: false,
        hasActions: true
      }, tools);
    }
  }, {
    key: "renderItemFieldDataCell",
    value: function renderItemFieldDataCell(itemId, item, column, columnIndex, setScopeRow) {
      var field = column.field,
          render = column.render,
          dataType = column.dataType;
      var key = "_data_column_".concat(field, "_").concat(itemId, "_").concat(columnIndex);
      var contentRenderer = render || this.getRendererForDataType(dataType);
      var value = (0, _objects.get)(item, field);
      var content = contentRenderer(value, item);
      return this.renderItemCell(item, column, key, content, setScopeRow);
    }
  }, {
    key: "renderItemComputedCell",
    value: function renderItemComputedCell(itemId, item, column, columnIndex) {
      var render = column.render;
      var key = "_computed_column_".concat(itemId, "_").concat(columnIndex);
      var contentRenderer = render || this.getRendererForDataType();
      var content = contentRenderer(item);
      return this.renderItemCell(item, column, key, content, false);
    }
  }, {
    key: "renderItemCell",
    value: function renderItemCell(item, column, key, content, setScopeRow) {
      var _ref8 = column,
          align = _ref8.align,
          render = _ref8.render,
          dataType = _ref8.dataType,
          isExpander = _ref8.isExpander,
          textOnly = _ref8.textOnly,
          name = _ref8.name,
          field = _ref8.field,
          description = _ref8.description,
          sortable = _ref8.sortable,
          footer = _ref8.footer,
          mobileOptions = _ref8.mobileOptions,
          rest = _objectWithoutProperties(_ref8, ["align", "render", "dataType", "isExpander", "textOnly", "name", "field", "description", "sortable", "footer", "mobileOptions"]);

      var columnAlign = align || this.getAlignForDataType(dataType);
      var cellPropsCallback = this.props.cellProps;
      var cellProps = getCellProps(item, column, cellPropsCallback);
      return /*#__PURE__*/_react.default.createElement(_table.EuiTableRowCell, _extends({
        key: key,
        align: columnAlign,
        isExpander: isExpander,
        textOnly: textOnly || !render,
        setScopeRow: setScopeRow,
        mobileOptions: _objectSpread(_objectSpread({}, mobileOptions), {}, {
          render: mobileOptions && mobileOptions.render && mobileOptions.render(item),
          header: mobileOptions && mobileOptions.header === false ? false : name
        })
      }, cellProps, rest), content);
    }
  }, {
    key: "getRendererForDataType",
    value: function getRendererForDataType() {
      var dataType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
      var profile = dataTypesProfiles[dataType];

      if (!profile) {
        throw new Error("Unknown dataType [".concat(dataType, "]. The supported data types are [").concat(DATA_TYPES.join(', '), "]"));
      }

      return profile.render;
    }
  }, {
    key: "getAlignForDataType",
    value: function getAlignForDataType() {
      var dataType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
      var profile = dataTypesProfiles[dataType];

      if (!profile) {
        throw new Error("Unknown dataType [".concat(dataType, "]. The supported data types are [").concat(DATA_TYPES.join(', '), "]"));
      }

      return profile.align;
    }
  }, {
    key: "renderPaginationBar",
    value: function renderPaginationBar() {
      var _this$props10 = this.props,
          error = _this$props10.error,
          pagination = _this$props10.pagination,
          tableCaption = _this$props10.tableCaption,
          onChange = _this$props10.onChange;

      if (!error && pagination && pagination.totalItemCount > 0) {
        if (!onChange) {
          throw new Error("The Basic Table is configured with pagination but [onChange] is\n        not configured. This callback must be implemented to handle pagination changes");
        }

        var ariaLabel = undefined;

        if (tableCaption) {
          ariaLabel = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
            token: "euiBasicTable.tablePagination",
            default: "Pagination for preceding table: {tableCaption}",
            values: {
              tableCaption: tableCaption
            }
          });
        }

        return /*#__PURE__*/_react.default.createElement(_pagination_bar.PaginationBar, {
          "aria-controls": this.tableId,
          pagination: pagination,
          onPageSizeChange: this.onPageSizeChange.bind(this),
          onPageChange: this.onPageChange.bind(this),
          "aria-label": ariaLabel
        });
      }
    }
  }]);

  return EuiBasicTable;
}(_react.Component);

exports.EuiBasicTable = EuiBasicTable;

_defineProperty(EuiBasicTable, "defaultProps", {
  responsive: true,
  tableLayout: 'fixed',
  noItemsMessage: 'No items found'
});

EuiBasicTable.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * Describes how to extract a unique ID from each item, used for selections & expanded rows
     */

  /**
     * Describes how to extract a unique ID from each item, used for selections & expanded rows
     */
  itemId: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.func.isRequired]),

  /**
     * Row expansion uses the itemId prop to identify each row
     */

  /**
     * Row expansion uses the itemId prop to identify each row
     */
  itemIdToExpandedRowMap: _propTypes.default.shape({}),

  /**
     * A list of objects to who in the table - an item per row
     */

  /**
     * A list of objects to who in the table - an item per row
     */
  items: _propTypes.default.arrayOf(_propTypes.default.any.isRequired),

  /**
     * Applied to `EuiTableRowCell`
     */

  /**
     * Applied to `EuiTableRowCell`
     */
  cellProps: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired]),

  /**
     * An array of one of the objects: #EuiTableFieldDataColumnType, #EuiTableComputedColumnType or #EuiTableActionsColumnType.
     */

  /**
     * An array of one of the objects: #EuiTableFieldDataColumnType, #EuiTableComputedColumnType or #EuiTableActionsColumnType.
     */
  columns: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
    /**
       * A field of the item (may be a nested field)
       */
    field: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]).isRequired,
    // supports outer.inner key paths

    /**
       * The display name of the column
       */
    name: _propTypes.default.node.isRequired,

    /**
       * A description of the column (will be presented as a title over the column header)
       */
    description: _propTypes.default.string,

    /**
       * Describes the data types of the displayed value (serves as a rendering hint for the table)
       */
    dataType: _propTypes.default.oneOf(["auto", "string", "number", "boolean", "date"]),

    /**
       * A CSS width property. Hints for the required width of the column (e.g. "30%", "100px", etc..)
       */
    width: _propTypes.default.string,

    /**
       * Defines whether the user can sort on this column. If a function is provided, this function returns the value to sort against
       */
    sortable: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.func.isRequired]),
    isExpander: _propTypes.default.bool,
    textOnly: _propTypes.default.bool,

    /**
       * Defines the horizontal alignment of the column
       */
    align: _propTypes.default.oneOf(["left", "right", "center"]),

    /**
       * Indicates whether this column should truncate its content when it doesn't fit
       */
    truncateText: _propTypes.default.bool,
    isMobileHeader: _propTypes.default.bool,
    mobileOptions: _propTypes.default.shape({
      show: _propTypes.default.bool,
      only: _propTypes.default.bool,
      render: _propTypes.default.func,
      header: _propTypes.default.bool
    }),
    hideForMobile: _propTypes.default.bool,

    /**
       * Describe a custom renderer function for the content
       */
    render: _propTypes.default.func,

    /**
       * Content to display in the footer beneath this column
       */
    footer: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired, _propTypes.default.func.isRequired]),

    /**
       * Disables the user's ability to change the sort but still shows the current direction
       */
    readOnly: _propTypes.default.bool,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    /**
       * A function that computes the value for each item and renders it
       */
    render: _propTypes.default.func.isRequired,

    /**
       * The display name of the column
       */
    name: _propTypes.default.node,

    /**
       * A description of the column (will be presented as a title over the column header
       */
    description: _propTypes.default.string,

    /**
       * If provided, allows this column to be sorted on. Must return the value to sort against.
       */
    sortable: _propTypes.default.func,

    /**
       * A CSS width property. Hints for the required width of the column
       */
    width: _propTypes.default.string,

    /**
       * Indicates whether this column should truncate its content when it doesn't fit
       */
    truncateText: _propTypes.default.bool,
    isExpander: _propTypes.default.bool,
    align: _propTypes.default.oneOf(["left", "right", "center"]),

    /**
       * Disables the user's ability to change the sort but still shows the current direction
       */
    readOnly: _propTypes.default.bool,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired, _propTypes.default.shape({
    /**
       * An array of one of the objects: #DefaultItemAction or #CustomItemAction
       */
    actions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
      /**
         * The type of action
         */
      type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["button"]), _propTypes.default.oneOf(["icon"]).isRequired]),

      /**
         * Defines the color of the button
         */
      color: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.oneOf(["primary", "danger", "text", "ghost", "success", "warning"]).isRequired, _propTypes.default.func.isRequired]), _propTypes.default.oneOfType([_propTypes.default.oneOf(["accent", "danger", "ghost", "primary", "subdued", "success", "text", "warning"]).isRequired, _propTypes.default.func.isRequired])]),

      /**
         * The display name of the action (will be the button caption)
         */

      /**
         * The display name of the action (will be the button caption)
         */
      name: _propTypes.default.oneOfType([_propTypes.default.node.isRequired, _propTypes.default.func.isRequired]).isRequired,

      /**
         * Describes the action (will be the button title)
         */

      /**
         * Describes the action (will be the button title)
         */
      description: _propTypes.default.string.isRequired,

      /**
         * A handler function to execute the action
         */

      /**
         * A handler function to execute the action
         */
      onClick: _propTypes.default.func,
      href: _propTypes.default.string,
      target: _propTypes.default.string,

      /**
         * A callback function that determines whether the action is available
         */

      /**
         * A callback function that determines whether the action is available
         */
      available: _propTypes.default.func,

      /**
         * A callback function that determines whether the action is enabled
         */

      /**
         * A callback function that determines whether the action is enabled
         */
      enabled: _propTypes.default.func,
      isPrimary: _propTypes.default.bool,
      "data-test-subj": _propTypes.default.string,

      /**
         * Associates an icon with the button
         */
      icon: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.func.isRequired])
    }).isRequired, _propTypes.default.shape({
      /**
         * The function that renders the action. Note that the returned node is expected to have `onFocus` and `onBlur` functions
         */
      render: _propTypes.default.func.isRequired,

      /**
         * A callback that defines whether the action is available
         */
      available: _propTypes.default.func,

      /**
         * A callback that defines whether the action is enabled
         */
      enabled: _propTypes.default.func,
      isPrimary: _propTypes.default.bool
    }).isRequired]).isRequired).isRequired,

    /**
       * The display name of the column
       */
    name: _propTypes.default.node,

    /**
       * A description of the column (will be presented as a title over the column header
       */
    description: _propTypes.default.string,

    /**
       * A CSS width property. Hints for the required width of the column
       */
    width: _propTypes.default.string
  }).isRequired]).isRequired),

  /**
     * Error message to display
     */

  /**
     * Error message to display
     */
  error: _propTypes.default.string,

  /**
     * Describes the content of the table. If not specified, the caption will be "This table contains {itemCount} rows."
     */

  /**
     * Describes the content of the table. If not specified, the caption will be "This table contains {itemCount} rows."
     */
  tableCaption: _propTypes.default.string,

  /**
     * Indicates which column should be used as the identifying cell in each row. Should match a "field" prop in FieldDataColumn
     */

  /**
     * Indicates which column should be used as the identifying cell in each row. Should match a "field" prop in FieldDataColumn
     */
  rowHeader: _propTypes.default.string,
  hasActions: _propTypes.default.bool,
  isExpandable: _propTypes.default.bool,
  isSelectable: _propTypes.default.bool,

  /**
     * Provides an infinite loading indicator
     */

  /**
     * Provides an infinite loading indicator
     */
  loading: _propTypes.default.bool,

  /**
     * Message to display if table is empty
     */

  /**
     * Message to display if table is empty
     */
  noItemsMessage: _propTypes.default.node,

  /**
     * Called whenever pagination or sorting changes (this property is required when either pagination or sorting is configured). See #Criteria or #CriteriaWithPagination
     */
  onChange: _propTypes.default.func,

  /**
     * Configures #Pagination
     */
  pagination: _propTypes.default.oneOfType([_propTypes.default.oneOf([undefined]), _propTypes.default.shape({
    /**
       * The current page (zero-based) index
       */
    pageIndex: _propTypes.default.number.isRequired,

    /**
       * The maximum number of items that can be shown in a single page
       */
    pageSize: _propTypes.default.number.isRequired,

    /**
       * The total number of items the page is "sliced" of
       */
    totalItemCount: _propTypes.default.number.isRequired,

    /**
       * Configures the page size dropdown options
       */
    pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number.isRequired),

    /**
       * Hides the page size dropdown
       */
    hidePerPageOptions: _propTypes.default.bool
  })]),

  /**
     * If true, will convert table to cards in mobile view
     */

  /**
     * If true, will convert table to cards in mobile view
     */
  responsive: _propTypes.default.bool,

  /**
     * Applied to `EuiTableRow`
     */

  /**
     * Applied to `EuiTableRow`
     */
  rowProps: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.func.isRequired]),

  /**
     * Configures #EuiTableSelectionType
     */

  /**
     * Configures #EuiTableSelectionType
     */
  selection: _propTypes.default.shape({
    /**
       * A callback that will be called whenever the item selection changes
       */
    onSelectionChange: _propTypes.default.func,

    /**
       * A callback that is called per item to indicate whether it is selectable
       */
    selectable: _propTypes.default.func,

    /**
       * A callback that is called per item to retrieve a message for its selectable state.We display these messages as a tooltip on an unselectable checkbox
       */
    selectableMessage: _propTypes.default.func,
    initialSelected: _propTypes.default.arrayOf(_propTypes.default.any.isRequired)
  }),

  /**
     * Configures #EuiTableSortingType
     */

  /**
     * Configures #EuiTableSortingType
     */
  sorting: _propTypes.default.shape({
    /**
       * Indicates the property/field to sort on
       */
    sort: _propTypes.default.shape({
      field: _propTypes.default.any.isRequired,
      direction: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.any.isRequired]).isRequired
    }),

    /**
       * Enables/disables unsorting of table columns. Supported by EuiInMemoryTable.
       */
    allowNeutralSort: _propTypes.default.bool,

    /**
       * Enables the default sorting ability for each column.
       */
    enableAllColumns: _propTypes.default.bool,

    /**
       * Disables the user's ability to change the sort but still shows the current direction
       */
    readOnly: _propTypes.default.bool
  }),

  /**
     * Sets the table-layout CSS property. Note that auto tableLayout prevents truncateText from working properly.
     */

  /**
     * Sets the table-layout CSS property. Note that auto tableLayout prevents truncateText from working properly.
     */
  tableLayout: _propTypes.default.oneOf(["fixed", "auto"]),

  /**
     * Applied to table cells => Any cell using render function will set this to be false, leading to unnecessary word breaks. Apply textOnly: true in order to ensure it breaks properly
     */

  /**
     * Applied to table cells => Any cell using render function will set this to be false, leading to unnecessary word breaks. Apply textOnly: true in order to ensure it breaks properly
     */
  textOnly: _propTypes.default.bool
};