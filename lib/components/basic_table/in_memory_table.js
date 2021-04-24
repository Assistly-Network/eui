"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiInMemoryTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _basic_table = require("./basic_table");

var _pagination_bar = require("./pagination_bar");

var _predicate = require("../../services/predicate");

var _sort2 = require("../../services/sort");

var _search_bar = require("../search_bar");

var _spacer = require("../spacer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function isEuiSearchBarProps(x) {
  return typeof x !== 'boolean';
}

var getQueryFromSearch = function getQueryFromSearch(search, defaultQuery) {
  var query;

  if (!search) {
    query = '';
  } else {
    query = (defaultQuery ? search.defaultQuery || search.query || '' : search.query) || '';
  }

  return (0, _predicate.isString)(query) ? _search_bar.EuiSearchBar.Query.parse(query) : query;
};

var getInitialPagination = function getInitialPagination(pagination) {
  if (!pagination) {
    return {
      pageIndex: undefined,
      pageSize: undefined
    };
  }

  var _ref = pagination,
      _ref$pageSizeOptions = _ref.pageSizeOptions,
      pageSizeOptions = _ref$pageSizeOptions === void 0 ? _pagination_bar.defaults.pageSizeOptions : _ref$pageSizeOptions,
      hidePerPageOptions = _ref.hidePerPageOptions;
  var defaultPageSize = pageSizeOptions ? pageSizeOptions[0] : _pagination_bar.defaults.pageSizeOptions[0];
  var initialPageIndex = pagination === true ? 0 : pagination.pageIndex || pagination.initialPageIndex || 0;
  var initialPageSize = pagination === true ? defaultPageSize : pagination.pageSize || pagination.initialPageSize || defaultPageSize;

  if (!hidePerPageOptions && initialPageSize && (!pageSizeOptions || !pageSizeOptions.includes(initialPageSize))) {
    throw new Error("EuiInMemoryTable received initialPageSize ".concat(initialPageSize, ", which wasn't provided within pageSizeOptions."));
  }

  return {
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
    pageSizeOptions: pageSizeOptions,
    hidePerPageOptions: hidePerPageOptions
  };
};

function findColumnByProp(columns, prop, value) {
  for (var i = 0; i < columns.length; i++) {
    var column = columns[i];

    if (column[prop] === value) {
      return column;
    }
  }
}

function getInitialSorting(columns, sorting) {
  if (!sorting || !sorting.sort) {
    return {
      sortName: undefined,
      sortDirection: undefined
    };
  }

  var _sort = sorting.sort,
      sortable = _sort.field,
      sortDirection = _sort.direction; // sortable could be a column's `field` or its `name`
  // for backwards compatibility `field` must be checked first

  var sortColumn = findColumnByProp(columns, 'field', sortable);

  if (sortColumn == null) {
    sortColumn = findColumnByProp(columns, 'name', sortable);
  }

  if (sortColumn == null) {
    return {
      sortName: undefined,
      sortDirection: undefined
    };
  }

  var sortName = sortColumn.name;
  return {
    sortName: sortName,
    sortDirection: sortDirection
  };
}

