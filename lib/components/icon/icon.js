"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EuiIcon = exports.appendIconComponentCache = exports.clearIconComponentCache = exports.SIZES = exports.COLORS = exports.TYPES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _common = require("../common");

var _empty = require("./assets/empty.js");

var _react2 = require("../../services/react");

var _services = require("../../services");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var typeToPathMap = {
  accessibility: 'accessibility',
  addDataApp: 'app_add_data',
  advancedSettingsApp: 'app_advanced_settings',
  aggregate: 'aggregate',
  alert: 'alert',
  analyzeEvent: 'analyze_event',
  annotation: 'annotation',
  apmApp: 'app_apm',
  apmTrace: 'apm_trace',
  apps: 'apps',
  appSearchApp: 'app_app_search',
  arrowDown: 'arrow_down',
  arrowLeft: 'arrow_left',
  arrowRight: 'arrow_right',
  arrowUp: 'arrow_up',
  asterisk: 'asterisk',
  auditbeatApp: 'app_auditbeat',
  beaker: 'beaker',
  bell: 'bell',
  bellSlash: 'bellSlash',
  bolt: 'bolt',
  boxesHorizontal: 'boxes_horizontal',
  boxesVertical: 'boxes_vertical',
  branch: 'branch',
  broom: 'broom',
  brush: 'brush',
  bug: 'bug',
  bullseye: 'bullseye',
  calendar: 'calendar',
  canvasApp: 'app_canvas',
  codeApp: 'app_code',
  check: 'check',
  checkInCircleFilled: 'checkInCircleFilled',
  cheer: 'cheer',
  classificationJob: 'ml_classification_job',
  clock: 'clock',
  cloudDrizzle: 'cloudDrizzle',
  cloudStormy: 'cloudStormy',
  cloudSunny: 'cloudSunny',
  compute: 'compute',
  console: 'console',
  consoleApp: 'app_console',
  controlsHorizontal: 'controls_horizontal',
  controlsVertical: 'controls_vertical',
  copy: 'copy',
  copyClipboard: 'copy_clipboard',
  createAdvancedJob: 'ml_create_advanced_job',
  createMultiMetricJob: 'ml_create_multi_metric_job',
  createPopulationJob: 'ml_create_population_job',
  createSingleMetricJob: 'ml_create_single_metric_job',
  cross: 'cross',
  crossClusterReplicationApp: 'app_cross_cluster_replication',
  crosshairs: 'crosshairs',
  crossInACircleFilled: 'crossInACircleFilled',
  currency: 'currency',
  cut: 'cut',
  dashboardApp: 'app_dashboard',
  database: 'database',
  dataVisualizer: 'ml_data_visualizer',
  devToolsApp: 'app_devtools',
  discoverApp: 'app_discover',
  document: 'document',
  documentEdit: 'documentEdit',
  documents: 'documents',
  dot: 'dot',
  download: 'download',
  editorAlignCenter: 'editor_align_center',
  editorAlignLeft: 'editor_align_left',
  editorAlignRight: 'editor_align_right',
  editorBold: 'editor_bold',
  editorCodeBlock: 'editor_code_block',
  editorComment: 'editor_comment',
  editorDistributeHorizontal: 'editorDistributeHorizontal',
  editorDistributeVertical: 'editorDistributeVertical',
  editorHeading: 'editor_heading',
  editorItalic: 'editor_italic',
  editorItemAlignLeft: 'editorItemAlignLeft',
  editorItemAlignBottom: 'editorItemAlignBottom',
  editorItemAlignCenter: 'editorItemAlignCenter',
  editorItemAlignMiddle: 'editorItemAlignMiddle',
  editorItemAlignRight: 'editorItemAlignRight',
  editorItemAlignTop: 'editorItemAlignTop',
  editorLink: 'editor_link',
  editorOrderedList: 'editor_ordered_list',
  editorPositionBottomLeft: 'editorPositionBottomLeft',
  editorPositionBottomRight: 'editorPositionBottomRight',
  editorPositionTopLeft: 'editorPositionTopLeft',
  editorPositionTopRight: 'editorPositionTopRight',
  editorRedo: 'editor_redo',
  editorStrike: 'editor_strike',
  editorTable: 'editor_table',
  editorUnderline: 'editor_underline',
  editorUndo: 'editor_undo',
  editorUnorderedList: 'editor_unordered_list',
  email: 'email',
  empty: 'empty',
  emsApp: 'app_ems',
  eql: 'eql',
  exit: 'exit',
  expand: 'expand',
  expandMini: 'expandMini',
  exportAction: 'export',
  eye: 'eye',
  eyeClosed: 'eye_closed',
  faceHappy: 'face_happy',
  faceNeutral: 'faceNeutral',
  faceSad: 'face_sad',
  filebeatApp: 'app_filebeat',
  filter: 'filter',
  flag: 'flag',
  fold: 'fold',
  folderCheck: 'folder_check',
  folderClosed: 'folder_closed',
  folderExclamation: 'folder_exclamation',
  folderOpen: 'folder_open',
  fullScreen: 'full_screen',
  gear: 'gear',
  gisApp: 'app_gis',
  glasses: 'glasses',
  globe: 'globe',
  grab: 'grab',
  grabHorizontal: 'grab_horizontal',
  graphApp: 'app_graph',
  grid: 'grid',
  grokApp: 'app_grok',
  heart: 'heart',
  heartbeatApp: 'app_heartbeat',
  heatmap: 'heatmap',
  help: 'help',
  home: 'home',
  iInCircle: 'iInCircle',
  image: 'image',
  importAction: 'import',
  indexClose: 'index_close',
  indexEdit: 'index_edit',
  indexFlush: 'index_flush',
  indexManagementApp: 'app_index_management',
  indexMapping: 'index_mapping',
  indexOpen: 'index_open',
  indexPatternApp: 'app_index_pattern',
  indexRollupApp: 'app_index_rollup',
  indexRuntime: 'index_runtime',
  indexSettings: 'index_settings',
  inputOutput: 'inputOutput',
  inspect: 'inspect',
  invert: 'invert',
  ip: 'ip',
  keyboardShortcut: 'keyboard_shortcut',
  kqlField: 'kql_field',
  kqlFunction: 'kql_function',
  kqlOperand: 'kql_operand',
  kqlSelector: 'kql_selector',
  kqlValue: 'kql_value',
  lensApp: 'app_lens',
  link: 'link',
  list: 'list',
  listAdd: 'list_add',
  lock: 'lock',
  lockOpen: 'lockOpen',
  logsApp: 'app_logs',
  logoAerospike: 'logo_aerospike',
  logoApache: 'logo_apache',
  logoAppSearch: 'logo_app_search',
  logoAWS: 'logo_aws',
  logoAWSMono: 'logo_aws_mono',
  logoAzure: 'logo_azure',
  logoAzureMono: 'logo_azure_mono',
  logoBeats: 'logo_beats',
  logoBusinessAnalytics: 'logo_business_analytics',
  logoCeph: 'logo_ceph',
  logoCloud: 'logo_cloud',
  logoCloudEnterprise: 'logo_cloud_ece',
  logoCode: 'logo_code',
  logoCodesandbox: 'logo_codesandbox',
  logoCouchbase: 'logo_couchbase',
  logoDocker: 'logo_docker',
  logoDropwizard: 'logo_dropwizard',
  logoElastic: 'logo_elastic',
  logoElasticsearch: 'logo_elasticsearch',
  logoElasticStack: 'logo_elastic_stack',
  logoEnterpriseSearch: 'logo_enterprise_search',
  logoEtcd: 'logo_etcd',
  logoGCP: 'logo_gcp',
  logoGCPMono: 'logo_gcp_mono',
  logoGithub: 'logo_github',
  logoGmail: 'logo_gmail',
  logoGolang: 'logo_golang',
  logoGoogleG: 'logo_google_g',
  logoHAproxy: 'logo_haproxy',
  logoIBM: 'logo_ibm',
  logoIBMMono: 'logo_ibm_mono',
  logoKafka: 'logo_kafka',
  logoKibana: 'logo_kibana',
  logoKubernetes: 'logo_kubernetes',
  logoLogging: 'logo_logging',
  logoLogstash: 'logo_logstash',
  logoMaps: 'logo_maps',
  logoMemcached: 'logo_memcached',
  logoMetrics: 'logo_metrics',
  logoMongodb: 'logo_mongodb',
  logoMySQL: 'logo_mysql',
  logoNginx: 'logo_nginx',
  logoObservability: 'logo_observability',
  logoOsquery: 'logo_osquery',
  logoPhp: 'logo_php',
  logoPostgres: 'logo_postgres',
  logoPrometheus: 'logo_prometheus',
  logoRabbitmq: 'logo_rabbitmq',
  logoRedis: 'logo_redis',
  logoSecurity: 'logo_security',
  logoSiteSearch: 'logo_site_search',
  logoSketch: 'logo_sketch',
  logoSlack: 'logo_slack',
  logoUptime: 'logo_uptime',
  logoWebhook: 'logo_webhook',
  logoWindows: 'logo_windows',
  logoWorkplaceSearch: 'logo_workplace_search',
  logstashFilter: 'logstash_filter',
  logstashIf: 'logstash_if',
  logstashInput: 'logstash_input',
  logstashOutput: 'logstash_output',
  logstashQueue: 'logstash_queue',
  machineLearningApp: 'app_ml',
  magnet: 'magnet',
  magnifyWithMinus: 'magnifyWithMinus',
  magnifyWithPlus: 'magnifyWithPlus',
  managementApp: 'app_management',
  mapMarker: 'map_marker',
  memory: 'memory',
  menu: 'menu',
  menuDown: 'menuDown',
  menuLeft: 'menuLeft',
  menuRight: 'menuRight',
  menuUp: 'menuUp',
  merge: 'merge',
  metricbeatApp: 'app_metricbeat',
  metricsApp: 'app_metrics',
  minimize: 'minimize',
  minus: 'minus',
  minusInCircle: 'minus_in_circle',
  minusInCircleFilled: 'minus_in_circle_filled',
  monitoringApp: 'app_monitoring',
  moon: 'moon',
  nested: 'nested',
  node: 'node',
  notebookApp: 'app_notebook',
  number: 'number',
  offline: 'offline',
  online: 'online',
  outlierDetectionJob: 'ml_outlier_detection_job',
  package: 'package',
  packetbeatApp: 'app_packetbeat',
  pageSelect: 'pageSelect',
  pagesSelect: 'pagesSelect',
  partial: 'partial',
  paperClip: 'paper_clip',
  pause: 'pause',
  pencil: 'pencil',
  pin: 'pin',
  pinFilled: 'pin_filled',
  pipelineApp: 'app_pipeline',
  play: 'play',
  plus: 'plus',
  plusInCircle: 'plus_in_circle',
  plusInCircleFilled: 'plus_in_circle_filled',
  popout: 'popout',
  push: 'push',
  questionInCircle: 'question_in_circle',
  quote: 'quote',
  recentlyViewedApp: 'app_recently_viewed',
  refresh: 'refresh',
  regressionJob: 'ml_regression_job',
  reporter: 'reporter',
  reportingApp: 'app_reporting',
  returnKey: 'return_key',
  save: 'save',
  savedObjectsApp: 'app_saved_objects',
  scale: 'scale',
  search: 'search',
  searchProfilerApp: 'app_search_profiler',
  securityAnalyticsApp: 'app_security_analytics',
  securityApp: 'app_security',
  securitySignal: 'securitySignal',
  securitySignalDetected: 'securitySignalDetected',
  securitySignalResolved: 'securitySignalResolved',
  shard: 'shard',
  share: 'share',
  snowflake: 'snowflake',
  sortable: 'sortable',
  sortDown: 'sort_down',
  sortLeft: 'sortLeft',
  sortRight: 'sortRight',
  sortUp: 'sort_up',
  spacesApp: 'app_spaces',
  sqlApp: 'app_sql',
  starEmpty: 'star_empty',
  starEmptySpace: 'star_empty_space',
  starFilled: 'star_filled',
  starFilledSpace: 'star_filled_space',
  starMinusEmpty: 'star_minus_empty',
  starMinusFilled: 'star_minus_filled',
  starPlusEmpty: 'starPlusEmpty',
  starPlusFilled: 'starPlusFilled',
  stats: 'stats',
  stop: 'stop',
  stopFilled: 'stop_filled',
  stopSlash: 'stop_slash',
  storage: 'storage',
  string: 'string',
  submodule: 'submodule',
  swatchInput: 'swatch_input',
  // Undocumented on purpose. Has an extra stroke for EuiColorPicker
  symlink: 'symlink',
  tableOfContents: 'tableOfContents',
  tableDensityExpanded: 'table_density_expanded',
  tableDensityCompact: 'table_density_compact',
  tableDensityNormal: 'table_density_normal',
  tag: 'tag',
  tear: 'tear',
  temperature: 'temperature',
  timeline: 'timeline',
  timelionApp: 'app_timelion',
  training: 'training',
  trash: 'trash',
  upgradeAssistantApp: 'app_upgrade_assistant',
  uptimeApp: 'app_uptime',
  unfold: 'unfold',
  unlink: 'unlink',
  user: 'user',
  users: 'users',
  usersRolesApp: 'app_users_roles',
  vector: 'vector',
  videoPlayer: 'videoPlayer',
  visArea: 'vis_area',
  visAreaStacked: 'vis_area_stacked',
  visBarHorizontal: 'vis_bar_horizontal',
  visBarHorizontalStacked: 'vis_bar_horizontal_stacked',
  visBarVertical: 'vis_bar_vertical',
  visBarVerticalStacked: 'vis_bar_vertical_stacked',
  visGauge: 'vis_gauge',
  visGoal: 'vis_goal',
  visLine: 'vis_line',
  visMapCoordinate: 'vis_map_coordinate',
  visMapRegion: 'vis_map_region',
  visMetric: 'vis_metric',
  visPie: 'vis_pie',
  visTable: 'vis_table',
  visTagCloud: 'vis_tag_cloud',
  visText: 'vis_text',
  visTimelion: 'vis_timelion',
  visualizeApp: 'app_visualize',
  visVega: 'vis_vega',
  visVisualBuilder: 'vis_visual_builder',
  watchesApp: 'app_watches',
  workplaceSearchApp: 'app_workplace_search',
  wrench: 'wrench',
  // Token Icon Imports
  tokenClass: 'tokens/tokenClass',
  tokenProperty: 'tokens/tokenProperty',
  tokenEnum: 'tokens/tokenEnum',
  tokenVariable: 'tokens/tokenVariable',
  tokenMethod: 'tokens/tokenMethod',
  tokenAnnotation: 'tokens/tokenAnnotation',
  tokenException: 'tokens/tokenException',
  tokenInterface: 'tokens/tokenInterface',
  tokenParameter: 'tokens/tokenParameter',
  tokenField: 'tokens/tokenField',
  tokenElement: 'tokens/tokenElement',
  tokenFunction: 'tokens/tokenFunction',
  tokenBoolean: 'tokens/tokenBoolean',
  tokenString: 'tokens/tokenString',
  tokenArray: 'tokens/tokenArray',
  tokenNumber: 'tokens/tokenNumber',
  tokenConstant: 'tokens/tokenConstant',
  tokenObject: 'tokens/tokenObject',
  tokenEvent: 'tokens/tokenEvent',
  tokenKey: 'tokens/tokenKey',
  tokenNull: 'tokens/tokenNull',
  tokenStruct: 'tokens/tokenStruct',
  tokenPackage: 'tokens/tokenPackage',
  tokenOperator: 'tokens/tokenOperator',
  tokenEnumMember: 'tokens/tokenEnumMember',
  tokenRepo: 'tokens/tokenRepo',
  tokenSymbol: 'tokens/tokenSymbol',
  tokenFile: 'tokens/tokenFile',
  tokenModule: 'tokens/tokenModule',
  tokenNamespace: 'tokens/tokenNamespace',
  tokenDate: 'tokens/tokenDate',
  tokenIP: 'tokens/tokenIP',
  tokenNested: 'tokens/tokenNested',
  tokenAlias: 'tokens/tokenAlias',
  tokenShape: 'tokens/tokenShape',
  tokenGeo: 'tokens/tokenGeo',
  tokenRange: 'tokens/tokenRange',
  tokenBinary: 'tokens/tokenBinary',
  tokenJoin: 'tokens/tokenJoin',
  tokenPercolator: 'tokens/tokenPercolator',
  tokenFlattened: 'tokens/tokenFlattened',
  tokenRankFeature: 'tokens/tokenRankFeature',
  tokenRankFeatures: 'tokens/tokenRankFeatures',
  tokenKeyword: 'tokens/tokenKeyword',
  tokenCompletionSuggester: 'tokens/tokenCompletionSuggester',
  tokenDenseVector: 'tokens/tokenDenseVector',
  tokenText: 'tokens/tokenText',
  tokenTokenCount: 'tokens/tokenTokenCount',
  tokenSearchType: 'tokens/tokenSearchType',
  tokenHistogram: 'tokens/tokenHistogram'
};
var TYPES = (0, _common.keysOf)(typeToPathMap);
exports.TYPES = TYPES;
var colorToClassMap = {
  default: null,
  primary: 'euiIcon--primary',
  secondary: 'euiIcon--secondary',
  success: 'euiIcon--success',
  accent: 'euiIcon--accent',
  warning: 'euiIcon--warning',
  danger: 'euiIcon--danger',
  text: 'euiIcon--text',
  subdued: 'euiIcon--subdued',
  ghost: 'euiIcon--ghost'
};
var COLORS = (0, _common.keysOf)(colorToClassMap);
exports.COLORS = COLORS;

