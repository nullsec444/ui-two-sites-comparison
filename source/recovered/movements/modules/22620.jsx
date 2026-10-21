// Reconstructed from publicly delivered compiled JavaScript; not author TSX.
import * as _module31715 from "./31715.js";
import * as _module45032 from "./45032.js";
import * as _module11235 from "./11235.js";
var t = _module31715,
  n = _module45032,
  r = _module11235;
function a() {
  return "u" > typeof window;
}
function i() {
  return "production";
}
function o() {
  return "development" === ((a() ? window.vam : i()) || "production");
}
function s(e) {
  return RegExp(`/${e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?=[/?#]|$)`);
}
function c(e) {
  return e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/") ? e : `/${e}`;
}
function u(e) {
  return (0, n.useEffect)(() => {
    var t;
    e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
  }, [e.beforeSend]), (0, n.useEffect)(() => {
    !function (e = {
      debug: !0
    }, t) {
      var n;
      if (!a()) return;
      let {
        beforeSend: r,
        src: s,
        dataset: u
      } = function (e, t) {
        var n, r;
        let a = e;
        if (t) try {
          a = {
            ...(null == (n = JSON.parse(t)) ? void 0 : n.analytics),
            ...e
          };
        } catch {}
        !function (e = "auto") {
          if ("auto" === e) {
            window.vam = i();
            return;
          }
          window.vam = e;
        }(a.mode);
        let s = {
          sdkn: "@vercel/analytics" + (a.framework ? `/${a.framework}` : ""),
          sdkv: "2.0.1"
        };
        return a.disableAutoTrack && (s.disableAutoTrack = "1"), a.viewEndpoint && (s.viewEndpoint = c(a.viewEndpoint)), a.eventEndpoint && (s.eventEndpoint = c(a.eventEndpoint)), a.sessionEndpoint && (s.sessionEndpoint = c(a.sessionEndpoint)), o() && !1 === a.debug && (s.debug = "false"), a.dsn && (s.dsn = a.dsn), a.endpoint ? s.endpoint = a.endpoint : a.basePath && (s.endpoint = c(`${a.basePath}/insights`)), {
          beforeSend: a.beforeSend,
          src: (r = a).scriptSrc ? c(r.scriptSrc) : o() ? "https://va.vercel-scripts.com/v1/script.debug.js" : r.basePath ? c(`${r.basePath}/insights/script.js`) : "/_vercel/insights/script.js",
          dataset: s
        };
      }(e, t);
      if (window.va || (window.va = function (...e) {
        window.vaq || (window.vaq = []), window.vaq.push(e);
      }), r && (null == (n = window.va) || n.call(window, "beforeSend", r)), document.head.querySelector(`script[src*="${s}"]`)) return;
      let l = document.createElement("script");
      for (let [e, t] of (l.src = s, Object.entries(u))) l.dataset[e] = t;
      l.defer = !0, l.onerror = () => {
        let e = o() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${s}. ${e}`);
      }, document.head.appendChild(l);
    }({
      framework: e.framework || "react",
      basePath: e.basePath ?? function () {
        if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH;
      }(),
      ...(void 0 !== e.route && {
        disableAutoTrack: !0
      }),
      ...e
    }, e.configString ?? function () {
      if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.REACT_APP_VERCEL_OBSERVABILITY_CLIENT_CONFIG;
    }());
  }, []), (0, n.useEffect)(() => {
    e.route && e.path && function ({
      route: e,
      path: t
    }) {
      var n;
      null == (n = window.va) || n.call(window, "pageview", {
        route: e,
        path: t
      });
    }({
      route: e.route,
      path: e.path
    });
  }, [e.route, e.path]), null;
}
function l(e) {
  let a,
    i,
    o,
    {
      route: c,
      path: l
    } = (a = (0, r.useParams)(), i = (0, r.useSearchParams)(), o = (0, r.usePathname)(), a ? {
      route: function (e, t) {
        if (!e || !t) return e;
        let n = e;
        try {
          let e = Object.entries(t);
          for (let [t, r] of e) if (!Array.isArray(r)) {
            let e = s(r);
            e.test(n) && (n = n.replace(e, `/[${t}]`));
          }
          for (let [t, r] of e) if (Array.isArray(r)) {
            let e = s(r.join("/"));
            e.test(n) && (n = n.replace(e, `/[...${t}]`));
          }
          return n;
        } catch {
          return e;
        }
      }(o, Object.keys(a).length ? a : Object.fromEntries(i.entries())),
      path: o
    } : {
      route: null,
      path: o
    });
  return n.default.createElement(u, {
    path: l,
    route: c,
    ...e,
    basePath: function () {
      if (void 0 !== t.default && void 0 !== t.default.env) return t.default.env.NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH;
    }(),
    configString: function () {
      if (void 0 !== t.default && void 0 !== t.default.env) return '{"analytics":{"scriptSrc":"3ba4081ad56301f7/script.js","viewEndpoint":"3ba4081ad56301f7/view","eventEndpoint":"3ba4081ad56301f7/event","sessionEndpoint":"3ba4081ad56301f7/session"},"speedInsights":{"scriptSrc":"c7b8c4bb7b2c46c9/script.js","endpoint":"c7b8c4bb7b2c46c9/vitals"}}';
    }(),
    framework: "next"
  });
}
const _export_Analytics = function (e) {
  return n.default.createElement(n.Suspense, {
    fallback: null
  }, n.default.createElement(l, {
    ...e
  }));
};
export { _export_Analytics as Analytics };
