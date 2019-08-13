global.webpackJsonp([ 13 ], {
    "/+i0": function(t, e, n) {
        "use strict";
        var o = n("Xxa5"), a = n.n(o), i = n("exGp"), r = n.n(i), s = n("Dd8w"), u = n.n(s), c = n("VsUZ"), l = n("vLgD"), f = n("NYxO"), d = getApp(), m = !1;
        e.a = {
            data: function() {
                return {
                    userInfo: {}
                };
            },
            mounted: function() {
                var t = this;
                Object(c.d)().then(function(e) {
                    e && (t.userInfo = e, wx.showToast({
                        title: "自动登录中",
                        icon: "none",
                        duration: 1500
                    }), setTimeout(function() {
                        t.handleJump();
                    }, 1500));
                });
            },
            methods: u()({}, Object(f.b)([ "doLoginWithButton" ]), {
                getPhoneNumber: function(t) {
                    var e = this;
                    return r()(a.a.mark(function n() {
                        var o;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!t.target.iv || !t.target.encryptedData) {
                                    n.next = 8;
                                    break;
                                }
                                return n.next = 3, e.doLoginWithButton([ t, e ]);

                              case 3:
                                (o = n.sent).mobile && (e.userInfo = o, d.saveCache("userLoginInfo", {
                                    token: o.mobileLoginToken,
                                    mobile: o.mobile
                                })), e.handleJump(), n.next = 9;
                                break;

                              case 8:
                                e.handleJump();

                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                handleJump: function() {
                    m || (m = !0, Object(l.a)({
                        url: "/mta/redirect-url",
                        params: {
                            scene: this.$mp.query.scene
                        }
                    }).then(function(t) {
                        setTimeout(function() {
                            m = !1;
                        }, 2e3), t && d.jumpToWebview(t);
                    }).catch(function() {
                        m = !1;
                    }));
                }
            })
        };
    },
    "/AeI": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n("5nAL"), a = n.n(o), i = n("dVdK"), r = n("IcnI");
        a.a.prototype.$store = r.a, new a.a(i.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: "授权登录"
            }
        };
    },
    QKjB: function(t, e) {},
    ZGM4: function(t, e, n) {
        "use strict";
        var o = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "login"
                }, [ n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/mta.png",
                        alt: ""
                    }
                }), t._v(" "), n("p", [ t._v("回收机登录确认") ]), t._v(" "), t.userInfo.mobileLoginToken ? n("div", {
                    staticClass: "confirm",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.handleJump
                    }
                }, [ t._v("登录") ]) : n("button", {
                    staticClass: "confirm",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "0"
                    },
                    on: {
                        getphonenumber: t.getPhoneNumber
                    }
                }, [ t._v("\n    登录\n  ") ]), t._v(" "), t.userInfo.mobileLoginToken ? t._e() : n("div", {
                    staticClass: "tips",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleJump
                    }
                }, [ t._v("取消登录") ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = o;
    },
    dVdK: function(t, e, n) {
        "use strict";
        var o = n("/+i0"), a = n("ZGM4");
        var i = function(t) {
            n("QKjB"), n("ltr+");
        }, r = n("ybqe")(o.a, a.a, i, "data-v-37509f0a", null);
        e.a = r.exports;
    },
    "ltr+": function(t, e) {}
}, [ "/AeI" ]);