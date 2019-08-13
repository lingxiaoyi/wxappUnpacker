global.webpackJsonp([ 25 ], {
    D9Od: function(t, n, a) {
        "use strict";
        var e = a("Dd8w"), s = a.n(e), i = a("NYxO");
        n.a = {
            components: {},
            data: function() {
                return {};
            },
            computed: s()({}, Object(i.d)({
                isIphoneX: function(t) {
                    return t.global.isIphoneX;
                },
                checkedOptions: function(t) {
                    return t.maintain.checkedOptions;
                },
                repairInfo: function(t) {
                    return t.maintain.repairInfo;
                },
                storeInfo: function(t) {
                    return t.maintain.repairStore;
                }
            })),
            mounted: function() {
                this.setMaintainInfo([ "checkedOptions", [] ]);
            },
            onUnload: function() {
                wx.navigateBack({
                    delta: 3
                });
            },
            methods: s()({}, Object(i.b)([ "setMaintainInfo" ]), {
                call: function() {
                    wx.makePhoneCall({
                        phoneNumber: "4001616365"
                    });
                },
                getOrderDetail: function() {
                    var t = this.$mp.query.orderNo;
                    wx.navigateTo({
                        url: "/pages/nbs-orderdetail/main?orderNo=" + t
                    });
                }
            })
        };
    },
    HU1j: function(t, n, a) {
        "use strict";
        var e = a("D9Od"), s = a("Vz1J");
        var i = function(t) {
            a("qPol");
        }, o = a("ybqe")(e.a, s.a, i, "data-v-5a81d89f", null);
        n.a = o.exports;
    },
    PgzH: function(t, n, a) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var e = a("5nAL"), s = a.n(e), i = a("HU1j"), o = a("jV6A"), r = getApp();
        s.a.prototype._piwik = function() {
            for (var t = arguments.length, n = Array(t), a = 0; a < t; a++) n[a] = arguments[a];
            return o.j.apply(void 0, [ r.globalData.scene ].concat(n));
        }, new s.a(i.a).$mount(), n.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "下单成功",
                backgroundColor: "#F8F8F8",
                backgroundTextStyle: "light"
            }
        };
    },
    Vz1J: function(t, n, a) {
        "use strict";
        var e = {
            render: function() {
                var t = this, n = t.$createElement, a = t._self._c || n;
                return a("div", {
                    staticClass: "maintain-success",
                    class: t.isIphoneX && "isIphoneX"
                }, [ a("div", {
                    staticClass: "header"
                }, [ a("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/nbs/success.png",
                        alt: ""
                    }
                }), t._v(" "), a("p", {
                    staticClass: "text"
                }, [ t._v("下单成功") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "store"
                }, [ a("p", {
                    staticClass: "name"
                }, [ t._v(t._s(t.storeInfo.name)) ]), t._v(" "), a("p", {
                    staticClass: "date"
                }, [ t._v("预约时间: " + t._s(t.storeInfo.repairDate)) ]), t._v(" "), a("p", {
                    staticClass: "address"
                }, [ t._v(t._s(t.storeInfo.address)) ]) ], 1), t._v(" "), a("div", {
                    staticClass: "tips"
                }, [ t._v("\n    注意事项："), a("br"), t._v("\n    1. 到店维修前，请事先备份数据以防万一"), a("br"), t._v("\n    2. 如需使用优惠券，需在付款前告知门店工作人员"), a("br"), t._v("\n    3. 如需更改到店维修时间，请提前联系客服"), a("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.call
                    }
                }, [ t._v("400-1616-365") ]), a("br") ], 1), t._v(" "), a("div", {
                    staticClass: "footer",
                    class: t.isIphoneX && "isIphoneX"
                }, [ a("p", {
                    staticClass: "submit",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.getOrderDetail
                    }
                }, [ t._v("\n      查看订单\n    ") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        n.a = e;
    },
    qPol: function(t, n) {}
}, [ "PgzH" ]);