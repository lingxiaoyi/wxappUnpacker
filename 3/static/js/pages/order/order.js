global.webpackJsonp([ 21 ], {
    "0wiy": function(t, e, i) {
        "use strict";
        var s = i("GqUp"), n = i("5KIq");
        var a = function(t) {
            i("bfuf");
        }, o = i("ybqe")(s.a, n.a, a, "data-v-1635a310", null);
        e.a = o.exports;
    },
    "5KIq": function(t, e, i) {
        "use strict";
        var s = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "order-page"
                }, [ i("div", {
                    staticClass: "section-inquiry"
                }, [ i("img", {
                    staticClass: "order-success-icon",
                    attrs: {
                        src: t.okIcon
                    }
                }), t._v(" "), i("div", {
                    staticClass: "product-name "
                }, [ t._v("订单提交成功\n      "), i("span", {
                    staticClass: "product-money"
                }, [ t._v(t._s(t.orderInfo.amount) + " 元") ]) ]), t._v(" "), i("div", {
                    staticClass: "order-tip"
                }, [ t._v("\n      请使用订单关联手机\n      "), i("span", {
                    staticClass: "user-phone",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.showtip
                    }
                }, [ t._v(t._s(t.phonenumber)) ]), t._v("\n      登录爱回收账户\n    ") ]) ]), t._v(" "), t.helpInfo.isShowBanner ? i("div", {
                    staticClass: "friendAssistance"
                }, [ i("navigator", {
                    attrs: {
                        url: t.helpInfo.url
                    }
                }, [ i("img", {
                    attrs: {
                        src: t.helpInfo.bannerImage
                    }
                }) ]) ], 1) : t._e(), t._v(" "), t.helpInfo.isShowPopup ? i("div", {
                    staticClass: "friend-popup"
                }, [ i("div", {
                    staticClass: "mask-layer",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: t.handleonClosePopup
                    }
                }), t._v(" "), i("div", {
                    staticClass: "friend-popup-container"
                }, [ i("button", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.handleOnNavToSharePrice
                    }
                }) ], 1) ]) : t._e(), t._v(" "), 2 === t.orderInfo.expressType ? i("div", [ i("div", {
                    staticClass: "cabinet-container"
                }, [ i("div", {
                    staticClass: "cabinet-title"
                }, [ t._v("邮寄信息") ]), t._v(" "), i("div", [ t._v("前往快递柜，点击柜机屏幕【寄包裹】并输入寄件码") ]), t._v(" "), i("div", {
                    staticClass: "cabinet-tips"
                }, [ t._v("投入前请进行妥善包装，以防物品损坏") ]), t._v(" "), i("div", [ t._v("寄件码：") ]), t._v(" "), i("div", {
                    staticClass: "cabinet-code"
                }, [ t._v(t._s(t.orderInfo.expressCabinet.boxCode)) ]), t._v(" "), i("div", [ t._v("寄件码有效期至：" + t._s(t.orderInfo.expressCabinet.boxCodeExpireTime)) ]) ]), t._v(" "), i("div", {
                    staticClass: "cabinet-tips-container",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        tap: t.navigateToCabientList
                    }
                }, [ i("div", {
                    staticClass: "cabinet-left"
                }, [ t.nearestCabinetDistance && t.nearestCabinetDistance > 0 ? i("div", [ t._v("最近的快递柜距您" + t._s(t.nearestCabinetDistance) + "米\n        ") ]) : i("div", [ t._v("无法获取定位") ]), t._v(" "), i("div", {
                    staticClass: "color1380ff"
                }, [ i("i"), t._v(" "), i("span", [ t._v(t._s(t.nearestCabinetDistance && t.nearestCabinetDistance > 0 ? "查看附近快递柜>>" : "点击获取定位授权")) ]) ], 1) ]), t._v(" "), t._m(0) ]) ]) : t._e(), t._v(" "), "store" === t.tradetype ? i("div", [ i("div", {
                    staticClass: "section"
                }, [ t._m(1), t._v(" "), i("div", {
                    staticClass: "foot-note-group"
                }, [ i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-idcard",
                    attrs: {
                        src: t.iconIdcard
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            准备好身份证\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note foot-note_question"
                }, [ i("img", {
                    staticClass: "icon-questions",
                    attrs: {
                        src: t.iconQuestion
                    }
                }), t._v(" "), i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-clock",
                    attrs: {
                        src: t.iconClock
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            手动解除" + t._s(t.identity) + "账户\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-power",
                    attrs: {
                        src: t.iconPower
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            充电至50%以上\n          ") ]) ]) ]) ]), t._v(" "), t._m(2) ]) : t._e(), t._v(" "), "express" === t.tradetype ? i("div", [ i("div", {
                    staticClass: "section"
                }, [ t._m(3), t._v(" "), "sf" == t.expressType ? i("div", {
                    staticClass: "foot-note-group"
                }, [ i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-idcard",
                    attrs: {
                        src: t.iconIdcard
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            准备好身份证\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note foot-note_question"
                }, [ i("img", {
                    staticClass: "icon-questions",
                    attrs: {
                        src: t.iconQuestion
                    }
                }), t._v(" "), i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-clock",
                    attrs: {
                        src: t.iconClock
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            手动解除" + t._s(t.identity) + "账户\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-power",
                    attrs: {
                        src: t.iconPower
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            充电至50%以上\n          ") ]) ]) ]) : i("div", {
                    staticClass: "foot-note-group"
                }, [ i("div", {
                    staticClass: "foot-note foot-note_question"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-clock",
                    attrs: {
                        src: t.iconClock
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            手动解除" + t._s(t.identity) + "账户\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-power",
                    attrs: {
                        src: t.iconPower
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            充电至50%以上\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-express",
                    attrs: {
                        src: t.iconExpress
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            联系快递\n          ") ]) ]) ]) ]), t._v(" "), i("div", {
                    staticClass: "section-ondoor-tips"
                }, [ "sf" === t.expressType ? i("span", [ t._v("顺丰上门人员信息稍后短信至您的手机") ]) : "sdy" === t.expressType ? i("span", [ t._v("寄件码已发至您的手机") ]) : i("span", [ t._v("快递地址已发至您的手机") ]), t._v(" "), i("span", [ t._v("如验货无误，收到机器后48小时放款") ]) ]) ]) : t._e(), t._v(" "), "ondoor" === t.tradetype || "metro" === t.tradetype ? i("div", [ i("div", {
                    staticClass: "section"
                }, [ t._m(4), t._v(" "), i("div", {
                    staticClass: "foot-note-group"
                }, [ i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-idcard",
                    attrs: {
                        src: t.iconIdcard
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            准备好身份证\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note foot-note_question"
                }, [ i("img", {
                    staticClass: "icon-questions",
                    attrs: {
                        src: t.iconQuestion
                    }
                }), t._v(" "), i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-clock",
                    attrs: {
                        src: t.iconClock
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            手动解除" + t._s(t.identity) + "账户\n          ") ]) ]), t._v(" "), i("div", {
                    staticClass: "foot-note"
                }, [ i("div", {
                    staticClass: "foot-note_icon"
                }, [ i("img", {
                    staticClass: "icon-power",
                    attrs: {
                        src: t.iconPower
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "foot-note_text"
                }, [ t._v("\n            充电至80%以上\n          ") ]) ]) ]) ]), t._v(" "), t._m(5) ]) : t._e(), t._v(" "), i("div", {
                    staticClass: "bottom-button"
                }, [ i("button", {
                    attrs: {
                        type: "primary",
                        eventid: "4"
                    },
                    on: {
                        tap: t.handleOnTapCheckOrder
                    }
                }, [ t._v("查看订单") ]) ], 1) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "cabinet-right"
                }, [ e("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/cabinet/bitmap.png"
                    }
                }) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "section-title"
                }, [ e("span", [ this._v("回收须知") ]) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "section-ondoor-tips"
                }, [ e("text", [ this._v("门店信息已发至您的手机，请3天内前往门店交易") ]), this._v(" "), e("text", [ this._v("交易成功，当面支付现金") ]) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "section-title"
                }, [ e("span", [ this._v("回收须知") ]) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "section-title"
                }, [ e("span", [ this._v("回收须知") ]) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "section-ondoor-tips"
                }, [ e("span", [ this._v("工作人员将会致电联系您") ]), this._v(" "), e("span", [ this._v("回收成功，现场支付现金") ]) ]);
            } ]
        };
        e.a = s;
    },
    GqUp: function(t, e, i) {
        "use strict";
        var s = i("//Fk"), n = i.n(s), a = i("mvHQ"), o = i.n(a), c = i("QmSG"), r = i("jV6A"), d = i("X/E/"), p = getApp();
        e.a = {
            name: "index",
            data: function() {
                return {
                    productId: 0,
                    pollCount: 0,
                    piwikSource: "",
                    identity: "",
                    brandname: "",
                    isGetModel: !1,
                    orderInfo: {},
                    tradetype: "",
                    phonenumber: "",
                    okIcon: "https://sr.aihuishou.com/miniapps/earth/public/okicon.png",
                    iconIdcard: "https://sr.aihuishou.com/miniapps/earth/public/icon-idcard.png",
                    iconClock: "https://sr.aihuishou.com/miniapps/earth/public/icon-clock.png",
                    iconPower: "https://sr.aihuishou.com/miniapps/earth/public/icon-power.png",
                    iconExpress: "https://sr.aihuishou.com/miniapps/earth/public/icon-express.png",
                    iconQuestion: "https://sr.aihuishou.com/miniapps/earth/public/icon-question.png",
                    expressType: "",
                    receiveCouponType: "",
                    tracking: {
                        scene: "",
                        from: "",
                        activity_name: "",
                        receiveCouponType: "",
                        productName: "",
                        tradetype: ""
                    },
                    helpInfo: {
                        isShowPopup: !1,
                        isShowBanner: !1,
                        bannerImage: "https://sr.aihuishou.com/miniapps/earth/shareprice/order-banner.png",
                        popupImage: "https://sr.aihuishou.com/miniapps/earth/shareprice/order-popup.png",
                        url: "/pages/shareprice/shareprice?orderNo="
                    },
                    nearestCabinetDistance: 0,
                    nearCabinetList: []
                };
            },
            onShareAppMessage: function() {
                return console.log("test share"), {
                    title: "我在爱回收卖了旧机器，挣钱又环保，你也来试试",
                    path: "/pages/index/index",
                    imageUrl: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/earth_share_banner.png"
                };
            },
            onLoad: function(t) {
                var e = this;
                console.log(t);
                try {
                    wx.getStorageSync("pageFromCooperation") && this._piwik("miniapp/orderPage", "fromSudiyi", "basicInfo");
                } catch (t) {
                    console.warn("获取缓存失败");
                }
                this.productId = t.productId || 0, this.nearestCabinetDistance = wx.getStorageSync("nearestCabinetDistance") || 0, 
                this.orderNo = t.orderno, this.phonenumber = t.phone, wx.setNavigationBarTitle({
                    title: t.productname
                }), wx.getStorage({
                    key: "express",
                    success: function(t) {
                        e.expressType = t.data;
                    }
                }), this.fetchOrderInfo(t.orderno).then(function(i) {
                    e._piwik("miniapp/orderPage", e.piwikData(), "basicInfo");
                    var s = {
                        page_url: "/pages/order/order",
                        app_id: "10001",
                        app_version: "0.0.1",
                        user_unique_key: Object(r.i)(!1),
                        type: "2",
                        type_object: o()(i)
                    }, n = wx.getStorageSync("ad_click_id") || null;
                    if (n && (s.market_channel_params = o()({
                        click_id: n
                    }), s.market_channel = "1"), e.$axios({
                        url: "https://vito.aihuishou.com/action",
                        method: "POST",
                        data: s
                    }).then(function(t) {
                        console.log(t, "上报数据埋点");
                    }), i && i.joinedShareActivity) {
                        var a = e.helpInfo.url;
                        e.helpInfo.isShowPopup = "wx-push" !== t.from, e.helpInfo.isShowBanner = !0, e.helpInfo.url = a + i.orderItems[0].orderItemNo;
                    }
                    var c = e.orderInfo;
                    if (c.expressCabinet) {
                        var d = new Date(c.expressCabinet.boxCodeExpireTime), p = d.getFullYear() + "年" + (d.getMonth() + 1 + "月") + (d.getDate() + "日 ") + (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) + ":" + (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) + ":" + (d.getSeconds() ? "0" + d.getSeconds() : d.getSeconds());
                        e.orderInfo.expressCabinet.boxCodeExpireTime = p;
                    }
                });
            },
            onShow: function(t) {
                wx.getStorageSync("nearestCabinetDistance") || this.initCabinetInfo();
            },
            onUnload: function() {
                "wx-push" !== this.tracking.from && wx.navigateBack({
                    delta: 10
                });
            },
            methods: {
                handleOnNavToSharePrice: function() {
                    this._piwik("miniapp/orderPage", "sharefriend", "basicInfo"), wx.navigateTo({
                        url: this.helpInfo.url
                    });
                },
                initCabinetInfo: function() {
                    var t = wx.getStorageSync("curLocation"), e = wx.getStorageSync("cabinetType");
                    t && t.code && (t = {
                        longitude: t.code.longitude,
                        latitude: t.code.latitude,
                        channel: e ? parseInt(e) : 1
                    }), t = "", this.getNearCabinetList(t);
                },
                fetchOrderInfo: function(t) {
                    var e = this;
                    return new n.a(function(i, s) {
                        e.$axios({
                            url: "/order/" + t,
                            params: {},
                            code: !0
                        }).then(function(s) {
                            switch (e.orderInfo = s.data, s.data.orderItems[0].product.brandId) {
                              case "184":
                                e.identity = "小米";
                                break;

                              case "24":
                                e.identity = "Flyme";
                                break;

                              case "365":
                                e.identity = "乐视";
                                break;

                              case "52":
                                e.identity = "iCloud";
                                break;

                              default:
                                e.identity = "";
                            }
                            c.d.forEach(function(t) {
                                t.type === s.data.pickupType && (4 === t.type && 1 === e.orderInfo.expressType && (t.value = "selfsend"), 
                                e.tradetype = t.value);
                            }), wx.setStorage({
                                key: t,
                                data: {
                                    amount: s.data.amount,
                                    tradetype: s.data.pickupType
                                }
                            }), i(s.data);
                        });
                    });
                },
                handleOnTapCheckOrder: function() {
                    p.jumpToWebview(d.f.order);
                },
                handleOnTapBackup: function() {
                    wx.navigateTo({
                        url: "help/backup-tutorial"
                    });
                },
                handleOnTapUnlock: function() {
                    wx.navigateTo({
                        url: "help/unlock-tutorial"
                    });
                },
                showtip: function() {
                    wx.showModal({
                        title: "",
                        content: "如果订单的号码不是您常用的号码，请返回重新提交订单。",
                        confirmText: "我知道了",
                        showCancel: !1
                    });
                },
                handleonClosePopup: function() {
                    this.helpInfo.isShowPopup = !1;
                },
                piwikData: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], e = this.phonenumber, i = this.orderInfo, s = this.productId, n = i.pickupType, a = i.amount, o = i.orderNo, r = "";
                    r = "submitDevice/" + i.orderItems[0].product.name + ";price/" + a + ";phone/" + e + ";tradeno/" + o + ";productId/" + s + ";", 
                    c.d.forEach(function(t) {
                        t.type === n && (r = r + "recycleType/" + t.value + ";");
                    });
                    var d = getCurrentPages();
                    if (d.length > 1) {
                        var p = d[d.length - 2];
                        r = r + "inquiryId/" + p.options.inquiryKey + ";";
                    } else r += "inquiryId/null;";
                    return t ? r.replace(/\//g, "_") : r;
                },
                navigateToCabientList: function() {
                    wx.getStorageSync("curLocation").code ? wx.navigateTo({
                        url: "/pages/cabinetList/cabinetList"
                    }) : wx.openSetting({
                        success: function() {
                            console.log("success");
                        }
                    });
                },
                getNearCabinetList: function(t) {
                    var e = this;
                    if (t) {
                        var i = t.longitude, s = t.latitude, n = t.channel;
                        this.$axios({
                            url: "/express-cabinet",
                            params: {
                                longitude: i,
                                latitude: s,
                                channel: n
                            },
                            code: !0
                        }).then(function(t) {
                            t && t.data && (wx.setStorageSync("cabinetList", t.data), e.getCabinetDistanceList(t.data), 
                            e.nearCabinetList = t.data);
                        });
                    }
                },
                getCabinetDistanceList: function(t) {
                    var e = this, i = 0, s = !0;
                    wx.getLocation({
                        type: "gcj02",
                        altitude: "true",
                        success: function(n) {
                            var a = n.latitude, o = n.longitude, c = t.map(function(t) {
                                var e = {
                                    latitude: a,
                                    longitude: o
                                }, n = {
                                    latitude: t.latitude,
                                    longitude: t.longitude
                                }, c = parseInt(p.calculateLineDistance(e, n).toFixed(0));
                                return i = c < i || s ? c : i, s = !1, c;
                            });
                            wx.setStorageSync("cabinetDistanceList", c), wx.setStorageSync("nearestCabinetDistance", i), 
                            e.cabinetDistanceList = c, e.nearestCabinetDistance = i;
                        }
                    });
                }
            }
        };
    },
    bfuf: function(t, e) {},
    fhZZ: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i("5nAL"), n = i.n(s), a = i("0wiy"), o = i("IcnI");
        n.a.prototype.$store = o.a, new n.a(a.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "订单信息",
                backgroundColor: "#ffffff",
                backgroundTextStyle: "light"
            }
        };
    }
}, [ "fhZZ" ]);