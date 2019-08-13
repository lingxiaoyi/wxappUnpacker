global.webpackJsonp([ 41 ], {
    "+YV5": function(t, i, a) {
        "use strict";
        var e = a("Gu7T"), n = a.n(e), s = a("Dd8w"), o = a.n(s), r = a("EA5u"), c = a("Qc0q"), u = a("GZuB"), p = a("X/E/"), l = a("NYxO"), v = getApp();
        i.a = {
            data: function() {
                return {
                    userInfo: {
                        avatarUrl: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/avatar.png",
                        mobile: ""
                    },
                    urlObj: p.f,
                    activity: {},
                    piwikSource: "",
                    isSuDiYiPage: !1,
                    beforehand: "/pages/beforehand/beforehand",
                    sosInfo: []
                };
            },
            computed: o()({}, Object(l.d)({
                vipInfo: function(t) {
                    return t.global.vipInfo;
                }
            }), Object(l.c)([ "cityInfo", "computedShopList" ]), {
                vipName: function() {
                    return 1 !== this.cityInfo.id ? "" : this.vipInfo.isVip ? "vip" + this.vipInfo.memberType : "vip0";
                },
                isShowVip: function() {
                    return 1 === this.cityInfo.id;
                }
            }),
            components: {
                sosComponents: r.a,
                coustomFooter: c.a,
                Vip: u.a
            },
            onShow: function() {
                var t = this;
                this.$axios({
                    url: "/user"
                }).then(function(i) {
                    if (!i.mobileLoginToken) return console.log("未登录"), void wx.redirectTo({
                        url: "/pages/login/login"
                    });
                    var a = i.mobileLoginToken, e = i.mobile;
                    v.saveCache("userLoginInfo", {
                        token: a,
                        mobile: e
                    }), e = e.substr(0, 3) + "****" + e.substr(7), t.userInfo.mobile = e;
                }), this.getUserSos(), this.setSuDiYiPage(), this.isShowVip && this._shencePoint({
                    event: "vip_show"
                });
            },
            methods: {
                getUserSos: function() {
                    var t = this, i = wx.getStorageSync("pageFromCooperation");
                    this.$axios({
                        url: "/channel/user-center",
                        params: {
                            cityId: this.cityInfo.id,
                            source: i || "default"
                        }
                    }).then(function(i) {
                        t.sosInfo = [].concat(n()(i)) || [];
                    });
                },
                jump: function(t, i) {
                    i ? wx.navigateTo({
                        url: this.beforehand
                    }) : v.jumpToWebview(t);
                },
                setSuDiYiPage: function() {
                    wx.getStorageSync("pageFromCooperation") && (this.isSuDiYiPage = !0);
                },
                handleToMoon: function() {
                    wx.navigateToMiniProgram({
                        appId: "wx1d0bf756d8c83d75"
                    });
                },
                handleToOfNew: function() {
                    wx.navigateToMiniProgram({
                        appId: "wxde54a54a45c0e1b7",
                        path: "/pages/index/main"
                    });
                },
                handleToNavigate: function() {
                    wx.navigateTo({
                        url: "../index/index"
                    });
                },
                handleToRedirect: function() {
                    wx.redirectTo({
                        url: "./index"
                    });
                },
                jumpBanner: function() {
                    v.jumpToWebview("https://page.aihuishou.com/renderer/?activityId=356&utm_source=earth&utm_medium=appmine&utm_campaign=banner");
                }
            }
        };
    },
    FGjL: function(t, i, a) {
        "use strict";
        var e = a("+YV5"), n = a("fxun");
        var s = function(t) {
            a("cIYm");
        }, o = a("ybqe")(e.a, n.a, s, "data-v-2f2f8252", null);
        i.a = o.exports;
    },
    QOVD: function(t, i, a) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var e = a("5nAL"), n = a.n(e), s = a("FGjL");
        new n.a(s.a).$mount(), i.default = {
            config: {
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "个人中心",
                backgroundColor: "#ffffff",
                backgroundTextStyle: "light"
            }
        };
    },
    cIYm: function(t, i) {},
    fxun: function(t, i, a) {
        "use strict";
        var e = {
            render: function() {
                var t = this, i = t.$createElement, a = t._self._c || i;
                return a("div", {
                    staticClass: "user-center"
                }, [ a("div", {
                    staticClass: "header"
                }, [ a("div", {
                    staticClass: "content"
                }, [ a("div", {
                    staticClass: "userInfo"
                }, [ a("div", {
                    staticClass: "user-avatar"
                }, [ a("div", {
                    staticClass: "vip",
                    class: t.vipName
                }), t._v(" "), a("div", {
                    staticClass: "avatarBox"
                }, [ a("div", {
                    staticClass: "avatar"
                }, [ a("open-data", {
                    staticClass: "avatarImg",
                    attrs: {
                        type: "userAvatarUrl",
                        mpcomid: "0"
                    }
                }) ], 1) ]) ]), t._v(" "), a("div", {
                    staticClass: "userinfo"
                }, [ a("span", {
                    staticClass: "mobile"
                }, [ t._v(t._s(t.userInfo.mobile)) ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "setting",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(i) {
                            t.jump(t.urlObj.setting);
                        }
                    }
                }, [ a("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/public/icon_setting.png",
                        mode: "aspectFit"
                    }
                }) ]) ]), t._v(" "), t.isShowVip ? a("Vip", {
                    attrs: {
                        mpcomid: "1"
                    }
                }) : t._e(), t._v(" "), a("div", {
                    staticClass: "container-view"
                }, [ a("div", {
                    staticClass: "item",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(i) {
                            t.jump(t.urlObj.order);
                        }
                    }
                }, [ a("p", [ a("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/vip1.0/list.png",
                        alt: ""
                    }
                }) ]), t._v(" "), a("p", [ t._v("订单") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "item",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(i) {
                            t.jump(t.urlObj.wallet);
                        }
                    }
                }, [ a("p", [ a("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/vip1.0/bag.png",
                        alt: ""
                    }
                }) ]), t._v(" "), a("p", [ t._v("钱包") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "item",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(i) {
                            t.jump(t.urlObj.coupon);
                        }
                    }
                }, [ a("p", [ a("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/vip1.0/card.png",
                        alt: ""
                    }
                }) ]), t._v(" "), a("p", [ t._v("券包") ]) ], 1) ]) ], 1), t._v(" "), a("sos-components", {
                    attrs: {
                        info: t.sosInfo,
                        mpcomid: "2"
                    }
                }), t._v(" "), a("coustomFooter", {
                    attrs: {
                        index: 3,
                        mpcomid: "3"
                    }
                }), t._v(" "), a("image", {
                    staticClass: "piwik-image-placeholder",
                    attrs: {
                        src: t.piwikSource
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        i.a = e;
    }
}, [ "QOVD" ]);