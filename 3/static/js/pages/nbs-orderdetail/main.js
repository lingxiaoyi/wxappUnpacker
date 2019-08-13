global.webpackJsonp([ 29 ], {
    EJh4: function(t, s, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return t.orderInfo.orderNo ? a("div", {
                    staticClass: "orderdetail-box"
                }, [ a("div", {
                    staticClass: "top"
                }, [ a("div", {
                    staticClass: "status"
                }, [ a("img", {
                    attrs: {
                        src: 3 === t.orderInfo.status ? "https://sr.aihuishou.com/miniapps/earth/nbs/detail-cancel.png" : "https://sr.aihuishou.com/miniapps/earth/nbs/detail-success.png",
                        alt: ""
                    }
                }), t._v("\n      " + t._s(1 === t.orderInfo.status ? "下单成功，敬请到店" : 2 === t.orderInfo.status ? "订单完成" : "订单取消 ") + "\n      "), a("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleContact
                    }
                }, [ t._v("联系客服") ]) ]), t._v(" "), 1 === t.orderInfo.status ? a("p", [ t._v("\n      1. 到店维修前，请事先备份数据以防万一 "), a("br"), t._v("\n      2. 如需使用优惠券，需在付款前告知门店工作人员 "), a("br"), t._v("\n      3. 如需更改到店维修时间，请提前联系客服\n    ") ], 1) : a("p", [ t._v("\n      非常感谢您的信任，如对服务不满意请联系客服\n    ") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "product-info"
                }, [ a("p", {
                    staticClass: "name"
                }, [ t._v(t._s(t.orderInfo.productName)) ]), t._v(" "), a("div", t._l(t.orderInfo.submitMalfunctions, function(s, n) {
                    return a("div", {
                        key: n,
                        staticClass: "info"
                    }, [ a("div", {
                        staticClass: "desc"
                    }, [ t._v(t._s(s.malfunctionSubName)) ]), t._v(" "), a("div", {
                        staticClass: "detail"
                    }, [ t._v(t._s(s.solutionName)) ]), t._v(" "), a("div", {
                        staticClass: "price"
                    }, [ t._v(t._s(s.price > 0 ? s.price : "待检测")) ]) ]);
                })), t._v(" "), a("div", {
                    staticClass: "total"
                }, [ a("span", {
                    staticClass: "desc"
                }, [ t._v("合计") ]), t._v(" "), a("span", {
                    staticClass: "tip"
                }, [ t._v("（维修成功后支付）") ]), t._v(" "), a("span", {
                    staticClass: "price"
                }, [ t._v(t._s(t.orderInfo.amount > 0 ? t.orderInfo.amount : "待检测")) ]) ]) ], 1), t._v(" "), a("div", {
                    staticClass: "address-info"
                }, [ a("div", {
                    staticClass: "name"
                }, [ t._v("\n      " + t._s(t.orderInfo.shop.name) + "\n    ") ]), t._v(" "), a("div", {
                    staticClass: "desc"
                }, [ t._v("\n      " + t._s(t.orderInfo.shop.address) + "\n    ") ]), t._v(" "), a("div", {
                    staticClass: "desc mobile",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(s) {
                            t.handleContact("shop");
                        }
                    }
                }, [ t._v("\n      " + t._s(t.mobile) + "\n    ") ]), t._v(" "), a("div", {
                    staticClass: "date"
                }, [ a("span", [ t._v("预约时间：") ]), a("span", {
                    staticClass: "time"
                }, [ t._v(t._s(t.orderInfo.appointmentTimeStr)) ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "bottom"
                }, [ a("p", [ t._v("订单编号：" + t._s(t.orderInfo.orderNo) + " ") ]), t._v(" "), a("p", [ t._v("下单时间：" + t._s(t.orderInfo.createDateStr)) ]) ], 1) ]) : t._e();
            },
            staticRenderFns: []
        };
        s.a = n;
    },
    HBY4: function(t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), e = a.n(n), i = a("tAd2");
        new e.a(i.a).$mount(), s.default = {
            config: {
                navigationBarTitleText: "订单详情"
            }
        };
    },
    KzHE: function(t, s, a) {
        "use strict";
        s.a = {
            data: function() {
                return {
                    orderInfo: {}
                };
            },
            computed: {
                mobile: function() {
                    return this.orderInfo.shop ? this.orderInfo.shop.mobile.replace(",", " 转分机号 ") : "";
                }
            },
            mounted: function() {
                var t = this;
                this.$axios_dubai({
                    url: "/jikexiu/repair/order-detail/" + this.$mp.query.orderNo
                }).then(function(s) {
                    t.orderInfo = s;
                });
            },
            methods: {
                handleContact: function(t) {
                    var s = "";
                    s = "shop" === t ? this.orderInfo.shop.mobile : "400-1616-365", wx.makePhoneCall({
                        phoneNumber: s
                    });
                }
            }
        };
    },
    is6j: function(t, s) {},
    tAd2: function(t, s, a) {
        "use strict";
        var n = a("KzHE"), e = a("EJh4");
        var i = function(t) {
            a("is6j");
        }, o = a("ybqe")(n.a, e.a, i, "data-v-5efbca3b", null);
        s.a = o.exports;
    }
}, [ "HBY4" ]);