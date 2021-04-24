"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiCheckboxGroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _form_fieldset = require("../form_fieldset");

var _checkbox = require("./checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EuiCheckboxGroup = function EuiCheckboxGroup(_ref) {
  var _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$idToSelectedMap = _ref.idToSelectedMap,
      idToSelectedMap = _ref$idToSelectedMap === void 0 ? {} : _ref$idToSelectedMap,
      onChange = _ref.onChange,
      className = _ref.className,
      disabled = _ref.disabled,
      compressed = _ref.compressed,
      legend = _ref.legend,
      rest = _objectWithoutProperties(_ref, ["options", "idToSelectedMap", "onChange", "className", "disabled", "compressed", "legend"]);

  var checkboxes = options.map(function (option, index) {
    var isOptionDisabled = option.disabled,
        optionClass = option.className,
        optionRest = _objectWithoutProperties(option, ["disabled", "className"]);

    return /*#__PURE__*/_react.default.createElement(_checkbox.EuiCheckbox, _extends({
      className: (0, _classnames.default)('euiCheckboxGroup__item', optionClass),
      key: index,
      checked: idToSelectedMap[option.id],
      disabled: disabled || isOptionDisabled,
      onChange: onChange.bind(null, option.id),
      compressed: compressed
    }, optionRest));
  });

  if (!!legend) {
    // Be sure to pass down the compressed option to the legend
    legend.compressed = compressed;
    return /*#__PURE__*/_react.default.createElement(_form_fieldset.EuiFormFieldset, _extends({
      className: className,
      legend: legend
    }, rest), checkboxes);
  }

  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: className
  }, rest), checkboxes);
};

exports.EuiCheckboxGroup = EuiCheckboxGroup;
EuiCheckboxGroup.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,
  options: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.string.isRequired
  }).isRequired).isRequired,
  idToSelectedMap: _propTypes.default.shape({}).isRequired,
  onChange: _propTypes.default.func.isRequired,

  /**
     * Tightens up the spacing between checkbox rows and sends down the
     * compressed prop to the checkbox itself
     */
  compressed: _propTypes.default.bool,
  disabled: _propTypes.default.bool,

  /**
     * If the individual labels for each radio do not provide a sufficient description, add a legend.
     * Wraps the group in a `EuiFormFieldset` which adds an `EuiLegend` for titling the whole group.
     * Accepts an `EuiFormLegendProps` shape.
     */
  legend: _propTypes.default.shape({
    className: _propTypes.default.string,
    "aria-label": _propTypes.default.string,
    "data-test-subj": _propTypes.default.string,

    /**
         * ReactNode to render as this component's content
         */
    children: _propTypes.default.node.isRequired,

    /**
         * For a hidden legend that is still visible to the screen reader, set to 'hidden'
         */
    display: _propTypes.default.oneOf(["hidden", "visible"]),
    compressed: _propTypes.default.bool
  })
};