function isNamedColor(name) {
  return colorToClassMap.hasOwnProperty(name);
} // We accept arbitrary color strings, which are impossible to type.


var sizeToClassNameMap = {
  original: null,
  s: 'euiIcon--small',
  m: 'euiIcon--medium',
  l: 'euiIcon--large',
  xl: 'euiIcon--xLarge',
  xxl: 'euiIcon--xxLarge'
};
var SIZES = (0, _common.keysOf)(sizeToClassNameMap);
exports.SIZES = SIZES;

function isEuiIconType(x) {
  return typeof x === 'string' && typeToPathMap.hasOwnProperty(x);
}

function getInitialIcon(icon) {
  if (icon == null) {
    return undefined;
  }

  if (isEuiIconType(icon)) {
    if (iconComponentCache.hasOwnProperty(icon)) {
      return iconComponentCache[icon];
    }

    return undefined;
  }

  return icon;
}

var generateId = (0, _services.htmlIdGenerator)();
var iconComponentCache = {};

var clearIconComponentCache = function clearIconComponentCache(iconType) {
  if (iconType != null) {
    delete iconComponentCache[iconType];
  } else {
    iconComponentCache = {};
  }
};

exports.clearIconComponentCache = clearIconComponentCache;

var appendIconComponentCache = function appendIconComponentCache(iconTypeToIconComponentMap) {
  for (var _iconType in iconTypeToIconComponentMap) {
    if (iconTypeToIconComponentMap.hasOwnProperty(_iconType)) {
      iconComponentCache[_iconType] = iconTypeToIconComponentMap[_iconType];
    }
  }
};

