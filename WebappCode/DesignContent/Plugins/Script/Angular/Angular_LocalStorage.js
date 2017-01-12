﻿/*! ngstorage 0.3.6 | Copyright (c) 2015 Gias Kay Lee | MIT License */!function (a, b) { "use strict"; return "function" == typeof define && define.amd ? void define("ngStorage", ["angular"], function (a) { return b(a) }) : b(a) }("undefined" == typeof angular ? null : angular, function (a) { "use strict"; function b(b) { return ["$rootScope", "$window", "$log", "$timeout", function (c, d, e, f) { function g(a) { var b; try { b = d[a] } catch (c) { b = !1 } if (b && "localStorage" === a) { var e = "__" + Math.round(1e7 * Math.random()); try { localStorage.setItem(e, e), localStorage.removeItem(e) } catch (c) { b = !1 } } return b } var h, i, j = g(b) || (e.warn("This browser does not support Web Storage!"), { setItem: function () { }, getItem: function () { } }), k = { $default: function (b) { for (var c in b) a.isDefined(k[c]) || (k[c] = b[c]); return k }, $reset: function (a) { for (var b in k) "$" === b[0] || delete k[b] && j.removeItem("ngStorage-" + b); return k.$default(a) } }; try { j = d[b], j.length } catch (l) { e.warn("This browser does not support Web Storage!"), j = {} } for (var m, n = 0, o = j.length; o > n; n++) (m = j.key(n)) && "ngStorage-" === m.slice(0, 10) && (k[m.slice(10)] = a.fromJson(j.getItem(m))); return h = a.copy(k), c.$watch(function () { var b; i || (i = f(function () { if (i = null, !a.equals(k, h)) { b = a.copy(h), a.forEach(k, function (c, d) { a.isDefined(c) && "$" !== d[0] && j.setItem("ngStorage-" + d, a.toJson(c)), delete b[d] }); for (var c in b) j.removeItem("ngStorage-" + c); h = a.copy(k) } }, 100, !1)) }), "localStorage" === b && d.addEventListener && d.addEventListener("storage", function (b) { "ngStorage-" === b.key.slice(0, 10) && (b.newValue ? k[b.key.slice(10)] = a.fromJson(b.newValue) : delete k[b.key.slice(10)], h = a.copy(k), c.$apply()) }), k }] } a.module("ngStorage", []).factory("$localStorage", b("localStorage")).factory("$sessionStorage", b("sessionStorage")) });