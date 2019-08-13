global.webpackJsonp([ 28 ], {
    T3Ee: function(t, s, a) {
        "use strict";
        var n = a("Gu7T"), e = a.n(n);
        s.a = {
            components: {},
            data: function() {
                return {
                    pageIndex: 0,
                    orderList: [],
                    hasFinish: !1
                };
            },
            computed: {},
            onShow: function() {
                this.getOrder(0);
            },
            methods: {
                getOrder: function(t, s) {
                    var a = this;
                    this.$axios_dubai({
                        url: "/jikexiu/repair/order-search",
                        params: {
                            pageIndex: t,
                            pageSize: 20
                        }
                    }).then(function(t) {
                        a.hasFinish = !0, t && t.length ? (t.map(function(t, s) {
                            var a = "";
                            t.submitMalfunctions.forEach(function(t, s) {
                                a = "" + (0 === s ? a + t.malfunctionSubName : a + ", " + t.malfunctionSubName);
                            }), t.showTip = a;
                        }), a.orderList = s ? [].concat(e()(a.orderList), e()(t)) : t) : s || (a.orderList = []);
                    }).catch(function(t) {
                        console.log(t), a.hasFinish = !0;
                    });
                },
                handleJump: function(t) {
                    wx.navigateTo({
                        url: {
                            coupon: "/pages/nbs-coupon/main",
                            nbs: "/pages/nbs-category/main"
                        }[t]
                    });
                },
                handleOrder: function(t) {
                    wx.navigateTo({
                        url: "/pages/nbs-orderdetail/main?orderNo=" + t
                    });
                },
                doReachBottom: function() {
                    this.pageIndex++, this.getOrder(this.pageIndex, !0);
                }
            }
        };
    },
    UJN7: function(t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), e = a.n(n), i = a("qty1");
        new e.a(i.a).$mount(), s.default = {
            config: {
                navigationBarTitleText: "我的维修"
            }
        };
    },
    h8IT: function(t, s) {},
    qty1: function(t, s, a) {
        "use strict";
        var n = a("T3Ee"), e = a("yjCQ");
        var i = function(t) {
            a("h8IT");
        }, o = a("ybqe")(n.a, e.a, i, "data-v-7dddde08", null);
        s.a = o.exports;
    },
    yjCQ: function(t, s, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return t.hasFinish ? a("div", {
                    staticClass: "orderlist-box"
                }, [ a("div", {
                    staticClass: "coupon",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(s) {
                            t.handleJump("coupon");
                        }
                    }
                }, [ t._v("\n    维修优惠券\n  ") ]), t._v(" "), t.orderList.length ? a("div", {
                    staticClass: "content"
                }, [ a("div", {
                    staticClass: "sub-title"
                }, [ t._v("维修订单") ]), t._v(" "), a("scroll-view", {
                    attrs: {
                        "scroll-y": "",
                        eventid: "2"
                    },
                    on: {
                        scrolltolower: t.doReachBottom
                    }
                }, t._l(t.orderList, function(s, n) {
                    return a("div", {
                        key: n,
                        staticClass: "info",
                        attrs: {
                            eventid: "1-" + n
                        },
                        on: {
                            click: function(a) {
                                t.handleOrder(s.orderNo);
                            }
                        }
                    }, [ a("div", {
                        staticClass: "time"
                    }, [ t._v("\n          " + t._s(s.createDateStr) + "\n          "), 1 === s.status ? a("span", {
                        staticClass: "success"
                    }, [ t._v("下单成功，敬请到店") ]) : t._e(), t._v(" "), 2 === s.status ? a("span", {
                        staticClass: "done"
                    }, [ t._v("订单成功") ]) : t._e(), t._v(" "), 3 === s.status ? a("span", [ t._v("订单取消") ]) : t._e() ]), t._v(" "), a("div", {
                        staticClass: "detail"
                    }, [ a("p", {
                        staticClass: "name"
                    }, [ t._v(t._s(s.productName)) ]), t._v(" "), a("p", {
                        staticClass: "desc"
                    }, [ t._v(t._s(s.showTip)) ]), t._v(" "), a("p", {
                        staticClass: "date"
                    }, [ t._v(t._s(s.appointmentTimeStr)) ]), t._v(" "), a("p", {
                        staticClass: "shop"
                    }, [ t._v(t._s(s.shop.name)) ]) ], 1), t._v(" "), a("div", {
                        staticClass: "total"
                    }, [ a("span", {
                        staticClass: "price"
                    }, [ t._v(t._s(s.amount > 0 ? s.amount : "待检测")) ]), t._v(" "), a("span", {
                        staticClass: "title"
                    }, [ t._v("合计:") ]) ]) ]);
                })) ], 1) : a("div", {
                    staticClass: "empty",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(s) {
                            t.handleJump("nbs");
                        }
                    }
                }, [ a("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs/empty.png",
                        alt: ""
                    }
                }), t._v(" "), a("p", [ t._v("预约维修") ]) ], 1) ]) : t._e();
            },
            staticRenderFns: []
        };
        s.a = n;
    }
}, [ "UJN7" ]);