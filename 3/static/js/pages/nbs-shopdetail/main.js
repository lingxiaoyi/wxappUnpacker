global.webpackJsonp([ 27 ], {
    "1X+j": function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = s("5nAL"), i = s.n(n), a = s("aDXy");
        new i.a(a.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: "门店详情",
                navigationStyle: "custom"
            }
        };
    },
    "Rnt/": function(t, e, s) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return t.shopInfo.id ? s("div", {
                    staticClass: "shopdetail-box"
                }, [ s("NavHeader", {
                    attrs: {
                        title: "门店信息",
                        mpcomid: "0"
                    }
                }), t._v(" "), s("div", {
                    staticClass: "shop-info"
                }, [ s("img", {
                    attrs: {
                        src: t.shopInfo.imgUrl,
                        alt: "",
                        mode: "aspectFill",
                        eventid: "0"
                    },
                    on: {
                        click: t.handleShowShop
                    }
                }), t._v(" "), s("div", {
                    staticClass: "detail-info"
                }, [ s("p", {
                    staticClass: "name"
                }, [ t._v(t._s(t.shopInfo.name)) ]), t._v(" "), s("p", {
                    staticClass: "time"
                }, [ t._v(t._s(t.showWeekend ? "工作日" : "营业时间") + "\n        " + t._s(t.shopInfo.normalBusinessStartTime) + "-" + t._s(t.shopInfo.normalBusinessEndTime)) ]), t._v(" "), t.showWeekend ? s("p", {
                    staticClass: "time active"
                }, [ t._v("节假日\n        " + t._s(t.shopInfo.weekendBusinessStartTime) + "-" + t._s(t.shopInfo.weekendBusinessEndTime)) ]) : t._e(), t._v(" "), s("div", {
                    staticClass: "address-box",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.handleClickMap
                    }
                }, [ s("p", [ t._v(t._s(t.shopInfo.address)) ]), t._v(" "), s("span") ], 1), t._v(" "), s("div", {
                    staticClass: "mobile-box",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleContact
                    }
                }, [ t._v("\n        " + t._s(t.mobile) + "\n      ") ]) ], 1) ]), t._v(" "), t.shopInfo.repairServiceEnable ? s("div", {
                    staticClass: "nbs-vip"
                }, [ s("nbs-vip", {
                    attrs: {
                        mpcomid: "1"
                    }
                }) ], 1) : t._e(), t._v(" "), t.shopInfo.repairServiceEnable ? s("div", {
                    staticClass: "sub-title"
                }, [ t._v("\n    优惠\n  ") ]) : t._e(), t._v(" "), t.shopInfo.repairServiceEnable ? s("div", {
                    staticClass: "discount-box"
                }, t._l(t.coupons, function(e, n) {
                    return s("div", {
                        key: n,
                        staticClass: "info",
                        attrs: {
                            eventid: "7-" + n
                        },
                        on: {
                            click: function(s) {
                                t.toggleShow(e);
                            }
                        }
                    }, [ s("img", {
                        attrs: {
                            src: "https://sr.aihuishou.com/miniapps/earth/nbs/zhe.png",
                            alt: "",
                            mode: "widthFix"
                        }
                    }), t._v(" "), s("div", [ s("p", [ t._v("\n          " + t._s(e.title) + "\n          "), s("span", {
                        staticClass: "question"
                    }) ]), t._v(" "), s("span", {
                        staticClass: "desc"
                    }, [ t._v("截止时间：" + t._s(e.endDate)) ]) ], 1), t._v(" "), 1 === e.status && t.userInfo.mobile ? s("span", {
                        staticClass: "btn",
                        attrs: {
                            eventid: "3-" + n
                        },
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.handleReceive(e);
                            }
                        }
                    }, [ t._v("领取") ]) : t._e(), t._v(" "), 2 === e.status && t.userInfo.mobile ? s("span", {
                        staticClass: "btn active",
                        attrs: {
                            eventid: "4-" + n
                        },
                        on: {
                            click: function(s) {
                                s.stopPropagation(), t.handleShowQrcode(!0, e.encryptString, !0);
                            }
                        }
                    }, [ t._v("已领取") ]) : t._e(), t._v(" "), 3 === e.status ? s("span", {
                        staticClass: "btn active",
                        attrs: {
                            eventid: "5-" + n
                        },
                        on: {
                            click: function(e) {
                                e.stopPropagation(), t.stop(e);
                            }
                        }
                    }, [ t._v("已领完") ]) : t._e(), t._v(" "), t.userInfo.mobile || 2 !== e.status && 1 !== e.status ? t._e() : s("button", {
                        staticClass: "btn",
                        attrs: {
                            "open-type": "getPhoneNumber",
                            eventid: "6-" + n
                        },
                        on: {
                            click: function(e) {
                                e.stopPropagation(), t.stop(e);
                            },
                            getphonenumber: function(s) {
                                return t.getPhoneNumber(s, e);
                            }
                        }
                    }, [ t._v("领取\n      ") ]) ], 1);
                })) : t._e(), t._v(" "), s("div", {
                    staticClass: "sub-title"
                }, [ t._v("\n    服务\n  ") ]), t._v(" "), s("div", {
                    staticClass: "discount-box service"
                }, [ s("div", {
                    staticClass: "info",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        click: function(e) {
                            t.handleJump("recycle");
                        }
                    }
                }, [ s("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs/huishou.png",
                        alt: "",
                        mode: "widthFix"
                    }
                }), t._v(" "), s("div", [ s("p", [ t._v("旧机回收") ]), t._v(" "), s("span", {
                    staticClass: "desc"
                }, [ t._v("手机 笔记本 平板 摄影摄像 智能数码") ]), t._v(" "), s("span", {
                    staticClass: "btn"
                }, [ t._v("去回收") ]) ], 1) ]), t._v(" "), t.shopInfo.newMachineServiceEnable ? s("div", {
                    staticClass: "info",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        click: function(e) {
                            t.handleJump("huanxin");
                        }
                    }
                }, [ s("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs/huanxin.png",
                        alt: "",
                        mode: "widthFix"
                    }
                }), t._v(" "), s("div", [ s("p", [ t._v("以旧换新") ]), t._v(" "), s("span", {
                    staticClass: "desc"
                }, [ t._v("旧机抵扣 购买新机平均6折起") ]), t._v(" "), s("span", {
                    staticClass: "btn"
                }, [ t._v("去换新") ]) ], 1) ]) : t._e(), t._v(" "), t.shopInfo.repairServiceEnable ? s("div", {
                    staticClass: "info",
                    attrs: {
                        eventid: "10"
                    },
                    on: {
                        click: function(e) {
                            t.handleJump("nbs");
                        }
                    }
                }, [ s("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/nbs/weixiu.png",
                        alt: "",
                        mode: "widthFix"
                    }
                }), t._v(" "), s("div", [ s("p", [ t._v("数码维修") ]), t._v(" "), s("span", {
                    staticClass: "desc"
                }, [ t._v("爱回收 X 极客修 限时优惠") ]), t._v(" "), s("span", {
                    staticClass: "btn"
                }, [ t._v("去维修") ]) ], 1) ]) : t._e() ]), t._v(" "), s("RuleModel", {
                    attrs: {
                        title: "活动规则",
                        showRule: t.rule.show,
                        onClose: function() {
                            return t.toggleShow(!1);
                        },
                        rules: t.rule.desc,
                        mpcomid: "2"
                    }
                }), t._v(" "), s("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowQrcode,
                        expression: "isShowQrcode"
                    } ],
                    staticClass: "common-model",
                    attrs: {
                        eventid: "13"
                    },
                    on: {
                        click: function(e) {
                            t.handleShowQrcode(!1);
                        }
                    }
                }, [ s("div", {
                    staticClass: "container-box"
                }, [ s("div", {
                    staticClass: "title",
                    attrs: {
                        eventid: "11"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.stop(e);
                        }
                    }
                }, [ t._v(t._s(t.modelTitle || "领取成功")) ]), t._v(" "), s("span", {
                    staticClass: "close"
                }), t._v(" "), s("div", {
                    staticClass: "content-box"
                }, [ s("canvas", {
                    staticClass: "canvas",
                    attrs: {
                        "canvas-id": "myQrcode"
                    }
                }), t._v(" "), s("p", [ t._v("\n          请向服务站工作人员出示二维码 "), s("br"), t._v("\n          或至“我的-券包-商品”下查看\n        ") ], 1), t._v(" "), s("span", {
                    attrs: {
                        eventid: "12"
                    },
                    on: {
                        click: t.jumpToTicket
                    }
                }, [ t._v("前往券包查看") ]) ], 1) ]) ]) ], 1) : t._e();
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    aDXy: function(t, e, s) {
        "use strict";
        var n = s("kADN"), i = s("Rnt/");
        var a = function(t) {
            s("ehx5");
        }, o = s("ybqe")(n.a, i.a, a, "data-v-f217df7e", null);
        e.a = o.exports;
    },
    ehx5: function(t, e) {},
    kADN: function(t, e, s) {
        "use strict";
        var n = s("Xxa5"), i = s.n(n), a = s("exGp"), o = s.n(a), r = s("Dd8w"), c = s.n(r), u = s("NYxO"), p = s("Cz8s"), d = s("sLX/"), l = s("0xDb"), h = (s.n(l), 
        s("X/E/")), v = s("9jZB"), m = s("GZuB");
        e.a = {
            components: {
                NavHeader: p.a,
                RuleModel: d.a,
                nbsVip: m.a
            },
            data: function() {
                return {
                    shopInfo: {},
                    rule: {
                        show: !1,
                        desc: ""
                    },
                    activeRuleType: 0,
                    isShowQrcode: !1,
                    coupons: [],
                    modelTitle: "领取成功"
                };
            },
            computed: c()({}, Object(u.d)({
                systemInfo: function(t) {
                    return t.global.systemInfo;
                },
                storeInfo: function(t) {
                    return t.maintain.repairStore;
                },
                userInfo: function(t) {
                    return t.global.userInfo;
                }
            }), {
                mobile: function() {
                    if (this.shopInfo.mobile) return this.shopInfo.mobile.replace(",", " 转分机号 ");
                },
                showWeekend: function() {
                    var t = this.shopInfo;
                    return t.normalBusinessStartTime !== t.weekendBusinessStartTime || t.normalBusinessEndTime !== t.weekendBusinessEndTime;
                }
            }),
            mounted: function() {
                var t = this;
                this.$axios({
                    url: "/foundation/shop",
                    params: {
                        id: this.$mp.query.shopid
                    }
                }).then(function(e) {
                    e && (t.shopInfo = e, e.repairServiceEnable && t.getRepairTags());
                });
            },
            methods: c()({}, Object(u.b)([ "setMaintainInfo", "doLoginWithButton" ]), {
                stop: function() {
                    return !1;
                },
                getPhoneNumber: function(t, e) {
                    var s = this;
                    return o()(i.a.mark(function n() {
                        var a, o, r, c;
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (a = t.target, o = a.iv, r = a.encryptedData, !o || !r) {
                                    n.next = 6;
                                    break;
                                }
                                return n.next = 4, s.doLoginWithButton([ t, s ]);

                              case 4:
                                (c = n.sent).mobile ? s.handleReceive(e) : console.log(c, "错误");

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, s);
                    }))();
                },
                handleShowShop: function() {
                    wx.previewImage({
                        urls: [ this.shopInfo.imgUrl ]
                    });
                },
                handleShowQrcode: function(t, e, s) {
                    t && (this.modelTitle = s ? "优惠券二维码" : "领取成功", this.drawImgae(e)), this.isShowQrcode = t;
                },
                getRepairTags: function(t) {
                    var e = this;
                    this.$axios_dubai({
                        url: "/shops/shop-benefits/" + this.$mp.query.shopid
                    }).then(function(s) {
                        if (s && s.length) {
                            if (e.coupons = s, t) {
                                var n = s.find(function(e) {
                                    return e.packageCode === t.packageCode;
                                });
                                n && e.handleShowQrcode(!0, n.encryptString);
                            }
                        } else e.coupons = [];
                    });
                },
                handleReceive: function(t) {
                    var e = this;
                    return o()(i.a.mark(function s() {
                        return i.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                if (s.prev = 0, "jikexiu" !== t.packageType) {
                                    s.next = 6;
                                    break;
                                }
                                return s.next = 4, e.$axios_dubai({
                                    url: "/jikexiu/repair/coupon/take/" + t.packageCode
                                });

                              case 4:
                                s.next = 9;
                                break;

                              case 6:
                                if ("aihuishou" !== t.packageType) {
                                    s.next = 9;
                                    break;
                                }
                                return s.next = 9, e.$axios({
                                    url: "/promotion/promotion-package/redeem",
                                    method: "POST",
                                    data: {
                                        packageCode: t.packageCode
                                    }
                                });

                              case 9:
                                wx.showToast({
                                    icon: "none",
                                    title: "领取成功",
                                    duration: 3e3
                                }), e.getRepairTags(t), s.next = 17;
                                break;

                              case 13:
                                s.prev = 13, s.t0 = s.catch(0), e.getRepairTags(), s.t0 && wx.showToast({
                                    icon: "none",
                                    title: s.t0,
                                    duration: 3e3
                                });

                              case 17:
                              case "end":
                                return s.stop();
                            }
                        }, s, e, [ [ 0, 13 ] ]);
                    }))();
                },
                toggleShow: function(t) {
                    t ? this.rule = {
                        show: !0,
                        desc: t.desc
                    } : this.rule.show = !1;
                },
                handleClickMap: function() {
                    var t = Object(l.bd09togcj02)(this.shopInfo.latitude, this.shopInfo.longitude);
                    wx.openLocation({
                        latitude: t[0],
                        longitude: t[1],
                        name: this.shopInfo.name,
                        address: this.shopInfo.address
                    });
                },
                handleContact: function() {
                    wx.makePhoneCall({
                        phoneNumber: this.shopInfo.mobile
                    });
                },
                handleJump: function(t) {
                    if ("huanxin" === t) {
                        var e = "/pages/index/main";
                        this.$mp.query.utm_source && (e = e + "?utm_source=" + this.$mp.query.utm_source), 
                        this.$mp.query.utm_medium && (e = e + "&utm_medium=" + this.$mp.query.utm_medium), 
                        this.$mp.query.utm_compaign && (e = e + "&utm_compaign=" + this.$mp.query.utm_compaign), 
                        this._shencePoint({
                            title: "服务站详情",
                            event: "go_barter",
                            store_id: this.$mp.query.shopid
                        }), console.log(e), wx.navigateToMiniProgram({
                            appId: "wxde54a54a45c0e1b7",
                            path: e
                        });
                    } else "nbs" === t && this.setMaintainInfo([ "repairStore", this.shopInfo ]), this._shencePoint({
                        title: "服务站详情",
                        event: "nbs" === t ? "go_fix" : "go_recycle",
                        store_id: this.$mp.query.shopid
                    }), wx.navigateTo({
                        url: {
                            recycle: "/pages/category/category?categoryId=1",
                            nbs: "/pages/nbs-category/main"
                        }[t]
                    });
                },
                jumpToTicket: function() {
                    this.jumpToWebview(h.f.coupon);
                },
                drawImgae: function(t) {
                    var e = .32 * (this.systemInfo ? this.systemInfo.screenWidth : 375);
                    Object(v.a)({
                        width: e,
                        height: 120,
                        canvasId: "myQrcode",
                        text: t
                    });
                }
            })
        };
    }
}, [ "1X+j" ]);