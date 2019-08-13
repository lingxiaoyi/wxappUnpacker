global.webpackJsonp([ 15 ], {
    "+D0I": function(e, t) {},
    "1Gf6": function(e, t, n) {
        "use strict";
        var a = n("mvHQ"), o = n.n(a), r = n("Xxa5"), i = n.n(r), s = n("exGp"), c = n.n(s), u = n("VsUZ");
        t.a = {
            data: function() {
                return {
                    url: "",
                    shareInfo: {}
                };
            },
            computed: {},
            mounted: function() {
                var e = this;
                return c()(i.a.mark(function t() {
                    var n, a, o, r;
                    return i.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, Object(u.d)();

                          case 2:
                            return n = t.sent, t.next = 5, Object(u.i)();

                          case 5:
                            a = t.sent, (o = decodeURIComponent(e.$root.$mp.query.url) || "https://m.aihuishou.com").includes("?") ? o += "&mpName=earth" : o += "?mpName=earth", 
                            n && (r = n.mobileLoginToken, o = o + "&minitoken=" + encodeURIComponent(r)), a && (o = o + "&openid=" + encodeURIComponent(a.openId)), 
                            e.url = o;

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            onUnload: function() {
                this.url = "";
            },
            onShareAppMessage: function() {
                var e = this.shareInfo, t = e.title, n = e.path, a = e.imageUrl, o = e.link, r = "";
                return n ? r = n : o ? (o = o.replace(/https?/, "https"), r = "/pages/activity/private/private?url=" + encodeURIComponent(o)) : r = "/pages/activity/private/private?url=" + encodeURIComponent(this.url), 
                {
                    title: t,
                    path: r,
                    imageUrl: a,
                    success: function(e) {
                        console.log("分享成功!", e);
                    },
                    fail: function(e) {
                        console.log(e);
                    }
                };
            },
            methods: {
                bindMessage: function(e) {
                    console.log(o()(e) + "传入的shareMessage");
                    var t = e.target.data;
                    this.shareInfo = t[t.length - 1];
                }
            }
        };
    },
    MVee: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), o = n.n(a), r = n("ql42");
        new o.a(r.a).$mount(), t.default = {
            config: {
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "",
                backgroundColor: "#F7F7F7",
                backgroundTextStyle: "light"
            }
        };
    },
    SKRT: function(e, t, n) {
        "use strict";
        var a = {
            render: function() {
                var e = this.$createElement, t = this._self._c || e;
                return t("div", [ t("web-view", {
                    attrs: {
                        src: this.url,
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        message: this.bindMessage
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        t.a = a;
    },
    ql42: function(e, t, n) {
        "use strict";
        var a = n("1Gf6"), o = n("SKRT");
        var r = function(e) {
            n("+D0I");
        }, i = n("ybqe")(a.a, o.a, r, "data-v-8eb5bcba", null);
        t.a = i.exports;
    }
}, [ "MVee" ]);