import te from "react";
import { useNavigate as D, Outlet as ae } from "react-router-dom";
var p = { exports: {} }, b = {};
var I;
function ne() {
  if (I) return b;
  I = 1;
  var i = Symbol.for("react.transitional.element"), f = Symbol.for("react.fragment");
  function c(u, s, l) {
    var d = null;
    if (l !== void 0 && (d = "" + l), s.key !== void 0 && (d = "" + s.key), "key" in s) {
      l = {};
      for (var x in s)
        x !== "key" && (l[x] = s[x]);
    } else l = s;
    return s = l.ref, {
      $$typeof: i,
      type: u,
      key: d,
      ref: s !== void 0 ? s : null,
      props: l
    };
  }
  return b.Fragment = f, b.jsx = c, b.jsxs = c, b;
}
var v = {};
var L;
function oe() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
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
          case G:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : i(e.type) || "Memo";
          case E:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function f(e) {
      return "" + e;
    }
    function c(e) {
      try {
        f(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), f(e);
      }
    }
    function u(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === E)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function l() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function x(e, r) {
      function a() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function _() {
      var e = i(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, a, n, g, y) {
      var o = a.ref;
      return e = {
        $$typeof: P,
        type: e,
        key: r,
        props: a,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: _
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
        value: g
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function N(e, r, a, n, g, y) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (ee(o)) {
            for (n = 0; n < o.length; n++)
              w(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else w(o);
      if (A.call(r, "key")) {
        o = i(e);
        var m = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", F[o + n] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          m,
          o
        ), F[o + n] = !0);
      }
      if (o = null, a !== void 0 && (c(a), o = "" + a), d(r) && (c(r.key), o = "" + r.key), "key" in r) {
        a = {};
        for (var T in r)
          T !== "key" && (a[T] = r[T]);
      } else a = r;
      return o && x(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        o,
        a,
        s(),
        g,
        y
      );
    }
    function w(e) {
      O(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === E && (e._payload.status === "fulfilled" ? O(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === P;
    }
    var h = te, P = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), R = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, ee = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var S, C = {}, $ = h.react_stack_bottom_frame.bind(
      h,
      l
    )(), Y = j(u(l)), F = {};
    v.Fragment = k, v.jsx = function(e, r, a) {
      var n = 1e4 > R.recentlyCreatedOwnerStacks++;
      return N(
        e,
        r,
        a,
        !1,
        n ? Error("react-stack-top-frame") : $,
        n ? j(u(e)) : Y
      );
    }, v.jsxs = function(e, r, a) {
      var n = 1e4 > R.recentlyCreatedOwnerStacks++;
      return N(
        e,
        r,
        a,
        !0,
        n ? Error("react-stack-top-frame") : $,
        n ? j(u(e)) : Y
      );
    };
  })()), v;
}
var M;
function le() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? p.exports = ne() : p.exports = oe()), p.exports;
}
var t = le();
const W = {
  small: {
    header: "text-xl",
    footer_button: "text-xl",
    label: "text-xl",
    input: "text-xl",
    button: "text-xl"
  },
  medium: {
    header: "text-2xl",
    footer_button: "text-2xl",
    label: "text-2xl",
    input: "text-2xl",
    button: "text-2xl"
  },
  large: {
    header: "text-3xl",
    footer_button: "text-3xl",
    label: "text-3xl",
    input: "text-3xl",
    button: "text-3xl"
  }
}, ce = ({
  showBackButton: i = !0,
  showHomeButton: f = !0,
  title: c = "제목",
  fontSize: u = "medium",
  fontConfig: s = W,
  onBackClick: l
}) => {
  const d = D(), x = () => {
    l ? l() : d(-1);
  }, _ = () => {
    d("/pagolf/main");
  };
  return /* @__PURE__ */ t.jsxs("header", { className: "flex items-center justify-between mb-12 h-[40px]", children: [
    i && /* @__PURE__ */ t.jsx("button", { onClick: x, className: "p-2", children: /* @__PURE__ */ t.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }),
    /* @__PURE__ */ t.jsx("div", {}),
    /* @__PURE__ */ t.jsx("h1", { className: `${s[u].header} font-bold`, children: c }),
    /* @__PURE__ */ t.jsx("div", {}),
    f && /* @__PURE__ */ t.jsx("button", { onClick: _, className: "p-2", children: /* @__PURE__ */ t.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ t.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }) })
  ] });
}, ue = ({
  showBackButton: i = !0,
  nextButtonLabel: f = "다음",
  fontSize: c,
  fontConfig: u = W,
  onNextClick: s,
  onBackClick: l
}) => {
  const d = D(), x = () => {
    l ? l() : d(-1);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "mt-auto pt-4 flex gap-3", children: [
    i && /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: x,
        className: `flex-1 bg-gray-200 text-gray-700 font-bold py-4 rounded-xl ${u[c].footer_button} hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700`,
        children: "뒤로"
      }
    ),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: s,
        className: `${i ? "flex-[2]" : "w-full"} bg-[#1e4632] text-white font-bold py-4 rounded-xl ${u[c].footer_button} hover:bg-[#163324] transition-colors shadow-lg dark:bg-[#4ade80] dark:text-[#1e4632]`,
        children: f
      }
    )
  ] });
}, de = ({
  isOpen: i,
  onClose: f,
  title: c,
  message: u,
  onConfirm: s,
  confirmLabel: l = "확인",
  cancelLabel: d = "취소"
}) => i ? /* @__PURE__ */ t.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4", children: [
  /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
      onClick: f
    }
  ),
  /* @__PURE__ */ t.jsxs("div", { className: "relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 transform transition-all scale-100", children: [
    c && /* @__PURE__ */ t.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white mb-2", children: c }),
    /* @__PURE__ */ t.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-6 text-center text-lg", children: u }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: f,
          className: "flex-1 py-3 px-4 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors",
          children: d
        }
      ),
      /* @__PURE__ */ t.jsx(
        "button",
        {
          onClick: s,
          className: "flex-1 py-3 px-4 rounded-xl font-medium text-white bg-[#1e4632] hover:bg-[#163325] dark:bg-[#4ade80] dark:text-[#1e4632] dark:hover:bg-[#4ade80]/90 transition-colors",
          children: l
        }
      )
    ] })
  ] })
] }) : null, fe = () => /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center w-full h-full bg-white dark:bg-black text-gray-800 dark:text-gray-100", children: [
  /* @__PURE__ */ t.jsx("h1", { className: "text-6xl font-bold mb-4", children: "404" }),
  /* @__PURE__ */ t.jsx("p", { className: "text-xl mb-8", children: "Page Not Found (v0.0.1)" })
] }), xe = () => /* @__PURE__ */ t.jsx("div", { className: "w-full min-h-screen bg-white dark:bg-black transition-colors duration-200", children: /* @__PURE__ */ t.jsx(ae, {}) });
export {
  W as FONT_CONFIG,
  ue as FooterButton,
  ce as Header,
  xe as LayoutPage,
  de as Modal,
  fe as NotFoundPage
};
