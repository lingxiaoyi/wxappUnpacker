global.webpackJsonp([ 10 ], {
    LOpY: function(e, t) {},
    M93x: function(e, t, r) {
        "use strict";
        var n = r("Mw+1");
        var i = function(e) {
            r("LOpY");
        }, a = r("ybqe")(n.a, null, i, null, null);
        t.a = a.exports;
    },
    "Mw+1": function(e, t, r) {
        "use strict";
        var n = r("Xxa5"), i = r.n(n), a = r("exGp"), s = r.n(a), o = (r("vjWP"), r("IcnI")), u = r("pdGj").sa;
        t.a = {
            created: function() {},
            onLaunch: function(e) {
                var t = this;
                return s()(i.a.mark(function r() {
                    var n;
                    return i.a.wrap(function(r) {
                        for (;;) switch (r.prev = r.next) {
                          case 0:
                            if (u.para.autoTrack.appLaunch = u.para.autoTrack.appShow = u.para.autoTrack.pageShow = {
                                platform: "miniapp",
                                app_name: "earth",
                                app_channel: "",
                                user_key: wx.getStorageSync("userKey") && wx.getStorageSync("userKey") || "0",
                                union_id: wx.getStorageSync("unionId") ? wx.getStorageSync("unionId") : ""
                            }, n = e.query.cityid, r.t0 = n, !r.t0) {
                                r.next = 6;
                                break;
                            }
                            return r.next = 6, t.$axios({
                                url: "/foundation/city",
                                params: {
                                    cityid: n
                                }
                            }).then(function(e) {
                                e && (wx.setStorageSync("choose_city", e), t.$store.dispatch("setGlobalInfo", [ "chosenCity", e ]));
                            });

                          case 6:
                          case "end":
                            return r.stop();
                        }
                    }, r, t);
                }))();
            },
            onShow: function(e) {
                setTimeout(function() {
                    getApp().globalData.scene = e.scene;
                }, 0);
                var t = e.query, r = t.t, n = t.utm_material, i = t.gdt_vid;
                if (e.query.source ? (wx.setStorageSync("pageFromCooperation", e.query.source), 
                o.a.commit("UPDATE_GLOBAL_INFO", [ "pageFromCooperation", e.query.source ])) : wx.removeStorageSync("pageFromCooperation"), 
                i && wx.setStorageSync("ad_click_id", i), (r || n) && (n ? wx.setStorageSync("subScenekey", "material_" + n) : wx.setStorageSync("subScenekey", "模板" + r)), 
                wx.getUpdateManager) {
                    var a = wx.getUpdateManager();
                    a && a.onCheckForUpdate && a.onUpdateReady && (a.onCheckForUpdate(function(e) {}), 
                    a.onUpdateReady(function() {
                        a.applyUpdate();
                    }), a.onUpdateFailed(function() {}));
                }
                wx.setStorageSync("sceneId", e.scene);
            },
            onHide: function(e) {
                wx.setStorageSync("subScenekey", null), wx.setStorageSync("ad_click_id", null);
            }
        };
    },
    NHnr: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("Xxa5"), i = r.n(n), a = r("exGp"), s = r.n(a), o = r("woOf"), u = r.n(o), c = r("vjWP"), p = r("pdGj"), h = r("5nAL"), g = r.n(h), l = r("M93x"), d = r("D4CW"), f = r("gW91"), m = r("IcnI"), _ = r("VsUZ"), v = r("jV6A"), y = (r("1CKO"), 
        this);
        Object(f.a)("init", "83f2beada08b7a43", "wx7e490492b4c23e98", {
            vue: g.a,
            version: "1.0"
        }), l.a.mpType = "app";
        var x = new g.a(l.a);
        x.$mount(), g.a.use(d.a), g.a.config.productionTip = !1, g.a.prototype.$store = m.a, 
        g.a.prototype._piwik = function() {
            return c.a.apply(void 0, arguments);
        }, g.a.prototype._shencePoint = function(e) {
            Object(v.l)(getApp(), e, this);
        }, g.a.prototype._sa = p.sa, g.a.prototype.jumpToWebview = v.g;
        var S = getApp();
        S.globalData = u()(S.globalData, {
            userInfo: null,
            imagePath: "https://sr.aihuishou.com/miniapps/images/",
            scene: "",
            inquiryInfo: {
                needFresh: !0
            },
            orderPage: {
                expressType: 1,
                cabinetExpressInfo: {},
                sfExpressInfo: {
                    street: "",
                    building: "",
                    nickName: "",
                    pickupDate: "",
                    location: null,
                    isDispatcherConditional: !1
                },
                onDoorType: 1,
                onDoorInfo: {},
                metroInfo: {},
                storeInfo: {}
            }
        }), S.commonJump = v.c, S.jumpToWebview = v.g, S.saveCache = v.k;
        try {
            var w = wx.getSystemInfoSync();
            console.log(w), w && x.$store.dispatch("setGlobalInfo", [ "systemInfo", w ]);
        } catch (e) {
            console.log(e);
        }
        var b, I = function(e) {
            p.sa.registerApp({
                platform: "miniapp",
                app_name: "earth",
                app_channel: "",
                user_key: wx.getStorageSync("userKey") || "0",
                union_id: e || wx.getStorageSync("unionId") || ""
            }), p.sa.para.autoTrack.appLaunch = p.sa.para.autoTrack.appShow = p.sa.para.autoTrack.pageShow = {
                platform: "miniapp",
                app_name: "earth",
                app_channel: "",
                user_key: wx.getStorageSync("userKey") || "0",
                union_id: e || wx.getStorageSync("unionId") || ""
            }, p.sa.init();
        };
        (b = s()(i.a.mark(function e() {
            var t;
            return i.a.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return (t = wx.getStorageSync("choose_city")) && t.id && x.$store.dispatch("setGlobalInfo", [ "chosenCity", t ]), 
                    e.next = 4, Object(_.i)();

                  case 4:
                    return e.abrupt("return", e.sent);

                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e, y);
        })), function() {
            return b.apply(this, arguments);
        })().then(function(e) {
            I(e ? e.unionId : "");
        }).catch(function(e) {
            I("");
        }), x.$store.dispatch("updateIsIphonex"), x.$store.dispatch("getUserLocation", S), 
        x.$store.dispatch("initCity"), x.$store.dispatch("getUserInfo"), t.default = {
            config: {
                pages: [ "^pages/index/index", "pages/account/account", "pages/beforehand/beforehand", "pages/bookreservation/main", "pages/cabinetList/cabinetList", "pages/cabinetmap/cabinetmap", "pages/category/category", "pages/chooseaddress/main", "pages/choosecity/main", "pages/detail/detail", "pages/inquiry/inquiry", "pages/login/login", "pages/mtalogin/mtalogin", "pages/newexclusive/newexclusive", "pages/nosku/nosku", "pages/order/order", "pages/realname/realname", "pages/reservation/reservation", "pages/searchproduct/searchproduct", "pages/sharecoupon/sharecoupon", "pages/shareprice/shareprice", "pages/sharepricerules/sharepricerules", "pages/sharerule/main", "pages/shop/main", "pages/success/main", "pages/activity/private/private", "pages/jump/main", "pages/nbs-shopdetail/main", "pages/nbs-orderlist/main", "pages/nbs-orderdetail/main", "pages/invite-coupon/main" ],
                navigateToMiniProgramAppIdList: [ "wxde54a54a45c0e1b7", "wx1d0bf756d8c83d75", "wx1db20a1fa08cf9cf", "wxfd853a0b03d0aea9", "wxbad8d91bc1237b1f" ],
                permission: {
                    "scope.userLocation": {
                        desc: "打开定位服务，准确了解您当前城市的回收价格。"
                    }
                },
                window: {
                    backgroundTextStyle: "light",
                    navigationBarBackgroundColor: "#fff",
                    navigationBarTitleText: "爱回收",
                    navigationBarTextStyle: "black"
                }
            }
        };
    },
    gW91: function(e, t, r) {
        "use strict";
        (function(e) {
            class r {
                constructor(e, t) {
                    this.host = "https://wxapi.growingio.com", this.messageQueue = [], this.uploadingQueue = [], 
                    this.uploadTimer = null, this.projectId = e, this.appId = t, this.url = `${this.host}/projects/${this.projectId}/apps/${this.appId}/collect`;
                }
                setHost(e) {
                    0 != e.indexOf("http") && (this.host = "https://" + e), this.url = `${this.host}/projects/${this.projectId}/apps/${this.appId}/collect`;
                }
                upload(e) {
                    this.messageQueue.push(e), this.uploadTimer || (this.uploadTimer = setTimeout(() => {
                        this._flush(), this.uploadTimer = null;
                    }, 1e3));
                }
                forceFlush() {
                    this.uploadTimer && (clearTimeout(this.uploadTimer), this.uploadTimer = null), this._flush();
                }
                _flush() {
                    this.uploadingQueue = this.messageQueue.slice(), this.messageQueue = [], this.uploadingQueue.length > 0 && wx.request({
                        url: `${this.url}?stm=${Date.now()}`,
                        header: {
                            "content-type": "application/json"
                        },
                        method: "POST",
                        data: this.uploadingQueue,
                        success: () => {
                            this.messageQueue.length > 0 && this._flush();
                        },
                        fail: () => {
                            this.messageQueue = this.uploadingQueue.concat(this.messageQueue);
                        }
                    });
                }
            }
            var n = {
                sdkVer: "1.3",
                devVer: 1,
                guid: function() {
                    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                        var t = 16 * Math.random() | 0;
                        return ("x" == e ? t : 3 & t | 8).toString(16);
                    });
                },
                getScreenHeight: function(e) {
                    return Math.round(e.screenHeight * e.pixelRatio);
                },
                getScreenWidth: function(e) {
                    return Math.round(e.screenWidth * e.pixelRatio);
                },
                getOS: function(e) {
                    if (e) {
                        var t = e.toLowerCase();
                        return -1 != t.indexOf("android") ? "Weixin-Android" : -1 != t.indexOf("ios") ? "Weixin-iOS" : e;
                    }
                },
                getOSV: e => `Weixin ${e}`,
                isEmpty: e => {
                    for (var t in e) if (e.hasOwnProperty(t)) return !1;
                    return !0;
                }
            };
            class i {
                constructor() {
                    this.queries = {};
                }
                touch(e) {
                    this.path = e.route, this.time = Date.now(), this.query = this.queries[e.route] ? this.queries[e.route] : void 0;
                }
                addQuery(e, t) {
                    this.queries[e.route] = t ? this._getQuery(t) : null;
                }
                _getQuery(e) {
                    return Object.keys(e).map(t => `${t}=${e[t]}`).join("&");
                }
            }
            const a = {
                tap: [ "tap", "click" ],
                longtap: [ "longtap" ],
                input: [ "input" ],
                blur: [ "change", "blur" ],
                submit: [ "submit" ],
                focus: [ "focus" ]
            }, s = /^function [^\(]*\([^\)]+\).*[^\.]+\.([^\(]+)\(.*$/;
            function o(e) {
                return e && e.$attrs ? e.$attrs.mpcomid : "0";
            }
            class u {
                constructor(e) {
                    this.vueVM = e;
                }
                getHandle(e) {
                    var t = e.type, r = e.target;
                    void 0 === r && (r = {});
                    var n = (e.currentTarget || r).dataset;
                    void 0 === n && (n = {});
                    var i = n.comkey;
                    void 0 === i && (i = "");
                    var u = n.eventid, c = function(e, t) {
                        void 0 === t && (t = []);
                        var r = t.slice(1);
                        return r.length ? r.reduce(function(e, t) {
                            for (var r = e.$children.length, n = 0; r > n; n++) {
                                var i = e.$children[n];
                                if (o(i) === t) return i;
                            }
                            return e;
                        }, e) : e;
                    }(this.vueVM, i.split(","));
                    if (c) {
                        var p = function e(t, r, n) {
                            void 0 === n && (n = []);
                            var i = [];
                            if (!t || !t.tag) return i;
                            var a = t || {}, s = a.data;
                            void 0 === s && (s = {});
                            var o = a.children;
                            void 0 === o && (o = []);
                            var u = a.componentInstance;
                            u ? Object.keys(u.$slots).forEach(function(t) {
                                var a = u.$slots[t];
                                (Array.isArray(a) ? a : [ a ]).forEach(function(t) {
                                    i = i.concat(e(t, r, n));
                                });
                            }) : o.forEach(function(t) {
                                i = i.concat(e(t, r, n));
                            });
                            var c = s.attrs, p = s.on;
                            return c && p && c.eventid === r && n.forEach(function(e) {
                                var t = p[e];
                                "function" == typeof t ? i.push(t) : Array.isArray(t) && (i = i.concat(t));
                            }), i;
                        }(c._vnode, u, a[t] || [ t ]);
                        if (p.length) {
                            var h = p[0];
                            if (h.isProxied) return h.proxiedName;
                            try {
                                var g = ("" + h).replace(/\n/g, "");
                                if (g.match(s)) {
                                    var l = s.exec(g);
                                    if (l && l.length > 1) return l[1];
                                }
                            } catch (e) {}
                            return h.name;
                        }
                    }
                }
            }
            class c {
                constructor(e) {
                    this.growingio = e, this.weixin = e.weixin, this.currentPage = new i(), this.scene = null, 
                    this.sessionId = null, this.cs1 = null, this.lastPageEvent = void 0, this.isOnShareAppMessage = !1, 
                    this.CLICK_TYPE = {
                        tap: "clck",
                        longpress: "lngprss",
                        longtap: "lngprss"
                    };
                }
                getVisitorId() {
                    return this.weixin.uid;
                }
                getUserId() {
                    return this.cs1;
                }
                setUserId(e) {
                    var t = e + "";
                    t && 100 > t.length && (this.cs1 = t, this.lastPageEvent && this._sendEvent(this.lastPageEvent));
                }
                clearUserId() {
                    this.cs1 = null;
                }
                appListener(e, t, r) {
                    this.isOnShareAppMessage || (this.growingio.debug && console.log("App.", t, Date.now()), 
                    "onShow" == t ? (this.sessionId = n.guid(), this.lastPageEvent = void 0, this.sendVisitEvent(r)) : "onHide" == t ? (this.growingio.forceFlush(), 
                    this.weixin.syncStorage(), this.isOnShareAppMessage || this.sendVisitCloseEvent()) : "onError" == t && this.sendErrorEvent(r));
                }
                pageListener(e, t, r) {
                    if (this.growingio.debug && console.log("Page.", e.route, "#", t, Date.now()), "onShow" === t) this.isOnShareAppMessage ? this.isOnShareAppMessage = !1 : (this.currentPage.touch(e), 
                    this.sendPage(e)); else if ("onLoad" === t) n.isEmpty(i = r[0]) || this.currentPage.addQuery(e, i); else if ("onShareAppMessage" === t) {
                        var i = null, a = null;
                        2 > r.length ? 1 === r.length && (r[0].from ? i = r[0] : r[0].title && (a = r[0])) : (i = r[0], 
                        a = r[1]), this.isOnShareAppMessage = !0, this.sendPageShare(e, i, a);
                    } else "onTabItemTap" === t && this.sendTabClick(r[0]);
                }
                actionListener(e, t) {
                    if ("handleProxy" === t && this.growingio.vueRootVMs && this.growingio.vueRootVMs[this.currentPage.path]) {
                        let r = new u(this.growingio.vueRootVMs[this.currentPage.path]).getHandle(e);
                        r && (t = r);
                    }
                    this.growingio.debug && console.log("Click on ", t, Date.now()), "tap" === e.type || "longpress" === e.type ? this.sendClick(e, t) : -1 !== [ "change", "confirm", "blur" ].indexOf(e.type) ? this.sendChange(e, t) : "getuserinfo" === e.type && (this.sendClick(e, t), 
                    e.detail && e.detail.userInfo && this.setVisitor(e.detail.userInfo));
                }
                handleWebViewMessages(e) {
                    console.log(e);
                }
                track(e, t) {
                    if (null !== e && void 0 !== e && 0 !== e.length) {
                        var r = {
                            t: "cstm",
                            ptm: this.currentPage.time,
                            p: this.currentPage.path,
                            q: this.currentPage.query,
                            n: e
                        };
                        null !== t && "object" == typeof t && (r.var = t), this._sendEvent(r);
                    }
                }
                identify(e, t) {
                    void 0 !== e && 0 !== e.length && (this.growingio.login(e), this._sendEvent({
                        t: "vstr",
                        var: {
                            openid: e,
                            unionid: t
                        }
                    }));
                }
                setVisitor(e) {
                    this._sendEvent({
                        t: "vstr",
                        var: e
                    });
                }
                setUser(e) {
                    this._sendEvent({
                        t: "ppl",
                        var: e
                    });
                }
                setPage(e) {
                    this._sendEvent({
                        t: "pvar",
                        ptm: this.currentPage.time,
                        p: this.currentPage.path,
                        q: this.currentPage.query,
                        var: e
                    });
                }
                setEvar(e) {
                    this._sendEvent({
                        t: "evar",
                        var: e
                    });
                }
                sendVisitEvent(e) {
                    var t = this.weixin.systemInfo, r = {
                        t: "vst",
                        tm: Date.now(),
                        av: n.sdkVer,
                        db: t.brand,
                        dm: t.model.replace(/<.*>/, ""),
                        sh: n.getScreenHeight(t),
                        sw: n.getScreenWidth(t),
                        os: n.getOS(t.platform),
                        osv: n.getOSV(t.version),
                        l: t.language
                    };
                    if (this.growingio.appVer && (r.cv = this.growingio.appVer + ""), e.length > 0) {
                        var i = e[0];
                        r.p = i.path, n.isEmpty(i.query) || (r.q = this.currentPage._getQuery(i.query)), 
                        r.ch = `scn:${i.scene}`, i.referrerInfo && i.referrerInfo.appId && (r.rf = i.referrerInfo.appId), 
                        this.scene = i.scene;
                    }
                    this.weixin.requestLocation().then(() => {
                        null != this.weixin.location && (r.lat = this.weixin.location.latitude, r.lng = this.weixin.location.longitude), 
                        this.weixin.getNetworkType().then(e => {
                            e && (r.nt = e.networkType), this._sendEvent(r);
                        });
                    });
                }
                sendVisitCloseEvent() {
                    this._sendEvent({
                        t: "cls",
                        p: this.currentPage.path,
                        q: this.currentPage.query
                    });
                }
                sendErrorEvent(e) {
                    if (e && e.length > 0) {
                        let t = e[0].split("\n");
                        if (t && t.length > 1) {
                            let e = t[1].split(";");
                            if (e && e.length > 1) {
                                let r = e[1].match(/at ([^ ]+) page (.*) function/), n = {
                                    key: t[0],
                                    error: e[0]
                                };
                                r && r.length > 2 && (n.page = r[1], n.function = r[2]), this._sendEvent({
                                    t: "cstm",
                                    ptm: this.currentPage.time,
                                    p: this.currentPage.path,
                                    q: this.currentPage.query,
                                    n: "onError",
                                    var: n
                                });
                            }
                        }
                    }
                }
                sendPage(e) {
                    var t = {
                        t: "page",
                        tm: this.currentPage.time,
                        p: this.currentPage.path,
                        q: this.currentPage.query
                    };
                    t.rp = this.lastPageEvent ? this.lastPageEvent.p : this.scene ? `scn:${this.scene}` : null, 
                    e.data && e.data.pvar && (t.var = e.data.pvar);
                    var r = this.weixin.getPageTitle(e);
                    r && r.length > 0 && (t.tl = r), this._sendEvent(t), this.lastPageEvent = t;
                }
                sendPageShare(e, t, r) {
                    this._sendEvent({
                        t: "cstm",
                        ptm: this.currentPage.time,
                        p: this.currentPage.path,
                        q: this.currentPage.query,
                        n: "onShareAppMessage",
                        var: {
                            from: t ? t.from : void 0,
                            target: t && t.target ? t.target.id : void 0,
                            title: r ? r.title : void 0,
                            path: r ? r.path : void 0
                        }
                    });
                }
                sendClick(e, t) {
                    var r = {
                        t: this.CLICK_TYPE[e.type],
                        ptm: this.currentPage.time,
                        p: this.currentPage.path,
                        q: this.currentPage.query
                    }, n = e.currentTarget, i = {
                        x: `${n.id}#${t}`
                    };
                    n.dataset.title ? i.v = n.dataset.title : n.dataset.src && (i.h = n.dataset.src), 
                    void 0 !== n.dataset.index && (i.idx = n.dataset.index), r.e = [ i ], this._sendEvent(r);
                }
                sendChange(e, t) {
                    var r = {
                        t: "chng",
                        ptm: this.currentPage.time,
                        p: this.currentPage.path,
                        q: this.currentPage.query
                    }, n = e.currentTarget, i = {
                        x: `${n.id}#${t}`
                    };
                    if (-1 !== [ "blur", "change", "confirm" ].indexOf(e.type) && n.dataset.growingTrack) {
                        if (!e.detail.value || 0 === e.detail.value.length) return;
                        "string" == typeof e.detail.value ? i.v = e.detail.value : "[object Array]" === Object.prototype.toString.call(e.detail.value) && (i.v = e.detail.value.join(","));
                    }
                    "change" === e.type && e.detail && e.detail.source && "autoplay" === e.detail.source || (r.e = [ i ], 
                    this._sendEvent(r));
                }
                sendTabClick(e) {
                    this._sendEvent({
                        t: "clck",
                        ptm: this.currentPage.time,
                        p: this.currentPage.path,
                        q: this.currentPage.query,
                        e: [ {
                            x: "#onTabItemTap",
                            v: e.text,
                            idx: e.index,
                            h: e.pagePath
                        } ]
                    });
                }
                _sendEvent(e) {
                    e.u = this.weixin.uid, e.s = this.sessionId, e.tm = e.tm || Date.now(), e.d = this.growingio.appId, 
                    e.b = "MinP", null !== this.cs1 && (e.cs1 = this.cs1), this.growingio.upload(e);
                }
            }
            class p {
                constructor(e) {
                    this._location = null, this._systemInfo = null, this._uid = wx.getStorageSync("_growing_uid_"), 
                    this._uid && 36 !== this._uid.length && (e.forceLogin = !1), this._esid = wx.getStorageSync("_growing_esid_");
                }
                get location() {
                    return this._location;
                }
                get systemInfo() {
                    return null == this._systemInfo && (this._systemInfo = wx.getSystemInfoSync()), 
                    this._systemInfo;
                }
                set esid(e) {
                    this._esid = e, wx.setStorageSync("_growing_esid_", this._esid);
                }
                get esid() {
                    return this._esid || (this._esid = 1), this._esid;
                }
                set uid(e) {
                    this._uid = e, wx.setStorageSync("_growing_uid_", this._uid);
                }
                get uid() {
                    return this._uid || (this.uid = n.guid()), this._uid;
                }
                syncStorage() {
                    wx.getStorageSync("_growing_uid_") || wx.setStorageSync("_growing_uid_", this._uid);
                }
                requestLocation() {
                    return new Promise(e => {
                        this._getSetting().then(t => {
                            if (!(t && t.authSetting && t.authSetting["scope.userLocation"])) return e(null);
                            this._getLocation().then(t => (this._location = t, e(t)));
                        });
                    });
                }
                getNetworkType() {
                    return new Promise(e => {
                        wx.getNetworkType({
                            success: t => e(t),
                            fail: () => e(null)
                        });
                    });
                }
                getPageTitle(e) {
                    var t = "";
                    try {
                        if (e.data.title && e.data.title.length > 0 && (t = Array.isArray(e.data.title) ? e.data.title.join(" ") : e.data.title), 
                        0 === t.length && __wxConfig) {
                            if (__wxConfig.tabBar) {
                                var r = __wxConfig.tabBar.list.find(t => t.pathPath == e.route || t.pagePath == `${e.route}.html`);
                                r && r.text && (t = r.text);
                            }
                            if (0 == t.length) {
                                var n = __wxConfig.page[e.route] || __wxConfig.page[`${e.route}.html`];
                                t = n ? n.window.navigationBarTitleText : __wxConfig.global.window.navigationBarTitleText;
                            }
                        }
                    } catch (e) {}
                    return t;
                }
                _getSetting() {
                    return new Promise(e => {
                        wx.getSetting({
                            success: e,
                            fail: e
                        });
                    });
                }
                _getLocation() {
                    return new Promise(e => {
                        wx.getLocation({
                            success: e,
                            fail: function() {
                                return e(null);
                            }
                        });
                    });
                }
            }
            var h = {
                defaultPageCallbacks: {},
                defaultAppCallbacks: {},
                appHandlers: [ "onShow", "onHide", "onError" ],
                pageHandlers: [ "onLoad", "onShow", "onShareAppMessage", "onTabItemTap" ],
                actionEventTypes: [ "tap", "longpress", "blur", "change", "confirm", "getuserinfo" ],
                originalPage: Page,
                originalApp: App,
                hook: function(e, t) {
                    return function() {
                        var r, n = arguments ? arguments[0] : void 0;
                        if (n && n.currentTarget && -1 != h.actionEventTypes.indexOf(n.type)) try {
                            h.observer.actionListener(n, e);
                        } catch (e) {
                            console.error(e);
                        }
                        if (this._growing_page_ && -1 !== [ "onShow", "onLoad", "onTabItemTap" ].indexOf(e) || (r = t.apply(this, arguments)), 
                        this._growing_app_ && -1 != h.appHandlers.indexOf(e)) try {
                            h.defaultAppCallbacks[e].apply(this, arguments);
                        } catch (e) {
                            console.error(e);
                        }
                        if (this._growing_page_ && -1 != h.pageHandlers.indexOf(e)) {
                            var i = Array.prototype.slice.call(arguments);
                            r && i.push(r);
                            try {
                                h.defaultPageCallbacks[e].apply(this, i);
                            } catch (e) {
                                console.error(e);
                            }
                            if (-1 != [ "onShow", "onLoad", "onTabItemTap" ].indexOf(e)) r = t.apply(this, arguments); else {
                                var a = h.observer.growingio;
                                a && a.followShare && r.path && (r.path = -1 === r.path.indexOf("?") ? r.path + "?suid=" + a.weixin.uid : r.path + "&suid=" + a.weixin.uid);
                            }
                        }
                        return r;
                    };
                },
                instrument: function(e) {
                    for (var t in e) "function" == typeof e[t] && (e[t] = this.hook(t, e[t]));
                    return e._growing_app_ && h.appHandlers.map(function(t) {
                        e[t] || (e[t] = h.defaultAppCallbacks[t]);
                    }), e._growing_page_ && h.pageHandlers.map(function(t) {
                        e[t] || "onShareAppMessage" === t || (e[t] = h.defaultPageCallbacks[t]);
                    }), e;
                },
                GrowingPage: function(e) {
                    e._growing_page_ = !0, h.originalPage(h.instrument(e));
                },
                GrowingApp: function(e) {
                    e._growing_app_ = !0, h.originalApp(h.instrument(e));
                },
                initInstrument: function(e) {
                    h.observer = e, h.pageHandlers.forEach(function(e) {
                        h.defaultPageCallbacks[e] = function() {
                            this.__route__ && h.observer.pageListener(this, e, arguments);
                        };
                    }), h.appHandlers.forEach(function(e) {
                        h.defaultAppCallbacks[e] = function() {
                            h.observer.appListener(this, e, arguments);
                        };
                    }), Page = function() {
                        return h.GrowingPage(arguments[0]);
                    }, App = function() {
                        return h.GrowingApp(arguments[0]);
                    };
                }
            };
            var g = new class {
                constructor() {
                    this.uploadingMessages = [];
                }
                init(e, t, n = {}) {
                    this.projectId = e, this.appId = t, this.appVer = n.version, this.debug = n.debug || !1, 
                    this.forceLogin = n.forceLogin || !1, this.followShare = n.followShare || !1, this.weixin = new p(this), 
                    this.esid = this.weixin.esid, this.uploader = new r(this.projectId, this.appId), 
                    this.observer = new c(this), n.vue && (this.vueRootVMs = {}, this._proxyVue(n.vue)), 
                    this._start();
                }
                setHost(e) {
                    this.uploader.setHost(e);
                }
                setVue(e) {
                    this.vueRootVMs || (this.vueRootVMs = {}), this._proxyVue(e);
                }
                login(e) {
                    if (this.forceLogin) for (var t of (this.weixin.uid = e, this.forceLogin = !1, this.uploadingMessages)) t.u = e, 
                    this._upload(t);
                }
                upload(e) {
                    this.forceLogin ? this.uploadingMessages.push(e) : this._upload(e);
                }
                forceFlush() {
                    this.weixin.esid = this.esid, this.uploader.forceFlush();
                }
                proxy(e, t) {
                    try {
                        if ("setVue" === e) this.setVue(t[0]); else if (this.observer && this.observer[e]) return this.observer[e].apply(this.observer, t);
                    } catch (e) {
                        console.error(e);
                    }
                }
                _start() {
                    h.initInstrument(this.observer);
                    try {
                        e && e["__core-js_shared__"] && (e.App = App, e.Page = Page);
                    } catch (e) {
                        console.error(e);
                    }
                }
                _upload(e) {
                    e.esid = this.esid++, this.debug && console.info("generate new event", JSON.stringify(e, 0, 2)), 
                    this.uploader.upload(e);
                }
                _proxyVue(e) {
                    if (void 0 !== e.mixin) {
                        let t = this;
                        e.mixin({
                            created: function() {
                                if (!this.$options.methods) return;
                                const e = Object.keys(this.$options.methods);
                                for (let t of Object.keys(this)) 0 > e.indexOf(t) || (Object.defineProperty(this[t], "proxiedName", {
                                    value: t
                                }), Object.defineProperty(this[t], "isProxied", {
                                    value: !0
                                }));
                            },
                            beforeMount: function() {
                                let e = this.$root;
                                e.$mp && "page" === e.$mp.mpType && e.$mp.page && (t.vueRootVMs[e.$mp.page.route] = e);
                            }
                        });
                    }
                }
            }();
            console.log("init growingio..."), t.a = function() {
                var e = arguments[0];
                if (e) {
                    var t = 2 > arguments.length ? [] : [].slice.call(arguments, 1);
                    if ("init" !== e) return g.proxy(e, t);
                    t.length < 2 ? console.log("初始化 GrowingIO SDK 失败。请使用 gio('init', '你的GrowingIO项目ID', '你的微信APP_ID', options);") : g.init(t[0], t[1], t[2]);
                }
            };
        }).call(t, r("DuR2"));
    },
    pdGj: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r.d(t, "sa", function() {
            return a;
        });
        var n = r("riVt"), i = {}, a = {};
        a.para = n.a, a.status = {}, a.para.openid_url || (a.para.openid_url = a.para.server_url.replace(/\/sa(\.gif){0,1}/, "/mp_login")), 
        "number" != typeof a.para.send_timeout && (a.para.send_timeout = 1e3);
        var s = Array.prototype, o = Function.prototype, u = Object.prototype, c = s.slice, p = u.toString, h = u.hasOwnProperty, g = "utm_source utm_medium utm_campaign utm_content utm_term", l = {
            1001: "发现栏小程序主入口，“最近使用”列表",
            1005: "顶部搜索框的搜索结果页",
            1006: "发现栏小程序主入口搜索框的搜索结果页",
            1007: "单人聊天会话中的小程序消息卡片",
            1008: "群聊会话中的小程序消息卡片",
            1011: "扫描二维码",
            1012: "长按图片识别二维码",
            1013: "手机相册选取二维码",
            1014: "小程序模版消息",
            1017: "前往体验版的入口页",
            1019: "微信钱包",
            1020: "公众号 profile 页相关小程序列表",
            1022: "聊天顶部置顶小程序入口",
            1023: "安卓系统桌面图标",
            1024: "小程序 profile 页",
            1025: "扫描一维码",
            1026: "附近小程序列表",
            1027: "顶部搜索框搜索结果页“使用过的小程序”列表",
            1028: "我的卡包",
            1029: "卡券详情页",
            1030: "自动化测试下打开小程序",
            1031: "长按图片识别一维码",
            1032: "手机相册选取一维码",
            1034: "微信支付完成页",
            1035: "公众号自定义菜单",
            1036: "App 分享消息卡片",
            1037: "小程序打开小程序",
            1038: "从另一个小程序返回",
            1039: "摇电视",
            1042: "添加好友搜索框的搜索结果页",
            1043: "公众号模板消息",
            1044: "带 shareTicket 的小程序消息卡片（详情)",
            1045: "朋友圈广告",
            1046: "朋友圈广告详情页",
            1047: "扫描小程序码",
            1048: "长按图片识别小程序码",
            1049: "手机相册选取小程序码",
            1052: "卡券的适用门店列表",
            1053: "搜一搜的结果页",
            1054: "顶部搜索框小程序快捷入口",
            1056: "音乐播放器菜单",
            1057: "钱包中的银行卡详情页",
            1058: "公众号文章",
            1059: "体验版小程序绑定邀请页",
            1064: "微信连Wi-Fi状态栏",
            1067: "公众号文章广告",
            1068: "附近小程序列表广告",
            1069: "移动应用",
            1071: "钱包中的银行卡列表页",
            1072: "二维码收款页面",
            1073: "客服消息列表下发的小程序消息卡片",
            1074: "公众号会话下发的小程序消息卡片",
            1077: "摇周边",
            1078: "连Wi-Fi成功页",
            1079: "微信游戏中心",
            1081: "客服消息下发的文字链",
            1082: "公众号会话下发的文字链",
            1084: "朋友圈广告原生页",
            1089: "微信聊天主界面下拉",
            1090: "长按小程序右上角菜单唤出最近使用历史",
            1091: "公众号文章商品卡片",
            1092: "城市服务入口",
            1095: "小程序广告组件",
            1096: "聊天记录",
            1097: "微信支付签约页",
            1099: "页面内嵌插件",
            1102: "公众号 profile 页服务预览",
            1103: "发现栏小程序主入口，“我的小程序”列表",
            1104: "微信聊天主界面下拉，“我的小程序”栏"
        }, d = "直接打开";
        a.status.referrer = "直接打开";
        var f = null, m = 0, _ = "", v = !1;
        a.lib_version = "1.12.5";
        var y = "object" == typeof y ? y : {};
        function x(e, t, r) {
            if (e[t]) {
                var n = e[t];
                e[t] = "onLaunch" === t ? function() {
                    this[a.para.name] = a, n.apply(this, arguments), r.apply(this, arguments);
                } : function() {
                    n.apply(this, arguments), r.apply(this, arguments);
                };
            } else e[t] = "onLaunch" === t ? function() {
                this[a.para.name] = a, r.apply(this, arguments);
            } : function() {
                r.apply(this, arguments);
            };
        }
        function S(e) {
            this[a.para.name] = a;
            var t = {};
            e && e.path && (t.$url_path = i.getPath(e.path)), i.setShareInfo(e, t);
            var r = i.setUtm(e, t);
            v ? (t.$is_first_time = !0, i.isEmptyObject(r.pre1) || a.setOnceProfile(r.pre1)) : t.$is_first_time = !1, 
            i.isEmptyObject(r.pre2) || a.registerApp(r.pre2), e.scene = e.scene || "未取到值", t.$scene = i.getMPScene(e.scene), 
            a.registerApp({
                $latest_scene: t.$scene
            }), t.$url_query = i.setQuery(e.query), a.para.autoTrack && a.para.autoTrack.appLaunch && a.autoTrackCustom("appLaunch", t, "$MPLaunch");
        }
        function w(e) {
            var t = {};
            f = new Date().getTime(), e && e.path && (t.$url_path = i.getPath(e.path)), i.setShareInfo(e, t);
            var r = i.setUtm(e, t);
            i.isEmptyObject(r.pre2) || a.registerApp(r.pre2), e.scene = e.scene || "未取到值", t.$scene = i.getMPScene(e.scene), 
            a.registerApp({
                $latest_scene: t.$scene
            }), t.$url_query = i.setQuery(e.query), a.para.autoTrack && a.para.autoTrack.appShow && a.autoTrackCustom("appShow", t, "$MPShow");
        }
        function b() {
            var e = new Date().getTime(), t = {};
            t.$url_path = i.getCurrentPath(), f && e - f > 0 && (e - f) / 36e5 < 24 && (t.event_duration = (e - f) / 1e3), 
            a.para.autoTrack && a.para.autoTrack.appHide && a.autoTrackCustom("appHide", t, "$MPHide");
        }
        function I(e) {
            if (e && i.isObject(e)) {
                var t = i.extend({}, e);
                if (e.q && i.extend(t, i.getObjFromQuery(i.decodeURIComponent(e.q))), e.scene) {
                    var r = e.scene;
                    r = -1 !== (r = i.decodeURIComponent(r)).indexOf("?") ? "?" + r.replace(/\?/g, "") : "?" + r, 
                    i.extend(t, i.getObjFromQuery(r));
                }
                var n = i.getUtm(t, "$", "$latest_");
                this.sensors_mp_load_utm = n.pre1, this.sensors_mp_url_query = i.setQuery(e);
            }
        }
        function P() {
            var e = "系统没有取到值";
            "object" == typeof this && ("string" == typeof this.route ? e = this.route : "string" == typeof this.__route__ && (e = this.__route__));
            var t = {};
            t.$referrer = d, t.$url_path = e, a.status.last_referrer = d, this.sensors_mp_load_utm && (i.extend(t, this.sensors_mp_load_utm), 
            this.sensors_mp_load_utm = null), this.sensors_mp_url_query && (t.$url_query = this.sensors_mp_url_query, 
            this.sensors_mp_url_query = ""), a.para.onshow ? a.para.onshow(a, e, this) : a.para.autoTrack && a.para.autoTrack.pageShow && a.autoTrackCustom("pageShow", t, "$MPViewScreen"), 
            d = e, a.status.referrer = e;
        }
        function O(e) {
            var t = e.onShareAppMessage;
            e.onShareAppMessage = function() {
                a.para.autoTrack && a.para.autoTrack.pageShare && a.autoTrackCustom("pageShare", {
                    $url_path: i.getCurrentPath(),
                    $share_depth: i.getShareDepth()
                }, "$MPShare");
                var e = t.apply(this, arguments);
                return a.para.allow_amend_share_path && ("object" != typeof e && ((e = {}).path = i.getCurrentPath()), 
                "object" != typeof e || void 0 !== e.path && "" !== e.path || (e.path = i.getCurrentPath()), 
                "object" == typeof e && "string" == typeof e.path && (-1 === e.path.indexOf("?") ? e.path = e.path + "?" : "&" !== e.path.slice(-1) && (e.path = e.path + "&")), 
                e.path = e.path + "sampshare=" + encodeURIComponent(i.getShareInfo())), e;
            };
        }
        if (y.info = function() {
            if (a.para.show_log && "object" == typeof console && console.log) try {
                return console.log.apply(console, arguments);
            } catch (e) {
                console.log(arguments[0]);
            }
        }, function() {
            o.bind;
            var e = s.forEach, t = s.indexOf, r = Array.isArray, n = {}, a = i.each = function(t, r, i) {
                if (null == t) return !1;
                if (e && t.forEach === e) t.forEach(r, i); else if (t.length === +t.length) {
                    for (var a = 0, s = t.length; a < s; a++) if (a in t && r.call(i, t[a], a, t) === n) return !1;
                } else for (var o in t) if (h.call(t, o) && r.call(i, t[o], o, t) === n) return !1;
            };
            i.logger = y, i.extend = function(e) {
                return a(c.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && (e[r] = t[r]);
                }), e;
            }, i.extend2Lev = function(e) {
                return a(c.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && (i.isObject(t[r]) && i.isObject(e[r]) ? i.extend(e[r], t[r]) : e[r] = t[r]);
                }), e;
            }, i.coverExtend = function(e) {
                return a(c.call(arguments, 1), function(t) {
                    for (var r in t) void 0 !== t[r] && void 0 === e[r] && (e[r] = t[r]);
                }), e;
            }, i.isArray = r || function(e) {
                return "[object Array]" === p.call(e);
            }, i.isFunction = function(e) {
                try {
                    return /^\s*\bfunction\b/.test(e);
                } catch (e) {
                    return !1;
                }
            }, i.isArguments = function(e) {
                return !(!e || !h.call(e, "callee"));
            }, i.toArray = function(e) {
                return e ? e.toArray ? e.toArray() : i.isArray(e) ? c.call(e) : i.isArguments(e) ? c.call(e) : i.values(e) : [];
            }, i.values = function(e) {
                var t = [];
                return null == e ? t : (a(e, function(e) {
                    t[t.length] = e;
                }), t);
            }, i.include = function(e, r) {
                var i = !1;
                return null == e ? i : t && e.indexOf === t ? -1 != e.indexOf(r) : (a(e, function(e) {
                    if (i || (i = e === r)) return n;
                }), i);
            };
        }(), i.trim = function(e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
        }, i.isObject = function(e) {
            return "[object Object]" == p.call(e) && null != e;
        }, i.isEmptyObject = function(e) {
            if (i.isObject(e)) {
                for (var t in e) if (h.call(e, t)) return !1;
                return !0;
            }
            return !1;
        }, i.isUndefined = function(e) {
            return void 0 === e;
        }, i.isString = function(e) {
            return "[object String]" == p.call(e);
        }, i.isDate = function(e) {
            return "[object Date]" == p.call(e);
        }, i.isBoolean = function(e) {
            return "[object Boolean]" == p.call(e);
        }, i.isNumber = function(e) {
            return "[object Number]" == p.call(e) && /[\d\.]+/.test(String(e));
        }, i.isJSONString = function(e) {
            try {
                JSON.parse(e);
            } catch (e) {
                return !1;
            }
            return !0;
        }, i.decodeURIComponent = function(e) {
            var t = "";
            try {
                t = decodeURIComponent(e);
            } catch (r) {
                t = e;
            }
            return t;
        }, i.encodeDates = function(e) {
            return i.each(e, function(t, r) {
                i.isDate(t) ? e[r] = i.formatDate(t) : i.isObject(t) && (e[r] = i.encodeDates(t));
            }), e;
        }, i.formatDate = function(e) {
            function t(e) {
                return e < 10 ? "0" + e : e;
            }
            return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
        }, i.searchObjDate = function(e) {
            i.isObject(e) && i.each(e, function(t, r) {
                i.isObject(t) ? i.searchObjDate(e[r]) : i.isDate(t) && (e[r] = i.formatDate(t));
            });
        }, i.formatString = function(e) {
            return e.length > a.para.max_string_length ? (y.info("字符串长度超过限制，已经做截取--" + e), e.slice(0, a.para.max_string_length)) : e;
        }, i.searchObjString = function(e) {
            i.isObject(e) && i.each(e, function(t, r) {
                i.isObject(t) ? i.searchObjString(e[r]) : i.isString(t) && (e[r] = i.formatString(t));
            });
        }, i.unique = function(e) {
            for (var t, r = [], n = {}, i = 0; i < e.length; i++) (t = e[i]) in n || (n[t] = !0, 
            r.push(t));
            return r;
        }, i.strip_sa_properties = function(e) {
            return i.isObject(e) ? (i.each(e, function(t, r) {
                if (i.isArray(t)) {
                    var n = [];
                    i.each(t, function(e) {
                        i.isString(e) ? n.push(e) : y.info("您的数据-", t, "的数组里的值必须是字符串,已经将其删除");
                    }), 0 !== n.length ? e[r] = n : (delete e[r], y.info("已经删除空的数组"));
                }
                i.isString(t) || i.isNumber(t) || i.isDate(t) || i.isBoolean(t) || i.isArray(t) || (y.info("您的数据-", t, "-格式不满足要求，我们已经将其删除"), 
                delete e[r]);
            }), e) : e;
        }, i.strip_empty_properties = function(e) {
            var t = {};
            return i.each(e, function(e, r) {
                null != e && (t[r] = e);
            }), t;
        }, i.utf8Encode = function(e) {
            var t, r, n, i, a = "";
            for (t = r = 0, n = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, 
            i = 0; i < n; i++) {
                var s = e.charCodeAt(i), o = null;
                s < 128 ? r++ : o = s > 127 && s < 2048 ? String.fromCharCode(s >> 6 | 192, 63 & s | 128) : String.fromCharCode(s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), 
                null !== o && (r > t && (a += e.substring(t, r)), a += o, t = r = i + 1);
            }
            return r > t && (a += e.substring(t, e.length)), a;
        }, i.base64Encode = function(e) {
            var t, r, n, a, s, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", u = 0, c = 0, p = "", h = [];
            if (!e) return e;
            e = i.utf8Encode(e);
            do {
                t = (s = e.charCodeAt(u++) << 16 | e.charCodeAt(u++) << 8 | e.charCodeAt(u++)) >> 18 & 63, 
                r = s >> 12 & 63, n = s >> 6 & 63, a = 63 & s, h[c++] = o.charAt(t) + o.charAt(r) + o.charAt(n) + o.charAt(a);
            } while (u < e.length);
            switch (p = h.join(""), e.length % 3) {
              case 1:
                p = p.slice(0, -2) + "==";
                break;

              case 2:
                p = p.slice(0, -1) + "=";
            }
            return p;
        }, i.getCurrentPath = function() {
            var e = "未取到";
            try {
                var t = getCurrentPages();
                e = t[t.length - 1].route;
            } catch (e) {
                y.info(e);
            }
            return e;
        }, i.getPath = function(e) {
            return "string" == typeof e ? e.replace(/^\//, "") : "取值异常";
        }, i.getQueryParam = function(e, t) {
            var r = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(e);
            return null === r || r && "string" != typeof r[1] && r[1].length ? "" : i.decodeURIComponent(r[1]);
        }, a.initialState = {
            queue: [],
            isComplete: !1,
            systemIsComplete: !1,
            storeIsComplete: !1,
            checkIsComplete: function() {
                this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (i.each(this.queue, function(e) {
                    a[e[0]].apply(a, c.call(e[1]));
                }), a.queue = []));
            }
        }, i.getPrefixUtm = function(e, t, r) {
            if (t = t || "", r = r || "_", !i.isObject(e)) return {};
            var n = {}, a = {};
            for (var s in e) -1 !== (" " + g + " ").indexOf(" " + s + " ") ? n[t + s] = e[s] : a[r + s] = e[s];
            return {
                $utms: n,
                otherUtms: a
            };
        }, i.convertObjToParam = function(e) {
            var t = [];
            for (var r in e) t.push(r + "=" + e[r]);
            return t.join("&");
        }, i.getSource = function(e) {
            if (i.isObject(e)) {
                if (i.isEmptyObject(e)) return {};
                for (var t in e) -1 === (" " + g + " ").indexOf(" " + t + " ") ? delete e[t] : e[t] = e[t].replace("?", "*");
                e = "?" + (e = i.convertObjToParam(e));
            } else e = i.decodeURIComponent(e);
            var r = g.split(" "), n = g.split(" "), s = "", o = {};
            return 2 !== (e = e.split("?")).length ? {} : (e = "?" + (e = e[1]), i.isArray(a.para.source_channel) && a.para.source_channel.length > 0 && (n = n.concat(a.para.source_channel), 
            n = i.unique(n)), i.each(n, function(t) {
                s = i.getQueryParam(e, t), (s = i.decodeURIComponent(s)).length && i.include(r, t) && (o[t] = s);
            }), o);
        }, i.getObjFromQuery = function(e) {
            var t = e.split("?"), r = {};
            return t && t[1] ? (i.each(t[1].split("&"), function(e) {
                var t = e.split("=");
                t[0] && t[1] && (r[t[0]] = t[1]);
            }), r) : {};
        }, i.getUtm = function(e, t, r) {
            var n = i.getSource(e);
            return void 0 === r && t ? {
                pre1: i.getPrefixUtm(n, t).$utms || {},
                pre2: {}
            } : void 0 !== r && t ? {
                pre1: i.getPrefixUtm(n, t).$utms || {},
                pre2: i.getPrefixUtm(n, r).$utms || {}
            } : {
                pre1: {},
                pre2: {}
            };
        }, i.getMPScene = function(e) {
            return "number" == typeof e || "string" == typeof e && "" !== e ? (e = String(e), 
            l[e] || e) : "未取到值";
        }, i.getShareDepth = function() {
            if ("number" == typeof m && 0 !== m) {
                var e = a.store.getDistinctId(), t = a.store.getFirstId();
                return !_ || _ !== e && _ !== t ? m + 1 : m;
            }
            return 1;
        }, i.setShareInfo = function(e, t) {
            var r = {};
            if (!(e && i.isObject(e.query) && e.query.sampshare)) return {};
            if (r = i.decodeURIComponent(e.query.sampshare), !i.isJSONString(r)) return {};
            var n = (r = JSON.parse(r)).d, a = r.p, s = r.i;
            "string" == typeof s ? (t.$share_distinct_id = s, _ = s) : t.$share_distinct_id = "取值异常", 
            "number" == typeof n ? (t.$share_depth = n, m = n) : t.$share_depth = "取值异常", t.$share_url_path = "string" == typeof a ? a : "取值异常";
        }, i.getShareInfo = function() {
            return JSON.stringify({
                i: a.store.getDistinctId() || "取值异常",
                p: i.getCurrentPath(),
                d: i.getShareDepth()
            });
        }, i.setUtm = function(e, t) {
            var r = {};
            if (e && i.isObject(e.query)) {
                var n = (r = i.extend({}, e.query)).scene;
                n && (n = -1 !== (n = i.decodeURIComponent(n)).indexOf("?") ? "?" + n.replace(/\?/g, "") : "?" + n, 
                i.extend(r, i.getObjFromQuery(n))), e.query.q && i.extend(r, i.getObjFromQuery(i.decodeURIComponent(e.query.q)));
            }
            if (e && i.isObject(e.referrerInfo) && e.referrerInfo.extraData) {
                var a = {};
                i.isObject(e.referrerInfo.extraData) && !i.isEmptyObject(e.referrerInfo.extraData) ? a = e.referrerInfo.extraData : i.isJSONString(e.referrerInfo.extraData) && (a = JSON.parse(e.referrerInfo.extraData)), 
                i.extend(r, a);
            }
            var s = i.getUtm(r, "$", "$latest_");
            return i.extend(t, s.pre1), s;
        }, i.info = {
            properties: {
                $lib: "MiniProgram",
                $lib_version: String("1.12.5")
            },
            getSystem: function() {
                var e = this.properties;
                wx.getNetworkType({
                    success: function(t) {
                        e.$network_type = t.networkType;
                    },
                    complete: function() {
                        wx.getSystemInfo({
                            success: function(t) {
                                e.$manufacturer = t.brand, e.$model = t.model, e.$screen_width = Number(t.screenWidth), 
                                e.$screen_height = Number(t.screenHeight), e.$os = t.system.split(" ")[0], e.$os_version = t.system.split(" ")[1];
                            },
                            complete: function() {
                                a.initialState.systemIsComplete = !0, a.initialState.checkIsComplete();
                            }
                        });
                    }
                });
            }
        }, a._ = i, a.prepareData = function(e, t) {
            var r = {
                distinct_id: this.store.getDistinctId(),
                lib: {
                    $lib: "MiniProgram",
                    $lib_method: "code",
                    $lib_version: String("1.12.5")
                },
                properties: {}
            };
            i.extend(r, e), i.isObject(e.properties) && !i.isEmptyObject(e.properties) && i.extend(r.properties, e.properties), 
            e.type && "profile" === e.type.slice(0, 7) || (r.properties = i.extend({}, i.info.properties, a.store.getProps(), r.properties), 
            "object" == typeof a.store._state && "number" == typeof a.store._state.first_visit_day_time && a.store._state.first_visit_day_time > new Date().getTime() ? r.properties.$is_first_day = !0 : r.properties.$is_first_day = !1), 
            r.properties.$time && i.isDate(r.properties.$time) ? (r.time = 1 * r.properties.$time, 
            delete r.properties.$time) : a.para.use_client_time && (r.time = 1 * new Date()), 
            i.searchObjDate(r), i.searchObjString(r), a.send(r, t);
        }, a.store = {
            verifyDistinctId: function(e) {
                return "number" == typeof e && (e = String(e), /^\d+$/.test(e) || (e = "unexpected_id")), 
                "string" == typeof e && "" !== e || (e = "unexpected_id"), e;
            },
            storageInfo: null,
            getUUID: function() {
                return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
            },
            getStorage: function() {
                return this.storageInfo ? this.storageInfo : (this.storageInfo = wx.getStorageSync("sensorsdata2015_wechat") || "", 
                this.storageInfo);
            },
            _state: {},
            toState: function(e) {
                var t = null;
                i.isJSONString(e) ? (t = JSON.parse(e)).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID()) : i.isObject(e) && (t = e).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID());
            },
            getFirstId: function() {
                return this._state.first_id;
            },
            getDistinctId: function() {
                return wx.getStorageSync("openid");
            },
            getProps: function() {
                return this._state.props || {};
            },
            setProps: function(e, t) {
                var r = this._state.props || {};
                t ? this.set("props", e) : (i.extend(r, e), this.set("props", r));
            },
            set: function(e, t) {
                var r = {};
                for (var n in "string" == typeof e ? r[e] = t : "object" == typeof e && (r = e), 
                this._state = this._state || {}, r) this._state[n] = r[n];
                this.save();
            },
            change: function(e, t) {
                this._state[e] = t;
            },
            save: function() {
                wx.setStorageSync("sensorsdata2015_wechat", this._state);
            },
            init: function() {
                var e = this.getStorage();
                if (e) this.toState(e); else {
                    v = !0;
                    var t = new Date(), r = t.getTime();
                    t.setHours(23), t.setMinutes(59), t.setSeconds(60), this.set({
                        distinct_id: this.getUUID(),
                        first_visit_time: r,
                        first_visit_day_time: t.getTime()
                    });
                }
            }
        }, a.setProfile = function(e, t) {
            a.prepareData({
                type: "profile_set",
                properties: e
            }, t);
        }, a.setOnceProfile = function(e, t) {
            a.prepareData({
                type: "profile_set_once",
                properties: e
            }, t);
        }, a.track = function(e, t, r) {
            this.prepareData({
                type: "track",
                event: e,
                properties: t
            }, r);
        }, a.identify = function(e, t) {
            if ("string" != typeof e && "number" != typeof e) return !1;
            e = a.store.verifyDistinctId(e);
            var r = a.store.getFirstId();
            !0 === t ? r ? a.store.set("first_id", e) : a.store.set("distinct_id", e) : r ? a.store.change("first_id", e) : a.store.change("distinct_id", e);
        }, a.trackSignup = function(e, t, r, n) {
            a.prepareData({
                original_id: a.store.getFirstId() || a.store.getDistinctId(),
                distinct_id: e,
                type: "track_signup",
                event: t,
                properties: r
            }, n), a.store.set("distinct_id", e);
        }, a.registerApp = function(e) {
            i.isObject(e) && !i.isEmptyObject(e) && (i.info.properties = i.extend(i.info.properties, e));
        }, a.register = function(e) {
            i.isObject(e) && !i.isEmptyObject(e) && a.store.setProps(e);
        }, a.clearAllRegister = function() {
            a.store.setProps({}, !0);
        }, a.login = function(e) {
            if ("string" != typeof e && "number" != typeof e) return !1;
            e = a.store.verifyDistinctId(e);
            var t = a.store.getFirstId(), r = a.store.getDistinctId();
            e !== r && (t ? a.trackSignup(e, "$SignUp") : (a.store.set("first_id", r), a.trackSignup(e, "$SignUp")));
        }, a.openid = {
            getRequest: function(e) {
                wx.login({
                    success: function(t) {
                        t.code && a.para.appid && a.para.openid_url ? wx.request({
                            url: a.para.openid_url + "&code=" + t.code + "&appid=" + a.para.appid,
                            method: "GET",
                            complete: function(t) {
                                i.isObject(t) && i.isObject(t.data) && t.data.openid ? e(t.data.openid) : e();
                            }
                        }) : e();
                    }
                });
            },
            getWXStorage: function() {
                var e = a.store.getStorage();
                if (e && i.isObject(e)) return e.openid;
            },
            getOpenid: function(e) {
                if (!a.para.appid) return e(), !1;
                var t = this.getWXStorage();
                t ? e(t) : this.getRequest(e);
            }
        }, a.initial = function() {
            this._.info.getSystem(), this.store.init(), i.isObject(this.para.register) && (i.info.properties = i.extend(i.info.properties, this.para.register));
        }, a.init = function(e) {
            if (!0 === this.hasInit) return !1;
            this.hasInit = !0, i.isObject(e) && (a.para = i.extend(a.para, e)), a.initialState.storeIsComplete = !0, 
            a.initialState.checkIsComplete();
        }, a.getPresetProperties = function() {
            if (i.info && i.info.properties && i.info.properties.$lib) {
                var e = i.extend({
                    $url_path: i.getCurrentPath()
                }, i.info.properties, a.store.getProps());
                return delete e.$lib, e;
            }
            return {};
        }, i.autoExeQueue = function() {
            return {
                items: [],
                enqueue: function(e) {
                    this.items.push(e), this.start();
                },
                dequeue: function() {
                    return this.items.shift();
                },
                getCurrentItem: function() {
                    return this.items[0];
                },
                isRun: !1,
                start: function() {
                    this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start());
                },
                close: function() {
                    this.dequeue(), this.isRun = !1, this.start();
                }
            };
        }, a.requestQueue = function(e) {
            this.url = e.url;
        }, a.requestQueue.prototype.isEnd = function() {
            this.received || (this.received = !0, this.close());
        }, a.requestQueue.prototype.start = function() {
            var e = this;
            setTimeout(function() {
                e.isEnd();
            }, a.para.send_timeout), wx.request({
                url: this.url,
                method: "GET",
                complete: function() {
                    e.isEnd();
                }
            });
        }, a.dataQueue = i.autoExeQueue(), a.send = function(e) {
            var t;
            e._nocache = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), 
            y.info(e), e = JSON.stringify(e), t = -1 !== a.para.server_url.indexOf("?") ? a.para.server_url + "&data=" + encodeURIComponent(i.base64Encode(e)) : a.para.server_url + "?data=" + encodeURIComponent(i.base64Encode(e));
            var r = new a.requestQueue({
                url: t
            });
            r.close = function() {
                a.dataQueue.close();
            }, a.dataQueue.enqueue(r);
        }, a.autoTrackCustom = function(e, t, r) {
            var n = a.para.autoTrack[e], s = "";
            a.para.autoTrack && n && ("function" == typeof n ? (s = n(), i.isObject(s) && i.extend(t, s)) : i.isObject(n) && (i.extend(t, n), 
            a.para.autoTrack[e] = !0), a.track(r, t));
        }, a.setOpenid = function(e, t) {
            a.store.set("openid", e), t ? a.store.set("distinct_id", e) : a.identify(e, !0);
        }, a.initWithOpenid = function(e, t) {
            e = e || {}, a.openid.getOpenid(function(r) {
                r && a.setOpenid(r, e.isCoverLogin), t && i.isFunction(t) && t(r), a.init(e);
            });
        }, i.each([ "setProfile", "setOnceProfile", "track", "register", "clearAllRegister", "autoTrackCustom", "registerApp" ], function(e) {
            var t = a[e];
            a[e] = function() {
                a.initialState.isComplete ? t.apply(a, arguments) : a.initialState.queue.push([ e, arguments ]);
            };
        }), i.setQuery = function(e) {
            if (e && i.isObject(e) && !i.isEmptyObject(e)) {
                var t = [];
                return i.each(e, function(e, r) {
                    t.push(r + "=" + e);
                }), t.join("&");
            }
            return "";
        }, a.para.is_plugin) a.App = function(e) {
            x(e = e || {}, "onLaunch", S), x(e, "onShow", w), x(e, "onHide", b), App.apply(this, arguments);
        }, a.Page = function(e) {
            x(e, "onLoad", I), x(e, "onShow", P), "function" == typeof e.onShareAppMessage && O(e), 
            Page.apply(this, arguments);
        }; else if (!1 !== a.para.autoTrack) {
            var k = App;
            App = function(e) {
                x(e, "onLaunch", S), x(e, "onShow", w), x(e, "onHide", b), k.apply(this, arguments);
            };
            var j = Page;
            Page = function(e) {
                x(e, "onLoad", I), x(e, "onShow", P), "function" == typeof e.onShareAppMessage && O(e), 
                j.apply(this, arguments);
            };
        }
        a.initial();
    },
    riVt: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return n;
        });
        var n = {
            name: "sensors",
            appid: "wxde54a54a45c0e1b7",
            server_url: "https://bi-log.aihuishou.com/trace/log",
            send_timeout: 1e3,
            max_string_length: 300,
            use_client_time: !0,
            show_log: !0,
            allow_amend_share_path: !0,
            autoTrack: {
                appLaunch: !0,
                appShow: !0,
                appHide: !0,
                pageShow: !0,
                pageShare: !0
            },
            is_plugin: !1
        };
    },
    vjWP: function(e, t, r) {
        "use strict";
        r.d(t, "a", function() {
            return s;
        });
        var n = r("Dd8w"), i = r.n(n), a = r("QmSG"), s = function() {
            var e = wx.getStorageSync("sceneId"), t = this ? this.__route__ : "/pages/app/app", r = wx.getStorageSync("subScenekey") || "", n = wx.getStorageSync("pageFromCooperation") || "miniapp", s = wx.getSystemInfoSync() || {}, o = wx.getStorageSync("userId"), u = wx.getStorageSync("comeTime"), c = wx.getStorageSync("userCount"), p = wx.getStorageSync("currentTime"), h = a.e[e], g = a.c[t] || "特殊页面暂时没有埋点", l = 0 === t.indexOf("http") ? t : "http:" + t, d = new Date(), f = d.getHours(), m = d.getMinutes(), _ = d.getSeconds(), v = String(Math.random()).slice(2, 8), y = void 0;
            o ? y = o : (y = ("" + parseFloat(+d + "" + (1e8 * Math.random() + "").substr(0, 8))).substr(0, 16), 
            wx.setStorageSync("userId", y));
            var x = void 0;
            u ? x = u : (x = Math.round(+d / 1e3), wx.setStorageSync("comeTime", x));
            var S = 0;
            S = c ? parseFloat(c) + 1 : 1, wx.setStorageSync("userCount", S);
            var w = 0;
            p ? w = p : wx.setStorageSync("currentTime", Math.round(+d / 1e3));
            var b = Math.round(d.getTime() / 1e3), I = (s.screenWidth || 0) + "x" + (s.screenHeight || 0), P = {
                idsite: 49,
                rec: 1,
                r: v,
                h: f,
                m: m,
                s: _,
                url: l = l + "?utm_source=" + encodeURIComponent(n) + "&utm_medium=" + encodeURIComponent(h) + "&utm_term=" + encodeURIComponent(r),
                urlref: "miniapp",
                _id: y,
                _idts: x,
                _idvc: S,
                _idn: 1,
                _refts: b,
                _viewts: w,
                send_image: 1,
                ai_cookie: "",
                cookie: 0,
                res: I
            };
            1 === arguments.length ? wx.request({
                url: "https://tk.aihuishou.com/piwik.php",
                data: i()({
                    action_name: g
                }, P)
            }) : wx.request({
                url: "https://tk.aihuishou.com/piwik.php",
                data: i()({
                    e_n: arguments.length <= 0 ? void 0 : arguments[0],
                    e_a: arguments.length <= 1 ? void 0 : arguments[1],
                    e_c: (arguments.length <= 2 ? void 0 : arguments[2]) || "basicInfo"
                }, P)
            });
        };
        function o(e, t) {
            for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
            e[t] = function(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return function() {
                    for (var t = this, n = arguments.length, i = Array(n), a = 0; a < n; a++) i[a] = arguments[a];
                    r.forEach(function(e) {
                        return e.call.apply(e, [ t ].concat(i));
                    }), e.call.apply(e, [ this ].concat(i));
                };
            }.apply(void 0, [ e[t] || function() {} ].concat(n));
        }
        var u = function(e) {
            var t = s;
            s = function() {
                for (var r = arguments.length, n = Array(r), i = 0; i < r; i++) n[i] = arguments[i];
                t.call.apply(t, [ this, e.scene ].concat(n));
            };
        }, c = function(e) {
            s.call(this);
        };
        !function() {
            var e = App;
            App = function(t) {
                o(t, "onLaunch", u), e(t);
            };
            var t = Page;
            Page = function(e) {
                o(e, "onShow", c), t(e);
            };
        }();
    }
}, [ "NHnr" ]);