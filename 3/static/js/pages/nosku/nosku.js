global.webpackJsonp([ 22 ], {
    "0lUt": function(n, t, a) {
        "use strict";
        var e = {
            render: function() {
                var n = this, t = n.$createElement, a = n._self._c || t;
                return a("div", {
                    staticClass: "no-sku-container"
                }, [ a("div", {
                    staticClass: "sku-wrapper"
                }, [ a("img", {
                    attrs: {
                        src: n.noResult
                    }
                }), n._v(" "), a("span", [ n._v("暂无报价") ]), n._v(" "), a("span", [ n._v("是不是物品描述出错了？") ]), n._v(" "), a("div", {
                    staticClass: "try-again",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: n.handleTryAgain
                    }
                }, [ n._v("\n      重新询价\n    ") ]), n._v(" "), a("div", {
                    staticClass: "back-home",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: n.handleBackHome
                    }
                }, [ n._v("\n      返回首页\n    ") ]) ]) ]);
            },
            staticRenderFns: []
        };
        t.a = e;
    },
    Obg8: function(n, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = a("5nAL"), i = a.n(e), o = a("SwK9");
        new i.a(o.a).$mount(), t.default = {
            config: {
                backgroundColor: "#f5f5f5",
                backgroundTextStyle: "light",
                navigationBarTitleText: "爱回收",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black"
            }
        };
    },
    SwK9: function(n, t, a) {
        "use strict";
        var e = a("fhpl"), i = a("0lUt");
        var o = function(n) {
            a("jono");
        }, r = a("ybqe")(e.a, i.a, o, "data-v-48147d34", null);
        t.a = r.exports;
    },
    fhpl: function(n, t, a) {
        "use strict";
        t.a = {
            name: "index",
            data: function() {
                return {
                    noResult: "https://sr.aihuishou.com/miniapps/earth/public/no-result.png"
                };
            },
            onLoad: function(n) {
                n.name && wx.setNavigationBarTitle({
                    title: n.name
                });
            },
            methods: {
                handleTryAgain: function() {
                    wx.navigateBack();
                },
                handleBackHome: function() {
                    wx.redirectTo({
                        url: "/pages/index/index"
                    });
                }
            }
        };
    },
    jono: function(n, t) {}
}, [ "Obg8" ]);