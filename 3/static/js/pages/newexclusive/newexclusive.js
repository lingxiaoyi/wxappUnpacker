global.webpackJsonp([ 8 ], {
    "+J5x": function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), o = n.n(a), i = n("nhr+");
        new o.a(i.a).$mount(), t.default = {
            config: {
                navigationBarTitleText: "爱回收",
                navigationStyle: "custom"
            }
        };
    },
    "0Qq1": function(e, t, n) {
        "use strict";
        var a = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "max-container"
                }, [ n("NavHeader", {
                    attrs: {
                        title: "爱回收",
                        mpcomid: "0"
                    }
                }), e._v(" "), n("div", {
                    staticClass: "exclusive-container",
                    style: {
                        "background-image": "url(" + e.banner + ")"
                    }
                }, [ e.isShowPopup ? n("header", [ n("popup", {
                    attrs: {
                        useConditions: e.useConditions,
                        eventid: "0",
                        mpcomid: "1"
                    },
                    on: {
                        closePopup: function(t) {
                            e.setPopupInfo(!1);
                        }
                    }
                }) ], 1) : e._e(), e._v(" "), n("div", {
                    staticClass: "status"
                }, [ e.isLogin || e.isSuccess || e.isNew || e.isReceive || e.isError ? e._e() : n("button", {
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "1"
                    },
                    on: {
                        getphonenumber: e.handleOnGetPhoneNumber
                    }
                }, [ e._v("一键领取") ]), e._v(" "), e.isLogin ? [ e.isSuccess || e.isNew || e.isReceive || e.isError ? e._e() : n("button", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: e.handleOnReceiveCoupon
                    }
                }, [ e._v("一键领取") ]), e._v(" "), e.isNew ? n("button", {
                    staticClass: "disable-click"
                }, [ e._v("新用户才可领取") ]) : e._e(), e._v(" "), e.isReceive || e.isSuccess && !e.isNew && !e.isReceive && !e.isError ? n("button", {
                    staticClass: "disable-click"
                }, [ e._v("已领取") ]) : e._e(), e._v(" "), e.isError ? n("button", {
                    staticClass: "disable-click"
                }, [ e._v("您的券被外星人领走了") ]) : e._e() ] : e._e(), e._v(" "), n("p", [ e._v("领取后7日有效") ]) ], 2), e._v(" "), n("div", {
                    staticClass: "main"
                }, [ e.oldCoupon.length ? n("div", {
                    staticClass: "single-content"
                }, [ n("p", {
                    staticClass: "title"
                }, [ e._v("回收加价券") ]), e._v(" "), e.packageInfo ? n("div", e._l(e.oldCoupon, function(t, a) {
                    return n("div", {
                        key: a
                    }, [ n("p", [ e._v("¥"), n("span", [ e._v(e._s(t.price / 100)) ]) ]), e._v(" "), n("div", [ e._v("满" + e._s(t.minPriceLimit / 100) + "元可用") ]) ], 1);
                })) : e._e(), e._v(" "), n("p", {
                    staticClass: "jump",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(t) {
                            e.navigateTo("category");
                        }
                    }
                }, [ e._v("免费估价") ]) ], 1) : e._e(), e._v(" "), e.newCoupon.length ? n("div", {
                    staticClass: "single-content active"
                }, [ n("p", {
                    staticClass: "title"
                }, [ e._v("换新优惠券") ]), e._v(" "), e.packageInfo ? n("div", e._l(e.newCoupon, function(t, a) {
                    return n("div", {
                        key: a,
                        staticClass: "active"
                    }, [ n("p", [ e._v("¥"), n("span", [ e._v(e._s(t.price / 100)) ]) ]), e._v(" "), n("div", [ e._v(e._s(t.name)) ]) ], 1);
                })) : e._e(), e._v(" "), n("p", {
                    staticClass: "jump",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: function(t) {
                            e.navigateTo("ofnew");
                        }
                    }
                }, [ e._v("去换新") ]) ], 1) : e._e() ]), e._v(" "), e.packageInfo ? n("p", {
                    staticClass: "use-tag"
                }, [ n("span", {
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: function(t) {
                            e.setPopupInfo(!0);
                        }
                    }
                }, [ e._v("使用条件"), n("u", [ e._v("!") ]) ], 1) ]) : e._e(), e._v(" "), n("footer", [ n("dl", [ n("dt", [ n("img", {
                    class: e.productInfo ? "" : "padding25",
                    attrs: {
                        src: e.productInfo ? e.productInfo.imgUrl : e.defaultPhoneImg,
                        mode: "aspectFit",
                        alt: ""
                    }
                }) ]), e._v(" "), n("dd", [ e.productInfo ? n("ul", [ n("li", {
                    staticClass: "product-title"
                }, [ e._v(e._s(e.productInfo.name)) ]), e._v(" "), n("li", [ e._v("最高回收价") ]), e._v(" "), n("li", {
                    staticClass: "product-price"
                }, [ e._v("¥" + e._s(e.productInfo.topPrice)) ]) ], 1) : e._e(), e._v(" "), e.productInfo ? e._e() : n("ul", [ n("li", {
                    staticClass: "product-none"
                }, [ e._v("挑选机型立即估价") ]) ], 1) ], 1), e._v(" "), n("dd", {
                    staticClass: "product-valuation",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: function(t) {
                            e.navigateTo("detail");
                        }
                    }
                }, [ e._v("立即估价") ]), e._v(" "), n("dd", {
                    staticClass: "product-tag",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: function(t) {
                            e.navigateTo("category");
                        }
                    }
                }) ], 1), e._v(" "), n("navigator", {
                    staticClass: "foot-banner",
                    attrs: {
                        target: "miniProgram",
                        "open-type": "navigate",
                        "app-id": e.navigatorInfo.appId,
                        path: e.navigatorInfo.path,
                        "extra-data": e.navigatorInfo.extraData
                    }
                }, [ n("img", {
                    attrs: {
                        src: "",
                        alt: ""
                    }
                }) ]) ], 1) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        t.a = a;
    },
    "5W2f": function(e, t, n) {
        "use strict";
        var a = n("Dd8w"), o = n.n(a), i = n("Xxa5"), r = n.n(i), s = n("exGp"), c = n.n(s), u = n("vLgD"), p = n("NYxO"), v = n("VsUZ"), d = n("Cz8s"), l = n("X6J5"), f = "20190323986558";
        t.a = {
            components: {
                NavHeader: d.a,
                Popup: l.a
            },
            data: function() {
                return {
                    isLogin: !1,
                    isSuccess: !1,
                    isNew: !1,
                    isReceive: !1,
                    isError: !1,
                    packageInfo: null,
                    navigatorInfo: {
                        appId: "wx1d0bf756d8c83d75",
                        path: "/pages/activity/apple/main?f=redpacket",
                        extraData: {
                            point: "earth_newexclusive"
                        },
                        envVersion: "develop"
                    },
                    systemInfo: null,
                    productInfo: null,
                    defaultPhoneImg: "https://sr.aihuishou.com/miniapps/earth/newexclusive/phone.png",
                    isShowPopup: !1,
                    banner: null,
                    newCoupon: [],
                    oldCoupon: []
                };
            },
            computed: {
                useConditions: function() {
                    var e = this.packageInfo, t = null;
                    return e && e.promotions && e.promotions.length > 0 && (t = e.promotions[0].description.split("\n")), 
                    t;
                }
            },
            mounted: function() {
                var e = this;
                return c()(r.a.mark(function t() {
                    return r.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, Object(v.i)();

                          case 2:
                            return e._piwik("pages/newexclusive/newexclusive", "miniapp/new", "miniapp/new", "basicinfo"), 
                            t.next = 5, Object(u.a)({
                                url: "/promotion/new-comer-package"
                            }).then(function(t) {
                                t && (f = t.packageCode, e.banner = t.activityPageImageUrl);
                            });

                          case 5:
                            e.handleOnReceiveCoupon(), e.setLogin(), e.setPackage(), e.setProductDetail();

                          case 9:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            methods: o()({}, Object(p.b)([ "doLoginWithButton" ]), {
                handleOnGetPhoneNumber: function(e) {
                    var t = this;
                    return c()(r.a.mark(function n() {
                        return r.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (!e.target.iv || !e.target.encryptedData) {
                                    n.next = 5;
                                    break;
                                }
                                return n.next = 3, t.doLoginWithButton([ e, t ]);

                              case 3:
                                n.sent.mobile && (t.isLogin = !0, t.setPackage(), t.handleOnReceiveCoupon());

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                handleOnReceiveCoupon: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                n = {
                                    packageCode: f
                                }, e.getReceiveCoupon(n).then(function() {
                                    e.isSuccess = !0, wx.showToast({
                                        icon: "none",
                                        title: "领取成功 请至“我的-券包”查看",
                                        duration: 3e3
                                    });
                                }, function(t) {
                                    "礼包已达用户领取上限" === t ? (e.isReceive = !0, wx.showToast({
                                        icon: "none",
                                        title: "已领取过",
                                        duration: 3e3
                                    })) : "仅限官网新用户领取" === t ? e.isNew = !0 : "礼包已领完" === t && wx.showToast({
                                        icon: "none",
                                        title: "券已领完，明天再来吧~",
                                        duration: 3e3
                                    });
                                });

                              case 2:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setLogin: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Object(v.d)();

                              case 2:
                                e.isLogin = !!t.sent;

                              case 3:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setPopupInfo: function(e) {
                    this.isShowPopup = e;
                },
                setPackage: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = {
                                    packageCode: f
                                }, t.next = 3, e.getPackage(n);

                              case 3:
                                e.packageInfo = t.sent, e.newCoupon = e.packageInfo.promotions.filter(function(e) {
                                    return 2 === e.platform;
                                }), e.oldCoupon = e.packageInfo.promotions.filter(function(e) {
                                    return 1 === e.platform;
                                });

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                setProductDetail: function() {
                    var e = this;
                    return c()(r.a.mark(function t() {
                        var n, a;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (n = e.$root.$mp.query.scene, a = null, !n) {
                                    t.next = 10;
                                    break;
                                }
                                return e._piwik("pages/newexclusive/newexclusive", "miniapp/new", "aiqingchu", "abtest"), 
                                a = {
                                    productId: n
                                }, t.next = 7, e.getProductDetailById(a);

                              case 7:
                                e.productInfo = t.sent, t.next = 13;
                                break;

                              case 10:
                                return t.next = 12, Object(v.b)();

                              case 12:
                                e.productInfo = t.sent;

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                getProductDetailById: function(e) {
                    var t = this;
                    return c()(r.a.mark(function n() {
                        var a;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return a = null, t.prev = 1, t.next = 4, Object(u.a)({
                                    url: "/product/getproduct",
                                    params: e
                                });

                              case 4:
                                a = t.sent, t.next = 10;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(1), console.log(t.t0);

                              case 10:
                                return t.abrupt("return", a);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, n, t, [ [ 1, 7 ] ]);
                    }))();
                },
                getReceiveCoupon: function(e) {
                    var t = this;
                    return c()(r.a.mark(function n() {
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.prev = 0, t.abrupt("return", Object(u.a)({
                                    url: "/promotion/promotion-package/redeem",
                                    params: e,
                                    method: "POST"
                                }));

                              case 4:
                                t.prev = 4, t.t0 = t.catch(0), console.log(t.t0);

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, n, t, [ [ 0, 4 ] ]);
                    }))();
                },
                getPackage: function(e) {
                    var t = this;
                    return c()(r.a.mark(function n() {
                        var a, o;
                        return r.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return a = null, o = e.packageCode, n.prev = 2, n.next = 5, t.$axios_dubai({
                                    url: "/promotions/packages/" + o
                                });

                              case 5:
                                a = n.sent, n.next = 11;
                                break;

                              case 8:
                                n.prev = 8, n.t0 = n.catch(2), console.log(n.t0);

                              case 11:
                                return n.abrupt("return", a);

                              case 12:
                              case "end":
                                return n.stop();
                            }
                        }, n, t, [ [ 2, 8 ] ]);
                    }))();
                },
                navigateTo: function(e) {
                    var t = "";
                    if ("ofnew" === e) return wx.navigateToMiniProgram({
                        appId: "wxde54a54a45c0e1b7",
                        path: "/pages/index/main"
                    });
                    if ("category" === e) t = "/pages/category/category?categoryId=1"; else if ("detail" === e) {
                        var n = this.productInfo;
                        t = n && n.id ? "/pages/detail/detail?productId=" + n.id + "&isfromcategory=true&categoryId=" + n.categoryId : "/pages/category/category?categoryId=1";
                    }
                    wx.navigateTo({
                        url: t
                    });
                }
            })
        };
    },
    "7ddn": function(e, t, n) {
        "use strict";
        var a = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    staticClass: "popup-container"
                }, [ n("main", [ n("div", {
                    staticClass: "use-conditions"
                }, [ n("div", {
                    staticClass: "conditions-container"
                }, [ n("ul", [ n("li", [ e._v("1、新用户专享，优惠领取后7日内有效，仅限在爱回收官网、门店使用") ]), e._v(" "), n("li", [ e._v("2、回收订单每含一台高于券面最低回收金额的机器，即可选择回收优惠使用") ]), e._v(" "), n("li", [ e._v("3、回收券不限品类，手机、平板、笔记本、智能数码、摄影摄像均可使用") ]), e._v(" "), n("li", [ e._v("4、换新券指定品牌可使用") ]), e._v(" "), n("li", [ e._v("5、若您参与活动，视为同意以上活动规则，本次活动的最终解释权归爱回收所有") ]) ], 1) ], 1) ]) ]), e._v(" "), n("div", {
                    staticClass: "mask-layer",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: e.handleOnClickClosePopup
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        t.a = a;
    },
    X6J5: function(e, t, n) {
        "use strict";
        var a = n("kbzV"), o = n("7ddn");
        var i = function(e) {
            n("ut6u");
        }, r = n("ybqe")(a.a, o.a, i, "data-v-fdf6ec6a", null);
        t.a = r.exports;
    },
    kbzV: function(e, t, n) {
        "use strict";
        t.a = {
            props: {
                useConditions: {
                    type: String
                }
            },
            data: function() {
                return {
                    canClosePopup: !0
                };
            },
            computed: {},
            methods: {
                handleOnClickClosePopup: function() {
                    this.canClosePopup && this.$emit("closePopup");
                }
            }
        };
    },
    "nhr+": function(e, t, n) {
        "use strict";
        var a = n("5W2f"), o = n("0Qq1");
        var i = function(e) {
            n("pcjd"), n("yzQ0");
        }, r = n("ybqe")(a.a, o.a, i, "data-v-298e122a", null);
        t.a = r.exports;
    },
    pcjd: function(e, t) {},
    ut6u: function(e, t) {},
    yzQ0: function(e, t) {}
}, [ "+J5x" ]);