var EuiInMemoryTable = /*#__PURE__*/function (_Component) {
  _inherits(EuiInMemoryTable, _Component);

  var _super = _createSuper(EuiInMemoryTable);

  _createClass(EuiInMemoryTable, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var updatedPrevState = prevState;

      if (nextProps.items !== prevState.prevProps.items) {
        // We have new items because an external search has completed, so reset pagination state.
        var nextPageIndex = 0;

        if (nextProps.pagination != null && typeof nextProps.pagination !== 'boolean') {
          nextPageIndex = nextProps.pagination.pageIndex || 0;
        }

        updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
          prevProps: _objectSpread(_objectSpread({}, updatedPrevState.prevProps), {}, {
            items: nextProps.items
          }),
          pageIndex: nextPageIndex
        });
      } // apply changes to controlled pagination


      if (nextProps.pagination != null && typeof nextProps.pagination !== 'boolean') {
        if (nextProps.pagination.pageSize != null && nextProps.pagination.pageSize !== updatedPrevState.pageIndex) {
          updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
            pageSize: nextProps.pagination.pageSize
          });
        }

        if (nextProps.pagination.pageIndex != null && nextProps.pagination.pageIndex !== updatedPrevState.pageIndex) {
          updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
            pageIndex: nextProps.pagination.pageIndex
          });
        }
      }

      var _getInitialSorting = getInitialSorting(nextProps.columns, nextProps.sorting),
          sortName = _getInitialSorting.sortName,
          sortDirection = _getInitialSorting.sortDirection;

      if (sortName !== prevState.prevProps.sortName || sortDirection !== prevState.prevProps.sortDirection) {
        updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
          sortName: sortName,
          sortDirection: sortDirection
        });
      }

      var nextQuery = nextProps.search ? nextProps.search.query : '';
      var prevQuery = prevState.prevProps.search ? prevState.prevProps.search.query : '';

      if (nextQuery !== prevQuery) {
        updatedPrevState = _objectSpread(_objectSpread({}, updatedPrevState), {}, {
          prevProps: _objectSpread(_objectSpread({}, updatedPrevState.prevProps), {}, {
            search: nextProps.search
          }),
          query: getQueryFromSearch(nextProps.search, false)
        });
      }

      if (updatedPrevState !== prevState) {
        return updatedPrevState;
      }

      return null;
    }
  }]);

  function EuiInMemoryTable(props) {
    var _this;

    _classCallCheck(this, EuiInMemoryTable);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "tableRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "onTableChange", function (_ref2) {
      var page = _ref2.page,
          sort = _ref2.sort;

      var _ref3 = page || {},
          pageIndex = _ref3.index,
          pageSize = _ref3.size; // don't apply pagination changes that are otherwise controlled
      // `page` is left unchanged as it goes to the consumer's `onTableChange` callback, allowing the app to respond


      var pagination = _this.props.pagination;

      if (pagination != null && typeof pagination !== 'boolean') {
        if (pagination.pageSize != null) pageSize = pagination.pageSize;
        if (pagination.pageIndex != null) pageIndex = pagination.pageIndex;
      }

      var _ref4 = sort || {},
          sortName = _ref4.field,
          sortDirection = _ref4.direction; // To keep backwards compatibility reportedSortName needs to be tracked separately
      // from sortName; sortName gets stored internally while reportedSortName is sent to the callback


      var reportedSortName = sortName; // EuiBasicTable returns the column's `field` if it exists instead of `name`,
      // map back to `name` if this is the case

      for (var i = 0; i < _this.props.columns.length; i++) {
        var column = _this.props.columns[i];

        if ('field' in column && column.field === sortName) {
          sortName = column.name;
          break;
        }
      } // Allow going back to 'neutral' sorting


      if (_this.state.allowNeutralSort && _this.state.sortName === sortName && _this.state.sortDirection === 'desc' && sortDirection === 'asc') {
        sortName = '';
        reportedSortName = '';
        sortDirection = 'asc'; // Default sort direction.
      }

      if (_this.props.onTableChange) {
        _this.props.onTableChange({
          // @ts-ignore complex relationship between pagination's existence and criteria, the code logic ensures this is correctly maintained
          page: page,
          sort: {
            field: reportedSortName,
            direction: sortDirection
          }
        });
      }

      _this.setState({
        pageIndex: pageIndex,
        pageSize: pageSize,
        sortName: sortName,
        sortDirection: sortDirection
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onQueryChange", function (_ref5) {
      var query = _ref5.query,
          queryText = _ref5.queryText,
          error = _ref5.error;
      var search = _this.props.search;

      if (isEuiSearchBarProps(search)) {
        if (search.onChange) {
          var shouldQueryInMemory = error == null ? search.onChange({
            query: query,
            queryText: queryText,
            error: null
          }) : search.onChange({
            query: null,
            queryText: queryText,
            error: error
          });

          if (!shouldQueryInMemory) {
            return;
          }
        }
      } // Reset pagination state.


      _this.setState(function (state) {
        return {
          prevProps: _objectSpread(_objectSpread({}, state.prevProps), {}, {
            search: search
          }),
          query: query,
          pageIndex: 0
        };
      });
    });

    var columns = props.columns,
        _search = props.search,
        _pagination = props.pagination,
        sorting = props.sorting,
        allowNeutralSort = props.allowNeutralSort;

    var _getInitialPagination = getInitialPagination(_pagination),
        _pageIndex = _getInitialPagination.pageIndex,
        _pageSize = _getInitialPagination.pageSize,
        pageSizeOptions = _getInitialPagination.pageSizeOptions,
        hidePerPageOptions = _getInitialPagination.hidePerPageOptions;

    var _getInitialSorting2 = getInitialSorting(columns, sorting),
        _sortName = _getInitialSorting2.sortName,
        _sortDirection = _getInitialSorting2.sortDirection;

    _this.state = {
      prevProps: {
        items: props.items,
        sortName: _sortName,
        sortDirection: _sortDirection,
        search: _search
      },
      search: _search,
      query: getQueryFromSearch(_search, true),
      pageIndex: _pageIndex || 0,
      pageSize: _pageSize,
      pageSizeOptions: pageSizeOptions,
      sortName: _sortName,
      sortDirection: _sortDirection,
      allowNeutralSort: allowNeutralSort !== false,
      hidePerPageOptions: hidePerPageOptions
    };
    _this.tableRef = /*#__PURE__*/_react.default.createRef();
    return _this;
  }

  _createClass(EuiInMemoryTable, [{
    key: "setSelection",
    value: function setSelection(newSelection) {
      if (this.tableRef.current) {
        this.tableRef.current.setSelection(newSelection);
      }
    }
  }, {
    key: "renderSearchBar",
    value: function renderSearchBar() {
      var search = this.props.search;

      if (search) {
        var searchBarProps = {};

        if (isEuiSearchBarProps(search)) {
          var onChange = search.onChange,
              _searchBarProps = _objectWithoutProperties(search, ["onChange"]);

          searchBarProps = _searchBarProps;

          if (searchBarProps.box && searchBarProps.box.schema === true) {
            searchBarProps.box = _objectSpread(_objectSpread({}, searchBarProps.box), {}, {
              schema: this.resolveSearchSchema()
            });
          }
        }

        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_search_bar.EuiSearchBar, _extends({
          onChange: this.onQueryChange
        }, searchBarProps)), /*#__PURE__*/_react.default.createElement(_spacer.EuiSpacer, {
          size: "l"
        }));
      }
    }
  }, {
    key: "resolveSearchSchema",
    value: function resolveSearchSchema() {
      var columns = this.props.columns;
      return columns.reduce(function (schema, column) {
        var _ref6 = column,
            field = _ref6.field,
            dataType = _ref6.dataType;

        if (field) {
          var type = dataType || 'string';
          schema.fields[field] = {
            type: type
          };
        }

        return schema;
      }, {
        strict: true,
        fields: {}
      });
    }
  }, {
    key: "getItemSorter",
    value: function getItemSorter() {
      var _this$state = this.state,
          sortName = _this$state.sortName,
          sortDirection = _this$state.sortDirection;
      var columns = this.props.columns;
      var sortColumn = columns.find(function (_ref7) {
        var name = _ref7.name;
        return name === sortName;
      });

      if (sortColumn == null) {
        // can't return a non-function so return a function that says everything is the same
        return function () {
          return 0;
        };
      }

      var sortable = sortColumn.sortable;

      if (typeof sortable === 'function') {
        return _sort2.Comparators.value(sortable, _sort2.Comparators.default(sortDirection));
      }

      return _sort2.Comparators.property(sortColumn.field, _sort2.Comparators.default(sortDirection));
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var executeQueryOptions = this.props.executeQueryOptions;
      var items = this.state.prevProps.items;

      if (!items.length) {
        return {
          items: [],
          totalItemCount: 0
        };
      }

      var _this$state2 = this.state,
          query = _this$state2.query,
          sortName = _this$state2.sortName,
          pageIndex = _this$state2.pageIndex,
          pageSize = _this$state2.pageSize;
      var matchingItems = query ? _search_bar.EuiSearchBar.Query.execute(query, items, executeQueryOptions) : items;
      var sortedItems = sortName ? matchingItems.slice(0) // avoid mutating the source array
      .sort(this.getItemSorter()) // sort, causes mutation
      : matchingItems;
      var visibleItems = pageSize && this.props.pagination ? function () {
        var startIndex = pageIndex * pageSize;
        return sortedItems.slice(startIndex, Math.min(startIndex + pageSize, sortedItems.length));
      }() : sortedItems;
      return {
        items: visibleItems,
        totalItemCount: matchingItems.length
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          columns = _this$props.columns,
          loading = _this$props.loading,
          message = _this$props.message,
          error = _this$props.error,
          selection = _this$props.selection,
          isSelectable = _this$props.isSelectable,
          hasActions = _this$props.hasActions,
          compressed = _this$props.compressed,
          hasPagination = _this$props.pagination,
          hasSorting = _this$props.sorting,
          itemIdToExpandedRowMap = _this$props.itemIdToExpandedRowMap,
          itemId = _this$props.itemId,
          rowProps = _this$props.rowProps,
          cellProps = _this$props.cellProps,
          tableLayout = _this$props.tableLayout,
          _unuseditems = _this$props.items,
          search = _this$props.search,
          onTableChange = _this$props.onTableChange,
          executeQueryOptions = _this$props.executeQueryOptions,
          allowNeutralSort = _this$props.allowNeutralSort,
          childrenBetween = _this$props.childrenBetween,
          rest = _objectWithoutProperties(_this$props, ["columns", "loading", "message", "error", "selection", "isSelectable", "hasActions", "compressed", "pagination", "sorting", "itemIdToExpandedRowMap", "itemId", "rowProps", "cellProps", "tableLayout", "items", "search", "onTableChange", "executeQueryOptions", "allowNeutralSort", "childrenBetween"]);

      var _this$state3 = this.state,
          pageIndex = _this$state3.pageIndex,
          pageSize = _this$state3.pageSize,
          pageSizeOptions = _this$state3.pageSizeOptions,
          sortName = _this$state3.sortName,
          sortDirection = _this$state3.sortDirection,
          hidePerPageOptions = _this$state3.hidePerPageOptions;

      var _this$getItems = this.getItems(),
          items = _this$getItems.items,
          totalItemCount = _this$getItems.totalItemCount;

      var pagination = !hasPagination ? undefined : {
        pageIndex: pageIndex,
        pageSize: pageSize || 1,
        pageSizeOptions: pageSizeOptions,
        totalItemCount: totalItemCount,
        hidePerPageOptions: hidePerPageOptions
      }; // Data loaded from a server can have a default sort order which is meaningful to the
      // user, but can't be reproduced with client-side sort logic. So we allow the table to display
      // rows in the order in which they're initially loaded by providing an undefined sorting prop.

      var sorting = !hasSorting ? undefined : {
        sort: !sortName && !sortDirection ? undefined : {
          field: sortName,
          direction: sortDirection
        },
        allowNeutralSort: this.state.allowNeutralSort
      };
      var searchBar = this.renderSearchBar();

      var table =
      /*#__PURE__*/
      // @ts-ignore complex relationship between pagination's existence and criteria, the code logic ensures this is correctly maintained
      _react.default.createElement(_basic_table.EuiBasicTable, _extends({
        ref: this.tableRef,
        items: items,
        itemId: itemId,
        rowProps: rowProps,
        cellProps: cellProps,
        columns: columns,
        pagination: pagination,
        sorting: sorting,
        selection: selection,
        isSelectable: isSelectable,
        hasActions: hasActions,
        onChange: this.onTableChange,
        error: error,
        loading: loading,
        noItemsMessage: message,
        tableLayout: tableLayout,
        compressed: compressed,
        itemIdToExpandedRowMap: itemIdToExpandedRowMap
      }, rest));

      if (!searchBar) {
        return table;
      }

      return /*#__PURE__*/_react.default.createElement("div", null, searchBar, childrenBetween, table);
    }
  }]);

  return EuiInMemoryTable;
}(_react.Component);

