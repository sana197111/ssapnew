(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [406], {
        9669: function(t, e, n) {
            t.exports = n(1609)
        },
        5448: function(t, e, n) {
            "use strict";
            var r = n(4867),
                o = n(6026),
                i = n(4372),
                a = n(5327),
                s = n(4097),
                u = n(4109),
                c = n(7985),
                l = n(5061),
                f = n(7874),
                d = n(5263);
            t.exports = function(t) {
                return new Promise((function(e, n) {
                    var p, h = t.data,
                        v = t.headers,
                        m = t.responseType;

                    function y() {
                        t.cancelToken && t.cancelToken.unsubscribe(p), t.signal && t.signal.removeEventListener("abort", p)
                    }
                    r.isFormData(h) && delete v["Content-Type"];
                    var g = new XMLHttpRequest;
                    if (t.auth) {
                        var b = t.auth.username || "",
                            x = t.auth.password ? unescape(encodeURIComponent(t.auth.password)) : "";
                        v.Authorization = "Basic " + btoa(b + ":" + x)
                    }
                    var w = s(t.baseURL, t.url);

                    function P() {
                        if (g) {
                            var r = "getAllResponseHeaders" in g ? u(g.getAllResponseHeaders()) : null,
                                i = {
                                    data: m && "text" !== m && "json" !== m ? g.response : g.responseText,
                                    status: g.status,
                                    statusText: g.statusText,
                                    headers: r,
                                    config: t,
                                    request: g
                                };
                            o((function(t) {
                                e(t), y()
                            }), (function(t) {
                                n(t), y()
                            }), i), g = null
                        }
                    }
                    if (g.open(t.method.toUpperCase(), a(w, t.params, t.paramsSerializer), !0), g.timeout = t.timeout, "onloadend" in g ? g.onloadend = P : g.onreadystatechange = function() {
                            g && 4 === g.readyState && (0 !== g.status || g.responseURL && 0 === g.responseURL.indexOf("file:")) && setTimeout(P)
                        }, g.onabort = function() {
                            g && (n(l("Request aborted", t, "ECONNABORTED", g)), g = null)
                        }, g.onerror = function() {
                            n(l("Network Error", t, null, g)), g = null
                        }, g.ontimeout = function() {
                            var e = t.timeout ? "timeout of " + t.timeout + "ms exceeded" : "timeout exceeded",
                                r = t.transitional || f;
                            t.timeoutErrorMessage && (e = t.timeoutErrorMessage), n(l(e, t, r.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", g)), g = null
                        }, r.isStandardBrowserEnv()) {
                        var E = (t.withCredentials || c(w)) && t.xsrfCookieName ? i.read(t.xsrfCookieName) : void 0;
                        E && (v[t.xsrfHeaderName] = E)
                    }
                    "setRequestHeader" in g && r.forEach(v, (function(t, e) {
                        "undefined" === typeof h && "content-type" === e.toLowerCase() ? delete v[e] : g.setRequestHeader(e, t)
                    })), r.isUndefined(t.withCredentials) || (g.withCredentials = !!t.withCredentials), m && "json" !== m && (g.responseType = t.responseType), "function" === typeof t.onDownloadProgress && g.addEventListener("progress", t.onDownloadProgress), "function" === typeof t.onUploadProgress && g.upload && g.upload.addEventListener("progress", t.onUploadProgress), (t.cancelToken || t.signal) && (p = function(t) {
                        g && (n(!t || t && t.type ? new d("canceled") : t), g.abort(), g = null)
                    }, t.cancelToken && t.cancelToken.subscribe(p), t.signal && (t.signal.aborted ? p() : t.signal.addEventListener("abort", p))), h || (h = null), g.send(h)
                }))
            }
        },
        1609: function(t, e, n) {
            "use strict";
            var r = n(4867),
                o = n(1849),
                i = n(321),
                a = n(7185);
            var s = function t(e) {
                var n = new i(e),
                    s = o(i.prototype.request, n);
                return r.extend(s, i.prototype, n), r.extend(s, n), s.create = function(n) {
                    return t(a(e, n))
                }, s
            }(n(5546));
            s.Axios = i, s.Cancel = n(5263), s.CancelToken = n(4972), s.isCancel = n(6502), s.VERSION = n(7288).version, s.all = function(t) {
                return Promise.all(t)
            }, s.spread = n(8713), s.isAxiosError = n(6268), t.exports = s, t.exports.default = s
        },
        5263: function(t) {
            "use strict";

            function e(t) {
                this.message = t
            }
            e.prototype.toString = function() {
                return "Cancel" + (this.message ? ": " + this.message : "")
            }, e.prototype.__CANCEL__ = !0, t.exports = e
        },
        4972: function(t, e, n) {
            "use strict";
            var r = n(5263);

            function o(t) {
                if ("function" !== typeof t) throw new TypeError("executor must be a function.");
                var e;
                this.promise = new Promise((function(t) {
                    e = t
                }));
                var n = this;
                this.promise.then((function(t) {
                    if (n._listeners) {
                        var e, r = n._listeners.length;
                        for (e = 0; e < r; e++) n._listeners[e](t);
                        n._listeners = null
                    }
                })), this.promise.then = function(t) {
                    var e, r = new Promise((function(t) {
                        n.subscribe(t), e = t
                    })).then(t);
                    return r.cancel = function() {
                        n.unsubscribe(e)
                    }, r
                }, t((function(t) {
                    n.reason || (n.reason = new r(t), e(n.reason))
                }))
            }
            o.prototype.throwIfRequested = function() {
                if (this.reason) throw this.reason
            }, o.prototype.subscribe = function(t) {
                this.reason ? t(this.reason) : this._listeners ? this._listeners.push(t) : this._listeners = [t]
            }, o.prototype.unsubscribe = function(t) {
                if (this._listeners) {
                    var e = this._listeners.indexOf(t); - 1 !== e && this._listeners.splice(e, 1)
                }
            }, o.source = function() {
                var t;
                return {
                    token: new o((function(e) {
                        t = e
                    })),
                    cancel: t
                }
            }, t.exports = o
        },
        6502: function(t) {
            "use strict";
            t.exports = function(t) {
                return !(!t || !t.__CANCEL__)
            }
        },
        321: function(t, e, n) {
            "use strict";
            var r = n(4867),
                o = n(5327),
                i = n(206),
                a = n(3572),
                s = n(7185),
                u = n(4875),
                c = u.validators;

            function l(t) {
                this.defaults = t, this.interceptors = {
                    request: new i,
                    response: new i
                }
            }
            l.prototype.request = function(t, e) {
                "string" === typeof t ? (e = e || {}).url = t : e = t || {}, (e = s(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
                var n = e.transitional;
                void 0 !== n && u.assertOptions(n, {
                    silentJSONParsing: c.transitional(c.boolean),
                    forcedJSONParsing: c.transitional(c.boolean),
                    clarifyTimeoutError: c.transitional(c.boolean)
                }, !1);
                var r = [],
                    o = !0;
                this.interceptors.request.forEach((function(t) {
                    "function" === typeof t.runWhen && !1 === t.runWhen(e) || (o = o && t.synchronous, r.unshift(t.fulfilled, t.rejected))
                }));
                var i, l = [];
                if (this.interceptors.response.forEach((function(t) {
                        l.push(t.fulfilled, t.rejected)
                    })), !o) {
                    var f = [a, void 0];
                    for (Array.prototype.unshift.apply(f, r), f = f.concat(l), i = Promise.resolve(e); f.length;) i = i.then(f.shift(), f.shift());
                    return i
                }
                for (var d = e; r.length;) {
                    var p = r.shift(),
                        h = r.shift();
                    try {
                        d = p(d)
                    } catch (v) {
                        h(v);
                        break
                    }
                }
                try {
                    i = a(d)
                } catch (v) {
                    return Promise.reject(v)
                }
                for (; l.length;) i = i.then(l.shift(), l.shift());
                return i
            }, l.prototype.getUri = function(t) {
                return t = s(this.defaults, t), o(t.url, t.params, t.paramsSerializer).replace(/^\?/, "")
            }, r.forEach(["delete", "get", "head", "options"], (function(t) {
                l.prototype[t] = function(e, n) {
                    return this.request(s(n || {}, {
                        method: t,
                        url: e,
                        data: (n || {}).data
                    }))
                }
            })), r.forEach(["post", "put", "patch"], (function(t) {
                l.prototype[t] = function(e, n, r) {
                    return this.request(s(r || {}, {
                        method: t,
                        url: e,
                        data: n
                    }))
                }
            })), t.exports = l
        },
        206: function(t, e, n) {
            "use strict";
            var r = n(4867);

            function o() {
                this.handlers = []
            }
            o.prototype.use = function(t, e, n) {
                return this.handlers.push({
                    fulfilled: t,
                    rejected: e,
                    synchronous: !!n && n.synchronous,
                    runWhen: n ? n.runWhen : null
                }), this.handlers.length - 1
            }, o.prototype.eject = function(t) {
                this.handlers[t] && (this.handlers[t] = null)
            }, o.prototype.forEach = function(t) {
                r.forEach(this.handlers, (function(e) {
                    null !== e && t(e)
                }))
            }, t.exports = o
        },
        4097: function(t, e, n) {
            "use strict";
            var r = n(1793),
                o = n(7303);
            t.exports = function(t, e) {
                return t && !r(e) ? o(t, e) : e
            }
        },
        5061: function(t, e, n) {
            "use strict";
            var r = n(481);
            t.exports = function(t, e, n, o, i) {
                var a = new Error(t);
                return r(a, e, n, o, i)
            }
        },
        3572: function(t, e, n) {
            "use strict";
            var r = n(4867),
                o = n(8527),
                i = n(6502),
                a = n(5546),
                s = n(5263);

            function u(t) {
                if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted) throw new s("canceled")
            }
            t.exports = function(t) {
                return u(t), t.headers = t.headers || {}, t.data = o.call(t, t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function(e) {
                    delete t.headers[e]
                })), (t.adapter || a.adapter)(t).then((function(e) {
                    return u(t), e.data = o.call(t, e.data, e.headers, t.transformResponse), e
                }), (function(e) {
                    return i(e) || (u(t), e && e.response && (e.response.data = o.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
                }))
            }
        },
        481: function(t) {
            "use strict";
            t.exports = function(t, e, n, r, o) {
                return t.config = e, n && (t.code = n), t.request = r, t.response = o, t.isAxiosError = !0, t.toJSON = function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: this.config,
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }, t
            }
        },
        7185: function(t, e, n) {
            "use strict";
            var r = n(4867);
            t.exports = function(t, e) {
                e = e || {};
                var n = {};

                function o(t, e) {
                    return r.isPlainObject(t) && r.isPlainObject(e) ? r.merge(t, e) : r.isPlainObject(e) ? r.merge({}, e) : r.isArray(e) ? e.slice() : e
                }

                function i(n) {
                    return r.isUndefined(e[n]) ? r.isUndefined(t[n]) ? void 0 : o(void 0, t[n]) : o(t[n], e[n])
                }

                function a(t) {
                    if (!r.isUndefined(e[t])) return o(void 0, e[t])
                }

                function s(n) {
                    return r.isUndefined(e[n]) ? r.isUndefined(t[n]) ? void 0 : o(void 0, t[n]) : o(void 0, e[n])
                }

                function u(n) {
                    return n in e ? o(t[n], e[n]) : n in t ? o(void 0, t[n]) : void 0
                }
                var c = {
                    url: a,
                    method: a,
                    data: a,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: u
                };
                return r.forEach(Object.keys(t).concat(Object.keys(e)), (function(t) {
                    var e = c[t] || i,
                        o = e(t);
                    r.isUndefined(o) && e !== u || (n[t] = o)
                })), n
            }
        },
        6026: function(t, e, n) {
            "use strict";
            var r = n(5061);
            t.exports = function(t, e, n) {
                var o = n.config.validateStatus;
                n.status && o && !o(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : t(n)
            }
        },
        8527: function(t, e, n) {
            "use strict";
            var r = n(4867),
                o = n(5546);
            t.exports = function(t, e, n) {
                var i = this || o;
                return r.forEach(n, (function(n) {
                    t = n.call(i, t, e)
                })), t
            }
        },
        5546: function(t, e, n) {
            "use strict";
            var r = n(3454),
                o = n(4867),
                i = n(6016),
                a = n(481),
                s = n(7874),
                u = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function c(t, e) {
                !o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
            }
            var l = {
                transitional: s,
                adapter: function() {
                    var t;
                    return ("undefined" !== typeof XMLHttpRequest || "undefined" !== typeof r && "[object process]" === Object.prototype.toString.call(r)) && (t = n(5448)), t
                }(),
                transformRequest: [function(t, e) {
                    return i(e, "Accept"), i(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (c(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) || e && "application/json" === e["Content-Type"] ? (c(e, "application/json"), function(t, e, n) {
                        if (o.isString(t)) try {
                            return (e || JSON.parse)(t), o.trim(t)
                        } catch (r) {
                            if ("SyntaxError" !== r.name) throw r
                        }
                        return (n || JSON.stringify)(t)
                    }(t)) : t
                }],
                transformResponse: [function(t) {
                    var e = this.transitional || l.transitional,
                        n = e && e.silentJSONParsing,
                        r = e && e.forcedJSONParsing,
                        i = !n && "json" === this.responseType;
                    if (i || r && o.isString(t) && t.length) try {
                        return JSON.parse(t)
                    } catch (s) {
                        if (i) {
                            if ("SyntaxError" === s.name) throw a(s, this, "E_JSON_PARSE");
                            throw s
                        }
                    }
                    return t
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                validateStatus: function(t) {
                    return t >= 200 && t < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    }
                }
            };
            o.forEach(["delete", "get", "head"], (function(t) {
                l.headers[t] = {}
            })), o.forEach(["post", "put", "patch"], (function(t) {
                l.headers[t] = o.merge(u)
            })), t.exports = l
        },
        7874: function(t) {
            "use strict";
            t.exports = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            }
        },
        7288: function(t) {
            t.exports = {
                version: "0.26.1"
            }
        },
        1849: function(t) {
            "use strict";
            t.exports = function(t, e) {
                return function() {
                    for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                    return t.apply(e, n)
                }
            }
        },
        5327: function(t, e, n) {
            "use strict";
            var r = n(4867);

            function o(t) {
                return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }
            t.exports = function(t, e, n) {
                if (!e) return t;
                var i;
                if (n) i = n(e);
                else if (r.isURLSearchParams(e)) i = e.toString();
                else {
                    var a = [];
                    r.forEach(e, (function(t, e) {
                        null !== t && "undefined" !== typeof t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, (function(t) {
                            r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), a.push(o(e) + "=" + o(t))
                        })))
                    })), i = a.join("&")
                }
                if (i) {
                    var s = t.indexOf("#"); - 1 !== s && (t = t.slice(0, s)), t += (-1 === t.indexOf("?") ? "?" : "&") + i
                }
                return t
            }
        },
        7303: function(t) {
            "use strict";
            t.exports = function(t, e) {
                return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t
            }
        },
        4372: function(t, e, n) {
            "use strict";
            var r = n(4867);
            t.exports = r.isStandardBrowserEnv() ? {
                write: function(t, e, n, o, i, a) {
                    var s = [];
                    s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
                },
                read: function(t) {
                    var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                    return e ? decodeURIComponent(e[3]) : null
                },
                remove: function(t) {
                    this.write(t, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            }
        },
        1793: function(t) {
            "use strict";
            t.exports = function(t) {
                return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            }
        },
        6268: function(t, e, n) {
            "use strict";
            var r = n(4867);
            t.exports = function(t) {
                return r.isObject(t) && !0 === t.isAxiosError
            }
        },
        7985: function(t, e, n) {
            "use strict";
            var r = n(4867);
            t.exports = r.isStandardBrowserEnv() ? function() {
                var t, e = /(msie|trident)/i.test(navigator.userAgent),
                    n = document.createElement("a");

                function o(t) {
                    var r = t;
                    return e && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return t = o(window.location.href),
                    function(e) {
                        var n = r.isString(e) ? o(e) : e;
                        return n.protocol === t.protocol && n.host === t.host
                    }
            }() : function() {
                return !0
            }
        },
        6016: function(t, e, n) {
            "use strict";
            var r = n(4867);
            t.exports = function(t, e) {
                r.forEach(t, (function(n, r) {
                    r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
                }))
            }
        },
        4109: function(t, e, n) {
            "use strict";
            var r = n(4867),
                o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
            t.exports = function(t) {
                var e, n, i, a = {};
                return t ? (r.forEach(t.split("\n"), (function(t) {
                    if (i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e) {
                        if (a[e] && o.indexOf(e) >= 0) return;
                        a[e] = "set-cookie" === e ? (a[e] ? a[e] : []).concat([n]) : a[e] ? a[e] + ", " + n : n
                    }
                })), a) : a
            }
        },
        8713: function(t) {
            "use strict";
            t.exports = function(t) {
                return function(e) {
                    return t.apply(null, e)
                }
            }
        },
        4875: function(t, e, n) {
            "use strict";
            var r = n(7288).version,
                o = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((function(t, e) {
                o[t] = function(n) {
                    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t
                }
            }));
            var i = {};
            o.transitional = function(t, e, n) {
                function o(t, e) {
                    return "[Axios v" + r + "] Transitional option '" + t + "'" + e + (n ? ". " + n : "")
                }
                return function(n, r, a) {
                    if (!1 === t) throw new Error(o(r, " has been removed" + (e ? " in " + e : "")));
                    return e && !i[r] && (i[r] = !0, console.warn(o(r, " has been deprecated since v" + e + " and will be removed in the near future"))), !t || t(n, r, a)
                }
            }, t.exports = {
                assertOptions: function(t, e, n) {
                    if ("object" !== typeof t) throw new TypeError("options must be an object");
                    for (var r = Object.keys(t), o = r.length; o-- > 0;) {
                        var i = r[o],
                            a = e[i];
                        if (a) {
                            var s = t[i],
                                u = void 0 === s || a(s, i, t);
                            if (!0 !== u) throw new TypeError("option " + i + " must be " + u)
                        } else if (!0 !== n) throw Error("Unknown option " + i)
                    }
                },
                validators: o
            }
        },
        4867: function(t, e, n) {
            "use strict";
            var r = n(1849),
                o = Object.prototype.toString;

            function i(t) {
                return Array.isArray(t)
            }

            function a(t) {
                return "undefined" === typeof t
            }

            function s(t) {
                return "[object ArrayBuffer]" === o.call(t)
            }

            function u(t) {
                return null !== t && "object" === typeof t
            }

            function c(t) {
                if ("[object Object]" !== o.call(t)) return !1;
                var e = Object.getPrototypeOf(t);
                return null === e || e === Object.prototype
            }

            function l(t) {
                return "[object Function]" === o.call(t)
            }

            function f(t, e) {
                if (null !== t && "undefined" !== typeof t)
                    if ("object" !== typeof t && (t = [t]), i(t))
                        for (var n = 0, r = t.length; n < r; n++) e.call(null, t[n], n, t);
                    else
                        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
            }
            t.exports = {
                isArray: i,
                isArrayBuffer: s,
                isBuffer: function(t) {
                    return null !== t && !a(t) && null !== t.constructor && !a(t.constructor) && "function" === typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
                },
                isFormData: function(t) {
                    return "[object FormData]" === o.call(t)
                },
                isArrayBufferView: function(t) {
                    return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && s(t.buffer)
                },
                isString: function(t) {
                    return "string" === typeof t
                },
                isNumber: function(t) {
                    return "number" === typeof t
                },
                isObject: u,
                isPlainObject: c,
                isUndefined: a,
                isDate: function(t) {
                    return "[object Date]" === o.call(t)
                },
                isFile: function(t) {
                    return "[object File]" === o.call(t)
                },
                isBlob: function(t) {
                    return "[object Blob]" === o.call(t)
                },
                isFunction: l,
                isStream: function(t) {
                    return u(t) && l(t.pipe)
                },
                isURLSearchParams: function(t) {
                    return "[object URLSearchParams]" === o.call(t)
                },
                isStandardBrowserEnv: function() {
                    return ("undefined" === typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" !== typeof window && "undefined" !== typeof document)
                },
                forEach: f,
                merge: function t() {
                    var e = {};

                    function n(n, r) {
                        c(e[r]) && c(n) ? e[r] = t(e[r], n) : c(n) ? e[r] = t({}, n) : i(n) ? e[r] = n.slice() : e[r] = n
                    }
                    for (var r = 0, o = arguments.length; r < o; r++) f(arguments[r], n);
                    return e
                },
                extend: function(t, e, n) {
                    return f(e, (function(e, o) {
                        t[o] = n && "function" === typeof e ? r(e, n) : e
                    })), t
                },
                trim: function(t) {
                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                },
                stripBOM: function(t) {
                    return 65279 === t.charCodeAt(0) && (t = t.slice(1)), t
                }
            }
        },
        725: function(t, e, n) {
            var r;
            "undefined" != typeof self && self, t.exports = (r = n(7294), function(t) {
                var e = {};

                function n(r) {
                    if (e[r]) return e[r].exports;
                    var o = e[r] = {
                        i: r,
                        l: !1,
                        exports: {}
                    };
                    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
                }
                return n.m = t, n.c = e, n.d = function(t, e, r) {
                    n.o(t, e) || Object.defineProperty(t, e, {
                        enumerable: !0,
                        get: r
                    })
                }, n.r = function(t) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }, n.t = function(t, e) {
                    if (1 & e && (t = n(t)), 8 & e) return t;
                    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                    var r = Object.create(null);
                    if (n.r(r), Object.defineProperty(r, "default", {
                            enumerable: !0,
                            value: t
                        }), 2 & e && "string" != typeof t)
                        for (var o in t) n.d(r, o, function(e) {
                            return t[e]
                        }.bind(null, o));
                    return r
                }, n.n = function(t) {
                    var e = t && t.__esModule ? function() {
                        return t.default
                    } : function() {
                        return t
                    };
                    return n.d(e, "a", e), e
                }, n.o = function(t, e) {
                    return Object.prototype.hasOwnProperty.call(t, e)
                }, n.p = "", n(n.s = 2)
            }([function(t, e) {
                t.exports = r
            }, function(t, e, n) {
                "use strict";
                var r = {
                    linear: function(t, e, n, r) {
                        return (n - e) * t / r + e
                    },
                    easeInQuad: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t + e
                    },
                    easeOutQuad: function(t, e, n, r) {
                        return -(n - e) * (t /= r) * (t - 2) + e
                    },
                    easeInOutQuad: function(t, e, n, r) {
                        var o = n - e;
                        return (t /= r / 2) < 1 ? o / 2 * t * t + e : -o / 2 * (--t * (t - 2) - 1) + e
                    },
                    easeInCubic: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t * t + e
                    },
                    easeOutCubic: function(t, e, n, r) {
                        return (n - e) * ((t = t / r - 1) * t * t + 1) + e
                    },
                    easeInOutCubic: function(t, e, n, r) {
                        var o = n - e;
                        return (t /= r / 2) < 1 ? o / 2 * t * t * t + e : o / 2 * ((t -= 2) * t * t + 2) + e
                    },
                    easeInQuart: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t * t * t + e
                    },
                    easeOutQuart: function(t, e, n, r) {
                        return -(n - e) * ((t = t / r - 1) * t * t * t - 1) + e
                    },
                    easeInOutQuart: function(t, e, n, r) {
                        var o = n - e;
                        return (t /= r / 2) < 1 ? o / 2 * t * t * t * t + e : -o / 2 * ((t -= 2) * t * t * t - 2) + e
                    },
                    easeInQuint: function(t, e, n, r) {
                        return (n - e) * (t /= r) * t * t * t * t + e
                    },
                    easeOutQuint: function(t, e, n, r) {
                        return (n - e) * ((t = t / r - 1) * t * t * t * t + 1) + e
                    },
                    easeInOutQuint: function(t, e, n, r) {
                        var o = n - e;
                        return (t /= r / 2) < 1 ? o / 2 * t * t * t * t * t + e : o / 2 * ((t -= 2) * t * t * t * t + 2) + e
                    },
                    easeInSine: function(t, e, n, r) {
                        var o = n - e;
                        return -o * Math.cos(t / r * (Math.PI / 2)) + o + e
                    },
                    easeOutSine: function(t, e, n, r) {
                        return (n - e) * Math.sin(t / r * (Math.PI / 2)) + e
                    },
                    easeInOutSine: function(t, e, n, r) {
                        return -(n - e) / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                    },
                    easeInExpo: function(t, e, n, r) {
                        return 0 == t ? e : (n - e) * Math.pow(2, 10 * (t / r - 1)) + e
                    },
                    easeOutExpo: function(t, e, n, r) {
                        var o = n - e;
                        return t == r ? e + o : o * (1 - Math.pow(2, -10 * t / r)) + e
                    },
                    easeInOutExpo: function(t, e, n, r) {
                        var o = n - e;
                        return 0 === t ? e : t === r ? e + o : (t /= r / 2) < 1 ? o / 2 * Math.pow(2, 10 * (t - 1)) + e : o / 2 * (2 - Math.pow(2, -10 * --t)) + e
                    },
                    easeInCirc: function(t, e, n, r) {
                        return -(n - e) * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                    },
                    easeOutCirc: function(t, e, n, r) {
                        return (n - e) * Math.sqrt(1 - (t = t / r - 1) * t) + e
                    },
                    easeInOutCirc: function(t, e, n, r) {
                        var o = n - e;
                        return (t /= r / 2) < 1 ? -o / 2 * (Math.sqrt(1 - t * t) - 1) + e : o / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                    },
                    easeInElastic: function(t, e, n, r) {
                        var o, i, a, s = n - e;
                        return a = 1.70158, 0 === t ? e : 1 == (t /= r) ? e + s : ((i = 0) || (i = .3 * r), (o = s) < Math.abs(s) ? (o = s, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(s / o), -o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / i) + e)
                    },
                    easeOutElastic: function(t, e, n, r) {
                        var o, i, a, s = n - e;
                        return a = 1.70158, 0 === t ? e : 1 == (t /= r) ? e + s : ((i = 0) || (i = .3 * r), (o = s) < Math.abs(s) ? (o = s, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(s / o), o * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / i) + s + e)
                    },
                    easeInOutElastic: function(t, e, n, r) {
                        var o, i, a, s = n - e;
                        return a = 1.70158, 0 === t ? e : 2 == (t /= r / 2) ? e + s : ((i = 0) || (i = r * (.3 * 1.5)), (o = s) < Math.abs(s) ? (o = s, a = i / 4) : a = i / (2 * Math.PI) * Math.asin(s / o), t < 1 ? o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / i) * -.5 + e : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / i) * .5 + s + e)
                    },
                    easeInBack: function(t, e, n, r, o) {
                        return void 0 === o && (o = 1.70158), (n - e) * (t /= r) * t * ((o + 1) * t - o) + e
                    },
                    easeOutBack: function(t, e, n, r, o) {
                        return void 0 === o && (o = 1.70158), (n - e) * ((t = t / r - 1) * t * ((o + 1) * t + o) + 1) + e
                    },
                    easeInOutBack: function(t, e, n, r, o) {
                        var i = n - e;
                        return void 0 === o && (o = 1.70158), (t /= r / 2) < 1 ? i / 2 * (t * t * ((1 + (o *= 1.525)) * t - o)) + e : i / 2 * ((t -= 2) * t * ((1 + (o *= 1.525)) * t + o) + 2) + e
                    },
                    easeInBounce: function(t, e, n, o) {
                        var i = n - e;
                        return i - r.easeOutBounce(o - t, 0, i, o) + e
                    },
                    easeOutBounce: function(t, e, n, r) {
                        var o = n - e;
                        return (t /= r) < 1 / 2.75 ? o * (7.5625 * t * t) + e : t < 2 / 2.75 ? o * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + e : t < 2.5 / 2.75 ? o * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + e : o * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + e
                    },
                    easeInOutBounce: function(t, e, n, o) {
                        var i = n - e;
                        return t < o / 2 ? .5 * r.easeInBounce(2 * t, 0, i, o) + e : .5 * r.easeOutBounce(2 * t - o, 0, i, o) + .5 * i + e
                    }
                };
                t.exports = r
            }, function(t, e, n) {
                t.exports = n(3)
            }, function(t, e, n) {
                "use strict";
                n.r(e), n.d(e, "ReactConfetti", (function() {
                    return N
                }));
                var r, o, i = n(0),
                    a = n.n(i),
                    s = n(1),
                    u = n.n(s);

                function c(t, e) {
                    return t + Math.random() * (e - t)
                }

                function l(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function f(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }! function(t) {
                    t[t.Circle = 0] = "Circle", t[t.Square = 1] = "Square", t[t.Strip = 2] = "Strip"
                }(r || (r = {})),
                function(t) {
                    t[t.Positive = 1] = "Positive", t[t.Negative = -1] = "Negative"
                }(o || (o = {}));
                var d = function() {
                    function t(e, n, r, i) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), f(this, "context", void 0), f(this, "radius", void 0), f(this, "x", void 0), f(this, "y", void 0), f(this, "w", void 0), f(this, "h", void 0), f(this, "vx", void 0), f(this, "vy", void 0), f(this, "shape", void 0), f(this, "angle", void 0), f(this, "angularSpin", void 0), f(this, "color", void 0), f(this, "rotateY", void 0), f(this, "rotationDirection", void 0), f(this, "getOptions", void 0), this.getOptions = n;
                        var a, s, u = this.getOptions(),
                            l = u.colors,
                            d = u.initialVelocityX,
                            p = u.initialVelocityY;
                        this.context = e, this.x = r, this.y = i, this.w = c(5, 20), this.h = c(5, 20), this.radius = c(5, 10), this.vx = "number" == typeof d ? c(-d, d) : c(d.min, d.max), this.vy = "number" == typeof p ? c(-p, 0) : c(p.min, p.max), this.shape = (a = 0, s = 2, Math.floor(a + Math.random() * (s - a + 1))), this.angle = c(0, 360) * Math.PI / 180, this.angularSpin = c(-.2, .2), this.color = l[Math.floor(Math.random() * l.length)], this.rotateY = c(0, 1), this.rotationDirection = c(0, 1) ? o.Positive : o.Negative
                    }
                    var e, n, i;
                    return e = t, (n = [{
                        key: "update",
                        value: function() {
                            var t = this.getOptions(),
                                e = t.gravity,
                                n = t.wind,
                                i = t.friction,
                                a = t.opacity,
                                s = t.drawShape;
                            this.x += this.vx, this.y += this.vy, this.vy += e, this.vx += n, this.vx *= i, this.vy *= i, this.rotateY >= 1 && this.rotationDirection === o.Positive ? this.rotationDirection = o.Negative : this.rotateY <= -1 && this.rotationDirection === o.Negative && (this.rotationDirection = o.Positive);
                            var u = .1 * this.rotationDirection;
                            if (this.rotateY += u, this.angle += this.angularSpin, this.context.save(), this.context.translate(this.x, this.y), this.context.rotate(this.angle), this.context.scale(1, this.rotateY), this.context.rotate(this.angle), this.context.beginPath(), this.context.fillStyle = this.color, this.context.strokeStyle = this.color, this.context.globalAlpha = a, this.context.lineCap = "round", this.context.lineWidth = 2, s && "function" == typeof s) s.call(this, this.context);
                            else switch (this.shape) {
                                case r.Circle:
                                    this.context.beginPath(), this.context.arc(0, 0, this.radius, 0, 2 * Math.PI), this.context.fill();
                                    break;
                                case r.Square:
                                    this.context.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
                                    break;
                                case r.Strip:
                                    this.context.fillRect(-this.w / 6, -this.h / 2, this.w / 3, this.h)
                            }
                            this.context.closePath(), this.context.restore()
                        }
                    }]) && l(e.prototype, n), i && l(e, i), t
                }();

                function p(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var h = function t(e, n) {
                    var r = this;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), p(this, "canvas", void 0), p(this, "context", void 0), p(this, "getOptions", void 0), p(this, "x", 0), p(this, "y", 0), p(this, "w", 0), p(this, "h", 0), p(this, "lastNumberOfPieces", 0), p(this, "tweenInitTime", Date.now()), p(this, "particles", []), p(this, "particlesGenerated", 0), p(this, "removeParticleAt", (function(t) {
                        r.particles.splice(t, 1)
                    })), p(this, "getParticle", (function() {
                        var t = c(r.x, r.w + r.x),
                            e = c(r.y, r.h + r.y);
                        return new d(r.context, r.getOptions, t, e)
                    })), p(this, "animate", (function() {
                        var t = r.canvas,
                            e = r.context,
                            n = r.particlesGenerated,
                            o = r.lastNumberOfPieces,
                            i = r.getOptions(),
                            a = i.run,
                            s = i.recycle,
                            u = i.numberOfPieces,
                            c = i.debug,
                            l = i.tweenFunction,
                            f = i.tweenDuration;
                        if (!a) return !1;
                        var d = r.particles.length,
                            p = s ? d : n,
                            h = Date.now();
                        if (p < u) {
                            o !== u && (r.tweenInitTime = h, r.lastNumberOfPieces = u);
                            for (var v = r.tweenInitTime, m = l(h - v > f ? f : Math.max(0, h - v), p, u, f), y = Math.round(m - p), g = 0; g < y; g++) r.particles.push(r.getParticle());
                            r.particlesGenerated += y
                        }
                        return c && (e.font = "12px sans-serif", e.fillStyle = "#333", e.textAlign = "right", e.fillText("Particles: ".concat(d), t.width - 10, t.height - 20)), r.particles.forEach((function(e, n) {
                            e.update(), (e.y > t.height || e.y < -100 || e.x > t.width + 100 || e.x < -100) && (s && p <= u ? r.particles[n] = r.getParticle() : r.removeParticleAt(n))
                        })), d > 0 || p < u
                    })), this.canvas = e;
                    var o = this.canvas.getContext("2d");
                    if (!o) throw new Error("Could not get canvas context");
                    this.context = o, this.getOptions = n
                };

                function v(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function m(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? v(Object(n), !0).forEach((function(e) {
                            g(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : v(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function y(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function g(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var b = {
                        width: "undefined" != typeof window ? window.innerWidth : 300,
                        height: "undefined" != typeof window ? window.innerHeight : 200,
                        numberOfPieces: 200,
                        friction: .99,
                        wind: 0,
                        gravity: .1,
                        initialVelocityX: 4,
                        initialVelocityY: 10,
                        colors: ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4CAF50", "#8BC34A", "#CDDC39", "#FFEB3B", "#FFC107", "#FF9800", "#FF5722", "#795548"],
                        opacity: 1,
                        debug: !1,
                        tweenFunction: u.a.easeInOutQuad,
                        tweenDuration: 5e3,
                        recycle: !0,
                        run: !0
                    },
                    x = function() {
                        function t(e, n) {
                            var r = this;
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), g(this, "canvas", void 0), g(this, "context", void 0), g(this, "_options", void 0), g(this, "generator", void 0), g(this, "rafId", void 0), g(this, "setOptionsWithDefaults", (function(t) {
                                var e = {
                                    confettiSource: {
                                        x: 0,
                                        y: 0,
                                        w: r.canvas.width,
                                        h: 0
                                    }
                                };
                                r._options = m(m(m({}, e), b), t), Object.assign(r, t.confettiSource)
                            })), g(this, "update", (function() {
                                var t = r.options,
                                    e = t.run,
                                    n = t.onConfettiComplete,
                                    o = r.canvas,
                                    i = r.context;
                                e && (i.fillStyle = "white", i.clearRect(0, 0, o.width, o.height)), r.generator.animate() ? r.rafId = requestAnimationFrame(r.update) : (n && "function" == typeof n && r.generator.particlesGenerated > 0 && n.call(r, r), r._options.run = !1)
                            })), g(this, "reset", (function() {
                                r.generator && r.generator.particlesGenerated > 0 && (r.generator.particlesGenerated = 0, r.generator.particles = [], r.generator.lastNumberOfPieces = 0)
                            })), g(this, "stop", (function() {
                                r.options = {
                                    run: !1
                                }, r.rafId && (cancelAnimationFrame(r.rafId), r.rafId = void 0)
                            })), this.canvas = e;
                            var o = this.canvas.getContext("2d");
                            if (!o) throw new Error("Could not get canvas context");
                            this.context = o, this.generator = new h(this.canvas, (function() {
                                return r.options
                            })), this.options = n, this.update()
                        }
                        var e, n, r;
                        return e = t, (n = [{
                            key: "options",
                            get: function() {
                                return this._options
                            },
                            set: function(t) {
                                var e = this._options && this._options.run,
                                    n = this._options && this._options.recycle;
                                this.setOptionsWithDefaults(t), this.generator && (Object.assign(this.generator, this.options.confettiSource), "boolean" == typeof t.recycle && t.recycle && !1 === n && (this.generator.lastNumberOfPieces = this.generator.particles.length)), "boolean" == typeof t.run && t.run && !1 === e && this.update()
                            }
                        }]) && y(e.prototype, n), r && y(e, r), t
                    }();

                function w(t) {
                    return function(t) {
                        if (Array.isArray(t)) return C(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t)
                    }(t) || T(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function P(t) {
                    return (P = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function E() {
                    return (E = Object.assign || function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                        }
                        return t
                    }).apply(this, arguments)
                }

                function S(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function O(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? S(Object(n), !0).forEach((function(e) {
                            I(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function A(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                            var n = [],
                                r = !0,
                                o = !1,
                                i = void 0;
                            try {
                                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                o = !0, i = t
                            } finally {
                                try {
                                    r || null == s.return || s.return()
                                } finally {
                                    if (o) throw i
                                }
                            }
                            return n
                        }
                    }(t, e) || T(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function T(t, e) {
                    if (t) {
                        if ("string" == typeof t) return C(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? C(t, e) : void 0
                    }
                }

                function C(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function j(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function M(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                    }
                }

                function V(t, e) {
                    return (V = Object.setPrototypeOf || function(t, e) {
                        return t.__proto__ = e, t
                    })(t, e)
                }

                function R(t) {
                    var e = function() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                        } catch (t) {
                            return !1
                        }
                    }();
                    return function() {
                        var n, r = L(t);
                        if (e) {
                            var o = L(this).constructor;
                            n = Reflect.construct(r, arguments, o)
                        } else n = r.apply(this, arguments);
                        return D(this, n)
                    }
                }

                function D(t, e) {
                    return !e || "object" !== P(e) && "function" != typeof e ? k(t) : e
                }

                function k(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }

                function L(t) {
                    return (L = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                        return t.__proto__ || Object.getPrototypeOf(t)
                    })(t)
                }

                function I(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var F = a.a.createRef(),
                    B = function(t) {
                        ! function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && V(t, e)
                        }(i, t);
                        var e, n, r, o = R(i);

                        function i(t) {
                            var e;
                            j(this, i);
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), s = 1; s < n; s++) r[s - 1] = arguments[s];
                            return I(k(e = o.call.apply(o, [this, t].concat(r))), "canvas", a.a.createRef()), I(k(e), "confetti", void 0), e.canvas = t.canvasRef || F, e
                        }
                        return e = i, (n = [{
                            key: "componentDidMount",
                            value: function() {
                                if (this.canvas.current) {
                                    var t = U(this.props)[0];
                                    this.confetti = new x(this.canvas.current, t)
                                }
                            }
                        }, {
                            key: "componentDidUpdate",
                            value: function() {
                                var t = U(this.props)[0];
                                this.confetti && (this.confetti.options = t)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                this.confetti && this.confetti.stop(), this.confetti = void 0
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var t = A(U(this.props), 2),
                                    e = t[0],
                                    n = t[1],
                                    r = O({
                                        zIndex: 2,
                                        position: "absolute",
                                        pointerEvents: "none",
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0
                                    }, n.style);
                                return a.a.createElement("canvas", E({
                                    width: e.width,
                                    height: e.height,
                                    ref: this.canvas
                                }, n, {
                                    style: r
                                }))
                            }
                        }]) && M(e.prototype, n), r && M(e, r), i
                    }(i.Component);

                function U(t) {
                    var e = {},
                        n = {},
                        r = [].concat(w(Object.keys(b)), ["confettiSource", "drawShape", "onConfettiComplete"]),
                        o = ["canvasRef"];
                    for (var i in t) {
                        var a = t[i];
                        r.includes(i) ? e[i] = a : o.includes(i) ? o[i] = a : n[i] = a
                    }
                    return [e, n, {}]
                }
                I(B, "defaultProps", O({}, b)), I(B, "displayName", "ReactConfetti");
                var N = a.a.forwardRef((function(t, e) {
                    return a.a.createElement(B, E({
                        canvasRef: e
                    }, t))
                }));
                e.default = N
            }]).default)
        },
        6018: function(t, e, n) {
            "use strict";
            n.d(e, {
                Z: function() {
                    return u
                }
            });
            var r = n(7294),
                o = function(t) {
                    (0, r.useEffect)(t, [])
                },
                i = function(t) {
                    var e = (0, r.useRef)(t);
                    e.current = t, o((function() {
                        return function() {
                            return e.current()
                        }
                    }))
                },
                a = function(t) {
                    var e = (0, r.useRef)(0),
                        n = (0, r.useState)(t),
                        o = n[0],
                        a = n[1],
                        s = (0, r.useCallback)((function(t) {
                            cancelAnimationFrame(e.current), e.current = requestAnimationFrame((function() {
                                a(t)
                            }))
                        }), []);
                    return i((function() {
                        cancelAnimationFrame(e.current)
                    })), [o, s]
                };
            var s = "undefined" !== typeof window,
                u = function(t, e) {
                    void 0 === t && (t = 1 / 0), void 0 === e && (e = 1 / 0);
                    var n = a({
                            width: s ? window.innerWidth : t,
                            height: s ? window.innerHeight : e
                        }),
                        o = n[0],
                        i = n[1];
                    return (0, r.useEffect)((function() {
                        if (s) {
                            var t = function() {
                                i({
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                })
                            };
                            return function(t) {
                                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                    t && t.addEventListener && t.addEventListener.apply(t, e)
                                }(window, "resize", t),
                                function() {
                                    ! function(t) {
                                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                        t && t.removeEventListener && t.removeEventListener.apply(t, e)
                                    }(window, "resize", t)
                                }
                        }
                    }), []), o
                }
        },
        664: function(t, e, n) {
            "use strict";
            n.d(e, {
                E: function() {
                    return Aa
                }
            });
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
            };

            function o(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return (i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };

            function a(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            }
            Object.create;

            function s(t, e) {
                var n = "function" === typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function u(t, e, n) {
                if (n || 2 === arguments.length)
                    for (var r, o = 0, i = e.length; o < i; o++) !r && o in e || (r || (r = Array.prototype.slice.call(e, 0, o)), r[o] = e[o]);
                return t.concat(r || Array.prototype.slice.call(e))
            }
            Object.create;
            var c = n(7294),
                l = function(t) {
                    return {
                        isEnabled: function(e) {
                            return t.some((function(t) {
                                return !!e[t]
                            }))
                        }
                    }
                },
                f = {
                    measureLayout: l(["layout", "layoutId", "drag"]),
                    animation: l(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
                    exit: l(["exit"]),
                    drag: l(["drag", "dragControls"]),
                    focus: l(["whileFocus"]),
                    hover: l(["whileHover", "onHoverStart", "onHoverEnd"]),
                    tap: l(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
                    pan: l(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
                    inView: l(["whileInView", "onViewportEnter", "onViewportLeave"])
                };
            var d = (0, c.createContext)({
                    strict: !1
                }),
                p = Object.keys(f),
                h = p.length;
            var v = (0, c.createContext)({
                    transformPagePoint: function(t) {
                        return t
                    },
                    isStatic: !1,
                    reducedMotion: "never"
                }),
                m = (0, c.createContext)({});
            var y = (0, c.createContext)(null),
                g = "undefined" !== typeof window,
                b = g ? c.useLayoutEffect : c.useEffect,
                x = {
                    current: null
                },
                w = !1;

            function P() {
                return !w && function() {
                    if (w = !0, "undefined" !== typeof window)
                        if (window.matchMedia) {
                            var t = window.matchMedia("(prefers-reduced-motion)"),
                                e = function() {
                                    return x.current = t.matches
                                };
                            t.addListener(e), e()
                        } else x.current = !1
                }(), s((0, c.useState)(x.current), 1)[0]
            }

            function E(t, e, n, r) {
                var o = (0, c.useContext)(d),
                    i = (0, c.useContext)(m).visualElement,
                    a = (0, c.useContext)(y),
                    s = function() {
                        var t = P(),
                            e = (0, c.useContext)(v).reducedMotion;
                        return "never" !== e && ("always" === e || t)
                    }(),
                    u = (0, c.useRef)(void 0);
                r || (r = o.renderer), !u.current && r && (u.current = r(t, {
                    visualState: e,
                    parent: i,
                    props: n,
                    presenceId: null === a || void 0 === a ? void 0 : a.id,
                    blockInitialAnimation: !1 === (null === a || void 0 === a ? void 0 : a.initial),
                    shouldReduceMotion: s
                }));
                var l = u.current;
                return b((function() {
                    null === l || void 0 === l || l.syncRender()
                })), (0, c.useEffect)((function() {
                    var t;
                    null === (t = null === l || void 0 === l ? void 0 : l.animationState) || void 0 === t || t.animateChanges()
                })), b((function() {
                    return function() {
                        return null === l || void 0 === l ? void 0 : l.notifyUnmount()
                    }
                }), []), l
            }

            function S(t) {
                return "object" === typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }

            function O(t) {
                return Array.isArray(t)
            }

            function A(t) {
                return "string" === typeof t || O(t)
            }

            function T(t, e, n, r, o) {
                var i;
                return void 0 === r && (r = {}), void 0 === o && (o = {}), "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)), "string" === typeof e && (e = null === (i = t.variants) || void 0 === i ? void 0 : i[e]), "function" === typeof e && (e = e(null !== n && void 0 !== n ? n : t.custom, r, o)), e
            }

            function C(t, e, n) {
                var r = t.getProps();
                return T(r, e, null !== n && void 0 !== n ? n : r.custom, function(t) {
                    var e = {};
                    return t.forEachValue((function(t, n) {
                        return e[n] = t.get()
                    })), e
                }(t), function(t) {
                    var e = {};
                    return t.forEachValue((function(t, n) {
                        return e[n] = t.getVelocity()
                    })), e
                }(t))
            }

            function j(t) {
                var e;
                return "function" === typeof(null === (e = t.animate) || void 0 === e ? void 0 : e.start) || A(t.initial) || A(t.animate) || A(t.whileHover) || A(t.whileDrag) || A(t.whileTap) || A(t.whileFocus) || A(t.exit)
            }

            function M(t) {
                return Boolean(j(t) || t.variants)
            }

            function V(t) {
                var e = function(t, e) {
                        if (j(t)) {
                            var n = t.initial,
                                r = t.animate;
                            return {
                                initial: !1 === n || A(n) ? n : void 0,
                                animate: A(r) ? r : void 0
                            }
                        }
                        return !1 !== t.inherit ? e : {}
                    }(t, (0, c.useContext)(m)),
                    n = e.initial,
                    r = e.animate;
                return (0, c.useMemo)((function() {
                    return {
                        initial: n,
                        animate: r
                    }
                }), [R(n), R(r)])
            }

            function R(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }

            function D(t) {
                var e = (0, c.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
            const k = 1 / 60 * 1e3,
                L = "undefined" !== typeof performance ? () => performance.now() : () => Date.now(),
                I = "undefined" !== typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout((() => t(L())), k);
            let F = !0,
                B = !1,
                U = !1;
            const N = {
                    delta: 0,
                    timestamp: 0
                },
                _ = ["read", "update", "preRender", "render", "postRender"],
                z = _.reduce(((t, e) => (t[e] = function(t) {
                    let e = [],
                        n = [],
                        r = 0,
                        o = !1,
                        i = !1;
                    const a = new WeakSet,
                        s = {
                            schedule: (t, i = !1, s = !1) => {
                                const u = s && o,
                                    c = u ? e : n;
                                return i && a.add(t), -1 === c.indexOf(t) && (c.push(t), u && o && (r = e.length)), t
                            },
                            cancel: t => {
                                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1), a.delete(t)
                            },
                            process: u => {
                                if (o) i = !0;
                                else {
                                    if (o = !0, [e, n] = [n, e], n.length = 0, r = e.length, r)
                                        for (let n = 0; n < r; n++) {
                                            const r = e[n];
                                            r(u), a.has(r) && (s.schedule(r), t())
                                        }
                                    o = !1, i && (i = !1, s.process(u))
                                }
                            }
                        };
                    return s
                }((() => B = !0)), t)), {}),
                H = _.reduce(((t, e) => {
                    const n = z[e];
                    return t[e] = (t, e = !1, r = !1) => (B || G(), n.schedule(t, e, r)), t
                }), {}),
                q = _.reduce(((t, e) => (t[e] = z[e].cancel, t)), {}),
                W = _.reduce(((t, e) => (t[e] = () => z[e].process(N), t)), {}),
                Y = t => z[t].process(N),
                X = t => {
                    B = !1, N.delta = F ? k : Math.max(Math.min(t - N.timestamp, 40), 1), N.timestamp = t, U = !0, _.forEach(Y), U = !1, B && (F = !1, I(X))
                },
                G = () => {
                    B = !0, F = !0, U || I(X)
                },
                $ = () => N;
            var Z = H;
            const J = (t, e, n) => -n * t + n * e + t;

            function K(t, e) {
                return e ? t * (1e3 / e) : 0
            }

            function Q(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function tt(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var et = function() {
                    function t() {
                        this.subscriptions = []
                    }
                    return t.prototype.add = function(t) {
                        var e = this;
                        return Q(this.subscriptions, t),
                            function() {
                                return tt(e.subscriptions, t)
                            }
                    }, t.prototype.notify = function(t, e, n) {
                        var r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](t, e, n);
                            else
                                for (var o = 0; o < r; o++) {
                                    var i = this.subscriptions[o];
                                    i && i(t, e, n)
                                }
                    }, t.prototype.getSize = function() {
                        return this.subscriptions.length
                    }, t.prototype.clear = function() {
                        this.subscriptions.length = 0
                    }, t
                }(),
                nt = function() {
                    function t(t) {
                        var e, n = this;
                        this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new et, this.velocityUpdateSubscribers = new et, this.renderSubscribers = new et, this.canTrackVelocity = !1, this.updateAndNotify = function(t, e) {
                            void 0 === e && (e = !0), n.prev = n.current, n.current = t;
                            var r = $(),
                                o = r.delta,
                                i = r.timestamp;
                            n.lastUpdated !== i && (n.timeDelta = o, n.lastUpdated = i, Z.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), e && n.renderSubscribers.notify(n.current)
                        }, this.scheduleVelocityCheck = function() {
                            return Z.postRender(n.velocityCheck)
                        }, this.velocityCheck = function(t) {
                            t.timestamp !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()))
                        }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (e = this.current, !isNaN(parseFloat(e)))
                    }
                    return t.prototype.onChange = function(t) {
                        return this.updateSubscribers.add(t)
                    }, t.prototype.clearListeners = function() {
                        this.updateSubscribers.clear()
                    }, t.prototype.onRenderRequest = function(t) {
                        return t(this.get()), this.renderSubscribers.add(t)
                    }, t.prototype.attach = function(t) {
                        this.passiveEffect = t
                    }, t.prototype.set = function(t, e) {
                        void 0 === e && (e = !0), e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                    }, t.prototype.get = function() {
                        return this.current
                    }, t.prototype.getPrevious = function() {
                        return this.prev
                    }, t.prototype.getVelocity = function() {
                        return this.canTrackVelocity ? K(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                    }, t.prototype.start = function(t) {
                        var e = this;
                        return this.stop(), new Promise((function(n) {
                            e.hasAnimated = !0, e.stopAnimation = t(n)
                        })).then((function() {
                            return e.clearAnimation()
                        }))
                    }, t.prototype.stop = function() {
                        this.stopAnimation && this.stopAnimation(), this.clearAnimation()
                    }, t.prototype.isAnimating = function() {
                        return !!this.stopAnimation
                    }, t.prototype.clearAnimation = function() {
                        this.stopAnimation = null
                    }, t.prototype.destroy = function() {
                        this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop()
                    }, t
                }();

            function rt(t) {
                return new nt(t)
            }
            var ot = function(t) {
                return Boolean(null !== t && "object" === typeof t && t.getVelocity)
            };
            const it = (t, e, n) => Math.min(Math.max(n, t), e),
                at = .001;

            function st({
                duration: t = 800,
                bounce: e = .25,
                velocity: n = 0,
                mass: r = 1
            }) {
                let o, i, a = 1 - e;
                a = it(.05, 1, a), t = it(.01, 10, t / 1e3), a < 1 ? (o = e => {
                    const r = e * a,
                        o = r * t,
                        i = r - n,
                        s = ut(e, a),
                        u = Math.exp(-o);
                    return at - i / s * u
                }, i = e => {
                    const r = e * a * t,
                        i = r * n + n,
                        s = Math.pow(a, 2) * Math.pow(e, 2) * t,
                        u = Math.exp(-r),
                        c = ut(Math.pow(e, 2), a);
                    return (-o(e) + at > 0 ? -1 : 1) * ((i - s) * u) / c
                }) : (o = e => Math.exp(-e * t) * ((e - n) * t + 1) - .001, i = e => Math.exp(-e * t) * (t * t * (n - e)));
                const s = function(t, e, n) {
                    let r = n;
                    for (let o = 1; o < 12; o++) r -= t(r) / e(r);
                    return r
                }(o, i, 5 / t);
                if (t *= 1e3, isNaN(s)) return {
                    stiffness: 100,
                    damping: 10,
                    duration: t
                }; {
                    const e = Math.pow(s, 2) * r;
                    return {
                        stiffness: e,
                        damping: 2 * a * Math.sqrt(r * e),
                        duration: t
                    }
                }
            }

            function ut(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            const ct = ["duration", "bounce"],
                lt = ["stiffness", "damping", "mass"];

            function ft(t, e) {
                return e.some((e => void 0 !== t[e]))
            }

            function dt(t) {
                var {
                    from: e = 0,
                    to: n = 1,
                    restSpeed: r = 2,
                    restDelta: o
                } = t, i = a(t, ["from", "to", "restSpeed", "restDelta"]);
                const s = {
                    done: !1,
                    value: e
                };
                let {
                    stiffness: u,
                    damping: c,
                    mass: l,
                    velocity: f,
                    duration: d,
                    isResolvedFromDuration: p
                } = function(t) {
                    let e = Object.assign({
                        velocity: 0,
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        isResolvedFromDuration: !1
                    }, t);
                    if (!ft(t, lt) && ft(t, ct)) {
                        const n = st(t);
                        e = Object.assign(Object.assign(Object.assign({}, e), n), {
                            velocity: 0,
                            mass: 1
                        }), e.isResolvedFromDuration = !0
                    }
                    return e
                }(i), h = pt, v = pt;

                function m() {
                    const t = f ? -f / 1e3 : 0,
                        r = n - e,
                        i = c / (2 * Math.sqrt(u * l)),
                        a = Math.sqrt(u / l) / 1e3;
                    if (void 0 === o && (o = Math.min(Math.abs(n - e) / 100, .4)), i < 1) {
                        const e = ut(a, i);
                        h = o => {
                            const s = Math.exp(-i * a * o);
                            return n - s * ((t + i * a * r) / e * Math.sin(e * o) + r * Math.cos(e * o))
                        }, v = n => {
                            const o = Math.exp(-i * a * n);
                            return i * a * o * (Math.sin(e * n) * (t + i * a * r) / e + r * Math.cos(e * n)) - o * (Math.cos(e * n) * (t + i * a * r) - e * r * Math.sin(e * n))
                        }
                    } else if (1 === i) h = e => n - Math.exp(-a * e) * (r + (t + a * r) * e);
                    else {
                        const e = a * Math.sqrt(i * i - 1);
                        h = o => {
                            const s = Math.exp(-i * a * o),
                                u = Math.min(e * o, 300);
                            return n - s * ((t + i * a * r) * Math.sinh(u) + e * r * Math.cosh(u)) / e
                        }
                    }
                }
                return m(), {
                    next: t => {
                        const e = h(t);
                        if (p) s.done = t >= d;
                        else {
                            const i = 1e3 * v(t),
                                a = Math.abs(i) <= r,
                                u = Math.abs(n - e) <= o;
                            s.done = a && u
                        }
                        return s.value = s.done ? n : e, s
                    },
                    flipTarget: () => {
                        f = -f, [e, n] = [n, e], m()
                    }
                }
            }
            dt.needsInterpolation = (t, e) => "string" === typeof t || "string" === typeof e;
            const pt = t => 0,
                ht = (t, e, n) => {
                    const r = e - t;
                    return 0 === r ? 1 : (n - t) / r
                },
                vt = (t, e) => n => Math.max(Math.min(n, e), t),
                mt = t => t % 1 ? Number(t.toFixed(5)) : t,
                yt = /(-)?([\d]*\.?[\d])+/g,
                gt = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,
                bt = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;

            function xt(t) {
                return "string" === typeof t
            }
            const wt = {
                    test: t => "number" === typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                Pt = Object.assign(Object.assign({}, wt), {
                    transform: vt(0, 1)
                }),
                Et = Object.assign(Object.assign({}, wt), {
                    default: 1
                }),
                St = (t, e) => n => Boolean(xt(n) && bt.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                Ot = (t, e, n) => r => {
                    if (!xt(r)) return r;
                    const [o, i, a, s] = r.match(yt);
                    return {
                        [t]: parseFloat(o),
                        [e]: parseFloat(i),
                        [n]: parseFloat(a),
                        alpha: void 0 !== s ? parseFloat(s) : 1
                    }
                },
                At = vt(0, 255),
                Tt = Object.assign(Object.assign({}, wt), {
                    transform: t => Math.round(At(t))
                }),
                Ct = {
                    test: St("rgb", "red"),
                    parse: Ot("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: n,
                        alpha: r = 1
                    }) => "rgba(" + Tt.transform(t) + ", " + Tt.transform(e) + ", " + Tt.transform(n) + ", " + mt(Pt.transform(r)) + ")"
                };
            const jt = {
                    test: St("#"),
                    parse: function(t) {
                        let e = "",
                            n = "",
                            r = "",
                            o = "";
                        return t.length > 5 ? (e = t.substr(1, 2), n = t.substr(3, 2), r = t.substr(5, 2), o = t.substr(7, 2)) : (e = t.substr(1, 1), n = t.substr(2, 1), r = t.substr(3, 1), o = t.substr(4, 1), e += e, n += n, r += r, o += o), {
                            red: parseInt(e, 16),
                            green: parseInt(n, 16),
                            blue: parseInt(r, 16),
                            alpha: o ? parseInt(o, 16) / 255 : 1
                        }
                    },
                    transform: Ct.transform
                },
                Mt = t => ({
                    test: e => xt(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                Vt = Mt("deg"),
                Rt = Mt("%"),
                Dt = Mt("px"),
                kt = Mt("vh"),
                Lt = Mt("vw"),
                It = Object.assign(Object.assign({}, Rt), {
                    parse: t => Rt.parse(t) / 100,
                    transform: t => Rt.transform(100 * t)
                }),
                Ft = {
                    test: St("hsl", "hue"),
                    parse: Ot("hue", "saturation", "lightness"),
                    transform: ({
                        hue: t,
                        saturation: e,
                        lightness: n,
                        alpha: r = 1
                    }) => "hsla(" + Math.round(t) + ", " + Rt.transform(mt(e)) + ", " + Rt.transform(mt(n)) + ", " + mt(Pt.transform(r)) + ")"
                };

            function Bt(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            function Ut({
                hue: t,
                saturation: e,
                lightness: n,
                alpha: r
            }) {
                t /= 360, n /= 100;
                let o = 0,
                    i = 0,
                    a = 0;
                if (e /= 100) {
                    const r = n < .5 ? n * (1 + e) : n + e - n * e,
                        s = 2 * n - r;
                    o = Bt(s, r, t + 1 / 3), i = Bt(s, r, t), a = Bt(s, r, t - 1 / 3)
                } else o = i = a = n;
                return {
                    red: Math.round(255 * o),
                    green: Math.round(255 * i),
                    blue: Math.round(255 * a),
                    alpha: r
                }
            }
            const Nt = (t, e, n) => {
                    const r = t * t,
                        o = e * e;
                    return Math.sqrt(Math.max(0, n * (o - r) + r))
                },
                _t = [jt, Ct, Ft],
                zt = t => _t.find((e => e.test(t))),
                Ht = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
                qt = (t, e) => {
                    let n = zt(t),
                        r = zt(e);
                    Ht(t), Ht(e);
                    let o = n.parse(t),
                        i = r.parse(e);
                    n === Ft && (o = Ut(o), n = Ct), r === Ft && (i = Ut(i), r = Ct);
                    const a = Object.assign({}, o);
                    return t => {
                        for (const e in a) "alpha" !== e && (a[e] = Nt(o[e], i[e], t));
                        return a.alpha = J(o.alpha, i.alpha, t), n.transform(a)
                    }
                },
                Wt = {
                    test: t => Ct.test(t) || jt.test(t) || Ft.test(t),
                    parse: t => Ct.test(t) ? Ct.parse(t) : Ft.test(t) ? Ft.parse(t) : jt.parse(t),
                    transform: t => xt(t) ? t : t.hasOwnProperty("red") ? Ct.transform(t) : Ft.transform(t)
                },
                Yt = "${c}",
                Xt = "${n}";

            function Gt(t) {
                "number" === typeof t && (t = `${t}`);
                const e = [];
                let n = 0;
                const r = t.match(gt);
                r && (n = r.length, t = t.replace(gt, Yt), e.push(...r.map(Wt.parse)));
                const o = t.match(yt);
                return o && (t = t.replace(yt, Xt), e.push(...o.map(wt.parse))), {
                    values: e,
                    numColors: n,
                    tokenised: t
                }
            }

            function $t(t) {
                return Gt(t).values
            }

            function Zt(t) {
                const {
                    values: e,
                    numColors: n,
                    tokenised: r
                } = Gt(t), o = e.length;
                return t => {
                    let e = r;
                    for (let r = 0; r < o; r++) e = e.replace(r < n ? Yt : Xt, r < n ? Wt.transform(t[r]) : mt(t[r]));
                    return e
                }
            }
            const Jt = t => "number" === typeof t ? 0 : t;
            const Kt = {
                    test: function(t) {
                        var e, n, r, o;
                        return isNaN(t) && xt(t) && (null !== (n = null === (e = t.match(yt)) || void 0 === e ? void 0 : e.length) && void 0 !== n ? n : 0) + (null !== (o = null === (r = t.match(gt)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) > 0
                    },
                    parse: $t,
                    createTransformer: Zt,
                    getAnimatableNone: function(t) {
                        const e = $t(t);
                        return Zt(t)(e.map(Jt))
                    }
                },
                Qt = t => "number" === typeof t,
                te = (t, e) => n => e(t(n)),
                ee = (...t) => t.reduce(te);

            function ne(t, e) {
                return Qt(t) ? n => J(t, e, n) : Wt.test(t) ? qt(t, e) : ae(t, e)
            }
            const re = (t, e) => {
                    const n = [...t],
                        r = n.length,
                        o = t.map(((t, n) => ne(t, e[n])));
                    return t => {
                        for (let e = 0; e < r; e++) n[e] = o[e](t);
                        return n
                    }
                },
                oe = (t, e) => {
                    const n = Object.assign(Object.assign({}, t), e),
                        r = {};
                    for (const o in n) void 0 !== t[o] && void 0 !== e[o] && (r[o] = ne(t[o], e[o]));
                    return t => {
                        for (const e in r) n[e] = r[e](t);
                        return n
                    }
                };

            function ie(t) {
                const e = Kt.parse(t),
                    n = e.length;
                let r = 0,
                    o = 0,
                    i = 0;
                for (let a = 0; a < n; a++) r || "number" === typeof e[a] ? r++ : void 0 !== e[a].hue ? i++ : o++;
                return {
                    parsed: e,
                    numNumbers: r,
                    numRGB: o,
                    numHSL: i
                }
            }
            const ae = (t, e) => {
                    const n = Kt.createTransformer(e),
                        r = ie(t),
                        o = ie(e);
                    return r.numHSL === o.numHSL && r.numRGB === o.numRGB && r.numNumbers >= o.numNumbers ? ee(re(r.parsed, o.parsed), n) : n => `${n>0?e:t}`
                },
                se = (t, e) => n => J(t, e, n);

            function ue(t, e, n) {
                const r = [],
                    o = n || ("number" === typeof(i = t[0]) ? se : "string" === typeof i ? Wt.test(i) ? qt : ae : Array.isArray(i) ? re : "object" === typeof i ? oe : void 0);
                var i;
                const a = t.length - 1;
                for (let s = 0; s < a; s++) {
                    let n = o(t[s], t[s + 1]);
                    if (e) {
                        const t = Array.isArray(e) ? e[s] : e;
                        n = ee(t, n)
                    }
                    r.push(n)
                }
                return r
            }

            function ce(t, e, {
                clamp: n = !0,
                ease: r,
                mixer: o
            } = {}) {
                const i = t.length;
                e.length, !r || !Array.isArray(r) || r.length, t[0] > t[i - 1] && (t = [].concat(t), e = [].concat(e), t.reverse(), e.reverse());
                const a = ue(e, r, o),
                    s = 2 === i ? function([t, e], [n]) {
                        return r => n(ht(t, e, r))
                    }(t, a) : function(t, e) {
                        const n = t.length,
                            r = n - 1;
                        return o => {
                            let i = 0,
                                a = !1;
                            if (o <= t[0] ? a = !0 : o >= t[r] && (i = r - 1, a = !0), !a) {
                                let e = 1;
                                for (; e < n && !(t[e] > o || e === r); e++);
                                i = e - 1
                            }
                            const s = ht(t[i], t[i + 1], o);
                            return e[i](s)
                        }
                    }(t, a);
                return n ? e => s(it(t[0], t[i - 1], e)) : s
            }
            const le = t => e => 1 - t(1 - e),
                fe = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
                de = t => e => e * e * ((t + 1) * e - t),
                pe = t => t,
                he = (ve = 2, t => Math.pow(t, ve));
            var ve;
            const me = le(he),
                ye = fe(he),
                ge = t => 1 - Math.sin(Math.acos(t)),
                be = le(ge),
                xe = fe(be),
                we = de(1.525),
                Pe = le(we),
                Ee = fe(we),
                Se = (t => {
                    const e = de(t);
                    return t => (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })(1.525),
                Oe = t => {
                    if (1 === t || 0 === t) return t;
                    const e = t * t;
                    return t < .36363636363636365 ? 7.5625 * e : t < .7272727272727273 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 12.066481994459833 * e - 19.63545706371191 * t + 8.898060941828255 : 10.8 * t * t - 20.52 * t + 10.72
                },
                Ae = le(Oe);

            function Te(t, e) {
                return t.map((() => e || ye)).splice(0, t.length - 1)
            }

            function Ce({
                from: t = 0,
                to: e = 1,
                ease: n,
                offset: r,
                duration: o = 300
            }) {
                const i = {
                        done: !1,
                        value: t
                    },
                    a = Array.isArray(e) ? e : [t, e],
                    s = function(t, e) {
                        return t.map((t => t * e))
                    }(r && r.length === a.length ? r : function(t) {
                        const e = t.length;
                        return t.map(((t, n) => 0 !== n ? n / (e - 1) : 0))
                    }(a), o);

                function u() {
                    return ce(s, a, {
                        ease: Array.isArray(n) ? n : Te(a, n)
                    })
                }
                let c = u();
                return {
                    next: t => (i.value = c(t), i.done = t >= o, i),
                    flipTarget: () => {
                        a.reverse(), c = u()
                    }
                }
            }
            const je = {
                keyframes: Ce,
                spring: dt,
                decay: function({
                    velocity: t = 0,
                    from: e = 0,
                    power: n = .8,
                    timeConstant: r = 350,
                    restDelta: o = .5,
                    modifyTarget: i
                }) {
                    const a = {
                        done: !1,
                        value: e
                    };
                    let s = n * t;
                    const u = e + s,
                        c = void 0 === i ? u : i(u);
                    return c !== u && (s = c - e), {
                        next: t => {
                            const e = -s * Math.exp(-t / r);
                            return a.done = !(e > o || e < -o), a.value = a.done ? c : c + e, a
                        },
                        flipTarget: () => {}
                    }
                }
            };

            function Me(t, e, n = 0) {
                return t - e - n
            }
            const Ve = t => {
                const e = ({
                    delta: e
                }) => t(e);
                return {
                    start: () => Z.update(e, !0),
                    stop: () => q.update(e)
                }
            };

            function Re(t) {
                var e, n, {
                        from: r,
                        autoplay: o = !0,
                        driver: i = Ve,
                        elapsed: s = 0,
                        repeat: u = 0,
                        repeatType: c = "loop",
                        repeatDelay: l = 0,
                        onPlay: f,
                        onStop: d,
                        onComplete: p,
                        onRepeat: h,
                        onUpdate: v
                    } = t,
                    m = a(t, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
                let y, g, b, {
                        to: x
                    } = m,
                    w = 0,
                    P = m.duration,
                    E = !1,
                    S = !0;
                const O = function(t) {
                    if (Array.isArray(t.to)) return Ce;
                    if (je[t.type]) return je[t.type];
                    const e = new Set(Object.keys(t));
                    return e.has("ease") || e.has("duration") && !e.has("dampingRatio") ? Ce : e.has("dampingRatio") || e.has("stiffness") || e.has("mass") || e.has("damping") || e.has("restSpeed") || e.has("restDelta") ? dt : Ce
                }(m);
                (null === (n = (e = O).needsInterpolation) || void 0 === n ? void 0 : n.call(e, r, x)) && (b = ce([0, 100], [r, x], {
                    clamp: !1
                }), r = 0, x = 100);
                const A = O(Object.assign(Object.assign({}, m), {
                    from: r,
                    to: x
                }));

                function T() {
                    w++, "reverse" === c ? (S = w % 2 === 0, s = function(t, e, n = 0, r = !0) {
                        return r ? Me(e + -t, e, n) : e - (t - e) + n
                    }(s, P, l, S)) : (s = Me(s, P, l), "mirror" === c && A.flipTarget()), E = !1, h && h()
                }

                function C(t) {
                    if (S || (t = -t), s += t, !E) {
                        const t = A.next(Math.max(0, s));
                        g = t.value, b && (g = b(g)), E = S ? t.done : s <= 0
                    }
                    null === v || void 0 === v || v(g), E && (0 === w && (null !== P && void 0 !== P || (P = s)), w < u ? function(t, e, n, r) {
                        return r ? t >= e + n : t <= -n
                    }(s, P, l, S) && T() : (y.stop(), p && p()))
                }
                return o && (null === f || void 0 === f || f(), y = i(C), y.start()), {
                    stop: () => {
                        null === d || void 0 === d || d(), y.stop()
                    }
                }
            }
            var De = function(t) {
                return 1e3 * t
            };
            const ke = (t, e) => 1 - 3 * e + 3 * t,
                Le = (t, e) => 3 * e - 6 * t,
                Ie = t => 3 * t,
                Fe = (t, e, n) => ((ke(e, n) * t + Le(e, n)) * t + Ie(e)) * t,
                Be = (t, e, n) => 3 * ke(e, n) * t * t + 2 * Le(e, n) * t + Ie(e);
            const Ue = .1;

            function Ne(t, e, n, r) {
                if (t === e && n === r) return pe;
                const o = new Float32Array(11);
                for (let a = 0; a < 11; ++a) o[a] = Fe(a * Ue, t, n);

                function i(e) {
                    let r = 0,
                        i = 1;
                    for (; 10 !== i && o[i] <= e; ++i) r += Ue;
                    --i;
                    const a = r + (e - o[i]) / (o[i + 1] - o[i]) * Ue,
                        s = Be(a, t, n);
                    return s >= .001 ? function(t, e, n, r) {
                        for (let o = 0; o < 8; ++o) {
                            const o = Be(e, n, r);
                            if (0 === o) return e;
                            e -= (Fe(e, n, r) - t) / o
                        }
                        return e
                    }(e, a, t, n) : 0 === s ? a : function(t, e, n, r, o) {
                        let i, a, s = 0;
                        do {
                            a = e + (n - e) / 2, i = Fe(a, r, o) - t, i > 0 ? n = a : e = a
                        } while (Math.abs(i) > 1e-7 && ++s < 10);
                        return a
                    }(e, r, r + Ue, t, n)
                }
                return t => 0 === t || 1 === t ? t : Fe(i(t), e, r)
            }
            var _e = {
                    linear: pe,
                    easeIn: he,
                    easeInOut: ye,
                    easeOut: me,
                    circIn: ge,
                    circInOut: xe,
                    circOut: be,
                    backIn: we,
                    backInOut: Ee,
                    backOut: Pe,
                    anticipate: Se,
                    bounceIn: Ae,
                    bounceInOut: t => t < .5 ? .5 * (1 - Oe(1 - 2 * t)) : .5 * Oe(2 * t - 1) + .5,
                    bounceOut: Oe
                },
                ze = function(t) {
                    if (Array.isArray(t)) {
                        t.length;
                        var e = s(t, 4);
                        return Ne(e[0], e[1], e[2], e[3])
                    }
                    return "string" === typeof t ? ("Invalid easing type '".concat(t, "'"), _e[t]) : t
                },
                He = function(t, e) {
                    return "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !Kt.test(e) || e.startsWith("url(")))
                },
                qe = function(t) {
                    return Array.isArray(t)
                },
                We = function() {
                    return {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    }
                },
                Ye = function(t) {
                    return {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === t ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    }
                },
                Xe = function() {
                    return {
                        type: "keyframes",
                        ease: "linear",
                        duration: .3
                    }
                },
                Ge = function(t) {
                    return {
                        type: "keyframes",
                        duration: .8,
                        values: t
                    }
                },
                $e = {
                    x: We,
                    y: We,
                    z: We,
                    rotate: We,
                    rotateX: We,
                    rotateY: We,
                    rotateZ: We,
                    scaleX: Ye,
                    scaleY: Ye,
                    scale: Ye,
                    opacity: Xe,
                    backgroundColor: Xe,
                    color: Xe,
                    default: Ye
                };
            const Ze = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function Je(t) {
                let [e, n] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                const [r] = n.match(yt) || [];
                if (!r) return t;
                const o = n.replace(r, "");
                let i = Ze.has(e) ? 1 : 0;
                return r !== n && (i *= 100), e + "(" + i + o + ")"
            }
            const Ke = /([a-z-]*)\(.*?\)/g,
                Qe = Object.assign(Object.assign({}, Kt), {
                    getAnimatableNone: t => {
                        const e = t.match(Ke);
                        return e ? e.map(Je).join(" ") : t
                    }
                });
            var tn = i(i({}, wt), {
                    transform: Math.round
                }),
                en = {
                    borderWidth: Dt,
                    borderTopWidth: Dt,
                    borderRightWidth: Dt,
                    borderBottomWidth: Dt,
                    borderLeftWidth: Dt,
                    borderRadius: Dt,
                    radius: Dt,
                    borderTopLeftRadius: Dt,
                    borderTopRightRadius: Dt,
                    borderBottomRightRadius: Dt,
                    borderBottomLeftRadius: Dt,
                    width: Dt,
                    maxWidth: Dt,
                    height: Dt,
                    maxHeight: Dt,
                    size: Dt,
                    top: Dt,
                    right: Dt,
                    bottom: Dt,
                    left: Dt,
                    padding: Dt,
                    paddingTop: Dt,
                    paddingRight: Dt,
                    paddingBottom: Dt,
                    paddingLeft: Dt,
                    margin: Dt,
                    marginTop: Dt,
                    marginRight: Dt,
                    marginBottom: Dt,
                    marginLeft: Dt,
                    rotate: Vt,
                    rotateX: Vt,
                    rotateY: Vt,
                    rotateZ: Vt,
                    scale: Et,
                    scaleX: Et,
                    scaleY: Et,
                    scaleZ: Et,
                    skew: Vt,
                    skewX: Vt,
                    skewY: Vt,
                    distance: Dt,
                    translateX: Dt,
                    translateY: Dt,
                    translateZ: Dt,
                    x: Dt,
                    y: Dt,
                    z: Dt,
                    perspective: Dt,
                    transformPerspective: Dt,
                    opacity: Pt,
                    originX: It,
                    originY: It,
                    originZ: Dt,
                    zIndex: tn,
                    fillOpacity: Pt,
                    strokeOpacity: Pt,
                    numOctaves: tn
                },
                nn = i(i({}, en), {
                    color: Wt,
                    backgroundColor: Wt,
                    outlineColor: Wt,
                    fill: Wt,
                    stroke: Wt,
                    borderColor: Wt,
                    borderTopColor: Wt,
                    borderRightColor: Wt,
                    borderBottomColor: Wt,
                    borderLeftColor: Wt,
                    filter: Qe,
                    WebkitFilter: Qe
                }),
                rn = function(t) {
                    return nn[t]
                };

            function on(t, e) {
                var n, r = rn(t);
                return r !== Qe && (r = Kt), null === (n = r.getAnimatableNone) || void 0 === n ? void 0 : n.call(r, e)
            }
            var an = !1,
                sn = function(t) {
                    return qe(t) ? t[t.length - 1] || 0 : t
                };

            function un(t) {
                var e = t.ease,
                    n = t.times,
                    r = t.yoyo,
                    o = t.flip,
                    s = t.loop,
                    u = a(t, ["ease", "times", "yoyo", "flip", "loop"]),
                    c = i({}, u);
                return n && (c.offset = n), u.duration && (c.duration = De(u.duration)), u.repeatDelay && (c.repeatDelay = De(u.repeatDelay)), e && (c.ease = function(t) {
                    return Array.isArray(t) && "number" !== typeof t[0]
                }(e) ? e.map(ze) : ze(e)), "tween" === u.type && (c.type = "keyframes"), (r || s || o) && (!0, r ? c.repeatType = "reverse" : s ? c.repeatType = "loop" : o && (c.repeatType = "mirror"), c.repeat = s || r || o || u.repeat), "spring" !== u.type && (c.type = "keyframes"), c
            }

            function cn(t, e, n) {
                var r;
                return Array.isArray(e.to) && (null !== (r = t.duration) && void 0 !== r || (t.duration = .8)),
                    function(t) {
                        Array.isArray(t.to) && null === t.to[0] && (t.to = u([], s(t.to), !1), t.to[0] = t.from)
                    }(e),
                    function(t) {
                        t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
                        var e = a(t, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
                        return !!Object.keys(e).length
                    }(t) || (t = i(i({}, t), function(t, e) {
                        var n;
                        return n = qe(e) ? Ge : $e[t] || $e.default, i({
                            to: e
                        }, n(e))
                    }(n, e.to))), i(i({}, e), un(t))
            }

            function ln(t, e, n, r, o) {
                var a, s = pn(r, t),
                    u = null !== (a = s.from) && void 0 !== a ? a : e.get(),
                    c = He(t, n);
                "none" === u && c && "string" === typeof n ? u = on(t, n) : fn(u) && "string" === typeof n ? u = dn(n) : !Array.isArray(n) && fn(n) && "string" === typeof u && (n = dn(u));
                var l = He(t, u);
                return "You are trying to animate ".concat(t, ' from "').concat(u, '" to "').concat(n, '". ').concat(u, " is not an animatable value - to enable this animation set ").concat(u, " to a value animatable to ").concat(n, " via the `style` property."), l && c && !1 !== s.type ? function() {
                    var r = {
                        from: u,
                        to: n,
                        velocity: e.getVelocity(),
                        onComplete: o,
                        onUpdate: function(t) {
                            return e.set(t)
                        }
                    };
                    return "inertia" === s.type || "decay" === s.type ? function({
                        from: t = 0,
                        velocity: e = 0,
                        min: n,
                        max: r,
                        power: o = .8,
                        timeConstant: i = 750,
                        bounceStiffness: a = 500,
                        bounceDamping: s = 10,
                        restDelta: u = 1,
                        modifyTarget: c,
                        driver: l,
                        onUpdate: f,
                        onComplete: d,
                        onStop: p
                    }) {
                        let h;

                        function v(t) {
                            return void 0 !== n && t < n || void 0 !== r && t > r
                        }

                        function m(t) {
                            return void 0 === n ? r : void 0 === r || Math.abs(n - t) < Math.abs(r - t) ? n : r
                        }

                        function y(t) {
                            null === h || void 0 === h || h.stop(), h = Re(Object.assign(Object.assign({}, t), {
                                driver: l,
                                onUpdate: e => {
                                    var n;
                                    null === f || void 0 === f || f(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: d,
                                onStop: p
                            }))
                        }

                        function g(t) {
                            y(Object.assign({
                                type: "spring",
                                stiffness: a,
                                damping: s,
                                restDelta: u
                            }, t))
                        }
                        if (v(t)) g({
                            from: t,
                            velocity: e,
                            to: m(t)
                        });
                        else {
                            let r = o * e + t;
                            "undefined" !== typeof c && (r = c(r));
                            const a = m(r),
                                s = a === n ? -1 : 1;
                            let l, f;
                            const d = t => {
                                l = f, f = t, e = K(t - l, $().delta), (1 === s && t > a || -1 === s && t < a) && g({
                                    from: t,
                                    to: a,
                                    velocity: e
                                })
                            };
                            y({
                                type: "decay",
                                from: t,
                                velocity: e,
                                timeConstant: i,
                                power: o,
                                restDelta: u,
                                modifyTarget: c,
                                onUpdate: v(r) ? d : void 0
                            })
                        }
                        return {
                            stop: () => null === h || void 0 === h ? void 0 : h.stop()
                        }
                    }(i(i({}, r), s)) : Re(i(i({}, cn(s, r, t)), {
                        onUpdate: function(t) {
                            var e;
                            r.onUpdate(t), null === (e = s.onUpdate) || void 0 === e || e.call(s, t)
                        },
                        onComplete: function() {
                            var t;
                            r.onComplete(), null === (t = s.onComplete) || void 0 === t || t.call(s)
                        }
                    }))
                } : function() {
                    var t, r, i = sn(n);
                    return e.set(i), o(), null === (t = null === s || void 0 === s ? void 0 : s.onUpdate) || void 0 === t || t.call(s, i), null === (r = null === s || void 0 === s ? void 0 : s.onComplete) || void 0 === r || r.call(s), {
                        stop: function() {}
                    }
                }
            }

            function fn(t) {
                return 0 === t || "string" === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
            }

            function dn(t) {
                return "number" === typeof t ? 0 : on("", t)
            }

            function pn(t, e) {
                return t[e] || t.default || t
            }

            function hn(t, e, n, r) {
                return void 0 === r && (r = {}), an && (r = {
                    type: !1
                }), e.start((function(o) {
                    var i, a, s = ln(t, e, n, r, o),
                        u = function(t, e) {
                            var n, r;
                            return null !== (r = null !== (n = (pn(t, e) || {}).delay) && void 0 !== n ? n : t.delay) && void 0 !== r ? r : 0
                        }(r, t),
                        c = function() {
                            return a = s()
                        };
                    return u ? i = window.setTimeout(c, De(u)) : c(),
                        function() {
                            clearTimeout(i), null === a || void 0 === a || a.stop()
                        }
                }))
            }
            var vn = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                mn = vn.length,
                yn = function(t) {
                    return "string" === typeof t ? parseFloat(t) : t
                },
                gn = function(t) {
                    return "number" === typeof t || Dt.test(t)
                };

            function bn(t, e) {
                var n;
                return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius
            }
            var xn = Pn(0, .5, be),
                wn = Pn(.5, .95, pe);

            function Pn(t, e, n) {
                return function(r) {
                    return r < t ? 0 : r > e ? 1 : n(ht(t, e, r))
                }
            }

            function En(t, e) {
                t.min = e.min, t.max = e.max
            }

            function Sn(t, e) {
                En(t.x, e.x), En(t.y, e.y)
            }

            function On(t) {
                return void 0 === t || 1 === t
            }

            function An(t) {
                var e = t.scale,
                    n = t.scaleX,
                    r = t.scaleY;
                return !On(e) || !On(n) || !On(r)
            }

            function Tn(t) {
                return An(t) || Cn(t.x) || Cn(t.y) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function Cn(t) {
                return t && "0%" !== t
            }

            function jn(t, e, n) {
                return n + e * (t - n)
            }

            function Mn(t, e, n, r, o) {
                return void 0 !== o && (t = jn(t, o, r)), jn(t, n, r) + e
            }

            function Vn(t, e, n, r, o) {
                void 0 === e && (e = 0), void 0 === n && (n = 1), t.min = Mn(t.min, e, n, r, o), t.max = Mn(t.max, e, n, r, o)
            }

            function Rn(t, e) {
                var n = e.x,
                    r = e.y;
                Vn(t.x, n.translate, n.scale, n.originPoint), Vn(t.y, r.translate, r.scale, r.originPoint)
            }

            function Dn(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function kn(t, e, n) {
                var r = s(n, 3),
                    o = r[0],
                    i = r[1],
                    a = r[2],
                    u = void 0 !== e[a] ? e[a] : .5,
                    c = J(t.min, t.max, u);
                Vn(t, e[o], e[i], c, e.scale)
            }
            var Ln = ["x", "scaleX", "originX"],
                In = ["y", "scaleY", "originY"];

            function Fn(t, e) {
                kn(t.x, e, Ln), kn(t.y, e, In)
            }
            const Bn = t => t.hasOwnProperty("x") && t.hasOwnProperty("y"),
                Un = t => Bn(t) && t.hasOwnProperty("z"),
                Nn = (t, e) => Math.abs(t - e);

            function _n(t, e) {
                if (Qt(t) && Qt(e)) return Nn(t, e);
                if (Bn(t) && Bn(e)) {
                    const n = Nn(t.x, e.x),
                        r = Nn(t.y, e.y),
                        o = Un(t) && Un(e) ? Nn(t.z, e.z) : 0;
                    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(o, 2))
                }
            }

            function zn(t) {
                return t.max - t.min
            }

            function Hn(t, e, n) {
                return void 0 === e && (e = 0), void 0 === n && (n = .01), _n(t, e) < n
            }

            function qn(t, e, n, r) {
                void 0 === r && (r = .5), t.origin = r, t.originPoint = J(e.min, e.max, t.origin), t.scale = zn(n) / zn(e), (Hn(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = J(n.min, n.max, t.origin) - t.originPoint, (Hn(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function Wn(t, e, n, r) {
                qn(t.x, e.x, n.x, null === r || void 0 === r ? void 0 : r.originX), qn(t.y, e.y, n.y, null === r || void 0 === r ? void 0 : r.originY)
            }

            function Yn(t, e, n) {
                t.min = n.min + e.min, t.max = t.min + zn(e)
            }

            function Xn(t, e, n) {
                t.min = e.min - n.min, t.max = t.min + zn(e)
            }

            function Gn(t, e, n) {
                Xn(t.x, e.x, n.x), Xn(t.y, e.y, n.y)
            }

            function $n(t, e, n, r, o) {
                return t = jn(t -= e, 1 / n, r), void 0 !== o && (t = jn(t, 1 / o, r)), t
            }

            function Zn(t, e, n, r, o) {
                var i = s(n, 3),
                    a = i[0],
                    u = i[1],
                    c = i[2];
                ! function(t, e, n, r, o, i, a) {
                    if (void 0 === e && (e = 0), void 0 === n && (n = 1), void 0 === r && (r = .5), void 0 === i && (i = t), void 0 === a && (a = t), Rt.test(e) && (e = parseFloat(e), e = J(a.min, a.max, e / 100) - a.min), "number" === typeof e) {
                        var s = J(i.min, i.max, r);
                        t === i && (s -= e), t.min = $n(t.min, e, n, s, o), t.max = $n(t.max, e, n, s, o)
                    }
                }(t, e[a], e[u], e[c], e.scale, r, o)
            }
            var Jn = ["x", "scaleX", "originX"],
                Kn = ["y", "scaleY", "originY"];

            function Qn(t, e, n, r) {
                Zn(t.x, e, Jn, null === n || void 0 === n ? void 0 : n.x, null === r || void 0 === r ? void 0 : r.x), Zn(t.y, e, Kn, null === n || void 0 === n ? void 0 : n.y, null === r || void 0 === r ? void 0 : r.y)
            }

            function tr(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function er(t) {
                return tr(t.x) && tr(t.y)
            }

            function nr(t, e) {
                return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
            }
            var rr = function() {
                    function t() {
                        this.members = []
                    }
                    return t.prototype.add = function(t) {
                        Q(this.members, t), t.scheduleRender()
                    }, t.prototype.remove = function(t) {
                        if (tt(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                            var e = this.members[this.members.length - 1];
                            e && this.promote(e)
                        }
                    }, t.prototype.relegate = function(t) {
                        var e, n = this.members.findIndex((function(e) {
                            return t === e
                        }));
                        if (0 === n) return !1;
                        for (var r = n; r >= 0; r--) {
                            var o = this.members[r];
                            if (!1 !== o.isPresent) {
                                e = o;
                                break
                            }
                        }
                        return !!e && (this.promote(e), !0)
                    }, t.prototype.promote = function(t, e) {
                        var n, r = this.lead;
                        t !== r && (this.prevLead = r, this.lead = t, t.show(), r && (r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, e && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues, t.snapshot.isShared = !0), (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0), !1 === t.options.crossfade && r.hide()))
                    }, t.prototype.exitAnimationComplete = function() {
                        this.members.forEach((function(t) {
                            var e, n, r, o, i;
                            null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e), null === (i = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (o = r.options).onExitComplete) || void 0 === i || i.call(o)
                        }))
                    }, t.prototype.scheduleRender = function() {
                        this.members.forEach((function(t) {
                            t.instance && t.scheduleRender(!1)
                        }))
                    }, t.prototype.removeLeadSnapshot = function() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }, t
                }(),
                or = {};

            function ir(t, e, n) {
                var r = t.x.translate / e.x,
                    o = t.y.translate / e.y,
                    i = "translate3d(".concat(r, "px, ").concat(o, "px, 0) ");
                if (n) {
                    var a = n.rotate,
                        s = n.rotateX,
                        u = n.rotateY;
                    a && (i += "rotate(".concat(a, "deg) ")), s && (i += "rotateX(".concat(s, "deg) ")), u && (i += "rotateY(".concat(u, "deg) "))
                }
                return "translate3d(0px, 0px, 0) scale(1, 1)" === (i += "scale(".concat(t.x.scale, ", ").concat(t.y.scale, ")")) ? "none" : i
            }

            function ar(t) {
                return [t("x"), t("y")]
            }
            var sr = ["", "X", "Y", "Z"],
                ur = ["transformPerspective", "x", "y", "z"];

            function cr(t, e) {
                return ur.indexOf(t) - ur.indexOf(e)
            } ["translate", "scale", "rotate", "skew"].forEach((function(t) {
                return sr.forEach((function(e) {
                    return ur.push(t + e)
                }))
            }));
            var lr = new Set(ur);

            function fr(t) {
                return lr.has(t)
            }
            var dr = new Set(["originX", "originY", "originZ"]);

            function pr(t) {
                return dr.has(t)
            }
            var hr = function(t, e) {
                    return t.depth - e.depth
                },
                vr = function() {
                    function t() {
                        this.children = [], this.isDirty = !1
                    }
                    return t.prototype.add = function(t) {
                        Q(this.children, t), this.isDirty = !0
                    }, t.prototype.remove = function(t) {
                        tt(this.children, t), this.isDirty = !0
                    }, t.prototype.forEach = function(t) {
                        this.isDirty && this.children.sort(hr), this.isDirty = !1, this.children.forEach(t)
                    }, t
                }();

            function mr(t) {
                var e, n = ot(t) ? t.get() : t;
                return e = n, Boolean(e && "object" === typeof e && e.mix && e.toValue) ? n.toValue() : n
            }
            var yr = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            };

            function gr(t) {
                var e = t.attachResizeListener,
                    n = t.defaultParent,
                    r = t.measureScroll,
                    o = t.resetTransform;
                return function() {
                    function t(t, e, r) {
                        var o = this;
                        void 0 === e && (e = {}), void 0 === r && (r = null === n || void 0 === n ? void 0 : n()), this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.potentialNodes = new Map, this.checkUpdateFailed = function() {
                            o.isUpdating && (o.isUpdating = !1, o.clearAllSnapshots())
                        }, this.updateProjection = function() {
                            o.nodes.forEach(Or), o.nodes.forEach(Ar)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.id = t, this.latestValues = e, this.root = r ? r.root || r : this, this.path = r ? u(u([], s(r.path), !1), [r], !1) : [], this.parent = r, this.depth = r ? r.depth + 1 : 0, t && this.root.registerPotentialNode(t, this);
                        for (var i = 0; i < this.path.length; i++) this.path[i].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new vr)
                    }
                    return t.prototype.addEventListener = function(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new et), this.eventHandlers.get(t).add(e)
                    }, t.prototype.notifyListeners = function(t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                        var r = this.eventHandlers.get(t);
                        null === r || void 0 === r || r.notify.apply(r, u([], s(e), !1))
                    }, t.prototype.hasListeners = function(t) {
                        return this.eventHandlers.has(t)
                    }, t.prototype.registerPotentialNode = function(t, e) {
                        this.potentialNodes.set(t, e)
                    }, t.prototype.mount = function(t, n) {
                        var r, o = this;
                        if (void 0 === n && (n = !1), !this.instance) {
                            this.isSVG = t instanceof SVGElement && "svg" !== t.tagName, this.instance = t;
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout,
                                c = a.visualElement;
                            if (c && !c.getInstance() && c.mount(t), this.root.nodes.add(this), null === (r = this.parent) || void 0 === r || r.children.add(this), this.id && this.root.potentialNodes.delete(this.id), n && (u || s) && (this.isLayoutDirty = !0), e) {
                                var l, f = function() {
                                    return o.root.updateBlockedByResize = !1
                                };
                                e(t, (function() {
                                    o.root.updateBlockedByResize = !0, clearTimeout(l), l = window.setTimeout(f, 250), yr.hasAnimatedSinceResize && (yr.hasAnimatedSinceResize = !1, o.nodes.forEach(Sr))
                                }))
                            }
                            s && this.root.registerSharedNode(s, this), !1 !== this.options.animate && c && (s || u) && this.addEventListener("didUpdate", (function(t) {
                                var e, n, r, a, s, u = t.delta,
                                    l = t.hasLayoutChanged,
                                    f = t.hasRelativeTargetChanged,
                                    d = t.layout;
                                if (o.isTreeAnimationBlocked()) return o.target = void 0, void(o.relativeTarget = void 0);
                                var p = null !== (n = null !== (e = o.options.transition) && void 0 !== e ? e : c.getDefaultTransition()) && void 0 !== n ? n : Rr,
                                    h = c.getProps().onLayoutAnimationComplete,
                                    v = !o.targetLayout || !nr(o.targetLayout, d) || f,
                                    m = !l && f;
                                if ((null === (r = o.resumeFrom) || void 0 === r ? void 0 : r.instance) || m || l && (v || !o.currentAnimation)) {
                                    o.resumeFrom && (o.resumingFrom = o.resumeFrom, o.resumingFrom.resumingFrom = void 0), o.setAnimationOrigin(u, m);
                                    var y = i(i({}, pn(p, "layout")), {
                                        onComplete: h
                                    });
                                    c.shouldReduceMotion && (y.delay = 0, y.type = !1), o.startAnimation(y)
                                } else l || 0 !== o.animationProgress || o.finishAnimation(), o.isLead() && (null === (s = (a = o.options).onExitComplete) || void 0 === s || s.call(a));
                                o.targetLayout = d
                            }))
                        }
                    }, t.prototype.unmount = function() {
                        var t, e;
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), null === (t = this.getStack()) || void 0 === t || t.remove(this), null === (e = this.parent) || void 0 === e || e.children.delete(this), this.instance = void 0, q.preRender(this.updateProjection)
                    }, t.prototype.blockUpdate = function() {
                        this.updateManuallyBlocked = !0
                    }, t.prototype.unblockUpdate = function() {
                        this.updateManuallyBlocked = !1
                    }, t.prototype.isUpdateBlocked = function() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }, t.prototype.isTreeAnimationBlocked = function() {
                        var t;
                        return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                    }, t.prototype.startUpdate = function() {
                        var t;
                        this.isUpdateBlocked() || (this.isUpdating = !0, null === (t = this.nodes) || void 0 === t || t.forEach(Tr))
                    }, t.prototype.willUpdate = function(t) {
                        var e, n, r;
                        if (void 0 === t && (t = !0), this.root.isUpdateBlocked()) null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                        else if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
                            this.isLayoutDirty = !0;
                            for (var o = 0; o < this.path.length; o++) {
                                var i = this.path[o];
                                i.shouldResetTransform = !0, i.updateScroll()
                            }
                            var a = this.options,
                                s = a.layoutId,
                                u = a.layout;
                            if (void 0 !== s || u) {
                                var c = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                                this.prevTransformTemplateValue = null === c || void 0 === c ? void 0 : c(this.latestValues, ""), this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                            }
                        }
                    }, t.prototype.didUpdate = function() {
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(Pr);
                        this.isUpdating && (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(Dr), this.potentialNodes.clear()), this.nodes.forEach(Er), this.nodes.forEach(br), this.nodes.forEach(xr), this.clearAllSnapshots(), W.update(), W.preRender(), W.render())
                    }, t.prototype.clearAllSnapshots = function() {
                        this.nodes.forEach(wr), this.sharedNodes.forEach(Cr)
                    }, t.prototype.scheduleUpdateProjection = function() {
                        Z.preRender(this.updateProjection, !1, !0)
                    }, t.prototype.scheduleCheckAfterUnmount = function() {
                        var t = this;
                        Z.postRender((function() {
                            t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed()
                        }))
                    }, t.prototype.updateSnapshot = function() {
                        if (!this.snapshot && this.instance) {
                            var t = this.measure(),
                                e = this.removeTransform(this.removeElementScroll(t));
                            Lr(e), this.snapshot = {
                                measured: t,
                                layout: e,
                                latestValues: {}
                            }
                        }
                    }, t.prototype.updateLayout = function() {
                        var t;
                        if (this.instance && (this.updateScroll(), this.options.alwaysMeasureLayout && this.isLead() || this.isLayoutDirty)) {
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (var e = 0; e < this.path.length; e++) {
                                    this.path[e].updateScroll()
                                }
                            var n = this.measure();
                            Lr(n);
                            var r = this.layout;
                            this.layout = {
                                measured: n,
                                actual: this.removeElementScroll(n)
                            }, this.layoutCorrected = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), null === (t = this.options.visualElement) || void 0 === t || t.notifyLayoutMeasure(this.layout.actual, null === r || void 0 === r ? void 0 : r.actual)
                        }
                    }, t.prototype.updateScroll = function() {
                        this.options.layoutScroll && this.instance && (this.scroll = r(this.instance))
                    }, t.prototype.resetTransform = function() {
                        var t;
                        if (o) {
                            var e = this.isLayoutDirty || this.shouldResetTransform,
                                n = this.projectionDelta && !er(this.projectionDelta),
                                r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                                i = null === r || void 0 === r ? void 0 : r(this.latestValues, ""),
                                a = i !== this.prevTransformTemplateValue;
                            e && (n || Tn(this.latestValues) || a) && (o(this.instance, i), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                    }, t.prototype.measure = function() {
                        var t = this.options.visualElement;
                        if (!t) return {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        var e = t.measureViewportBox(),
                            n = this.root.scroll;
                        return n && (Dn(e.x, n.x), Dn(e.y, n.y)), e
                    }, t.prototype.removeElementScroll = function(t) {
                        var e = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Sn(e, t);
                        for (var n = 0; n < this.path.length; n++) {
                            var r = this.path[n],
                                o = r.scroll,
                                i = r.options;
                            r !== this.root && o && i.layoutScroll && (Dn(e.x, o.x), Dn(e.y, o.y))
                        }
                        return e
                    }, t.prototype.applyTransform = function(t, e) {
                        void 0 === e && (e = !1);
                        var n = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Sn(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            !e && o.options.layoutScroll && o.scroll && o !== o.root && Fn(n, {
                                x: -o.scroll.x,
                                y: -o.scroll.y
                            }), Tn(o.latestValues) && Fn(n, o.latestValues)
                        }
                        return Tn(this.latestValues) && Fn(n, this.latestValues), n
                    }, t.prototype.removeTransform = function(t) {
                        var e, n = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        };
                        Sn(n, t);
                        for (var r = 0; r < this.path.length; r++) {
                            var o = this.path[r];
                            if (o.instance && Tn(o.latestValues)) {
                                An(o.latestValues) && o.updateSnapshot();
                                var i = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                Sn(i, o.measure()), Qn(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, i)
                            }
                        }
                        return Tn(this.latestValues) && Qn(n, this.latestValues), n
                    }, t.prototype.setTargetDelta = function(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection()
                    }, t.prototype.setOptions = function(t) {
                        var e;
                        this.options = i(i(i({}, this.options), t), {
                            crossfade: null === (e = t.crossfade) || void 0 === e || e
                        })
                    }, t.prototype.clearMeasurements = function() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }, t.prototype.resolveTargetDelta = function() {
                        var t, e, n, r, o = this.options,
                            i = o.layout,
                            a = o.layoutId;
                        this.layout && (i || a) && (this.targetDelta || this.relativeTarget || (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Gn(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Sn(this.relativeTarget, this.relativeTargetOrigin))), (this.relativeTarget || this.targetDelta) && (this.target || (this.target = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.targetWithTransforms = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }), this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target) ? (e = this.target, n = this.relativeTarget, r = this.relativeParent.target, Yn(e.x, n.x, r.x), Yn(e.y, n.y, r.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Sn(this.target, this.layout.actual), Rn(this.target, this.targetDelta)) : Sn(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.relativeTargetOrigin = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, Gn(this.relativeTargetOrigin, this.target, this.relativeParent.target), Sn(this.relativeTarget, this.relativeTargetOrigin)))))
                    }, t.prototype.getClosestProjectingParent = function() {
                        if (this.parent && !Tn(this.parent.latestValues)) return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                    }, t.prototype.calcProjection = function() {
                        var t, e = this.options,
                            n = e.layout,
                            r = e.layoutId;
                        if (this.isTreeAnimating = Boolean((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), this.layout && (n || r)) {
                            var o = this.getLead();
                            Sn(this.layoutCorrected, this.layout.actual),
                                function(t, e, n, r) {
                                    var o, i;
                                    void 0 === r && (r = !1);
                                    var a = n.length;
                                    if (a) {
                                        var s, u;
                                        e.x = e.y = 1;
                                        for (var c = 0; c < a; c++) u = (s = n[c]).projectionDelta, "contents" !== (null === (i = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === i ? void 0 : i.display) && (r && s.options.layoutScroll && s.scroll && s !== s.root && Fn(t, {
                                            x: -s.scroll.x,
                                            y: -s.scroll.y
                                        }), u && (e.x *= u.x.scale, e.y *= u.y.scale, Rn(t, u)), r && Tn(s.latestValues) && Fn(t, s.latestValues))
                                    }
                                }(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                            var i = o.target;
                            if (i) {
                                this.projectionDelta || (this.projectionDelta = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                }, this.projectionDeltaWithTransform = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                });
                                var a = this.treeScale.x,
                                    s = this.treeScale.y,
                                    u = this.projectionTransform;
                                Wn(this.projectionDelta, this.layoutCorrected, i, this.latestValues), this.projectionTransform = ir(this.projectionDelta, this.treeScale), this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", i))
                            }
                        }
                    }, t.prototype.hide = function() {
                        this.isVisible = !1
                    }, t.prototype.show = function() {
                        this.isVisible = !0
                    }, t.prototype.scheduleRender = function(t) {
                        var e, n, r;
                        void 0 === t && (t = !0), null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e), t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }, t.prototype.setAnimationOrigin = function(t, e) {
                        var n, r = this;
                        void 0 === e && (e = !1);
                        var o = this.snapshot,
                            a = (null === o || void 0 === o ? void 0 : o.latestValues) || {},
                            s = i({}, this.latestValues),
                            u = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            };
                        this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !e;
                        var c = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            },
                            l = null === o || void 0 === o ? void 0 : o.isShared,
                            f = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
                            d = Boolean(l && !f && !0 === this.options.crossfade && !this.path.some(Vr));
                        this.animationProgress = 0, this.mixTargetDelta = function(e) {
                            var n, o, i, p, h, v = e / 1e3;
                            jr(u.x, t.x, v), jr(u.y, t.y, v), r.setTargetDelta(u), r.relativeTarget && r.relativeTargetOrigin && r.layout && (null === (n = r.relativeParent) || void 0 === n ? void 0 : n.layout) && (Gn(c, r.layout.actual, r.relativeParent.layout.actual), o = r.relativeTarget, i = r.relativeTargetOrigin, p = c, h = v, Mr(o.x, i.x, p.x, h), Mr(o.y, i.y, p.y, h)), l && (r.animationValues = s, function(t, e, n, r, o, i) {
                                var a, s, u, c;
                                o ? (t.opacity = J(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, xn(r)), t.opacityExit = J(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, wn(r))) : i && (t.opacity = J(null !== (u = e.opacity) && void 0 !== u ? u : 1, null !== (c = n.opacity) && void 0 !== c ? c : 1, r));
                                for (var l = 0; l < mn; l++) {
                                    var f = "border".concat(vn[l], "Radius"),
                                        d = bn(e, f),
                                        p = bn(n, f);
                                    void 0 === d && void 0 === p || (d || (d = 0), p || (p = 0), 0 === d || 0 === p || gn(d) === gn(p) ? (t[f] = Math.max(J(yn(d), yn(p), r), 0), (Rt.test(p) || Rt.test(d)) && (t[f] += "%")) : t[f] = p)
                                }(e.rotate || n.rotate) && (t.rotate = J(e.rotate || 0, n.rotate || 0, r))
                            }(s, a, r.latestValues, v, d, f)), r.root.scheduleUpdateProjection(), r.scheduleRender(), r.animationProgress = v
                        }, this.mixTargetDelta(0)
                    }, t.prototype.startAnimation = function(t) {
                        var e, n, r = this;
                        null === (e = this.currentAnimation) || void 0 === e || e.stop(), this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()), this.pendingAnimation && (q.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Z.update((function() {
                            yr.hasAnimatedSinceResize = !0, r.currentAnimation = function(t, e, n) {
                                void 0 === n && (n = {});
                                var r = ot(t) ? t : rt(t);
                                return hn("", r, e, n), {
                                    stop: function() {
                                        return r.stop()
                                    },
                                    isAnimating: function() {
                                        return r.isAnimating()
                                    }
                                }
                            }(0, 1e3, i(i({}, t), {
                                onUpdate: function(e) {
                                    var n;
                                    r.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                                },
                                onComplete: function() {
                                    var e;
                                    null === (e = t.onComplete) || void 0 === e || e.call(t), r.completeAnimation()
                                }
                            })), r.resumingFrom && (r.resumingFrom.currentAnimation = r.currentAnimation), r.pendingAnimation = void 0
                        }))
                    }, t.prototype.completeAnimation = function() {
                        var t;
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }, t.prototype.finishAnimation = function() {
                        var t;
                        this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }, t.prototype.applyTransformsToTarget = function() {
                        var t = this.getLead(),
                            e = t.targetWithTransforms,
                            n = t.target,
                            r = t.layout,
                            o = t.latestValues;
                        e && n && r && (Sn(e, n), Fn(e, o), Wn(this.projectionDeltaWithTransform, this.layoutCorrected, e, o))
                    }, t.prototype.registerSharedNode = function(t, e) {
                        var n, r, o;
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new rr), this.sharedNodes.get(t).add(e), e.promote({
                            transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                            preserveFollowOpacity: null === (o = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === o ? void 0 : o.call(r, e)
                        })
                    }, t.prototype.isLead = function() {
                        var t = this.getStack();
                        return !t || t.lead === this
                    }, t.prototype.getLead = function() {
                        var t;
                        return this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                    }, t.prototype.getPrevLead = function() {
                        var t;
                        return this.options.layoutId ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                    }, t.prototype.getStack = function() {
                        var t = this.options.layoutId;
                        if (t) return this.root.sharedNodes.get(t)
                    }, t.prototype.promote = function(t) {
                        var e = void 0 === t ? {} : t,
                            n = e.needsReset,
                            r = e.transition,
                            o = e.preserveFollowOpacity,
                            i = this.getStack();
                        i && i.promote(this, o), n && (this.projectionDelta = void 0, this.needsReset = !0), r && this.setOptions({
                            transition: r
                        })
                    }, t.prototype.relegate = function() {
                        var t = this.getStack();
                        return !!t && t.relegate(this)
                    }, t.prototype.resetRotation = function() {
                        var t = this.options.visualElement;
                        if (t) {
                            for (var e = !1, n = {}, r = 0; r < sr.length; r++) {
                                var o = "rotate" + sr[r];
                                t.getStaticValue(o) && (e = !0, n[o] = t.getStaticValue(o), t.setStaticValue(o, 0))
                            }
                            if (e) {
                                for (var o in null === t || void 0 === t || t.syncRender(), n) t.setStaticValue(o, n[o]);
                                t.scheduleRender()
                            }
                        }
                    }, t.prototype.getProjectionStyles = function(t) {
                        var e, n, r, o, i, a;
                        void 0 === t && (t = {});
                        var s = {};
                        if (!this.instance || this.isSVG) return s;
                        if (!this.isVisible) return {
                            visibility: "hidden"
                        };
                        s.visibility = "";
                        var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                        if (this.needsReset) return this.needsReset = !1, s.opacity = "", s.pointerEvents = mr(t.pointerEvents) || "", s.transform = u ? u(this.latestValues, "") : "none", s;
                        var c = this.getLead();
                        if (!this.projectionDelta || !this.layout || !c.target) {
                            var l = {};
                            return this.options.layoutId && (l.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1, l.pointerEvents = mr(t.pointerEvents) || ""), this.hasProjected && !Tn(this.latestValues) && (l.transform = u ? u({}, "") : "none", this.hasProjected = !1), l
                        }
                        var f = c.animationValues || c.latestValues;
                        this.applyTransformsToTarget(), s.transform = ir(this.projectionDeltaWithTransform, this.treeScale, f), u && (s.transform = u(f, s.transform));
                        var d = this.projectionDelta,
                            p = d.x,
                            h = d.y;
                        for (var v in s.transformOrigin = "".concat(100 * p.origin, "% ").concat(100 * h.origin, "% 0"), c.animationValues ? s.opacity = c === this ? null !== (o = null !== (r = f.opacity) && void 0 !== r ? r : this.latestValues.opacity) && void 0 !== o ? o : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : s.opacity = c === this ? null !== (i = f.opacity) && void 0 !== i ? i : "" : null !== (a = f.opacityExit) && void 0 !== a ? a : 0, or)
                            if (void 0 !== f[v]) {
                                var m = or[v],
                                    y = m.correct,
                                    g = m.applyTo,
                                    b = y(f[v], c);
                                if (g)
                                    for (var x = g.length, w = 0; w < x; w++) s[g[w]] = b;
                                else s[v] = b
                            } return this.options.layoutId && (s.pointerEvents = c === this ? mr(t.pointerEvents) || "" : "none"), s
                    }, t.prototype.clearSnapshot = function() {
                        this.resumeFrom = this.snapshot = void 0
                    }, t.prototype.resetTree = function() {
                        this.root.nodes.forEach((function(t) {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                        })), this.root.nodes.forEach(Pr), this.root.sharedNodes.clear()
                    }, t
                }()
            }

            function br(t) {
                t.updateLayout()
            }

            function xr(t) {
                var e, n, r, o, i = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    var a = t.layout,
                        s = a.actual,
                        u = a.measured;
                    "size" === t.options.animationType ? ar((function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = zn(e);
                        e.min = s[t].min, e.max = e.min + n
                    })) : "position" === t.options.animationType && ar((function(t) {
                        var e = i.isShared ? i.measured[t] : i.layout[t],
                            n = zn(s[t]);
                        e.max = e.min + n
                    }));
                    var c = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    Wn(c, s, i.layout);
                    var l = {
                        x: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        },
                        y: {
                            translate: 0,
                            scale: 1,
                            origin: 0,
                            originPoint: 0
                        }
                    };
                    i.isShared ? Wn(l, t.applyTransform(u, !0), i.measured) : Wn(l, s, i.layout);
                    var f = !er(c),
                        d = !1;
                    if (!t.resumeFrom && (t.relativeParent = t.getClosestProjectingParent(), t.relativeParent && !t.relativeParent.resumeFrom)) {
                        var p = t.relativeParent,
                            h = p.snapshot,
                            v = p.layout;
                        if (h && v) {
                            var m = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Gn(m, i.layout, h.layout);
                            var y = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Gn(y, s, v.actual), nr(m, y) || (d = !0)
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: s,
                        snapshot: i,
                        delta: l,
                        layoutDelta: c,
                        hasLayoutChanged: f,
                        hasRelativeTargetChanged: d
                    })
                } else t.isLead() && (null === (o = (r = t.options).onExitComplete) || void 0 === o || o.call(r));
                t.options.transition = void 0
            }

            function wr(t) {
                t.clearSnapshot()
            }

            function Pr(t) {
                t.clearMeasurements()
            }

            function Er(t) {
                var e = t.options.visualElement;
                (null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform()
            }

            function Sr(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0
            }

            function Or(t) {
                t.resolveTargetDelta()
            }

            function Ar(t) {
                t.calcProjection()
            }

            function Tr(t) {
                t.resetRotation()
            }

            function Cr(t) {
                t.removeLeadSnapshot()
            }

            function jr(t, e, n) {
                t.translate = J(e.translate, 0, n), t.scale = J(e.scale, 1, n), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function Mr(t, e, n, r) {
                t.min = J(e.min, n.min, r), t.max = J(e.max, n.max, r)
            }

            function Vr(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            var Rr = {
                duration: .45,
                ease: [.4, 0, .1, 1]
            };

            function Dr(t, e) {
                for (var n = t.root, r = t.path.length - 1; r >= 0; r--)
                    if (Boolean(t.path[r].instance)) {
                        n = t.path[r];
                        break
                    } var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
                o && t.mount(o, !0)
            }

            function kr(t) {
                t.min = Math.round(t.min), t.max = Math.round(t.max)
            }

            function Lr(t) {
                kr(t.x), kr(t.y)
            }
            var Ir = 1;
            var Fr = (0, c.createContext)({}),
                Br = (0, c.createContext)({});
            var Ur = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.getSnapshotBeforeUpdate = function() {
                    return this.updateProps(), null
                }, e.prototype.componentDidUpdate = function() {}, e.prototype.updateProps = function() {
                    var t = this.props,
                        e = t.visualElement,
                        n = t.props;
                    e && e.setProps(n)
                }, e.prototype.render = function() {
                    return this.props.children
                }, e
            }(c.Component);

            function Nr(t) {
                var e = t.preloadedFeatures,
                    n = t.createVisualElement,
                    r = t.projectionNodeConstructor,
                    o = t.useRender,
                    a = t.useVisualState,
                    s = t.Component;
                return e && function(t) {
                    for (var e in t) null !== t[e] && ("projectionNodeConstructor" === e ? f.projectionNodeConstructor = t[e] : f[e].Component = t[e])
                }(e), (0, c.forwardRef)((function(t, e) {
                    var u = function(t) {
                        var e, n = t.layoutId,
                            r = null === (e = (0, c.useContext)(Fr)) || void 0 === e ? void 0 : e.id;
                        return r && void 0 !== n ? r + "-" + n : n
                    }(t);
                    t = i(i({}, t), {
                        layoutId: u
                    });
                    var l = (0, c.useContext)(v),
                        y = null,
                        b = V(t),
                        x = l.isStatic ? void 0 : D((function() {
                            if (yr.hasEverUpdated) return Ir++
                        })),
                        w = a(t, l.isStatic);
                    return !l.isStatic && g && (b.visualElement = E(s, w, i(i({}, l), t), n), function(t, e, n, r) {
                        var o, i = e.layoutId,
                            a = e.layout,
                            s = e.drag,
                            u = e.dragConstraints,
                            l = e.layoutScroll,
                            f = (0, c.useContext)(Br);
                        r && n && !(null === n || void 0 === n ? void 0 : n.projection) && (n.projection = new r(t, n.getLatestValues(), null === (o = n.parent) || void 0 === o ? void 0 : o.projection), n.projection.setOptions({
                            layoutId: i,
                            layout: a,
                            alwaysMeasureLayout: Boolean(s) || u && S(u),
                            visualElement: n,
                            scheduleRender: function() {
                                return n.scheduleRender()
                            },
                            animationType: "string" === typeof a ? a : "both",
                            initialPromotionConfig: f,
                            layoutScroll: l
                        }))
                    }(x, t, b.visualElement, r || f.projectionNodeConstructor), y = function(t, e, n) {
                        var r = [];
                        if ((0, c.useContext)(d), !e) return null;
                        for (var o = 0; o < h; o++) {
                            var a = p[o],
                                s = f[a],
                                u = s.isEnabled,
                                l = s.Component;
                            u(t) && l && r.push(c.createElement(l, i({
                                key: a
                            }, t, {
                                visualElement: e
                            })))
                        }
                        return r
                    }(t, b.visualElement)), c.createElement(Ur, {
                        visualElement: b.visualElement,
                        props: i(i({}, l), t)
                    }, y, c.createElement(m.Provider, {
                        value: b
                    }, o(s, t, x, function(t, e, n) {
                        return (0, c.useCallback)((function(r) {
                            var o;
                            r && (null === (o = t.mount) || void 0 === o || o.call(t, r)), e && (r ? e.mount(r) : e.unmount()), n && ("function" === typeof n ? n(r) : S(n) && (n.current = r))
                        }), [e])
                    }(w, b.visualElement, e), w, l.isStatic, b.visualElement)))
                }))
            }

            function _r(t) {
                function e(e, n) {
                    return void 0 === n && (n = {}), Nr(t(e, n))
                }
                if ("undefined" === typeof Proxy) return e;
                var n = new Map;
                return new Proxy(e, {
                    get: function(t, r) {
                        return n.has(r) || n.set(r, e(r)), n.get(r)
                    }
                })
            }
            var zr = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "svg", "switch", "symbol", "text", "tspan", "use", "view"];

            function Hr(t) {
                return "string" === typeof t && !t.includes("-") && !!(zr.indexOf(t) > -1 || /[A-Z]/.test(t))
            }

            function qr(t, e) {
                var n = e.layout,
                    r = e.layoutId;
                return fr(t) || pr(t) || (n || void 0 !== r) && (!!or[t] || "opacity" === t)
            }
            var Wr = {
                x: "translateX",
                y: "translateY",
                z: "translateZ",
                transformPerspective: "perspective"
            };

            function Yr(t) {
                return t.startsWith("--")
            }
            var Xr = function(t, e) {
                return e && "number" === typeof t ? e.transform(t) : t
            };

            function Gr(t, e, n, r) {
                var o, i = t.style,
                    a = t.vars,
                    s = t.transform,
                    u = t.transformKeys,
                    c = t.transformOrigin;
                u.length = 0;
                var l = !1,
                    f = !1,
                    d = !0;
                for (var p in e) {
                    var h = e[p];
                    if (Yr(p)) a[p] = h;
                    else {
                        var v = en[p],
                            m = Xr(h, v);
                        if (fr(p)) {
                            if (l = !0, s[p] = m, u.push(p), !d) continue;
                            h !== (null !== (o = v.default) && void 0 !== o ? o : 0) && (d = !1)
                        } else pr(p) ? (c[p] = m, f = !0) : i[p] = m
                    }
                }
                l ? i.transform = function(t, e, n, r) {
                    var o = t.transform,
                        i = t.transformKeys,
                        a = e.enableHardwareAcceleration,
                        s = void 0 === a || a,
                        u = e.allowTransformNone,
                        c = void 0 === u || u,
                        l = "";
                    i.sort(cr);
                    for (var f = !1, d = i.length, p = 0; p < d; p++) {
                        var h = i[p];
                        l += "".concat(Wr[h] || h, "(").concat(o[h], ") "), "z" === h && (f = !0)
                    }
                    return !f && s ? l += "translateZ(0)" : l = l.trim(), r ? l = r(o, n ? "" : l) : c && n && (l = "none"), l
                }(t, n, d, r) : r ? i.transform = r({}, "") : !e.transform && i.transform && (i.transform = "none"), f && (i.transformOrigin = function(t) {
                    var e = t.originX,
                        n = void 0 === e ? "50%" : e,
                        r = t.originY,
                        o = void 0 === r ? "50%" : r,
                        i = t.originZ,
                        a = void 0 === i ? 0 : i;
                    return "".concat(n, " ").concat(o, " ").concat(a)
                }(c))
            }
            var $r = function() {
                return {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }
            };

            function Zr(t, e, n) {
                for (var r in e) ot(e[r]) || qr(r, n) || (t[r] = e[r])
            }

            function Jr(t, e, n) {
                var r = {};
                return Zr(r, t.style || {}, t), Object.assign(r, function(t, e, n) {
                    var r = t.transformTemplate;
                    return (0, c.useMemo)((function() {
                        var t = {
                            style: {},
                            transform: {},
                            transformKeys: [],
                            transformOrigin: {},
                            vars: {}
                        };
                        Gr(t, e, {
                            enableHardwareAcceleration: !n
                        }, r);
                        var o = t.style;
                        return i(i({}, t.vars), o)
                    }), [e])
                }(t, e, n)), t.transformValues && (r = t.transformValues(r)), r
            }

            function Kr(t, e, n) {
                var r = {},
                    o = Jr(t, e, n);
                return Boolean(t.drag) && !1 !== t.dragListener && (r.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = !0 === t.drag ? "none" : "pan-".concat("x" === t.drag ? "y" : "x")), r.style = o, r
            }
            var Qr = new Set(["initial", "animate", "exit", "style", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "whileDrag", "onPan", "onPanStart", "onPanEnd", "onPanSessionStart", "onTap", "onTapStart", "onTapCancel", "onHoverStart", "onHoverEnd", "whileFocus", "whileTap", "whileHover", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "layoutScroll"]);

            function to(t) {
                return Qr.has(t)
            }
            var eo, no = function(t) {
                return !to(t)
            };
            try {
                (eo = require("@emotion/is-prop-valid").default) && (no = function(t) {
                    return t.startsWith("on") ? !to(t) : eo(t)
                })
            } catch (Ta) {}

            function ro(t, e, n) {
                return "string" === typeof t ? t : Dt.transform(e + n * t)
            }
            var oo = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                io = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function ao(t, e, n, r) {
                var o = e.attrX,
                    i = e.attrY,
                    s = e.originX,
                    u = e.originY,
                    c = e.pathLength,
                    l = e.pathSpacing,
                    f = void 0 === l ? 1 : l,
                    d = e.pathOffset,
                    p = void 0 === d ? 0 : d;
                Gr(t, a(e, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]), n, r), t.attrs = t.style, t.style = {};
                var h = t.attrs,
                    v = t.style,
                    m = t.dimensions;
                h.transform && (m && (v.transform = h.transform), delete h.transform), m && (void 0 !== s || void 0 !== u || v.transform) && (v.transformOrigin = function(t, e, n) {
                    var r = ro(e, t.x, t.width),
                        o = ro(n, t.y, t.height);
                    return "".concat(r, " ").concat(o)
                }(m, void 0 !== s ? s : .5, void 0 !== u ? u : .5)), void 0 !== o && (h.x = o), void 0 !== i && (h.y = i), void 0 !== c && function(t, e, n, r, o) {
                    void 0 === n && (n = 1), void 0 === r && (r = 0), void 0 === o && (o = !0), t.pathLength = 1;
                    var i = o ? oo : io;
                    t[i.offset] = Dt.transform(-r);
                    var a = Dt.transform(e),
                        s = Dt.transform(n);
                    t[i.array] = "".concat(a, " ").concat(s)
                }(h, c, f, p, !1)
            }
            var so = function() {
                return i(i({}, {
                    style: {},
                    transform: {},
                    transformKeys: [],
                    transformOrigin: {},
                    vars: {}
                }), {
                    attrs: {}
                })
            };

            function uo(t, e) {
                var n = (0, c.useMemo)((function() {
                    var n = so();
                    return ao(n, e, {
                        enableHardwareAcceleration: !1
                    }, t.transformTemplate), i(i({}, n.attrs), {
                        style: i({}, n.style)
                    })
                }), [e]);
                if (t.style) {
                    var r = {};
                    Zr(r, t.style, t), n.style = i(i({}, r), n.style)
                }
                return n
            }

            function co(t) {
                void 0 === t && (t = !1);
                return function(e, n, r, o, a, s) {
                    var u = a.latestValues,
                        l = (Hr(e) ? uo : Kr)(n, u, s),
                        f = function(t, e, n) {
                            var r = {};
                            for (var o in t)(no(o) || !0 === n && to(o) || !e && !to(o) || t.draggable && o.startsWith("onDrag")) && (r[o] = t[o]);
                            return r
                        }(n, "string" === typeof e, t),
                        d = i(i(i({}, f), l), {
                            ref: o
                        });
                    return r && (d["data-projection-id"] = r), (0, c.createElement)(e, d)
                }
            }
            var lo = /([a-z])([A-Z])/g,
                fo = function(t) {
                    return t.replace(lo, "$1-$2").toLowerCase()
                };

            function po(t, e, n, r) {
                var o = e.style,
                    i = e.vars;
                for (var a in Object.assign(t.style, o, r && r.getProjectionStyles(n)), i) t.style.setProperty(a, i[a])
            }
            var ho = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength"]);

            function vo(t, e) {
                for (var n in po(t, e), e.attrs) t.setAttribute(ho.has(n) ? n : fo(n), e.attrs[n])
            }

            function mo(t) {
                var e = t.style,
                    n = {};
                for (var r in e)(ot(e[r]) || qr(r, t)) && (n[r] = e[r]);
                return n
            }

            function yo(t) {
                var e = mo(t);
                for (var n in t) {
                    if (ot(t[n])) e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]
                }
                return e
            }

            function go(t) {
                return "object" === typeof t && "function" === typeof t.start
            }

            function bo(t, e, n, r) {
                var o = t.scrapeMotionValuesFromProps,
                    i = t.createRenderState,
                    a = t.onMount,
                    s = {
                        latestValues: wo(e, n, r, o),
                        renderState: i()
                    };
                return a && (s.mount = function(t) {
                    return a(e, t, s)
                }), s
            }
            var xo = function(t) {
                return function(e, n) {
                    var r = (0, c.useContext)(m),
                        o = (0, c.useContext)(y);
                    return n ? bo(t, e, r, o) : D((function() {
                        return bo(t, e, r, o)
                    }))
                }
            };

            function wo(t, e, n, r) {
                var o = {},
                    i = !1 === (null === n || void 0 === n ? void 0 : n.initial),
                    s = r(t);
                for (var u in s) o[u] = mr(s[u]);
                var c = t.initial,
                    l = t.animate,
                    f = j(t),
                    d = M(t);
                e && d && !f && !1 !== t.inherit && (null !== c && void 0 !== c || (c = e.initial), null !== l && void 0 !== l || (l = e.animate));
                var p = i || !1 === c,
                    h = p ? l : c;
                h && "boolean" !== typeof h && !go(h) && (Array.isArray(h) ? h : [h]).forEach((function(e) {
                    var n = T(t, e);
                    if (n) {
                        var r = n.transitionEnd;
                        n.transition;
                        var i = a(n, ["transitionEnd", "transition"]);
                        for (var s in i) {
                            var u = i[s];
                            if (Array.isArray(u)) u = u[p ? u.length - 1 : 0];
                            null !== u && (o[s] = u)
                        }
                        for (var s in r) o[s] = r[s]
                    }
                }));
                return o
            }
            var Po, Eo = {
                    useVisualState: xo({
                        scrapeMotionValuesFromProps: yo,
                        createRenderState: so,
                        onMount: function(t, e, n) {
                            var r = n.renderState,
                                o = n.latestValues;
                            try {
                                r.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                            } catch (i) {
                                r.dimensions = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            ao(r, o, {
                                enableHardwareAcceleration: !1
                            }, t.transformTemplate), vo(e, r)
                        }
                    })
                },
                So = {
                    useVisualState: xo({
                        scrapeMotionValuesFromProps: mo,
                        createRenderState: $r
                    })
                };

            function Oo(t, e, n, r) {
                return t.addEventListener(e, n, r),
                    function() {
                        return t.removeEventListener(e, n, r)
                    }
            }

            function Ao(t, e, n, r) {
                (0, c.useEffect)((function() {
                    var o = t.current;
                    if (n && o) return Oo(o, e, n, r)
                }), [t, e, n, r])
            }

            function To(t) {
                return "undefined" !== typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
            }

            function Co(t) {
                return !!t.touches
            }! function(t) {
                t.Animate = "animate", t.Hover = "whileHover", t.Tap = "whileTap", t.Drag = "whileDrag", t.Focus = "whileFocus", t.InView = "whileInView", t.Exit = "exit"
            }(Po || (Po = {}));
            var jo = {
                pageX: 0,
                pageY: 0
            };

            function Mo(t, e) {
                void 0 === e && (e = "page");
                var n = t.touches[0] || t.changedTouches[0] || jo;
                return {
                    x: n[e + "X"],
                    y: n[e + "Y"]
                }
            }

            function Vo(t, e) {
                return void 0 === e && (e = "page"), {
                    x: t[e + "X"],
                    y: t[e + "Y"]
                }
            }

            function Ro(t, e) {
                return void 0 === e && (e = "page"), {
                    point: Co(t) ? Mo(t, e) : Vo(t, e)
                }
            }
            var Do = function(t, e) {
                    void 0 === e && (e = !1);
                    var n, r = function(e) {
                        return t(e, Ro(e))
                    };
                    return e ? (n = r, function(t) {
                        var e = t instanceof MouseEvent;
                        (!e || e && 0 === t.button) && n(t)
                    }) : r
                },
                ko = {
                    pointerdown: "mousedown",
                    pointermove: "mousemove",
                    pointerup: "mouseup",
                    pointercancel: "mousecancel",
                    pointerover: "mouseover",
                    pointerout: "mouseout",
                    pointerenter: "mouseenter",
                    pointerleave: "mouseleave"
                },
                Lo = {
                    pointerdown: "touchstart",
                    pointermove: "touchmove",
                    pointerup: "touchend",
                    pointercancel: "touchcancel"
                };

            function Io(t) {
                return g && null === window.onpointerdown ? t : g && null === window.ontouchstart ? Lo[t] : g && null === window.onmousedown ? ko[t] : t
            }

            function Fo(t, e, n, r) {
                return Oo(t, Io(e), Do(n, "pointerdown" === e), r)
            }

            function Bo(t, e, n, r) {
                return Ao(t, Io(e), n && Do(n, "pointerdown" === e), r)
            }

            function Uo(t) {
                var e = null;
                return function() {
                    return null === e && (e = t, function() {
                        e = null
                    })
                }
            }
            var No = Uo("dragHorizontal"),
                _o = Uo("dragVertical");

            function zo(t) {
                var e = !1;
                if ("y" === t) e = _o();
                else if ("x" === t) e = No();
                else {
                    var n = No(),
                        r = _o();
                    n && r ? e = function() {
                        n(), r()
                    } : (n && n(), r && r())
                }
                return e
            }

            function Ho() {
                var t = zo(!0);
                return !t || (t(), !1)
            }

            function qo(t, e, n) {
                return function(r, o) {
                    var i;
                    To(r) && !Ho() && (null === (i = t.animationState) || void 0 === i || i.setActive(Po.Hover, e), null === n || void 0 === n || n(r, o))
                }
            }
            var Wo = function(t, e) {
                return !!e && (t === e || Wo(t, e.parentElement))
            };

            function Yo(t) {
                return (0, c.useEffect)((function() {
                    return function() {
                        return t()
                    }
                }), [])
            }
            var Xo = new WeakMap,
                Go = new WeakMap,
                $o = function(t) {
                    var e;
                    null === (e = Xo.get(t.target)) || void 0 === e || e(t)
                },
                Zo = function(t) {
                    t.forEach($o)
                };

            function Jo(t, e, n) {
                var r = function(t) {
                    var e = t.root,
                        n = a(t, ["root"]),
                        r = e || document;
                    Go.has(r) || Go.set(r, {});
                    var o = Go.get(r),
                        s = JSON.stringify(n);
                    return o[s] || (o[s] = new IntersectionObserver(Zo, i({
                        root: e
                    }, n))), o[s]
                }(e);
                return Xo.set(t, n), r.observe(t),
                    function() {
                        Xo.delete(t), r.unobserve(t)
                    }
            }
            var Ko = {
                some: 0,
                all: 1
            };

            function Qo(t, e, n, r) {
                var o = r.root,
                    i = r.margin,
                    a = r.amount,
                    s = void 0 === a ? "some" : a,
                    u = r.once;
                (0, c.useEffect)((function() {
                    if (t) {
                        var r = {
                            root: null === o || void 0 === o ? void 0 : o.current,
                            rootMargin: i,
                            threshold: "number" === typeof s ? s : Ko[s]
                        };
                        return Jo(n.getInstance(), r, (function(t) {
                            var r, o = t.isIntersecting;
                            if (e.isInView !== o && (e.isInView = o, !u || o || !e.hasEnteredView)) {
                                o && (e.hasEnteredView = !0), null === (r = n.animationState) || void 0 === r || r.setActive(Po.InView, o);
                                var i = n.getProps(),
                                    a = o ? i.onViewportEnter : i.onViewportLeave;
                                null === a || void 0 === a || a(t)
                            }
                        }))
                    }
                }), [t, o, i, s])
            }

            function ti(t, e, n, r) {
                var o = r.fallback,
                    i = void 0 === o || o;
                (0, c.useEffect)((function() {
                    t && i && requestAnimationFrame((function() {
                        var t;
                        e.hasEnteredView = !0;
                        var r = n.getProps().onViewportEnter;
                        null === r || void 0 === r || r(null), null === (t = n.animationState) || void 0 === t || t.setActive(Po.InView, !0)
                    }))
                }), [t])
            }
            var ei = function(t) {
                    return function(e) {
                        return t(e), null
                    }
                },
                ni = {
                    inView: ei((function(t) {
                        var e = t.visualElement,
                            n = t.whileInView,
                            r = t.onViewportEnter,
                            o = t.onViewportLeave,
                            i = t.viewport,
                            a = void 0 === i ? {} : i,
                            s = (0, c.useRef)({
                                hasEnteredView: !1,
                                isInView: !1
                            }),
                            u = Boolean(n || r || o);
                        a.once && s.current.hasEnteredView && (u = !1), ("undefined" === typeof IntersectionObserver ? ti : Qo)(u, s.current, e, a)
                    })),
                    tap: ei((function(t) {
                        var e = t.onTap,
                            n = t.onTapStart,
                            r = t.onTapCancel,
                            o = t.whileTap,
                            i = t.visualElement,
                            a = e || n || r || o,
                            s = (0, c.useRef)(!1),
                            u = (0, c.useRef)(null);

                        function l() {
                            var t;
                            null === (t = u.current) || void 0 === t || t.call(u), u.current = null
                        }

                        function f() {
                            var t;
                            return l(), s.current = !1, null === (t = i.animationState) || void 0 === t || t.setActive(Po.Tap, !1), !Ho()
                        }

                        function d(t, n) {
                            f() && (Wo(i.getInstance(), t.target) ? null === e || void 0 === e || e(t, n) : null === r || void 0 === r || r(t, n))
                        }

                        function p(t, e) {
                            f() && (null === r || void 0 === r || r(t, e))
                        }
                        Bo(i, "pointerdown", a ? function(t, e) {
                            var r;
                            l(), s.current || (s.current = !0, u.current = ee(Fo(window, "pointerup", d), Fo(window, "pointercancel", p)), null === (r = i.animationState) || void 0 === r || r.setActive(Po.Tap, !0), null === n || void 0 === n || n(t, e))
                        } : void 0), Yo(l)
                    })),
                    focus: ei((function(t) {
                        var e = t.whileFocus,
                            n = t.visualElement;
                        Ao(n, "focus", e ? function() {
                            var t;
                            null === (t = n.animationState) || void 0 === t || t.setActive(Po.Focus, !0)
                        } : void 0), Ao(n, "blur", e ? function() {
                            var t;
                            null === (t = n.animationState) || void 0 === t || t.setActive(Po.Focus, !1)
                        } : void 0)
                    })),
                    hover: ei((function(t) {
                        var e = t.onHoverStart,
                            n = t.onHoverEnd,
                            r = t.whileHover,
                            o = t.visualElement;
                        Bo(o, "pointerenter", e || r ? qo(o, !0, e) : void 0), Bo(o, "pointerleave", n || r ? qo(o, !1, n) : void 0)
                    }))
                },
                ri = 0,
                oi = function() {
                    return ri++
                };

            function ii() {
                var t = (0, c.useContext)(y);
                if (null === t) return [!0, null];
                var e = t.isPresent,
                    n = t.onExitComplete,
                    r = t.register,
                    o = D(oi);
                (0, c.useEffect)((function() {
                    return r(o)
                }), []);
                return !e && n ? [!1, function() {
                    return null === n || void 0 === n ? void 0 : n(o)
                }] : [!0]
            }

            function ai(t, e) {
                if (!Array.isArray(e)) return !1;
                var n = e.length;
                if (n !== t.length) return !1;
                for (var r = 0; r < n; r++)
                    if (e[r] !== t[r]) return !1;
                return !0
            }
            var si = function(t) {
                    return /^0[^.\s]+$/.test(t)
                },
                ui = function(t) {
                    return function(e) {
                        return e.test(t)
                    }
                },
                ci = [wt, Dt, Rt, Vt, Lt, kt, {
                    test: function(t) {
                        return "auto" === t
                    },
                    parse: function(t) {
                        return t
                    }
                }],
                li = function(t) {
                    return ci.find(ui(t))
                },
                fi = u(u([], s(ci), !1), [Wt, Kt], !1),
                di = function(t) {
                    return fi.find(ui(t))
                };

            function pi(t, e, n) {
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, rt(n))
            }

            function hi(t, e) {
                var n = C(t, e),
                    r = n ? t.makeTargetAnimatable(n, !1) : {},
                    o = r.transitionEnd,
                    s = void 0 === o ? {} : o;
                r.transition;
                var u = a(r, ["transitionEnd", "transition"]);
                for (var c in u = i(i({}, u), s)) {
                    pi(t, c, sn(u[c]))
                }
            }

            function vi(t, e) {
                if (e) return (e[t] || e.default || e).from
            }

            function mi(t, e, n) {
                var r;
                void 0 === n && (n = {});
                var o = C(t, e, n.custom),
                    a = (o || {}).transition,
                    u = void 0 === a ? t.getDefaultTransition() || {} : a;
                n.transitionOverride && (u = n.transitionOverride);
                var c = o ? function() {
                        return yi(t, o, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? function(r) {
                        void 0 === r && (r = 0);
                        var o = u.delayChildren,
                            a = void 0 === o ? 0 : o,
                            s = u.staggerChildren,
                            c = u.staggerDirection;
                        return function(t, e, n, r, o, a) {
                            void 0 === n && (n = 0);
                            void 0 === r && (r = 0);
                            void 0 === o && (o = 1);
                            var s = [],
                                u = (t.variantChildren.size - 1) * r,
                                c = 1 === o ? function(t) {
                                    return void 0 === t && (t = 0), t * r
                                } : function(t) {
                                    return void 0 === t && (t = 0), u - t * r
                                };
                            return Array.from(t.variantChildren).sort(gi).forEach((function(t, r) {
                                s.push(mi(t, e, i(i({}, a), {
                                    delay: n + c(r)
                                })).then((function() {
                                    return t.notifyAnimationComplete(e)
                                })))
                            })), Promise.all(s)
                        }(t, e, a + r, s, c, n)
                    } : function() {
                        return Promise.resolve()
                    },
                    f = u.when;
                if (f) {
                    var d = s("beforeChildren" === f ? [c, l] : [l, c], 2),
                        p = d[0],
                        h = d[1];
                    return p().then(h)
                }
                return Promise.all([c(), l(n.delay)])
            }

            function yi(t, e, n) {
                var r, o = void 0 === n ? {} : n,
                    s = o.delay,
                    u = void 0 === s ? 0 : s,
                    c = o.transitionOverride,
                    l = o.type,
                    f = t.makeTargetAnimatable(e),
                    d = f.transition,
                    p = void 0 === d ? t.getDefaultTransition() : d,
                    h = f.transitionEnd,
                    v = a(f, ["transition", "transitionEnd"]);
                c && (p = c);
                var m = [],
                    y = l && (null === (r = t.animationState) || void 0 === r ? void 0 : r.getState()[l]);
                for (var g in v) {
                    var b = t.getValue(g),
                        x = v[g];
                    if (!(!b || void 0 === x || y && bi(y, g))) {
                        var w = i({
                            delay: u
                        }, p);
                        t.shouldReduceMotion && fr(g) && (w = i(i({}, w), {
                            type: !1,
                            delay: 0
                        }));
                        var P = hn(g, b, x, w);
                        m.push(P)
                    }
                }
                return Promise.all(m).then((function() {
                    h && hi(t, h)
                }))
            }

            function gi(t, e) {
                return t.sortNodePosition(e)
            }

            function bi(t, e) {
                var n = t.protectedKeys,
                    r = t.needsAnimating,
                    o = n.hasOwnProperty(e) && !0 !== r[e];
                return r[e] = !1, o
            }
            var xi = [Po.Animate, Po.InView, Po.Focus, Po.Hover, Po.Tap, Po.Drag, Po.Exit],
                wi = u([], s(xi), !1).reverse(),
                Pi = xi.length;

            function Ei(t) {
                return function(e) {
                    return Promise.all(e.map((function(e) {
                        var n = e.animation,
                            r = e.options;
                        return function(t, e, n) {
                            var r;
                            if (void 0 === n && (n = {}), t.notifyAnimationStart(e), Array.isArray(e)) {
                                var o = e.map((function(e) {
                                    return mi(t, e, n)
                                }));
                                r = Promise.all(o)
                            } else if ("string" === typeof e) r = mi(t, e, n);
                            else {
                                var i = "function" === typeof e ? C(t, e, n.custom) : e;
                                r = yi(t, i, n)
                            }
                            return r.then((function() {
                                return t.notifyAnimationComplete(e)
                            }))
                        }(t, n, r)
                    })))
                }
            }

            function Si(t) {
                var e = Ei(t),
                    n = function() {
                        var t;
                        return (t = {})[Po.Animate] = Oi(!0), t[Po.InView] = Oi(), t[Po.Hover] = Oi(), t[Po.Tap] = Oi(), t[Po.Drag] = Oi(), t[Po.Focus] = Oi(), t[Po.Exit] = Oi(), t
                    }(),
                    r = {},
                    o = !0,
                    c = function(e, n) {
                        var r = C(t, n);
                        if (r) {
                            r.transition;
                            var o = r.transitionEnd,
                                s = a(r, ["transition", "transitionEnd"]);
                            e = i(i(i({}, e), s), o)
                        }
                        return e
                    };

                function l(a, l) {
                    for (var f, d = t.getProps(), p = t.getVariantContext(!0) || {}, h = [], v = new Set, m = {}, y = 1 / 0, g = function(e) {
                            var r = wi[e],
                                g = n[r],
                                b = null !== (f = d[r]) && void 0 !== f ? f : p[r],
                                x = A(b),
                                w = r === l ? g.isActive : null;
                            !1 === w && (y = e);
                            var P = b === p[r] && b !== d[r] && x;
                            if (P && o && t.manuallyAnimateOnMount && (P = !1), g.protectedKeys = i({}, m), !g.isActive && null === w || !b && !g.prevProp || go(b) || "boolean" === typeof b) return "continue";
                            var E = function(t, e) {
                                    if ("string" === typeof e) return e !== t;
                                    if (O(e)) return !ai(e, t);
                                    return !1
                                }(g.prevProp, b),
                                S = E || r === l && g.isActive && !P && x || e > y && x,
                                T = Array.isArray(b) ? b : [b],
                                C = T.reduce(c, {});
                            !1 === w && (C = {});
                            var j = g.prevResolvedValues,
                                M = void 0 === j ? {} : j,
                                V = i(i({}, M), C),
                                R = function(t) {
                                    S = !0, v.delete(t), g.needsAnimating[t] = !0
                                };
                            for (var D in V) {
                                var k = C[D],
                                    L = M[D];
                                m.hasOwnProperty(D) || (k !== L ? qe(k) && qe(L) ? !ai(k, L) || E ? R(D) : g.protectedKeys[D] = !0 : void 0 !== k ? R(D) : v.add(D) : void 0 !== k && v.has(D) ? R(D) : g.protectedKeys[D] = !0)
                            }
                            g.prevProp = b, g.prevResolvedValues = C, g.isActive && (m = i(i({}, m), C)), o && t.blockInitialAnimation && (S = !1), S && !P && h.push.apply(h, u([], s(T.map((function(t) {
                                return {
                                    animation: t,
                                    options: i({
                                        type: r
                                    }, a)
                                }
                            }))), !1))
                        }, b = 0; b < Pi; b++) g(b);
                    if (r = i({}, m), v.size) {
                        var x = {};
                        v.forEach((function(e) {
                            var n = t.getBaseTarget(e);
                            void 0 !== n && (x[e] = n)
                        })), h.push({
                            animation: x
                        })
                    }
                    var w = Boolean(h.length);
                    return o && !1 === d.initial && !t.manuallyAnimateOnMount && (w = !1), o = !1, w ? e(h) : Promise.resolve()
                }
                return {
                    isAnimated: function(t) {
                        return void 0 !== r[t]
                    },
                    animateChanges: l,
                    setActive: function(e, r, o) {
                        var i;
                        if (n[e].isActive === r) return Promise.resolve();
                        null === (i = t.variantChildren) || void 0 === i || i.forEach((function(t) {
                            var n;
                            return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                        })), n[e].isActive = r;
                        var a = l(o, e);
                        for (var s in n) n[s].protectedKeys = {};
                        return a
                    },
                    setAnimateFunction: function(n) {
                        e = n(t)
                    },
                    getState: function() {
                        return n
                    }
                }
            }

            function Oi(t) {
                return void 0 === t && (t = !1), {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var Ai = {
                    animation: ei((function(t) {
                        var e = t.visualElement,
                            n = t.animate;
                        e.animationState || (e.animationState = Si(e)), go(n) && (0, c.useEffect)((function() {
                            return n.subscribe(e)
                        }), [n])
                    })),
                    exit: ei((function(t) {
                        var e = t.custom,
                            n = t.visualElement,
                            r = s(ii(), 2),
                            o = r[0],
                            i = r[1],
                            a = (0, c.useContext)(y);
                        (0, c.useEffect)((function() {
                            var t, r;
                            n.isPresent = o;
                            var s = null === (t = n.animationState) || void 0 === t ? void 0 : t.setActive(Po.Exit, !o, {
                                custom: null !== (r = null === a || void 0 === a ? void 0 : a.custom) && void 0 !== r ? r : e
                            });
                            !o && (null === s || void 0 === s || s.then(i))
                        }), [o])
                    }))
                },
                Ti = function() {
                    function t(t, e, n) {
                        var r = this,
                            o = (void 0 === n ? {} : n).transformPagePoint;
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
                                if (r.lastMoveEvent && r.lastMoveEventInfo) {
                                    var t = Mi(r.lastMoveEventInfo, r.history),
                                        e = null !== r.startEvent,
                                        n = _n(t.offset, {
                                            x: 0,
                                            y: 0
                                        }) >= 3;
                                    if (e || n) {
                                        var o = t.point,
                                            a = $().timestamp;
                                        r.history.push(i(i({}, o), {
                                            timestamp: a
                                        }));
                                        var s = r.handlers,
                                            u = s.onStart,
                                            c = s.onMove;
                                        e || (u && u(r.lastMoveEvent, t), r.startEvent = r.lastMoveEvent), c && c(r.lastMoveEvent, t)
                                    }
                                }
                            }, this.handlePointerMove = function(t, e) {
                                r.lastMoveEvent = t, r.lastMoveEventInfo = Ci(e, r.transformPagePoint), To(t) && 0 === t.buttons ? r.handlePointerUp(t, e) : Z.update(r.updatePoint, !0)
                            }, this.handlePointerUp = function(t, e) {
                                r.end();
                                var n = r.handlers,
                                    o = n.onEnd,
                                    i = n.onSessionEnd,
                                    a = Mi(Ci(e, r.transformPagePoint), r.history);
                                r.startEvent && o && o(t, a), i && i(t, a)
                            }, !(Co(t) && t.touches.length > 1)) {
                            this.handlers = e, this.transformPagePoint = o;
                            var a = Ci(Ro(t), this.transformPagePoint),
                                s = a.point,
                                u = $().timestamp;
                            this.history = [i(i({}, s), {
                                timestamp: u
                            })];
                            var c = e.onSessionStart;
                            c && c(t, Mi(a, this.history)), this.removeListeners = ee(Fo(window, "pointermove", this.handlePointerMove), Fo(window, "pointerup", this.handlePointerUp), Fo(window, "pointercancel", this.handlePointerUp))
                        }
                    }
                    return t.prototype.updateHandlers = function(t) {
                        this.handlers = t
                    }, t.prototype.end = function() {
                        this.removeListeners && this.removeListeners(), q.update(this.updatePoint)
                    }, t
                }();

            function Ci(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function ji(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function Mi(t, e) {
                var n = t.point;
                return {
                    point: n,
                    delta: ji(n, Ri(e)),
                    offset: ji(n, Vi(e)),
                    velocity: Di(e, .1)
                }
            }

            function Vi(t) {
                return t[0]
            }

            function Ri(t) {
                return t[t.length - 1]
            }

            function Di(t, e) {
                if (t.length < 2) return {
                    x: 0,
                    y: 0
                };
                for (var n = t.length - 1, r = null, o = Ri(t); n >= 0 && (r = t[n], !(o.timestamp - r.timestamp > De(e)));) n--;
                if (!r) return {
                    x: 0,
                    y: 0
                };
                var i = (o.timestamp - r.timestamp) / 1e3;
                if (0 === i) return {
                    x: 0,
                    y: 0
                };
                var a = {
                    x: (o.x - r.x) / i,
                    y: (o.y - r.y) / i
                };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
            }

            function ki(t, e, n) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
                }
            }

            function Li(t, e) {
                var n, r = e.min - t.min,
                    o = e.max - t.max;
                return e.max - e.min < t.max - t.min && (r = (n = s([o, r], 2))[0], o = n[1]), {
                    min: r,
                    max: o
                }
            }
            var Ii = .35;

            function Fi(t, e, n) {
                return {
                    min: Bi(t, e),
                    max: Bi(t, n)
                }
            }

            function Bi(t, e) {
                var n;
                return "number" === typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0
            }

            function Ui(t) {
                var e = t.top;
                return {
                    x: {
                        min: t.left,
                        max: t.right
                    },
                    y: {
                        min: e,
                        max: t.bottom
                    }
                }
            }

            function Ni(t, e) {
                return Ui(function(t, e) {
                    if (!e) return t;
                    var n = e({
                            x: t.left,
                            y: t.top
                        }),
                        r = e({
                            x: t.right,
                            y: t.bottom
                        });
                    return {
                        top: n.y,
                        left: n.x,
                        bottom: r.y,
                        right: r.x
                    }
                }(t.getBoundingClientRect(), e))
            }
            var _i = new WeakMap,
                zi = function() {
                    function t(t) {
                        this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.visualElement = t
                    }
                    return t.prototype.start = function(t, e) {
                        var n = this,
                            r = (void 0 === e ? {} : e).snapToCursor,
                            o = void 0 !== r && r;
                        if (!1 !== this.visualElement.isPresent) {
                            this.panSession = new Ti(t, {
                                onSessionStart: function(t) {
                                    n.stopAnimation(), o && n.snapToCursor(Ro(t, "page").point)
                                },
                                onStart: function(t, e) {
                                    var r, o = n.getProps(),
                                        i = o.drag,
                                        a = o.dragPropagation,
                                        s = o.onDragStart;
                                    (!i || a || (n.openGlobalLock && n.openGlobalLock(), n.openGlobalLock = zo(i), n.openGlobalLock)) && (n.isDragging = !0, n.currentDirection = null, n.resolveConstraints(), n.visualElement.projection && (n.visualElement.projection.isAnimationBlocked = !0, n.visualElement.projection.target = void 0), ar((function(t) {
                                        var e, r, o = n.getAxisMotionValue(t).get() || 0;
                                        if (Rt.test(o)) {
                                            var i = null === (r = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === r ? void 0 : r.actual[t];
                                            if (i) o = zn(i) * (parseFloat(o) / 100)
                                        }
                                        n.originPoint[t] = o
                                    })), null === s || void 0 === s || s(t, e), null === (r = n.visualElement.animationState) || void 0 === r || r.setActive(Po.Drag, !0))
                                },
                                onMove: function(t, e) {
                                    var r = n.getProps(),
                                        o = r.dragPropagation,
                                        i = r.dragDirectionLock,
                                        a = r.onDirectionLock,
                                        s = r.onDrag;
                                    if (o || n.openGlobalLock) {
                                        var u = e.offset;
                                        if (i && null === n.currentDirection) return n.currentDirection = function(t, e) {
                                            void 0 === e && (e = 10);
                                            var n = null;
                                            Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x");
                                            return n
                                        }(u), void(null !== n.currentDirection && (null === a || void 0 === a || a(n.currentDirection)));
                                        n.updateAxis("x", e.point, u), n.updateAxis("y", e.point, u), n.visualElement.syncRender(), null === s || void 0 === s || s(t, e)
                                    }
                                },
                                onSessionEnd: function(t, e) {
                                    return n.stop(t, e)
                                }
                            }, {
                                transformPagePoint: this.visualElement.getTransformPagePoint()
                            })
                        }
                    }, t.prototype.stop = function(t, e) {
                        var n = this.isDragging;
                        if (this.cancel(), n) {
                            var r = e.velocity;
                            this.startAnimation(r);
                            var o = this.getProps().onDragEnd;
                            null === o || void 0 === o || o(t, e)
                        }
                    }, t.prototype.cancel = function() {
                        var t, e;
                        this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), null === (t = this.panSession) || void 0 === t || t.end(), this.panSession = void 0, !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(Po.Drag, !1)
                    }, t.prototype.updateAxis = function(t, e, n) {
                        var r = this.getProps().drag;
                        if (n && Hi(t, r, this.currentDirection)) {
                            var o = this.getAxisMotionValue(t),
                                i = this.originPoint[t] + n[t];
                            this.constraints && this.constraints[t] && (i = function(t, e, n) {
                                var r = e.min,
                                    o = e.max;
                                return void 0 !== r && t < r ? t = n ? J(r, t, n.min) : Math.max(t, r) : void 0 !== o && t > o && (t = n ? J(o, t, n.max) : Math.min(t, o)), t
                            }(i, this.constraints[t], this.elastic[t])), o.set(i)
                        }
                    }, t.prototype.resolveConstraints = function() {
                        var t = this,
                            e = this.getProps(),
                            n = e.dragConstraints,
                            r = e.dragElastic,
                            o = (this.visualElement.projection || {}).layout,
                            i = this.constraints;
                        n && S(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!n || !o) && function(t, e) {
                            var n = e.top,
                                r = e.left,
                                o = e.bottom,
                                i = e.right;
                            return {
                                x: ki(t.x, r, i),
                                y: ki(t.y, n, o)
                            }
                        }(o.actual, n), this.elastic = function(t) {
                            return void 0 === t && (t = Ii), !1 === t ? t = 0 : !0 === t && (t = Ii), {
                                x: Fi(t, "left", "right"),
                                y: Fi(t, "top", "bottom")
                            }
                        }(r), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && ar((function(e) {
                            t.getAxisMotionValue(e) && (t.constraints[e] = function(t, e) {
                                var n = {};
                                return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n
                            }(o.actual[e], t.constraints[e]))
                        }))
                    }, t.prototype.resolveRefConstraints = function() {
                        var t = this.getProps(),
                            e = t.dragConstraints,
                            n = t.onMeasureDragConstraints;
                        if (!e || !S(e)) return !1;
                        var r = e.current,
                            o = this.visualElement.projection;
                        if (!o || !o.layout) return !1;
                        var i = function(t, e, n) {
                                var r = Ni(t, n),
                                    o = e.scroll;
                                return o && (Dn(r.x, o.x), Dn(r.y, o.y)), r
                            }(r, o.root, this.visualElement.getTransformPagePoint()),
                            a = function(t, e) {
                                return {
                                    x: Li(t.x, e.x),
                                    y: Li(t.y, e.y)
                                }
                            }(o.layout.actual, i);
                        if (n) {
                            var s = n(function(t) {
                                var e = t.x,
                                    n = t.y;
                                return {
                                    top: n.min,
                                    right: e.max,
                                    bottom: n.max,
                                    left: e.min
                                }
                            }(a));
                            this.hasMutatedConstraints = !!s, s && (a = Ui(s))
                        }
                        return a
                    }, t.prototype.startAnimation = function(t) {
                        var e = this,
                            n = this.getProps(),
                            r = n.drag,
                            o = n.dragMomentum,
                            a = n.dragElastic,
                            s = n.dragTransition,
                            u = n.dragSnapToOrigin,
                            c = n.onDragTransitionEnd,
                            l = this.constraints || {},
                            f = ar((function(n) {
                                var c;
                                if (Hi(n, r, e.currentDirection)) {
                                    var f = null !== (c = null === l || void 0 === l ? void 0 : l[n]) && void 0 !== c ? c : {};
                                    u && (f = {
                                        min: 0,
                                        max: 0
                                    });
                                    var d = a ? 200 : 1e6,
                                        p = a ? 40 : 1e7,
                                        h = i(i({
                                            type: "inertia",
                                            velocity: o ? t[n] : 0,
                                            bounceStiffness: d,
                                            bounceDamping: p,
                                            timeConstant: 750,
                                            restDelta: 1,
                                            restSpeed: 10
                                        }, s), f);
                                    return e.startAxisValueAnimation(n, h)
                                }
                            }));
                        return Promise.all(f).then(c)
                    }, t.prototype.startAxisValueAnimation = function(t, e) {
                        return hn(t, this.getAxisMotionValue(t), 0, e)
                    }, t.prototype.stopAnimation = function() {
                        var t = this;
                        ar((function(e) {
                            return t.getAxisMotionValue(e).stop()
                        }))
                    }, t.prototype.getAxisMotionValue = function(t) {
                        var e, n, r = "_drag" + t.toUpperCase(),
                            o = this.visualElement.getProps()[r];
                        return o || this.visualElement.getValue(t, null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0)
                    }, t.prototype.snapToCursor = function(t) {
                        var e = this;
                        ar((function(n) {
                            if (Hi(n, e.getProps().drag, e.currentDirection)) {
                                var r = e.visualElement.projection,
                                    o = e.getAxisMotionValue(n);
                                if (r && r.layout) {
                                    var i = r.layout.actual[n],
                                        a = i.min,
                                        s = i.max;
                                    o.set(t[n] - J(a, s, .5))
                                }
                            }
                        }))
                    }, t.prototype.scalePositionWithinConstraints = function() {
                        var t, e = this,
                            n = this.getProps(),
                            r = n.drag,
                            o = n.dragConstraints,
                            i = this.visualElement.projection;
                        if (S(o) && i && this.constraints) {
                            this.stopAnimation();
                            var a = {
                                x: 0,
                                y: 0
                            };
                            ar((function(t) {
                                var n = e.getAxisMotionValue(t);
                                if (n) {
                                    var r = n.get();
                                    a[t] = function(t, e) {
                                        var n = .5,
                                            r = zn(t),
                                            o = zn(e);
                                        return o > r ? n = ht(e.min, e.max - r, t.min) : r > o && (n = ht(t.min, t.max - o, e.min)), it(0, 1, n)
                                    }({
                                        min: r,
                                        max: r
                                    }, e.constraints[t])
                                }
                            }));
                            var s = this.visualElement.getProps().transformTemplate;
                            this.visualElement.getInstance().style.transform = s ? s({}, "") : "none", null === (t = i.root) || void 0 === t || t.updateScroll(), i.updateLayout(), this.resolveConstraints(), ar((function(t) {
                                if (Hi(t, r, null)) {
                                    var n = e.getAxisMotionValue(t),
                                        o = e.constraints[t],
                                        i = o.min,
                                        s = o.max;
                                    n.set(J(i, s, a[t]))
                                }
                            }))
                        }
                    }, t.prototype.addListeners = function() {
                        var t, e = this;
                        _i.set(this.visualElement, this);
                        var n = Fo(this.visualElement.getInstance(), "pointerdown", (function(t) {
                                var n = e.getProps(),
                                    r = n.drag,
                                    o = n.dragListener;
                                r && (void 0 === o || o) && e.start(t)
                            })),
                            r = function() {
                                S(e.getProps().dragConstraints) && (e.constraints = e.resolveRefConstraints())
                            },
                            o = this.visualElement.projection,
                            i = o.addEventListener("measure", r);
                        o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), r();
                        var a = Oo(window, "resize", (function() {
                            e.scalePositionWithinConstraints()
                        }));
                        return o.addEventListener("didUpdate", (function(t) {
                                var n = t.delta,
                                    r = t.hasLayoutChanged;
                                e.isDragging && r && (ar((function(t) {
                                    var r = e.getAxisMotionValue(t);
                                    r && (e.originPoint[t] += n[t].translate, r.set(r.get() + n[t].translate))
                                })), e.visualElement.syncRender())
                            })),
                            function() {
                                a(), n(), i()
                            }
                    }, t.prototype.getProps = function() {
                        var t = this.visualElement.getProps(),
                            e = t.drag,
                            n = void 0 !== e && e,
                            r = t.dragDirectionLock,
                            o = void 0 !== r && r,
                            a = t.dragPropagation,
                            s = void 0 !== a && a,
                            u = t.dragConstraints,
                            c = void 0 !== u && u,
                            l = t.dragElastic,
                            f = void 0 === l ? Ii : l,
                            d = t.dragMomentum,
                            p = void 0 === d || d;
                        return i(i({}, t), {
                            drag: n,
                            dragDirectionLock: o,
                            dragPropagation: s,
                            dragConstraints: c,
                            dragElastic: f,
                            dragMomentum: p
                        })
                    }, t
                }();

            function Hi(t, e, n) {
                return (!0 === e || e === t) && (null === n || n === t)
            }
            var qi = {
                    pan: ei((function(t) {
                        var e = t.onPan,
                            n = t.onPanStart,
                            r = t.onPanEnd,
                            o = t.onPanSessionStart,
                            i = t.visualElement,
                            a = e || n || r || o,
                            s = (0, c.useRef)(null),
                            u = (0, c.useContext)(v).transformPagePoint,
                            l = {
                                onSessionStart: o,
                                onStart: n,
                                onMove: e,
                                onEnd: function(t, e) {
                                    s.current = null, r && r(t, e)
                                }
                            };
                        (0, c.useEffect)((function() {
                            null !== s.current && s.current.updateHandlers(l)
                        })), Bo(i, "pointerdown", a && function(t) {
                            s.current = new Ti(t, l, {
                                transformPagePoint: u
                            })
                        }), Yo((function() {
                            return s.current && s.current.end()
                        }))
                    })),
                    drag: ei((function(t) {
                        var e = t.dragControls,
                            n = t.visualElement,
                            r = D((function() {
                                return new zi(n)
                            }));
                        (0, c.useEffect)((function() {
                            return e && e.subscribe(r)
                        }), [r, e]), (0, c.useEffect)((function() {
                            return r.addListeners()
                        }), [r])
                    }))
                },
                Wi = ["LayoutMeasure", "BeforeLayoutMeasure", "LayoutUpdate", "ViewportBoxUpdate", "Update", "Render", "AnimationComplete", "LayoutAnimationComplete", "AnimationStart", "SetAxisTarget", "Unmount"];
            var Yi = function(t) {
                    var e = t.treeType,
                        n = void 0 === e ? "" : e,
                        r = t.build,
                        o = t.getBaseTarget,
                        a = t.makeTargetAnimatable,
                        c = t.measureViewportBox,
                        l = t.render,
                        f = t.readValueFromInstance,
                        d = t.removeValueFromRenderState,
                        p = t.sortNodePosition,
                        h = t.scrapeMotionValuesFromProps;
                    return function(t, e) {
                        var v = t.parent,
                            m = t.props,
                            y = t.presenceId,
                            g = t.blockInitialAnimation,
                            b = t.visualState,
                            x = t.shouldReduceMotion;
                        void 0 === e && (e = {});
                        var w, P, E = !1,
                            S = b.latestValues,
                            O = b.renderState,
                            T = function() {
                                var t = Wi.map((function() {
                                        return new et
                                    })),
                                    e = {},
                                    n = {
                                        clearAllListeners: function() {
                                            return t.forEach((function(t) {
                                                return t.clear()
                                            }))
                                        },
                                        updatePropListeners: function(t) {
                                            Wi.forEach((function(r) {
                                                var o, i = "on" + r,
                                                    a = t[i];
                                                null === (o = e[r]) || void 0 === o || o.call(e), a && (e[r] = n[i](a))
                                            }))
                                        }
                                    };
                                return t.forEach((function(t, e) {
                                    n["on" + Wi[e]] = function(e) {
                                        return t.add(e)
                                    }, n["notify" + Wi[e]] = function() {
                                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                        return t.notify.apply(t, u([], s(e), !1))
                                    }
                                })), n
                            }(),
                            C = new Map,
                            V = new Map,
                            R = {},
                            D = i({}, S);

                        function k() {
                            w && E && (L(), l(w, O, m.style, H.projection))
                        }

                        function L() {
                            r(H, O, S, e, m)
                        }

                        function I() {
                            T.notifyUpdate(S)
                        }

                        function F(t, e) {
                            var n = e.onChange((function(e) {
                                    S[t] = e, m.onUpdate && Z.update(I, !1, !0)
                                })),
                                r = e.onRenderRequest(H.scheduleRender);
                            V.set(t, (function() {
                                n(), r()
                            }))
                        }
                        var B = h(m);
                        for (var U in B) {
                            var N = B[U];
                            void 0 !== S[U] && ot(N) && N.set(S[U], !1)
                        }
                        var _ = j(m),
                            z = M(m),
                            H = i(i({
                                treeType: n,
                                current: null,
                                depth: v ? v.depth + 1 : 0,
                                parent: v,
                                children: new Set,
                                presenceId: y,
                                shouldReduceMotion: x,
                                variantChildren: z ? new Set : void 0,
                                isVisible: void 0,
                                manuallyAnimateOnMount: Boolean(null === v || void 0 === v ? void 0 : v.isMounted()),
                                blockInitialAnimation: g,
                                isMounted: function() {
                                    return Boolean(w)
                                },
                                mount: function(t) {
                                    E = !0, w = H.current = t, H.projection && H.projection.mount(t), z && v && !_ && (P = null === v || void 0 === v ? void 0 : v.addVariantChild(H)), C.forEach((function(t, e) {
                                        return F(e, t)
                                    })), null === v || void 0 === v || v.children.add(H), H.setProps(m)
                                },
                                unmount: function() {
                                    var t;
                                    null === (t = H.projection) || void 0 === t || t.unmount(), q.update(I), q.render(k), V.forEach((function(t) {
                                        return t()
                                    })), null === P || void 0 === P || P(), null === v || void 0 === v || v.children.delete(H), T.clearAllListeners(), w = void 0, E = !1
                                },
                                addVariantChild: function(t) {
                                    var e, n = H.getClosestVariantNode();
                                    if (n) return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                                        function() {
                                            return n.variantChildren.delete(t)
                                        }
                                },
                                sortNodePosition: function(t) {
                                    return p && n === t.treeType ? p(H.getInstance(), t.getInstance()) : 0
                                },
                                getClosestVariantNode: function() {
                                    return z ? H : null === v || void 0 === v ? void 0 : v.getClosestVariantNode()
                                },
                                getLayoutId: function() {
                                    return m.layoutId
                                },
                                getInstance: function() {
                                    return w
                                },
                                getStaticValue: function(t) {
                                    return S[t]
                                },
                                setStaticValue: function(t, e) {
                                    return S[t] = e
                                },
                                getLatestValues: function() {
                                    return S
                                },
                                setVisibility: function(t) {
                                    H.isVisible !== t && (H.isVisible = t, H.scheduleRender())
                                },
                                makeTargetAnimatable: function(t, e) {
                                    return void 0 === e && (e = !0), a(H, t, m, e)
                                },
                                measureViewportBox: function() {
                                    return c(w, m)
                                },
                                addValue: function(t, e) {
                                    H.hasValue(t) && H.removeValue(t), C.set(t, e), S[t] = e.get(), F(t, e)
                                },
                                removeValue: function(t) {
                                    var e;
                                    C.delete(t), null === (e = V.get(t)) || void 0 === e || e(), V.delete(t), delete S[t], d(t, O)
                                },
                                hasValue: function(t) {
                                    return C.has(t)
                                },
                                getValue: function(t, e) {
                                    var n = C.get(t);
                                    return void 0 === n && void 0 !== e && (n = rt(e), H.addValue(t, n)), n
                                },
                                forEachValue: function(t) {
                                    return C.forEach(t)
                                },
                                readValue: function(t) {
                                    var n;
                                    return null !== (n = S[t]) && void 0 !== n ? n : f(w, t, e)
                                },
                                setBaseTarget: function(t, e) {
                                    D[t] = e
                                },
                                getBaseTarget: function(t) {
                                    if (o) {
                                        var e = o(m, t);
                                        if (void 0 !== e && !ot(e)) return e
                                    }
                                    return D[t]
                                }
                            }, T), {
                                build: function() {
                                    return L(), O
                                },
                                scheduleRender: function() {
                                    Z.render(k, !1, !0)
                                },
                                syncRender: k,
                                setProps: function(t) {
                                    (t.transformTemplate || m.transformTemplate) && H.scheduleRender(), m = t, T.updatePropListeners(t), R = function(t, e, n) {
                                        var r;
                                        for (var o in e) {
                                            var i = e[o],
                                                a = n[o];
                                            if (ot(i)) t.addValue(o, i);
                                            else if (ot(a)) t.addValue(o, rt(i));
                                            else if (a !== i)
                                                if (t.hasValue(o)) {
                                                    var s = t.getValue(o);
                                                    !s.hasAnimated && s.set(i)
                                                } else t.addValue(o, rt(null !== (r = t.getStaticValue(o)) && void 0 !== r ? r : i))
                                        }
                                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                                        return e
                                    }(H, h(m), R)
                                },
                                getProps: function() {
                                    return m
                                },
                                getVariant: function(t) {
                                    var e;
                                    return null === (e = m.variants) || void 0 === e ? void 0 : e[t]
                                },
                                getDefaultTransition: function() {
                                    return m.transition
                                },
                                getTransformPagePoint: function() {
                                    return m.transformPagePoint
                                },
                                getVariantContext: function(t) {
                                    if (void 0 === t && (t = !1), t) return null === v || void 0 === v ? void 0 : v.getVariantContext();
                                    if (!_) {
                                        var e = (null === v || void 0 === v ? void 0 : v.getVariantContext()) || {};
                                        return void 0 !== m.initial && (e.initial = m.initial), e
                                    }
                                    for (var n = {}, r = 0; r < Gi; r++) {
                                        var o = Xi[r],
                                            i = m[o];
                                        (A(i) || !1 === i) && (n[o] = i)
                                    }
                                    return n
                                }
                            });
                        return H
                    }
                },
                Xi = u(["initial"], s(xi), !1),
                Gi = Xi.length;

            function $i(t) {
                return "string" === typeof t && t.startsWith("var(--")
            }
            var Zi = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function Ji(t, e, n) {
                void 0 === n && (n = 1), 'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.');
                var r = s(function(t) {
                        var e = Zi.exec(t);
                        if (!e) return [, ];
                        var n = s(e, 3);
                        return [n[1], n[2]]
                    }(t), 2),
                    o = r[0],
                    i = r[1];
                if (o) {
                    var a = window.getComputedStyle(e).getPropertyValue(o);
                    return a ? a.trim() : $i(i) ? Ji(i, e, n + 1) : i
                }
            }
            var Ki, Qi = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"]),
                ta = function(t) {
                    return Qi.has(t)
                },
                ea = function(t, e) {
                    t.set(e, !1), t.set(e)
                },
                na = function(t) {
                    return t === wt || t === Dt
                };
            ! function(t) {
                t.width = "width", t.height = "height", t.left = "left", t.right = "right", t.top = "top", t.bottom = "bottom"
            }(Ki || (Ki = {}));
            var ra = function(t, e) {
                    return parseFloat(t.split(", ")[e])
                },
                oa = function(t, e) {
                    return function(n, r) {
                        var o = r.transform;
                        if ("none" === o || !o) return 0;
                        var i = o.match(/^matrix3d\((.+)\)$/);
                        if (i) return ra(i[1], e);
                        var a = o.match(/^matrix\((.+)\)$/);
                        return a ? ra(a[1], t) : 0
                    }
                },
                ia = new Set(["x", "y", "z"]),
                aa = ur.filter((function(t) {
                    return !ia.has(t)
                }));
            var sa = {
                    width: function(t, e) {
                        var n = t.x,
                            r = e.paddingLeft,
                            o = void 0 === r ? "0" : r,
                            i = e.paddingRight,
                            a = void 0 === i ? "0" : i;
                        return n.max - n.min - parseFloat(o) - parseFloat(a)
                    },
                    height: function(t, e) {
                        var n = t.y,
                            r = e.paddingTop,
                            o = void 0 === r ? "0" : r,
                            i = e.paddingBottom,
                            a = void 0 === i ? "0" : i;
                        return n.max - n.min - parseFloat(o) - parseFloat(a)
                    },
                    top: function(t, e) {
                        var n = e.top;
                        return parseFloat(n)
                    },
                    left: function(t, e) {
                        var n = e.left;
                        return parseFloat(n)
                    },
                    bottom: function(t, e) {
                        var n = t.y,
                            r = e.top;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    right: function(t, e) {
                        var n = t.x,
                            r = e.left;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    x: oa(4, 13),
                    y: oa(5, 14)
                },
                ua = function(t, e, n, r) {
                    void 0 === n && (n = {}), void 0 === r && (r = {}), e = i({}, e), r = i({}, r);
                    var o = Object.keys(e).filter(ta),
                        a = [],
                        u = !1,
                        c = [];
                    if (o.forEach((function(o) {
                            var i = t.getValue(o);
                            if (t.hasValue(o)) {
                                var s, l = n[o],
                                    f = li(l),
                                    d = e[o];
                                if (qe(d)) {
                                    var p = d.length,
                                        h = null === d[0] ? 1 : 0;
                                    l = d[h], f = li(l);
                                    for (var v = h; v < p; v++) s ? li(d[v]) : (s = li(d[v])) === f || na(f) && na(s)
                                } else s = li(d);
                                if (f !== s)
                                    if (na(f) && na(s)) {
                                        var m = i.get();
                                        "string" === typeof m && i.set(parseFloat(m)), "string" === typeof d ? e[o] = parseFloat(d) : Array.isArray(d) && s === Dt && (e[o] = d.map(parseFloat))
                                    } else(null === f || void 0 === f ? void 0 : f.transform) && (null === s || void 0 === s ? void 0 : s.transform) && (0 === l || 0 === d) ? 0 === l ? i.set(s.transform(l)) : e[o] = f.transform(d) : (u || (a = function(t) {
                                        var e = [];
                                        return aa.forEach((function(n) {
                                            var r = t.getValue(n);
                                            void 0 !== r && (e.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                        })), e.length && t.syncRender(), e
                                    }(t), u = !0), c.push(o), r[o] = void 0 !== r[o] ? r[o] : e[o], ea(i, d))
                            }
                        })), c.length) {
                        var l = function(t, e, n) {
                            var r = e.measureViewportBox(),
                                o = e.getInstance(),
                                i = getComputedStyle(o),
                                a = i.display,
                                s = {};
                            "none" === a && e.setStaticValue("display", t.display || "block"), n.forEach((function(t) {
                                s[t] = sa[t](r, i)
                            })), e.syncRender();
                            var u = e.measureViewportBox();
                            return n.forEach((function(n) {
                                var r = e.getValue(n);
                                ea(r, s[n]), t[n] = sa[n](u, i)
                            })), t
                        }(e, t, c);
                        return a.length && a.forEach((function(e) {
                            var n = s(e, 2),
                                r = n[0],
                                o = n[1];
                            t.getValue(r).set(o)
                        })), t.syncRender(), {
                            target: l,
                            transitionEnd: r
                        }
                    }
                    return {
                        target: e,
                        transitionEnd: r
                    }
                };

            function ca(t, e, n, r) {
                return function(t) {
                    return Object.keys(t).some(ta)
                }(e) ? ua(t, e, n, r) : {
                    target: e,
                    transitionEnd: r
                }
            }
            var la = function(t, e, n, r) {
                var o = function(t, e, n) {
                    var r, o = a(e, []),
                        s = t.getInstance();
                    if (!(s instanceof Element)) return {
                        target: o,
                        transitionEnd: n
                    };
                    for (var u in n && (n = i({}, n)), t.forEachValue((function(t) {
                            var e = t.get();
                            if ($i(e)) {
                                var n = Ji(e, s);
                                n && t.set(n)
                            }
                        })), o) {
                        var c = o[u];
                        if ($i(c)) {
                            var l = Ji(c, s);
                            l && (o[u] = l, n && (null !== (r = n[u]) && void 0 !== r || (n[u] = c)))
                        }
                    }
                    return {
                        target: o,
                        transitionEnd: n
                    }
                }(t, e, r);
                return ca(t, e = o.target, n, r = o.transitionEnd)
            };
            var fa = {
                    treeType: "dom",
                    readValueFromInstance: function(t, e) {
                        if (fr(e)) {
                            var n = rn(e);
                            return n && n.default || 0
                        }
                        var r, o = (r = t, window.getComputedStyle(r));
                        return (Yr(e) ? o.getPropertyValue(e) : o[e]) || 0
                    },
                    sortNodePosition: function(t, e) {
                        return 2 & t.compareDocumentPosition(e) ? 1 : -1
                    },
                    getBaseTarget: function(t, e) {
                        var n;
                        return null === (n = t.style) || void 0 === n ? void 0 : n[e]
                    },
                    measureViewportBox: function(t, e) {
                        return Ni(t, e.transformPagePoint)
                    },
                    resetTransform: function(t, e, n) {
                        var r = n.transformTemplate;
                        e.style.transform = r ? r({}, "") : "none", t.scheduleRender()
                    },
                    restoreTransform: function(t, e) {
                        t.style.transform = e.style.transform
                    },
                    removeValueFromRenderState: function(t, e) {
                        var n = e.vars,
                            r = e.style;
                        delete n[t], delete r[t]
                    },
                    makeTargetAnimatable: function(t, e, n, r) {
                        var o = n.transformValues;
                        void 0 === r && (r = !0);
                        var s = e.transition,
                            u = e.transitionEnd,
                            c = a(e, ["transition", "transitionEnd"]),
                            l = function(t, e, n) {
                                var r, o, i = {};
                                for (var a in t) i[a] = null !== (r = vi(a, e)) && void 0 !== r ? r : null === (o = n.getValue(a)) || void 0 === o ? void 0 : o.get();
                                return i
                            }(c, s || {}, t);
                        if (o && (u && (u = o(u)), c && (c = o(c)), l && (l = o(l))), r) {
                            ! function(t, e, n) {
                                var r, o, i, a, s = Object.keys(e).filter((function(e) {
                                        return !t.hasValue(e)
                                    })),
                                    u = s.length;
                                if (u)
                                    for (var c = 0; c < u; c++) {
                                        var l = s[c],
                                            f = e[l],
                                            d = null;
                                        Array.isArray(f) && (d = f[0]), null === d && (d = null !== (o = null !== (r = n[l]) && void 0 !== r ? r : t.readValue(l)) && void 0 !== o ? o : e[l]), void 0 !== d && null !== d && ("string" === typeof d && (/^\-?\d*\.?\d+$/.test(d) || si(d)) ? d = parseFloat(d) : !di(d) && Kt.test(f) && (d = on(l, f)), t.addValue(l, rt(d)), null !== (i = (a = n)[l]) && void 0 !== i || (a[l] = d), t.setBaseTarget(l, d))
                                    }
                            }(t, c, l);
                            var f = la(t, c, l, u);
                            u = f.transitionEnd, c = f.target
                        }
                        return i({
                            transition: s,
                            transitionEnd: u
                        }, c)
                    },
                    scrapeMotionValuesFromProps: mo,
                    build: function(t, e, n, r, o) {
                        void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? "visible" : "hidden"), Gr(e, n, r, o.transformTemplate)
                    },
                    render: po
                },
                da = Yi(fa),
                pa = Yi(i(i({}, fa), {
                    getBaseTarget: function(t, e) {
                        return t[e]
                    },
                    readValueFromInstance: function(t, e) {
                        var n;
                        return fr(e) ? (null === (n = rn(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = ho.has(e) ? e : fo(e), t.getAttribute(e))
                    },
                    scrapeMotionValuesFromProps: yo,
                    build: function(t, e, n, r, o) {
                        ao(e, n, r, o.transformTemplate)
                    },
                    render: vo
                })),
                ha = function(t, e) {
                    return Hr(t) ? pa(e, {
                        enableHardwareAcceleration: !1
                    }) : da(e, {
                        enableHardwareAcceleration: !0
                    })
                };

            function va(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            var ma = {
                    correct: function(t, e) {
                        if (!e.target) return t;
                        if ("string" === typeof t) {
                            if (!Dt.test(t)) return t;
                            t = parseFloat(t)
                        }
                        var n = va(t, e.target.x),
                            r = va(t, e.target.y);
                        return "".concat(n, "% ").concat(r, "%")
                    }
                },
                ya = "_$css",
                ga = {
                    correct: function(t, e) {
                        var n = e.treeScale,
                            r = e.projectionDelta,
                            o = t,
                            i = t.includes("var("),
                            a = [];
                        i && (t = t.replace(Zi, (function(t) {
                            return a.push(t), ya
                        })));
                        var s = Kt.parse(t);
                        if (s.length > 5) return o;
                        var u = Kt.createTransformer(t),
                            c = "number" !== typeof s[0] ? 1 : 0,
                            l = r.x.scale * n.x,
                            f = r.y.scale * n.y;
                        s[0 + c] /= l, s[1 + c] /= f;
                        var d = J(l, f, .5);
                        "number" === typeof s[2 + c] && (s[2 + c] /= d), "number" === typeof s[3 + c] && (s[3 + c] /= d);
                        var p = u(s);
                        if (i) {
                            var h = 0;
                            p = p.replace(ya, (function() {
                                var t = a[h];
                                return h++, t
                            }))
                        }
                        return p
                    }
                },
                ba = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.componentDidMount = function() {
                        var t, e = this,
                            n = this.props,
                            r = n.visualElement,
                            o = n.layoutGroup,
                            a = n.switchLayoutGroup,
                            s = n.layoutId,
                            u = r.projection;
                        t = xa, Object.assign(or, t), u && ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(u), (null === a || void 0 === a ? void 0 : a.register) && s && a.register(u), u.root.didUpdate(), u.addEventListener("animationComplete", (function() {
                            e.safeToRemove()
                        })), u.setOptions(i(i({}, u.options), {
                            onExitComplete: function() {
                                return e.safeToRemove()
                            }
                        }))), yr.hasEverUpdated = !0
                    }, e.prototype.getSnapshotBeforeUpdate = function(t) {
                        var e = this,
                            n = this.props,
                            r = n.layoutDependency,
                            o = n.visualElement,
                            i = n.drag,
                            a = n.isPresent,
                            s = o.projection;
                        return s ? (s.isPresent = a, i || t.layoutDependency !== r || void 0 === r ? s.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? s.promote() : s.relegate() || Z.postRender((function() {
                            var t;
                            (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove()
                        }))), null) : null
                    }, e.prototype.componentDidUpdate = function() {
                        var t = this.props.visualElement.projection;
                        t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove())
                    }, e.prototype.componentWillUnmount = function() {
                        var t = this.props,
                            e = t.visualElement,
                            n = t.layoutGroup,
                            r = t.switchLayoutGroup,
                            o = e.projection;
                        o && (o.scheduleCheckAfterUnmount(), (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o), (null === r || void 0 === r ? void 0 : r.deregister) && r.deregister(o))
                    }, e.prototype.safeToRemove = function() {
                        var t = this.props.safeToRemove;
                        null === t || void 0 === t || t()
                    }, e.prototype.render = function() {
                        return null
                    }, e
                }(c.Component);
            var xa = {
                    borderRadius: i(i({}, ma), {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: ma,
                    borderTopRightRadius: ma,
                    borderBottomLeftRadius: ma,
                    borderBottomRightRadius: ma,
                    boxShadow: ga
                },
                wa = {
                    measureLayout: function(t) {
                        var e = s(ii(), 2),
                            n = e[0],
                            r = e[1],
                            o = (0, c.useContext)(Fr);
                        return c.createElement(ba, i({}, t, {
                            layoutGroup: o,
                            switchLayoutGroup: (0, c.useContext)(Br),
                            isPresent: n,
                            safeToRemove: r
                        }))
                    }
                },
                Pa = gr({
                    attachResizeListener: function(t, e) {
                        return t.addEventListener("resize", e, {
                                passive: !0
                            }),
                            function() {
                                return t.removeEventListener("resize", e)
                            }
                    },
                    measureScroll: function() {
                        return {
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }
                    }
                }),
                Ea = {
                    current: void 0
                },
                Sa = gr({
                    measureScroll: function(t) {
                        return {
                            x: t.scrollLeft,
                            y: t.scrollTop
                        }
                    },
                    defaultParent: function() {
                        if (!Ea.current) {
                            var t = new Pa(0, {});
                            t.mount(window), t.setOptions({
                                layoutScroll: !0
                            }), Ea.current = t
                        }
                        return Ea.current
                    },
                    resetTransform: function(t, e) {
                        t.style.transform = null !== e && void 0 !== e ? e : "none"
                    }
                }),
                Oa = i(i(i(i({}, Ai), ni), qi), wa),
                Aa = _r((function(t, e) {
                    return function(t, e, n, r, o) {
                        var a = e.forwardMotionProps,
                            s = void 0 !== a && a,
                            u = Hr(t) ? Eo : So;
                        return i(i({}, u), {
                            preloadedFeatures: n,
                            useRender: co(s),
                            createVisualElement: r,
                            projectionNodeConstructor: o,
                            Component: t
                        })
                    }(t, e, Oa, ha, Sa)
                }))
        },
        29: function(t, e, n) {
            "use strict";

            function r(t, e, n, r, o, i, a) {
                try {
                    var s = t[i](a),
                        u = s.value
                } catch (c) {
                    return void n(c)
                }
                s.done ? e(u) : Promise.resolve(u).then(r, o)
            }

            function o(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(o, i) {
                        var a = t.apply(e, n);

                        function s(t) {
                            r(a, o, i, s, u, "next", t)
                        }

                        function u(t) {
                            r(a, o, i, s, u, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }
            n.d(e, {
                Z: function() {
                    return o
                }
            })
        }
    }
]);