import te from "react";
import { useNavigate as D } from "react-router-dom";
var _ = { exports: {} }, x = {};
var I;
function ae() {
  if (I) return x;
  I = 1;
  var i = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function u(c, l, s) {
    var f = null;
    if (s !== void 0 && (f = "" + s), l.key !== void 0 && (f = "" + l.key), "key" in l) {
      s = {};
      for (var m in l)
        m !== "key" && (s[m] = l[m]);
    } else s = l;
    return l = s.ref, {
      $$typeof: i,
      type: c,
      key: f,
      ref: l !== void 0 ? l : null,
      props: s
    };
  }
  return x.Fragment = d, x.jsx = u, x.jsxs = u, x;
}
var v = {};
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case E:
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
          case k:
            r = e._payload, e = e._init;
            try {
              return i(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function u(e) {
      try {
        d(e);
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
        ), d(e);
      }
    }
    function c(e) {
      if (e === E) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var r = i(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, r) {
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
    function h() {
      var e = i(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, t, n, g, y) {
      var o = t.ref;
      return e = {
        $$typeof: A,
        type: e,
        key: r,
        props: t,
        _owner: n
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
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
    function w(e, r, t, n, g, y) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (ee(o)) {
            for (n = 0; n < o.length; n++)
              N(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(o);
      if (P.call(r, "key")) {
        o = i(e);
        var b = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", F[o + n] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          b,
          o
        ), F[o + n] = !0);
      }
      if (o = null, t !== void 0 && (u(t), o = "" + t), f(r) && (u(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var T in r)
          T !== "key" && (t[T] = r[T]);
      } else t = r;
      return o && m(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        o,
        t,
        l(),
        g,
        y
      );
    }
    function N(e) {
      O(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? O(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function O(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    var p = te, A = Symbol.for("react.transitional.element"), q = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), R = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = Object.prototype.hasOwnProperty, ee = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var S, C = {}, $ = p.react_stack_bottom_frame.bind(
      p,
      s
    )(), Y = j(c(s)), F = {};
    v.Fragment = E, v.jsx = function(e, r, t) {
      var n = 1e4 > R.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !1,
        n ? Error("react-stack-top-frame") : $,
        n ? j(c(e)) : Y
      );
    }, v.jsxs = function(e, r, t) {
      var n = 1e4 > R.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        t,
        !0,
        n ? Error("react-stack-top-frame") : $,
        n ? j(c(e)) : Y
      );
    };
  })()), v;
}
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? _.exports = ae() : _.exports = ne()), _.exports;
}
var a = oe();
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
}, ie = ({
  showBackButton: i = !0,
  showHomeButton: d = !0,
  title: u = "제목",
  fontSize: c = "medium",
  fontConfig: l = W,
  onBackClick: s
}) => {
  const f = D(), m = () => {
    s ? s() : f(-1);
  }, h = () => {
    f("/pagolf/main");
  };
  return /* @__PURE__ */ a.jsxs("header", { className: "flex items-center justify-between mb-12 h-[40px]", children: [
    i && /* @__PURE__ */ a.jsx("button", { onClick: m, className: "p-2", children: /* @__PURE__ */ a.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }),
    /* @__PURE__ */ a.jsx("div", {}),
    /* @__PURE__ */ a.jsx("h1", { className: `${l[c].header} font-bold`, children: u }),
    /* @__PURE__ */ a.jsx("div", {}),
    d && /* @__PURE__ */ a.jsx("button", { onClick: h, className: "p-2", children: /* @__PURE__ */ a.jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }) })
  ] });
}, ue = ({
  showBackButton: i = !0,
  nextButtonLabel: d = "다음",
  fontSize: u,
  fontConfig: c = W,
  onNextClick: l,
  onBackClick: s
}) => {
  const f = D(), m = () => {
    s ? s() : f(-1);
  };
  return /* @__PURE__ */ a.jsxs("div", { className: "mt-auto pt-4 flex gap-3", children: [
    i && /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: m,
        className: `flex-1 bg-gray-200 text-gray-700 font-bold py-4 rounded-xl ${c[u].footer_button} hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700`,
        children: "뒤로"
      }
    ),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: l,
        className: `${i ? "flex-[2]" : "w-full"} bg-[#1e4632] text-white font-bold py-4 rounded-xl ${c[u].footer_button} hover:bg-[#163324] transition-colors shadow-lg dark:bg-[#4ade80] dark:text-[#1e4632]`,
        children: d
      }
    )
  ] });
}, ce = ({
  isOpen: i,
  onClose: d,
  title: u,
  message: c,
  onConfirm: l,
  confirmLabel: s = "확인",
  cancelLabel: f = "취소"
}) => i ? /* @__PURE__ */ a.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4", children: [
  /* @__PURE__ */ a.jsx(
    "div",
    {
      className: "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity",
      onClick: d
    }
  ),
  /* @__PURE__ */ a.jsxs("div", { className: "relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 transform transition-all scale-100", children: [
    u && /* @__PURE__ */ a.jsx("h3", { className: "text-lg font-bold text-gray-900 dark:text-white mb-2", children: u }),
    /* @__PURE__ */ a.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-6 text-center text-lg", children: c }),
    /* @__PURE__ */ a.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: d,
          className: "flex-1 py-3 px-4 rounded-xl font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors",
          children: f
        }
      ),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          onClick: l,
          className: "flex-1 py-3 px-4 rounded-xl font-medium text-white bg-[#1e4632] hover:bg-[#163325] dark:bg-[#4ade80] dark:text-[#1e4632] dark:hover:bg-[#4ade80]/90 transition-colors",
          children: s
        }
      )
    ] })
  ] })
] }) : null;
export {
  W as FONT_CONFIG,
  ue as FooterButton,
  ie as Header,
  ce as Modal
};
