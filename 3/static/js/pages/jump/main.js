global.webpackJsonp([ 34 ], {
    BE66: function(t, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var e = a("5nAL"), i = a.n(e), s = a("a2TZ"), r = a("IcnI");
        i.a.prototype.$store = r.a, new i.a(s.a).$mount();
    },
    Ykxz: function(t, n, a) {
        "use strict";
        n.a = {
            mounted: function() {},
            methods: {
                handleJump: function() {
                    wx.navigateToMiniProgram({
                        appId: "wxde54a54a45c0e1b7",
                        path: decodeURIComponent(this.$root.$mp.query.url) || "/pages/index/main"
                    });
                }
            }
        };
    },
    a2TZ: function(t, n, a) {
        "use strict";
        var e = a("Ykxz"), i = a("wcFr");
        var s = function(t) {
            a("d5KL");
        }, r = a("ybqe")(e.a, i.a, s, "data-v-2a1a025a", null);
        n.a = r.exports;
    },
    d5KL: function(t, n) {},
    wcFr: function(t, n, a) {
        "use strict";
        var e = {
            render: function() {
                var t = this.$createElement, n = this._self._c || t;
                return n("div", {
                    staticClass: "content"
                }, [ n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/jump-banner.png",
                        alt: ""
                    }
                }), this._v(" "), n("p", [ this._v("是否去授权跳转换新机小程序") ]), this._v(" "), n("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: this.handleJump
                    }
                }, [ this._v("前往授权") ]) ], 1);
            },
            staticRenderFns: []
        };
        n.a = e;
    }
}, [ "BE66" ]);