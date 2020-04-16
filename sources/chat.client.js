!function(e) {
    var t = {};
    function __webpack_require__(n) {
        if (t[n])
            return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, __webpack_require__), a.l = !0, a.exports
    }
    __webpack_require__.m = e, __webpack_require__.c = t, __webpack_require__.d = function(e, t, n) {
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
            for (var a in e)
                __webpack_require__.d(n, a, function(t) {
                    return e[t]
                }.bind(null, a));
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
    }, __webpack_require__.p = "/bundles/app/js/", __webpack_require__(__webpack_require__.s = 74)
}([function(e, t, n) {
    "use strict";
    n.d(t, "g", (function() {
        return blankObject
    })), n.d(t, "a", (function() {
        return _differs
    })), n.d(t, "b", (function() {
        return _differsImmutable
    })), n.d(t, "q", (function() {
        return fire
    })), n.d(t, "r", (function() {
        return flush
    })), n.d(t, "s", (function() {
        return get
    })), n.d(t, "t", (function() {
        return init
    })), n.d(t, "w", (function() {
        return on
    })), n.d(t, "z", (function() {
        return removeFromStore
    })), n.d(t, "x", (function() {
        return l
    })), n.d(t, "d", (function() {
        return append
    })), n.d(t, "u", (function() {
        return insert
    })), n.d(t, "p", (function() {
        return detachNode
    })), n.d(t, "o", (function() {
        return detachBetween
    })), n.d(t, "n", (function() {
        return detachBefore
    })), n.d(t, "y", (function() {
        return reinsertBefore
    })), n.d(t, "m", (function() {
        return destroyEach
    })), n.d(t, "j", (function() {
        return createFragment
    })), n.d(t, "i", (function() {
        return createElement
    })), n.d(t, "k", (function() {
        return createText
    })), n.d(t, "h", (function() {
        return createComment
    })), n.d(t, "c", (function() {
        return addListener
    })), n.d(t, "A", (function() {
        return removeListener
    })), n.d(t, "D", (function() {
        return setAttribute
    })), n.d(t, "E", (function() {
        return setData
    })), n.d(t, "F", (function() {
        return setStyle
    })), n.d(t, "B", (function() {
        return selectOption
    })), n.d(t, "C", (function() {
        return selectValue
    })), n.d(t, "l", (function() {
        return destroyBlock
    })), n.d(t, "G", (function() {
        return updateKeyedEach
    })), n.d(t, "H", (function() {
        return wrapTransition
    })), n.d(t, "v", (function() {
        return noop
    })), n.d(t, "e", (function() {
        return assign
    })), n.d(t, "f", (function() {
        return assignTrue
    }));
    var a = n(37),
        s = n.n(a);
    n(12), n(6);
    function noop() {}
    function assign(e, t) {
        for (var n in t)
            e[n] = t[n];
        return e
    }
    function assignTrue(e, t) {
        for (var n in t)
            e[n] = 1;
        return e
    }
    function run(e) {
        e()
    }
    function append(e, t) {
        e.appendChild(t)
    }
    function insert(e, t, n) {
        e.insertBefore(t, n)
    }
    function detachNode(e) {
        e.parentNode.removeChild(e)
    }
    function detachBetween(e, t) {
        for (; e.nextSibling && e.nextSibling !== t;)
            e.parentNode.removeChild(e.nextSibling)
    }
    function detachBefore(e) {
        for (; e.previousSibling;)
            e.parentNode.removeChild(e.previousSibling)
    }
    function reinsertBefore(e, t) {
        for (var n = e.parentNode; n.firstChild !== e;)
            t.appendChild(n.firstChild)
    }
    function destroyEach(e, t) {
        for (var n = 0; n < e.length; n += 1)
            e[n] && e[n].d(t)
    }
    function createFragment() {
        return document.createDocumentFragment()
    }
    function createElement(e) {
        return document.createElement(e)
    }
    function createText(e) {
        return document.createTextNode(e)
    }
    function createComment() {
        return document.createComment("")
    }
    function addListener(e, t, n, a) {
        e.addEventListener(t, n, a)
    }
    function removeListener(e, t, n, a) {
        e.removeEventListener(t, n, a)
    }
    function setAttribute(e, t, n) {
        null == n ? e.removeAttribute(t) : e.setAttribute(t, n)
    }
    function setData(e, t) {
        e.data = "" + t
    }
    function setStyle(e, t, n) {
        e.style.setProperty(t, n)
    }
    function selectOption(e, t) {
        for (var n = 0; n < e.options.length; n += 1) {
            var a = e.options[n];
            if (a.__value === t)
                return void (a.selected = !0)
        }
    }
    function selectValue(e) {
        var t = e.querySelector(":checked") || e.options[0];
        return t && t.__value
    }
    function linear(e) {
        return e
    }
    function generateRule(e, t, n) {
        for (var a = e.a, s = e.b, r = e.delta, u = 16.666 / e.duration, l = "{\n", h = 0; h <= 1; h += u) {
            var _ = a + r * t(h);
            l += 100 * h + "%{".concat(n(_, 1 - _), "}\n")
        }
        return l + "100% {".concat(n(s, 1 - s), "}\n}")
    }
    function hash(e) {
        for (var t = 5381, n = e.length; n--;)
            t = (t << 5) - t ^ e.charCodeAt(n);
        return t >>> 0
    }
    function wrapTransition(e, t, n, a, s) {
        var l,
            h,
            _,
            f = n.call(e, t, a),
            b = !1;
        return {
            t: s ? 0 : 1,
            running: !1,
            program: null,
            pending: null,
            run: function run(e, t) {
                var n = this;
                "function" == typeof f ? u.wait().then((function() {
                    f = f(), n._run(e, t)
                })) : this._run(e, t)
            },
            _run: function _run(e, n) {
                l = f.duration || 300, h = f.easing || linear;
                var a = {
                    start: window.performance.now() + (f.delay || 0),
                    b: e,
                    callback: n || noop
                };
                s && !b && (f.css && f.delay && (_ = t.style.cssText, t.style.cssText += f.css(0, 1)), f.tick && f.tick(0, 1), b = !0), e || (a.group = r.current, r.current.remaining += 1), f.delay ? this.pending = a : this.start(a), this.running || (this.running = !0, u.add(this))
            },
            start: function start(n) {
                if (e.fire("".concat(n.b ? "intro" : "outro", ".start"), {
                    node: t
                }), n.a = this.t, n.delta = n.b - n.a, n.duration = l * Math.abs(n.b - n.a), n.end = n.start + n.duration, f.css) {
                    f.delay && (t.style.cssText = _);
                    var a = generateRule(n, h, f.css);
                    u.addRule(a, n.name = "__svelte_" + hash(a)), t.style.animation = (t.style.animation || "").split(", ").filter((function(e) {
                        return e && (n.delta < 0 || !/__svelte/.test(e))
                    })).concat("".concat(n.name, " ").concat(n.duration, "ms linear 1 forwards")).join(", ")
                }
                this.program = n, this.pending = null
            },
            update: function update(e) {
                var t = this.program;
                if (t) {
                    var n = e - t.start;
                    this.t = t.a + t.delta * h(n / t.duration), f.tick && f.tick(this.t, 1 - this.t)
                }
            },
            done: function done() {
                var n = this.program;
                this.t = n.b, f.tick && f.tick(this.t, 1 - this.t), e.fire("".concat(n.b ? "intro" : "outro", ".end"), {
                    node: t
                }), n.b || n.invalidated ? f.css && u.deleteRule(t, n.name) : (n.group.callbacks.push((function() {
                    n.callback(), f.css && u.deleteRule(t, n.name)
                })), 0 == --n.group.remaining && n.group.callbacks.forEach(run)), this.running = !!this.pending
            },
            abort: function abort(e) {
                this.program && (e && f.tick && f.tick(1, 0), f.css && u.deleteRule(t, this.program.name), this.program = this.pending = null, this.running = !1)
            },
            invalidate: function invalidate() {
                this.program && (this.program.invalidated = !0)
            }
        }
    }
    var r = {};
    var u = {
        running: !1,
        transitions: [],
        bound: null,
        stylesheet: null,
        activeRules: {},
        promise: null,
        add: function add(e) {
            this.transitions.push(e), this.running || (this.running = !0, requestAnimationFrame(this.bound || (this.bound = this.next.bind(this))))
        },
        addRule: function addRule(e, t) {
            if (!this.stylesheet) {
                var n = createElement("style");
                document.head.appendChild(n), u.stylesheet = n.sheet
            }
            this.activeRules[t] || (this.activeRules[t] = !0, this.stylesheet.insertRule("@keyframes ".concat(t, " ").concat(e), this.stylesheet.cssRules.length))
        },
        next: function next() {
            this.running = !1;
            for (var e = window.performance.now(), t = this.transitions.length; t--;) {
                var n = this.transitions[t];
                n.program && e >= n.program.end && n.done(), n.pending && e >= n.pending.start && n.start(n.pending), n.running ? (n.update(e), this.running = !0) : n.pending || this.transitions.splice(t, 1)
            }
            if (this.running)
                requestAnimationFrame(this.bound);
            else if (this.stylesheet) {
                for (var a = this.stylesheet.cssRules.length; a--;)
                    this.stylesheet.deleteRule(a);
                this.activeRules = {}
            }
        },
        deleteRule: function deleteRule(e, t) {
            e.style.animation = e.style.animation.split(", ").filter((function(e) {
                return e && -1 === e.indexOf(t)
            })).join(", ")
        },
        wait: function wait() {
            return u.promise || (u.promise = Promise.resolve(), u.promise.then((function() {
                u.promise = null
            }))), u.promise
        }
    };
    function destroyBlock(e, t) {
        e.d(1), t[e.key] = null
    }
    function updateKeyedEach(e, t, n, a, s, r, u, l, h, _, f, b, g, v) {
        for (var O = e.length, j = u.length, E = O, y = {}; E--;)
            y[e[E].key] = E;
        var C = [],
            I = {},
            w = {};
        for (E = j; E--;) {
            var k = v(r, u, E),
                T = a(k),
                S = l[T];
            S ? s && S.p(n, k) : (S = f(t, T, k)).c(), C[E] = I[T] = S, T in y && (w[T] = Math.abs(E - y[T]))
        }
        var A = {},
            M = {};
        function insert(e) {
            e[b](h, g), l[e.key] = e, g = e.first, j--
        }
        for (; O && j;) {
            var N = C[j - 1],
                R = e[O - 1],
                P = N.key,
                D = R.key;
            N === R ? (g = N.first, O--, j--) : I[D] ? !l[P] || A[P] ? insert(N) : M[D] ? O-- : w[P] > w[D] ? (M[P] = !0, insert(N)) : (A[D] = !0, O--) : (_(R, l), O--)
        }
        for (; O--;) {
            I[(R = e[O]).key] || _(R, l)
        }
        for (; j;)
            insert(C[j - 1]);
        return C
    }
    function blankObject() {
        return Object.create(null)
    }
    function destroy(e) {
        this.destroy = noop, this.fire("destroy"), this.set = noop, this._fragment.d(!1 !== e), this._fragment = null, this._state = {}
    }
    function _differs(e, t) {
        return e != e ? t == t : e !== t || e && "object" === s()(e) || "function" == typeof e
    }
    function _differsImmutable(e, t) {
        return e != e ? t == t : e !== t
    }
    function fire(e, t) {
        var n = e in this._handlers && this._handlers[e].slice();
        if (n)
            for (var a = 0; a < n.length; a += 1) {
                var s = n[a];
                if (!s.__calling)
                    try {
                        s.__calling = !0, s.call(this, t)
                    } finally {
                        s.__calling = !1
                    }
            }
    }
    function flush(e) {
        e._lock = !0, callAll(e._beforecreate), callAll(e._oncreate), callAll(e._aftercreate), e._lock = !1
    }
    function get() {
        return this._state
    }
    function init(e, t) {
        e._handlers = blankObject(), e._slots = blankObject(), e._bind = t._bind, e._staged = {}, e.options = t, e.root = t.root || e, e.store = t.store || e.root.store, t.root || (e._beforecreate = [], e._oncreate = [], e._aftercreate = [])
    }
    function on(e, t) {
        var n = this._handlers[e] || (this._handlers[e] = []);
        return n.push(t), {
            cancel: function cancel() {
                var e = n.indexOf(t);
                ~e && n.splice(e, 1)
            }
        }
    }
    function set(e) {
        this._set(assign({}, e)), this.root._lock || flush(this.root)
    }
    function _set(e) {
        var t = this._state,
            n = {},
            a = !1;
        for (var s in e = assign(this._staged, e), this._staged = {}, e)
            this._differs(e[s], t[s]) && (n[s] = a = !0);
        a && (this._state = assign(assign({}, t), e), this._recompute(n, this._state), this._bind && this._bind(n, this._state), this._fragment && (this.fire("state", {
            changed: n,
            current: this._state,
            previous: t
        }), this._fragment.p(n, this._state), this.fire("update", {
            changed: n,
            current: this._state,
            previous: t
        })))
    }
    function _stage(e) {
        assign(this._staged, e)
    }
    function callAll(e) {
        for (; e && e.length;)
            e.shift()()
    }
    function _mount(e, t) {
        this._fragment[this._fragment.i ? "i" : "m"](e, t || null)
    }
    function removeFromStore() {
        this.store._remove(this)
    }
    var l = {
        destroy: destroy,
        get: get,
        fire: fire,
        on: on,
        set: set,
        _recompute: noop,
        _set: _set,
        _stage: _stage,
        _mount: _mount,
        _differs: _differs
    }
}, function(e, t, n) {
    e.exports = n(18)(50)
}, function(e, t, n) {
    e.exports = n(18)(79)
}, function(e, t, n) {
    "use strict";
    var a,
        s,
        r,
        u,
        l = {
            SEND_MESSAGE: {
                key: "Social - SendMessage",
                payload: function payload(e) {
                    return {
                        mode: "globalChat",
                        recipient: e ? "friend" : "member"
                    }
                }
            }
        },
        h = {
            personalChannel: function personalChannel(e) {
                return "chat/users/".concat(e)
            },
            userStatusChannel: function userStatusChannel(e) {
                return "presence/users/".concat(e)
            }
        };
    !function(e) {
        e.MUTE = "mute", e.WARN = "warn"
    }(a || (a = {})), function(e) {
        e.BADGE_KEY = "chatMessages", e[e.BIG_EMOTES_LIMIT = 4] = "BIG_EMOTES_LIMIT", e[e.DEFAULT_CHAT_WINDOW_HEIGHT = 400] = "DEFAULT_CHAT_WINDOW_HEIGHT", e[e.DEFAULT_CHAT_WINDOW_WIDTH = 350] = "DEFAULT_CHAT_WINDOW_WIDTH", e[e.CHAT_WINDOW_MOVE_TRESHOLD = 30] = "CHAT_WINDOW_MOVE_TRESHOLD", e[e.CHAT_WINDOW_WIDTH_ON_MOBILE = .9] = "CHAT_WINDOW_WIDTH_ON_MOBILE", e[e.EMOTES_IN_A_ROW = 3] = "EMOTES_IN_A_ROW", e[e.HTTP_CODE_TOO_MUCH_REQUESTS = 429] = "HTTP_CODE_TOO_MUCH_REQUESTS", e[e.HTTP_CODE_FORBIDDEN = 403] = "HTTP_CODE_FORBIDDEN", e[e.INTERVAL_GET_PUBSUB_STATE = 3e3] = "INTERVAL_GET_PUBSUB_STATE", e[e.INTERVAL_GET_PUBSUB_STATE_INITIAL = 500] = "INTERVAL_GET_PUBSUB_STATE_INITIAL", e[e.KEY_ENTER = 13] = "KEY_ENTER", e[e.KEY_ESC = 27] = "KEY_ESC", e[e.MESSAGES_PER_REQUEST = 20] = "MESSAGES_PER_REQUEST", e[e.MIN_CHAT_WINDOW_HEIGHT = 200] = "MIN_CHAT_WINDOW_HEIGHT", e[e.MIN_CHAT_WINDOW_WIDTH = 300] = "MIN_CHAT_WINDOW_WIDTH", e.ONLINE_STATUS = "online", e.PENDING_MESSAGE_ID = "pending_message", e.PUBSUB_ACTION_CREATED = "created", e[e.RETRY_REQUEST_TIMEOUT = 200] = "RETRY_REQUEST_TIMEOUT", e[e.WINDOW_RESIZE_DEBOUNCE = 250] = "WINDOW_RESIZE_DEBOUNCE", e[e.SCROLL_HEIGHT_TRIGGER = 100] = "SCROLL_HEIGHT_TRIGGER", e[e.TIMEOUT_TILL_MESSAGE_IS_READ = 500] = "TIMEOUT_TILL_MESSAGE_IS_READ", e[e.UNREAD_MESSAGE_BADGE_ANIMATION = 1e3] = "UNREAD_MESSAGE_BADGE_ANIMATION", e[e.USER_MUTE_MESSAGES_ANMOUNT = 60] = "USER_MUTE_MESSAGES_ANMOUNT", e[e.USER_MUTE_TIMEOUT = 1e4] = "USER_MUTE_TIMEOUT", e.USER_CLUB_CHAT_MUTE_TIMEOUT = "PT60M", e[e.USERS_PER_REQUEST = 30] = "USERS_PER_REQUEST", e[e.USERS_TRACK_STATUS_LIMIT = 25] = "USERS_TRACK_STATUS_LIMIT"
    }(s || (s = {})), function(e) {
        e.CHAT_LOAD_USER_POPOVER_BUNDLE = "chat-load-user-popover-bundle"
    }(r || (r = {})), function(e) {
        e.EVERYONE = "everyone", e.FRIENDS = "friends", e.TITLED_PLAYERS = "titled"
    }(u || (u = {}));
    var _,
        f = {
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
        b = n(6),
        g = n.n(b),
        v = n(1),
        O = (_ = {
            accept: Object(v.trans)("Accept"),
            acceptAndChat: Object(v.trans)("Accept & Chat"),
            blockDirectChat: Object(v.trans)("Block this chat"),
            cancel: Object(v.trans)("Cancel"),
            cannotBeCreated: Object(v.trans)("This chat cannot be created."),
            chatRequestSent: Object(v.trans)("Chat request sent"),
            chatViewOptions: Object(v.trans)("Chat View Options"),
            closeChat: Object(v.trans)("Close"),
            deactivateChat: Object(v.trans)("Hide"),
            decline: Object(v.trans)("Decline"),
            declinedChatRequest: function declinedChatRequest(e) {
                return Object(v.trans)("You have declined to chat with %1$s%. You can change your mind and accept at any time.", {
                    "%1$s%": e
                })
            },
            deleteMessage: Object(v.trans)("Delete message"),
            findUser: Object(v.trans)("Search..."),
            hideInactiveChats: Object(v.trans)("Active chats"),
            leaveChat: Object(v.trans)("Leave this chat"),
            loading: Object(v.trans)("Loading..."),
            message: Object(v.trans)("Message..."),
            minimizeChat: Object(v.trans)("Minimize"),
            moderatorMessage: Object(v.trans)("Moderator message:"),
            muted: Object(v.trans)("Muted"),
            gotIt: Object(v.trans)("Got it!"),
            pleaseUpgrade: Object(v.trans)("Upgrade to get all emojis!"),
            removeChat: Object(v.trans)("Remove chat"),
            restoreMessage: Object(v.trans)("Restore message"),
            rulesLink: Object(v.trans)('Please follow our Community Policy to keep Chess.com a fun and safe place to enjoy chess. If you don\'t follow the rules, your account may be restricted. <a href="https://www.chess.com/community" target="_blank">Learn more »</a>'),
            sendMessageError: Object(v.trans)("Message failed."),
            showInactiveChats: Object(v.trans)("Inactive chats"),
            sendMessageTo: Object(v.trans)("To:"),
            tooMuchMessages: Object(v.trans)("Relax! You are sending too many messages."),
            tryAgain: Object(v.trans)("Resend"),
            unableToConnect: Object(v.trans)("Unable to connect to chat. Please refresh or login again."),
            usersAreUnavailable: function usersAreUnavailable(e) {
                return Object(v.trans)("Sorry! %1$s% are not available to chat.", {
                    "%1$s%": e
                })
            },
            userIsUnavailable: function userIsUnavailable(e) {
                return Object(v.trans)("Sorry! %1$s% is not available to chat.", {
                    "%1$s%": e
                })
            },
            userWasUnavailable: function userWasUnavailable(e) {
                return Object(v.trans)("%1$s% declined to chat earlier. You can try again now.", {
                    "%1$s%": e
                })
            },
            userWantsToChat: function userWantsToChat(e) {
                return Object(v.trans)("%1$s% would like to chat", {
                    "%1$s%": e
                })
            },
            userHasBeenMuted: function userHasBeenMuted(e, t) {
                return Object(v.trans)("%1$s% has been muted by %2$s%", {
                    "%1$s%": e,
                    "%2$s%": t
                })
            },
            userHasBeenWarned: function userHasBeenWarned(e, t) {
                return Object(v.trans)("%1$s% has been warned by %2$s%", {
                    "%1$s%": e,
                    "%2$s%": t
                })
            },
            warning: Object(v.trans)("Warning"),
            youHaveBeenMuted: Object(v.trans)("You have been muted."),
            youHaveBeenWarned: Object(v.trans)("You have been warned.")
        }, g()(_, u.EVERYONE, Object(v.trans)("Everyone")), g()(_, u.FRIENDS, Object(v.trans)("Friends")), g()(_, u.TITLED_PLAYERS, Object(v.trans)("Titled Players")), _),
        j = n(44),
        E = Object(j.a)("uuid"),
        y = window.context,
        C = y && y.user && y.user.isPremium,
        I = ["avatarUrl", "chessTitle", "flairCode", "isFriend", "isStreamer", "membership", "username"];
    n.d(t, "b", (function() {
        return l
    })), n.d(t, "c", (function() {
        return h
    })), n.d(t, "d", (function() {
        return a
    })), n.d(t, "e", (function() {
        return s
    })), n.d(t, "f", (function() {
        return r
    })), n.d(t, "g", (function() {
        return u
    })), n.d(t, "h", (function() {
        return f
    })), n.d(t, "i", (function() {
        return O
    })), n.d(t, "j", (function() {
        return E
    })), n.d(t, "k", (function() {
        return C
    })), n.d(t, "a", (function() {
        return I
    }))
}, function(e, t, n) {
    e.exports = n(18)(80)
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return r
    })), n.d(t, "c", (function() {
        return u
    })), n.d(t, "d", (function() {
        return l
    })), n.d(t, "e", (function() {
        return h
    })), n.d(t, "f", (function() {
        return _
    })), n.d(t, "g", (function() {
        return f
    })), n.d(t, "h", (function() {
        return b
    })), n.d(t, "l", (function() {
        return g
    })), n.d(t, "m", (function() {
        return v
    })), n.d(t, "n", (function() {
        return O
    })), n.d(t, "o", (function() {
        return j
    })), n.d(t, "p", (function() {
        return E
    })), n.d(t, "q", (function() {
        return y
    })), n.d(t, "i", (function() {
        return C
    })), n.d(t, "j", (function() {
        return I
    })), n.d(t, "k", (function() {
        return w
    }));
    var a = n(2),
        s = {
            amplitudeProps: "data-amplitude-props",
            speedChessChampionshipUrl: "data-speed-chess-championship-url",
            challengeUser: "data-challenge-user",
            loginAndGoRoute: "data-route-login-and-go",
            registerRoute: "data-route-register",
            routes: "data-routes",
            showChallengeUser: "data-show-challenge-user"
        },
        r = {
            ONBOARD: "Onboard - StartReg",
            SEARCH: "Search"
        },
        u = 100,
        l = 100,
        h = {
            ALERTS: "alerts",
            CHALLENGES: "challenges",
            CHAT_MESSAGES: "chatMessages",
            GAMES: "games",
            MESSAGES: "messages"
        },
        _ = {
            CLOSE: "close",
            COLLAPSED: "collapsed",
            HOVER: "hover",
            NO_REDIRECT: "noredirect",
            OPEN: "open",
            WIDE: "wide"
        },
        f = {
            CLUB_CHAT_MODERATOR_ACTION: "club-chat-moderator-action",
            CLOSE_SHAREABLE_URL_MODAL: "CLOSE_SHAREABLE_URL_MODAL",
            OPEN_SHAREABLE_URL_MODAL: "OPEN_SHAREABLE_URL_MODAL",
            SEND_NEW_GAME_SEEK: "SEND_NEW_GAME_SEEK",
            SEND_NEW_GAME_SEEK_SUCCESS: "SEND_NEW_GAME_SEEK_SUCCESS",
            SHOW_NEW_GAME_MODAL: "SHOW_NEW_GAME_MODAL",
            START_DIRECT_CHAT: "START_DIRECT_CHAT"
        },
        b = {
            ANY: "any",
            DEFAULT_AND_USER: "default_and_user"
        },
        g = {
            MOBILE_WIDTH: 960,
            TOOLTIP_OFFSET: 8
        },
        v = {
            registerRoute: function registerRoute(e) {
                return a.default.generate("web_security_register", {
                    redirectUrl: e
                })
            },
            loginAndGoRoute: function loginAndGoRoute(e) {
                return a.default.generate("web_security_login_and_go", {
                    redirectUrl: e
                })
            }
        },
        O = {
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
        },
        j = {
            FACEBOOK: "facebook",
            TWITTER: "twitter"
        },
        E = {
            TOOLTIP_SHOW_DELAY: 400
        },
        y = {
            COLLAPSED_NAV: "collapsed-nav"
        },
        C = 2,
        I = 5,
        w = 3
}, function(e, t, n) {
    e.exports = n(18)(7)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "b", (function() {
        return s
    })), n.d(t, "c", (function() {
        return r
    })), n.d(t, "e", (function() {
        return u
    })), n.d(t, "d", (function() {
        return l
    })), n.d(t, "f", (function() {
        return h
    })), n.d(t, "g", (function() {
        return _
    })), n.d(t, "h", (function() {
        return f
    })), n.d(t, "i", (function() {
        return b
    })), n.d(t, "j", (function() {
        return g
    })), n.d(t, "k", (function() {
        return v
    })), n.d(t, "l", (function() {
        return O
    })), n.d(t, "m", (function() {
        return j
    })), n.d(t, "n", (function() {
        return E
    })), n.d(t, "o", (function() {
        return y
    }));
    var a = {
            NEW_GAME_IS_DAILY: "new_game_is_daily",
            NEW_GAME_IS_LIVE: "new_game_is_live",
            NEW_GAME_IS_USING_CUSTOM_LIVE_TIME_VARIANT: "new_game_is_using_custom_live_time_variant",
            NEW_GAME_TIME_VARIANT_WITH_INCREMENT: "new_game_time_variant_with_increment",
            NEW_GAME_LAST_CHALLENGE_TYPE: "new_game_last_challenge_type"
        },
        s = {
            BOOK: "book",
            CHESS: "chess",
            CHESS_960: "chess960",
            CUSTOM: "custom"
        },
        r = {
            QUICK: "quick",
            CUSTOM: "custom"
        },
        u = {
            days: 0,
            inc: 0,
            mins: 10,
            secs: 0
        },
        l = {
            days: 3,
            inc: 0,
            mins: 0,
            secs: 0
        },
        h = "8/8/8/8/8/8/8/8 w KQkq - 0 1",
        _ = {
            blitz: "#ffc800",
            bughouse: "#97bd4d",
            bullet: "#a68b46",
            chess: "#8a8886",
            chess960: "#f05a29",
            crazyhouse: "#005e94",
            kingofthehill: "#71604e",
            lightning: "#ffc800",
            live960: "#ee5b34",
            rapid: "#769656",
            standard: "#8a8886",
            threecheck: "#1eaea7"
        },
        f = {
            BUGHOUSE: "bughouse",
            CHESS: "chess",
            CHESS_960: "chess960",
            CRAZYHOUSE: "crazyhouse",
            KING_OF_THE_HILL: "kingofthehill",
            THREE_CHECK: "threecheck",
            ANALYSIS: "analysis"
        },
        b = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
        g = {
            INC: 60,
            MINS: 120,
            SECS: 90
        },
        v = {
            CUSTOM_CHALLENGE: "game-custom-challenge",
            GAME_TYPE: "game-type",
            GAME_TIME: "game-time",
            OPEN_CHALLENGES: "game-open-challenges",
            PLAY_FRIEND: "game-play-friend",
            QUICK_CHALLENGE: "quick-challenge",
            TOURNAMENTS: "game-tournaments"
        },
        O = {
            RANDOM: 0,
            WHITE: 1,
            BLACK: 2
        },
        j = {
            CUSTOM_CHALLENGE: "custom-challenge",
            JOIN_A_TOURNAMENT: "join-a-tournament",
            OPEN_CHALLENGES: "open-challenges",
            PLAY_A_FRIEND: "play-a-friend",
            PLAY_COMPUTER: "play-computer",
            QUICK_PLAY: "quick-play"
        },
        E = {
            DAILY: "daily",
            LIVE: "live",
            LIVE_ARENA: "arena",
            LIVE_SWISS: "live"
        },
        y = {
            CHESSCOM: "chesscom",
            FRIENDS: "friends",
            RECENT_OPPONENTS: "recent-opponents"
        }
}, function(e, t, n) {
    e.exports = n(18)(4)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return _async
    })), n.d(t, "b", (function() {
        return _await
    })), n.d(t, "c", (function() {
        return _awaitIgnored
    })), n.d(t, "f", (function() {
        return _continue
    })), n.d(t, "g", (function() {
        return _continueIgnored
    })), n.d(t, "d", (function() {
        return _call
    })), n.d(t, "h", (function() {
        return _invoke
    })), n.d(t, "i", (function() {
        return _invokeIgnored
    })), n.d(t, "e", (function() {
        return _catch
    }));
    function _async(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (a) {
                return Promise.reject(a)
            }
        }
    }
    function _await(e, t, n) {
        return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e)
    }
    function _awaitIgnored(e, t) {
        if (!t)
            return e && e.then ? e.then(_empty) : Promise.resolve()
    }
    function _continue(e, t) {
        return e && e.then ? e.then(t) : t(e)
    }
    function _continueIgnored(e) {
        if (e && e.then)
            return e.then(_empty)
    }
    function _call(e, t, n) {
        if (n)
            return t ? t(e()) : e();
        try {
            var a = Promise.resolve(e());
            return t ? a.then(t) : a
        } catch (s) {
            return Promise.reject(s)
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
        } catch (a) {
            return t(a)
        }
        return n && n.then ? n.then(void 0, t) : n
    }
    function _empty() {}
}, function(e, t, n) {
    e.exports = n(18)(78)
}, function(e, t, n) {
    "use strict";
    var a = n(1);
    t.a = {
        accept: Object(a.trans)("Accept"),
        achievements: Object(a.trans)("Achievements"),
        alerts: Object(a.trans)("Alerts"),
        analysis: Object(a.trans)("analysis", {}, "mobile"),
        archive: Object(a.trans)("Archive"),
        articles: Object(a.trans)("articles", {}, "mobile"),
        awards: Object(a.trans)("Awards"),
        blogs: Object(a.trans)("Blogs"),
        cancel: Object(a.trans)("Cancel"),
        captchaPlaceholder: Object(a.trans)("Enter text to continue"),
        coaches: Object(a.trans)("Coaches"),
        challengeAnytime: function challengeAnytime(e) {
            return Object(a.trans)("Friends can directly challenge you anytime at: %url%", {
                "%url%": e
            })
        },
        chat: Object(a.trans)("Chat"),
        chessKid: Object(a.trans)("ChessKid"),
        chessTv: Object(a.trans)("ChessTV", {}, "mobile"),
        chessToday: Object(a.trans)("Chess Today"),
        clearAll: Object(a.trans)("Clear Alerts"),
        clubs: Object(a.trans)("Clubs"),
        computer: Object(a.trans)("computer", {}, "mobile"),
        computerChampionship: Object(a.trans)("Computer Championship"),
        connectionExcellent: Object(a.trans)("lag.connection_excellent", null, "live"),
        connectionGood: Object(a.trans)("lag.connection_good", null, "live"),
        connectionOffline: Object(a.trans)("lag.connection_offline", null, "live"),
        connectionOk: Object(a.trans)("lag.connection_ok", null, "live"),
        connectionPoor: Object(a.trans)("lag.connection_poor", null, "live"),
        copy: Object(a.trans)("Copy"),
        dailyChess: Object(a.trans)("daily_chess", {}, "mobile"),
        dailyPuzzle: Object(a.trans)("Daily Puzzle"),
        decline: Object(a.trans)("Decline"),
        drills: Object(a.trans)("drills", {}, "mobile"),
        events: Object(a.trans)("Events"),
        explorer: Object(a.trans)("Explorer"),
        forums: Object(a.trans)("forums", {}, "mobile"),
        fourPlayerChess: Object(a.trans)("4 Player Chess"),
        freeTrial: Object(a.trans)("Free Trial"),
        friends: Object(a.trans)("friends", {}, "mobile"),
        help: Object(a.trans)("Help"),
        home: Object(a.trans)("Home"),
        join: Object(a.trans)("Join"),
        leaderboard: Object(a.trans)("Leaderboard"),
        leagues: Object(a.trans)("Leagues", {}, "mobile"),
        lessons: Object(a.trans)("lessons", {}, "mobile"),
        linkExpires: Object(a.trans)("Link expires in"),
        live: Object(a.trans)("Live"),
        liveChess: Object(a.trans)("live_chess", {}, "mobile"),
        liveRankings: Object(a.trans)("Chess Rankings"),
        loading: Object(a.trans)("Loading"),
        login: Object(a.trans)("Login"),
        loginOrJoin: Object(a.trans)("Login or join to play"),
        logOut: Object(a.trans)("Log Out"),
        masterGames: Object(a.trans)("Master Games"),
        members: Object(a.trans)("Members"),
        membership: Object(a.trans)("Membership"),
        merch: Object(a.trans)("Merch"),
        message: Object(a.trans)("Message"),
        messages: Object(a.trans)("messages", {}, "mobile"),
        mobileApps: Object(a.trans)("Mobile Apps"),
        myTurn: Object(a.trans)("My Turn"),
        newGame: Object(a.trans)("New Game"),
        new: Object(a.trans)("New"),
        news: Object(a.trans)("news", {}, "mobile"),
        noAlerts: Object(a.trans)("No Alerts"),
        openings: Object(a.trans)("Openings"),
        or: Object(a.trans)("or"),
        otherGames: Object(a.trans)("Other Games"),
        playMeSocial: function playMeSocial(e) {
            return Object(a.trans)('Play chess with me? I play on @chesscom as "%user%". Click the link to play me in a daily game!', {
                "%user%": e
            })
        },
        playMeEmail: function playMeEmail(e) {
            return Object(a.trans)('Play chess with me? I play on chess.com as "%user%". Click the link to play me in a daily game!', {
                "%user%": e
            })
        },
        playingNow: Object(a.trans)("Playing Now"),
        pleaseEnter: Object(a.trans)("Please enter %number% or more characters", {
            "%number%": 3
        }),
        proChessLeague: Object(a.trans)("PRO Chess League"),
        profile: Object(a.trans)("Profile"),
        puzzleBattle: Object(a.trans)("Puzzle Battle"),
        puzzleBattleChallengeMessage: function puzzleBattleChallengeMessage(e, t, n) {
            return Object(a.trans)("<strong>%user%</strong> (%rating%) challenges you to a Puzzle Battle!", {
                "%user%": '<strong id="'.concat(n, '">').concat(e, "</strong>"),
                "%rating%": t
            })
        },
        puzzleRush: Object(a.trans)("Puzzle Rush"),
        puzzles: Object(a.trans)("Puzzles"),
        resources: Object(a.trans)("Resources"),
        restricted: function restricted(e) {
            return Object(a.trans)("%user% only accepts messages from friends.", {
                "%user%": "<strong>".concat(e, "</strong>")
            })
        },
        rules: Object(a.trans)("Rules"),
        searchUsername: Object(a.trans)("Search username..."),
        send: Object(a.trans)("Send"),
        sendFriendRequest: Object(a.trans)("Send Friend Request"),
        settings: Object(a.trans)("settings", {}, "mobile"),
        shareLink: Object(a.trans)("Share this link with anyone to play."),
        shop: Object(a.trans)("Shop"),
        soloChess: Object(a.trans)("Solo Chess"),
        speedChessChampionship: Object(a.trans)("Speed Chess Championship"),
        stats: Object(a.trans)("stats", {}, "mobile"),
        streamers: Object(a.trans)("Streamers"),
        tactics: Object(a.trans)("tactics", {}, "mobile"),
        theme: Object(a.trans)("Theme"),
        themes: Object(a.trans)("Themes"),
        topPlayers: Object(a.trans)("Top Players"),
        tournaments: Object(a.trans)("tournaments", {}, "mobile"),
        typeClubName: Object(a.trans)("Type club name..."),
        typeFriendName: Object(a.trans)("Type friend name..."),
        videos: Object(a.trans)("videos", {}, "mobile"),
        vision: Object(a.trans)("vision", {}, "mobile"),
        voteChess: Object(a.trans)("Vote Chess"),
        waitHere: Object(a.trans)("Wait here for your opponent.")
    }
}, function(e, t, n) {
    e.exports = n(18)(18)
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return h
    })), n.d(t, "c", (function() {
        return _
    })), n.d(t, "b", (function() {
        return f
    }));
    var a,
        s,
        r = n(6),
        u = n.n(r),
        l = (n(2), n(4));
    l.default.trans("Membership Icons"), l.default.trans("Emoji"), l.default.trans("Chess"), l.default.trans("Holiday"), l.default.trans("Hosts"), l.default.trans("Computer Chess"), l.default.trans("PRO Chess League");
    var h = {
            category: "membership_icons",
            code: "nothing",
            description: l.default.trans("Nothing"),
            id: 206,
            imageCode: "nothing",
            membershipLevelCode: "staff",
            name: l.default.trans("Nothing"),
            status: ""
        },
        _ = (l.default.trans("Accept Friend Request"), l.default.trans("Add Friend"), l.default.trans("Block"), l.default.trans("Are you sure you want to block this user?"), l.default.trans("Cancel"), l.default.trans("Cancel Friend Request"), l.default.trans("Challenge"), l.default.trans("Follow"), l.default.trans("Game Archive"), l.default.trans("Gift Membership"), l.default.trans("Give Award"), l.default.trans("Moderator"), l.default.trans("Online Now"), l.default.trans("In Live"), l.default.trans("Remove Friend"), l.default.trans("Are you sure you want to remove this friend from your list?"), l.default.trans("Report"), l.default.trans("Send Message"), l.default.trans("Show your flair!"), l.default.trans("Staff"), l.default.trans("Unblock"), l.default.trans("Unfollow"), l.default.trans("Tell us more..."), {
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
        }),
        f = (a = {}, u()(a, _.diamond, "diamond"), u()(a, _.abuser, "abuser"), u()(a, _.cheater, "cheater"), u()(a, _.voluntarilyClosed, "inactive"), u()(a, _.unspecifiedClosed, "cheater"), u()(a, _.gold, "gold"), u()(a, _.moderator, "pawn-blue"), u()(a, _.platinum, "platinum"), u()(a, _.staff, "pawn-green"), s = {}, u()(s, _.basic, l.default.trans("Basic Membership")), u()(s, _.diamond, l.default.trans("Diamond Membership")), u()(s, _.cheater, l.default.trans("Closed: Fair Play")), u()(s, _.abuser, l.default.trans("Closed: Abuse")), u()(s, _.voluntarilyClosed, l.default.trans("Closed: Inactive")), u()(s, _.unspecifiedClosed, l.default.trans("Account Closed")), u()(s, _.gold, l.default.trans("Gold Membership")), u()(s, _.moderator, l.default.trans("Moderator Account")), u()(s, _.platinum, l.default.trans("Platinum Membership")), u()(s, _.silver, l.default.trans("Silver Membership")), u()(s, _.staff, l.default.trans("Staff Account")), {
            GM: l.default.trans("Grandmaster"),
            WGM: l.default.trans("Woman Grandmaster"),
            IM: l.default.trans("International Master"),
            WIM: l.default.trans("Woman International Master"),
            FM: l.default.trans("FIDE Master"),
            WFM: l.default.trans("Woman FIDE Master"),
            NM: l.default.trans("National Master"),
            CM: l.default.trans("FIDE Candidate Master"),
            WCM: l.default.trans("FIDE Woman Candidate Master"),
            WNM: l.default.trans("Woman National Master")
        })
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "c", (function() {
        return s
    })), n.d(t, "b", (function() {
        return r
    }));
    var a = {
            BADGE_TYPE: "data-badge",
            BADGE_COUNT: "data-badge-count",
            SEEK_IS_SEEKER: "data-seek-is-seeker",
            SHAREABLE_GAME_UUID: "data-seek-short-uuid",
            SHAREABLE_SHARE_LINK: "data-seek-share-link"
        },
        s = {
            PUZZLE_BATTLE_CHALLENGE_TOASTER: "puzzle-battle-challenge-toaster",
            PUZZLE_BATTLE_CHALLENGE_USER: "puzzle-battle-challenge-user",
            HOME_NOTIFICATIONS: "home-sb-notifications",
            LOGIN_REGISTER_MODAL: "login-register-modal",
            OFFLINE_CHALLENGE_TOASTER: "offline-challenge-toaster",
            NAV_ROOT: "sb",
            NOTIFICATION_TOASTERS: "notification-toasters",
            SHAREABLE_GAME_URL_MODAL: "shareable-game-url-modal",
            SHAREABLE_GAME_SHORT_UUID: "shareable-game-short-uuid"
        },
        r = {
            BADGES: ".svelte-badge"
        }
}, function(e, t, n) {
    e.exports = n(18)(2)
}, function(e, t, n) {
    e.exports = n(18)(3)
}, function(e, t, n) {
    "use strict";
    var a = n(6),
        s = n.n(a),
        r = n(5),
        u = n(26),
        l = n(50),
        h = (n(7), n(39)),
        _ = n(20);
    function ownKeys(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            t && (a = a.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, a)
        }
        return n
    }
    n.d(t, "c", (function() {
        return b
    })), n.d(t, "a", (function() {
        return v
    })), n.d(t, "b", (function() {
        return O
    })), n.d(t, "d", (function() {
        return j
    })), n.d(t, "e", (function() {
        return E
    })), n.d(t, "f", (function() {
        return y
    })), n.d(t, "g", (function() {
        return C
    })), n.d(t, "h", (function() {
        return I
    })), n.d(t, "i", (function() {
        return w
    })), n.d(t, "j", (function() {
        return k
    })), n.d(t, "k", (function() {
        return T
    }));
    var f = document.querySelector(r.n.MAIN_NAV),
        b = function generateMyTurnsLink(e) {
            return Object(u.a)(e)
        },
        g = function getMainNav() {
            return null == f && (f = document.querySelector(r.n.MAIN_NAV)), f
        },
        v = function commentIcon(e) {
            return {
                article: "page",
                blog: "paper-pencil",
                chess_video: "play",
                club: "users",
                forum_topic: "chat",
                game: "chess-move",
                lesson_course: "chat",
                master_player: "chat",
                news: "news",
                opening: "book-alt",
                survey: "question",
                tactics: "chess-board-puzzle",
                tournament: "order",
                team_match: "crossed-swords",
                votechess: "checkbox"
            }[e]
        },
        O = function countryCode(e) {
            var t;
            return ( null == e ? void 0 : null === (t = e.country_code) || void 0 === t ? void 0 : t.toLowerCase())
        },
        j = function getTvByUserLanguage(e) {
            if (null != e) {
                var t;
                t = Array.isArray(e) ? e : [e];
                var n = window.context.i18n,
                    a = n.contentLanguage,
                    s = n.locale,
                    u = t.find((function(e) {
                        var t = e.language;
                        return s === t
                    }));
                return u || (a === r.h.DEFAULT_AND_USER || a === r.h.ANY ? t.find((function(e) {
                        var t = e.language;
                        return e.defaultLanguage === t
                    })) : void 0)
            }
        },
        E = function isLive() {
            return "/live" === window.location.pathname.substr(0, 5)
        },
        y = l.a,
        C = function joinUrl(e) {
            var t = e || window.location.href,
                n = g();
            return n ? "".concat(n.getAttribute(r.b.registerRoute), "?redirectUrl=").concat(encodeURI(t)) : r.m.registerRoute(e)
        },
        I = function loginUrl(e) {
            var t = e || window.location.href,
                n = g();
            return n ? "".concat(n.getAttribute(r.b.loginAndGoRoute), "?redirectUrl=").concat(encodeURI(t)) : r.m.loginAndGoRoute(e)
        },
        w = function mountReplace(e, t) {
            var n = document.createDocumentFragment(),
                a = new e(function _objectSpread(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? ownKeys(Object(n), !0).forEach((function(t) {
                            s()(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ownKeys(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({}, t, {
                    target: n
                }));
            return t.target.parentNode.replaceChild(n, t.target), a
        },
        k = function sendInvitation(e) {
            var t = "body=Play a daily game with me on chess.com by clicking on the following link ".concat(e, " or copying and pasting into your browser.");
            Object(h.e)("subject=Play chess with me on Chess.com", t)
        },
        T = function sendSocialInvitation(e) {
            var t = e.shareUrl,
                n = e.network,
                a = e.username,
                s = 'Play chess with me? I play on @chesscom as "'.concat(a, '." Click the link to play me in a daily game!!');
            !function openWindow(e) {
                _.a.logSocialShare();
                var t = window.screen.width / 2 - 280,
                    n = window.screen.height / 2 - 340,
                    a = "width=".concat(560, ", height=").concat(510),
                    s = "left=".concat(t, ", top=").concat(n);
                window.open(e, "_blank", "".concat(a, ",").concat(s, ",").concat("resizable=no, status=no, menubar=no, scrollbars=no"))
            }(n === r.o.TWITTER ? "https://twitter.com/intent/tweet?text=".concat(encodeURIComponent(s), "&url=").concat(encodeURIComponent(t)) : "http://www.facebook.com/sharer.php?u=".concat(encodeURIComponent(t)))
        }
}, function(e, t) {
    e.exports = coreDLL
}, function(e, t, n) {
    "use strict";
    var a = n(15),
        s = n.n(a),
        r = n(16),
        u = n.n(r);
    var l = function() {
            function CacheProvider() {
                s()(this, CacheProvider), this.enabled = function localStorageWorks() {
                    try {
                        return localStorage.setItem("test", "test"), localStorage.removeItem("test"), !0
                    } catch (e) {
                        return !1
                    }
                }()
            }
            return u()(CacheProvider, [{
                key: "get",
                value: function get(e) {
                    return JSON.parse(localStorage.getItem(e))
                }
            }, {
                key: "set",
                value: function set(e, t) {
                    localStorage.setItem(e, JSON.stringify(t))
                }
            }]), CacheProvider
        }(),
        h = function() {
            function CacheService(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                s()(this, CacheService), this.cache = new l, this.cacheKey = e, this.memory = t
            }
            return u()(CacheService, [{
                key: "get",
                value: function get(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return this.memory[e] ? this.memory[e] : this.ready ? (this.pull(), void 0 !== this.memory[e] ? this.memory[e] : t) : t
                }
            }, {
                key: "pull",
                value: function pull() {
                    return this.memory = this.cache.get(this.cacheKey) || {}, this
                }
            }, {
                key: "push",
                value: function push() {
                    return this.cache.set(this.cacheKey, this.memory), this
                }
            }, {
                key: "remove",
                value: function remove(e) {
                    return this.ready ? (this.pull(), void 0 === this.memory[e] ? this : (delete this.memory[e], this.push())) : this
                }
            }, {
                key: "set",
                value: function set(e, t) {
                    return this.ready ? (this.pull(), this.memory[e] = t, this.push()) : this
                }
            }, {
                key: "ready",
                get: function get() {
                    return !1 !== this.cache.enabled
                }
            }]), CacheService
        }();
    t.a = new h("json_settings")
}, function(e, t, n) {
    "use strict";
    var a = n(41),
        s = n(36),
        r = n.n(s);
    var u = function createBaseFor(e) {
        return function(t, n, a) {
            for (var s = -1, r = Object(t), u = a(t), l = u.length; l--;) {
                var h = u[e ? l : ++s];
                if (!1 === n(r[h], h, r))
                    break
            }
            return t
        }
    }();
    var l = function baseTimes(e, t) {
            for (var n = -1, a = Array(e); ++n < e;)
                a[n] = t(n);
            return a
        },
        h = n(28),
        _ = n(27);
    var f = function baseIsArguments(e) {
            return Object(_.a)(e) && "[object Arguments]" == Object(h.a)(e)
        },
        b = Object.prototype,
        g = b.hasOwnProperty,
        v = b.propertyIsEnumerable,
        O = f(function() {
            return arguments
        }()) ? f : function(e) {
            return Object(_.a)(e) && g.call(e, "callee") && !v.call(e, "callee")
        },
        j = n(48),
        E = n(58),
        y = /^(?:0|[1-9]\d*)$/;
    var C = function isIndex(e, t) {
        var n = typeof e;
        return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && y.test(e)) && e > -1 && e % 1 == 0 && e < t
    };
    var I = function isLength(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        },
        w = {};
    w["[object Float32Array]"] = w["[object Float64Array]"] = w["[object Int8Array]"] = w["[object Int16Array]"] = w["[object Int32Array]"] = w["[object Uint8Array]"] = w["[object Uint8ClampedArray]"] = w["[object Uint16Array]"] = w["[object Uint32Array]"] = !0, w["[object Arguments]"] = w["[object Array]"] = w["[object ArrayBuffer]"] = w["[object Boolean]"] = w["[object DataView]"] = w["[object Date]"] = w["[object Error]"] = w["[object Function]"] = w["[object Map]"] = w["[object Number]"] = w["[object Object]"] = w["[object RegExp]"] = w["[object Set]"] = w["[object String]"] = w["[object WeakMap]"] = !1;
    var k = function baseIsTypedArray(e) {
        return Object(_.a)(e) && I(e.length) && !!w[Object(h.a)(e)]
    };
    var T = function baseUnary(e) {
            return function(t) {
                return e(t)
            }
        },
        S = n(52),
        A = S.a && S.a.isTypedArray,
        M = A ? T(A) : k,
        N = Object.prototype.hasOwnProperty;
    var R = function arrayLikeKeys(e, t) {
            var n = Object(j.a)(e),
                a = !n && O(e),
                s = !n && !a && Object(E.a)(e),
                r = !n && !a && !s && M(e),
                u = n || a || s || r,
                h = u ? l(e.length, String) : [],
                _ = h.length;
            for (var f in e)
                !t && !N.call(e, f) || u && ("length" == f || s && ("offset" == f || "parent" == f) || r && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || C(f, _)) || h.push(f);
            return h
        },
        P = Object.prototype;
    var D = function isPrototype(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || P)
    };
    var U = function overArg(e, t) {
            return function(n) {
                return e(t(n))
            }
        }(Object.keys, Object),
        L = Object.prototype.hasOwnProperty;
    var x = function baseKeys(e) {
            if (!D(e))
                return U(e);
            var t = [];
            for (var n in Object(e))
                L.call(e, n) && "constructor" != n && t.push(n);
            return t
        },
        H = n(29);
    var F = function isFunction(e) {
        if (!Object(H.a)(e))
            return !1;
        var t = Object(h.a)(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    };
    var G = function isArrayLike(e) {
        return null != e && I(e.length) && !F(e)
    };
    var z = function keys(e) {
        return G(e) ? R(e) : x(e)
    };
    var B = function baseForOwn(e, t) {
        return e && u(e, t, z)
    };
    var W = function identity(e) {
        return e
    };
    var q = function castFunction(e) {
        return "function" == typeof e ? e : W
    };
    var V = function forOwn(e, t) {
            return e && B(e, q(t))
        },
        $ = {
            init: function init() {
                if ($.initialized)
                    return !0;
                var e = window.context || {};
                return r.a.getInstance().init(e.amplitudeKey, null, {
                    includeUtm: !0,
                    includeReferrer: !0,
                    includeGclid: !0
                }), null != e && null != e.user && r.a.getInstance().setUserId(e.user.id), $.initialized = !0, !0
            },
            logEvent: function logEvent(e, t, n, a) {
                var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                $.init() ? ($.setUserProperties(n), $.incrementUserProperties(a), r.a.getInstance().logEvent(e, t || {})) : s < 3 && setTimeout((function() {
                    $.logEvent(e, t, n, a, s + 1)
                }), 1e3)
            },
            setUserProperties: function setUserProperties(e) {
                $.init() && null != e && r.a.getInstance().setUserProperties(e)
            },
            incrementUserProperties: function incrementUserProperties(e) {
                if ($.init() && null != e) {
                    var t = new r.a.Identify;
                    V(e, (function(e, n) {
                        t.add(n, e)
                    })), r.a.getInstance().identify(t)
                }
            },
            logSocialShare: function logSocialShare() {
                $.logEvent("Social - SocialShare", null, null, {
                    numSocialShares: 1
                })
            },
            logOnboardChangeAvatar: function logOnboardChangeAvatar(e) {
                $.logEvent("Onboard - Avatar", null, {
                    hasAvatar: e
                })
            },
            logOnboardChangeTheme: function logOnboardChangeTheme(e) {
                $.logEvent("Onboard - Theme", null, {
                    themeName: e
                })
            },
            logAccountClose: function logAccountClose(e) {
                $.logEvent("User - AccountClose", e)
            },
            logStartCheckout: function logStartCheckout(e) {
                $.logEvent("Upgrade - Checkout", e), Object(a.a)("Upgrade - Checkout", e)
            },
            logSubmitPayment: function logSubmitPayment(e) {
                $.logEvent("Upgrade - SubmitPayment", {
                    auth: e
                })
            },
            logAccountDowngrade: function logAccountDowngrade(e, t) {
                $.logEvent("Upgrade - Cancel", e, t), Object(a.a)("Upgrade - Cancel", e)
            },
            logAccountDowngradeTrial: function logAccountDowngradeTrial(e, t) {
                $.logEvent("Upgrade - CancelTrial", e, t), Object(a.a)("Upgrade - CancelTrial", e)
            },
            logVideoComplete: function logVideoComplete(e, t, n, a) {
                $.logEvent("Videos - Complete", {
                    skillLevels: e,
                    category: t,
                    title: n,
                    author: a
                })
            },
            logVideoStart: function logVideoStart(e, t, n, a) {
                $.logEvent("Videos - Start", {
                    skillLevels: e,
                    category: t,
                    title: n,
                    author: a
                }, null, {
                    numVideos: 1
                })
            }
        };
    t.a = $
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return u
    }));
    var a = n(14),
        s = {},
        r = document.getElementById(a.c.NAV_ROOT),
        u = function hasFeatureAccess(e, t) {
            var n = t || r;
            return s[e] || (s[e] = Boolean(n && n.getAttribute(e))), s[e]
        }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var a = {
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
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var a = {
        CONNECT: "connect",
        DISCONNECT: "disconnect",
        FAILURE: "failure",
        MESSAGE: "message",
        RECONNECT: "reconnect",
        SUBSCRIBE: "subscribe",
        SUBSCRIBE_FAIL: "subscribe_fail",
        UNSUBSCRIBE: "unsubscribe"
    }
}, function(e, t, n) {
    e.exports = n(18)(49)
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return s
    })), n.d(t, "a", (function() {
        return r
    })), n.d(t, "d", (function() {
        return u
    })), n.d(t, "c", (function() {
        return l
    }));
    var a = n(11),
        s = {
            FRIENDS_TAB: 0,
            CLUBS_TAB: 1,
            CHATS_TAB: 2
        },
        r = {
            AMPLITUDE_SOURCE_NAV: "menu",
            DRILLS_NAV_EVENT: "Drills - Home",
            LESSONS_NAV_EVENT: "Lessons - Home",
            SOCIAL_VIEW_EVENT: "Social - ViewEvent",
            TACTICS_NAV_EVENT: "Tactics - Home",
            VIDEOS_NAV_EVENT: "Videos - Home",
            VISION_NAV_EVENT: "Vision - Home"
        },
        u = 27,
        l = {
            0: a.a.connectionOffline,
            1: a.a.connectionPoor,
            2: a.a.connectionOk,
            3: a.a.connectionGood,
            4: a.a.connectionExcellent
        }
}, function(e, t, n) {
    "use strict";
    var a = {
            GAME_ILLEGAL_MOVE: 100,
            RATING_MAX: 3500,
            RATING_MIN: 0,
            ACTIVE_DAY_CUTOFF: 365,
            TIME_WARNING_SECONDS: 28800,
            MAX_DAY_PER_MOVE: 14,
            TIME_MULTIPLIER: 10,
            DEFAULT_NAME: "Let's Play!",
            WELCOME_NAME: "Welcome to Chess.com!",
            MIN_CHEAT_POLICY_RATING: 2e3,
            MIN_SUSPICIOUS_PLAY_RATING: 2e3,
            MIN_SUSPICIOUS_PLAY_TOGGLE_PERC: 75,
            MIN_SUSPICIOUS_PLAY_PLY_COUNT: 40,
            MIN_PLY_COUNT_RATED: 6,
            SPAM_CHECK_GAMES_MIN_LIMIT: 5,
            SPAM_CHECK_NEW_PLAYERS_GAMES_MIN_LIMIT: 10,
            DEFAULT_FEN_SHORT: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq",
            DEFAULT_FEN: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
            ACCESS_LEVEL_SUPER_ADMIN: "super_admin",
            ACCESS_LEVEL_ADMIN: "admin",
            ACCESS_LEVEL_MEMBER: "member",
            ACTIVITY_TYPE_NEWS: "news",
            ACTIVITY_TYPE_EVENT: "event",
            ACTIVITY_TYPE_FORUM: "forum",
            ACTIVITY_TYPE_NOTES: "notes",
            POINT_VALUE: 1,
            LAST_ACTIVITY_DATE_EXPIRATION_IN_MINUTES: 10,
            MAX_PROBLEMS_PER_DAY_DEFAULT: 3,
            AVERAGE_TIME_PER_MOVE: 30,
            MIN_ATTEMPT_COUNT: 20,
            MIN_SCORE_TO_BE_QUEUED: 5,
            BEST_SCORE: 0,
            DEAD_SCORE: 10,
            MIN_RATING: 400,
            MAX_ATTEMPT_LOGGED_OUT: 10,
            USER_FEED_MAX_PAGES: 4,
            USER_FEED_ITEMS_FIRST_PAGE: 5,
            USER_FEED_ITEMS_PER_PAGE: 20,
            STD_PROP_LIST: 1,
            ARRAY_AS_PROPS: 2,
            DEFAULT_LOCALE: "en_US",
            DEFAULT_LANGUAGE_CODE: "en",
            DEFAULT_LANGUAGE_DIRECTION: "ltr",
            DEFAULT_MAX_YEAR_INCREASE: 5,
            CONTENT_ITEMS_PER_PAGE: 25,
            LEADERBOARD_ITEMS_PER_PAGE: 50,
            I18N_DEFAULT_LOCALE: "en_US"
        },
        s = n(2);
    n.d(t, "a", (function() {
        return r
    })), n.d(t, "b", (function() {
        return l
    }));
    var r = function daily(e) {
            return s.default.generate("web_daily_game", {
                id: e
            })
        },
        u = window.context && window.context.locale ? window.context.locale : a.I18N_DEFAULT_LOCALE,
        l = {
            home: s.default.generate("web_user_home"),
            live: s.default.generate("web_live"),
            loginAndGoRoute: function loginAndGoRoute(e) {
                return s.default.generate("web_security_login_and_go", {
                    redirectUrl: e
                })
            },
            logout: s.default.generate("web_security_logout"),
            membership: s.default.generate("web_membership", {
                c: "navbarsvelte"
            }),
            messages: s.default.generate("web_message_index"),
            playUrl: function playUrl(e) {
                return "chess.com".concat(s.default.generate("web_member_play", {
                    username: e
                }))
            },
            stats: s.default.generate("web_stats"),
            themes: s.default.generate("web_user_settings_themes"),
            registerRoute: function registerRoute(e) {
                return s.default.generate("web_security_register", {
                    redirectUrl: e
                })
            },
            settings: s.default.generate("web_user_settings_edit"),
            support: "https://support.chess.com/",
            topPlayerObserve: function topPlayerObserve(e) {
                return "".concat(s.default.generate("web_live"), "#follow=").concat(e)
            },
            tv: ["en_US", "en"].includes(u) ? s.default.generate("web_tv") : s.default.generate("i18n_web_tv", {
                _locale: u.substr(0, 2)
            })
        }
}, function(e, t, n) {
    "use strict";
    t.a = function isObjectLike(e) {
        return null != e && "object" == typeof e
    }
}, function(e, t, n) {
    "use strict";
    var a = n(30),
        s = Object.prototype,
        r = s.hasOwnProperty,
        u = s.toString,
        l = a.a ? a.a.toStringTag : void 0;
    var h = function getRawTag(e) {
            var t = r.call(e, l),
                n = e[l];
            try {
                e[l] = void 0;
                var a = !0
            } catch (h) {}
            var s = u.call(e);
            return a && (t ? e[l] = n : delete e[l]), s
        },
        _ = Object.prototype.toString;
    var f = function objectToString(e) {
            return _.call(e)
        },
        b = a.a ? a.a.toStringTag : void 0;
    t.a = function baseGetTag(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : b && b in Object(e) ? h(e) : f(e)
    }
}, function(e, t, n) {
    "use strict";
    t.a = function isObject(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function(e, t, n) {
    "use strict";
    var a = n(38).a.Symbol;
    t.a = a
}, function(e, t, n) {
    var a = n(37),
        s = n(46);
    e.exports = function _possibleConstructorReturn(e, t) {
        return !t || "object" !== a(t) && "function" != typeof t ? s(e) : t
    }
}, function(e, t) {
    function _getPrototypeOf(t) {
        return e.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, _getPrototypeOf(t)
    }
    e.exports = _getPrototypeOf
}, function(e, t, n) {
    var a = n(62);
    e.exports = function _inherits(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && a(e, t)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return Store
    }));
    var a = n(0);
    function Store(e, t) {
        this._handlers = {}, this._dependents = [], this._computed = Object(a.g)(), this._sortedComputedProperties = [], this._state = Object(a.e)({}, e), this._differs = t && t.immutable ? a.b : a.a
    }
    Object(a.e)(Store.prototype, {
        _add: function _add(e, t) {
            this._dependents.push({
                component: e,
                props: t
            })
        },
        _init: function _init(e) {
            for (var t = {}, n = 0; n < e.length; n += 1) {
                var a = e[n];
                t["$" + a] = this._state[a]
            }
            return t
        },
        _remove: function _remove(e) {
            for (var t = this._dependents.length; t--;)
                if (this._dependents[t].component === e)
                    return void this._dependents.splice(t, 1)
        },
        _set: function _set(e, t) {
            var n = this,
                s = this._state;
            this._state = Object(a.e)(Object(a.e)({}, s), e);
            for (var r = 0; r < this._sortedComputedProperties.length; r += 1)
                this._sortedComputedProperties[r].update(this._state, t);
            this.fire("state", {
                changed: t,
                previous: s,
                current: this._state
            }), this._dependents.filter((function(e) {
                for (var a = {}, s = !1, r = 0; r < e.props.length; r += 1) {
                    var u = e.props[r];
                    u in t && (a["$" + u] = n._state[u], s = !0)
                }
                if (s)
                    return e.component._stage(a), !0
            })).forEach((function(e) {
                e.component.set({})
            })), this.fire("update", {
                changed: t,
                previous: s,
                current: this._state
            })
        },
        _sortComputedProperties: function _sortComputedProperties() {
            var e,
                t = this._computed,
                n = this._sortedComputedProperties = [],
                s = Object(a.g)();
            function visit(a) {
                var r = t[a];
                r && (r.deps.forEach((function(t) {
                    if (t === e)
                        throw new Error("Cyclical dependency detected between ".concat(t, " <-> ").concat(a));
                    visit(t)
                })), s[a] || (s[a] = !0, n.push(r)))
            }
            for (var r in this._computed)
                visit(e = r)
        },
        compute: function compute(e, t, n) {
            var s,
                r = this,
                u = {
                    deps: t,
                    update: function update(a, u, l) {
                        var h = t.map((function(e) {
                            return e in u && (l = !0), a[e]
                        }));
                        if (l) {
                            var _ = n.apply(null, h);
                            r._differs(_, s) && (s = _, u[e] = !0, a[e] = s)
                        }
                    }
                };
            this._computed[e] = u, this._sortComputedProperties();
            var l = Object(a.e)({}, this._state),
                h = {};
            u.update(l, h, !0), this._set(l, h)
        },
        fire: a.q,
        get: a.s,
        on: a.w,
        set: function set(e) {
            var t = this._state,
                n = this._changed = {},
                a = !1;
            for (var s in e) {
                if (this._computed[s])
                    throw new Error("'".concat(s, "' is a read-only computed property"));
                this._differs(e[s], t[s]) && (n[s] = a = !0)
            }
            a && this._set(e, n)
        }
    })
}, function(e, t, n) {
    "use strict";
    var a = n(0);
    n(63);
    function Avatar_svelte(e) {
        Object(a.t)(this, e), this._state = Object(a.e)({}, e.data), this._intro = !0, this._fragment = function create_main_fragment(e, t) {
            var n,
                s,
                r,
                u,
                l;
            return {
                c: function c() {
                    n = Object(a.i)("span"), s = Object(a.i)("img"), r = Object(a.k)("\n\n  "), u = Object(a.i)("span"), s.alt = t.username, s.width = t.size, s.height = t.size, s.src = t.src, u.className = l = "status " + (t.online ? "online" : "") + " " + (t.live ? "live" : "") + " svelte-g0lln", n.className = "component svelte-g0lln", Object(a.F)(n, "width", t.size + "px")
                },
                m: function m(e, t) {
                    Object(a.u)(e, n, t), Object(a.d)(n, s), Object(a.d)(n, r), Object(a.d)(n, u)
                },
                p: function p(e, t) {
                    e.username && (s.alt = t.username), e.size && (s.width = t.size, s.height = t.size), e.src && (s.src = t.src), (e.online || e.live) && l !== (l = "status " + (t.online ? "online" : "") + " " + (t.live ? "live" : "") + " svelte-g0lln") && (u.className = l), e.size && Object(a.F)(n, "width", t.size + "px")
                },
                d: function d(e) {
                    e && Object(a.p)(n)
                }
            }
        }(0, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor))
    }
    Object(a.e)(Avatar_svelte.prototype, a.x), t.a = Avatar_svelte
}, function(e, t, n) {
    e.exports = n(53)(72)
}, function(e, t) {
    function _typeof2(e) {
        return (_typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function _typeof2(e) {
            return typeof e
        } : function _typeof2(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    function _typeof(t) {
        return "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? e.exports = _typeof = function _typeof(e) {
            return _typeof2(e)
        } : e.exports = _typeof = function _typeof(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e)
        }, _typeof(t)
    }
    e.exports = _typeof
}, function(e, t, n) {
    "use strict";
    var a = n(45),
        s = "object" == typeof self && self && self.Object === Object && self,
        r = a.a || s || Function("return this")();
    t.a = r
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    })), n.d(t, "e", (function() {
        return r
    })), n.d(t, "b", (function() {
        return h
    })), n.d(t, "c", (function() {
        return _
    })), n.d(t, "d", (function() {
        return f
    }));
    window.location.pathname, function getWindowTitle() {
        encodeURIComponent(window.document.title)
    }(), function getWindowLocation() {
        encodeURIComponent(window.location.href)
    }();
    window.chessBrowserChecker = {};
    var a = {
            chrome: "Chrome",
            edge: "edge",
            firefox: "Firefox",
            ie: "IE",
            safari: "Safari",
            waterfox: "Waterfox"
        },
        s = {
            chrome: 74,
            edge: 17,
            firefox: 60,
            ie: 12,
            safari: 12,
            waterfox: 56
        },
        r = function sendEmail(e, t) {
            window.location.href = "mailto:?".concat(e, "&").concat(t)
        },
        u = function version(e, t) {
            return t.appVersion.indexOf(e) > -1
        },
        l = function isEdge() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent;
            return null !== e.match(/Edge/)
        },
        h = function getBrowser() {
            var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (l(t)) {
                var s = t.indexOf("Edge/"),
                    r = parseInt(t.substring(s + 5, t.indexOf(".", s)), 10);
                return {
                    name: "Edge",
                    version: parseInt(r, 10)
                }
            }
            if (/trident/i.test(n[1]))
                return e = /\brv[ :]+(\d+)/g.exec(t) || [], {
                    name: "IE",
                    version: parseInt(e[1] || -1, 10)
                };
            if (n[1] === a.chrome && null != (e = t.match(/\bOPR\/(\d+)/)))
                return {
                    name: "Opera",
                    version: parseInt(e[1], 10)
                };
            if (n[1] === a.firefox) {
                var u = t.match(/(waterfox(?=\/))\/?\s*(\d+)/i) || [];
                if (u[1] === a.waterfox)
                    return {
                        name: u[1],
                        version: parseInt(u[2], 10)
                    }
            }
            return (n = n[2] ? [n[1], n[2]] : [window.navigator.appName, window.navigator.appVersion, "-?"])[0] === a.safari && null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]), "MSIE" === n[0] ? {
                name: a.ie,
                version: parseInt(n[1], 10)
            } : {
                name: n[0],
                version: parseInt(n[1], 10)
            }
        },
        _ = function getWindowsVersion() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator;
            return u("NT", e) ? u("Windows NT 5.1", e) || u("Windows NT 6.0", e) ? 6 : u("Windows NT 6.1", e) ? 7 : u("Windows NT 6.2", e) || u("Windows NT 6.3", e) ? 8 : 10 : -1
        },
        f = function isOldBrowser() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.navigator.userAgent,
                t = h(e);
            return null != t.name && 0 !== t.name.length && Object.keys(a).some((function(e) {
                    return t.name.toLowerCase() === a[e].toLowerCase() && t.version < s[e]
                }))
        }
}, , function(e, t, n) {
    "use strict";
    var a = window.context ? window.context.iterableKey : "",
        s = {
            ITERABLE_API_TRACK_URL: "https://api.iterable.com/api/events/track?apiKey=".concat(a),
            ITERABLE_API_UPDATE_URL: "https://api.iterable.com/api/users/update?apiKey=".concat(a)
        },
        r = n(21),
        u = n(22),
        l = n(8);
    n.d(t, "a", (function() {
        return b
    })), n.d(t, "b", (function() {
        return g
    }));
    var h = window.context && window.context.user,
        _ = h ? String(h.id) : "",
        f = h ? h.email : "",
        b = function track(e, t) {
            var n = {
                userId: _,
                eventName: e,
                createdAt: Date.now(),
                dataFields: t || {}
            };
            if (Object(r.a)(u.a.ITERABLE_TRACK_WITHOUT_EMAIL) || (n.email = f), !window.context || !window.context.iterableMuteApiCallsFeature)
                return l.default.post(s.ITERABLE_API_TRACK_URL, n)
        },
        g = function update(e) {
            var t = {
                userId: _,
                dataFields: e || {}
            };
            if (Object(r.a)(u.a.ITERABLE_TRACK_WITHOUT_EMAIL) || (t.email = f), !window.context || !window.context.iterableMuteApiCallsFeature)
                return l.default.post(s.ITERABLE_API_TRACK_URL, t)
        }
}, function(e, t, n) {
    var a = n(75),
        s = n(76),
        r = n(77);
    e.exports = function _slicedToArray(e, t) {
        return a(e) || s(e, t) || r()
    }
}, function(e, t, n) {
    "use strict";
    var a = n(60);
    t.a = a.a
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return l
    })), n.d(t, "b", (function() {
        return h
    }));
    var a = n(47),
        s = (n(2), n(13)),
        r = window.context,
        u = function isLoggedIn() {
            return !(!r || !r.user || Object(a.a)())
        },
        l = function getAdditionalUserInfo(e) {
            if (!u())
                return "diagramSettings" === e ? {} : null;
            var t = !1;
            switch (e) {
            case "cohort":
                t = r.user.cohort;
                break;
            case "flairCode":
                t = r.user.flairCode;
                break;
            case "getUserId":
                t = r.user.id;
                break;
            case "getUsername":
                t = r.user.username;
                break;
            case "getAvatarUrl":
                t = r.user.avatarUrl;
                break;
            case "getAvatarLargeUrl":
                t = r.user.avatarLargeUrl;
                break;
            case "getSettingsAvatarUrl":
                t = r.user.settingsAvatarUrl;
                break;
            case "getLastLoginDate":
                t = r.user.lastLoginDate;
                break;
            case "registerDate":
                t = r.user.registerDate;
                break;
            case "getBrowserTimezone":
                t = window.jstz.determine().name();
                break;
            case "getTimezone":
                t = r.user.timezone;
                break;
            case "getDiagramSettings":
                t = r.diagramSettings;
                break;
            case "language":
                t = r.i18n.locale;
                break;
            case "contentLanguage":
                t = r.i18n.contentLanguage;
                break;
            case "speaksEnglish":
                t = "en_US" === r.i18n.locale;
                break;
            case "eligibleFirstTrial":
                t = r.user.eligibleFirstTrial;
                break;
            case "fairPlayAgree":
                t = r.user.fairPlayAgree;
                break;
            case "getArchiveView":
                t = r.user.archiveView ? r.user.archiveView : "grid";
                break;
            case "homeContentType":
                t = "following";
                break;
            case "showAlertsOnHome":
                t = r.user.showAlertsOnHome;
                break;
            case "getMembershipLevel":
                t = r.user.membershipLevel;
                break;
            case "isClassicTheme":
                t = r.user.isClassicTheme;
                break;
            case "isContentHidden":
                t = r.user.isContentHidden;
                break;
            case "isDarkMode":
                t = r.user.isDarkMode;
                break;
            case "safeMode":
                t = r.user.safeMode;
                break;
            case "uuid":
                t = r.user.uuid;
                break;
            default:
                t = !1
            }
            return t
        },
        h = function getMembershipName(e) {
            return Object.keys(s.c).filter((function(t) {
                return s.c[t] === e || t === e
            }))[0]
        }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n
    }).call(this, n(54))
}, function(e, t) {
    e.exports = function _assertThisInitialized(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var a = n(2);
    t.a = function() {
        return -1 !== window.location.href.indexOf(a.default.generate("web_2fa_login"))
    }
}, function(e, t, n) {
    "use strict";
    var a = Array.isArray;
    t.a = a
}, function(e, t, n) {
    "use strict";
    var a = n(28),
        s = n(27);
    t.a = function isSymbol(e) {
        return "symbol" == typeof e || Object(s.a)(e) && "[object Symbol]" == Object(a.a)(e)
    }
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a
    }));
    var a = "ontouchstart" in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0 || /firefox/i.test(window.navigator.userAgent) && "TouchEvent" in window
}, function(e, t, n) {
    "use strict";
    var a = n(0),
        s = n(35);
    n(64);
    function create_if_block_1(e, t) {
        var n;
        function select_block_type(e) {
            return e.user && e.user.avatarUrl ? create_if_block_2 : create_else_block
        }
        var s = select_block_type(t),
            r = s(e, t);
        return {
            c: function c() {
                r.c(), n = Object(a.h)()
            },
            m: function m(e, t) {
                r.m(e, t), Object(a.u)(e, n, t)
            },
            p: function p(t, a) {
                s === (s = select_block_type(a)) && r ? r.p(t, a) : (r.d(1), (r = s(e, a)).c(), r.m(n.parentNode, n))
            },
            d: function d(e) {
                r.d(e), e && Object(a.p)(n)
            }
        }
    }
    function create_else_block(e, t) {
        var n;
        return {
            c: function c() {
                (n = Object(a.i)("span")).className = "chat-avatar-placeholder svelte-atyy5f", Object(a.F)(n, "height", t.size + "px"), Object(a.F)(n, "width", t.size + "px")
            },
            m: function m(e, t) {
                Object(a.u)(e, n, t)
            },
            p: function p(e, t) {
                e.size && (Object(a.F)(n, "height", t.size + "px"), Object(a.F)(n, "width", t.size + "px"))
            },
            d: function d(e) {
                e && Object(a.p)(n)
            }
        }
    }
    function create_if_block_2(e, t) {
        var n = {
                online: t.chat.isOnline,
                size: t.size,
                src: t.user.avatarUrl,
                username: t.user.username
            },
            a = new s.a({
                root: e.root,
                store: e.store,
                data: n
            });
        return {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.online = t.chat.isOnline), e.size && (n.size = t.size), e.user && (n.src = t.user.avatarUrl), e.user && (n.username = t.user.username), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function create_if_block(e, t) {
        var n,
            s;
        return {
            c: function c() {
                n = Object(a.i)("span"), (s = Object(a.i)("span")).className = "icon-font-chess users", n.className = "chat-avatar-group svelte-atyy5f", Object(a.F)(n, "height", t.size + "px"), Object(a.F)(n, "line-height", t.size + "px"), Object(a.F)(n, "width", t.size + "px")
            },
            m: function m(e, t) {
                Object(a.u)(e, n, t), Object(a.d)(n, s)
            },
            p: function p(e, t) {
                e.size && (Object(a.F)(n, "height", t.size + "px"), Object(a.F)(n, "line-height", t.size + "px"), Object(a.F)(n, "width", t.size + "px"))
            },
            d: function d(e) {
                e && Object(a.p)(n)
            }
        }
    }
    function Chat_avatar_svelte(e) {
        Object(a.t)(this, e), this._state = Object(a.e)(this.store._init(["users"]), e.data), this.store._add(this, ["users"]), this._recompute({
            avatarSize: 1,
            $users: 1,
            chat: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [a.z], this._fragment = function create_main_fragment(e, t) {
            var n,
                s,
                r = t.chat.isDirect && create_if_block_1(e, t),
                u = t.chat.isGroup && create_if_block(e, t);
            return {
                c: function c() {
                    r && r.c(), n = Object(a.k)("\n\n"), u && u.c(), s = Object(a.h)()
                },
                m: function m(e, t) {
                    r && r.m(e, t), Object(a.u)(e, n, t), u && u.m(e, t), Object(a.u)(e, s, t)
                },
                p: function p(t, a) {
                    a.chat.isDirect ? r ? r.p(t, a) : ((r = create_if_block_1(e, a)).c(), r.m(n.parentNode, n)) : r && (r.d(1), r = null), a.chat.isGroup ? u ? u.p(t, a) : ((u = create_if_block(e, a)).c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null)
                },
                d: function d(e) {
                    r && r.d(e), e && Object(a.p)(n), u && u.d(e), e && Object(a.p)(s)
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(a.r)(this))
    }
    Object(a.e)(Chat_avatar_svelte.prototype, a.x), Chat_avatar_svelte.prototype._recompute = function _recompute(e, t) {
        e.avatarSize && this._differs(t.size, t.size = function size(e) {
            return e.avatarSize || 30
        }(t)) && (e.size = !0), (e.$users || e.chat) && this._differs(t.user, t.user = function user(e) {
            return e.$users[e.chat.userId]
        }(t)) && (e.user = !0)
    }, t.a = Chat_avatar_svelte
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(45),
            s = "object" == typeof exports && exports && !exports.nodeType && exports,
            r = s && "object" == typeof e && e && !e.nodeType && e,
            u = r && r.exports === s && a.a.process,
            l = function() {
                try {
                    var e = r && r.require && r.require("util").types;
                    return e || u && u.binding && u.binding("util")
                } catch (t) {}
            }();
        t.a = l
    }).call(this, n(56)(e))
}, function(e, t) {
    e.exports = amplitudeDLL
}, function(e, t, n) {
    e.exports = n(53)(6)
}, , function(e, t) {
    e.exports = function(e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0,
                get: function() {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0,
                get: function() {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, , function(e, t, n) {
    "use strict";
    (function(e) {
        var a = n(38),
            s = n(59),
            r = "object" == typeof exports && exports && !exports.nodeType && exports,
            u = r && "object" == typeof e && e && !e.nodeType && e,
            l = u && u.exports === r ? a.a.Buffer : void 0,
            h = (l ? l.isBuffer : void 0) || s.a;
        t.a = h
    }).call(this, n(56)(e))
}, function(e, t, n) {
    "use strict";
    t.a = function stubFalse() {
        return !1
    }
}, function(e, t, n) {
    "use strict";
    var a = n(29),
        s = n(38),
        lodash_es_now = function() {
            return s.a.Date.now()
        },
        r = n(49),
        u = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        h = /^0b[01]+$/i,
        _ = /^0o[0-7]+$/i,
        f = parseInt;
    var b = function toNumber(e) {
            if ("number" == typeof e)
                return e;
            if (Object(r.a)(e))
                return NaN;
            if (Object(a.a)(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = Object(a.a)(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = e.replace(u, "");
            var n = h.test(e);
            return n || _.test(e) ? f(e.slice(2), n ? 2 : 8) : l.test(e) ? NaN : +e
        },
        g = Math.max,
        v = Math.min;
    t.a = function debounce(e, t, n) {
        var s,
            r,
            u,
            l,
            h,
            _,
            f = 0,
            O = !1,
            j = !1,
            E = !0;
        if ("function" != typeof e)
            throw new TypeError("Expected a function");
        function invokeFunc(t) {
            var n = s,
                a = r;
            return s = r = void 0, f = t, l = e.apply(a, n)
        }
        function leadingEdge(e) {
            return f = e, h = setTimeout(timerExpired, t), O ? invokeFunc(e) : l
        }
        function shouldInvoke(e) {
            var n = e - _;
            return void 0 === _ || n >= t || n < 0 || j && e - f >= u
        }
        function timerExpired() {
            var e = lodash_es_now();
            if (shouldInvoke(e))
                return trailingEdge(e);
            h = setTimeout(timerExpired, function remainingWait(e) {
                var n = t - (e - _);
                return j ? v(n, u - (e - f)) : n
            }(e))
        }
        function trailingEdge(e) {
            return h = void 0, E && s ? invokeFunc(e) : (s = r = void 0, l)
        }
        function debounced() {
            var e = lodash_es_now(),
                n = shouldInvoke(e);
            if (s = arguments, r = this, _ = e, n) {
                if (void 0 === h)
                    return leadingEdge(_);
                if (j)
                    return clearTimeout(h), h = setTimeout(timerExpired, t), invokeFunc(_)
            }
            return void 0 === h && (h = setTimeout(timerExpired, t)), l
        }
        return t = b(t) || 0, Object(a.a)(n) && (O = !!n.leading, u = (j = "maxWait" in n) ? g(b(n.maxWait) || 0, t) : u, E = "trailing" in n ? !!n.trailing : E), debounced.cancel = function cancel() {
            void 0 !== h && clearTimeout(h), f = 0, s = _ = r = h = void 0
        }, debounced.flush = function flush() {
            return void 0 === h ? l : trailingEdge(lodash_es_now())
        }, debounced
    }
}, function(e, t, n) {
    "use strict";
    var a = n(85)();
    e.exports = function(e) {
        return e !== a && null !== e
    }
}, function(e, t) {
    function _setPrototypeOf(t, n) {
        return e.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(e, t) {
            return e.__proto__ = t, e
        }, _setPrototypeOf(t, n)
    }
    e.exports = _setPrototypeOf
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "undefined" != typeof window ? window : void 0 !== e ? e : "undefined" != typeof self ? self : {};
        t.a = n
    }).call(this, n(54))
}, , function(e, t, n) {
    "use strict";
    var a,
        s,
        r,
        u,
        l,
        h,
        _,
        f = n(78),
        b = n(92),
        g = Function.prototype.apply,
        v = Function.prototype.call,
        O = Object.create,
        j = Object.defineProperty,
        E = Object.defineProperties,
        y = Object.prototype.hasOwnProperty,
        C = {
            configurable: !0,
            enumerable: !1,
            writable: !0
        };
    s = function(e, t) {
        var n,
            s;
        return b(t), s = this, a.call(this, e, n = function() {
            r.call(s, e, n), g.call(t, this, arguments)
        }), n.__eeOnceListener__ = t, this
    }, l = {
        on: a = function(e, t) {
            var n;
            return b(t), y.call(this, "__ee__") ? n = this.__ee__ : (n = C.value = O(null), j(this, "__ee__", C), C.value = null), n[e] ? "object" == typeof n[e] ? n[e].push(t) : n[e] = [n[e], t] : n[e] = t, this
        },
        once: s,
        off: r = function(e, t) {
            var n,
                a,
                s,
                r;
            if (b(t), !y.call(this, "__ee__"))
                return this;
            if (!(n = this.__ee__)[e])
                return this;
            if ("object" == typeof (a = n[e]))
                for (r = 0; s = a[r]; ++r)
                    s !== t && s.__eeOnceListener__ !== t || (2 === a.length ? n[e] = a[r ? 0 : 1] : a.splice(r, 1));
            else
                a !== t && a.__eeOnceListener__ !== t || delete n[e];
            return this
        },
        emit: u = function(e) {
            var t,
                n,
                a,
                s,
                r;
            if (y.call(this, "__ee__") && (s = this.__ee__[e]))
                if ("object" == typeof s) {
                    for (n = arguments.length, r = new Array(n - 1), t = 1; t < n; ++t)
                        r[t - 1] = arguments[t];
                    for (s = s.slice(), t = 0; a = s[t]; ++t)
                        g.call(a, this, r)
                } else
                    switch (arguments.length) {
                    case 1:
                        v.call(s, this);
                        break;
                    case 2:
                        v.call(s, this, arguments[1]);
                        break;
                    case 3:
                        v.call(s, this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (n = arguments.length, r = new Array(n - 1), t = 1; t < n; ++t)
                            r[t - 1] = arguments[t];
                        g.call(s, this, r)
                    }
        }
    }, h = {
        on: f(a),
        once: f(s),
        off: f(r),
        emit: f(u)
    }, _ = E({}, h), e.exports = t = function(e) {
        return null == e ? O(_) : E(Object(e), h)
    }, t.methods = l
}, , , , , , , function(e, t, n) {
    e.exports = n(166)
}, function(e, t) {
    e.exports = function _arrayWithHoles(e) {
        if (Array.isArray(e))
            return e
    }
}, function(e, t) {
    e.exports = function _iterableToArrayLimit(e, t) {
        var n = [],
            a = !0,
            s = !1,
            r = void 0;
        try {
            for (var u, l = e[Symbol.iterator](); !(a = (u = l.next()).done) && (n.push(u.value), !t || n.length !== t); a = !0)
                ;
        } catch (h) {
            s = !0, r = h
        } finally {
            try {
                a || null == l.return || l.return()
            } finally {
                if (s)
                    throw r
            }
        }
        return n
    }
}, function(e, t) {
    e.exports = function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(e, t, n) {
    "use strict";
    var a = n(79),
        s = n(87),
        r = n(88),
        u = n(89);
    (e.exports = function(e, t) {
        var n,
            r,
            l,
            h,
            _;
        return arguments.length < 2 || "string" != typeof e ? (h = t, t = e, e = null) : h = arguments[2], null == e ? (n = l = !0, r = !1) : (n = u.call(e, "c"), r = u.call(e, "e"), l = u.call(e, "w")), _ = {
            value: t,
            configurable: n,
            enumerable: r,
            writable: l
        }, h ? a(s(h), _) : _
    }).gs = function(e, t, n) {
        var l,
            h,
            _,
            f;
        return "string" != typeof e ? (_ = n, n = t, t = e, e = null) : _ = arguments[3], null == t ? t = void 0 : r(t) ? null == n ? n = void 0 : r(n) || (_ = n, n = void 0) : (_ = t, t = n = void 0), null == e ? (l = !0, h = !1) : (l = u.call(e, "c"), h = u.call(e, "e")), f = {
            get: t,
            set: n,
            configurable: l,
            enumerable: h
        }, _ ? a(s(_), f) : f
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(80)() ? Object.assign : n(81)
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        var e,
            t = Object.assign;
        return "function" == typeof t && (t(e = {
                foo: "raz"
            }, {
                bar: "dwa"
            }, {
                trzy: "trzy"
            }), e.foo + e.bar + e.trzy === "razdwatrzy")
    }
}, function(e, t, n) {
    "use strict";
    var a = n(82),
        s = n(86),
        r = Math.max;
    e.exports = function(e, t) {
        var n,
            u,
            l,
            h = r(arguments.length, 2);
        for (e = Object(s(e)), l = function(a) {
            try {
                e[a] = t[a]
            } catch (s) {
                n || (n = s)
            }
        }, u = 1; u < h; ++u)
            t = arguments[u], a(t).forEach(l);
        if (void 0 !== n)
            throw n;
        return e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(83)() ? Object.keys : n(84)
}, function(e, t, n) {
    "use strict";
    e.exports = function() {
        try {
            return Object.keys("primitive"), !0
        } catch (e) {
            return !1
        }
    }
}, function(e, t, n) {
    "use strict";
    var a = n(61),
        s = Object.keys;
    e.exports = function(e) {
        return s(a(e) ? Object(e) : e)
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function() {}
}, function(e, t, n) {
    "use strict";
    var a = n(61);
    e.exports = function(e) {
        if (!a(e))
            throw new TypeError("Cannot use null or undefined");
        return e
    }
}, function(e, t, n) {
    "use strict";
    var a = n(61),
        s = Array.prototype.forEach,
        r = Object.create,
        process = function(e, t) {
            var n;
            for (n in e)
                t[n] = e[n]
        };
    e.exports = function(e) {
        var t = r(null);
        return s.call(arguments, (function(e) {
            a(e) && process(Object(e), t)
        })), t
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return "function" == typeof e
    }
}, function(e, t, n) {
    "use strict";
    e.exports = n(90)() ? String.prototype.contains : n(91)
}, function(e, t, n) {
    "use strict";
    var a = "razdwatrzy";
    e.exports = function() {
        return "function" == typeof a.contains && (!0 === a.contains("dwa") && !1 === a.contains("foo"))
    }
}, function(e, t, n) {
    "use strict";
    var a = String.prototype.indexOf;
    e.exports = function(e) {
        return a.call(this, e, arguments[1]) > -1
    }
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        if ("function" != typeof e)
            throw new TypeError(e + " is not a function");
        return e
    }
}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, function(e, t, n) {}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    var a = n(42),
        s = n.n(a);
    var r = {
            headers: {
                accept: "application/json"
            },
            withCredentials: !0
        },
        u = n(8);
    function getRequest(e) {
        var t = e.url,
            n = e.payload,
            a = void 0 === n ? {} : n,
            s = e.needHeaders,
            l = void 0 === s || s,
            h = Object.assign({
                data: {},
                params: a
            }, l ? r : {});
        return u.default.get(t, h).then((function(e) {
            return e.data
        }))
    }
    function postRequest(e) {
        var t = e.url,
            n = e.payload,
            a = void 0 === n ? {} : n;
        return u.default.post(t, a, r).then((function(e) {
            return e.data
        }))
    }
    function putRequest(e) {
        var t = e.url,
            n = e.payload,
            a = Object.assign({
                data: {}
            }, r);
        return u.default.put(t, n, a).then((function(e) {
            return e.data
        }))
    }
    var l = n(3),
        h = n(2),
        _ = self,
        f = _.PubSub,
        b = "dev" === _.context.environment;
    function wrapUrl(e) {
        var t = f.options.url.chat,
            n = "".concat(t).concat(e);
        if (b) {
            var a = e.includes("?") ? "&" : "?";
            n += "".concat(a, "uid=").concat(l.j)
        }
        return n
    }
    var g,
        v,
        O = function answerToChatRequest(e, t) {
            return wrapUrl("/".concat(t, "/").concat(e, "/confirmation"))
        },
        j = function changeMessageVisibility(e, t) {
            return wrapUrl("/club/".concat(e, "/messages/").concat(t))
        },
        E = function clubChatModeratorActions(e, t) {
            return wrapUrl("/club/".concat(e, "/user/").concat(t))
        },
        y = function createDirectChat() {
            return wrapUrl("/direct")
        },
        C = function createGroupChat() {
            return wrapUrl("/group")
        },
        I = function deactivateChat(e, t) {
            return wrapUrl("/".concat(t, "/").concat(e, "/deactivate"))
        },
        w = function getChatUsers(e, t) {
            return wrapUrl("/".concat(t, "/").concat(e, "/participants"))
        },
        k = function getUsersData() {
            return h.default.generate("web_user_callback_id_to_user_data")
        },
        T = function getUsersOnlineStatus() {
            var e = f.options.url.presence;
            return "".concat(e, "/users")
        },
        S = function getChatData(e) {
            return wrapUrl("/direct/".concat(e))
        },
        A = function getChatsList() {
            return wrapUrl("/users/".concat(l.j))
        },
        M = function loadMessages(e, t) {
            return wrapUrl("/".concat(t, "/").concat(e, "/messages"))
        },
        N = function markChatAsRead(e, t) {
            return wrapUrl("/users/".concat(l.j, "/chats/").concat(t, "/").concat(e))
        },
        R = function postMessage(e, t, n) {
            return wrapUrl("/".concat(t, "/").concat(e, "/messages?request_id=").concat(n))
        },
        P = function usernameSearch(e) {
            return h.default.generate("web_user_callback_username_search", {
                avatarSize: 30,
                query: e
            })
        };
    function convertClubMessageToMessage(e) {
        return {
            author_id: e.authorId,
            body: e.body,
            chat_id: e.chatId,
            created_at: e.createdAt,
            id: e.id,
            hidden: e.hidden,
            request_id: e.requestId,
            updated_at: e.updatedAt
        }
    }
    !function(e) {
        !function(e) {
            e.ERROR = "error", e.WARNING = "warning"
        }(e.ServiceMessageType || (e.ServiceMessageType = {})), function(e) {
            e.ACCEPTED = "accepted", e.PENDING = "pending", e.REJECTED = "rejected", e.REJECTED_EXPIRED = "rejected_expired"
        }(e.Status || (e.Status = {})), function(e) {
            e.CLUB = "club", e.DIRECT = "direct", e.GROUP = "group"
        }(e.Type || (e.Type = {}))
    }(g || (g = {})), function(e) {
        !function(e) {
            e.ACTIVATED = "activate", e.CLUB_MESSAGE = "club_message", e.CLUB_MESSAGES = "club_messages", e.CREATED = "create", e.DELETED = "deleted", e.JOINED = "joined", e.LEFT = "left", e.MUTED = "mute", e.PARTICIPANT = "participant", e.UPDATE = "update", e.UPDATED = "updated", e.WARNED = "warn"
        }(e.MessageTypes || (e.MessageTypes = {}))
    }(v || (v = {}));
    var D = {};
    var U = {
        answerToChatRequest: function answerToChatRequest(e) {
            var t = e.chatId,
                n = e.chatType,
                a = e.status;
            return putRequest({
                url: O(t, n),
                payload: {
                    status: a
                }
            })
        },
        changeMessageVisibility: function changeMessageVisibility(e) {
            var t = e.chatId,
                n = e.messageId,
                a = e.isHidden;
            return putRequest({
                url: j(t, n),
                payload: {
                    chatId: t,
                    id: n,
                    hidden: a
                }
            })
        },
        createDirectChat: function createDirectChat(e, t) {
            return postRequest({
                url: y(),
                payload: {
                    content: t,
                    users: [l.j, e]
                }
            }).then((function(e) {
                return e.data
            }))
        },
        createGroupChat: function createGroupChat(e, t) {
            return postRequest({
                url: C(),
                payload: {
                    content: t,
                    type: g.Type.GROUP,
                    users: e
                }
            }).then((function(e) {
                return e.data
            }))
        },
        deactivateChat: function deactivate_chat_deactivateChat(e, t) {
            return postRequest({
                url: I(e, t),
                payload: {}
            })
        },
        getChatData: function getChatData(e) {
            return getRequest({
                url: S(e)
            })
        },
        getChatMessages: function getChatMessages(e) {
            var t = e.chatId,
                n = e.chatType,
                a = e.before,
                s = M(t, n),
                r = {
                    limit: l.e.MESSAGES_PER_REQUEST
                };
            return a && (r.before = a), getRequest({
                url: s,
                payload: r
            }).then((function(e) {
                return "metadata" in e ? function convertResponse(e) {
                    var t = e.data;
                    return {
                        isModerator: t.mod,
                        isMuted: t.muted,
                        messages: t.messages.map(convertClubMessageToMessage)
                    }
                }(e) : e
            }))
        },
        getChatsList: function get_chats_list_getChatsList(e) {
            var t = A(),
                n = {
                    with_counters: !0
                };
            return e && (n.with_inactive = !0), getRequest({
                url: t,
                payload: n
            })
        },
        getChatUsers: function getChatUsers(e) {
            var t = e.chatId,
                n = e.chatType,
                a = void 0 === n ? g.Type.CLUB : n;
            return getRequest({
                url: w(t, a)
            })
        },
        getUsersData: function get_users_data_getUsersData(e) {
            return getRequest({
                url: k(),
                payload: {
                    uuids: e
                },
                needHeaders: !1
            })
        },
        getUsersOnlineStatus: function getUsersOnlineStatus(e) {
            return getRequest({
                url: T(),
                payload: {
                    ids: e.slice(0, l.e.USERS_TRACK_STATUS_LIMIT).join(",")
                }
            })
        },
        markChatAsRead: function mark_chat_as_readed_markChatAsRead(e) {
            var t = e.chatId,
                n = e.chatType,
                a = e.lastReadedDate;
            return putRequest({
                url: N(t, n),
                payload: {
                    read_position: a
                }
            })
        },
        performModeratorAction: function performModeratorAction(e) {
            var t = e.action,
                n = e.chatId,
                a = e.duration,
                s = e.message,
                r = e.userId,
                u = E(n, r),
                l = {
                    action: t
                };
            return a && (l.duration = a), s && (l.content = s), postRequest({
                url: u,
                payload: l
            })
        },
        postMessage: function postMessage(e) {
            var t = e.chatId,
                n = e.chatType,
                a = e.message,
                s = e.requestId,
                r = {
                    content: a
                },
                u = D[t],
                l = R(t, n, s);
            return u && (r.prev_request_id = u), D[t] = s, postRequest({
                url: l,
                payload: r
            })
        },
        searchUsers: function searchUsers(e) {
            return getRequest({
                url: P(e)
            })
        }
    };
    var L = n(12),
        x = n.n(L);
    var H = n(15),
        F = n.n(H),
        G = n(16),
        z = n.n(G),
        B = [{
            name: "",
            icons: [{
                name: "happy",
                code: ":)"
            }, {
                name: "sad",
                code: ":("
            }, {
                name: "angry",
                code: ":C"
            }, {
                name: "ohno"
            }, {
                name: "worry"
            }, {
                name: "wink",
                code: ";)"
            }, {
                name: "tears",
                code: ":.("
            }, {
                name: "cry",
                code: ":_("
            }, {
                name: "delicious"
            }, {
                name: "meh",
                code: ":/"
            }, {
                name: "grin",
                code: ":D"
            }, {
                name: "eek"
            }, {
                name: "grimace"
            }, {
                name: "evil",
                code: ":V"
            }, {
                name: "nervous"
            }, {
                name: "rage",
                code: ":[]"
            }, {
                name: "blush"
            }, {
                name: "shock"
            }, {
                name: "dead"
            }, {
                name: "zzz"
            }, {
                name: "tongue"
            }, {
                name: "laugh",
                code: ":P"
            }, {
                name: "river"
            }, {
                name: "horror"
            }, {
                name: "peaceful"
            }, {
                name: "love"
            }, {
                name: "smart"
            }, {
                name: "cool"
            }, {
                name: "mustache"
            }, {
                name: "ghost"
            }, {
                name: "scream"
            }, {
                name: "devil"
            }, {
                name: "sick"
            }, {
                name: "kiss"
            }, {
                name: "clap"
            }, {
                name: "tup"
            }, {
                name: "tdown"
            }, {
                name: "fist"
            }, {
                name: "raised_hands"
            }, {
                name: "strong"
            }, {
                name: "wave",
                isPremium: !0
            }, {
                name: "troll",
                isPremium: !0
            }, {
                name: "rainbow",
                isPremium: !0
            }, {
                name: "unicorn",
                isPremium: !0
            }, {
                name: "coffee",
                isPremium: !0
            }, {
                name: "donut",
                isPremium: !0
            }, {
                name: "earth",
                isPremium: !0
            }, {
                name: "panda",
                isPremium: !0
            }, {
                name: "skull",
                isPremium: !0
            }, {
                name: "bitcoin",
                isPremium: !0
            }, {
                name: "donkey",
                isPremium: !0
            }]
        }, {
            name: "chess",
            icons: [{
                name: "play"
            }, {
                name: "draw"
            }, {
                name: "resign"
            }, {
                name: "board"
            }, {
                name: "wp"
            }, {
                name: "wn"
            }, {
                name: "wb"
            }, {
                name: "wr"
            }, {
                name: "wq"
            }, {
                name: "wk"
            }, {
                name: "medal"
            }, {
                name: "mate"
            }, {
                name: "cmate"
            }, {
                name: "clock"
            }, {
                name: "bp"
            }, {
                name: "bn"
            }, {
                name: "bb"
            }, {
                name: "br"
            }, {
                name: "bq"
            }, {
                name: "bk"
            }, {
                name: "bullet"
            }, {
                name: "blitz"
            }, {
                name: "live"
            }, {
                name: "castle"
            }, {
                name: "skewer"
            }, {
                name: "fork"
            }, {
                name: "pin"
            }, {
                name: "fish"
            }, {
                name: "trophy"
            }, {
                name: "battle"
            }, {
                name: "puzzle_rush"
            }, {
                name: "bughouse"
            }, {
                name: "daily"
            }, {
                name: "watch"
            }, {
                name: "four_player"
            }, {
                name: "chesskid"
            }, {
                name: "friend"
            }, {
                name: "club"
            }, {
                name: "leaderboard"
            }, {
                name: "computer"
            }, {
                name: "settings"
            }, {
                name: "messages"
            }, {
                name: "arena_kings"
            }, {
                name: "speed_chess_championship"
            }, {
                name: "titled_tuesday"
            }, {
                name: "diamond"
            }, {
                name: "platinum"
            }, {
                name: "gold"
            }, {
                name: "tilt"
            }, {
                name: "king_of_the_hill"
            }, {
                name: "3_check"
            }, {
                name: "crazyhouse"
            }, {
                name: "chess_960"
            }, {
                name: "brilliant"
            }, {
                name: "blunder"
            }, {
                name: "1_0"
            }, {
                name: "0_1"
            }, {
                name: "1_2"
            }, {
                name: "hype"
            }, {
                name: "good_game"
            }]
        }, {
            name: "holiday",
            icons: [{
                name: "birthday_cake",
                isPremium: !0
            }, {
                name: "party_hat",
                isPremium: !0
            }, {
                name: "cheers",
                isPremium: !0
            }, {
                name: "heart_bear",
                isPremium: !0
            }, {
                name: "heart_gift",
                isPremium: !0
            }, {
                name: "heart_letter",
                isPremium: !0
            }, {
                name: "clover",
                isPremium: !0
            }, {
                name: "coins_bag",
                isPremium: !0
            }, {
                name: "palm_tree",
                isPremium: !0
            }, {
                name: "fireworks",
                isPremium: !0
            }, {
                name: "halloween_ghost",
                isPremium: !0
            }, {
                name: "halloween",
                isPremium: !0
            }, {
                name: "rip",
                isPremium: !0
            }, {
                name: "maple_leaf",
                isPremium: !0
            }, {
                name: "turkey",
                isPremium: !0
            }, {
                name: "present",
                isPremium: !0
            }, {
                name: "hanukkah",
                isPremium: !0
            }, {
                name: "christmas_tree",
                isPremium: !0
            }, {
                name: "santa",
                isPremium: !0
            }, {
                name: "christmas_wrench",
                isPremium: !0
            }]
        }, {
            name: "hosts",
            icons: [{
                name: "danny_rensch",
                isPremium: !0
            }, {
                name: "danny_rensch_surprised",
                isPremium: !0
            }, {
                name: "robert_hess",
                isPremium: !0
            }, {
                name: "luison",
                isPremium: !0
            }, {
                name: "hikaru_nakamura",
                isPremium: !0
            }, {
                name: "anna_rudolf",
                isPremium: !0
            }, {
                name: "alexandra_botez",
                isPremium: !0
            }, {
                name: "levy_rozman",
                isPremium: !0
            }, {
                name: "eric_hansen",
                isPremium: !0
            }, {
                name: "aman_hambleton",
                isPremium: !0
            }]
        }, {
            name: "engines",
            icons: [{
                name: "ccc",
                isPremium: !0
            }, {
                name: "stockfish",
                isPremium: !0
            }, {
                name: "lc0",
                isPremium: !0
            }, {
                name: "komodo",
                isPremium: !0
            }, {
                name: "houdini",
                isPremium: !0
            }, {
                name: "ethereal",
                isPremium: !0
            }, {
                name: "fire",
                isPremium: !0
            }, {
                name: "leelenstein",
                isPremium: !0
            }, {
                name: "allie",
                isPremium: !0
            }, {
                name: "boom",
                isPremium: !0
            }]
        }, {
            name: "pro chess league",
            icons: [{
                name: "pcl",
                isPremium: !0
            }, {
                name: "argentina_krakens",
                isPremium: !0
            }, {
                name: "armenia_eagles",
                isPremium: !0
            }, {
                name: "brazil_capybaras",
                isPremium: !0
            }, {
                name: "california_unicorns",
                isPremium: !0
            }, {
                name: "canada_chessbrahs",
                isPremium: !0
            }, {
                name: "chicago_wind",
                isPremium: !0
            }, {
                name: "china_pandas",
                isPremium: !0
            }, {
                name: "croatia_bulldogs",
                isPremium: !0
            }, {
                name: "france_roosters",
                isPremium: !0
            }, {
                name: "germany_bears",
                isPremium: !0
            }, {
                name: "hungary_hunters",
                isPremium: !0
            }, {
                name: "india_yogis",
                isPremium: !0
            }, {
                name: "israel_counsellors",
                isPremium: !0
            }, {
                name: "italy_gladiators",
                isPremium: !0
            }, {
                name: "netherlands_mosquitoes",
                isPremium: !0
            }, {
                name: "new_york_marshalls",
                isPremium: !0
            }, {
                name: "norway_gnomes",
                isPremium: !0
            }, {
                name: "poland_hussars",
                isPremium: !0
            }, {
                name: "russia_wizards",
                isPremium: !0
            }, {
                name: "saint_louis_arch_bishops",
                isPremium: !0
            }, {
                name: "spain_raptors",
                isPremium: !0
            }, {
                name: "sweden_wasabis",
                isPremium: !0
            }, {
                name: "turkey_knights",
                isPremium: !0
            }, {
                name: "uk_lions",
                isPremium: !0
            }]
        }];
    var W = /(:[\w\)\(\;\.\_\]\[]+)/g,
        q = /\S/;
    function shouldEnlargeEmoticons() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.match(W);
        return t && t.length <= 5 && !q.test(e.replace(W, ""))
    }
    var V = n(4),
        $ = new (function() {
            function Emoticons() {
                var e = this;
                F()(this, Emoticons), this.emoticonsByCode = {}, B.forEach((function(t) {
                    t.icons.forEach((function(t) {
                        t.code = t.code || ":".concat(t.name), e.emoticonsByCode[t.code] = t
                    }))
                })), this.emoticonsMatcherRegEx = function createEmoticonMatcherRegEx(e) {
                    var t = e.map((function(e) {
                        return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$|]/g, "\\$&")
                    }));
                    t = t.join("|");
                    var n = "(?:\\s|^)(".concat(t, ")(?=\\s|$)");
                    return new RegExp(n, "g")
                }(Object.keys(this.emoticonsByCode))
            }
            return z()(Emoticons, [{
                key: "getByCode",
                value: function getByCode(e) {
                    return this.emoticonsByCode[e]
                }
            }, {
                key: "getList",
                value: function getList(e) {
                    var t = [];
                    return B.forEach((function(n) {
                        var a = {
                            disabledIcons: [],
                            enabledIcons: [],
                            name: n.name
                        };
                        n.icons.forEach((function(t) {
                            t.isPremium && !e ? a.disabledIcons.push(t) : a.enabledIcons.push(t)
                        })), t.push(a)
                    })), t
                }
            }, {
                key: "getFormattedInput",
                value: function getFormattedInput(e) {
                    return "".concat(e, " ")
                }
            }, {
                key: "emoticonify",
                value: function emoticonify(e, t, n) {
                    var a = this,
                        s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        r = shouldEnlargeEmoticons(e) ? "chat-emoticon-2x" : "chat-emoticon",
                        u = e.replace(this.emoticonsMatcherRegEx, (function(e, u) {
                            var l = a.emoticonsByCode[u],
                                h = l.isPremium && !t ? V.default.trans("Upgrade to get all emojis!") : l.description || l.code;
                            return n || !l.isPremium ? '<span class="'.concat(s).concat(s ? " " : "").concat(r, " ").concat(r, '-$1" title="$2"></span>').replace("$1", l.name).replace("$2", h) : u
                        }));
                    return u
                }
            }]), Emoticons
        }());
    var K = function basePropertyOf(e) {
            return function(t) {
                return null == e ? void 0 : e[t]
            }
        }({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        }),
        Y = n(30);
    var Q = function arrayMap(e, t) {
            for (var n = -1, a = null == e ? 0 : e.length, s = Array(a); ++n < a;)
                s[n] = t(e[n], n, e);
            return s
        },
        J = n(48),
        X = n(49),
        Z = Y.a ? Y.a.prototype : void 0,
        ee = Z ? Z.toString : void 0;
    var te = function baseToString(e) {
        if ("string" == typeof e)
            return e;
        if (Object(J.a)(e))
            return Q(e, baseToString) + "";
        if (Object(X.a)(e))
            return ee ? ee.call(e) : "";
        var t = e + "";
        return "0" == t && 1 / e == -1 / 0 ? "-0" : t
    };
    var ne = function toString_toString(e) {
            return null == e ? "" : te(e)
        },
        ae = /[&<>"']/g,
        se = RegExp(ae.source);
    var re = function escape_escape(e) {
            return (e = ne(e)) && se.test(e) ? e.replace(ae, K) : e
        },
        ce = n(67),
        ie = n.n(ce),
        oe = n(37),
        ue = n.n(oe);
    function isNull(e) {
        return null === e
    }
    function isUndefined(e) {
        return void 0 === e
    }
    function isObject(e) {
        return !isNull(e) && "object" === ue()(e)
    }
    var le = {
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
        },
        de = function remove(e, t) {
            var n = le.isFunction(t) ? e.findIndex(t) : e.indexOf(t);
            -1 !== n && e.splice(n, 1)
        },
        he = n(65),
        _e = {};
    ["setTimeout", "setInterval", "clearTimeout", "clearInterval"].forEach((function(e) {
        _e[e] = he.a[e].bind(he.a)
    }));
    var fe = _e,
        me = {
            createBoundObject: function createBoundObject(e) {
                return Object.keys(e).forEach((function(t) {
                    le.isFunction(e[t]) && (e[t] = e[t].bind(e))
                })), e
            },
            createState: function createState(e) {
                var t = Object.create(null);
                return Object.defineProperty(t, "reset", {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1,
                    value: function value() {
                        return Object.assign(t, e())
                    }
                }), t.reset(), t
            },
            createClient: function createClient(e) {
                return this.createBoundObject(e)
            },
            createService: function createService(e) {
                var t = this.createBoundObject(e);
                return ie()(t), t
            },
            createUtils: function createUtils(e) {
                return this.createBoundObject(e)
            },
            createDisposable: function() {
                var e = [],
                    t = [],
                    n = [];
                return {
                    on: function on(t, n, a) {
                        if (!t.on || !t.off)
                            throw new Error("invalid event emitter");
                        t.on(n, a), e.push([t, n, a])
                    },
                    off: function off(t, n, a) {
                        if (!t.on || !t.off)
                            throw new Error("invalid event emitter");
                        t.off(n, a), de(e, (function(e) {
                            return e[0] === t && e[1] === n && e[2] === a
                        }))
                    },
                    once: function once(t, n, a) {
                        if (!t.once || !t.off)
                            throw new Error("invalid event emitter");
                        t.once(n, a), e.push([t, n, a])
                    },
                    setTimeout: function setTimeout(e, n) {
                        for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                            s[r - 2] = arguments[r];
                        var u = fe.setTimeout((function() {
                            e.apply(void 0, s), de(t, u)
                        }), n);
                        return t.push(u), u
                    },
                    clearTimeout: function clearTimeout(e) {
                        fe.clearTimeout(e), de(t, e)
                    },
                    setInterval: function setInterval(e, t) {
                        for (var a = arguments.length, s = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++)
                            s[r - 2] = arguments[r];
                        var u = fe.setInterval.apply(fe, [e, t].concat(s));
                        return n.push(u), u
                    },
                    clearInterval: function clearInterval(e) {
                        fe.clearInterval(e), de(n, e)
                    },
                    dispose: function dispose() {
                        for (; e.length;) {
                            var a = e.shift();
                            a[0].off(a[1], a[2])
                        }
                        for (; t.length;)
                            fe.clearTimeout(t.shift());
                        for (; n.length;)
                            fe.clearInterval(n.shift())
                    }
                }
            }
        }.createUtils({
            escape: function escape(e) {
                return re(e)
            },
            replaceCommandUrls: function replaceCommandUrls(e) {
                var t = e,
                    n = /^((https?:\/\/)?live\.chess\.com\/[a-z]+(\?v=[0-9]+)?)?(#[a-z]+=[0-9a-zA-Z]+)$/g;
                if (t) {
                    for (var a = t.split(" "), s = 0; s < a.length; s++) {
                        if (a[s].match(n)) {
                            var r = n.exec(a[s]);
                            a[s] = r[4]
                        }
                    }
                    t = a.join(" ")
                }
                return t
            },
            convertUrls: function convertUrls(e, t) {
                var n = e || "",
                    a = t && t.className ? t.className : "auto-converted",
                    s = "\\b((?:https?://)?((?:[a-zA-Z0-9-]+\\.)*(?:chess|chesskid|chesspersonality|twitch|prochessleague|youtube)\\.(com|tv)(?:/[\\w#!:.?+=&;%@!-/]*)?))\\b",
                    r = '<a href="//$2" class="'.concat(a, '" target="_blank">$1</a>');
                return t && t.allDomains && (s += "|\\b((?:https?://|(www\\.))([-A-Z0-9+&@#/%=~_|$?!:,.]*[A-Z0-9+&@#/%=~_|$]))", r = '<a href="//$2$5$6" class="'.concat(a, '" target="_blank">$1$4</a>')), n = String(n).replace(new RegExp(s, "gi"), r)
            },
            convertLiveRoutes: function convertLiveRoutes(e, t) {
                var n = t && t.className ? t.className : "auto-converted";
                return String(e).replace(/\s(#[a-z]+=[^\s]+)/g, ' <a href="$1" class="'.concat(n, '">$1</a>'))
            },
            isImageUrl: function isImageUrl(e) {
                return !!(e || "").match(/^\s*(https?:)?\/\/([-A-Z0-9+&@#/%=~_|$?!:,.]+)\.(png|jpg|jpeg|gif)\s*$/gi)
            },
            convertUserMention: function convertUserMention(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    a = n.className,
                    s = void 0 === a ? "mention" : a,
                    r = n.usernameClassName,
                    u = void 0 === r ? "user-mention" : r;
                if (!e || !t)
                    return e;
                var l = new RegExp("(^|[^A-z0-9_!#$%&*@＠/])([@＠](?!".concat(t, ")[A-Z0-9]+(:?[_-][A-Z0-9]+)*)(?:\\b)"), "gim"),
                    h = new RegExp("(^|[^A-z0-9_!#$%&*@＠/])([@＠]".concat(t, ")(?:\\b)"), "gim");
                return e.replace(h, '$1<span class="'.concat(u, '">$2</span>')).replace(l, '$1<span class="'.concat(s, '">$2</span>'))
            }
        });
    function messageFactory(e) {
        var t = new Date,
            n = t.toISOString(),
            a = e.created_at ? new Date(e.created_at) : t,
            s = function messageContentFactory(e) {
                if (!e.body || !e.body.content)
                    return [];
                var t = [];
                return e.body.content.split(" ").filter((function(e) {
                    return e.trim()
                })).forEach((function(e) {
                    var n = $.getByCode(e);
                    !n || n.isPremium && !l.k ? t.push({
                        text: me.convertUrls(e)
                    }) : t.push({
                        iconCode: n.name
                    })
                })), t
            }(e),
            r = s.every((function(e) {
                return Boolean(e.iconCode)
            })),
            u = s.length < l.e.BIG_EMOTES_LIMIT;
        return {
            authorId: e.author_id,
            content: s,
            chatId: e.chat_id,
            createdAt: e.created_at || n,
            firstInHistory: !1,
            hasError: !1,
            id: e.id,
            isEmotesEnlarged: r && u,
            isHidden: Boolean(e.hidden),
            isReaded: !0,
            originalMessage: e.body.content,
            requestId: e.request_id,
            timestamp: a.getTime(),
            updatedAt: e.updated_at || n
        }
    }
    function canBeMarkedAsRead(e) {
        return e && e.confirmations[l.j] === g.Status.ACCEPTED && e.messages.length > 0 && e.newMessages > 0 && e.isOpen && !e.isMinimized
    }
    function loadUserPopoverBundle() {
        window.postMessage({
            key: l.f.CHAT_LOAD_USER_POPOVER_BUNDLE
        }, window.location.origin), Setter({
            assetsLoaded: !0
        })
    }
    function findPendingMessageIndex(e, t) {
        return t.authorId !== l.j ? -1 : e.messages.findIndex((function(e) {
            var n = e.id === l.e.PENDING_MESSAGE_ID,
                a = e.requestId === t.requestId;
            return n && a
        }))
    }
    function updateUnreadMessagesCounter(e, t) {
        var n = t !== l.j,
            a = e.confirmations[l.j] === g.Status.ACCEPTED,
            s = !e.isOpen || e.isMinimized;
        n && a && s && e.newMessages++
    }
    var pe = n(20);
    var be = n(25),
        ge = n(10);
    var ve = {
        amplitudeLogSendMessage: function amplitudeLogSendMessage() {
            var e = l.b.SEND_MESSAGE;
            pe.a.logEvent(e.key, e.payload(!0))
        },
        openChatsTab: function openChatsTab() {
            ge.default.stores.navigation.changeCurrentTab(be.b.CHATS_TAB)
        },
        updateNavigationBadge: function updateNavigationBadge(e) {
            ge.default.stores.notifications && ge.default.stores.notifications.setBadgeCount({
                type: l.e.BADGE_KEY,
                count: e
            })
        },
        updateNavigationTabVisibility: function updateNavigationTabVisibility(e) {
            ge.default.stores.navigation && ge.default.stores.navigation.switchChatTab(e)
        }
    };
    var Oe,
        je,
        Ee = n(6),
        ye = n.n(Ee),
        Ce = n(9);
    !function(e) {
        e.NewMessages = "NewMessages", e.OnlineStatus = "OnlineStatus", e.OpenChats = "OpenChats", e.UserDetails = "UserDetails"
    }(je || (je = {}));
    var Ie = (Oe = {}, ye()(Oe, je.NewMessages, {
        storageKey: "chat_new_messages_".concat(l.j),
        timeToLive: 31536e6
    }), ye()(Oe, je.OnlineStatus, {
        storageKey: "chat_users_online_status_".concat(l.j),
        timeToLive: 3e5
    }), ye()(Oe, je.UserDetails, {
        storageKey: "chat_users_details_".concat(l.j),
        timeToLive: 2592e5
    }), ye()(Oe, je.OpenChats, {
        storageKey: "chat_open_chats_".concat(l.j),
        timeToLive: 31536e6
    }), Oe);
    function addToCache(e, t) {
        var n = Ie[e],
            a = read(n.storageKey),
            s = Date.now() + n.timeToLive,
            r = 1e4 * Math.ceil(s / 1e4);
        Object.keys(t).forEach((function(e) {
            a[e] = {
                expiredAt: r,
                data: t[e]
            }
        })), write(n.storageKey, a)
    }
    function clearExpiredCache(e) {
        var t = Ie[e].storageKey;
        write(t, function filterValidCache() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = {};
            return Object.keys(e).forEach((function(n) {
                var a = e[n];
                a.expiredAt > (new Date).getTime() && (t[n] = a)
            })), t
        }(read(t)))
    }
    function getModelsCollection(e, t) {
        var n = function getCacheCollection(e) {
                return clearExpiredCache(e), read(Ie[e].storageKey)
            }(e),
            a = t ? function arrayValuesToObject() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = {};
                return e.forEach((function(e) {
                    "string" != typeof e && "number" != typeof e || (t[e] = !0)
                })), t
            }(t) : {},
            s = {};
        return Object.keys(n).forEach((function(e) {
            t && !a[e] || (s[e] = n[e].data)
        })), s
    }
    var we = n(19);
    function read(e) {
        var t = we.a.get(e);
        return t ? JSON.parse(t) : {}
    }
    function write(e, t) {
        var n = we.a.get(e),
            a = JSON.stringify(t);
        a !== n && we.a.set(e, a)
    }
    var ke = {
            addUsersData: function addUsersData(e) {
                addToCache(je.UserDetails, e)
            },
            getOpenChats: function getOpenChats() {
                var e = getModelsCollection(je.OpenChats);
                return e && e.values || []
            },
            getUnreadMessages: function getUnreadMessages() {
                var e = getModelsCollection(je.NewMessages);
                return e && e.values || {}
            },
            getUsersData: function cache_get_users_data_getUsersData(e) {
                return getModelsCollection(je.UserDetails, e)
            },
            saveOpenChats: function saveOpenChats(e) {
                addToCache(je.OpenChats, {
                    values: e
                })
            },
            saveUnreadMessages: function saveUnreadMessages(e) {
                var t = e.reduce((function(e, t) {
                    return e[t.id] = t.newMessages, e
                }), {});
                addToCache(je.NewMessages, {
                    values: t
                })
            }
        },
        Te = Object(Ce.a)((function(e, t) {
            var n = !1,
                a = ut.state(),
                s = a.chats,
                r = a.inactiveChatsLoaded,
                u = s.direct.find((function(t) {
                    return t.userId === e.id
                }));
            return u ? (t && ot.chat.sendMessage(u.id, t), void ot.chat.open(u.id)) : Object(Ce.h)((function() {
                if (!r)
                    return Object(Ce.b)(ot.list.load(!0), (function() {
                        Te(e, t), n = !0
                    }))
            }), (function(a) {
                if (n)
                    return a;
                ke.addUsersData(ye()({}, e.id, {
                    avatarUrl: e.avatarUrl,
                    username: e.username
                })), ot.openChats.openEmptyDirectChat(e, t), ot.users.updateDetails()
            }))
        }));
    var Se = {
            activate: function activateChat() {
                var e = ut.state().inactiveChatsLoaded;
                ot.list.load(e)
            },
            addEmoticon: function addEmoticonToChat(e, t) {
                var n = ut.chat(e);
                n && (n.draft.length && !n.draft.endsWith(" ") && (n.draft += " "), n.draft += "".concat(t, " "), ot.view.updateOpenChats())
            },
            addServiceMessage: function addServiceMessage(e) {
                var t = e.chatId,
                    n = e.content,
                    a = e.type,
                    r = ut.chat(t);
                if (r && 0 !== r.messages.length) {
                    var u = r.messages.slice(-1),
                        l = s()(u, 1)[0].id;
                    r.serviceMessages[l] || (r.serviceMessages[l] = []), r.serviceMessages[l].push({
                        content: n,
                        type: a
                    }), ot.view.updateOpenChats(), ot.scroll.toLastMessage(t)
                }
            },
            addUser: function addUserToChat(e) {
                var t = e.chatId,
                    n = e.userId,
                    a = e.username,
                    s = ut.chat(t);
                if (s && !s.userIds.has(n)) {
                    s.errors = [], s.userIds.add(n);
                    var r = ut.state().users;
                    r[n] || (r[n] = {
                        username: a
                    }, Setter({
                        users: r
                    })), ot.view.updateOpenChats()
                }
            },
            answer: function answer_to_chat_request_answerToChatRequest(e, t) {
                var n = ut.chat(e);
                n && U.answerToChatRequest({
                    chatId: e,
                    chatType: n.type,
                    status: t
                }).then((function() {
                    n.confirmations[l.j] = t, ot.list.handleCountersChange(), ot.view.updateAll(), t === g.Status.ACCEPTED && ot.chat.markAsRead(n)
                }))
            },
            changeMessagesFilter: function changeMessagesFilter(e, t) {
                var n = ut.chat(e);
                n && (n.messagesFilter = t, ot.view.updateOpenChats(), ot.scroll.toLastMessage(n.id))
            },
            close: function close_chat_closeChat(e) {
                var t = ut.chat(e),
                    n = ut.state().openChats;
                t && (t.isOpen = !1), n = n.filter((function(t) {
                    return t.id !== e
                })), ot.view.updateOpenChats(n)
            },
            deactivate: function chat_deactivate_chat_deactivateChat(e) {
                var t = ut.chat(e);
                t && U.deactivateChat(t.id, t.type).then((function() {
                    t.isActive = !1, Setter({
                        inactiveChatsCounter: ut.state().inactiveChatsCounter + 1
                    }), ot.view.updateChats(), ot.list.filter(), ot.list.handleCountersChange(), ot.chat.close(e)
                }))
            },
            getErrors: function getChatErrors(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = ut.chat(e);
                if (!n)
                    return [];
                var a = ut.state(),
                    s = a.users,
                    r = [];
                if (t)
                    return r.push(l.i.unableToConnect), r;
                var u = s[n.userId] && s[n.userId].username || "";
                return n.confirmations[n.userId] === g.Status.REJECTED && r.push(l.i.userIsUnavailable(u)), n.confirmations[n.userId] === g.Status.REJECTED_EXPIRED && r.push(l.i.userWasUnavailable(u)), n.isTemporaryMuted && r.push(l.i.tooMuchMessages), r.push.apply(r, x()(n.errors)), r
            },
            handleCreateChatError: function handleCreateChatError(e, t) {
                var n = t.data,
                    a = t.status;
                if (e.errors || (e.errors = []), e.errors.push(l.i.cannotBeCreated), a === l.e.HTTP_CODE_FORBIDDEN && n.unavailable_users) {
                    var s = n.unavailable_users.map((function(e) {
                        return ut.user(e).username || ""
                    }));
                    s.length > 1 ? e.errors.push(l.i.usersAreUnavailable(s.join(", "))) : 1 === s.length && e.errors.push(l.i.userIsUnavailable(s[0])), ot.view.updateOpenChats()
                }
            },
            handleFormConfirm: function handleFormConfirm(e) {
                var t = ut.chat(e);
                if (t && "" !== t.draft.trim() && !t.isTemporaryMuted) {
                    t.errors = [];
                    var n = t.isDirect && t.confirmations[t.userId] === g.Status.REJECTED_EXPIRED;
                    t.isChatInitiationForm || n ? t.isDirect ? ot.list.createChatDirect({
                        temporaryChat: t,
                        isRepeatedRequest: n
                    }) : t.isGroup && ot.list.createChatGroup({
                        temporaryChat: t
                    }) : ot.chat.sendMessage(t.id, t.draft), ot.chat.toggleEmotes(t.id, !1)
                }
            },
            handleSendMessageError: function handleSendMessageError(e, t, n) {
                var a = n.response,
                    s = e.messages.findIndex((function(e) {
                        return e.id === l.e.PENDING_MESSAGE_ID && e.originalMessage === t
                    }));
                s < 0 || (e.messages[s].hasError = !0, a && a.status === l.e.HTTP_CODE_TOO_MUCH_REQUESTS && ot.chat.tooMuchRequestsFilter(e, !0), a && a.data && "vulgar" === a.data.reason && (ot.chat.messageDelete(e.id, s), ot.chat.addServiceMessage({
                    chatId: e.id,
                    content: l.i.rulesLink,
                    type: g.ServiceMessageType.WARNING
                })), ot.view.updateOpenChats())
            },
            leave: function leaveChat(e) {
                ut.chat(e) && ot.chat.answer(e, g.Status.REJECTED)
            },
            load: function loadMessages(e, t) {
                var n = ut.chat(e);
                n && !n.isChatInitiationForm && (n.messages.length && n.messages[0].firstInHistory && t || (t || (n.messagesListIsLoading = !0), ot.view.updateOpenChats(), U.getChatMessages({
                    chatId: e,
                    chatType: n.type,
                    before: t
                }).then((function(a) {
                    n.messagesListIsLoading = !1;
                    var s = (a.messages || []).map(messageFactory).reverse();
                    a.isModerator && (n.moderators[l.j] = !0), a.isMuted && (n.mutedUsers[l.j] = !0), ot.view.updateOpenChats(), ot.chat.updateMessages({
                        chatId: e,
                        loadedMessages: s,
                        before: t
                    })
                }))))
            },
            markAsRead: function mark_chat_as_read_markChatAsRead(e) {
                if (canBeMarkedAsRead(e)) {
                    var t = e.messages.slice(-1),
                        n = s()(t, 1)[0];
                    setTimeout((function() {
                        canBeMarkedAsRead(e) && U.markChatAsRead({
                            chatId: e.id,
                            lastReadedDate: n.createdAt,
                            chatType: e.type
                        }).then((function(t) {
                            var n = t.read_position,
                                a = new Date(n).getTime(),
                                s = e.messages.filter((function(e) {
                                    var t = e.authorId;
                                    return e.timestamp > a && t !== l.j
                                }));
                            e.newMessages = s.length, ot.view.updateOpenChats(), ot.list.handleCountersChange(), ot.list.filter()
                        }))
                    }), l.e.TIMEOUT_TILL_MESSAGE_IS_READ)
                }
            },
            maximize: function maximizeChat(e) {
                var t = ut.chat(e);
                t && (t.isMinimized = !1, ot.view.updateOpenChats(), t.newMessages ? (ot.scroll.toLastMessage(t.id), ot.chat.markAsRead(t)) : t.scrollPosition && ot.scroll.toPosition(t.id, t.scrollPosition), ot.openChats.save())
            },
            messageDelete: function messageDelete(e, t) {
                var n = ut.chat(e);
                n && (n.messages.splice(t, 1), ot.view.updateOpenChats())
            },
            minimize: function minimizeChat(e) {
                var t = ut.chat(e);
                t && (t.isMinimized = !0, ot.view.updateOpenChats())
            },
            move: function moveChat(e) {
                var t = ut.chat(e.chatId);
                if (t) {
                    var n = window.innerHeight - t.windowHeight,
                        a = l.e.CHAT_WINDOW_MOVE_TRESHOLD,
                        s = window.innerWidth - t.windowWidth - l.e.DEFAULT_CHAT_WINDOW_WIDTH,
                        r = !0,
                        u = Math.min(e.right, s),
                        h = Math.min(e.bottom, n);
                    u = Math.max(u, 0), h < a && (h = 0, u = 0, r = !1), t.isDetached = r, t.positionBottom = h, t.positionRight = u, ot.view.updateOpenChats()
                }
            },
            open: function open_chat_openChat(e) {
                var t = ut.state(),
                    n = ut.chat(e);
                n && (n.isOpen ? n.isMinimized && ot.chat.maximize(e) : (n.isOpen = !0, n.isMinimized = !1, n.scrollPosition = null, t.openChats.unshift(n), ot.view.updateOpenChats(), ot.chat.load(e), ot.openChats.checkLimit(), t.assetsLoaded || loadUserPopoverBundle()))
            },
            receiveMessage: function receiveChatMessage(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = ut.chat(e.chat_id);
                if (n) {
                    var a = messageFactory(e),
                        s = findPendingMessageIndex(n, a);
                    s > -1 ? n.messages.splice(s, 1, a) : n.messages.push(a), updateUnreadMessagesCounter(n, a.authorId), n.lastMessageTimestamp = a.timestamp, ot.view.updateAll(), ot.scroll.toLastMessage(n.id), t || (ot.list.handleCountersChange(), ot.chat.markAsRead(n), ot.list.filter(), n.isOpen && ot.openChats.save())
                }
            },
            removeUser: function removeUserFromChat(e, t) {
                var n = ut.chat(e);
                n && (n.errors = [], n.userIds.delete(t), ot.view.updateOpenChats())
            },
            resize: function resizeChat(e) {
                var t = ut.chat(e.chatId);
                if (t) {
                    var n = Math.max(e.height, l.e.MIN_CHAT_WINDOW_HEIGHT),
                        a = Math.max(e.width, l.e.MIN_CHAT_WINDOW_WIDTH);
                    n = Math.min(n, window.innerHeight), a = Math.min(a, window.innerWidth - l.e.DEFAULT_CHAT_WINDOW_WIDTH), window.innerWidth < l.e.DEFAULT_CHAT_WINDOW_WIDTH && (a = window.innerWidth * l.e.CHAT_WINDOW_WIDTH_ON_MOBILE), t.windowHeight = n, t.windowWidth = a, ot.view.updateOpenChats()
                }
            },
            sendMessage: function sendMessage(e, t) {
                var n = ut.chat(e);
                if (n && t && !ot.chat.tooMuchRequestsFilter(n)) {
                    n.draft = "", n.isActive || (n.isActive = !0, ot.pubsub.subscribe(n.channel));
                    var a = "".concat(e).concat(Date.now()),
                        s = function pendingMessageFactory(e) {
                            var t = e.chatId,
                                n = e.message,
                                a = e.requestId;
                            return {
                                action: l.e.PUBSUB_ACTION_CREATED,
                                message: {
                                    author_id: l.j,
                                    id: l.e.PENDING_MESSAGE_ID,
                                    hidden: !1,
                                    body: {
                                        content: n
                                    },
                                    chat_id: t,
                                    request_id: a
                                }
                            }
                        }({
                            chatId: e,
                            message: t,
                            requestId: a
                        });
                    ot.chat.receiveMessage(s.message, !0), U.postMessage({
                        chatId: e,
                        chatType: n.type,
                        message: t,
                        requestId: a
                    }).then(ve.amplitudeLogSendMessage).catch((function(e) {
                        ot.chat.handleSendMessageError(n, t, e)
                    })), ot.view.updateOpenChats()
                }
            },
            startDirect: Te,
            tooMuchRequestsFilter: function tooMuchRequestsFilter(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = (new Date).getTime() - 6e4,
                    a = e.messages.filter((function(e) {
                        var t = e.authorId,
                            a = e.timestamp;
                        return t === l.j && a > n
                    })).length;
                return !(!t && a < l.e.USER_MUTE_MESSAGES_ANMOUNT) && (e.isTemporaryMuted = !0, ot.view.updateOpenChats(), setTimeout((function() {
                        e.isTemporaryMuted = !1, ot.view.updateOpenChats()
                    }), l.e.USER_MUTE_TIMEOUT), !0)
            },
            toggleEmotes: function toggle_emotes_popup_toggleEmotesPopup(e, t) {
                var n = ut.chat(e);
                if (n) {
                    var a = void 0 !== t ? t : !n.emotesPopupIsOpen;
                    n.emotesPopupIsOpen = a, ot.view.updateOpenChats()
                }
            },
            toggleMessageVisibility: function toggleMessageVisibility(e) {
                var t = e.chatId,
                    n = e.messageId,
                    a = e.isHidden;
                U.changeMessageVisibility({
                    chatId: t,
                    messageId: n,
                    isHidden: a
                }).then((function() {
                    ot.chat.updateMessageVisibility({
                        chatId: t,
                        messageId: n,
                        isHidden: a
                    })
                }))
            },
            updateConfirmations: function updateChatConfirmations(e, t) {
                var n = ut.chat(e);
                n && (t.forEach((function(e) {
                    var t = e.status,
                        a = e.user;
                    n.confirmations[a] = t
                })), ot.view.updateAll())
            },
            updateMessages: function updateMessages(e) {
                var t = e.chatId,
                    n = e.loadedMessages,
                    a = e.before,
                    r = ut.chat(t);
                if (r && 0 !== n.length) {
                    var u = n.slice(-1),
                        h = s()(u, 1)[0],
                        _ = r.messages.find((function(e) {
                            return e.id === h.id
                        })),
                        f = ot.scroll.getScrollHeight(t) - (r.scrollPosition || 0),
                        b = {};
                    if (r.messages = r.messages.concat(n).filter((function(e) {
                        var t = e.id;
                        if (t === l.e.PENDING_MESSAGE_ID)
                            return !0;
                        var n = b[t];
                        return b[t] = !0, !n
                    })).sort((function(e, t) {
                        return e.timestamp < t.timestamp ? -1 : 1
                    })), n.length < l.e.MESSAGES_PER_REQUEST && r.messages.length ? r.messages[0].firstInHistory = !0 : setTimeout((function() {
                        var e = document.querySelector(l.h.messagesList(r.id));
                        if (e && e.scrollHeight === e.offsetHeight && r.messages) {
                            var t = r.messages[0].createdAt;
                            ot.chat.load(r.id, t)
                        }
                    }), 0), ot.view.updateAll(), ot.chat.markAsRead(r), ot.users.updateDetails(), a) {
                        var g = ot.scroll.getScrollHeight(t) - f;
                        ot.scroll.toPosition(t, g)
                    } else
                        _ || ot.scroll.toMessage(h)
                }
            },
            updateMessageVisibility: function updateMessageVisibility(e) {
                var t = e.chatId,
                    n = e.messageId,
                    a = e.isHidden,
                    s = ut.chat(t);
                if (s) {
                    var r = s.messages.find((function(e) {
                        return e.id === n
                    }));
                    r && (r.isHidden = a), ot.view.updateOpenChats()
                }
            }
        },
        Ae = !1;
    function realActionCall() {
        ot.list.updateCountersFromCache()
    }
    function viewUpdateListener() {
        realActionCall(), document.removeEventListener("visibilitychange", viewUpdateListener), Ae = !1
    }
    var Me = n(5),
        Ne = n(23),
        Re = n(43),
        Pe = self.PubSub;
    function chatFactory(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = e.type || g.Type.DIRECT,
            a = n === g.Type.CLUB,
            s = n === g.Type.DIRECT,
            r = n === g.Type.GROUP,
            u = e.confirmations.map((function(e) {
                return e.user
            })),
            h = "";
        s && (h = u[0] === l.j ? u[1] : u[0]), r && (h = u.join("-"));
        var _ = {};
        e.confirmations.forEach((function(e) {
            var t = e.status,
                n = e.user;
            return _[n] = t
        }));
        var f = l.e.DEFAULT_CHAT_WINDOW_HEIGHT,
            b = l.e.DEFAULT_CHAT_WINDOW_WIDTH,
            v = e.unread_count;
        return _[l.j] === g.Status.PENDING ? v = 1 : [g.Status.REJECTED, g.Status.REJECTED_EXPIRED].includes(_[l.j]) && (v = 0), {
            channel: e.channel,
            confirmations: _,
            draft: "",
            emotesPopupIsOpen: !1,
            errors: [],
            id: e.id,
            isActive: e.active,
            isChatInitiationForm: t,
            isClub: e.type === g.Type.CLUB,
            isDirect: s,
            isGroup: r,
            isDetached: !1,
            isMinimized: !1,
            isOnline: !1,
            isOpen: a,
            isPlaceholder: !1,
            isTemporaryMuted: !1,
            lastMessageTimestamp: e.last_position ? new Date(e.last_position).getTime() : 0,
            messages: [],
            messagesFilter: l.g.EVERYONE,
            messagesListIsLoading: !1,
            moderators: {},
            mutedUsers: {},
            name: "",
            newMessages: v,
            positionBottom: 0,
            positionRight: 0,
            scrollPosition: null,
            serviceMessages: {},
            type: n,
            userIds: new Set(u),
            userId: h,
            warnedUsers: {},
            windowHeight: f,
            windowWidth: b
        }
    }
    var De = n(17),
        Ue = n(0);
    n(93);
    function userPopoverProps(e, t, n) {
        var a = n[t] ? n[t].username : "",
            s = !e.moderators[t];
        return JSON.stringify({
            username: a,
            clubChatIdForModeratorActions: e.moderators[l.j] && s ? e.id : ""
        })
    }
    function userIsVisible(e, t, n) {
        var a = n.trim().toLowerCase(),
            s = e[t];
        return !a || s && s.username && s.username.toLowerCase().includes(a)
    }
    function oncreate() {
        var e = this.get().chat;
        ot.users.getChatUsers(e.id)
    }
    function get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.userId = t[n], a.index = n, a
    }
    function create_if_block(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h,
            _,
            f,
            b = t.$users[t.userId] ? t.$users[t.userId].username : "";
        function select_block_type(e) {
            return e.$users[e.userId] && e.$users[e.userId].isStaff ? create_if_block_3 : e.chat.moderators[e.userId] ? create_if_block_4 : void 0
        }
        var g = select_block_type(t),
            v = g && g(e, t),
            O = t.chat.moderators[t.uid] && t.chat.warnedUsers[t.userId] && create_if_block_2(e, t),
            j = t.chat.moderators[t.uid] && t.chat.mutedUsers[t.userId] && create_if_block_1(e, t);
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.i)("span"), s = Object(Ue.k)(b), l = Object(Ue.k)("\n\n          "), v && v.c(), h = Object(Ue.k)("\n\n          "), O && O.c(), _ = Object(Ue.k)("\n\n          "), j && j.c(), f = Object(Ue.k)("\n        "), Object(Ue.D)(a, "v-user-popover", r = userPopoverProps(t.chat, t.userId, t.$users)), a.className = "chat-participants-list-username svelte-eq9dop", a.dataset.linkId = u = t.chat.id + "-" + t.userId, n.className = "chat-participants-list-item svelte-eq9dop"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(a, s), Object(Ue.d)(n, l), v && v.m(n, null), Object(Ue.d)(n, h), O && O.m(n, null), Object(Ue.d)(n, _), j && j.m(n, null), Object(Ue.d)(n, f)
            },
            p: function p(t, l) {
                (t.$users || t.userIds) && b !== (b = l.$users[l.userId] ? l.$users[l.userId].username : "") && Object(Ue.E)(s, b), (t.chat || t.userIds || t.$users) && r !== (r = userPopoverProps(l.chat, l.userId, l.$users)) && Object(Ue.D)(a, "v-user-popover", r), (t.chat || t.userIds) && u !== (u = l.chat.id + "-" + l.userId) && (a.dataset.linkId = u), g !== (g = select_block_type(l)) && (v && v.d(1), (v = g && g(e, l)) && v.c(), v && v.m(n, h)), l.chat.moderators[l.uid] && l.chat.warnedUsers[l.userId] ? O ? O.p(t, l) : ((O = create_if_block_2(e, l)).c(), O.m(n, _)) : O && (O.d(1), O = null), l.chat.moderators[l.uid] && l.chat.mutedUsers[l.userId] ? j ? j.p(t, l) : ((j = create_if_block_1(e, l)).c(), j.m(n, f)) : j && (j.d(1), j = null)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), v && v.d(), O && O.d(), j && j.d()
            }
        }
    }
    function create_if_block_4(e, t) {
        var n;
        return {
            c: function c() {
                (n = Object(Ue.i)("span")).className = "flair-component flair-pawn_blue"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function create_if_block_3(e, t) {
        var n;
        return {
            c: function c() {
                (n = Object(Ue.i)("span")).className = "flair-component flair-pawn_traditional"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function create_if_block_2(e, t) {
        var n,
            a,
            s;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), (a = Object(Ue.i)("span")).className = "icon-font-chess flag", n.className = "chat-participants-list-icon svelte-eq9dop", n.title = s = t.translations.warning
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.translations && s !== (s = t.translations.warning) && (n.title = s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function create_if_block_1(e, t) {
        var n,
            a,
            s;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), (a = Object(Ue.i)("span")).className = "icon-font-chess chat-x", n.className = "chat-participants-list-icon svelte-eq9dop", n.title = s = t.translations.muted
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.translations && s !== (s = t.translations.muted) && (n.title = s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function create_each_block(e, t, n) {
        var a,
            s,
            r = userIsVisible(n.$users, n.userId, n.query) && create_if_block(e, n);
        return {
            key: t,
            first: null,
            c: function c() {
                a = Object(Ue.h)(), r && r.c(), s = Object(Ue.h)(), this.first = a
            },
            m: function m(e, t) {
                Object(Ue.u)(e, a, t), r && r.m(e, t), Object(Ue.u)(e, s, t)
            },
            p: function p(t, n) {
                userIsVisible(n.$users, n.userId, n.query) ? r ? r.p(t, n) : ((r = create_if_block(e, n)).c(), r.m(s.parentNode, s)) : r && (r.d(1), r = null)
            },
            d: function d(e) {
                e && Object(Ue.p)(a), r && r.d(e), e && Object(Ue.p)(s)
            }
        }
    }
    function Chat_participants_list_svelte(e) {
        var t = this;
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["users"]), function chat_participants_list_svelte_data() {
            return {
                query: "",
                translations: l.i,
                uid: l.j
            }
        }()), e.data), this.store._add(this, ["users"]), this._recompute({
            chat: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function create_main_fragment(e, t) {
            var n,
                a,
                s,
                r,
                u,
                l,
                h,
                _,
                f,
                b,
                g = t.userIds.length,
                v = !1,
                O = [],
                j = Object(Ue.g)();
            function input_input_handler() {
                v = !0, e.set({
                    query: _.value
                }), v = !1
            }
            for (var E = t.userIds, y = function get_key(e) {
                    return "".concat(e.index).concat(e.userId)
                }, C = 0; C < E.length; C += 1) {
                var I = get_each_context(t, E, C),
                    w = y(I);
                O[C] = j[w] = create_each_block(e, w, I)
            }
            return {
                c: function c() {
                    for (n = Object(Ue.i)("div"), a = Object(Ue.i)("div"), s = Object(Ue.i)("span"), r = Object(Ue.k)("\n    "), u = Object(Ue.k)(g), l = Object(Ue.k)("\n\n  "), h = Object(Ue.i)("div"), _ = Object(Ue.i)("input"), b = Object(Ue.k)("\n\n    \n    "), C = 0; C < O.length; C += 1)
                        O[C].c();
                    s.className = "icon-font-chess users", a.className = "chat-participants-list-header svelte-eq9dop", Object(Ue.c)(_, "input", input_input_handler), _.className = "chat-participants-list-search svelte-eq9dop", _.placeholder = f = t.translations.findUser, Object(Ue.D)(_, "type", "text"), h.className = "chat-participants-list-body svelte-eq9dop", n.className = "chat-participants-list svelte-eq9dop"
                },
                m: function m(e, f) {
                    for (Object(Ue.u)(e, n, f), Object(Ue.d)(n, a), Object(Ue.d)(a, s), Object(Ue.d)(a, r), Object(Ue.d)(a, u), Object(Ue.d)(n, l), Object(Ue.d)(n, h), Object(Ue.d)(h, _), _.value = t.query, Object(Ue.d)(h, b), C = 0; C < O.length; C += 1)
                        O[C].m(h, null)
                },
                p: function p(t, n) {
                    t.userIds && g !== (g = n.userIds.length) && Object(Ue.E)(u, g), !v && t.query && (_.value = n.query), t.translations && f !== (f = n.translations.findUser) && (_.placeholder = f);
                    var a = n.userIds;
                    O = Object(Ue.G)(O, e, t, y, 1, n, a, j, h, Ue.l, create_each_block, "m", null, get_each_context)
                },
                d: function d(e) {
                    for (e && Object(Ue.p)(n), Object(Ue.A)(_, "input", input_input_handler), C = 0; C < O.length; C += 1)
                        O[C].d()
                }
            }
        }(this, this._state), this.root._oncreate.push((function() {
            oncreate.call(t), t.fire("update", {
                changed: Object(Ue.f)({}, t._state),
                current: t._state
            })
        })), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Chat_participants_list_svelte.prototype, Ue.x), Chat_participants_list_svelte.prototype._recompute = function _recompute(e, t) {
        e.chat && this._differs(t.userIds, t.userIds = function chat_participants_list_svelte_userIds(e) {
            var t = e.chat;
            return Array.from(t.userIds)
        }(t)) && (e.userIds = !0)
    };
    var Le = Chat_participants_list_svelte;
    n(94);
    var xe = {
        close: function close() {
            var e = this.get().chat;
            ot.chat.toggleEmotes(e.id, !1)
        },
        focusInputField: function focusInputField() {
            var e = this.get().chat;
            setTimeout((function() {
                var t = document.getElementById("chat-message-field-".concat(e.id));
                if (t) {
                    t.focus();
                    var n = t.value.length;
                    t.selectionStart = n, t.selectionEnd = n
                }
            }))
        },
        select: function select(e) {
            var t = this.get().chat,
                n = this.get().emotesInRowCount;
            ot.chat.addEmoticon(t.id, e), this.focusInputField(), ++n >= l.e.EMOTES_IN_A_ROW && (this.close(), n = 0), this.set({
                emotesInRowCount: n
            })
        }
    };
    function get_each_context_2(e, t, n) {
        var a = Object.create(e);
        return a.icon = t[n], a
    }
    function emotes_popup_svelte_click_handler(e) {
        var t = this._svelte,
            n = t.component,
            a = t.ctx;
        n.select(a.icon.code)
    }
    function get_each_context_1(e, t, n) {
        var a = Object.create(e);
        return a.icon = t[n], a
    }
    function emotes_popup_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.category = t[n], a
    }
    function emotes_popup_svelte_create_if_block(e, t) {
        for (var n, a, s, r = t.emoticons, u = [], l = 0; l < r.length; l += 1)
            u[l] = emotes_popup_svelte_create_each_block(e, emotes_popup_svelte_get_each_context(t, r, l));
        function click_handler_1(t) {
            t.stopPropagation(), e.fire("click", t)
        }
        function click_handler_2(t) {
            e.close()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.i)("div");
                for (var e = 0; e < u.length; e += 1)
                    u[e].c();
                Object(Ue.c)(a, "click", click_handler_1), a.className = "chat-emotes-popup-body svelte-1xne7f4", Object(Ue.c)(n, "click", click_handler_2), n.className = s = "chat-emotes-popup " + (t.chat.isClub ? "chat-emotes-popup-for-club" : "") + " svelte-1xne7f4"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a);
                for (var s = 0; s < u.length; s += 1)
                    u[s].m(a, null)
            },
            p: function p(t, l) {
                if (t.emoticons || t.translations) {
                    r = l.emoticons;
                    for (var h = 0; h < r.length; h += 1) {
                        var _ = emotes_popup_svelte_get_each_context(l, r, h);
                        u[h] ? u[h].p(t, _) : (u[h] = emotes_popup_svelte_create_each_block(e, _), u[h].c(), u[h].m(a, null))
                    }
                    for (; h < u.length; h += 1)
                        u[h].d(1);
                    u.length = r.length
                }
                t.chat && s !== (s = "chat-emotes-popup " + (l.chat.isClub ? "chat-emotes-popup-for-club" : "") + " svelte-1xne7f4") && (n.className = s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.m)(u, e), Object(Ue.A)(a, "click", click_handler_1), Object(Ue.A)(n, "click", click_handler_2)
            }
        }
    }
    function emotes_popup_svelte_create_if_block_2(e, t) {
        var n,
            a,
            s = t.category.name;
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(s), n.className = "chat-emotes-category-title svelte-1xne7f4"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.emoticons && s !== (s = t.category.name) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function create_each_block_2(e, t) {
        var n,
            a,
            s;
        return {
            c: function c() {
                (n = Object(Ue.i)("button"))._svelte = {
                    component: e,
                    ctx: t
                }, Object(Ue.c)(n, "click", emotes_popup_svelte_click_handler), n.className = a = "chat-emoticon-select chat-emoticon-select-" + t.icon.name + " svelte-1xne7f4", n.title = s = t.icon.code, n.type = "button"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            p: function p(e, r) {
                t = r, n._svelte.ctx = t, e.emoticons && a !== (a = "chat-emoticon-select chat-emoticon-select-" + t.icon.name + " svelte-1xne7f4") && (n.className = a), e.emoticons && s !== (s = t.icon.code) && (n.title = s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", emotes_popup_svelte_click_handler)
            }
        }
    }
    function emotes_popup_svelte_create_if_block_1(e, t) {
        for (var n, a, s, r, u, l = t.category.disabledIcons, h = [], _ = 0; _ < l.length; _ += 1)
            h[_] = create_each_block_1(e, get_each_context_2(t, l, _));
        return {
            c: function c() {
                n = Object(Ue.i)("div");
                for (var e = 0; e < h.length; e += 1)
                    h[e].c();
                a = Object(Ue.k)("\n\n              "), s = Object(Ue.i)("div"), (r = Object(Ue.i)("span")).innerHTML = '<span class="icon-font-chess lock svelte-1xne7f4"></span>', r.className = "icon-font-component svelte-1xne7f4", s.className = "chat-emotes-disabled-overlay svelte-1xne7f4", s.title = u = t.translations.pleaseUpgrade, n.className = "chat-emotes-disabled-icons svelte-1xne7f4"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t);
                for (var u = 0; u < h.length; u += 1)
                    h[u].m(n, null);
                Object(Ue.d)(n, a), Object(Ue.d)(n, s), Object(Ue.d)(s, r)
            },
            p: function p(t, r) {
                if (t.emoticons) {
                    l = r.category.disabledIcons;
                    for (var _ = 0; _ < l.length; _ += 1) {
                        var f = get_each_context_2(r, l, _);
                        h[_] ? h[_].p(t, f) : (h[_] = create_each_block_1(e, f), h[_].c(), h[_].m(n, a))
                    }
                    for (; _ < h.length; _ += 1)
                        h[_].d(1);
                    h.length = l.length
                }
                t.translations && u !== (u = r.translations.pleaseUpgrade) && (s.title = u)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.m)(h, e)
            }
        }
    }
    function create_each_block_1(e, t) {
        var n,
            a;
        return {
            c: function c() {
                (n = Object(Ue.i)("span")).className = a = "chat-emoticon-select chat-emoticon-select-" + t.icon.name + " svelte-1xne7f4"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            p: function p(e, t) {
                e.emoticons && a !== (a = "chat-emoticon-select chat-emoticon-select-" + t.icon.name + " svelte-1xne7f4") && (n.className = a)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function emotes_popup_svelte_create_each_block(e, t) {
        for (var n, a, s, r, u = t.category.name && emotes_popup_svelte_create_if_block_2(0, t), l = t.category.enabledIcons, h = [], _ = 0; _ < l.length; _ += 1)
            h[_] = create_each_block_2(e, get_each_context_1(t, l, _));
        var f = t.category.disabledIcons.length > 0 && emotes_popup_svelte_create_if_block_1(e, t);
        return {
            c: function c() {
                u && u.c(), n = Object(Ue.k)("\n\n        "), a = Object(Ue.i)("div");
                for (var e = 0; e < h.length; e += 1)
                    h[e].c();
                s = Object(Ue.k)("\n\n          "), f && f.c(), r = Object(Ue.k)("\n        "), a.className = "chat-emotes-category-icons svelte-1xne7f4"
            },
            m: function m(e, t) {
                u && u.m(e, t), Object(Ue.u)(e, n, t), Object(Ue.u)(e, a, t);
                for (var l = 0; l < h.length; l += 1)
                    h[l].m(a, null);
                Object(Ue.d)(a, s), f && f.m(a, null), Object(Ue.d)(a, r)
            },
            p: function p(t, _) {
                if (_.category.name ? u ? u.p(t, _) : ((u = emotes_popup_svelte_create_if_block_2(0, _)).c(), u.m(n.parentNode, n)) : u && (u.d(1), u = null), t.emoticons) {
                    l = _.category.enabledIcons;
                    for (var b = 0; b < l.length; b += 1) {
                        var g = get_each_context_1(_, l, b);
                        h[b] ? h[b].p(t, g) : (h[b] = create_each_block_2(e, g), h[b].c(), h[b].m(a, s))
                    }
                    for (; b < h.length; b += 1)
                        h[b].d(1);
                    h.length = l.length
                }
                _.category.disabledIcons.length > 0 ? f ? f.p(t, _) : ((f = emotes_popup_svelte_create_if_block_1(e, _)).c(), f.m(a, r)) : f && (f.d(1), f = null)
            },
            d: function d(e) {
                u && u.d(e), e && (Object(Ue.p)(n), Object(Ue.p)(a)), Object(Ue.m)(h, e), f && f.d()
            }
        }
    }
    function Emotes_popup_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(function emotes_popup_svelte_data() {
            return {
                emotesInRowCount: 0,
                emoticons: $.getList(l.k),
                translations: l.i
            }
        }(), e.data), this._intro = !0, this._fragment = function emotes_popup_svelte_create_main_fragment(e, t) {
            var n,
                a = t.chat.emotesPopupIsOpen && emotes_popup_svelte_create_if_block(e, t);
            return {
                c: function c() {
                    a && a.c(), n = Object(Ue.h)()
                },
                m: function m(e, t) {
                    a && a.m(e, t), Object(Ue.u)(e, n, t)
                },
                p: function p(t, s) {
                    s.chat.emotesPopupIsOpen ? a ? a.p(t, s) : ((a = emotes_popup_svelte_create_if_block(e, s)).c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null)
                },
                d: function d(e) {
                    a && a.d(e), e && Object(Ue.p)(n)
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor))
    }
    Object(Ue.e)(Emotes_popup_svelte.prototype, Ue.x), Object(Ue.e)(Emotes_popup_svelte.prototype, xe);
    var He = Emotes_popup_svelte;
    function getLocale() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
            n = e || (Object.prototype.hasOwnProperty.call(window, "context") ? window.context.i18n.locale : "en-US");
        return n.replace("_", t)
    }
    var Fe = {
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
        Ge = {
            hoursMinute: function hoursMinute(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = 86400,
                    a = 3600,
                    s = 60,
                    r = "{0} 0 days|{1} 1 day|]1,Inf] %1$s% days",
                    u = "{0} 0 hours|{1} 1 hour|]1,Inf] %1$s% hours",
                    l = "{0} 0 min|{1} 1 min|]1,Inf] %1$s% min",
                    h = [],
                    _ = 0,
                    f = 0,
                    b = 0,
                    g = e;
                return !0 === t && (g -= (_ = Math.floor(g / n)) * n), g -= (f = Math.floor(g / a)) * a, b = Math.floor(g / s), _ > 0 && h.push(V.default.transChoice(r, _, {
                    "%1$s%": _
                })), f > 0 && h.push(V.default.transChoice(u, f, {
                    "%1$s%": f
                })), (b > 0 || 0 === h.length) && h.push(V.default.transChoice(l, b, {
                    "%1$s%": b
                })), h.join(" ")
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
                        a = {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        };
                    return new Intl.DateTimeFormat(n, a).format(t)
                }
                var s = "0".concat(t.getMonth() + 1).slice(-2),
                    r = "0".concat(t.getDate()).slice(-2);
                return "".concat(s, "/").concat(r, "/").concat(t.getFullYear())
            },
            relative: function relative(e) {
                var t,
                    n,
                    a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    r = Date.now(),
                    u = e instanceof Date ? e : new Date(e),
                    l = u.getTime(),
                    h = r - l;
                if (Math.abs(h) > Fe.month.milliseconds && a) {
                    var _ = {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                    };
                    return new Intl.DateTimeFormat(getLocale(), _).format(l)
                }
                if (h >= Fe.year.milliseconds)
                    n = Fe.year, t = Math.abs(Math.floor(h / Fe.year.milliseconds));
                else if (h >= Fe.month.milliseconds)
                    n = Fe.month, t = Math.abs(Math.floor(h / Fe.month.milliseconds));
                else if (h >= Fe.day.milliseconds)
                    n = Fe.day, t = Math.abs(Math.floor(h / Fe.day.milliseconds));
                else if (h >= Fe.hour.milliseconds)
                    n = Fe.hour, t = Math.abs(Math.floor(h / Fe.hour.milliseconds));
                else {
                    if (!(h >= Fe.minute.milliseconds))
                        return V.default.trans("Just now");
                    n = Fe.minute, t = Math.abs(Math.floor(h / Fe.minute.milliseconds))
                }
                var f = Math.abs(h) === h;
                return V.default.transChoice(f && s ? n.strAgo : n.str, t, {
                    "%1$s%": t
                })
            },
            customNumericDate: function customNumericDate() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "m/d/y",
                    a = e instanceof Date ? e : new Date(e),
                    s = {
                        d: "0".concat(a.getDate()).slice(-2),
                        m: "0".concat(a.getMonth() + 1).slice(-2),
                        y: "".concat(a.getFullYear())
                    },
                    r = ["m", "d", "y"].every((function(e) {
                        return n.split("/").includes(e)
                    }));
                return r ? n.split("/").reduce((function(e, t) {
                    return e.push(s[t]), e
                }), []).join(t) : "".concat(s.m).concat(t).concat(s.d).concat(t).concat(s.y)
            }
        };
    var ze = n(13);
    n(95);
    var Be = {
        calculateDate: function calculateDate() {
            var e = this.get().message,
                t = new Date(e.timestamp),
                n = Ge.relative(t);
            this.set({
                since: n
            })
        },
        cancel: function cancel() {
            var e = this.get(),
                t = e.message,
                n = e.index,
                a = t.chatId;
            ot.chat.messageDelete(a, n)
        },
        toggleVisibility: function toggleVisibility() {
            var e = this.get().message;
            ot.chat.toggleMessageVisibility({
                chatId: e.chatId,
                messageId: e.id,
                isHidden: !e.isHidden
            })
        },
        tryAgain: function tryAgain() {
            var e = this.get(),
                t = e.message,
                n = e.index,
                a = t.chatId;
            ot.chat.messageDelete(a, n), ot.chat.sendMessage(a, t.originalMessage)
        }
    };
    function message_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.chunk = t[n], a
    }
    function create_if_block_5(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h = t.author.username,
            _ = t.author.flairCode && t.author.flairCode !== t.noFlairCode && create_if_block_7(e, t),
            f = t.author.chessTitle && create_if_block_6(e, t);
        return {
            c: function c() {
                n = Object(Ue.i)("div"), _ && _.c(), a = Object(Ue.k)("\n\n      "), f && f.c(), s = Object(Ue.k)("\n\n      "), r = Object(Ue.k)(h), u = Object(Ue.k)(":"), n.className = l = "\n      chat-message-author\n      chat-message-author-" + t.author.membership + "\n      " + (t.author.isSelf ? "chat-message-author-self" : "") + "\n      " + (t.author.membershipValue > 10 ? "chat-message-author-premium" : "") + "\n      " + (t.author.isFriend ? "chat-message-author-friend" : "") + "\n      " + (t.author.isStreamer ? "chat-message-author-streamer" : "") + "\n      " + (t.author.chessTitle ? "chat-message-author-titled" : "") + "\n     svelte-le3ykw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), _ && _.m(n, null), Object(Ue.d)(n, a), f && f.m(n, null), Object(Ue.d)(n, s), Object(Ue.d)(n, r), Object(Ue.d)(n, u)
            },
            p: function p(t, u) {
                u.author.flairCode && u.author.flairCode !== u.noFlairCode ? _ ? _.p(t, u) : ((_ = create_if_block_7(e, u)).c(), _.m(n, a)) : _ && (_.d(1), _ = null), u.author.chessTitle ? f ? f.p(t, u) : ((f = create_if_block_6(e, u)).c(), f.m(n, s)) : f && (f.d(1), f = null), t.author && h !== (h = u.author.username) && Object(Ue.E)(r, h), t.author && l !== (l = "\n      chat-message-author\n      chat-message-author-" + u.author.membership + "\n      " + (u.author.isSelf ? "chat-message-author-self" : "") + "\n      " + (u.author.membershipValue > 10 ? "chat-message-author-premium" : "") + "\n      " + (u.author.isFriend ? "chat-message-author-friend" : "") + "\n      " + (u.author.isStreamer ? "chat-message-author-streamer" : "") + "\n      " + (u.author.chessTitle ? "chat-message-author-titled" : "") + "\n     svelte-le3ykw") && (n.className = l)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), _ && _.d(), f && f.d()
            }
        }
    }
    function create_if_block_7(e, t) {
        var n,
            a;
        return {
            c: function c() {
                (n = Object(Ue.i)("span")).className = a = "flair-component flair-" + t.author.flairCode + " svelte-le3ykw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            p: function p(e, t) {
                e.author && a !== (a = "flair-component flair-" + t.author.flairCode + " svelte-le3ykw") && (n.className = a)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function create_if_block_6(e, t) {
        var n,
            a,
            s = t.author.chessTitle;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.k)(s), n.className = "chat-message-chess-title svelte-le3ykw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.author && s !== (s = t.author.chessTitle) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function message_svelte_create_if_block_2(e, t) {
        for (var n, a = t.message.content, s = [], r = 0; r < a.length; r += 1)
            s[r] = message_svelte_create_each_block(e, message_svelte_get_each_context(t, a, r));
        return {
            c: function c() {
                for (var e = 0; e < s.length; e += 1)
                    s[e].c();
                n = Object(Ue.h)()
            },
            m: function m(e, t) {
                for (var a = 0; a < s.length; a += 1)
                    s[a].m(e, t);
                Object(Ue.u)(e, n, t)
            },
            p: function p(t, r) {
                if (t.message) {
                    a = r.message.content;
                    for (var u = 0; u < a.length; u += 1) {
                        var l = message_svelte_get_each_context(r, a, u);
                        s[u] ? s[u].p(t, l) : (s[u] = message_svelte_create_each_block(e, l), s[u].c(), s[u].m(n.parentNode, n))
                    }
                    for (; u < s.length; u += 1)
                        s[u].d(1);
                    s.length = a.length
                }
            },
            d: function d(e) {
                Object(Ue.m)(s, e), e && Object(Ue.p)(n)
            }
        }
    }
    function message_svelte_create_if_block_4(e, t) {
        var n,
            a;
        return {
            c: function c() {
                (n = Object(Ue.i)("span")).className = a = "\n            chat-emoticon" + (t.message.isEmotesEnlarged ? "-2x" : "") + "\n            chat-emoticon" + (t.message.isEmotesEnlarged ? "-2x" : "") + "-" + t.chunk.iconCode + "\n           svelte-le3ykw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            p: function p(e, t) {
                e.message && a !== (a = "\n            chat-emoticon" + (t.message.isEmotesEnlarged ? "-2x" : "") + "\n            chat-emoticon" + (t.message.isEmotesEnlarged ? "-2x" : "") + "-" + t.chunk.iconCode + "\n           svelte-le3ykw") && (n.className = a)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function message_svelte_create_if_block_3(e, t) {
        var n,
            a,
            s = t.chunk.text + " ";
        return {
            c: function c() {
                n = Object(Ue.i)("noscript"), a = Object(Ue.i)("noscript")
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), n.insertAdjacentHTML("afterend", s), Object(Ue.u)(e, a, t)
            },
            p: function p(e, t) {
                e.message && s !== (s = t.chunk.text + " ") && (Object(Ue.o)(n, a), n.insertAdjacentHTML("afterend", s))
            },
            d: function d(e) {
                e && (Object(Ue.o)(n, a), Object(Ue.p)(n), Object(Ue.p)(a))
            }
        }
    }
    function message_svelte_create_each_block(e, t) {
        var n;
        function select_block_type(e) {
            return e.chunk.text ? message_svelte_create_if_block_3 : e.chunk.iconCode ? message_svelte_create_if_block_4 : void 0
        }
        var a = select_block_type(t),
            s = a && a(e, t);
        return {
            c: function c() {
                s && s.c(), n = Object(Ue.h)()
            },
            m: function m(e, t) {
                s && s.m(e, t), Object(Ue.u)(e, n, t)
            },
            p: function p(t, r) {
                a === (a = select_block_type(r)) && s ? s.p(t, r) : (s && s.d(1), (s = a && a(e, r)) && s.c(), s && s.m(n.parentNode, n))
            },
            d: function d(e) {
                s && s.d(e), e && Object(Ue.p)(n)
            }
        }
    }
    function message_svelte_create_if_block_1(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h,
            _,
            f = t.translations.sendMessageError,
            b = t.translations.tryAgain,
            g = t.translations.cancel;
        function click_handler(t) {
            e.tryAgain()
        }
        function click_handler_1(t) {
            e.cancel()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(f), s = Object(Ue.k)("\n\n        "), r = Object(Ue.i)("button"), u = Object(Ue.k)(b), l = Object(Ue.k)("\n\n        "), h = Object(Ue.i)("button"), _ = Object(Ue.k)(g), Object(Ue.c)(r, "click", click_handler), r.className = "chat-message-action svelte-le3ykw", r.type = "button", Object(Ue.c)(h, "click", click_handler_1), h.className = "chat-message-action svelte-le3ykw", h.type = "button", n.className = "chat-message-error svelte-le3ykw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(n, s), Object(Ue.d)(n, r), Object(Ue.d)(r, u), Object(Ue.d)(n, l), Object(Ue.d)(n, h), Object(Ue.d)(h, _)
            },
            p: function p(e, t) {
                e.translations && f !== (f = t.translations.sendMessageError) && Object(Ue.E)(a, f), e.translations && b !== (b = t.translations.tryAgain) && Object(Ue.E)(u, b), e.translations && g !== (g = t.translations.cancel) && Object(Ue.E)(_, g)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(r, "click", click_handler), Object(Ue.A)(h, "click", click_handler_1)
            }
        }
    }
    function message_svelte_create_if_block(e, t) {
        var n,
            a,
            s,
            r;
        function click_handler(t) {
            e.toggleVisibility()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("button"), (a = Object(Ue.i)("span")).className = s = "icon-font-chess " + (t.message.isHidden ? "undo" : "x") + " svelte-le3ykw", Object(Ue.c)(n, "click", click_handler), n.className = "chat-message-toggle-visibility svelte-le3ykw", n.title = r = t.message.isHidden ? t.translations.restoreMessage : t.translations.deleteMessage, n.type = "button"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.message && s !== (s = "icon-font-chess " + (t.message.isHidden ? "undo" : "x") + " svelte-le3ykw") && (a.className = s), (e.message || e.translations) && r !== (r = t.message.isHidden ? t.translations.restoreMessage : t.translations.deleteMessage) && (n.title = r)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", click_handler)
            }
        }
    }
    function Message_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["users"]), function message_svelte_data() {
            return {
                noFlairCode: ze.a.code,
                since: "",
                translations: l.i
            }
        }()), e.data), this.store._add(this, ["users"]), this._recompute({
            $users: 1,
            message: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function message_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s,
                r,
                u,
                l,
                h,
                _ = t.showAuthor && create_if_block_5(e, t),
                f = t.message.content && message_svelte_create_if_block_2(e, t),
                b = t.message.hasError && message_svelte_create_if_block_1(e, t);
            function mouseover_handler(t) {
                e.calculateDate()
            }
            var g = t.isModerator && message_svelte_create_if_block(e, t);
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), _ && _.c(), a = Object(Ue.k)("\n\n  "), s = Object(Ue.i)("span"), f && f.c(), r = Object(Ue.k)("\n\n    "), b && b.c(), u = Object(Ue.k)("\n\n  "), g && g.c(), Object(Ue.c)(s, "mouseover", mouseover_handler), s.className = "chat-message-text svelte-le3ykw", s.title = t.since, n.className = l = "\n    chat-message\n    " + (t.message.isHidden ? "chat-message-hidden" : "") + "\n    " + (t.isModerator ? "chat-message-for-moderator" : "") + "\n   svelte-le3ykw", n.dataset.id = h = "chat-message-" + t.message.id
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), _ && _.m(n, null), Object(Ue.d)(n, a), Object(Ue.d)(n, s), f && f.m(s, null), Object(Ue.d)(s, r), b && b.m(s, null), Object(Ue.d)(n, u), g && g.m(n, null)
                },
                p: function p(t, u) {
                    u.showAuthor ? _ ? _.p(t, u) : ((_ = create_if_block_5(e, u)).c(), _.m(n, a)) : _ && (_.d(1), _ = null), u.message.content ? f ? f.p(t, u) : ((f = message_svelte_create_if_block_2(e, u)).c(), f.m(s, r)) : f && (f.d(1), f = null), u.message.hasError ? b ? b.p(t, u) : ((b = message_svelte_create_if_block_1(e, u)).c(), b.m(s, null)) : b && (b.d(1), b = null), t.since && (s.title = u.since), u.isModerator ? g ? g.p(t, u) : ((g = message_svelte_create_if_block(e, u)).c(), g.m(n, null)) : g && (g.d(1), g = null), (t.message || t.isModerator) && l !== (l = "\n    chat-message\n    " + (u.message.isHidden ? "chat-message-hidden" : "") + "\n    " + (u.isModerator ? "chat-message-for-moderator" : "") + "\n   svelte-le3ykw") && (n.className = l), t.message && h !== (h = "chat-message-" + u.message.id) && (n.dataset.id = h)
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), _ && _.d(), f && f.d(), b && b.d(), Object(Ue.A)(s, "mouseover", mouseover_handler), g && g.d()
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor))
    }
    Object(Ue.e)(Message_svelte.prototype, Ue.x), Object(Ue.e)(Message_svelte.prototype, Be), Message_svelte.prototype._recompute = function _recompute(e, t) {
        (e.$users || e.message) && this._differs(t.author, t.author = function author(e) {
            return e.$users[e.message.authorId] || {
                    username: "…"
                }
        }(t)) && (e.author = !0)
    };
    var We = Message_svelte;
    n(96);
    var qe = {
        changeValue: function changeValue(e) {
            var t = this.get().chat;
            ot.chat.changeMessagesFilter(t.id, e), this.fire("select")
        }
    };
    function messages_filter_svelte_click_handler(e) {
        var t = this._svelte,
            n = t.component,
            a = t.ctx;
        n.changeValue(a.option)
    }
    function messages_filter_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.option = t[n], a
    }
    function messages_filter_svelte_create_each_block(e, t) {
        var n,
            a,
            s,
            r,
            u = t.translations[t.option];
        return {
            c: function c() {
                n = Object(Ue.i)("button"), a = Object(Ue.k)(u), s = Object(Ue.k)("\n    "), n._svelte = {
                    component: e,
                    ctx: t
                }, Object(Ue.c)(n, "click", messages_filter_svelte_click_handler), n.className = r = "\n        chat-messages-filter-option\n        " + (t.chat.messagesFilter === t.option ? "chat-messages-filter-option-active" : "") + "\n       svelte-72cm88", n.type = "button"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(n, s)
            },
            p: function p(e, s) {
                t = s, (e.translations || e.options) && u !== (u = t.translations[t.option]) && Object(Ue.E)(a, u), n._svelte.ctx = t, (e.chat || e.options) && r !== (r = "\n        chat-messages-filter-option\n        " + (t.chat.messagesFilter === t.option ? "chat-messages-filter-option-active" : "") + "\n       svelte-72cm88") && (n.className = r)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", messages_filter_svelte_click_handler)
            }
        }
    }
    function Messages_filter_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(function messages_filter_svelte_data() {
            return {
                options: [l.g.EVERYONE, l.g.FRIENDS, l.g.TITLED_PLAYERS],
                translations: l.i
            }
        }(), e.data), this._intro = !0, this._fragment = function messages_filter_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s;
            function click_handler(t) {
                e.fire("close")
            }
            for (var r = t.options, u = [], l = 0; l < r.length; l += 1)
                u[l] = messages_filter_svelte_create_each_block(e, messages_filter_svelte_get_each_context(t, r, l));
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), a = Object(Ue.k)("\n\n"), s = Object(Ue.i)("div");
                    for (var e = 0; e < u.length; e += 1)
                        u[e].c();
                    Object(Ue.c)(n, "click", click_handler), n.className = "chat-messages-filter-overlay svelte-72cm88", s.className = "chat-messages-filter-list svelte-72cm88"
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), Object(Ue.u)(e, a, t), Object(Ue.u)(e, s, t);
                    for (var r = 0; r < u.length; r += 1)
                        u[r].m(s, null)
                },
                p: function p(t, n) {
                    if (t.chat || t.options || t.translations) {
                        r = n.options;
                        for (var a = 0; a < r.length; a += 1) {
                            var l = messages_filter_svelte_get_each_context(n, r, a);
                            u[a] ? u[a].p(t, l) : (u[a] = messages_filter_svelte_create_each_block(e, l), u[a].c(), u[a].m(s, null))
                        }
                        for (; a < u.length; a += 1)
                            u[a].d(1);
                        u.length = r.length
                    }
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), Object(Ue.A)(n, "click", click_handler), e && (Object(Ue.p)(a), Object(Ue.p)(s)), Object(Ue.m)(u, e)
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor))
    }
    Object(Ue.e)(Messages_filter_svelte.prototype, Ue.x), Object(Ue.e)(Messages_filter_svelte.prototype, qe);
    var Ve = Messages_filter_svelte;
    n(97);
    function authorIsVisible(e, t) {
        var n = e[t],
            a = e[t - 1];
        return !a || a.authorId !== n.authorId
    }
    function messageIsVisible(e) {
        var t = e.authorId,
            n = e.currentUserId,
            a = e.currentUserIsModerator,
            s = e.filterValue,
            r = e.messageHiddenByModerator,
            u = e.options,
            l = e.users[t],
            h = t === n,
            _ = s === u.EVERYONE || s === u.FRIENDS && l && l.isFriend || s === u.TITLED_PLAYERS && l && l.chessTitle;
        return h || _ && (!r || a)
    }
    var $e = {
        acceptChatRequest: function acceptChatRequest() {
            var e = this.get().chat;
            ot.chat.answer(e.id, g.Status.ACCEPTED)
        },
        closeChat: function closeChat() {
            var e = this.get().chat;
            ot.chat.close(e.id)
        },
        declineChatRequest: function declineChatRequest() {
            var e = this.get().chat;
            ot.chat.answer(e.id, g.Status.REJECTED)
        },
        toggleFilter: function toggleFilter() {
            var e = this.get().showFilter;
            this.set({
                showFilter: !e
            })
        }
    };
    function messages_list_svelte_oncreate() {
        var e = this.get().chat;
        this.refs.list && this.refs.list.addEventListener("scroll", (function(t) {
            ot.scroll.handle(e.id, t.target.scrollTop)
        }))
    }
    function messages_list_svelte_get_each_context_2(e, t, n) {
        var a = Object.create(e);
        return a.error = t[n], a
    }
    function messages_list_svelte_get_each_context_1(e, t, n) {
        var a = Object.create(e);
        return a.serviceMessage = t[n], a
    }
    function messages_list_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.message = t[n], a.index = n, a
    }
    function create_else_block(e, t) {
        for (var n, a, s, r, u = t.chat.messages, l = [], h = 0; h < u.length; h += 1)
            l[h] = messages_list_svelte_create_each_block_1(e, messages_list_svelte_get_each_context(t, u, h));
        var _ = t.chat.confirmations[t.chat.userId] === t.chatStatuses.PENDING && t.chat.messages.length > 0 && messages_list_svelte_create_if_block_5(e, t),
            f = t.errors && t.errors.length && messages_list_svelte_create_if_block_4(e, t),
            b = t.chat.isClub && messages_list_svelte_create_if_block_2(e, t);
        return {
            c: function c() {
                for (var e = 0; e < l.length; e += 1)
                    l[e].c();
                n = Object(Ue.k)("\n\n    "), _ && _.c(), a = Object(Ue.k)("\n\n    "), f && f.c(), s = Object(Ue.k)("\n\n    "), b && b.c(), r = Object(Ue.h)()
            },
            m: function m(e, t) {
                for (var u = 0; u < l.length; u += 1)
                    l[u].m(e, t);
                Object(Ue.u)(e, n, t), _ && _.m(e, t), Object(Ue.u)(e, a, t), f && f.m(e, t), Object(Ue.u)(e, s, t), b && b.m(e, t), Object(Ue.u)(e, r, t)
            },
            p: function p(t, h) {
                if (t.chat || t.uid || t.filterValues || t.$users) {
                    u = h.chat.messages;
                    for (var g = 0; g < u.length; g += 1) {
                        var v = messages_list_svelte_get_each_context(h, u, g);
                        l[g] ? l[g].p(t, v) : (l[g] = messages_list_svelte_create_each_block_1(e, v), l[g].c(), l[g].m(n.parentNode, n))
                    }
                    for (; g < l.length; g += 1)
                        l[g].d(1);
                    l.length = u.length
                }
                h.chat.confirmations[h.chat.userId] === h.chatStatuses.PENDING && h.chat.messages.length > 0 ? _ ? _.p(t, h) : ((_ = messages_list_svelte_create_if_block_5(e, h)).c(), _.m(a.parentNode, a)) : _ && (_.d(1), _ = null), h.errors && h.errors.length ? f ? f.p(t, h) : ((f = messages_list_svelte_create_if_block_4(e, h)).c(), f.m(s.parentNode, s)) : f && (f.d(1), f = null), h.chat.isClub ? b ? b.p(t, h) : ((b = messages_list_svelte_create_if_block_2(e, h)).c(), b.m(r.parentNode, r)) : b && (b.d(1), b = null)
            },
            d: function d(e) {
                Object(Ue.m)(l, e), e && Object(Ue.p)(n), _ && _.d(e), e && Object(Ue.p)(a), f && f.d(e), e && Object(Ue.p)(s), b && b.d(e), e && Object(Ue.p)(r)
            }
        }
    }
    function messages_list_svelte_create_if_block_1(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h,
            _,
            f,
            b = t.translations.declinedChatRequest(t.chat.name),
            g = t.translations.gotIt,
            v = t.translations.acceptAndChat;
        function click_handler(t) {
            e.closeChat()
        }
        function click_handler_1(t) {
            e.acceptChatRequest()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(b), s = Object(Ue.k)("\n\n      "), r = Object(Ue.i)("div"), u = Object(Ue.i)("button"), l = Object(Ue.k)(g), h = Object(Ue.k)("\n\n        "), _ = Object(Ue.i)("button"), f = Object(Ue.k)(v), Object(Ue.c)(u, "click", click_handler), u.className = "form-button-component form-button-small form-button-basic", u.type = "button", Object(Ue.c)(_, "click", click_handler_1), _.className = "form-button-component form-button-small form-button-primary", _.type = "button", r.className = "chat-messages-list-actions svelte-1wlg8hq", n.className = "chat-messages-list-user-wants-to-chat svelte-1wlg8hq"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(n, s), Object(Ue.d)(n, r), Object(Ue.d)(r, u), Object(Ue.d)(u, l), Object(Ue.d)(r, h), Object(Ue.d)(r, _), Object(Ue.d)(_, f)
            },
            p: function p(e, t) {
                (e.translations || e.chat) && b !== (b = t.translations.declinedChatRequest(t.chat.name)) && Object(Ue.E)(a, b), e.translations && g !== (g = t.translations.gotIt) && Object(Ue.E)(l, g), e.translations && v !== (v = t.translations.acceptAndChat) && Object(Ue.E)(f, v)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(u, "click", click_handler), Object(Ue.A)(_, "click", click_handler_1)
            }
        }
    }
    function messages_list_svelte_create_if_block(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h,
            _,
            f,
            b = t.translations.userWantsToChat(t.chat.name || ""),
            g = t.translations.accept,
            v = t.translations.decline;
        function click_handler(t) {
            e.acceptChatRequest()
        }
        function click_handler_1(t) {
            e.declineChatRequest()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(b), s = Object(Ue.k)("\n\n      "), r = Object(Ue.i)("div"), u = Object(Ue.i)("button"), l = Object(Ue.k)(g), h = Object(Ue.k)("\n\n        "), _ = Object(Ue.i)("button"), f = Object(Ue.k)(v), Object(Ue.c)(u, "click", click_handler), u.className = "form-button-component form-button-small form-button-primary", u.type = "button", Object(Ue.c)(_, "click", click_handler_1), _.className = "form-button-component form-button-small form-button-basic", _.type = "button", r.className = "chat-messages-list-actions svelte-1wlg8hq", n.className = "chat-messages-list-user-wants-to-chat svelte-1wlg8hq"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(n, s), Object(Ue.d)(n, r), Object(Ue.d)(r, u), Object(Ue.d)(u, l), Object(Ue.d)(r, h), Object(Ue.d)(r, _), Object(Ue.d)(_, f)
            },
            p: function p(e, t) {
                (e.translations || e.chat) && b !== (b = t.translations.userWantsToChat(t.chat.name || "")) && Object(Ue.E)(a, b), e.translations && g !== (g = t.translations.accept) && Object(Ue.E)(l, g), e.translations && v !== (v = t.translations.decline) && Object(Ue.E)(f, v)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(u, "click", click_handler), Object(Ue.A)(_, "click", click_handler_1)
            }
        }
    }
    function messages_list_svelte_create_if_block_7(e, t) {
        var n = {
                chat: t.chat,
                index: t.index,
                message: t.message,
                isModerator: t.chat.moderators[t.uid],
                showAuthor: authorIsVisible(t.chat.messages, t.index)
            },
            a = new We({
                root: e.root,
                store: e.store,
                data: n
            });
        return {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), e.chat && (n.message = t.message), (e.chat || e.uid) && (n.isModerator = t.chat.moderators[t.uid]), e.chat && (n.showAuthor = authorIsVisible(t.chat.messages, t.index)), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function messages_list_svelte_create_if_block_6(e, t) {
        for (var n, a = t.chat.serviceMessages[t.message.id], s = [], r = 0; r < a.length; r += 1)
            s[r] = messages_list_svelte_create_each_block_2(e, messages_list_svelte_get_each_context_1(t, a, r));
        return {
            c: function c() {
                for (var e = 0; e < s.length; e += 1)
                    s[e].c();
                n = Object(Ue.h)()
            },
            m: function m(e, t) {
                for (var a = 0; a < s.length; a += 1)
                    s[a].m(e, t);
                Object(Ue.u)(e, n, t)
            },
            p: function p(t, r) {
                if (t.chat) {
                    a = r.chat.serviceMessages[r.message.id];
                    for (var u = 0; u < a.length; u += 1) {
                        var l = messages_list_svelte_get_each_context_1(r, a, u);
                        s[u] ? s[u].p(t, l) : (s[u] = messages_list_svelte_create_each_block_2(e, l), s[u].c(), s[u].m(n.parentNode, n))
                    }
                    for (; u < s.length; u += 1)
                        s[u].d(1);
                    s.length = a.length
                }
            },
            d: function d(e) {
                Object(Ue.m)(s, e), e && Object(Ue.p)(n)
            }
        }
    }
    function messages_list_svelte_create_each_block_2(e, t) {
        var n,
            a,
            s = t.serviceMessage.content;
        return {
            c: function c() {
                (n = Object(Ue.i)("div")).className = a = "chat-messages-list-service-message chat-messages-list-service-" + t.serviceMessage.type + " svelte-1wlg8hq"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), n.innerHTML = s
            },
            p: function p(e, t) {
                e.chat && s !== (s = t.serviceMessage.content) && (n.innerHTML = s), e.chat && a !== (a = "chat-messages-list-service-message chat-messages-list-service-" + t.serviceMessage.type + " svelte-1wlg8hq") && (n.className = a)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function messages_list_svelte_create_each_block_1(e, t) {
        var n,
            a,
            s = messageIsVisible({
                authorId: t.message.authorId,
                currentUserId: t.uid,
                currentUserIsModerator: t.chat.moderators[t.uid],
                filterValue: t.chat.messagesFilter,
                messageHiddenByModerator: t.message.isHidden,
                options: t.filterValues,
                users: t.$users
            }) && messages_list_svelte_create_if_block_7(e, t),
            r = t.chat.serviceMessages[t.message.id] && messages_list_svelte_create_if_block_6(e, t);
        return {
            c: function c() {
                s && s.c(), n = Object(Ue.k)("\n\n      "), r && r.c(), a = Object(Ue.h)()
            },
            m: function m(e, t) {
                s && s.m(e, t), Object(Ue.u)(e, n, t), r && r.m(e, t), Object(Ue.u)(e, a, t)
            },
            p: function p(t, u) {
                messageIsVisible({
                    authorId: u.message.authorId,
                    currentUserId: u.uid,
                    currentUserIsModerator: u.chat.moderators[u.uid],
                    filterValue: u.chat.messagesFilter,
                    messageHiddenByModerator: u.message.isHidden,
                    options: u.filterValues,
                    users: u.$users
                }) ? s ? s.p(t, u) : ((s = messages_list_svelte_create_if_block_7(e, u)).c(), s.m(n.parentNode, n)) : s && (s.d(1), s = null), u.chat.serviceMessages[u.message.id] ? r ? r.p(t, u) : ((r = messages_list_svelte_create_if_block_6(e, u)).c(), r.m(a.parentNode, a)) : r && (r.d(1), r = null)
            },
            d: function d(e) {
                s && s.d(e), e && Object(Ue.p)(n), r && r.d(e), e && Object(Ue.p)(a)
            }
        }
    }
    function messages_list_svelte_create_if_block_5(e, t) {
        var n,
            a,
            s = t.translations.chatRequestSent;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.k)(s), n.className = "chat-messages-list-request-sent svelte-1wlg8hq"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.translations && s !== (s = t.translations.chatRequestSent) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function messages_list_svelte_create_if_block_4(e, t) {
        for (var n, a = t.errors, s = [], r = 0; r < a.length; r += 1)
            s[r] = messages_list_svelte_create_each_block(e, messages_list_svelte_get_each_context_2(t, a, r));
        return {
            c: function c() {
                for (var e = 0; e < s.length; e += 1)
                    s[e].c();
                n = Object(Ue.h)()
            },
            m: function m(e, t) {
                for (var a = 0; a < s.length; a += 1)
                    s[a].m(e, t);
                Object(Ue.u)(e, n, t)
            },
            p: function p(t, r) {
                if (t.errors) {
                    a = r.errors;
                    for (var u = 0; u < a.length; u += 1) {
                        var l = messages_list_svelte_get_each_context_2(r, a, u);
                        s[u] ? s[u].p(t, l) : (s[u] = messages_list_svelte_create_each_block(e, l), s[u].c(), s[u].m(n.parentNode, n))
                    }
                    for (; u < s.length; u += 1)
                        s[u].d(1);
                    s.length = a.length
                }
            },
            d: function d(e) {
                Object(Ue.m)(s, e), e && Object(Ue.p)(n)
            }
        }
    }
    function messages_list_svelte_create_each_block(e, t) {
        var n,
            a,
            s = t.error;
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(s), n.className = "chat-messages-list-error svelte-1wlg8hq"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.errors && s !== (s = t.error) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function messages_list_svelte_create_if_block_2(e, t) {
        var n,
            a,
            s,
            r,
            u;
        function click_handler(t) {
            e.toggleFilter()
        }
        var l = t.showFilter && messages_list_svelte_create_if_block_3(e, t);
        return {
            c: function c() {
                n = Object(Ue.i)("button"), a = Object(Ue.i)("span"), r = Object(Ue.k)("\n\n      "), l && l.c(), u = Object(Ue.h)(), a.className = "icon-font-chess circle-gearwheel", Object(Ue.c)(n, "click", click_handler), n.className = "chat-messages-filter-toggler svelte-1wlg8hq", n.title = s = t.translations.chatViewOptions, n.type = "button"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.u)(e, r, t), l && l.m(e, t), Object(Ue.u)(e, u, t)
            },
            p: function p(t, a) {
                t.translations && s !== (s = a.translations.chatViewOptions) && (n.title = s), a.showFilter ? l ? l.p(t, a) : ((l = messages_list_svelte_create_if_block_3(e, a)).c(), l.m(u.parentNode, u)) : l && (l.d(1), l = null)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", click_handler), e && Object(Ue.p)(r), l && l.d(e), e && Object(Ue.p)(u)
            }
        }
    }
    function messages_list_svelte_create_if_block_3(e, t) {
        var n = {
                chat: t.chat
            },
            a = new Ve({
                root: e.root,
                store: e.store,
                data: n
            });
        return a.on("close", (function(t) {
            e.toggleFilter()
        })), a.on("select", (function(t) {
            e.toggleFilter()
        })), {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function Messages_list_svelte(e) {
        var t = this;
        Object(Ue.t)(this, e), this.refs = {}, this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["unrecoverableFailure", "users"]), function messages_list_svelte_data() {
            return {
                chatStatuses: g.Status,
                filterValues: l.g,
                showFilter: !1,
                translations: l.i,
                uid: l.j
            }
        }()), e.data), this.store._add(this, ["unrecoverableFailure", "users"]), this._recompute({
            $unrecoverableFailure: 1,
            chat: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function messages_list_svelte_create_main_fragment(e, t) {
            var n,
                a;
            function select_block_type(e) {
                return e.chat.confirmations[e.uid] === e.chatStatuses.PENDING ? messages_list_svelte_create_if_block : e.chat.confirmations[e.uid] === e.chatStatuses.REJECTED || e.chat.confirmations[e.uid] === e.chatStatuses.REJECTED_EXPIRED ? messages_list_svelte_create_if_block_1 : create_else_block
            }
            var s = select_block_type(t),
                r = s(e, t);
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), r.c(), n.className = "chat-messages-list svelte-1wlg8hq", n.dataset.id = a = "chat-messages-list-" + t.chat.id
                },
                m: function m(t, a) {
                    Object(Ue.u)(t, n, a), r.m(n, null), e.refs.list = n
                },
                p: function p(t, u) {
                    s === (s = select_block_type(u)) && r ? r.p(t, u) : (r.d(1), (r = s(e, u)).c(), r.m(n, null)), t.chat && a !== (a = "chat-messages-list-" + u.chat.id) && (n.dataset.id = a)
                },
                d: function d(t) {
                    t && Object(Ue.p)(n), r.d(), e.refs.list === n && (e.refs.list = null)
                }
            }
        }(this, this._state), this.root._oncreate.push((function() {
            messages_list_svelte_oncreate.call(t), t.fire("update", {
                changed: Object(Ue.f)({}, t._state),
                current: t._state
            })
        })), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Messages_list_svelte.prototype, Ue.x), Object(Ue.e)(Messages_list_svelte.prototype, $e), Messages_list_svelte.prototype._recompute = function _recompute(e, t) {
        (e.$unrecoverableFailure || e.chat) && this._differs(t.errors, t.errors = function errors(e) {
            var t = e.$unrecoverableFailure,
                n = e.chat;
            return ot.chat.getErrors(n.id, t)
        }(t)) && (e.errors = !0)
    };
    var Ke = Messages_list_svelte;
    n(98);
    var Ye = {
        handleClick: function handleClick() {
            var e = this.get().chat;
            ot.chat.toggleEmotes(e.id, !1)
        },
        handleKeyUp: function handleKeyUp(e) {
            if (e.keyCode === l.e.KEY_ENTER && this.send(), e.keyCode === l.e.KEY_ESC) {
                var t = this.get().chat;
                ot.chat.toggleEmotes(t.id, !1)
            }
        },
        send: function send() {
            var e = this.get().chat;
            ot.chat.handleFormConfirm(e.id), this.refs.input && this.refs.input.focus()
        },
        toggleEmotesPopup: function toggleEmotesPopup() {
            var e = this.get().chat;
            ot.chat.toggleEmotes(e.id)
        }
    };
    function send_message_svelte_oncreate() {
        this.refs.input && this.refs.input.focus()
    }
    function send_message_svelte_create_else_block(e, t) {
        var n;
        return {
            c: function c() {
                (n = Object(Ue.i)("div")).className = "chat-add-message-placeholder svelte-z1jpjx"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            p: Ue.v,
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function send_message_svelte_create_if_block(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h,
            _ = !1;
        function input_input_handler() {
            _ = !0, t.chat.draft = a.value, e.set({
                chat: t.chat
            }), _ = !1
        }
        function click_handler(t) {
            e.handleClick(t)
        }
        function keyup_handler(t) {
            e.handleKeyUp(t)
        }
        function keydown_handler(t) {
            t.stopPropagation(), e.fire("keydown", t)
        }
        function click_handler_1(t) {
            e.toggleEmotesPopup()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.i)("input"), l = Object(Ue.k)("\n\n    "), (h = Object(Ue.i)("button")).innerHTML = '<span class="icon-font-component"><span class="icon-font-chess smiley svelte-z1jpjx"></span></span>', Object(Ue.c)(a, "input", input_input_handler), Object(Ue.c)(a, "click", click_handler), Object(Ue.c)(a, "keyup", keyup_handler), Object(Ue.c)(a, "keydown", keydown_handler), a.autocomplete = "off", a.className = "chat-add-message-field svelte-z1jpjx", a.disabled = s = "rejected" === t.chat.status, a.id = r = "chat-message-field-" + t.chat.id, a.placeholder = u = t.translations.message, Object(Ue.c)(h, "click", click_handler_1), h.type = "button", h.className = "chat-add-message-button svelte-z1jpjx", n.className = "chat-add-message svelte-z1jpjx"
            },
            m: function m(s, r) {
                Object(Ue.u)(s, n, r), Object(Ue.d)(n, a), e.refs.input = a, a.value = t.chat.draft, Object(Ue.d)(n, l), Object(Ue.d)(n, h)
            },
            p: function p(e, n) {
                t = n, !_ && e.chat && (a.value = t.chat.draft), e.chat && s !== (s = "rejected" === t.chat.status) && (a.disabled = s), e.chat && r !== (r = "chat-message-field-" + t.chat.id) && (a.id = r), e.translations && u !== (u = t.translations.message) && (a.placeholder = u)
            },
            d: function d(t) {
                t && Object(Ue.p)(n), Object(Ue.A)(a, "input", input_input_handler), Object(Ue.A)(a, "click", click_handler), Object(Ue.A)(a, "keyup", keyup_handler), Object(Ue.A)(a, "keydown", keydown_handler), e.refs.input === a && (e.refs.input = null), Object(Ue.A)(h, "click", click_handler_1)
            }
        }
    }
    function Send_message_svelte(e) {
        var t = this;
        Object(Ue.t)(this, e), this.refs = {}, this._state = Object(Ue.e)(function send_message_svelte_data() {
            return {
                chatStatuses: g.Status,
                translations: l.i,
                uid: l.j
            }
        }(), e.data), this._intro = !0, this._fragment = function send_message_svelte_create_main_fragment(e, t) {
            var n;
            function select_block_type(e) {
                return e.chat.confirmations[e.uid] === e.chatStatuses.ACCEPTED && e.chat.confirmations[e.chat.userId] !== e.chatStatuses.REJECTED ? send_message_svelte_create_if_block : send_message_svelte_create_else_block
            }
            var a = select_block_type(t),
                s = a(e, t);
            return {
                c: function c() {
                    s.c(), n = Object(Ue.h)()
                },
                m: function m(e, t) {
                    s.m(e, t), Object(Ue.u)(e, n, t)
                },
                p: function p(t, r) {
                    a === (a = select_block_type(r)) && s ? s.p(t, r) : (s.d(1), (s = a(e, r)).c(), s.m(n.parentNode, n))
                },
                d: function d(e) {
                    s.d(e), e && Object(Ue.p)(n)
                }
            }
        }(this, this._state), this.root._oncreate.push((function() {
            send_message_svelte_oncreate.call(t), t.fire("update", {
                changed: Object(Ue.f)({}, t._state),
                current: t._state
            })
        })), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Send_message_svelte.prototype, Ue.x), Object(Ue.e)(Send_message_svelte.prototype, Ye);
    var Qe = Send_message_svelte;
    n(99);
    function club_chat_widget_svelte_create_if_block(e, t) {
        var n,
            a,
            s,
            r,
            u;
        function select_block_type(e) {
            return e.chat.messagesListIsLoading ? club_chat_widget_svelte_create_if_block_4 : create_else_block_1
        }
        var l = select_block_type(t),
            h = l(e, t),
            _ = !t.showSidebar && club_chat_widget_svelte_create_if_block_3(e, t);
        function select_block_type_1(e) {
            return e.chat.mutedUsers[e.uid] ? club_chat_widget_svelte_create_if_block_2 : club_chat_widget_svelte_create_else_block
        }
        var f = select_block_type_1(t),
            b = f(e, t),
            g = t.showSidebar && club_chat_widget_svelte_create_if_block_1(e, t);
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.i)("div"), h.c(), s = Object(Ue.k)("\n\n        "), _ && _.c(), r = Object(Ue.k)("\n\n        "), b.c(), u = Object(Ue.k)("\n\n      "), g && g.c(), a.className = "club-chat-widget-content svelte-zmgqaw", n.className = "club-chat-widget-layout svelte-zmgqaw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), h.m(a, null), Object(Ue.d)(a, s), _ && _.m(a, null), Object(Ue.d)(a, r), b.m(a, null), Object(Ue.d)(n, u), g && g.m(n, null)
            },
            p: function p(t, u) {
                l === (l = select_block_type(u)) && h ? h.p(t, u) : (h.d(1), (h = l(e, u)).c(), h.m(a, s)), u.showSidebar ? _ && (_.d(1), _ = null) : _ || ((_ = club_chat_widget_svelte_create_if_block_3(e, u)).c(), _.m(a, r)), f === (f = select_block_type_1(u)) && b ? b.p(t, u) : (b.d(1), (b = f(e, u)).c(), b.m(a, null)), u.showSidebar ? g ? g.p(t, u) : ((g = club_chat_widget_svelte_create_if_block_1(e, u)).c(), g.m(n, null)) : g && (g.d(1), g = null)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), h.d(), _ && _.d(), b.d(), g && g.d()
            }
        }
    }
    function create_else_block_1(e, t) {
        var n = {
                chat: t.chat
            },
            a = new Ke({
                root: e.root,
                store: e.store,
                data: n
            });
        return {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function club_chat_widget_svelte_create_if_block_4(e, t) {
        var n,
            a,
            s = t.translations.loading;
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(s), n.className = "club-chat-widget-loader svelte-zmgqaw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.translations && s !== (s = t.translations.loading) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function club_chat_widget_svelte_create_if_block_3(e, t) {
        var n;
        function click_handler(t) {
            e.toggleSidebar()
        }
        return {
            c: function c() {
                (n = Object(Ue.i)("button")).innerHTML = '<span class="icon-font-chess users"></span>', Object(Ue.c)(n, "click", click_handler), n.className = "club-chat-widget-sidebar-toggler svelte-zmgqaw", n.type = "button"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", click_handler)
            }
        }
    }
    function club_chat_widget_svelte_create_else_block(e, t) {
        var n,
            a = {
                chat: t.chat
            },
            s = new Qe({
                root: e.root,
                store: e.store,
                data: a
            }),
            r = {
                chat: t.chat
            },
            u = new He({
                root: e.root,
                store: e.store,
                data: r
            });
        return {
            c: function c() {
                s._fragment.c(), n = Object(Ue.k)("\n\n          "), u._fragment.c()
            },
            m: function m(e, t) {
                s._mount(e, t), Object(Ue.u)(e, n, t), u._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), s._set(n);
                var a = {};
                e.chat && (a.chat = t.chat), u._set(a)
            },
            d: function d(e) {
                s.destroy(e), e && Object(Ue.p)(n), u.destroy(e)
            }
        }
    }
    function club_chat_widget_svelte_create_if_block_2(e, t) {
        var n,
            a,
            s = t.translations.youHaveBeenMuted;
        return {
            c: function c() {
                n = Object(Ue.i)("div"), a = Object(Ue.k)(s), n.className = "club-chat-widget-muted svelte-zmgqaw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.translations && s !== (s = t.translations.youHaveBeenMuted) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function club_chat_widget_svelte_create_if_block_1(e, t) {
        var n,
            a,
            s,
            r = {
                chat: t.chat
            },
            u = new Le({
                root: e.root,
                store: e.store,
                data: r
            });
        function click_handler(t) {
            e.toggleSidebar()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("div"), u._fragment.c(), a = Object(Ue.k)("\n\n          "), (s = Object(Ue.i)("button")).innerHTML = '<span class="icon-font-chess x"></span>', Object(Ue.c)(s, "click", click_handler), s.className = "club-chat-widget-sidebar-toggler svelte-zmgqaw", s.type = "button", n.className = "club-chat-widget-sidebar svelte-zmgqaw"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), u._mount(n, null), Object(Ue.d)(n, a), Object(Ue.d)(n, s)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), u._set(n)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), u.destroy(), Object(Ue.A)(s, "click", click_handler)
            }
        }
    }
    function Club_chat_widget_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["clubChats"]), function club_chat_widget_svelte_data() {
            return {
                translations: l.i,
                uid: l.j
            }
        }()), e.data), this.store._add(this, ["clubChats"]), this._recompute({
            $clubChats: 1,
            chatId: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function club_chat_widget_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s = t.chat && club_chat_widget_svelte_create_if_block(e, t);
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), s && s.c(), n.className = a = "club-chat-widget " + (t.showSidebar ? "club-chat-widget-with-sidebar" : "") + " svelte-zmgqaw"
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), s && s.m(n, null)
                },
                p: function p(t, r) {
                    r.chat ? s ? s.p(t, r) : ((s = club_chat_widget_svelte_create_if_block(e, r)).c(), s.m(n, null)) : s && (s.d(1), s = null), t.showSidebar && a !== (a = "club-chat-widget " + (r.showSidebar ? "club-chat-widget-with-sidebar" : "") + " svelte-zmgqaw") && (n.className = a)
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), s && s.d()
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Club_chat_widget_svelte.prototype, Ue.x), Object(Ue.e)(Club_chat_widget_svelte.prototype, {
        toggleSidebar: function toggleSidebar() {
            var e = this.get().showSidebar;
            this.set({
                showSidebar: !e
            })
        }
    }), Club_chat_widget_svelte.prototype._recompute = function _recompute(e, t) {
        (e.$clubChats || e.chatId) && this._differs(t.chat, t.chat = function club_chat_widget_svelte_chat(e) {
            return e.$clubChats[e.chatId]
        }(t)) && (e.chat = !0)
    };
    var Je = Club_chat_widget_svelte,
        Xe = n(24);
    var Ze = {
        browserTabsSync: function browserTabsSync() {
            window.addEventListener("storage", (function(e) {
                e.key === Ie[je.NewMessages].storageKey && ("visible" === document.visibilityState ? realActionCall() : Ae || (document.addEventListener("visibilitychange", viewUpdateListener), Ae = !0))
            }))
        },
        initChatModule: function initChatModule() {
            ot.pubsub.updateState(), ot.users.updateDetailsFromCache(), ot.openChats.restore();
            var e = ut.state(),
                t = e.clubChats;
            (e.openChats.length || Object.keys(t).length) && window.addEventListener("load", loadUserPopoverBundle, {
                once: !0
            }), ot.list.load().then((function() {
                ot.users.loadOnlineStatus()
            })), Pe && "function" == typeof Pe.on && Pe.on(Ne.a.FAILURE, (function() {
                Setter({
                    unrecoverableFailure: !0
                })
            })), ot.init.browserTabsSync(), window.addEventListener("resize", Object(Re.a)((function() {
                ot.openChats.checkLimit(), ot.openChats.checkHeight()
            }), l.e.WINDOW_RESIZE_DEBOUNCE)), window.addEventListener("message", (function(e) {
                var t = e.data;
                if (t && (t.key === Me.g.START_DIRECT_CHAT && ot.chat.startDirect(t.payload), t.key === Me.g.CLUB_CHAT_MODERATOR_ACTION)) {
                    var n = {
                        chatId: t.chatId,
                        message: t.message,
                        userId: t.userId
                    };
                    t.type === l.d.WARN && ot.moderation.clubChatWarn(n), t.type === l.d.MUTE && ot.moderation.clubChatMute(n)
                }
            }))
        },
        initClubChats: function initClubChats() {
            var e = {};
            Array.from(document.querySelectorAll(l.h.CLUB_CHAT_CONTAINER)).forEach((function(t) {
                var n = t.getAttribute("data-id"),
                    a = Boolean(t.getAttribute("data-show-users-list"));
                if (n) {
                    var s = chatFactory(function generateClubChatDetails(e) {
                        return {
                            active: !0,
                            channel: "chat/club/".concat(e),
                            confirmations: [{
                                user: l.j,
                                status: g.Status.ACCEPTED
                            }],
                            created_at: (new Date).toISOString(),
                            id: e,
                            type: g.Type.CLUB,
                            unread_count: 0,
                            updated_at: (new Date).toISOString()
                        }
                    }(n));
                    e[n] = s, Setter({
                        clubChats: e
                    }), ot.list.createMap(), Object(De.i)(Je, {
                        data: {
                            chatId: n,
                            showSidebar: a
                        },
                        store: Xe.default.stores.chat,
                        target: t
                    }), ot.chat.load(n)
                }
            }))
        }
    };
    function chatIsTheSame(e, t) {
        return !(e.userIds.size !== t.userIds.size) && x()(e.userIds).every((function(e) {
                return t.userIds.has(e)
            }))
    }
    var et = {
        createChatDirect: function createChatDirect(e) {
            var t = e.temporaryChat,
                n = e.isRepeatedRequest,
                a = t.draft,
                s = t.userId;
            t.draft = "", ot.view.updateOpenChats(), U.createDirectChat(s, a).then((function(e) {
                var t = ut.state(),
                    a = t.chats,
                    r = t.openChats,
                    u = chatFactory(e),
                    l = a.direct.findIndex((function(e) {
                        return e.userId === s
                    }));
                l < 0 && (a.direct.unshift(u), ot.list.createMap(), ot.view.updateAll()), (l = r.findIndex((function(e) {
                    return e.userId === s
                }))) > -1 && (n ? ot.chat.updateConfirmations(u.id, e.confirmations) : (r.splice(l, 1, u), ot.view.updateOpenChats(r)), ot.chat.load(u.id))
            })).catch((function(e) {
                if (e.response && e.response.status === l.e.HTTP_CODE_FORBIDDEN) {
                    var t = ut.state().openChats.find((function(e) {
                        return e.userId === s
                    }));
                    if (!t)
                        return;
                    t.confirmations[s] = g.Status.REJECTED, ot.view.updateOpenChats()
                }
            }))
        },
        createChatGroup: function createChatGroup(e) {
            var t = e.temporaryChat,
                n = t.draft,
                a = t.userIds;
            t.draft = "", ot.view.updateOpenChats(), 2 !== a.size ? U.createGroupChat(x()(a), n).then((function(e) {
                var t = ut.state(),
                    n = t.chats,
                    a = t.openChats,
                    s = chatFactory(e);
                n.group.findIndex((function(e) {
                    return chatIsTheSame(e, s)
                })) < 0 && (n.group.unshift(s), ot.list.createMap(), ot.view.updateAll());
                var r = a.findIndex((function(e) {
                    return chatIsTheSame(e, s)
                }));
                r > -1 && (s.isOpen = !0, a.splice(r, 1, s), ot.view.updateOpenChats(a), ot.chat.load(s.id))
            })).catch((function(e) {
                ot.chat.handleCreateChatError(t, e.response)
            })) : ot.openChats.groupToDirectChatRedirect(t, n)
        },
        createMap: function createChatsMap() {
            var e = ut.state(),
                t = e.clubChats,
                n = e.chats;
            Setter({
                chatsMap: [].concat(x()(n.direct), x()(n.group), x()(Object.values(t))).reduce((function(e, t) {
                    return e[t.id] = t, e
                }), {})
            })
        },
        filter: function filterChatList() {
            var e = ut.state().searchQuery.trim().toLowerCase(),
                t = g.Status.PENDING,
                n = ut.allChats();
            n = n.filter((function(e) {
                return !e.isClub
            })), e && (n = n.filter((function(t) {
                return t.name.toLowerCase().includes(e)
            }))), n.sort((function(e, n) {
                return n.newMessages && !e.newMessages ? 1 : e.newMessages && !n.newMessages ? -1 : n.confirmations[l.j] === t ? 1 : e.confirmations[l.j] === t ? -1 : n.lastMessageTimestamp > e.lastMessageTimestamp ? 1 : -1
            })), Setter({
                filteredList: n
            })
        },
        handleCountersChange: function handleCountersChange() {
            var e = ut.unreadChats();
            ke.saveUnreadMessages(e), ot.list.updateCountersSum()
        },
        load: function loadChatList() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return U.getChatsList(e).then((function(t) {
                t.chats && t.chats.direct && (Setter({
                    chats: Object.assign({
                        direct: [],
                        group: []
                    }, {
                        direct: t.chats.direct.map((function(e) {
                            return e.type = g.Type.DIRECT, chatFactory(e)
                        })),
                        group: t.chats.group.map((function(e) {
                            return e.type = g.Type.GROUP, chatFactory(e)
                        }))
                    }),
                    inactiveChatsCounter: t.inactive_chats_counter,
                    inactiveChatsLoaded: e
                }), ot.list.onload())
            })).catch((function() {
                ot.list.onload()
            }))
        },
        onload: function chatListOnload() {
            ot.list.createMap(), ot.pubsub.checkSubscriptions(), ot.users.updateDetails(), ot.list.handleCountersChange(), ot.list.filter(), ot.openChats.syncObjects(), ot.openChats.save();
            var e = ut.state(),
                t = e.openChats,
                n = e.inactiveChatsCounter;
            t.forEach((function(e) {
                ot.chat.load(e.id)
            }));
            var a = ut.allChats().length > 0 || n > 0;
            ve.updateNavigationTabVisibility(a)
        },
        receiveInvite: function receiveInvite(e) {
            "metadata" in e && "data" in e && ot.list.load()
        },
        toggleInactive: function toggle_inactive_chats_toggleInactiveChats() {
            var e = ut.state(),
                t = e.inactiveChatsLoaded,
                n = e.showInactiveChats;
            t ? Setter({
                showInactiveChats: !n
            }) : ot.list.load(!0).then(toggle_inactive_chats_toggleInactiveChats)
        },
        updateCountersFromCache: function updateCountersFromCache() {
            var e = ke.getUnreadMessages();
            ut.allChats().forEach((function(t) {
                return t.newMessages = e[t.id] || 0
            })), ot.list.updateCountersSum(), ot.view.updateAll()
        },
        updateCountersSum: function updateCountersSum() {
            var e = ut.newMessagesCounter();
            ve.updateNavigationBadge(e), e > 0 && ve.openChatsTab()
        }
    };
    var tt = {
        clubChatMute: function clubChatMute(e) {
            var t = e.chatId,
                n = e.message,
                a = e.userId,
                s = l.e.USER_CLUB_CHAT_MUTE_TIMEOUT;
            U.performModeratorAction({
                action: l.d.MUTE,
                chatId: t,
                duration: s,
                message: n,
                userId: a
            })
        },
        clubChatWarn: function clubChatWarn(e) {
            var t = e.chatId,
                n = e.message,
                a = e.userId;
            U.performModeratorAction({
                action: l.d.WARN,
                chatId: t,
                message: n,
                userId: a
            })
        },
        handleMuteMessage: function handleMuteMessage(e) {
            var t = e.chatId,
                n = e.content,
                a = e.moderatorId,
                s = e.userId,
                r = ut.chat(t);
            if (r && (r.moderators[l.j] || s === l.j)) {
                var u = "";
                if (r.moderators[l.j]) {
                    var h = ut.user(s).username || "",
                        _ = ut.user(a).username || "";
                    u = l.i.userHasBeenMuted(h, _)
                }
                s === l.j && (u = l.i.youHaveBeenMuted, u += n ? " ".concat(l.i.moderatorMessage, " ").concat(n) : " ".concat(l.i.rulesLink)), r.mutedUsers[s] = !0, ot.chat.addServiceMessage({
                    chatId: t,
                    content: u,
                    type: g.ServiceMessageType.ERROR
                }), ot.view.updateOpenChats()
            }
        },
        handleWarnMessage: function handleWarnMessage(e) {
            var t = e.chatId,
                n = e.content,
                a = e.moderatorId,
                s = e.userId,
                r = ut.chat(t);
            if (r && (r.moderators[l.j] || s === l.j)) {
                var u = "";
                if (r.moderators[l.j]) {
                    var h = ut.user(s).username || "",
                        _ = ut.user(a).username || "";
                    u = l.i.userHasBeenWarned(h, _)
                }
                s === l.j && (u = l.i.youHaveBeenWarned, u += n ? " ".concat(l.i.moderatorMessage, " ").concat(n) : " ".concat(l.i.rulesLink)), r.warnedUsers[s] = !0, ot.chat.addServiceMessage({
                    chatId: t,
                    content: u,
                    type: g.ServiceMessageType.WARNING
                }), ot.view.updateOpenChats()
            }
        }
    };
    var nt = {
        checkHeight: function checkOpenChatsHeight() {
            var e = ut.state().openChats,
                t = window.innerHeight;
            e.forEach((function(e) {
                e.windowHeight > t && ot.chat.resize({
                    chatId: e.id,
                    height: t,
                    width: e.windowWidth
                })
            }))
        },
        checkLimit: function checkOpenChatsLimit() {
            var e = ut.state().openChats.filter((function(e) {
                return !e.isDetached
            }));
            if (e.reduce((function(e, t) {
                return e + t.windowWidth
            }), 0) + l.e.DEFAULT_CHAT_WINDOW_WIDTH > window.innerWidth && e.length > 1) {
                var t = e.slice(-1),
                    n = s()(t, 1)[0];
                ot.chat.close(n.id), ot.openChats.checkLimit()
            } else if (1 === e.length) {
                var a = e[0],
                    r = window.innerWidth < a.windowWidth,
                    u = a.windowWidth < l.e.MIN_CHAT_WINDOW_WIDTH;
                (r || u) && (a.windowWidth = window.innerWidth * l.e.CHAT_WINDOW_WIDTH_ON_MOBILE)
            }
        },
        groupToDirectChatRedirect: function groupToDirectChatRedirect(e, t) {
            if (2 === e.userIds.size) {
                var n = x()(e.userIds).find((function(e) {
                    return e !== l.j
                }));
                if (n) {
                    var a = ut.user(n);
                    if (!a.isPlaceholder && a.username) {
                        var s = {
                            avatarUrl: "",
                            id: n,
                            username: a.username
                        };
                        ot.chat.close(e.id), ot.chat.startDirect(s, t)
                    }
                }
            }
        },
        openEmptyDirectChat: function openEmptyDirectChat(e, t) {
            var n = ut.state(),
                a = n.assetsLoaded,
                s = n.openChats,
                r = g.Status,
                u = (new Date).toISOString();
            if (!s.find((function(t) {
                return t.userId === e.id
            }))) {
                var h = "temporary-chat-with-".concat(e.id),
                    _ = chatFactory({
                        active: !0,
                        channel: "",
                        confirmations: [{
                            user: l.j,
                            status: r.ACCEPTED
                        }, {
                            user: e.id,
                            status: r.PENDING
                        }],
                        created_at: u,
                        id: h,
                        type: g.Type.DIRECT,
                        unread_count: 0,
                        updated_at: u
                    }, !0);
                s.unshift(_), ot.view.updateOpenChats(s), ot.openChats.checkLimit(), t && (_.draft = t, ot.chat.handleFormConfirm(h)), a || loadUserPopoverBundle()
            }
        },
        openEmptyGroupChat: function openEmptyGroupChat() {
            var e = ut.state(),
                t = e.assetsLoaded,
                n = e.openChats,
                a = g.Status,
                s = (new Date).toISOString(),
                r = chatFactory({
                    active: !0,
                    channel: "",
                    confirmations: [{
                        user: l.j,
                        status: a.ACCEPTED
                    }],
                    created_at: s,
                    id: "temporary-group-chat-".concat(Date.now()),
                    type: g.Type.GROUP,
                    unread_count: 0,
                    updated_at: s
                }, !0);
            n.unshift(r), ot.view.updateOpenChats(n), ot.openChats.checkLimit(), t || loadUserPopoverBundle()
        },
        restore: function restoreOpenChats() {
            var e = ke.getOpenChats();
            e && Array.isArray(e) ? (ot.view.updateOpenChats(e), ut.state().openChats.forEach((function(e) {
                e.scrollPosition ? ot.scroll.toPosition(e.id, e.scrollPosition) : ot.scroll.toLastMessage(e.id)
            }))) : ke.saveOpenChats([])
        },
        save: function save_open_chats_saveOpenChats() {
            var e = ut.state().openChats;
            ke.saveOpenChats(e)
        },
        syncObjects: function syncOpenChatsObjects() {
            var e = ut.state().openChats,
                t = {};
            e.forEach((function(n) {
                var a = ut.chat(n.id, !0);
                if (!a && n.isChatInitiationForm && (a = n), a && !a.isOpen) {
                    a.isOpen = !0, a.isPlaceholder = !0, a.emotesPopupIsOpen = n.emotesPopupIsOpen, a.isDetached = n.isDetached, a.isMinimized = n.isMinimized, a.messages = n.messages, a.name = n.name, a.positionBottom = n.positionBottom, a.positionRight = n.positionRight, a.scrollPosition = n.scrollPosition, a.windowHeight = n.windowHeight, a.windowWidth = n.windowWidth;
                    var s = ut.openChatIndex(a.id);
                    s > -1 && e.splice(s, 1, a)
                }
                if (!a || t[n.userId]) {
                    var r = ut.openChatIndex(n.id);
                    r > -1 && e.splice(r, 1)
                }
                t[n.userId] = !0
            })), ot.view.updateOpenChats(e), ot.openChats.checkLimit(), ot.openChats.checkHeight()
        }
    };
    var at = {
        checkSubscriptions: function checkSubscriptions() {
            ut.state().isConnected ? ut.channelsToSubscribe().forEach(ot.pubsub.subscribe) : setTimeout(checkSubscriptions, l.e.INTERVAL_GET_PUBSUB_STATE_INITIAL)
        },
        handleMessage: function handlePubSubMessage(e) {
            var t = "metadata" in e && e.metadata.message_type;
            if (t) {
                if (t === v.MessageTypes.CREATED)
                    ot.list.receiveInvite(e);
                else if (t === v.MessageTypes.UPDATE) {
                    var n = e.data,
                        a = n.id,
                        s = n.confirmations;
                    ot.chat.updateConfirmations(a, s)
                } else if (t === v.MessageTypes.ACTIVATED)
                    ot.chat.activate();
                else if (t === v.MessageTypes.MUTED)
                    ot.moderation.handleMuteMessage(e.data);
                else if (t === v.MessageTypes.WARNED)
                    ot.moderation.handleWarnMessage(e.data);
                else if (t === v.MessageTypes.CLUB_MESSAGE) {
                    var r = e.data;
                    if (r.action === v.MessageTypes.UPDATED || r.action === v.MessageTypes.DELETED)
                        return void ot.chat.updateMessageVisibility({
                            chatId: r.message.chatId,
                            messageId: r.message.id,
                            isHidden: r.action === v.MessageTypes.DELETED
                        });
                    var u = convertClubMessageToMessage(e.data.message);
                    ot.chat.receiveMessage(u)
                } else if (t === v.MessageTypes.PARTICIPANT) {
                    var h = e.data;
                    h.action === v.MessageTypes.JOINED && ot.users.addUserToClubChat(h), h.action === v.MessageTypes.LEFT && ot.users.removeUserFromClubChat(h)
                }
            } else
                "status" in e && "id" in e ? ot.users.updateOnlineStatus(ye()({}, e.id, e.status === l.e.ONLINE_STATUS)) : "message" in e && ot.chat.receiveMessage(e.message)
        },
        subscribe: function subscribe(e) {
            var t = ut.state().subscriptions;
            if (!t[e]) {
                var n = PubSub.subscribe(e, {
                    onDetach: function onDetach() {
                        t[e] = null, Setter({
                            subscriptions: t
                        })
                    },
                    onMessage: function onMessage(e) {
                        ot.pubsub.handleMessage(e)
                    }
                });
                t[e] = n, Setter({
                    subscriptions: t
                })
            }
        },
        unsubscribe: function unsubscribe(e) {
            var t = ut.state().subscriptions,
                n = t[e];
            n && (n.close(), t[e] = null, Setter({
                subscriptions: t
            }))
        },
        updateState: function updateState() {
            if (PubSub.client) {
                var e = PubSub.isAttached(),
                    t = l.e.INTERVAL_GET_PUBSUB_STATE_INITIAL;
                e && (t = l.e.INTERVAL_GET_PUBSUB_STATE), Setter({
                    isConnected: e
                }), setTimeout(updateState, t)
            }
        }
    };
    var st = {
        getScrollHeight: function getScrollHeight(e) {
            var t = ut.chat(e);
            if (!t)
                return 0;
            var n = l.h.messagesList(t.id),
                a = document.querySelector(n);
            return a ? a.scrollHeight : 0
        },
        handle: function handleChatScroll(e, t) {
            var n = ut.chat(e);
            if (n) {
                var a = n.scrollPosition;
                if (null !== a && t < a && t < l.e.SCROLL_HEIGHT_TRIGGER) {
                    var s = n.messages[0];
                    s && !n.messagesListIsLoading && ot.chat.load(e, s.createdAt)
                }
                n.scrollPosition = t, ot.openChats.save()
            }
        },
        toLastMessage: function scrollToLastMessage(e) {
            var t = ut.chat(e);
            if (t && 0 !== t.messages.length) {
                var n = t.messages.slice(-1),
                    a = s()(n, 1)[0];
                ot.scroll.toMessage(a)
            }
        },
        toMessage: function scrollToMessage(e) {
            var t = ut.chat(e.chatId);
            if (t) {
                var n = t.messages.findIndex((function(t) {
                        return t.id === e.id
                    })) < t.messages.length - l.e.MESSAGES_PER_REQUEST,
                    a = l.h.messageElement(e.id);
                setTimeout((function() {
                    var t = document.querySelector(a),
                        s = l.h.lastServiceMessage(e.id),
                        r = document.querySelector(s) || t;
                    r && r.scrollIntoView(n)
                }))
            }
        },
        toPosition: function scrollToPosition(e, t) {
            var n = ut.chat(e);
            if (n) {
                var a = l.h.messagesList(n.id);
                setTimeout((function() {
                    var e = document.querySelector(a);
                    e && (e.scrollTo ? e.scrollTo(0, t) : e.scrollTop = t)
                }))
            }
        }
    };
    var rt = !1;
    var ct = Object(Ce.a)((function() {
            if (it)
                setTimeout(ct, l.e.RETRY_REQUEST_TIMEOUT);
            else {
                var e = ut.usersIds(),
                    t = ke.getUsersData(),
                    n = e.filter((function(e) {
                        var n = t[e];
                        return !n || l.a.some((function(e) {
                                return void 0 === n[e]
                            }))
                    }));
                if (0 !== n.length) {
                    var a = n.length > l.e.USERS_PER_REQUEST;
                    return a && (n = n.slice(0, l.e.USERS_PER_REQUEST)), it = !0, Object(Ce.b)(U.getUsersData(n), (function(e) {
                        ke.addUsersData(e), ot.users.updateDetailsFromCache(), it = !1, a && ct()
                    }))
                }
                ot.users.updateDetailsFromCache()
            }
        })),
        it = !1;
    var ot = {
        chat: Se,
        init: Ze,
        list: et,
        moderation: tt,
        openChats: nt,
        pubsub: at,
        scroll: st,
        users: {
            addUserToClubChat: function addUserToClubChat(e) {
                var t = e.chatId,
                    n = e.participant,
                    a = ut.chat(t);
                if (a && a.isClub) {
                    var s = n.id,
                        r = n.isMod,
                        u = n.isMuted;
                    a.userIds.add(s), r && (a.moderators[s] = !0), u && (a.mutedUsers[s] = !0), ot.view.updateOpenChats(), ot.users.updateDetails()
                }
            },
            getChatUsers: function get_chat_users_getChatUsers(e) {
                var t = ut.chat(e);
                t && t.isClub && U.getChatUsers({
                    chatId: e,
                    chatType: t.type
                }).then((function(e) {
                    var n = e.participants,
                        a = void 0 === n ? [] : n;
                    a.find((function(e) {
                        return e.id === l.j
                    })) || a.push({
                        id: l.j,
                        isMod: t.moderators[l.j],
                        isMuted: t.mutedUsers[l.j]
                    }), t.userIds = new Set(a.map((function(e) {
                        var n = e.id,
                            a = e.isMod,
                            s = e.isMuted;
                        return a && (t.moderators[n] = !0), s && (t.mutedUsers[n] = !0), n
                    }))), ot.users.updateDetails()
                }))
            },
            loadOnlineStatus: function load_online_status_loadOnlineStatus(e) {
                if (0 !== ut.state().openChats.length || e && !rt) {
                    var t = ut.usersIds();
                    0 !== t.length && U.getUsersOnlineStatus(t).then((function(t) {
                        var n = t.users;
                        if (e && (rt = !0), n && 0 !== n.length) {
                            var a = {};
                            n.forEach((function(e) {
                                var t = e.id,
                                    n = e.status;
                                return a[t] = n === l.e.ONLINE_STATUS
                            })), ot.users.updateOnlineStatus(a)
                        }
                    }))
                }
            },
            removeUserFromClubChat: function removeUserFromClubChat(e) {
                var t = e.chatId,
                    n = e.participant,
                    a = ut.chat(t);
                a && a.isClub && (a.userIds.delete(n.id), ot.view.updateOpenChats())
            },
            sortChatUsers: function sortChatUsers(e) {
                var t = ut.chat(e);
                if (t) {
                    var n = ut.state().users,
                        a = x()(t.userIds).sort((function(e, a) {
                            return n[e] && n[a] ? t.moderators[e] && !t.moderators[a] ? -1 : !t.moderators[e] && t.moderators[a] ? 1 : (n[e].username || "") < (n[a].username || "") ? -1 : (n[e].username || "") > (n[a].username || "") ? 1 : 0 : 0
                        }));
                    t.userIds = new Set(a), ot.view.updateOpenChats()
                }
            },
            updateDetails: ct,
            updateDetailsFromCache: function updateDetailsFromCache() {
                var e = ut.state(),
                    t = e.clubChats,
                    n = e.openChats,
                    a = e.users,
                    s = ke.getUsersData();
                Object.keys(s).forEach((function(e) {
                    e && (s[e].id = e, a[e] = function userFactory() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e.username && (e.profileUrl = h.default.generate("web_member_view", {
                            username: e.username
                        })), e.membership && (e.membershipValue = ze.c[e.membership], e.isStaff = "staff" === e.membership), e.isSelf = e.id === l.j, Object.assign({}, e)
                    }(s[e]))
                })), ut.allChats().forEach((function(e) {
                    e.isDirect && e.name || (e.isClub ? ot.users.sortChatUsers(e.id) : e.name = x()(e.userIds).filter((function(e) {
                        return e !== l.j
                    })).map((function(e) {
                        return s[e] ? s[e].username : ""
                    })).join(", "))
                })), Setter({
                    users: a
                }), ot.list.filter(), (n.length || Object.keys(t).length) && ot.view.updateOpenChats()
            },
            updateOnlineStatus: function updateOnlineStatus(e) {
                ut.state().chats.direct.forEach((function(t) {
                    "boolean" == typeof e[t.userId] && (t.isOnline = e[t.userId])
                })), ot.view.updateAll(), ot.list.filter()
            }
        },
        view: {
            updateAll: function updateAll() {
                ot.view.updateOpenChats(), ot.view.updateChats()
            },
            updateChats: function updateChats() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut.state().chats;
                Setter({
                    chats: e
                })
            },
            updateOpenChats: function updateOpenChats() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ut.state().openChats,
                    t = ut.state(),
                    n = t.clubChats;
                Setter({
                    clubChats: n,
                    openChats: e
                }), ot.openChats.save()
            }
        }
    };
    var ut = {
        allChats: function getAllChatsArray() {
            var e = ut.state().chatsMap;
            return Object.values(e)
        },
        channelsToSubscribe: function getChannelsToSubscribe() {
            var e = ut.allChats(),
                t = ut.state().subscriptions,
                n = [];
            e.forEach((function(e) {
                if (e.isActive && (t[e.channel] || n.push(e.channel), e.isDirect)) {
                    var a = l.c.userStatusChannel(e.userId);
                    t[a] || n.push(a)
                }
            }));
            var a = l.c.personalChannel(l.j);
            return t[a] || n.push(a), n
        },
        chat: function getChat(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = ut.state(),
                a = n.chatsMap,
                s = n.openChats;
            return a[e] || !t && s.find((function(t) {
                    return t.id === e
                }))
        },
        newMessagesCounter: function getNewMessagesCounter() {
            return ut.allChats().reduce((function(e, t) {
                var n = t.confirmations[l.j],
                    a = t.newMessages;
                return n === g.Status.PENDING ? a = 1 : n === g.Status.REJECTED && (a = 0), e + a
            }), 0)
        },
        openChatIndex: function getOpenChatIndex(e) {
            return ut.state().openChats.findIndex((function(t) {
                return t.id === e
            }))
        },
        state: function getState() {
            return ut.store().get()
        },
        store: function getStore() {
            return Xe.default.stores.chat
        },
        unreadChats: function getUnreadChats() {
            return ut.allChats().filter((function(e) {
                return e.newMessages > 0
            }))
        },
        user: function getUser(e) {
            var t = ut.state().users;
            return t[e] ? t[e] : {
                isPlaceholder: !0,
                username: "…"
            }
        },
        usersIds: function getUsersIds() {
            var e = ut.allChats(),
                t = ut.state().openChats.filter((function(e) {
                    return e.isChatInitiationForm
                })),
                n = new Set;
            return [].concat(x()(e), x()(t)).forEach((function(e) {
                var t = e.userIds;
                return t instanceof Set && t.forEach((function(e) {
                        return n.add(e)
                    }))
            })), e.filter((function(e) {
                return e.isClub
            })).forEach((function(e) {
                return e.messages.forEach((function(e) {
                    var t = e.authorId;
                    return n.add(t)
                }))
            })), x()(n)
        }
    };
    function Setter(e) {
        ut.store().set(e)
    }
    var lt = n(31),
        dt = n.n(lt),
        ht = n(32),
        _t = n.n(ht),
        ft = n(33),
        mt = n.n(ft),
        pt = {
            name: "chat",
            state: {
                assetsLoaded: !1,
                clubChats: {},
                chats: {
                    direct: [],
                    group: []
                },
                chatListIsLoading: !1,
                chatsMap: {},
                filteredList: [],
                inactiveChatsCounter: 0,
                inactiveChatsLoaded: !1,
                isConnected: !1,
                openChats: [],
                searchQuery: "",
                showInactiveChats: !1,
                subscriptions: {},
                unrecoverableFailure: !1,
                users: {}
            },
            Store: function(e) {
                function ChatStore() {
                    return F()(this, ChatStore), dt()(this, _t()(ChatStore).apply(this, arguments))
                }
                return mt()(ChatStore, e), z()(ChatStore, [{
                    key: "deactivateChat",
                    value: function deactivateChat(e) {
                        ot.chat.deactivate(e)
                    }
                }, {
                    key: "filterList",
                    value: function filterList() {
                        ot.list.filter()
                    }
                }, {
                    key: "loadOnlineStatus",
                    value: function loadOnlineStatus() {
                        ot.users.loadOnlineStatus(!0)
                    }
                }, {
                    key: "openChat",
                    value: function openChat(e) {
                        ot.chat.open(e)
                    }
                }, {
                    key: "startDirectChat",
                    value: function startDirectChat(e) {
                        ot.chat.startDirect(e)
                    }
                }, {
                    key: "startGroupChat",
                    value: function startGroupChat() {
                        ot.openChats.openEmptyGroupChat()
                    }
                }, {
                    key: "toggleInactiveChats",
                    value: function toggleInactiveChats() {
                        ot.list.toggleInactive()
                    }
                }]), ChatStore
            }(n(34).a)
        };
    function fly(e) {
        var t = getComputedStyle(e),
            n = Number(t.opacity);
        return {
            duration: 100,
            css: function css(e) {
                return "\n      transform: translate(".concat(10 * (1 - e), "px, ").concat(0 * (1 - e), "px);\n      opacity: ").concat(e * n)
            }
        }
    }
    var bt = n(51);
    n(100);
    function chat_header_user_svelte_create_if_block_2(e, t) {
        var n,
            a,
            s = t.user.chessTitle;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.k)(s), n.className = "chat-header-chess-title svelte-t1uy4v", n.title = t.fullChessTitle
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.user && s !== (s = t.user.chessTitle) && Object(Ue.E)(a, s), e.fullChessTitle && (n.title = t.fullChessTitle)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function chat_header_user_svelte_create_else_block(e, t) {
        var n,
            a,
            s = t.user.username;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.k)(s), n.className = "chat-header-name svelte-t1uy4v"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.user && s !== (s = t.user.username) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function chat_header_user_svelte_create_if_block_1(e, t) {
        var n,
            a,
            s,
            r,
            u = t.user.username;
        function mousedown_handler(t) {
            t.stopPropagation(), e.fire("mousedown", t)
        }
        return {
            c: function c() {
                n = Object(Ue.i)("a"), a = Object(Ue.k)(u), Object(Ue.c)(n, "mousedown", mousedown_handler), Object(Ue.D)(n, "v-user-popover", s = "'" + t.user.username + "'"), n.className = "chat-header-name chat-header-active-name svelte-t1uy4v", n.dataset.linkId = t.userProfileLinkId, n.href = r = t.user.profileUrl
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.user && u !== (u = t.user.username) && Object(Ue.E)(a, u), e.user && s !== (s = "'" + t.user.username + "'") && Object(Ue.D)(n, "v-user-popover", s), e.userProfileLinkId && (n.dataset.linkId = t.userProfileLinkId), e.user && r !== (r = t.user.profileUrl) && (n.href = r)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "mousedown", mousedown_handler)
            }
        }
    }
    function chat_header_user_svelte_create_if_block(e, t) {
        var n,
            a;
        return {
            c: function c() {
                (n = Object(Ue.i)("span")).className = a = "flair-component flair-" + t.user.flairCode + " svelte-t1uy4v"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t)
            },
            p: function p(e, t) {
                e.user && a !== (a = "flair-component flair-" + t.user.flairCode + " svelte-t1uy4v") && (n.className = a)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function Chat_header_user_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["users"]), function chat_header_user_svelte_data() {
            return {
                noFlairCode: ze.a.code
            }
        }()), e.data), this.store._add(this, ["users"]), this._recompute({
            $users: 1,
            chat: 1,
            user: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function chat_header_user_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s,
                r = t.user.chessTitle && chat_header_user_svelte_create_if_block_2(e, t);
            function select_block_type(e) {
                return e.user.profileUrl && e.activeLink ? chat_header_user_svelte_create_if_block_1 : chat_header_user_svelte_create_else_block
            }
            var u = select_block_type(t),
                l = u(e, t),
                h = t.user.flairCode && t.user.flairCode !== t.noFlairCode && chat_header_user_svelte_create_if_block(e, t);
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), r && r.c(), a = Object(Ue.k)("\n\n  "), l.c(), s = Object(Ue.k)("\n\n  "), h && h.c(), n.className = "chat-header-user svelte-t1uy4v"
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), r && r.m(n, null), Object(Ue.d)(n, a), l.m(n, null), Object(Ue.d)(n, s), h && h.m(n, null)
                },
                p: function p(t, _) {
                    _.user.chessTitle ? r ? r.p(t, _) : ((r = chat_header_user_svelte_create_if_block_2(e, _)).c(), r.m(n, a)) : r && (r.d(1), r = null), u === (u = select_block_type(_)) && l ? l.p(t, _) : (l.d(1), (l = u(e, _)).c(), l.m(n, s)), _.user.flairCode && _.user.flairCode !== _.noFlairCode ? h ? h.p(t, _) : ((h = chat_header_user_svelte_create_if_block(e, _)).c(), h.m(n, null)) : h && (h.d(1), h = null)
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), r && r.d(), l.d(), h && h.d()
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor))
    }
    Object(Ue.e)(Chat_header_user_svelte.prototype, Ue.x), Chat_header_user_svelte.prototype._recompute = function _recompute(e, t) {
        (e.$users || e.chat) && this._differs(t.user, t.user = function chat_header_user_svelte_user(e) {
            return e.$users[e.chat.userId] || {
                    username: "…"
                }
        }(t)) && (e.user = !0), e.user && this._differs(t.fullChessTitle, t.fullChessTitle = function fullChessTitle(e) {
            var t = e.user;
            return ze.b[t.chessTitle]
        }(t)) && (e.fullChessTitle = !0), e.chat && this._differs(t.userProfileLinkId, t.userProfileLinkId = function userProfileLinkId(e) {
            var t = e.chat;
            return "chat-user-link-".concat(t.userId)
        }(t)) && (e.userProfileLinkId = !0)
    };
    var gt = Chat_header_user_svelte;
    n(101);
    var vt = {
        fetchUsers: Object(Re.a)((function fetchUsers() {
            var e = this,
                t = this.get(),
                n = t.chat,
                a = t.query.trim();
            "" !== a ? U.searchUsers(a).then((function(t) {
                var a = t.filter((function(e) {
                    var t = e.uuid;
                    return !n.userIds.has(t)
                }));
                e.set({
                    list: a
                })
            })) : this.set({
                list: []
            })
        }), 250),
        focus: function focus() {
            this.refs.inputField && this.refs.inputField.focus()
        },
        remove: function remove(e) {
            var t = this.get().chat;
            ot.chat.removeUser(t.id, e), this.focus()
        },
        select: function select(e) {
            var t = this.get().chat;
            this.set({
                list: [],
                query: ""
            }), ot.chat.addUser({
                chatId: t.id,
                userId: e.uuid,
                username: e.username
            }), this.focus()
        }
    };
    function group_chat_find_users_svelte_click_handler_1(e) {
        var t = this._svelte,
            n = t.component,
            a = t.ctx;
        n.select(a.user)
    }
    function group_chat_find_users_svelte_get_each_context_1(e, t, n) {
        var a = Object.create(e);
        return a.user = t[n], a
    }
    function group_chat_find_users_svelte_click_handler(e) {
        var t = this._svelte,
            n = t.component,
            a = t.ctx;
        n.remove(a.userId)
    }
    function group_chat_find_users_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.userId = t[n], a
    }
    function group_chat_find_users_svelte_create_if_block_2(e, t) {
        var n,
            a,
            s,
            r,
            u = t.$users[t.userId] ? t.$users[t.userId].username : "";
        return {
            c: function c() {
                n = Object(Ue.i)("div"), (a = Object(Ue.i)("span")).textContent = "×", s = Object(Ue.k)("\n\n          "), r = Object(Ue.k)(u), a.className = "group-chat-find-users-selected-item-remove svelte-g8ngsk", n._svelte = {
                    component: e,
                    ctx: t
                }, Object(Ue.c)(n, "click", group_chat_find_users_svelte_click_handler), n.className = "group-chat-find-users-selected-item svelte-g8ngsk"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(n, s), Object(Ue.d)(n, r)
            },
            p: function p(e, a) {
                t = a, (e.$users || e.userIds) && u !== (u = t.$users[t.userId] ? t.$users[t.userId].username : "") && Object(Ue.E)(r, u), n._svelte.ctx = t
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", group_chat_find_users_svelte_click_handler)
            }
        }
    }
    function group_chat_find_users_svelte_create_each_block_1(e, t) {
        var n,
            a = t.userId !== t.uid && group_chat_find_users_svelte_create_if_block_2(e, t);
        return {
            c: function c() {
                a && a.c(), n = Object(Ue.h)()
            },
            m: function m(e, t) {
                a && a.m(e, t), Object(Ue.u)(e, n, t)
            },
            p: function p(t, s) {
                s.userId !== s.uid ? a ? a.p(t, s) : ((a = group_chat_find_users_svelte_create_if_block_2(e, s)).c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null)
            },
            d: function d(e) {
                a && a.d(e), e && Object(Ue.p)(n)
            }
        }
    }
    function group_chat_find_users_svelte_create_if_block_1(e, t) {
        var n,
            a = !1;
        function input_input_handler() {
            a = !0, e.set({
                query: n.value
            }), a = !1
        }
        function input_handler(t) {
            e.fetchUsers()
        }
        return {
            c: function c() {
                n = Object(Ue.i)("input"), Object(Ue.c)(n, "input", input_input_handler), Object(Ue.c)(n, "input", input_handler), Object(Ue.D)(n, "type", "text"), n.className = "group-chat-find-users-input svelte-g8ngsk"
            },
            m: function m(a, s) {
                Object(Ue.u)(a, n, s), e.refs.inputField = n, n.value = t.query
            },
            p: function p(e, t) {
                !a && e.query && (n.value = t.query)
            },
            d: function d(t) {
                t && Object(Ue.p)(n), Object(Ue.A)(n, "input", input_input_handler), Object(Ue.A)(n, "input", input_handler), e.refs.inputField === n && (e.refs.inputField = null)
            }
        }
    }
    function group_chat_find_users_svelte_create_if_block(e, t) {
        for (var n, a = t.list, s = [], r = 0; r < a.length; r += 1)
            s[r] = group_chat_find_users_svelte_create_each_block(e, group_chat_find_users_svelte_get_each_context_1(t, a, r));
        return {
            c: function c() {
                n = Object(Ue.i)("div");
                for (var e = 0; e < s.length; e += 1)
                    s[e].c();
                n.className = "group-chat-find-users-list svelte-g8ngsk"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t);
                for (var a = 0; a < s.length; a += 1)
                    s[a].m(n, null)
            },
            p: function p(t, r) {
                if (t.list) {
                    a = r.list;
                    for (var u = 0; u < a.length; u += 1) {
                        var l = group_chat_find_users_svelte_get_each_context_1(r, a, u);
                        s[u] ? s[u].p(t, l) : (s[u] = group_chat_find_users_svelte_create_each_block(e, l), s[u].c(), s[u].m(n, null))
                    }
                    for (; u < s.length; u += 1)
                        s[u].d(1);
                    s.length = a.length
                }
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.m)(s, e)
            }
        }
    }
    function group_chat_find_users_svelte_create_each_block(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h = t.user.username;
        return {
            c: function c() {
                n = Object(Ue.i)("button"), a = Object(Ue.i)("img"), r = Object(Ue.k)("\n\n        "), u = Object(Ue.k)(h), l = Object(Ue.k)("\n      "), a.className = "group-chat-find-users-list-item-avatar svelte-g8ngsk", a.src = s = t.user.avatar_url, n._svelte = {
                    component: e,
                    ctx: t
                }, Object(Ue.c)(n, "click", group_chat_find_users_svelte_click_handler_1), n.className = "group-chat-find-users-list-item svelte-g8ngsk", n.type = "button"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(n, r), Object(Ue.d)(n, u), Object(Ue.d)(n, l)
            },
            p: function p(e, r) {
                t = r, e.list && s !== (s = t.user.avatar_url) && (a.src = s), e.list && h !== (h = t.user.username) && Object(Ue.E)(u, h), n._svelte.ctx = t
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", group_chat_find_users_svelte_click_handler_1)
            }
        }
    }
    function Group_chat_find_users_svelte(e) {
        Object(Ue.t)(this, e), this.refs = {}, this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["users"]), function group_chat_find_users_svelte_data() {
            return {
                list: [],
                query: "",
                translations: l.i,
                uid: l.j
            }
        }()), e.data), this.store._add(this, ["users"]), this._recompute({
            chat: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function group_chat_find_users_svelte_create_main_fragment(e, t) {
            for (var n, a, s, r, u, l, h, _, f = t.translations.sendMessageTo, b = t.userIds, g = [], v = 0; v < b.length; v += 1)
                g[v] = group_chat_find_users_svelte_create_each_block_1(e, group_chat_find_users_svelte_get_each_context(t, b, v));
            var O = t.userIds.length < 10 && group_chat_find_users_svelte_create_if_block_1(e, t),
                j = t.list.length > 0 && group_chat_find_users_svelte_create_if_block(e, t);
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), a = Object(Ue.i)("div"), s = Object(Ue.k)(f), r = Object(Ue.k)("\n\n  "), u = Object(Ue.i)("div");
                    for (var e = 0; e < g.length; e += 1)
                        g[e].c();
                    l = Object(Ue.k)("\n\n    "), O && O.c(), h = Object(Ue.k)("\n\n"), j && j.c(), _ = Object(Ue.h)(), a.className = "group-chat-find-users-text svelte-g8ngsk", u.className = "group-chat-find-users-wrapper svelte-g8ngsk", n.className = "group-chat-find-users-component svelte-g8ngsk"
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(a, s), Object(Ue.d)(n, r), Object(Ue.d)(n, u);
                    for (var f = 0; f < g.length; f += 1)
                        g[f].m(u, null);
                    Object(Ue.d)(u, l), O && O.m(u, null), Object(Ue.u)(e, h, t), j && j.m(e, t), Object(Ue.u)(e, _, t)
                },
                p: function p(t, n) {
                    if (t.translations && f !== (f = n.translations.sendMessageTo) && Object(Ue.E)(s, f), t.userIds || t.uid || t.$users) {
                        b = n.userIds;
                        for (var a = 0; a < b.length; a += 1) {
                            var r = group_chat_find_users_svelte_get_each_context(n, b, a);
                            g[a] ? g[a].p(t, r) : (g[a] = group_chat_find_users_svelte_create_each_block_1(e, r), g[a].c(), g[a].m(u, l))
                        }
                        for (; a < g.length; a += 1)
                            g[a].d(1);
                        g.length = b.length
                    }
                    n.userIds.length < 10 ? O ? O.p(t, n) : ((O = group_chat_find_users_svelte_create_if_block_1(e, n)).c(), O.m(u, null)) : O && (O.d(1), O = null), n.list.length > 0 ? j ? j.p(t, n) : ((j = group_chat_find_users_svelte_create_if_block(e, n)).c(), j.m(_.parentNode, _)) : j && (j.d(1), j = null)
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), Object(Ue.m)(g, e), O && O.d(), e && Object(Ue.p)(h), j && j.d(e), e && Object(Ue.p)(_)
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor))
    }
    Object(Ue.e)(Group_chat_find_users_svelte.prototype, Ue.x), Object(Ue.e)(Group_chat_find_users_svelte.prototype, vt), Group_chat_find_users_svelte.prototype._recompute = function _recompute(e, t) {
        e.chat && this._differs(t.userIds, t.userIds = function group_chat_find_users_svelte_userIds(e) {
            var t = e.chat;
            return Array.from(t.userIds)
        }(t)) && (e.userIds = !0)
    };
    var Ot = Group_chat_find_users_svelte;
    n(102);
    var jt = {
        close: ot.chat.close,
        leave: ot.chat.leave,
        minimize: ot.chat.minimize
    };
    function chat_header_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.userId = t[n], a.index = n, a
    }
    function chat_header_svelte_create_if_block_4(e, t) {
        var n,
            a = {
                chat: t.chat
            },
            s = new bt.a({
                root: e.root,
                store: e.store,
                data: a
            }),
            r = {
                chat: t.chat,
                activeLink: "true"
            },
            u = new gt({
                root: e.root,
                store: e.store,
                data: r
            });
        return {
            c: function c() {
                s._fragment.c(), n = Object(Ue.k)("\n\n      "), u._fragment.c()
            },
            m: function m(e, t) {
                s._mount(e, t), Object(Ue.u)(e, n, t), u._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), s._set(n);
                var a = {};
                e.chat && (a.chat = t.chat), u._set(a)
            },
            d: function d(e) {
                s.destroy(e), e && Object(Ue.p)(n), u.destroy(e)
            }
        }
    }
    function chat_header_svelte_create_if_block_1(e, t) {
        var n;
        function select_block_type(e) {
            return e.chat.isChatInitiationForm ? chat_header_svelte_create_if_block_2 : chat_header_svelte_create_else_block
        }
        var a = select_block_type(t),
            s = a(e, t);
        return {
            c: function c() {
                s.c(), n = Object(Ue.h)()
            },
            m: function m(e, t) {
                s.m(e, t), Object(Ue.u)(e, n, t)
            },
            p: function p(t, r) {
                a === (a = select_block_type(r)) && s ? s.p(t, r) : (s.d(1), (s = a(e, r)).c(), s.m(n.parentNode, n))
            },
            d: function d(e) {
                s.d(e), e && Object(Ue.p)(n)
            }
        }
    }
    function chat_header_svelte_create_else_block(e, t) {
        for (var n, a = t.userIds, s = [], r = 0; r < a.length; r += 1)
            s[r] = chat_header_svelte_create_each_block(e, chat_header_svelte_get_each_context(t, a, r));
        return {
            c: function c() {
                n = Object(Ue.i)("span");
                for (var e = 0; e < s.length; e += 1)
                    s[e].c();
                n.className = "chat-header-group-name svelte-1hpf5zi"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t);
                for (var a = 0; a < s.length; a += 1)
                    s[a].m(n, null)
            },
            p: function p(t, r) {
                if (t.userIds || t.uid || t.$users || t.chat || t.chatStatuses) {
                    a = r.userIds;
                    for (var u = 0; u < a.length; u += 1) {
                        var l = chat_header_svelte_get_each_context(r, a, u);
                        s[u] ? s[u].p(t, l) : (s[u] = chat_header_svelte_create_each_block(e, l), s[u].c(), s[u].m(n, null))
                    }
                    for (; u < s.length; u += 1)
                        s[u].d(1);
                    s.length = a.length
                }
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.m)(s, e)
            }
        }
    }
    function chat_header_svelte_create_if_block_2(e, t) {
        var n = {
                chat: t.chat
            },
            a = new Ot({
                root: e.root,
                store: e.store,
                data: n
            });
        return {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function chat_header_svelte_create_if_block_3(e, t) {
        var n,
            a,
            s,
            r,
            u,
            l,
            h = t.$users[t.userId] ? t.$users[t.userId].username : "";
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.i)("span"), s = Object(Ue.k)(h), Object(Ue.D)(a, "v-user-popover", r = "'" + (t.$users[t.userId] ? t.$users[t.userId].username : "") + "'"), a.className = u = "\n                    chat-header-group-username\n                    " + (t.chat.confirmations[t.userId] === t.chatStatuses.REJECTED ? "chat-header-group-username-inactive" : "") + "\n                   svelte-1hpf5zi", a.dataset.linkId = l = t.chat.id + "-" + t.userId, n.className = "chat-header-group-username-container svelte-1hpf5zi"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(a, s)
            },
            p: function p(e, t) {
                (e.$users || e.userIds) && h !== (h = t.$users[t.userId] ? t.$users[t.userId].username : "") && Object(Ue.E)(s, h), (e.$users || e.userIds) && r !== (r = "'" + (t.$users[t.userId] ? t.$users[t.userId].username : "") + "'") && Object(Ue.D)(a, "v-user-popover", r), (e.chat || e.userIds || e.chatStatuses) && u !== (u = "\n                    chat-header-group-username\n                    " + (t.chat.confirmations[t.userId] === t.chatStatuses.REJECTED ? "chat-header-group-username-inactive" : "") + "\n                   svelte-1hpf5zi") && (a.className = u), (e.chat || e.userIds) && l !== (l = t.chat.id + "-" + t.userId) && (a.dataset.linkId = l)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function chat_header_svelte_create_each_block(e, t) {
        var n,
            a = t.userId !== t.uid && chat_header_svelte_create_if_block_3(0, t);
        return {
            c: function c() {
                a && a.c(), n = Object(Ue.h)()
            },
            m: function m(e, t) {
                a && a.m(e, t), Object(Ue.u)(e, n, t)
            },
            p: function p(e, t) {
                t.userId !== t.uid ? a ? a.p(e, t) : ((a = chat_header_svelte_create_if_block_3(0, t)).c(), a.m(n.parentNode, n)) : a && (a.d(1), a = null)
            },
            d: function d(e) {
                a && a.d(e), e && Object(Ue.p)(n)
            }
        }
    }
    function chat_header_svelte_create_if_block(e, t) {
        var n,
            a,
            s,
            r,
            u;
        function click_handler(n) {
            e.leave(t.chat.id)
        }
        return {
            c: function c() {
                n = Object(Ue.i)("button"), a = Object(Ue.i)("span"), (s = Object(Ue.i)("span")).className = r = "icon-font-chess " + (t.chat.isGroup ? "exit" : "circle-block") + " svelte-1hpf5zi", a.className = "icon-font-component", Object(Ue.c)(n, "click", click_handler), n.className = "chat-header-leave svelte-1hpf5zi", n.title = u = t.chat.isGroup ? t.translations.leaveChat : t.translations.blockDirectChat
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), Object(Ue.d)(a, s)
            },
            p: function p(e, a) {
                t = a, e.chat && r !== (r = "icon-font-chess " + (t.chat.isGroup ? "exit" : "circle-block") + " svelte-1hpf5zi") && (s.className = r), (e.chat || e.translations) && u !== (u = t.chat.isGroup ? t.translations.leaveChat : t.translations.blockDirectChat) && (n.title = u)
            },
            d: function d(e) {
                e && Object(Ue.p)(n), Object(Ue.A)(n, "click", click_handler)
            }
        }
    }
    function Chat_header_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(Object(Ue.e)(this.store._init(["users"]), function chat_header_svelte_data() {
            return {
                chatStatuses: g.Status,
                movingInProgress: !1,
                translations: l.i,
                uid: l.j
            }
        }()), e.data), this.store._add(this, ["users"]), this._recompute({
            chat: 1
        }, this._state), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function chat_header_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s,
                r,
                u,
                l,
                h,
                _,
                f,
                b,
                g,
                v,
                O,
                j = t.chat.isDirect && chat_header_svelte_create_if_block_4(e, t),
                E = t.chat.isGroup && chat_header_svelte_create_if_block_1(e, t),
                y = !t.chat.isChatInitiationForm && t.chat.confirmations[t.uid] === t.chatStatuses.ACCEPTED && chat_header_svelte_create_if_block(e, t);
            function click_handler(n) {
                e.minimize(t.chat.id)
            }
            function click_handler_1(n) {
                e.close(t.chat.id)
            }
            function mousedown_handler(t) {
                e.fire("mousedown", t)
            }
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), a = Object(Ue.i)("div"), j && j.c(), s = Object(Ue.k)("\n\n    "), E && E.c(), r = Object(Ue.k)("\n\n  "), u = Object(Ue.i)("div"), y && y.c(), l = Object(Ue.k)("\n\n    "), h = Object(Ue.i)("button"), f = Object(Ue.k)("\n\n    "), b = Object(Ue.i)("button"), (g = Object(Ue.i)("span")).innerHTML = '<span class="icon-font-chess x"></span>', a.className = "chat-header-meta svelte-1hpf5zi", Object(Ue.c)(h, "click", click_handler), h.className = "chat-header-minimize svelte-1hpf5zi", h.title = _ = t.translations.minimizeChat, g.className = "icon-font-component", Object(Ue.c)(b, "click", click_handler_1), b.className = "chat-header-close svelte-1hpf5zi", b.title = v = t.translations.closeChat, u.className = "chat-header-actions svelte-1hpf5zi", Object(Ue.c)(n, "mousedown", mousedown_handler), n.className = O = "chat-header " + (t.chat.isGroup && !t.chat.isChatInitiationForm ? "chat-header-group" : "") + " svelte-1hpf5zi"
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), j && j.m(a, null), Object(Ue.d)(a, s), E && E.m(a, null), Object(Ue.d)(n, r), Object(Ue.d)(n, u), y && y.m(u, null), Object(Ue.d)(u, l), Object(Ue.d)(u, h), Object(Ue.d)(u, f), Object(Ue.d)(u, b), Object(Ue.d)(b, g)
                },
                p: function p(r, f) {
                    (t = f).chat.isDirect ? j ? j.p(r, t) : ((j = chat_header_svelte_create_if_block_4(e, t)).c(), j.m(a, s)) : j && (j.d(1), j = null), t.chat.isGroup ? E ? E.p(r, t) : ((E = chat_header_svelte_create_if_block_1(e, t)).c(), E.m(a, null)) : E && (E.d(1), E = null), t.chat.isChatInitiationForm || t.chat.confirmations[t.uid] !== t.chatStatuses.ACCEPTED ? y && (y.d(1), y = null) : y ? y.p(r, t) : ((y = chat_header_svelte_create_if_block(e, t)).c(), y.m(u, l)), r.translations && _ !== (_ = t.translations.minimizeChat) && (h.title = _), r.translations && v !== (v = t.translations.closeChat) && (b.title = v), r.chat && O !== (O = "chat-header " + (t.chat.isGroup && !t.chat.isChatInitiationForm ? "chat-header-group" : "") + " svelte-1hpf5zi") && (n.className = O)
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), j && j.d(), E && E.d(), y && y.d(), Object(Ue.A)(h, "click", click_handler), Object(Ue.A)(b, "click", click_handler_1), Object(Ue.A)(n, "mousedown", mousedown_handler)
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Chat_header_svelte.prototype, Ue.x), Object(Ue.e)(Chat_header_svelte.prototype, jt), Chat_header_svelte.prototype._recompute = function _recompute(e, t) {
        e.chat && this._differs(t.userIds, t.userIds = function chat_header_svelte_userIds(e) {
            var t = e.chat;
            return Array.from(t.userIds)
        }(t)) && (e.userIds = !0)
    };
    var Et = Chat_header_svelte;
    n(103);
    var yt = {
        disableSelection: function disableSelection(e) {
            e.preventDefault()
        },
        finishChanges: function finishChanges() {
            var e = this.get(),
                t = e.mouseMoveHandler,
                n = e.mouseUpHandler,
                a = e.selectStartHandler;
            document.removeEventListener("mousemove", t), document.removeEventListener("mouseup", n), document.removeEventListener("selectstart", a), this.set({
                mouseMoveHandler: null,
                mouseUpHandler: null,
                moveInProgress: !1,
                resizeWidthInProgress: !1,
                resizeHeightInProgress: !1,
                selectStartHandler: null
            })
        },
        handleMouseMove: function handleMouseMove(e) {
            var t = this.get(),
                n = 0,
                a = 0;
            if ((t.resizeWidthInProgress || t.moveInProgress) && (n = t.startX - e.clientX), (t.resizeHeightInProgress || t.moveInProgress) && (a = t.startY - e.clientY), n || a) {
                if (t.resizeHeightInProgress || t.resizeWidthInProgress) {
                    var s = t.initialWidth + n,
                        r = t.initialHeight + a;
                    ot.chat.resize({
                        chatId: t.chat.id,
                        height: r,
                        width: s
                    })
                }
                if (t.moveInProgress) {
                    var u = t.initialBottom + a,
                        l = t.initialRight + n;
                    ot.chat.move({
                        bottom: u,
                        chatId: t.chat.id,
                        right: l
                    })
                }
            }
        },
        startMoving: function startMoving(e) {
            if (!e.button) {
                var t = this.get().chat,
                    n = this.handleMouseMove.bind(this),
                    a = this.finishChanges.bind(this),
                    s = this.disableSelection.bind(this),
                    r = t.positionRight;
                if (!t.isDetached) {
                    var u = this.refs.element.getBoundingClientRect().right;
                    r = window.innerWidth - u
                }
                this.set({
                    initialBottom: t.positionBottom,
                    initialRight: r,
                    mouseMoveHandler: n,
                    mouseUpHandler: a,
                    moveInProgress: !0,
                    startX: e.clientX,
                    startY: e.clientY
                }), document.addEventListener("mousemove", n), document.addEventListener("mouseup", a), document.addEventListener("selectstart", s)
            }
        },
        startResize: function startResize(e, t, n) {
            var a = this.get().chat,
                s = this.handleMouseMove.bind(this),
                r = this.finishChanges.bind(this),
                u = this.disableSelection.bind(this);
            this.set({
                initialHeight: a.windowHeight,
                initialWidth: a.windowWidth,
                mouseMoveHandler: s,
                mouseUpHandler: r,
                resizeHeightInProgress: t,
                resizeWidthInProgress: n,
                startX: e.clientX,
                startY: e.clientY
            }), document.addEventListener("mousemove", s), document.addEventListener("mouseup", r), document.addEventListener("selectstart", u)
        }
    };
    function Chat_window_svelte(e) {
        Object(Ue.t)(this, e), this.refs = {}, this._state = Object(Ue.e)({
            initialBottom: 0,
            initialHeight: 0,
            initialRight: 0,
            initialWidth: 0,
            mouseMoveHandler: null,
            mouseUpHandler: null,
            moveInProgress: !1,
            resizeWidthInProgress: !1,
            resizeHeightInProgress: !1,
            selectStartHandler: null,
            startX: 0,
            startY: 0
        }, e.data), this._recompute({
            chat: 1
        }, this._state), this._intro = !0, this._fragment = function chat_window_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s,
                r,
                u,
                l,
                h,
                _,
                f,
                b,
                g,
                v,
                O,
                j = {
                    chat: t.chat
                },
                E = new Et({
                    root: e.root,
                    store: e.store,
                    data: j
                });
            E.on("mousedown", (function(t) {
                e.startMoving(t)
            }));
            var y = {
                    chat: t.chat
                },
                C = new Ke({
                    root: e.root,
                    store: e.store,
                    data: y
                }),
                I = {
                    chat: t.chat
                },
                w = new Qe({
                    root: e.root,
                    store: e.store,
                    data: I
                }),
                k = {
                    chat: t.chat
                },
                T = new He({
                    root: e.root,
                    store: e.store,
                    data: k
                });
            function mousedown_handler(t) {
                e.startResize(t, !0)
            }
            function mousedown_handler_1(t) {
                e.startResize(t, !1, !0)
            }
            function mousedown_handler_2(t) {
                e.startResize(t, !0, !0)
            }
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), E._fragment.c(), a = Object(Ue.k)("\n\n  "), C._fragment.c(), s = Object(Ue.k)("\n\n  "), w._fragment.c(), r = Object(Ue.k)("\n\n  "), T._fragment.c(), u = Object(Ue.k)("\n\n  "), l = Object(Ue.i)("div"), h = Object(Ue.k)("\n  "), _ = Object(Ue.i)("div"), f = Object(Ue.k)("\n  "), b = Object(Ue.i)("div"), Object(Ue.c)(l, "mousedown", mousedown_handler), l.className = "resize-height svelte-xhjx5q", Object(Ue.c)(_, "mousedown", mousedown_handler_1), _.className = "resize-width svelte-xhjx5q", Object(Ue.c)(b, "mousedown", mousedown_handler_2), b.className = "resize-both svelte-xhjx5q", n.className = g = "chat-window " + (t.chat.isDetached ? "chat-window-detached" : "") + " svelte-xhjx5q", n.style.cssText = t.style
                },
                m: function m(t, g) {
                    Object(Ue.u)(t, n, g), E._mount(n, null), Object(Ue.d)(n, a), C._mount(n, null), Object(Ue.d)(n, s), w._mount(n, null), Object(Ue.d)(n, r), T._mount(n, null), Object(Ue.d)(n, u), Object(Ue.d)(n, l), Object(Ue.d)(n, h), Object(Ue.d)(n, _), Object(Ue.d)(n, f), Object(Ue.d)(n, b), e.refs.element = n, O = !0
                },
                p: function p(e, t) {
                    var a = {};
                    e.chat && (a.chat = t.chat), E._set(a);
                    var s = {};
                    e.chat && (s.chat = t.chat), C._set(s);
                    var r = {};
                    e.chat && (r.chat = t.chat), w._set(r);
                    var u = {};
                    e.chat && (u.chat = t.chat), T._set(u), O && !e.chat || g === (g = "chat-window " + (t.chat.isDetached ? "chat-window-detached" : "") + " svelte-xhjx5q") || (n.className = g), O && !e.style || (n.style.cssText = t.style)
                },
                i: function i(t, a) {
                    O || (e.root._intro && (v && v.invalidate(), e.root._aftercreate.push((function() {
                        v || (v = Object(Ue.H)(e, n, fly, {}, !0)), v.run(1)
                    }))), this.m(t, a))
                },
                o: function o(t) {
                    O && (v || (v = Object(Ue.H)(e, n, fly, {}, !1)), v.run(0, (function() {
                        t(), v = null
                    })), O = !1)
                },
                d: function d(t) {
                    t && Object(Ue.p)(n), E.destroy(), C.destroy(), w.destroy(), T.destroy(), Object(Ue.A)(l, "mousedown", mousedown_handler), Object(Ue.A)(_, "mousedown", mousedown_handler_1), Object(Ue.A)(b, "mousedown", mousedown_handler_2), e.refs.element === n && (e.refs.element = null), t && v && v.abort()
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Chat_window_svelte.prototype, Ue.x), Object(Ue.e)(Chat_window_svelte.prototype, yt), Chat_window_svelte.prototype._recompute = function _recompute(e, t) {
        e.chat && this._differs(t.style, t.style = function style(e) {
            var t = e.chat,
                n = "height: ".concat(t.windowHeight, "px; width: ").concat(t.windowWidth, "px;");
            return t.isDetached && (n += "bottom: ".concat(t.positionBottom, "px; right: ").concat(t.positionRight, "px;")), n
        }(t)) && (e.style = !0)
    };
    var Ct = Chat_window_svelte;
    n(104);
    var It = {
        close: ot.chat.close,
        maximize: ot.chat.maximize
    };
    function onstate(e) {
        var t = this,
            n = e.changed,
            a = e.previous;
        n.newMessages && a && (this.set({
            activeCounter: !0
        }), setTimeout((function() {
            t.set({
                activeCounter: !1
            })
        }), l.e.UNREAD_MESSAGE_BADGE_ANIMATION))
    }
    function minimized_chat_svelte_create_if_block_2(e, t) {
        var n,
            a = {
                chat: t.chat
            },
            s = new bt.a({
                root: e.root,
                store: e.store,
                data: a
            }),
            r = {
                chat: t.chat
            },
            u = new gt({
                root: e.root,
                store: e.store,
                data: r
            });
        return {
            c: function c() {
                s._fragment.c(), n = Object(Ue.k)("\n\n      "), u._fragment.c()
            },
            m: function m(e, t) {
                s._mount(e, t), Object(Ue.u)(e, n, t), u._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.chat && (n.chat = t.chat), s._set(n);
                var a = {};
                e.chat && (a.chat = t.chat), u._set(a)
            },
            d: function d(e) {
                s.destroy(e), e && Object(Ue.p)(n), u.destroy(e)
            }
        }
    }
    function minimized_chat_svelte_create_if_block_1(e, t) {
        var n,
            a,
            s = t.chat.name;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.k)(s), n.className = "minimized-chat-group-name svelte-1x2ofen"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.chat && s !== (s = t.chat.name) && Object(Ue.E)(a, s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function minimized_chat_svelte_create_if_block(e, t) {
        var n,
            a,
            s;
        return {
            c: function c() {
                n = Object(Ue.i)("span"), a = Object(Ue.k)(t.newMessages), n.className = s = "minimized-chat-counter " + (t.activeCounter ? "minimized-chat-counter-active" : "") + " svelte-1x2ofen"
            },
            m: function m(e, t) {
                Object(Ue.u)(e, n, t), Object(Ue.d)(n, a)
            },
            p: function p(e, t) {
                e.newMessages && Object(Ue.E)(a, t.newMessages), e.activeCounter && s !== (s = "minimized-chat-counter " + (t.activeCounter ? "minimized-chat-counter-active" : "") + " svelte-1x2ofen") && (n.className = s)
            },
            d: function d(e) {
                e && Object(Ue.p)(n)
            }
        }
    }
    function Minimized_chat_svelte(e) {
        var t = this;
        Object(Ue.t)(this, e), this._state = Object(Ue.e)({
            activeCounter: !1
        }, e.data), this._intro = !0, this._handlers.state = [onstate], onstate.call(this, {
            changed: Object(Ue.f)({}, this._state),
            current: this._state
        }), this._fragment = function minimized_chat_svelte_create_main_fragment(e, t) {
            var n,
                a,
                s,
                r,
                u,
                l,
                h = t.chat.isDirect && minimized_chat_svelte_create_if_block_2(e, t),
                _ = t.chat.isGroup && minimized_chat_svelte_create_if_block_1(e, t),
                f = t.newMessages && minimized_chat_svelte_create_if_block(e, t);
            function click_handler(n) {
                n.stopPropagation(), e.close(t.chat.id)
            }
            function click_handler_1(n) {
                e.maximize(t.chat.id)
            }
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), a = Object(Ue.i)("div"), h && h.c(), s = Object(Ue.k)("\n\n    "), _ && _.c(), r = Object(Ue.k)("\n\n  "), f && f.c(), u = Object(Ue.k)("\n\n  "), (l = Object(Ue.i)("button")).innerHTML = '<span class="icon-font-component"><span class="icon-font-chess x"></span></span>', a.className = "minimized-chat-meta svelte-1x2ofen", Object(Ue.c)(l, "click", click_handler), l.className = "minimized-chat-close svelte-1x2ofen", Object(Ue.c)(n, "click", click_handler_1), n.className = "minimized-chat svelte-1x2ofen", Object(Ue.F)(n, "max-width", t.chat.windowWidth + "px")
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), Object(Ue.d)(n, a), h && h.m(a, null), Object(Ue.d)(a, s), _ && _.m(a, null), Object(Ue.d)(n, r), f && f.m(n, null), Object(Ue.d)(n, u), Object(Ue.d)(n, l)
                },
                p: function p(r, l) {
                    (t = l).chat.isDirect ? h ? h.p(r, t) : ((h = minimized_chat_svelte_create_if_block_2(e, t)).c(), h.m(a, s)) : h && (h.d(1), h = null), t.chat.isGroup ? _ ? _.p(r, t) : ((_ = minimized_chat_svelte_create_if_block_1(e, t)).c(), _.m(a, null)) : _ && (_.d(1), _ = null), t.newMessages ? f ? f.p(r, t) : ((f = minimized_chat_svelte_create_if_block(e, t)).c(), f.m(n, u)) : f && (f.d(1), f = null), r.chat && Object(Ue.F)(n, "max-width", t.chat.windowWidth + "px")
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), h && h.d(), _ && _.d(), f && f.d(), Object(Ue.A)(l, "click", click_handler), Object(Ue.A)(n, "click", click_handler_1)
                }
            }
        }(this, this._state), this.root._oncreate.push((function() {
            t.fire("update", {
                changed: Object(Ue.f)({}, t._state),
                current: t._state
            })
        })), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Minimized_chat_svelte.prototype, Ue.x), Object(Ue.e)(Minimized_chat_svelte.prototype, It);
    var wt = Minimized_chat_svelte;
    n(105);
    function opened_chats_list_svelte_get_each_context(e, t, n) {
        var a = Object.create(e);
        return a.chat = t[n], a
    }
    function opened_chats_list_svelte_create_if_block(e, t) {
        for (var n, a = [], s = Object(Ue.g)(), r = t.$openChats, u = function get_key(e) {
                return e.chat.userId
            }, l = 0; l < r.length; l += 1) {
            var h = opened_chats_list_svelte_get_each_context(t, r, l),
                _ = u(h);
            a[l] = s[_] = opened_chats_list_svelte_create_each_block(e, _, h)
        }
        return {
            c: function c() {
                for (l = 0; l < a.length; l += 1)
                    a[l].c();
                n = Object(Ue.h)()
            },
            m: function m(e, t) {
                for (l = 0; l < a.length; l += 1)
                    a[l].m(e, t);
                Object(Ue.u)(e, n, t)
            },
            p: function p(t, r) {
                var l = r.$openChats;
                a = Object(Ue.G)(a, e, t, u, 1, r, l, s, n.parentNode, Ue.l, opened_chats_list_svelte_create_each_block, "m", n, opened_chats_list_svelte_get_each_context)
            },
            d: function d(e) {
                for (l = 0; l < a.length; l += 1)
                    a[l].d(e);
                e && Object(Ue.p)(n)
            }
        }
    }
    function opened_chats_list_svelte_create_else_block(e, t) {
        var n = {
                chat: t.chat
            },
            a = new Ct({
                root: e.root,
                store: e.store,
                data: n
            });
        return {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.$openChats && (n.chat = t.chat), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function opened_chats_list_svelte_create_if_block_1(e, t) {
        var n = {
                chat: t.chat,
                newMessages: t.chat.newMessages
            },
            a = new wt({
                root: e.root,
                store: e.store,
                data: n
            });
        return {
            c: function c() {
                a._fragment.c()
            },
            m: function m(e, t) {
                a._mount(e, t)
            },
            p: function p(e, t) {
                var n = {};
                e.$openChats && (n.chat = t.chat), e.$openChats && (n.newMessages = t.chat.newMessages), a._set(n)
            },
            d: function d(e) {
                a.destroy(e)
            }
        }
    }
    function opened_chats_list_svelte_create_each_block(e, t, n) {
        var a,
            s;
        function select_block_type(e) {
            return e.chat.isMinimized ? opened_chats_list_svelte_create_if_block_1 : opened_chats_list_svelte_create_else_block
        }
        var r = select_block_type(n),
            u = r(e, n);
        return {
            key: t,
            first: null,
            c: function c() {
                a = Object(Ue.h)(), u.c(), s = Object(Ue.h)(), this.first = a
            },
            m: function m(e, t) {
                Object(Ue.u)(e, a, t), u.m(e, t), Object(Ue.u)(e, s, t)
            },
            p: function p(t, n) {
                r === (r = select_block_type(n)) && u ? u.p(t, n) : (u.d(1), (u = r(e, n)).c(), u.m(s.parentNode, s))
            },
            d: function d(e) {
                e && Object(Ue.p)(a), u.d(e), e && Object(Ue.p)(s)
            }
        }
    }
    function Opened_chats_list_svelte(e) {
        Object(Ue.t)(this, e), this._state = Object(Ue.e)(this.store._init(["openChats"]), e.data), this.store._add(this, ["openChats"]), this._intro = !0, this._handlers.destroy = [Ue.z], this._fragment = function opened_chats_list_svelte_create_main_fragment(e, t) {
            var n,
                a = t.$openChats && opened_chats_list_svelte_create_if_block(e, t);
            return {
                c: function c() {
                    n = Object(Ue.i)("div"), a && a.c(), n.className = "opened-chats-list svelte-1kz8wgl"
                },
                m: function m(e, t) {
                    Object(Ue.u)(e, n, t), a && a.m(n, null)
                },
                p: function p(t, s) {
                    s.$openChats ? a ? a.p(t, s) : ((a = opened_chats_list_svelte_create_if_block(e, s)).c(), a.m(n, null)) : a && (a.d(1), a = null)
                },
                d: function d(e) {
                    e && Object(Ue.p)(n), a && a.d()
                }
            }
        }(this, this._state), e.target && (this._fragment.c(), this._mount(e.target, e.anchor), Object(Ue.r)(this))
    }
    Object(Ue.e)(Opened_chats_list_svelte.prototype, Ue.x);
    var kt = Opened_chats_list_svelte;
    Xe.default.register(pt), ot.init.initClubChats(), ot.init.initChatModule(), Object(De.i)(kt, {
        store: Xe.default.stores.chat,
        target: document.querySelector(l.h.OPENED_CHATS_CONTAINER)
    })
}]);

