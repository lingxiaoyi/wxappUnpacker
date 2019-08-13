global.webpackJsonp([ 33 ], {
    AvF3: function(t, e, a) {
        "use strict";
        var n = a("zPBW"), c = a("TqH4");
        var r = function(t) {
            a("rRAB");
        }, i = a("ybqe")(n.a, c.a, r, "data-v-cd70e510", null);
        e.a = i.exports;
    },
    TqH4: function(t, e, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "category-page"
                }, [ a("div", [ a("div", {
                    staticClass: "page-container"
                }, [ a("div", {
                    staticClass: "top-scroll-view"
                }, [ a("scroll-view", {
                    staticClass: "top-container",
                    attrs: {
                        "scroll-x": "",
                        "scroll-into-view": t.intoView
                    }
                }, t._l(t.categorys, function(e, n) {
                    return a("div", {
                        key: n,
                        staticClass: "top-item",
                        class: e.id === t.categoryId ? "active" : "",
                        attrs: {
                            id: "top" + n,
                            eventid: "0-" + n
                        },
                        on: {
                            click: function(a) {
                                t.tapcategorysItem(e, n);
                            }
                        }
                    }, [ t._v("\n            " + t._s(e.alias || e.value) + "\n          ") ]);
                })) ], 1), t._v(" "), a("div", {
                    staticClass: "bottom-container"
                }, [ a("scroll-view", {
                    staticClass: "left-container",
                    class: t.brands.length && "light",
                    attrs: {
                        "scroll-y": ""
                    }
                }, t._l(t.brands, function(e, n) {
                    return a("div", {
                        key: e.id,
                        staticClass: "left-item global-line",
                        class: e.checked ? "active" : "",
                        attrs: {
                            eventid: "1-" + n
                        },
                        on: {
                            click: function(a) {
                                t.tapBrandItem(e, n);
                            }
                        }
                    }, [ t._v("\n            " + t._s(e.name) + "\n          ") ]);
                })), t._v(" "), a("scroll-view", {
                    staticClass: "right-container",
                    attrs: {
                        "scroll-y": "",
                        "scroll-top": "0"
                    }
                }, t._l(t.products, function(e, n) {
                    return e.id ? a("div", {
                        key: n,
                        staticClass: "right-item",
                        attrs: {
                            "hover-class": "hover-active"
                        }
                    }, [ a("span", {
                        attrs: {
                            eventid: "2-" + n
                        },
                        on: {
                            click: function(a) {
                                t.handleClickItem(e);
                            }
                        }
                    }, [ t._v("\n              " + t._s(e.model) + "\n            ") ]) ]) : t._e();
                })) ], 1) ]) ]), t._v(" "), t.layer ? a("div", {
                    staticClass: "mask",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.toggleLayer
                    }
                }) : t._e(), t._v(" "), a("div", {
                    staticClass: "mask-box iphonex",
                    class: t.layer ? "show" : ""
                }, [ a("div", {
                    staticClass: "header"
                }, [ a("p", [ a("span", [ t._v("已选") ]), t._v("\n        " + t._s(t.checkedItem.model) + "\n      ") ]), t._v(" "), a("i", {
                    staticClass: "close",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.toggleLayer
                    }
                }) ], 1), t._v(" "), a("div", {
                    staticClass: "attr"
                }, [ a("p", {
                    staticClass: "title"
                }, [ t._v(t._s(t.checkedItem.attrInfo.name)) ]), t._v(" "), a("p", {
                    staticClass: "options"
                }, t._l(t.checkedItem.options, function(e, n) {
                    return a("span", {
                        key: n,
                        class: e.id === t.checkedItem.checkedOption ? "active" : "",
                        attrs: {
                            eventid: "5-" + n
                        },
                        on: {
                            click: function(a) {
                                t.clickOptions(e);
                            }
                        }
                    }, [ t._v("\n          " + t._s(e.attributeValue) + "\n        ") ]);
                })) ], 1), t._v(" "), a("div", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.submitRepair
                    }
                }, [ a("button", [ t._v("确认") ]) ], 1) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    XGsa: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), c = a.n(n), r = a("AvF3"), i = a("jV6A"), s = getApp();
        c.a.prototype._piwik = function() {
            for (var t = arguments.length, e = Array(t), a = 0; a < t; a++) e[a] = arguments[a];
            return i.j.apply(void 0, [ s.globalData.scene ].concat(e));
        }, new c.a(r.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "选择机型",
                backgroundColor: "#eeeeee",
                backgroundTextStyle: "light"
            }
        };
    },
    rRAB: function(t, e) {},
    zPBW: function(t, e, a) {
        "use strict";
        var n = a("Xxa5"), c = a.n(n), r = a("exGp"), i = a.n(r), s = a("Dd8w"), o = a.n(s), d = a("NYxO");
        e.a = {
            data: function() {
                return {
                    categorys: [],
                    categoryId: 1,
                    brandId: -1,
                    brands: [],
                    products: [],
                    curIndex: 0,
                    isSuDiYiPage: !1,
                    lastIndex: 0,
                    curId: "",
                    curValue: "",
                    layer: !1,
                    intoView: "top0",
                    checkedItem: {
                        attrInfo: {},
                        options: []
                    }
                };
            },
            computed: o()({}, Object(d.c)([ "cityInfo" ])),
            mounted: function() {
                var t = this;
                return i()(c.a.mark(function e() {
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.next = 2, t.getTabList();

                          case 2:
                            t.categoryId = t.categorys.length ? t.categorys[0].id : 0, t.tapCategory(t.categoryId, 1);

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onUnload: function() {
                this.checkedItem = {
                    attrInfo: {},
                    options: []
                }, this.layer = !1;
            },
            methods: o()({}, Object(d.b)([ "setMaintainInfo" ]), {
                getTabList: function() {
                    var t = this;
                    return i()(c.a.mark(function e() {
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$axios_dubai({
                                    url: "/jikexiu/repair/category-all",
                                    params: {}
                                }).then(function(e) {
                                    t.categorys = e.map(function(t) {
                                        return o()({}, t, {
                                            value: t.name,
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
                tapCategory: function(t) {
                    var e = this;
                    return i()(c.a.mark(function a() {
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return e.productsData = {}, e.products = [], e.lastIndex = 0, e.curId = "", e.curValue = "", 
                                e.curIndex = 0, e.categoryId = t, a.next = 9, e.$axios_dubai({
                                    url: "/jikexiu/repair/category-brands/" + e.categoryId,
                                    code: !0
                                }).then(function(t) {
                                    if (0 === t.code) {
                                        e.brands = t.data.map(function(a, n) {
                                            return o()({}, a, {
                                                checked: t.data[n].id === e.brandId,
                                                pageIndex: 0
                                            });
                                        });
                                        var a = e.brands.find(function(t) {
                                            return t.id === e.brandId;
                                        }) || e.brands[0], n = a.id, c = a.name;
                                        e.curId = n, e.curValue = c, e.curIndex = 0, e.getProductItems(e.curId, e.curValue, !0, 0, 1);
                                    }
                                });

                              case 9:
                              case "end":
                                return a.stop();
                            }
                        }, a, e);
                    }))();
                },
                getProductItems: function(t, e, a, n) {
                    var r = this;
                    return i()(c.a.mark(function e() {
                        var i, s, d;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i = [], s = r.brands, d = function() {
                                    s[r.lastIndex].checked = !1, s[n].checked = !0, r.lastIndex = n;
                                }, !r.productsData[t] || !a) {
                                    e.next = 10;
                                    break;
                                }
                                i = r.productsData[t], d(), r.brands = s, r.products = i, e.next = 13;
                                break;

                              case 10:
                                return a || ++s[n].pageIndex, e.next = 13, r.$axios_dubai({
                                    url: "/jikexiu/repair/productlist/" + r.categoryId + "/" + t,
                                    method: "GET",
                                    code: !0
                                }).then(function(e) {
                                    if (0 === e.code) if (i = e.data.map(function(t) {
                                        return o()({}, t, {
                                            attrInfo: t.attrs.length ? t.attrs[0] : {},
                                            options: t.attrs.filter(function(e) {
                                                return e.attributeId === (t.attrs.length ? t.attrs[0] : {}).attributeId;
                                            })
                                        });
                                    }), a) r.productsData[t] = i, d(), r.brands = s, r.products = i; else {
                                        var n = r.productsData[t] && r.productsData[t][0] || {};
                                        r.productsData[t] = r.productsData[t].concat(i).filter(function(t, e) {
                                            return 0 === e || t.id !== n.id;
                                        }), r.products = r.productsData[t];
                                    }
                                });

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e, r);
                    }))();
                },
                tapBrandItem: function(t, e) {
                    t.id && e > -1 && t.name && (this.curId = t.id, this.curValue = t.name, this.curIndex = e, 
                    this.getProductItems(t.id, t.name, !0, e));
                },
                tapcategorysItem: function(t, e) {
                    this.intoView = "top" + e, t.id !== this.categoryId && (this.categoryId = t.id, 
                    this.tapCategory(this.categoryId));
                },
                getMoreProducts: function() {
                    this.getProductItems(this.curId, this.curValue, !1, this.curIndex);
                },
                handleClickItem: function(t) {
                    console.log(t), this._shencePoint({
                        title: "服务站列表",
                        event: "select_product",
                        category_id: this.categoryId,
                        product_id: t.id
                    }), this.toggleLayer(), t.id !== this.checkedItem.id && (this.checkedItem = o()({}, t));
                },
                toggleLayer: function() {
                    this.layer = !this.layer;
                },
                clickOptions: function(t) {
                    console.log(t), this.checkedItem = o()({}, this.checkedItem, {
                        checkedOption: t.id
                    });
                },
                submitRepair: function() {
                    var t = this;
                    this.checkedItem.checkedOption ? (console.log(this.checkedItem), this.setMaintainInfo([ "repairInfo", this.checkedItem ]), 
                    wx.navigateTo({
                        url: "/pages/nbs-trouble/main?productId=" + this.checkedItem.id + "&attributeId=" + this.checkedItem.attrInfo.attributeId + "&attributeValueId=" + this.checkedItem.attrInfo.id
                    }), setTimeout(function() {
                        t.toggleLayer();
                    }, 0)) : wx.showToast({
                        title: "请先选择属性",
                        icon: "none"
                    });
                }
            })
        };
    }
}, [ "XGsa" ]);