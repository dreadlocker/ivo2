(function (t) { function e (e) { for (var a, r, i = e[0], s = e[1], l = e[2], u = 0, f = []; u < i.length; u++)r = i[u], Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]), o[r] = 0; for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]); g && g(e); while (f.length) f.shift()(); return c.push.apply(c, l || []), n() } function n () { for (var t, e = 0; e < c.length; e++) { for (var n = c[e], a = !0, r = 1; r < n.length; r++) { var i = n[r]; 0 !== o[i] && (a = !1) } a && (c.splice(e--, 1), t = s(s.s = n[0])) } return t } var a = {}, r = { app: 0 }, o = { app: 0 }, c = []; function i (t) { return s.p + "ivo2/js/" + ({}[t] || t) + "." + { "chunk-31b7b20b": "554f0d22", "chunk-389107c9": "f726c0b4", "chunk-f89ee0b4": "5ccbebc4" }[t] + ".js" } function s (e) { if (a[e]) return a[e].exports; var n = a[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports } s.e = function (t) { var e = [], n = { "chunk-31b7b20b": 1, "chunk-389107c9": 1, "chunk-f89ee0b4": 1 }; r[t] ? e.push(r[t]) : 0 !== r[t] && n[t] && e.push(r[t] = new Promise((function (e, n) { for (var a = "ivo2/css/" + ({}[t] || t) + "." + { "chunk-31b7b20b": "6beef712", "chunk-389107c9": "28289f65", "chunk-f89ee0b4": "7bde924c" }[t] + ".css", o = s.p + a, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) { var l = c[i], u = l.getAttribute("data-href") || l.getAttribute("href"); if ("stylesheet" === l.rel && (u === a || u === o)) return e() } var f = document.getElementsByTagName("style"); for (i = 0; i < f.length; i++) { l = f[i], u = l.getAttribute("data-href"); if (u === a || u === o) return e() } var g = document.createElement("link"); g.rel = "stylesheet", g.type = "text/css", g.onload = e, g.onerror = function (e) { var a = e && e.target && e.target.src || o, c = new Error("Loading CSS chunk " + t + " failed.\n(" + a + ")"); c.code = "CSS_CHUNK_LOAD_FAILED", c.request = a, delete r[t], g.parentNode.removeChild(g), n(c) }, g.href = o; var h = document.getElementsByTagName("head")[0]; h.appendChild(g) })).then((function () { r[t] = 0 }))); var a = o[t]; if (0 !== a) if (a) e.push(a[2]); else { var c = new Promise((function (e, n) { a = o[t] = [e, n] })); e.push(a[2] = c); var l, u = document.createElement("script"); u.charset = "utf-8", u.timeout = 120, s.nc && u.setAttribute("nonce", s.nc), u.src = i(t); var f = new Error; l = function (e) { u.onerror = u.onload = null, clearTimeout(g); var n = o[t]; if (0 !== n) { if (n) { var a = e && ("load" === e.type ? "missing" : e.type), r = e && e.target && e.target.src; f.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")", f.name = "ChunkLoadError", f.type = a, f.request = r, n[1](f) } o[t] = void 0 } }; var g = setTimeout((function () { l({ type: "timeout", target: u }) }), 12e4); u.onerror = u.onload = l, document.head.appendChild(u) } return Promise.all(e) }, s.m = t, s.c = a, s.d = function (t, e, n) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, s.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, s.t = function (t, e) { if (1 & e && (t = s(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var n = Object.create(null); if (s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var a in t) s.d(n, a, function (e) { return t[e] }.bind(null, a)); return n }, s.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return s.d(e, "a", e), e }, s.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, s.p = "/", s.oe = function (t) { throw console.error(t), t }; var l = window["webpackJsonp"] = window["webpackJsonp"] || [], u = l.push.bind(l); l.push = e, l = l.slice(); for (var f = 0; f < l.length; f++)e(l[f]); var g = u; c.push([0, "chunk-vendors"]), n() })({ 0: function (t, e, n) { t.exports = n("56d7") }, "0657": function (t, e, n) { }, "0b57": function (t, e, n) { }, "0d27": function (t, e, n) { t.exports = n.p + "ivo2/img/42-space-scrolling-background850-2.642a3e90.jpg" }, "45a5": function (t, e, n) { }, "4e06": function (t, e, n) { }, "56d7": function (t, e, n) { "use strict"; n.r(e); n("e260"), n("e6cf"), n("cca6"), n("a79d"); var a = n("2b0e"), r = n("2f62"), o = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "app" }, [n("Logo"), n("div", { staticClass: "content" }, [n("router-view")], 1), n("BottomContent"), n("Footer")], 1) }, c = [], i = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "logo", on: { click: t.goToHomePage } }) }, s = [], l = { name: "Logo", data: function () { return { url: this.$route } }, methods: { goToHomePage: function () { this.$store.commit("changeActivetab"), this.$router.push("/") } }, mounted: function () { } }, u = l, f = (n("e47e"), n("2877")), g = Object(f["a"])(u, i, s, !1, null, "08b74908", null), h = g.exports, d = function () { var t = this, e = t.$createElement, a = t._self._c || e; return a("div", { staticClass: "bottom-content" }, [this.$store.state.inProjects ? a("img", { attrs: { src: n("0d27"), alt: "projects" } }) : t._e()]) }, b = [], p = { name: "BottomContent" }, m = p, v = (n("ad66"), Object(f["a"])(m, d, b, !1, null, "0585a75a", null)), _ = v.exports, k = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "footer d-flex jc-sb" }, [this.$store.state.inProjects ? n("div", [n("button", { staticClass: "main-text-color", on: { click: t.toggleFilter } }, [t._v(" " + t._s(this.$store.state.language.filters.filters) + ": ")]), n("button", { class: t.isFilterAll ? "main-text-color" : "main-text-color-darker", on: { click: t.toggleFilter } }, [t._v(" " + t._s(this.$store.state.language.filters.all) + " ")]), n("span", { staticClass: "main-text-color" }, [t._v(" / ")]), n("button", { class: t.isFilterAll ? "main-text-color-darker" : "main-text-color", on: { click: t.toggleFilter } }, [t._v(" " + t._s(this.$store.state.language.filters.realised) + " ")])]) : n("div"), n("div", [n("button", { class: this.$store.state.activeLanguage === this.$store.state.langBgStr ? "main-text-color" : "main-text-color-darker", on: { click: t.toggleLanguage } }, [t._v(" " + t._s(this.$store.state.langBgStr) + " ")]), n("span", { staticClass: "main-text-color" }, [t._v(" / ")]), n("button", { class: this.$store.state.activeLanguage === this.$store.state.langEnStr ? "main-text-color" : "main-text-color-darker", on: { click: t.toggleLanguage } }, [t._v(" " + t._s(this.$store.state.langEnStr) + " ")])])]) }, j = [], x = (n("159b"), n("b0c0"), "about"), y = "projects", E = "contacts", C = { filters: { filters: "FILTER", all: "ALL", realised: "REALISED" }, pageInfo: { about: ["FOR THE COMPANY"], projects: ["PROJECTS INFO"], contacts: ["CONTACTS INFO"] } }, O = { filters: { filters: "ФИЛТРИ", all: "Всички", realised: "Реализирани" }, pageInfo: { about: ["ЗА ФИРМАТА"], projects: ["ИНФОРМАЦИЯ ЗА ПРОЕКТИ"], contacts: ["ИНФОРМАЦИЯ ЗА КОНТАКТИ"] } }, $ = ["About", "Projects", "Contacts"], A = ["За нас", "Проекти", "Контакти"]; a["a"].use(r["a"]); var L = new r["a"].Store({ state: { inProjects: !1, activeLanguage: "EN", language: C, langEnStr: "EN", langBgStr: "BG", navbar: [{ name: $[0], path: x, active: !1 }, { name: $[1], path: y, active: !1 }, { name: $[2], path: E, active: !1 }] }, mutations: { showProjectFilters: function (t) { t.inProjects = !0 }, hideProjectFilters: function (t) { t.inProjects = !1 }, changeLanguage: function (t) { t.activeLanguage === t.langEnStr ? (t.activeLanguage = t.langBgStr, t.navbar.forEach((function (t, e) { t.name = A[e] })), t.language = O) : (t.activeLanguage = t.langEnStr, t.navbar.forEach((function (t, e) { t.name = $[e] })), t.language = C) }, changeActivetab: function (t, e) { t.navbar.forEach((function (t, n) { t.active = e === n })) } } }), P = L, S = { name: "Footer", data: function () { return { isFilterAll: !1 } }, methods: { toggleFilter: function () { this.isFilterAll = !this.isFilterAll }, toggleLanguage: function () { this.$store.commit("changeLanguage") } } }, w = S, F = (n("fa6b"), Object(f["a"])(w, k, j, !1, null, "7255824f", null)), T = F.exports, N = { name: "App", components: { Logo: h, BottomContent: _, Footer: T }, data: function () { return {} } }, B = N, I = (n("5c0b"), Object(f["a"])(B, o, c, !1, null, null, null)), H = I.exports, M = (n("d3b7"), n("3ca3"), n("ddb0"), n("8c4f")), R = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "top-content d-flex" }, [n("Navbar"), n("router-view")], 1) }, D = [], J = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("nav", { staticClass: "navbar" }, [n("div", { staticClass: "tabs-holder d-flex" }, t._l(this.$store.state.navbar, (function (e, a) { return n("div", { key: e.name, class: ["tab-holder d-flex", e.active ? "active-bg-color" : "main-bg-color"], on: { click: function (e) { return t.changeActivetab(a) } } }, [n("router-link", { staticClass: "link main-text-color", attrs: { to: e.path } }, [t._v(" " + t._s(e.name) + " ")])], 1) })), 0)]) }, q = [], G = { methods: { changeActivetab: function (t) { this.$store.commit("changeActivetab", t) } } }, K = G, U = (n("b0c3"), Object(f["a"])(K, J, q, !1, null, "3326931c", null)), Y = U.exports, z = { name: "Home", components: { Navbar: Y } }, Q = z, V = (n("fb28"), Object(f["a"])(Q, R, D, !1, null, "69ee3ec1", null)), W = V.exports; a["a"].use(M["a"]); var X = [{ path: "/", name: "Home", component: W, children: [{ path: x, name: "About", component: function () { return n.e("chunk-f89ee0b4").then(n.bind(null, "84ba")) } }, { path: y, name: "Projects", component: function () { return n.e("chunk-389107c9").then(n.bind(null, "8cca")) } }, { path: E, name: "Contacts", component: function () { return n.e("chunk-31b7b20b").then(n.bind(null, "63d8")) } }] }], Z = new M["a"]({ mode: "history", base: "/", routes: X }), tt = Z; a["a"].use(r["a"]), a["a"].config.productionTip = !1, new a["a"]({ router: tt, store: P, render: function (t) { return t(H) } }).$mount("#app") }, "5c0b": function (t, e, n) { "use strict"; n("9c0c") }, "9c0c": function (t, e, n) { }, ad66: function (t, e, n) { "use strict"; n("0657") }, b0c3: function (t, e, n) { "use strict"; n("0b57") }, e47e: function (t, e, n) { "use strict"; n("f3aa") }, f3aa: function (t, e, n) { }, fa6b: function (t, e, n) { "use strict"; n("4e06") }, fb28: function (t, e, n) { "use strict"; n("45a5") } });
//# sourceMappingURL=app.aebc55e7.js.map