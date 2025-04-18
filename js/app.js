(() => {
    "use strict";
    var __webpack_modules__ = {
        287: (__unused_webpack_module, exports) => {
            /**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
            var l = Symbol.for("react.element"), n = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z = Symbol.iterator;
            function A(a) {
                if (null === a || "object" !== typeof a) return null;
                z && a[z] || a["@@iterator"];
                return "function" === typeof a ? a : null;
            }
            var B = {
                isMounted: function() {
                    return !1;
                },
                enqueueForceUpdate: function() {},
                enqueueReplaceState: function() {},
                enqueueSetState: function() {}
            }, C = Object.assign, D = {};
            function E(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            E.prototype.isReactComponent = {};
            E.prototype.setState = function(a, b) {
                if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, a, b, "setState");
            };
            E.prototype.forceUpdate = function(a) {
                this.updater.enqueueForceUpdate(this, a, "forceUpdate");
            };
            function F() {}
            F.prototype = E.prototype;
            function G(a, b, e) {
                this.props = a;
                this.context = b;
                this.refs = D;
                this.updater = e || B;
            }
            var H = G.prototype = new F;
            H.constructor = G;
            C(H, E.prototype);
            H.isPureReactComponent = !0;
            var I = Array.isArray, J = Object.prototype.hasOwnProperty, K = {
                current: null
            }, L = {
                key: !0,
                ref: !0,
                __self: !0,
                __source: !0
            };
            function M(a, b, e) {
                var d, c = {}, k = null, h = null;
                if (null != b) for (d in void 0 !== b.ref && b.ref, void 0 !== b.key && "" + b.key, 
                b) J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
                var g = arguments.length - 2;
                if (1 === g) c.children = e; else if (1 < g) {
                    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];
                    c.children = f;
                }
                if (a && a.defaultProps) for (d in a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
                return {
                    $$typeof: l,
                    type: a,
                    key: k,
                    ref: h,
                    props: c,
                    _owner: K.current
                };
            }
            function N(a, b) {
                return {
                    $$typeof: l,
                    type: a.type,
                    key: b,
                    ref: a.ref,
                    props: a.props,
                    _owner: a._owner
                };
            }
            function O(a) {
                return "object" === typeof a && null !== a && a.$$typeof === l;
            }
            function escape(a) {
                var b = {
                    "=": "=0",
                    ":": "=2"
                };
                return "$" + a.replace(/[=:]/g, (function(a) {
                    return b[a];
                }));
            }
            var P = /\/+/g;
            function Q(a, b) {
                return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
            }
            function R(a, b, e, d, c) {
                var k = typeof a;
                if ("undefined" === k || "boolean" === k) 0;
                var h = !1;
                if (null === a) 0; else switch (k) {
                  case "string":
                  case "number":
                    0;
                    break;

                  case "object":
                    switch (a.$$typeof) {
                      case l:
                      case n:
                        0;
                    }
                }
                if (h) return c(h), "" === d ? "." + Q(h, 0) : d, I(c) ? (null != a && a.replace(P, "$&/") + "/", 
                R(c, b, e, "", (function(a) {
                    return a;
                }))) : null != c && (O(c) && N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a), 
                b.push(c)), 1;
                0;
                0;
                if (I(a)) for (var g = 0; g < a.length; g++) {
                    a[g];
                    var f = d + Q(k, g);
                    h += R(k, b, e, f, c);
                } else if (A(a), "function" === typeof f) for (f.call(a), 0; !a.next().done; ) k.value, 
                d + Q(k, g++), h += R(k, b, e, f, c); else if ("object" === k) throw String(a), 
                Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
                return h;
            }
            function S(a, b, e) {
                if (null == a) return a;
                var d = [], c = 0;
                R(a, d, "", "", (function(a) {
                    return b.call(e, a, c++);
                }));
                return d;
            }
            function T(a) {
                if (-1 === a._status) {
                    var b = a._result;
                    b();
                    b.then((function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
                    }), (function(b) {
                        if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
                    }));
                    -1 === a._status && (a._status = 0, a._result = b);
                }
                if (1 === a._status) return a._result.default;
                throw a._result;
            }
            var U = {
                current: null
            }, V = {
                transition: null
            }, W = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: V,
                ReactCurrentOwner: K
            };
            function X() {
                throw Error("act(...) is not supported in production builds of React.");
            }
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
            0;
        },
        540: (module, __unused_webpack_exports, __webpack_require__) => {
            if (true) __webpack_require__(287);
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        return module.exports;
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    __webpack_require__(540);
    "use strict";
    const elementToggleFunc = function(elem) {
        elem.classList.toggle("active");
    };
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    sidebarBtn.addEventListener("click", (function() {
        elementToggleFunc(sidebar);
    }));
    const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalDate = document.querySelector("[data-modal-date]");
    const modalText = document.querySelector("[data-modal-text]");
    const testimonialsModalFunc = function() {
        modalContainer.classList.toggle("active");
        overlay.classList.toggle("active");
    };
    for (let i = 0; i < testimonialsItem.length; i++) testimonialsItem[i].addEventListener("click", (function() {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalDate.innerHTML = this.querySelector("[data-testimonials-date]").innerHTML;
        modalDate.setAttribute("datetime", this.querySelector("[data-testimonials-date]").getAttribute("datetime"));
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
    }));
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
    const script_select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-select-value]");
    const filterBtn = document.querySelectorAll("[data-filter-btn]");
    script_select.addEventListener("click", (function() {
        elementToggleFunc(this);
    }));
    for (let i = 0; i < selectItems.length; i++) selectItems[i].addEventListener("click", (function() {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(script_select);
        filterFunc(selectedValue);
    }));
    const filterItems = document.querySelectorAll("[data-filter-item]");
    const filterFunc = function(selectedValue) {
        for (let i = 0; i < filterItems.length; i++) if (selectedValue == "all" || selectedValue == "всі") filterItems[i].classList.add("active"); else if (selectedValue == filterItems[i].dataset.category) filterItems[i].classList.add("active"); else filterItems[i].classList.remove("active");
    };
    let lastClickedBtn = filterBtn[0];
    for (let i = 0; i < filterBtn.length; i++) filterBtn[i].addEventListener("click", (function() {
        let selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    }));
    const script_form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");
    for (let i = 0; i < formInputs.length; i++) formInputs[i].addEventListener("input", (function() {
        if (script_form.checkValidity()) formBtn.removeAttribute("disabled"); else formBtn.setAttribute("disabled", "");
    }));
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");
    navigationLinks.forEach((link => {
        link.addEventListener("click", (function() {
            const targetPage = this.dataset.target || this.innerHTML.toLowerCase();
            pages.forEach((page => {
                page.classList.toggle("active", page.dataset.page === targetPage);
            }));
            navigationLinks.forEach((nav => {
                nav.classList.toggle("active", nav.dataset.target === targetPage || nav.innerHTML.toLowerCase() === targetPage);
            }));
            window.scrollTo(0, 0);
        }));
    }));
    document.addEventListener("DOMContentLoaded", (function() {
        const storedLang = localStorage.getItem("userLanguage");
        const userLang = navigator.language || navigator.userLanguage;
        const defaultLang = "en";
        let currentPath = window.location.pathname.replace(/\/$/, "");
        if (currentPath === "") if (!storedLang) {
            let langRedirect = defaultLang;
            if (userLang.startsWith("uk")) langRedirect = "uk"; else if (userLang.startsWith("en")) langRedirect = "en";
            localStorage.setItem("userLanguage", langRedirect);
            window.location.href = `/${langRedirect}`;
        } else window.location.href = `/${storedLang}`; else {
            let detectedLang = currentPath.replace("/", "");
            if (detectedLang === "uk" || detectedLang === "en") localStorage.setItem("userLanguage", detectedLang);
        }
    }));
    //! Current year
        document.addEventListener("DOMContentLoaded", (function() {
        document.getElementById("current-year").textContent = (new Date).getFullYear();
    }));
    window["FLS"] = false;
})();