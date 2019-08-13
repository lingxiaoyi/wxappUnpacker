global.webpackJsonp([ 30 ], {
    GSY3: function(t, e, s) {
        "use strict";
        var i = s("Xxa5"), n = s.n(i), a = s("exGp"), r = s.n(a), o = s("Dd8w"), c = s.n(o), l = s("vLgD"), u = s("9jZB"), v = s("X/E/"), d = s("NYxO"), p = s("Cz8s");
        e.a = {
            name: "freegift",
            data: function() {
                return {
                    layerType: "",
                    record: {}
                };
            },
            components: {
                NavHeader: p.a
            },
            computed: c()({}, Object(d.d)({
                userInfo: function(t) {
                    return t.global.userInfo;
                },
                systemInfo: function(t) {
                    return t.global.systemInfo;
                }
            }), {
                isLayer: function() {
                    return !!this.layerType;
                }
            }),
            onShow: function() {
                this.getRecord(1);
            },
            onShareAppMessage: function(t) {
                return this.layerType = "", this.getShareJoinResult(), {
                    title: "0元速抢！价值¥19.9手机数据线",
                    path: "pages/nbs-freegift/main",
                    imageUrl: "https://sr.aihuishou.com/miniapps/earth/freegift/share.png"
                };
            },
            onUnload: function() {
                this.layerType = "", this.record = {};
            },
            methods: c()({}, Object(d.b)([ "doLoginWithButton" ]), {
                jump: function() {
                    this.jumpToWebview("https://page.aihuishou.com/renderer/?activityId=491");
                },
                doLogin: function(t) {
                    var e = this;
                    return r()(n.a.mark(function s() {
                        return n.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                return console.log(t), s.next = 3, e.doLoginWithButton([ t, e ]);

                              case 3:
                                if (s.sent.mobile) {
                                    s.next = 6;
                                    break;
                                }
                                return s.abrupt("return");

                              case 6:
                                e.joinActivity();

                              case 7:
                              case "end":
                                return s.stop();
                            }
                        }, s, e);
                    }))();
                },
                joinActivity: function() {
                    var t = this;
                    return r()(n.a.mark(function e() {
                        var s, i, a, r, o, c;
                        return n.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(l.a)({
                                    url: "/nbs-activity/join",
                                    method: "POST",
                                    code: !0
                                });

                              case 2:
                                if ((s = e.sent).code) {
                                    e.next = 11;
                                    break;
                                }
                                return i = t.$mp.query, a = i.utm_source, r = void 0 === a ? "" : a, o = i.utm_medium, 
                                c = void 0 === o ? "" : o, t._shencePoint({
                                    event: "getcoupon",
                                    title: "0元领数据线",
                                    utm_source: r,
                                    utm_medium: c,
                                    is_new: !0
                                }), wx.showToast({
                                    title: "领取成功",
                                    icon: "none"
                                }), e.next = 9, t.getRecord();

                              case 9:
                                e.next = 12;
                                break;

                              case 11:
                                10014 === s.code ? t.layerType = "error" : 10009 === s.code ? t.getRecord() : wx.showToast({
                                    title: s.resultMessage,
                                    icon: "none"
                                });

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                getRecord: function(t) {
                    var e = this;
                    return r()(n.a.mark(function s() {
                        var i;
                        return n.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                return s.next = 2, Object(l.a)({
                                    url: "/nbs-activity/record"
                                });

                              case 2:
                                if ((i = s.sent).id) {
                                    s.next = 5;
                                    break;
                                }
                                return s.abrupt("return", 0);

                              case 5:
                                return e.record = i, i.verificationTime ? t || (e.layerType = "received") : (e.getQRcode(), 
                                t || (e.layerType = "qrcode")), s.abrupt("return", 1);

                              case 8:
                              case "end":
                                return s.stop();
                            }
                        }, s, e);
                    }))();
                },
                getShareJoinResult: function() {
                    var t = this;
                    Object(l.a)({
                        url: "/nbs-activity/share-join",
                        method: "POST",
                        code: !0
                    }).then(function(e) {
                        if (e.code) wx.showToast({
                            title: e.resultMessage,
                            icon: "none"
                        }); else {
                            var s = t.$mp.query, i = s.utm_source, n = void 0 === i ? "" : i, a = s.utm_medium, r = void 0 === a ? "" : a;
                            t._shencePoint({
                                event: "getcoupon",
                                title: "0元领数据线",
                                utm_source: n,
                                utm_medium: r,
                                is_new: !1
                            }), wx.showToast({
                                title: "领取成功",
                                icon: "none"
                            }), t.getRecord(1);
                        }
                    });
                },
                toggleLayer: function() {
                    this.layerType = "";
                },
                getQRcode: function() {
                    console.log(this.systemInfo);
                    var t = .32 * (this.systemInfo ? this.systemInfo.screenWidth : 375);
                    Object(u.a)({
                        width: t,
                        height: t,
                        canvasId: "myQrcode",
                        text: Object(v.c)(this.record.id)
                    });
                },
                saveImage: function() {
                    wx.canvasToTempFilePath({
                        canvasId: "myQrcode",
                        quality: 1,
                        success: function(t) {
                            wx.saveImageToPhotosAlbum({
                                filePath: t.tempFilePath,
                                success: function(t) {
                                    console.log(t), wx.showToast({
                                        title: "保存成功"
                                    });
                                }
                            });
                        },
                        fail: function(t) {
                            wx.showToast({
                                title: "保存失败"
                            });
                        }
                    });
                },
                jumpToShopDetail: function() {
                    wx.navigateTo({
                        url: "/pages/nbs-shops/main?fromActivity=1"
                    });
                }
            })
        };
    },
    MaTe: function(t, e, s) {
        "use strict";
        var i = s("GSY3"), n = s("g5LZ");
        var a = function(t) {
            s("s7OC");
        }, r = s("ybqe")(i.a, n.a, a, "data-v-2edb8c96", null);
        e.a = r.exports;
    },
    UIlN: function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = s("5nAL"), n = s.n(i), a = s("MaTe"), r = s("IcnI");
        n.a.prototype.$store = r.a, new n.a(a.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "0元领数据线",
                backgroundColor: "#F8F8F8",
                backgroundTextStyle: "light",
                navigationStyle: "custom",
                enablePullDownRefresh: !1
            }
        };
    },
    g5LZ: function(t, e, s) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", [ s("NavHeader", {
                    attrs: {
                        title: "门店信息",
                        mpcomid: "0"
                    }
                }), t._v(" "), s("scroll-view", {
                    staticClass: "free-gift",
                    class: t.isLayer && "isLayer",
                    attrs: {
                        "scroll-y": !t.isLayer
                    }
                }, [ s("img", {
                    staticClass: "header-img",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/freegift/3.0/background.jpg",
                        alt: "",
                        mode: "widthFix"
                    }
                }), t._v(" "), s("div", {
                    staticClass: "content-box"
                }, [ s("img", {
                    staticClass: "prize",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/freegift/3.0/gift.png",
                        alt: ""
                    }
                }), t._v(" "), s("p", {
                    staticClass: "prize-name"
                }, [ t._v("精美礼品一份") ]), t._v(" "), s("p", {
                    staticClass: "prize-desc"
                }, [ t._v("由爱回收门店提供，数量有限，先到先得") ]), t._v(" "), t.userInfo.mobile && !t.record.id ? s("div", {
                    staticClass: "button",
                    attrs: {
                        alt: "",
                        eventid: "0"
                    },
                    on: {
                        click: t.joinActivity
                    }
                }, [ t._v("我要领取\n      ") ]) : t._e(), t._v(" "), t.userInfo.mobile && t.record.id ? s("div", {
                    staticClass: "button",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.getRecord();
                        }
                    }
                }, [ t._v("查看兑换码\n      ") ]) : t._e(), t._v(" "), t.userInfo.mobile ? t._e() : s("button", {
                    staticClass: "button",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "2"
                    },
                    on: {
                        getphonenumber: t.doLogin
                    }
                }, [ t._v("我要领取\n      ") ]), t._v(" "), s("img", {
                    staticClass: "rule",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/freegift/rule.png",
                        alt: ""
                    }
                }), t._v(" "), s("div", {
                    staticClass: "line"
                }, [ s("p", {
                    staticClass: "line-title"
                }, [ t._v("\n          活动礼品:\n        ") ]), t._v(" "), s("p", {
                    staticClass: "line-introduce"
                }, [ t._v("\n          精美礼品一份 "), s("i"), t._v("（由爱回收门店提供，数量有限，先到先得）\n        ") ], 1) ], 1), t._v(" "), s("div", {
                    staticClass: "line"
                }, [ s("p", {
                    staticClass: "line-title"
                }, [ t._v("\n          活动对象:\n        ") ]), t._v(" "), s("p", {
                    staticClass: "line-introduce"
                }, [ t._v("\n          爱回收新注册用户\n        ") ]) ], 1), t._v(" "), s("div", {
                    staticClass: "line"
                }, [ s("p", {
                    staticClass: "line-title"
                }, [ t._v("\n          活动规则:\n        ") ]), t._v(" "), s("p", {
                    staticClass: "line-introduce"
                }, [ t._v("\n          在本页面点击“我要领取”一键注册，即可获得 精美礼品1份，在爱回收门店出示二维码即可兑换。 每店每日限量100份，先到先得，可提前致电门店咨询。\n        ") ]) ], 1), t._v(" "), s("div", {
                    staticClass: "line"
                }, [ s("p", {
                    staticClass: "line-title"
                }, [ t._v("\n          活动门店:\n        ") ]), t._v(" "), s("p", {
                    staticClass: "line-introduce"
                }, [ t._v("\n          全国所有门店\n        ") ]) ], 1) ], 1), t._v(" "), s("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.isLayer,
                        expression: "isLayer"
                    } ],
                    staticClass: "layer"
                }, [ s("div", {
                    staticClass: "layer-mask",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.toggleLayer
                    }
                }), t._v(" "), s("div", {
                    staticClass: "layer-content",
                    class: t.layerType
                }, [ s("div", {
                    staticClass: "close",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.toggleLayer
                    }
                }), t._v(" "), "received" === t.layerType ? s("div", [ s("p", {
                    staticClass: "title"
                }, [ t._v("奖品已领取") ]), t._v(" "), s("div", {
                    staticClass: "introduce"
                }, [ s("p", [ t._v("前往关注爱回收公众号") ]), t._v(" "), s("p", [ t._v("服务咨询早知道") ]) ], 1) ], 1) : t._e(), t._v(" "), "error" === t.layerType ? s("div", [ s("p", {
                    staticClass: "title"
                }, [ t._v("领取失败") ]), t._v(" "), s("div", {
                    staticClass: "introduce"
                }, [ s("p", [ t._v("仅新注册用户可参加该活动") ]) ], 1) ], 1) : t._e(), t._v(" "), s("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: "qrcode" === t.layerType,
                        expression: "layerType === 'qrcode'"
                    } ]
                }, [ s("div", {
                    staticClass: "qr"
                }, [ s("canvas", {
                    staticClass: "canvas",
                    attrs: {
                        "canvas-id": "myQrcode",
                        eventid: "5"
                    },
                    on: {
                        longpress: t.saveImage
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "introduce"
                }, [ s("p", [ t._v("凭此二维码到指定门店领取礼品") ]), t._v(" "), s("p", [ t._v("可长按保存二维码") ]) ], 1), t._v(" "), s("button", {
                    staticClass: "button1",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.jumpToShopDetail
                    }
                }, [ t._v("\n            查看指定门店\n          ") ]), t._v(" "), s("div", {
                    staticClass: "tips"
                }, [ s("p", [ t._v("友情提示：每位用户仅可领取1次") ]), t._v(" "), s("p", [ t._v("门店每日库存有限，先到先得") ]) ], 1) ], 1) ]) ]) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    s7OC: function(t, e) {}
}, [ "UIlN" ]);