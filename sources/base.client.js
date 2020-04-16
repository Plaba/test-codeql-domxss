/*! For license information please see base.client.b76996f2.js.LICENSE */
!function(e) {
    function webpackJsonpCallback(t) {
        for (var n, a, o = t[0], i = t[1], c = 0, l = []; c < o.length; c++)
            a = o[c], Object.prototype.hasOwnProperty.call(r, a) && r[a] && l.push(r[a][0]), r[a] = 0;
        for (n in i)
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
        for (s && s(t); l.length;)
            l.shift()()
    }
    var t = {},
        n = {
            8: 0
        },
        r = {
            8: 0
        };
    function jsonpScriptSrc(e) {
        return __webpack_require__.p + "" + ({
            16: "chat-user-popover",
            31: "gift-membership-modal",
            32: "notification-request",
            33: "trophy-popover",
            34: "user-report-modal",
            35: "vendors~gift-membership-modal",
            36: "vendors~notification-request"
        }[e] || e) + ".chunk.client." + {
            16: "80cfd66d",
            31: "834e2392",
            32: "0786a009",
            33: "2bf2fe75",
            34: "f643d024",
            35: "43895124",
            36: "f9f276d1"
        }[e] + ".js"
    }
    function __webpack_require__(n) {
        if (t[n])
            return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
    }
    __webpack_require__.e = function requireEnsure(e) {
        var t = [],
            a = window.__CHESSCOM_RTL__;
        n[e] ? t.push(n[e]) : 0 !== n[e] && {
            31: 1,
            32: 1,
            33: 1,
            34: 1
        }[e] && t.push(n[e] = new Promise((function(t, r) {
            var o = ({
                    16: "chat-user-popover",
                    31: "gift-membership-modal",
                    32: "notification-request",
                    33: "trophy-popover",
                    34: "user-report-modal",
                    35: "vendors~gift-membership-modal",
                    36: "vendors~notification-request"
                }[e] || e) + ".chunk.client." + {
                    16: "80cfd66d",
                    31: "834e2392",
                    32: "0786a009",
                    33: "2bf2fe75",
                    34: "f643d024",
                    35: "43895124",
                    36: "f9f276d1"
                }[e] + ".css",
                i = "/bundles/app/css/" + o;
            a && (i = i.replace(/\.css/i, ".rtl.css"));
            for (var s = document.getElementsByTagName("link"), c = 0; c < s.length; c++) {
                var l = (d = s[c]).getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (l === o || l === i))
                    return t()
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
                var d;
                if ((l = (d = u[c]).getAttribute("data-href")) === o || l === i)
                    return t()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = t, p.onerror = function(t) {
                var a = t && t.target && t.target.src || i,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED", o.request = a, delete n[e], p.parentNode.removeChild(p), r(o)
            }, p.href = i, document.getElementsByTagName("head")[0].appendChild(p)
        })).then((function() {
            n[e] = 0
        })));
        var o = r[e];
        if (0 !== o)
            if (o)
                t.push(o[2]);
            else {
                var i = new Promise((function(t, n) {
                    o = r[e] = [t, n]
                }));
                t.push(o[2] = i);
                var s = new Error;
                var c = function loadScript(t, n) {
                    var a,
                        o = document.createElement("script"),
                        i = "&retry-attempt=" + (2 - n + 1);
                    o.charset = "utf-8", o.timeout = 120, __webpack_require__.nc && o.setAttribute("nonce", __webpack_require__.nc), o.src = t, a = function(t) {
                        o.onerror = o.onload = null, clearTimeout(c);
                        var a = r[e];
                        if (0 !== a)
                            if (a)
                                if (0 === n) {
                                    var l = t && ("load" === t.type ? "missing" : t.type),
                                        u = t && t.target && t.target.src;
                                    s.message = "Loading chunk " + e + " failed.\n(" + l + ": " + u + ")", s.name = "ChunkLoadError", s.type = l, s.request = u, a[1](s), r[e] = void 0
                                } else {
                                    var d = "cache-bust=true" + i,
                                        p = loadScript(jsonpScriptSrc(e) + "?" + d, n - 1);
                                    document.head.appendChild(p)
                                }
                            else
                                r[e] = void 0
                    };
                    var c = setTimeout((function() {
                        a({
                            type: "timeout",
                            target: o
                        })
                    }), 12e4);
                    return o.onerror = o.onload = a, o
                }(jsonpScriptSrc(e), 2);
                document.head.appendChild(c)
            }
        return Promise.all(t)
    }, __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
        __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, __webpack_require__.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, __webpack_require__.t = function(e, t) {
        if (1 & t && (e = __webpack_require__(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var r in e)
                __webpack_require__.d(n, r, function(t) {
                    return e[t]
                }.bind(null, r));
        return n
    }, __webpack_require__.n = function(e) {
        var t = e && e.__esModule ? function getDefault() {
            return e.default
        } : function getModuleExports() {
            return e
        };
        return __webpack_require__.d(t, "a", t), t
    }, __webpack_require__.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, __webpack_require__.p = "/bundles/app/js/", __webpack_require__.oe = function(e) {
        throw console.error(e), e
    };
    var a = ("undefined" != typeof self ? self : this).wpJsonpChessCom = ("undefined" != typeof self ? self : this).wpJsonpChessCom || [],
        o = a.push.bind(a);
    a.push = webpackJsonpCallback, a = a.slice();
    for (var i = 0; i < a.length; i++)
        webpackJsonpCallback(a[i]);
    var s = o;
    __webpack_require__(__webpack_require__.s = 1075)
}({
    0: function(e, t, n) {
        "use strict";
        var r = n(2);
        t.a = r.a
    },
    1: function(e, t, n) {
        e.exports = n(20)(7)
    },
    1002: function(e, t, n) {
        "use strict";
        var r = n(705),
            a = n.n(r);
        t.default = a.a
    },
    1003: function(e, t, n) {
        "use strict";
        var r = n(706),
            a = n.n(r);
        t.default = a.a
    },
    103: function(e, t, n) {
        "use strict";
        var r = n(2);
        t.a = {
            methods: {
                $trans: r.b,
                $transChoice: r.c
            }
        }
    },
    1075: function(e, t, n) {
        n(1076), n(1180), n(1194), n(1078), n(1079), n(1080), n(1081), n(1082), n(1083), n(1084), n(1085), n(1086), n(1087), n(1088), n(1089), n(1090), n(1091), n(1092), n(1093), n(1094), n(1095), n(1096), n(1097), n(1098), n(1099), n(1100), n(1101), n(1102), n(1103), n(1104), n(747), n(1105), n(748), n(745), n(1106), n(749), n(750), n(1107), n(1108), n(751), n(1109), n(1110), n(1111), n(746), n(1112), n(1113), n(1114), n(1115), n(1116), n(1117), n(1118), n(1119), n(1120), n(1121), n(1122), e.exports = n(1123)
    },
    1076: function(e, t, n) {},
    1077: function(e, t, n) {
        e.exports = n(20)(85)
    },
    1078: function(e, t, n) {
        e.exports = {
            sidebar: "base-sidebar",
            layout: "base-layout",
            slidetop: "base-slidetop",
            slidebottom: "base-slidebottom",
            slideleft: "base-slideleft",
            slideright: "base-slideright"
        }
    },
    1079: function(e, t, n) {
        e.exports = {
            upgrade: "placeholder-ad-upgrade",
            link: "placeholder-ad-link"
        }
    },
    108: function(e, t, n) {
        e.exports = {
            component: "form-input-component",
            darkMode: "form-input-darkMode",
            input: "form-input-input",
            textarea: "form-input-textarea",
            wrapper: "form-input-wrapper",
            icon: "form-input-icon",
            left: "form-input-left",
            right: "form-input-right",
            large: "form-input-large"
        }
    },
    1080: function(e, t, n) {
        e.exports = {
            container: "short-sidebar-ad-container",
            component: "short-sidebar-ad-component",
            iframe: "short-sidebar-ad-iframe",
            bottom: "short-sidebar-ad-bottom",
            sticky: "short-sidebar-ad-sticky"
        }
    },
    1081: function(e, t, n) {
        e.exports = {
            component: "form-component",
            "help-block": "form-help-block"
        }
    },
    1082: function(e, t, n) {
        e.exports = {
            component: "form-button-component",
            dark: "form-button-dark",
            "x-small": "form-button-x-small",
            small: "form-button-small",
            large: "form-button-large",
            "x-large": "form-button-x-large",
            "full-width": "form-button-full-width",
            basic: "form-button-basic",
            darkMode: "form-button-darkMode",
            "basic-with-dark-mode": "form-button-basic-with-dark-mode",
            primary: "form-button-primary",
            info: "form-button-info",
            danger: "form-button-danger"
        }
    },
    1083: function(e, t, n) {
        e.exports = {
            component: "form-checkbox-component",
            checkbox: "form-checkbox-checkbox",
            label: "form-checkbox-label"
        }
    },
    1084: function(e, t, n) {
        e.exports = {
            component: "form-dropdown-component",
            select: "form-dropdown-select",
            value: "form-dropdown-value",
            chevron: "form-dropdown-chevron",
            options: "form-dropdown-options",
            option: "form-dropdown-option",
            icon: "form-dropdown-icon",
            selected: "form-dropdown-selected",
            overlay: "form-dropdown-overlay"
        }
    },
    1085: function(e, t, n) {
        e.exports = {
            component: "form-error-component",
            wrapper: "form-error-wrapper",
            text: "form-error-text",
            label: "form-error-label"
        }
    },
    1086: function(e, t, n) {
        e.exports = {
            label: "form-label-label"
        }
    },
    1087: function(e, t, n) {
        e.exports = {
            component: "form-input-component",
            darkMode: "form-input-darkMode",
            input: "form-input-input",
            textarea: "form-input-textarea",
            wrapper: "form-input-wrapper",
            icon: "form-input-icon",
            left: "form-input-left",
            right: "form-input-right",
            large: "form-input-large"
        }
    },
    1088: function(e, t, n) {
        e.exports = {
            component: "form-select-component",
            darkMode: "form-select-darkMode",
            icon: "form-select-icon",
            large: "form-select-large"
        }
    },
    1089: function(e, t, n) {
        e.exports = {
            component: "form-switch-component",
            checkbox: "form-switch-checkbox",
            readonly: "form-switch-readonly",
            label: "form-switch-label",
            button: "form-switch-button",
            group: "form-switch-group"
        }
    },
    1090: function(e, t, n) {
        e.exports = {
            component: "form-textarea-component",
            darkMode: "form-textarea-darkMode",
            autosize: "form-textarea-autosize",
            vertical: "form-textarea-vertical",
            "full-width": "form-textarea-full-width"
        }
    },
    1091: function(e, t, n) {
        e.exports = {
            component: "section-container-component",
            darkMode: "section-container-darkMode",
            visible: "section-container-visible"
        }
    },
    1092: function(e, t, n) {
        e.exports = {
            component: "section-content-component"
        }
    },
    1093: function(e, t, n) {
        e.exports = {
            component: "section-highlight-component",
            darkMode: "section-highlight-darkMode"
        }
    },
    1094: function(e, t, n) {
        e.exports = {
            component: "section-link-component",
            name: "section-link-name",
            icon: "section-link-icon",
            chevron: "section-link-chevron",
            darkMode: "section-link-darkMode",
            "header-count": "section-link-header-count",
            "with-avatar": "section-link-with-avatar",
            avatar: "section-link-avatar",
            counter: "section-link-counter"
        }
    },
    1095: function(e, t, n) {
        e.exports = {
            component: "section-row-component",
            border: "section-row-border",
            left: "section-row-left"
        }
    },
    1096: function(e, t, n) {
        e.exports = {
            component: "section-title-dismissible-component",
            icon: "section-title-dismissible-icon",
            name: "section-title-dismissible-name"
        }
    },
    1097: function(e, t, n) {
        e.exports = {
            component: "section-title-component",
            icon: "section-title-icon",
            name: "section-title-name"
        }
    },
    1098: function(e, t, n) {
        e.exports = {
            component: "user-tagline-component",
            username: "user-tagline-username",
            rating: "user-tagline-rating",
            darkMode: "user-tagline-darkMode"
        }
    },
    1099: function(e, t, n) {
        e.exports = {
            component: "user-status-component",
            online: "user-status-online",
            onlive: "user-status-onlive",
            darkMode: "user-status-darkMode",
            big: "user-status-big"
        }
    },
    11: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "e", (function() {
            return i
        })), n.d(t, "f", (function() {
            return s
        })), n.d(t, "g", (function() {
            return c
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "c", (function() {
            return u
        }));
        var r = n(0),
            a = 4e3,
            o = {
                badRequest: r.a.trans("Oops. Looks like there was an error. Sorry! Please refresh.")
            },
            i = {
                avatarUploaded: r.a.trans("Avatar uploaded"),
                commentCreated: r.a.trans("Thank you for your comment."),
                commentDeleted: r.a.trans("Comment deleted."),
                commentEmptyContent: r.a.trans("You cannot send an empty comment"),
                commentMarkedAsSpam: r.a.trans("Comment marked as spam."),
                commentUpdated: r.a.trans("Comment updated."),
                commentLinkCopied: r.a.trans("Comment link is copied to clipboard"),
                copied: r.a.trans("Copied to clipboard"),
                forumsMarkedAsRead: r.a.trans("All forum topics have been marked as read"),
                featureBlog: r.a.trans("Feature Set! It might take a minute or two to appear."),
                pgnCopied: r.a.trans("PGN copied to buffer")
            },
            s = {
                ALERT_FLASH_CONTAINER: "widget-alert-flash",
                DISMISSING: "alert-banner-dismissing"
            },
            c = {
                error: "error",
                info: "info",
                success: "success"
            },
            l = "create-header-alert",
            u = {
                type: c.error,
                message: o.badRequest
            }
    },
    110: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var r = n(22),
            a = function registerModules(e) {
                Object.keys(e).forEach((function(t) {
                    var n = e[t];
                    r.default.state && r.default.state[t] || r.default.registerModule(t, n)
                }))
            }
    },
    1100: function(e, t, n) {
        e.exports = {
            component: "membership-component",
            "level-30": "membership-level-30",
            gold: "membership-gold",
            "level-40": "membership-level-40",
            platinum: "membership-platinum",
            "level-50": "membership-level-50",
            diamond: "membership-diamond",
            "level-90": "membership-level-90",
            staff: "membership-staff",
            "level-80": "membership-level-80",
            mod: "membership-mod",
            moderator: "membership-moderator",
            "level-5": "membership-level-5",
            "level-8": "membership-level-8",
            cheater: "membership-cheater",
            unspecifiedClosed: "membership-unspecifiedClosed",
            "level-6": "membership-level-6",
            abuser: "membership-abuser",
            "level-7": "membership-level-7",
            voluntarilyClosed: "membership-voluntarilyClosed",
            "level-10": "membership-level-10",
            basic: "membership-basic",
            level: "membership-level",
            middle: "membership-middle",
            large: "membership-large",
            responsive: "membership-responsive",
            "x-large": "membership-x-large"
        }
    },
    1101: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(146);
        window.addEventListener("message", (function(e) {
            var t = e.data;
            (null == t ? void 0 : t.key) === r.b.CHAT_LOAD_USER_POPOVER_BUNDLE && n.e(16).then(n.bind(null, 1200))
        }))
    },
    1102: function(e, t) {
        var n = document.getElementsByClassName("img-defer");
        if (n.length > 0) {
            window.addEventListener("load", (function setupImageDefer() {
                window.loadEventFired = !0, window.removeEventListener("load", setupImageDefer);
                for (var e = new IntersectionObserver((function(t) {
                        t.forEach((function(t) {
                            if (t.intersectionRatio > 0) {
                                var n = t.target;
                                n.classList.contains("img-defer") && function handleImageDefer(e) {
                                    var t = e.getAttribute("data-src"),
                                        n = e.getAttribute("data-srcset");
                                    t && e.setAttribute("src", t), n && e.setAttribute("srcset", n), (t || n) && (e.classList.remove("img-defer"), e.classList.remove("img-defer-placeholder"))
                                }(n), e.unobserve(n)
                            }
                        }))
                    }), {
                        rootMargin: "50px 0px",
                        threshold: .01
                    }), t = n.length - 1; t >= 0; t -= 1)
                    e.observe(n[t])
            }))
        }
    },
    1103: function(e, t) {
        var n = document.getElementsByClassName("video-defer");
        if (n.length > 0) {
            window.addEventListener("load", (function setupVideoDefer() {
                window.loadEventFired = !0, window.removeEventListener("load", setupVideoDefer);
                var e = function handleVideoDefer(e) {
                    var t = e.getAttribute("data-src");
                    t && (e.setAttribute("src", t), e.classList.remove("video-defer", "video-defer-placeholder"))
                };
                if (window.IntersectionObserver)
                    for (var t = new IntersectionObserver((function(n) {
                            n.forEach((function(n) {
                                if (n.intersectionRatio > 0) {
                                    var r = n.target;
                                    r.classList.contains("video-defer") && e(r), t.unobserve(r)
                                }
                            }))
                        }), {
                            rootMargin: "100px 0px",
                            threshold: .01
                        }), r = n.length - 1; r >= 0; r -= 1)
                        t.observe(n[r]);
                else
                    Array.from(n).forEach(e)
            }), {
                once: !0
            })
        }
    },
    1104: function(e, t) {
        window.addEventListener("load", (function loadLazyScripts() {
            var e = Array.from(document.querySelectorAll("script[data-src]"));
            window.loadEventFired = !0, window.removeEventListener("load", loadLazyScripts), e.forEach((function(e) {
                !function loadSingleScript(e) {
                    var t = document.createElement("script");
                    t.setAttribute("src", e), t.defer = !0, document.body.appendChild(t)
                }(e.getAttribute("data-src")), e.parentNode.removeChild(e)
            }))
        }), {
            once: !0
        })
    },
    1105: function(e, t, n) {
        e.exports = {
            component: "breadcrumbs-component",
            item: "breadcrumbs-item",
            link: "breadcrumbs-link"
        }
    },
    1106: function(e, t, n) {},
    1107: function(e, t, n) {
        e.exports = {
            content: "membership-players-content",
            player: "membership-players-player",
            "player-details": "membership-players-player-details",
            fullname: "membership-players-fullname",
            "user-rating": "membership-players-user-rating"
        }
    },
    1108: function(e, t, n) {
        e.exports = {
            "content-ad-wrapper": "post-content-ad-wrapper",
            "btn-upload-input": "post-btn-upload-input",
            header: "post-header",
            form: "post-form",
            "time-wrapper": "post-time-wrapper",
            "time-wrapper-minute": "post-time-wrapper-minute",
            "upload-preview": "post-upload-preview",
            "upload-input": "post-upload-input",
            "upload-small": "post-upload-small",
            "tinymce-editor": "post-tinymce-editor",
            buttons: "post-buttons",
            "form-button-large": "post-form-button-large",
            "datepicker-icon": "post-datepicker-icon",
            "url-wrapper": "post-url-wrapper",
            "url-label": "post-url-label",
            "url-link": "post-url-link",
            "url-link-disabled": "post-url-link-disabled",
            "url-field": "post-url-field",
            "url-edit": "post-url-edit",
            "can-edit-url": "post-can-edit-url",
            "url-permalink": "post-url-permalink",
            "datepicker-component": "post-datepicker-component",
            "caption-wrapper": "post-caption-wrapper",
            caption: "post-caption",
            "upload-small-caption": "post-upload-small-caption",
            row: "post-row",
            "create-form": "post-create-form",
            "form-upload": "post-form-upload",
            "caption-blog-wrapper": "post-caption-blog-wrapper",
            "row-label": "post-row-label",
            "row-field": "post-row-field",
            "caption-input": "post-caption-input",
            "help-text": "post-help-text",
            checkbox: "post-checkbox"
        }
    },
    1109: function(e, t, n) {
        e.exports = {
            component: "post-author-custom-component",
            edit: "post-author-custom-edit",
            icon: "post-author-custom-icon"
        }
    },
    1110: function(e, t, n) {
        e.exports = {
            icon: "post-author-follow-icon"
        }
    },
    1111: function(e, t, n) {
        e.exports = {
            component: "post-author-small-component",
            header: "post-author-small-header",
            avatar: "post-author-small-avatar",
            thumbnail: "post-author-small-thumbnail",
            author: "post-author-small-author",
            details: "post-author-small-details",
            user: "post-author-small-user",
            title: "post-author-small-title",
            username: "post-author-small-username",
            membership: "post-author-small-membership",
            name: "post-author-small-name",
            location: "post-author-small-location",
            follow: "post-author-small-follow"
        }
    },
    1112: function(e, t, n) {
        e.exports = {
            component: "post-category-header-component",
            title: "post-category-header-title",
            subtitle: "post-category-header-subtitle",
            "subtitle-small": "post-category-header-subtitle-small"
        }
    },
    1113: function(e, t, n) {
        e.exports = {
            component: "post-category-link-component",
            category: "post-category-link-category",
            darkMode: "post-category-link-darkMode",
            badge: "post-category-link-badge",
            tip: "post-category-link-tip"
        }
    },
    1114: function(e, t, n) {
        e.exports = {
            component: "post-category-preview-component",
            image: "post-category-preview-image",
            thumbnail: "post-category-preview-thumbnail",
            right: "post-category-preview-right",
            header: "post-category-preview-header",
            title: "post-category-preview-title",
            static: "post-category-preview-static",
            draft: "post-category-preview-draft",
            scheduled: "post-category-preview-scheduled",
            meta: "post-category-preview-meta",
            excerpt: "post-category-preview-excerpt",
            "move-list": "post-category-preview-move-list",
            "game-preview": "post-category-preview-game-preview",
            "image-icon": "post-category-preview-image-icon",
            "image-small": "post-category-preview-image-small"
        }
    },
    1115: function(e, t, n) {
        e.exports = {
            component: "post-load-more-component",
            title: "post-load-more-title",
            icon: "post-load-more-icon"
        }
    },
    1116: function(e, t, n) {
        e.exports = {
            component: "post-preview-list-component"
        }
    },
    1117: function(e, t, n) {
        e.exports = {
            component: "post-preview-meta-component",
            title: "post-preview-meta-title",
            username: "post-preview-meta-username",
            time: "post-preview-meta-time",
            views: "post-preview-meta-views",
            comments: "post-preview-meta-comments",
            separator: "post-preview-meta-separator",
            icon: "post-preview-meta-icon",
            content: "post-preview-meta-content",
            category: "post-preview-meta-category"
        }
    },
    1118: function(e, t, n) {
        e.exports = {
            component: "post-preview-component",
            image: "post-preview-image",
            thumbnail: "post-preview-thumbnail",
            draft: "post-preview-draft",
            scheduled: "post-preview-scheduled",
            titlecontainer: "post-preview-titlecontainer",
            title: "post-preview-title",
            static: "post-preview-static",
            meta: "post-preview-meta",
            excerpt: "post-preview-excerpt",
            "whole-text": "post-preview-whole-text",
            "image-icon": "post-preview-image-icon",
            "video-time": "post-preview-video-time",
            "video-time-icon": "post-preview-video-time-icon",
            headline: "post-preview-headline",
            watched: "post-preview-watched"
        }
    },
    1119: function(e, t, n) {
        e.exports = {
            component: "post-view-meta-component",
            avatar: "post-view-meta-avatar",
            image: "post-view-meta-image",
            details: "post-view-meta-details",
            user: "post-view-meta-user",
            title: "post-view-meta-title",
            username: "post-view-meta-username",
            membership: "post-view-meta-membership",
            category: "post-view-meta-category",
            "club-admin": "post-view-meta-club-admin",
            rating: "post-view-meta-rating",
            stats: "post-view-meta-stats",
            separator: "post-view-meta-separator",
            icon: "post-view-meta-icon",
            dropdown: "post-view-meta-dropdown"
        }
    },
    1120: function(e, t, n) {
        e.exports = {
            component: "post-view-more-component",
            author: "post-view-more-author",
            title: "post-view-more-title",
            username: "post-view-more-username",
            posts: "post-view-more-posts",
            post: "post-view-more-post",
            image: "post-view-more-image",
            thumbnail: "post-view-more-thumbnail"
        }
    },
    1121: function(e, t, n) {
        e.exports = {
            component: "post-view-translation-helper-component"
        }
    },
    1122: function(e, t, n) {
        e.exports = {
            image: "post-view-image",
            caption: "post-view-caption",
            thumbnail: "post-view-thumbnail",
            title: "post-view-title",
            about: "post-view-about",
            "language-wrapper": "post-view-language-wrapper",
            languages: "post-view-languages",
            content: "post-view-content",
            "premium-box": "post-view-premium-box",
            "premium-login": "post-view-premium-login",
            component: "post-view-component"
        }
    },
    1123: function(e, t, n) {
        e.exports = {
            wrapper: "toggle-content-wrapper",
            button: "toggle-content-button",
            icon: "toggle-content-icon",
            "icon-up": "toggle-content-icon-up"
        }
    },
    1180: function(e, t, n) {
        "use strict";
        n.r(t);
        n(1077);
        var r = {
                productionTip: !1
            },
            a = n(26),
            o = n(103);
        Object.keys(r).forEach((function(e) {
            a.default.config[e] = r[e]
        })), a.default.mixin(o.a);
        var i = n(11),
            s = (n(291), function animateAlert(e, t) {
                var n = document.getElementById("alert-".concat(e));
                n && n.classList.add(i.f.DISMISSING), setTimeout((function() {
                    t()
                }), 200)
            });
        var c = function createAlert(e, t) {
                return {
                    id: Math.floor(Math.random() * Math.floor(512)),
                    message: t,
                    type: e
                }
            },
            l = function autoDismissAlert(e, t) {
                var n = e.type,
                    r = e.id,
                    a = e.timeout,
                    o = void 0 === a ? i.a : a;
                [i.g.success, i.g.info].includes(n) && setTimeout((function() {
                    s(r, (function() {
                        t("dismiss", r)
                    }))
                }), o)
            },
            u = {
                namespaced: !0,
                actions: {
                    create: function create(e, t) {
                        var n = e.commit,
                            r = t.message,
                            a = t.type;
                        if (null != r && 0 !== r.length) {
                            var o = c(a, r);
                            n("create", o), l(o, n)
                        }
                    },
                    createAll: function createAll(e, t) {
                        var n = e.commit,
                            r = t.map((function(e) {
                                var t = c(e.type, e.message);
                                return l(t, n), t
                            }));
                        n("createAll", r)
                    }
                },
                mutations: {
                    create: function create(e, t) {
                        e.alerts.push(t)
                    },
                    createAll: function createAll(e, t) {
                        e.alerts = e.alerts.concat(t)
                    },
                    dismiss: function dismiss(e, t) {
                        e.alerts = e.alerts.filter((function(e) {
                            return e.id !== t
                        }))
                    },
                    dismissAll: function dismissAll(e) {
                        e.alerts.length = 0
                    }
                },
                state: {
                    alerts: []
                }
            },
            d = n(22),
            p = n(245);
        d.default.registerModule("user", p.a), p.a.state.isLoggedIn && d.default.dispatch("user/getAdditionaUserInfoFromDb"), d.default.registerModule("alerts", u);
        var b = n(309),
            m = n.n(b),
            g = n(60),
            f = n.n(g),
            h = n(1),
            _ = n.n(h),
            v = n(87),
            w = n(50),
            y = n(21),
            k = n(357),
            O = n(59),
            E = n(16),
            S = n(44),
            A = {
                name: "template-alert-banner",
                components: {
                    IconFont: E.a,
                    formButton: S.a
                },
                inheritAttrs: !1,
                props: {
                    alert: {
                        type: Object,
                        required: !0,
                        validator: function validator(e) {
                            return !!e.id && (!("string" != typeof e.message || e.message.length < 1) && Object.keys(i.g).some((function(t) {
                                    return i.g[t] === e.type
                                })))
                        }
                    },
                    dismiss: {
                        type: Function,
                        required: !0
                    },
                    action: {
                        type: Object,
                        validator: function validator(e) {
                            return !("string" != typeof e.text || e.text.length < 1) && (!("string" != typeof e.theme || e.theme.length < 1) && "function" == typeof e.handler)
                        }
                    }
                },
                computed: {
                    cache: function cache() {
                        return Math.floor(100 * Math.random() * 1e3 * 1e3 * 1e3)
                    },
                    convertMessageToPath: function convertMessageToPath() {
                        return encodeURI(this.untranslatedMessage)
                    },
                    path: function path() {
                        var e = Object(O.a)("bundles/web/images/clear.gif");
                        return "".concat(e, "?msg=").concat(this.convertMessageToPath, "&flashCount=").concat(this.alert.flashCount, "&cachebust=").concat(this.cache)
                    },
                    untranslatedMessage: function untranslatedMessage() {
                        return Object(k.c)(this.alert.message)
                    }
                },
                methods: {
                    removeAlert: function removeAlert() {
                        var e = this;
                        s(this.alert.id, (function() {
                            e.dismiss(e.alert.id)
                        }))
                    }
                }
            },
            C = n(1002),
            T = n(3);
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                    _()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var x = {
                name: "alert-flash",
                components: {
                    AlertBanner: Object(T.a)(A, (function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                            class: [e.$style.component, e.$style[e.alert.type]],
                            attrs: {
                                id: "alert-" + e.alert.id
                            }
                        }, [n("span", {
                            class: e.$style.message,
                            domProps: {
                                innerHTML: e._s(e.alert.message)
                            }
                        }), e._v(" "), e.action ? n("form-button", {
                            attrs: {
                                size: "small",
                                type: "button",
                                theme: e.action.theme
                            },
                            on: {
                                click: e.action.handler
                            }
                        }, [e._v("\n    " + e._s(e.action.text) + "\n  ")]) : e._e(), e._v(" "), n("button", {
                            class: e.$style.close,
                            attrs: {
                                type: "button"
                            },
                            on: {
                                click: e.removeAlert
                            }
                        }, [n("icon-font", {
                            attrs: {
                                name: "x"
                            }
                        })], 1), e._v(" "), e.alert.flashCount ? n("img", {
                            class: e.$style["log-image"],
                            attrs: {
                                src: e.path
                            }
                        }) : e._e()], 1)
                    }), [], !1, (function injectStyles(e) {
                        this.$style = C.default.locals || C.default
                    }), null, null).exports
                },
                inheritAttrs: !1,
                data: function data() {
                    return {
                        errors: {},
                        indent: 0,
                        sidebar: document.querySelector(v.f.MAIN_NAV)
                    }
                },
                computed: _objectSpread({}, Object(y.mapState)("alerts", ["alerts"]), {
                    alertStyle: function alertStyle() {
                        return Object(w.a)() ? {
                            right: this.indent
                        } : {
                            left: this.indent
                        }
                    }
                }),
                watch: {
                    alerts: function alerts(e) {
                        var t = this;
                        e.forEach((function(e, n) {
                            if (e && e.message) {
                                var r = e.id + e.message,
                                    a = e.type === i.g.error && !t.errors[r];
                                if (e.flashCount = null, a) {
                                    var o = t.alerts[n + 1],
                                        s = !o || o.message !== e.message;
                                    t.errors[r] = !0, s && (e.flashCount = Object.keys(t.errors).length)
                                }
                            }
                        }))
                    }
                },
                created: function created() {
                    var e = this;
                    window.addEventListener("message", (function(t) {
                        var n = t.data;
                        if ("object" === f()(n) && n.key === i.d) {
                            n.key;
                            var r = m()(n, ["key"]);
                            e.$store.dispatch("alerts/create", r)
                        }
                    }))
                },
                mounted: function mounted() {
                    var e = this;
                    this.sidebar && (window.addEventListener("resize", (function() {
                        e.changeIndent()
                    })), this.changeIndent(), this.observer = new MutationObserver((function(t) {
                        t.forEach((function() {
                            e.$nextTick((function() {
                                e.changeIndent()
                            }))
                        }))
                    })), this.observer.observe(this.sidebar, {
                        attributeFilter: ["class"],
                        attributeOldValue: !0,
                        attributes: !0
                    }))
                },
                beforeDestroy: function beforeDestroy() {
                    this.observer.disconnect()
                },
                methods: _objectSpread({}, Object(y.mapMutations)("alerts", ["dismiss"]), {
                    changeIndent: function changeIndent() {
                        var e = this.sidebar.classList;
                        this.indent = "".concat(v.e.MOBILE, "px"), window.innerWidth >= v.d.MOBILE_WIDTH && (this.indent = "".concat(v.e.DEFAULT, "px"), e.contains(v.b.WIDE) && !e.contains(v.b.COLLAPSED) && (this.indent = "".concat(v.e.WIDE, "px")), e.contains(v.b.COLLAPSED) && (this.indent = "".concat(v.e.COLLAPSED, "px")))
                    }
                })
            },
            j = n(1003);
        var M = Object(T.a)(x, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: e.$style.component,
                    style: e.alertStyle
                }, e._l(e.alerts, (function(t) {
                    return n("alert-banner", e._b({
                        key: t.id,
                        class: e.$style.alert,
                        attrs: {
                            alert: t,
                            dismiss: e.dismiss
                        }
                    }, "alert-banner", e.$attrs, !1))
                })), 1)
            }), [], !1, (function alert_flash_injectStyles(e) {
                this.$style = j.default.locals || j.default
            }), null, null).exports,
            I = document.getElementById(i.f.ALERT_FLASH_CONTAINER);
        null != I && null != I.getAttribute("twig-alerts") && d.default.dispatch("alerts/createAll", JSON.parse(I.getAttribute("twig-alerts")));
        new a.default({
            el: "#".concat(i.f.ALERT_FLASH_CONTAINER),
            store: d.default,
            render: function render(e) {
                return e(M)
            }
        });
        var L = "SHOW_USER_POPOVER",
            R = n(30),
            U = n(193);
        window.addEventListener("message", (function(e) {
            var t = e.data;
            if ("object" === f()(t)) {
                var n = t.key,
                    r = m()(t, ["key"]);
                if (n === L) {
                    var a = r.target,
                        o = r.username;
                    U.b.createInstance("userPopover"), R.a.$emit("userPopover/show", {
                        username: o
                    }, document.getElementById(a))
                }
            }
        }));
        var P = n(51),
            F = n(6),
            D = n(84),
            N = n(24),
            $ = Object(P.c)(F.f.TOOLTIP),
            B = Object(P.e)(F.f.BOARD_POPOVER);
        document.addEventListener("DOMContentLoaded", (function() {
            var e;
            null != $ && 0 === B.length && (e = F.f.TOOLTIP, Object(D.a)(".".concat(e), {
                directives: {
                    Tooltip: N.a
                }
            }))
        }))
    },
    1194: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(351),
            a = n(90),
            o = n(89),
            i = "serviceWorker" in navigator && "PushManager" in window,
            s = navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey"),
            c = Object(a.a)(o.a.FIREBASE_SUPPORT) ? s : i,
            l = n(38),
            u = n(30),
            d = function initDialog() {
                Promise.all([n.e(36), n.e(32)]).then(n.bind(null, 1224)).then((function(e) {
                    return e.default.createInstance(r.d.NOTIFICATIONS_REQUEST)
                })).then((function() {
                    return u.a.$emit(r.b.SHOW_CUSTOM_REQUEST)
                }))
            };
        document.addEventListener("DOMContentLoaded", (function() {
            var e = document.querySelector(r.d.ENABLE_NOTIFICATIONS),
                t = document.querySelector(r.d.ENABLE_NOTIFICATIONS_MESSAGE);
            if (c) {
                var n = r.c && r.c.length > 0 ? r.c[r.c.length - 1] : null;
                if (Object(l.f)() && !r.c && d(), r.c && r.c.length > 0 && r.c.length < r.a.MAX_REQUESTS) {
                    var a = Date.now() - 2592e6,
                        o = 1e3 * n.timestamp;
                    n && !n.allowed && o < a && d()
                }
                e && n && !n.allowed && e.addEventListener("click", (function(e) {
                    e.preventDefault(), d()
                }))
            } else
                t && t.remove()
        }))
    },
    121: function(e, t, n) {
        "use strict";
        (function(e) {
            var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
            t.a = n
        }).call(this, n(189))
    },
    125: function(e, t, n) {
        "use strict";
        var r = n(8),
            a = n(1),
            o = n.n(a),
            i = "chessComAppState",
            s = n(48);
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                    o()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var c = ["id", "enabled", "allowMarkings", "captureKeyStrokes", "fadeSetup", "fetched", "flipBoard", "highlightColor", "highlightOpacity", "overlayInAnalysisMode"],
            l = {
                getBoardOptions: function getBoardOptions() {
                    var e = JSON.parse(s.default.get(i)),
                        t = Object.assign({}, e && e.board && e.board.boardOptions);
                    return c.forEach((function(e) {
                        delete t[e]
                    })), t
                },
                setBoardOptions: function setBoardOptions(e) {
                    var t = JSON.parse(s.default.get(i));
                    t && t.board && t.board.boardOptions ? Object.assign(t.board.boardOptions, _objectSpread({}, e)) : t = {
                        board: {
                            boardOptions: _objectSpread({}, e)
                        }
                    };
                    c.forEach((function(e) {
                        delete t.board.boardOptions[e]
                    })), s.default.set(i, JSON.stringify(t))
                }
            };
        var u = n(138),
            d = n.n(u),
            p = n(28);
        function createApproveFriendRequest(e) {
            return function approveFriendRequest(t) {
                var n = e.actionQueue,
                    r = e.http,
                    a = e.Router;
                return n.add(r.put, a.generate("web_friend_accept_request_callback", {
                    requestor: t
                }))
            }
        }
        function createAddFriend(e) {
            return function addFriend(t) {
                var n = e.actionQueue,
                    r = e.http,
                    a = e.Router;
                return n.add(r.post, a.generate("web_friend_request_callback", {
                    friend: t
                }))
            }
        }
        function createBlockUser(e) {
            return function blockUser(t) {
                var n = e.actionQueue,
                    r = e.CSRFToken,
                    a = e.http,
                    o = e.Router;
                return n.add(a.post, o.generate("web_member_callback_block_member", {
                    username: t
                }), {
                    _token: r
                })
            }
        }
        function createCancelFriendRequest(e) {
            return function cancelFriendRequest(t) {
                var n = e.actionQueue,
                    r = e.http,
                    a = e.Router;
                return n.add(r.post, a.generate("web_friend_cancel_request_callback", {
                    receiver: t
                }))
            }
        }
        function createCheckMembershipStatus(e) {
            return function checkMembershipStatus(t) {
                var n = e.membership,
                    r = e.service,
                    a = e.user;
                if (!r.isLoggedIn())
                    return !1;
                var o = !1;
                switch (t) {
                case "isActivated":
                    o = a.isActivated;
                    break;
                case "isStaff":
                    o = a.membershipLevel >= n.staff;
                    break;
                case "isStaffOnly":
                    o = a.membershipLevel === n.staff;
                    break;
                case "isModerator":
                    o = a.membershipLevel >= n.moderator;
                    break;
                case "isModeratorOnly":
                    o = a.membershipLevel === n.moderator;
                    break;
                case "isDiamond":
                    o = a.membershipLevel >= n.diamond;
                    break;
                case "isDiamondOnly":
                    o = a.membershipLevel === n.diamond;
                    break;
                case "isPlatinum":
                    o = a.membershipLevel >= n.platinum;
                    break;
                case "isPlatinumOnly":
                    o = a.membershipLevel === n.platinum;
                    break;
                case "isSilver":
                    o = a.membershipLevel >= n.silver;
                    break;
                case "isSilverOnly":
                    o = a.membershipLevel === n.silver;
                    break;
                case "isGold":
                    o = a.membershipLevel >= n.gold;
                    break;
                case "isGoldOnly":
                    o = a.membershipLevel === n.gold;
                    break;
                case "isPremium":
                    o = a.membershipLevel >= n.silver;
                    break;
                case "isBasic":
                    o = a.membershipLevel === n.basic;
                    break;
                default:
                    o = !1
                }
                return o
            }
        }
        function createCheckValidUsername(e) {
            return function checkValidUsername(t) {
                var n = e.http,
                    r = e.Router;
                return n.get(r.generate("web_user_callback_valid_username", {
                    username: t
                }))
            }
        }
        function createDeclineFriendRequest(e) {
            return function declineFriendRequest(t) {
                var n = e.actionQueue,
                    r = e.http,
                    a = e.Router;
                return n.add(r.post, a.generate("web_friend_decline_request_callback", {
                    requestor: t
                }))
            }
        }
        function createDeleteFriend(e) {
            return function deleteFriend(t) {
                var n = e.actionQueue,
                    r = e.http,
                    a = e.Router;
                return n.add(r.delete, a.generate("web_friend_delete_callback", {
                    friend: t
                }))
            }
        }
        function createDismissFollowSuggestion(e) {
            return function dismissFollowSuggestion(t) {
                var n = e.actionQueue,
                    r = e.http,
                    a = e.Router;
                return n.add(r.post, a.generate("web_user_callback_dismiss_follow_suggestion", {
                    username: t
                }))
            }
        }
        function createEligibleFirstTrial(e) {
            return function EligibleFirstTrial() {
                var t = e.service,
                    n = e.user;
                return t.isLoggedIn() && n.eligibleFirstTrial
            }
        }
        var b = n(242);
        function getDefaultBoardOptions() {
            return {
                animationType: "default",
                boardSize: "auto",
                boardStyle: "green",
                coordinates: "inside",
                darkMode: !0,
                highlightLegalMoves: !0,
                highlightMoves: !0,
                isWhiteOnBottom: !1,
                moveListDisplayType: "text",
                moveMethod: "drag",
                pieceStyle: "neo",
                playSounds: !0,
                soundTheme: "default"
            }
        }
        var m = n(74);
        function createFetchBoardOptions(e) {
            return function fetchBoardOptions() {
                var t = e.http,
                    n = e.Router;
                return Object(m.a)() ? Promise.resolve() : t.get(n.generate("web_user_callback_get_board_settings")).then(formatResponse).catch(getDefaultBoardOptions)
            }
        }
        function formatResponse(e) {
            var t,
                n,
                r = e.data,
                a = r.animationType,
                o = r.boardCoords,
                i = r.boardSize,
                s = r.colorScheme,
                c = r.darkMode,
                l = r.highlightLegalMoves,
                u = r.highlightMoves,
                d = r.isWhiteOnBottom,
                p = r.moveListDisplayType,
                b = r.moveMethod,
                m = r.pieceStyle,
                g = r.playSounds,
                f = r.soundTheme;
            return {
                animationType: (n = a, "battle" === n ? "default" : n),
                boardSize: i,
                boardStyle: s,
                coordinates: (t = o, ["off", "inside", "outside"][parseInt(t, 10)]),
                darkMode: c,
                highlightLegalMoves: "1" === l,
                highlightMoves: "1" === u,
                isWhiteOnBottom: d,
                moveListDisplayType: p,
                moveMethod: b,
                pieceStyle: m,
                playSounds: "1" === g,
                soundTheme: f
            }
        }
        function createFetchReportReasonsData(e) {
            return function fetchReportReasonsData() {
                var t = e.http,
                    n = e.Router;
                return t.get(n.generate("web_user_callback_report_reasons"))
            }
        }
        function createGet(e) {
            return function get(t) {
                var n = e.user;
                return n ? t ? n[t] : n : null
            }
        }
        function createGetAvatar(e) {
            return function getAvatar(t) {
                var n = e.http,
                    r = e.Router;
                return n.get(r.generate("pubapi_player_profile", {
                    username: t
                }))
            }
        }
        function createGetFollowSuggestions(e) {
            return function getFollowSuggestions() {
                var t = e.http,
                    n = e.Router;
                return t.get(n.generate("web_user_callback_follow_suggestions"))
            }
        }
        function createGetFriends(e) {
            return function getFriends(t) {
                var n = e.http,
                    r = e.Router;
                return n.get(r.generate("web_friend_callback_friends_search", t))
            }
        }
        function createGetOpponents(e) {
            return function getOpponents() {
                var t = e.http,
                    n = e.Router;
                return t.get(n.generate("web_user_callback_recent_opponents"))
            }
        }
        function createIsLoggedIn(e) {
            return function isLoggedIn() {
                var t = e.is2FARoute,
                    n = e.user;
                return n && n.id && !t()
            }
        }
        function createIsEnabled(e) {
            return function isEnabled() {
                var t = e.service,
                    n = e.user;
                return t.isLoggedIn() && n.isEnabled
            }
        }
        function createIsImpersonating(e) {
            return function isImpersonating() {
                var t = e.service,
                    n = e.user;
                return t.isLoggedIn() && n.isImpersonating
            }
        }
        function createGenerateProfileLink(e) {
            return function generateProfileLink(t) {
                var n = e.Router;
                return t ? '<a href="'.concat(n.generate("web_member_view", {
                    username: t
                }), '" target="_self">').concat(t, "</a>") : ""
            }
        }
        var g = function getPromises() {
                return window.chesscom.promises || (window.chesscom.promises = {}), window.chesscom.promises
            },
            f = n(38);
        function createGetRoles(e) {
            return function getRoles() {
                var t = e.http,
                    n = e.Router;
                return Object(f.f)() ? function execAndCache(e) {
                    var t = e.id,
                        n = e.promise,
                        r = g();
                    return r[t] || (r[t] = new Promise((function(e, t) {
                        n().then(e).catch(t)
                    }))), r[t]
                }({
                    id: r.o.FETCH_ROLES,
                    promise: function promise() {
                        return t.get(n.generate("web_security_callback_user_roles"))
                    }
                }) : []
            }
        }
        function createGetUser(e) {
            return function getUser(t) {
                var n = e.http,
                    r = e.Router;
                return n.get(r.generate("web_user_callback_popup", {
                    username: t
                }))
            }
        }
        var h = n(243);
        function createReportUser(e) {
            return function reportUser(t) {
                var n = e.callbacks,
                    r = e.http,
                    a = e.Router;
                return r.post(a.generate(n.REPORT_USER), {
                    abuser_username: t.username,
                    reason_id: t.picked,
                    other_reason: t.otherReason,
                    block_user: t.blockUser,
                    reporter_url: window.location.href
                })
            }
        }
        var _ = {
                animationType: "web_user_game_settings_email_callback_animation_type",
                boardStyle: "web_user_game_settings_email_callback_board_color",
                coordinates: "web_user_game_settings_email_callback_coordinates",
                darkMode: "web_user_game_settings_callback_dark_mode_toggle",
                highlightLegalMoves: "web_user_game_settings_email_callback_show_legal_moves_toggle",
                highlightMoves: "web_user_game_settings_email_callback_highlight_last_move_toggle",
                moveListDisplayType: "web_user_game_settings_email_callback_move_list_display_type",
                pieceStyle: "web_user_game_settings_email_callback_piece",
                playSounds: "web_user_game_settings_email_callback_sound_toggle",
                soundTheme: "web_user_game_settings_email_callback_sound_theme"
            },
            v = {
                coordinates: function coordinates(e) {
                    return ["off", "inside", "outside"].indexOf(e)
                }
            };
        function save_board_setting_ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        function createSaveBoardSetting(e) {
            return function saveBoardSetting(t, n) {
                var r = e.actionQueue,
                    a = e.emitUser,
                    i = e.http,
                    s = e.Router,
                    c = e.service,
                    l = (0, e.update)("boardOptions", function save_board_setting_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? save_board_setting_ownKeys(Object(n), !0).forEach((function(t) {
                                o()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : save_board_setting_ownKeys(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, c.get().boardOptions, o()({}, t, n))),
                    u = n;
                return v[t] && (u = v[t](n)), r.add(i.post, s.generate(_[t]), {
                    action: u
                }).then(a).catch((function() {
                    l(), a()
                }))
            }
        }
        function createSearchUsername(e) {
            return function searchUsername(t) {
                var n = e.http,
                    r = e.routes;
                return n.get(r.usernameSearch({
                    query: t
                }))
            }
        }
        function createSet(e) {
            return function set(t, n) {
                var r = e.user;
                return r ? (r[t] = n, r) : null
            }
        }
        function createSetArchiveView(e) {
            return function setArchiveView(t) {
                var n = e.emitUser,
                    r = e.http,
                    a = e.Router,
                    o = (0, e.update)("archiveView", t);
                return r.post(a.generate("web_user_callback_set_archive_view"), {
                    archiveView: t
                }).then(n).catch((function() {
                    o(), n()
                }))
            }
        }
        function createSetFairPlayAgree(e) {
            return function setFairPlayAgree(t) {
                var n = e.emitUser,
                    r = e.http,
                    a = e.Router,
                    o = (0, e.update)("fairPlayAgree", t);
                return r.post(a.generate("web_user_callback_set_fair_play_agree", {
                    fairPlayAgree: t ? 1 : 0
                })).then(n).catch((function() {
                    o(), n()
                }))
            }
        }
        function createSetHomeContentType(e) {
            return function setHomeContentType(t) {
                var n = e.emitUser,
                    r = e.http,
                    a = e.Router,
                    o = (0, e.update)("homeContentType", t);
                return r.post(a.generate("web_user_callback_set_home_recent_content_type"), {
                    recentContentType: t
                }).then(n).catch((function() {
                    o(), n()
                }))
            }
        }
        function createSetShowAlertsOnHome(e) {
            return function setShowAlertsOnHome(t) {
                var n = e.emitUser,
                    r = e.http,
                    a = e.Router,
                    o = (0, e.update)("showAlertsOnHome", t);
                return r.post(a.generate("web_user_callback_set_show_alerts_on_home"), {
                    showAlertsOnHome: t
                }).then(n).catch((function() {
                    o(), n()
                }))
            }
        }
        function createTrackUser(e) {
            return function trackUser(t) {
                var n = e.actionQueue,
                    r = e.CSRFToken,
                    a = e.http,
                    o = e.Router;
                return n.add(a.post, o.generate("web_member_callback_track_member", {
                    username: t
                }), {
                    _token: r
                })
            }
        }
        function createUnblockUser(e) {
            return function unblockUser(t) {
                var n = e.actionQueue,
                    r = e.CSRFToken,
                    a = e.http,
                    o = e.Router;
                return n.add(a.post, o.generate("web_member_callback_unblock_member", {
                    username: t
                }), {
                    _token: r
                })
            }
        }
        function createUntrackUser(e) {
            return function untrackUser(t) {
                var n = e.actionQueue,
                    r = e.CSRFToken,
                    a = e.http,
                    o = e.Router;
                return n.add(a.post, o.generate("web_member_callback_untrack_member", {
                    username: t
                }), {
                    _token: r
                })
            }
        }
        var w = n(244);
        function service_ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var y = {
            getToken: function getToken() {
                return window.context && window.context.csrf && window.context.csrf.token
            }
        };
        var k = n(18),
            O = n(4),
            E = function createUserService(e) {
                var t = Object(p.a)((function() {
                        return Object(p.h)((function() {
                            if (O.fetchBoardOptions)
                                return Object(p.e)(Object(p.d)((function() {
                                    return Object(p.b)(O.fetchBoardOptions(), (function(e) {
                                        O.set("boardOptions", e), n.setBoardOptions(e), emitUser()
                                    }))
                                }), p.f))
                        }))
                    })),
                    n = e.cache,
                    a = e.callbacks,
                    i = e.CSRF,
                    s = e.getCurrentUser,
                    c = e.http,
                    l = e.includeBoardOptions,
                    u = void 0 !== l && l,
                    g = e.Router,
                    f = e.routes,
                    _ = Object(h.createQueue)(!0),
                    v = Object(b.createEventEmitter)(),
                    y = function getInitialUser() {
                        var e = s(),
                            t = {
                                archiveView: "grid",
                                boardOptions: {
                                    animationType: "default",
                                    boardSize: "auto",
                                    boardStyle: "green",
                                    coordinates: "inside",
                                    darkMode: !0,
                                    highlightLegalMoves: !0,
                                    highlightMoves: !0,
                                    isWhiteOnBottom: !1,
                                    moveListDisplayType: "text",
                                    moveMethod: "drag",
                                    pieceStyle: "neo",
                                    playSounds: !0,
                                    soundTheme: "default"
                                },
                                country: null,
                                features: {},
                                flag: null,
                                friends: [],
                                homeContentType: "following",
                                isLoggedIn: !1,
                                loading: {
                                    friends: !1,
                                    opponents: !1
                                },
                                membership: null,
                                opponents: [],
                                rating: null,
                                roles: [],
                                username: ""
                            };
                        if (!e)
                            return t;
                        var r = Object.assign({}, t, e);
                        if (!e.isImpersonating) {
                            var a = n.getBoardOptions();
                            Object.keys(a).length && Object.assign(r.boardOptions, Object(w.pick)(a, ["animationType", "boardSize", "boardStyle", "coordinates", "darkMode", "highlightLegalMoves", "highlightMoves", "isWhiteOnBottom", "moveListDisplayType", "moveMethod", "pieceStyle", "playSounds", "soundTheme"]))
                        }
                        return r
                    }(),
                    k = {
                        actionQueue: _,
                        callbacks: a,
                        CSRFToken: i.getToken(),
                        emitUser: emitUser,
                        http: c,
                        is2FARoute: m.a,
                        membership: r.k,
                        Router: g,
                        routes: f,
                        update: function update(e, t) {
                            var r = y[e];
                            return y[e] = t, n.setBoardOptions(t), function undo() {
                                y[e] = r, n.setBoardOptions(r)
                            }
                        },
                        user: y
                    },
                    O = function service_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? service_ownKeys(Object(n), !0).forEach((function(t) {
                                o()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : service_ownKeys(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        addFriend: createAddFriend(k),
                        approveFriendRequest: createApproveFriendRequest(k),
                        blockUser: createBlockUser(k),
                        cancelFriendRequest: createCancelFriendRequest(k),
                        checkMembershipStatus: createCheckMembershipStatus(k),
                        checkValidUsername: createCheckValidUsername(k),
                        declineFriendRequest: createDeclineFriendRequest(k),
                        deleteFriend: createDeleteFriend(k),
                        dismissFollowSuggestion: createDismissFollowSuggestion(k),
                        eligibleFirstTrial: createEligibleFirstTrial(k),
                        fetchBoardOptions: u ? createFetchBoardOptions(k) : void 0,
                        fetchReportReasonsData: createFetchReportReasonsData(k),
                        generateProfileLine: createGenerateProfileLink(k),
                        get: createGet(k),
                        getAvatar: createGetAvatar(k),
                        getFollowSuggestions: createGetFollowSuggestions(k),
                        getFriends: createGetFriends(k),
                        getOpponents: createGetOpponents(k),
                        getRoles: createGetRoles(k),
                        getUser: createGetUser(k),
                        isEnabled: createIsEnabled(k),
                        isImpersonating: createIsImpersonating(k),
                        isLoggedIn: createIsLoggedIn(k),
                        reportUser: createReportUser(k),
                        saveBoardSetting: createSaveBoardSetting(k),
                        searchUsername: createSearchUsername(k),
                        set: createSet(k),
                        setArchiveView: createSetArchiveView(k),
                        setFairPlayAgree: createSetFairPlayAgree(k),
                        setHomeContentType: createSetHomeContentType(k),
                        setShowAlertsOnHome: createSetShowAlertsOnHome(k),
                        trackUser: createTrackUser(k),
                        unblockUser: createUnblockUser(k),
                        untrackUser: createUntrackUser(k)
                    }, v);
                return O.saveBoardSettings = function saveBoardSettings(e) {
                    Object.entries(e).forEach((function(e) {
                        var t = d()(e, 2),
                            n = t[0],
                            r = t[1];
                        return O.saveBoardSetting(n, r)
                    }))
                }, t(), O.acceptFollowSuggestion = O.trackUser, k.service = O, O;
                function emitUser(e) {
                    v.emit(e, y)
                }
            }({
                callbacks: r.e,
                cache: l,
                CSRF: y,
                getCurrentUser: function getUserFromContext() {
                    return window.context.user
                },
                http: k.default,
                Router: O.a,
                routes: r.p
            });
        t.a = E
    },
    126: function(e, t, n) {
        "use strict";
        var r = n(16),
            a = n(24),
            o = {
                name: "icon-button",
                components: {
                    IconFont: r.a
                },
                directives: {
                    Tooltip: a.a
                },
                props: {
                    action: Function,
                    btnColor: String,
                    iconName: {
                        type: String,
                        required: !0
                    },
                    label: {
                        type: String,
                        required: !0
                    }
                },
                methods: {
                    onClick: function onClick(e) {
                        this.action ? this.action(e) : this.$emit("click", e)
                    }
                }
            },
            i = n(184),
            s = n(3);
        var c = Object(s.a)(o, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("button", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: {
                        content: e.label,
                        delay: 100
                    },
                    expression: "{\n    content: label,\n    delay: 100\n  }"
                }],
                class: [e.$style.link, e.$style[e.btnColor]],
                attrs: {
                    type: "button",
                    "aria-label": e.label
                },
                on: {
                    click: e.onClick
                }
            }, [n("icon-font", {
                class: [e.$style.icon],
                attrs: {
                    theme: "primary",
                    name: e.iconName
                }
            })], 1)
        }), [], !1, (function injectStyles(e) {
            this.$style = i.default.locals || i.default
        }), null, null);
        t.a = c.exports
    },
    138: function(e, t, n) {
        var r = n(281),
            a = n(282),
            o = n(283);
        e.exports = function _slicedToArray(e, t) {
            return r(e) || a(e, t) || o()
        }
    },
    14: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return formatNumber
        }));
        var r = n(0);
        function getLocale() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                n = e || (Object.prototype.hasOwnProperty.call(window, "context") ? window.context.i18n.locale : "en-US");
            return n.replace("_", t)
        }
        var a = {
                year: {
                    milliseconds: 31536e6,
                    str: "{1} 1 year|]1,Inf] %1$s% years",
                    strAgo: "{1} 1 year ago|]1,Inf] %1$s% years ago"
                },
                month: {
                    milliseconds: function getMsInThisMonth() {
                        switch ((new Date).getMonth()) {
                        case 3:
                        case 5:
                        case 8:
                        case 10:
                            return 2592e6;
                        case 1:
                            return (new Date).getFullYear() % 4 == 0 ? 25056e5 : 24192e5;
                        default:
                            return 26784e5
                        }
                    }(),
                    str: "{1} 1 month|]1,Inf] %1$s% months",
                    strAgo: "{1} 1 month ago|]1,Inf] %1$s% months ago"
                },
                day: {
                    milliseconds: 864e5,
                    str: "{1} 1 day|]1,Inf] %1$s% days",
                    strAgo: "{1} 1 day ago|]1,Inf] %1$s% days ago"
                },
                hour: {
                    milliseconds: 36e5,
                    str: "{1} 1 hour|]1,Inf] %1$s% hours",
                    strAgo: "{1} 1 hour ago|]1,Inf] %1$s% hours ago"
                },
                minute: {
                    milliseconds: 6e4,
                    str: "{1} 1 minute|]1,Inf] %1$s% minutes",
                    strAgo: "{1} 1 minute ago|]1,Inf] %1$s% minutes ago"
                }
            },
            o = {
                hoursMinute: function hoursMinute(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = 86400,
                        a = 3600,
                        o = 60,
                        i = "{0} 0 days|{1} 1 day|]1,Inf] %1$s% days",
                        s = "{0} 0 hours|{1} 1 hour|]1,Inf] %1$s% hours",
                        c = "{0} 0 min|{1} 1 min|]1,Inf] %1$s% min",
                        l = [],
                        u = 0,
                        d = 0,
                        p = 0,
                        b = e;
                    return !0 === t && (b -= (u = Math.floor(b / n)) * n), b -= (d = Math.floor(b / a)) * a, p = Math.floor(b / o), u > 0 && l.push(r.a.transChoice(i, u, {
                        "%1$s%": u
                    })), d > 0 && l.push(r.a.transChoice(s, d, {
                        "%1$s%": d
                    })), (p > 0 || 0 === l.length) && l.push(r.a.transChoice(c, p, {
                        "%1$s%": p
                    })), l.join(" ")
                },
                long: function long() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        t = e instanceof Date ? e : new Date(e),
                        n = {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        };
                    return new Intl.DateTimeFormat(getLocale(), n).format(t)
                },
                full: function full() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        t = e instanceof Date ? e : new Date(e),
                        n = {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        };
                    return new Intl.DateTimeFormat(getLocale(), n).format(t)
                },
                numeric: function numeric() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        t = e instanceof Date ? e : new Date(e);
                    if (window.Intl) {
                        var n = getLocale(),
                            r = {
                                day: "2-digit",
                                month: "2-digit",
                                year: "numeric"
                            };
                        return new Intl.DateTimeFormat(n, r).format(t)
                    }
                    var a = "0".concat(t.getMonth() + 1).slice(-2),
                        o = "0".concat(t.getDate()).slice(-2);
                    return "".concat(a, "/").concat(o, "/").concat(t.getFullYear())
                },
                relative: function relative(e) {
                    var t,
                        n,
                        o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        s = Date.now(),
                        c = e instanceof Date ? e : new Date(e),
                        l = c.getTime(),
                        u = s - l;
                    if (Math.abs(u) > a.month.milliseconds && o) {
                        var d = {
                            year: "numeric",
                            month: "short",
                            day: "numeric"
                        };
                        return new Intl.DateTimeFormat(getLocale(), d).format(l)
                    }
                    if (u >= a.year.milliseconds)
                        n = a.year, t = Math.abs(Math.floor(u / a.year.milliseconds));
                    else if (u >= a.month.milliseconds)
                        n = a.month, t = Math.abs(Math.floor(u / a.month.milliseconds));
                    else if (u >= a.day.milliseconds)
                        n = a.day, t = Math.abs(Math.floor(u / a.day.milliseconds));
                    else if (u >= a.hour.milliseconds)
                        n = a.hour, t = Math.abs(Math.floor(u / a.hour.milliseconds));
                    else {
                        if (!(u >= a.minute.milliseconds))
                            return r.a.trans("Just now");
                        n = a.minute, t = Math.abs(Math.floor(u / a.minute.milliseconds))
                    }
                    var p = Math.abs(u) === u;
                    return r.a.transChoice(p && i ? n.strAgo : n.str, t, {
                        "%1$s%": t
                    })
                },
                customNumericDate: function customNumericDate() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "m/d/y",
                        r = e instanceof Date ? e : new Date(e),
                        a = {
                            d: "0".concat(r.getDate()).slice(-2),
                            m: "0".concat(r.getMonth() + 1).slice(-2),
                            y: "".concat(r.getFullYear())
                        },
                        o = ["m", "d", "y"].every((function(e) {
                            return n.split("/").includes(e)
                        }));
                    return o ? n.split("/").reduce((function(e, t) {
                        return e.push(a[t]), e
                    }), []).join(t) : "".concat(a.m).concat(t).concat(a.d).concat(t).concat(a.y)
                }
            };
        function formatNumber(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return new Intl.NumberFormat([getLocale(t), "en-US"], n).format(e)
        }
    },
    140: function(e, t, n) {
        "use strict";
        var r = n(108),
            a = n.n(r);
        t.default = a.a
    },
    141: function(e, t, n) {
        e.exports = {
            link: "icon-button-link",
            icon: "icon-button-icon",
            label: "icon-button-label",
            blue: "icon-button-blue",
            grey: "icon-button-grey",
            red: "icon-button-red"
        }
    },
    142: function(e, t, n) {
        e.exports = {
            link: "labeled-icon-button-link",
            icon: "labeled-icon-button-icon",
            label: "labeled-icon-button-label",
            blue: "labeled-icon-button-blue",
            grey: "labeled-icon-button-grey",
            red: "labeled-icon-button-red"
        }
    },
    146: function(e, t, n) {
        "use strict";
        var r,
            a,
            o,
            i;
        !function(e) {
            e.MUTE = "mute", e.WARN = "warn"
        }(r || (r = {})), function(e) {
            e.BADGE_KEY = "chatMessages", e[e.BIG_EMOTES_LIMIT = 4] = "BIG_EMOTES_LIMIT", e[e.DEFAULT_CHAT_WINDOW_HEIGHT = 400] = "DEFAULT_CHAT_WINDOW_HEIGHT", e[e.DEFAULT_CHAT_WINDOW_WIDTH = 350] = "DEFAULT_CHAT_WINDOW_WIDTH", e[e.CHAT_WINDOW_MOVE_TRESHOLD = 30] = "CHAT_WINDOW_MOVE_TRESHOLD", e[e.CHAT_WINDOW_WIDTH_ON_MOBILE = .9] = "CHAT_WINDOW_WIDTH_ON_MOBILE", e[e.EMOTES_IN_A_ROW = 3] = "EMOTES_IN_A_ROW", e[e.HTTP_CODE_TOO_MUCH_REQUESTS = 429] = "HTTP_CODE_TOO_MUCH_REQUESTS", e[e.HTTP_CODE_FORBIDDEN = 403] = "HTTP_CODE_FORBIDDEN", e[e.INTERVAL_GET_PUBSUB_STATE = 3e3] = "INTERVAL_GET_PUBSUB_STATE", e[e.INTERVAL_GET_PUBSUB_STATE_INITIAL = 500] = "INTERVAL_GET_PUBSUB_STATE_INITIAL", e[e.KEY_ENTER = 13] = "KEY_ENTER", e[e.KEY_ESC = 27] = "KEY_ESC", e[e.MESSAGES_PER_REQUEST = 20] = "MESSAGES_PER_REQUEST", e[e.MIN_CHAT_WINDOW_HEIGHT = 200] = "MIN_CHAT_WINDOW_HEIGHT", e[e.MIN_CHAT_WINDOW_WIDTH = 300] = "MIN_CHAT_WINDOW_WIDTH", e.ONLINE_STATUS = "online", e.PENDING_MESSAGE_ID = "pending_message", e.PUBSUB_ACTION_CREATED = "created", e[e.RETRY_REQUEST_TIMEOUT = 200] = "RETRY_REQUEST_TIMEOUT", e[e.WINDOW_RESIZE_DEBOUNCE = 250] = "WINDOW_RESIZE_DEBOUNCE", e[e.SCROLL_HEIGHT_TRIGGER = 100] = "SCROLL_HEIGHT_TRIGGER", e[e.TIMEOUT_TILL_MESSAGE_IS_READ = 500] = "TIMEOUT_TILL_MESSAGE_IS_READ", e[e.UNREAD_MESSAGE_BADGE_ANIMATION = 1e3] = "UNREAD_MESSAGE_BADGE_ANIMATION", e[e.USER_MUTE_MESSAGES_ANMOUNT = 60] = "USER_MUTE_MESSAGES_ANMOUNT", e[e.USER_MUTE_TIMEOUT = 1e4] = "USER_MUTE_TIMEOUT", e.USER_CLUB_CHAT_MUTE_TIMEOUT = "PT60M", e[e.USERS_PER_REQUEST = 30] = "USERS_PER_REQUEST", e[e.USERS_TRACK_STATUS_LIMIT = 25] = "USERS_TRACK_STATUS_LIMIT"
        }(a || (a = {})), function(e) {
            e.CHAT_LOAD_USER_POPOVER_BUNDLE = "chat-load-user-popover-bundle"
        }(o || (o = {})), function(e) {
            e.EVERYONE = "everyone", e.FRIENDS = "friends", e.TITLED_PLAYERS = "titled"
        }(i || (i = {}));
        var s,
            c = {
                CLUB_CHAT_CONTAINER: ".club-chat-container",
                CLUB_CHAT_WIDGET: ".club-chat-widget",
                OPENED_CHATS_CONTAINER: ".opened-chats-container",
                messageElement: function messageElement(e) {
                    return '[data-id="chat-message-'.concat(e, '"]')
                },
                messagesList: function messagesList(e) {
                    return '[data-id="chat-messages-list-'.concat(e, '"]')
                },
                MOUNTED_CHATS_CONTAINER: ".opened-chats-list",
                lastServiceMessage: function lastServiceMessage(e) {
                    return '[data-id="chat-message-'.concat(e, '"] ~ .chat-messages-list-service-message:last-of-type')
                },
                USER_POPOVER_CONTAINER_ID: "user-popover",
                USER_POPOVER_LINK_ATTRIBUTE: "data-link-id"
            },
            l = n(1),
            u = n.n(l),
            d = n(2),
            p = (s = {
                accept: Object(d.b)("Accept"),
                acceptAndChat: Object(d.b)("Accept & Chat"),
                blockDirectChat: Object(d.b)("Block this chat"),
                cancel: Object(d.b)("Cancel"),
                cannotBeCreated: Object(d.b)("This chat cannot be created."),
                chatRequestSent: Object(d.b)("Chat request sent"),
                chatViewOptions: Object(d.b)("Chat View Options"),
                closeChat: Object(d.b)("Close"),
                deactivateChat: Object(d.b)("Hide"),
                decline: Object(d.b)("Decline"),
                declinedChatRequest: function declinedChatRequest(e) {
                    return Object(d.b)("You have declined to chat with %1$s%. You can change your mind and accept at any time.", {
                        "%1$s%": e
                    })
                },
                deleteMessage: Object(d.b)("Delete message"),
                findUser: Object(d.b)("Search..."),
                hideInactiveChats: Object(d.b)("Active chats"),
                leaveChat: Object(d.b)("Leave this chat"),
                loading: Object(d.b)("Loading..."),
                message: Object(d.b)("Message..."),
                minimizeChat: Object(d.b)("Minimize"),
                moderatorMessage: Object(d.b)("Moderator message:"),
                muted: Object(d.b)("Muted"),
                gotIt: Object(d.b)("Got it!"),
                pleaseUpgrade: Object(d.b)("Upgrade to get all emojis!"),
                removeChat: Object(d.b)("Remove chat"),
                restoreMessage: Object(d.b)("Restore message"),
                rulesLink: Object(d.b)('Please follow our Community Policy to keep Chess.com a fun and safe place to enjoy chess. If you don\'t follow the rules, your account may be restricted. <a href="https://www.chess.com/community" target="_blank">Learn more »</a>'),
                sendMessageError: Object(d.b)("Message failed."),
                showInactiveChats: Object(d.b)("Inactive chats"),
                sendMessageTo: Object(d.b)("To:"),
                tooMuchMessages: Object(d.b)("Relax! You are sending too many messages."),
                tryAgain: Object(d.b)("Resend"),
                unableToConnect: Object(d.b)("Unable to connect to chat. Please refresh or login again."),
                usersAreUnavailable: function usersAreUnavailable(e) {
                    return Object(d.b)("Sorry! %1$s% are not available to chat.", {
                        "%1$s%": e
                    })
                },
                userIsUnavailable: function userIsUnavailable(e) {
                    return Object(d.b)("Sorry! %1$s% is not available to chat.", {
                        "%1$s%": e
                    })
                },
                userWasUnavailable: function userWasUnavailable(e) {
                    return Object(d.b)("%1$s% declined to chat earlier. You can try again now.", {
                        "%1$s%": e
                    })
                },
                userWantsToChat: function userWantsToChat(e) {
                    return Object(d.b)("%1$s% would like to chat", {
                        "%1$s%": e
                    })
                },
                userHasBeenMuted: function userHasBeenMuted(e, t) {
                    return Object(d.b)("%1$s% has been muted by %2$s%", {
                        "%1$s%": e,
                        "%2$s%": t
                    })
                },
                userHasBeenWarned: function userHasBeenWarned(e, t) {
                    return Object(d.b)("%1$s% has been warned by %2$s%", {
                        "%1$s%": e,
                        "%2$s%": t
                    })
                },
                warning: Object(d.b)("Warning"),
                youHaveBeenMuted: Object(d.b)("You have been muted."),
                youHaveBeenWarned: Object(d.b)("You have been warned.")
            }, u()(s, i.EVERYONE, Object(d.b)("Everyone")), u()(s, i.FRIENDS, Object(d.b)("Friends")), u()(s, i.TITLED_PLAYERS, Object(d.b)("Titled Players")), n(38)),
            b = (Object(p.c)("uuid"), window.context);
        b && b.user && b.user.isPremium;
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "d", (function() {
            return c
        }))
    },
    147: function(e, t, n) {
        e.exports = n(20)(55)
    },
    149: function(e, t, n) {
        e.exports = {
            component: "loader-three-bounce-component",
            circle: "loader-three-bounce-circle",
            dot: "loader-three-bounce-dot",
            animate: "loader-three-bounce-animate",
            bounce1: "loader-three-bounce-bounce1",
            bounce2: "loader-three-bounce-bounce2"
        }
    },
    150: function(e, t, n) {
        e.exports = {
            component: "user-membership-icon-component",
            "level-30": "user-membership-icon-level-30",
            gold: "user-membership-icon-gold",
            "level-40": "user-membership-icon-level-40",
            platinum: "user-membership-icon-platinum",
            "level-50": "user-membership-icon-level-50",
            diamond: "user-membership-icon-diamond",
            "level-90": "user-membership-icon-level-90",
            staff: "user-membership-icon-staff",
            "level-80": "user-membership-icon-level-80",
            mod: "user-membership-icon-mod",
            moderator: "user-membership-icon-moderator",
            "level-5": "user-membership-icon-level-5",
            "level-8": "user-membership-icon-level-8",
            cheater: "user-membership-icon-cheater",
            unspecifiedClosed: "user-membership-icon-unspecifiedClosed",
            "level-6": "user-membership-icon-level-6",
            abuser: "user-membership-icon-abuser",
            "level-7": "user-membership-icon-level-7",
            voluntarilyClosed: "user-membership-icon-voluntarilyClosed",
            "level-10": "user-membership-icon-level-10",
            basic: "user-membership-icon-basic",
            level: "user-membership-icon-level",
            middle: "user-membership-icon-middle",
            large: "user-membership-icon-large",
            responsive: "user-membership-icon-responsive",
            "x-large": "user-membership-icon-x-large"
        }
    },
    151: function(e, t, n) {
        e.exports = {
            component: "user-avatar-component",
            link: "user-avatar-link",
            status: "user-avatar-status",
            online: "user-avatar-online",
            live: "user-avatar-live",
            image: "user-avatar-image"
        }
    },
    152: function(e, t, n) {
        e.exports = {
            component: "admin-actions-component",
            separator: "admin-actions-separator"
        }
    },
    153: function(e, t, n) {
        e.exports = {
            link: "icon-link-link",
            icon: "icon-link-icon",
            label: "icon-link-label",
            blue: "icon-link-blue",
            grey: "icon-link-grey",
            red: "icon-link-red"
        }
    },
    154: function(e, t, n) {
        e.exports = {
            link: "labeled-icon-link-link",
            icon: "labeled-icon-link-icon",
            label: "labeled-icon-link-label",
            blue: "labeled-icon-link-blue",
            grey: "labeled-icon-link-grey",
            red: "labeled-icon-link-red"
        }
    },
    155: function(e, t, n) {
        e.exports = {
            component: "chat-options-dropdown-component",
            close: "chat-options-dropdown-close",
            title: "chat-options-dropdown-title"
        }
    },
    156: function(e, t, n) {
        e.exports = {
            component: "analysis-options-dropdown-component",
            close: "analysis-options-dropdown-close",
            title: "analysis-options-dropdown-title"
        }
    },
    157: function(e, t, n) {
        e.exports = {
            component: "user-actions-component",
            "icons-list": "user-actions-icons-list",
            more: "user-actions-more",
            caret: "user-actions-caret",
            buttonsList: "user-actions-buttonsList"
        }
    },
    158: function(e, t, n) {
        e.exports = {
            component: "user-flair-status-component"
        }
    },
    159: function(e, t, n) {
        e.exports = {
            component: "user-rating-component",
            icon: "user-rating-icon",
            rating: "user-rating-rating"
        }
    },
    16: function(e, t, n) {
        "use strict";
        var r = {
                name: "icon-font",
                mixins: [{
                    props: {
                        family: {
                            type: String,
                            default: "chess"
                        },
                        isDarkMode: {
                            type: Boolean,
                            default: !1
                        },
                        name: {
                            type: String,
                            required: !0
                        },
                        theme: {
                            type: String,
                            default: ""
                        }
                    }
                }]
            },
            a = n(83),
            o = n(3);
        var i = Object(o.a)(r, (function() {
            var e,
                t = this,
                n = t.$createElement,
                r = t._self._c || n;
            return r("div", t._g({
                class: [t.$style.component, (e = {}, e[t.$style.darkMode] = t.isDarkMode, e)]
            }, t.$listeners), [r("span", {
                class: [t.$style[t.family], t.name, t.$style[t.theme]]
            })])
        }), [], !1, (function injectStyles(e) {
            this.$style = a.default.locals || a.default
        }), null, null);
        t.a = i.exports
    },
    160: function(e, t, n) {
        e.exports = {
            component: "user-chess-title-component"
        }
    },
    161: function(e, t, n) {
        e.exports = {
            component: "user-flair-icon-component"
        }
    },
    162: function(e, t, n) {
        e.exports = {
            component: "user-username-component",
            link: "user-username-link",
            gray: "user-username-gray",
            blue: "user-username-blue",
            current: "user-username-current",
            dark: "user-username-dark",
            "blue-with-dark-mode": "user-username-blue-with-dark-mode"
        }
    },
    163: function(e, t, n) {
        e.exports = {
            component: "user-tagline-component",
            username: "user-tagline-username",
            rating: "user-tagline-rating",
            darkMode: "user-tagline-darkMode"
        }
    },
    164: function(e, t, n) {
        e.exports = {
            popover: "user-popover-popover",
            bottom: "user-popover-bottom",
            top: "user-popover-top",
            component: "user-popover-component",
            "avatar-placeholder": "user-popover-avatar-placeholder",
            profile: "user-popover-profile",
            meta: "user-popover-meta",
            info: "user-popover-info",
            onlive: "user-popover-onlive",
            online: "user-popover-online",
            status: "user-popover-status",
            details: "user-popover-details",
            secondary: "user-popover-secondary",
            loader: "user-popover-loader",
            actions: "user-popover-actions",
            ratings: "user-popover-ratings",
            confirm: "user-popover-confirm",
            "moderator-message": "user-popover-moderator-message"
        }
    },
    165: function(e, t, n) {
        e.exports = {
            "placeholder-popover": "user-popover-placeholder-popover",
            bottom: "user-popover-bottom",
            top: "user-popover-top",
            "placeholder-component": "user-popover-placeholder-component",
            "placeholder-profile": "user-popover-placeholder-profile",
            "placeholder-avatar": "user-popover-placeholder-avatar",
            "placeholder-info": "user-popover-placeholder-info"
        }
    },
    176: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "e", (function() {
            return s
        })), n.d(t, "f", (function() {
            return c
        })), n.d(t, "c", (function() {
            return l
        })), n.d(t, "d", (function() {
            return u
        }));
        var r = n(40),
            a = n(8),
            o = function getCharacterCountClasses(e, t) {
                var n = [t["char-count"]],
                    a = r.e - e.length;
                if (a < 10) {
                    var o = Math.floor(a / 2);
                    n.push(t["warning-".concat(o)])
                }
                return n
            },
            i = function getFlairDomElement() {
                return document.querySelector("[".concat(r.a.FLAIR, "]"))
            },
            s = function getUsernameFromDom() {
                var e = document.querySelector("[".concat(r.a.USERNAME, "]"));
                return e ? e.getAttribute(r.a.USERNAME) : ""
            },
            c = function parseFlair(e) {
                if (!e)
                    return a.c;
                var t = JSON.parse(e.dataset.flairProfile);
                return t && t.code || (t = a.c), t
            },
            l = function getFlairHref(e) {
                var t = e.code,
                    n = e.flairMembership,
                    o = e.selfIsPremium;
                return n >= a.k.moderator ? a.p.about() : n === a.k.cheater || n === a.k.abuser ? r.g.communityGuidelines() : a.a.includes(t) ? "" : o ? "".concat(r.g.settings()).concat(r.d) : a.p.membership("flair")
            },
            u = function getFlairTooltip(e) {
                var t = e.code,
                    n = e.flairMembership;
                return n >= a.k.staff ? a.q.staff : n >= a.k.moderator ? a.q.moderator : n < a.k.basic ? a.m[n] : a.a.includes(t) ? a.m[a.k.unspecifiedClosed] : a.q.showYourFlair
            }
    },
    18: function(e, t, n) {
        e.exports = n(20)(4)
    },
    181: function(e, t) {
        e.exports = amplitudeDLL
    },
    182: function(e, t, n) {
        "use strict";
        var r = n(59),
            a = {
                name: "user-avatar",
                directives: {
                    ImageDefer: n(190).a
                },
                props: {
                    image: {
                        type: String,
                        required: !0
                    },
                    isLive: {
                        type: Boolean,
                        default: !1
                    },
                    isOnline: {
                        type: Boolean,
                        default: !1
                    },
                    url: {
                        type: String,
                        required: !1
                    }
                },
                computed: {
                    isLink: function isLink() {
                        return Boolean(this.url)
                    },
                    blankImage: function blankImage() {
                        return Object(r.a)("bundles/web/images/user-image.svg")
                    }
                }
            },
            o = n(208),
            i = n(3);
        var s = Object(i.a)(a, (function() {
            var e,
                t,
                n,
                r = this,
                a = r.$createElement,
                o = r._self._c || a;
            return o("a", {
                class: [r.$style.component, (e = {}, e[r.$style.link] = r.isLink, e)],
                attrs: {
                    href: r.url
                }
            }, [o("img", {
                directives: [{
                    name: "image-defer",
                    rawName: "v-image-defer",
                    value: {
                        src: r.image,
                        srcset: !0
                    },
                    expression: "{src: image, srcset: true}"
                }],
                class: r.$style.image,
                attrs: {
                    src: r.blankImage
                }
            }), r._v(" "), r.isOnline || r.isLive ? o("span", {
                class: [r.$style.status, (t = {}, t[r.$style.online] = r.isOnline, t), (n = {}, n[r.$style.live] = r.isLive, n)]
            }) : r._e()])
        }), [], !1, (function injectStyles(e) {
            this.$style = o.default.locals || o.default
        }), null, null);
        t.a = s.exports
    },
    183: function(e, t, n) {
        "use strict";
        var r = {
                name: "loader-three-bounce",
                props: {
                    isCircle: {
                        type: Boolean,
                        default: !1
                    },
                    size: {
                        type: Number,
                        default: 80
                    }
                },
                computed: {
                    dotCss: function dotCss() {
                        var e = "".concat(Math.round(this.size / 4), "px");
                        return {
                            width: e,
                            height: e
                        }
                    }
                }
            },
            a = n(206),
            o = n(3);
        var i = Object(o.a)(r, (function() {
            var e,
                t = this,
                n = t.$createElement,
                r = t._self._c || n;
            return r("div", {
                class: [t.$style.component, (e = {}, e[t.$style.circle] = t.isCircle, e)],
                style: {
                    width: t.size + "px"
                }
            }, [r("div", {
                class: [t.$style.dot, t.$style.bounce1],
                style: t.dotCss
            }), t._v(" "), r("div", {
                class: [t.$style.dot, t.$style.bounce2],
                style: t.dotCss
            }), t._v(" "), r("div", {
                class: t.$style.dot,
                style: t.dotCss
            })])
        }), [], !1, (function injectStyles(e) {
            this.$style = a.default.locals || a.default
        }), null, null);
        t.a = i.exports
    },
    184: function(e, t, n) {
        "use strict";
        var r = n(141),
            a = n.n(r);
        t.default = a.a
    },
    185: function(e, t, n) {
        "use strict";
        var r = n(142),
            a = n.n(r);
        t.default = a.a
    },
    187: function(e, t, n) {
        "use strict";
        var r = {
                name: "labeled-icon-button",
                components: {
                    IconFont: n(16).a
                },
                props: {
                    action: Function,
                    btnColor: String,
                    iconName: {
                        type: String,
                        required: !0
                    },
                    label: {
                        type: String,
                        required: !0
                    }
                },
                methods: {
                    onClick: function onClick(e) {
                        this.action ? this.action(e) : this.$emit("click", e)
                    }
                }
            },
            a = n(185),
            o = n(3);
        var i = Object(o.a)(r, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("button", {
                class: [e.$style.link, e.$style[e.btnColor]],
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.onClick
                }
            }, [n("icon-font", {
                class: [e.$style.icon],
                attrs: {
                    theme: "primary",
                    name: e.iconName
                }
            }), e._v(" "), n("span", {
                class: e.$style.label,
                domProps: {
                    textContent: e._s(e.label)
                }
            })], 1)
        }), [], !1, (function injectStyles(e) {
            this.$style = a.default.locals || a.default
        }), null, null);
        t.a = i.exports
    },
    189: function(e, t, n) {
        e.exports = n(181)(6)
    },
    19: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = "icon-background",
            a = "icon-component",
            o = "icon-component-shadow",
            i = "icon-shadow",
            s = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#95bb4a"/>\n  <path d="M9 3.72a.48.48 0 0 0-.44.3L7.24 7.46l-3.68.19a.48.48 0 0 0-.27.84l2.86 2.32-1 3.56a.47.47 0 0 0 .18.5.46.46 0 0 0 .27.09.5.5 0 0 0 .26-.08l3.09-2 3.09 2a.5.5 0 0 0 .26.08.46.46 0 0 0 .27-.09.47.47 0 0 0 .18-.5l-1-3.56 2.86-2.32a.48.48 0 0 0-.27-.84l-3.68-.19L9.44 4A.48.48 0 0 0 9 3.72z" opacity=".1"/>\n  <path d="M9 3.22a.48.48 0 0 0-.44.3L7.24 7l-3.68.19a.48.48 0 0 0-.27.81l2.86 2.32-1 3.56a.47.47 0 0 0 .18.5.46.46 0 0 0 .27.09.5.5 0 0 0 .26-.08l3.09-2 3.09 2a.5.5 0 0 0 .26.08.46.46 0 0 0 .27-.09.47.47 0 0 0 .18-.5l-1-3.56L14.71 8a.48.48 0 0 0-.27-.84L10.76 7 9.44 3.52a.48.48 0 0 0-.44-.3z" fill="#fff"/>\n'),
            c = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#a88865" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(o, '" opacity=".3" d="M8.4,6c-1-.75-2.52-1.09-4.83-1.09H2.49v8.71H3.57A8.13,8.13,0,0,1,8.4,14.76Z"/>\n  <path class="').concat(o, '" opacity=".3" d="M9.49,14.76a8.14,8.14,0,0,1,4.84-1.17h1.08V4.88H14.33C12,4.88,10.52,5.22,9.49,6Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M8.4,5.47c-1-.75-2.52-1.09-4.83-1.09H3v8.71h.58A8.13,8.13,0,0,1,8.4,14.26Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M9.49,14.26a8.14,8.14,0,0,1,4.84-1.17h.58V4.38h-.58c-2.32,0-3.81.34-4.84,1.09Z"/>\n'),
            l = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#c93430"/>\n  <g class="').concat(o, '" opacity=".2">\n    <path d="M14.68 5.48a2.77 2.77 0 0 0-.77-.92 3.81 3.81 0 0 0-1.1-.56 3.86 3.86 0 0 0-1.2-.19 3.68 3.68 0 0 0-1.19.19 5.72 5.72 0 0 0-.9.37l-.33.2a3.5 3.5 0 0 1 .43.63A3.26 3.26 0 0 1 10 6.66a.45.45 0 0 0 .19 0l.11-.09a1.13 1.13 0 0 1 .28-.18 2.54 2.54 0 0 1 .42-.23 1.61 1.61 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.25.68c-.17.19-.39.4-.65.64s-.33.27-.49.42a3.08 3.08 0 0 0-.45.55 2.55 2.55 0 0 0-.33.66 2.43 2.43 0 0 0-.13.84v.35a.34.34 0 0 0 .32.32h1.72a.27.27 0 0 0 .22-.1.29.29 0 0 0 .09-.22v-.21a.93.93 0 0 1 .27-.7 6.62 6.62 0 0 1 .65-.64A4.62 4.62 0 0 0 14 9a5.58 5.58 0 0 0 .49-.6 2.92 2.92 0 0 0 .36-.73 3.08 3.08 0 0 0 .14-1 2.76 2.76 0 0 0-.31-1.19zM12.3 12.72h-1.89a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.31.31 0 0 0 .09.22.26.26 0 0 0 .22.1h1.89a.33.33 0 0 0 .23-.09.34.34 0 0 0 .1-.23V13a.34.34 0 0 0-.1-.22.33.33 0 0 0-.23-.06zM6.68 12.72H4.79a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.35.35 0 0 0 .08.22.28.28 0 0 0 .23.1h1.89a.35.35 0 0 0 .23-.09.34.34 0 0 0 .1-.23V13a.34.34 0 0 0-.1-.22.35.35 0 0 0-.23-.06zM8.28 4.56A3.63 3.63 0 0 0 7.19 4 3.86 3.86 0 0 0 6 3.81 3.78 3.78 0 0 0 4.79 4a6.65 6.65 0 0 0-.9.37 2.84 2.84 0 0 0-.55.38l-.21.19a.31.31 0 0 0 0 .41l1 1.21a.31.31 0 0 0 .21.13.54.54 0 0 0 .25-.06l.1-.09a1.46 1.46 0 0 1 .29-.18 2.2 2.2 0 0 1 .41-.18 1.57 1.57 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.26.68c-.17.19-.38.4-.64.64a6.4 6.4 0 0 0-.49.42 2.7 2.7 0 0 0-.52.53 2.94 2.94 0 0 0-.34.66 2.7 2.7 0 0 0-.12.84v.35a.29.29 0 0 0 .09.22.28.28 0 0 0 .22.1h1.76a.26.26 0 0 0 .21-.1.29.29 0 0 0 .09-.22v-.21a1 1 0 0 1 .27-.7 8.22 8.22 0 0 1 .66-.64A5.68 5.68 0 0 0 8.36 9a7 7 0 0 0 .48-.6 3 3 0 0 0 .37-.73 3.1 3.1 0 0 0 .13-1 2.67 2.67 0 0 0-1.06-2.11z"/>\n  </g>\n  <path class="').concat(a, '" fill="#fff" d="M14.68 5a2.77 2.77 0 0 0-.77-.92 3.81 3.81 0 0 0-1.1-.56 3.86 3.86 0 0 0-1.2-.19 3.68 3.68 0 0 0-1.19.17 5.72 5.72 0 0 0-.9.37l-.33.2a3.5 3.5 0 0 1 .43.63A3.26 3.26 0 0 1 10 6.16a.45.45 0 0 0 .19 0l.09-.16a1.13 1.13 0 0 1 .28-.18 2.54 2.54 0 0 1 .44-.16 1.61 1.61 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.25.68c-.17.19-.39.4-.65.64s-.33.27-.49.42a3.08 3.08 0 0 0-.45.55 2.55 2.55 0 0 0-.33.66 2.43 2.43 0 0 0-.13.84v.35a.34.34 0 0 0 .32.32h1.72a.27.27 0 0 0 .22-.1.29.29 0 0 0 .09-.22v-.21a.93.93 0 0 1 .27-.7 6.62 6.62 0 0 1 .62-.66 4.62 4.62 0 0 0 .54-.46 5.58 5.58 0 0 0 .49-.6 2.92 2.92 0 0 0 .36-.73 3.08 3.08 0 0 0 .14-1A2.76 2.76 0 0 0 14.68 5zM12.3 12.22h-1.89a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.31.31 0 0 0 .09.22.26.26 0 0 0 .22.1h1.89a.33.33 0 0 0 .23-.09.34.34 0 0 0 .1-.23v-1.84a.34.34 0 0 0-.1-.22.33.33 0 0 0-.23-.09zM6.68 12.22H4.79a.29.29 0 0 0-.22.09.33.33 0 0 0-.09.22v1.84a.35.35 0 0 0 .08.22.28.28 0 0 0 .23.1h1.89a.35.35 0 0 0 .23-.09.34.34 0 0 0 .1-.23v-1.84a.34.34 0 0 0-.1-.22.35.35 0 0 0-.23-.09zM8.28 4.06a3.63 3.63 0 0 0-1.09-.56A3.86 3.86 0 0 0 6 3.31a3.78 3.78 0 0 0-1.2.17 6.65 6.65 0 0 0-.9.37 2.84 2.84 0 0 0-.55.38l-.21.19a.31.31 0 0 0 0 .41L4.09 6a.31.31 0 0 0 .21.13.54.54 0 0 0 .25-.06l.1-.07a1.46 1.46 0 0 1 .29-.18 2.2 2.2 0 0 1 .41-.18 1.57 1.57 0 0 1 .49-.07 1.13 1.13 0 0 1 .73.24.74.74 0 0 1 .3.6 1 1 0 0 1-.26.68c-.17.19-.38.4-.64.64a6.4 6.4 0 0 0-.49.42 2.7 2.7 0 0 0-.48.57 2.94 2.94 0 0 0-.34.66 2.7 2.7 0 0 0-.12.84v.35a.29.29 0 0 0 .09.22.28.28 0 0 0 .22.1h1.76a.26.26 0 0 0 .21-.1.29.29 0 0 0 .09-.22v-.21a1 1 0 0 1 .27-.7A8.22 8.22 0 0 1 7.84 9a5.68 5.68 0 0 0 .52-.48 7 7 0 0 0 .48-.6 3 3 0 0 0 .37-.73 3.1 3.1 0 0 0 .13-1 2.67 2.67 0 0 0-1.06-2.13z"/>\n'),
            u = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#1baca6" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(o, '" opacity=".2" d="M12.57,14.85a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24V13a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23Zm-.11-3.93a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H10.35a.32.32,0,0,1-.34-.31L9.86,4.15A.42.42,0,0,1,10,3.91a.3.3,0,0,1,.24-.1H12.3a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M12.57,14.35a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24v-1.9a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23Zm-.11-3.93a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H10.35a.32.32,0,0,1-.34-.31L9.86,3.65A.42.42,0,0,1,10,3.41a.3.3,0,0,1,.24-.1H12.3a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n  <path class="').concat(o, '" opacity=".2" d="M8.07,14.85a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24V13a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23ZM8,10.92a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H5.85a.32.32,0,0,1-.34-.31L5.36,4.15a.42.42,0,0,1,.09-.24.3.3,0,0,1,.24-.1H7.8a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M8.07,14.35a.3.3,0,0,1-.1.24.32.32,0,0,1-.23.1h-2a.3.3,0,0,1-.24-.1.41.41,0,0,1-.08-.24v-1.9a.32.32,0,0,1,.09-.23.29.29,0,0,1,.23-.1h2a.32.32,0,0,1,.23.1.29.29,0,0,1,.1.23ZM8,10.42a.33.33,0,0,1-.1.23.34.34,0,0,1-.23.08H5.85a.32.32,0,0,1-.34-.31L5.36,3.65a.42.42,0,0,1,.09-.24.3.3,0,0,1,.24-.1H7.8a.36.36,0,0,1,.25.1.42.42,0,0,1,.09.24Z"/>\n'),
            d = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#95bb4a"/>\n  <path class="').concat(o, '" d="M15.11 6.81l-5.66 5.66-1.66 1.65a.38.38 0 0 1-.55 0L2.89 9.78a.39.39 0 0 1 0-.55l1.39-1.39a.39.39 0 0 1 .55 0l2.69 2.69 5.65-5.65a.38.38 0 0 1 .55 0l1.39 1.38a.39.39 0 0 1 0 .55z" opacity=".2"/>\n  <path class="').concat(a, '" d="M15.11 6.31L9.45 12l-1.66 1.62a.38.38 0 0 1-.55 0L2.89 9.28a.39.39 0 0 1 0-.55l1.39-1.39a.39.39 0 0 1 .55 0L7.52 10l5.65-5.65a.38.38 0 0 1 .55 0l1.39 1.38a.39.39 0 0 1 0 .58z" fill="#fff"/>\n'),
            p = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#5a9ac0" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(o, '" opacity=".2" d="M15,6.8,7.81,14a.38.38,0,0,1-.55,0L3,9.73a.41.41,0,0,1,0-.55L4.36,7.81a.4.4,0,0,1,.54,0l2.63,2.64L13.1,4.9a.38.38,0,0,1,.55,0L15,6.25A.38.38,0,0,1,15,6.8Z"/>\n  <path class="').concat(a, '" fill="#ffffff" d="M15,6.3,7.81,13.49a.38.38,0,0,1-.55,0L3,9.23a.41.41,0,0,1,0-.55L4.36,7.31a.4.4,0,0,1,.54,0L7.53,10,13.1,4.4a.38.38,0,0,1,.55,0L15,5.75A.38.38,0,0,1,15,6.3Z"/>\n'),
            b = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z" />\n  <path class="').concat(r, '" fill="#95bb4a" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z" />\n  <path class="').concat(o, '" opacity=".1"\n    d="M4.44,5.41v7.68a1,1,0,0,0,1,1h7.68a1,1,0,0,0,1-1V5.41a1,1,0,0,0-1-1H5.41A1,1,0,0,0,4.44,5.41ZM12,12H6.53V6.53H12Z" />\n  <path class="').concat(a, '" fill="#ffffff"\n    d="M4.19,5.16v7.68a1,1,0,0,0,1,1h7.68a1,1,0,0,0,1-1V5.16a1,1,0,0,0-1-1H5.16A1,1,0,0,0,4.19,5.16Zm7.53,6.56H6.28V6.28h5.44Z" />\n'),
            m = '\n  <path class="'.concat(i, '" opacity=".3" d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"/>\n  <path class="').concat(r, '" fill="#a09f9e" d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M9,2.5A6.5,6.5,0,1,0,15.5,9,6.5,6.5,0,0,0,9,2.5Z"/>\n  <path class="').concat(r, '" fill="#a09f9e" d="M9,5a4,4,0,1,0,4,4A4,4,0,0,0,9,5Z"/>\n  <path class="').concat(a, '" fill="#fff" d="M9,7.5A1.5,1.5,0,1,0,10.5,9,1.5,1.5,0,0,0,9,7.5Z"/>\n'),
            g = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#f0c15c"/>\n  <path class="').concat(o, '" opacity=".3" d="M13.51 14.85a.3.3 0 0 1-.1.24.33.33 0 0 1-.24.1h-2a.29.29 0 0 1-.23-.1.36.36 0 0 1-.09-.24V13a.33.33 0 0 1 .1-.23.27.27 0 0 1 .22-.1h2a.33.33 0 0 1 .24.1.29.29 0 0 1 .1.23zm-.12-3.93a.29.29 0 0 1-.1.23.31.31 0 0 1-.23.08h-1.77a.31.31 0 0 1-.34-.31l-.15-6.77a.49.49 0 0 1 .08-.24.32.32 0 0 1 .25-.1h2.11a.38.38 0 0 1 .25.1.42.42 0 0 1 .09.24z"/>\n  <path class="').concat(a, '" fill="#fff" d="M13.51 14.35a.3.3 0 0 1-.1.24.33.33 0 0 1-.24.1h-2a.29.29 0 0 1-.23-.1.36.36 0 0 1-.09-.24v-1.9a.33.33 0 0 1 .1-.23.27.27 0 0 1 .22-.1h2a.33.33 0 0 1 .24.1.29.29 0 0 1 .1.23zm-.12-3.93a.29.29 0 0 1-.1.23.31.31 0 0 1-.23.08h-1.77a.31.31 0 0 1-.34-.31l-.15-6.77a.49.49 0 0 1 .08-.24.32.32 0 0 1 .25-.1h2.11a.38.38 0 0 1 .25.1.42.42 0 0 1 .09.24z"/>\n  <path class="').concat(o, '" opacity=".3" d="M7.5 14.87a.33.33 0 0 1-.09.23.35.35 0 0 1-.23.09H5.29a.28.28 0 0 1-.23-.1.35.35 0 0 1-.06-.22V13a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.87a.35.35 0 0 1 .23.09.33.33 0 0 1 .09.22zm2.21-7.16a3 3 0 0 1-.37.73 7 7 0 0 1-.48.6 5.68 5.68 0 0 1-.52.48 8.22 8.22 0 0 0-.66.64 1 1 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.26.26 0 0 1-.21.1H5.38a.28.28 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.7 2.7 0 0 1 .12-.84 3.39 3.39 0 0 1 .33-.66A3.12 3.12 0 0 1 6 8.67a6.4 6.4 0 0 1 .49-.42c.25-.24.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.14 1.14 0 0 0-.73-.24 1.53 1.53 0 0 0-.49.07 2.2 2.2 0 0 0-.41.18 1.46 1.46 0 0 0-.29.18l-.1.09a.54.54 0 0 1-.25.06.31.31 0 0 1-.21-.13l-1-1.21a.31.31 0 0 1 0-.41l.21-.19a2.84 2.84 0 0 1 .55-.38A6.65 6.65 0 0 1 5.29 4a3.74 3.74 0 0 1 1.2-.17 3.86 3.86 0 0 1 1.2.17 3.75 3.75 0 0 1 1.09.56 2.67 2.67 0 0 1 1.06 2.19 3.1 3.1 0 0 1-.13.96z"/>\n  <path class="').concat(a, '" fill="#fff" d="M7.5 14.37a.33.33 0 0 1-.09.23.35.35 0 0 1-.23.09H5.29a.28.28 0 0 1-.23-.1.35.35 0 0 1-.06-.22v-1.84a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.87a.35.35 0 0 1 .23.09.33.33 0 0 1 .09.22zm2.21-7.16a3 3 0 0 1-.37.73 7 7 0 0 1-.48.6 5.68 5.68 0 0 1-.52.46 8.22 8.22 0 0 0-.66.64 1 1 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.26.26 0 0 1-.21.1H5.38a.28.28 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.7 2.7 0 0 1 .12-.84 3.39 3.39 0 0 1 .33-.66A3.12 3.12 0 0 1 6 8.17a6.4 6.4 0 0 1 .49-.42c.25-.24.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.14 1.14 0 0 0-.73-.24 1.53 1.53 0 0 0-.49.07 2.2 2.2 0 0 0-.41.18 1.46 1.46 0 0 0-.31.16l-.1.09a.54.54 0 0 1-.25.06.31.31 0 0 1-.21-.15l-1-1.21a.31.31 0 0 1 0-.41l.21-.19a2.84 2.84 0 0 1 .55-.38 6.65 6.65 0 0 1 .9-.37 3.74 3.74 0 0 1 1.2-.17 3.86 3.86 0 0 1 1.2.19 3.75 3.75 0 0 1 1.09.56 2.67 2.67 0 0 1 1.1 2.23 3.1 3.1 0 0 1-.13.96z"/>\n'),
            f = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#c93430"/>\n  <path class="').concat(o, '" d="M14 12.58a.4.4 0 0 1 0 .56l-1.38 1.38a.4.4 0 0 1-.56 0L9 11.44l-3.08 3.08a.4.4 0 0 1-.56 0L4 13.14a.4.4 0 0 1 0-.56L7.06 9.5 4 6.42a.4.4 0 0 1 0-.56l1.36-1.38a.4.4 0 0 1 .56 0L9 7.56l3.08-3.08a.4.4 0 0 1 .56 0L14 5.86a.4.4 0 0 1 0 .56L10.94 9.5z" opacity=".2"/>\n  <path class="').concat(a, '" d="M14 12.08a.4.4 0 0 1 0 .56L12.64 14a.4.4 0 0 1-.56 0L9 10.94 5.92 14a.4.4 0 0 1-.56 0L4 12.64a.4.4 0 0 1 0-.56L7.06 9 4 5.92a.4.4 0 0 1 0-.56L5.36 4a.4.4 0 0 1 .56 0L9 7.06 12.08 4a.4.4 0 0 1 .56 0L14 5.36a.4.4 0 0 1 0 .56L10.94 9z" fill="#f1f2f2"/>\n'),
            h = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#dd5357"/>\n  <path class="').concat(o, '" d="M14 12.58a.4.4 0 0 1 0 .56l-1.38 1.38a.4.4 0 0 1-.56 0L9 11.44l-3.08 3.08a.4.4 0 0 1-.56 0L4 13.14a.4.4 0 0 1 0-.56L7.06 9.5 4 6.42a.4.4 0 0 1 0-.56l1.36-1.38a.4.4 0 0 1 .56 0L9 7.56l3.08-3.08a.4.4 0 0 1 .56 0L14 5.86a.4.4 0 0 1 0 .56L10.94 9.5z" opacity=".2"/>\n  <path class="').concat(a, '" d="M14 12.08a.4.4 0 0 1 0 .56L12.64 14a.4.4 0 0 1-.56 0L9 10.94 5.92 14a.4.4 0 0 1-.56 0L4 12.64a.4.4 0 0 1 0-.56L7.06 9 4 5.92a.4.4 0 0 1 0-.56L5.36 4a.4.4 0 0 1 .56 0L9 7.06 12.08 4a.4.4 0 0 1 .56 0L14 5.36a.4.4 0 0 1 0 .56L10.94 9z" fill="#f1f2f2"/>\n'),
            _ = '\n  <path class="'.concat(i, '" d="M9 .5a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" opacity=".3"/>\n  <path class="').concat(r, '" d="M9 0a9 9 0 1 0 9 9 9 9 0 0 0-9-9z" fill="#e6912c"/>\n  <path class="').concat(o, '" d="M9.82 14.87a.34.34 0 0 1-.1.23.33.33 0 0 1-.23.09H7.6a.26.26 0 0 1-.22-.1.31.31 0 0 1-.09-.22V13a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.89a.33.33 0 0 1 .23.09.34.34 0 0 1 .1.22zM12 7.71a3.31 3.31 0 0 1-.36.73 7.11 7.11 0 0 1-.49.6 4.62 4.62 0 0 1-.52.48 6.62 6.62 0 0 0-.65.64.93.93 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.28.28 0 0 1-.22.1H7.69a.3.3 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.43 2.43 0 0 1 .13-.84 2.55 2.55 0 0 1 .33-.66 3.08 3.08 0 0 1 .45-.55c.16-.15.33-.29.49-.42s.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.13 1.13 0 0 0-.73-.24 1.57 1.57 0 0 0-.49.07 2.54 2.54 0 0 0-.41.18 1.46 1.46 0 0 0-.29.18l-.1.09a.53.53 0 0 1-.24.06c-.12 0-.19-.07-.21-.13l-1-1.21a.3.3 0 0 1 0-.41l.21-.19a2.67 2.67 0 0 1 .56-.38A5.72 5.72 0 0 1 7.61 4a3.68 3.68 0 0 1 1.19-.19A3.86 3.86 0 0 1 10 4a3.63 3.63 0 0 1 1.09.56 2.79 2.79 0 0 1 .78.92 2.76 2.76 0 0 1 .29 1.27 3.08 3.08 0 0 1-.16.96z" opacity=".2"/>\n  <path class="').concat(a, '" d="M9.82 14.37a.34.34 0 0 1-.1.23.33.33 0 0 1-.23.09H7.6a.26.26 0 0 1-.22-.1.31.31 0 0 1-.09-.22v-1.84a.33.33 0 0 1 .09-.22.29.29 0 0 1 .22-.09h1.89a.33.33 0 0 1 .23.09.34.34 0 0 1 .1.22zM12 7.21a3.31 3.31 0 0 1-.36.73 7.11 7.11 0 0 1-.49.6 4.62 4.62 0 0 1-.52.48 6.62 6.62 0 0 0-.65.64.93.93 0 0 0-.27.7v.21a.29.29 0 0 1-.09.22.28.28 0 0 1-.22.1H7.69a.3.3 0 0 1-.22-.1.29.29 0 0 1-.09-.22v-.35a2.43 2.43 0 0 1 .13-.84 2.55 2.55 0 0 1 .33-.66 3.08 3.08 0 0 1 .45-.55c.16-.15.33-.29.49-.42s.47-.45.64-.64a1 1 0 0 0 .26-.68.74.74 0 0 0-.3-.6 1.13 1.13 0 0 0-.73-.24 1.57 1.57 0 0 0-.49.07 2.54 2.54 0 0 0-.41.18 1.46 1.46 0 0 0-.29.16l-.1.09a.53.53 0 0 1-.24.06C7 6.14 6.93 6.1 6.91 6l-1-1.21a.3.3 0 0 1 0-.41l.21-.19a2.67 2.67 0 0 1 .56-.38 5.72 5.72 0 0 1 .9-.37 3.68 3.68 0 0 1 1.22-.13 3.86 3.86 0 0 1 1.2.19 3.63 3.63 0 0 1 1.09.56 2.79 2.79 0 0 1 .78.92 2.76 2.76 0 0 1 .29 1.27 3.08 3.08 0 0 1-.16.96z" fill="#fff"/>\n'),
            v = '\n  <path\n    class="'.concat(i, '"\n    d="M9,.5a9,9,0,1,0,9,9A9,9,0,0,0,9,.5Z"\n    opacity=".3"></path>\n\n  <path\n    class="').concat(r, '"\n    d="M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"\n    fill="#8a8886"></path>\n\n  <path\n    d="M3.59,10.23a.25.25,0,0,1,.24-.31l1.08-.15a.49.49,0,0,1,.2.06.25.25,0,0,1,.11.2,3.58,3.58,0,0,0,.42,1.28,3.68,3.68,0,0,0,.84,1.06,3.76,3.76,0,0,0,1.16.69A3.9,3.9,0,0,0,9,13.31,3.58,3.58,0,0,0,10.47,13a3.94,3.94,0,0,0,1.22-.81A4.09,4.09,0,0,0,12.5,11a3.74,3.74,0,0,0,0-3,4.09,4.09,0,0,0-.81-1.2A3.94,3.94,0,0,0,10.47,6,3.65,3.65,0,0,0,9,5.69a3.61,3.61,0,0,0-1.23.21,3.23,3.23,0,0,0-1.09.6L7.77,7.59c.16.15.21.29.16.38s-.18.17-.4.17H4.37a.36.36,0,0,1-.2,0A.76.76,0,0,1,4,8a.52.52,0,0,1-.17-.38V4.45c0-.2.06-.33.17-.38s.25,0,.41.16L5.51,5.34a5.83,5.83,0,0,1,1.64-1A5.19,5.19,0,0,1,9,4.05a5.3,5.3,0,0,1,2.12.44,5,5,0,0,1,1.73,1.16A5.59,5.59,0,0,1,14,7.38a5.23,5.23,0,0,1,.44,2.12A5.16,5.16,0,0,1,14,11.62a5.59,5.59,0,0,1-1.16,1.73,5.32,5.32,0,0,1-1.73,1.18A5.64,5.64,0,0,1,9,15a5.23,5.23,0,0,1-1.94-.37A5.27,5.27,0,0,1,4.21,12.1,5.1,5.1,0,0,1,3.59,10.23Z"\n    class="').concat(o, '"\n    opacity=".3"></path>\n\n  <path\n    d="M3.59,9.73a.25.25,0,0,1,.24-.31l1.08-.15a.49.49,0,0,1,.2.06.25.25,0,0,1,.11.2,3.58,3.58,0,0,0,.42,1.28,3.68,3.68,0,0,0,.84,1.06,3.76,3.76,0,0,0,1.16.69A3.9,3.9,0,0,0,9,12.81a3.58,3.58,0,0,0,1.47-.31,3.94,3.94,0,0,0,1.22-.81,4.09,4.09,0,0,0,.81-1.2,3.74,3.74,0,0,0,0-3,4.09,4.09,0,0,0-.81-1.2,3.94,3.94,0,0,0-1.22-.81A3.65,3.65,0,0,0,9,5.19a3.61,3.61,0,0,0-1.23.21A3.23,3.23,0,0,0,6.68,6L7.77,7.09c.16.15.21.29.16.38s-.18.17-.4.17H4.37a.36.36,0,0,1-.2,0A.76.76,0,0,1,4,7.49a.52.52,0,0,1-.17-.38V4c0-.2.06-.33.17-.38s.25,0,.41.16L5.51,4.84a5.83,5.83,0,0,1,1.64-1A5.19,5.19,0,0,1,9,3.55,5.3,5.3,0,0,1,11.12,4a5,5,0,0,1,1.73,1.16A5.59,5.59,0,0,1,14,6.88,5.23,5.23,0,0,1,14.45,9,5.16,5.16,0,0,1,14,11.12a5.59,5.59,0,0,1-1.16,1.73A5.32,5.32,0,0,1,11.12,14,5.64,5.64,0,0,1,9,14.45a5.23,5.23,0,0,1-1.94-.37A5.27,5.27,0,0,1,4.21,11.6,5.1,5.1,0,0,1,3.59,9.73Z"\n    class="').concat(a, '"\n    fill="#ffffff"></path>\n');
        n.d(t, "bestMove", (function() {
            return s
        })), n.d(t, "book", (function() {
            return c
        })), n.d(t, "blunder", (function() {
            return l
        })), n.d(t, "brilliant", (function() {
            return u
        })), n.d(t, "correct", (function() {
            return d
        })), n.d(t, "excellent", (function() {
            return p
        })), n.d(t, "forced", (function() {
            return b
        })), n.d(t, "good", (function() {
            return m
        })), n.d(t, "inaccuracy", (function() {
            return g
        })), n.d(t, "incorrect", (function() {
            return f
        })), n.d(t, "missedWin", (function() {
            return h
        })), n.d(t, "mistake", (function() {
            return _
        })), n.d(t, "undo", (function() {
            return v
        }))
    },
    190: function(e, t, n) {
        "use strict";
        var r = n(204),
            a = n(30),
            o = n(198),
            i = function setAttributes(e, t) {
                var n = t.value.src,
                    a = t.value.srcset ? "".concat(Object(r.a)(n), " 2x") : void 0;
                n && e.setAttribute("src", n), a && e.setAttribute("srcset", a), o.a.unobserve(e)
            };
        t.a = {
            bind: function bind(e, t) {
                a.a.$on("visibility-observer-change", (function(n) {
                    n === e && (i(e, t), e.dataset.visible = !0)
                })), o.a.observe(e)
            },
            componentUpdated: function componentUpdated(e, t) {
                void 0 !== e.dataset.visible && i(e, t)
            }
        }
    },
    193: function(e, t, n) {
        "use strict";
        var r = n(25),
            a = n.n(r),
            o = n(110),
            i = n(55),
            s = n(30),
            c = n(22),
            l = n(245),
            u = n(42),
            d = n(50);
        function setPopoverPosition(e) {
            var t,
                n = Object(u.e)() && window.innerWidth < 768;
            return Object(d.a)() ? t = "left: auto; right: ".concat(e.right, "px; top: ").concat(e.top, "px;") : (t = "transform: translate(".concat(e.left, "px, ").concat(e.top, "px);"), n && (t = "transform: translateY(".concat(e.top, "px);"))), t
        }
        var p = {
                hideUserPopover: function hideUserPopover(e) {
                    e.isHovered = !1, e.show = !1
                },
                hover: function hover(e) {
                    e.isHovered = !0
                },
                resetUser: function resetUser(e) {
                    e.user = {
                        avatarUrl: "",
                        bestRating: 0,
                        bestRatingType: "",
                        chessTitle: "",
                        country: {},
                        joinDate: "",
                        lastLoginDate: "",
                        membership: {},
                        onlineStatus: "",
                        username: ""
                    }
                },
                showUserPopover: function showUserPopover(e) {
                    e.show = !0
                },
                setPosition: function setPosition(e, t) {
                    e.position = t
                },
                setUser: function setUser(e, t) {
                    e.user = t
                }
            },
            b = n(1),
            m = n.n(b),
            g = n(125);
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var f = {
                namespaced: !0,
                mutations: p,
                actions: {
                    fetchUserPopover: function fetchUserPopover(e, t) {
                        var n = e.commit;
                        g.a.getUser(t).then((function(e) {
                            n("setUser", function _objectSpread(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                                        m()(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e.data, {
                                username: t
                            }))
                        })).catch((function() {
                            n("setUser", {
                                userNotExist: !0
                            })
                        }))
                    }
                },
                state: {
                    isHovered: !1,
                    show: !1,
                    user: {
                        avatarUrl: "",
                        bestRating: 0,
                        bestRatingType: "",
                        chessTitle: "",
                        country: {},
                        joinDate: "",
                        lastLoginDate: "",
                        membership: {},
                        onlineStatus: "",
                        username: ""
                    },
                    position: {
                        x: "right",
                        y: "bottom",
                        top: 0,
                        left: 0
                    }
                }
            },
            h = n(87),
            _ = n(38),
            v = n(47),
            w = n(21),
            y = n(8),
            k = {
                namespaced: !0,
                mutations: {
                    newMessage: function newMessage(e, t) {
                        e.message = t
                    }
                },
                state: {
                    message: null
                }
            },
            O = n(4),
            E = n(250),
            S = n(146),
            A = n(14),
            C = n(126),
            T = {
                name: "admin-actions",
                components: {
                    IconButton: C.a
                },
                props: {
                    canModerate: {
                        type: Boolean,
                        default: !1
                    },
                    canMuteOnChat: {
                        type: Boolean,
                        default: !1
                    },
                    clientName: String,
                    canWarnOnChat: Boolean,
                    canModerateOnChat: Boolean
                }
            },
            x = n(209),
            j = n(3);
        var M = Object(j.a)(T, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: e.$style.component
                }, [e.canModerate ? n("icon-button", {
                    attrs: {
                        "icon-name": "flag",
                        "btn-color": "red",
                        label: e.$trans("Warn")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("warn-user")
                        }
                    }
                }) : e._e(), e._v(" "), e.canModerate ? n("icon-button", {
                    attrs: {
                        "icon-name": "chat-x",
                        "btn-color": "red",
                        label: e.$trans("Mute")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("mute-user")
                        }
                    }
                }) : e._e(), e._v(" "), e.canModerate ? n("icon-button", {
                    attrs: {
                        "icon-name": "exit",
                        "btn-color": "red",
                        label: e.$trans("Kick")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("kick-user")
                        }
                    }
                }) : e._e(), e._v(" "), e.canModerate ? n("icon-button", {
                    attrs: {
                        "icon-name": "user-block",
                        "btn-color": "red",
                        label: e.$trans("Ban")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("ban-user")
                        }
                    }
                }) : e._e(), e._v(" "), e.canModerate && e.clientName ? n("icon-button", {
                    attrs: {
                        "icon-name": "circle-info",
                        label: e.clientName
                    }
                }) : e._e(), e._v(" "), e.canModerate && (e.canWarnOnChat || e.canModerateOnChat) ? n("div", {
                    class: e.$style.separator
                }) : e._e(), e._v(" "), e.canWarnOnChat ? n("icon-button", {
                    attrs: {
                        "icon-name": "flag",
                        "btn-color": "red",
                        label: e.$trans("Chat Warn")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("chat-warn-user")
                        }
                    }
                }) : e._e(), e._v(" "), e.canModerateOnChat || e.canMuteOnChat ? n("icon-button", {
                    attrs: {
                        "icon-name": "chat-x",
                        "btn-color": "red",
                        label: e.$trans("Chat Mute")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("chat-mute-user")
                        }
                    }
                }) : e._e(), e._v(" "), e.canModerateOnChat ? n("icon-button", {
                    attrs: {
                        "icon-name": "exit",
                        "btn-color": "red",
                        label: e.$trans("Chat Kick")
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("chat-kick-user")
                        }
                    }
                }) : e._e()], 1)
            }), [], !1, (function injectStyles(e) {
                this.$style = x.default.locals || x.default
            }), null, null).exports,
            I = n(246),
            L = n(44),
            R = n(95),
            U = n(183),
            P = n(24),
            F = n(16),
            D = {
                name: "icon-link",
                components: {
                    IconFont: F.a
                },
                directives: {
                    Tooltip: P.a
                },
                props: {
                    url: String,
                    iconColor: String,
                    iconName: {
                        type: String,
                        required: !0
                    },
                    label: {
                        type: String,
                        required: !0
                    }
                }
            },
            N = n(210);
        var $ = Object(j.a)(D, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: {
                            content: e.label,
                            delay: 100
                        },
                        expression: "{\n    content: label,\n    delay: 100\n  }"
                    }],
                    class: [e.$style.link, e.$style[e.iconColor]],
                    attrs: {
                        href: e.url
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("click", t)
                        }
                    }
                }, [n("icon-font", {
                    class: [e.$style.icon],
                    attrs: {
                        theme: "primary",
                        name: e.iconName
                    }
                })], 1)
            }), [], !1, (function icon_link_injectStyles(e) {
                this.$style = N.default.locals || N.default
            }), null, null).exports,
            B = n(187),
            q = {
                name: "labeled-icon-button",
                components: {
                    IconFont: F.a
                },
                props: {
                    url: String,
                    iconColor: String,
                    iconName: {
                        type: String,
                        required: !0
                    },
                    label: {
                        type: String,
                        required: !0
                    }
                }
            },
            G = n(211);
        var H = Object(j.a)(q, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a", {
                    class: [e.$style.link, e.$style[e.iconColor]],
                    attrs: {
                        href: e.url
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("click", t)
                        }
                    }
                }, [n("icon-font", {
                    class: [e.$style.icon],
                    attrs: {
                        theme: "primary",
                        name: e.iconName
                    }
                }), e._v(" "), n("span", {
                    class: e.$style.label,
                    domProps: {
                        textContent: e._s(e.label)
                    }
                })], 1)
            }), [], !1, (function labeled_icon_link_injectStyles(e) {
                this.$style = G.default.locals || G.default
            }), null, null).exports,
            W = {
                methods: {
                    hasVisibleDropdown: function hasVisibleDropdown() {
                        return Object.values(this.dropdown).some((function(e) {
                            return "block" === e.display
                        }))
                    },
                    createDropdown: function createDropdown(e) {
                        var t = {
                            dropdown: {}
                        };
                        return e.forEach((function(e) {
                            t.dropdown[e] = {
                                display: "none",
                                transform: "translate(0, 0)"
                            }
                        })), t
                    },
                    hideDropdown: function hideDropdown() {
                        var e = this;
                        Object.keys(this.dropdown).forEach((function(t) {
                            e.dropdown[t].display = "none"
                        }))
                    },
                    showDropdown: function showDropdown(e, t, n) {
                        var r = this,
                            a = document.querySelector('ul[data-dropdown="'.concat(t, '"]'));
                        a && ("block" === this.dropdown[t].display ? this.dropdown[t].display = "none" : (this.hideDropdown(), this.dropdown[t].display = "block", this.$nextTick((function() {
                            var o = e.target.getBoundingClientRect(),
                                i = a.getBoundingClientRect(),
                                s = i.width,
                                c = i.height,
                                l = Object(v.b)(o, c, s);
                            n && n(l);
                            var u = l.left,
                                d = l.top;
                            r.dropdown[t].transform = "translate(".concat(u, "px, ").concat(d, "px)")
                        }))))
                    }
                }
            };
        function chat_options_dropdownvue_type_script_lang_js_ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var V = {
                name: "chat-options-dropdown",
                directives: {
                    Tooltip: P.a
                },
                mixins: [W],
                props: {
                    target: {
                        type: HTMLElement,
                        required: !0
                    },
                    position: {
                        type: Object,
                        required: !0
                    },
                    chatOptions: {
                        type: Array,
                        default: function _default() {
                            return []
                        }
                    }
                },
                data: function data() {
                    return function chat_options_dropdownvue_type_script_lang_js_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? chat_options_dropdownvue_type_script_lang_js_ownKeys(Object(n), !0).forEach((function(t) {
                                m()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : chat_options_dropdownvue_type_script_lang_js_ownKeys(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, this.createDropdown(["chat"]))
                },
                mounted: function mounted() {
                    var e = this,
                        t = {
                            target: this.target
                        };
                    this.showDropdown(t, "chat", (function(t) {
                        t.left -= e.position.left, t.top -= e.position.top
                    }))
                },
                methods: {
                    onClickOption: function onClickOption(e, t) {
                        e.roomId = t, this.$emit("option-selected", e)
                    }
                }
            },
            z = n(212);
        var K = Object(j.a)(V, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("ul", {
                class: e.$style.component,
                style: e.dropdown.chat,
                attrs: {
                    "data-dropdown": "chat"
                }
            }, [e._l(e.chatOptions, (function(t) {
                return n("li", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: t.title,
                        expression: "chatOption.title"
                    }],
                    key: t.roomId,
                    domProps: {
                        textContent: e._s(t.title)
                    },
                    on: {
                        click: function(n) {
                            return e.onClickOption(n, t.roomId)
                        }
                    }
                })
            })), e._v(" "), e._m(0), e._v(" "), e._m(1), e._v(" "), n("i", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.$trans("Close"),
                    expression: "$trans('Close')"
                }],
                class: [e.$style.close, "icon-x"],
                on: {
                    click: function(t) {
                        return e.$emit("hide")
                    }
                }
            })], 2)
        }), [function() {
            var e = this,
                t = e.$createElement;
            return (e._self._c || t)("li", {
                domProps: {
                    textContent: e._s(e.$trans("Private Chat"))
                },
                on: {
                    click: function(t) {
                        return e.onClickOption(t)
                    }
                }
            })
        }, function() {
            var e = this.$createElement;
            return (this._self._c || e)("span", {
                class: this.$style.title,
                domProps: {
                    textContent: this._s(this.$trans("Chat"))
                }
            })
        }], !1, (function chat_options_dropdown_injectStyles(e) {
            this.$style = z.default.locals || z.default
        }), null, null).exports;
        function analysis_options_dropdownvue_type_script_lang_js_ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var Y = {
                name: "analysis-options-dropdown",
                directives: {
                    Tooltip: P.a
                },
                mixins: [W],
                props: {
                    target: {
                        type: HTMLElement,
                        required: !0
                    },
                    position: {
                        type: Object,
                        required: !0
                    },
                    analysisOptions: {
                        type: Array,
                        default: function _default() {
                            return []
                        }
                    }
                },
                data: function data() {
                    return function analysis_options_dropdownvue_type_script_lang_js_objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? analysis_options_dropdownvue_type_script_lang_js_ownKeys(Object(n), !0).forEach((function(t) {
                                m()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : analysis_options_dropdownvue_type_script_lang_js_ownKeys(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, this.createDropdown(["analysis"]))
                },
                mounted: function mounted() {
                    var e = this,
                        t = {
                            target: this.target
                        };
                    this.showDropdown(t, "analysis", (function(t) {
                        t.left -= e.position.left, t.top -= e.position.top
                    }))
                },
                methods: {
                    onClickOption: function onClickOption(e, t) {
                        e.examineId = t, this.$emit("option-selected", e)
                    }
                }
            },
            Z = n(213);
        var Q = Object(j.a)(Y, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("ul", {
                    class: e.$style.component,
                    style: e.dropdown.analysis,
                    attrs: {
                        "data-dropdown": "analysis"
                    }
                }, [e._l(e.analysisOptions, (function(t) {
                    return n("li", {
                        directives: [{
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: t.title,
                            expression: "analysisOption.title"
                        }],
                        key: t.examineId,
                        domProps: {
                            textContent: e._s(t.title)
                        },
                        on: {
                            click: function(n) {
                                return e.onClickOption(n, t.examineId)
                            }
                        }
                    })
                })), e._v(" "), e._m(0), e._v(" "), n("i", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: e.$trans("Close"),
                        expression: "$trans('Close')"
                    }],
                    class: [e.$style.close, "icon-x"],
                    on: {
                        click: function(t) {
                            return e.$emit("hide")
                        }
                    }
                })], 2)
            }), [function() {
                var e = this.$createElement;
                return (this._self._c || e)("span", {
                    class: this.$style.title,
                    domProps: {
                        textContent: this._s(this.$trans("Analysis Board"))
                    }
                })
            }], !1, (function analysis_options_dropdown_injectStyles(e) {
                this.$style = Z.default.locals || Z.default
            }), null, null).exports,
            J = {
                name: "user-actions",
                components: {
                    IconFont: F.a,
                    IconButton: C.a,
                    IconLink: $,
                    LabeledIconButton: B.a,
                    LabeledIconLink: H,
                    ChatOptionsDropdown: K,
                    AnalysisOptionsDropdown: Q
                },
                props: {
                    avatar: String,
                    canAddFriend: Boolean,
                    canBlockUser: Boolean,
                    canReportUser: Boolean,
                    canCreateChallenge: Boolean,
                    canFollowUser: Boolean,
                    canGiftMembership: Boolean,
                    canRemoveFriend: Boolean,
                    canSendMessage: Boolean,
                    canInviteToChat: Boolean,
                    canSendTrophy: Boolean,
                    canUnblockUser: Boolean,
                    canUnfollowUser: Boolean,
                    canUseGlobalChat: Boolean,
                    isEnabled: Boolean,
                    hasInboundFriendRequest: Boolean,
                    hasOutboundFriendRequest: Boolean,
                    loggedAsAnother: Boolean,
                    username: String,
                    canObserveGame: {
                        type: Boolean,
                        default: !1
                    },
                    isBughousePartner: {
                        type: Boolean,
                        default: !1
                    },
                    challengeUrl: String,
                    canCancelFriendRequest: {
                        type: Boolean,
                        default: !1
                    },
                    canDeclineFriendRequest: {
                        type: Boolean,
                        default: !1
                    },
                    canAcceptFriendRequest: {
                        type: Boolean,
                        default: !1
                    },
                    archiveUrl: String,
                    chatOptions: {
                        type: Array,
                        default: function _default() {
                            return []
                        }
                    },
                    position: {
                        type: Object,
                        default: function _default() {
                            return {}
                        }
                    },
                    canInviteToAnalysis: {
                        type: Boolean,
                        default: !1
                    },
                    analysisOptions: {
                        type: Array,
                        default: function _default() {
                            return []
                        }
                    },
                    isConfirmVisible: {
                        type: Boolean,
                        default: !1
                    },
                    showBughousePartner: {
                        type: Boolean,
                        default: !1
                    },
                    membershipUrl: String,
                    dynamicActions: Array
                },
                data: function data() {
                    return {
                        allActions: !1,
                        chatDropdownTarget: null,
                        analysisDropdownTarget: null,
                        buttonsListStyle: null
                    }
                },
                computed: {
                    showGlobalChatButton: function showGlobalChatButton() {
                        return this.canUseGlobalChat && !this.canInviteToChat
                    }
                },
                methods: {
                    getIconComponent: function getIconComponent(e) {
                        return e ? $ : C.a
                    },
                    getIconLabeledComponent: function getIconLabeledComponent(e) {
                        return e ? H : B.a
                    },
                    hidePopover: function hidePopover() {
                        this.$emit("user-popover-hide")
                    },
                    onClickChallenge: function onClickChallenge(e) {
                        this.challengeUrl ? this.hidePopover() : (e.username = this.username, e.avatar = this.avatar, this.$emit("create-challenge", e))
                    },
                    onClickMessage: function onClickMessage(e) {
                        e.username = this.username, e.avatar = this.avatar, this.$emit("send-message", e)
                    },
                    onClickChat: function onClickChat(e) {
                        this.chatOptions.length ? this.chatDropdownTarget = e.target : this.onClickChatOption(e)
                    },
                    onClickChatOption: function onClickChatOption(e) {
                        this.hideChatDropdown(), this.$emit("request-chat", e)
                    },
                    onClickAnalysis: function onClickAnalysis(e) {
                        this.analysisDropdownTarget = e.target
                    },
                    onClickAnalysisOption: function onClickAnalysisOption(e) {
                        this.hideAnalysisDropdown(), this.$emit("invite-analysis", e)
                    },
                    onClickAddFriend: function onClickAddFriend() {
                        this.$emit("add-friend")
                    },
                    onClickCancelFriendRequest: function onClickCancelFriendRequest() {
                        this.$emit("cancel-friend-request")
                    },
                    onClickDeclineFriendRequest: function onClickDeclineFriendRequest() {
                        this.$emit("decline-friend-request")
                    },
                    onClickTrophy: function onClickTrophy(e) {
                        e.username = this.username, this.$emit("show-trophy", e)
                    },
                    onClickGift: function onClickGift() {
                        this.$emit("show-gift")
                    },
                    onClickArchive: function onClickArchive(e) {
                        this.archiveUrl ? this.hidePopover() : (e.username = this.username, this.$emit("show-archive", e))
                    },
                    onClickRemoveFriend: function onClickRemoveFriend() {
                        this.$emit("remove-friend")
                    },
                    onClickAcceptFriendRequest: function onClickAcceptFriendRequest() {
                        this.$emit("accept-friend-request")
                    },
                    onClickFollowUser: function onClickFollowUser() {
                        this.$emit("follow-user")
                    },
                    onClickUnfollowUser: function onClickUnfollowUser() {
                        this.$emit("unfollow-user")
                    },
                    onClickBlockUser: function onClickBlockUser() {
                        this.$emit("block-user")
                    },
                    onClickUnblockUser: function onClickUnblockUser() {
                        this.$emit("unblock-user")
                    },
                    onClickReport: function onClickReport() {
                        this.$emit("show-report")
                    },
                    onClickObserve: function onClickObserve() {
                        this.$emit("observe-user")
                    },
                    onClickPartner: function onClickPartner() {
                        this.$emit("bughouse-partner")
                    },
                    onClickUnpartner: function onClickUnpartner() {
                        this.$emit("bughouse-unpartner")
                    },
                    showAllActions: function showAllActions() {
                        var e = this;
                        this.allActions = !0, this.$nextTick((function() {
                            var t = document.getElementsByClassName(e.$style.buttonsList)[0];
                            if (t) {
                                var n = a()(t.children),
                                    r = Math.max.apply(Math, a()(n.map((function(e) {
                                        return e.offsetHeight
                                    }))));
                                e.buttonsListStyle = {
                                    height: "".concat(r * Math.round(n.length / 2), "px")
                                }
                            }
                            e.$nextTick((function() {
                                e.$emit("all-actions-shown")
                            }))
                        }))
                    },
                    startDirectChat: function startDirectChat() {
                        this.hidePopover(), this.$emit("start-direct-chat")
                    },
                    hideChatDropdown: function hideChatDropdown() {
                        this.chatDropdownTarget = null
                    },
                    hideAnalysisDropdown: function hideAnalysisDropdown() {
                        this.analysisDropdownTarget = null
                    }
                }
            },
            X = n(214);
        var ee = Object(j.a)(J, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: e.$style.component
                }, [e.allActions ? e._e() : n("div", {
                    class: e.$style["icons-list"]
                }, [e.canCreateChallenge ? n(e.getIconComponent(e.challengeUrl), {
                    tag: "component",
                    attrs: {
                        "icon-name": "chess-board-plus",
                        label: e.$trans("Challenge"),
                        url: e.challengeUrl
                    },
                    on: {
                        click: e.onClickChallenge
                    }
                }) : e._e(), e._v(" "), e.showGlobalChatButton ? n("icon-button", {
                    attrs: {
                        "icon-name": "chat",
                        label: e.$trans("Chat")
                    },
                    on: {
                        click: e.startDirectChat
                    }
                }) : e._e(), e._v(" "), e.loggedAsAnother ? n("icon-button", {
                    attrs: {
                        "icon-name": "mail-plus",
                        label: e.$trans("Message")
                    },
                    on: {
                        click: e.onClickMessage
                    }
                }) : e._e(), e._v(" "), e.canInviteToChat ? n("icon-button", {
                    attrs: {
                        "icon-name": "chat",
                        label: e.$trans("Chat")
                    },
                    on: {
                        click: e.onClickChat
                    }
                }) : e._e(), e._v(" "), e.canAddFriend ? n("icon-button", {
                    attrs: {
                        "icon-name": "user-plus",
                        label: e.$trans("Add Friend")
                    },
                    on: {
                        click: e.onClickAddFriend
                    }
                }) : e._e(), e._v(" "), e.canAcceptFriendRequest ? n("icon-button", {
                    attrs: {
                        "icon-name": "user-plus",
                        label: e.$trans("Accept Request")
                    },
                    on: {
                        click: e.onClickAcceptFriendRequest
                    }
                }) : e._e(), e._v(" "), e.canDeclineFriendRequest ? n("icon-button", {
                    attrs: {
                        "btn-color": "grey",
                        "icon-name": "user-x",
                        label: e.$trans("Decline Request")
                    },
                    on: {
                        click: e.onClickDeclineFriendRequest
                    }
                }) : e._e(), e._v(" "), e.canCancelFriendRequest ? n("icon-button", {
                    attrs: {
                        "btn-color": "grey",
                        "icon-name": "user-x",
                        label: e.$trans("Cancel Request")
                    },
                    on: {
                        click: e.onClickCancelFriendRequest
                    }
                }) : e._e(), e._v(" "), e.canRemoveFriend ? n("icon-button", {
                    attrs: {
                        "icon-name": "user-x",
                        label: e.$trans("Remove Friend")
                    },
                    on: {
                        click: e.onClickRemoveFriend
                    }
                }) : e._e(), e._v(" "), e.canGiftMembership ? n(e.getIconComponent(e.membershipUrl), {
                    tag: "component",
                    attrs: {
                        "btn-color": "blue",
                        "icon-color": "blue",
                        "icon-name": "display-slider",
                        label: e.$trans("Gift Membership"),
                        url: e.membershipUrl
                    },
                    on: {
                        click: e.onClickGift
                    }
                }) : e._e(), e._v(" "), e.canObserveGame ? n("icon-button", {
                    attrs: {
                        "icon-name": "binoculars",
                        label: e.$trans("Observe Game")
                    },
                    on: {
                        click: e.onClickObserve
                    }
                }) : e._e(), e._v(" "), e.canReportUser ? n("icon-button", {
                    attrs: {
                        "icon-name": "circle-danger",
                        label: e.$trans("Report")
                    },
                    on: {
                        click: e.onClickReport
                    }
                }) : e._e(), e._v(" "), e.loggedAsAnother ? e._e() : n(e.getIconComponent(e.archiveUrl), {
                    tag: "component",
                    attrs: {
                        "icon-name": "chess-board-folder",
                        label: e.$trans("Archive"),
                        url: e.archiveUrl
                    },
                    on: {
                        click: e.onClickArchive
                    }
                }), e._v(" "), e.loggedAsAnother && e.isEnabled ? n("button", {
                    class: e.$style.more,
                    attrs: {
                        type: "button"
                    },
                    on: {
                        click: e.showAllActions
                    }
                }, [e._v("\n      " + e._s(e.$trans("More")) + "\n      "), n("icon-font", {
                    class: e.$style.caret,
                    attrs: {
                        name: "caret-down",
                        theme: "primary"
                    }
                })], 1) : e._e()], 1), e._v(" "), e.allActions && !e.isConfirmVisible ? n("div", {
                    class: e.$style.buttonsList,
                    style: e.buttonsListStyle
                }, [e.canCreateChallenge ? n(e.getIconLabeledComponent(e.challengeUrl), {
                    tag: "component",
                    attrs: {
                        "icon-name": "chess-board-plus",
                        label: e.$trans("Challenge"),
                        url: e.challengeUrl
                    },
                    on: {
                        click: e.onClickChallenge
                    }
                }) : e._e(), e._v(" "), e.showGlobalChatButton ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "chat",
                        label: e.$trans("Chat")
                    },
                    on: {
                        click: e.startDirectChat
                    }
                }) : e._e(), e._v(" "), e.loggedAsAnother ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "mail-plus",
                        label: e.$trans("Message")
                    },
                    on: {
                        click: e.onClickMessage
                    }
                }) : e._e(), e._v(" "), e.canInviteToChat ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "chat",
                        label: e.$trans("Chat")
                    },
                    on: {
                        click: e.onClickChat
                    }
                }) : e._e(), e._v(" "), e.canAddFriend ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "user-plus",
                        label: e.$trans("Add Friend")
                    },
                    on: {
                        click: e.onClickAddFriend
                    }
                }) : e._e(), e._v(" "), e.canAcceptFriendRequest ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "user-plus",
                        label: e.$trans("Accept Request")
                    },
                    on: {
                        click: e.onClickAcceptFriendRequest
                    }
                }) : e._e(), e._v(" "), e.canDeclineFriendRequest ? n("labeled-icon-button", {
                    attrs: {
                        "btn-color": "grey",
                        "icon-name": "user-x",
                        label: e.$trans("Decline Request")
                    },
                    on: {
                        click: e.onClickDeclineFriendRequest
                    }
                }) : e._e(), e._v(" "), e.canCancelFriendRequest ? n("labeled-icon-button", {
                    attrs: {
                        "btn-color": "grey",
                        "icon-name": "user-x",
                        label: e.$trans("Cancel Request")
                    },
                    on: {
                        click: e.onClickCancelFriendRequest
                    }
                }) : e._e(), e._v(" "), e.canRemoveFriend ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "user-x",
                        label: e.$trans("Remove Friend")
                    },
                    on: {
                        click: e.onClickRemoveFriend
                    }
                }) : e._e(), e._v(" "), e.canObserveGame ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "binoculars",
                        label: e.$trans("Observe")
                    },
                    on: {
                        click: e.onClickObserve
                    }
                }) : e._e(), e._v(" "), e.canFollowUser ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "follow",
                        label: e.$trans("Follow")
                    },
                    on: {
                        click: e.onClickFollowUser
                    }
                }) : e._e(), e._v(" "), e.canUnfollowUser ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "unfollow",
                        label: e.$trans("Unfollow")
                    },
                    on: {
                        click: e.onClickUnfollowUser
                    }
                }) : e._e(), e._v(" "), e.canGiftMembership ? n("labeled-icon-button", {
                    attrs: {
                        "btn-color": "blue",
                        "icon-name": "display-slider",
                        label: e.$trans("Gift Membership")
                    },
                    on: {
                        click: e.onClickGift
                    }
                }) : e._e(), e._v(" "), e.canSendTrophy ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "trophy-plus",
                        label: e.$trans("Give Award")
                    },
                    on: {
                        click: e.onClickTrophy
                    }
                }) : e._e(), e._v(" "), e.showBughousePartner && !e.isBughousePartner ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "bughouse",
                        label: e.$trans("Partner")
                    },
                    on: {
                        click: e.onClickPartner
                    }
                }) : e._e(), e._v(" "), e.showBughousePartner && e.isBughousePartner ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "bughouse",
                        label: e.$trans("Unpartner")
                    },
                    on: {
                        click: e.onClickUnpartner
                    }
                }) : e._e(), e._v(" "), e.canInviteToAnalysis ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "chess-board-search",
                        label: e.$trans("Analysis Board")
                    },
                    on: {
                        click: e.onClickAnalysis
                    }
                }) : e._e(), e._v(" "), n(e.getIconLabeledComponent(e.archiveUrl), {
                    tag: "component",
                    attrs: {
                        "icon-name": "chess-board-folder",
                        label: e.$trans("Archive"),
                        url: e.archiveUrl
                    },
                    on: {
                        click: e.onClickArchive
                    }
                }), e._v(" "), e.canBlockUser ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "circle-block",
                        label: e.$trans("Block")
                    },
                    on: {
                        click: e.onClickBlockUser
                    }
                }) : e._e(), e._v(" "), e.canUnblockUser ? n("labeled-icon-button", {
                    attrs: {
                        "btn-color": "red",
                        "icon-name": "circle-block",
                        label: e.$trans("Unblock")
                    },
                    on: {
                        click: e.onClickUnblockUser
                    }
                }) : e._e(), e._v(" "), e.canReportUser ? n("labeled-icon-button", {
                    attrs: {
                        "icon-name": "circle-danger",
                        label: e.$trans("Report")
                    },
                    on: {
                        click: e.onClickReport
                    }
                }) : e._e(), e._v(" "), e.dynamicActions ? e._l(e.dynamicActions, (function(e, t) {
                    return n("labeled-icon-button", {
                        key: t,
                        attrs: {
                            "icon-name": e.iconName,
                            label: e.label
                        },
                        on: {
                            click: e.handler
                        }
                    })
                })) : e._e()], 2) : e._e(), e._v(" "), e.chatDropdownTarget ? n("chat-options-dropdown", {
                    attrs: {
                        target: e.chatDropdownTarget,
                        position: e.position,
                        "chat-options": e.chatOptions
                    },
                    on: {
                        "option-selected": e.onClickChatOption,
                        hide: e.hideChatDropdown
                    }
                }) : e._e(), e._v(" "), e.analysisDropdownTarget ? n("analysis-options-dropdown", {
                    attrs: {
                        target: e.analysisDropdownTarget,
                        position: e.position,
                        "analysis-options": e.analysisOptions
                    },
                    on: {
                        "option-selected": e.onClickAnalysisOption,
                        hide: e.hideAnalysisDropdown
                    }
                }) : e._e()], 1)
            }), [], !1, (function user_actions_injectStyles(e) {
                this.$style = X.default.locals || X.default
            }), null, null).exports,
            te = n(182),
            ne = {
                name: "user-flair-status",
                props: {
                    status: {
                        type: String,
                        required: !0
                    }
                }
            },
            re = n(215);
        var ae = Object(j.a)(ne, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.status.length ? t("div", {
                    class: this.$style.component,
                    domProps: {
                        textContent: this._s(this.status)
                    }
                }) : this._e()
            }), [], !1, (function user_flair_status_injectStyles(e) {
                this.$style = re.default.locals || re.default
            }), null, null).exports,
            oe = {
                name: "user-rating",
                components: {
                    IconFont: F.a
                },
                props: {
                    icon: {
                        type: String,
                        required: !0
                    },
                    rating: {
                        type: Number,
                        required: !0
                    }
                }
            },
            ie = n(216);
        var se = Object(j.a)(oe, (function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("span", {
                    class: e.$style.component
                }, [n("icon-font", {
                    class: e.$style.icon,
                    attrs: {
                        theme: "primary",
                        name: e.icon
                    }
                }), e._v(" "), n("span", {
                    class: e.$style.rating
                }, [e._v("\n    " + e._s(e.rating) + "\n  ")])], 1)
            }), [], !1, (function user_rating_injectStyles(e) {
                this.$style = ie.default.locals || ie.default
            }), null, null).exports,
            ce = n(239),
            le = {
                name: "user-popover",
                components: {
                    LoaderThreeBounce: U.a,
                    UserAvatar: te.a,
                    UserFlairStatus: ae,
                    UserRating: se,
                    UserTagline: ce.a,
                    UserActions: ee,
                    FormButton: L.a,
                    FormInput: R.a,
                    AdminActions: M
                },
                directives: {
                    Tooltip: P.a,
                    ClickOutside: I.a
                },
                props: {
                    avatar: {
                        type: String,
                        required: !0
                    },
                    ratings: {
                        type: Array,
                        required: !0
                    },
                    chessTitle: {
                        type: String,
                        required: !1
                    },
                    country: {
                        type: Object,
                        required: !1
                    },
                    flair: {
                        type: Object,
                        default: function _default() {
                            return {
                                code: "",
                                status: ""
                            }
                        }
                    },
                    isEnabled: {
                        type: Boolean
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    joinedDate: String,
                    lastLoginDate: String,
                    membership: {
                        type: Number,
                        required: !1
                    },
                    onlineStatus: {
                        type: [Boolean, String],
                        required: !1
                    },
                    usernameElementRef: {
                        type: HTMLElement,
                        required: !0
                    },
                    username: {
                        type: String,
                        required: !1
                    },
                    canAddFriend: Boolean,
                    canBlockUser: Boolean,
                    canUseGlobalChat: Boolean,
                    canReportUser: Boolean,
                    canCreateChallenge: Boolean,
                    canFollowUser: Boolean,
                    canGiftMembership: Boolean,
                    canRemoveFriend: Boolean,
                    canSendMessage: Boolean,
                    canInviteToChat: Boolean,
                    canSendTrophy: Boolean,
                    canUnblockUser: Boolean,
                    canUnfollowUser: Boolean,
                    loggedAsAnother: Boolean,
                    canMuteUser: {
                        type: Boolean,
                        default: !1
                    },
                    canObserveGame: {
                        type: Boolean,
                        default: !1
                    },
                    isBughousePartner: {
                        type: Boolean,
                        default: !1
                    },
                    shouldShowModeration: {
                        type: Boolean,
                        default: !1
                    },
                    challengeUrl: String,
                    canCancelFriendRequest: {
                        type: Boolean,
                        default: !1
                    },
                    canDeclineFriendRequest: {
                        type: Boolean,
                        default: !1
                    },
                    canAcceptFriendRequest: {
                        type: Boolean,
                        default: !1
                    },
                    archiveUrl: String,
                    chatOptions: {
                        type: Array,
                        default: function _default() {
                            return []
                        }
                    },
                    canInviteToAnalysis: {
                        type: Boolean,
                        default: !1
                    },
                    analysisOptions: {
                        type: Array,
                        default: function _default() {
                            return []
                        }
                    },
                    canModerate: {
                        type: Boolean,
                        default: !1
                    },
                    clientName: String,
                    canWarnOnChat: Boolean,
                    canModerateOnChat: Boolean,
                    showBughousePartner: {
                        type: Boolean,
                        default: !1
                    },
                    openProfileOnNewTab: {
                        type: Boolean,
                        required: !1
                    },
                    membershipUrl: String,
                    dynamicActions: Array,
                    clubChatIdForModeratorActions: String,
                    uuid: String
                },
                data: function data() {
                    return {
                        clubChatModeratorMessage: "",
                        isLive: y.i,
                        isLoggedIn: Object(_.f)(),
                        isOnline: y.j,
                        offset: 12,
                        translations: y.q,
                        confirmMessage: null,
                        confirmCallback: null,
                        position: {
                            x: 0,
                            y: 0,
                            top: 0,
                            left: 0
                        }
                    }
                },
                computed: {
                    adminActionsIsVisible: function adminActionsIsVisible() {
                        return this.canModerate || this.canWarnOnChat || this.canModerateOnChat || this.clubChatIdForModeratorActions
                    },
                    formatedJoinedDate: function formatedJoinedDate() {
                        return Object(_.f)() ? this.joinedDate : A.a.relative(this.joinedDate)
                    },
                    formatedLastLoginDate: function formatedLastLoginDate() {
                        return Object(_.f)() ? this.lastLoginDate : A.a.relative(this.lastLoginDate)
                    },
                    memberUrl: function memberUrl() {
                        return O.a.generate("web_member_view", {
                            username: this.username
                        })
                    },
                    ratingsToShow: function ratingsToShow() {
                        return this.ratings.slice(0, 3)
                    },
                    isConfirmVisible: function isConfirmVisible() {
                        return !!this.confirmMessage && !!this.confirmCallback
                    },
                    inlineStyles: function inlineStyles() {
                        return setPopoverPosition(this.position)
                    }
                },
                mounted: function mounted() {
                    this.updatePopoverPosition()
                },
                methods: {
                    onMouseEnter: function onMouseEnter() {
                        clearTimeout(this.hideTimeout)
                    },
                    onMouseLeave: function onMouseLeave() {
                        var e = this;
                        this.hideTimeout = setTimeout((function() {
                            e.hidePopover()
                        }), 500)
                    },
                    hidePopover: function hidePopover() {
                        this.$emit("user-popover-hide")
                    },
                    onConfirmYes: function onConfirmYes() {
                        this.confirmCallback && this.confirmCallback(), this.onConfirmNo()
                    },
                    onConfirmNo: function onConfirmNo() {
                        this.confirmMessage = null, this.confirmCallback = null
                    },
                    onClickRemoveFriend: function onClickRemoveFriend() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to remove this friend from your list?"), this.confirmCallback = function() {
                            return e.$emit("remove-friend")
                        }
                    },
                    onClickBlockUser: function onClickBlockUser() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to block this user?"), this.confirmCallback = function() {
                            return e.$emit("block-user")
                        }
                    },
                    onClickWarn: function onClickWarn() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to warn this user?"), this.confirmCallback = function() {
                            return e.$emit("warn-user")
                        }
                    },
                    onClickMute: function onClickMute() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to mute this user?"), this.confirmCallback = function() {
                            return e.$emit("mute-user")
                        }
                    },
                    onClickKick: function onClickKick() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to kick this user?"), this.confirmCallback = function() {
                            return e.$emit("kick-user")
                        }
                    },
                    onClickBan: function onClickBan() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to ban this user?"), this.confirmCallback = function() {
                            return e.$emit("ban-user")
                        }
                    },
                    onClickChatWarn: function onClickChatWarn() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to warn this user?"), this.clubChatIdForModeratorActions ? this.confirmCallback = this.onClubChatAction(S.a.WARN) : this.confirmCallback = function() {
                            return e.$emit("chat-warn-user")
                        }
                    },
                    onClickChatMute: function onClickChatMute() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to mute this user?"), this.clubChatIdForModeratorActions ? this.confirmCallback = this.onClubChatAction(S.a.MUTE) : this.confirmCallback = function() {
                            return e.$emit("chat-mute-user")
                        }
                    },
                    onClickChatKick: function onClickChatKick() {
                        var e = this;
                        this.confirmMessage = this.$trans("Are you sure you want to kick this user?"), this.clubChatIdForModeratorActions ? this.confirmCallback = this.onClubChatAction(S.a.KICK) : this.confirmCallback = function() {
                            return e.$emit("chat-kick-user")
                        }
                    },
                    onClubChatAction: function onClubChatAction(e) {
                        var t = this;
                        return function() {
                            return window.postMessage({
                                chatId: t.clubChatIdForModeratorActions,
                                key: h.c.CLUB_CHAT_MODERATOR_ACTION,
                                message: t.clubChatModeratorMessage,
                                type: e,
                                userId: t.uuid
                            }, window.location.origin)
                        }
                    },
                    updatePopoverPosition: function updatePopoverPosition() {
                        if (this.usernameElementRef && this.$refs.userPopover) {
                            var e = this.usernameElementRef.getBoundingClientRect(),
                                t = this.$refs.userPopover.offsetHeight;
                            this.position = Object(v.b)(e, t)
                        }
                    }
                }
            },
            ue = n(221);
        function user_popovervue_type_script_lang_js_ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        function user_popovervue_type_script_lang_js_objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? user_popovervue_type_script_lang_js_ownKeys(Object(n), !0).forEach((function(t) {
                    m()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : user_popovervue_type_script_lang_js_ownKeys(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var de = {
                name: "user-popover-widget",
                components: {
                    giftMembershipModal: function giftMembershipModal() {
                        return {
                            component: Promise.all([n.e(35), n.e(31)]).then(n.bind(null, 1222))
                        }
                    },
                    UserReportModal: function UserReportModal() {
                        return {
                            component: n.e(34).then(n.bind(null, 1223))
                        }
                    },
                    UserPopover: Object(j.a)(le, (function() {
                        var e = this,
                            t = e.$createElement,
                            n = e._self._c || t;
                        return n("div", {
                            directives: [{
                                name: "click-outside",
                                rawName: "v-click-outside",
                                value: e.onMouseLeave,
                                expression: "onMouseLeave"
                            }],
                            ref: "userPopover",
                            class: [e.$style.popover, e.$style[e.position.x], e.$style[e.position.y]],
                            style: e.inlineStyles,
                            on: {
                                mouseenter: e.onMouseEnter,
                                mouseleave: e.onMouseLeave
                            }
                        }, [n("div", {
                            class: e.$style.component
                        }, [n("div", {
                            class: e.$style.profile
                        }, [n("div", {
                            class: e.$style.meta
                        }, [e.username ? n("user-avatar", {
                            attrs: {
                                image: e.avatar,
                                "is-live": e.onlineStatus && e.isLive(e.onlineStatus),
                                "is-online": e.onlineStatus && e.isOnline(e.onlineStatus),
                                url: e.memberUrl
                            }
                        }) : e._e(), e._v(" "), e.username ? e._e() : n("div", {
                            class: e.$style["avatar-placeholder"]
                        }), e._v(" "), e.username ? n("div", {
                            class: e.$style.info
                        }, [n("user-tagline", {
                            attrs: {
                                "username-theme": "blue",
                                country: e.country,
                                "flair-code": e.flair ? e.flair.code : "",
                                membership: e.membership,
                                "open-profile-on-new-tab": e.openProfileOnNewTab,
                                title: e.chessTitle,
                                url: e.memberUrl,
                                username: e.username
                            }
                        }), e._v(" "), n("user-flair-status", {
                            attrs: {
                                status: e.flair ? e.flair.status : ""
                            }
                        }), e._v(" "), n("div", {
                            class: e.$style.ratings
                        }, e._l(e.ratingsToShow, (function(e) {
                            return n("user-rating", {
                                directives: [{
                                    name: "tooltip",
                                    rawName: "v-tooltip",
                                    value: e.label,
                                    expression: "rating.label"
                                }],
                                key: e.type,
                                attrs: {
                                    icon: e.icon,
                                    rating: e.value
                                }
                            })
                        })), 1)], 1) : e._e(), e._v(" "), e.username ? e._e() : n("div", {
                            class: e.$style.info
                        }, [n("loader-three-bounce", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.isLoading,
                                expression: "isLoading"
                            }],
                            class: e.$style.loader,
                            attrs: {
                                size: 40
                            }
                        })], 1)], 1), e._v(" "), e.joinedDate && e.username ? n("div", {
                            class: e.$style.secondary
                        }, [n("div", {
                            domProps: {
                                textContent: e._s(e.translations.joinedDate(e.formatedJoinedDate))
                            }
                        }), e._v(" "), n("div", {
                            class: e.$style.status
                        }, [e.isLive(e.onlineStatus) ? n("div", {
                            class: e.$style.onlive,
                            domProps: {
                                textContent: e._s(e.translations.inLiveNow)
                            }
                        }) : e._e(), e._v(" "), e.isOnline(e.onlineStatus) ? n("div", {
                            class: e.$style.online,
                            domProps: {
                                textContent: e._s(e.translations.onlineNow)
                            }
                        }) : e._e(), e._v(" "), !e.lastLoginDate || e.isOnline(e.onlineStatus) || e.isLive(e.onlineStatus) ? e._e() : n("div", {
                            domProps: {
                                textContent: e._s(e.translations.lastOnline(e.formatedLastLoginDate))
                            }
                        })])]) : e._e(), e._v(" "), e.username ? e._e() : n("div", {
                            class: e.$style.secondary
                        })]), e._v(" "), e.adminActionsIsVisible ? n("admin-actions", {
                            attrs: {
                                "can-moderate": e.canModerate,
                                "client-name": e.clientName,
                                "can-mute-on-chat": Boolean(e.clubChatIdForModeratorActions),
                                "can-warn-on-chat": e.canWarnOnChat || Boolean(e.clubChatIdForModeratorActions),
                                "can-moderate-on-chat": e.canModerateOnChat
                            },
                            on: {
                                "warn-user": e.onClickWarn,
                                "mute-user": e.onClickMute,
                                "kick-user": e.onClickKick,
                                "ban-user": e.onClickBan,
                                "chat-warn-user": e.onClickChatWarn,
                                "chat-mute-user": e.onClickChatMute,
                                "chat-kick-user": e.onClickChatKick
                            }
                        }) : e._e(), e._v(" "), e.isLoggedIn ? n("div", {
                            class: e.$style.actions
                        }, [e.username ? n("user-actions", {
                            attrs: {
                                avatar: e.avatar,
                                "can-add-friend": e.canAddFriend,
                                "can-block-user": e.canBlockUser,
                                "can-create-challenge": e.canCreateChallenge,
                                "can-follow-user": e.canFollowUser,
                                "can-gift-membership": e.canGiftMembership,
                                "can-remove-friend": e.canRemoveFriend,
                                "can-report-user": e.canReportUser,
                                "can-send-message": e.canSendMessage,
                                "can-invite-to-chat": e.canInviteToChat,
                                "can-send-trophy": e.canSendTrophy,
                                "can-unblock-user": e.canUnblockUser,
                                "can-unfollow-user": e.canUnfollowUser,
                                "can-use-global-chat": e.canUseGlobalChat,
                                "can-cancel-friend-request": e.canCancelFriendRequest,
                                "can-decline-friend-request": e.canDeclineFriendRequest,
                                "can-accept-friend-request": e.canAcceptFriendRequest,
                                "dynamic-actions": e.dynamicActions,
                                "logged-as-another": e.loggedAsAnother,
                                username: e.username,
                                "can-observe-game": e.canObserveGame,
                                "is-bughouse-partner": e.isBughousePartner,
                                "challenge-url": e.challengeUrl,
                                "archive-url": e.archiveUrl,
                                "chat-options": e.chatOptions,
                                position: e.position,
                                "can-invite-to-analysis": e.canInviteToAnalysis,
                                "analysis-options": e.analysisOptions,
                                "is-enabled": e.isEnabled,
                                "is-confirm-visible": e.isConfirmVisible,
                                "show-bughouse-partner": e.showBughousePartner,
                                "membership-url": e.membershipUrl
                            },
                            on: {
                                "all-actions-shown": e.updatePopoverPosition,
                                "remove-friend": e.onClickRemoveFriend,
                                "block-user": e.onClickBlockUser,
                                "user-popover-hide": e.hidePopover,
                                "create-challenge": function(t) {
                                    return e.$emit("create-challenge", t)
                                },
                                "send-message": function(t) {
                                    return e.$emit("send-message", t)
                                },
                                "add-friend": function(t) {
                                    return e.$emit("add-friend", t)
                                },
                                "cancel-friend-request": function(t) {
                                    return e.$emit("cancel-friend-request", t)
                                },
                                "decline-friend-request": function(t) {
                                    return e.$emit("decline-friend-request", t)
                                },
                                "show-gift": function(t) {
                                    return e.$emit("show-gift", t)
                                },
                                "show-archive": function(t) {
                                    return e.$emit("show-archive", t)
                                },
                                "start-direct-chat": function(t) {
                                    return e.$emit("start-direct-chat")
                                },
                                "mute-user": function(t) {
                                    return e.$emit("mute-user", t)
                                },
                                "accept-friend-request": function(t) {
                                    return e.$emit("accept-friend-request", t)
                                },
                                "follow-user": function(t) {
                                    return e.$emit("follow-user", t)
                                },
                                "unfollow-user": function(t) {
                                    return e.$emit("unfollow-user", t)
                                },
                                "unblock-user": function(t) {
                                    return e.$emit("unblock-user", t)
                                },
                                "show-report": function(t) {
                                    return e.$emit("show-report", t)
                                },
                                "show-trophy": function(t) {
                                    return e.$emit("show-trophy", t)
                                },
                                "observe-user": function(t) {
                                    return e.$emit("observe-user", t)
                                },
                                "bughouse-partner": function(t) {
                                    return e.$emit("bughouse-partner", t)
                                },
                                "bughouse-unpartner": function(t) {
                                    return e.$emit("bughouse-unpartner", t)
                                },
                                "request-chat": function(t) {
                                    return e.$emit("request-chat", t)
                                },
                                "invite-analysis": function(t) {
                                    return e.$emit("invite-analysis", t)
                                }
                            }
                        }) : e._e()], 1) : e._e()], 1), e._v(" "), e.isConfirmVisible ? n("div", {
                            class: e.$style.confirm
                        }, [n("p", {
                            domProps: {
                                innerHTML: e._s(e.confirmMessage)
                            }
                        }), e._v(" "), e.clubChatIdForModeratorActions ? n("p", [e._v("\n      " + e._s(e.$trans("Message to user:")) + "\n      "), n("form-input", {
                            class: e.$style["moderator-message"],
                            model: {
                                value: e.clubChatModeratorMessage,
                                callback: function(t) {
                                    e.clubChatModeratorMessage = t
                                },
                                expression: "clubChatModeratorMessage"
                            }
                        })], 1) : e._e(), e._v(" "), n("div", [n("form-button", {
                            attrs: {
                                size: "small",
                                theme: "basic"
                            },
                            on: {
                                click: e.onConfirmNo
                            }
                        }, [e._v("\n        " + e._s(e.$trans("No")) + "\n      ")]), e._v(" "), n("form-button", {
                            attrs: {
                                size: "small",
                                theme: "primary"
                            },
                            on: {
                                click: e.onConfirmYes
                            }
                        }, [e._v("\n        " + e._s(e.$trans("Yes")) + "\n      ")])], 1)]) : e._e()])
                    }), [], !1, (function user_popover_injectStyles(e) {
                        this.$style = ue.default.locals || ue.default
                    }), null, null).exports,
                    TrophyPopover: function TrophyPopover() {
                        return {
                            component: n.e(33).then(n.bind(null, 1043))
                        }
                    }
                },
                data: function data() {
                    return {
                        clubChatIdForModeratorActions: !1,
                        clickListener: null,
                        dynamicActions: null,
                        isLoading: !1,
                        showGiftMembershipModal: !1,
                        isUserReportModalVisible: !1,
                        isChallengePopoverVisible: !1,
                        isTrophyPopoverVisible: !1,
                        scrollContainer: null,
                        elementRef: null
                    }
                },
                computed: user_popovervue_type_script_lang_js_objectSpread({}, Object(w.mapState)({
                    show: function show(e) {
                        return e.userPopover.show
                    },
                    user: function user(e) {
                        return e.userPopover.user
                    },
                    username: function username(e) {
                        return e.user.username
                    },
                    position: function position(e) {
                        return e.userPopover.position
                    }
                }), {
                    ratings: function ratings() {
                        var e = this.user,
                            t = e.bestRating,
                            n = e.bestRatingType,
                            r = e.topPuzzleRushScore,
                            ratings = [{
                                type: n,
                                icon: n,
                                value: t
                            }];
                        return r && ratings.push({
                            type: "puzzle",
                            icon: "fire-puzzle",
                            value: r
                        }), ratings
                    },
                    canAddFriend: function canAddFriend() {
                        return this.loggedAsAnother && !this.user.areFriends && !this.user.isFriendRequestFromUserExists && !this.user.isFriendRequestExists && this.user.isEnabled
                    },
                    canBlockUser: function canBlockUser() {
                        return this.loggedAsAnother && !this.user.areFriends && !this.user.isBlocked && this.user.isEnabled && this.user.membership && this.user.membership.level < y.k.moderator
                    },
                    canUseGlobalChat: function canUseGlobalChat() {
                        return this.loggedAsAnother && this.user.isEnabled
                    },
                    canCreateChallenge: function canCreateChallenge() {
                        return this.loggedAsAnother && this.user.isEnabled
                    },
                    canFollowUser: function canFollowUser() {
                        return this.loggedAsAnother && !this.user.isTracked && this.user.isEnabled
                    },
                    canGiftMembership: function canGiftMembership() {
                        return this.user.canReceiveGiftMembership && this.user.isEnabled
                    },
                    canRemoveFriend: function canRemoveFriend() {
                        return this.loggedAsAnother && this.user.areFriends
                    },
                    canReportUser: function canReportUser() {
                        return this.loggedAsAnother && !this.user.isModerator && !this.user.isStaff
                    },
                    canSendMessage: function canSendMessage() {
                        return this.loggedAsAnother && this.user.isMessageable && this.user.isEnabled
                    },
                    canSendTrophy: function canSendTrophy() {
                        return this.canSendMessage && this.user.isEnabled
                    },
                    canUnblockUser: function canUnblockUser() {
                        return this.loggedAsAnother && this.user.isBlocked && this.user.isEnabled
                    },
                    canUnfollowUser: function canUnfollowUser() {
                        return this.loggedAsAnother && this.user.isTracked && this.user.isEnabled
                    },
                    hasInboundFriendRequest: function hasInboundFriendRequest() {
                        return this.loggedAsAnother && this.user.isFriendRequestFromUserExists
                    },
                    hasOutboundFriendRequest: function hasOutboundFriendRequest() {
                        return this.loggedAsAnother && this.user.isFriendRequestExists
                    },
                    canCancelFriendRequest: function canCancelFriendRequest() {
                        return this.hasOutboundFriendRequest && !this.hasInboundFriendRequest
                    },
                    canAcceptFriendRequest: function canAcceptFriendRequest() {
                        return this.hasInboundFriendRequest
                    },
                    loggedAsAnother: function loggedAsAnother() {
                        return this.username && this.username !== this.user.username
                    },
                    membershipNumber: function membershipNumber() {
                        return Object(_.d)(this.user.membership ? this.user.membership.level : null, this.user.isEnabled)
                    },
                    inlineStyles: function inlineStyles() {
                        return setPopoverPosition(this.position)
                    },
                    areFriends: function areFriends() {
                        return this.user.areFriends
                    }
                }),
                created: function created() {
                    Object(o.a)({
                        modalMessages: k,
                        trophies: E.a
                    })
                },
                mounted: function mounted() {
                    var e = this;
                    this.scrollContainer = window, s.a.$on("userPopover/show", (function(t, n) {
                        var r = t.username,
                            a = t.actions,
                            o = t.clubChatIdForModeratorActions;
                        if (e.dynamicActions = a, e.clubChatIdForModeratorActions = o, e.$store.dispatch("userPopover/fetchUserPopover", r).then((function() {
                            e.isLoading = !1
                        })), e.$store.commit("userPopover/resetUser"), null != r) {
                            e.clickListener = document.addEventListener("click", (function(t) {
                                (e.user.userNotExist || e.$refs.userPopover && t.target !== e.$refs.userPopover.$el && !e.$refs.userPopover.$el.contains(t.target) && !document.getElementById(y.n.USER_POPOVER_CONTAINER).contains(t.target)) && e.hideUserPopup()
                            }), !0), setTimeout((function() {
                                e.user.username || e.user.userNotExist || (e.isLoading = !0)
                            }), 500), e.scrollContainer.addEventListener("scroll", e.hideUserPopup), e.elementRef = n;
                            var i = Object(v.b)(n.getBoundingClientRect());
                            e.$store.commit("userPopover/setPosition", i), e.$store.commit("userPopover/showUserPopover")
                        }
                    })), s.a.$on("userPopover/hide", this.hideUserPopup)
                },
                beforeDestroy: function beforeDestroy() {
                    this.removeListeners()
                },
                methods: user_popovervue_type_script_lang_js_objectSpread({}, Object(w.mapMutations)({
                    hideUserPopover: "userPopover/hideUserPopover",
                    setRecipientIsFriend: "trophies/setRecipientIsFriend",
                    setRecipientUsername: "trophies/setRecipientUsername"
                }), {
                    onChallenge: function onChallenge(e) {
                        this.hideUserPopup(), window.postMessage({
                            key: h.c.SHOW_NEW_GAME_MODAL,
                            challengeUser: {
                                avatar_url: e.avatar,
                                username: e.username
                            }
                        }, window.location.origin)
                    },
                    onMessage: function onMessage(e) {
                        this.hideUserPopup(), window.postMessage({
                            event: "SHOW_MESSAGE_MODAL",
                            user: {
                                avatar_url: e.avatar,
                                username: e.username
                            }
                        }, window.location.origin)
                    },
                    onTrophy: function onTrophy(e) {
                        this.hideUserPopup(), this.setRecipientUsername(e.username), this.isTrophyPopoverVisible = !0
                    },
                    acceptFriendRequest: function acceptFriendRequest() {
                        this.$store.dispatch("user/approveFriendRequest", this.user.username).then(this.reload)
                    },
                    addFriend: function addFriend() {
                        this.$store.dispatch("user/addFriend", this.user.username).then(this.reload)
                    },
                    blockUser: function blockUser() {
                        this.$store.dispatch("user/blockUser", this.user.username).then(this.reload)
                    },
                    cancelFriendRequest: function cancelFriendRequest() {
                        this.$store.dispatch("user/cancelFriendRequest", this.user.username).then(this.reload)
                    },
                    deleteFriend: function deleteFriend() {
                        this.$store.dispatch("user/deleteFriend", this.user.username).then(this.reload)
                    },
                    hideUserPopup: function hideUserPopup() {
                        this.setRecipientIsFriend(this.areFriends), this.hideUserPopover(), this.removeListeners(), this.isLoading = !1
                    },
                    reload: function reload() {
                        return this.$store.dispatch("userPopover/fetchUserPopover", this.user.username)
                    },
                    removeListeners: function removeListeners() {
                        document.removeEventListener("click", this.clickListener, !0), this.scrollContainer.removeEventListener("scroll", this.hideUserPopup)
                    },
                    trackUser: function trackUser() {
                        this.$store.dispatch("user/trackUser", this.user.username).then(this.reload)
                    },
                    unblockUser: function unblockUser() {
                        this.$store.dispatch("user/unblockUser", this.user.username).then(this.reload)
                    },
                    untrackUser: function untrackUser() {
                        this.$store.dispatch("user/untrackUser", this.user.username).then(this.reload)
                    },
                    showGiftModal: function showGiftModal() {
                        this.hideUserPopup(), this.showGiftMembershipModal = !0
                    },
                    hideGiftMembershipModal: function hideGiftMembershipModal() {
                        this.showGiftMembershipModal = !1
                    },
                    showReportModal: function showReportModal() {
                        this.hideUserPopup(), this.isUserReportModalVisible = !0
                    },
                    hideUserReportModal: function hideUserReportModal() {
                        this.isUserReportModalVisible = !1
                    },
                    hideChallengePopover: function hideChallengePopover() {
                        this.isChallengePopoverVisible = !1
                    },
                    hideTrophyPopover: function hideTrophyPopover() {
                        this.isTrophyPopoverVisible = !1
                    },
                    showArchive: function showArchive(e) {
                        window.location.href = O.a.generate("web_archive_index", {
                            username: e.username
                        })
                    },
                    startDirectChat: function startDirectChat() {
                        var e = h.c.START_DIRECT_CHAT,
                            t = {
                                avatarUrl: this.user.avatarUrl,
                                id: this.user.uuid,
                                username: this.user.username
                            };
                        window.postMessage({
                            key: e,
                            payload: t
                        }, window.location.origin)
                    }
                })
            },
            pe = n(222);
        var be = Object(j.a)(de, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", [e.user.userNotExist ? e._e() : n("div", {
                attrs: {
                    id: "user-popover"
                }
            }, [e.show ? n("user-popover", {
                ref: "userPopover",
                attrs: {
                    "dynamic-actions": e.dynamicActions,
                    avatar: e.user.avatarUrl,
                    "can-add-friend": e.canAddFriend,
                    "can-block-user": e.canBlockUser,
                    "can-create-challenge": e.canCreateChallenge,
                    "can-follow-user": e.canFollowUser,
                    "can-gift-membership": e.canGiftMembership,
                    "can-remove-friend": e.canRemoveFriend,
                    "can-report-user": e.canReportUser,
                    "can-send-message": e.canSendMessage,
                    "can-send-trophy": e.canSendTrophy,
                    "can-unblock-user": e.canUnblockUser,
                    "can-unfollow-user": e.canUnfollowUser,
                    "can-use-global-chat": e.canUseGlobalChat,
                    "can-cancel-friend-request": e.canCancelFriendRequest,
                    "can-accept-friend-request": e.canAcceptFriendRequest,
                    "chess-title": e.user.chessTitle,
                    country: {
                        name: e.user.countryName,
                        code: e.user.countryId
                    },
                    flair: e.user.flair,
                    "club-chat-id-for-moderator-actions": e.clubChatIdForModeratorActions,
                    "is-enabled": e.user.isEnabled,
                    "is-loading": e.isLoading,
                    "joined-date": e.user.joinDate,
                    "last-login-date": e.user.lastLoginDate,
                    "logged-as-another": e.loggedAsAnother,
                    membership: e.membershipNumber,
                    "online-status": e.user.onlineStatus,
                    ratings: e.ratings,
                    username: e.user.username,
                    "username-element-ref": e.elementRef,
                    uuid: e.user.uuid
                },
                on: {
                    "accept-friend-request": e.acceptFriendRequest,
                    "add-friend": e.addFriend,
                    "block-user": e.blockUser,
                    "cancel-friend-request": e.cancelFriendRequest,
                    "create-challenge": e.onChallenge,
                    "follow-user": e.trackUser,
                    "remove-friend": e.deleteFriend,
                    "send-message": e.onMessage,
                    "show-archive": e.showArchive,
                    "show-gift": e.showGiftModal,
                    "show-report": e.showReportModal,
                    "show-trophy": e.onTrophy,
                    "start-direct-chat": e.startDirectChat,
                    "unblock-user": e.unblockUser,
                    "unfollow-user": e.untrackUser,
                    "user-popover-hide": e.hideUserPopup
                }
            }) : e._e(), e._v(" "), e.isUserReportModalVisible ? n("user-report-modal", {
                attrs: {
                    username: e.user.username
                },
                on: {
                    "modal-did-hide": e.hideUserReportModal
                }
            }) : e._e(), e._v(" "), e.showGiftMembershipModal ? n("gift-membership-modal", {
                attrs: {
                    "receiver-username": e.user.username,
                    "receiver-id": e.user.userId,
                    "sender-username": e.username
                },
                on: {
                    "hide-modal": e.hideGiftMembershipModal
                }
            }) : e._e(), e._v(" "), e.isTrophyPopoverVisible ? n("trophy-popover", {
                on: {
                    hide: e.hideTrophyPopover
                }
            }) : e._e()], 1), e._v(" "), e.user.userNotExist && e.show ? n("div", {
                class: [e.$style["placeholder-popover"], e.$style[e.position.x], e.$style[e.position.y]],
                style: e.inlineStyles
            }, [n("div", {
                class: e.$style["placeholder-component"]
            }, [n("div", {
                class: e.$style["placeholder-profile"]
            }, [n("div", {
                class: e.$style["placeholder-avatar"]
            }), e._v(" "), n("div", {
                class: e.$style["placeholder-info"],
                domProps: {
                    textContent: e._s(e.$trans("Member name does not exist"))
                }
            })])])]) : e._e()])
        }), [], !1, (function user_user_popover_injectStyles(e) {
            this.$style = pe.default.locals || pe.default
        }), null, null).exports;
        n.d(t, "b", (function() {
            return ge
        })), Object(o.a)({
            user: l.a,
            userPopover: f
        });
        var me,
            ge = Object(i.a)({
                userPopover: {
                    component: be,
                    el: "#user-popover",
                    store: c.default
                }
            }),
            fe = window,
            he = 0,
            _e = function documentClickListener(e) {
                var t = document.getElementById("userPopover");
                if (!t || e.target !== t && !t.contains(e.target)) {
                    document.removeEventListener("click", documentClickListener, !0);
                    var n = !me || e.target !== me && !me.contains(e.target),
                        r = null === me.getAttribute("href");
                    n ? he = 0 : r && setTimeout((function() {
                        he = 0
                    }), 0)
                }
            },
            ve = function documentScrollListener() {
                fe.removeEventListener("scroll", documentScrollListener), he = 0
            },
            we = function directiveClickListener(e) {
                me = e.target, 0 === he && (he += 1, ge.createInstance("userPopover"), s.a.$emit("userPopover/show", e.currentTarget.userPopoverProps, e.target), e.preventDefault(), document.addEventListener("click", _e, !0), fe.addEventListener("scroll", ve))
            },
            ye = function normalizeProps(e) {
                return "string" == typeof e ? {
                    username: e
                } : e
            };
        t.a = {
            bind: function bind(e, t) {
                if (!t.value)
                    return !1;
                e.userPopoverProps = ye(t.value), e.addEventListener("click", we)
            },
            unbind: function unbind(e) {
                e.removeEventListener("click", we)
            },
            update: function update(e, t) {
                if (!t.value)
                    return !1;
                var n,
                    r = ye(t.value);
                (e.userPopoverProps.username = r.username, r.actions) && (n = e.userPopoverProps.actions).splice.apply(n, [0, r.actions.length].concat(a()(r.actions)))
            }
        }
    },
    198: function(e, t, n) {
        "use strict";
        var r = n(32),
            a = n.n(r),
            o = n(35),
            i = n.n(o),
            s = n(30),
            c = null,
            l = function() {
                function VisibilityObserver() {
                    var e = this;
                    return a()(this, VisibilityObserver), null == c && (c = this, this.observer = new IntersectionObserver((function(t) {
                        t.forEach((function(t) {
                            t.intersectionRatio > 0 && (s.a.$emit("visibility-observer-change", t.target), e.observer.unobserve(t.target))
                        }))
                    }), {
                        rootMargin: "200px 0px",
                        threshold: .01
                    })), c
                }
                return i()(VisibilityObserver, [{
                    key: "observe",
                    value: function observe(e) {
                        this.observer.observe(e)
                    }
                }, {
                    key: "unobserve",
                    value: function unobserve(e) {
                        this.observer.unobserve(e)
                    }
                }]), VisibilityObserver
            }();
        t.a = new l
    },
    2: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return s
        })), n.d(t, "c", (function() {
            return c
        })), n.d(t, "a", (function() {
            return l
        }));
        var r = n(45),
            a = n.n(r);
        a.a.placeHolderPrefix = "", a.a.placeHolderSuffix = "";
        var o = function escapeParameters(e) {
                var t = {};
                return null != e && Object.keys(e).forEach((function(n) {
                    var r = function escapeRegExp(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    }(n);
                    null != r && r.length > 0 && (t[r] = e[n])
                })), t
            },
            i = function getTranslatedPhrase(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "messages",
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return window.chesscom_translations && window.chesscom_translations[t] && window.chesscom_translations[t][e] ? window.chesscom_translations[t][e] : window.chesscom_live_translations && window.chesscom_live_translations[t] && window.chesscom_live_translations[t][e] ? window.chesscom_live_translations[t][e] : "live" === t && window.i18n_phrases && window.i18n_phrases[e] ? window.i18n_phrases : "countries" === t && window.Country && window.Country[e] ? window.Country : n ? void 0 : "javascript" !== t ? getTranslatedPhrase(e, "javascript") : e
            },
            s = function trans(e, t, n) {
                return a.a.trans(i(e, n), o(t), n)
            },
            c = function transChoice(e, t, n, r) {
                return void 0 === t ? "" : a.a.transChoice(i(e, r), t, o(n))
            },
            l = {
                trans: s,
                transChoice: c
            }
    },
    20: function(e, t) {
        e.exports = vueDLL
    },
    200: function(e, t, n) {
        "use strict";
        t.a = {
            modalStates: {
                select: "select",
                send: "send",
                sent: "sent"
            },
            types: {
                game: "game",
                social: "social"
            }
        }
    },
    204: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return a
        }));
        var r = function pixelDensity(e, t) {
                if (e) {
                    var n = "@2x";
                    return /\.svg$/.test(e) ? e : ([1.5, 3, 4].indexOf(t) > -1 && (n = "@".concat(t, "x")), e.replace(/(\.\w+)$/, (function(e) {
                        return n + e
                    })))
                }
            },
            a = function retinaImageSrcset(e) {
                if (!e)
                    return null;
                var t = e.substring(e.lastIndexOf("/") + 1),
                    n = e.replace(t, "");
                return "".concat(e, ", ").concat(n).concat(r(t), " 2x")
            }
    },
    206: function(e, t, n) {
        "use strict";
        var r = n(149),
            a = n.n(r);
        t.default = a.a
    },
    207: function(e, t, n) {
        "use strict";
        var r = n(150),
            a = n.n(r);
        t.default = a.a
    },
    208: function(e, t, n) {
        "use strict";
        var r = n(151),
            a = n.n(r);
        t.default = a.a
    },
    209: function(e, t, n) {
        "use strict";
        var r = n(152),
            a = n.n(r);
        t.default = a.a
    },
    21: function(e, t, n) {
        e.exports = n(20)(23)
    },
    210: function(e, t, n) {
        "use strict";
        var r = n(153),
            a = n.n(r);
        t.default = a.a
    },
    211: function(e, t, n) {
        "use strict";
        var r = n(154),
            a = n.n(r);
        t.default = a.a
    },
    212: function(e, t, n) {
        "use strict";
        var r = n(155),
            a = n.n(r);
        t.default = a.a
    },
    213: function(e, t, n) {
        "use strict";
        var r = n(156),
            a = n.n(r);
        t.default = a.a
    },
    214: function(e, t, n) {
        "use strict";
        var r = n(157),
            a = n.n(r);
        t.default = a.a
    },
    215: function(e, t, n) {
        "use strict";
        var r = n(158),
            a = n.n(r);
        t.default = a.a
    },
    216: function(e, t, n) {
        "use strict";
        var r = n(159),
            a = n.n(r);
        t.default = a.a
    },
    217: function(e, t, n) {
        "use strict";
        var r = n(160),
            a = n.n(r);
        t.default = a.a
    },
    218: function(e, t, n) {
        "use strict";
        var r = n(161),
            a = n.n(r);
        t.default = a.a
    },
    219: function(e, t, n) {
        "use strict";
        var r = n(162),
            a = n.n(r);
        t.default = a.a
    },
    22: function(e, t, n) {
        e.exports = n(20)(84)
    },
    220: function(e, t, n) {
        "use strict";
        var r = n(163),
            a = n.n(r);
        t.default = a.a
    },
    221: function(e, t, n) {
        "use strict";
        var r = n(164),
            a = n.n(r);
        t.default = a.a
    },
    222: function(e, t, n) {
        "use strict";
        var r = n(165),
            a = n.n(r);
        t.default = a.a
    },
    23: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "c", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "d", (function() {
            return s
        })), n.d(t, "e", (function() {
            return c
        }));
        var r = n(68),
            a = function defaultNodeLimit() {
                return {
                    begin: {},
                    focus: {},
                    end: {}
                }
            },
            o = {
                $1: "!",
                $2: "?",
                $3: "!!",
                $4: "??",
                $5: "!?",
                $6: "?!",
                $10: "=",
                $11: "=",
                $12: "=",
                $13: "∞",
                $14: "⩲",
                $15: "⩱",
                $16: "±",
                $17: "∓",
                $18: "+-",
                $19: "-+",
                $22: "⨀",
                $23: "⨀",
                $32: "⟳",
                $33: "⟳",
                $36: "→",
                $37: "→",
                $40: "↑",
                $41: "↑",
                $44: "∞/=",
                $45: "=/∞",
                $132: "⇆",
                $133: "⇆",
                $146: "N"
            },
            i = Object(r.b)(o),
            s = {
                DIAGRAM_EDITOR: "diagram-editor-container"
            },
            c = {
                defaultCharLength: 7,
                defaultCharWidth: 6
            }
    },
    230: function(e, t, n) {
        "use strict";
        var r = n(24),
            a = n(8),
            o = {
                name: "user-chess-title",
                directives: {
                    Tooltip: r.a
                },
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    url: {
                        type: String,
                        required: !1
                    }
                },
                data: function data() {
                    return {
                        fullTitle: a.h[this.title]
                    }
                },
                computed: {
                    isLink: function isLink() {
                        return Boolean(this.url)
                    }
                }
            },
            i = n(217),
            s = n(3);
        var c = Object(s.a)(o, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isLink ? n("a", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.fullTitle,
                    expression: "fullTitle"
                }],
                class: e.$style.component,
                attrs: {
                    href: e.url
                },
                domProps: {
                    textContent: e._s(e.title)
                }
            }) : n("span", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.fullTitle,
                    expression: "fullTitle"
                }],
                class: e.$style.component,
                domProps: {
                    textContent: e._s(e.title)
                }
            })
        }), [], !1, (function injectStyles(e) {
            this.$style = i.default.locals || i.default
        }), null, null);
        t.a = c.exports
    },
    231: function(e, t, n) {
        "use strict";
        var r = {
                name: "user-username",
                props: {
                    theme: {
                        type: String,
                        required: !0
                    },
                    isClickable: {
                        type: Boolean,
                        default: !0
                    },
                    url: {
                        type: String,
                        required: !1
                    },
                    username: {
                        type: String,
                        required: !0
                    },
                    openNewTab: {
                        type: Boolean,
                        required: !1
                    }
                },
                computed: {
                    getTargetIfClickable: function getTargetIfClickable() {
                        return this.openNewTab ? "_blank" : null
                    },
                    isLink: function isLink() {
                        return Boolean(this.url)
                    }
                }
            },
            a = n(219),
            o = n(3);
        var i = Object(o.a)(r, (function() {
            var e,
                t = this,
                n = t.$createElement;
            return (t._self._c || n)(t.isClickable ? "a" : "span", {
                tag: "component",
                class: [t.$style.component, t.$style[t.theme], (e = {}, e[t.$style.link] = t.isClickable, e)],
                attrs: {
                    href: t.isClickable ? t.url : null,
                    target: t.getTargetIfClickable
                },
                domProps: {
                    textContent: t._s(t.username)
                }
            })
        }), [], !1, (function injectStyles(e) {
            this.$style = a.default.locals || a.default
        }), null, null);
        t.a = i.exports
    },
    232: function(e, t, n) {
        "use strict";
        n.d(t, "c", (function() {
            return r
        })), n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        }));
        var r = function removeHtmlWhiteSpace(e) {
                return e.replace(/&nbsp;/g, "")
            },
            a = function htmlDecode(e) {
                return (new DOMParser).parseFromString("<!doctype html><body>".concat(e), "text/html").body.textContent
            },
            o = function htmlEncode(e) {
                for (var t = [60, 62], n = e.length, r = []; n--;) {
                    var a = e[n].charCodeAt();
                    t.indexOf(a) > -1 ? r[n] = "&#".concat(a, ";") : r[n] = e[n]
                }
                return r.join("")
            },
            i = function userMention(e) {
                return String(e).replace(/(^|[^a-zA-Z0-9_!#$%&*@＠])([@＠]([a-zA-Z0-9_-]{3,20}))/g, (function(e, t, n, r) {
                    return "".concat(t, '<span class="v-user-popover" v-user-popover="\'').concat(r, "'\" data-username=\"'").concat(r, "'\"> ").concat(n, "</span>")
                }))
            }
    },
    238: function(e, t, n) {
        "use strict";
        var r = n(8),
            a = {
                name: "flair",
                components: {
                    IconFont: n(16).a
                },
                props: {
                    available: {
                        type: Boolean,
                        default: !0
                    },
                    showTheNothingFlair: {
                        type: Boolean,
                        default: !1
                    },
                    code: {
                        type: String,
                        default: r.c.code
                    },
                    size: {
                        type: String
                    }
                },
                computed: {
                    isNothing: function isNothing() {
                        return this.code === r.c.code
                    }
                }
            },
            o = n(3),
            i = Object(o.a)(a, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.showTheNothingFlair || !this.isNothing ? t("span", {
                    class: ["flair-component", "flair-" + this.code, "flair-" + this.size]
                }) : this._e()
            }), [], !1, null, null, null);
        t.a = i.exports
    },
    239: function(e, t, n) {
        "use strict";
        var r = n(8),
            a = n(248),
            o = n(230),
            i = n(249),
            s = n(231),
            c = {
                name: "user-tagline",
                components: {
                    CountryFlag: a.a,
                    UserChessTitle: o.a,
                    UserFlairIcon: i.a,
                    UserUsername: s.a
                },
                props: {
                    country: {
                        type: Object,
                        required: !1
                    },
                    flairCode: {
                        type: String
                    },
                    isUsernameClickable: {
                        type: Boolean,
                        default: !0
                    },
                    isDarkMode: Boolean,
                    iconAnchorIsEnabled: {
                        type: Boolean,
                        default: !0
                    },
                    membership: {
                        type: Number,
                        default: r.k.basic
                    },
                    rating: {
                        type: Number,
                        required: !1
                    },
                    title: {
                        type: String,
                        required: !1
                    },
                    url: {
                        type: String,
                        required: !1
                    },
                    usernameTheme: {
                        type: String,
                        default: "blue"
                    },
                    titleUrl: {
                        type: String,
                        required: !1
                    },
                    username: {
                        type: String,
                        required: !0
                    },
                    openProfileOnNewTab: {
                        type: Boolean,
                        required: !1
                    }
                }
            },
            l = n(220),
            u = n(3);
        var d = Object(u.a)(c, (function() {
            var e,
                t = this,
                n = t.$createElement,
                r = t._self._c || n;
            return r("div", {
                class: [t.$style.component, (e = {}, e[t.$style.darkMode] = t.isDarkMode, e)]
            }, [t.title ? r("user-chess-title", {
                attrs: {
                    url: t.titleUrl,
                    title: t.title
                }
            }) : t._e(), t._v(" "), r("user-username", {
                class: t.$style.username,
                attrs: {
                    "is-clickable": t.isUsernameClickable,
                    "open-new-tab": t.openProfileOnNewTab,
                    theme: t.isDarkMode ? "dark" : t.usernameTheme,
                    url: t.url,
                    username: t.username
                }
            }), t._v(" "), t.rating ? r("span", {
                class: t.$style.rating
            }, [t._v("\n    (" + t._s(t.rating) + ")\n  ")]) : t._e(), t._v(" "), t.country ? r("country-flag", {
                attrs: {
                    code: t.country.code,
                    name: t.country.name
                }
            }) : t._e(), t._v(" "), t.flairCode || t.membership ? r("user-flair-icon", {
                attrs: {
                    code: t.flairCode,
                    membership: t.membership
                }
            }) : t._e(), t._v(" "), t._t("default")], 2)
        }), [], !1, (function injectStyles(e) {
            this.$style = l.default.locals || l.default
        }), null, null);
        t.a = d.exports
    },
    24: function(e, t, n) {
        "use strict";
        var r,
            a = n(26),
            o = n(47),
            i = n(6),
            s = n(34),
            c = function remove(e, t) {
                var n = s.a.isFunction(t) ? e.findIndex(t) : e.indexOf(t);
                -1 !== n && e.splice(n, 1)
            },
            l = n(80),
            u = function getOptions(e) {
                return s.a.isString(e.value) ? {
                    content: e.value
                } : e.value
            },
            d = {
                name: "tooltip",
                created: function created() {
                    this.active = null, this.instances = []
                },
                beforeDestroy: function beforeDestroy() {
                    this.instances = null, this.clearTooltip()
                },
                methods: {
                    bind: function bind(e, t) {
                        this.instances.push({
                            element: e,
                            options: u(t)
                        }), e.addEventListener("mouseenter", this.showTooltip)
                    },
                    update: function update(e, t) {
                        var n = this.instances.find((function(t) {
                            return t.element === e
                        }));
                        n && (n.options = u(t))
                    },
                    unbind: function unbind(e) {
                        var t = this.instances.find((function(t) {
                            return t.element === e
                        }));
                        t && (this.active === t && this.hideTooltip({
                            target: t.element
                        }), c(this.instances, t), e.removeEventListener("mouseenter", this.showTooltip), e.removeEventListener("mouseleave", this.hideTooltip))
                    },
                    showTooltip: function showTooltip(e) {
                        var t = this,
                            n = e.target,
                            r = this.instances.find((function(e) {
                                return e.element === n
                            }));
                        if (r && r.options && r.options.content) {
                            var a = r.options.delay || 400,
                                s = r.options.position || "top",
                                c = r.options.padding || 0;
                            this.clearTooltip(), r.element.classList.contains(i.f.CONFIRM_OPEN) || (this.active = r, r.element.addEventListener("mouseleave", this.hideTooltip), this.showTimeout = l.a.setTimeout((function() {
                                t.showFrame = window.requestAnimationFrame((function() {
                                    t.$refs && t.$refs.content && r.options && (t.$refs.content.innerHTML = r.options.content), t.$el.classList.add(s), Object(o.c)(r.element, t.$el, s, c)
                                }))
                            }), a)), r.options.closeOnScroll && this.hideOnScroll(n)
                        }
                    },
                    hideOnScroll: function hideOnScroll(e) {
                        var t = this;
                        window.addEventListener("scroll", (function() {
                            t.hideTooltip({
                                target: e
                            })
                        }))
                    },
                    hideTooltip: function hideTooltip(e) {
                        var t = this,
                            n = e.target;
                        this.instances.find((function(e) {
                            return e.element === n
                        })) && (this.clearTooltip(), this.hideFrame = window.requestAnimationFrame((function() {
                            t.$refs && t.$refs.content && (t.$refs.content.innerHTML = null), Object(o.d)(t.$el)
                        })))
                    },
                    clearTooltip: function clearTooltip() {
                        this.active && (this.active.element.removeEventListener("mouseleave", this.hideTooltip), this.active = null), l.a.clearTimeout(this.showTimeout), window.cancelAnimationFrame(this.hideFrame), window.cancelAnimationFrame(this.showFrame), window.removeEventListener("scroll", this.hideOnScroll)
                    }
                }
            },
            p = n(3),
            b = Object(p.a)(d, (function() {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", {
                    staticClass: "tooltip tip vue-tooltip"
                }, [t("div", {
                    staticClass: "arrow"
                }), this._v(" "), t("div", {
                    ref: "content",
                    staticClass: "inner"
                })])
            }), [], !1, null, null, null).exports,
            m = a.default.extend(b),
            g = !1,
            f = function getTooltip() {
                if (r || (r = new m), !g) {
                    var e = document.createElement("div");
                    document.body.appendChild(e), r.$mount(e), g = !0
                }
                return r
            };
        t.a = {
            bind: function bind(e, t) {
                return f().bind(e, t)
            },
            componentUpdated: function componentUpdated(e, t) {
                return f().update(e, t)
            },
            unbind: function unbind(e, t) {
                return f().unbind(e, t)
            }
        }
    },
    242: function(e, t, n) {
        !function webpackUniversalModuleDefinition(t, n) {
            e.exports = n()
        }("undefined" != typeof self && self, (function() {
            return function(e) {
                var t = {};
                function __webpack_require__(n) {
                    if (t[n])
                        return t[n].exports;
                    var r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
                }
                return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
                    __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, __webpack_require__.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, __webpack_require__.t = function(e, t) {
                    if (1 & t && (e = __webpack_require__(e)), 8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var n = Object.create(null);
                    if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                        for (var r in e)
                            __webpack_require__.d(n, r, function(t) {
                                return e[t]
                            }.bind(null, r));
                    return n
                }, __webpack_require__.n = function(e) {
                    var t = e && e.__esModule ? function getDefault() {
                        return e.default
                    } : function getModuleExports() {
                        return e
                    };
                    return __webpack_require__.d(t, "a", t), t
                }, __webpack_require__.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 7)
            }([, , function(e, t, n) {
                var r = n(4),
                    a = n(5),
                    o = n(6);
                e.exports = function _toConsumableArray(e) {
                    return r(e) || a(e) || o()
                }
            }, , function(e, t) {
                e.exports = function _arrayWithoutHoles(e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++)
                            n[t] = e[t];
                        return n
                    }
                }
            }, function(e, t) {
                e.exports = function _iterableToArray(e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                        return Array.from(e)
                }
            }, function(e, t) {
                e.exports = function _nonIterableSpread() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }
            }, function(e, t, n) {
                "use strict";
                n.r(t), n.d(t, "createEventEmitter", (function() {
                    return createEventEmitter
                }));
                var r = n(2),
                    a = n.n(r);
                function createEventEmitter() {
                    var e = {
                        all: []
                    };
                    return {
                        emit: function emit(t, n) {
                            [].concat(a()(e[t] || []), a()(e.all)).forEach((function(e) {
                                return e.handler(n)
                            }))
                        },
                        off: off,
                        offAll: function offAll(e) {
                            return off({
                                handler: e,
                                type: "all"
                            })
                        },
                        offMany: function offMany(e) {
                            (e || []).forEach((function(e) {
                                return off(e)
                            }))
                        },
                        on: on,
                        onAll: function onAll(e) {
                            on("all", e)
                        },
                        onMany: function onMany(e, t) {
                            (e || []).forEach((function(e) {
                                return on(e, t)
                            }))
                        },
                        subscriptions: e
                    };
                    function off(t) {
                        var n = e[t.type].findIndex((function(e) {
                            return t.type === e.type && t.handler === e.handler
                        }));
                        -1 !== n && e[t.type].splice(n, 1)
                    }
                    function on(t, n) {
                        var r = {
                            handler: n,
                            type: t
                        };
                        e[t] = e[t] || [], e[t].push(r)
                    }
                }
            }])
        }))
    },
    243: function(e, t, n) {
        !function webpackUniversalModuleDefinition(t, n) {
            e.exports = n()
        }("undefined" != typeof self && self, (function() {
            return function(e) {
                var t = {};
                function __webpack_require__(n) {
                    if (t[n])
                        return t[n].exports;
                    var r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
                }
                return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
                    __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, __webpack_require__.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, __webpack_require__.t = function(e, t) {
                    if (1 & t && (e = __webpack_require__(e)), 8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var n = Object.create(null);
                    if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                        for (var r in e)
                            __webpack_require__.d(n, r, function(t) {
                                return e[t]
                            }.bind(null, r));
                    return n
                }, __webpack_require__.n = function(e) {
                    var t = e && e.__esModule ? function getDefault() {
                        return e.default
                    } : function getModuleExports() {
                        return e
                    };
                    return __webpack_require__.d(t, "a", t), t
                }, __webpack_require__.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 124)
            }({
                10: function(e, t, n) {
                    "use strict";
                    function noop() {}
                    n.r(t), n.d(t, "noop", (function() {
                        return noop
                    }))
                },
                102: function(e, t) {
                    function asyncGeneratorStep(e, t, n, r, a, o, i) {
                        try {
                            var s = e[o](i),
                                c = s.value
                        } catch (l) {
                            return void n(l)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, a)
                    }
                    e.exports = function _asyncToGenerator(e) {
                        return function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, a) {
                                var o = e.apply(t, n);
                                function _next(e) {
                                    asyncGeneratorStep(o, r, a, _next, _throw, "next", e)
                                }
                                function _throw(e) {
                                    asyncGeneratorStep(o, r, a, _next, _throw, "throw", e)
                                }
                                _next(void 0)
                            }))
                        }
                    }
                },
                108: function(e, t, n) {
                    var r = function(e) {
                        "use strict";
                        var t = Object.prototype,
                            n = t.hasOwnProperty,
                            r = "function" == typeof Symbol ? Symbol : {},
                            a = r.iterator || "@@iterator",
                            o = r.asyncIterator || "@@asyncIterator",
                            i = r.toStringTag || "@@toStringTag";
                        function wrap(e, t, n, r) {
                            var a = t && t.prototype instanceof Generator ? t : Generator,
                                o = Object.create(a.prototype),
                                i = new Context(r || []);
                            return o._invoke = function makeInvokeMethod(e, t, n) {
                                var r = "suspendedStart";
                                return function invoke(a, o) {
                                    if ("executing" === r)
                                        throw new Error("Generator is already running");
                                    if ("completed" === r) {
                                        if ("throw" === a)
                                            throw o;
                                        return doneResult()
                                    }
                                    for (n.method = a, n.arg = o;;) {
                                        var i = n.delegate;
                                        if (i) {
                                            var c = maybeInvokeDelegate(i, n);
                                            if (c) {
                                                if (c === s)
                                                    continue;
                                                return c
                                            }
                                        }
                                        if ("next" === n.method)
                                            n.sent = n._sent = n.arg;
                                        else if ("throw" === n.method) {
                                            if ("suspendedStart" === r)
                                                throw r = "completed", n.arg;
                                            n.dispatchException(n.arg)
                                        } else
                                            "return" === n.method && n.abrupt("return", n.arg);
                                        r = "executing";
                                        var l = tryCatch(e, t, n);
                                        if ("normal" === l.type) {
                                            if (r = n.done ? "completed" : "suspendedYield", l.arg === s)
                                                continue;
                                            return {
                                                value: l.arg,
                                                done: n.done
                                            }
                                        }
                                        "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg)
                                    }
                                }
                            }(e, n, i), o
                        }
                        function tryCatch(e, t, n) {
                            try {
                                return {
                                    type: "normal",
                                    arg: e.call(t, n)
                                }
                            } catch (r) {
                                return {
                                    type: "throw",
                                    arg: r
                                }
                            }
                        }
                        e.wrap = wrap;
                        var s = {};
                        function Generator() {}
                        function GeneratorFunction() {}
                        function GeneratorFunctionPrototype() {}
                        var c = {};
                        c[a] = function() {
                            return this
                        };
                        var l = Object.getPrototypeOf,
                            u = l && l(l(values([])));
                        u && u !== t && n.call(u, a) && (c = u);
                        var d = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
                        function defineIteratorMethods(e) {
                            ["next", "throw", "return"].forEach((function(t) {
                                e[t] = function(e) {
                                    return this._invoke(t, e)
                                }
                            }))
                        }
                        function AsyncIterator(e) {
                            var t;
                            this._invoke = function enqueue(r, a) {
                                function callInvokeWithMethodAndArg() {
                                    return new Promise((function(t, o) {
                                        !function invoke(t, r, a, o) {
                                            var i = tryCatch(e[t], e, r);
                                            if ("throw" !== i.type) {
                                                var s = i.arg,
                                                    c = s.value;
                                                return c && "object" == typeof c && n.call(c, "__await") ? Promise.resolve(c.__await).then((function(e) {
                                                    invoke("next", e, a, o)
                                                }), (function(e) {
                                                    invoke("throw", e, a, o)
                                                })) : Promise.resolve(c).then((function(e) {
                                                    s.value = e, a(s)
                                                }), (function(e) {
                                                    return invoke("throw", e, a, o)
                                                }))
                                            }
                                            o(i.arg)
                                        }(r, a, t, o)
                                    }))
                                }
                                return t = t ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg()
                            }
                        }
                        function maybeInvokeDelegate(e, t) {
                            var n = e.iterator[t.method];
                            if (void 0 === n) {
                                if (t.delegate = null, "throw" === t.method) {
                                    if (e.iterator.return && (t.method = "return", t.arg = void 0, maybeInvokeDelegate(e, t), "throw" === t.method))
                                        return s;
                                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return s
                            }
                            var r = tryCatch(n, e.iterator, t.arg);
                            if ("throw" === r.type)
                                return t.method = "throw", t.arg = r.arg, t.delegate = null, s;
                            var a = r.arg;
                            return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, s) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, s)
                        }
                        function pushTryEntry(e) {
                            var t = {
                                tryLoc: e[0]
                            };
                            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                        }
                        function resetTryEntry(e) {
                            var t = e.completion || {};
                            t.type = "normal", delete t.arg, e.completion = t
                        }
                        function Context(e) {
                            this.tryEntries = [{
                                tryLoc: "root"
                            }], e.forEach(pushTryEntry, this), this.reset(!0)
                        }
                        function values(e) {
                            if (e) {
                                var t = e[a];
                                if (t)
                                    return t.call(e);
                                if ("function" == typeof e.next)
                                    return e;
                                if (!isNaN(e.length)) {
                                    var r = -1,
                                        o = function next() {
                                            for (; ++r < e.length;)
                                                if (n.call(e, r))
                                                    return next.value = e[r], next.done = !1, next;
                                            return next.value = void 0, next.done = !0, next
                                        };
                                    return o.next = o
                                }
                            }
                            return {
                                next: doneResult
                            }
                        }
                        function doneResult() {
                            return {
                                value: void 0,
                                done: !0
                            }
                        }
                        return GeneratorFunction.prototype = d.constructor = GeneratorFunctionPrototype, GeneratorFunctionPrototype.constructor = GeneratorFunction, GeneratorFunctionPrototype[i] = GeneratorFunction.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
                            var t = "function" == typeof e && e.constructor;
                            return !!t && (t === GeneratorFunction || "GeneratorFunction" === (t.displayName || t.name))
                        }, e.mark = function(e) {
                            return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, i in e || (e[i] = "GeneratorFunction")), e.prototype = Object.create(d), e
                        }, e.awrap = function(e) {
                            return {
                                __await: e
                            }
                        }, defineIteratorMethods(AsyncIterator.prototype), AsyncIterator.prototype[o] = function() {
                            return this
                        }, e.AsyncIterator = AsyncIterator, e.async = function(t, n, r, a) {
                            var o = new AsyncIterator(wrap(t, n, r, a));
                            return e.isGeneratorFunction(n) ? o : o.next().then((function(e) {
                                return e.done ? e.value : o.next()
                            }))
                        }, defineIteratorMethods(d), d[i] = "Generator", d[a] = function() {
                            return this
                        }, d.toString = function() {
                            return "[object Generator]"
                        }, e.keys = function(e) {
                            var t = [];
                            for (var n in e)
                                t.push(n);
                            return t.reverse(), function next() {
                                for (; t.length;) {
                                    var n = t.pop();
                                    if (n in e)
                                        return next.value = n, next.done = !1, next
                                }
                                return next.done = !0, next
                            }
                        }, e.values = values, Context.prototype = {
                            constructor: Context,
                            reset: function(e) {
                                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(resetTryEntry), !e)
                                    for (var t in this)
                                        "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
                            },
                            stop: function() {
                                this.done = !0;
                                var e = this.tryEntries[0].completion;
                                if ("throw" === e.type)
                                    throw e.arg;
                                return this.rval
                            },
                            dispatchException: function(e) {
                                if (this.done)
                                    throw e;
                                var t = this;
                                function handle(n, r) {
                                    return o.type = "throw", o.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                                }
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var a = this.tryEntries[r],
                                        o = a.completion;
                                    if ("root" === a.tryLoc)
                                        return handle("end");
                                    if (a.tryLoc <= this.prev) {
                                        var i = n.call(a, "catchLoc"),
                                            s = n.call(a, "finallyLoc");
                                        if (i && s) {
                                            if (this.prev < a.catchLoc)
                                                return handle(a.catchLoc, !0);
                                            if (this.prev < a.finallyLoc)
                                                return handle(a.finallyLoc)
                                        } else if (i) {
                                            if (this.prev < a.catchLoc)
                                                return handle(a.catchLoc, !0)
                                        } else {
                                            if (!s)
                                                throw new Error("try statement without catch or finally");
                                            if (this.prev < a.finallyLoc)
                                                return handle(a.finallyLoc)
                                        }
                                    }
                                }
                            },
                            abrupt: function(e, t) {
                                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                    var a = this.tryEntries[r];
                                    if (a.tryLoc <= this.prev && n.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                                        var o = a;
                                        break
                                    }
                                }
                                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                                var i = o ? o.completion : {};
                                return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, s) : this.complete(i)
                            },
                            complete: function(e, t) {
                                if ("throw" === e.type)
                                    throw e.arg;
                                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), s
                            },
                            finish: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var n = this.tryEntries[t];
                                    if (n.finallyLoc === e)
                                        return this.complete(n.completion, n.afterLoc), resetTryEntry(n), s
                                }
                            },
                            catch: function(e) {
                                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                    var n = this.tryEntries[t];
                                    if (n.tryLoc === e) {
                                        var r = n.completion;
                                        if ("throw" === r.type) {
                                            var a = r.arg;
                                            resetTryEntry(n)
                                        }
                                        return a
                                    }
                                }
                                throw new Error("illegal catch attempt")
                            },
                            delegateYield: function(e, t, n) {
                                return this.delegate = {
                                    iterator: values(e),
                                    resultName: t,
                                    nextLoc: n
                                }, "next" === this.method && (this.arg = void 0), s
                            }
                        }, e
                    }(e.exports);
                    try {
                        regeneratorRuntime = r
                    } catch (a) {
                        Function("r", "regeneratorRuntime = r")(r)
                    }
                },
                124: function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var r = n(68),
                        a = n.n(r),
                        o = n(2),
                        i = n.n(o),
                        s = n(102),
                        c = n.n(s),
                        l = n(10);
                    function createQueue() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            t = [],
                            n = !1;
                        return {
                            add: add,
                            clear: clear,
                            flush: flush,
                            getEntries: getEntries
                        };
                        function add(r) {
                            for (var a = l.noop, o = l.noop, i = new Promise((function(e, t) {
                                    o = e, a = t
                                })), s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), u = 1; u < s; u++)
                                c[u - 1] = arguments[u];
                            return t.push({
                                fn: r,
                                params: c,
                                reject: a,
                                resolve: o
                            }), e && !1 === n && flush(), i
                        }
                        function clear() {
                            n = !1, t.length = 0
                        }
                        function flush() {
                            return _flush.apply(this, arguments)
                        }
                        function _flush() {
                            return (_flush = c()(a.a.mark((function _callee() {
                                var e,
                                    r;
                                return a.a.wrap((function _callee$(a) {
                                    for (;;)
                                        switch (a.prev = a.next) {
                                        case 0:
                                            if (e = t.shift()) {
                                                a.next = 4;
                                                break
                                            }
                                            return n = !1, a.abrupt("return");
                                        case 4:
                                            return n = !0, a.prev = 5, a.next = 8, e.fn.apply(e, i()(e.params));
                                        case 8:
                                            return r = a.sent, e.resolve(r), a.abrupt("return", flush());
                                        case 13:
                                            a.prev = 13, a.t0 = a.catch(5), e.reject(a.t0);
                                        case 16:
                                        case "end":
                                            return a.stop()
                                        }
                                }), _callee, null, [[5, 13]])
                            })))).apply(this, arguments)
                        }
                        function getEntries() {
                            return t
                        }
                    }
                    n.d(t, "createQueue", (function() {
                        return createQueue
                    }))
                },
                2: function(e, t, n) {
                    var r = n(4),
                        a = n(5),
                        o = n(6);
                    e.exports = function _toConsumableArray(e) {
                        return r(e) || a(e) || o()
                    }
                },
                4: function(e, t) {
                    e.exports = function _arrayWithoutHoles(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = new Array(e.length); t < e.length; t++)
                                n[t] = e[t];
                            return n
                        }
                    }
                },
                5: function(e, t) {
                    e.exports = function _iterableToArray(e) {
                        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                            return Array.from(e)
                    }
                },
                6: function(e, t) {
                    e.exports = function _nonIterableSpread() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance")
                    }
                },
                68: function(e, t, n) {
                    e.exports = n(108)
                }
            })
        }))
    },
    244: function(e, t, n) {
        !function webpackUniversalModuleDefinition(t, n) {
            e.exports = n()
        }("undefined" != typeof self && self, (function() {
            return function(e) {
                var t = {};
                function __webpack_require__(n) {
                    if (t[n])
                        return t[n].exports;
                    var r = t[n] = {
                        i: n,
                        l: !1,
                        exports: {}
                    };
                    return e[n].call(r.exports, r, r.exports, __webpack_require__), r.l = !0, r.exports
                }
                return __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
                    __webpack_require__.o(e, t) || Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: n
                    })
                }, __webpack_require__.r = function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }, __webpack_require__.t = function(e, t) {
                    if (1 & t && (e = __webpack_require__(e)), 8 & t)
                        return e;
                    if (4 & t && "object" == typeof e && e && e.__esModule)
                        return e;
                    var n = Object.create(null);
                    if (__webpack_require__.r(n), Object.defineProperty(n, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & t && "string" != typeof e)
                        for (var r in e)
                            __webpack_require__.d(n, r, function(t) {
                                return e[t]
                            }.bind(null, r));
                    return n
                }, __webpack_require__.n = function(e) {
                    var t = e && e.__esModule ? function getDefault() {
                        return e.default
                    } : function getModuleExports() {
                        return e
                    };
                    return __webpack_require__.d(t, "a", t), t
                }, __webpack_require__.o = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 112)
            }({
                112: function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var r = n(49),
                        a = n.n(r);
                    function invertObject(e) {
                        return Object.keys(e).reduce((function(t, n) {
                            return Object.assign(Object.assign({}, t), a()({}, e[n], n))
                        }), {})
                    }
                    function hasAllProperties(e, t) {
                        return t.every((function(t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }))
                    }
                    function hasData() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object.keys(e).length > 0
                    }
                    function hasProperty(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    function hasSomeProperties(e, t) {
                        return t.some((function(t) {
                            return Object.prototype.hasOwnProperty.call(e, t)
                        }))
                    }
                    function isEmpty(e) {
                        return !Object.keys(e).length
                    }
                    function objectWithExcludedProps(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        return Object.keys(e).filter((function(e) {
                            return !t.includes(e)
                        })).reduce((function(t, n) {
                            return Object.assign(Object.assign({}, t), a()({}, n, e[n]))
                        }), {})
                    }
                    function pick(e, t) {
                        return t.reduce((function(t, n) {
                            return t[n] = e[n], t
                        }), {})
                    }
                    function transformObjectBooleansToBinaryString(e) {
                        return Object.keys(e).reduce((function(t, n) {
                            var r = e[n];
                            return "boolean" == typeof r && (r = r ? "1" : "0"), t[n] = r, t
                        }), {})
                    }
                    n.d(t, "invertObject", (function() {
                        return invertObject
                    })), n.d(t, "hasAllProperties", (function() {
                        return hasAllProperties
                    })), n.d(t, "hasData", (function() {
                        return hasData
                    })), n.d(t, "hasProperty", (function() {
                        return hasProperty
                    })), n.d(t, "hasSomeProperties", (function() {
                        return hasSomeProperties
                    })), n.d(t, "isEmpty", (function() {
                        return isEmpty
                    })), n.d(t, "objectWithExcludedProps", (function() {
                        return objectWithExcludedProps
                    })), n.d(t, "pick", (function() {
                        return pick
                    })), n.d(t, "transformObjectBooleansToBinaryString", (function() {
                        return transformObjectBooleansToBinaryString
                    }))
                },
                49: function(e, t) {
                    e.exports = function _defineProperty(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                }
            })
        }))
    },
    245: function(e, t, n) {
        "use strict";
        var r = n(11),
            a = n(0),
            o = function prepAlertMessage(e) {
                return e.data && e.data.message || r.b.badRequest
            };
        var i = function createContextLocaleService() {
                var e = {
                    contentLanguage: window.context.i18n.contentLanguage,
                    language: window.context.i18n.locale,
                    speaksEnglish: "en_US" === window.context.i18n.locale
                };
                return {
                    get: function get(t) {
                        return e[t]
                    }
                }
            }(),
            s = n(125);
        t.a = {
            namespaced: !0,
            mutations: {
                setLoading: function setLoading(e, t) {
                    e.loading = t
                },
                setLoadingUser: function setLoadingUser(e, t) {
                    e.loadingUser[t.username] = t.loading
                },
                setLoadingFriends: function setLoadingFriends(e, t) {
                    e.loading.friends = t
                },
                setFriends: function setFriends(e, t) {
                    e.friends = t
                },
                setLoadingOpponents: function setLoadingOpponents(e, t) {
                    e.loading.opponents = t
                },
                setOpponents: function setOpponents(e, t) {
                    e.opponents = t
                },
                setAvatarUrl: function setAvatarUrl(e, t) {
                    e.avatarUrl = t
                },
                setSettingsAvatarUrl: function setSettingsAvatarUrl(e, t) {
                    e.settingsAvatarUrl = t
                },
                setArchiveView: function setArchiveView(e, t) {
                    e.archiveView = t
                },
                setFairPlayAgree: function setFairPlayAgree(e, t) {
                    e.fairPlayAgree = t
                },
                setHomeContentType: function setHomeContentType(e, t) {
                    e.homeContentType = t
                },
                setShowAlertsOnHome: function setShowAlertsOnHome(e, t) {
                    e.showAlertsOnHome = t
                },
                setIsThreeD: function setIsThreeD(e, t) {
                    e.isThreeD = t
                },
                setFollowSuggestions: function setFollowSuggestions(e, t) {
                    e.followSuggestions = t
                },
                removeFollowSuggestedUser: function removeFollowSuggestedUser(e, t) {
                    var n = e.followSuggestions,
                        r = n.findIndex((function(e) {
                            return e.username === t
                        }));
                    -1 !== r && (n.splice(r, 1), e.followSuggestions = n)
                },
                setFollowMessage: function setFollowMessage(e, t) {
                    e.followMessage = t
                },
                setRoles: function setRoles(e, t) {
                    e.roles = t
                },
                setAdditionalInfo: function setAdditionalInfo(e, t) {
                    e.flag = t.flag, e.country = t.country, e.membership = t.membership, e.rating = t.rating
                },
                setLoggedIn: function setLoggedIn(e, t) {
                    e.isLoggedIn = t
                },
                setUsername: function setUsername(e, t) {
                    e.username = t
                },
                setMembershipLevel: function setMembershipLevel(e, t) {
                    e.membershipLevel = t
                }
            },
            actions: function createUserActions(e) {
                return {
                    init: function init(t) {
                        var n = t.dispatch;
                        e.isLoggedIn() && (n("getFriends"), n("getOpponents"), n("getAdditionaUserInfoFromDb"))
                    },
                    getFriends: function getFriends(t) {
                        var n = t.commit,
                            a = t.dispatch;
                        return n("setLoading", !0), e.getFriends({
                            user: e.get("id"),
                            avatarSize: 50
                        }).then((function(e) {
                            n("setLoading", !1), n("setFriends", e.data.friends)
                        })).catch((function() {
                            n("setLoading", !1), a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    getOpponents: function getOpponents(t) {
                        var n = t.commit,
                            a = t.dispatch;
                        return n("setLoading", !0), e.getOpponents().then((function(e) {
                            n("setLoading", !1), n("setOpponents", e.data)
                        })).catch((function() {
                            n("setLoading", !1), a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    getFollowSuggestions: function getFollowSuggestions(t) {
                        var n = t.commit,
                            o = t.dispatch;
                        return e.getFollowSuggestions().then((function(e) {
                            if (e.data.users && e.data.users.length > 0) {
                                n("setFollowSuggestions", e.data.users);
                                var t = a.a.trans("Consider following...");
                                e.data.notYetFollowing && (t = a.a.trans("You are not currently following anyone. Here are a few suggestions...")), n("setFollowMessage", t)
                            } else
                                n("setFollowMessage", null)
                        })).catch((function() {
                            return o("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    acceptFollowSuggestion: function acceptFollowSuggestion(e, t) {
                        var n = e.commit,
                            r = e.dispatch;
                        n("removeFollowSuggestedUser", t), r("trackUser", t)
                    },
                    dismissFollowSuggestion: function dismissFollowSuggestion(t, n) {
                        var a = t.commit,
                            o = t.dispatch;
                        return a("removeFollowSuggestedUser", n), e.dismissFollowSuggestion(n).catch((function() {
                            o("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    getAvatar: function getAvatar(t, n) {
                        var r = t.commit;
                        if (!e.get("avatarUrl"))
                            return e.getAvatar(n).then((function(e) {
                                r("setAvatarUrl", e.data.avatar)
                            }))
                    },
                    addFriend: function addFriend(t, n) {
                        var a = t.commit,
                            i = t.dispatch,
                            s = n.username || n,
                            c = n.dispatchCallback || "getFriends";
                        return a("setLoading", !0), e.addFriend(s).then((function(e) {
                            a("setLoading", !1), i("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).then((function() {
                            c.includes("/") ? i(c, null, {
                                root: !0
                            }) : i(c)
                        })).catch((function(e) {
                            a("setLoading", !1), i("alerts/create", {
                                type: r.g.error,
                                message: e.response.data.message
                            }, {
                                root: !0
                            })
                        }))
                    },
                    deleteFriend: function deleteFriend(t, n) {
                        var a = t.commit,
                            i = t.dispatch,
                            s = n.username || n,
                            c = n.dispatchCallback || "getFriends";
                        return a("setLoading", !0), e.deleteFriend(s).then((function(e) {
                            a("setLoading", !1), i("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).then((function() {
                            c.includes("/") ? i(c, null, {
                                root: !0
                            }) : i(c)
                        })).catch((function() {
                            a("setLoading", !1), i("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    approveFriendRequest: function approveFriendRequest(t, n) {
                        var a = t.dispatch,
                            i = n.username || n,
                            s = n.dispatchCallback || "getFriends";
                        return e.approveFriendRequest(i).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).then((function() {
                            s.includes("/") ? a(s, null, {
                                root: !0
                            }) : a(s)
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    blockUser: function blockUser(t, n) {
                        var a = t.dispatch;
                        return e.blockUser(n).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    unblockUser: function unblockUser(t, n) {
                        var a = t.dispatch;
                        return e.unblockUser(n).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    trackUser: function trackUser(t, n) {
                        var a = t.dispatch;
                        return e.trackUser(n).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    untrackUser: function untrackUser(t, n) {
                        var a = t.dispatch;
                        return e.untrackUser(n).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    setArchiveView: function setArchiveView(t, n) {
                        var r = t.commit;
                        if (function isValidArchiveView(e) {
                            return ["grid", "list"].includes(e)
                        }(n))
                            return e.get("archiveView") !== n ? e.setArchiveView(n).then((function() {
                                r("setArchiveView", n)
                            })) : void 0
                    },
                    setFairPlayAgree: function setFairPlayAgree(t) {
                        return (0, t.commit)("setFairPlayAgree", !0), e.setFairPlayAgree(!0)
                    },
                    setHomeContentType: function setHomeContentType(t, n) {
                        var r = t.commit;
                        if (function isValidHomeContentType(e) {
                            return ["following", "my_activity"].includes(e)
                        }(n))
                            return r("setHomeContentType", n), e.setHomeContentType(n)
                    },
                    setShowAlertsOnHome: function setShowAlertsOnHome(t, n) {
                        return (0, t.commit)("setShowAlertsOnHome", n), e.setShowAlertsOnHome(n)
                    },
                    setIsThreeD: function setIsThreeD(e, t) {
                        (0, e.commit)("setIsThreeD", t)
                    },
                    cancelFriendRequest: function cancelFriendRequest(t, n) {
                        var a = t.dispatch;
                        return e.cancelFriendRequest(n).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    declineFriendRequest: function declineFriendRequest(t, n) {
                        var a = t.dispatch;
                        return e.declineFriendRequest(n).then((function(e) {
                            a("alerts/create", {
                                type: r.g.success,
                                message: o(e)
                            }, {
                                root: !0
                            })
                        })).catch((function() {
                            a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    refreshUserRoles: function refreshUserRoles(t) {
                        var n = t.commit;
                        if (e.isLoggedIn())
                            return e.getRoles().then((function(e) {
                                n("setRoles", e.data)
                            }))
                    },
                    checkValidUsername: function checkValidUsername(t, n) {
                        var a = t.dispatch;
                        return e.checkValidUsername(n).then((function(e) {
                            return e.data
                        })).catch((function() {
                            return a("alerts/create", {
                                type: r.g.error,
                                message: r.b.badRequest
                            }, {
                                root: !0
                            })
                        }))
                    },
                    getAdditionaUserInfoFromDb: function getAdditionaUserInfoFromDb(t) {
                        var n = t.commit,
                            r = e.get("username");
                        if (r)
                            return e.getUser(r).then((function(e) {
                                n("setAdditionalInfo", {
                                    flag: e.data.countryId,
                                    country: e.data.countryName,
                                    membership: (e.data.membership || {}).code,
                                    rating: e.data.bestRating
                                })
                            })).catch()
                    }
                }
            }(s.a),
            state: function createUserState(e, t) {
                return {
                    chessTitle: e.get("chessTitle") || "",
                    cohort: e.get("cohort"),
                    flairCode: e.get("flairCode"),
                    friends: e.get("friends"),
                    roles: e.get("roles"),
                    opponents: e.get("opponents"),
                    boardSettings: e.get("boardSettings"),
                    loading: !1,
                    eligibleFirstTrial: e.eligibleFirstTrial(),
                    isActivated: e.checkMembershipStatus("isActivated"),
                    isLoggedIn: e.isLoggedIn(),
                    isEnabled: e.isEnabled("isEnabled"),
                    isImpersonating: e.isImpersonating(),
                    isStaff: e.checkMembershipStatus("isStaff"),
                    isStaffOnly: e.checkMembershipStatus("isStaffOnly"),
                    isModerator: e.checkMembershipStatus("isModerator"),
                    isModeratorOnly: e.checkMembershipStatus("isModeratorOnly"),
                    isDiamond: e.checkMembershipStatus("isDiamond"),
                    isDiamondOnly: e.checkMembershipStatus("isDiamondOnly"),
                    isPlatinum: e.checkMembershipStatus("isPlatinum"),
                    isPlatinumOnly: e.checkMembershipStatus("isPlatinumOnly"),
                    isSilver: e.checkMembershipStatus("isSilver"),
                    isSilverOnly: e.checkMembershipStatus("isSilverOnly"),
                    isGold: e.checkMembershipStatus("isGold"),
                    isGoldOnly: e.checkMembershipStatus("isGoldOnly"),
                    isPremium: e.checkMembershipStatus("isPremium"),
                    isBasic: e.checkMembershipStatus("isBasic"),
                    id: e.get("id"),
                    language: t.get("language"),
                    contentLanguage: t.get("contentLanguage"),
                    username: e.get("username"),
                    avatarUrl: e.get("avatarUrl"),
                    settingsAvatarUrl: e.get("settingsAvatarUrl"),
                    avatarLargeUrl: e.get("avatarLargeUrl"),
                    lastLoginDate: e.get("lastLoginDate"),
                    registerDate: e.get("registerDate"),
                    timezone: e.get("timezone"),
                    diagramSettings: e.get("diagramSettings"),
                    speaksEnglish: t.get("speaksEnglish"),
                    isThreeD: !1,
                    showAlertsOnHome: e.get("showAlertsOnHome"),
                    archiveView: e.get("getArchiveView"),
                    homeContentType: e.get("homeContentType"),
                    membershipLevel: e.get("membershipLevel"),
                    isContentHidden: e.get("isContentHidden"),
                    fairPlayAgree: e.get("fairPlayAgree"),
                    features: e.get("features"),
                    followSuggestions: [],
                    followMessage: "",
                    country: e.get("country"),
                    flag: e.get("flag"),
                    rating: e.get("rating"),
                    membership: e.get("membership"),
                    safeMode: e.get("safeMode"),
                    uuid: e.get("uuid")
                }
            }(s.a, i),
            getters: {
                chessTitle: function chessTitle(e) {
                    return e.chessTitle
                },
                isActivated: function isActivated(e) {
                    return e.isActivated
                },
                id: function id(e) {
                    return e.id
                },
                isImpersonating: function isImpersonating(e) {
                    return e.isImpersonating
                },
                isLoggedIn: function isLoggedIn(e) {
                    return e.isLoggedIn
                },
                username: function username(e) {
                    return e.username
                },
                roles: function roles(e) {
                    return e.roles
                },
                isPremium: function isPremium(e) {
                    return e.isPremium
                },
                hyphenatedLanguage: function hyphenatedLanguage(e) {
                    return (e.language || "").replace("_", "-")
                }
            }
        }
    },
    246: function(e, t, n) {
        "use strict";
        var r = n(34),
            a = n(80);
        t.a = {
            name: "click-outside",
            bind: function bind(e, t) {
                var n,
                    o,
                    i = 1;
                if (r.a.isFunction(t.value) ? n = t.value : r.a.isObject(t.value) && (n = t.value.handler, i = t.value.delay), !r.a.isFunction(n))
                    throw new Error("must pass function to click-outside");
                var s = function onClickElement(e) {
                        return e.stopPropagation()
                    },
                    c = function onClickDocument(t) {
                        return e !== t.target && n(e, t)
                    };
                e.$unbindClickOutside && e.$unbindClickOutside(), e.$unbindClickOutside = function() {
                    a.a.clearTimeout(o), e.removeEventListener("click", s), document.removeEventListener("click", c), delete e.$unbindClickOutside
                }, o = a.a.setTimeout((function() {
                    e.addEventListener("click", s), document.addEventListener("click", c)
                }), i)
            },
            unbind: function unbind(e) {
                e.$unbindClickOutside && e.$unbindClickOutside()
            }
        }
    },
    247: function(e, t, n) {
        "use strict";
        var r = n(38),
            a = n(176),
            o = n(8);
        t.a = {
            props: {
                membership: {
                    type: Number
                }
            },
            computed: {
                flairHref: function flairHref() {
                    return Object(a.c)({
                        code: this.standardizedFlairCodeFromMixin,
                        flairMembership: this.membership,
                        selfIsPremium: Object(r.a)("isPremium"),
                        selfIsModerator: Object(r.a)("isModerator")
                    })
                },
                flairTooltip: function flairTooltip() {
                    return Object(a.d)({
                        code: this.standardizedFlairCodeFromMixin,
                        flairMembership: this.membership
                    })
                },
                standardizedFlairCodeFromMixin: function standardizedFlairCodeFromMixin() {
                    return this.code || this.userFlair && this.userFlair.code || o.c.code
                }
            },
            methods: {
                handleFlairClick: function handleFlairClick() {
                    this.flairHref.length && (window.location = this.flairHref)
                }
            }
        }
    },
    248: function(e, t, n) {
        "use strict";
        var r = {
                name: "country-flag",
                directives: {
                    tooltip: n(24).a
                },
                props: {
                    code: {
                        type: [Number, String],
                        required: !1
                    },
                    name: {
                        type: [String, Object],
                        required: !1
                    },
                    size: {
                        type: String,
                        required: !1
                    }
                }
            },
            a = n(3),
            o = Object(a.a)(r, (function() {
                var e,
                    t = this.$createElement;
                return (this._self._c || t)("div", {
                    directives: [{
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: this.name,
                        expression: "name"
                    }],
                    class: ["country-flags-component", ("country-" + this.code).toLowerCase(), (e = {}, e["country-flags-" + this.size] = this.size, e)]
                })
            }), [], !1, null, null, null);
        t.a = o.exports
    },
    249: function(e, t, n) {
        "use strict";
        var r = n(8),
            a = n(238),
            o = n(247),
            i = n(24),
            s = n(258),
            c = {
                name: "user-flair-icon",
                components: {
                    Flair: a.a,
                    UserMembershipIcon: s.a
                },
                directives: {
                    Tooltip: i.a
                },
                mixins: [o.a],
                props: {
                    code: {
                        type: String
                    },
                    membership: {
                        type: Number,
                        default: r.k.basic
                    },
                    size: {
                        type: String,
                        default: "small"
                    }
                }
            },
            l = n(218),
            u = n(3);
        var d = Object(u.a)(c, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.code ? n("a", {
                class: e.$style.component,
                attrs: {
                    href: e.flairHref
                },
                on: {
                    click: function(t) {
                        return t.stopPropagation(), t.preventDefault(), e.handleFlairClick(t)
                    }
                }
            }, [n("flair", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.flairTooltip,
                    expression: "flairTooltip"
                }],
                attrs: {
                    code: e.code,
                    membership: e.membership,
                    size: e.size
                }
            })], 1) : n("user-membership-icon", {
                attrs: {
                    membership: e.membership,
                    size: e.size
                }
            })
        }), [], !1, (function injectStyles(e) {
            this.$style = l.default.locals || l.default
        }), null, null);
        t.a = d.exports
    },
    25: function(e, t, n) {
        e.exports = n(20)(18)
    },
    250: function(e, t, n) {
        "use strict";
        var r = n(232),
            a = n(11),
            o = n(48),
            i = n(18),
            s = n(4),
            c = n(0),
            l = {
                getUserTrophies: function getUserTrophies(e, t) {
                    var n = e.commit,
                        r = e.dispatch,
                        c = {
                            username: t.username,
                            trophyType: t.trophyType
                        };
                    return i.default.get(s.a.generate("web_member_callback_trophy_list", c)).then((function(e) {
                        if (e.data)
                            return n("setUserTrophies", e.data), o.default.set("user_trophies", e.data, 60), e.data
                    })).catch((function() {
                        var e = a.g.error;
                        r("alerts/create", {
                            type: e,
                            message: a.b.DEFAULT
                        }, {
                            root: !0
                        })
                    }))
                },
                getAllTrophies: function getAllTrophies(e, t) {
                    var n = e.commit,
                        r = e.dispatch,
                        o = e.state;
                    n("setFinishedLoading", !1);
                    var c = Object.assign({}, {
                        type: o.trophyType
                    }, t);
                    return i.default.get(s.a.generate("web_callback_get_trophies", c)).then((function(e) {
                        e.data && n("setAllTrophies", e.data)
                    })).catch((function() {
                        var e = a.g.error;
                        r("alerts/create", {
                            type: e,
                            message: a.b.DEFAULT
                        }, {
                            root: !0
                        })
                    }))
                },
                getTrophyShowcase: function getTrophyShowcase(e, t) {
                    var n = e.commit,
                        r = e.dispatch;
                    return i.default.get(s.a.generate("web_user_trophy_showcase_callback", {
                        username: t
                    })).then((function(e) {
                        e.data && n("setUserShowcaseTrophies", e.data)
                    })).catch((function() {
                        var e = a.g.error;
                        r("alerts/create", {
                            type: e,
                            message: a.b.DEFAULT
                        }, {
                            root: !0
                        })
                    }))
                },
                getUserTrophyCount: function getUserTrophyCount(e, t) {
                    var n = e.commit,
                        r = e.dispatch;
                    return i.default.get(s.a.generate("web_callback_count_user_trophies", {
                        username: t
                    })).then((function(e) {
                        e.data && n("setUserTrophiesCount", e.data.count)
                    })).catch((function() {
                        var e = a.g.error;
                        r("alerts/create", {
                            type: e,
                            message: a.b.DEFAULT
                        }, {
                            root: !0
                        })
                    }))
                },
                featureTrophy: function featureTrophy(e, t) {
                    var n = e.dispatch,
                        r = t.trophyId,
                        o = t.featured,
                        l = t.username,
                        u = {
                            id: r,
                            featured: o
                        };
                    return i.default.post(s.a.generate("web_feature_trophy_callback", u)).then((function(e) {
                        var t = a.g.success,
                            r = function prepAlertMessage(e) {
                                return e.data && e.data.message || a.b.DEFAULT
                            }(e);
                        n("alerts/create", {
                            type: t,
                            message: r
                        }, {
                            root: !0
                        }), n("getTrophyShowcase", l)
                    })).catch((function() {
                        var e = a.g.error,
                            t = c.a.trans("Error featuring trophies. Please try again later.");
                        n("alerts/create", {
                            type: e,
                            message: t
                        }, {
                            root: !0
                        })
                    }))
                },
                sendTrophyToUser: function sendTrophyToUser(e) {
                    var t = e.commit,
                        n = e.state,
                        a = {
                            username: n.recipientUsername,
                            trophyId: n.selectedTrophy.id,
                            message: Object(r.b)(n.message)
                        };
                    return "number" == typeof n.gameId && (a[n.isLiveGame ? "gameLiveId" : "gameId"] = n.gameId), t("disableSendButton", !0), i.default.post(s.a.generate("web_award_trophy_callback", a)).then((function() {
                        t("disableSendButton", !1)
                    })).catch((function(e) {
                        return t("setErrorMessage", e.response.data.message), t("disableSendButton", !1), Promise.reject(e)
                    }))
                }
            },
            u = {
                allTrophiesToGive: [],
                disableSendButton: !1,
                errorMessage: "",
                finishedLoadingTrophies: !1,
                gameId: null,
                hideShowcase: !1,
                isLiveGame: !1,
                message: "",
                meta: {
                    currentPage: 1,
                    morePages: !1
                },
                recipientIsFriend: !1,
                modalState: n(200).a.modalStates.select,
                recipientUsername: null,
                selectedTrophy: null,
                trophies: [],
                trophyType: "social",
                userShowcaseTrophies: [],
                userTrophies: [],
                userTrophyCount: 0
            };
        t.a = {
            namespaced: !0,
            actions: l,
            mutations: {
                disableSendButton: function disableSendButton(e, t) {
                    e.disableSendButton = t
                },
                setUserTrophies: function setUserTrophies(e, t) {
                    e.userTrophies = t
                },
                setAllTrophies: function setAllTrophies(e, t) {
                    e.trophies = t.data, e.meta = t.meta, e.allTrophiesToGive = t.data, e.finishedLoadingTrophies = !0
                },
                setErrorMessage: function setErrorMessage(e, t) {
                    e.errorMessage = t
                },
                setFinishedLoading: function setFinishedLoading(e, t) {
                    e.finishedLoadingTrophies = t
                },
                setGameId: function setGameId(e, t) {
                    e.gameId = t
                },
                setIsLiveGame: function setIsLiveGame(e, t) {
                    e.isLiveGame = t
                },
                setMessage: function setMessage(e, t) {
                    e.message = t
                },
                setModalState: function setModalState(e, t) {
                    e.modalState = t
                },
                setRecipientIsFriend: function setRecipientIsFriend(e, t) {
                    e.recipientIsFriend = t
                },
                setRecipientUsername: function setRecipientUsername(e, t) {
                    e.recipientUsername = t
                },
                setSelectedTrophy: function setSelectedTrophy(e, t) {
                    e.selectedTrophy = t
                },
                setTrophyType: function setTrophyType(e, t) {
                    e.trophyType = t
                },
                setUserShowcaseTrophies: function setUserShowcaseTrophies(e, t) {
                    e.hideShowcase = 0 === t.length, e.userShowcaseTrophies = t
                },
                setUserTrophiesCount: function setUserTrophiesCount(e, t) {
                    e.userTrophyCount = t
                }
            },
            state: u
        }
    },
    258: function(e, t, n) {
        "use strict";
        var r = n(8),
            a = {
                name: "user-membership-icon",
                props: {
                    membership: {
                        type: Number,
                        required: !0
                    },
                    size: {
                        type: String
                    }
                },
                data: function data() {
                    return {
                        membershipIcon: r.l[this.membership]
                    }
                },
                computed: {
                    isBasic: function isBasic() {
                        return this.membership === r.k.basic
                    }
                }
            },
            o = n(207),
            i = n(3);
        var s = Object(i.a)(a, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.membershipIcon && !e.isBasic ? n("span", {
                class: [e.$style["level-" + e.membership], e.$style["" + e.size], e.$style.component]
            }) : e._e()
        }), [], !1, (function injectStyles(e) {
            this.$style = o.default.locals || o.default
        }), null, null);
        t.a = s.exports
    },
    26: function(e, t, n) {
        e.exports = n(20)(45)
    },
    27: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return s
        })), n.d(t, "c", (function() {
            return c
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "j", (function() {
            return u
        })), n.d(t, "f", (function() {
            return d
        })), n.d(t, "h", (function() {
            return p
        })), n.d(t, "k", (function() {
            return b
        })), n.d(t, "e", (function() {
            return m
        })), n.d(t, "n", (function() {
            return g
        })), n.d(t, "g", (function() {
            return f
        })), n.d(t, "i", (function() {
            return h
        })), n.d(t, "b", (function() {
            return _
        })), n.d(t, "l", (function() {
            return v
        })), n.d(t, "m", (function() {
            return w
        }));
        var r = n(19),
            a = n(23),
            o = n(2),
            i = "//images.chesscomfiles.com",
            s = {
                ARCADE: "arcade",
                DEFAULT: "default",
                NATURAL: "natural",
                NONE: "none",
                SLOW: "slow"
            },
            c = {
                ALMOST_CORRECT: {
                    color: "#8a8886",
                    icon: r.undo
                },
                BEST_MOVE: {
                    color: "#9EBA5A",
                    icon: r.bestMove,
                    key: "bestMove",
                    label: Object(o.b)("Best Move"),
                    phrase: Object(o.b)("is best")
                },
                BLUNDER: {
                    annotation: a.c.$4,
                    color: "#b33430",
                    icon: r.blunder,
                    key: "blunder",
                    label: Object(o.b)("Blunder"),
                    phrase: Object(o.b)("is a blunder")
                },
                BOOK: {
                    icon: r.book,
                    key: "book",
                    label: Object(o.b)("Book"),
                    phrase: Object(o.b)("is a book move")
                },
                BRILLIANT: {
                    color: "#1baca6",
                    icon: r.brilliant,
                    key: "brilliant",
                    label: Object(o.b)("Brilliant"),
                    phrase: Object(o.b)("is brilliant")
                },
                CORRECT: {
                    color: "#acce59",
                    key: "correct",
                    icon: r.correct,
                    label: Object(o.b)("Correct")
                },
                CRITICAL: {
                    key: "critical",
                    label: Object(o.b)("Critical")
                },
                EXCELLENT: {
                    color: "#5a9ac0",
                    icon: r.excellent,
                    key: "excellent",
                    label: Object(o.b)("Excellent"),
                    phrase: Object(o.b)("is excellent")
                },
                FORCED: {
                    icon: r.forced,
                    key: "forced",
                    label: Object(o.b)("Forced"),
                    phrase: Object(o.b)("is forced")
                },
                GOOD: {
                    icon: r.good,
                    key: "good",
                    label: Object(o.b)("Good"),
                    phrase: Object(o.b)("is good")
                },
                INACCURACY: {
                    annotation: a.c.$6,
                    color: "#f0c15c",
                    icon: r.inaccuracy,
                    key: "inaccuracy",
                    label: Object(o.b)("Inaccuracy"),
                    phrase: Object(o.b)("is an inaccuracy")
                },
                INCORRECT: {
                    color: "#c93430",
                    icon: r.incorrect,
                    key: "incorrect",
                    label: Object(o.b)("Incorrect")
                },
                MISSED_WIN: {
                    color: "#dd5357",
                    icon: r.missedWin,
                    key: "missedWin",
                    label: Object(o.b)("Missed Win"),
                    phrase: Object(o.b)("is a missed win")
                },
                MISTAKE: {
                    annotation: a.c.$2,
                    color: "#e6912c",
                    icon: r.mistake,
                    key: "mistake",
                    label: Object(o.b)("Mistake"),
                    phrase: Object(o.b)("is a mistake")
                },
                STAR: {
                    color: "#e6912c",
                    icon: r.bestMove,
                    key: "star"
                }
            },
            l = {
                RETRY_HINT_COLOR: "rgba(27, 172, 166, 0.5)"
            },
            u = {
                COORDINATE_FILE: ".coordinates .letter"
            },
            d = {
                INSIDE: "inside",
                NONE: null,
                OUTSIDE: "outside"
            },
            p = ("".concat(i, "/chess-themes/boards"), "".concat(i, "/chess-themes/pieces"), "".concat(i, "/chess-themes/sounds"), {
                boardStyle: "green",
                pieceStyle: "neo",
                highlightColor: "#FFFF33",
                highlightOpacity: .5,
                arrowColor: "rgb(255, 168, 0)",
                flipped: !1,
                files: 8,
                ranks: 8
            }),
            b = {
                DARK_MODE_CHANGE: "darkModeChange"
            },
            m = [{
                key: 0,
                label: Object(o.b)("None"),
                value: d.NONE
            }, {
                key: 1,
                label: Object(o.b)("Inside"),
                value: d.INSIDE
            }, {
                key: 2,
                label: Object(o.b)("Outside"),
                value: d.OUTSIDE
            }],
            g = {
                pieces: ["real3d"],
                animations: ["arcade", "natural"]
            },
            f = [{
                key: "0",
                value: null
            }, {
                key: "1",
                value: "inside"
            }, {
                key: "2",
                value: "outside"
            }],
            h = {
                board: ".board-board",
                resize: ".board-controls",
                sidebar: ".board-sidebar"
            },
            _ = {
                minSidebarWidth: 300,
                boardPaddingLeft: 30
            },
            v = "8/pppppppp8/8/8/8/PPPPPPPP/8",
            w = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    },
    28: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return _async
        })), n.d(t, "b", (function() {
            return _await
        })), n.d(t, "e", (function() {
            return _continueIgnored
        })), n.d(t, "c", (function() {
            return _call
        })), n.d(t, "g", (function() {
            return _invoke
        })), n.d(t, "h", (function() {
            return _invokeIgnored
        })), n.d(t, "d", (function() {
            return _catch
        })), n.d(t, "f", (function() {
            return _empty
        }));
        function _async(e) {
            return function() {
                for (var t = [], n = 0; n < arguments.length; n++)
                    t[n] = arguments[n];
                try {
                    return Promise.resolve(e.apply(this, t))
                } catch (r) {
                    return Promise.reject(r)
                }
            }
        }
        function _await(e, t, n) {
            return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
        }
        function _continueIgnored(e) {
            if (e && e.then)
                return e.then(_empty)
        }
        function _call(e, t, n) {
            if (n)
                return t ? t(e()) : e();
            try {
                var r = Promise.resolve(e());
                return t ? r.then(t) : r
            } catch (a) {
                return Promise.reject(a)
            }
        }
        function _invoke(e, t) {
            var n = e();
            return n && n.then ? n.then(t) : t(n)
        }
        function _invokeIgnored(e) {
            var t = e();
            if (t && t.then)
                return t.then(_empty)
        }
        function _catch(e, t) {
            try {
                var n = e()
            } catch (r) {
                return t(r)
            }
            return n && n.then ? n.then(void 0, t) : n
        }
        function _empty() {}
    },
    281: function(e, t) {
        e.exports = function _arrayWithHoles(e) {
            if (Array.isArray(e))
                return e
        }
    },
    282: function(e, t) {
        e.exports = function _iterableToArrayLimit(e, t) {
            var n = [],
                r = !0,
                a = !1,
                o = void 0;
            try {
                for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0)
                    ;
            } catch (c) {
                a = !0, o = c
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (a)
                        throw o
                }
            }
            return n
        }
    },
    283: function(e, t) {
        e.exports = function _nonIterableRest() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    },
    291: function(e, t, n) {
        "use strict";
        function postMessage(e) {
            window.postMessage(e, window.location.origin)
        }
        n.d(t, "a", (function() {
            return postMessage
        }))
    },
    3: function(e, t, n) {
        "use strict";
        function normalizeComponent(e, t, n, r, a, o, i, s) {
            var c,
                l = "function" == typeof e ? e.options : e;
            if (t && (l.render = t, l.staticRenderFns = n, l._compiled = !0), r && (l.functional = !0), o && (l._scopeId = "data-v-" + o), i ? (c = function(e) {
                (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), a && a.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i)
            }, l._ssrRegister = c) : a && (c = s ? function() {
                a.call(this, this.$root.$options.shadowRoot)
            } : a), c)
                if (l.functional) {
                    l._injectStyles = c;
                    var u = l.render;
                    l.render = function renderWithStyleInjection(e, t) {
                        return c.call(t), u(e, t)
                    }
                } else {
                    var d = l.beforeCreate;
                    l.beforeCreate = d ? [].concat(d, c) : [c]
                }
            return {
                exports: e,
                options: l
            }
        }
        n.d(t, "a", (function() {
            return normalizeComponent
        }))
    },
    30: function(e, t, n) {
        "use strict";
        var r = n(26);
        t.a = new r.default
    },
    309: function(e, t, n) {
        var r = n(383);
        e.exports = function _objectWithoutProperties(e, t) {
            if (null == e)
                return {};
            var n,
                a,
                o = r(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    n = i[a], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
    },
    32: function(e, t, n) {
        e.exports = n(20)(2)
    },
    34: function(e, t, n) {
        "use strict";
        var r = n(60),
            a = n.n(r);
        function isNull(e) {
            return null === e
        }
        function isUndefined(e) {
            return void 0 === e
        }
        function isObject(e) {
            return !isNull(e) && "object" === a()(e)
        }
        t.a = {
            isString: function isString(e) {
                return "string" == typeof e
            },
            isFunction: function isFunction(e) {
                return "function" == typeof e
            },
            isNumber: function isNumber(e) {
                return "number" == typeof e
            },
            isNil: function isNil(e) {
                return isNull(e) || isUndefined(e)
            },
            isObject: isObject,
            isPlainObject: function isPlainObject(e) {
                return !!isObject(e) && (e.constructor && "Object" === e.constructor.name)
            },
            isArray: function isArray(e) {
                return Array.isArray(e)
            },
            isError: function isError(e) {
                if (!isObject(e))
                    return !1;
                var t = Object.prototype.toString.call(e);
                return "[object Error]" === t || "[object DOMException]" === t
            },
            isUndefined: isUndefined
        }
    },
    35: function(e, t, n) {
        e.exports = n(20)(3)
    },
    351: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "e", (function() {
            return s
        })), n.d(t, "a", (function() {
            return c
        })), n.d(t, "c", (function() {
            return l
        }));
        var r = n(42),
            a = n(0),
            o = {
                NOTIFICATIONS_REQUEST_CONFIRM: "notifications-request-confirm",
                NOTIFICATIONS_REQUEST_DECLINE: "notifications-request-decline",
                SHOW_CUSTOM_REQUEST: "show-custom-request"
            },
            i = {
                ENABLE_NOTIFICATIONS: ".enable-push-notifications",
                ENABLE_NOTIFICATIONS_MESSAGE: ".enable-push-notifications-message",
                NOTIFICATIONS_REQUEST: "notifications-request"
            },
            s = {
                header: a.a.trans("Get Notifications in Your Browser?"),
                list: [a.a.trans("It’s your move - or someone wants to play"), a.a.trans("You get a new Message or Friend Request"), a.a.trans("Your favorite chess celebrities are playing live"), a.a.trans("A ChessTV featured event begins")],
                textMain: a.a.trans("Enable Chess.com notifications in your browser, and instantly know when…"),
                tip: a.a.trans("(You can choose the events that matter to you in your Chess.com Notification settings.)")
            },
            c = {
                BROWSER: "".concat(Object(r.b)().name).concat(Object(r.b)().version),
                MAX_REQUESTS: 2,
                USER: window.context.user
            },
            l = c.USER && c.USER.allowBrowserNotifications && c.USER.allowBrowserNotifications.length > 0 ? c.USER.allowBrowserNotifications : null
    },
    357: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return getAuthorsByContentType
        })), n.d(t, "b", (function() {
            return getContent
        })), n.d(t, "c", (function() {
            return getNonTranslatedString
        })), n.d(t, "d", (function() {
            return headlineContent
        }));
        var r = n(138),
            a = n.n(r),
            o = n(18),
            i = n(4),
            s = n(6);
        function getAuthorsByContentType(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {
                    article: "getArticleAuthors",
                    blog: "getBlogAuthors",
                    news: "getNewsAuthors"
                };
            return Object.prototype.hasOwnProperty.call(n, e) ? o.default.get(i.a.generate(s.b[n[e]], t)).then((function(e) {
                return e.data
            })) : Promise.reject(new Error("Invalid content type"))
        }
        function getContent(e) {
            var t = Object.assign({}, e.routeParams, {
                contentType: e.contentType,
                page: e.page,
                itemsPerPage: e.itemsPerPage
            });
            return ["cat_id", "keyword", "username", "orderBy", "unpublished"].forEach((function(n) {
                Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            })), o.default.get(i.a.generate(s.b.getContent, t)).then((function(e) {
                return e.data
            }))
        }
        function getNonTranslatedString(e) {
            var t = Object.entries(window.chesscom_translations.messages).find((function(t) {
                var n = a()(t, 2),
                    r = n[0];
                return n[1] === e || r === e
            }));
            return t ? t[0] : e
        }
        function headlineContent(e) {
            var t = e.contentType,
                n = e.contentId;
            return o.default.get(i.a.generate("web_content_callback_headline", {
                contentType: t,
                contentId: n
            }))
        }
    },
    38: function(e, t, n) {
        "use strict";
        n.d(t, "f", (function() {
            return i
        })), n.d(t, "e", (function() {
            return s
        })), n.d(t, "b", (function() {
            return c
        })), n.d(t, "a", (function() {
            return l
        })), n.d(t, "c", (function() {
            return u
        })), n.d(t, "d", (function() {
            return d
        }));
        var r = n(74),
            a = (n(4), n(8)),
            o = window.context,
            i = function isLoggedIn() {
                return !(!o || !o.user || Object(r.a)())
            },
            s = function isImpersonating() {
                return !(!i() || !o.user.isImpersonating)
            },
            c = function eligibleFirstTrial() {
                return !(!i() || !o.user.eligibleFirstTrial)
            },
            l = function checkUserStatus(e) {
                if (!i())
                    return !1;
                var t = !1;
                switch (e) {
                case "isActivated":
                    t = o.user.isActivated;
                    break;
                case "isStaff":
                    t = o.user.membershipLevel >= a.k.staff;
                    break;
                case "isStaffOnly":
                    t = o.user.membershipLevel === a.k.staff;
                    break;
                case "isModerator":
                    t = o.user.membershipLevel >= a.k.moderator;
                    break;
                case "isModeratorOnly":
                    t = o.user.membershipLevel === a.k.moderator;
                    break;
                case "isDiamond":
                    t = o.user.membershipLevel >= a.k.diamond;
                    break;
                case "isDiamondOnly":
                    t = o.user.membershipLevel === a.k.diamond;
                    break;
                case "isPlatinum":
                    t = o.user.membershipLevel >= a.k.platinum;
                    break;
                case "isPlatinumOnly":
                    t = o.user.membershipLevel === a.k.platinum;
                    break;
                case "isSilver":
                    t = o.user.membershipLevel >= a.k.silver;
                    break;
                case "isSilverOnly":
                    t = o.user.membershipLevel === a.k.silver;
                    break;
                case "isGold":
                    t = o.user.membershipLevel >= a.k.gold;
                    break;
                case "isGoldOnly":
                    t = o.user.membershipLevel === a.k.gold;
                    break;
                case "isPremium":
                    t = o.user.membershipLevel >= a.k.silver;
                    break;
                case "isBasic":
                    t = o.user.membershipLevel === a.k.basic;
                    break;
                case "isNewlyRegistered":
                    t = o.user.isNewlyRegistered;
                    break;
                case "chessTitle":
                    t = o.user.chessTitle;
                    break;
                default:
                    t = !1
                }
                return t
            },
            u = function getAdditionalUserInfo(e) {
                if (!i())
                    return "diagramSettings" === e ? {} : null;
                var t = !1;
                switch (e) {
                case "cohort":
                    t = o.user.cohort;
                    break;
                case "flairCode":
                    t = o.user.flairCode;
                    break;
                case "getUserId":
                    t = o.user.id;
                    break;
                case "getUsername":
                    t = o.user.username;
                    break;
                case "getAvatarUrl":
                    t = o.user.avatarUrl;
                    break;
                case "getAvatarLargeUrl":
                    t = o.user.avatarLargeUrl;
                    break;
                case "getSettingsAvatarUrl":
                    t = o.user.settingsAvatarUrl;
                    break;
                case "getLastLoginDate":
                    t = o.user.lastLoginDate;
                    break;
                case "registerDate":
                    t = o.user.registerDate;
                    break;
                case "getBrowserTimezone":
                    t = window.jstz.determine().name();
                    break;
                case "getTimezone":
                    t = o.user.timezone;
                    break;
                case "getDiagramSettings":
                    t = o.diagramSettings;
                    break;
                case "language":
                    t = o.i18n.locale;
                    break;
                case "contentLanguage":
                    t = o.i18n.contentLanguage;
                    break;
                case "speaksEnglish":
                    t = "en_US" === o.i18n.locale;
                    break;
                case "eligibleFirstTrial":
                    t = o.user.eligibleFirstTrial;
                    break;
                case "fairPlayAgree":
                    t = o.user.fairPlayAgree;
                    break;
                case "getArchiveView":
                    t = o.user.archiveView ? o.user.archiveView : "grid";
                    break;
                case "homeContentType":
                    t = "following";
                    break;
                case "showAlertsOnHome":
                    t = o.user.showAlertsOnHome;
                    break;
                case "getMembershipLevel":
                    t = o.user.membershipLevel;
                    break;
                case "isClassicTheme":
                    t = o.user.isClassicTheme;
                    break;
                case "isContentHidden":
                    t = o.user.isContentHidden;
                    break;
                case "isDarkMode":
                    t = o.user.isDarkMode;
                    break;
                case "safeMode":
                    t = o.user.safeMode;
                    break;
                case "uuid":
                    t = o.user.uuid;
                    break;
                default:
                    t = !1
                }
                return t
            },
            d = function getMembershipNumber(e, t) {
                return !t && e >= a.k.basic ? a.k.unspecifiedClosed : e
            }
    },
    383: function(e, t) {
        e.exports = function _objectWithoutPropertiesLoose(e, t) {
            if (null == e)
                return {};
            var n,
                r,
                a = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++)
                n = o[r], t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a
        }
    },
    4: function(e, t, n) {
        "use strict";
        var r = n(32),
            a = n.n(r),
            o = n(35),
            i = n.n(o),
            s = function() {
                function Router() {
                    a()(this, Router), this.baseUrl = null, null == window.Routing && (window.Routing = {
                        generate: function generate(e) {
                            return e
                        }
                    })
                }
                return i()(Router, [{
                    key: "generate",
                    value: function generate(e, t, n) {
                        var r = t || {},
                            a = this.baseUrl || r.baseUrl || null;
                        return "string" == typeof r.username && (r.username = r.username.toLowerCase()), null != a ? (delete r.baseUrl, a + window.Routing.generate(e, r, !1)) : window.Routing.generate(e, r, n)
                    }
                }, {
                    key: "setBaseUrl",
                    value: function setBaseUrl(e) {
                        this.baseUrl = e
                    }
                }]), Router
            }();
        t.a = new s
    },
    40: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return g
        })), n.d(t, "g", (function() {
            return f
        })), n.d(t, "f", (function() {
            return h
        })), n.d(t, "e", (function() {
            return _
        })), n.d(t, "h", (function() {
            return v
        })), n.d(t, "a", (function() {
            return w
        })), n.d(t, "b", (function() {
            return y
        })), n.d(t, "c", (function() {
            return k
        }));
        var r = n(5),
            a = n(0),
            o = "web_member_callback_block_member",
            i = "web_user_callback_delete_comment",
            s = "web_user_callback_get_available_flair",
            c = "web_user_callback_load_notes",
            l = "web_member_callback_mute_account",
            u = "web_user_callback_post_note",
            d = "web_user_callback_set_flair",
            p = "web_user_callback_set_status",
            b = "web_user_settings_edit",
            m = "web_member_view",
            g = "#flair-modal",
            f = {
                blockUser: function blockUser(e) {
                    return Object(r.a)(o, {
                        username: e
                    })
                },
                communityGuidelines: function communityGuidelines() {
                    return Object(r.a)("web_policies_community")
                },
                deleteNote: function deleteNote(e) {
                    return Object(r.a)(i, {
                        id: e
                    })
                },
                disableAccount: function disableAccount(e) {
                    return Object(r.a)("web_member_disable", {
                        id: e
                    })
                },
                enableAccount: function enableAccount(e) {
                    return Object(r.a)("web_member_enable", {
                        id: e
                    })
                },
                getFlair: function getFlair(e) {
                    return Object(r.a)(s, {
                        username: e
                    })
                },
                impersonateUser: function impersonateUser(e) {
                    return Object(r.a)("web_user_home", {
                        _impersonate: e
                    })
                },
                loadNotes: function loadNotes(e, t, n) {
                    return Object(r.a)(c, {
                        userId: e,
                        itemsPerPage: t,
                        page: n
                    })
                },
                muteUser: function muteUser(e) {
                    return Object(r.a)("web_member_mute", {
                        username: e
                    })
                },
                muteUserTemporary: function muteUserTemporary(e) {
                    return Object(r.a)(l, {
                        user: e
                    })
                },
                postNote: function postNote() {
                    return Object(r.a)(u)
                },
                removeAvatar: function removeAvatar(e) {
                    return Object(r.a)("web_member_remove_avatar", {
                        username: e
                    })
                },
                removeBackground: function removeBackground(e) {
                    return Object(r.a)("web_user_callback_remove_user_custom_background", {
                        user: e
                    })
                },
                resetFlair: function resetFlair(e) {
                    return Object(r.a)("web_member_reset_flair", {
                        username: e
                    })
                },
                setCode: function setCode() {
                    return Object(r.a)(d)
                },
                setFlairStatus: function setFlairStatus() {
                    return Object(r.a)(p)
                },
                settings: function settings() {
                    return Object(r.a)(b)
                },
                stopImpersonateUser: function stopImpersonateUser(e, t) {
                    return Object(r.a)(e, t)
                },
                unmuteUser: function unmuteUser(e) {
                    return Object(r.a)("web_member_unmute", {
                        username: e
                    })
                },
                userUrl: function userUrl(e) {
                    return Object(r.a)(m, {
                        username: e
                    })
                }
            },
            h = {
                NOTES_GAMES_CONTAINER: "notes-games-container",
                PROFILE_ACTIONS: "profile-actions",
                PROFILE_NOTES_BTN: "profile-notes-btn",
                PROFILE_NOTES_BTN_OPENED: "profile-notes-btn-opened",
                PROFILE_NOTES_COLLAPSE: "profile-notes-collapse",
                PROFILE_NOTES_COLLAPSE_SHOW: "profile-notes-collapse-show",
                ROOT_PROFILE: "view-profile",
                STOP_IMPERSONATE: "stop-impersonate",
                USER_STATUS: "user-profile-status"
            },
            _ = 50,
            v = {
                disableAccountConfirm: a.a.trans("Are you sure you want to disable this account?"),
                editStatus: a.a.trans("Edit status"),
                enableAccountConfirm: a.a.trans("Are you sure you want to enable this account?"),
                enterStatus: a.a.trans("Enter a status here"),
                impersonateConfirm: a.a.trans("Are you sure you want to impersonate this user?"),
                muteError: a.a.trans("Error occurred"),
                muteUserConfirm: a.a.trans("Are you sure you want to mute this user?"),
                removeAboutConfirm: a.a.trans("Are you sure you want to remove user About section?"),
                removeAvatarConfirm: a.a.trans("Are you sure you want to remove this user's avatar?"),
                removeBackgroundConfirm: a.a.trans("Are you sure you want to remove this user's background?"),
                removeFriendConfirm: function removeFriendConfirm(e) {
                    return a.a.trans("Are you sure you want to remove %friend%?", {
                        "%friend%": e
                    })
                },
                reportSpamConfirm: a.a.trans("Are you sure you want to report user for spamming?"),
                resetFlairConfirm: a.a.trans("Are you sure you want to reset this user's flair?"),
                saveStatus: a.a.trans("Save status"),
                statusTooLong: a.a.trans("Your status must be %len% characters or less", {
                    "%len%": _
                }),
                stopImpersonateConfirm: a.a.trans("Are you sure you want to stop impersonating this user?"),
                unmuteUserConfirm: a.a.trans("Are you sure you want to unmute this user?"),
                vulgarityMessage: a.a.trans("Your post seems to not fit our <a href=%url%>Community Guidelines</a>. Repeated violations may result in your account being restricted. Thank you for helping Chess.com stay a fun and friendly place for all!", {
                    "%url%": f.communityGuidelines
                })
            },
            w = {
                ALLOW_GROUP_INVITES: "data-allow-group-invites",
                AVATAR: "data-avatar",
                CAN_EDIT_STATUS: "data-can-edit-status",
                CAN_RECEIVE_GIFT: "data-can-receive-gift",
                CAN_VIEW_NOTES: "data-can-view-notes",
                ENTITY_ID: "data-entity-id",
                FLAIR: "data-flair-profile",
                IS_FOLLOWING: "data-is-following",
                IS_FRIEND: "data-is-friend",
                HAS_CLUBS: "data-has-clubs",
                HAS_FRIEND_REQUEST_FROM_USER: "data-has-friend-request-from-user",
                HAS_FRIEND_REQUEST_TO_USER: "data-has-friend-request-to-user",
                IS_AUTH_USER_BANNER_BY_VIEWED: "data-is-auth-user-banned-by-viewed",
                IS_BLOCKED: "data-is-blocked",
                IS_MESSAGEABLE: "data-is-messageable",
                IS_OWN_PROFILE: "data-is-own-profile",
                IS_USER_ENABLED: "data-is-user-enabled",
                IS_VIEWER_BLOCKED: "data-is-viewer-blocked",
                MUTE_TIME: "data-mute-time",
                NOTE_DELETE: "data-note-delete",
                NOTE_POST: "data-note-post",
                ROLES: "data-roles",
                STOP_IMPERSONATE_PARAMS: "data-stop-impersonate-params",
                STOP_IMPERSONATE_ROUTE: "data-stop-impersonate-route",
                USER: "data-user",
                USERNAME: "data-username",
                USER_ID: "data-user-id"
            },
            y = {
                FOLLOW_IN_PRIORITY_ROLES: {
                    ROLE_ARTICLE_AUTHOR: !0,
                    ROLE_NEWS_AUTHOR: !0,
                    ROLE_STREAMER: !0,
                    ROLE_VIDEO_EDITOR: !0
                },
                STATUS_SUCCESS: 200
            },
            k = {
                displayState: "DISPLAY_STATE",
                editingState: "EDITING_STATE",
                savingState: "SAVING_STATE"
            }
    },
    42: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return r
        })), n.d(t, "c", (function() {
            return a
        })), n.d(t, "i", (function() {
            return o
        })), n.d(t, "j", (function() {
            return i
        })), n.d(t, "h", (function() {
            return s
        })), n.d(t, "a", (function() {
            return c
        })), n.d(t, "f", (function() {
            return u
        })), n.d(t, "g", (function() {
            return d
        })), n.d(t, "e", (function() {
            return p
        })), n.d(t, "b", (function() {
            return m
        }));
        var r = function getWindowTitle() {
                return encodeURIComponent(window.document.title)
            },
            a = function getWindowLocation() {
                return encodeURIComponent(window.location.href)
            },
            o = window.location.pathname,
            i = r(),
            s = a();
        window.chessBrowserChecker = {};
        var c = function bookmarkPage() {
                if (window.sidebar && window.sidebar.addPanel)
                    window.sidebar.addPanel(i, s, "");
                else if (window.external && "AddFavorite" in window.external)
                    window.external.AddFavorite(s, i);
                else {
                    var e = -1 !== window.navigator.userAgent.toLowerCase().indexOf("mac") ? "Cmd" : "Ctrl";
                    alert("Press ".concat(e, "+D to bookmark this page."))
                }
            },
            l = {
                chrome: "Chrome",
                edge: "edge",
                firefox: "Firefox",
                ie: "IE",
                safari: "Safari",
                waterfox: "Waterfox"
            },
            u = function printWindow() {
                window.print()
            },
            d = function sendEmail(e, t) {
                window.location.href = "mailto:?".concat(e, "&").concat(t)
            },
            p = function isMobile() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)
            },
            b = function isEdge() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
                return null !== e.match(/Edge/)
            },
            m = function getBrowser() {
                var e,
                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                    n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                if (b(t)) {
                    var r = t.indexOf("Edge/"),
                        a = parseInt(t.substring(r + 5, t.indexOf(".", r)), 10);
                    return {
                        name: "Edge",
                        version: parseInt(a, 10)
                    }
                }
                if (/trident/i.test(n[1]))
                    return e = /\brv[ :]+(\d+)/g.exec(t) || [], {
                        name: "IE",
                        version: parseInt(e[1] || -1, 10)
                    };
                if (n[1] === l.chrome && null != (e = t.match(/\bOPR\/(\d+)/)))
                    return {
                        name: "Opera",
                        version: parseInt(e[1], 10)
                    };
                if (n[1] === l.firefox) {
                    var o = t.match(/(waterfox(?=\/))\/?\s*(\d+)/i) || [];
                    if (o[1] === l.waterfox)
                        return {
                            name: o[1],
                            version: parseInt(o[2], 10)
                        }
                }
                return (n = n[2] ? [n[1], n[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"])[0] === l.safari && null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), "MSIE" === n[0] ? {
                    name: l.ie,
                    version: parseInt(n[1], 10)
                } : {
                    name: n[0],
                    version: parseInt(n[1], 10)
                }
            }
    },
    43: function(e, t, n) {
        "use strict";
        var r = n(1),
            a = n.n(r);
        t.a = {
            props: {
                isDarkMode: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                componentClasses: function componentClasses() {
                    var e;
                    return e = {}, a()(e, this.$style.component, !0), a()(e, this.$style.darkMode, this.isDarkMode), e
                }
            }
        }
    },
    44: function(e, t, n) {
        "use strict";
        var r = {
                name: "form-button",
                mixins: [n(43).a],
                props: {
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    fullWidth: {
                        type: Boolean,
                        default: !1
                    },
                    href: {
                        type: String,
                        required: !1
                    },
                    size: {
                        type: String,
                        required: !1
                    },
                    theme: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        default: "button"
                    }
                },
                methods: {
                    handleClick: function handleClick() {
                        this.href && (window.location = this.href)
                    }
                }
            },
            a = n(86),
            o = n(3);
        var i = Object(o.a)(r, (function() {
            var e,
                t = this,
                n = t.$createElement;
            return (t._self._c || n)("button", t._g({
                class: [t.componentClasses(), t.$style[t.size], t.$style[t.theme], (e = {}, e[t.$style["full-width"]] = t.fullWidth, e)],
                attrs: {
                    disabled: t.disabled,
                    type: t.type
                },
                on: {
                    click: t.handleClick
                }
            }, t.$listeners), [t._t("default")], 2)
        }), [], !1, (function injectStyles(e) {
            this.$style = a.default.locals || a.default
        }), null, null);
        t.a = i.exports
    },
    45: function(e, t, n) {
        var r,
            a;
        void 0 === (a = "function" == typeof (r = function() {
            "use strict";
            var e = {},
                t = [],
                n = new RegExp(/^\w+\: +(.+)$/),
                r = new RegExp(/^\s*((\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]]))\s?(.+?)$/),
                a = new RegExp(/^\s*(\{\s*(\-?\d+[\s*,\s*\-?\d+]*)\s*\})|([\[\]])\s*(-Inf|\-?\d+)\s*,\s*(\+?Inf|\-?\d+)\s*([\[\]])/),
                o = {
                    locale: get_current_locale(),
                    fallback: "en",
                    placeHolderPrefix: "%",
                    placeHolderSuffix: "%",
                    defaultDomain: "messages",
                    pluralSeparator: "|",
                    add: function(n, r, a, o) {
                        var i = o || this.locale || this.fallback,
                            s = a || this.defaultDomain;
                        return e[i] || (e[i] = {}), e[i][s] || (e[i][s] = {}), e[i][s][n] = r, !1 === function exists(e, t) {
                            for (var n = 0; n < e.length; n++)
                                if (t === e[n])
                                    return !0;
                            return !1
                        }(t, s) && t.push(s), this
                    },
                    trans: function(e, t, n, r) {
                        return replace_placeholders(get_message(e, n, r, this.locale, this.fallback), t || {})
                    },
                    transChoice: function(e, t, i, s, c) {
                        var l = get_message(e, s, c, this.locale, this.fallback),
                            u = parseInt(t, 10);
                        return void 0 === (i = i || {}).count && (i.count = t), void 0 === l || isNaN(u) || (l = function pluralize(e, t, i) {
                            var s,
                                c,
                                l = [],
                                u = [],
                                d = e.split(o.pluralSeparator),
                                p = [];
                            for (s = 0; s < d.length; s++) {
                                var b = d[s];
                                r.test(b) ? (p = b.match(r), l[p[0]] = p[p.length - 1]) : n.test(b) ? (p = b.match(n), u.push(p[1])) : u.push(b)
                            }
                            for (c in l)
                                if (a.test(c))
                                    if ((p = c.match(a))[1]) {
                                        var m,
                                            g = p[2].split(",");
                                        for (m in g)
                                            if (t == g[m])
                                                return l[c]
                                    } else {
                                        var f = convert_number(p[4]),
                                            h = convert_number(p[5]);
                                        if (("[" === p[3] ? t >= f : t > f) && ("]" === p[6] ? t <= h : t < h))
                                            return l[c]
                                    }
                            return u[function plural_position(e, t) {
                                    var n = t;
                                    switch ("pt_BR" === n && (n = "xbr"), n.length > 3 && (n = n.split("_")[0]), n) {
                                    case "bo":
                                    case "dz":
                                    case "id":
                                    case "ja":
                                    case "jv":
                                    case "ka":
                                    case "km":
                                    case "kn":
                                    case "ko":
                                    case "ms":
                                    case "th":
                                    case "tr":
                                    case "vi":
                                    case "zh":
                                        return 0;
                                    case "af":
                                    case "az":
                                    case "bn":
                                    case "bg":
                                    case "ca":
                                    case "da":
                                    case "de":
                                    case "el":
                                    case "en":
                                    case "eo":
                                    case "es":
                                    case "et":
                                    case "eu":
                                    case "fa":
                                    case "fi":
                                    case "fo":
                                    case "fur":
                                    case "fy":
                                    case "gl":
                                    case "gu":
                                    case "ha":
                                    case "he":
                                    case "hu":
                                    case "is":
                                    case "it":
                                    case "ku":
                                    case "lb":
                                    case "ml":
                                    case "mn":
                                    case "mr":
                                    case "nah":
                                    case "nb":
                                    case "ne":
                                    case "nl":
                                    case "nn":
                                    case "no":
                                    case "om":
                                    case "or":
                                    case "pa":
                                    case "pap":
                                    case "ps":
                                    case "pt":
                                    case "so":
                                    case "sq":
                                    case "sv":
                                    case "sw":
                                    case "ta":
                                    case "te":
                                    case "tk":
                                    case "ur":
                                    case "zu":
                                        return 1 == e ? 0 : 1;
                                    case "am":
                                    case "bh":
                                    case "fil":
                                    case "fr":
                                    case "gun":
                                    case "hi":
                                    case "ln":
                                    case "mg":
                                    case "nso":
                                    case "xbr":
                                    case "ti":
                                    case "wa":
                                        return 0 === e || 1 == e ? 0 : 1;
                                    case "be":
                                    case "bs":
                                    case "hr":
                                    case "ru":
                                    case "sr":
                                    case "uk":
                                        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                                    case "cs":
                                    case "sk":
                                        return 1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2;
                                    case "ga":
                                        return 1 == e ? 0 : 2 == e ? 1 : 2;
                                    case "lt":
                                        return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
                                    case "sl":
                                        return e % 100 == 1 ? 0 : e % 100 == 2 ? 1 : e % 100 == 3 || e % 100 == 4 ? 2 : 3;
                                    case "mk":
                                        return e % 10 == 1 ? 0 : 1;
                                    case "mt":
                                        return 1 == e ? 0 : 0 === e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
                                    case "lv":
                                        return 0 === e ? 0 : e % 10 == 1 && e % 100 != 11 ? 1 : 2;
                                    case "pl":
                                        return 1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 12 || e % 100 > 14) ? 1 : 2;
                                    case "cy":
                                        return 1 == e ? 0 : 2 == e ? 1 : 8 == e || 11 == e ? 2 : 3;
                                    case "ro":
                                        return 1 == e ? 0 : 0 === e || e % 100 > 0 && e % 100 < 20 ? 1 : 2;
                                    case "ar":
                                        return 0 === e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e >= 3 && e <= 10 ? 3 : e >= 11 && e <= 99 ? 4 : 5;
                                    default:
                                        return 0
                                    }
                                }(t, i)] || u[0] || void 0
                        }(l, u, c || this.locale || this.fallback)), replace_placeholders(l, i)
                    },
                    fromJSON: function(e) {
                        if ("string" == typeof e && (e = JSON.parse(e)), e.locale && (this.locale = e.locale), e.fallback && (this.fallback = e.fallback), e.defaultDomain && (this.defaultDomain = e.defaultDomain), e.translations)
                            for (var t in e.translations)
                                for (var n in e.translations[t])
                                    for (var r in e.translations[t][n])
                                        this.add(r, e.translations[t][n][r], n, t);
                        return this
                    },
                    reset: function() {
                        e = {}, t = [], this.locale = get_current_locale()
                    }
                };
            function replace_placeholders(e, t) {
                var n,
                    r = o.placeHolderPrefix,
                    a = o.placeHolderSuffix;
                for (n in t) {
                    var i = new RegExp(r + n + a, "g");
                    if (i.test(e)) {
                        var s = String(t[n]).replace(new RegExp("\\$", "g"), "$$$$");
                        e = e.replace(i, s)
                    }
                }
                return e
            }
            function get_message(n, r, a, o, i) {
                var s,
                    c,
                    l,
                    u = a || o || i,
                    d = r,
                    p = u.split("_")[0];
                if (!(u in e))
                    if (p in e)
                        u = p;
                    else {
                        if (!(i in e))
                            return n;
                        u = i
                    }
                if (null == d)
                    for (var b = 0; b < t.length; b++)
                        if (has_message(u, t[b], n) || has_message(p, t[b], n) || has_message(i, t[b], n)) {
                            d = t[b];
                            break
                        }
                if (has_message(u, d, n))
                    return e[u][d][n];
                for (; u.length > 2 && (s = u.length, l = (c = u.split(/[\s_]+/))[c.length - 1].length, 1 !== c.length);)
                    if (has_message(u = u.substring(0, s - (l + 1)), d, n))
                        return e[u][d][n];
                return has_message(i, d, n) ? e[i][d][n] : n
            }
            function has_message(t, n, r) {
                return t in e && n in e[t] && r in e[t][n]
            }
            function convert_number(e) {
                return "-Inf" === e ? Number.NEGATIVE_INFINITY : "+Inf" === e || "Inf" === e ? Number.POSITIVE_INFINITY : parseInt(e, 10)
            }
            function get_current_locale() {
                return "undefined" != typeof document ? document.documentElement.lang.replace("-", "_") : "en"
            }
            return o
        }) ? r.call(t, n, t, e) : r) || (e.exports = a)
    },
    47: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return c
        })), n.d(t, "a", (function() {
            return l
        })), n.d(t, "c", (function() {
            return u
        })), n.d(t, "d", (function() {
            return d
        }));
        var r = n(50),
            a = "top",
            o = "right",
            i = "bottom",
            s = "left",
            c = function getUserPopoverPosition(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 172,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 300,
                    r = {
                        top: null,
                        left: null,
                        right: null,
                        x: null,
                        y: null
                    },
                    c = 24,
                    l = 28,
                    u = c / 2,
                    d = e.width / 2,
                    p = window,
                    b = e.bottom + t < p.innerHeight,
                    m = n - l - u,
                    g = n - m,
                    f = e.left + d + m < p.innerWidth;
                return b ? (r.top = e.bottom, r.y = i) : (r.top = e.top - t, r.y = a), f ? (r.left = e.left + d - g, r.right = window.innerWidth - e.right, r.x = o) : (r.left = e.left + d - m, r.right = window.innerWidth - e.right, r.x = s), r.top = Math.round(r.top), r.left = Math.round(r.left), r.right = Math.round(r.right), r
            },
            l = function getPosition(e, t, n) {
                var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (!e || !t)
                    return null;
                var c = e.getBoundingClientRect(),
                    l = {},
                    u = window.innerWidth - c.x,
                    d = function canFitTop() {
                        return c.top - (t.clientHeight + r) > 0
                    },
                    p = function canFitBottom() {
                        return c.bottom + t.clientHeight + r < window.innerHeight
                    },
                    b = function canFitLeft() {
                        return c.left - (t.clientWidth + r) > 0
                    },
                    m = function canFitRight() {
                        return c.right + t.clientWidth + r < window.innerWidth
                    };
                return n === a && d() || n === i && !p() ? (l.left = c.left - (t.clientWidth - c.width) / 2, l.rtlLeft = u - t.clientWidth / 2 - c.width / 2, l.top = c.top - t.clientHeight - r, l.placement = a) : n === i || n === a && !d() ? (l.left = c.left - (t.clientWidth - c.width) / 2, l.rtlLeft = u - t.clientWidth / 2 - c.width / 2, l.top = c.bottom + r, l.placement = i) : n === s && b() || n === o && !m() ? (l.left = c.left - t.clientWidth - r, l.rtlLeft = c.rtlLeft - t.clientWidth - r, l.top = c.top - (t.clientHeight - c.height) / 2, l.placement = s) : (n === o || n === s && !b()) && (l.left = c.right + r, l.rtlLeft = c.rtlLeft + r, l.top = c.top - (t.clientHeight - c.height) / 2, l.placement = o), {
                    left: Math.round(l.left),
                    placement: l.placement,
                    rtlLeft: Math.round(l.rtlLeft),
                    top: Math.round(l.top)
                }
            },
            u = function positionTooltip(e, t, n) {
                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (!e || !t)
                    return null;
                var o = l(e, t, n, a);
                return Object(r.a)() ? t.style.transform = "translate(-".concat(o.rtlLeft, "px, ").concat(o.top, "px)") : t.style.transform = "translate(".concat(o.left, "px, ").concat(o.top, "px)"), t.classList.add(o.placement), t
            },
            d = function removePositionStyle(e) {
                return e ? (e.style.transform = "translate(-100%, -100%)", e.classList.remove(s, o, i, a), e) : null
            }
    },
    48: function(e, t, n) {
        e.exports = n(20)(5)
    },
    5: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        }));
        var r = n(4),
            a = function generateRoute(e, t, n) {
                var a = e,
                    o = t;
                if (n) {
                    var i = document.querySelector("[data-url-locale]"),
                        s = i && i.getAttribute("data-url-locale"),
                        c = s && "en" !== s.split("_")[0] && s.split("_")[0];
                    c && o && (a = "i18n_".concat(a), o._locale = c)
                }
                return r.a.generate(a, o)
            }
    },
    50: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var r = function isRtl() {
            return "rtl" === document.querySelector("html").getAttribute("dir")
        }
    },
    51: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "c", (function() {
            return s
        })), n.d(t, "e", (function() {
            return c
        })), n.d(t, "d", (function() {
            return l
        })), n.d(t, "f", (function() {
            return u
        })), n.d(t, "g", (function() {
            return p
        })), n.d(t, "h", (function() {
            return showHideMore
        }));
        var r = n(6),
            a = n(88),
            o = function browserWidth() {
                return window.parent.innerWidth
            },
            i = function getClickedChild(e, t, n) {
                var r = n,
                    a = null;
                if (!e || !t || !n)
                    return a;
                for (; r && r !== e && !a;)
                    r.classList.contains(t) && (a = r), r = r.parentNode;
                return a
            },
            s = function getElement(e) {
                return document.querySelector(".".concat(e))
            },
            c = function getElements(e) {
                return document.getElementsByClassName(e)
            },
            l = function getElementContentDimensions(e) {
                var t = e.currentStyle || window.getComputedStyle(e),
                    n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
                    r = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                    a = parseFloat(t.marginBottom) + parseFloat(t.marginTop),
                    o = parseFloat(t.paddingBottom) + parseFloat(t.paddingTop),
                    i = parseFloat(t.borderLeftWidth) + parseFloat(t.borderRightWidth),
                    s = parseFloat(t.borderBottomWidth) + parseFloat(t.borderTopWidth);
                return {
                    height: e.offsetHeight + a - o + s,
                    width: e.offsetWidth + n - r + i
                }
            },
            u = function getScrollElement() {
                return window
            },
            d = function injectMounts(e, t) {
                t.forEach((function(t) {
                    var n = document.createElement("div");
                    n.id = t, e.appendChild(n)
                }))
            },
            p = function injectModalMounts(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object(a.a)();
                d(t, e)
            };
        function showHideMore(e, t, n, a) {
            var o = c(e);
            Array.from(o).forEach((function(e) {
                var o = e.getAttribute("data-key"),
                    i = document.querySelectorAll(".".concat(t, "[data-key=").concat(o, "]")),
                    s = e.querySelector(".".concat(n)),
                    c = e.querySelector(".".concat(a));
                s.innerHTML = r.h.showMore, e.addEventListener("click", (function() {
                    var e = s.innerHTML === r.h.showMore;
                    s.innerHTML = e ? r.h.showLess : r.h.showMore, c.classList.toggle("toggle-content-icon-up"), Array.from(i).forEach((function(e) {
                        e.style.display = "block" === e.style.display ? "none" : "block"
                    }))
                }))
            }))
        }
    },
    55: function(e, t, n) {
        "use strict";
        var r = n(1),
            a = n.n(r),
            o = n(26),
            i = n(103);
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                    a()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        o.default.mixin(i.a);
        var s = function instantiate(e) {
            return new o.default(_objectSpread({}, e, {
                el: e.el,
                render: function render(t) {
                    return t(e.component, {
                        props: e.propsData
                    })
                },
                store: e.store
            }))
        };
        t.a = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = {},
                n = function createInstance(n) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e[n] && Object.keys(e[n]).length ? (t[n] = t[n] || s(_objectSpread({}, e[n], {}, r)), t[n]) : null
                },
                r = function createInstances(e) {
                    e.forEach((function(e) {
                        return n(e)
                    }))
                };
            return {
                createInstance: n,
                createInstances: r,
                instances: t
            }
        }
    },
    59: function(e, t, n) {
        "use strict";
        var r = {
            "bundles/web/images/game-preview-loading.png": "bundles/web/images/game-preview-loading.8677fb94.png",
            "bundles/web/images/image-default.svg": "bundles/web/images/image-default.52fd5825.svg",
            "bundles/web/images/noavatar_l.gif": "bundles/web/images/noavatar_l.84a92436.gif",
            "bundles/web/images/user-image.svg": "bundles/web/images/user-image.007dad08.svg",
            "bundles/web/images/web/learn-to-play.png": "bundles/web/images/web/learn-to-play.51d38c0a.png",
            "bundles/web/images/web/tablet.jpg": "bundles/web/images/web/tablet.f8b6e8c5.jpg",
            "bundles/web/images/svg/tic.svg": "bundles/web/images/svg/tic.b039b4f5.svg",
            "bundles/web/images/svg/white-tic.svg": "bundles/web/images/svg/white-tic.18d3027b.svg",
            "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-black-glow.12c5cf39.png",
            "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.png": "bundles/web/images/webgl_data/2d/arcade/active-field-white-glow.7cb87681.png",
            "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.f0a77302.json",
            "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-black.5fbafd33.png",
            "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.3c3eb885.json",
            "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/capture-lightning-white.07c65378.png",
            "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.29ffee8a.json",
            "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning-small.4174885c.png",
            "bundles/web/images/webgl_data/2d/arcade/check-lightning.json": "bundles/web/images/webgl_data/2d/arcade/check-lightning.9818146c.json",
            "bundles/web/images/webgl_data/2d/arcade/check-lightning.png": "bundles/web/images/webgl_data/2d/arcade/check-lightning.13d87b75.png",
            "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.090095b9.json",
            "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-black.14a5e64e.png",
            "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.8e89a03e.json",
            "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/check-mate-lightning-white.d00459f4.png",
            "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-black.2943ecd4.png",
            "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.png": "bundles/web/images/webgl_data/2d/arcade/legal-move-arcade-white.6c485bae.png",
            "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.png": "bundles/web/images/webgl_data/2d/arcade/lightning-horizontal.c955fccb.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.d04ec1d5.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-black.f505cdbc.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.16dcf372.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-large-white.b8f9f703.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.2f52761e.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-black.e63372ad.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.e1f5d8cf.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-medium-white.fcbd9ed9.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.8d776f5a.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-black.3a45986a.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.e4b8d4a8.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-regular-white.a0fc79f2.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.46ff1e1e.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-black.c4332bdf.png",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.json": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.d2c18ae4.json",
            "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.png": "bundles/web/images/webgl_data/2d/arcade/move-lightning-small-white.ab25eede.png",
            "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.3407e009.json",
            "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-black.137b1116.png",
            "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.json": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.6c02602b.json",
            "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.png": "bundles/web/images/webgl_data/2d/arcade/select-lightning-white.2615abda.png",
            "bundles/web/images/webgl_data/2d/capture-dust.json": "bundles/web/images/webgl_data/2d/capture-dust.221e5b9d.json",
            "bundles/web/images/webgl_data/2d/capture-dust.png": "bundles/web/images/webgl_data/2d/capture-dust.eeec5f17.png",
            "bundles/web/images/webgl_data/2d/dust-big.json": "bundles/web/images/webgl_data/2d/dust-big.3978c9b2.json",
            "bundles/web/images/webgl_data/2d/dust-big.png": "bundles/web/images/webgl_data/2d/dust-big.df6ca2e5.png",
            "bundles/web/images/webgl_data/2d/dust-regular.json": "bundles/web/images/webgl_data/2d/dust-regular.c277df9e.json",
            "bundles/web/images/webgl_data/2d/dust-regular.png": "bundles/web/images/webgl_data/2d/dust-regular.f765f10c.png",
            "bundles/web/images/webgl_data/2d/dust-small.json": "bundles/web/images/webgl_data/2d/dust-small.e988c379.json",
            "bundles/web/images/webgl_data/2d/dust-small.png": "bundles/web/images/webgl_data/2d/dust-small.2fc95fc8.png",
            "bundles/web/images/webgl_data/2d/field-shadow.png": "bundles/web/images/webgl_data/2d/field-shadow.0819d939.png",
            "bundles/web/images/webgl_data/2d/hand.json": "bundles/web/images/webgl_data/2d/hand.a9ba7da1.json",
            "bundles/web/images/webgl_data/2d/hand.png": "bundles/web/images/webgl_data/2d/hand.70349a3a.png",
            "bundles/web/images/webgl_data/3d/board/board.json": "bundles/web/images/webgl_data/3d/board/board.f425db44.json",
            "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit_notation.a3bf6bb5.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_8_bit.c238987b.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bases_notation.4fa42cab.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_bases.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bases.5966f51d.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite_notation.9d31ef9e.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blackwhite.f6436596.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_blue_notation.a7ed2c2a.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_blue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_blue.7d30c9fc.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_brown_notation.66e656e5.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_brown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_brown.f8e9e53d.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum_notation.75637678.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_bubblegum.34d5bf78.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood_notation.f3f69a8a.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_burled_wood.4ba59d4b.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood_notation.6fe2bbf7.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dark_wood.ac2798f7.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_dash_notation.3913780e.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_dash.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_dash.fe973b28.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_glass_notation.bfcc418d.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_glass.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_glass.462df59a.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti_notation.ee28e65f.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_graffiti.ddc5ac93.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_green_notation.af017c39.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_green.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_green.944bda20.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_grey_notation.5f5188b1.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_grey.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_grey.26eeeb0d.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea_notation.8a2dbe83.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_icy_sea.7e97a7c5.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_light_notation.ed019a76.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_light.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_light.fe79815a.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_lolz_notation.a00264f3.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_lolz.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_lolz.cf1f0e6b.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marble_notation.85730a04.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_marble.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marble.fb694be3.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue_notation.733ec2a6.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marbleblue.c5708acd.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown_notation.b4deece6.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblebrown.106671ff.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen_notation.5b6fd2c5.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_marblegreen.a56f3a5d.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_metal_notation.2644fa29.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_metal.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_metal.9e8343ff.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_neon_notation.8aa5eb20.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_neon.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_neon.1c8ed3ca.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper_notation.0d446457.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_newspaper.940c4c9b.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_orange_notation.ac13f29e.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_orange.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_orange.df689dfe.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_overlay_notation.a6b83a1e.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_overlay.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_overlay.b76a5834.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_parchment_notation.af97cabb.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_parchment.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_parchment.dac73d51.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_pink_notation.811ee777.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_pink.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_pink.e3b56463.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_purple_notation.f9f8349a.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_purple.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_purple.429e87cc.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_red_notation.51389339.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_red.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_red.4824adf7.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sand_notation.3712caa6.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_sand.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sand.5eb8d889.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_shadow.png": "bundles/web/images/webgl_data/3d/board/textures/board_shadow.d490d6b4.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_sky_notation.dfa5e504.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_sky.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_sky.f9014b7c.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_stone_notation.81db0ebf.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_stone.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_stone.75e0be38.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tan_notation.606335e2.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_tan.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tan.de0583bf.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_tournament_notation.243f8730.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_tournament.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_tournament.ca792689.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_translucent_notation.8def817e.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_translucent.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_translucent.05d18c94.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_walnut_notation.cfb242b2.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_walnut.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_walnut.ef9a07ec.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_winboard_notation.be4c9f8c.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_winboard.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_winboard.087df05e.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wood_notation.b13541a6.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_wood.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wood.a1c1365b.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark_notation.6fe2bbf7.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_wooddark.ac2798f7.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight_notation.39bc254f.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodlight.cbd0cac3.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid_notation.15e78f80.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodmid.d30783ac.jpg",
            "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.png": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive_notation.d62e0a2a.png",
            "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.jpg": "bundles/web/images/webgl_data/3d/board/textures/board_woodolive.33fafd16.jpg",
            "bundles/web/images/webgl_data/3d/marking_arrow_L.json": "bundles/web/images/webgl_data/3d/marking_arrow_L.be09e498.json",
            "bundles/web/images/webgl_data/3d/marking_arrow_straight.json": "bundles/web/images/webgl_data/3d/marking_arrow_straight.a6b956b9.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_black.64337a24.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop_promotion_white.ec7eb316.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/bishop.7395ab28.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/king.fc9672f5.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_black.cf1d93aa.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight_promotion_white.0f8d79ee.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/knight.b9912c7a.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/pawn.32238b68.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_black.9b4d155e.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen_promotion_white.7329522b.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/queen.8793f6ab.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_black.d0fd00a8.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook_promotion_white.1bc4a10e.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.json": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/rook.76894e32.json",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/bishop_shadow.0b5ee42e.png",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negx.33eada3e.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negy.9b25971e.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/negz.a12ca378.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posx.b40ae1ef.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posy.e2b2685d.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/envmap/posz.e8613ffe.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/king_shadow.d6ee554e.png",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/knight_shadow.ea452b95.png",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/pawn_shadow.fc807ae3.png",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_black.f1a263b7.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_black.cfb7a7d9.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_marble_white.c0d26492.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_black.fc320163.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_metal_white.26bd2db6.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_black.5b2b7dca.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_plastic_white.add6f6cb.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_white.02639edc.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_black.15255deb.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.jpg": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/piece_wood_white.40e5ede4.jpg",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/queen_shadow.2381b0ed.png",
            "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.png": "bundles/web/images/webgl_data/3d/pieces/staunton_executive/textures/rook_shadow.a85529f8.png"
        };
        n.d(t, "a", (function() {
            return i
        }));
        var a,
            o = window.Config ? window.Config["domain.static"] : "localhost:8081";
        a = window.Config && window.Config["domain.static"] ? "https" : "http";
        var i = function generateUrl(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a,
                i = t ? "".concat(n, "://").concat(o) : "",
                s = null != r[e] ? r[e] : e;
            return "".concat(i, "/").concat(s)
        }
    },
    6: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        })), n.d(t, "b", (function() {
            return i
        })), n.d(t, "c", (function() {
            return s
        })), n.d(t, "e", (function() {
            return c
        })), n.d(t, "h", (function() {
            return l
        })), n.d(t, "f", (function() {
            return u
        })), n.d(t, "d", (function() {
            return d
        })), n.d(t, "g", (function() {
            return p
        }));
        var r = n(4),
            a = n(0),
            o = {
                ARIA_CONTROLS: "aria-controls",
                AVATAR: "data-avatar",
                CUSTOM_BTN_CLASS: "data-custom-btn-class",
                CUSTOM_COLLAPSE_CLASS: "data-custom-collapse-class",
                DARK_MODE: "data-dark-mode",
                ICON_BUTTON: "data-icon-button",
                SLOTS: "data-stats-slots",
                STATS: "data-stats",
                SURVEY_DATA: "data-survey",
                SURVEY_VOTED: "data-voted-survey",
                USERNAME: "data-username",
                VS_STATS: "data-vs-stats"
            },
            i = {
                getArticleAuthors: "web_article_callback_list_authors",
                getBlogAuthors: "web_blog_callback_authors",
                getContent: "web_content_callback_load_more",
                getNewsAuthors: "web_news_callback_list_authors"
            },
            s = {
                GRID_VIEW: "grid",
                LIST_VIEW: "list",
                LOCALE: window.context && window.context.locale || "en_US",
                LOGGED_IN: window.context && window.context.user,
                USERNAME: window.context && window.context.user ? window.context.user.username : null
            },
            c = {
                CHESS_960: "chess960"
            },
            l = {
                category: function category(e) {
                    return a.a.trans(e, {}, "dynamic")
                },
                loading: a.a.trans("Loading..."),
                showMore: a.a.trans("More"),
                showLess: a.a.trans("Less")
            },
            u = {
                AMPLITUDE_LOGGER: "amplitude-logger",
                BOARD_POPOVER: "v-board-popover",
                CAPTCHA: "captcha",
                COLLAPSE: "v-toggle-collapse",
                COLLAPSED: "toggle-collapsed",
                CONTENT_AD: "content-ad",
                CONTENT_CATEGORY_SELECT: "content-category-select",
                CONTENT_LANGUAGE_SELECT: "content-language-select",
                CONFIRM_OPEN: "confirm-open",
                CONFIRM_POPOVER: "v-confirm-popover",
                CONFIRM_POPOVER_INLINE: "confirm-popover-inline",
                DONATE_MODAL: "donate-modal",
                FEATURE_SIDEBAR_LINK: "post-category-link-feature",
                FILTERS: "page-filters",
                FOLLOW_UNFOLLOW_AUTHOR: "follow-unfollow-author",
                FORM_DATEPICKER: "v-datepicker",
                FORM_DROPDOWN: "form-dropdown",
                GAME_PREVIEW: "game-preview",
                GIFT_MEMBERSHIP_MODAL: "gift-membership-modal",
                HEADLINE_SIDEBAR_LINK: "post-category-link-headline",
                HIDDEN: "toggle-hidden",
                LANGUAGE_DROPDOWN: "post-view-languages",
                MESSAGE_PARENT: "vue-message",
                NAVIGATION_FOOTER: "navigation-footer",
                NEW_GAME: "new-game",
                NEW_GAME_BUTTON: "new-game-button",
                PAGINATION_BOTTOM: "pagination-bottom",
                PAGINATION_TOP: "pagination-top",
                PAGINATION_SCROLL_TOP: ".pagination-top",
                POST_AUTHOR_FOLLOW: "post-author-follow",
                POST_CAN_EDIT_URL: "post-can-edit-url",
                POST_EDIT_URL: "post-edit-url",
                POST_EDIT_URL_FIELD: "post-edit-url-field",
                POST_IMAGE_BUTTON: "image-upload-button",
                POST_IMAGE_THUMBNAIL: "image-upload-thumbnail",
                SCROLL_TOP_ANCHOR: "scroll-top-anchor",
                SHORT_SIDEBAR_AD_BOTTOM: "short-sidebar-ad-bottom",
                SHORT_SIDEBAR_AD_TOP: "short-sidebar-ad-top",
                SIDEBAR_STATS: "sidebar-stats",
                SIDEBAR_SURVEY: "sidebar-survey",
                SIDEBAR_TOGGLE_BUTTON_TEXT: "toggle-content-button-text",
                SIDEBAR_TOGGLE_ICON: "toggle-content-icon",
                SIDEBAR_USER_ITEMS: "sidebar-users-grid-toggle-item",
                SIDEBAR_USERS_TOGGLE_BUTTON: "toggle-content-button",
                STAT_CHART: "stat-chart",
                TOOLTIP: "v-tooltip",
                TOOLTIP_CLASS: "tooltip",
                TOOLTIP_TOP: "top",
                USER_POPOVER: "v-user-popover",
                USER_TAGLINE: "post-view-meta-user",
                VERSION_DROPDOWN: "version-dropdown"
            },
            d = {
                CONFIRM_POPOVER_YES: "confirm-popover-yes",
                SHOW_MODAL: "show-confirm-popover",
                VOTE_COUNTED: "vote-counted",
                VIEW_CHANGE: "view-change",
                VIEW_GRID: "view-grid",
                VIEW_LIST: "view-list"
            },
            p = {
                changeContentLanguage: function changeContentLanguage() {
                    return r.a.generate("web_user_callback_set_content_language")
                },
                enPassant: function enPassant() {
                    return r.a.generate("web_article_view", {
                        url: "how-to-capture-en-passant"
                    })
                },
                surveyVote: function surveyVote(e, t) {
                    return r.a.generate("web_survey_callback_vote", {
                        id: e,
                        optionId: t
                    })
                },
                redirectToLoginPage: function redirectToLoginPage(e) {
                    return r.a.generate("web_security_login_and_go", {
                        redirectUrl: e
                    })
                },
                teamMatch: function teamMatch(e) {
                    return r.a.generate("web_team_match_view", {
                        match: e
                    })
                },
                tournament: function tournament(e) {
                    return r.a.generate("web_tournament_view", {
                        url: e
                    })
                },
                userProfile: function userProfile(e) {
                    return r.a.generate("web_member_view", {
                        username: e
                    })
                }
            }
    },
    60: function(e, t, n) {
        e.exports = n(20)(20)
    },
    65: function(e, t, n) {
        e.exports = {
            component: "icon-font-component",
            primary: "icon-font-primary",
            darkMode: "icon-font-darkMode",
            secondary: "icon-font-secondary",
            tertiary: "icon-font-tertiary",
            chess: "icon-font-chess",
            captured: "icon-font-captured"
        }
    },
    68: function(e, t, n) {
        "use strict";
        n.d(t, "e", (function() {
            return o
        })), n.d(t, "c", (function() {
            return i
        })), n.d(t, "d", (function() {
            return s
        })), n.d(t, "f", (function() {
            return c
        })), n.d(t, "b", (function() {
            return l
        })), n.d(t, "a", (function() {
            return u
        })), n.d(t, "g", (function() {
            return d
        }));
        var r = n(1),
            a = n.n(r);
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        function _objectSpread(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                    a()(e, t, n[t])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }))
            }
            return e
        }
        var o = function objectIsEmpty(e) {
            return e && !Object.keys(e).length
        };
        var i = function objectHasData() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return e && Object.keys(e).length > 0
        };
        var s = function objectHasProp() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            c = function objectWithExcludedProps(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return Object.keys(e).filter((function(e) {
                    return !t.includes(e)
                })).reduce((function(t, n) {
                    return _objectSpread({}, t, a()({}, n, e[n]))
                }), {})
            },
            l = function invertObject(e) {
                return Object.keys(e).reduce((function(t, n) {
                    return _objectSpread({}, t, a()({}, e[n], n))
                }), {})
            },
            u = function hasProperty(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            d = function transformObjectBooleansToBinaryString(e) {
                return Object.keys(e).reduce((function(t, n) {
                    var r = e[n];
                    return "boolean" == typeof r && (r = r ? "1" : "0"), t[n] = r, t
                }), {})
            }
    },
    705: function(e, t, n) {
        e.exports = {
            component: "alert-banner-component",
            showAlert: "alert-banner-showAlert",
            message: "alert-banner-message",
            error: "alert-banner-error",
            info: "alert-banner-info",
            topical: "alert-banner-topical",
            success: "alert-banner-success",
            close: "alert-banner-close",
            dismissing: "alert-banner-dismissing",
            hideAlert: "alert-banner-hideAlert",
            "log-image": "alert-banner-log-image"
        }
    },
    706: function(e, t, n) {
        e.exports = {
            component: "alert-flash-component",
            alert: "alert-flash-alert"
        }
    },
    71: function(e, t, n) {
        e.exports = {
            component: "form-button-component",
            dark: "form-button-dark",
            "x-small": "form-button-x-small",
            small: "form-button-small",
            large: "form-button-large",
            "x-large": "form-button-x-large",
            "full-width": "form-button-full-width",
            basic: "form-button-basic",
            darkMode: "form-button-darkMode",
            "basic-with-dark-mode": "form-button-basic-with-dark-mode",
            primary: "form-button-primary",
            info: "form-button-info",
            danger: "form-button-danger"
        }
    },
    74: function(e, t, n) {
        "use strict";
        var r = n(4);
        t.a = function() {
            return -1 !== window.location.href.indexOf(r.a.generate("web_2fa_login"))
        }
    },
    745: function(e, t, n) {
        e.exports = {
            component: "form-select-component",
            wrapper: "form-select-wrapper",
            "with-help-wrapper": "form-select-with-help-wrapper",
            select: "form-select-select",
            icon: "form-select-icon",
            multiple: "form-select-multiple"
        }
    },
    746: function(e, t, n) {
        e.exports = {
            component: "post-author-component",
            avatar: "post-author-avatar",
            thumbnail: "post-author-thumbnail",
            right: "post-author-right",
            author: "post-author-author",
            title: "post-author-title",
            name: "post-author-name",
            rating: "post-author-rating",
            meta: "post-author-meta",
            separator: "post-author-separator",
            link: "post-author-link",
            about: "post-author-about"
        }
    },
    747: function(e, t, n) {
        e.exports = {
            "content-ad": "authors-content-ad",
            "content-ad-wrapper": "authors-content-ad-wrapper",
            header: "authors-header",
            pagination: "authors-pagination",
            bottom: "authors-bottom",
            top: "authors-top",
            post: "authors-post",
            list: "authors-list"
        }
    },
    748: function(e, t, n) {
        e.exports = {
            "content-ad": "category-content-ad",
            "content-ad-wrapper": "category-content-ad-wrapper",
            header: "category-header",
            pagination: "category-pagination",
            post: "category-post",
            component: "category-component",
            filters: "category-filters",
            dropdown: "category-dropdown"
        }
    },
    749: function(e, t, n) {},
    75: function(e, t, n) {
        "use strict";
        t.a = {
            props: {
                darkMode: {
                    type: Boolean,
                    default: !1
                },
                lightMode: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                themeClasses: function themeClasses() {
                    return {
                        "light-mode": this.lightMode,
                        "dark-mode": this.darkMode
                    }
                }
            }
        }
    },
    750: function(e, t, n) {
        e.exports = {
            "content-ad": "index-content-ad",
            "content-ad-wrapper": "index-content-ad-wrapper",
            "content-ad-wrapper-top": "index-content-ad-wrapper-top",
            pagination: "index-pagination",
            "top-pagination": "index-top-pagination"
        }
    },
    751: function(e, t, n) {
        e.exports = {
            "button-group": "single-button-group",
            icon: "single-icon",
            "content-ad": "single-content-ad",
            comments: "single-comments",
            more: "single-more",
            space: "single-space",
            share: "single-share"
        }
    },
    8: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return l
        })), n.d(t, "e", (function() {
            return u
        })), n.d(t, "g", (function() {
            return d
        })), n.d(t, "c", (function() {
            return p
        })), n.d(t, "b", (function() {
            return b
        })), n.d(t, "a", (function() {
            return m
        })), n.d(t, "n", (function() {
            return g
        })), n.d(t, "p", (function() {
            return f
        })), n.d(t, "q", (function() {
            return h
        })), n.d(t, "k", (function() {
            return _
        })), n.d(t, "l", (function() {
            return v
        })), n.d(t, "m", (function() {
            return w
        })), n.d(t, "h", (function() {
            return y
        })), n.d(t, "j", (function() {
            return k
        })), n.d(t, "i", (function() {
            return O
        })), n.d(t, "f", (function() {
            return E
        })), n.d(t, "o", (function() {
            return S
        }));
        var r,
            a,
            o = n(1),
            i = n.n(o),
            s = n(4),
            c = n(0);
        function ownKeys(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), n.push.apply(n, r)
            }
            return n
        }
        var l = {
                CAN_EDIT_FLAIR: "data-can-edit-flair",
                IS_ENABLED: "data-is-enabled",
                MEMBERSHIP_LEVEL: "data-membership-level",
                USERNAME: "data-username",
                USER_ID: "data-user-id"
            },
            u = {
                REPORT_USER: "web_user_callback_report_user",
                USER_POPUP: "web_user_callback_popup"
            },
            d = [{
                key: "membership_icons",
                title: c.a.trans("Membership Icons")
            }, {
                key: "emoji",
                title: c.a.trans("Emoji")
            }, {
                key: "chess",
                title: c.a.trans("Chess")
            }, {
                key: "holiday",
                title: c.a.trans("Holiday")
            }, {
                key: "hosts",
                title: c.a.trans("Hosts")
            }, {
                key: "computer_chess",
                title: c.a.trans("Computer Chess")
            }, {
                key: "pro_chess_league",
                title: c.a.trans("PRO Chess League")
            }],
            p = {
                category: "membership_icons",
                code: "nothing",
                description: c.a.trans("Nothing"),
                id: 206,
                imageCode: "nothing",
                membershipLevelCode: "staff",
                name: c.a.trans("Nothing"),
                status: ""
            },
            b = "diamond_traditional",
            m = ["blocked", "clear", "clear_light"],
            g = {
                USER_POPOVER_CONTAINER: "user-popover",
                USER_FLAIR: "user-flair"
            },
            f = {
                about: function about() {
                    return s.a.generate("web_about")
                },
                membership: function membership() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "icon";
                    return s.a.generate("web_membership", {
                        c: e
                    })
                },
                usernameSearch: function usernameSearch(e) {
                    return s.a.generate("web_user_callback_username_search", function _objectSpread(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                                i()(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({
                        activeDays: 4e3
                    }, e))
                }
            },
            h = {
                acceptFriendRequest: c.a.trans("Accept Friend Request"),
                addFriend: c.a.trans("Add Friend"),
                block: c.a.trans("Block"),
                blockConfirm: c.a.trans("Are you sure you want to block this user?"),
                cancel: c.a.trans("Cancel"),
                cancelFriendRequest: c.a.trans("Cancel Friend Request"),
                challenge: c.a.trans("Challenge"),
                follow: c.a.trans("Follow"),
                gameArchive: c.a.trans("Game Archive"),
                giftMembership: c.a.trans("Gift Membership"),
                giveTrophy: c.a.trans("Give Award"),
                joinedDate: function joinedDate(e) {
                    return c.a.trans("Joined %1$s%", {
                        "%1$s%": e
                    })
                },
                lastOnline: function lastOnline(e) {
                    return c.a.trans("Online %1$s%", {
                        "%1$s%": e
                    })
                },
                moderator: c.a.trans("Moderator"),
                onlineNow: c.a.trans("Online Now"),
                inLiveNow: c.a.trans("In Live"),
                removeFriend: c.a.trans("Remove Friend"),
                removeFriendConfirm: c.a.trans("Are you sure you want to remove this friend from your list?"),
                report: c.a.trans("Report"),
                reportUser: function reportUser(e) {
                    return c.a.trans("Report %username%", {
                        "%username%": e
                    })
                },
                sendMessage: c.a.trans("Send Message"),
                showYourFlair: c.a.trans("Show your flair!"),
                staff: c.a.trans("Staff"),
                unblock: c.a.trans("Unblock"),
                unfollow: c.a.trans("Unfollow"),
                userReportError: c.a.trans("Tell us more...")
            },
            _ = {
                cheater: 5,
                abuser: 6,
                voluntarilyClosed: 7,
                unspecifiedClosed: 8,
                basic: 10,
                silver: 20,
                gold: 30,
                platinum: 40,
                diamond: 50,
                moderator: 80,
                staff: 90
            },
            v = (r = {}, i()(r, _.diamond, "diamond"), i()(r, _.abuser, "abuser"), i()(r, _.cheater, "cheater"), i()(r, _.voluntarilyClosed, "inactive"), i()(r, _.unspecifiedClosed, "cheater"), i()(r, _.gold, "gold"), i()(r, _.moderator, "pawn-blue"), i()(r, _.platinum, "platinum"), i()(r, _.staff, "pawn-green"), r),
            w = (a = {}, i()(a, _.basic, c.a.trans("Basic Membership")), i()(a, _.diamond, c.a.trans("Diamond Membership")), i()(a, _.cheater, c.a.trans("Closed: Fair Play")), i()(a, _.abuser, c.a.trans("Closed: Abuse")), i()(a, _.voluntarilyClosed, c.a.trans("Closed: Inactive")), i()(a, _.unspecifiedClosed, c.a.trans("Account Closed")), i()(a, _.gold, c.a.trans("Gold Membership")), i()(a, _.moderator, c.a.trans("Moderator Account")), i()(a, _.platinum, c.a.trans("Platinum Membership")), i()(a, _.silver, c.a.trans("Silver Membership")), i()(a, _.staff, c.a.trans("Staff Account")), a),
            y = {
                GM: c.a.trans("Grandmaster"),
                WGM: c.a.trans("Woman Grandmaster"),
                IM: c.a.trans("International Master"),
                WIM: c.a.trans("Woman International Master"),
                FM: c.a.trans("FIDE Master"),
                WFM: c.a.trans("Woman FIDE Master"),
                NM: c.a.trans("National Master"),
                CM: c.a.trans("FIDE Candidate Master"),
                WCM: c.a.trans("FIDE Woman Candidate Master"),
                WNM: c.a.trans("Woman National Master")
            },
            k = function isOnline(e) {
                return !0 === e || "online" === e
            },
            O = function isLive(e) {
                return "onlive" === e
            },
            E = {
                AUTOCOMPLETE_CLEAR_SELECTED: "form-autocomplete-clear-selected"
            },
            S = {
                FETCH_ROLES: "fetchRoles"
            }
    },
    80: function(e, t, n) {
        "use strict";
        var r = n(121),
            a = {};
        ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach((function(e) {
            a[e] = r.a[e].bind(r.a)
        })), t.a = a
    },
    83: function(e, t, n) {
        "use strict";
        var r = n(65),
            a = n.n(r);
        t.default = a.a
    },
    84: function(e, t, n) {
        "use strict";
        var r = n(26);
        t.a = function(e, t, n, a, o) {
            var i = Array.from(document.querySelectorAll(e)),
                s = [],
                c = {};
            if (0 === i.length)
                return s;
            for (var l = 0, u = i; l < u.length; l++) {
                var d = u[l],
                    p = !0;
                "function" == typeof n && (c = n(d)), a && (d.dataset[a] ? p = !1 : d.dataset[a] = !0);
                var b = {
                    el: d
                };
                if (o && (b.store = o), p) {
                    var m = Object.assign(b, t, {
                        propsData: c
                    });
                    s.push(new r.default(m))
                }
            }
            return s
        }
    },
    86: function(e, t, n) {
        "use strict";
        var r = n(71),
            a = n.n(r);
        t.default = a.a
    },
    87: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        })), n.d(t, "b", (function() {
            return a
        })), n.d(t, "c", (function() {
            return o
        })), n.d(t, "d", (function() {
            return i
        })), n.d(t, "e", (function() {
            return s
        })), n.d(t, "f", (function() {
            return c
        }));
        n(4);
        var r = {
                amplitudeProps: "data-amplitude-props",
                speedChessChampionshipUrl: "data-speed-chess-championship-url",
                challengeUser: "data-challenge-user",
                loginAndGoRoute: "data-route-login-and-go",
                registerRoute: "data-route-register",
                routes: "data-routes",
                showChallengeUser: "data-show-challenge-user"
            },
            a = {
                CLOSE: "close",
                COLLAPSED: "collapsed",
                HOVER: "hover",
                NO_REDIRECT: "noredirect",
                OPEN: "open",
                WIDE: "wide"
            },
            o = {
                CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
                CLOSE_SHAREABLE_URL_MODAL: "CLOSE_SHAREABLE_URL_MODAL",
                OPEN_SHAREABLE_URL_MODAL: "OPEN_SHAREABLE_URL_MODAL",
                SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
                SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
                SHOW_NEW_GAME_MODAL: "SHOW_NEW_GAME_MODAL",
                START_DIRECT_CHAT: "START_DIRECT_CHAT"
            },
            i = {
                MOBILE_WIDTH: 960,
                TOOLTIP_OFFSET: 8
            },
            s = {
                COLLAPSED: 50,
                DEFAULT: 145,
                MOBILE: 0,
                WIDE: 180
            },
            c = {
                FRIEND_RESULTS: ".svelte-friend-result",
                LESSONS_CONTAINER: ".lessons-container",
                LOGOUT_FORM: ".form.logout",
                LOGOUT_TRIGGER: "#sb .logout",
                MAIN_NAV: "#sb",
                MAIN_NAV_CONNECT_LINK: "#sb .link.connect",
                MAIN_NAV_HOME_LINK: "#sb .link.home",
                MAIN_NAV_LINKS: "#sb .menu > .link",
                MAIN_NAV_LOGIN_LINK: "#sb .login",
                MAIN_NAV_PLAY_LINK: "#sb .link.play",
                MAIN_NAV_REGISTER_LINK: ".signup.register",
                MAIN_TOP_NAV: "#sb .menu.top",
                MAIN_TOP_NAV_LINKS: "#sb .menu.top > .link",
                SEARCH_INPUT: 'input[name="q"]',
                SIGN_UP: ".signup",
                TOOLTIP: ".svelte-tooltip",
                TOOLTIP_TRIGGER: "[data-tooltip-content]"
            }
    },
    88: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return a
        })), n.d(t, "b", (function() {
            return o
        }));
        var r = n(27),
            a = function getBoardContainerElement() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = r.i.board.substr(1),
                    n = document.getElementsByClassName(t)[e];
                return n || null
            },
            o = function getBoardElement() {
                var e = a();
                if (!e)
                    return null;
                var t = e.childNodes;
                return Array.from(t).find((function(e) {
                    return 1 === e.nodeType
                }))
            }
    },
    89: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }));
        var r = {
            CHESS_TODAY: "data-feature-chess-today",
            DISABLED_OLD_LESSONS: "data-disabled-old-lessons",
            DE_NEW_CHESSBOARD: "data-diagram-editor-new-chessboard-migration",
            FIREBASE_SUPPORT: "data-firebase-support",
            IS_LIVE: "data-is-live",
            LEAGUES: "data-feature-leagues",
            LIBRARY: "data-feature-library",
            MULTI_PGN_VIEWER: "data-feature-multi-pgn-viewer",
            NAVIGATION_USER_CONNECTION: "data-feature-navigation-user-connection",
            NEW_NOTIFICATIONS: "data-feature-new-notifications",
            OLD_BOARD_SOUND_DELAY: "data-feature-old-board-sound-delay",
            SAVED_ANALYSIS_LISTING: "data-feature-saved-analysis-listing",
            UPGRADE_MODALS_REDESIGN: "data-feature-upgrade-modals-redesign",
            ITERABLE_TRACK_WITHOUT_EMAIL: "data-feature-iterable-track-without-email",
            V5_PROFILE: "data-feature-v5-profile",
            V5_PUZZLES: "data-feature-v5-puzzles"
        }
    },
    90: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        var r = n(147),
            a = {},
            o = document.getElementById(r.targets.NAV_ROOT),
            i = function hasFeatureAccess(e, t) {
                var n = t || o;
                return a[e] || (a[e] = Boolean(n && n.getAttribute(e))), a[e]
            }
    },
    95: function(e, t, n) {
        "use strict";
        var r = n(1),
            a = n.n(r),
            o = n(43),
            i = n(75),
            s = n(16),
            c = n(24),
            l = {
                name: "form-input",
                components: {
                    IconFont: s.a
                },
                directives: {
                    tooltip: c.a
                },
                mixins: [o.a, i.a],
                props: {
                    ariaLabel: String,
                    autocomplete: String,
                    autofocus: Boolean,
                    disabled: {
                        type: Boolean,
                        default: !1,
                        required: !1
                    },
                    iconLeft: {
                        type: String,
                        required: !1
                    },
                    iconLeftTooltip: {
                        type: String,
                        default: ""
                    },
                    iconRight: {
                        type: String,
                        required: !1
                    },
                    iconRightTooltip: {
                        type: String,
                        default: ""
                    },
                    id: String,
                    maxlength: Number,
                    name: String,
                    placeholder: {
                        type: String,
                        required: !1
                    },
                    size: {
                        type: String,
                        required: !1
                    },
                    type: {
                        type: String,
                        default: "text"
                    },
                    value: {
                        type: [String, Number],
                        required: !1
                    }
                },
                computed: {
                    inputClasses: function inputClasses() {
                        var e,
                            t = this.$style,
                            n = this.iconLeft,
                            r = this.iconRight,
                            o = this.lightMode,
                            i = this.size;
                        return [t.input, t[i], (e = {}, a()(e, t.left, n), a()(e, t.right, r), a()(e, "light-mode", o), e)]
                    }
                },
                methods: {
                    blurEvent: function blurEvent(e) {
                        this.$emit("blur", e)
                    },
                    focusEvent: function focusEvent(e) {
                        this.$emit("focus", e)
                    },
                    keyupEvent: function keyupEvent(e) {
                        this.$emit("keyup", e)
                    },
                    onIconClick: function onIconClick(e) {
                        this.$emit("icon-click-".concat(e))
                    },
                    updateValue: function updateValue(e) {
                        this.$emit("input", e)
                    }
                }
            },
            u = n(140),
            d = n(3);
        var p = Object(d.a)(l, (function() {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n("div", {
                class: [e.componentClasses(), e.themeClasses]
            }, [e.iconLeft ? n("icon-font", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.iconLeftTooltip,
                    expression: "iconLeftTooltip"
                }],
                class: [e.$style.icon, e.$style.left],
                attrs: {
                    "is-dark-mode": e.isDarkMode,
                    name: e.iconLeft,
                    theme: "primary"
                },
                on: {
                    click: function(t) {
                        return e.onIconClick("left")
                    }
                }
            }) : e._e(), e._v(" "), n("input", {
                class: e.inputClasses,
                attrs: {
                    "aria-label": e.ariaLabel,
                    autocomplete: e.autocomplete,
                    autofocus: e.autofocus,
                    id: e.id,
                    maxlength: e.maxlength,
                    name: e.name,
                    placeholder: e.placeholder,
                    readonly: e.disabled,
                    type: e.type
                },
                domProps: {
                    value: e.value
                },
                on: {
                    blur: function(t) {
                        return e.blurEvent(t)
                    },
                    focus: function(t) {
                        return e.focusEvent(t)
                    },
                    input: function(t) {
                        return e.updateValue(t.target.value)
                    },
                    keyup: function(t) {
                        return e.keyupEvent(t)
                    }
                }
            }), e._v(" "), e.iconRight ? n("icon-font", {
                directives: [{
                    name: "tooltip",
                    rawName: "v-tooltip",
                    value: e.iconRightTooltip,
                    expression: "iconRightTooltip"
                }],
                class: [e.$style.icon, e.$style.right],
                attrs: {
                    "is-dark-mode": e.isDarkMode,
                    name: e.iconRight
                },
                on: {
                    click: function(t) {
                        return e.onIconClick("right")
                    }
                }
            }) : e._e()], 1)
        }), [], !1, (function injectStyles(e) {
            this.$style = u.default.locals || u.default
        }), null, null);
        t.a = p.exports
    }
});

