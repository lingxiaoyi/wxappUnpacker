global.webpackJsonp([ 4 ], {
    "+9ee": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n("5nAL"), a = n.n(o), i = n("3+zl"), s = n("IcnI"), r = n("ozJE");
        Date.prototype.pattern = function(e) {
            var t = {
                "M+": this.getMonth() + 1,
                "d+": this.getDate(),
                "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12,
                "H+": this.getHours(),
                "m+": this.getMinutes(),
                "s+": this.getSeconds(),
                "q+": Math.floor((this.getMonth() + 3) / 3),
                S: this.getMilliseconds()
            };
            for (var n in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))), 
            /(E+)/.test(e) && (e = e.replace(RegExp.$1, (RegExp.$1.length > 1 ? RegExp.$1.length > 2 ? "星期" : "周" : "") + {
                0: "日",
                1: "一",
                2: "二",
                3: "三",
                4: "四",
                5: "五",
                6: "六"
            }[this.getDay() + ""])), t) new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 === RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
            return e;
        };
        var c = new r.BMapWX({
            ak: "sOuCQ5I64gNb30I85YDvWjCqBpFDRXCz"
        });
        a.a.prototype.$store = s.a, a.a.prototype.BMap = c, new a.a(i.a).$mount(), t.default = {
            config: {
                navigationBarTitleText: "爱回收"
            }
        };
    },
    "/jWP": function(e, t, n) {
        "use strict";
        var o = n("eWQc"), a = n("9xsE");
        var i = function(e) {
            n("65pe");
        }, s = n("ybqe")(o.a, a.a, i, "data-v-0b98f876", null);
        t.a = s.exports;
    },
    "3+zl": function(e, t, n) {
        "use strict";
        var o = n("ZUq2"), a = n("guyP");
        var i = function(e) {
            n("x9Er");
        }, s = n("ybqe")(o.a, a.a, i, "data-v-2d4805f1", null);
        t.a = s.exports;
    },
    "65pe": function(e, t) {},
    "9xsE": function(e, t, n) {
        "use strict";
        var o = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    } ],
                    staticClass: "ondoor-container"
                }, [ n("main", [ n("ul", [ n("li", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.cityInfo && e.cityInfo.supportOnDoor,
                        expression: "cityInfo && cityInfo.supportOnDoor"
                    } ]
                }, [ n("dl", [ n("dt", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnChangeOnDoorType(1);
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("i", {
                    class: e.isShowOnDoorItem ? "icon-select" : "icon-unselect"
                }), e._v("上门交易") ], 1), e.isShowSfItem ? n("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnNavTo("expressRule");
                        }
                    }
                }, [ e._v("运费说明") ]) : e._e() ]), e._v(" "), e.isShowOnDoorItem ? n("block", [ n("dd", {
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnNavTo("onDoorStreetSelect");
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.onDoorInfo.street,
                        expression: "onDoorInfo.street"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请点击选择地址",
                        disabled: !0,
                        eventid: "2"
                    },
                    domProps: {
                        value: e.onDoorInfo.street
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.onDoorInfo.street = t.target.value);
                        }
                    }
                }), e._v(" "), e.onDoorInfo.isDispatcherConditional ? e._e() : n("p", {
                    staticClass: "err-tag"
                }, [ e._v("* 该地址不支持上门回收，请选择其它地址") ]) ], 1), e._v(" "), n("span", [ e._v("更改") ]) ]), e._v(" "), n("dd", [ n("div", {
                    staticClass: "left"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.onDoorInfo.building,
                        expression: "onDoorInfo.building"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请输入详细地址",
                        eventid: "4"
                    },
                    domProps: {
                        value: e.onDoorInfo.building
                    },
                    on: {
                        input: [ function(t) {
                            t.target.composing || (e.onDoorInfo.building = t.target.value);
                        }, e.handleOnInputBuild ]
                    }
                }) ]) ]), e._v(" "), e.ondoorDateList && e.ondoorDateList.length ? n("dd", [ n("picker", {
                    attrs: {
                        value: e.ondoorDateIndex,
                        range: e.ondoorDateList,
                        eventid: "5"
                    },
                    on: {
                        change: e.handleOnDoorDatePickerChange
                    }
                }, [ n("p", [ e._v("预约时间") ]), e._v("\n                " + e._s(e.ondoorDateList[e.ondoorDateIndex])), n("span", [ e._v("更改") ]) ], 1) ], 1) : e._e() ], 1) : e._e() ], 1) ], 1), e._v(" "), n("li", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.cityInfo && e.cityInfo.supportMetro,
                        expression: "cityInfo && cityInfo.supportMetro"
                    } ]
                }, [ n("dl", [ n("dt", {
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.handleOnChangeOnDoorType(2);
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("i", {
                    class: e.isShowMetroItem ? "icon-select" : "icon-unselect"
                }), e._v("地铁站交易") ], 1) ]), e._v(" "), e.isShowMetroItem ? n("block", [ e.multiArray && e.multiArray.length > 1 ? n("dd", [ e.multiArray && e.multiArray.length > 0 ? n("picker", {
                    attrs: {
                        mode: "multiSelector",
                        value: e.multiIndex,
                        range: e.multiArray,
                        eventid: "7"
                    },
                    on: {
                        change: e.handleOnMetroPickerChange,
                        columnchange: e.handleOnMetroPickerColumnChange
                    }
                }, [ e._v("\n                " + e._s(e.metroInfo.line.name && e.metroInfo.site.name ? e.metroInfo.line.name + " " + e.metroInfo.site.name : "选择地铁站")), n("span", [ e._v("更改") ]) ]) : e._e() ], 1) : e._e(), e._v(" "), n("dd", [ n("picker", {
                    attrs: {
                        value: e.metroDateIndex,
                        range: e.ondoorDateList,
                        eventid: "8"
                    },
                    on: {
                        change: e.handleOnMetroDatePickerChange
                    }
                }, [ n("p", [ e._v("预约时间") ]), e._v("\n                " + e._s(e.ondoorDateList[e.metroDateIndex])), n("span", [ e._v("更改") ]) ], 1) ], 1) ], 1) : e._e() ], 1) ], 1) ], 1) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        t.a = o;
    },
    D9H7: function(e, t, n) {
        "use strict";
        var o = n("Xxa5"), a = n.n(o), i = n("exGp"), s = n.n(i), r = n("Dd8w"), c = n.n(r), u = n("NYxO"), l = n("vLgD"), p = n("0xDb"), d = (n.n(p), 
        getApp());
        t.a = {
            data: function() {
                return {
                    shopList: [],
                    selectShopId: 0,
                    selectShop: {}
                };
            },
            computed: c()({}, Object(u.d)({
                storeDateList: function(e) {
                    return e.inquiry.storeDateList;
                },
                formartedStoreTime: function(e) {
                    return e.inquiry.formartedStoreTime;
                },
                formartedStoreDate: function(e) {
                    return e.inquiry.formartedStoreDate;
                },
                timeStoreColumnIndex: function(e) {
                    return e.inquiry.timeStoreColumnIndex;
                },
                dateStoreColumnIndex: function(e) {
                    return e.inquiry.dateStoreColumnIndex;
                },
                shopid: function(e) {
                    return e.inquiry.shopid;
                }
            })),
            props: {
                cityInfo: Object,
                locationInfo: Object,
                show: Boolean
            },
            watch: {
                locationInfo: function(e, t) {
                    !t.latitude && e.latitude && this.getNearest();
                },
                cityInfo: function(e, t) {
                    t.id !== e.id && this.init();
                }
            },
            mounted: function() {
                var e = this;
                return s()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, e.init();

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            onShow: function() {
                var e = this;
                return s()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.getShopFromAppData();

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            methods: c()({}, Object(u.b)([ "setStoreInfo" ]), {
                init: function() {
                    var e = this;
                    return s()(a.a.mark(function t() {
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, e.getAllShops(e.cityInfo.id);

                              case 2:
                                e.getShopFromAppData(), !e.storeDateList.length && e.initShopDate();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                changeShop: function() {
                    wx.navigateTo({
                        url: "/pages/shop/main?cityId=" + this.cityInfo.id + "&isCheckShop=true"
                    });
                },
                getShopFromAppData: function() {
                    var e = void 0, t = d.globalData.inquiryInfo.shopid || this.shopid;
                    t && (e = this.shopList.find(function(e) {
                        return parseInt(e.id, 10) === parseInt(t, 10);
                    })) && (this.setStoreInfo([ "shopid", t ]), d.globalData.orderPage.storeInfo.shop = this.selectShop = e);
                },
                getAllShops: function(e) {
                    var t = this;
                    return s()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.abrupt("return", Object(l.a)({
                                    url: "/foundation/getshops",
                                    params: {
                                        cityId: e
                                    }
                                }).then(function(e) {
                                    e && (t.shopList = e, t.setStoreInfo([ "shopList", e ]), t.getNearest());
                                }));

                              case 1:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                getNearest: function() {
                    var e = this.locationInfo;
                    this.shopList.length && (this.shopList.map(function(t) {
                        t.dis = e.latitude ? Object(p.getDistance)(e.latitude, e.longitude, t.latitude, t.longitude) : 0;
                    }), this.shopList.sort(function(e, t) {
                        return e.dis - t.dis;
                    }), this.setStoreInfo([ "shopid", this.shopList[0].id ]), d.globalData.orderPage.storeInfo.shop = this.selectShop = this.shopList[0]);
                },
                initShopDate: function() {
                    var e = this;
                    return s()(a.a.mark(function t() {
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                Object(l.a)({
                                    url: "/foundation/reservation/shoptime"
                                }).then(function(t) {
                                    t && e.formatShopDate(t);
                                });

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                handleStorePickerChange: function(e) {
                    var t = e.mp.detail.value;
                    this.setStoreInfo([ "timeStoreColumnIndex", t[1] ]), this.setStoreInfo([ "dateStoreColumnIndex", t[0] ]);
                },
                formatShopDate: function(e) {
                    var t = [], n = [];
                    t = e.map(function(e) {
                        var t = [], o = {};
                        return e.items.forEach(function(e) {
                            var n = {};
                            e.enable && (n.name = e.durationTime, n.startTime = e.startTime, n.endTime = e.endTime, 
                            t.push(n));
                        }), n.push(t), o.name = new Date(e.date).pattern("MM月dd日"), o;
                    }), 0 === n[0].length && (t.shift(), n.shift()), this.setStoreInfo([ "storeDateList", [ t, n[0] ] ]), 
                    this.setStoreInfo([ "formartedStoreDate", t ]), this.setStoreInfo([ "formartedStoreTime", n ]);
                },
                handleStorePickerColumnChange: function(e) {
                    var t = e.mp.detail.value, n = e.mp.detail.column;
                    0 === n && (this.setStoreInfo([ "timeStoreColumnIndex", 0 ]), this.setStoreInfo([ "dateStoreColumnIndex", t ]), 
                    this.setStoreInfo([ "storeDateList", [ this.formartedStoreDate, this.formartedStoreTime[t] ] ])), 
                    1 === n && this.setStoreInfo([ "timeStoreColumnIndex", t ]);
                },
                handleClickPhone: function() {
                    wx.makePhoneCall({
                        phoneNumber: this.selectShop.mobile
                    });
                },
                handleClickMap: function() {
                    var e = this.selectShop, t = Object(p.bd09togcj02)(e.latitude, e.longitude);
                    wx.openLocation({
                        latitude: t[0],
                        longitude: t[1],
                        name: e.name,
                        address: e.address
                    });
                }
            })
        };
    },
    DvYX: function(e, t, n) {
        "use strict";
        var o = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    } ],
                    staticClass: "express-container"
                }, [ n("header"), e._v(" "), n("main", [ n("ul", [ n("li", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.isShowSfMode,
                        expression: "isShowSfMode"
                    } ]
                }, [ n("dl", [ n("dt", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnChangeExpressType(1);
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("i", {
                    class: e.isShowSfItem ? "icon-select" : "icon-unselect"
                }), e._v("顺丰上门取件") ], 1), e._v(" "), e.isShowSfItem ? n("span", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnNavTo("expressRule");
                        }
                    }
                }, [ e._v("运费说明") ]) : e._e() ]), e._v(" "), e.isShowSfItem ? n("block", [ n("dd", {
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnNavTo("sfStreetSelect");
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.sfExpressInfo.street,
                        expression: "sfExpressInfo.street"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请点击选择地址",
                        disabled: !0,
                        eventid: "2"
                    },
                    domProps: {
                        value: e.sfExpressInfo.street
                    },
                    on: {
                        input: function(t) {
                            t.target.composing || (e.sfExpressInfo.street = t.target.value);
                        }
                    }
                }), e._v(" "), e.sfExpressInfo.isDispatcherConditional ? e._e() : n("p", {
                    staticClass: "err-tag"
                }, [ e._v("* 该地址不支持上门回收，请选择其它地址") ]) ], 1), e._v(" "), n("span", [ e._v("更改") ]) ]), e._v(" "), n("dd", [ n("div", {
                    staticClass: "left"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.sfExpressInfo.building,
                        expression: "sfExpressInfo.building"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请输入详细楼栋和门牌号",
                        eventid: "4"
                    },
                    domProps: {
                        value: e.sfExpressInfo.building
                    },
                    on: {
                        input: [ function(t) {
                            t.target.composing || (e.sfExpressInfo.building = t.target.value);
                        }, e.handleOnInputBuild ]
                    }
                }) ]) ]), e._v(" "), n("dd", [ n("div", {
                    staticClass: "left"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.sfExpressInfo.nickName,
                        expression: "sfExpressInfo.nickName"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请输入寄件人真实姓名",
                        eventid: "5"
                    },
                    domProps: {
                        value: e.sfExpressInfo.nickName
                    },
                    on: {
                        input: [ function(t) {
                            t.target.composing || (e.sfExpressInfo.nickName = t.target.value);
                        }, e.handleOnInputOnDoorRealName ]
                    }
                }) ]), e._v(" "), n("div", {
                    staticClass: "right"
                }, [ n("i") ], 1) ]), e._v(" "), e.sfondoorDateList && e.sfondoorDateList.length > 0 ? n("dd", [ n("picker", {
                    attrs: {
                        mode: "multiSelector",
                        value: e.sfondoorDateIndex,
                        range: e.sfondoorDateList,
                        "range-key": "name",
                        eventid: "6"
                    },
                    on: {
                        change: e.handleSFPickerChange,
                        columnchange: e.handleSFPickerColumnChange
                    }
                }, [ n("p", [ e._v("预约时间") ]), e._v("\n                " + e._s(e.sfOnDoorDateForShow)), n("span", [ e._v("更改") ]) ], 1) ], 1) : e._e() ], 1) : e._e() ], 1) ], 1), e._v(" "), e.isShowCabinetMode ? n("li", [ n("dl", [ e.customSource ? e._e() : n("block", [ n("dt", {
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.handleOnChangeExpressType(3);
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("i", {
                    class: e.isShowCabinetItem ? "icon-select" : "icon-unselect"
                }), e._v("快递柜") ], 1), e._v(" "), e.isShowCabinetItem ? n("div", {
                    staticClass: "right"
                }, [ e.isShowFengchaoMode ? n("span", {
                    class: e.isShowFengchaoItem ? "cabinet-style cabinet-choose-style" : "cabinet-style",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.handleOnChangeExpressType(3, 2);
                        }
                    }
                }, [ n("i", [ n("u") ], 1), e._v("丰巢柜机") ], 1) : e._e(), e._v(" "), e.isShowSuDiYiMode ? n("span", {
                    class: e.isShowSuDiYiItem ? "cabinet-style cabinet-choose-style" : "cabinet-style",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.handleOnChangeExpressType(3, 1);
                        }
                    }
                }, [ n("i", [ n("u") ], 1), e._v("速递易智能柜") ], 1) : e._e() ]) : e._e() ]) ], 1), e._v(" "), e.customSource ? n("block", [ e.isShowSuDiYiItem ? n("dt", [ e._v("请使用速递易快递柜邮寄") ]) : e._e(), e._v(" "), e.isShowFengchaoItem ? n("dt", [ e._v("请使用丰巢智能柜进行邮寄") ]) : e._e() ], 1) : e._e(), e._v(" "), e.isShowCabinetItem ? n("block", [ e.isShowNoFoundSuDiYiCabinet ? e._e() : n("block", [ e.isShowFengchaoItem ? n("dd", [ e.areaMultiArray && e.areaMultiArray.length > 0 ? n("picker", {
                    attrs: {
                        mode: "multiSelector",
                        value: e.areaMultiIndex,
                        range: e.areaMultiArray,
                        "range-key": "name",
                        eventid: "10"
                    },
                    on: {
                        change: e.handleOnChangeAreaPicker,
                        columnchange: e.handleOnChangeAreaPickerColumns
                    }
                }, [ e._v(e._s(e.areaPickerStr ? e.areaPickerStr : "请选择您所在的省市区") + "\n                ") ]) : e._e() ], 1) : e._e(), e._v(" "), e.isShowSuDiYiItem && e.location && e.location.address ? e._e() : n("dd", [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: e.cabinetExpressInfo.address,
                        expression: "cabinetExpressInfo.address"
                    } ],
                    attrs: {
                        type: "text",
                        name: "",
                        id: "",
                        placeholder: "请输入您的详细地址",
                        eventid: "11"
                    },
                    domProps: {
                        value: e.cabinetExpressInfo.address
                    },
                    on: {
                        input: [ function(t) {
                            t.target.composing || (e.cabinetExpressInfo.address = t.target.value);
                        }, e.handleOnInputCabinetAddress ]
                    }
                }) ]), e._v(" "), n("dd", {
                    attrs: {
                        eventid: "12"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnNavTo("realName");
                        }
                    }
                }, [ e._v("实名认证："), n("span", [ e._v(e._s(e.isCheckRealName ? "已认证" : "未认证") + ">") ]) ]), e._v(" "), e.logisticsCompanyList && e.logisticsCompanyList.length > 1 ? n("dd", [ n("picker", {
                    attrs: {
                        mode: "selector",
                        value: e.pickerLogisticsCompanyIndex,
                        range: e.logisticsCompanyList,
                        "range-key": "logisticsCompanyName",
                        eventid: "13"
                    },
                    on: {
                        change: e.handleCabinetPickerCompanyChange
                    }
                }, [ e._v("快递公司："), n("span", [ e._v(e._s(e.cabinetLogisticsCompanyForShow)) ]) ]) ], 1) : e._e(), e._v(" "), e.isShowNoFoundSuDiYiCabinet ? e._e() : n("dd", {
                    staticClass: "near-cabinet",
                    attrs: {
                        eventid: "14"
                    },
                    on: {
                        click: e.handleOnClickNearCabinet
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ e.nearestCabinetDistance ? n("block", [ e._v("最近的快递柜据您" + e._s(e.nearestCabinetDistance) + "米") ]) : e._e(), e._v(" "), n("div", {
                    staticClass: "cabinet-left-bottom"
                }, [ n("i"), e._v("查看附近快递柜>>") ], 1) ], 1), e._v(" "), n("img", {
                    attrs: {
                        src: e.nearCabinetImg,
                        alt: ""
                    }
                }) ]), e._v(" "), e.isShowFengchaoItem ? n("dd", {
                    staticClass: "fengcao-tips"
                }, [ e._v("丰巢智能柜将使用顺丰快递运送您的包裹") ]) : e._e() ], 1), e._v(" "), e.isShowNoFoundSuDiYiCabinet ? n("block", [ n("dd", {
                    staticClass: "cabinet-nofound"
                }, [ e._v("抱歉，当前城市无法使用速递易智能柜") ]) ], 1) : e._e() ], 1) : e._e() ], 1) ], 1) : e._e(), e._v(" "), e.isShowOtherMode ? n("li", [ n("dl", [ n("dt", {
                    attrs: {
                        eventid: "16"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnChangeExpressType(2);
                        }
                    }
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("i", {
                    class: e.isShowOtherItem ? "icon-select" : "icon-unselect"
                }), e._v("自己联系快递\n            ") ], 1), e._v(" "), e.isShowOtherItem ? n("span", {
                    attrs: {
                        eventid: "15"
                    },
                    on: {
                        click: function(t) {
                            e.handleOnNavTo("expressRule");
                        }
                    }
                }, [ e._v("运费说明") ]) : e._e() ]), e._v(" "), e.isShowOtherItem ? n("block", [ n("dd", {
                    staticClass: "other-content"
                }, [ e._v("提交回收单后，寄件地址消息推送到您的手机") ]) ], 1) : e._e() ], 1) ], 1) : e._e() ], 1) ], 1), e._v(" "), n("footer") ], 1);
            },
            staticRenderFns: []
        };
        t.a = o;
    },
    SARb: function(e, t, n) {
        "use strict";
        var o = n("Gu7T"), a = n.n(o), i = n("Dd8w"), s = n.n(i), r = n("//Fk"), c = n.n(r), u = n("Xxa5"), l = n.n(u), p = n("exGp"), d = n.n(p), h = n("vLgD"), f = n("jV6A"), m = n("X/E/"), v = getApp();
        t.a = {
            props: {
                locationInfo: {
                    type: Object
                },
                cityInfo: {
                    type: Object
                },
                show: {
                    type: Boolean,
                    default: !1
                },
                customSource: {
                    type: String
                }
            },
            data: function() {
                return {
                    location: null,
                    isShowSuDiYiMode: !1,
                    isShowFengchaoMode: !1,
                    expressType: 1,
                    realInfo: null,
                    sfExpressInfo: {
                        street: "",
                        building: "",
                        nickName: "",
                        pickupDate: "",
                        location: null,
                        isDispatcherConditional: !1
                    },
                    sfOnDoorDateForShow: "",
                    formartedSFexpressTime: [],
                    formartedSFexpressDate: [],
                    sfondoorDateList: [],
                    sfondoorDateIndex: [ 0, 0 ],
                    timeColumnIndex: 0,
                    dateColumnIndex: 0,
                    isRefreshCabinet: !0,
                    nearCabinetImg: "",
                    userCabinetType: 0,
                    supportCabinetList: null,
                    cabinetExpressInfo: {
                        address: ""
                    },
                    nearCabinetInfo: [],
                    nearestCabinetDistance: 0,
                    cabinetNearests: [],
                    citySupportCabinet: null,
                    chooseLogisticsCompanyId: "",
                    pickerLogisticsCompanyIndex: "",
                    pickerLogisticsCompanyValue: "",
                    logisticsCompanyList: null,
                    cabinetLogisticsCompanyForShow: "",
                    areaPickerStr: "",
                    areaMultiArray: [],
                    areaMultiIndex: [ 0, 0, 0 ],
                    cabinetType: 2,
                    isCheckRealName: !1,
                    cabinetImg: {
                        sudiyi: "https://sr.aihuishou.com/miniapps/earth/cabinet/bitmap.png",
                        fengchao: "https://sr.aihuishou.com/miniapps/earth/cabinet/fengcaoLocationIcon.png"
                    }
                };
            },
            computed: {
                isSuDiYiCustom: function() {
                    var e = this.customSource;
                    return e && "sudiyi" === e;
                },
                isFengChaoCustom: function() {
                    var e = this.customSource;
                    return e && "fengcao" === e;
                },
                isShowSfMode: function() {
                    var e = this.customSource, t = this.cityInfo;
                    return !e && t && t.isSupportCoopExpress;
                },
                isShowSfItem: function() {
                    var e = this.expressType;
                    return e && 1 === e;
                },
                isShowCabinetMode: function() {
                    var e = this.customSource, t = this.citySupportCabinet;
                    return !!e || t && t.length > 0;
                },
                isShowCabinetItem: function() {
                    var e = this.expressType;
                    return !!this.customSource || e && 3 === e;
                },
                isShowFengchaoItem: function() {
                    var e = this.cabinetType, t = this.customSource;
                    return !(!t || "fengcao" !== t) || e && 2 === e && !t;
                },
                isShowSuDiYiItem: function() {
                    var e = this.cabinetType, t = this.customSource;
                    return !(!t || "sudiyi" !== t) || e && 1 === e && !t;
                },
                isShowOtherMode: function() {
                    var e = this.customSource, t = this.cityInfo;
                    return t && t.isSupportCustomExpress && !e;
                },
                isShowOtherItem: function() {
                    var e = this.expressType;
                    return e && 2 === e;
                },
                isShowNoFoundSuDiYiCabinet: function() {
                    var e = this.citySupportCabinet, t = this.customSource;
                    return e && "sudiyi" === t ? (this.$emit("setCustomPageSupport", !e.includes(1)), 
                    !e.includes(1)) : (this.$emit("setCustomPageSupport", !1), !1);
                }
            },
            watch: {
                citySupportCabinet: function(e, t) {
                    var n = this;
                    e && e.length > 0 && e.forEach(function(e) {
                        1 === e ? n.isShowSuDiYiMode = !0 : 2 === e && (n.isShowFengchaoMode = !0);
                    });
                },
                cityInfo: function(e, t) {
                    e && e.id !== t.id && (this.setCitySupportCabinet(), this.initExpressType());
                },
                locationInfo: function(e, t) {
                    !e || e.latitude === t.latitude && e.longitude === t.longitude || (this.isRefreshCabinet = !0, 
                    this.setLocationInfo(!0));
                }
            },
            mounted: function() {
                var e = this;
                return d()(l.a.mark(function t() {
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.setSfExpressDate(), e.setRealName(), e.setAreaMultiArray(), t.next = 5, 
                            e.setCitySupportCabinet();

                          case 5:
                            return t.next = 7, e.setLocationInfo();

                          case 7:
                            e.setCustom(), e.initExpressType();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            onShow: function() {
                var e = this;
                return d()(l.a.mark(function t() {
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.setRealName(), t.next = 3, e.setLocationInfo();

                          case 3:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            methods: {
                handleOnClickNearCabinet: function() {
                    var e = this.locationInfo, t = this.cabinetType, n = this.supportCabinetList;
                    if (!e || !e.latitude || !e.longitude || n && 0 === n.length) return wx.openSetting({
                        success: function() {
                            console.log("success");
                        }
                    });
                    wx.navigateTo({
                        url: "/pages/cabinetList/cabinetList?cabinetType=" + t
                    });
                },
                handleOnChangeAreaPickerColumns: function(e) {
                    var t = e.mp.detail, n = t.column, o = t.value, a = this.areaMultiIndex;
                    o !== a[n] && (a = 0 === n ? [ o, 0, 0 ] : 1 === n ? [ a[0], o, 0 ] : [ a[0], a[1], o ], 
                    this.areaMultiIndex = a, this.setAreaMultiArray(n));
                },
                handleOnChangeAreaPicker: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o, a, i, s, r, c, u, p;
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return o = e.mp.detail.value, a = t.areaMultiArray, i = t.areaMultiIndex, s = a[0] ? a[0][i[0]] : "", 
                                r = a[1] ? a[1][i[1]] : "", c = a[2] ? a[2][i[2]] : "", u = (s ? s.name : "") + " " + (r ? r.name : "") + " " + (c ? c.name : ""), 
                                p = null, n.next = 9, t.getCitySupportCabinet({
                                    cityId: r.id
                                });

                              case 9:
                                if (!(p = n.sent)) {
                                    n.next = 18;
                                    break;
                                }
                                if (p.includes(2)) {
                                    n.next = 13;
                                    break;
                                }
                                return n.abrupt("return", wx.showToast({
                                    title: "选择城市不支持丰巢智能柜",
                                    icon: "none"
                                }));

                              case 13:
                                t.areaPickerStr = u, t.areaMultiIndex = o, v.globalData.orderPage.cabinetExpressInfo.provinceId = t.areaMultiArray[0][t.areaMultiIndex[0]].id, 
                                v.globalData.orderPage.cabinetExpressInfo.cityId = t.areaMultiArray[1][t.areaMultiIndex[1]].id, 
                                v.globalData.orderPage.cabinetExpressInfo.districtId = t.areaMultiArray[2][t.areaMultiIndex[2]].id;

                              case 18:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                handleOnInputCabinetAddress: function(e) {
                    v.globalData.orderPage.cabinetExpressInfo.address = this.cabinetExpressInfo.address = e.mp.detail.value;
                },
                handleCabinetPickerCompanyChange: function(e) {
                    this.setLogisticsCompanyInfo(e.mp.detail.value);
                },
                handleSFPickerColumnChange: function(e) {
                    var t = e.mp.detail, n = t.value, o = t.column, a = this.formartedSFexpressDate, i = this.formartedSFexpressTime, s = n, r = this.sfondoorDateIndex;
                    0 === o ? (r[0] = s, r[1] = 0, this.sfondoorDateList = [ a, i[s] ], this.dateColumnIndex = s, 
                    this.sfondoorDateIndex = r) : 1 === o && (r[1] = s, this.timeColumnIndex = s, this.sfondoorDateIndex = r);
                },
                handleSFPickerChange: function(e) {
                    var t = this.formartedSFexpressDate, n = this.dateColumnIndex, o = this.formartedSFexpressTime, a = this.timeColumnIndex, i = e.mp.detail.value;
                    this.sfondoorDateIndex = i;
                    var s = t[n].value + "T" + o[n][a].value + "+08:00";
                    v.globalData.orderPage.sfExpressInfo.pickupDate = this.sfExpressInfo.pickupDate = s, 
                    this.sfOnDoorDateForShow = t[n].name + "-" + o[n][a].name;
                },
                handleOnInputOnDoorRealName: function(e) {
                    v.globalData.orderPage.sfExpressInfo.nickName = this.sfExpressInfo.nickName = e.target.value;
                },
                handleOnInputBuild: function(e) {
                    v.globalData.orderPage.sfExpressInfo.building = this.sfExpressInfo.building = e.target.value;
                },
                handleOnChangeExpressType: function() {
                    v.globalData.orderPage.expressType = this.expressType = arguments.length <= 0 ? void 0 : arguments[0], 
                    this.isShowCabinetItem && (this.userCabinetType = arguments.length <= 1 ? void 0 : arguments[1], 
                    this.setSupportCabinet()), this.$emit("compareAreaAndDefault");
                },
                handleOnNavTo: function(e) {
                    var t = "/pages/index/index";
                    if ("expressRule" === e) t = "/pages/activity/private/private?url=" + encodeURIComponent(m.a); else if ("realName" === e) {
                        t = this.isCheckRealName ? "" : "/pages/realname/realname";
                    } else "sfStreetSelect" === e && (t = "/pages/chooseaddress/main");
                    wx.navigateTo({
                        url: t
                    });
                },
                initExpressType: function() {
                    var e = this.isShowSfMode, t = this.isShowCabinetMode, n = this.isShowOtherMode;
                    return e ? v.globalData.orderPage.expressType = this.expressType = 1 : t ? v.globalData.orderPage.expressType = this.expressType = 3 : n ? v.globalData.orderPage.expressType = this.expressType = 2 : void 0;
                },
                initCabinetInfo: function(e) {
                    var t = e.channel;
                    if (t) {
                        this.cabinetType = t;
                        var n = this.cabinetImg;
                        1 === t ? this.nearCabinetImg = n.sudiyi : 2 === t && (this.nearCabinetImg = n.fengchao), 
                        v.globalData.orderPage.cabinetExpressInfo.channel = t, this.initCabinetAddress(), 
                        this.setLogisticsCompanyList(t);
                    }
                },
                setCabinetInfo: function() {
                    var e = this.nearCabinetInfo, t = this.userCabinetType;
                    if (e && e.length > 0) {
                        var n = e[0].nearest, o = e[0];
                        e.forEach(function(e, a) {
                            var i = !t && (n > e.nearest || 0 === n), s = t && e.channel === t;
                            (i || s) && (n = e.nearest, o = e);
                        }), this.nearestCabinetDistance = o.nearest, this.initCabinetInfo({
                            channel: o.channel
                        }), wx.setStorageSync("cabinetList", o.expressCabinets), wx.setStorageSync("cabinetDistanceList", o.list), 
                        wx.setStorageSync("nearestCabinetDistance", o.nearest);
                    } else this.initCabinetInfo({
                        channel: t || 2
                    });
                },
                initCabinetAddress: function() {
                    var e = this.cabinetType, t = this.location;
                    v.globalData.orderPage.cabinetExpressInfo.address = this.cabinetExpressInfo.address = 1 === e && t ? t.address : "";
                },
                setCustom: function() {
                    var e = this.isSuDiYiCustom, t = this.isFengChaoCustom;
                    (e || t) && (v.globalData.orderPage.expressType = 2);
                    var n = null;
                    e && (n = 1), t && (n = 2), n && this.handleOnChangeExpressType(3, n);
                },
                setRealName: function() {
                    var e = wx.getStorageSync("realInfo");
                    e && (v.globalData.orderPage.realInfo = e, v.globalData.orderPage.cabinetExpressInfo.nickName = e.name, 
                    v.globalData.orderPage.cabinetExpressInfo.cardNo = e.idCard, this.isCheckRealName = !0);
                },
                setLocationInfo: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return d()(l.a.mark(function n() {
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.abrupt("return", new c.a(function(n, o) {
                                    var a = wx.getStorageSync("userSelectOndoorMapInfo"), i = null;
                                    if (a) {
                                        var r = a.city, c = a.title, u = a.province, l = a.location, p = r + " " + c;
                                        i = Object(f.h)(l.lat, l.lng), v.globalData.orderPage.sfExpressInfo.street = e.sfExpressInfo.street = p, 
                                        e.location = {
                                            location: i,
                                            address: p,
                                            province: u
                                        };
                                        var d = {
                                            address: p,
                                            province: u,
                                            city: r
                                        };
                                        e.setCabinetLocalGlobalData(d), n();
                                    } else if ((i = e.locationInfo) && i.latitude) {
                                        var h = i.latitude + "," + i.longitude;
                                        e.BMap.regeocoding({
                                            locationStr: h,
                                            fail: function(e) {},
                                            success: function(o) {
                                                var a = o.wxMarkerData[0].address, r = o.originalData.result.addressComponent, c = r.province, u = r.city;
                                                e.location = s()({}, i, {
                                                    address: a,
                                                    province: c
                                                }), v.globalData.orderPage.sfExpressInfo.street = e.sfExpressInfo.street = a;
                                                var l = {
                                                    address: a,
                                                    province: c,
                                                    city: u
                                                };
                                                if (e.setCabinetLocalGlobalData(l), t) {
                                                    var p = e.isSuDiYiCustom, d = e.isFengChaoCustom;
                                                    p || d ? e.handleOnChangeExpressType(3, p ? 1 : 2) : e.reSetSupportCabinet();
                                                }
                                                n();
                                            }
                                        });
                                    } else n();
                                    e.setLocationSupportOnDoor(i);
                                }));

                              case 1:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                setCabinetLocalGlobalData: function(e) {
                    var t = e.address, n = e.province, o = e.city;
                    v.globalData.orderPage.cabinetExpressInfo.address = t, v.globalData.orderPage.cabinetExpressInfo.provinceName = n, 
                    v.globalData.orderPage.cabinetExpressInfo.cityName = o;
                },
                setLocationSupportOnDoor: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o, a, i, r, c, u;
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return o = null, a = t.cityInfo.id, r = (i = e).lat, c = i.lng, e = c && r ? {
                                    longitude: c,
                                    latitude: r
                                } : e, u = s()({
                                    cityId: a
                                }, e), n.next = 7, t.getLocationSupportOnDoor(u);

                              case 7:
                                o = n.sent, v.globalData.orderPage.sfExpressInfo.location = t.sfExpressInfo.location = e, 
                                v.globalData.orderPage.sfExpressInfo.isDispatcherConditional = t.sfExpressInfo.isDispatcherConditional = !!o;

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                setSfExpressDate: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n, o, a, i;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = null, t.next = 3, e.getSfExpressDate();

                              case 3:
                                if ((n = t.sent) && n.length) {
                                    t.next = 7;
                                    break;
                                }
                                return v.globalData.orderPage.sfExpressInfo.pickupDate = e.sfExpressInfo.pickupDate = "", 
                                t.abrupt("return");

                              case 7:
                                o = [], a = [], o = n.map(function(e) {
                                    var t = [], n = {};
                                    return e.times.forEach(function(e) {
                                        var n = {};
                                        e.available && (n.name = e.hour + ":00-" + (e.hour + 1) + ":00", e.hour < 10 && (e.hour = "0" + e.hour), 
                                        n.value = e.hour + ":00:00", t.push(n));
                                    }), a.push(t), n.name = new Date(e.date).pattern("MM月dd日"), n.value = new Date(e.date).pattern("yyyy-MM-dd"), 
                                    n;
                                }), 0 === a[0].length && (o.shift(), a.shift()), e.formartedSFexpressTime = a, e.formartedSFexpressDate = o, 
                                e.sfondoorDateList = [ o, a[0] ], e.sfondoorDateIndex = [ o[0], a[0][0] ], i = e.formartedSFexpressDate[e.dateColumnIndex].value + "T" + e.formartedSFexpressTime[e.dateColumnIndex][e.timeColumnIndex].value + "+08:00", 
                                v.globalData.orderPage.sfExpressInfo.pickupDate = e.sfExpressInfo.pickupDate = i, 
                                e.sfOnDoorDateForShow = e.formartedSFexpressDate[e.dateColumnIndex].name + "-" + e.formartedSFexpressTime[e.dateColumnIndex][e.timeColumnIndex].name;

                              case 18:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                reSetSupportCabinet: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                3 === e.expressType && e.setSupportCabinet();

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setSupportCabinet: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n, o, a, i, s, r;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = null, o = e.locationInfo, a = o.latitude, i = o.longitude, s = e.cityInfo.id, 
                                !e.isRefreshCabinet) {
                                    t.next = 11;
                                    break;
                                }
                                return r = {
                                    cityId: s,
                                    latitude: a,
                                    longitude: i
                                }, t.next = 7, e.getSupportCabinetList(r);

                              case 7:
                                n = t.sent, e.isRefreshCabinet = !1, e.supportCabinetList = n, e.getDistanceList();

                              case 11:
                                e.setCabinetInfo();

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setLogisticsCompanyList: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o, a, i;
                        return l.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return o = null, a = t.cityInfo.id, i = {
                                    cityId: a,
                                    channel: e
                                }, n.next = 5, t.getLogisticsCompany(i);

                              case 5:
                                o = n.sent, t.logisticsCompanyList = o, t.setLogisticsCompanyInfo(0);

                              case 8:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                setLogisticsCompanyInfo: function(e) {
                    var t = this.logisticsCompanyList;
                    v.globalData.orderPage.cabinetExpressInfo.logisticsCompanyId = this.chooseLogisticsCompanyId = t[e].logisticsCompanyId, 
                    this.pickerLogisticsCompanyIndex = e, this.pickerLogisticsCompanyValue = t[e].logisticsCompanyName, 
                    this.cabinetLogisticsCompanyForShow = t && t.length > 1 ? t[e].logisticsCompanyName : "请选择";
                },
                setCitySupportCabinet: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n, o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.cityInfo.id, o = {
                                    cityId: n
                                }, t.next = 4, e.getCitySupportCabinet(o);

                              case 4:
                                e.citySupportCabinet = t.sent;

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setAreaMultiArray: function() {
                    for (var e = this, t = arguments.length, n = Array(t), o = 0; o < t; o++) n[o] = arguments[o];
                    return d()(l.a.mark(function t() {
                        var o, a, i, s, r, c, u, p;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (o = e.areaMultiIndex, a = e.areaMultiArray, i = "number" == typeof n[0], s = null, 
                                r = null, i) {
                                    t.next = 10;
                                    break;
                                }
                                return t.next = 7, e.getProvinces();

                              case 7:
                                t.t0 = t.sent, t.next = 11;
                                break;

                              case 10:
                                t.t0 = null;

                              case 11:
                                if (s = t.t0, c = s ? s.map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    };
                                }) : a[0], r = {
                                    provinceId: c[o[0]].id
                                }, 0 !== n[0] && i) {
                                    t.next = 20;
                                    break;
                                }
                                return t.next = 17, e.getCities(r);

                              case 17:
                                t.t1 = t.sent, t.next = 21;
                                break;

                              case 20:
                                t.t1 = null;

                              case 21:
                                if (s = t.t1, u = s ? s.map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    };
                                }) : a[1], r = {
                                    cityId: u[o[1]].id
                                }, ![ 0, 1 ].includes(n[0]) && i) {
                                    t.next = 30;
                                    break;
                                }
                                return t.next = 27, e.getDistricts(r);

                              case 27:
                                t.t2 = t.sent, t.next = 31;
                                break;

                              case 30:
                                t.t2 = null;

                              case 31:
                                s = t.t2, p = s ? s.map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    };
                                }) : a[2], a = [ c ].concat([ u ], [ p ]), e.areaMultiArray = a;

                              case 35:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setDistricts: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n, o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = null, t.next = 3, e.getDistricts();

                              case 3:
                                return n = t.sent, o = n.map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    };
                                }), t.abrupt("return", o);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setCities: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n, o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = null, t.next = 3, e.getCities();

                              case 3:
                                return n = t.sent, o = n.map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    };
                                }), t.abrupt("return", o);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setProvinces: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n, o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = null, t.next = 3, e.getProvinces();

                              case 3:
                                return n = t.sent, o = n.map(function(e) {
                                    return {
                                        id: e.id,
                                        name: e.name
                                    };
                                }), t.abrupt("return", o);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                getDistanceList: function() {
                    var e = this, t = this.supportCabinetList, n = this.location;
                    if (n) {
                        var o = 0, i = !0, s = null;
                        t.forEach(function(t) {
                            o = 0, i = !0;
                            var r = e.nearCabinetInfo, c = t.expressCabinets, u = t.channel;
                            s = c && c.length > 0 ? c.map(function(e) {
                                var t = n, a = {
                                    latitude: e.latitude,
                                    longitude: e.longitude
                                }, s = parseInt(v.calculateLineDistance(t, a).toFixed(0));
                                return o = s < o || i ? s : o, i = !1, s;
                            }) : [], e.nearCabinetInfo = [].concat(a()(r), [ {
                                channel: u,
                                nearest: o,
                                expressCabinets: c,
                                list: s
                            } ]);
                        });
                    }
                },
                getDistricts: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o = null, t.prev = 1, t.next = 4, Object(h.a)({
                                    url: "/foundation/districts",
                                    params: e
                                });

                              case 4:
                                o = t.sent, t.next = 10;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(1), console.log(t.t0);

                              case 10:
                                return t.abrupt("return", o);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, n, t, [ [ 1, 7 ] ]);
                    }))();
                },
                getCities: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o = null, t.prev = 1, t.next = 4, Object(h.a)({
                                    url: "/foundation/cities",
                                    params: e
                                });

                              case 4:
                                o = t.sent, t.next = 10;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(1), console.log(t.t0);

                              case 10:
                                return t.abrupt("return", o);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, n, t, [ [ 1, 7 ] ]);
                    }))();
                },
                getProvinces: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n;
                        return l.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = null, e.prev = 1, e.next = 4, Object(h.a)({
                                    url: "/foundation/provinces"
                                });

                              case 4:
                                n = e.sent, e.next = 10;
                                break;

                              case 7:
                                e.prev = 7, e.t0 = e.catch(1), console.log(e.t0);

                              case 10:
                                return e.abrupt("return", n);

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, t, e, [ [ 1, 7 ] ]);
                    }))();
                },
                getLogisticsCompany: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(h.a)({
                                        url: "/express-cabinet/logistics-company",
                                        params: e
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                },
                getSupportCabinetList: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(h.a)({
                                        url: "/express-cabinet/support",
                                        params: e
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                },
                getCitySupportCabinet: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(h.a)({
                                        url: "/express-cabinet/city-support",
                                        params: e
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                },
                getLocationSupportOnDoor: function(e) {
                    var t = this;
                    return d()(l.a.mark(function n() {
                        var o;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(h.a)({
                                        url: "/foundation/check-support-pickup-point",
                                        params: e
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", !!o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                },
                getSfExpressDate: function() {
                    var e = this;
                    return d()(l.a.mark(function t() {
                        var n;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n = null;
                                try {
                                    n = Object(h.a)({
                                        url: "/foundation/get-available-express-time",
                                        params: {
                                            cityId: e.cityInfo.id
                                        }
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", n);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            }
        };
    },
    Y8Ia: function(e, t) {},
    ZUq2: function(e, t, n) {
        "use strict";
        var o = n("Xxa5"), a = n.n(o), i = n("exGp"), s = n.n(i), r = n("Dd8w"), c = n.n(r), u = n("vLgD"), l = n("QmSG"), p = n("VsUZ"), d = n("0xDb"), h = (n.n(d), 
        n("Zt+i")), f = n("/jWP"), m = n("afA5"), v = n("sLX/"), g = n("NYxO"), y = getApp(), I = !1;
        t.a = {
            data: function() {
                return {
                    isEnvironmentalRecycling: !1,
                    isPpvEnvironmentalRecycling: !1,
                    hasSupportrecycleTypeLoad: !1,
                    hasCityLoad: !1,
                    cityInfo: {},
                    inquiryInfo: {},
                    userInfo: {},
                    supportRecycleType: [],
                    recycleTypeHasClick: {},
                    currentRecycleType: 0,
                    recycleTypeJson: l.g,
                    extraInfo: {},
                    areaCoupon: {},
                    isShowArea: !1,
                    coupon: {},
                    couponShowPop: !1,
                    couponShowSubmit: !1,
                    isServiesChecked: !0,
                    showSourceSelect: !1,
                    selectedSource: "",
                    isCustomPage: !1,
                    customPageAndNoSupport: !1,
                    customSource: "",
                    formId: "",
                    rule: {
                        show: !1,
                        desc: ""
                    },
                    rulesDesc: {}
                };
            },
            components: {
                Store: h.a,
                OnDoor: f.a,
                ExpressMode: m.a,
                RuleModel: v.a
            },
            computed: c()({}, Object(g.d)({
                locationInfo: function(e) {
                    return e.global.locationInfo;
                },
                pageFromCooperation: function(e) {
                    return e.global.pageFromCooperation;
                }
            }), {
                isShowStore: function() {
                    return this.supportRecycleType.includes(this.recycleTypeJson.store);
                },
                isShowExpress: function() {
                    return this.supportRecycleType.includes(this.recycleTypeJson.express);
                },
                isShowOndoor: function() {
                    return this.supportRecycleType.includes(this.recycleTypeJson.ondoor);
                },
                isShowSwitchTab: function() {
                    return this.supportRecycleType.length && 1 !== this.supportRecycleType.length;
                },
                isFromFengchao: function() {
                    return "fengchao" === this.pageFromCooperation;
                },
                couponShowtext: function() {
                    var e = this.coupon, t = e.list, n = e.selectIndex, o = "";
                    if (t && -1 !== n) {
                        var a = t[n];
                        o = a.isPercent ? "+" + a.percent + "%(" + (a.isMax ? "最高" : "") + "¥" + a.amount + ")" : "+¥" + a.amount;
                    }
                    return o;
                },
                isSelectedPercent: function() {
                    var e = this.coupon, t = e.list, n = e.selectIndex;
                    if (t && -1 !== n && t[n].isPercent) return !0;
                    return !1;
                }
            }),
            onLoad: function() {
                var e = this;
                return s()(a.a.mark(function t() {
                    var n;
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            (n = wx.getStorageSync("apple-activity")) && e.appleActivityFinishTask(n);

                          case 2:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            onUnload: function() {
                this.resetData();
            },
            onShow: function() {
                var e = this;
                return s()(a.a.mark(function t() {
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (Object(p.d)().then(function(t) {
                                t && (e.userInfo = t);
                            }), e.getRulesDesc(), !y.globalData.inquiryInfo.needFresh) {
                                t.next = 10;
                                break;
                            }
                            return t.next = 5, e.initCityInfo();

                          case 5:
                            return e.initCustomPages(), !e.isCustomPage && e.initSupportRecycleType(), t.next = 9, 
                            e.initInquiryInfo();

                          case 9:
                            e.isEnvironmentalRecycling ? e.coupon = {} : Object(u.a)({
                                url: "/channel/home/time-limit-promotion",
                                params: {
                                    cityId: e.cityInfo.id,
                                    source: "default",
                                    inquiryKey: e.$root.$mp.query.inquiryKey || e.$root.$mp.query.scene
                                }
                            }).then(function(t) {
                                t ? e.initExtraInfo(t) : (e.extraInfo = {}, e.getCouponsListOnly().then(function() {
                                    e.getAreaCoupon();
                                }));
                            });

                          case 10:
                            y.globalData.inquiryInfo.needFresh = !1;

                          case 11:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            methods: c()({}, Object(g.b)([ "doLoginWithButton" ]), {
                jumpWebview: function() {
                    y.jumpToWebview("https://m.aihuishou.com/n/#/page/privacy");
                },
                getRulesDesc: function() {
                    var e = this;
                    this.$axios_dubai({
                        url: "/promotions/desc"
                    }).then(function(t) {
                        e.rulesDesc = t || {};
                    });
                },
                setCustomPageSupport: function(e) {
                    this.customPageAndNoSupport = e;
                },
                stop: function() {
                    return !1;
                },
                handleClickQuestion: function() {
                    this.isShowArea ? this.handleShowRule("areaDataDesc") : this.handleShowRule("percentPackageDesc");
                },
                handleShowRule: function(e) {
                    e && this.rulesDesc[e] && this.rulesDesc[e].desc ? this.rule = {
                        show: !0,
                        title: this.rulesDesc[e].title,
                        desc: this.rulesDesc[e].desc
                    } : this.rule.show = !1;
                },
                handleClickCoupon: function() {
                    this.userInfo.mobile && (this.isShowArea ? this.handleShowRule("areaDataDesc") : this.toggleDataValue("couponShowPop"));
                },
                initCityInfo: function() {
                    var e = this;
                    return s()(a.a.mark(function t() {
                        var n, o, i;
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (!(n = wx.getStorageSync("choose_city"))) {
                                    t.next = 5;
                                    break;
                                }
                                e.cityInfo = n, t.next = 20;
                                break;

                              case 5:
                                if (!(o = wx.getStorageSync("nowCity"))) {
                                    t.next = 10;
                                    break;
                                }
                                e.cityInfo = o, t.next = 20;
                                break;

                              case 10:
                                return t.next = 12, Object(p.e)();

                              case 12:
                                if (!(i = t.sent)) {
                                    t.next = 17;
                                    break;
                                }
                                e.cityInfo = i, t.next = 20;
                                break;

                              case 17:
                                return y.globalData.inquiryInfo.needFresh = !0, e._piwik("pages/inquiry/inquiry", "miniapp/inquiryPage", "nolocationcity"), 
                                t.abrupt("return", wx.redirectTo({
                                    url: "/pages/choosecity/main?currentTab=4&redirecturl=" + encodeURIComponent("/pages/inquiry/inquiry?inquiryKey=" + (e.$root.$mp.query.inquiryKey || e.$root.$mp.query.scene))
                                }));

                              case 20:
                                e.hasCityLoad = !0;

                              case 21:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                initLocationInfo: function() {
                    var e = this;
                    return s()(a.a.mark(function t() {
                        return a.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", Object(p.g)());

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, t, e);
                    }))();
                },
                initInquiryInfo: function() {
                    var e = this;
                    return this.$root.$mp.query.scene && this._shencePoint({
                        inquiry_key: this.$root.$mp.query.scene,
                        event: "post_inquirykey_frompc"
                    }), Object(u.a)({
                        url: "/product/getinquiry",
                        params: {
                            inquiryKey: this.$root.$mp.query.inquiryKey || this.$root.$mp.query.scene
                        }
                    }).then(function(t) {
                        if (t) {
                            var n = t.amount, o = t.productName, a = t.productId, i = t.inquiryKey;
                            t.downPrice = Math.round(.02 * n) > 1 ? Math.round(.054 * n) : 1, wx.setNavigationBarTitle({
                                title: o
                            }), e.inquiryInfo = t, e.isEnvironmentalRecycling = t.isEnvironmentalRecycling, 
                            e.isPpvEnvironmentalRecycling = t.isPpvEnvironmentalRecycling, t.isEnvironmentalRecycling && e._piwik("pages/inquiry/inquiry", "miniapp/greenquotePricePage", "type/QuotePrice;productId/" + a + ";inquiryId/" + i + ";price/" + n), 
                            e._piwik("pages/inquiry/inquiry", "miniapp/inquiryPage", "inquiryDevice/" + o + ";inquiryDeviceprice/" + n + ";productid/" + a + ";inquiryId/" + i);
                        }
                    });
                },
                initCustomPages: function() {
                    var e;
                    "fengcao" !== (e = wx.getStorageSync("pageFromCooperation")) && "sudiyi" !== e || (this.isCustomPage = !0, 
                    this.customSource = e, this.currentRecycleType = l.g.express, this.supportRecycleType = [ 4 ], 
                    this.hasSupportrecycleTypeLoad = !0);
                },
                initSupportRecycleType: function() {
                    var e = this, t = {
                        cityId: this.cityInfo.id,
                        inquiryKeys: [ this.$root.$mp.query.inquiryKey || this.$root.$mp.query.scene ],
                        recommend: "B" === d.ABTEST.get("inquiry_recycleType_10km")
                    }, n = this.locationInfo, o = n.longitude, a = n.latitude;
                    o && a && (t = c()({}, t, {
                        longitude: o,
                        latitude: a
                    })), Object(u.a)({
                        method: "POST",
                        url: "/foundation/city/pickuptype?",
                        params: t
                    }).then(function(n) {
                        if (n && n.length) {
                            e._piwik("pages/inquiry/inquiry", "miniapp/10km", t.recommend ? "b" : "a", "abtest"), 
                            e.supportRecycleType = n;
                            var o = null;
                            (o = e.isFromFengchao && n.includes(l.g.express) ? "express" : t.recommend ? l.h[n[0]] || null : n.includes(l.g.store) ? "store" : n.includes(l.g.express) ? "express" : n.includes(l.g.ondoor) ? "ondoor" : "") && (e.currentRecycleType = l.g[o], 
                            e.recycleTypeHasClick[o] = !0);
                        }
                        e.hasSupportrecycleTypeLoad = !0;
                    });
                },
                appleActivityFinishTask: function(e) {
                    Object(u.a)({
                        method: "POST",
                        url: "/flip-card-activity/finish-task",
                        data: {
                            recordId: e,
                            task: 1
                        }
                    }).then(function(e) {
                        e && wx.showToast({
                            title: "询价成功",
                            icon: "none",
                            duration: 2500
                        });
                    });
                },
                initExtraInfo: function(e) {
                    var t = this;
                    return s()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (t.extraInfo = e, t.userInfo.mobile) {
                                    n.next = 3;
                                    break;
                                }
                                return n.abrupt("return");

                              case 3:
                                return n.prev = 3, n.next = 6, Object(u.a)({
                                    method: "POST",
                                    url: "/promotion/promotion-package/redeem",
                                    data: {
                                        packageCode: e.packageCode
                                    }
                                });

                              case 6:
                                n.next = 11;
                                break;

                              case 8:
                                n.prev = 8, n.t0 = n.catch(3), console.log(n.t0);

                              case 11:
                                t.getCouponsListOnly().then(function(e) {
                                    t.getAreaCoupon();
                                });

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n, t, [ [ 3, 8 ] ]);
                    }))();
                },
                getCouponsListOnly: function() {
                    var e = this;
                    return this.$axios_dubai({
                        url: "/promotions/coupons",
                        method: "POST",
                        data: {
                            inquiryKeys: [ this.$root.$mp.query.inquiryKey || this.$root.$mp.query.scene ],
                            pickupType: this.currentRecycleType,
                            cityId: this.cityInfo.id,
                            shopId: 1
                        }
                    }).then(function(t) {
                        t && t.availableCoupons && t.availableCoupons.length && (t.availableCoupons.forEach(function(e) {
                            e.endTime && (e.endTime = e.endTime.split("T")[0]);
                        }), e.coupon = {
                            selectIndex: 0,
                            selectedId: t.availableCoupons[0].couponCode
                        }, e.coupon.list = t.availableCoupons);
                    });
                },
                getAreaCoupon: function() {
                    var e = this;
                    Object(u.a)({
                        url: "/order/region-promotions",
                        params: {
                            inquiryKeys: this.inquiryInfo.inquiryKey,
                            cityId: this.cityInfo.id
                        }
                    }).then(function(t) {
                        t && t.length ? (e.areaCoupon = t[0], e.compareAreaAndDefault()) : (e.areaCoupon = {}, 
                        e.isShowArea = !1);
                    });
                },
                compareAreaAndDefault: function() {
                    if (!this.areaCoupon.amount || this.currentRecycleType === l.g.express && 1 !== y.globalData.orderPage.expressType) return this.isShowArea = !1;
                    this.coupon.list && this.coupon.list.length ? this.isShowArea = this.areaCoupon.amount > this.coupon.list[0].amount : this.isShowArea = !0;
                },
                chooseCoupon: function(e, t) {
                    this._piwik("pages/inquiry/inquiry", "miniapp/inquiryPage", "login/couponclick"), 
                    this.coupon.selectIndex = t, this.coupon.selectedId = e, !this.couponShowSubmit && this.toggleDataValue("couponShowPop");
                },
                couponSubmit: function() {
                    this.toggleDataValue("couponShowPop"), this.handleClickRecycle();
                },
                toggleDataValue: function(e) {
                    this[e] = !this[e];
                },
                commonDoLogin: function(e) {
                    var t = this;
                    return s()(a.a.mark(function n() {
                        var o, i;
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.doLoginWithButton([ e, t ]);

                              case 2:
                                if (!(o = n.sent).mobile) {
                                    n.next = 15;
                                    break;
                                }
                                if (t.userInfo = o, !(i = t.extraInfo).packageCode) {
                                    n.next = 15;
                                    break;
                                }
                                return n.prev = 7, n.next = 10, Object(u.a)({
                                    method: "POST",
                                    url: "/promotion/promotion-package/redeem",
                                    data: {
                                        packageCode: i.packageCode
                                    }
                                });

                              case 10:
                                n.next = 15;
                                break;

                              case 12:
                                n.prev = 12, n.t0 = n.catch(7), console.log(n.t0);

                              case 15:
                              case "end":
                                return n.stop();
                            }
                        }, n, t, [ [ 7, 12 ] ]);
                    }))();
                },
                couponGetPhoneNumber: function(e) {
                    var t = this;
                    return s()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return t._piwik("pages/inquiry/inquiry", "miniapp/inquiryPage", "logout/couponclick"), 
                                n.next = 3, t.commonDoLogin(e);

                              case 3:
                                t.getCouponsListOnly().then(function() {
                                    t.coupon.list ? t.couponShowPop = !0 : wx.showToast({
                                        title: "暂无可使用的优惠券",
                                        icon: "none",
                                        duration: 1500
                                    });
                                });

                              case 4:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                handleTapService: function() {
                    wx.navigateTo({
                        url: "/pages/activity/private/private?url=" + encodeURIComponent("https://m.aihuishou.com/m/index.html#/help/treaty")
                    });
                },
                handleChangeCity: function() {
                    var e = this;
                    y.globalData.inquiryInfo.needFresh = !0, setTimeout(function() {
                        e.resetData();
                    }, 1e3), this._piwik("pages/inquiry/inquiry", "miniapp/inquiryPage", "choosecity/" + this.cityInfo.name + ";cityid/" + this.cityInfo.id), 
                    wx.navigateTo({
                        url: "/pages/choosecity/main?currentTab=" + (this.currentRecycleType || 4)
                    });
                },
                handleReinquiry: function() {
                    wx.redirectTo({
                        url: "/pages/detail/detail?needReset=1&productId=" + this.inquiryInfo.productId
                    });
                },
                switchNav: function(e, t) {
                    var n = this;
                    this.currentRecycleType = e, this.recycleTypeHasClick[t] = !0, this.getCouponsListOnly().then(function() {
                        n.compareAreaAndDefault();
                    });
                },
                handleTapSource: function(e) {
                    this.selectedSource = e, this.handleSubmit();
                },
                handleClickRecycle: function(e) {
                    if (e && e.target && e.target.formId && (this.formId = e.target.formId), I || !this.userInfo.mobile) return !1;
                    var t = this.isServiesChecked, n = this.currentRecycleType, o = y.globalData.orderPage, a = o.sfExpressInfo, i = o.cabinetExpressInfo, s = o.expressType, r = o.metroInfo, c = o.onDoorInfo, u = o.onDoorType;
                    if (!t) return wx.showToast({
                        title: "请阅读并同意用户协议后进行回收",
                        icon: "none",
                        duration: 700
                    });
                    if (n === l.g.store) ; else if (n === l.g.express) {
                        if (a && 1 === s) {
                            var p = a.building, d = a.street, h = a.location, f = a.nickName;
                            if (!a.pickupDate) return wx.showToast({
                                title: "当前时段不支持顺丰上门回收",
                                icon: "none",
                                duration: 700
                            });
                            if (!p || !d) return wx.showToast({
                                title: "请填写地址",
                                icon: "none",
                                duration: 700
                            });
                            if (!h) return wx.showToast({
                                title: "请重新选择正确的地址",
                                icon: "none",
                                duration: 700
                            });
                            if (!f) return wx.showToast({
                                title: "请正确填写寄件人真实姓名",
                                icon: "none",
                                duration: 700
                            });
                        }
                        if (i && 3 === s) {
                            var m = i.address, v = i.cardNo, g = i.logisticsCompanyId, x = i.nickName, C = i.provinceId, b = i.districtId, w = i.cityId, S = i.channel;
                            if (!m) return wx.showToast({
                                title: "请填写地址",
                                icon: "none",
                                duration: 700
                            });
                            if (!v || !x) return wx.showToast({
                                title: "请正确填写寄件人真实姓名",
                                icon: "none",
                                duration: 700
                            });
                            if (!g) return wx.showToast({
                                title: "系统服务异常，请使用其他回收方式",
                                icon: "none",
                                duration: 700
                            });
                            if (2 === S && !(C > -1 || b > -1 || w > -1)) return wx.showToast({
                                title: "请选择正确的省市区",
                                icon: "none",
                                duration: 700
                            });
                        }
                    } else if (n === l.g.ondoor) {
                        if (c && 1 === u) {
                            var _ = c.building, D = c.street, k = c.isDispatcherConditional;
                            if (!c.pickupDate) return wx.showToast({
                                title: "当前时段不支持上门回收",
                                icon: "none",
                                duration: 700
                            });
                            if (!_ || !D) return wx.showToast({
                                title: "请填写地址",
                                icon: "none",
                                duration: 700
                            });
                            if (!k) return wx.showToast({
                                title: "该地址不支持上门回收，请选择其它交易方式",
                                icon: "none",
                                duration: 700
                            });
                        }
                        if (r && 2 === u) {
                            var T = r.lineId, P = r.siteId;
                            if (!(T > -1 || P > -1)) return wx.showToast({
                                title: "请选择地铁站",
                                icon: "none",
                                duration: 700
                            });
                        }
                    }
                    this.handleSubmit();
                },
                handleSubmit: function() {
                    var e = this;
                    if (!I) {
                        var t = this.isShowArea, n = this.currentRecycleType, o = this.inquiryInfo, a = this.coupon, i = this.areaCoupon, s = this.userInfo.mobile, r = this.cityInfo, p = this.selectedSource, d = this.locationInfo, h = this.isShowStore, f = y.globalData.orderPage, m = f.sfExpressInfo, v = f.cabinetExpressInfo, g = f.expressType, x = f.metroInfo, C = f.onDoorInfo, b = f.onDoorType, w = this.$store.state.inquiry, S = {
                            cityId: r.id,
                            pickupType: n,
                            inquiries: t ? [ {
                                inquiryKey: o.inquiryKey,
                                activityCode: i.activityCode
                            } ] : a.selectedId ? [ {
                                inquiryKey: o.inquiryKey,
                                coupon: a.selectedId
                            } ] : [ {
                                inquiryKey: o.inquiryKey
                            } ],
                            contactName: "小程序用户" + s.slice(7, 11)
                        }, _ = "";
                        if (n === l.g.store) {
                            S.shopId = w.shopid;
                            var D = w.formartedStoreTime ? w.formartedStoreTime[w.dateStoreColumnIndex || 0][w.timeStoreColumnIndex || 0] : {};
                            S.shopReservationStartTime = D.startTime, S.shopReservationEndTime = D.endTime, 
                            _ = "store";
                        } else if (n === l.g.express) {
                            if (!p) return void (this.showSourceSelect = !0);
                            if (S.productSource = p, S.expressType = g - 1, _ = "express", 1 === g) {
                                var k = m.building, T = m.street, P = m.pickupDate, E = m.nickName;
                                S.expressOnDoorAddress = {
                                    address: T + k,
                                    pickupDate: P
                                }, S.contactName = E, _ = "shunfeng";
                            } else if (3 === g) {
                                var O = v.channel, L = v.address, q = v.nickName, R = v.provinceName, M = v.cardNo, A = v.cityName, N = v.logisticsCompanyId, F = v.cityId, j = v.provinceId, $ = v.districtId, K = {
                                    address: L,
                                    realName: q,
                                    cardNo: M,
                                    logisticsCompanyId: N,
                                    channel: O
                                };
                                1 === O && (S.expressCabinetAddress = c()({}, K, {
                                    provinceName: R,
                                    cityName: A
                                })), 2 === O && (S.expressCabinetAddress = c()({}, K, {
                                    provinceId: j,
                                    cityId: F,
                                    districtId: $
                                })), S.contactName = q, _ = "cabinet";
                            }
                        } else if (n === l.g.ondoor) {
                            if (1 === b) {
                                var Y = C.street, B = C.building, W = C.isDispatcherConditional, G = C.pickupDate, J = C.location, V = {
                                    address: Y + B,
                                    pickupDate: G
                                };
                                S.onDoorAddress = c()({}, V, J, {
                                    isDispatcherConditional: W
                                }), _ = "ondoor";
                            }
                            2 === b && (S.pickupType = 2, S.metroInfo = x, _ = "metro");
                        }
                        I = !0, wx.showLoading(), Object(u.a)({
                            method: "POST",
                            url: "/order/submit",
                            data: S
                        }).then(function(t) {
                            if (wx.hideLoading(), I = !1, t) {
                                var n = null;
                                d.latitude && (e._piwik("pages/inquiry/inquiry", "miniapp/orderPage", "Latitude/" + d.latitude + ";Longitude/" + d.longitude), 
                                h || (n = "nostore"), w.shopList.length && (n = parseInt(1e3 * w.shopList[0].dis, 10))), 
                                e._piwik("pages/order/order", "miniapp/orderPage", "submitDevice/" + o.productName + ";price/" + o.amount + ";phone=" + e.userInfo.mobile + ";tradeno/" + t + ";productid/" + o.productId + ";recycleType/" + _ + ";inquiryId/" + o.inquiryKey + ";distance/" + n);
                                var a = "pages/order/order?orderno=" + t + "&phone=" + e.userInfo.mobile + "&productname=" + e.inquiryInfo.productName + "&productId=" + e.inquiryInfo.productId;
                                wx.removeStorageSync("lastInquiryKey"), wx.navigateTo({
                                    url: "/pages/order/order?orderno=" + t + "&phone=" + e.userInfo.mobile + "&productname=" + e.inquiryInfo.productName + "&productId=" + e.inquiryInfo.productId
                                }), e.resetData(), e.requestPushOrderMessage(a, t);
                            }
                        }).catch(function(e) {
                            console.log(e), I = !1, wx.showToast({
                                title: e,
                                duration: 3e3,
                                icon: "none"
                            });
                        });
                    }
                },
                requestPushOrderMessage: function(e, t) {
                    Object(u.a)({
                        method: "POST",
                        url: "/wxopen/send-order-message",
                        data: {
                            orderNo: t,
                            page: e + "&from=wx-push",
                            formId: this.formId
                        }
                    });
                },
                resetData: function() {
                    this.currentRecycleType = 0, this.supportRecycleType = [], this.recycleTypeHasClick = {}, 
                    this.areaCoupon = {}, this.extraInfo = {}, this.isShowArea = !1, this.rule = {
                        show: !1
                    }, this.coupon = {}, this.couponShowPop = !1, this.couponShowSubmit = !1, this.showSourceSelect = !1, 
                    this.selectedSource = "", this.hasSupportrecycleTypeLoad = !1, y.globalData.inquiryInfo.needFresh = !0, 
                    this.isEnvironmentalRecycling = !1, this.isPpvEnvironmentalRecycling = !1, this.inquiryInfo = {};
                },
                submitGetPhoneNumber: function(e) {
                    var t = this;
                    return s()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.commonDoLogin(e);

                              case 2:
                                t.getCouponsListOnly().then(function() {
                                    t.coupon.list ? (t.couponShowPop = !0, t.couponShowSubmit = !0) : t.handleClickRecycle();
                                });

                              case 3:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                }
            })
        };
    },
    "Zt+i": function(e, t, n) {
        "use strict";
        var o = n("D9H7"), a = n("s1Az");
        var i = function(e) {
            n("Y8Ia");
        }, s = n("ybqe")(o.a, a.a, i, "data-v-444fa959", null);
        t.a = s.exports;
    },
    afA5: function(e, t, n) {
        "use strict";
        var o = n("SARb"), a = n("DvYX");
        var i = function(e) {
            n("lKxn");
        }, s = n("ybqe")(o.a, a.a, i, "data-v-25674868", null);
        t.a = s.exports;
    },
    eWQc: function(e, t, n) {
        "use strict";
        var o = n("Dd8w"), a = n.n(o), i = n("Xxa5"), s = n.n(i), r = n("exGp"), c = n.n(r), u = n("vLgD"), l = n("jV6A"), p = getApp();
        t.a = {
            props: {
                locationInfo: {
                    type: Object
                },
                cityInfo: {
                    type: Object
                },
                show: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    onDoorType: 1,
                    onDoorInfo: {
                        street: "",
                        building: "",
                        isDispatcherConditional: ""
                    },
                    ondoorDateList: [],
                    ondoorDateRaw: [],
                    ondoorDateIndex: 0,
                    metroInfo: {
                        address: "",
                        line: {},
                        site: {}
                    },
                    multiArray: [ [], [] ],
                    multiIndex: [ 0, 0 ],
                    metroDateIndex: 0
                };
            },
            computed: {
                isShowOnDoorMode: function() {
                    var e = this.cityInfo;
                    return e && e.supportOnDoor;
                },
                isShowOnDoorItem: function() {
                    var e = this.onDoorType;
                    return e && 1 === e;
                },
                isShowMetroMode: function() {
                    var e = this.cityInfo;
                    return e && e.supportMetro;
                },
                isShowMetroItem: function() {
                    var e = this.onDoorType;
                    return e && 2 === e;
                }
            },
            watch: {
                locationInfo: function(e, t) {
                    !e || e.latitude === t.latitude && e.longitude === t.longitude || this.setLocationInfo();
                },
                cityInfo: function(e, t) {
                    e && e.id !== t.id && this.setMetroInfo();
                }
            },
            mounted: function() {
                this.setLocationInfo(), this.setOnDoorDate(), this.setMetroInfo();
            },
            onShow: function() {
                this.setLocationInfo();
            },
            methods: {
                handleOnMetroPickerColumnChange: function(e) {
                    var t = this.metroInfo, n = [ this.multiIndex[0], this.multiIndex[1] ], o = [ this.multiArray[0], this.multiArray[1] ], a = e.mp.detail, i = a.value, s = a.column;
                    0 === s ? (n[0] = i, n[1] = 0, o[1] = [], t.rawData[i].metroSites.forEach(function(e) {
                        o[1].push(e.name);
                    })) : 1 === s && (n[1] = i), this.multiArray = o, this.multiIndex = n;
                },
                handleOnMetroPickerChange: function(e) {
                    var t = e.mp.detail.value, n = this.metroInfo;
                    this.metroInfo.line = {
                        index: t[0],
                        id: n.rawData[t[0]].id,
                        name: n.rawData[t[0]].name
                    }, this.metroInfo.site = {
                        index: t[1],
                        id: n.rawData[t[0]].metroSites[t[1]].id,
                        name: n.rawData[t[0]].metroSites[t[1]].name
                    }, p.globalData.orderPage.metroInfo.lineId = n.rawData[t[0]].id, p.globalData.orderPage.metroInfo.siteId = n.rawData[t[0]].metroSites[t[1]].id;
                },
                handleOnChangeOnDoorType: function(e) {
                    p.globalData.orderPage.onDoorType = this.onDoorType = e;
                },
                handleOnDoorDatePickerChange: function(e) {
                    this.ondoorDateIndex = e.mp.detail.value;
                    var t = this.ondoorDateRaw, n = this.ondoorDateIndex;
                    p.globalData.orderPage.onDoorInfo.pickupDate = t[n];
                },
                handleOnMetroDatePickerChange: function(e) {
                    this.metroDateIndex = e.mp.detail.value;
                    var t = this.ondoorDateRaw, n = this.metroDateIndex;
                    p.globalData.orderPage.metroInfo.pickupDate = t[n];
                },
                handleOnInputBuild: function(e) {
                    p.globalData.orderPage.onDoorInfo.building = this.onDoorInfo.building = e.target.value;
                },
                handleOnNavTo: function(e) {
                    var t = null;
                    "onDoorStreetSelect" === e && (t = "/pages/chooseaddress/main"), wx.navigateTo({
                        url: t
                    });
                },
                formatOndoorDate: function(e) {
                    this.ondoorDateRaw = e;
                    var t = e.map(function(e) {
                        return new Date(e).pattern("yyyy年MM月dd日 （EE）");
                    });
                    this.ondoorDateList = t, p.globalData.orderPage.onDoorInfo.pickupDate = this.ondoorDateRaw[this.ondoorDateIndex], 
                    p.globalData.orderPage.metroInfo.pickupDate = this.ondoorDateRaw[this.metroDateIndex];
                },
                setOnDoorDate: function() {
                    var e = this;
                    return c()(s.a.mark(function t() {
                        var n, o;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = null, o = e.cityInfo.id, t.next = 4, e.getOnDoorDate(o);

                              case 4:
                                (n = t.sent) && e.formatOndoorDate(n);

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setLocationInfo: function() {
                    var e = this;
                    return c()(s.a.mark(function t() {
                        var n, o, i, r, c, u, d, h, f, m;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n = wx.getStorageSync("userSelectOndoorMapInfo"), o = null, n ? (i = n.city, r = n.title, 
                                c = n.province, u = n.location, d = i + " " + r, o = Object(l.h)(u.lat, u.lng), 
                                p.globalData.orderPage.onDoorInfo.street = e.onDoorInfo.street = d, e.location = {
                                    location: o,
                                    address: d,
                                    province: c
                                }) : (o = e.locationInfo) && (h = function(e) {}, f = function(t) {
                                    var n = t.wxMarkerData[0].address, i = t.originalData.result.addressComponent.province;
                                    e.location = a()({}, o, {
                                        address: n,
                                        province: i
                                    }), p.globalData.orderPage.onDoorInfo.street = e.onDoorInfo.street = n;
                                }, m = o.latitude + "," + o.longitude, e.BMap.regeocoding({
                                    locationStr: m,
                                    fail: h,
                                    success: f
                                })), e.setLocationSupportOnDoor(o);

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setLocationSupportOnDoor: function(e) {
                    var t = this;
                    return c()(s.a.mark(function n() {
                        var o, i, r, c, u, l;
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return o = null, i = t.cityInfo.id, c = (r = e).lat, u = r.lng, e = u && c ? {
                                    longitude: u,
                                    latitude: c
                                } : e, l = a()({
                                    cityId: i
                                }, e), n.next = 7, t.getLocationSupportOnDoor(l);

                              case 7:
                                o = n.sent, p.globalData.orderPage.onDoorInfo.location = t.onDoorInfo.location = e, 
                                p.globalData.orderPage.onDoorInfo.isDispatcherConditional = t.onDoorInfo.isDispatcherConditional = !!o, 
                                p.globalData.orderPage.metroInfo.isDispatcherConditional = !0;

                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                setMetroInfo: function() {
                    var e = this;
                    return c()(s.a.mark(function t() {
                        var n, o, a, i, r;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.cityInfo.id, o = null, a = {
                                    cityId: n
                                }, t.next = 5, e.getMetroInfo(a);

                              case 5:
                                (o = t.sent) && (e.metroInfo.rawData = o, i = [], r = [], o.forEach(function(e) {
                                    i.push(e.name);
                                }), o[0].metroSites.forEach(function(e) {
                                    r.push(e.name);
                                }), e.multiArray = [ i, r ]);

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                getMetroInfo: function(e) {
                    var t = this;
                    return c()(s.a.mark(function n() {
                        var o;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(u.a)({
                                        url: "/foundation/get-metro-lines",
                                        params: e
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                },
                getLocationSupportOnDoor: function(e) {
                    var t = this;
                    return c()(s.a.mark(function n() {
                        var o;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(u.a)({
                                        url: "/foundation/check-support-pickup-point",
                                        params: e
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                },
                getOnDoorDate: function(e) {
                    var t = this;
                    return c()(s.a.mark(function n() {
                        var o;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                o = null;
                                try {
                                    o = Object(u.a)({
                                        url: "/foundation/get-available-pickup-dates",
                                        params: {
                                            cityId: e
                                        }
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                                return t.abrupt("return", o);

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, n, t);
                    }))();
                }
            }
        };
    },
    guyP: function(e, t, n) {
        "use strict";
        var o = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return e.hasCityLoad ? n("div", {
                    staticClass: "inquiry-container"
                }, [ n("div", {
                    staticClass: "swiper-box"
                }, [ n("swiper", {
                    staticClass: "barrage",
                    attrs: {
                        vertical: "true",
                        interval: "5000",
                        autoplay: "",
                        circular: "true"
                    }
                }, [ !e.isEnvironmentalRecycling && e.inquiryInfo.priceProtectionDays ? n("div", [ n("swiper-item", {
                    attrs: {
                        mpcomid: "0"
                    }
                }, [ e._v("\n            现在下单，当前价格最多可保持"), n("span", [ e._v(e._s(e.inquiryInfo.priceProtectionDays) + "天") ]) ]) ], 1) : e._e(), e._v(" "), n("div", [ n("swiper-item", {
                    attrs: {
                        mpcomid: "1"
                    }
                }, [ e._v("\n            当您选择回收，也选择为山区孩子数码教育送去一份帮助\n          ") ]), e._v(" "), n("swiper-item", {
                    attrs: {
                        mpcomid: "2"
                    }
                }, [ e._v("\n            旧手机含铅量"), n("span", [ e._v("20%") ]), e._v("。回收旧手机，关爱血铅儿童\n          ") ]) ], 1), e._v(" "), n("div", [ n("swiper-item", {
                    attrs: {
                        mpcomid: "3"
                    }
                }, [ e._v("\n            一块废旧手机电池，会污染"), n("span", [ e._v("6万") ]), e._v("升水\n          ") ]) ], 1), e._v(" "), n("div", [ n("swiper-item", {
                    attrs: {
                        mpcomid: "4"
                    }
                }, [ e._v("\n            回收一台旧手机，可以减少"), n("span", [ e._v("3.6千克") ]), e._v("碳排放\n          ") ]) ], 1), e._v(" "), n("div", [ n("swiper-item", {
                    attrs: {
                        mpcomid: "5"
                    }
                }, [ e._v("\n            正规回收，安全便捷，"), n("span", [ e._v("3000万") ]), e._v("用户信赖之选\n          ") ]) ], 1) ]) ], 1), e._v(" "), e.inquiryInfo.inquiryKey ? n("div", {
                    staticClass: "price-box"
                }, [ n("div", {
                    staticClass: "left"
                }, [ e.userInfo.mobile && e.isShowArea ? n("span", {
                    staticClass: "price-number",
                    style: {
                        "line-height": e.isEnvironmentalRecycling ? "150rpx" : "84rpx"
                    }
                }, [ e._v("\n          " + e._s(e.inquiryInfo.amount + e.areaCoupon.amount) + "\n        ") ]) : n("span", {
                    staticClass: "price-number",
                    style: {
                        "line-height": e.isEnvironmentalRecycling ? "150rpx" : "84rpx"
                    }
                }, [ e._v("\n          " + e._s(e.coupon.list && e.coupon.list.length > 0 && e.coupon.selectIndex > -1 && e.inquiryInfo.amount ? e.inquiryInfo.amount + e.coupon.list[e.coupon.selectIndex].amount : e.inquiryInfo.amount) + "\n        ") ]), e._v(" "), e.isEnvironmentalRecycling && e.isPpvEnvironmentalRecycling ? n("span", {
                    staticClass: "price-tips",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: e.jumpWebview
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/index/%E5%88%86%E7%BB%84%403x.png",
                        alt: ""
                    }
                }) ]) : e._e(), e._v(" "), e.isEnvironmentalRecycling ? e._e() : n("div", {
                    staticClass: "nextweek"
                }, [ n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps%2Fearth%2Finquiry%2Fnextweek.png",
                        alt: ""
                    }
                }), e._v(" "), n("span", [ e._v("预计一周后下降" + e._s(e.inquiryInfo.downPrice) + "元") ]) ]) ]), e._v(" "), n("div", {
                    staticClass: "right"
                }, [ e.cityInfo ? n("span", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: e.handleChangeCity
                    }
                }, [ e._v(e._s(e.cityInfo.name)) ]) : e._e(), e._v(" "), e.isEnvironmentalRecycling ? e._e() : n("div", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: e.handleReinquiry
                    }
                }, [ e._v("重新询价") ]) ]) ]) : e._e(), e._v(" "), n("div", {
                    staticClass: "coupon-box"
                }, [ n("div", {
                    staticClass: "single",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(t) {
                            e.handleShowRule("clearDataDesc");
                        }
                    }
                }, [ n("span", {
                    staticClass: "title"
                }, [ e._v("旧机数据安全清除") ]), e._v(" "), n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/inquiry/question.png",
                        alt: ""
                    }
                }), e._v(" "), n("span", {
                    staticClass: "static"
                }, [ e._v("50") ]) ]), e._v(" "), e.isEnvironmentalRecycling || !(e.coupon.list && e.coupon.list.length || e.isShowArea) && e.userInfo.mobile ? e._e() : n("div", {
                    staticClass: "single",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: e.handleClickCoupon
                    }
                }, [ e.userInfo.mobile ? e.isShowArea ? n("span", {
                    staticClass: "title"
                }, [ e._v("限时加价") ]) : e._e() : n("span", {
                    staticClass: "title"
                }, [ e._v("\n          " + e._s(e.extraInfo.packageCode ? "限时高价加价券¥" + e.extraInfo.promotions[0].amount + "等你领" : "加价券") + "\n        ") ]), e._v(" "), n("span", {
                    staticClass: "title"
                }, [ e._v(e._s(e.isSelectedPercent ? "百分比加价券" : "加价券")) ]), e._v(" "), e.isShowArea ? n("span", {
                    staticClass: "tips"
                }, [ e._v("48小时内交易有效") ]) : e._e(), e._v(" "), e.isShowArea || e.isSelectedPercent ? n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/inquiry/question.png",
                        eventid: "4"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation(), e.handleClickQuestion(t);
                        }
                    }
                }) : e._e(), e._v(" "), n("span", {
                    staticClass: "arrow"
                }), e._v(" "), e.userInfo.mobile && !e.isShowArea && e.coupon.list && -1 != e.coupon.selectIndex ? n("span", {
                    staticClass: "content"
                }, [ e._v("\n\t\t\t\t\t" + e._s(e.couponShowtext) + "\n\t\t\t\t") ]) : e._e(), e._v(" "), e.userInfo.mobile && !e.isShowArea && e.coupon.list && -1 == e.coupon.selectIndex ? n("span", {
                    staticClass: "content active"
                }, [ e._v("\n\t\t\t\t\t" + e._s(e.coupon.list.length) + "张可用\n\t\t\t\t") ]) : e._e(), e._v(" "), e.userInfo.mobile ? e._e() : n("button", {
                    staticClass: "content",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "5"
                    },
                    on: {
                        getphonenumber: e.couponGetPhoneNumber
                    }
                }, [ e._v("点击登录用券") ]) ], 1) ]), e._v(" "), e.isShowSwitchTab && !e.isEnvironmentalRecycling ? n("div", {
                    staticClass: "choose-recycle-box"
                }, [ e.isShowExpress && e.isFromFengchao ? n("span", {
                    class: e.currentRecycleType === e.recycleTypeJson.express ? "active" : "",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        tap: function(t) {
                            e.switchNav(4, "express");
                        }
                    }
                }, [ e._v("快递回收") ]) : e._e(), e._v(" "), e.isShowStore ? n("span", {
                    class: e.currentRecycleType === e.recycleTypeJson.store ? "active" : "",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        tap: function(t) {
                            e.switchNav(5, "store");
                        }
                    }
                }, [ e._v("门店回收") ]) : e._e(), e._v(" "), e.isShowOndoor ? n("span", {
                    class: e.currentRecycleType === e.recycleTypeJson.ondoor ? "active" : "",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        tap: function(t) {
                            e.switchNav(1, "ondoor");
                        }
                    }
                }, [ e._v("上门回收") ]) : e._e(), e._v(" "), e.isShowExpress && !e.isFromFengchao ? n("span", {
                    class: e.currentRecycleType === e.recycleTypeJson.express ? "active" : "",
                    attrs: {
                        eventid: "10"
                    },
                    on: {
                        tap: function(t) {
                            e.switchNav(4, "express");
                        }
                    }
                }, [ e._v("快递回收") ]) : e._e() ]) : e._e(), e._v(" "), !e.hasSupportrecycleTypeLoad || e.supportRecycleType.length || e.isEnvironmentalRecycling ? e._e() : n("div", {
                    staticClass: "no-recycleType"
                }, [ n("img", {
                    staticClass: "no",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/inquiry/noSupport.png",
                        alt: ""
                    }
                }), e._v(" "), n("span", [ e._v("抱歉，您的设备暂时无法回收") ]) ]), e._v(" "), e.hasSupportrecycleTypeLoad ? n("div", {
                    staticClass: "single-recycle-box"
                }, [ e.currentRecycleType === e.recycleTypeJson.store || e.recycleTypeHasClick.store ? n("Store", {
                    attrs: {
                        cityInfo: e.cityInfo,
                        locationInfo: e.locationInfo,
                        show: e.currentRecycleType === e.recycleTypeJson.store,
                        mpcomid: "6"
                    }
                }) : e._e(), e._v(" "), e.currentRecycleType === e.recycleTypeJson.express || e.recycleTypeHasClick.express ? n("express-mode", {
                    attrs: {
                        cityInfo: e.cityInfo,
                        locationInfo: e.locationInfo,
                        customSource: e.customSource,
                        show: e.currentRecycleType === e.recycleTypeJson.express,
                        eventid: "11",
                        mpcomid: "7"
                    },
                    on: {
                        setCustomPageSupport: e.setCustomPageSupport,
                        compareAreaAndDefault: e.compareAreaAndDefault
                    }
                }) : e._e(), e._v(" "), e.currentRecycleType === e.recycleTypeJson.ondoor || e.recycleTypeHasClick.ondoor ? n("OnDoor", {
                    attrs: {
                        cityInfo: e.cityInfo,
                        locationInfo: e.locationInfo,
                        show: e.currentRecycleType === e.recycleTypeJson.ondoor,
                        mpcomid: "8"
                    }
                }) : e._e() ], 1) : n("div", {
                    staticClass: "no-recycleType"
                }, [ n("img", {
                    staticClass: "loading",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/inquiry/loading.png",
                        alt: ""
                    }
                }) ]), e._v(" "), e.isEnvironmentalRecycling ? n("div", {
                    staticClass: "environmental-recycling"
                }, [ e.isPpvEnvironmentalRecycling ? n("p", {
                    staticClass: "p1",
                    attrs: {
                        eventid: "12"
                    },
                    on: {
                        click: e.jumpWebview
                    }
                }, [ n("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/index/333.png",
                        alt: ""
                    }
                }) ]) : e._e(), e._v(" "), n("p", {
                    staticClass: "p2"
                }, [ n("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/index/111.png",
                        alt: ""
                    }
                }) ]), e._v(" "), n("p", {
                    staticClass: "p3"
                }, [ n("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/index/222.png",
                        alt: ""
                    }
                }) ]) ], 1) : e._e(), e._v(" "), e.supportRecycleType.length && !e.customPageAndNoSupport ? n("div", {
                    staticClass: "foot-tip"
                }, [ n("img", {
                    attrs: {
                        src: e.isServiesChecked ? "https://sr.aihuishou.com/miniapps/earth/icon-selected.png" : "https://sr.aihuishou.com/miniapps/earth/icon-unselected.png",
                        alt: "",
                        eventid: "13"
                    },
                    on: {
                        tap: function(t) {
                            e.toggleDataValue("isServiesChecked");
                        }
                    }
                }), e._v("\n      我已阅读并同意"), n("span", {
                    attrs: {
                        eventid: "14"
                    },
                    on: {
                        tap: e.handleTapService
                    }
                }, [ e._v("用户协议") ]), e._v("，并且确认机器来源合法\n    ") ]) : e._e(), e._v(" "), e.supportRecycleType.length && !e.customPageAndNoSupport ? n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "16"
                    },
                    on: {
                        submit: e.handleClickRecycle
                    }
                }, [ e.userInfo.mobile && e.supportRecycleType.length ? n("button", {
                    staticClass: "submit-btn",
                    class: e.isEnvironmentalRecycling ? "environmental" : "",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ n("p", [ e._v("立即回收") ]), e._v(" "), e.isEnvironmentalRecycling ? n("p", [ e._v("环保回收后机器无法退回") ]) : e._e() ], 1) : e._e(), e._v(" "), !e.userInfo.mobile && e.supportRecycleType.length ? n("button", {
                    staticClass: "submit-btn",
                    class: e.isEnvironmentalRecycling ? "environmental" : "",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        "form-type": "submit",
                        eventid: "15"
                    },
                    on: {
                        getphonenumber: e.submitGetPhoneNumber
                    }
                }, [ n("p", [ e._v("立即回收") ]), e._v(" "), e.isEnvironmentalRecycling ? n("p", [ e._v("环保回收后机器无法退回") ]) : e._e() ], 1) : e._e() ], 1) : e._e(), e._v(" "), !e.supportRecycleType.length && e.hasSupportrecycleTypeLoad ? n("button", {
                    staticClass: "submit-btn ban"
                }, [ e._v("当前城市暂不支持环保回收") ]) : e._e(), e._v(" "), n("div", {
                    class: e.couponShowPop ? "choose-coupon active" : "choose-coupon"
                }, [ n("div", {
                    staticClass: "mask",
                    attrs: {
                        eventid: "17"
                    },
                    on: {
                        tap: function(t) {
                            e.toggleDataValue("couponShowPop");
                        }
                    }
                }), e._v(" "), n("div", {
                    staticClass: "coupon-container"
                }, [ n("div", {
                    staticClass: "header"
                }, [ n("span", {
                    staticClass: "cancel",
                    attrs: {
                        eventid: "18"
                    },
                    on: {
                        tap: function(t) {
                            e.toggleDataValue("couponShowPop");
                        }
                    }
                }, [ e._v("取消") ]), e._v(" "), n("span", {
                    staticClass: "title"
                }, [ e._v("选择加价券") ]), e._v(" "), e.couponShowSubmit ? n("span", {
                    staticClass: "confirm",
                    attrs: {
                        eventid: "19"
                    },
                    on: {
                        tap: e.couponSubmit
                    }
                }, [ e._v("提交订单") ]) : e._e() ]), e._v(" "), n("scroll-view", {
                    staticClass: "coupon-body",
                    attrs: {
                        "scroll-y": ""
                    }
                }, [ n("div", {
                    staticClass: "desc"
                }, [ e._v("可用加价券(" + e._s(e.coupon.list && e.coupon.list.length) + ")") ]), e._v(" "), n("div", {
                    staticClass: "tips"
                }, [ e._v("机器质检后，满足加价券使用条件，券金额生效") ]), e._v(" "), n("div", {
                    staticClass: "dont-use-coupon select-icon",
                    class: e.coupon.selectedId ? "" : "active",
                    attrs: {
                        eventid: "20"
                    },
                    on: {
                        tap: function(t) {
                            e.chooseCoupon("", -1);
                        }
                    }
                }, [ e._v("不使用优惠券\n          ") ]), e._v(" "), e._l(e.coupon.list, function(t, o) {
                    return e.coupon.list && e.coupon.list.length ? n("div", {
                        key: t.couponCode,
                        staticClass: "single-coupon select-icon",
                        class: e.coupon.selectedId === t.couponCode ? "active" : "",
                        attrs: {
                            eventid: "21-" + o
                        },
                        on: {
                            tap: function(n) {
                                e.chooseCoupon(t.couponCode, o);
                            }
                        }
                    }, [ n("div", {
                        staticClass: "coupon-price"
                    }, [ n("span", {
                        staticClass: "number",
                        class: t.isPercent ? "active" : ""
                    }, [ e._v(e._s(t.isPercent ? t.percent : t.amount)) ]), e._v(" "), n("span", {
                        staticClass: "condition"
                    }, [ e._v("\n                " + e._s(t.isPercent ? "当前估价加¥" + t.amount : "满" + t.minPriceLimit + "可用") + "\n              ") ]) ]), e._v(" "), n("div", {
                        staticClass: "coupon-desc",
                        class: t.isPercent ? "active" : ""
                    }, [ n("span", {
                        staticClass: "name"
                    }, [ e._v(e._s(t.name)) ]), e._v(" "), t.isPercent ? n("span", {
                        staticClass: "desc"
                    }, [ e._v("满¥" + e._s(t.minPriceLimit) + "可用  最高加¥" + e._s(t.maxPriceLimit)) ]) : e._e(), e._v(" "), n("span", {
                        staticClass: "date"
                    }, [ e._v(e._s(t.endTime) + "到期") ]) ]) ]) : e._e();
                }) ], 2) ], 1) ]), e._v(" "), e.isShowAreaMask ? n("div", {
                    staticClass: "area-mask",
                    attrs: {
                        eventid: "24"
                    },
                    on: {
                        click: function(t) {
                            e.toggleDataValue("isShowAreaMask");
                        }
                    }
                }, [ n("div", {
                    staticClass: "area-container"
                }, [ n("div", {
                    staticClass: "title"
                }, [ e._v("\n          区域促销活动说明\n          "), n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/inquiry/icon-cancel.png",
                        alt: "",
                        eventid: "22"
                    },
                    on: {
                        tap: function(t) {
                            t.stopPropagation(), e.toggleDataValue("isShowAreaMask");
                        }
                    }
                }) ]), e._v(" "), n("div", {
                    staticClass: "area-content",
                    attrs: {
                        eventid: "23"
                    },
                    on: {
                        tap: function(t) {
                            t.stopPropagation(), e.stop(t);
                        }
                    }
                }, [ n("p", [ e._v("提交订单后48小时内完成交易，即可获得闪电加价。回收要趁早，切忌葛优躺。") ]), e._v(" "), n("p", [ e._v("活动细则：") ]), e._v(" "), n("p", [ e._v("1. 活动仅限当前城市，提交订单后跨城市交易无法享受闪电加价。") ]), e._v(" "), n("p", [ e._v("2. 自己联系快递无法享受闪电加价。") ]), e._v(" "), n("p", [ e._v("3. 订单交易过程中，若质检后实际属性和选择的属性不符，无法获得闪电加价，按实际质检后价格成交。") ]) ], 1) ]) ]) : e._e(), e._v(" "), n("div", {
                    staticClass: "selece-source",
                    class: e.showSourceSelect ? "active" : "",
                    attrs: {
                        eventid: "29"
                    },
                    on: {
                        tap: function(t) {
                            e.toggleDataValue("showSourceSelect");
                        }
                    }
                }, [ n("div", {
                    staticClass: "content"
                }, [ n("div", {
                    staticClass: "source-title"
                }, [ e._v("选择机器来源") ]), e._v(" "), n("div", {
                    staticClass: "source-tips"
                }, [ e._v("请确保您的机器来源合法，爱回收网保证不收取任何赃机") ]), e._v(" "), n("span", {
                    attrs: {
                        eventid: "25"
                    },
                    on: {
                        tap: function(t) {
                            e.handleTapSource("自购");
                        }
                    }
                }, [ e._v("自购") ]), e._v(" "), n("span", {
                    attrs: {
                        eventid: "26"
                    },
                    on: {
                        tap: function(t) {
                            e.handleTapSource("他人赠送");
                        }
                    }
                }, [ e._v("他人赠送") ]), e._v(" "), n("span", {
                    attrs: {
                        eventid: "27"
                    },
                    on: {
                        tap: function(t) {
                            e.handleTapSource("活动获得");
                        }
                    }
                }, [ e._v("活动获得") ]), e._v(" "), n("span", {
                    attrs: {
                        eventid: "28"
                    },
                    on: {
                        tap: function(t) {
                            e.handleTapSource("其他");
                        }
                    }
                }, [ e._v("其他") ]) ]) ]), e._v(" "), n("RuleModel", {
                    attrs: {
                        title: e.rule.title,
                        showRule: e.rule.show,
                        onClose: function() {
                            return e.handleShowRule(!1);
                        },
                        rules: e.rule.desc,
                        mpcomid: "9"
                    }
                }) ], 1) : e._e();
            },
            staticRenderFns: []
        };
        t.a = o;
    },
    lKxn: function(e, t) {},
    ozJE: function(e, t, n) {
        "use strict";
        var o = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                    Object.defineProperty(e, o.key, o);
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t;
            };
        }(), a = function() {
            function e(t) {
                (function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                })(this, e), this.ak = t.ak;
            }
            return o(e, [ {
                key: "getWXLocation",
                value: function(e, t, n, o) {
                    e = e || "gcj02", t = t || function() {}, n = n || function() {}, o = o || function() {}, 
                    wx.getLocation({
                        type: e,
                        success: t,
                        fail: n,
                        complete: o
                    });
                }
            }, {
                key: "search",
                value: function(e) {
                    var t = {
                        query: (e = e || {}).query || "生活服务$美食&酒店",
                        scope: e.scope || 1,
                        filter: e.filter || "",
                        coord_type: e.coord_type || 2,
                        page_size: e.page_size || 10,
                        page_num: e.page_num || 0,
                        output: e.output || "json",
                        ak: this.ak,
                        sn: e.sn || "",
                        timestamp: e.timestamp || "",
                        radius: e.radius || 2e3,
                        ret_coordtype: "gcj02ll"
                    }, n = {
                        iconPath: e.iconPath,
                        iconTapPath: e.iconTapPath,
                        width: e.width,
                        height: e.height,
                        alpha: e.alpha || 1,
                        success: e.success || function() {},
                        fail: e.fail || function() {}
                    }, o = function(e) {
                        t.location = e.latitude + "," + e.longitude, wx.request({
                            url: "https://api.map.baidu.com/place/v2/search",
                            data: t,
                            header: {
                                "content-type": "application/json"
                            },
                            method: "GET",
                            success: function(e) {
                                var t = e.data;
                                if (0 === t.status) {
                                    var o = t.results, a = {};
                                    a.originalData = t, a.wxMarkerData = [];
                                    for (var i = 0; i < o.length; i++) a.wxMarkerData[i] = {
                                        id: i,
                                        latitude: o[i].location.lat,
                                        longitude: o[i].location.lng,
                                        title: o[i].name,
                                        iconPath: n.iconPath,
                                        iconTapPath: n.iconTapPath,
                                        address: o[i].address,
                                        telephone: o[i].telephone,
                                        alpha: n.alpha,
                                        width: n.width,
                                        height: n.height
                                    };
                                    n.success(a);
                                } else n.fail({
                                    errMsg: t.message,
                                    statusCode: t.status
                                });
                            },
                            fail: function(e) {
                                n.fail(e);
                            }
                        });
                    };
                    if (e.location) {
                        var a = e.location.split(",")[1];
                        o({
                            errMsg: "input location",
                            latitude: e.location.split(",")[0],
                            longitude: a
                        });
                    } else this.getWXLocation("gcj02", o, function(e) {
                        n.fail(e);
                    }, function() {});
                }
            }, {
                key: "suggestion",
                value: function(e) {
                    var t = {
                        query: (e = e || {}).query || "",
                        region: e.region || "全国",
                        city_limit: e.city_limit || !1,
                        output: e.output || "json",
                        ak: this.ak,
                        sn: e.sn || "",
                        timestamp: e.timestamp || "",
                        ret_coordtype: "gcj02ll"
                    }, n = {
                        success: e.success || function() {},
                        fail: e.fail || function() {}
                    };
                    wx.request({
                        url: "https://api.map.baidu.com/place/v2/suggestion",
                        data: t,
                        header: {
                            "content-type": "application/json"
                        },
                        method: "GET",
                        success: function(e) {
                            var t = e.data;
                            0 === t.status ? n.success(t) : n.fail({
                                errMsg: t.message,
                                statusCode: t.status
                            });
                        },
                        fail: function(e) {
                            n.fail(e);
                        }
                    });
                }
            }, {
                key: "regeocoding",
                value: function(e) {
                    var t = {
                        coordtype: (e = e || {}).coordtype || "gcj02ll",
                        pois: e.pois || 0,
                        output: e.output || "json",
                        ak: this.ak,
                        sn: e.sn || "",
                        timestamp: e.timestamp || "",
                        ret_coordtype: "gcj02ll"
                    }, n = {
                        iconPath: e.iconPath,
                        iconTapPath: e.iconTapPath,
                        width: e.width,
                        height: e.height,
                        alpha: e.alpha || 1,
                        success: e.success || function() {},
                        fail: e.fail || function() {}
                    }, o = function(e) {
                        t.location = e.latitude + "," + e.longitude, wx.request({
                            url: "https://api.map.baidu.com/geocoder/v2/",
                            data: t,
                            header: {
                                "content-type": "application/json"
                            },
                            method: "GET",
                            success: function(t) {
                                var o = t.data;
                                if (0 === o.status) {
                                    var a = o.result, i = {};
                                    i.originalData = o, i.wxMarkerData = [], i.wxMarkerData[0] = {
                                        id: 0,
                                        latitude: e.latitude,
                                        longitude: e.longitude,
                                        address: a.formatted_address,
                                        iconPath: n.iconPath,
                                        iconTapPath: n.iconTapPath,
                                        desc: a.sematic_description,
                                        business: a.business,
                                        alpha: n.alpha,
                                        width: n.width,
                                        height: n.height
                                    }, n.success(i);
                                } else n.fail({
                                    errMsg: o.message,
                                    statusCode: o.status
                                });
                            },
                            fail: function(e) {
                                n.fail(e);
                            }
                        });
                    };
                    if (e.location) {
                        var a = e.location.split(",")[1];
                        o({
                            errMsg: "input location",
                            latitude: e.location.split(",")[0],
                            longitude: a
                        });
                    } else this.getWXLocation("gcj02", o, function(e) {
                        n.fail(e);
                    }, function() {});
                }
            }, {
                key: "weather",
                value: function(e) {
                    var t = {
                        coord_type: (e = e || {}).coord_type || "gcj02",
                        output: e.output || "json",
                        ak: this.ak,
                        sn: e.sn || "",
                        timestamp: e.timestamp || ""
                    }, n = {
                        success: e.success || function() {},
                        fail: e.fail || function() {}
                    }, o = function(e) {
                        t.location = e.longitude + "," + e.latitude, wx.request({
                            url: "https://api.map.baidu.com/telematics/v3/weather",
                            data: t,
                            header: {
                                "content-type": "application/json"
                            },
                            method: "GET",
                            success: function(e) {
                                var t = e.data;
                                if (0 === t.error && "success" === t.status) {
                                    var o = t.results, a = {};
                                    a.originalData = t, a.currentWeather = [], a.currentWeather[0] = {
                                        currentCity: o[0].currentCity,
                                        pm25: o[0].pm25,
                                        date: o[0].weather_data[0].date,
                                        temperature: o[0].weather_data[0].temperature,
                                        weatherDesc: o[0].weather_data[0].weather,
                                        wind: o[0].weather_data[0].wind
                                    }, n.success(a);
                                } else n.fail({
                                    errMsg: t.message,
                                    statusCode: t.status
                                });
                            },
                            fail: function(e) {
                                n.fail(e);
                            }
                        });
                    };
                    if (e.location) {
                        var a = e.location.split(",")[0];
                        o({
                            errMsg: "input location",
                            latitude: e.location.split(",")[1],
                            longitude: a
                        });
                    } else this.getWXLocation("gcj02", o, function(e) {
                        n.fail(e);
                    }, function() {});
                }
            } ]), e;
        }();
        e.exports.BMapWX = a;
    },
    s1Az: function(e, t, n) {
        "use strict";
        var o = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return e.storeDateList && e.storeDateList.length ? n("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.show,
                        expression: "show"
                    } ],
                    staticClass: "store-container"
                }, [ n("div", {
                    staticClass: "info-item"
                }, [ n("span", [ e._v(e._s(e.selectShop.name)) ]), e._v(" "), n("span", {
                    staticClass: "change",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: e.changeShop
                    }
                }, [ e._v("更改") ]) ]), e._v(" "), n("div", {
                    staticClass: "info-item"
                }, [ n("span", {
                    staticClass: "address",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: e.handleClickMap
                    }
                }, [ e._v(e._s(e.selectShop.address)) ]), e._v(" "), n("span", {
                    staticClass: "phone",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: e.handleClickPhone
                    }
                }) ]), e._v(" "), n("div", {
                    staticClass: "info-item"
                }, [ e.storeDateList.length ? n("picker", {
                    staticClass: "date-select",
                    attrs: {
                        mode: "multiSelector",
                        value: [ e.dateStoreColumnIndex, e.timeStoreColumnIndex ],
                        range: e.storeDateList,
                        "range-key": "name",
                        eventid: "3"
                    },
                    on: {
                        change: e.handleStorePickerChange,
                        columnchange: e.handleStorePickerColumnChange
                    }
                }, [ n("span", {
                    staticClass: "time"
                }, [ e._v("预约时间:") ]), e._v(" "), e.formartedStoreDate && e.formartedStoreDate.length ? n("span", [ e._v("\n          " + e._s(e.formartedStoreDate[e.dateStoreColumnIndex].name) + "-" + e._s(e.formartedStoreTime[e.dateStoreColumnIndex][e.timeStoreColumnIndex].name) + "\n        ") ]) : e._e(), e._v(" "), n("span", {
                    staticClass: "change"
                }, [ e._v("更改") ]) ]) : e._e() ], 1) ]) : e._e();
            },
            staticRenderFns: []
        };
        t.a = o;
    },
    x9Er: function(e, t) {}
}, [ "+9ee" ]);