global.webpackJsonp([ 16 ], {
    DdLl: function(t, s, e) {
        "use strict";
        var a = e("Ja9d"), n = e("HUyP");
        var i = function(t) {
            e("iNfT");
        }, o = e("ybqe")(a.a, n.a, i, "data-v-f8cdbda6", null);
        s.a = o.exports;
    },
    HUyP: function(t, s, e) {
        "use strict";
        var a = {
            render: function() {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", {
                    staticClass: "success-container"
                }, [ t._m(0), t._v(" "), e("div", {
                    staticClass: "bottom"
                }, [ t.productInfo && t.productInfo.name ? e("p", {
                    staticClass: "title"
                }, [ t._v("回收机型") ]) : t._e(), t._v(" "), t.productInfo && t.productInfo.name ? e("div", {
                    staticClass: "info"
                }, [ e("img", {
                    attrs: {
                        src: t.productInfo.imgUrl,
                        alt: ""
                    }
                }), t._v(" "), e("span", {
                    staticClass: "name"
                }, [ t._v(t._s(t.productInfo.name)) ]), t._v(" "), e("span", {
                    staticClass: "price"
                }, [ t._v("最高回收价: "), e("span", {
                    staticClass: "number"
                }, [ t._v(t._s(t.productInfo.topPrice)) ]) ]) ]) : t._e(), t._v(" "), e("div", {
                    staticClass: "detail-box"
                }, [ e("div", {
                    staticClass: "desc"
                }, [ t._v("预约门店") ]), t._v(" "), t.orderInfo.shop ? e("div", {
                    staticClass: "address",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.handleClickMap
                    }
                }, [ e("p", {
                    staticClass: "detail"
                }, [ t._v("\n          " + t._s(t.orderInfo.shop.address) + "\n        ") ]), t._v(" "), e("span", {
                    staticClass: "line"
                }), t._v(" "), e("span", {
                    staticClass: "call",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(s) {
                            s.stopPropagation(), t.handleClickPhone(s);
                        }
                    }
                }) ], 1) : t._e() ]), t._v(" "), e("div", {
                    staticClass: "detail-box"
                }, [ e("div", {
                    staticClass: "desc"
                }, [ t._v("预约信息") ]), t._v(" "), e("div", {
                    staticClass: "time"
                }, [ e("span", [ t._v("到店时间：") ]), t._v("\n        " + t._s(t.orderTime) + "\n      ") ]), t._v(" "), e("div", {
                    staticClass: "time"
                }, [ e("span", [ t._v("预约手机：") ]), t._v("\n        " + t._s(t.orderInfo.contactMobile) + "\n      ") ]) ]), t._v(" "), e("div", {
                    staticClass: "detail-box"
                }, [ e("div", {
                    staticClass: "desc"
                }, [ t._v("温馨提示") ]), t._v(" "), e("p", {
                    staticClass: "tip"
                }, [ t._v("前往门店前，记得带上您的身份证，满18岁才交易。") ]) ], 1) ], 1), t._v(" "), e("span", {
                    staticClass: "back",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleBack
                    }
                }, [ t._v("返回首页") ]), t._v(" "), e("span", {
                    staticClass: "cancel",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.handleCancel
                    }
                }, [ t._v("取消订单") ]) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {
                    staticClass: "top"
                }, [ s("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/reservation/success.png",
                        alt: ""
                    }
                }), this._v(" "), s("span", {
                    staticClass: "title"
                }, [ this._v("预约成功") ]), this._v("\n    请保持电话畅通，门店小哥回会联系您哦！\n  ") ]);
            } ]
        };
        s.a = a;
    },
    Ja9d: function(t, s, e) {
        "use strict";
        var a = e("vLgD"), n = e("0xDb");
        e.n(n);
        s.a = {
            data: function() {
                return {
                    orderInfo: {},
                    productInfo: {},
                    deltaNumber: 1
                };
            },
            computed: {
                orderTime: function() {
                    return this.formateTime(this.orderInfo);
                }
            },
            onShow: function() {
                var t = this;
                this.$root.$mp.query.isFromIndex && (this.deltaNumber = 1), Object(a.a)({
                    url: "/shop-reservation-order",
                    params: {
                        id: this.$root.$mp.query.id
                    }
                }).then(function(s) {
                    s && (t.orderInfo = s, t._getProductInfo(s.productId).then(function(s) {
                        s && (t.productInfo = s);
                    }));
                });
            },
            methods: {
                formateTime: function(t) {
                    var s = t.startTime, e = t.endTime;
                    return new Date(s).pattern("MM月dd日") + " " + this.toTwo(+new Date(s).getHours()) + ":00-" + this.toTwo(+new Date(e).getHours()) + ":00";
                },
                toTwo: function(t) {
                    return t > 9 ? t + "" : "0" + t;
                },
                handleClickPhone: function() {
                    wx.makePhoneCall({
                        phoneNumber: this.orderInfo.shop.mobile
                    });
                },
                handleClickMap: function() {
                    var t = this.orderInfo.shop, s = Object(n.bd09togcj02)(t.latitude, t.longitude);
                    wx.openLocation({
                        latitude: s[0],
                        longitude: s[1],
                        name: t.name,
                        address: t.address
                    });
                },
                handleBack: function() {
                    wx.navigateBack();
                },
                handleCancel: function() {
                    var t = this;
                    this._piwik("pages/success/main", "miniapp/shopreservationsuccess", "cancelreserveclick", "abtest"), 
                    wx.showActionSheet({
                        itemList: [ "信息填错, 重新下单", "取消预约" ],
                        success: function(s) {
                            var e = s.tapIndex;
                            t._piwik("pages/success/main", "miniapp/shopreservationsuccess", 0 === e ? "reorderclick" : "confirmcancelreserveclick", "abtest"), 
                            Object(a.a)({
                                url: "/shop-reservation-order/cancel",
                                method: "POST",
                                data: {
                                    id: t.orderInfo.id
                                }
                            }).then(function(s) {
                                wx.showToast({
                                    title: "取消成功",
                                    icon: "none"
                                }), setTimeout(function() {
                                    t.handleBack();
                                }, 1e3);
                            }).catch(function(t) {
                                wx.showToast({
                                    title: t,
                                    icon: "none"
                                });
                            });
                        }
                    });
                },
                _getProductInfo: function(t) {
                    return Object(a.a)({
                        url: "/product/getproduct",
                        params: {
                            productId: t
                        }
                    });
                }
            }
        };
    },
    iNfT: function(t, s) {},
    nYcb: function(t, s, e) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var a = e("5nAL"), n = e.n(a), i = e("DdLl");
        new n.a(i.a).$mount(), s.default = {
            config: {
                navigationBarTitleText: "预约成功"
            }
        };
    }
}, [ "nYcb" ]);