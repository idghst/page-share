import te from "react";
import { useNavigate as D } from "react-router-dom";
var E = { exports: {} }, x = {};
var I;
function ne() {
  if (I) return x;
  I = 1;
  var u = Symbol.for("react.transitional.element"), m = Symbol.for("react.fragment");
  function c(i, s, o) {
    var f = null;
    if (o !== void 0 && (f = "" + o), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      o = {};
      for (var d in s)
        d !== "key" && (o[d] = s[d]);
    } else o = s;
    return s = o.ref, {
      $$typeof: u,
      type: i,
      key: f,
      ref: s !== void 0 ? s : null,
      props: o
    };
  }
  return x.Fragment = m, x.jsx = c, x.jsxs = c, x;
}
var _ = {};
var L;
function ae() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case h:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case H:
          return "Suspense";
        case B:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case q:
            return "Portal";
          case z:
            return e.displayName || "Context";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case k:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function m(e) {
      return "" + e;
    }
    function c(e) {
      try {
        m(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), m(e);
      }
    }
    function i(e) {
      if (e === h) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function t() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function R() {
      var e = u(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, n, p, j) {
      var a = t.ref;
      return e = {
        $$typeof: A,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: p
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function O(e, r, t, n, p, j) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (ee(a)) {
            for (n = 0; n < a.length; n++)
              w(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(a);
      if (P.call(r, "key")) {
        a = u(e);
        var b = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", F[a + n] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          b,
          a
        ), F[a + n] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), f(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var y in r)
          y !== "key" && (t[y] = r[y]);
      } else t = r;
      return a && d(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        a,
        t,
        s(),
        p,
        j
      );
    }
    function w(e) {
      N(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? N(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function N(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    var v = te, A = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), z = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), T = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, ee = Array.isArray, g = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var S, C = {}, $ = v.react_stack_bottom_frame.bind(
      v,
      o
    )(), Y = g(i(o)), F = {};
    _.Fragment = h, _.jsx = function(e, r, t) {
      var n = 1e4 > T.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : $,
        n ? g(i(e)) : Y
      );
    }, _.jsxs = function(e, r, t) {
      var n = 1e4 > T.recentlyCreatedOwnerStacks++;
      return O(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : $,
        n ? g(i(e)) : Y
      );
    };
  })()), _;
}
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? E.exports = ne() : E.exports = ae()), E.exports;
}
var l = oe();
const W = {
  small: {
    header: "text-xl",
    footer_button: "text-base",
    label: "text-sm",
    input: "text-base",
    button: "text-base"
  },
  medium: {
    header: "text-2xl",
    footer_button: "text-lg",
    label: "text-base",
    input: "text-lg",
    button: "text-lg"
  },
  large: {
    header: "text-3xl",
    footer_button: "text-xl",
    label: "text-lg",
    input: "text-xl",
    button: "text-xl"
  }
}, ue = ({
  showBackButton: u = !0,
  showHomeButton: m = !0,
  title: c = "제목",
  fontSize: i = "medium",
  fontConfig: s = W,
  onBackClick: o
}) => {
  const f = D(), d = () => {
    o ? o() : f(-1);
  }, R = () => {
    f("/pagolf/main");
  };
  return /* @__PURE__ */ l.jsxs("header", { className: "flex items-center justify-between mb-12 h-[40px]", children: [
    u && /* @__PURE__ */ l.jsx("button", { onClick: d, className: "p-2", children: /* @__PURE__ */ l.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }),
    /* @__PURE__ */ l.jsx("div", {}),
    /* @__PURE__ */ l.jsx("h1", { className: `${s[i].header} font-bold`, children: c }),
    /* @__PURE__ */ l.jsx("div", {}),
    m && /* @__PURE__ */ l.jsx("button", { onClick: R, className: "p-2", children: /* @__PURE__ */ l.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ l.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }) })
  ] });
}, ce = ({
  showBackButton: u = !0,
  nextButtonLabel: m = "다음",
  fontSize: c,
  fontConfig: i = W,
  onNextClick: s,
  onBackClick: o
}) => {
  const f = D(), d = () => {
    o ? o() : f(-1);
  };
  return /* @__PURE__ */ l.jsxs("div", { className: "mt-auto pt-4 flex gap-3", children: [
    u && /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: d,
        className: `flex-1 bg-gray-200 text-gray-700 font-bold py-4 rounded-xl ${i[c].footer_button} hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700`,
        children: "뒤로"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "button",
      {
        onClick: s,
        className: `${u ? "flex-[2]" : "w-full"} bg-[#1e4632] text-white font-bold py-4 rounded-xl ${i[c].footer_button} hover:bg-[#163324] transition-colors shadow-lg dark:bg-[#4ade80] dark:text-[#1e4632]`,
        children: m
      }
    )
  ] });
};
export {
  W as FONT_CONFIG,
  ce as FooterButton,
  ue as Header
};
