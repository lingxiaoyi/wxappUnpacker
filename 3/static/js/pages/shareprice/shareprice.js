global.webpackJsonp([ 5 ], {
    "55iY": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), r = n.n(i), s = n("sFLO"), a = n("jV6A"), o = getApp();
        r.a.prototype._piwik = function() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return a.j.apply(void 0, [ o.globalData.scene ].concat(t));
        }, new r.a(s.a).$mount(), t.default = {
            config: {
                navigationBarTitleText: "好友助力",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black"
            }
        };
    },
    "9Tof": function(e, t) {},
    C3hd: function(e, t) {},
    Jw62: function(e, t, n) {
        "use strict";
        var i = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "shareprice-container"
                }, [ n("header", [ n("navigator", {
                    staticClass: "rules",
                    attrs: {
                        url: e.navigateUrl.rules
                    }
                }, [ e._v("活动规则") ]), e._v(" "), e.isLoading ? e._e() : n("div", {
                    staticClass: "card-item"
                }, [ e.activityInfo ? n("ul", [ n("li", {
                    staticClass: "marginright10"
                }, [ e.isEnd ? e._e() : n("img", {
                    attrs: {
                        src: e.activityInfo.productImageUrl,
                        alt: "",
                        mode: "aspectFit"
                    }
                }), e._v(" "), e.isEnd ? n("img", {
                    staticClass: "endImg",
                    attrs: {
                        src: e.endImg,
                        alt: ""
                    }
                }) : e._e() ]), e._v(" "), n("li", [ n("dl", {
                    class: e.isEnd ? "dl-end" : ""
                }, [ e.isEnd ? e._e() : n("block", [ n("dt", [ e._v(e._s(e.activityInfo.productName)), n("span", [ e._v("高价回收中") ]) ]), e._v(" "), e.countDown ? n("dd", {
                    staticClass: "time-container"
                }, [ n("u", [ e._v(e._s(e.countDown.h.time1)) ]), n("u", [ e._v(e._s(e.countDown.h.time2)) ]), e._v("时"), n("u", {
                    staticClass: "time-center"
                }, [ e._v(e._s(e.countDown.m.time1)) ]), n("u", {
                    staticClass: "time-center"
                }, [ e._v(e._s(e.countDown.m.time2)) ]), e._v("分"), n("u", [ e._v(e._s(e.countDown.s.time1)) ]), n("u", [ e._v(e._s(e.countDown.s.time2)) ]), e._v("秒\n              ") ], 1) : e._e(), e._v(" "), e.countDown ? e._e() : n("dd") ], 1), e._v(" "), e.isEnd ? n("block", [ n("dt", [ e._v("助力时间已结束") ]), e._v(" "), n("dd", [ n("p", [ e._v("提交回收订单") ]), e._v(" "), n("p", [ e._v("即可畅享加价福利") ]) ], 1) ], 1) : e._e() ], 1) ], 1) ], 1) : e._e() ], 1), e._v(" "), e.popupInfo.isShow ? n("popup", {
                    attrs: {
                        popupType: e.popupInfo.popupType,
                        loginInfo: e.loginInfo,
                        userInfo: e.userInfo,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        closePopup: e.handleOnClosePopup,
                        setUserInfo: e.setUserInfo,
                        setLoginInfo: e.setLoginInfo
                    }
                }) : e._e() ], 1), e._v(" "), n("main", [ !e.isEnd && e.activityInfo ? n("div", [ n("p", [ e._v("当前已加价："), n("span", [ e._v(e._s(e.activityInfo.totalAmount) + "元") ]) ]), e._v(" "), n("p", {
                    staticClass: "active"
                }, [ e._v("邀请好友："), n("span", [ e._v(e._s(e.activityInfo.inviteCount) + "人") ]) ]), e._v(" "), n("div", {
                    staticClass: "progress-container"
                }, [ n("u"), e._v(" "), n("i", {
                    style: "width: " + e.progress + "px"
                }, [ n("s") ], 1) ], 1), e._v(" "), n("dl", [ e.isOwner ? e._e() : n("dt", [ e.isHelped ? e._e() : n("block", [ e.loginInfo ? e._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "1"
                    },
                    on: {
                        getphonenumber: e.handleOnGetPhoneNumber
                    }
                }, [ e._v("帮ta加价") ]) ], 1), e._v(" "), e.isHelped || !e.isNew && !e.isHelped ? n("block", [ n("navigator", {
                    attrs: {
                        url: e.navigateUrl.category
                    }
                }, [ e._v("测测我的手机值多少钱") ]) ], 1) : e._e() ], 1), e._v(" "), e.isOwner ? n("dt", [ n("button", {
                    attrs: {
                        "open-type": "share",
                        eventid: "2"
                    },
                    on: {
                        click: e.handleOnClickShareFriend
                    }
                }, [ e._v("邀请好友") ]) ], 1) : e._e(), e._v(" "), e.countDown ? n("dd", [ e.isOwner ? n("navigator", {
                    attrs: {
                        url: e.navigateUrl.category,
                        eventid: "3"
                    },
                    on: {
                        click: e.handleOnClickNavToCategory
                    }
                }, [ e._v("继续回收") ]) : e._e(), e._v(" "), e.isOwner ? e._e() : n("button", {
                    staticClass: "share-btn",
                    attrs: {
                        "open-type": "share",
                        eventid: "4"
                    },
                    on: {
                        click: e.handleOnClickFriendShare
                    }
                }, [ e._v("帮他分享") ]) ], 1) : e._e() ], 1), e._v(" "), e.helpList ? n("help-list", {
                    attrs: {
                        friendList: e.helpList,
                        isOwner: e.isOwner,
                        mpcomid: "1"
                    }
                }) : e._e() ], 1) : e._e() ]), e._v(" "), e.isOwner || e.isEnd ? e._e() : n("footer", [ n("p", [ e._v("我也要加价") ]), e._v(" "), n("div", {
                    staticClass: "add-price"
                }, [ n("u", [ e._v("回收任意数码产品，即可邀请好友加价") ]), e._v(" "), n("img", {
                    staticClass: "course",
                    attrs: {
                        src: "",
                        alt: ""
                    }
                }), e._v(" "), e.activityInfo && e.activityInfo.promotion ? n("dl", {
                    staticClass: "coupon",
                    style: {
                        background: "url(" + e.activityInfo.promotion.backgroundImgUrl + ")",
                        backgroundSize: "100% 100%"
                    },
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: e.handleOnClickNavigateToCoupon
                    }
                }, [ n("dt", [ e._v(e._s(e.activityInfo.promotion.title)) ]), e._v(" "), n("dd", [ e._v(e._s(e.activityInfo.promotion.subtitle)) ]) ], 1) : e._e() ], 1), e._v(" "), n("navigator", {
                    attrs: {
                        url: e.navigateUrl.category,
                        eventid: "6"
                    },
                    on: {
                        click: e.handleOnClickNavToIndex
                    }
                }, [ e._v("免费估价") ]) ], 1), e._v(" "), e.isEnd ? n("div", {
                    staticClass: "end-container"
                }, [ e.isLoading ? e._e() : n("navigator", {
                    staticClass: "immediately",
                    attrs: {
                        url: e.navigateUrl.category
                    }
                }, [ e._v("立即回收") ]) ], 1) : e._e() ], 1);
            },
            staticRenderFns: []
        };
        t.a = i;
    },
    NrGL: function(e, t, n) {
        "use strict";
        var i = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "friend-help-container"
                }, [ n("p", [ n("img", {
                    attrs: {
                        src: e.titleImg,
                        alt: ""
                    }
                }) ]), e._v(" "), n("scroll-view", {
                    class: e.isOwner && e.friendList && e.friendList.length >= 10 ? "height300" : "",
                    attrs: {
                        "scroll-y": ""
                    }
                }, [ e.friendList.length > 0 ? n("ul", e._l(e.friendList, function(t, i) {
                    return n("li", {
                        key: i
                    }, [ t.index ? e._e() : n("div", [ n("i", [ e._v(e._s(i >= 3 ? i + 1 : "")) ]), e._v(e._s(t.inviteeMobile ? t.inviteeMobile : t.inviteeNickname) + "\n        ") ], 1), e._v(" "), t.index ? n("div", [ n("i", [ e._v(e._s(t.index)) ]), e._v(e._s(t.inviteeNickname) + "\n        ") ], 1) : e._e(), e._v(" "), n("span", {
                        staticClass: "amount"
                    }, [ e._v(e._s(t.amount) + "元") ]) ]);
                })) : e._e(), e._v(" "), 0 === e.friendList.length ? n("dl", [ n("dt", [ e._v("\n        暂无好友加价，等你上榜！\n      ") ]) ], 1) : e._e() ], 1) ], 1);
            },
            staticRenderFns: []
        };
        t.a = i;
    },
    UOiA: function(e, t, n) {
        "use strict";
        t.a = {
            props: {
                popupType: {
                    type: String,
                    default: "authority"
                },
                loginInfo: {
                    type: Object,
                    default: function() {
                        return null;
                    }
                },
                userInfo: {
                    type: Object,
                    default: function() {
                        return null;
                    }
                }
            },
            data: function() {
                return {
                    canClosePopup: !0
                };
            },
            computed: {
                isLogin: function() {
                    return !!this.loginInfo;
                },
                isGetUserInfo: function() {
                    return !!this.userInfo;
                },
                isShowAuthority: function() {
                    var e = this.popupType;
                    return e && "authority" === e;
                },
                isShowHelpSuccess: function() {
                    var e = this.popupType;
                    return e && "help-success" === e;
                }
            },
            methods: {
                handleOnGetUserInfo: function(e) {
                    var t = e.target.userInfo;
                    t && (this.isGetUserInfo = !0, this.$emit("setUserInfo", t));
                },
                handleOnGetPhoneNumber: function(e) {
                    var t = e.target, n = t.encryptedData, i = t.iv;
                    if (n && i) {
                        var r = {
                            encryptedData: n,
                            iv: i
                        };
                        this.isLogin = !0, this.$emit("setLoginInfo", r);
                    }
                },
                handleOnClickClosePopup: function() {
                    this.canClosePopup && this.$emit("closePopup");
                }
            }
        };
    },
    V8QB: function(e, t, n) {
        "use strict";
        t.a = {
            props: {
                friendList: {
                    type: Array,
                    default: []
                },
                isOwner: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    titleImg: "https://sr.aihuishou.com/miniapps/earth/shareprice/friend-title.png"
                };
            }
        };
    },
    Xp76: function(e, t, n) {
        "use strict";
        var i = n("V8QB"), r = n("NrGL");
        var s = function(e) {
            n("szxV");
        }, a = n("ybqe")(i.a, r.a, s, "data-v-18b30bbd", null);
        t.a = a.exports;
    },
    Xzf5: function(e, t, n) {
        "use strict";
        var i = n("Xxa5"), r = n.n(i), s = n("exGp"), a = n.n(s), o = n("Dd8w"), c = n.n(o), u = n("vLgD"), p = n("Xp76"), l = n("hm3s"), v = n("VsUZ"), d = null, h = "https://sr.aihuishou.com/miniapps/earth/shareprice/";
        t.a = {
            data: function() {
                return {
                    isOwner: !0,
                    isNew: !0,
                    isHelped: !1,
                    orderNo: null,
                    activityInfo: null,
                    countDown: null,
                    doneCountDown: !1,
                    userInfo: null,
                    loginInfo: null,
                    popupInfo: {
                        isShow: !1,
                        popupType: "authority"
                    },
                    endImg: h + "endImg.png",
                    shareImg: h + "share.jpg",
                    navigateUrl: {
                        rules: "/pages/sharepricerules/sharepricerules",
                        category: "/pages/category/category?categoryId=1",
                        index: "/pages/index/index"
                    }
                };
            },
            components: {
                HelpList: p.a,
                Popup: l.a
            },
            computed: {
                isLoading: function() {
                    return !this.activityInfo;
                },
                isEnd: function() {
                    var e = this.activityInfo, t = this.doneCountDown, n = new Date().getTime(), i = null, r = !1;
                    if (e && e.endTime) {
                        var s = e.endTime, a = e.status;
                        i = new Date(s).getTime(), r = 2 === a;
                    }
                    return !i || (i < n || r || t);
                },
                progress: function() {
                    var e = this.activityInfo, t = null;
                    if (e) {
                        var n = e.inviteCount;
                        n < 10 ? t = n / 10 * 170 + 20 : n >= 10 && n <= 20 ? t = 190 + (n - 10) / 10 * 88 : n > 20 && (t = 326);
                    }
                    return t || 0;
                },
                helpList: function() {
                    var e = this, t = this.activityInfo, n = this.isOwner, i = [];
                    if (t) {
                        var r = t.inviteRecords;
                        r.sort(this.querySortHelpItem), r && r.length > 0 && (n ? i = r : r.forEach(function(t, n) {
                            (n < 3 || t.isCurrentUser) && (t.isCurrentUser && (e.isHelped = !0), i.push(t.isCurrentUser && n >= 3 ? c()({}, t, {
                                index: n + 1
                            }) : t));
                        }));
                    }
                    return i;
                }
            },
            mounted: function() {
                var e = this;
                return a()(r.a.mark(function t() {
                    return r.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.options = e.$root.$mp.query, t.next = 3, Object(v.i)();

                          case 3:
                            e.setOrderNo(), e.setUserState();

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            onShareAppMessage: function(e) {
                var t = this.shareImg;
                return {
                    title: "最后24小时，点开领礼包",
                    path: "pages/shareprice/shareprice?orderNo=" + this.orderNo,
                    imageUrl: t
                };
            },
            methods: {
                handleOnClickHelp: function(e) {
                    var t = this;
                    return a()(r.a.mark(function e() {
                        var n, i, s, a, o, c, u;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t.activityInfo, i = t.loginInfo, t._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "helpclick", "basicInfo"), 
                                s = n.orderNo, a = i.encryptedData, o = i.iv, c = {
                                    orderNo: s,
                                    encryptedData: a,
                                    iv: o,
                                    scene: 3
                                }, u = null, e.next = 8, t.help(c);

                              case 8:
                                (u = e.sent) && (t._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "helpsuccess", "abtest"), 
                                t.setPopupInfo(!0, "help-success"), t.isHelped = !0, t.activityInfo = u);

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                handleOnGetPhoneNumber: function(e) {
                    var t = e.target, n = t.encryptedData, i = t.iv;
                    if (n && i) {
                        var r = {
                            encryptedData: n,
                            iv: i
                        };
                        this.setLoginInfo(r);
                    }
                },
                handleOnClickNavigateToCoupon: function() {
                    var e = this.activityInfo.promotion.activityCode;
                    this._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "couponclick", "basicInfo"), 
                    wx.navigateTo({
                        url: "/pages/activity/coupon/coupon?id=" + e
                    });
                },
                handleOnClickNavToIndex: function() {
                    this._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "CTAclick", "basicInfo");
                },
                handleOnClickShareFriend: function() {
                    this._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "invideclick", "basicInfo");
                },
                handleOnClickNavToCategory: function() {
                    this._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "recycleclick", "basicInfo");
                },
                handleOnClickFriendShare: function() {
                    this._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "shareclick", "basicInfo");
                },
                handleOnClosePopup: function(e) {
                    this.setPopupInfo(!1);
                },
                setUserState: function() {
                    var e = this;
                    return a()(r.a.mark(function t() {
                        var n, i, s;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.orderNo, i = null, s = {
                                    orderNo: n
                                }, t.next = 5, e.getActivityInfo(s);

                              case 5:
                                (i = t.sent) && (e.activityInfo = i, e.isOwner = i.belongToCurrentUser, i.belongToCurrentUser ? e._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "friendshare/host", "basicInfo") : e._piwik("pages/shareprice/shareprice", "miniapp/friendshare", "friendshare/guest", "basicInfo"), 
                                e.setCountDownInterval());

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setUserInfo: function(e) {
                    e && (this.userInfo = e);
                    var t = this.userInfo, n = this.loginInfo;
                    t && n && this.handleOnClickHelp();
                },
                setLoginInfo: function(e) {
                    e && (this.loginInfo = e), this.loginInfo && this.handleOnClickHelp();
                },
                setCountDownInterval: function() {
                    var e = this, t = this;
                    d = setInterval(function() {
                        t.calculateTimesStamp() <= 0 && (e.doneCountDown = !0, clearInterval(d));
                    }, 1e3);
                },
                setPopupInfo: function(e) {
                    this.popupInfo.isShow = e;
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    n && n.length > 0 && (this.popupInfo.popupType = n[0]);
                },
                setOrderNo: function() {
                    var e = this.options;
                    e && e.orderNo ? this.orderNo = e.orderNo : e && e.scene && (this.orderNo = e.scene);
                },
                getActivityInfo: function(e) {
                    var t = this;
                    return a()(r.a.mark(function n() {
                        var i;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = null, t.prev = 1, t.next = 4, Object(u.a)({
                                    url: "/share-activity/order",
                                    params: e
                                });

                              case 4:
                                i = t.sent, t.next = 10;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(1), console.log(t.t0);

                              case 10:
                                return t.abrupt("return", i);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, n, t, [ [ 1, 7 ] ]);
                    }))();
                },
                help: function(e) {
                    var t = this;
                    return a()(r.a.mark(function n() {
                        var i;
                        return r.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = null, n.prev = 1, n.next = 4, Object(u.a)({
                                    url: "/share-activity/help",
                                    params: e,
                                    method: "POST"
                                });

                              case 4:
                                i = n.sent, n.next = 11;
                                break;

                              case 7:
                                n.prev = 7, n.t0 = n.catch(1), console.log(n.t0), "只有新用户可以助力加价" === n.t0 && (t.isNew = !1, 
                                t.setPopupInfo(!1), wx.showToast({
                                    title: "只有新用户可以助力加价",
                                    duration: 2500,
                                    icon: "none"
                                }));

                              case 11:
                                return n.abrupt("return", i);

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n, t, [ [ 1, 7 ] ]);
                    }))();
                },
                querySortHelpItem: function(e, t) {
                    return e.amount > t.amount ? -1 : e.amount === t.amount ? 0 : 1;
                },
                calculateTimesStamp: function() {
                    var e = this.activityInfo, t = new Date().getTime(), n = null, i = null, r = 0;
                    if (e && e.endTime) {
                        var s = e.endTime;
                        if ((n = new Date(s).getTime()) > t) r = n - t, i = {
                            h: this.checkTime(parseInt(r / 1e3 / 60 / 60 % 24, 10)),
                            m: this.checkTime(parseInt(r / 1e3 / 60 % 60, 10)),
                            s: this.checkTime(parseInt(r / 1e3 % 60, 10))
                        };
                    }
                    return this.countDown = i || {
                        h: {
                            time1: 0,
                            time2: 0
                        },
                        m: {
                            time1: 0,
                            time2: 0
                        },
                        s: {
                            time1: 0,
                            time2: 0
                        }
                    }, r;
                },
                checkTime: function(e) {
                    var t = void 0, n = void 0;
                    return e < 10 && e >= 0 ? (t = 0, n = e) : (t = parseInt(e / 10, 10), n = parseInt(e % 10, 10)), 
                    {
                        time1: t,
                        time2: n
                    };
                }
            }
        };
    },
    hm3s: function(e, t, n) {
        "use strict";
        var i = n("UOiA"), r = n("swJo");
        var s = function(e) {
            n("9Tof");
        }, a = n("ybqe")(i.a, r.a, s, "data-v-11bd3d3f", null);
        t.a = a.exports;
    },
    sFLO: function(e, t, n) {
        "use strict";
        var i = n("Xzf5"), r = n("Jw62");
        var s = function(e) {
            n("C3hd");
        }, a = n("ybqe")(i.a, r.a, s, "data-v-62c2ff36", null);
        t.a = a.exports;
    },
    swJo: function(e, t, n) {
        "use strict";
        var i = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "popup-container"
                }, [ n("main", [ e.isShowAuthority ? n("div", {
                    staticClass: "authority-container"
                }, [ n("dl", [ n("dt", [ e._v("爱回收需要获取您的授权") ]), e._v(" "), n("dd", [ n("ul", [ n("li", [ e._v("\n              昵称和头像授权"), e.isGetUserInfo ? e._e() : n("button", {
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "0"
                    },
                    on: {
                        getuserinfo: e.handleOnGetUserInfo
                    }
                }, [ e._v("立即授权") ]), e.isGetUserInfo ? n("i") : e._e() ], 1), e._v(" "), n("li", [ e._v("\n              手机号授权"), e.isLogin ? e._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "1"
                    },
                    on: {
                        getphonenumber: e.handleOnGetPhoneNumber
                    }
                }, [ e._v("立即授权") ]), e.isLogin ? n("i") : e._e() ], 1) ], 1) ], 1) ], 1) ], 1) : e._e(), e._v(" "), e.isShowHelpSuccess ? n("div", {
                    staticClass: "help-success"
                }) : e._e() ]), e._v(" "), n("div", {
                    staticClass: "mask-layer",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: e.handleOnClickClosePopup
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        t.a = i;
    },
    szxV: function(e, t) {}
}, [ "55iY" ]);