exports.appendIconComponentCache = appendIconComponentCache;

var EuiIcon = /*#__PURE__*/function (_PureComponent) {
  _inherits(EuiIcon, _PureComponent);

  var _super = _createSuper(EuiIcon);

  function EuiIcon(props) {
    var _this;

    _classCallCheck(this, EuiIcon);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isMounted", true);

    _defineProperty(_assertThisInitialized(_this), "loadIconComponent", function (iconType) {
      if (iconComponentCache.hasOwnProperty(iconType)) {
        // exists in cache
        _this.setState({
          isLoading: false,
          neededLoading: false,
          icon: iconComponentCache[iconType]
        });

        _this.onIconLoad();

        return;
      }

      Promise.resolve("".concat(
      /* webpackChunkName: "icon.[request]" */
      // It's important that we don't use a template string here, it
      // stops webpack from building a dynamic require context.
      // eslint-disable-next-line prefer-template
      './assets/' + typeToPathMap[iconType] + '.js')).then(function (s) {
        return _interopRequireWildcard(require(s));
      }).then(function (_ref) {
        var icon = _ref.icon;
        iconComponentCache[iconType] = icon;
        (0, _react2.enqueueStateChange)(function () {
          if (_this.isMounted && _this.props.type === iconType) {
            _this.setState({
              icon: icon,
              iconTitle: iconType,
              isLoading: false
            }, _this.onIconLoad);
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onIconLoad", function () {
      var onIconLoad = _this.props.onIconLoad;

      if (onIconLoad) {
        onIconLoad();
      }
    });

    var type = props.type;
    var initialIcon = getInitialIcon(type);
    var isLoading = false;

    if (isEuiIconType(type) && initialIcon == null) {
      isLoading = true;

      _this.loadIconComponent(type);
    } else {
      _this.onIconLoad();
    }

    _this.state = {
      icon: initialIcon,
      iconTitle: undefined,
      isLoading: isLoading,
      neededLoading: isLoading
    };
    return _this;
  }

  _createClass(EuiIcon, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var type = this.props.type;

      if (type !== prevProps.type) {
        if (isEuiIconType(type)) {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            neededLoading: iconComponentCache.hasOwnProperty(type),
            isLoading: true
          });
          this.loadIconComponent(type);
        } else {
          // eslint-disable-next-line react/no-did-update-set-state
          this.setState({
            icon: type,
            neededLoading: true,
            isLoading: false
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          _this$props$size = _this$props.size,
          size = _this$props$size === void 0 ? 'm' : _this$props$size,
          color = _this$props.color,
          className = _this$props.className,
          tabIndex = _this$props.tabIndex,
          title = _this$props.title,
          onIconLoad = _this$props.onIconLoad,
          rest = _objectWithoutProperties(_this$props, ["type", "size", "color", "className", "tabIndex", "title", "onIconLoad"]);

      var _this$state = this.state,
          isLoading = _this$state.isLoading,
          neededLoading = _this$state.neededLoading;
      var optionalColorClass = null;
      var optionalCustomStyles = null;

      if (color) {
        if (isNamedColor(color)) {
          optionalColorClass = colorToClassMap[color];
        } else {
          optionalCustomStyles = {
            color: color
          };
          optionalColorClass = 'euiIcon--customColor';
        }
      } // These icons are a little special and get some extra CSS flexibility


      var isAppIcon = type && typeof type === 'string' && (/.+App$/.test(type) || /.+Job$/.test(type) || type === 'dataVisualizer');
      var classes = (0, _classnames.default)('euiIcon', sizeToClassNameMap[size], optionalColorClass, {
        'euiIcon--app': isAppIcon,
        'euiIcon-isLoading': isLoading,
        'euiIcon-isLoaded': !isLoading && neededLoading
      }, className);
      var icon = this.state.icon || _empty.icon; // This is a fix for IE and Edge, which ignores tabindex="-1" on an SVG, but respects
      // focusable="false".
      //   - If there's no tab index specified, we'll default the icon to not be focusable,
      //     which is how SVGs behave in Chrome, Safari, and FF.
      //   - If tab index is -1, then the consumer wants the icon to not be focusable.
      //   - For all other values, the consumer wants the icon to be focusable.

      var focusable = tabIndex == null || tabIndex === -1 ? 'false' : 'true';

      if (typeof icon === 'string') {
        return /*#__PURE__*/_react.default.createElement("img", _extends({
          alt: title ? title : '',
          src: icon,
          className: classes,
          tabIndex: tabIndex
        }, rest));
      } else {
        var Svg = icon; // If it's an empty icon, or if there is no aria-label, aria-labelledby, or title it gets aria-hidden true

        var isAriaHidden = icon === _empty.icon || !(this.props['aria-label'] || this.props['aria-labelledby'] || this.props.title);
        var hideIconEmpty = isAriaHidden && {
          'aria-hidden': true
        };
        var titleId; // If no aria-label or aria-labelledby is provided but there's a title, a titleId is generated
        //  The svg aria-labelledby attribute gets this titleId
        //  The svg title element gets this titleId as an id

        if (!this.props['aria-label'] && !this.props['aria-labelledby'] && title) {
          titleId = {
            titleId: generateId()
          };
        }

        return /*#__PURE__*/_react.default.createElement(Svg, _extends({
          className: classes,
          style: optionalCustomStyles,
          tabIndex: tabIndex,
          focusable: focusable,
          role: "img",
          title: title
        }, titleId, rest, hideIconEmpty));
      }
    }
  }]);

  return EuiIcon;
}(_react.PureComponent);

exports.EuiIcon = EuiIcon;
EuiIcon.propTypes = {
  className: _propTypes.default.string,
  "aria-label": _propTypes.default.string,
  "data-test-subj": _propTypes.default.string,

  /**
       * `Enum` is any of the named icons listed in the docs, `string` is usually a URL to an SVG file, and `elementType` is any React SVG component
       */
  type: _propTypes.default.oneOfType([_propTypes.default.oneOf(["accessibility", "addDataApp", "advancedSettingsApp", "aggregate", "alert", "analyzeEvent", "annotation", "apmApp", "apmTrace", "apps", "appSearchApp", "arrowDown", "arrowLeft", "arrowRight", "arrowUp", "asterisk", "auditbeatApp", "beaker", "bell", "bellSlash", "bolt", "boxesHorizontal", "boxesVertical", "branch", "broom", "brush", "bug", "bullseye", "calendar", "canvasApp", "codeApp", "check", "checkInCircleFilled", "cheer", "classificationJob", "clock", "cloudDrizzle", "cloudStormy", "cloudSunny", "compute", "console", "consoleApp", "controlsHorizontal", "controlsVertical", "copy", "copyClipboard", "createAdvancedJob", "createMultiMetricJob", "createPopulationJob", "createSingleMetricJob", "cross", "crossClusterReplicationApp", "crosshairs", "crossInACircleFilled", "currency", "cut", "dashboardApp", "database", "dataVisualizer", "devToolsApp", "discoverApp", "document", "documentEdit", "documents", "dot", "download", "editorAlignCenter", "editorAlignLeft", "editorAlignRight", "editorBold", "editorCodeBlock", "editorComment", "editorDistributeHorizontal", "editorDistributeVertical", "editorHeading", "editorItalic", "editorItemAlignLeft", "editorItemAlignBottom", "editorItemAlignCenter", "editorItemAlignMiddle", "editorItemAlignRight", "editorItemAlignTop", "editorLink", "editorOrderedList", "editorPositionBottomLeft", "editorPositionBottomRight", "editorPositionTopLeft", "editorPositionTopRight", "editorRedo", "editorStrike", "editorTable", "editorUnderline", "editorUndo", "editorUnorderedList", "email", "empty", "emsApp", "eql", "exit", "expand", "expandMini", "exportAction", "eye", "eyeClosed", "faceHappy", "faceNeutral", "faceSad", "filebeatApp", "filter", "flag", "fold", "folderCheck", "folderClosed", "folderExclamation", "folderOpen", "fullScreen", "gear", "gisApp", "glasses", "globe", "grab", "grabHorizontal", "graphApp", "grid", "grokApp", "heart", "heartbeatApp", "heatmap", "help", "home", "iInCircle", "image", "importAction", "indexClose", "indexEdit", "indexFlush", "indexManagementApp", "indexMapping", "indexOpen", "indexPatternApp", "indexRollupApp", "indexRuntime", "indexSettings", "inputOutput", "inspect", "invert", "ip", "keyboardShortcut", "kqlField", "kqlFunction", "kqlOperand", "kqlSelector", "kqlValue", "lensApp", "link", "list", "listAdd", "lock", "lockOpen", "logsApp", "logoAerospike", "logoApache", "logoAppSearch", "logoAWS", "logoAWSMono", "logoAzure", "logoAzureMono", "logoBeats", "logoBusinessAnalytics", "logoCeph", "logoCloud", "logoCloudEnterprise", "logoCode", "logoCodesandbox", "logoCouchbase", "logoDocker", "logoDropwizard", "logoElastic", "logoElasticsearch", "logoElasticStack", "logoEnterpriseSearch", "logoEtcd", "logoGCP", "logoGCPMono", "logoGithub", "logoGmail", "logoGolang", "logoGoogleG", "logoHAproxy", "logoIBM", "logoIBMMono", "logoKafka", "logoKibana", "logoKubernetes", "logoLogging", "logoLogstash", "logoMaps", "logoMemcached", "logoMetrics", "logoMongodb", "logoMySQL", "logoNginx", "logoObservability", "logoOsquery", "logoPhp", "logoPostgres", "logoPrometheus", "logoRabbitmq", "logoRedis", "logoSecurity", "logoSiteSearch", "logoSketch", "logoSlack", "logoUptime", "logoWebhook", "logoWindows", "logoWorkplaceSearch", "logstashFilter", "logstashIf", "logstashInput", "logstashOutput", "logstashQueue", "machineLearningApp", "magnet", "magnifyWithMinus", "magnifyWithPlus", "managementApp", "mapMarker", "memory", "menu", "menuDown", "menuLeft", "menuRight", "menuUp", "merge", "metricbeatApp", "metricsApp", "minimize", "minus", "minusInCircle", "minusInCircleFilled", "monitoringApp", "moon", "nested", "node", "notebookApp", "number", "offline", "online", "outlierDetectionJob", "package", "packetbeatApp", "pageSelect", "pagesSelect", "partial", "paperClip", "pause", "pencil", "pin", "pinFilled", "pipelineApp", "play", "plus", "plusInCircle", "plusInCircleFilled", "popout", "push", "questionInCircle", "quote", "recentlyViewedApp", "refresh", "regressionJob", "reporter", "reportingApp", "returnKey", "save", "savedObjectsApp", "scale", "search", "searchProfilerApp", "securityAnalyticsApp", "securityApp", "securitySignal", "securitySignalDetected", "securitySignalResolved", "shard", "share", "snowflake", "sortable", "sortDown", "sortLeft", "sortRight", "sortUp", "spacesApp", "sqlApp", "starEmpty", "starEmptySpace", "starFilled", "starFilledSpace", "starMinusEmpty", "starMinusFilled", "starPlusEmpty", "starPlusFilled", "stats", "stop", "stopFilled", "stopSlash", "storage", "string", "submodule", "swatchInput", "symlink", "tableOfContents", "tableDensityExpanded", "tableDensityCompact", "tableDensityNormal", "tag", "tear", "temperature", "timeline", "timelionApp", "training", "trash", "upgradeAssistantApp", "uptimeApp", "unfold", "unlink", "user", "users", "usersRolesApp", "vector", "videoPlayer", "visArea", "visAreaStacked", "visBarHorizontal", "visBarHorizontalStacked", "visBarVertical", "visBarVerticalStacked", "visGauge", "visGoal", "visLine", "visMapCoordinate", "visMapRegion", "visMetric", "visPie", "visTable", "visTagCloud", "visText", "visTimelion", "visualizeApp", "visVega", "visVisualBuilder", "watchesApp", "workplaceSearchApp", "wrench", "tokenClass", "tokenProperty", "tokenEnum", "tokenVariable", "tokenMethod", "tokenAnnotation", "tokenException", "tokenInterface", "tokenParameter", "tokenField", "tokenElement", "tokenFunction", "tokenBoolean", "tokenString", "tokenArray", "tokenNumber", "tokenConstant", "tokenObject", "tokenEvent", "tokenKey", "tokenNull", "tokenStruct", "tokenPackage", "tokenOperator", "tokenEnumMember", "tokenRepo", "tokenSymbol", "tokenFile", "tokenModule", "tokenNamespace", "tokenDate", "tokenIP", "tokenNested", "tokenAlias", "tokenShape", "tokenGeo", "tokenRange", "tokenBinary", "tokenJoin", "tokenPercolator", "tokenFlattened", "tokenRankFeature", "tokenRankFeatures", "tokenKeyword", "tokenCompletionSuggester", "tokenDenseVector", "tokenText", "tokenTokenCount", "tokenSearchType", "tokenHistogram"]).isRequired, _propTypes.default.string.isRequired, _propTypes.default.elementType.isRequired]).isRequired,

  /**
       * One of EUI's color palette or a valid CSS color value https://developer.mozilla.org/en-US/docs/Web/CSS/color_value.
       * Note that coloring only works if your SVG is removed of fill attributes.
       */
  color: _propTypes.default.oneOfType([_propTypes.default.string.isRequired, _propTypes.default.oneOf(["default", "primary", "secondary", "success", "accent", "warning", "danger", "text", "subdued", "ghost"]).isRequired]),

  /**
       * Note that every size other than `original` assumes the provided SVG sits on a square viewbox.
       */
  size: _propTypes.default.oneOf(["original", "s", "m", "l", "xl", "xxl"]),

  /**
       * Descriptive title for naming the icon based on its use
       */
  title: _propTypes.default.string,

  /**
       * A unique identifier for the title element
       */
  titleId: _propTypes.default.string,

  /**
       * Its value should be one or more element IDs
       */
  "aria-labelledby": _propTypes.default.string,

  /**
       * Callback when the icon has been loaded & rendered
       */
  onIconLoad: _propTypes.default.func
};