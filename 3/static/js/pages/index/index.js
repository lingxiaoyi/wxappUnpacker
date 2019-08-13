global.webpackJsonp([ 6 ], {
    "5vTQ": function(t, n, e) {
        "use strict";
        var i, o = e("Xxa5"), a = e.n(o), s = e("exGp"), r = e.n(s), c = e("Dd8w"), u = e.n(c), p = e("bOdI"), l = e.n(p), f = e("NYxO"), h = e("VsUZ"), d = e("jV6A"), g = e("vLgD"), m = e("EA5u"), v = e("Qc0q"), y = e("+Ui8"), x = e("6vT6"), w = e("YZGy"), S = e("QmSG"), _ = S.f.POPUP_NEW_USER_KEY, M = S.f.POPUP_SOS_KEY, b = S.f.POPUP_SHOW_SHARE_KEY, C = (i = {}, 
        l()(i, _, 1), l()(i, M, 3), l()(i, b, 4), i);
        n.a = {
            components: {
                SosComponents: m.a,
                NavFooter: v.a,
                ShareDialog: y.a,
                Popup: x.a
            },
            data: function() {
                return {
                    systemInfo: {},
                    info: [],
                    shopList: [],
                    isSuDiYiPage: !1,
                    hasBottomBar: !1,
                    isShowMyMiniApp: !1,
                    newUserCouponInfo: {},
                    haveTicket: !1,
                    floatInfo: null,
                    currentShowModalKey: null,
                    sosModalConfig: {},
                    popUpKeysObj: S.f
                };
            },
            watch: {
                cityInfo: function(t, n) {
                    n.id && t.id && t.id !== n.id && this.initData();
                }
            },
            computed: u()({}, Object(f.d)({
                productInfo: function(t) {
                    return t.global.productInfo;
                },
                locationCity: function(t) {
                    return t.global.locationCity;
                },
                locationInfo: function(t) {
                    return t.global.locationInfo;
                },
                indexShopList: function(t) {
                    return t.global.indexShopList;
                },
                userInfo: function(t) {
                    return t.global.userInfo;
                }
            }), Object(f.c)([ "cityInfo", "computedShopList" ]), {
                isTicket: function() {
                    return !this.userInfo.mobile || this.haveTicket;
                },
                isShowGift: function() {
                    return this.giftFlag && 1 === this.cityInfo.id;
                }
            }),
            onShow: function() {
                var t = this;
                return r()(a.a.mark(function n() {
                    return a.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, t.getIpCity();

                          case 2:
                            return n.next = 4, t.initPre();

                          case 4:
                            t.popupsManager = new w.a(C, t.showModal), t.initData(), t.initModel(), t.initPiwik(), 
                            t.getFloatIcon();

                          case 9:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            mounted: function() {
                var t = this;
                return r()(a.a.mark(function n() {
                    return a.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, t.getIpCity();

                          case 2:
                            return n.next = 4, Object(h.i)();

                          case 4:
                            return n.next = 6, Object(h.h)();

                          case 6:
                            t.hasBottomBar = n.sent, t.setMyMiniApp(), t.setSuDiYiPage();

                          case 9:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            onShareAppMessage: function(t) {
                "button" === t.from && this._piwik("pages/index/index", "miniapp/indexPage", "shareprice", "basicInfo");
                var n = this.productInfo;
                if (n && n.productName) {
                    var e = n.price, i = n.productName;
                    return e < 3e3 ? {
                        title: "我的" + i + "还值" + e + "元，来测测你的",
                        path: "/pages/index/index",
                        imageUrl: "https://sr.aihuishou.com/miniapps/earth/share2.png"
                    } : {
                        title: "我的" + i + "能卖" + e + "元，不服来PK！",
                        path: "/pages/index/index",
                        imageUrl: "https://sr.aihuishou.com/miniapps/earth/pk_share.png"
                    };
                }
                return {
                    title: "爱回收手机回收",
                    path: "/pages/index/index",
                    imageUrl: "https://sr.aihuishou.com/miniapps/earth/earth_share_banner.png"
                };
            },
            methods: u()({}, Object(f.b)([ "setGlobalInfo", "getIpCity" ]), {
                showModal: function(t) {
                    this.currentShowModalKey = t;
                },
                getFloatIcon: function() {
                    var t = this;
                    Object(g.a)({
                        url: "/foundation/floating-icons"
                    }).then(function(n) {
                        t.floatInfo = n || null;
                    });
                },
                getGiftTicket: function() {
                    var t = this;
                    Object(g.a)({
                        url: "/nbs-activity/record"
                    }).then(function(n) {
                        t.haveTicket = !n || !n.verificationTime;
                    });
                },
                jump: function() {
                    getApp().commonJump({
                        url: this.floatInfo.url
                    });
                },
                setSuDiYiPage: function() {
                    var t = wx.getStorageSync("pageFromCooperation");
                    "sudiyi" !== t && "fengcao" !== t || (this.isSuDiYiPage = !0);
                },
                initPiwik: function() {
                    var t = this.$root.$mp.query, n = t.weixinadinfo;
                    if (t.utm_material || n) {
                        var e = "";
                        for (var i in t) e += i + "_" + t[i] + ";";
                        this._piwik("pages/index/index", "miniapp/campaign", "scene_" + getApp().globalData.scene + ";" + e);
                    }
                },
                initPre: function() {
                    var t = this;
                    return r()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, Object(h.c)();

                              case 2:
                                t.systemInfo = n.sent, t.initLocation();

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                initData: function() {
                    var t = this;
                    return r()(a.a.mark(function n() {
                        var e, i, o, s, r, c, u, p, l;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return e = wx.getStorageSync("lastInquiryKey"), i = t.systemInfo.model, /^.*<.*iphone.*>/i.test(i) && (i = i.split("<")[1].split(">")[0]), 
                                o = wx.getStorageSync("pageFromCooperation"), n.next = 6, Object(g.a)({
                                    url: "/channel/home",
                                    params: {
                                        cityid: t.cityInfo.id,
                                        source: o || "default",
                                        model: i || "",
                                        brand: t.systemInfo.brand || "",
                                        inquiryKey: e
                                    }
                                });

                              case 6:
                                s = n.sent, r = {
                                    key: M,
                                    uniqueId: "sosDefault",
                                    isShow: function() {
                                        return !1;
                                    }
                                }, s && (t.info = s.items, (c = t.info.filter(function(t) {
                                    return "popup" === t.type;
                                })) && c.length && (u = c[0].items) && u.length > 0 && u[0] && (p = u[0], t.sosModalConfig = p, 
                                p.controlShowRule && (l = p.imageUrl.replace(/[^0-9]/gi, ""), r.uniqueId = "sos_" + l, 
                                r.expires = [ 0, 365, 1 ][p.controlShowRule - 1]), r.isShow = function() {
                                    return !0;
                                }), s.shops && s.shops.length ? (t.setGlobalInfo([ "indexShopList", s.shops ]), 
                                t.shopList = s.shops) : (t.setGlobalInfo([ "indexShopList", [] ]), t.shopList = [])), 
                                t.popupsManager.mount(r);

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                initLocation: function() {
                    var t = this;
                    return r()(a.a.mark(function n() {
                        var e, i;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, Object(h.e)();

                              case 2:
                                (e = n.sent) ? (t.cityId = e.id, i = wx.getStorageSync("choose_city"), t.setGlobalInfo([ "locationCity", e ]), 
                                i && i.id !== e.id && wx.showModal({
                                    content: "定位到当前城市为" + e.name + "，是否为您切换城市?",
                                    confirmColor: "#FFBB00",
                                    success: function(n) {
                                        n.confirm ? (t._piwik("pages/index/index", "miniapp/indexPage", "changecity/yes", "abtest"), 
                                        wx.setStorageSync("choose_city", e), t.setGlobalInfo([ "chosenCity", e ])) : n.cancel && t._piwik("pages/index/index", "miniapp/indexPage", "changecity/no", "abtest");
                                    }
                                })) : t._piwik("pages/index/index", "miniapp/indexPage", "nostore", "abtest");

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                initModel: function() {
                    var t = this;
                    return r()(a.a.mark(function n() {
                        var e, i, o, s;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e = wx.getStorageSync("lastInquiryKey"), i = {
                                    key: _,
                                    isShow: function() {
                                        return !1;
                                    },
                                    expires: 1,
                                    uniqueId: "homeHadShowNewUserModal"
                                }, d.m.get("homeHadShowNewUserModal")) {
                                    n.next = 7;
                                    break;
                                }
                                return n.next = 5, Object(g.a)({
                                    url: "/promotion/new-comer-package"
                                });

                              case 5:
                                o = n.sent, (!t.userInfo.mobile || o && o.canReceive) && (t.newUserCouponInfo = o, 
                                i.isShow = function() {
                                    return !0;
                                });

                              case 7:
                                t.popupsManager.mount(i), s = {
                                    key: b,
                                    isShow: function() {
                                        return !1;
                                    },
                                    expires: 1,
                                    uniqueId: "showShare"
                                }, e && !d.m.get(b) && (s.isShow = function() {
                                    return !0;
                                }), t.popupsManager.mount(s);

                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                handleOnClickMyMiniApp: function() {
                    this.isShowMyMiniApp = !1;
                },
                stop: function() {
                    return !1;
                },
                handleCloseModel: function() {
                    this.currentShowModalKey = null;
                },
                handleJump: function() {
                    wx.navigateTo({
                        url: "/pages/newexclusive/newexclusive"
                    }), this.handleCloseModel();
                },
                setMyMiniApp: function() {
                    var t = this;
                    return r()(a.a.mark(function n() {
                        var e, i, o, s;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e = null, i = null, o = new Date().getTime(), e = wx.getStorageSync("MyMiniApp")) {
                                    n.next = 11;
                                    break;
                                }
                                return n.next = 7, Object(h.c)();

                              case 7:
                                (e = n.sent) && e.SDKVersion && (i = e.SDKVersion, t.compareVersion(i, "2.2.3") >= 0 && (t.isShowMyMiniApp = !0, 
                                s = {
                                    timeStamp: o
                                }, wx.setStorageSync("MyMiniApp", s))), n.next = 12;
                                break;

                              case 11:
                                e && e.timeStamp && e.timeStamp + 108e5 < o ? t.isShowMyMiniApp = !1 : t.isShowMyMiniApp = !0;

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                }
            })
        };
    },
    "6vT6": function(t, n, e) {
        "use strict";
        var i = e("stnp"), o = e("Y6FO");
        var a = function(t) {
            e("hLou");
        }, s = e("ybqe")(i.a, o.a, a, "data-v-60aa4871", null);
        n.a = s.exports;
    },
    EA9i: function(t, n) {},
    M9m5: function(t, n) {},
    MhDc: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var i = e("5nAL"), o = e.n(i), a = e("Qt9A");
        o.a.config.errorHandler = function(t) {
            console && console.error && console.error(t);
        }, new o.a(a.a).$mount(), n.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "爱回收",
                backgroundTextStyle: "light"
            }
        };
    },
    Qt9A: function(t, n, e) {
        "use strict";
        var i = e("5vTQ"), o = e("wxQ6");
        var a = function(t) {
            e("M9m5"), e("EA9i");
        }, s = e("ybqe")(i.a, o.a, a, "data-v-60b48a08", null);
        n.a = s.exports;
    },
    Y6FO: function(t, n, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this.$createElement, n = this._self._c || t;
                return n("div", {
                    staticClass: "popup-modal"
                }, [ n("div", {
                    staticClass: "content"
                }, [ n("img", {
                    attrs: {
                        mode: "widthFix",
                        src: this.popInfo.imageUrl,
                        alt: "",
                        eventid: "0"
                    },
                    on: {
                        click: this.jump
                    }
                }), this._v(" "), n("span", {
                    staticClass: "close",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: this.handleClose
                    }
                }) ]) ]);
            },
            staticRenderFns: []
        };
        n.a = i;
    },
    YZGy: function(t, n, e) {
        "use strict";
        var i = e("fZjL"), o = e.n(i), a = e("pFYg"), s = e.n(a), r = e("Zrlr"), c = e.n(r), u = e("wxAW"), p = e.n(u), l = e("jV6A"), f = [ 0, 365, 1 ], h = function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                c()(this, t), this._priorityMapping = "object" === (void 0 === n ? "undefined" : s()(n)) && null !== n ? n : {}, 
                this._totalSatisfyCallback = "function" == typeof e ? e : function() {}, this._totalCount = o()(n).length, 
                this._arrModalConfig = [];
            }
            return p()(t, [ {
                key: "mount",
                value: function(t) {
                    return t && "string" == typeof t.key && void 0 !== t.isShow && "function" == typeof t.isShow ? o()(this._priorityMapping).length > 0 && -1 === o()(this._priorityMapping).indexOf(t.key) ? (console.log("挂载的弹窗配置项 key 必须包含在 priorityMapping 中"), 
                    !1) : void 0 !== t.expires && -1 === f.indexOf(t.expires) ? (console.log("挂载的弹窗配置项 expires 必须是 objExpriesMapping 中的选项"), 
                    !1) : this._arrModalConfig.length === this._totalCount ? (console.log("挂载的弹窗配置已超过最大有效值，请检查"), 
                    !1) : (this._arrModalConfig.push(t), void (this._arrModalConfig.length === this._totalCount && this._totalSatisfyCallback(this._getCurrent()))) : (console.log("挂载的弹窗配置项是如下格式： { key: string, isShow: () => Boolean, expires?: arrExpires, uniqueId?: string }"), 
                    !1);
                }
            }, {
                key: "_getCurrent",
                value: function() {
                    var t = this, n = this._arrModalConfig;
                    o()(this._priorityMapping).length > 0 && (n = this._arrModalConfig.sort(function(n, e) {
                        var i = t._priorityMapping[n.key], o = t._priorityMapping[e.key];
                        return void 0 === i || void 0 === o ? 1 : i - o >= 0 ? 1 : -1;
                    }));
                    var e = n.find(function(t) {
                        var n = t.uniqueId;
                        return (!n || !l.m.get(n)) && t.isShow();
                    });
                    if (e) {
                        var i = e.uniqueId, a = e.expires;
                        return 0 !== a && void 0 !== i && l.m.setExpires(i, a), e.key;
                    }
                    return null;
                }
            } ]), t;
        }();
        n.a = h;
    },
    hLou: function(t, n) {},
    stnp: function(t, n, e) {
        "use strict";
        n.a = {
            props: {
                popInfo: Object,
                close: Function
            },
            data: function() {
                return {};
            },
            methods: {
                handleClose: function() {
                    this.close && this.close();
                },
                jump: function() {
                    getApp().commonJump(this.popInfo);
                }
            }
        };
    },
    wxQ6: function(t, n, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this, n = t.$createElement, e = t._self._c || n;
                return e("div", {
                    staticClass: "index-page-sos-container",
                    class: t.hasBottomBar ? "active" : ""
                }, [ t.isShowMyMiniApp ? e("div", {
                    staticClass: "my-miniapp-container",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleOnClickMyMiniApp
                    }
                }) : t._e(), t._v(" "), e("SosComponents", {
                    attrs: {
                        info: t.info,
                        shopList: t.shopList,
                        mpcomid: "0"
                    }
                }), t._v(" "), e("nav-footer", {
                    attrs: {
                        cityId: t.shopCityId,
                        index: 0,
                        isIndex: !0,
                        isSuDiYiPage: t.isSuDiYiPage,
                        mpcomid: "1"
                    }
                }), t._v(" "), t.currentShowModalKey === t.popUpKeysObj.POPUP_SHOW_SHARE_KEY ? e("ShareDialog", {
                    attrs: {
                        close: t.handleCloseModel,
                        mpcomid: "2"
                    }
                }) : t._e(), t._v(" "), t.currentShowModalKey === t.popUpKeysObj.POPUP_NEW_USER_KEY ? e("div", {
                    staticClass: "new-user-model",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: t.handleCloseModel
                    }
                }, [ e("div", {
                    staticClass: "box"
                }, [ e("div", {
                    staticClass: "content"
                }, [ e("img", {
                    staticClass: "banner",
                    attrs: {
                        src: t.newUserCouponInfo.imageUrl,
                        alt: "",
                        eventid: "1"
                    },
                    on: {
                        click: function(n) {
                            n.stopPropagation(), t.stop(n);
                        }
                    }
                }), t._v(" "), e("div", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleJump
                    }
                }, [ t._v("一键领取") ]), t._v(" "), t.newUserCouponInfo.tips ? e("p", {
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(n) {
                            n.stopPropagation(), t.stop(n);
                        }
                    }
                }, [ t._v(t._s(t.newUserCouponInfo.tips)) ]) : t._e() ], 1), t._v(" "), e("img", {
                    staticClass: "close",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/index/dialog_close.png",
                        alt: "",
                        eventid: "4"
                    },
                    on: {
                        click: t.handleCloseModel
                    }
                }) ]) ]) : t._e(), t._v(" "), t.currentShowModalKey === t.popUpKeysObj.POPUP_SOS_KEY ? e("Popup", {
                    attrs: {
                        popInfo: t.sosModalConfig,
                        close: t.handleCloseModel,
                        mpcomid: "3"
                    }
                }) : t._e(), t._v(" "), t.floatInfo ? e("img", {
                    staticClass: "fixedRight",
                    attrs: {
                        src: t.floatInfo.iconUrl,
                        mode: "widthFix",
                        eventid: "6"
                    },
                    on: {
                        click: t.jump
                    }
                }) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        n.a = i;
    }
}, [ "MhDc" ]);