global.webpackJsonp([ 19 ], {
    "1u81": function(t, n, e) {
        "use strict";
        var a = e("hcis"), i = e("N85B");
        var r = function(t) {
            e("FBkQ");
        }, o = e("ybqe")(a.a, i.a, r, "data-v-d14d4822", null);
        n.a = o.exports;
    },
    FBkQ: function(t, n) {},
    N85B: function(t, n, e) {
        "use strict";
        var a = {
            render: function() {
                var t = this, n = t.$createElement, e = t._self._c || n;
                return e("div", {
                    staticClass: "sharem-container"
                }, [ e("div", {
                    staticClass: "before-model"
                }, [ t.isLogin ? t._e() : e("button", {
                    staticClass: "to-Mini",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "0"
                    },
                    on: {
                        getphonenumber: t.getPhoneNumber
                    }
                }), t._v(" "), t.isLogin ? e("button", {
                    staticClass: "to-Mini",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(n) {
                            t.setJoinInfo();
                        }
                    }
                }) : t._e(), t._v(" "), e("button", {
                    staticClass: "to-Main",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(n) {
                            t.handleOnNavTo("main");
                        }
                    }
                }) ], 1) ]);
            },
            staticRenderFns: []
        };
        n.a = a;
    },
    OBvx: function(t, n, e) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = e("5nAL"), i = e.n(a), r = e("1u81");
        new i.a(r.a).$mount(), n.default = {
            config: {
                navigationBarTitleText: "邀新领券",
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black"
            }
        };
    },
    hcis: function(t, n, e) {
        "use strict";
        var a = e("Xxa5"), i = e.n(a), r = e("exGp"), o = e.n(r), c = e("vLgD"), s = e("VsUZ");
        n.a = {
            data: function() {
                return {
                    isLogin: !1
                };
            },
            mounted: function() {
                var t = this;
                return o()(i.a.mark(function n() {
                    return i.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return n.next = 2, Object(s.i)();

                          case 2:
                            return n.next = 4, Object(s.d)();

                          case 4:
                            t.isLogin = !!n.sent;

                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n, t);
                }))();
            },
            methods: {
                handleOnNavTo: function(t) {
                    "main" === t && wx.redirectTo({
                        url: "/pages/activity/private/private?url=" + encodeURIComponent("https://page.aihuishou.com/renderer/?activityId=168")
                    });
                },
                getPhoneNumber: function(t) {
                    var n = this;
                    return o()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!t.target.iv || !t.target.encryptedData) {
                                    e.next = 5;
                                    break;
                                }
                                return e.next = 3, Object(s.a)(t);

                              case 3:
                                e.sent && (n.isLogin = !0, n.setJoinInfo());

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e, n);
                    }))();
                },
                setJoinInfo: function() {
                    var t = this;
                    return o()(i.a.mark(function n() {
                        var e;
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return e = null, n.next = 3, t.join();

                              case 3:
                                (e = n.sent) && e.id && wx.navigateToMiniProgram({
                                    appId: "wx1d0bf756d8c83d75",
                                    path: "/pages/activity/share-coupon/main?recordId=" + e.id,
                                    extraData: {
                                        point: "sharecoupon"
                                    },
                                    envVersion: "develop"
                                });

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                join: function() {
                    var t = null;
                    try {
                        t = Object(c.a)({
                            url: "/invite-promotion/join",
                            method: "POST"
                        }, []);
                    } catch (t) {
                        console.log(t);
                    }
                    return t;
                }
            }
        };
    }
}, [ "OBvx" ]);