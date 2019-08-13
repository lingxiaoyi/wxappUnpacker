global.webpackJsonp([ 12 ], {
    "8y81": function(t, e) {},
    IYwz: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), o = n.n(a), s = n("RBit"), i = n("IcnI");
        o.a.prototype.$store = i.a, new o.a(s.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: "门店预约"
            }
        };
    },
    IgIk: function(t, e, n) {
        "use strict";
        var a = n("Xxa5"), o = n.n(a), s = n("exGp"), i = n.n(s), r = n("Dd8w"), c = n.n(r), l = n("vLgD"), d = n("0xDb"), u = (n.n(d), 
        n("VsUZ")), h = n("NYxO"), p = getApp();
        e.a = {
            data: function() {
                return {
                    bannerImg: "",
                    storeDateList: [],
                    formartedStoreTime: [],
                    formartedStoreDate: [],
                    timeStoreColumnIndex: 0,
                    dateStoreColumnIndex: 0,
                    userInfo: {},
                    objBasicInfo: {},
                    productInfo: {},
                    nowSelectShop: {}
                };
            },
            computed: c()({}, Object(h.c)([ "cityInfo" ]), {
                hasCard: function() {
                    return !(!this.objBasicInfo.id && !this.productInfo.id);
                },
                cardInfo: function() {
                    return this.productInfo.id ? (this.productInfo.imgUrl = decodeURIComponent(this.productInfo.imgUrl), 
                    this.productInfo) : (this.objBasicInfo.imgUrl && (this.objBasicInfo.imgUrl = decodeURIComponent(this.objBasicInfo.imgUrl)), 
                    this.objBasicInfo);
                },
                isNearest: function() {
                    return this.nowSelectShop.id === p.globalData.shopList[0].id;
                }
            }),
            mounted: function() {
                var t = this;
                return i()(o.a.mark(function e() {
                    var n;
                    return o.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.initShopDate(), e.next = 3, Object(u.b)();

                          case 3:
                            (n = e.sent) && n.id ? t.objBasicInfo = n : t.objBasicInfo = {};

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onShow: function() {
                var t = this, e = p.globalData;
                console.log(e), this.initUserInfo(), Object(l.a)({
                    url: "/trade-in/product/shop-banner"
                }).then(function(e) {
                    console.log(e), e && e.imgUrl ? t.bannerImg = e.imgUrl : t.bannerImg = "";
                }), this.nowSelectShop = e.shopList.find(function(t) {
                    return parseInt(t.id, 10) === parseInt(e.shopid, 10);
                }) || {}, e.productInfo && (this.productInfo = e.productInfo);
            },
            methods: c()({}, Object(h.b)([ "setStoreInfo" ]), {
                handleSumbit: function(t) {
                    var e = this.nowSelectShop, n = this.storeDateList, a = this.formartedStoreTime, o = this.productInfo, s = this.hasCard, i = this.objBasicInfo, r = this.formartedStoreDate, c = this.timeStoreColumnIndex, l = this.dateStoreColumnIndex, d = o.id ? o : i;
                    if (this.setStoreInfo([ "shopid", e.id ]), this.setStoreInfo([ "storeDateList", n ]), 
                    this.setStoreInfo([ "formartedStoreTime", a ]), this.setStoreInfo([ "formartedStoreDate", r ]), 
                    this.setStoreInfo([ "timeStoreColumnIndex", c ]), this.setStoreInfo([ "dateStoreColumnIndex", l ]), 
                    !s) return wx.showToast({
                        title: "请选择机型再提交",
                        icon: "none"
                    });
                    wx.navigateTo({
                        url: "/pages/detail/detail?productId=" + d.id
                    });
                },
                handleChangeShop: function() {
                    this._piwik("pages/reservation/reservation", "miniapp/shopreservation", "changeshopclick", "abtest"), 
                    wx.navigateTo({
                        url: "/pages/shop/main?cityId=" + this.cityInfo.id + "&isCheckShop=true"
                    });
                },
                handleChangeProduct: function() {
                    this._piwik("pages/reservation/reservation", "miniapp/shopreservation", "changeproductclick", "abtest"), 
                    wx.navigateTo({
                        url: "/pages/category/category?categoryId=1&isFromReservation=1"
                    });
                },
                handleClickPhone: function() {
                    this.setStoreInfo([ "storeDateList", [ 1, 2, 3 ] ]), wx.makePhoneCall({
                        phoneNumber: this.nowSelectShop.mobile
                    });
                },
                handleClickMap: function() {
                    var t = this.nowSelectShop, e = Object(d.bd09togcj02)(t.latitude, t.longitude);
                    wx.openLocation({
                        latitude: e[0],
                        longitude: e[1],
                        name: t.name,
                        address: t.address
                    });
                },
                getPhoneNumber: function(t) {
                    var e = this;
                    return i()(o.a.mark(function n() {
                        return o.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e._piwik("pages/reservation/reservation", "miniapp/shopreservation", "vcodeclick", "abtest"), 
                                !t.target.iv || !t.target.encryptedData) {
                                    n.next = 12;
                                    break;
                                }
                                return n.prev = 2, n.next = 5, Object(l.a)({
                                    url: "/wxopen/decrypt-phone-number-login",
                                    method: "POST",
                                    data: {
                                        encryptedData: t.target.encryptedData,
                                        iv: t.target.iv,
                                        scene: 3
                                    }
                                });

                              case 5:
                                n.sent && e.initUserInfo(), n.next = 12;
                                break;

                              case 9:
                                n.prev = 9, n.t0 = n.catch(2), console.log(n.t0);

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n, e, [ [ 2, 9 ] ]);
                    }))();
                },
                initShopDate: function() {
                    var t = this;
                    return i()(o.a.mark(function e() {
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t._getShopTime().then(function(e) {
                                    console.log(e), e && t.formatShopDate(e);
                                });

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                initUserInfo: function() {
                    var t = this;
                    this._getUserInfo().then(function(e) {
                        e && (t.userInfo = e, p.saveCache("userLoginInfo", {
                            token: e.mobileLoginToken,
                            mobile: e.mobile
                        }));
                    });
                },
                _getShopTime: function() {
                    return Object(l.a)({
                        url: "/foundation/reservation/shoptime"
                    }).catch(function() {
                        return null;
                    });
                },
                _getUserInfo: function() {
                    return Object(l.a)({
                        url: "/user"
                    }).catch(function() {
                        return null;
                    });
                },
                handleStorePickerChange: function(t) {
                    console.log(t, "change");
                    var e = t.mp.detail.value;
                    this.storeDateIndex = e, this.timeStoreColumnIndex = e[1], this.dateStoreColumnIndex = e[0];
                },
                formatShopDate: function(t) {
                    var e = void 0, n = [];
                    e = t.map(function(t) {
                        var e = [], a = {};
                        return t.items.forEach(function(t) {
                            var n = {};
                            t.enable && (n.name = t.durationTime, n.startTime = t.startTime, n.endTime = t.endTime, 
                            e.push(n));
                        }), n.push(e), a.name = new Date(t.date).pattern("MM月dd日"), a;
                    }), n[0].length || (e.shift(), n.shift()), this.formartedStoreTime = n, this.formartedStoreDate = e, 
                    this.storeDateList = [ e, n[0] ], this.storeDateIndex = [ e[0], n[0][0] ];
                },
                handleStorePickerColumnChange: function(t) {
                    console.log(t);
                    var e = t.mp.detail.value, n = t.mp.detail.column;
                    0 === n && (this.timeStoreColumnIndex = 0, this.dateStoreColumnIndex = e, this.storeDateList = [ this.formartedStoreDate, this.formartedStoreTime[e] ]), 
                    1 === n && (this.timeStoreColumnIndex = e);
                }
            })
        };
    },
    RBit: function(t, e, n) {
        "use strict";
        var a = n("IgIk"), o = n("iucB");
        var s = function(t) {
            n("8y81"), n("iwWQ");
        }, i = n("ybqe")(a.a, o.a, s, "data-v-59238394", null);
        e.a = i.exports;
    },
    iucB: function(t, e, n) {
        "use strict";
        var a = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "shop-container"
                }, [ n("div", {
                    staticClass: "top"
                }, [ n("p", {
                    staticClass: "title"
                }, [ t._v("预约门店") ]), t._v(" "), n("div", {
                    staticClass: "info"
                }, [ n("img", {
                    attrs: {
                        src: t.nowSelectShop.imgUrl ? t.nowSelectShop.imgUrl : "https://static.aihuishou.com/image?file=5aec066bb4efb26c180000e1",
                        alt: ""
                    }
                }), t._v(" "), t.isNearest ? n("span", {
                    staticClass: "tag"
                }, [ t._v("离你最近") ]) : t._e(), t._v(" "), n("span", {
                    staticClass: "name"
                }, [ t._v(t._s(t.nowSelectShop.name)) ]), t._v(" "), t.nowSelectShop.disStr ? n("span", {
                    staticClass: "distance"
                }, [ t._v("距您" + t._s(t.nowSelectShop.disStr)) ]) : t._e(), t._v(" "), n("span", {
                    staticClass: "change",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleChangeShop
                    }
                }, [ t._v("更换门店") ]) ]), t._v(" "), n("div", {
                    staticClass: "address",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleClickMap
                    }
                }, [ n("p", {
                    staticClass: "detail"
                }, [ t._v("\n        " + t._s(t.nowSelectShop.address) + "\n      ") ]), t._v(" "), n("span", {
                    staticClass: "line"
                }), t._v(" "), n("span", {
                    staticClass: "call",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.handleClickPhone(e);
                        }
                    }
                }) ], 1) ], 1), t._v(" "), n("div", {
                    staticClass: "bottom"
                }, [ n("p", {
                    staticClass: "title"
                }, [ t._v("回收机型") ]), t._v(" "), n("div", {
                    staticClass: "info",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.handleChangeProduct
                    }
                }, [ n("img", {
                    attrs: {
                        src: t.cardInfo.imgUrl ? t.cardInfo.imgUrl : "https://sr.aihuishou.com/miniapps%2Fearth%2Freservation%2Fphone.png",
                        alt: ""
                    }
                }), t._v(" "), t.hasCard ? [ !t.productInfo.id && t.objBasicInfo.id ? n("span", {
                    staticClass: "tag"
                }, [ t._v("本机机型") ]) : t._e(), t._v(" "), n("span", {
                    staticClass: "name"
                }, [ t._v(t._s(t.cardInfo.name)) ]), t._v(" "), n("span", {
                    staticClass: "price"
                }, [ t._v("最高回收价: "), n("span", {
                    staticClass: "number"
                }, [ t._v(t._s(t.cardInfo.topPrice)) ]) ]), t._v(" "), n("span", {
                    staticClass: "change"
                }, [ t._v("更换机型") ]) ] : [ n("span", {
                    staticClass: "desc"
                }, [ t._v("暂无回收机型") ]), t._v(" "), n("span", {
                    staticClass: "select"
                }, [ t._v("选择回收机型") ]) ] ], 2) ], 1), t._v(" "), n("div", {
                    staticClass: "submit-box"
                }, [ n("div", {
                    staticClass: "single"
                }, [ n("span", {
                    staticClass: "desc"
                }, [ t._v("手机号") ]), t._v(" "), t.userInfo.mobile ? n("span", [ t._v(t._s(t.userInfo.mobile)) ]) : n("button", {
                    staticClass: "no-login",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "4"
                    },
                    on: {
                        getphonenumber: t.getPhoneNumber
                    }
                }, [ t._v("\n        点击授权\n      ") ]) ], 1), t._v(" "), n("div", {
                    staticClass: "single"
                }, [ n("span", {
                    staticClass: "desc"
                }, [ t._v("预约时间") ]), t._v(" "), t.storeDateList.length ? n("picker", {
                    staticClass: "date-select",
                    attrs: {
                        mode: "multiSelector",
                        value: [ t.dateStoreColumnIndex, t.timeStoreColumnIndex ],
                        range: t.storeDateList,
                        "range-key": "name",
                        eventid: "5"
                    },
                    on: {
                        change: t.handleStorePickerChange,
                        columnchange: t.handleStorePickerColumnChange
                    }
                }, [ t.formartedStoreDate && t.formartedStoreDate.length ? n("span", [ t._v("\n          " + t._s(t.formartedStoreDate[t.dateStoreColumnIndex].name) + "-" + t._s(t.formartedStoreTime[t.dateStoreColumnIndex][t.timeStoreColumnIndex].name) + "\n        ") ]) : t._e() ]) : t._e() ], 1) ]), t._v(" "), n("img", {
                    staticClass: "banner",
                    attrs: {
                        src: t.bannerImg,
                        alt: ""
                    }
                }), t._v(" "), n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "6"
                    },
                    on: {
                        submit: t.handleSumbit
                    }
                }, [ n("button", {
                    staticClass: "submit-btn",
                    attrs: {
                        formType: "submit"
                    }
                }, [ t._v("立即预约") ]) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    iwWQ: function(t, e) {}
}, [ "IYwz" ]);