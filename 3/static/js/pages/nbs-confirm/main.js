global.webpackJsonp([ 32 ], {
    "XX/G": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("5nAL"), o = i.n(n), a = i("eUGW"), s = i("jV6A"), r = getApp();
        o.a.prototype._piwik = function() {
            for (var t = arguments.length, e = Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            return s.j.apply(void 0, [ r.globalData.scene ].concat(e));
        }, new o.a(a.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "确认订单",
                backgroundColor: "#F8F8F8",
                backgroundTextStyle: "light"
            }
        };
    },
    eUGW: function(t, e, i) {
        "use strict";
        var n = i("nRAR"), o = i("uWld");
        var a = function(t) {
            i("oofQ");
        }, s = i("ybqe")(n.a, o.a, a, "data-v-850411c8", null);
        e.a = s.exports;
    },
    nRAR: function(t, e, i) {
        "use strict";
        var n = i("Xxa5"), o = i.n(n), a = i("exGp"), s = i.n(a), r = i("Dd8w"), c = i.n(r), u = i("NYxO"), l = i("X/E/");
        e.a = {
            components: {},
            data: function() {
                return {
                    troubleList: [],
                    actionList: [],
                    actionIndex: "",
                    primitiveDateList: [],
                    isTicket: !1,
                    isProtocol: !0,
                    totalPrice: 0,
                    couponList: []
                };
            },
            computed: c()({}, Object(u.d)({
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
                },
                userInfo: function(t) {
                    return t.global.userInfo;
                }
            }), Object(u.c)([ "computedShopList" ]), {
                canSubmit: function() {
                    return this.isProtocol && this.actionList[this.actionIndex] && this.storeInfo.id;
                }
            }),
            onShow: function() {
                this.getTotalPrice(), this.getShopTimes();
            },
            mounted: function() {
                if (this.getCouponInfo(), !this.storeInfo.id) {
                    var t = this.computedShopList.filter(function(t) {
                        return t.repairServiceEnable;
                    }).sort(function(t, e) {
                        return t.dis - e.dis;
                    })[0];
                    this.setMaintainInfo([ "repairStore", t || {} ]);
                }
            },
            onUnload: function() {},
            methods: c()({}, Object(u.b)([ "setMaintainInfo", "setGlobalInfo", "doLoginWithButton" ]), {
                deleteItem: function(t) {
                    var e = this;
                    this.checkedOptions.length <= 1 || wx.showModal({
                        title: "是否确认删除？",
                        confirmText: "删除",
                        confirmColor: "#FC4343",
                        success: function(i) {
                            i.confirm && (e.setMaintainInfo([ "checkedOptions", e.checkedOptions.filter(function(e) {
                                return e.malfunctionId !== t.malfunctionId;
                            }) ]), e.getTotalPrice());
                        }
                    });
                },
                getTotalPrice: function() {
                    var t = this, e = this.$mp.query, i = e.productId, n = e.attributeId, o = e.attributeValueId;
                    this.$axios_dubai({
                        url: "/jikexiu/repair/product/solution-price",
                        method: "POST",
                        params: {
                            attributeId: n,
                            malfunctionIds: this.checkedOptions.map(function(t) {
                                return t.malfunctionId;
                            }).join(","),
                            productId: i,
                            valueId: o
                        }
                    }).then(function(e) {
                        return t.totalPrice = e.priceTotal;
                    });
                },
                showAction: function(t) {
                    console.log(t), this.actionIndex = parseInt(t.target.value);
                },
                getCouponInfo: function() {
                    var t = this;
                    return s()(o.a.mark(function e() {
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$axios_dubai({
                                    url: "/jikexiu/repair/coupon/info"
                                }).then(function(e) {
                                    t.couponList = (e || []).map(function(t) {
                                        return c()({}, t, {
                                            disabled: "50102" === t.statusForTake,
                                            checked: !1
                                        });
                                    });
                                });

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                receiveTicket: function(t) {
                    var e = this;
                    this.$axios_dubai({
                        url: "/jikexiu/repair/coupon/take/" + t.tplKey,
                        code: !0
                    }).then(function(i) {
                        e._shencePoint({
                            title: "维修订单确认页面",
                            event: "coupon",
                            package_id: t.tplKey,
                            promotion_id: ""
                        }), i.code ? wx.showToast({
                            icon: "none",
                            title: i.resultMessage
                        }) : e.couponList = e.couponList.map(function(e) {
                            return c()({}, e, {
                                checked: e.tplKey === t.tplKey || e.checked
                            });
                        });
                    });
                },
                getShopTimes: function() {
                    var t = this;
                    this.$axios_dubai({
                        url: "/jikexiu/repair/reservation-shop-time"
                    }).then(function(e) {
                        t.primitiveDateList = e || [], t.actionList = (e || []).map(function(t) {
                            return t.dateFormate;
                        });
                    });
                },
                changeStore: function() {
                    wx.navigateTo({
                        url: "/pages/nbs-shops/main?isRepair=1"
                    });
                },
                toggleProtocol: function() {
                    this.isProtocol = !this.isProtocol, console.log(this.isProtocol);
                },
                submit: function() {
                    var t = this;
                    if (console.log("userInfo", this.userInfo), this.canSubmit) {
                        var e = this.repairInfo, i = e.brandId, n = e.brandName, o = e.categoryId, a = e.categoryName, s = e.id, r = e.model, u = e.attrInfo, l = u.attributeId, p = u.name, d = u.id, h = u.attributeValue, f = this.primitiveDateList.find(function(e) {
                            return e.dateFormate === t.actionList[t.actionIndex];
                        });
                        this.setMaintainInfo([ "repairStore", c()({}, this.storeInfo, {
                            repairDate: f.dateFormate
                        }) ]);
                        var m = {
                            amount: this.totalPrice,
                            appointmentTime: f.date,
                            brandId: i,
                            brandName: n,
                            categoryId: o,
                            categoryName: a,
                            contactPhone: this.userInfo.mobile,
                            malfunctionModels: this.checkedOptions.map(function(t) {
                                var e = t.price, i = t.parentId, n = t.parentName, o = t.malfunctionId, a = t.name, s = t.solution;
                                return {
                                    malfunctionId: i,
                                    malfunctionName: n,
                                    malfunctionSubId: o,
                                    malfunctionSubName: a,
                                    price: e,
                                    solutionId: t.solutionId,
                                    solutionName: s
                                };
                            }),
                            productId: s,
                            productName: r,
                            propertyModels: [ {
                                ppnId: d,
                                ppnName: p,
                                ppvId: l,
                                ppvName: h
                            } ],
                            shopId: this.storeInfo.id
                        };
                        console.log(m), this.$axios_dubai({
                            url: "/jikexiu/repair/order/submit",
                            method: "POST",
                            params: m,
                            code: !0
                        }).then(function(e) {
                            if (console.log(e), !e.code) return t._shencePoint({
                                title: "维修订单确认页面",
                                event: "coupon",
                                package_id: s,
                                inquiry_id: "",
                                store_id: t.storeInfo.id,
                                order_id: e.data.orderNo
                            }), void wx.navigateTo({
                                url: "/pages/nbs-success/main?orderNo=" + e.data.orderNo
                            });
                            wx.showToast({
                                title: e.resultMessage,
                                icon: "none"
                            });
                        });
                    } else this.storeInfo.id ? this.actionList[this.actionIndex] ? this.isProtocol || wx.showToast({
                        title: "请先同意服务协议",
                        icon: "none",
                        duration: 1e3
                    }) : wx.showToast({
                        title: "请选择到店时间",
                        icon: "none",
                        duration: 1e3
                    }) : wx.showToast({
                        title: "请选择维修门店",
                        icon: "none",
                        duration: 1e3
                    });
                },
                getPhoneNumber: function(t) {
                    var e = this;
                    return s()(o.a.mark(function i() {
                        var n;
                        return o.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, e.doLoginWithButton([ t, e ]);

                              case 2:
                                if (i.sent.mobile) {
                                    i.next = 5;
                                    break;
                                }
                                return i.abrupt("return");

                              case 5:
                                if ("receiveTicket" !== (n = t.target.dataset).type) {
                                    i.next = 9;
                                    break;
                                }
                                return i.next = 9, e.getCouponInfo();

                              case 9:
                                e[n.type](n.item);

                              case 10:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                jump: function() {
                    this.jumpToWebview(l.d);
                }
            })
        };
    },
    oofQ: function(t, e) {},
    uWld: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "maintain-confirm",
                    class: t.isIphoneX && "isIphoneX"
                }, [ t._m(0), t._v(" "), i("div", {
                    staticClass: "repair-info"
                }, [ i("div", {
                    staticClass: "phone-name global-line"
                }, [ t._v(t._s(t.repairInfo.model)) ]), t._v(" "), i("ul", {
                    staticClass: "repair-list"
                }, t._l(t.checkedOptions, function(e, n) {
                    return i("li", {
                        key: n
                    }, [ i("div", {
                        staticClass: "left"
                    }, [ i("p", {
                        staticClass: "name"
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), i("p", {
                        staticClass: "desc"
                    }, [ t._v(t._s(e.solution)) ]) ], 1), t._v(" "), i("div", {
                        staticClass: "right"
                    }, [ i("p", {
                        staticClass: "price"
                    }, [ t._v(t._s(e.price > 0 ? e.price : "待检测")) ]), t._v(" "), t.checkedOptions.length > 1 ? i("p", {
                        staticClass: "delete",
                        attrs: {
                            eventid: "0-" + n
                        },
                        on: {
                            click: function(i) {
                                t.deleteItem(e);
                            }
                        }
                    }, [ i("img", {
                        attrs: {
                            src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/nbs/delete.png",
                            alt: ""
                        }
                    }) ]) : t._e() ], 1) ]);
                })) ], 1), t._v(" "), i("div", {
                    staticClass: "store-info"
                }, [ i("div", {
                    staticClass: "store",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.changeStore
                    }
                }, [ i("p", {
                    staticClass: "name"
                }, [ t._v(t._s(t.storeInfo.name || "请选择维修服务站")) ]), t._v(" "), i("p", {
                    staticClass: "address"
                }, [ t._v(t._s(t.storeInfo.address || "选择服务站 >")) ]) ], 1), t._v(" "), i("div", {
                    staticClass: "date"
                }, [ i("div", [ i("span", [ t._v("预约时间") ]), t._v(" "), i("picker", {
                    staticClass: "picker-box",
                    attrs: {
                        value: t.actionIndex,
                        range: t.actionList,
                        eventid: "2"
                    },
                    on: {
                        change: t.showAction
                    }
                }, [ i("view", {
                    staticClass: "picker"
                }, [ t.actionList[t.actionIndex] ? i("span", {
                    staticClass: "date-str"
                }, [ t._v(t._s(t.actionList[t.actionIndex])) ]) : t._e(), t._v(" "), t.actionList[t.actionIndex] ? t._e() : i("span", [ t._v("请选择时间") ]) ]) ]) ], 1), t._v(" "), i("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/new-index/arrow.png",
                        alt: ""
                    }
                }) ]) ]), t._v(" "), t._l(t.couponList, function(e, n) {
                    return e.disabled ? t._e() : i("div", {
                        key: n,
                        staticClass: "ticket-info"
                    }, [ i("div", {
                        staticClass: "left global-line"
                    }, [ i("span", {
                        staticClass: "img"
                    }), t._v(" "), i("span", {
                        staticClass: "name"
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), i("span", {
                        staticClass: "tip"
                    }, [ t._v("(维修成功后使用)") ]) ]), t._v(" "), t.userInfo.mobile ? i("span", {
                        class: e.checked && "isTicket",
                        attrs: {
                            eventid: "3-" + n
                        },
                        on: {
                            click: function(i) {
                                t.receiveTicket(e);
                            }
                        }
                    }, [ t._v(t._s(e.checked ? "已领取" : "领取")) ]) : t._e(), t._v(" "), t.userInfo.mobile ? t._e() : i("button", {
                        attrs: {
                            "open-type": "getPhoneNumber",
                            "data-type": "receiveTicket",
                            "data-item": e,
                            eventid: "4-" + n
                        },
                        on: {
                            getphonenumber: t.getPhoneNumber
                        }
                    }, [ t._v("领取\n    ") ]) ], 1);
                }), t._v(" "), i("div", {
                    staticClass: "treaty-info",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.toggleProtocol
                    }
                }, [ t.isProtocol ? t._e() : i("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/maintain/default.png",
                        alt: ""
                    }
                }), t._v(" "), t.isProtocol ? i("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/maintain/checked.png",
                        alt: ""
                    }
                }) : t._e(), t._v("\n    我已阅读并同意\n    "), i("span", {
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: t.jump
                    }
                }, [ t._v("极客修服务协议") ]) ]), t._v(" "), i("div", {
                    staticClass: "footer",
                    class: t.isIphoneX && "isIphoneX"
                }, [ i("div", {
                    staticClass: "left"
                }, [ i("p", {
                    staticClass: "price"
                }, [ i("span", [ t._v("合计: ") ]), i("span", [ t._v(t._s(t.totalPrice > 0 ? t.totalPrice : "待检测")) ]) ]), t._v(" "), i("p", [ t._v("维修成功后支付") ]) ], 1), t._v(" "), t.userInfo.mobile || !t.canSubmit ? i("div", {
                    staticClass: "right",
                    class: t.canSubmit && "active",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: t.submit
                    }
                }, [ t._v("\n      确认下单\n    ") ]) : t._e(), t._v(" "), !t.userInfo.mobile && t.canSubmit ? i("button", {
                    staticClass: "right",
                    class: t.canSubmit && "active",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        "data-type": "submit",
                        "data-item": "1",
                        eventid: "8"
                    },
                    on: {
                        getphonenumber: t.getPhoneNumber
                    }
                }, [ t._v("\n      确认下单\n    ") ]) : t._e() ], 1) ], 2);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "step"
                }, [ e("img", {
                    attrs: {
                        src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/nbs/step.png",
                        alt: ""
                    }
                }) ]);
            } ]
        };
        e.a = n;
    }
}, [ "XX/G" ]);