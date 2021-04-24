"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EUI_SPARKLINE_THEME_PARTIAL = exports.EUI_CHARTS_THEME_DARK = exports.EUI_CHARTS_THEME_LIGHT = void 0;

var _eui_palettes = require("../../services/color/eui_palettes");

var _visualization_colors = require("../../services/color/visualization_colors");

var _colors = _interopRequireDefault(require("!!sass-vars-to-js-loader!../../global_styling/variables/_colors.scss"));

var _eui_colors_dark = _interopRequireDefault(require("!!sass-vars-to-js-loader!../../themes/eui/eui_colors_dark.scss"));

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
// @ts-ignore typescript doesn't understand the webpack loader
// @ts-ignore typescript doesn't understand the webpack loader
var fontFamily = "'Inter UI', -apple-system, BlinkMacSystemFont,\n  'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";

function createTheme(colors) {
  return {
    lineAnnotation: {
      line: {
        strokeWidth: 1,
        stroke: colors.euiColorDarkShade.rgba,
        opacity: 1
      },
      details: {
        fontSize: 10,
        fontFamily: fontFamily,
        fill: colors.euiColorDarkShade.rgba,
        padding: 0
      }
    },
    partition: {
      fontFamily: fontFamily,
      minFontSize: 8,
      maxFontSize: 16,
      fillLabel: {
        textInvertible: false,
        valueFont: {
          fontWeight: 700
        }
      },
      linkLabel: {
        maxCount: 5,
        fontSize: 11,
        textColor: colors.euiColorDarkestShade.rgba
      },
      outerSizeRatio: 1,
      circlePadding: 4,
      sectorLineStroke: colors.euiColorEmptyShade.rgba,
      sectorLineWidth: 1.5
    },
    theme: {
      background: {
        color: colors.euiColorEmptyShade.rgba
      },
      chartMargins: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      },
      lineSeriesStyle: {
        line: {
          strokeWidth: 2
        },
        point: {
          fill: colors.euiColorEmptyShade.rgba,
          strokeWidth: 2,
          radius: 3
        }
      },
      areaSeriesStyle: {
        area: {
          opacity: 0.3
        },
        line: {
          strokeWidth: 2
        },
        point: {
          visible: false,
          fill: colors.euiColorEmptyShade.rgba,
          strokeWidth: 2,
          radius: 3
        }
      },
      barSeriesStyle: {
        displayValue: {
          fontSize: 8,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkShade.rgba
        }
      },
      scales: {
        barsPadding: 0.25,
        histogramPadding: 0.05
      },
      axes: {
        axisTitle: {
          fontSize: 12,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkestShade.rgba,
          padding: {
            inner: 10,
            outer: 0
          }
        },
        axisLine: {
          stroke: colors.euiColorChartLines.rgba
        },
        tickLabel: {
          fontSize: 10,
          fontFamily: fontFamily,
          fill: colors.euiColorDarkShade.rgba,
          padding: {
            outer: 8,
            inner: 10
          }
        },
        tickLine: {
          visible: false,
          stroke: colors.euiColorChartLines.rgba,
          strokeWidth: 1
        },
        gridLine: {
          horizontal: {
            visible: true,
            stroke: colors.euiColorChartLines.rgba,
            strokeWidth: 1,
            opacity: 1,
            dash: [0, 0]
          },
          vertical: {
            visible: true,
            stroke: colors.euiColorChartLines.rgba,
            strokeWidth: 1,
            opacity: 1,
            dash: [4, 4]
          }
        }
      },
      colors: {
        vizColors: (0, _eui_palettes.euiPaletteColorBlind)({
          sortBy: 'natural'
        }),
        defaultVizColor: _visualization_colors.DEFAULT_VISUALIZATION_COLOR
      },
      crosshair: {
        band: {
          fill: colors.euiColorChartBand.rgba
        },
        line: {
          stroke: colors.euiColorDarkShade.rgba,
          strokeWidth: 1,
          dash: [4, 4]
        },
        crossLine: {
          stroke: colors.euiColorDarkShade.rgba,
          strokeWidth: 1,
          dash: [4, 4]
        }
      }
    }
  };
}

var EUI_CHARTS_THEME_LIGHT = createTheme(_colors.default);
exports.EUI_CHARTS_THEME_LIGHT = EUI_CHARTS_THEME_LIGHT;
var EUI_CHARTS_THEME_DARK = createTheme(_eui_colors_dark.default);
exports.EUI_CHARTS_THEME_DARK = EUI_CHARTS_THEME_DARK;
var EUI_SPARKLINE_THEME_PARTIAL = {
  lineSeriesStyle: {
    point: {
      visible: false,
      strokeWidth: 1,
      radius: 1
    }
  },
  areaSeriesStyle: {
    point: {
      visible: false,
      strokeWidth: 1,
      radius: 1
    }
  }
};
exports.EUI_SPARKLINE_THEME_PARTIAL = EUI_SPARKLINE_THEME_PARTIAL;