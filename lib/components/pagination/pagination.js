"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiPagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pagination_button = require("./pagination_button");

var _button = require("../button");

var _i18n = require("../i18n");

var _text = require("../text");

var _responsive = require("../responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MAX_VISIBLE_PAGES = 5;
var NUMBER_SURROUNDING_PAGES = Math.floor(MAX_VISIBLE_PAGES * 0.5);

var EuiPagination = function EuiPagination(_ref) {
  var className = _ref.className,
      _ref$pageCount = _ref.pageCount,
      pageCount = _ref$pageCount === void 0 ? 1 : _ref$pageCount,
      _ref$activePage = _ref.activePage,
      activePage = _ref$activePage === void 0 ? 1 : _ref$activePage,
      _ref$onPageClick = _ref.onPageClick,
      onPageClick = _ref$onPageClick === void 0 ? function () {} : _ref$onPageClick,
      compressed = _ref.compressed,
      ariaControls = _ref['aria-controls'],
      rest = _objectWithoutProperties(_ref, ["className", "pageCount", "activePage", "onPageClick", "compressed", "aria-controls"]);

  var safeClick = function safeClick(e, pageIndex) {
    e.preventDefault();

    if (ariaControls) {
      var controlledElement = document.getElementById(ariaControls);

      if (controlledElement) {
        controlledElement.focus();
      }
    }

    onPageClick(pageIndex);
  };

  var PaginationButton = function PaginationButton(_ref2) {
    var pageIndex = _ref2.pageIndex,
        _ref2$inList = _ref2.inList,
        inList = _ref2$inList === void 0 ? true : _ref2$inList;

    var button = /*#__PURE__*/_react.default.createElement(_pagination_button.EuiPaginationButton, _extends({
      isActive: pageIndex === activePage,
      totalPages: pageCount,
      onClick: function onClick(e) {
        return safeClick(e, pageIndex);
      },
      pageIndex: pageIndex
    }, hasControl && {
      'aria-controls': ariaControls
    }, {
      hideOnMobile: true
    }));

    if (inList) {
      return /*#__PURE__*/_react.default.createElement("li", {
        className: "euiPagination__item"
      }, button);
    }

    return button;
  };

  var classes = (0, _classnames.default)('euiPagination', className);
  var hasControl = ariaControls !== undefined;
  var pages = [];
  var firstPageInRange = Math.max(0, Math.min(activePage - NUMBER_SURROUNDING_PAGES, pageCount - MAX_VISIBLE_PAGES));
  var lastPageInRange = Math.min(pageCount, firstPageInRange + MAX_VISIBLE_PAGES);

  for (var i = firstPageInRange, index = 0; i < lastPageInRange; i++, index++) {
    pages.push( /*#__PURE__*/_react.default.createElement(PaginationButton, {
      pageIndex: i,
      key: i
    }));
  }

  var prevPageButtonProps = {};

  if (hasControl && activePage !== 0) {
    prevPageButtonProps = {
      'aria-controls': ariaControls,
      href: "#".concat(ariaControls)
    };
  } else {
    prevPageButtonProps = {
      disabled: activePage === 0
    };
  }

  var previousButton = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiPagination.previousPage",
    default: "Previous page, {page}",
    values: {
      page: activePage
    }
  }, function (previousPage) {
    return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiPagination.disabledPreviousPage",
      default: "Previous page"
    }, function (disabledPreviousPage) {
      return /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, _extends({
        onClick: function onClick(e) {
          return safeClick(e, activePage - 1);
        },
        iconType: "arrowLeft",
        color: "text",
        "aria-label": activePage === 0 ? disabledPreviousPage : previousPage,
        "data-test-subj": "pagination-button-previous"
      }, prevPageButtonProps));
    });
  });

  var firstPageButtons = [];

  if (firstPageInRange > 0) {
    firstPageButtons.push( /*#__PURE__*/_react.default.createElement(PaginationButton, {
      pageIndex: 0,
      key: 0
    }));

    if (firstPageInRange > 1 && firstPageInRange !== 2) {
      firstPageButtons.push( /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        key: "startingEllipses",
        token: "euiPagination.firstRangeAriaLabel",
        default: "Skipping pages 2 to {lastPage}",
        values: {
          lastPage: firstPageInRange
        }
      }, function (firstRangeAriaLabel) {
        return /*#__PURE__*/_react.default.createElement("li", {
          "aria-label": firstRangeAriaLabel,
          className: "euiPaginationButton-isPlaceholder euiPagination__item"
        }, "\u2026");
      }));
    } else if (firstPageInRange === 2) {
      firstPageButtons.push( /*#__PURE__*/_react.default.createElement(PaginationButton, {
        pageIndex: 1,
        key: 1
      }));
    }
  }

  var lastPageButtons = [];

  if (lastPageInRange < pageCount) {
    if (lastPageInRange + 1 === pageCount - 1) {
      lastPageButtons.push( /*#__PURE__*/_react.default.createElement(PaginationButton, {
        pageIndex: lastPageInRange,
        key: lastPageInRange
      }));
    } else if (lastPageInRange < pageCount - 1) {
      lastPageButtons.push( /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
        key: "endingEllipses",
        token: "euiPagination.lastRangeAriaLabel",
        default: "Skipping pages {firstPage} to {lastPage}",
        values: {
          firstPage: lastPageInRange + 1,
          lastPage: pageCount - 1
        }
      }, function (lastRangeAriaLabel) {
        return /*#__PURE__*/_react.default.createElement("li", {
          "aria-label": lastRangeAriaLabel,
          className: "euiPaginationButton-isPlaceholder euiPagination__item"
        }, "\u2026");
      }));
    }

    lastPageButtons.push( /*#__PURE__*/_react.default.createElement(PaginationButton, {
      pageIndex: pageCount - 1,
      key: pageCount - 1
    }));
  }

  var nextPageButtonProps = {};

  if (hasControl && activePage !== pageCount - 1) {
    nextPageButtonProps = {
      'aria-controls': ariaControls,
      href: "#".concat(ariaControls)
    };
  } else {
    nextPageButtonProps = {
      disabled: activePage === pageCount - 1
    };
  }

  var nextButton = /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
    token: "euiPagination.nextPage",
    default: "Next page, {page}",
    values: {
      page: activePage + 2
    }
  }, function (nextPage) {
    return /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiPagination.disabledNextPage",
      default: "Next page"
    }, function (disabledNextPage) {
      return /*#__PURE__*/_react.default.createElement(_button.EuiButtonIcon, _extends({
        onClick: function onClick(e) {
          return safeClick(e, activePage + 1);
        },
        iconType: "arrowRight",
        "aria-label": activePage === pageCount - 1 ? disabledNextPage : nextPage,
        color: "text",
        "data-test-subj": "pagination-button-next"
      }, nextPageButtonProps));
    });
  });

  var selectablePages = pages;

  if (compressed) {
    var firstPageButtonCompressed = /*#__PURE__*/_react.default.createElement(PaginationButton, {
      pageIndex: activePage,
      inList: false
    });

    var lastPageButtonCompressed = /*#__PURE__*/_react.default.createElement(PaginationButton, {
      pageIndex: pageCount - 1,
      inList: false
    });

    return /*#__PURE__*/_react.default.createElement("nav", _extends({
      className: classes
    }, rest), previousButton, /*#__PURE__*/_react.default.createElement(_responsive.EuiHideFor, {
      sizes: ['xs', 's']
    }, /*#__PURE__*/_react.default.createElement(_text.EuiText, {
      size: "s",
      className: "euiPagination__compressedText"
    }, /*#__PURE__*/_react.default.createElement(_i18n.EuiI18n, {
      token: "euiPagination.pageOfTotalCompressed",
      default: "{page} of {total}",
      values: {
        page: firstPageButtonCompressed,
        total: lastPageButtonCompressed
      }
    }))), nextButton);
  }

  var accessibleName = _objectSpread(_objectSpread({}, rest['aria-label'] && {
    'aria-label': rest['aria-label']
  }), rest['aria-labelledby'] && {
    'aria-labelledby': rest['aria-labelledby']
  });

  return /*#__PURE__*/_react.default.createElement("nav", _extends({
    className: classes
  }, rest), previousButton, /*#__PURE__*/_react.default.createElement("ul", _extends({}, accessibleName, {
    className: "euiPagination__list"
  }), firstPageButtons, selectablePages, lastPageButtons), nextButton);
};

exports.EuiPagination = EuiPagination;
EuiPagination.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
     * The total number of pages.
     */
  pageCount: _propTypes.default.number,

  /**
     * The current page using a zero based index.
     * So if you set the activePage to 1, it will activate the second page.
     */
  activePage: _propTypes.default.number,
  onPageClick: _propTypes.default.func,

  /**
     * If true, will only show next/prev arrows instead of page numbers.
     */
  compressed: _propTypes.default.bool,

  /**
     * If passed in, passes value through to each button to set aria-controls
     */
  "aria-controls": _propTypes.default.string
};