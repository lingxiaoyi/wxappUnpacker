global.webpackJsonp([ 14 ], {
    B4Lm: function(t, e) {},
    FPHV: function(t, e, n) {
        "use strict";
        var o = n("gyez"), a = n("WlSz");
        var i = function(t) {
            n("B4Lm"), n("ewX6");
        }, s = n("ybqe")(o.a, a.a, i, "data-v-14d75f6d", null);
        e.a = s.exports;
    },
    WlSz: function(t, e, n) {
        "use strict";
        var o = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "shop-container",
                    class: t.computedShopList.length ? "" : "empty-shop-box"
                }, [ t.computedShopList.length ? n("div", {
                    staticClass: "have-shop"
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
                }, [ t._v("\n          " + t._s(t.nowSelectShop.address) + "\n        ") ]), t._v(" "), n("span", {
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
                    staticClass: "submit-box"
                }, [ n("div", {
                    staticClass: "single"
                }, [ n("span", {
                    staticClass: "desc"
                }, [ t._v("手机号") ]), t._v(" "), t.userInfo.mobile ? n("span", [ t._v(t._s(t.userInfo.mobile)) ]) : n("button", {
                    staticClass: "no-login",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "3"
                    },
                    on: {
                        getphonenumber: t.getPhoneNumber
                    }
                }, [ t._v("\n          点击授权\n        ") ]) ], 1), t._v(" "), n("div", {
                    staticClass: "single"
                }, [ n("span", {
                    staticClass: "desc time-check"
                }, [ t._v("预约时间(必选)") ]), t._v(" "), t.storeDateList.length ? n("picker", {
                    staticClass: "date-select",
                    attrs: {
                        mode: "multiSelector",
                        value: [ t.dateStoreColumnIndex, t.timeStoreColumnIndex ],
                        range: t.storeDateList,
                        "range-key": "name",
                        eventid: "4"
                    },
                    on: {
                        change: t.handleStorePickerChange,
                        columnchange: t.handleStorePickerColumnChange
                    }
                }, [ t.formartedStoreDate && t.formartedStoreDate.length && t.pickerStatus ? n("span", [ t._v("\n          " + t._s(t.formartedStoreDate[t.dateStoreColumnIndex].name) + "-" + t._s(t.formartedStoreTime[t.dateStoreColumnIndex][t.timeStoreColumnIndex].name) + "\n        ") ]) : t._e(), t._v(" "), t.pickerStatus ? t._e() : n("span", {
                    staticClass: "empty-text"
                }, [ t._v("请选择>") ]) ]) : t._e() ], 1) ]), t._v(" "), n("img", {
                    staticClass: "banner",
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/beforehand/pic%402x.png",
                        alt: ""
                    }
                }), t._v(" "), n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "5"
                    },
                    on: {
                        submit: t.handleSumbit
                    }
                }, [ n("button", {
                    staticClass: "submit-btn",
                    attrs: {
                        formType: "submit"
                    }
                }, [ t._v("立即预约") ]) ], 1) ], 1) : t._e(), t._v(" "), t.computedShopList.length ? t._e() : n("div", {
                    staticClass: "empty-shop"
                }, [ n("p", [ n("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/beforehand/empty-shop.png",
                        alt: ""
                    }
                }) ]), t._v(" "), n("p", [ t._v("当前城市暂无可预约门店") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = o;
    },
    ewX6: function(t, e) {},
    gyez: function(t, e, n) {
        "use strict";
        var o = n("Xxa5"), a = n.n(o), i = n("exGp"), s = n.n(i), r = n("Dd8w"), c = n.n(r), l = n("vLgD"), u = n("0xDb"), h = (n.n(u), 
        n("VsUZ")), d = n("NYxO"), p = getApp();
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
                    nowSelectShop: {},
                    pickerStatus: !1
                };
            },
            computed: c()({}, Object(d.c)([ "computedShopList", "cityInfo" ]), {
                hasCard: function() {
                    return !(!this.objBasicInfo.id && !this.productInfo.id);
                },
                isNearest: function() {
                    return this.nowSelectShop.id === this.computedShopList[0].id;
                }
            }),
            mounted: function() {
                var t = this;
                return s()(a.a.mark(function e() {
                    var n;
                    return a.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.initShopDate(), e.next = 3, Object(h.b)();

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
                var t = this;
                this.initUserInfo(), Object(l.a)({
                    url: "/trade-in/product/shop-banner"
                }).then(function(e) {
                    console.log(e), e && e.imgUrl ? t.bannerImg = e.imgUrl : t.bannerImg = "";
                });
                var e = p.globalData.inquiryInfo.shopid;
                console.log("id", e), this.nowSelectShop = e ? this.computedShopList.find(function(t) {
                    return t.id === e;
                }) : this.computedShopList[0];
            },
            onUnload: function() {
                this.pickerStatus = !1;
            },
            methods: c()({}, Object(d.b)([ "setStoreInfo", "doLoginWithButton" ]), {
                togglePicker: function() {
                    this.pickerStatus = !0;
                },
                handleSumbit: function(t) {
                    var e = this;
                    if (this.userInfo.mobile) if (this.pickerStatus) {
                        var n = this.formartedStoreTime[this.dateStoreColumnIndex][this.timeStoreColumnIndex];
                        this.$axios({
                            url: "/shop-reservation-order",
                            method: "POST",
                            params: {
                                contactMobile: this.userInfo.mobile,
                                shopId: this.nowSelectShop.id,
                                startTime: n.startTime,
                                endTime: n.endTime,
                                formId: t.target.formId
                            },
                            code: !0
                        }).then(function(t) {
                            0 === t.code ? (e._piwik("pages/reservation/reservation", "miniapp/bespeak", "bespeak_order"), 
                            wx.redirectTo({
                                url: "/pages/beforehand/beforehand"
                            })) : wx.showToast({
                                title: t.message,
                                icon: "none",
                                duration: 1500
                            });
                        });
                    } else wx.showToast({
                        icon: "none",
                        title: "请选择预约时间"
                    }); else wx.showToast({
                        icon: "none",
                        title: "请先完成手机号授权"
                    });
                },
                handleChangeShop: function() {
                    this._piwik("pages/reservation/reservation", "miniapp/bespeak", "select_store"), 
                    wx.navigateTo({
                        url: "/pages/shop/main?cityId=" + this.cityInfo.id + "&isCheckShop=true"
                    });
                },
                handleClickPhone: function() {
                    this.setStoreInfo([ "storeDateList", [ 1, 2, 3 ] ]), wx.makePhoneCall({
                        phoneNumber: this.nowSelectShop.mobile
                    });
                },
                handleClickMap: function() {
                    var t = this.nowSelectShop, e = Object(u.bd09togcj02)(t.latitude, t.longitude);
                    wx.openLocation({
                        latitude: e[0],
                        longitude: e[1],
                        name: t.name,
                        address: t.address
                    });
                },
                getPhoneNumber: function(t) {
                    var e = this;
                    return s()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!t.target.iv || !t.target.encryptedData) {
                                    n.next = 10;
                                    break;
                                }
                                return n.prev = 1, n.next = 4, e.doLoginWithButton([ t, e ]);

                              case 4:
                                e.initUserInfo(), n.next = 10;
                                break;

                              case 7:
                                n.prev = 7, n.t0 = n.catch(1), console.log(n.t0);

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, e, [ [ 1, 7 ] ]);
                    }))();
                },
                initShopDate: function() {
                    var t = this;
                    return s()(a.a.mark(function e() {
                        return a.a.wrap(function(e) {
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
                    this.pickerStatus = !0;
                    var e = t.mp.detail.value;
                    this.timeStoreColumnIndex = e[1], this.dateStoreColumnIndex = e[0];
                },
                formatShopDate: function(t) {
                    var e = [], n = [];
                    e = t.map(function(t) {
                        var e = [], o = {};
                        return t.items.forEach(function(t) {
                            var n = {};
                            t.enable && (n.name = t.durationTime, n.startTime = t.startTime, n.endTime = t.endTime, 
                            e.push(n));
                        }), n.push(e), o.name = new Date(t.date).pattern("MM月dd日"), o;
                    }), 0 === n[0].length && (e.shift(), n.shift()), this.formartedStoreTime = n, this.formartedStoreDate = e, 
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
    xj0v: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = n("5nAL"), a = n.n(o), i = n("FPHV"), s = n("IcnI");
        a.a.prototype.$store = s.a, new a.a(i.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: "门店预约"
            }
        };
    }
}, [ "xj0v" ]);