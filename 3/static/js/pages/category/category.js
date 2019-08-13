global.webpackJsonp([ 37 ], {
    AWzI: function(t, e, a) {
        "use strict";
        var r = a("IUyo"), i = a("H3QU");
        var s = function(t) {
            a("oj/n");
        }, n = a("ybqe")(r.a, i.a, s, "data-v-d9cd52ac", null);
        e.a = n.exports;
    },
    H3QU: function(t, e, a) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "category-page"
                }, [ a("div", [ a("div", {
                    staticClass: "top-searchbar"
                }, [ a("div", {
                    staticClass: "view-searchbar"
                }, [ a("div", {
                    staticClass: "nav-serchbar",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.toggleSearchModel
                    }
                }, [ a("text", {
                    staticClass: "icon-search"
                }), t._v(" "), a("div", {
                    staticClass: "text-searchbar"
                }, [ t._v("搜索您要卖的品牌、机型") ]) ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "page-container"
                }, [ t.isSuDiYiPage ? t._e() : a("div", {
                    staticClass: "top-scroll-view"
                }, [ a("scroll-view", {
                    staticClass: "top-container",
                    attrs: {
                        "scroll-x": "",
                        "scroll-left": t.scroll_left,
                        "scroll-with-animation": ""
                    }
                }, t._l(t.categorys, function(e, r) {
                    return a("div", {
                        key: r,
                        staticClass: "top-item",
                        class: e.id === t.categoryId ? "active" : "",
                        attrs: {
                            "data-value": e.value,
                            "data-id": e.id,
                            eventid: "1-" + r
                        },
                        on: {
                            click: function(a) {
                                t.tapcategorysItem(e);
                            }
                        }
                    }, [ t._v("\n            " + t._s(e.alias || e.value) + "\n          ") ]);
                })) ], 1), t._v(" "), a("div", {
                    class: t.isSuDiYiPage ? "bottom-container bottom-container-hidden-title" : "bottom-container"
                }, [ a("scroll-view", {
                    staticClass: "left-container",
                    attrs: {
                        "scroll-y": "",
                        "scroll-into-view": t.intoView,
                        "scroll-top": "0",
                        eventid: "3"
                    },
                    on: {
                        scrolltolower: t.showReservation
                    }
                }, t._l(t.brands, function(e, r) {
                    return a("div", {
                        key: e.id,
                        staticClass: "left-item global-line",
                        class: e.checked ? "active" : "",
                        attrs: {
                            id: "brand_" + r,
                            "scroll-into-view": t.intoView,
                            eventid: "2-" + r
                        },
                        on: {
                            click: function(a) {
                                t.tapBrandItem(e, r);
                            }
                        }
                    }, [ t._v("\n            " + t._s(e.name) + "\n          ") ]);
                })), t._v(" "), a("scroll-view", {
                    staticClass: "right-container",
                    attrs: {
                        "scroll-y": "",
                        "lower-threshold": 120,
                        "scroll-into-view": t.rightIntoView,
                        eventid: "6"
                    },
                    on: {
                        scrolltolower: t.getMoreProducts,
                        scroll: t.scroll
                    }
                }, [ a("div", {
                    attrs: {
                        id: t.rightIntoView
                    }
                }), t._v(" "), t._l(t.products, function(e, r) {
                    return e.id ? a("div", {
                        key: e.id,
                        staticClass: "right-item",
                        class: {
                            less: t.lessFlag
                        },
                        attrs: {
                            "hover-class": "hover-active"
                        }
                    }, [ e.isMyOwn ? a("div", {
                        staticClass: "my-own-device-container",
                        attrs: {
                            "data-item": e,
                            "data-url": "../detail/detail?isfromcategory=true&productId=" + e.id + "&categoryId=" + t.categoryId,
                            eventid: "5-" + r
                        },
                        on: {
                            click: t.handleTapClickThis
                        }
                    }, [ a("div", {
                        staticClass: "info-container"
                    }, [ a("image", {
                        staticClass: "my-own-image",
                        attrs: {
                            src: e.imgUrl
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "my-intro-container"
                    }, [ a("text", {
                        staticClass: "tip-title"
                    }, [ t._v("本机机型") ]), t._v(" "), a("div", {
                        staticClass: "right-top-container"
                    }, [ t._v("立即估价") ]), t._v(" "), a("div", {
                        staticClass: "device-name"
                    }, [ t._v(t._s(e.name)) ]) ]) ]) ]) : a("span", {
                        class: [ !0 === t.products[0].isMyOwn && 1 === r ? "main-icon-before first" : "", !0 === t.products[0].isMyOwn && 2 === r ? "main-icon-before second" : "", !0 === t.products[0].isMyOwn && 3 === r ? "main-icon-before third" : "", t.products[0].isMyOwn || 0 !== r ? "" : "main-icon-before first", t.products[0].isMyOwn || 1 !== r ? "" : "main-icon-before second", t.products[0].isMyOwn || 2 !== r ? "" : "main-icon-before third" ],
                        attrs: {
                            "data-item": e,
                            "data-url": "../detail/detail?isfromcategory=true&productId=" + e.id + "&categoryId=" + t.categoryId,
                            eventid: "4-" + r
                        },
                        on: {
                            click: t.handleClickItem
                        }
                    }, [ t._v("\n                              " + t._s(e.name) + "\n                          ") ]) ]) : t._e();
                }), t._v(" "), t.showBottom ? a("div", {
                    staticClass: "bottom"
                }, [ a("span", [ t._v("\n              已经到底啦\n            ") ]) ]) : t._e() ], 2) ], 1) ]) ]), t._v(" "), t.isShowReservation && t.cityInfo.supportShop ? a("reservation", {
                    attrs: {
                        "class-name": "type1",
                        mpcomid: "0"
                    }
                }) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    IUyo: function(t, e, a) {
        "use strict";
        var r = a("Gu7T"), i = a.n(r), s = a("Xxa5"), n = a.n(s), o = a("exGp"), c = a.n(o), d = a("Dd8w"), l = a.n(d), u = a("NYxO"), h = a("VsUZ"), g = a("BfUP"), p = getApp();
        e.a = {
            components: {
                reservation: g.a
            },
            data: function() {
                return {
                    brandNumber: 1,
                    route: "pages/category/category",
                    piwikSource: "",
                    categorys: [],
                    categoryId: 1,
                    brandId: -1,
                    scroll_left: 0,
                    brands: [],
                    products: [],
                    timestamp: 0,
                    inputData: [],
                    searchmodelProducts: {},
                    searchbarfocus: !1,
                    searchmodel: !1,
                    searchbar_inputvalue: "",
                    icon_clear: "https://sr.aihuishou.com/miniapps/earth/public/icon-clear.png",
                    track: {
                        scene: "",
                        from: "",
                        category: ""
                    },
                    curIndex: 0,
                    isSuDiYiPage: !1,
                    isFromReservation: "",
                    leftSrcollTop: 0,
                    rightSrcollTop: "auto",
                    isBottom: !1,
                    isShowReservation: !1,
                    lessFlag: !1,
                    isChangeBrand: !1,
                    isChangeCategory: !1,
                    MikeBox: [],
                    status: "",
                    showScroll: !1,
                    showHeader: !1,
                    height: 0,
                    curId: "",
                    curValue: "",
                    intoView: "",
                    rightIntoView: "right",
                    currentInfo: {}
                };
            },
            computed: l()({}, Object(u.c)([ "cityInfo" ]), {
                canShow: function() {
                    return 5 === this.categoryId && (this.products.length < 15 || this.brands[this.curIndex].pageIndex >= 3 || this.lessFlag || this.isBottom);
                },
                showBottom: function() {
                    return this.brands[this.curIndex] && this.brands[this.curIndex].isBottom;
                }
            }),
            mounted: function() {
                var t = this;
                return c()(n.a.mark(function e() {
                    var a;
                    return n.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.getCurrentDeviceInfo(), a = t.$mp.query, t.getTabList(), t.categoryId = a.categoryId ? parseInt(a.categoryId) : t.categoryId, 
                            t.brandId = a.categoryId && a.brandId ? parseInt(a.brandId) : -1, e.next = 7, t.tapCategory(t.categoryId, 1);

                          case 7:
                            t.intoView = "brand_" + (t.brands.findIndex(function(e) {
                                return e.id === t.brandId;
                            }) - 1), t.isChangeBrand = !0, t.isChangeCategory = !0, "sudiyi" === wx.getStorageSync("pageFromCooperation") && (t.isSuDiYiPage = !0), 
                            "apple-activity" === a.from && a.recordId ? wx.setStorageSync("apple-activity", a.recordId) : wx.removeStorageSync("apple-activity");

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onUnload: function() {
                this.leftSrcollTop = 0, this.isBottom = !1, this.isShowReservation = !1, this.lessFlag = !1, 
                this.MikeBox = [], this.status = "", this.showScroll = !1, this.showHeader = !1, 
                this.height = 0, this.isChangeBrand = !1, this.isChangeCategory = !1, this.brandId = -1;
            },
            methods: {
                scroll: function(t) {
                    if ("" !== this.rightIntoView && (this.rightIntoView = ""), this.cityInfo.supportShop && this.canShow) {
                        var e = t.target.scrollTop, a = this.MikeBox;
                        a.push(e);
                        var r = a.length;
                        return r > 5 && a.splice(0, r - 4), a[r - 1] > a[r - 2] ? "down" !== this.status && (5 === this.categoryId && this.showReservation(), 
                        this.showScroll = !1, this.showHeader = !1, this.height = 940, this.status = "down", 
                        !1) : a[r - 1] < a[r - 2] ? "up" !== this.status && (5 === this.categoryId && this.hideReservation(), 
                        this.showScroll = !0, this.showHeader = !0, this.height = 760, this.status = "up", 
                        !1) : void 0;
                    }
                },
                showReservation: function() {
                    5 === this.categoryId && (this.isBottom = !0, this.isShowReservation = !0);
                },
                hideReservation: function() {
                    this.isShowReservation = !1;
                },
                getTabList: function() {
                    var t = this;
                    this.$axios_dubai({
                        url: "/categories",
                        params: {}
                    }).then(function(e) {
                        t.categorys = e.map(function(t) {
                            return l()({}, t, {
                                value: t.name,
                                checked: !1
                            });
                        });
                    }), this.scroll_left = 0;
                },
                getCurrentDeviceInfo: function() {
                    var t = this;
                    return c()(n.a.mark(function e() {
                        var a;
                        return n.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(h.b)();

                              case 2:
                                a = e.sent, t.currentInfo = l()({}, a, {
                                    isMyOwn: !0,
                                    imgUrl: a.imgUrl ? decodeURIComponent(a.imgUrl) : "http://static.aihuishou.com/image?file="
                                });

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                tapCategory: function(t, e) {
                    var a = this;
                    return c()(n.a.mark(function r() {
                        var i;
                        return n.a.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return e || (a.intoView = "default"), i = -1 !== a.brandId, a.productsData = {}, 
                                a.lastIndex = 0, a.curId = "", a.curValue = "", a.curIndex = 0, a.categoryId = t, 
                                a.hideReservation(), r.next = 11, a.$axios_dubai({
                                    url: "/categories/" + a.categoryId + "/brands",
                                    code: !0
                                }).then(function(t) {
                                    if (0 === t.code) {
                                        var r = t.data.map(function(e, r) {
                                            return l()({}, e, {
                                                checked: (i && !a.isChangeBrand && !a.isChangeCategory && t.data[r].id) === a.brandId,
                                                pageIndex: 0,
                                                isBottom: !1
                                            });
                                        });
                                        if (a.brands = [ {
                                            id: -1,
                                            name: "全部",
                                            imgUrl: "",
                                            checked: !1,
                                            pageIndex: 0,
                                            isBottom: !1
                                        } ].concat(r), !i || a.isChangeBrand || a.isChangeCategory) a.curId = a.brands[0].id, 
                                        a.curValue = a.brands[0].name; else {
                                            var s = a.brands.find(function(t) {
                                                return t.id === a.brandId;
                                            }) || a.brands[0];
                                            a.curId = s.id, a.curValue = s.name;
                                        }
                                        a.curIndex = 0;
                                        var n = a.isChangeBrand || a.isChangeCategory || !e ? 0 : a.brands.findIndex(function(t) {
                                            return t.id === a.brandId;
                                        });
                                        a.getProductItems(a.curId, a.curValue, !0, n > 0 ? n : 0, 1);
                                    }
                                });

                              case 11:
                              case "end":
                                return r.stop();
                            }
                        }, r, a);
                    }))();
                },
                getProductItems: function(t, e, a, r) {
                    var s = this;
                    return c()(n.a.mark(function e() {
                        var o, c, d, l, u, h;
                        return n.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (o = [], c = s.brands, d = function() {
                                    c[s.lastIndex].checked = !1, c[r].checked = !0, s.lastIndex = r;
                                }, !s.productsData[t] || !a) {
                                    e.next = 10;
                                    break;
                                }
                                o = s.productsData[t], d(), s.brands = c, s.products = o, e.next = 21;
                                break;

                              case 10:
                                return a || ++c[r].pageIndex, l = {
                                    categoryId: s.categoryId,
                                    categoryIds: [ s.categoryId ],
                                    brandId: -1 !== t ? t : "",
                                    keyword: "",
                                    pageIndex: c[r].pageIndex,
                                    pageSize: 15
                                }, e.next = 14, s.$axios_dubai({
                                    url: "/recycle-products/search",
                                    method: "POST",
                                    params: l,
                                    code: !0
                                }).then(function(e) {
                                    if (0 === e.code) {
                                        if (o = e.data, 15 * c[r].pageIndex + e.data.length >= e.totalCount && (s.brands[r].isBottom = !(!c[r].pageIndex && !e.data.length)), 
                                        o.length) for (var i = o.length - 1; i >= 0; --i) o[i].imgUrl && o[i].imgUrl.length && (o[i].imgUrl = encodeURIComponent(o[i].imgUrl));
                                        if (5 === s.categoryId && o.length < 15 && (s.lessFlag = !0, s.showReservation()), 
                                        a) s.productsData[t] = o, d(), s.brands = c, s.products = o; else {
                                            var n = s.productsData[t] && s.productsData[t][0] || {};
                                            s.productsData[t] = s.productsData[t].concat(o).filter(function(t, e) {
                                                return 0 === e || t.id !== n.id;
                                            }), s.products = s.productsData[t];
                                        }
                                    }
                                });

                              case 14:
                                if (-1 === t && 1 === s.categoryId && a) {
                                    e.next = 16;
                                    break;
                                }
                                return e.abrupt("return");

                              case 16:
                                u = s.currentInfo ? [ s.currentInfo ].concat(i()(s.products)) : s.products, h = u[0] || {}, 
                                u = u.filter(function(t, e) {
                                    return 0 === e || t.id !== h.id;
                                }), s.products = u, s.productsData[t] = u;

                              case 21:
                              case "end":
                                return e.stop();
                            }
                        }, e, s);
                    }))();
                },
                tapBrandItem: function(t, e) {
                    this.rightIntoView = "right_" + e, this.lessFlag = !1, t.id && e > -1 && t.name && (this.curId = t.id, 
                    this.curValue = t.name, this.curIndex = e, this.getProductItems(t.id, t.name, !0, e));
                },
                handleTapClickThis: function(t) {
                    if (this._piwik("miniapp/categoryPage", "searchprice2", "basicInfo"), console.log(t), 
                    this.isFromReservation) return p.globalData.productInfo = t.currentTarget.dataset.item, 
                    void wx.navigateBack();
                    wx.redirectTo({
                        url: t.currentTarget.dataset.url
                    });
                },
                handleClickItem: function(t) {
                    var e = t.currentTarget.dataset, a = e.item, r = e.url;
                    if (this._shencePoint({
                        categoryId: this.categoryId,
                        productId: a.id,
                        event: "select_product"
                    }), this.isFromReservation) return p.globalData.productInfo = a, void wx.navigateBack();
                    wx.redirectTo({
                        url: r
                    });
                },
                tapcategorysItem: function(t) {
                    this.lessFlag = !1, t.id !== this.categoryId && (this.categoryId = t.id, 3 === this.categoryId ? this.scroll_left = 99 : 1 === this.categoryId && (this.scroll_left = 0), 
                    this.tapCategory(this.categoryId));
                },
                getMoreProducts: function() {
                    5 === this.categoryId && this.brands[this.curIndex].pageIndex >= 3 && this.showReservation(), 
                    this.getProductItems(this.curId, this.curValue, !1, this.curIndex);
                },
                toggleSearchModel: function() {
                    wx.navigateTo({
                        url: "../../pages/searchproduct/searchproduct"
                    });
                }
            }
        };
    },
    UTUY: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = a("5nAL"), i = a.n(r), s = a("AWzI"), n = a("jV6A"), o = getApp();
        i.a.prototype._piwik = function() {
            for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            return n.j.apply(void 0, [ o.globalData.scene ].concat(e));
        }, new i.a(s.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "选择型号查询报价",
                backgroundColor: "#eeeeee",
                backgroundTextStyle: "light"
            }
        };
    },
    "oj/n": function(t, e) {}
}, [ "UTUY" ]);