exports.EuiInMemoryTable = EuiInMemoryTable;

_defineProperty(EuiInMemoryTable, "defaultProps", {
  responsive: true,
  tableLayout: 'fixed'
});

EuiInMemoryTable.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  "aria-label": _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),
  "data-test-subj": _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.string]), _propTypes.default.string]),

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
     * Called whenever pagination or sorting changes (this property is required when either pagination or sorting is configured). See #Criteria or #CriteriaWithPagination
     */
  onChange: _propTypes.default.func,

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
  textOnly: _propTypes.default.bool,
  message: _propTypes.default.node,

  /**
     * Configures #Search.
     */

  /**
     * Configures #Search.
     */
  search: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    onChange: _propTypes.default.func,

    /**
       The initial query the bar will hold when first mounted
       */
    defaultQuery: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]),

    /**
       If you wish to use the search bar as a controlled component, continuously pass the query via this prop.
       */
    query: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.string.isRequired]),

    /**
       Configures the search box. Set `placeholder` to change the placeholder text in the box and `incremental` to support incremental (as you type) search.
       */
    box: _propTypes.default.shape({
      name: _propTypes.default.string,
      id: _propTypes.default.string,
      placeholder: _propTypes.default.string,
      value: _propTypes.default.string,
      isInvalid: _propTypes.default.bool,
      fullWidth: _propTypes.default.bool,
      isLoading: _propTypes.default.bool,

      /**
         * Called when the user presses [Enter] OR on change if the incremental prop is `true`.
         * If you don't need the on[Enter] functionality, prefer using onChange
         */
      onSearch: _propTypes.default.func,

      /**
         * When `true` the search will be executed (that is, the `onSearch` will be called) as the
         * user types.
         */
      incremental: _propTypes.default.bool,

      /**
         * when `true` creates a shorter height input
         */
      compressed: _propTypes.default.bool,
      inputRef: _propTypes.default.func,

      /**
         * Shows a button that quickly clears any input
         */
      isClearable: _propTypes.default.bool,

      /**
         * Creates an input group with element(s) coming before input
         * `string` | `ReactElement` or an array of these
         */
      prepend: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),

      /**
         * Creates an input group with element(s) coming after input.
         * `string` | `ReactElement` or an array of these
         */
      append: _propTypes.default.oneOfType([_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.element.isRequired]).isRequired).isRequired]),
      className: _propTypes.default.string,
      "aria-label": _propTypes.default.string,
      "data-test-subj": _propTypes.default.string,
      // Boolean values are not meaningful to this EuiSearchBox, but are allowed so that other
      // components can use e.g. a true value to mean "auto-derive a schema". See EuiInMemoryTable.
      // Admittedly, this is a bit of a hack.
      schema: _propTypes.default.oneOfType([_propTypes.default.shape({
        strict: _propTypes.default.bool,
        fields: _propTypes.default.any,
        flags: _propTypes.default.arrayOf(_propTypes.default.string.isRequired)
      }).isRequired, _propTypes.default.bool.isRequired])
    }),

    /**
       An array of search filters. See #SearchFilterConfig.
       */
    filters: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.shape({
      type: _propTypes.default.oneOf(["is"]).isRequired,
      field: _propTypes.default.string.isRequired,
      name: _propTypes.default.string.isRequired,
      negatedName: _propTypes.default.string,
      available: _propTypes.default.func
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_selection"]).isRequired,
      field: _propTypes.default.string,
      name: _propTypes.default.string.isRequired,

      /**
         * See #FieldValueOptionType
         */
      options: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.shape({
        field: _propTypes.default.string,
        value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired, _propTypes.default.shape({
          type: _propTypes.default.oneOf(["date"]).isRequired,
          raw: _propTypes.default.any.isRequired,
          granularity: _propTypes.default.oneOfType([_propTypes.default.shape({
            es: _propTypes.default.oneOf(["d", "w", "M", "y"]).isRequired,
            js: _propTypes.default.oneOf(["day", "week", "month", "year"]).isRequired,
            isSame: _propTypes.default.func.isRequired,
            start: _propTypes.default.func.isRequired,
            startOfNext: _propTypes.default.func.isRequired,
            iso8601: _propTypes.default.func.isRequired
          }).isRequired, _propTypes.default.oneOf([undefined])]).isRequired,
          text: _propTypes.default.string.isRequired,
          resolve: _propTypes.default.func.isRequired
        }).isRequired]).isRequired,
        name: _propTypes.default.string,
        view: _propTypes.default.node
      }).isRequired).isRequired, _propTypes.default.func.isRequired]).isRequired,
      filterWith: _propTypes.default.oneOfType([_propTypes.default.oneOf(["prefix", "includes"]), _propTypes.default.func.isRequired]),
      cache: _propTypes.default.number,
      multiSelect: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.oneOf(["and", "or"])]),
      loadingMessage: _propTypes.default.string,
      noOptionsMessage: _propTypes.default.string,
      searchThreshold: _propTypes.default.number,
      available: _propTypes.default.func,
      autoClose: _propTypes.default.bool,
      operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_toggle"]).isRequired,
      field: _propTypes.default.string.isRequired,
      value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired, _propTypes.default.shape({
        type: _propTypes.default.oneOf(["date"]).isRequired,
        raw: _propTypes.default.any.isRequired,
        granularity: _propTypes.default.oneOfType([_propTypes.default.shape({
          es: _propTypes.default.oneOf(["d", "w", "M", "y"]).isRequired,
          js: _propTypes.default.oneOf(["day", "week", "month", "year"]).isRequired,
          isSame: _propTypes.default.func.isRequired,
          start: _propTypes.default.func.isRequired,
          startOfNext: _propTypes.default.func.isRequired,
          iso8601: _propTypes.default.func.isRequired
        }).isRequired, _propTypes.default.oneOf([undefined])]).isRequired,
        text: _propTypes.default.string.isRequired,
        resolve: _propTypes.default.func.isRequired
      }).isRequired]).isRequired,
      name: _propTypes.default.string.isRequired,
      negatedName: _propTypes.default.string,
      available: _propTypes.default.func,
      operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
    }).isRequired, _propTypes.default.shape({
      type: _propTypes.default.oneOf(["field_value_toggle_group"]).isRequired,
      field: _propTypes.default.string.isRequired,

      /**
         * See #FieldValueToggleGroupFilterItemType
         */
      items: _propTypes.default.arrayOf(_propTypes.default.shape({
        value: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.number.isRequired, _propTypes.default.bool.isRequired]).isRequired,
        name: _propTypes.default.string.isRequired,
        negatedName: _propTypes.default.string,
        operator: _propTypes.default.oneOf(["eq", "exact", "gt", "gte", "lt", "lte"])
      }).isRequired).isRequired,
      available: _propTypes.default.func
    }).isRequired]).isRequired),

    /**
       * Tools which go to the left of the search bar.
       */
    toolsLeft: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.arrayOf(_propTypes.default.element.isRequired).isRequired]),

    /**
       * Tools which go to the right of the search bar.
       */
    toolsRight: _propTypes.default.oneOfType([_propTypes.default.element.isRequired, _propTypes.default.arrayOf(_propTypes.default.element.isRequired).isRequired]),

    /**
       * Date formatter to use when parsing date values
       */
    dateFormat: _propTypes.default.any,
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string
  }).isRequired]),
  pagination: _propTypes.default.oneOfType([_propTypes.default.oneOf([undefined]), _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    pageSizeOptions: _propTypes.default.arrayOf(_propTypes.default.number.isRequired),
    hidePerPageOptions: _propTypes.default.bool,
    initialPageIndex: _propTypes.default.number,
    initialPageSize: _propTypes.default.number,
    pageIndex: _propTypes.default.number,
    pageSize: _propTypes.default.number
  }).isRequired])]),
  sorting: _propTypes.default.oneOfType([_propTypes.default.bool.isRequired, _propTypes.default.shape({
    sort: _propTypes.default.shape({
      field: _propTypes.default.string.isRequired,
      direction: _propTypes.default.oneOfType([_propTypes.default.any.isRequired, _propTypes.default.any.isRequired]).isRequired
    }).isRequired
  }).isRequired]),

  /**
     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
     */

  /**
     * Set `allowNeutralSort` to false to force column sorting. Defaults to true.
     */
  allowNeutralSort: _propTypes.default.bool,

  /**
     * Callback for when table pagination or sorting is changed. This is meant to be informational only, and not used to set any state as the in-memory table already manages this state. See #Criteria or #CriteriaWithPagination.
     */
  onTableChange: _propTypes.default.func,
  executeQueryOptions: _propTypes.default.shape({
    defaultFields: _propTypes.default.arrayOf(_propTypes.default.string.isRequired),
    isClauseMatcher: _propTypes.default.func,
    explain: _propTypes.default.bool
  }),

  /**
     * Insert content between the search bar and table components.
     */

  /**
     * Insert content between the search bar and table components.
     */
  childrenBetween: _propTypes.default.node
};