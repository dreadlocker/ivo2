(function (t) { function e (e) { for (var o, a, i = e[0], s = e[1], l = e[2], u = 0, f = []; u < i.length; u++)a = i[u], Object.prototype.hasOwnProperty.call(r, a) && r[a] && f.push(r[a][0]), r[a] = 0; for (o in s) Object.prototype.hasOwnProperty.call(s, o) && (t[o] = s[o]); g && g(e); while (f.length) f.shift()(); return c.push.apply(c, l || []), n() } function n () { for (var t, e = 0; e < c.length; e++) { for (var n = c[e], o = !0, a = 1; a < n.length; a++) { var i = n[a]; 0 !== r[i] && (o = !1) } o && (c.splice(e--, 1), t = s(s.s = n[0])) } return t } var o = {}, a = { app: 0 }, r = { app: 0 }, c = []; function i (t) { return s.p + "ivo2/js/" + ({}[t] || t) + "." + { "chunk-6471938e": "4184bb7b", "chunk-6673e2ba": "b1aac299", "chunk-d8ca4d60": "d72b0b07" }[t] + ".js" } function s (e) { if (o[e]) return o[e].exports; var n = o[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, s), n.l = !0, n.exports } s.e = function (t) { var e = [], n = { "chunk-6471938e": 1, "chunk-6673e2ba": 1, "chunk-d8ca4d60": 1 }; a[t] ? e.push(a[t]) : 0 !== a[t] && n[t] && e.push(a[t] = new Promise((function (e, n) { for (var o = "ivo2/css/" + ({}[t] || t) + "." + { "chunk-6471938e": "7d9b957c", "chunk-6673e2ba": "7d9b957c", "chunk-d8ca4d60": "ccdab46b" }[t] + ".css", r = s.p + o, c = document.getElementsByTagName("link"), i = 0; i < c.length; i++) { var l = c[i], u = l.getAttribute("data-href") || l.getAttribute("href"); if ("stylesheet" === l.rel && (u === o || u === r)) return e() } var f = document.getElementsByTagName("style"); for (i = 0; i < f.length; i++) { l = f[i], u = l.getAttribute("data-href"); if (u === o || u === r) return e() } var g = document.createElement("link"); g.rel = "stylesheet", g.type = "text/css", g.onload = e, g.onerror = function (e) { var o = e && e.target && e.target.src || r, c = new Error("Loading CSS chunk " + t + " failed.\n(" + o + ")"); c.code = "CSS_CHUNK_LOAD_FAILED", c.request = o, delete a[t], g.parentNode.removeChild(g), n(c) }, g.href = r; var d = document.getElementsByTagName("head")[0]; d.appendChild(g) })).then((function () { a[t] = 0 }))); var o = r[t]; if (0 !== o) if (o) e.push(o[2]); else { var c = new Promise((function (e, n) { o = r[t] = [e, n] })); e.push(o[2] = c); var l, u = document.createElement("script"); u.charset = "utf-8", u.timeout = 120, s.nc && u.setAttribute("nonce", s.nc), u.src = i(t); var f = new Error; l = function (e) { u.onerror = u.onload = null, clearTimeout(g); var n = r[t]; if (0 !== n) { if (n) { var o = e && ("load" === e.type ? "missing" : e.type), a = e && e.target && e.target.src; f.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", f.name = "ChunkLoadError", f.type = o, f.request = a, n[1](f) } r[t] = void 0 } }; var g = setTimeout((function () { l({ type: "timeout", target: u }) }), 12e4); u.onerror = u.onload = l, document.head.appendChild(u) } return Promise.all(e) }, s.m = t, s.c = o, s.d = function (t, e, n) { s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }) }, s.r = function (t) { "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, s.t = function (t, e) { if (1 & e && (t = s(t)), 8 & e) return t; if (4 & e && "object" === typeof t && t && t.__esModule) return t; var n = Object.create(null); if (s.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) s.d(n, o, function (e) { return t[e] }.bind(null, o)); return n }, s.n = function (t) { var e = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return s.d(e, "a", e), e }, s.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, s.p = "/", s.oe = function (t) { throw console.error(t), t }; var l = window["webpackJsonp"] = window["webpackJsonp"] || [], u = l.push.bind(l); l.push = e, l = l.slice(); for (var f = 0; f < l.length; f++)e(l[f]); var g = u; c.push([0, "chunk-vendors"]), n() })({ 0: function (t, e, n) { t.exports = n("56d7") }, "06c9": function (t, e, n) { "use strict"; n("7d9e") }, "0f66": function (t, e, n) { }, "26e1": function (t, e, n) { "use strict"; n("5f1b") }, "314e": function (t, e, n) { t.exports = n.p + "ivo2/img/42-space-scrolling-background850-2.642a3e90.jpg" }, 4672: function (t, e, n) { "use strict"; n("cddc") }, "56d7": function (t, e, n) { "use strict"; n.r(e); n("e260"), n("e6cf"), n("cca6"), n("a79d"); var o = n("2b0e"), a = n("2f62"), r = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "app" }, [n("Logo"), n("router-view"), n("Footer")], 1) }, c = [], i = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "logo-holder d-flex ai-fe" }, [n("div", { class: ["logo", this.$store.state.runLogoAnimation ? "logo-animation" : ""], on: { click: t.goToHomePage } })]) }, s = [], l = { name: "Logo", data: function () { return {} }, methods: { goToHomePage: function () { this.$store.commit("changeActivetab"), this.$store.commit("rerunLogoAnimation"), "/" !== this.$route.fullPath && this.$router.push("/") } } }, u = l, f = (n("06c9"), n("2877")), g = Object(f["a"])(u, i, s, !1, null, "258298cb", null), d = g.exports, h = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "footer d-flex jc-sb ai-c" }, [this.$store.state.inProjects ? n("div", [n("span", { staticClass: "filter main-text-color" }, [t._v(" " + t._s(this.$store.state.language.filters.filters) + ": ")]), n("button", { class: t.isFilterAll ? "main-text-color-darker" : "main-text-color", on: { click: t.toggleFilter } }, [t._v(" " + t._s(this.$store.state.language.filters.all) + " ")]), n("span", { staticClass: "main-text-color" }, [t._v(" / ")]), n("button", { class: t.isFilterAll ? "main-text-color" : "main-text-color-darker", on: { click: t.toggleFilter } }, [t._v(" " + t._s(this.$store.state.language.filters.realised) + " ")])]) : n("div"), n("div", [n("button", { class: this.$store.state.activeLanguage === this.$store.state.langBgStr ? "main-text-color-darker" : "main-text-color", on: { click: t.changeLanguageToBg } }, [t._v(" " + t._s(this.$store.state.langBgStr) + " ")]), n("span", { staticClass: "main-text-color" }, [t._v(" / ")]), n("button", { class: this.$store.state.activeLanguage === this.$store.state.langEnStr ? "main-text-color-darker" : "main-text-color", on: { click: t.changeLanguageToEn } }, [t._v(" " + t._s(this.$store.state.langEnStr) + " ")])])]) }, m = [], p = (n("159b"), n("b0c0"), "about"), b = "projects", v = "contacts", j = { filters: { filters: "FILTER", all: "ALL", realised: "REALISED" }, pageInfo: { about: ["FOR THE COMPANY"], projects: ["PROJECTS INFO"], contacts: ["CONTACTS INFO"] }, projectsInfo: ["info1info1info1", "info2", "info3", "info4"] }, _ = { filters: { filters: "ФИЛТРИ", all: "ВСИЧКИ", realised: "РЕАЛИЗИРАНИ" }, pageInfo: { about: ["ЗА ФИРМАТА"], projects: ["ИНФОРМАЦИЯ ЗА ПРОЕКТИ"], contacts: ["ИНФОРМАЦИЯ ЗА КОНТАКТИ"] }, projectsInfo: ["инфо1инфо1инфо1", "инфо2", "инфо3", "инфо4"] }, k = ["about", "projects", "contacts"], x = ["за нас", "проекти", "контакти"]; o["a"].use(a["a"]); var E = new a["a"].Store({ state: { inProjects: !1, activeLanguage: "EN", language: j, langEnStr: "EN", langBgStr: "BG", navbar: [{ name: k[0], path: p, active: !1 }, { name: k[1], path: b, active: !1 }, { name: k[2], path: v, active: !1 }], runLogoAnimation: !1 }, mutations: { showProjectFilters: function (t) { t.inProjects = !0 }, hideProjectFilters: function (t) { t.inProjects = !1 }, changeLanguageToBg: function (t) { t.activeLanguage = t.langBgStr, t.navbar.forEach((function (t, e) { t.name = x[e] })), t.language = _ }, changeLanguageToEn: function (t) { t.activeLanguage = t.langEnStr, t.navbar.forEach((function (t, e) { t.name = k[e] })), t.language = j }, changeActivetab: function (t, e) { t.navbar.forEach((function (t, n) { t.active = e === n })) }, rerunLogoAnimation: function (t, e) { t.runLogoAnimation = !1, setTimeout((function () { t.runLogoAnimation = !0 }), 0) } } }), L = E, y = { name: "Footer", data: function () { return { isFilterAll: !1 } }, methods: { toggleFilter: function () { this.isFilterAll = !this.isFilterAll }, changeLanguageToBg: function () { this.$store.commit("changeLanguageToBg") }, changeLanguageToEn: function () { this.$store.commit("changeLanguageToEn") } } }, C = y, $ = (n("5abc"), Object(f["a"])(C, h, m, !1, null, "68c5ef18", null)), A = $.exports, O = { name: "App", components: { Logo: d, Footer: A }, data: function () { return {} } }, P = O, T = (n("5c0b"), Object(f["a"])(P, r, c, !1, null, null, null)), w = T.exports, S = (n("d3b7"), n("3ca3"), n("ddb0"), n("8c4f")), F = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("div", { staticClass: "top-content d-flex jc-sb" }, [n("div", { staticClass: "nav-content-holder d-flex jc-sb" }, [n("Navbar"), n("router-view", { staticClass: "middle-content" })], 1), n("div", { staticClass: "projects-img-holder" }, [n("BottomContent")], 1)]) }, B = [], N = function () { var t = this, e = t.$createElement, n = t._self._c || e; return n("nav", { staticClass: "navbar" }, [n("div", { staticClass: "tabs-holder d-flex jc-sb" }, t._l(this.$store.state.navbar, (function (e, o) { return n("div", { key: e.name, class: ["tab-holder d-flex", e.active ? "active-bg-color" : "main-bg-color"], on: { click: function (e) { return t.changeActivetab(o) } } }, [n("router-link", { staticClass: "link main-text-color", attrs: { to: e.path } }, [t._v(" " + t._s(e.name) + " ")])], 1) })), 0)]) }, I = [], H = { methods: { changeActivetab: function (t) { this.$store.commit("changeActivetab", t), this.$store.commit("rerunLogoAnimation") } } }, M = H, R = (n("4672"), Object(f["a"])(M, N, I, !1, null, "6ec5159e", null)), D = R.exports, J = function () { var t = this, e = t.$createElement, o = t._self._c || e; return o("div", { staticClass: "bottom-content" }, [this.$store.state.inProjects ? o("img", { attrs: { src: n("314e"), alt: "projects" } }) : t._e(), this.$store.state.inProjects ? t._l(this.$store.state.language.projectsInfo, (function (e, n) { return o("button", { key: n }, [o("div", { staticClass: "popup d-flex jc-c ai-c" }, [t._v(" " + t._s(e) + " ")])]) })) : t._e()], 2) }, q = [], G = { name: "BottomContent" }, K = G, U = (n("eb9d"), Object(f["a"])(K, J, q, !1, null, "23a1718b", null)), Y = U.exports, z = { name: "Home", components: { Navbar: D, BottomContent: Y } }, Q = z, V = (n("26e1"), Object(f["a"])(Q, F, B, !1, null, "25ac2aef", null)), W = V.exports; o["a"].use(S["a"]); var X = [{ path: "/", name: "Home", component: W, children: [{ path: p, name: "About", component: function () { return n.e("chunk-6673e2ba").then(n.bind(null, "84ba")) } }, { path: b, name: "Projects", component: function () { return n.e("chunk-d8ca4d60").then(n.bind(null, "8cca")) } }, { path: v, name: "Contacts", component: function () { return n.e("chunk-6471938e").then(n.bind(null, "63d8")) } }] }], Z = new S["a"]({ mode: "history", base: "/", routes: X }), tt = Z; o["a"].use(a["a"]), o["a"].config.productionTip = !1, new o["a"]({ router: tt, store: L, render: function (t) { return t(w) } }).$mount("#app") }, "5abc": function (t, e, n) { "use strict"; n("d73a") }, "5c0b": function (t, e, n) { "use strict"; n("9c0c") }, "5f1b": function (t, e, n) { }, "7d9e": function (t, e, n) { }, "9c0c": function (t, e, n) { }, cddc: function (t, e, n) { }, d73a: function (t, e, n) { }, eb9d: function (t, e, n) { "use strict"; n("0f66") } });
//# sourceMappingURL=app.f1acf028.js.map