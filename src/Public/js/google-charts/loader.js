(function () {
  /*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */
  "use strict";
  var l;
  function aa(a) {
    var b = 0;
    return function () {
      return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
    };
  }
  function ba(a) {
    var b =
      "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : { next: aa(a) };
  }
  function n(a) {
    if (!(a instanceof Array)) {
      a = ba(a);
      for (var b, c = []; !(b = a.next()).done; ) c.push(b.value);
      a = c;
    }
    return a;
  }
  var ca =
    "function" == typeof Object.defineProperties
      ? Object.defineProperty
      : function (a, b, c) {
          if (a == Array.prototype || a == Object.prototype) return a;
          a[b] = c.value;
          return a;
        };
  function da(a) {
    a = [
      "object" == typeof globalThis && globalThis,
      a,
      "object" == typeof window && window,
      "object" == typeof self && self,
      "object" == typeof global && global
    ];
    for (var b = 0; b < a.length; ++b) {
      var c = a[b];
      if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
  }
  var ea = da(this);
  function p(a, b) {
    if (b)
      a: {
        var c = ea;
        a = a.split(".");
        for (var d = 0; d < a.length - 1; d++) {
          var e = a[d];
          if (!(e in c)) break a;
          c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d &&
          null != b &&
          ca(c, a, { configurable: !0, writable: !0, value: b });
      }
  }
  p("Promise", function (a) {
    function b(f) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h = this.f();
      try {
        f(h.resolve, h.reject);
      } catch (k) {
        h.reject(k);
      }
    }
    function c() {
      this.a = null;
    }
    function d(f) {
      return f instanceof b
        ? f
        : new b(function (h) {
            h(f);
          });
    }
    if (a) return a;
    c.prototype.b = function (f) {
      if (null == this.a) {
        this.a = [];
        var h = this;
        this.c(function () {
          h.h();
        });
      }
      this.a.push(f);
    };
    var e = ea.setTimeout;
    c.prototype.c = function (f) {
      e(f, 0);
    };
    c.prototype.h = function () {
      for (; this.a && this.a.length; ) {
        var f = this.a;
        this.a = [];
        for (var h = 0; h < f.length; ++h) {
          var k = f[h];
          f[h] = null;
          try {
            k();
          } catch (m) {
            this.f(m);
          }
        }
      }
      this.a = null;
    };
    c.prototype.f = function (f) {
      this.c(function () {
        throw f;
      });
    };
    b.prototype.f = function () {
      function f(m) {
        return function (r) {
          k || ((k = !0), m.call(h, r));
        };
      }
      var h = this,
        k = !1;
      return { resolve: f(this.u), reject: f(this.h) };
    };
    b.prototype.u = function (f) {
      if (f === this)
        this.h(new TypeError("A Promise cannot resolve to itself"));
      else if (f instanceof b) this.D(f);
      else {
        a: switch (typeof f) {
          case "object":
            var h = null != f;
            break a;
          case "function":
            h = !0;
            break a;
          default:
            h = !1;
        }
        h ? this.s(f) : this.i(f);
      }
    };
    b.prototype.s = function (f) {
      var h = void 0;
      try {
        h = f.then;
      } catch (k) {
        this.h(k);
        return;
      }
      "function" == typeof h ? this.F(h, f) : this.i(f);
    };
    b.prototype.h = function (f) {
      this.j(2, f);
    };
    b.prototype.i = function (f) {
      this.j(1, f);
    };
    b.prototype.j = function (f, h) {
      if (0 != this.b)
        throw Error(
          "Cannot settle(" +
            f +
            ", " +
            h +
            "): Promise already settled in state" +
            this.b
        );
      this.b = f;
      this.c = h;
      this.l();
    };
    b.prototype.l = function () {
      if (null != this.a) {
        for (var f = 0; f < this.a.length; ++f) g.b(this.a[f]);
        this.a = null;
      }
    };
    var g = new c();
    b.prototype.D = function (f) {
      var h = this.f();
      f.C(h.resolve, h.reject);
    };
    b.prototype.F = function (f, h) {
      var k = this.f();
      try {
        f.call(h, k.resolve, k.reject);
      } catch (m) {
        k.reject(m);
      }
    };
    b.prototype.then = function (f, h) {
      function k(w, A) {
        return "function" == typeof w
          ? function (na) {
              try {
                m(w(na));
              } catch (oa) {
                r(oa);
              }
            }
          : A;
      }
      var m,
        r,
        pa = new b(function (w, A) {
          m = w;
          r = A;
        });
      this.C(k(f, m), k(h, r));
      return pa;
    };
    b.prototype.catch = function (f) {
      return this.then(void 0, f);
    };
    b.prototype.C = function (f, h) {
      function k() {
        switch (m.b) {
          case 1:
            f(m.c);
            break;
          case 2:
            h(m.c);
            break;
          default:
            throw Error("Unexpected state: " + m.b);
        }
      }
      var m = this;
      null == this.a ? g.b(k) : this.a.push(k);
    };
    b.resolve = d;
    b.reject = function (f) {
      return new b(function (h, k) {
        k(f);
      });
    };
    b.race = function (f) {
      return new b(function (h, k) {
        for (var m = ba(f), r = m.next(); !r.done; r = m.next())
          d(r.value).C(h, k);
      });
    };
    b.all = function (f) {
      var h = ba(f),
        k = h.next();
      return k.done
        ? d([])
        : new b(function (m, r) {
            function pa(na) {
              return function (oa) {
                w[na] = oa;
                A--;
                0 == A && m(w);
              };
            }
            var w = [],
              A = 0;
            do
              w.push(void 0),
                A++,
                d(k.value).C(pa(w.length - 1), r),
                (k = h.next());
            while (!k.done);
          });
    };
    return b;
  });
  p("Object.is", function (a) {
    return a
      ? a
      : function (b, c) {
          return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
        };
  });
  p("Array.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          var d = this;
          d instanceof String && (d = String(d));
          var e = d.length;
          c = c || 0;
          for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
            var g = d[c];
            if (g === b || Object.is(g, b)) return !0;
          }
          return !1;
        };
  });
  p("String.prototype.includes", function (a) {
    return a
      ? a
      : function (b, c) {
          if (null == this)
            throw new TypeError(
              "The 'this' value for String.prototype.includes must not be null or undefined"
            );
          if (b instanceof RegExp)
            throw new TypeError(
              "First argument to String.prototype.includes must not be a regular expression"
            );
          return -1 !== this.indexOf(b, c || 0);
        };
  });
  var q = this || self,
    fa = /^[\w+/_-]+[=]{0,2}$/,
    ha = null;
  function ia(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) &&
      (a = a.nonce || a.getAttribute("nonce")) &&
      fa.test(a)
      ? a
      : "";
  }
  function t(a) {
    a = a.split(".");
    for (var b = q, c = 0; c < a.length; c++)
      if (((b = b[a[c]]), null == b)) return null;
    return b;
  }
  function u() {}
  function ja(a) {
    var b = typeof a;
    return "object" != b ? b : a ? (Array.isArray(a) ? "array" : b) : "null";
  }
  function v(a) {
    return "function" == ja(a);
  }
  function ka(a) {
    var b = typeof a;
    return ("object" == b && null != a) || "function" == b;
  }
  function la(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }
  function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }
    return function () {
      return a.apply(b, arguments);
    };
  }
  function x(a, b, c) {
    Function.prototype.bind &&
    -1 != Function.prototype.bind.toString().indexOf("native code")
      ? (x = la)
      : (x = ma);
    return x.apply(null, arguments);
  }
  function y(a, b) {
    a = a.split(".");
    var c = q;
    a[0] in c ||
      "undefined" == typeof c.execScript ||
      c.execScript("var " + a[0]);
    for (var d; a.length && (d = a.shift()); )
      a.length || void 0 === b
        ? c[d] && c[d] !== Object.prototype[d]
          ? (c = c[d])
          : (c = c[d] = {})
        : (c[d] = b);
  }
  function z(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;
  }
  function qa(a) {
    return a;
  }
  function B(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, B);
    else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }
  z(B, Error);
  B.prototype.name = "CustomError";
  function C(a, b) {
    this.a = (a === ra && b) || "";
    this.b = sa;
  }
  C.prototype.L = !0;
  C.prototype.K = function () {
    return this.a;
  };
  function ta(a) {
    return a instanceof C && a.constructor === C && a.b === sa
      ? a.a
      : "type_error:Const";
  }
  function D(a) {
    return new C(ra, a);
  }
  var sa = {},
    ra = {};
  var E = { g: {} };
  E.g.G = {
    Y: {
      "gstatic.com": {
        loader: D("https://www.gstatic.com/charts/%{version}/loader.js"),
        debug: D(
          "https://www.gstatic.com/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"
        ),
        debug_i18n: D(
          "https://www.gstatic.com/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"
        ),
        compiled: D(
          "https://www.gstatic.com/charts/%{version}/js/jsapi_compiled_%{package}_module.js"
        ),
        compiled_i18n: D(
          "https://www.gstatic.com/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"
        ),
        css: D(
          "https://www.gstatic.com/charts/%{version}/css/%{subdir}/%{filename}"
        ),
        css2: D(
          "https://www.gstatic.com/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"
        ),
        third_party: D(
          "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"
        ),
        third_party2: D(
          "https://www.gstatic.com/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"
        ),
        third_party_gen: D(
          "https://www.gstatic.com/charts/%{version}/third_party/%{subdir}/%{filename}"
        )
      },
      "gstatic.cn": {
        loader: D("https://www.gstatic.cn/charts/%{version}/loader.js"),
        debug: D(
          "https://www.gstatic.cn/charts/debug/%{version}/js/jsapi_debug_%{package}_module.js"
        ),
        debug_i18n: D(
          "https://www.gstatic.cn/charts/debug/%{version}/i18n/jsapi_debug_i18n_%{package}_module__%{language}.js"
        ),
        compiled: D(
          "https://www.gstatic.cn/charts/%{version}/js/jsapi_compiled_%{package}_module.js"
        ),
        compiled_i18n: D(
          "https://www.gstatic.cn/charts/%{version}/i18n/jsapi_compiled_i18n_%{package}_module__%{language}.js"
        ),
        css: D(
          "https://www.gstatic.cn/charts/%{version}/css/%{subdir}/%{filename}"
        ),
        css2: D(
          "https://www.gstatic.cn/charts/%{version}/css/%{subdir1}/%{subdir2}/%{filename}"
        ),
        third_party: D(
          "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"
        ),
        third_party2: D(
          "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir1}/%{subdir2}/%{filename}"
        ),
        third_party_gen: D(
          "https://www.gstatic.cn/charts/%{version}/third_party/%{subdir}/%{filename}"
        )
      }
    },
    R: ["default"],
    ca: {
      format: [],
      default: ["format"],
      ui: ["default"],
      ui_base: ["default"],
      flashui: ["ui"],
      fw: ["ui"],
      annotatedtimeline: ["annotationchart"],
      annotationchart: ["ui", "controls", "corechart", "table"],
      areachart: "browserchart",
      bar: ["fw", "dygraph", "webfontloader"],
      barchart: "browserchart",
      browserchart: ["ui"],
      bubbles: ["fw", "d3"],
      calendar: ["fw"],
      charteditor: "ui corechart imagechart annotatedtimeline gauge motionchart orgchart table".split(
        " "
      ),
      charteditor_base: "ui_base corechart imagechart annotatedtimeline gauge motionchart orgchart table_base".split(
        " "
      ),
      circles: ["fw", "d3"],
      clusterchart: ["corechart", "d3"],
      columnchart: "browserchart",
      controls: ["ui"],
      controls_base: ["ui_base"],
      corechart: ["ui"],
      gantt: ["fw", "dygraph"],
      gauge: ["ui"],
      geochart: ["ui"],
      geomap: ["flashui"],
      geomap_base: ["ui_base"],
      heatmap: ["vegachart"],
      helloworld: ["fw"],
      imagechart: ["ui"],
      imageareachart: "imagechart",
      imagebarchart: "imagechart",
      imagelinechart: "imagechart",
      imagepiechart: "imagechart",
      imagesparkline: "imagechart",
      line: ["fw", "dygraph", "webfontloader"],
      linechart: "browserchart",
      map: ["ui"],
      motionchart: ["flashui"],
      orgchart: ["ui"],
      overtimecharts: ["ui", "corechart"],
      piechart: "browserchart",
      sankey: ["fw", "d3", "d3.sankey"],
      scatter: ["fw", "dygraph", "webfontloader"],
      scatterchart: "browserchart",
      sunburst: ["fw", "d3"],
      streamgraph: ["fw", "d3"],
      table: ["ui"],
      table_base: ["ui_base"],
      timeline: ["fw", "ui", "dygraph"],
      treemap: ["ui"],
      wordtree: ["ui"]
    },
    ua: {
      d3: { subdir1: "d3", subdir2: "v5", filename: "d3.js" },
      "d3.sankey": {
        subdir1: "d3_sankey",
        subdir2: "v4",
        filename: "d3.sankey.js"
      },
      webfontloader: { subdir: "webfontloader", filename: "webfont.js" }
    },
    ta: {
      dygraph: { subdir: "dygraphs", filename: "dygraph-tickers-combined.js" },
      vegaLib: { subdir: "vega", filename: "vega-bundle.js" }
    },
    ba: {
      default: [{ subdir: "core", filename: "tooltip.css" }],
      annotationchart: [
        { subdir: "annotationchart", filename: "annotationchart.css" }
      ],
      charteditor: [{ subdir: "charteditor", filename: "charteditor.css" }],
      charteditor_base: [
        { subdir: "charteditor_base", filename: "charteditor_base.css" }
      ],
      controls: [{ subdir: "controls", filename: "controls.css" }],
      imagesparkline: [
        { subdir: "imagechart", filename: "imagesparkline.css" }
      ],
      orgchart: [{ subdir: "orgchart", filename: "orgchart.css" }],
      table: [
        { subdir: "table", filename: "table.css" },
        { subdir: "util", filename: "format.css" }
      ],
      table_base: [
        { subdir: "util", filename: "format.css" },
        { subdir: "table", filename: "table_base.css" }
      ],
      ui: [{ subdir: "util", filename: "util.css" }],
      ui_base: [{ subdir: "util", filename: "util_base.css" }]
    }
  };
  E.g.P = {
    T: {
      "chrome-frame": {
        versions: {
          "1.0.0": {
            uncompressed: "CFInstall.js",
            compressed: "CFInstall.min.js"
          },
          "1.0.1": {
            uncompressed: "CFInstall.js",
            compressed: "CFInstall.min.js"
          },
          "1.0.2": {
            uncompressed: "CFInstall.js",
            compressed: "CFInstall.min.js"
          }
        },
        aliases: { 1: "1.0.2", "1.0": "1.0.2" }
      },
      swfobject: {
        versions: {
          "2.1": {
            uncompressed: "swfobject_src.js",
            compressed: "swfobject.js"
          },
          "2.2": {
            uncompressed: "swfobject_src.js",
            compressed: "swfobject.js"
          }
        },
        aliases: { 2: "2.2" }
      },
      "ext-core": {
        versions: {
          "3.1.0": {
            uncompressed: "ext-core-debug.js",
            compressed: "ext-core.js"
          },
          "3.0.0": {
            uncompressed: "ext-core-debug.js",
            compressed: "ext-core.js"
          }
        },
        aliases: { 3: "3.1.0", "3.0": "3.0.0", "3.1": "3.1.0" }
      },
      scriptaculous: {
        versions: {
          "1.8.3": {
            uncompressed: "scriptaculous.js",
            compressed: "scriptaculous.js"
          },
          "1.9.0": {
            uncompressed: "scriptaculous.js",
            compressed: "scriptaculous.js"
          },
          "1.8.1": {
            uncompressed: "scriptaculous.js",
            compressed: "scriptaculous.js"
          },
          "1.8.2": {
            uncompressed: "scriptaculous.js",
            compressed: "scriptaculous.js"
          }
        },
        aliases: { 1: "1.9.0", "1.8": "1.8.3", "1.9": "1.9.0" }
      },
      webfont: {
        versions: {
          "1.0.12": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.13": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.14": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.15": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.10": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.11": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.27": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.28": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.29": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.23": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.24": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.25": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.26": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.21": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.22": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.3": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.4": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.5": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.6": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.9": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.16": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.17": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.0": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.18": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.1": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.19": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          },
          "1.0.2": {
            uncompressed: "webfont_debug.js",
            compressed: "webfont.js"
          }
        },
        aliases: { 1: "1.0.29", "1.0": "1.0.29" }
      },
      jqueryui: {
        versions: {
          "1.8.17": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.16": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.15": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.14": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.4": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.13": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.5": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.12": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.6": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.11": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.7": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.10": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.8": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.9": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.6.0": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.7.0": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.5.2": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.0": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.7.1": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.5.3": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.1": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.7.2": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.8.2": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          },
          "1.7.3": {
            uncompressed: "jquery-ui.js",
            compressed: "jquery-ui.min.js"
          }
        },
        aliases: {
          1: "1.8.17",
          "1.5": "1.5.3",
          "1.6": "1.6.0",
          "1.7": "1.7.3",
          "1.8": "1.8.17",
          "1.8.3": "1.8.4"
        }
      },
      mootools: {
        versions: {
          "1.3.0": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.2.1": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.1.2": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.4.0": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.3.1": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.2.2": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.4.1": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.3.2": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.2.3": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.4.2": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.2.4": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.2.5": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          },
          "1.1.1": {
            uncompressed: "mootools.js",
            compressed: "mootools-yui-compressed.js"
          }
        },
        aliases: {
          1: "1.1.2",
          "1.1": "1.1.2",
          "1.2": "1.2.5",
          "1.3": "1.3.2",
          "1.4": "1.4.2",
          "1.11": "1.1.1"
        }
      },
      yui: {
        versions: {
          "2.8.0r4": {
            uncompressed: "build/yuiloader/yuiloader.js",
            compressed: "build/yuiloader/yuiloader-min.js"
          },
          "2.9.0": {
            uncompressed: "build/yuiloader/yuiloader.js",
            compressed: "build/yuiloader/yuiloader-min.js"
          },
          "2.8.1": {
            uncompressed: "build/yuiloader/yuiloader.js",
            compressed: "build/yuiloader/yuiloader-min.js"
          },
          "2.6.0": {
            uncompressed: "build/yuiloader/yuiloader.js",
            compressed: "build/yuiloader/yuiloader-min.js"
          },
          "2.7.0": {
            uncompressed: "build/yuiloader/yuiloader.js",
            compressed: "build/yuiloader/yuiloader-min.js"
          },
          "3.3.0": {
            uncompressed: "build/yui/yui.js",
            compressed: "build/yui/yui-min.js"
          },
          "2.8.2r1": {
            uncompressed: "build/yuiloader/yuiloader.js",
            compressed: "build/yuiloader/yuiloader-min.js"
          }
        },
        aliases: {
          2: "2.9.0",
          "2.6": "2.6.0",
          "2.7": "2.7.0",
          "2.8": "2.8.2r1",
          "2.8.0": "2.8.0r4",
          "2.8.2": "2.8.2r1",
          "2.9": "2.9.0",
          3: "3.3.0",
          "3.3": "3.3.0"
        }
      },
      prototype: {
        versions: {
          "1.6.1.0": {
            uncompressed: "prototype.js",
            compressed: "prototype.js"
          },
          "1.6.0.2": {
            uncompressed: "prototype.js",
            compressed: "prototype.js"
          },
          "1.7.0.0": {
            uncompressed: "prototype.js",
            compressed: "prototype.js"
          },
          "1.6.0.3": {
            uncompressed: "prototype.js",
            compressed: "prototype.js"
          }
        },
        aliases: {
          1: "1.7.0.0",
          "1.6": "1.6.1.0",
          "1.6.0": "1.6.0.3",
          "1.6.1": "1.6.1.0",
          "1.7": "1.7.0.0",
          "1.7.0": "1.7.0.0"
        }
      },
      jquery: {
        versions: {
          "1.2.3": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.2.6": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.3.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.3.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.3.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.4.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.4.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.4.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.4.3": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.4.4": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.5.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.5.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.5.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.6.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.6.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.6.2": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.6.3": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.6.4": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.7.0": { uncompressed: "jquery.js", compressed: "jquery.min.js" },
          "1.7.1": { uncompressed: "jquery.js", compressed: "jquery.min.js" }
        },
        aliases: {
          1: "1.7.1",
          "1.2": "1.2.6",
          "1.3": "1.3.2",
          "1.4": "1.4.4",
          "1.5": "1.5.2",
          "1.6": "1.6.4",
          "1.7": "1.7.1"
        }
      },
      dojo: {
        versions: {
          "1.3.0": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.4.0": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.3.1": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.5.0": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.4.1": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.3.2": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.2.3": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.6.0": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.5.1": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.7.0": {
            uncompressed: "dojo/dojo.js.uncompressed.js",
            compressed: "dojo/dojo.js"
          },
          "1.6.1": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.4.3": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.7.1": {
            uncompressed: "dojo/dojo.js.uncompressed.js",
            compressed: "dojo/dojo.js"
          },
          "1.7.2": {
            uncompressed: "dojo/dojo.js.uncompressed.js",
            compressed: "dojo/dojo.js"
          },
          "1.2.0": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          },
          "1.1.1": {
            uncompressed: "dojo/dojo.xd.js.uncompressed.js",
            compressed: "dojo/dojo.xd.js"
          }
        },
        aliases: {
          1: "1.6.1",
          "1.1": "1.1.1",
          "1.2": "1.2.3",
          "1.3": "1.3.2",
          "1.4": "1.4.3",
          "1.5": "1.5.1",
          "1.6": "1.6.1",
          "1.7": "1.7.2"
        }
      }
    }
  };
  var ua = Array.prototype.forEach
      ? function (a, b, c) {
          Array.prototype.forEach.call(a, b, c);
        }
      : function (a, b, c) {
          for (
            var d = a.length,
              e = "string" === typeof a ? a.split("") : a,
              g = 0;
            g < d;
            g++
          )
            g in e && b.call(c, e[g], g, a);
        },
    va = Array.prototype.map
      ? function (a, b) {
          return Array.prototype.map.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = Array(c),
              e = "string" === typeof a ? a.split("") : a,
              g = 0;
            g < c;
            g++
          )
            g in e && (d[g] = b.call(void 0, e[g], g, a));
          return d;
        },
    wa = Array.prototype.some
      ? function (a, b) {
          return Array.prototype.some.call(a, b, void 0);
        }
      : function (a, b) {
          for (
            var c = a.length,
              d = "string" === typeof a ? a.split("") : a,
              e = 0;
            e < c;
            e++
          )
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
          return !1;
        };
  function xa(a) {
    return Array.prototype.concat.apply([], arguments);
  }
  function ya(a) {
    var b = a.length;
    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
      return c;
    }
    return [];
  }
  function za(a, b) {
    for (var c = 1; c < arguments.length; c++) {
      var d = arguments[c],
        e = ja(d);
      if ("array" == e || ("object" == e && "number" == typeof d.length)) {
        e = a.length || 0;
        var g = d.length || 0;
        a.length = e + g;
        for (var f = 0; f < g; f++) a[e + f] = d[f];
      } else a.push(d);
    }
  }
  var Aa;
  function F(a, b) {
    this.a = (a === Ba && b) || "";
    this.b = Ca;
  }
  F.prototype.L = !0;
  F.prototype.K = function () {
    return this.a.toString();
  };
  function Da(a) {
    return a instanceof F && a.constructor === F && a.b === Ca
      ? a.a
      : "type_error:TrustedResourceUrl";
  }
  function Ea(a, b) {
    var c = ta(a);
    if (!Fa.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(Ga, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e))
        throw Error(
          'Found marker, "' +
            e +
            '", in format string, "' +
            c +
            '", but no valid label mapping found in args: ' +
            JSON.stringify(b)
        );
      d = b[e];
      return d instanceof C ? ta(d) : encodeURIComponent(String(d));
    });
    return Ha(a);
  }
  var Ga = /%{(\w+)}/g,
    Fa = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
    Ia = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  function Ja(a, b, c) {
    a = Ea(a, b);
    a = Ia.exec(Da(a).toString());
    b = a[3] || "";
    return Ha(a[1] + Ka("?", a[2] || "", c) + Ka("#", b, void 0));
  }
  var Ca = {};
  function Ha(a) {
    if (void 0 === Aa) {
      var b = null;
      var c = q.trustedTypes;
      if (c && c.createPolicy) {
        try {
          b = c.createPolicy("goog#html", {
            createHTML: qa,
            createScript: qa,
            createScriptURL: qa
          });
        } catch (d) {
          q.console && q.console.error(d.message);
        }
        Aa = b;
      } else Aa = b;
    }
    a = (b = Aa) ? b.createScriptURL(a) : a;
    return new F(Ba, a);
  }
  function Ka(a, b, c) {
    if (null == c) return b;
    if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
    for (var d in c) {
      var e = c[d];
      e = Array.isArray(e) ? e : [e];
      for (var g = 0; g < e.length; g++) {
        var f = e[g];
        null != f &&
          (b || (b = a),
          (b +=
            (b.length > a.length ? "&" : "") +
            encodeURIComponent(d) +
            "=" +
            encodeURIComponent(String(f))));
      }
    }
    return b;
  }
  var Ba = {};
  var La = String.prototype.trim
    ? function (a) {
        return a.trim();
      }
    : function (a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
      };
  function Ma(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  var G;
  a: {
    var Na = q.navigator;
    if (Na) {
      var Oa = Na.userAgent;
      if (Oa) {
        G = Oa;
        break a;
      }
    }
    G = "";
  }
  function H(a) {
    return -1 != G.indexOf(a);
  }
  function Pa(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }
  var Qa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
  function Ra(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c in d) a[c] = d[c];
      for (var g = 0; g < Qa.length; g++)
        (c = Qa[g]),
          Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
  function Sa(a, b) {
    a.src = Da(b);
    (b = a.ownerDocument && a.ownerDocument.defaultView) && b != q
      ? (b = ia(b.document))
      : (null === ha && (ha = ia(q.document)), (b = ha));
    b && a.setAttribute("nonce", b);
  }
  function Ta(a) {
    var b = Ua;
    return Object.prototype.hasOwnProperty.call(b, 11)
      ? b[11]
      : (b[11] = a(11));
  }
  var Va = H("Opera"),
    Wa = H("Trident") || H("MSIE"),
    Xa = H("Edge"),
    Ya =
      H("Gecko") &&
      !(-1 != G.toLowerCase().indexOf("webkit") && !H("Edge")) &&
      !(H("Trident") || H("MSIE")) &&
      !H("Edge"),
    Za = -1 != G.toLowerCase().indexOf("webkit") && !H("Edge"),
    $a;
  a: {
    var ab = "",
      bb = (function () {
        var a = G;
        if (Ya) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Xa) return /Edge\/([\d\.]+)/.exec(a);
        if (Wa) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Za) return /WebKit\/(\S+)/.exec(a);
        if (Va) return /(?:Version)[ \/]?(\S+)/.exec(a);
      })();
    bb && (ab = bb ? bb[1] : "");
    if (Wa) {
      var cb,
        db = q.document;
      cb = db ? db.documentMode : void 0;
      if (null != cb && cb > parseFloat(ab)) {
        $a = String(cb);
        break a;
      }
    }
    $a = ab;
  }
  var eb = $a,
    Ua = {};
  function fb() {
    return Ta(function () {
      for (
        var a = 0,
          b = La(String(eb)).split("."),
          c = La("11").split("."),
          d = Math.max(b.length, c.length),
          e = 0;
        0 == a && e < d;
        e++
      ) {
        var g = b[e] || "",
          f = c[e] || "";
        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
          if (0 == g[0].length && 0 == f[0].length) break;
          a =
            Ma(
              0 == g[1].length ? 0 : parseInt(g[1], 10),
              0 == f[1].length ? 0 : parseInt(f[1], 10)
            ) ||
            Ma(0 == g[2].length, 0 == f[2].length) ||
            Ma(g[2], f[2]);
          g = g[3];
          f = f[3];
        } while (0 == a);
      }
      return 0 <= a;
    });
  }
  function gb(a, b) {
    Pa(b, function (c, d) {
      c && "object" == typeof c && c.L && (c = c.K());
      "style" == d
        ? (a.style.cssText = c)
        : "class" == d
        ? (a.className = c)
        : "for" == d
        ? (a.htmlFor = c)
        : hb.hasOwnProperty(d)
        ? a.setAttribute(hb[d], c)
        : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0)
        ? a.setAttribute(d, c)
        : (a[d] = c);
    });
  }
  var hb = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };
  function ib(a) {
    var b = document;
    a = String(a);
    "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
    return b.createElement(a);
  }
  function jb(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }
  jb.prototype.get = function () {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else a = this.c();
    return a;
  };
  function kb(a, b) {
    a.f(b);
    100 > a.b && (a.b++, (b.next = a.a), (a.a = b));
  }
  function lb(a) {
    q.setTimeout(function () {
      throw a;
    }, 0);
  }
  var mb;
  function nb() {
    var a = q.MessageChannel;
    "undefined" === typeof a &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !H("Presto") &&
      (a = function () {
        var e = ib("IFRAME");
        e.style.display = "none";
        document.documentElement.appendChild(e);
        var g = e.contentWindow;
        e = g.document;
        e.open();
        e.close();
        var f = "callImmediate" + Math.random(),
          h =
            "file:" == g.location.protocol
              ? "*"
              : g.location.protocol + "//" + g.location.host;
        e = x(function (k) {
          if (("*" == h || k.origin == h) && k.data == f)
            this.port1.onmessage();
        }, this);
        g.addEventListener("message", e, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            g.postMessage(f, h);
          }
        };
      });
    if ("undefined" !== typeof a && !H("Trident") && !H("MSIE")) {
      var b = new a(),
        c = {},
        d = c;
      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.J;
          c.J = null;
          e();
        }
      };
      return function (e) {
        d.next = { J: e };
        d = d.next;
        b.port2.postMessage(0);
      };
    }
    return function (e) {
      q.setTimeout(e, 0);
    };
  }
  function ob() {
    this.b = this.a = null;
  }
  var qb = new jb(
    function () {
      return new pb();
    },
    function (a) {
      a.reset();
    }
  );
  ob.prototype.add = function (a, b) {
    var c = qb.get();
    c.set(a, b);
    this.b ? (this.b.next = c) : (this.a = c);
    this.b = c;
  };
  function rb() {
    var a = sb,
      b = null;
    a.a && ((b = a.a), (a.a = a.a.next), a.a || (a.b = null), (b.next = null));
    return b;
  }
  function pb() {
    this.next = this.b = this.a = null;
  }
  pb.prototype.set = function (a, b) {
    this.a = a;
    this.b = b;
    this.next = null;
  };
  pb.prototype.reset = function () {
    this.next = this.b = this.a = null;
  };
  function tb(a, b) {
    ub || vb();
    wb || (ub(), (wb = !0));
    sb.add(a, b);
  }
  var ub;
  function vb() {
    if (q.Promise && q.Promise.resolve) {
      var a = q.Promise.resolve(void 0);
      ub = function () {
        a.then(xb);
      };
    } else
      ub = function () {
        var b = xb;
        !v(q.setImmediate) ||
        (q.Window &&
          q.Window.prototype &&
          !H("Edge") &&
          q.Window.prototype.setImmediate == q.setImmediate)
          ? (mb || (mb = nb()), mb(b))
          : q.setImmediate(b);
      };
  }
  var wb = !1,
    sb = new ob();
  function xb() {
    for (var a; (a = rb()); ) {
      try {
        a.a.call(a.b);
      } catch (b) {
        lb(b);
      }
      kb(qb, a);
    }
    wb = !1;
  }
  function yb(a) {
    if (!a) return !1;
    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }
  function I(a) {
    this.a = 0;
    this.j = void 0;
    this.f = this.b = this.c = null;
    this.h = this.i = !1;
    if (a != u)
      try {
        var b = this;
        a.call(
          void 0,
          function (c) {
            J(b, 2, c);
          },
          function (c) {
            J(b, 3, c);
          }
        );
      } catch (c) {
        J(this, 3, c);
      }
  }
  function zb() {
    this.next = this.c = this.b = this.f = this.a = null;
    this.h = !1;
  }
  zb.prototype.reset = function () {
    this.c = this.b = this.f = this.a = null;
    this.h = !1;
  };
  var Ab = new jb(
    function () {
      return new zb();
    },
    function (a) {
      a.reset();
    }
  );
  function Bb(a, b, c) {
    var d = Ab.get();
    d.f = a;
    d.b = b;
    d.c = c;
    return d;
  }
  I.prototype.then = function (a, b, c) {
    return Cb(this, v(a) ? a : null, v(b) ? b : null, c);
  };
  I.prototype.$goog_Thenable = !0;
  I.prototype.cancel = function (a) {
    if (0 == this.a) {
      var b = new K(a);
      tb(function () {
        Db(this, b);
      }, this);
    }
  };
  function Db(a, b) {
    if (0 == a.a)
      if (a.c) {
        var c = a.c;
        if (c.b) {
          for (
            var d = 0, e = null, g = null, f = c.b;
            f && (f.h || (d++, f.a == a && (e = f), !(e && 1 < d)));
            f = f.next
          )
            e || (g = f);
          e &&
            (0 == c.a && 1 == d
              ? Db(c, b)
              : (g
                  ? ((d = g),
                    d.next == c.f && (c.f = d),
                    (d.next = d.next.next))
                  : Eb(c),
                Fb(c, e, 3, b)));
        }
        a.c = null;
      } else J(a, 3, b);
  }
  function Gb(a, b) {
    a.b || (2 != a.a && 3 != a.a) || Hb(a);
    a.f ? (a.f.next = b) : (a.b = b);
    a.f = b;
  }
  function Cb(a, b, c, d) {
    var e = Bb(null, null, null);
    e.a = new I(function (g, f) {
      e.f = b
        ? function (h) {
            try {
              var k = b.call(d, h);
              g(k);
            } catch (m) {
              f(m);
            }
          }
        : g;
      e.b = c
        ? function (h) {
            try {
              var k = c.call(d, h);
              void 0 === k && h instanceof K ? f(h) : g(k);
            } catch (m) {
              f(m);
            }
          }
        : f;
    });
    e.a.c = a;
    Gb(a, e);
    return e.a;
  }
  I.prototype.s = function (a) {
    this.a = 0;
    J(this, 2, a);
  };
  I.prototype.u = function (a) {
    this.a = 0;
    J(this, 3, a);
  };
  function J(a, b, c) {
    if (0 == a.a) {
      a === c &&
        ((b = 3), (c = new TypeError("Promise cannot resolve to itself")));
      a.a = 1;
      a: {
        var d = c,
          e = a.s,
          g = a.u;
        if (d instanceof I) {
          Gb(d, Bb(e || u, g || null, a));
          var f = !0;
        } else if (yb(d)) d.then(e, g, a), (f = !0);
        else {
          if (ka(d))
            try {
              var h = d.then;
              if (v(h)) {
                Ib(d, h, e, g, a);
                f = !0;
                break a;
              }
            } catch (k) {
              g.call(a, k);
              f = !0;
              break a;
            }
          f = !1;
        }
      }
      f ||
        ((a.j = c),
        (a.a = b),
        (a.c = null),
        Hb(a),
        3 != b || c instanceof K || Jb(a, c));
    }
  }
  function Ib(a, b, c, d, e) {
    function g(k) {
      h || ((h = !0), d.call(e, k));
    }
    function f(k) {
      h || ((h = !0), c.call(e, k));
    }
    var h = !1;
    try {
      b.call(a, f, g);
    } catch (k) {
      g(k);
    }
  }
  function Hb(a) {
    a.i || ((a.i = !0), tb(a.l, a));
  }
  function Eb(a) {
    var b = null;
    a.b && ((b = a.b), (a.b = b.next), (b.next = null));
    a.b || (a.f = null);
    return b;
  }
  I.prototype.l = function () {
    for (var a; (a = Eb(this)); ) Fb(this, a, this.a, this.j);
    this.i = !1;
  };
  function Fb(a, b, c, d) {
    if (3 == c && b.b && !b.h) for (; a && a.h; a = a.c) a.h = !1;
    if (b.a) (b.a.c = null), Kb(b, c, d);
    else
      try {
        b.h ? b.f.call(b.c) : Kb(b, c, d);
      } catch (e) {
        Lb.call(null, e);
      }
    kb(Ab, b);
  }
  function Kb(a, b, c) {
    2 == b ? a.f.call(a.c, c) : a.b && a.b.call(a.c, c);
  }
  function Jb(a, b) {
    a.h = !0;
    tb(function () {
      a.h && Lb.call(null, b);
    });
  }
  var Lb = lb;
  function K(a) {
    B.call(this, a);
  }
  z(K, B);
  K.prototype.name =
    "cancel"; /*
    Portions of this code are from MochiKit, received by
    The Closure Authors under the MIT license. All other code is Copyright
    2005-2009 The Closure Authors. All Rights Reserved.
   */
  function L(a, b) {
    this.h = [];
    this.F = a;
    this.D = b || null;
    this.f = this.a = !1;
    this.c = void 0;
    this.s = this.$ = this.j = !1;
    this.i = 0;
    this.b = null;
    this.l = 0;
  }
  L.prototype.cancel = function (a) {
    if (this.a) this.c instanceof L && this.c.cancel();
    else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.l--, 0 >= b.l && b.cancel());
      }
      this.F ? this.F.call(this.D, this) : (this.s = !0);
      this.a || ((a = new M(this)), N(this), O(this, !1, a));
    }
  };
  L.prototype.u = function (a, b) {
    this.j = !1;
    O(this, a, b);
  };
  function O(a, b, c) {
    a.a = !0;
    a.c = c;
    a.f = !b;
    Mb(a);
  }
  function N(a) {
    if (a.a) {
      if (!a.s) throw new Nb(a);
      a.s = !1;
    }
  }
  function P(a, b, c, d) {
    a.h.push([b, c, d]);
    a.a && Mb(a);
    return a;
  }
  L.prototype.then = function (a, b, c) {
    var d,
      e,
      g = new I(function (f, h) {
        d = f;
        e = h;
      });
    P(this, d, function (f) {
      f instanceof M ? g.cancel() : e(f);
    });
    return g.then(a, b, c);
  };
  L.prototype.$goog_Thenable = !0;
  function Ob(a) {
    return wa(a.h, function (b) {
      return v(b[1]);
    });
  }
  function Mb(a) {
    if (a.i && a.a && Ob(a)) {
      var b = a.i,
        c = Pb[b];
      c && (q.clearTimeout(c.a), delete Pb[b]);
      a.i = 0;
    }
    a.b && (a.b.l--, delete a.b);
    b = a.c;
    for (var d = (c = !1); a.h.length && !a.j; ) {
      var e = a.h.shift(),
        g = e[0],
        f = e[1];
      e = e[2];
      if ((g = a.f ? f : g))
        try {
          var h = g.call(e || a.D, b);
          void 0 !== h &&
            ((a.f = a.f && (h == b || h instanceof Error)), (a.c = b = h));
          if (
            yb(b) ||
            ("function" === typeof q.Promise && b instanceof q.Promise)
          )
            (d = !0), (a.j = !0);
        } catch (k) {
          (b = k), (a.f = !0), Ob(a) || (c = !0);
        }
    }
    a.c = b;
    d &&
      ((h = x(a.u, a, !0)),
      (d = x(a.u, a, !1)),
      b instanceof L ? (P(b, h, d), (b.$ = !0)) : b.then(h, d));
    c && ((b = new Qb(b)), (Pb[b.a] = b), (a.i = b.a));
  }
  function Rb() {
    var a = new L();
    N(a);
    O(a, !0, null);
    return a;
  }
  function Nb() {
    B.call(this);
  }
  z(Nb, B);
  Nb.prototype.message = "Deferred has already fired";
  Nb.prototype.name = "AlreadyCalledError";
  function M() {
    B.call(this);
  }
  z(M, B);
  M.prototype.message = "Deferred was canceled";
  M.prototype.name = "CanceledError";
  function Qb(a) {
    this.a = q.setTimeout(x(this.c, this), 0);
    this.b = a;
  }
  Qb.prototype.c = function () {
    delete Pb[this.a];
    throw this.b;
  };
  var Pb = {};
  var Sb,
    Tb = [];
  function Ub(a, b) {
    function c() {
      var e = a.shift();
      e = Vb(e, b);
      a.length && P(e, c, c, void 0);
      return e;
    }
    if (!a.length) return Rb();
    var d = Tb.length;
    za(Tb, a);
    if (d) return Sb;
    a = Tb;
    return (Sb = c());
  }
  function Vb(a, b) {
    var c = b || {};
    b = c.document || document;
    var d = Da(a).toString(),
      e = ib("SCRIPT"),
      g = { M: e, O: void 0 },
      f = new L(Wb, g),
      h = null,
      k = null != c.timeout ? c.timeout : 5e3;
    0 < k &&
      ((h = window.setTimeout(function () {
        Xb(e, !0);
        var m = new Yb(1, "Timeout reached for loading script " + d);
        N(f);
        O(f, !1, m);
      }, k)),
      (g.O = h));
    e.onload = e.onreadystatechange = function () {
      (e.readyState &&
        "loaded" != e.readyState &&
        "complete" != e.readyState) ||
        (Xb(e, c.aa || !1, h), N(f), O(f, !0, null));
    };
    e.onerror = function () {
      Xb(e, !0, h);
      var m = new Yb(0, "Error while loading script " + d);
      N(f);
      O(f, !1, m);
    };
    g = c.attributes || {};
    Ra(g, { type: "text/javascript", charset: "UTF-8" });
    gb(e, g);
    Sa(e, a);
    Zb(b).appendChild(e);
    return f;
  }
  function Zb(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length
      ? b[0]
      : a.documentElement;
  }
  function Wb() {
    if (this && this.M) {
      var a = this.M;
      a && "SCRIPT" == a.tagName && Xb(a, !0, this.O);
    }
  }
  function Xb(a, b, c) {
    null != c && q.clearTimeout(c);
    a.onload = u;
    a.onerror = u;
    a.onreadystatechange = u;
    b &&
      window.setTimeout(function () {
        a && a.parentNode && a.parentNode.removeChild(a);
      }, 0);
  }
  function Yb(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    B.call(this, c);
    this.code = a;
  }
  z(Yb, B);
  E.g.m = {};
  var $b = Vb,
    bc = ac;
  function cc(a) {
    return Ja(a.format, a.I, a.W || {});
  }
  function ac(a, b, c) {
    c = c || {};
    a = Ja(a, b, c);
    var d = $b(a, { timeout: 3e4, attributes: { async: !1, defer: !1 } });
    return new Promise(function (e) {
      P(d, e, null, void 0);
    });
  }
  E.g.m.pa = function (a) {
    ac = a;
  };
  E.g.m.sa = function (a) {
    $b = a;
  };
  E.g.m.S = cc;
  E.g.m.load = bc;
  E.g.m.ia = function (a) {
    a = va(a, cc);
    if (0 == a.length) return Promise.resolve();
    var b = { timeout: 3e4, attributes: { async: !1, defer: !1 } },
      c = [];
    !Wa || fb()
      ? ua(a, function (d) {
          c.push($b(d, b));
        })
      : c.push(Ub(a, b));
    return Promise.all(
      va(c, function (d) {
        return new Promise(function (e) {
          return P(d, e, null, void 0);
        });
      })
    );
  };
  E.g.m.ka = function (a, b, c) {
    return { format: a, I: b, W: c };
  };
  E.g.o = {};
  var Q = {};
  E.g.o.da = function (a) {
    return Q[a] && Q[a].loaded;
  };
  E.g.o.ea = function (a) {
    return Q[a] && Q[a].X;
  };
  E.g.o.U = function () {
    return new Promise(function (a) {
      "undefined" == typeof window || "complete" === document.readyState
        ? a()
        : window.addEventListener
        ? (document.addEventListener("DOMContentLoaded", a, !0),
          window.addEventListener("load", a, !0))
        : window.attachEvent
        ? window.attachEvent("onload", a)
        : "function" !== typeof window.onload
        ? (window.onload = a)
        : (window.onload = function (b) {
            window.onload(b);
            a();
          });
    });
  };
  E.g.o.ja = Q;
  E.g.o.oa = function () {
    Q = {};
  };
  E.g.o.qa = function (a) {
    Q[a] || (Q[a] = { loaded: !1 });
    Q[a].loaded = !0;
  };
  E.g.o.ra = function (a, b) {
    Q[a] = { X: b, loaded: !1 };
  };
  E.g.H = {
    1: "1.0",
    "1.0": "current",
    "1.1": "upcoming",
    "1.2": "testing",
    41: "pre-45",
    42: "pre-45",
    43: "pre-45",
    44: "pre-45",
    46: "46.1",
    "46.1": "46.2",
    48: "48.1",
    current: "48",
    upcoming: "48",
    testing: "48"
  };
  function dc(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");
      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a)
      if (a instanceof dc)
        for (c = a.A(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
      else for (d in a) this.set(d, a[d]);
  }
  l = dc.prototype;
  l.B = function () {
    ec(this);
    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
    return a;
  };
  l.A = function () {
    ec(this);
    return this.a.concat();
  };
  function ec(a) {
    if (a.c != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length; ) {
        var d = a.a[b];
        R(a.b, d) && (a.a[c++] = d);
        b++;
      }
      a.a.length = c;
    }
    if (a.c != a.a.length) {
      var e = {};
      for (c = b = 0; b < a.a.length; )
        (d = a.a[b]), R(e, d) || ((a.a[c++] = d), (e[d] = 1)), b++;
      a.a.length = c;
    }
  }
  l.get = function (a, b) {
    return R(this.b, a) ? this.b[a] : b;
  };
  l.set = function (a, b) {
    R(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
  };
  l.forEach = function (a, b) {
    for (var c = this.A(), d = 0; d < c.length; d++) {
      var e = c[d],
        g = this.get(e);
      a.call(b, g, e, this);
    }
  };
  function R(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  var fc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  function gc(a, b) {
    if (a) {
      a = a.split("&");
      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
          e = null;
        if (0 <= d) {
          var g = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else g = a[c];
        b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function S(a) {
    this.a = this.j = this.f = "";
    this.l = null;
    this.h = this.b = "";
    this.i = !1;
    var b;
    a instanceof S
      ? ((this.i = a.i),
        hc(this, a.f),
        (this.j = a.j),
        (this.a = a.a),
        ic(this, a.l),
        (this.b = a.b),
        jc(this, kc(a.c)),
        (this.h = a.h))
      : a && (b = String(a).match(fc))
      ? ((this.i = !1),
        hc(this, b[1] || "", !0),
        (this.j = T(b[2] || "")),
        (this.a = T(b[3] || "", !0)),
        ic(this, b[4]),
        (this.b = T(b[5] || "", !0)),
        jc(this, b[6] || "", !0),
        (this.h = T(b[7] || "")))
      : ((this.i = !1), (this.c = new U(null, this.i)));
  }
  S.prototype.toString = function () {
    var a = [],
      b = this.f;
    b && a.push(V(b, lc, !0), ":");
    var c = this.a;
    if (c || "file" == b)
      a.push("//"),
        (b = this.j) && a.push(V(b, lc, !0), "@"),
        a.push(
          encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
        ),
        (c = this.l),
        null != c && a.push(":", String(c));
    if ((c = this.b))
      this.a && "/" != c.charAt(0) && a.push("/"),
        a.push(V(c, "/" == c.charAt(0) ? mc : nc, !0));
    (c = this.c.toString()) && a.push("?", c);
    (c = this.h) && a.push("#", V(c, oc));
    return a.join("");
  };
  S.prototype.resolve = function (a) {
    var b = new S(this),
      c = !!a.f;
    c ? hc(b, a.f) : (c = !!a.j);
    c ? (b.j = a.j) : (c = !!a.a);
    c ? (b.a = a.a) : (c = null != a.l);
    var d = a.b;
    if (c) ic(b, a.l);
    else if ((c = !!a.b)) {
      if ("/" != d.charAt(0))
        if (this.a && !this.b) d = "/" + d;
        else {
          var e = b.b.lastIndexOf("/");
          -1 != e && (d = b.b.substr(0, e + 1) + d);
        }
      e = d;
      if (".." == e || "." == e) d = "";
      else if (-1 != e.indexOf("./") || -1 != e.indexOf("/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");
        for (var g = [], f = 0; f < e.length; ) {
          var h = e[f++];
          "." == h
            ? d && f == e.length && g.push("")
            : ".." == h
            ? ((1 < g.length || (1 == g.length && "" != g[0])) && g.pop(),
              d && f == e.length && g.push(""))
            : (g.push(h), (d = !0));
        }
        d = g.join("/");
      } else d = e;
    }
    c ? (b.b = d) : (c = "" !== a.c.toString());
    c ? jc(b, kc(a.c)) : (c = !!a.h);
    c && (b.h = a.h);
    return b;
  };
  function hc(a, b, c) {
    a.f = c ? T(b, !0) : b;
    a.f && (a.f = a.f.replace(/:$/, ""));
  }
  function ic(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.l = b;
    } else a.l = null;
  }
  function jc(a, b, c) {
    b instanceof U
      ? ((a.c = b), pc(a.c, a.i))
      : (c || (b = V(b, qc)), (a.c = new U(b, a.i)));
  }
  function T(a, b) {
    return a
      ? b
        ? decodeURI(a.replace(/%25/g, "%2525"))
        : decodeURIComponent(a)
      : "";
  }
  function V(a, b, c) {
    return "string" === typeof a
      ? ((a = encodeURI(a).replace(b, rc)),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a)
      : null;
  }
  function rc(a) {
    a = a.charCodeAt(0);
    return "%" + ((a >> 4) & 15).toString(16) + (a & 15).toString(16);
  }
  var lc = /[#\/\?@]/g,
    nc = /[#\?:]/g,
    mc = /[#\?]/g,
    qc = /[#\?@]/g,
    oc = /#/g;
  function U(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b;
  }
  function W(a) {
    a.a ||
      ((a.a = new dc()),
      (a.b = 0),
      a.c &&
        gc(a.c, function (b, c) {
          a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
        }));
  }
  l = U.prototype;
  l.add = function (a, b) {
    W(this);
    this.c = null;
    a = X(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, (c = []));
    c.push(b);
    this.b += 1;
    return this;
  };
  function sc(a, b) {
    W(a);
    b = X(a, b);
    R(a.a.b, b) &&
      ((a.c = null),
      (a.b -= a.a.get(b).length),
      (a = a.a),
      R(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && ec(a)));
  }
  function tc(a, b) {
    W(a);
    b = X(a, b);
    return R(a.a.b, b);
  }
  l.forEach = function (a, b) {
    W(this);
    this.a.forEach(function (c, d) {
      ua(
        c,
        function (e) {
          a.call(b, e, d, this);
        },
        this
      );
    }, this);
  };
  l.A = function () {
    W(this);
    for (var a = this.a.B(), b = this.a.A(), c = [], d = 0; d < b.length; d++)
      for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
    return c;
  };
  l.B = function (a) {
    W(this);
    var b = [];
    if ("string" === typeof a)
      tc(this, a) && (b = xa(b, this.a.get(X(this, a))));
    else {
      a = this.a.B();
      for (var c = 0; c < a.length; c++) b = xa(b, a[c]);
    }
    return b;
  };
  l.set = function (a, b) {
    W(this);
    this.c = null;
    a = X(this, a);
    tc(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this;
  };
  l.get = function (a, b) {
    if (!a) return b;
    a = this.B(a);
    return 0 < a.length ? String(a[0]) : b;
  };
  l.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";
    for (var a = [], b = this.a.A(), c = 0; c < b.length; c++) {
      var d = b[c],
        e = encodeURIComponent(String(d));
      d = this.B(d);
      for (var g = 0; g < d.length; g++) {
        var f = e;
        "" !== d[g] && (f += "=" + encodeURIComponent(String(d[g])));
        a.push(f);
      }
    }
    return (this.c = a.join("&"));
  };
  function kc(a) {
    var b = new U();
    b.c = a.c;
    a.a && ((b.a = new dc(a.a)), (b.b = a.b));
    return b;
  }
  function X(a, b) {
    b = String(b);
    a.f && (b = b.toLowerCase());
    return b;
  }
  function pc(a, b) {
    b &&
      !a.f &&
      (W(a),
      (a.c = null),
      a.a.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e &&
          (sc(this, d),
          sc(this, e),
          0 < c.length &&
            ((this.c = null),
            this.a.set(X(this, e), ya(c)),
            (this.b += c.length)));
      }, a));
    a.f = b;
  }
  E.g.v = {};
  var uc,
    Y,
    vc = null,
    wc;
  function xc() {
    vc = Y = uc = null;
    t("google.load") ||
      (y("google.load", yc), y("google.setOnLoadCallback", E.N));
    var a = document.getElementsByTagName("script");
    a = a[a.length - 1].getAttribute("src");
    a = new S(a);
    var b = a.a;
    wc = b = b.match(/^www\.gstatic\.cn/) ? "gstatic.cn" : "gstatic.com";
    zc(a);
  }
  function zc(a) {
    a = new U(a.c.toString());
    var b = a.get("callback");
    "string" === typeof b && ((b = Z(b)), E.g.o.U().then(b));
    a = a.get("autoload");
    if ("string" === typeof a)
      try {
        if ("" !== a) {
          var c = JSON.parse(a).modules;
          for (a = 0; a < c.length; a++) {
            var d = c[a];
            yc(d.name, d.version, d);
          }
        }
      } catch (e) {
        throw Error("Autoload failed with: " + e);
      }
  }
  function Ac(a) {
    var b = a,
      c,
      d = a.match(/^testing-/);
    d && (b = b.replace(/^testing-/, ""));
    a = b;
    do {
      if (b === E.g.H[b]) throw Error("Infinite loop in version mapping: " + b);
      (c = E.g.H[b]) && (b = c);
    } while (c);
    c = (d ? "testing-" : "") + b;
    return { version: "pre-45" == b ? a : c, V: c };
  }
  function Bc(a) {
    var b = E.g.G.Y[wc].loader,
      c = Ac(a);
    return E.g.m.load(b, { version: c.V }).then(function () {
      var d =
        t("google.charts.loader.VersionSpecific.load") ||
        t("google.charts.loader.publicLoad") ||
        t("google.charts.versionSpecific.load");
      if (!d) throw Error("Bad version: " + a);
      vc = function (e) {
        e = d(c.version, e);
        if (null == e || null == e.then) {
          var g =
            t("google.charts.loader.publicSetOnLoadCallback") ||
            t("google.charts.versionSpecific.setOnLoadCallback");
          e = new Promise(function (f) {
            g(f);
          });
          e.then = g;
        }
        return e;
      };
    });
  }
  function Cc(a) {
    "string" === typeof a && (a = [a]);
    (Array.isArray(a) && 0 !== a.length) || (a = E.g.G.R);
    var b = [];
    a.forEach(function (c) {
      c = c.toLowerCase();
      b = b.concat(c.split(/[\s,]+\s*/));
    });
    return b;
  }
  function Dc(a, b) {
    b.domain = wc;
    b.callback = Z(b.callback);
    if (!uc) {
      if (b.enableUrlSettings && window.URLSearchParams)
        try {
          a =
            new URLSearchParams(top.location.search).get("charts-version") || a;
        } catch (c) {
          console.info("Failed to get charts-version from top URL", c);
        }
      uc = Bc(a);
    }
    b.packages = Cc(b.packages);
    return (Y = uc.then(function () {
      return vc(b);
    }));
  }
  E.Z = function (a) {
    return E.load(Object.assign({}, a, { safeMode: !0 }));
  };
  y("google.charts.safeLoad", E.Z);
  E.load = function (a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    c = 0;
    "visualization" === b[c] && c++;
    var d = "current";
    if ("string" === typeof b[c] || "number" === typeof b[c])
      (d = String(b[c])), c++;
    var e = {};
    ka(b[c]) && (e = b[c]);
    return Dc(d, e);
  };
  y("google.charts.load", E.load);
  E.N = function (a) {
    if (!Y)
      throw Error(
        "Must call google.charts.load before google.charts.setOnLoadCallback"
      );
    return a ? Y.then(a) : Y;
  };
  y("google.charts.setOnLoadCallback", E.N);
  var Ec = D("https://maps.googleapis.com/maps/api/js?jsapiRedirect=true"),
    Fc = D(
      "https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi"
    );
  function Gc(a, b, c) {
    console.warn("Loading Maps API with the jsapi loader is deprecated.");
    c = c || {};
    a = c.key || c.client;
    var d = c.libraries,
      e = (function (h) {
        for (var k = {}, m = 0; m < h.length; m++) {
          var r = h[m];
          k[r[0]] = r[1];
        }
        return k;
      })(
        c.other_params
          ? c.other_params.split("&").map(function (h) {
              return h.split("=");
            })
          : []
      ),
      g = Object.assign({}, { key: a, ha: d }, e),
      f = "2" === b ? Fc : Ec;
    Y = new Promise(function (h) {
      var k = Z(c && c.callback);
      E.g.m.load(f, {}, g).then(k).then(h);
    });
  }
  var Hc = D("https://www.gstatic.com/inputtools/js/ita/inputtools_3.js");
  function Ic(a, b, c) {
    ka(c) && c.packages
      ? (Array.isArray(c.packages) ? c.packages : [c.packages]).includes(
          "inputtools"
        )
        ? (console.warn(
            "Loading Input Tools with the jsapi loader is deprecated.\nPlease load " +
              (Hc + " directly.")
          ),
          (a = Z(c.callback)),
          E.g.m.load(Hc, {}).then(a))
        : console.error(
            "Loading elements other than inputtools with the jsapi loader is unsupported."
          )
      : console.error(
          "google.load of elements was invoked without specifying packages"
        );
  }
  var Jc = D(
    "https://ajax.googleapis.com/ajax/libs/%{module}/%{version}/%{file}"
  );
  function Kc(a, b) {
    var c;
    do {
      if (a === b[a])
        throw Error("Infinite loop in version mapping for version " + a);
      (c = b[a]) && (a = c);
    } while (c);
    return a;
  }
  function Lc(a, b, c) {
    var d = E.g.P.T[a];
    if (d) {
      b = Kc(b, d.aliases);
      d = d.versions[b];
      if (!d) throw Error("Unknown version, " + b + ", of " + a + ".");
      var e = { module: a, version: b || "", file: d.compressed };
      b = Da(E.g.m.S({ format: Jc, I: e })).toString();
      console.warn(
        "Loading modules with the jsapi loader is deprecated.\nPlease load " +
          (a + " directly from " + b + ".")
      );
      Y = new Promise(function (g) {
        var f = Z(c && c.callback);
        E.g.m.load(Jc, e).then(f).then(g);
      });
    } else
      setTimeout(function () {
        throw Error('Module "' + a + '" is not supported.');
      }, 0);
  }
  function Z(a) {
    return function () {
      if ("function" === typeof a) a();
      else if ("string" === typeof a && "" !== a)
        try {
          var b = t(a);
          if ("function" !== typeof b)
            throw Error("Type of '" + a + "' is " + typeof b + ".");
          b();
        } catch (c) {
          throw Error("Callback of " + a + " failed with: " + c);
        }
    };
  }
  function yc(a) {
    for (var b = [], c = 0; c < arguments.length; ++c) b[c] = arguments[c];
    switch (b[0]) {
      case "maps":
        Gc.apply(null, n(b));
        break;
      case "elements":
        Ic.apply(null, n(b));
        break;
      case "visualization":
        E.load.apply(E, n(b));
        break;
      default:
        Lc.apply(null, n(b));
    }
  }
  y("google.loader.LoadFailure", !1);
  wc
    ? console.warn("Google Charts loader.js should only be loaded once.")
    : xc();
  E.g.v.ga = xc;
  E.g.v.la = Ac;
  E.g.v.ma = Cc;
  E.g.v.na = zc;
  E.g.v.fa = function () {
    return vc;
  };
}.call(this));
