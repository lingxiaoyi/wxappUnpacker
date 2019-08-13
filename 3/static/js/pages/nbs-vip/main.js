global.webpackJsonp([ 2 ], {
    "+dNd": function(t, e, i) {
        "use strict";
        var n = i("woOf"), s = i.n(n), o = i("Xxa5"), a = i.n(o), r = i("exGp"), c = i.n(r), p = i("Dd8w"), u = i.n(p), v = i("Cz8s"), l = i("AmIV"), d = i("UUqx"), m = i("L+5M"), h = i("kGVV"), f = i("NYxO"), _ = i("oqQY"), b = i.n(_);
        e.a = {
            components: {
                VipType1: l.a,
                VipType2: d.a,
                model: m.a,
                qr: h.a,
                customHeader: v.a
            },
            data: function() {
                return {
                    showModel: !1,
                    showQR: !1,
                    currentFloor: 0,
                    vipInfo: {},
                    encryptString: ""
                };
            },
            computed: u()({}, Object(f.d)({
                userInfo: function(t) {
                    return t.global.userInfo;
                },
                systemInfo: function(t) {
                    return t.global.systemInfo;
                }
            }), Object(f.c)([ "cityInfo" ]), {
                style: function() {
                    return !this.showQR;
                },
                vipDetail: function() {
                    if (this.vipInfo.dubaiVipDetailList) {
                        var t = this.vipInfo.dubaiVipDetailList.find(function(t) {
                            return t.isOpen;
                        }), e = !1, i = b()().set("month", 1).startOf("month");
                        return t ? ((b()(t.endTime).isAfter(i) || b.a.isSame(i)) && (e = !0), 1 === t.memberType && this._shencePoint({
                            event: "vip_click_show",
                            type: "发烧友",
                            scene: ""
                        }), t ? u()({}, t, {
                            isValidTime: e
                        }) : {}) : {};
                    }
                    return this._shencePoint({
                        event: "vip_click_show",
                        type: "体验客",
                        scene: ""
                    }), this._shencePoint({
                        event: "vip_click_show",
                        type: "发烧友",
                        scene: ""
                    }), {};
                }
            }),
            onShow: function() {
                this.getVipInfo();
            },
            onUnload: function() {
                this.currentFloor = 0, this.showModel = !1, this.showQR = !1, this.vipInfo = {};
            },
            methods: u()({}, Object(f.b)([ "doLoginWithButton" ]), {
                handleFSY: function(t) {
                    this._shencePoint({
                        event: "vip_click",
                        type: "发烧友",
                        scene: t || "大卡片"
                    }), this.showModel = !this.showModel;
                },
                handleReceive: function(t) {
                    var e = this;
                    return c()(a.a.mark(function i() {
                        var n;
                        return a.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, e.$axios_dubai({
                                    url: "/user/exchange-member-right/" + t,
                                    method: "POST"
                                });

                              case 2:
                                if (!(n = i.sent).code) {
                                    i.next = 5;
                                    break;
                                }
                                return i.abrupt("return", wx.showToast({
                                    title: n.resultMessage,
                                    icon: "none"
                                }));

                              case 5:
                                wx.showToast({
                                    title: "领取成功 请至“我的-券包”中查看",
                                    icon: "none"
                                }), e.getVipInfo();

                              case 7:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                showQrcode: function() {
                    this.userInfo.mobile && (this.showQR = !0);
                },
                getVipInfo: function() {
                    var t = this;
                    this.$axios_dubai({
                        url: "/user/my-vip-center"
                    }).then(function(e) {
                        if (e.code) wx.showToast({
                            title: e.resultMessage,
                            icon: "none"
                        }); else {
                            t.encryptString = e.encryptString || "";
                            var i = e.dubaiVipDetailList.find(function(t) {
                                return t.isOpen;
                            });
                            i && 2 === i.memberType ? (i.endTime = b()(i.endTime).format("YYYY-MM-DD"), e.dubaiVipDetailList = [ i ]) : e.dubaiVipDetailList = e.dubaiVipDetailList.map(function(t) {
                                return s()(t, {
                                    endTime: b()(t.endTime).format("YYYY-MM-DD")
                                });
                            }), t.vipInfo = e;
                        }
                    });
                },
                openVipWithBtn: function(t, e) {
                    var i = this;
                    return c()(a.a.mark(function n() {
                        return a.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, i.doLoginWithButton([ t, i ]);

                              case 2:
                                if (n.sent.mobile) {
                                    n.next = 5;
                                    break;
                                }
                                return n.abrupt("return", wx.showToast({
                                    title: "登陆失败",
                                    icon: "none"
                                }));

                              case 5:
                                i.openVIP(e);

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, i);
                    }))();
                },
                openVIP: function(t) {
                    var e = this;
                    return c()(a.a.mark(function i() {
                        var n, s, o, r, c;
                        return a.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (e._shencePoint({
                                    event: "vip_click",
                                    type: "体验客",
                                    scene: t || "大卡片"
                                }), n = e.vipInfo.dubaiVipDetailList, s = n && n.length ? n[0] : {}, o = s.id) {
                                    i.next = 5;
                                    break;
                                }
                                return i.abrupt("return", wx.showToast({
                                    title: "暂无可用会员等级",
                                    icon: "none"
                                }));

                              case 5:
                                return i.next = 7, e.$axios_dubai({
                                    url: "/user/my-vip-info",
                                    data: {
                                        cityId: e.cityInfo.id || 1
                                    },
                                    code: !0
                                });

                              case 7:
                                if ((r = i.sent).code || !r.data || !r.data.isVip) {
                                    i.next = 10;
                                    break;
                                }
                                return i.abrupt("return", e.getVipInfo());

                              case 10:
                                return i.next = 12, e.$axios_dubai({
                                    url: "/user/create-vip/" + o,
                                    method: "post",
                                    code: !0
                                });

                              case 12:
                                if (!(c = i.sent).code) {
                                    i.next = 17;
                                    break;
                                }
                                return i.abrupt("return", wx.showToast({
                                    title: c.resultMessage,
                                    icon: "none"
                                }));

                              case 17:
                                wx.showToast({
                                    title: "您已成功开通 体验客",
                                    icon: "none"
                                });

                              case 18:
                                e.getVipInfo();

                              case 19:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                jumpToRule: function(t) {
                    wx.navigateTo({
                        url: "/pages/nbs-viprule/main?floor=" + t
                    });
                },
                scrollToFloor: function(t) {
                    this.currentFloor = t || 0;
                }
            })
        };
    },
    "3C5m": function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("scroll-view", {
                    staticClass: "vip-page",
                    attrs: {
                        "scroll-y": t.style,
                        "scroll-into-view": "floor" + (t.currentFloor || 0),
                        "scroll-with-animation": ""
                    }
                }, [ t.vipInfo.dubaiVipDetailList && t.vipInfo.dubaiVipDetailList.length ? i("swiper", {
                    staticClass: "swiper",
                    attrs: {
                        "previous-margin": "16px",
                        "next-margin": "36px"
                    }
                }, t._l(t.vipInfo.dubaiVipDetailList, function(e, n) {
                    return i("swiper-item", {
                        key: n,
                        staticClass: "item",
                        attrs: {
                            mpcomid: "2-" + n
                        }
                    }, [ 1 === e.memberType ? i("VipType1", {
                        attrs: {
                            showQR: t.showQR,
                            item: e,
                            eventid: "0-" + n,
                            mpcomid: "0-" + n
                        },
                        on: {
                            "update:showQR": function(e) {
                                t.showQR = e;
                            },
                            openVipWithBtn: t.openVipWithBtn,
                            open: t.openVIP,
                            scroll: t.scrollToFloor
                        }
                    }) : t._e(), t._v(" "), 2 === e.memberType ? i("VipType2", {
                        attrs: {
                            show: t.showModel,
                            showQR: t.showQR,
                            item: e,
                            eventid: "1-" + n,
                            mpcomid: "1-" + n
                        },
                        on: {
                            "update:show": function(e) {
                                t.showModel = e;
                            },
                            "update:showQR": function(e) {
                                t.showQR = e;
                            },
                            scroll: t.scrollToFloor
                        }
                    }) : t._e() ], 1);
                })) : t._e(), t._v(" "), i("div", {
                    staticClass: "coupon-list"
                }, [ t.vipInfo.dubaiAddPricePercentCouponList && t.vipInfo.dubaiAddPricePercentCouponList.length ? i("div", {
                    staticClass: "box floor1",
                    attrs: {
                        id: "floor1"
                    }
                }, [ i("div", {
                    staticClass: "title"
                }, [ i("span", [ t._v("每月回收加价券") ]), t._v(" "), i("span", {
                    staticClass: "arrow",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.jumpToRule(3);
                        }
                    }
                }, [ t._v("权益详情") ]) ]), t._v(" "), t.vipDetail.memberType ? t.vipDetail.memberType && t.vipDetail.isValidTime ? i("p", {
                    staticClass: "tips"
                }, [ t._v("\n        每月可领1次 每月1日刷新\n      ") ]) : t._e() : i("p", {
                    staticClass: "tips"
                }, [ t._v("\n        立即开通会员 领取专享回收加价券\n      ") ]), t._v(" "), i("div", {
                    staticClass: "content"
                }, t._l(t.vipInfo.dubaiAddPricePercentCouponList, function(e, n) {
                    return i("div", {
                        key: n,
                        class: [ 1 === e.memberType ? "type1" : "type2", 2 === e.status ? "active" : "", 2 === t.vipDetail.memberType ? "type3" : "" ]
                    }, [ i("p", [ t._v(t._s(e.percent || 0) + "%") ]), t._v(" "), i("p", [ t._v("满" + t._s(e.minPriceLimit) + "元可用 最高加价" + t._s(e.maxPriceLimit || 0) + "元") ]), t._v(" "), t.userInfo.mobile || 1 !== e.memberType ? t._e() : i("button", {
                        attrs: {
                            "open-type": "getPhoneNumber",
                            eventid: "3-" + n
                        },
                        on: {
                            getphonenumber: function(e) {
                                t.openVipWithBtn(e, "回收券");
                            }
                        }
                    }, [ t._v("开通体验客领取\n          ") ]), t._v(" "), t.userInfo.mobile && 1 === e.memberType && 0 === e.status ? i("p", {
                        attrs: {
                            eventid: "4-" + n
                        },
                        on: {
                            click: function(e) {
                                t.openVIP("回收券");
                            }
                        }
                    }, [ t._v("开通体验客领取") ]) : t._e(), t._v(" "), 2 === e.memberType && 0 === e.status ? i("p", {
                        attrs: {
                            eventid: "5-" + n
                        },
                        on: {
                            click: function(e) {
                                t.handleFSY("回收券");
                            }
                        }
                    }, [ t._v("开通发烧友领取") ]) : t._e(), t._v(" "), 1 === e.status ? i("p", {
                        attrs: {
                            eventid: "6-" + n
                        },
                        on: {
                            click: function(i) {
                                t.handleReceive(e.memberRightId);
                            }
                        }
                    }, [ t._v("领取") ]) : t._e(), t._v(" "), 2 === e.status ? i("p", [ t._v("已领取") ]) : t._e() ], 1);
                })) ], 1) : t._e(), t._v(" "), t.vipInfo.dubaiChangeNewCouponList && t.vipInfo.dubaiChangeNewCouponList.length ? i("div", {
                    staticClass: "box floor2",
                    attrs: {
                        id: "floor2"
                    }
                }, [ i("div", {
                    staticClass: "title"
                }, [ i("span", [ t._v("每月换新优惠券") ]), t._v(" "), i("span", {
                    staticClass: "arrow",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: function(e) {
                            t.jumpToRule(4);
                        }
                    }
                }, [ t._v("权益详情") ]) ]), t._v(" "), 2 !== t.vipDetail.memberType ? i("p", {
                    staticClass: "tips"
                }, [ t._v("\n        开通发烧友 立享每月100元优惠券\n      ") ]) : 2 === t.vipDetail.memberType && t.vipDetail.isValidTime ? i("p", {
                    staticClass: "tips"
                }, [ t._v("\n        每月可领1次 每月1日刷新\n      ") ]) : t._e(), t._v(" "), t._l(t.vipInfo.dubaiChangeNewCouponList, function(e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "content"
                    }, [ i("div", {
                        staticClass: "coupons",
                        class: [ 2 === e.status ? "received-coupon" : "" ]
                    }, t._l(e.promotionList, function(e, n) {
                        return i("div", {
                            key: n
                        }, [ i("span", [ t._v(t._s(e.amount)) ]), t._v(" "), i("span", [ t._v(t._s(e.name)) ]) ]);
                    })), t._v(" "), 2 !== t.vipDetail.memberType ? i("p", {
                        staticClass: "btn",
                        attrs: {
                            eventid: "9-" + n
                        },
                        on: {
                            click: function(e) {
                                t.handleFSY("换新券");
                            }
                        }
                    }, [ t._v("开通发烧友领取") ]) : 2 === t.vipDetail.memberType && 1 === e.status ? i("p", {
                        staticClass: "btn",
                        attrs: {
                            eventid: "8-" + n
                        },
                        on: {
                            click: function(i) {
                                t.handleReceive(e.memberRightId);
                            }
                        }
                    }, [ t._v("立即领取") ]) : 2 === t.vipDetail.memberType && 2 === e.status ? i("p", {
                        staticClass: "btn received-btn"
                    }, [ t._v("已领取") ]) : t._e() ], 1);
                }) ], 2) : t._e(), t._v(" "), t.vipInfo.dubaiJikexiuCouponList && t.vipInfo.dubaiJikexiuCouponList.length ? i("div", {
                    staticClass: "box floor3",
                    attrs: {
                        id: "floor3"
                    }
                }, [ i("div", {
                    staticClass: "title"
                }, [ i("span", [ t._v("每月维修优惠券") ]), t._v(" "), i("span", {
                    staticClass: "arrow",
                    attrs: {
                        eventid: "10"
                    },
                    on: {
                        click: function(e) {
                            t.jumpToRule(5);
                        }
                    }
                }, [ t._v("权益详情") ]) ]), t._v(" "), 2 !== t.vipDetail.memberType ? i("p", {
                    staticClass: "tips"
                }, [ t._v("\n        开通发烧友 立享每月100元优惠券\n      ") ]) : 2 === t.vipDetail.memberType && t.vipDetail.isValidTime ? i("p", {
                    staticClass: "tips"
                }, [ t._v("\n        每月可领1次 每月1日刷新\n      ") ]) : t._e(), t._v(" "), i("div", {
                    staticClass: "content"
                }, [ i("div", {
                    staticClass: "coupons",
                    class: 2 === t.vipDetail.memberType ? "active" : ""
                }, t._l(t.vipInfo.dubaiJikexiuCouponList, function(e, n) {
                    return i("div", {
                        key: n,
                        class: 2 === e.status && "checked"
                    }, [ i("p", [ t._v(t._s(e.amount || 0)) ]), t._v(" "), i("p", [ t._v(t._s(e.name)) ]), t._v(" "), 1 === e.status ? i("p", {
                        attrs: {
                            eventid: "11-" + n
                        },
                        on: {
                            click: function(i) {
                                t.handleReceive(e.memberRightId);
                            }
                        }
                    }, [ t._v("立即领取") ]) : t._e(), t._v(" "), 2 === e.status ? i("p", [ t._v("已领取") ]) : t._e() ], 1);
                })), t._v(" "), 2 !== t.vipDetail.memberType ? i("p", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "12"
                    },
                    on: {
                        click: function(e) {
                            t.handleFSY("维修券");
                        }
                    }
                }, [ t._v("开通发烧友领取") ]) : t._e() ], 1) ], 1) : t._e(), t._v(" "), t.vipInfo.dubaiFittingCouponList && t.vipInfo.dubaiFittingCouponList.length ? i("div", {
                    staticClass: "box floor4",
                    attrs: {
                        id: "floor4"
                    }
                }, [ i("div", {
                    staticClass: "title"
                }, [ i("span", [ t._v("配件权益") ]), t._v(" "), i("span", {
                    staticClass: "arrow",
                    attrs: {
                        eventid: "13"
                    },
                    on: {
                        click: function(e) {
                            t.jumpToRule(6);
                        }
                    }
                }, [ t._v("权益详情") ]) ]), t._v(" "), i("div", {
                    staticClass: "content"
                }, t._l(t.vipInfo.dubaiFittingCouponList, function(e, n) {
                    return i("div", {
                        key: n,
                        class: 2 === e.status ? "active" : ""
                    }, [ i("span", [ t._v(t._s(e.name)) ]), t._v(" "), 0 === e.status ? i("span", {
                        attrs: {
                            eventid: "14-" + n
                        },
                        on: {
                            click: function(e) {
                                t.handleFSY("配件");
                            }
                        }
                    }, [ t._v("开通发烧友领取") ]) : t._e(), t._v(" "), 1 === e.status ? i("span", {
                        attrs: {
                            eventid: "15-" + n
                        },
                        on: {
                            click: function(i) {
                                t.handleReceive(e.memberRightId);
                            }
                        }
                    }, [ t._v("领取") ]) : t._e(), t._v(" "), 2 === e.status ? i("span", [ t._v("已领取") ]) : t._e() ]);
                })) ]) : t._e(), t._v(" "), t.vipInfo.dubaiServiceRightList && t.vipInfo.dubaiServiceRightList.length ? i("div", {
                    staticClass: "box floor5",
                    attrs: {
                        id: "floor5"
                    }
                }, [ i("div", {
                    staticClass: "title"
                }, [ i("span", [ t._v("服务权益") ]), t._v(" "), i("span", {
                    staticClass: "arrow",
                    attrs: {
                        eventid: "16"
                    },
                    on: {
                        click: function(e) {
                            t.jumpToRule(7);
                        }
                    }
                }, [ t._v("权益详情") ]) ]), t._v(" "), i("div", {
                    staticClass: "content",
                    class: [ 2 === t.vipDetail.memberType ? "level2" : "level1" ]
                }, t._l(t.vipInfo.dubaiServiceRightList, function(e, n) {
                    return i("block", {
                        key: n
                    }, [ i("div", {
                        class: [ "type" + (n % 3 + 1), 2 === e.status ? "checked" : "" ]
                    }, [ i("p", {
                        staticClass: "val1"
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), i("div", {
                        staticClass: "val2"
                    }, [ 2 === e.type ? i("p", [ t._v("不限次数") ]) : 1 !== e.type || t.vipDetail.memberType ? i("p", [ i("span", [ t._v(t._s(e.totalCount - e.usedCount)) ]), t._v("/"), i("span", [ t._v(t._s(e.totalCount)) ]), t._v("次") ]) : i("p", [ t._v(t._s(e.totalCount) + "次") ]) ], 1), t._v(" "), t.userInfo.mobile ? t.userInfo.mobile && !t.vipDetail.memberType ? i("button", {
                        staticClass: "val3 free",
                        attrs: {
                            eventid: "17-" + n
                        },
                        on: {
                            click: t.openVIP
                        }
                    }, [ t._v("\n              开通体验客领取\n            ") ]) : 1 === e.status || 2 === e.type || e.usedCount < e.totalCount ? i("button", {
                        staticClass: "val3",
                        attrs: {
                            eventid: "18-" + n
                        },
                        on: {
                            click: t.showQrcode
                        }
                    }, [ t._v("使用\n            ") ]) : e.usedCount === e.totalCount ? i("button", {
                        staticClass: "val3 used"
                    }, [ t._v("已用完") ]) : t._e() : i("button", {
                        staticClass: "val3 free",
                        attrs: {
                            "open-type": "getPhoneNumber",
                            eventid: "19-" + n
                        },
                        on: {
                            getphonenumber: function(i) {
                                t.openVipWithBtn(i, e.name);
                            }
                        }
                    }, [ t._v("开通体验客领取\n            ") ]) ], 1), t._v(" "), 2 !== t.vipDetail.memberType && 1 === e.memberType && 1 === e.type ? i("div", {
                        staticClass: "fsy"
                    }, [ i("p", {
                        staticClass: "val1"
                    }, [ t._v("开通发烧友升级至") ]), t._v(" "), i("p", {
                        staticClass: "val2"
                    }, [ i("span", [ t._v(t._s(e.maxCount)) ]), t._v("次") ]), t._v(" "), i("button", {
                        staticClass: "val3",
                        attrs: {
                            eventid: "20-" + n
                        },
                        on: {
                            click: function(i) {
                                t.handleFSY(e.name);
                            }
                        }
                    }, [ t._v("开通发烧友领取") ]) ], 1) : t._e() ]);
                })) ]) : t._e() ]), t._v(" "), i("div", {
                    attrs: {
                        id: "floor6"
                    }
                }), t._v(" "), i("div", {
                    attrs: {
                        id: "floor7"
                    }
                }), t._v(" "), i("model", {
                    attrs: {
                        show: t.showModel,
                        eventid: "21",
                        mpcomid: "3"
                    },
                    on: {
                        "update:show": function(e) {
                            t.showModel = e;
                        }
                    }
                }), t._v(" "), t.encryptString ? i("qr", {
                    attrs: {
                        show: t.showQR,
                        "user-code": t.encryptString,
                        eventid: "22",
                        mpcomid: "4"
                    },
                    on: {
                        "update:show": function(e) {
                            t.showQR = e;
                        }
                    }
                }) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    "85q1": function(t, e, i) {
        "use strict";
        var n = i("+dNd"), s = i("3C5m");
        var o = function(t) {
            i("M4oP");
        }, a = i("ybqe")(n.a, s.a, o, "data-v-13115e8e", null);
        e.a = a.exports;
    },
    AmIV: function(t, e, i) {
        "use strict";
        var n = i("yhYA"), s = i("CLjM");
        var o = function(t) {
            i("snMU");
        }, a = i("ybqe")(n.a, s.a, o, "data-v-4bdc15e7", null);
        e.a = a.exports;
    },
    CLjM: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return t.item ? i("div", {
                    staticClass: "type1-com"
                }, [ t.item.isOpen ? i("img", {
                    staticClass: "qr",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/qr1.png",
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("update:showQR", !0);
                        }
                    }
                }) : t._e(), t._v(" "), t.item.isOpen ? t._e() : i("div", {
                    staticClass: "before-open"
                }, [ i("p", {
                    staticClass: "text"
                }, [ t._v(t._s(t.item.validPeriod)) ]), t._v(" "), i("div", {
                    staticClass: "open"
                }, [ t.userInfo.mobile ? t._e() : i("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "1"
                    },
                    on: {
                        getphonenumber: function(e) {
                            t.openVipWithBtn(e, "大卡片");
                        }
                    }
                }, [ t._v("免费开通") ]), t._v(" "), t.userInfo.mobile ? i("button", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("open", "大卡片");
                        }
                    }
                }, [ t._v("免费开通") ]) : t._e() ], 1) ], 1), t._v(" "), t.item.isOpen ? i("div", {
                    staticClass: "opened"
                }, [ i("div", {
                    staticClass: "time"
                }, [ i("p", [ t._v("到期时间:") ]), t._v(" "), i("p", [ t._v(t._s(t.item.endTime)) ]) ], 1), t._v(" "), i("button", [ t._v("已开通") ]) ], 1) : t._e(), t._v(" "), i("div", {
                    staticClass: "icons"
                }, t._l(t.icons, function(e, n) {
                    return i("img", {
                        key: n,
                        attrs: {
                            src: e.src,
                            alt: "",
                            eventid: "3-" + n
                        },
                        on: {
                            click: function(i) {
                                t.$emit("scroll", e.floor);
                            }
                        }
                    });
                })) ]) : t._e();
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    GF2f: function(t, e) {},
    "L+5M": function(t, e, i) {
        "use strict";
        var n = i("bOqr"), s = i("w082");
        var o = function(t) {
            i("Rlh5");
        }, a = i("ybqe")(n.a, s.a, o, "data-v-90b4204e", null);
        e.a = a.exports;
    },
    M4oP: function(t, e) {},
    ORK4: function(t, e, i) {
        "use strict";
        e.a = {
            name: "type2",
            props: [ "show", "showQR", "item" ],
            data: function() {
                return {
                    icons: [ {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/8.png",
                        floor: 1
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/9.png",
                        floor: 5
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/3.png",
                        floor: 6
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/4.png",
                        floor: 7
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/12.png",
                        floor: 2
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/13.png",
                        floor: 3
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/14.png",
                        floor: 4
                    } ]
                };
            },
            methods: {
                handleOpened: function() {
                    wx.showToast({
                        title: "您已成功开通 发烧友",
                        icon: "none"
                    });
                }
            }
        };
    },
    Rlh5: function(t, e) {},
    UUqx: function(t, e, i) {
        "use strict";
        var n = i("ORK4"), s = i("vv8l");
        var o = function(t) {
            i("GF2f");
        }, a = i("ybqe")(n.a, s.a, o, "data-v-4bea2d68", null);
        e.a = a.exports;
    },
    Xl5k: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.show,
                        expression: "show"
                    } ],
                    staticClass: "model",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("update:show", !1);
                        }
                    }
                }, [ i("div", {
                    staticClass: "inner_box",
                    attrs: {
                        "hover-stop-propagation": !0,
                        eventid: "2"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("div", {
                    staticClass: "close",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.$emit("update:show", !1);
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "title"
                }, [ t._v("\n      会员二维码\n    ") ]), t._v(" "), i("div", {
                    staticClass: "content"
                }, [ i("div", {
                    staticClass: "qr"
                }, [ i("canvas", {
                    staticClass: "canvas",
                    attrs: {
                        "canvas-id": "myQrcode",
                        eventid: "1"
                    },
                    on: {
                        longpress: t.saveImage
                    }
                }) ]) ]), t._v(" "), i("div", {
                    staticClass: "footer"
                }, [ t._v("\n      请向服务站工作人员出示二维码\n    ") ]) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    YVug: function(t, e) {},
    bOqr: function(t, e, i) {
        "use strict";
        e.a = {
            name: "model-store",
            props: [ "type", "show" ],
            data: function() {
                return {};
            },
            mounted: function() {},
            methods: {}
        };
    },
    kGVV: function(t, e, i) {
        "use strict";
        var n = i("uT5P"), s = i("Xl5k");
        var o = function(t) {
            i("YVug");
        }, a = i("ybqe")(n.a, s.a, o, "data-v-7aa7debe", null);
        e.a = a.exports;
    },
    oC1V: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("5nAL"), s = i.n(n), o = i("85q1");
        new s.a(o.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: "会员中心"
            }
        };
    },
    snMU: function(t, e) {},
    uT5P: function(t, e, i) {
        "use strict";
        var n = i("Dd8w"), s = i.n(n), o = i("9jZB"), a = i("NYxO");
        e.a = {
            name: "model-store",
            props: [ "show", "userCode" ],
            data: function() {
                return {};
            },
            computed: s()({}, Object(a.d)({
                userInfo: function(t) {
                    return t.global.userInfo;
                },
                systemInfo: function(t) {
                    return t.global.systemInfo;
                }
            })),
            onShow: function() {
                this.getQRcode();
            },
            mounted: function() {
                this.getQRcode();
            },
            methods: {
                getQRcode: function() {
                    var t = .32 * (this.systemInfo ? this.systemInfo.screenWidth : 375);
                    console.log(this.userCode), Object(o.a)({
                        width: t,
                        height: t,
                        canvasId: "myQrcode",
                        text: this.userCode
                    });
                }
            }
        };
    },
    vv8l: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "type2-com"
                }, [ t.item.isOpen ? i("img", {
                    staticClass: "qr",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/qr2.png",
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("update:showQR", !0);
                        }
                    }
                }) : t._e(), t._v(" "), t.item.isOpen ? t._e() : i("div", {
                    staticClass: "before-open"
                }, [ i("p", {
                    staticClass: "text"
                }, [ t._v(t._s(t.item.validPeriod)) ]), t._v(" "), i("div", {
                    staticClass: "open"
                }, [ i("button", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("update:show", !0);
                        }
                    }
                }, [ t._v("仅限门店开通 /￥" + t._s(t.item.price || 0)) ]) ], 1) ], 1), t._v(" "), t.item.isOpen ? i("div", {
                    staticClass: "opened"
                }, [ i("div", {
                    staticClass: "time"
                }, [ i("p", [ t._v("到期时间:") ]), t._v(" "), i("p", [ t._v(t._s(t.item.endTime)) ]) ], 1), t._v(" "), i("button", [ t._v("已开通") ]) ], 1) : t._e(), t._v(" "), i("div", {
                    staticClass: "icons"
                }, t._l(t.icons, function(e, n) {
                    return i("img", {
                        key: n,
                        attrs: {
                            src: e.src,
                            alt: "",
                            eventid: "2-" + n
                        },
                        on: {
                            click: function(i) {
                                t.$emit("scroll", e.floor);
                            }
                        }
                    });
                })) ]);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    w082: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return t.show ? i("div", {
                    staticClass: "model",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("update:show", !1);
                        }
                    }
                }, [ i("div", {
                    staticClass: "inner_box",
                    attrs: {
                        "hover-stop-propagation": !0,
                        eventid: "1"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("div", {
                    staticClass: "close",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.$emit("update:show", !1);
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "title"
                }, [ t._v("\n      前往服务站开通\n    ") ]), t._v(" "), i("div", {
                    staticClass: "content"
                }, [ i("p", [ t._v("目前仅支持前往指定服务站开通发烧友，"), i("br"), t._v(" 点击下方按钮查看具体服务站信息。") ], 1), t._v(" "), i("p", [ t._v("请前往指定服务站，咨询服务站 工作人员了解详情。") ]) ], 1), t._v(" "), i("navigator", {
                    staticClass: "footer",
                    attrs: {
                        url: "/pages/nbs-shops/main?fromActivity=1"
                    }
                }, [ t._v("\n      查看指定服务站\n    ") ]) ], 1) ]) : t._e();
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    yhYA: function(t, e, i) {
        "use strict";
        var n = i("Dd8w"), s = i.n(n), o = i("NYxO");
        e.a = {
            name: "type1",
            props: [ "showQR", "item" ],
            data: function() {
                return {
                    icons: [ {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/1.png",
                        floor: 1
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/2.png",
                        floor: 5
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/3.png",
                        floor: 6
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/4.png",
                        floor: 7
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/5.png",
                        floor: 2
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/6.png",
                        floor: 3
                    }, {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs-vip/icons/7.png",
                        floor: 4
                    } ]
                };
            },
            computed: s()({}, Object(o.d)({
                userInfo: function(t) {
                    return t.global.userInfo;
                }
            })),
            methods: {
                handleOpened: function() {
                    wx.showToast({
                        title: "您已成功开通 发烧友",
                        icon: "none"
                    });
                },
                openVipWithBtn: function(t) {
                    console.log(t), this.$emit("openVipWithBtn", t);
                }
            }
        };
    }
}, [ "oC1V" ]);