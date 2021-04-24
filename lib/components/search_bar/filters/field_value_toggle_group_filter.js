"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldValueToggleGroupFilter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _filter_group = require("../../filter_group");

var _query = require("../query");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var FieldValueToggleGroupFilter = /*#__PURE__*/function (_Component) {
  _inherits(FieldValueToggleGroupFilter, _Component);

  var _super = _createSuper(FieldValueToggleGroupFilter);

  function FieldValueToggleGroupFilter() {
    _classCallCheck(this, FieldValueToggleGroupFilter);

    return _super.apply(this, arguments);
  }

  _createClass(FieldValueToggleGroupFilter, [{
    key: "resolveDisplay",
    value: function resolveDisplay(config, query, item) {
      var clause = query.getSimpleFieldClause(config.field, item.value);

      if (clause) {
        if (_query.Query.isMust(clause)) {
          return {
            active: true,
            name: item.name
          };
        }

        return {
          active: true,
          name: item.negatedName ? item.negatedName : "Not ".concat(item.name)
        };
      }

      return {
        active: false,
        name: item.name
      };
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(item, active) {
      var field = this.props.config.field;
      var value = item.value,
          operator = item.operator;
      var query = active ? this.props.query.removeSimpleFieldClauses(field) : this.props.query.removeSimpleFieldClauses(field).addSimpleFieldValue(field, value, true, operator);
      this.props.onChange(query);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          config = _this$props.config,
          query = _this$props.query;
      return config.items.map(function (item, index) {
        var _this$resolveDisplay = _this.resolveDisplay(config, query, item),
            active = _this$resolveDisplay.active,
            name = _this$resolveDisplay.name;

        var onClick = function onClick() {
          _this.valueChanged(item, active);
        };

        var key = "field_value_toggle_filter_item_".concat(index);
        var isLastItem = index === config.items.length - 1;
        return /*#__PURE__*/_react.default.createElement(_filter_group.EuiFilterButton, {
          key: key,
          onClick: onClick,
          hasActiveFilters: active,
          noDivider: !isLastItem,
          "aria-pressed": !!active,
          withNext: !isLastItem
        }, name);
      });
    }
  }]);

  return FieldValueToggleGroupFilter;
}(_react.Component);

exports.FieldValueToggleGroupFilter = FieldValueToggleGroupFilter;
FieldValueToggleGroupFilter.propTypes = {
  index: _propTypes.default.number.isRequired,
  config: _propTypes.default.shape({
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
  }).isRequired,
  query: _propTypes.default.any.isRequired,
  onChange: _propTypes.default.func.isRequired
};