global.webpackJsonp([ 3 ], {
    "+8+Q": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), a = n.n(i), s = n("kZ7z"), r = n("jV6A"), o = getApp();
        a.a.prototype._piwik = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return r.j.apply(void 0, [ o.globalData.scene ].concat(e));
        }, new a.a(s.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "好友助力领神券",
                backgroundColor: "#F8F8F8",
                backgroundTextStyle: "light",
                navigationStyle: "custom",
                enablePullDownRefresh: !1
            }
        };
    },
    "/oMg": function(t, e, n) {
        "use strict";
        var i = n("YAh+"), a = n("opoO");
        var s = function(t) {
            n("uXJ9");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-0062bb47", null);
        e.a = r.exports;
    },
    AX1d: function(t, e, n) {
        "use strict";
        var i = n("W4LF"), a = n("SIvz");
        var s = function(t) {
            n("JcIJ");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-451f7d70", null);
        e.a = r.exports;
    },
    Acf7: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", [ n("NavHeader", {
                    attrs: {
                        title: "好友助力领神券",
                        mpcomid: "0"
                    }
                }), t._v(" "), n("scroll-view", {
                    staticClass: "invite-coupon",
                    class: !t.isActive && "old",
                    attrs: {
                        "scroll-y": t.isActive
                    }
                }, [ n("div", {
                    staticClass: "activity",
                    class: !t.isActive && "old"
                }, [ n("div", {
                    staticClass: "header"
                }, [ n("div", {
                    staticClass: "tag",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.jumpToRule
                    }
                }) ]), t._v(" "), n("progress", {
                    attrs: {
                        info: t.activityInfo,
                        "is-active": t.isActive
                    }
                }), t._v(" "), t.isActive ? n("div", [ t.isMaster ? n("master-btns", {
                    attrs: {
                        eventid: "2",
                        mpcomid: "2"
                    },
                    on: {
                        init: t.initActivityInfo
                    }
                }) : n("guest-btns", {
                    attrs: {
                        eventid: "1",
                        mpcomid: "1"
                    },
                    on: {
                        init: t.initActivityInfo
                    }
                }), t._v(" "), n("current-phone", {
                    attrs: {
                        mpcomid: "3"
                    }
                }), t._v(" "), n("p", {
                    staticClass: "hotlist"
                }, [ n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/invitecoupon/hot.png",
                        alt: ""
                    }
                }) ]) ], 1) : n("div", {
                    staticClass: "index",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.jumpToIndex
                    }
                }, [ t._v("\n        回到首页(" + t._s(t.countDownNum) + "s)\n      ") ]) ], 1), t._v(" "), t.isActive ? n("div", {
                    staticClass: "sos"
                }, [ n("sosComponents", {
                    attrs: {
                        info: t.info,
                        mpcomid: "4"
                    }
                }) ], 1) : t._e() ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "D+5k": function(t, e) {},
    JcIJ: function(t, e) {},
    MQas: function(t, e, n) {
        "use strict";
        var i = n("jmRE"), a = n("u1xs");
        var s = function(t) {
            n("br3T");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-28e1d452", null);
        e.a = r.exports;
    },
    SIvz: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.info ? n("div", {
                    staticClass: "progress-com"
                }, [ n("div", {
                    staticClass: "inner"
                }, [ t.isActive ? n("div", {
                    staticClass: "progress-box"
                }, [ n("p", {
                    staticClass: "count"
                }, [ t._v("\n        已助力好友："), n("span", [ t._v(t._s(t.info.count || 0)) ]), t._v("人\n      ") ]), t._v(" "), n("div", {
                    staticClass: "progress"
                }, [ n("div", {
                    staticClass: "progress-background"
                }), t._v(" "), n("div", {
                    staticClass: "progress-current",
                    staticStyle: {
                        width: "8.5px"
                    },
                    style: {
                        width: t.width
                    }
                }) ]), t._v(" "), n("div", {
                    staticClass: "scale"
                }, [ n("div", {
                    staticClass: "step"
                }, [ n("p", [ t._v("0人") ]), t._v(" "), n("p", [ t._v("助力越多") ]), t._v(" "), n("p", [ t._v("券额越大") ]), t._v(" "), n("p") ], 1), t._v(" "), n("div", {
                    staticClass: "step"
                }, [ n("p", [ t._v("5人") ]), t._v(" "), n("p", [ n("span", [ t._v("270") ]), t._v("助力礼包") ]), t._v(" "), t.info.count >= 5 ? n("p", {
                    staticClass: "status"
                }, [ t._v("(已发放)") ]) : t._e() ], 1), t._v(" "), n("div", {
                    staticClass: "step"
                }, [ n("p", [ t._v("10人") ]), t._v(" "), n("p", [ n("span", [ t._v("450") ]), t._v("助力礼包") ]), t._v(" "), t.info.count >= 10 ? n("p", {
                    staticClass: "status"
                }, [ t._v("(已发放)") ]) : t._e() ], 1), t._v(" "), n("div", {
                    staticClass: "step"
                }, [ n("p", [ t._v("15人") ]), t._v(" "), n("p", [ n("span", [ t._v("700") ]), t._v("助力礼包") ]), t._v(" "), t.info.count >= 15 ? n("p", {
                    staticClass: "status"
                }, [ t._v("(已发放)") ]) : t._e() ], 1) ]) ], 1) : n("div", {
                    staticClass: "closed"
                }, [ t._v("\n      抱歉，当前活动已结束\n    ") ]) ]) ]) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    TclL: function(t, e) {},
    W4LF: function(t, e, n) {
        "use strict";
        e.a = {
            props: [ "isActive", "info" ],
            data: function() {
                return {};
            },
            computed: {
                width: function() {
                    if (!this.info) return 0;
                    var t = this.info.count;
                    return "calc(" + 100 / 15 * (t = t > 15 ? 15 : t) + "%)";
                }
            }
        };
    },
    "YAh+": function(t, e, n) {
        "use strict";
        var i = n("Xxa5"), a = n.n(i), s = n("exGp"), r = n.n(s), o = n("Dd8w"), c = n.n(o), u = n("NYxO");
        e.a = {
            name: "guest-btns",
            data: function() {
                return {};
            },
            computed: c()({}, Object(u.d)({
                userInfo: function(t) {
                    return t.global.userInfo;
                },
                info: function(t) {
                    return t.global.activityInfo;
                }
            }), {
                userType: function() {
                    return this.info ? this.info.userType : 3;
                }
            }),
            methods: c()({}, Object(u.b)([ "doLoginWithButton", "setCouponInfo" ]), {
                handleOnGetPhoneNumber: function(t) {
                    var e = this;
                    return r()(a.a.mark(function n() {
                        var i, s;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = t.target.dataset, n.next = 3, e.doLoginWithButton([ t, e ]);

                              case 3:
                                if (n.sent.mobile) {
                                    n.next = 6;
                                    break;
                                }
                                return n.abrupt("return");

                              case 6:
                                return n.next = 8, e.initActivityInfo();

                              case 8:
                                if (1 !== (s = n.sent).userType && 2 !== s.campaignFlag) {
                                    n.next = 11;
                                    break;
                                }
                                return n.abrupt("return");

                              case 11:
                                "help" === i.type ? e.help() : e.createCampaigns();

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                initActivityInfo: function(t) {
                    var e = this;
                    return r()(a.a.mark(function n() {
                        var i;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = t || e.$root.$mp.query.id, n.next = 3, e.$emit("init", i);

                              case 3:
                                return n.abrupt("return", e.info);

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                help: function() {
                    var t = this;
                    return r()(a.a.mark(function e() {
                        var n, i;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t.info.id, e.next = 3, t.$axios_dubai({
                                    url: "/user-campaigns/" + n + "/join",
                                    data: {
                                        type: "FRIEND_INVITED_COUNT"
                                    },
                                    method: "POST",
                                    code: !0
                                });

                              case 3:
                                (i = e.sent).code && t.initActivityInfo(), t.setCouponInfo([ "activityInfo", i.data ]);

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                createCampaigns: function() {
                    var t = this;
                    return r()(a.a.mark(function e() {
                        var n, i;
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return wx.showLoading(), e.next = 3, t.$axios_dubai({
                                    url: "/user-campaigns/createUserCampaigns/201906-friend-boost",
                                    method: "POST",
                                    code: !0
                                });

                              case 3:
                                if (!(n = e.sent).code) {
                                    e.next = 6;
                                    break;
                                }
                                return e.abrupt("return", wx.showToast({
                                    title: n.resultMessage,
                                    icon: "none"
                                }));

                              case 6:
                                i = n.data.id, t.initActivityInfo(i), wx.hideLoading();

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                jump: function() {
                    wx.navigateTo({
                        url: "/pages/newexclusive/newexclusive"
                    });
                }
            })
        };
    },
    YNYv: function(t, e, n) {
        "use strict";
        var i = n("aNzz"), a = n("ck6b");
        var s = function(t) {
            n("TclL");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-4d937510", null);
        e.a = r.exports;
    },
    aNzz: function(t, e, n) {
        "use strict";
        var i = n("Xxa5"), a = n.n(i), s = n("exGp"), r = n.n(s), o = n("VsUZ");
        e.a = {
            name: "currentPhone1",
            data: function() {
                return {
                    productInfo: {}
                };
            },
            mounted: function() {
                var t = this;
                return r()(a.a.mark(function e() {
                    return a.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, Object(o.b)();

                          case 2:
                            t.productInfo = e.sent;

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            methods: {
                navigateTo: function(t) {
                    var e = "";
                    if ("category" === t) e = "/pages/category/category?categoryId=1"; else if ("detail" === t) {
                        var n = this.productInfo;
                        e = n && n.id ? "/pages/detail/detail?productId=" + n.id + "&isfromcategory=true&categoryId=" + n.categoryId : "/pages/category/category?categoryId=1";
                    }
                    wx.navigateTo({
                        url: e
                    });
                }
            }
        };
    },
    br3T: function(t, e) {},
    ck6b: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("dl", [ n("dt", [ n("img", {
                    class: t.productInfo ? "" : "padding25",
                    attrs: {
                        src: t.productInfo ? t.productInfo.imgUrl : t.defaultPhoneImg,
                        mode: "aspectFit",
                        alt: ""
                    }
                }) ]), t._v(" "), n("dd", [ t.productInfo ? n("ul", [ n("li", {
                    staticClass: "product-title"
                }, [ t._v(t._s(t.productInfo.name)) ]), t._v(" "), n("li", [ t._v("最高回收价") ]), t._v(" "), n("li", {
                    staticClass: "product-price"
                }, [ t._v("¥" + t._s(t.productInfo.topPrice)) ]) ], 1) : t._e(), t._v(" "), t.productInfo ? t._e() : n("ul", [ n("li", {
                    staticClass: "product-none"
                }, [ t._v("挑选机型立即估价") ]) ], 1) ], 1), t._v(" "), n("dd", {
                    staticClass: "product-valuation",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.navigateTo("detail");
                        }
                    }
                }, [ t._v("立即估价") ]), t._v(" "), n("dd", {
                    staticClass: "product-tag",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.navigateTo("category");
                        }
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    jmRE: function(t, e, n) {
        "use strict";
        var i = n("Xxa5"), a = n.n(i), s = n("exGp"), r = n.n(s), o = n("Dd8w"), c = n.n(o), u = n("NYxO"), v = n("X/E/");
        e.a = {
            name: "master-btns",
            data: function() {
                return {};
            },
            computed: c()({}, Object(u.d)({
                userInfo: function(t) {
                    return t.global.userInfo;
                },
                info: function(t) {
                    return t.global.activityInfo;
                }
            }), {
                ischeckd: function() {
                    return !!this.info && this.info.count >= 15;
                }
            }),
            methods: c()({}, Object(u.b)([ "doLoginWithButton" ]), {
                handleOnGetPhoneNumber: function(t) {
                    var e = this;
                    return r()(a.a.mark(function n() {
                        var i;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, e.doLoginWithButton([ t, e ]);

                              case 2:
                                if (i = n.sent, console.log(i), i.mobile) {
                                    n.next = 6;
                                    break;
                                }
                                return n.abrupt("return");

                              case 6:
                                return n.next = 8, e.$emit("init");

                              case 8:
                                e.createCampaigns();

                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                createCampaigns: function() {
                    var t = this;
                    return r()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return wx.showLoading(), e.next = 3, t.$axios_dubai({
                                    url: "/user-campaigns/createUserCampaigns/201906-friend-boost",
                                    method: "POST"
                                });

                              case 3:
                                wx.hideLoading();

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                jump: function(t) {
                    var e = this;
                    return r()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (t) {
                                    n.next = 2;
                                    break;
                                }
                                return n.abrupt("return", e.jumpToWebview(v.f.coupon));

                              case 2:
                                return n.next = 4, e.doLoginWithButton([ t, e ]);

                              case 4:
                                if (n.sent.mobile) {
                                    n.next = 7;
                                    break;
                                }
                                return n.abrupt("return");

                              case 7:
                                e.jumpToWebview(v.f.coupon);

                              case 8:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            })
        };
    },
    kZ7z: function(t, e, n) {
        "use strict";
        var i = n("pZJ5"), a = n("Acf7");
        var s = function(t) {
            n("D+5k");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-f24e06d8", null);
        e.a = r.exports;
    },
    opoO: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "btns"
                }, [ n("div", {
                    staticClass: "line1"
                }, [ t.userInfo.mobile ? t._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        "data-type": "help",
                        eventid: "0"
                    },
                    on: {
                        getphonenumber: t.handleOnGetPhoneNumber
                    }
                }, [ t._v("\n      帮TA助力\n    ") ]), t._v(" "), t.userInfo.mobile ? n("div", [ 2 === t.userType ? n("button", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.help
                    }
                }, [ t._v("\n        帮TA助力\n      ") ]) : t._e(), t._v(" "), 3 === t.userType ? n("button", {
                    staticClass: "empty"
                }, [ t._v("\n        已助力\n      ") ]) : t._e(), t._v(" "), 4 === t.userType || 5 === t.userType ? n("button", {
                    staticClass: "empty"
                }, [ t._v("\n        新用户才可助力\n      ") ]) : t._e() ], 1) : t._e() ], 1), t._v(" "), 1 !== t.userType ? n("div", {
                    staticClass: "line2"
                }, [ n("button", {
                    staticClass: "type2",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ t._v("\n      帮TA分享\n    ") ]), t._v(" "), t.userInfo.mobile && 1 !== t.userType ? n("button", {
                    staticClass: "type2",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.createCampaigns
                    }
                }, [ t._v("\n      我也要领神券\n    ") ]) : t._e(), t._v(" "), t.userInfo.mobile || 1 === t.userType ? t._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        "data-type": "user",
                        eventid: "3"
                    },
                    on: {
                        getphonenumber: t.handleOnGetPhoneNumber
                    }
                }, [ t._v("\n      我也要领神券\n    ") ]) ], 1) : t._e(), t._v(" "), 3 === t.userType ? n("div", {
                    staticClass: "newuser",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.jump
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/invitecoupon/newuser.png",
                        alt: ""
                    }
                }) ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    pZJ5: function(t, e, n) {
        "use strict";
        var i = n("Xxa5"), a = n.n(i), s = n("exGp"), r = n.n(s), o = n("Dd8w"), c = n.n(o), u = n("NYxO"), v = n("AX1d"), p = n("YNYv"), d = n("MQas"), f = n("/oMg"), l = n("EA5u"), m = n("X/E/"), h = n("Cz8s"), _ = null;
        e.a = {
            components: {
                progress: v.a,
                currentPhone: p.a,
                masterBtns: d.a,
                guestBtns: f.a,
                sosComponents: l.a,
                NavHeader: h.a
            },
            data: function() {
                return {
                    countDownNum: 5,
                    info: []
                };
            },
            computed: c()({}, Object(u.d)({
                isIphoneX: function(t) {
                    return t.global.isIphoneX;
                },
                activityInfo: function(t) {
                    return t.global.activityInfo;
                }
            }), Object(u.c)([ "cityInfo" ]), {
                isMaster: function() {
                    var t = this.$mp.query.identity;
                    return !!this.activityInfo && (this.activityInfo.userType ? 1 === this.activityInfo.userType : "master" === t);
                },
                isActive: function() {
                    return this.activityInfo && this.activityInfo.enable;
                }
            }),
            watch: {},
            onShareAppMessage: function(t) {
                return console.log(this.activityInfo), {
                    title: "价值700元的优惠礼包，只差一点就拿到啦，快来帮我点一下！",
                    path: "/pages/invite-coupon/main?identity=guest&id=" + this.activityInfo.id,
                    imageUrl: "https://sr.aihuishou.com/miniapps/earth/invitecoupon/share.png"
                };
            },
            mounted: function() {
                wx.hideShareMenu(), this.setCouponInfo([ "activityInfo", null ]), this.initDataSOS(), 
                this.initActivityInfo();
            },
            onUnload: function() {
                clearInterval(_), this.countDownNum = 5, this.info = [];
            },
            methods: c()({}, Object(u.b)([ "setCouponInfo" ]), {
                jumpToRule: function() {
                    this.jumpToWebview(m.g);
                },
                jumpToIndex: function() {
                    clearInterval(_), wx.reLaunch({
                        url: "/pages/index/index"
                    });
                },
                initActivityInfo: function(t) {
                    var e = this;
                    return r()(a.a.mark(function n() {
                        var i, s, r;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = t || e.$mp.query.id, s = i ? {
                                    userCampaignId: i
                                } : {}, n.next = 4, e.$axios_dubai({
                                    url: "/user-campaigns/getUserCampaigns/201906-friend-boost",
                                    params: s
                                });

                              case 4:
                                if (r = n.sent, console.log(r), !r.code) {
                                    n.next = 8;
                                    break;
                                }
                                return n.abrupt("return", wx.showToast({
                                    title: r.resultMessage,
                                    icon: "none"
                                }));

                              case 8:
                                e.setCouponInfo([ "activityInfo", r ]), _ && clearTimeout(_), r.enable || (_ = setInterval(function() {
                                    e.countDownNum <= 0 ? (clearInterval(_), wx.reLaunch({
                                        url: "/pages/index/index"
                                    })) : e.countDownNum--;
                                }, 1e3));

                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                initDataSOS: function() {
                    var t = this;
                    this.$axios({
                        url: "/channel/home",
                        params: {
                            cityid: this.cityInfo.id,
                            source: "inviteForCoupon"
                        }
                    }).then(function(e) {
                        e && (console.log(e), t.info = e.items);
                    });
                }
            })
        };
    },
    u1xs: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.info ? n("div", {
                    staticClass: "btns"
                }, [ t.userInfo.mobile || t.ischeckd ? t._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "0"
                    },
                    on: {
                        getphonenumber: t.handleOnGetPhoneNumber
                    }
                }, [ t._v("\n    邀请好友\n  ") ]), t._v(" "), t.userInfo.mobile && !t.ischeckd ? n("button", {
                    attrs: {
                        "open-type": "share"
                    }
                }, [ t._v("\n    邀请好友\n  ") ]) : t._e(), t._v(" "), t.ischeckd ? n("button", {
                    staticClass: "empty"
                }, [ t._v("\n    您已助力成功啦\n  ") ]) : t._e(), t._v(" "), n("p", [ t.userInfo.mobile ? n("span", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.jump("");
                        }
                    }
                }, [ t._v("我的券包") ]) : t._e(), t._v(" "), t.userInfo.mobile ? t._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "2"
                    },
                    on: {
                        getphonenumber: t.jump
                    }
                }, [ t._v("我的券包\n    ") ]) ], 1) ], 1) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    uXJ9: function(t, e) {}
}, [ "+8+Q" ]);