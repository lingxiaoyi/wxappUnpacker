global.webpackJsonp([ 24 ], {
    "2fT3": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), c = n.n(i), a = n("DG8m"), s = n("jV6A"), o = getApp();
        c.a.prototype._piwik = function() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return s.j.apply(void 0, [ o.globalData.scene ].concat(e));
        }, new c.a(a.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "选择故障情况",
                backgroundColor: "#F8F8F8",
                backgroundTextStyle: "light"
            }
        };
    },
    "4Oyz": function(t, e, n) {
        "use strict";
        var i = n("Xxa5"), c = n.n(i), a = n("Gu7T"), s = n.n(a), o = n("exGp"), r = n.n(o), u = n("Dd8w"), l = n.n(u), d = n("NYxO"), h = n("BfUP");
        e.a = {
            components: {
                reservation: h.a
            },
            data: function() {
                return {
                    trouble_list: [],
                    checkedOptions: [],
                    totalPrice: 0,
                    query: {}
                };
            },
            computed: l()({}, Object(d.d)({
                isIphoneX: function(t) {
                    return t.global.isIphoneX;
                },
                checkedList: function(t) {
                    return t.maintain.checkedOptions;
                }
            }), Object(d.c)([ "cityInfo" ]), {
                canSubmit: function() {
                    return this.checkedOptions.length;
                }
            }),
            onShow: function() {
                this.getTroubleList(), console.log("checkedList", this.checkedList);
            },
            onUnload: function() {
                this.trouble_list = [], this.checkedOptions = [], this.setMaintainInfo([ "checkedOptions", [] ]);
            },
            methods: l()({}, Object(d.b)([ "setMaintainInfo" ]), {
                getTroubleList: function() {
                    var t = this;
                    return r()(c.a.mark(function e() {
                        var n, i, a, o;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t.$mp.query, i = n.productId, a = n.attributeId, o = n.attributeValueId, 
                                e.next = 3, t.$axios_dubai({
                                    url: "/jikexiu/repair/product/solution-all/" + i + "/" + a + "/" + o
                                }).then(function(e) {
                                    t.trouble_list = (e || []).map(function(e) {
                                        return l()({}, e, {
                                            items: e.items.map(function(n) {
                                                return l()({}, n, {
                                                    parentId: e.id,
                                                    parentName: e.name,
                                                    checked: t.checkedList.filter(function(t) {
                                                        return t.malfunctionId === n.malfunctionId;
                                                    }).length > 0
                                                });
                                            })
                                        });
                                    }), t.checkedOptions = [].concat(s()(t.checkedList));
                                });

                              case 3:
                                t.checkedOptions.length && t.handleItem();

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                handleItem: function(t) {
                    var e = this, n = this.$mp.query, i = n.productId, c = n.attributeId, a = n.attributeValueId;
                    t && (t.checked ? (this.checkedOptions = this.checkedOptions.reduce(function(e, n) {
                        return n.malfunctionId === t.malfunctionId ? e : [].concat(s()(e), [ n ]);
                    }, []), t.checked = !1) : (t.checked = !0, this.checkedOptions.push(t), console.log(this.checkedOptions))), 
                    this.$axios_dubai({
                        url: "/jikexiu/repair/product/solution-price",
                        method: "POST",
                        params: {
                            attributeId: c,
                            malfunctionIds: this.checkedOptions.map(function(t) {
                                return t.malfunctionId;
                            }).join(","),
                            productId: i,
                            valueId: a
                        }
                    }).then(function(t) {
                        return e.totalPrice = t.priceTotal;
                    });
                },
                next: function() {
                    if (this.canSubmit) {
                        var t = this.$mp.query, e = t.productId, n = t.attributeId, i = t.attributeValueId;
                        this._shencePoint({
                            title: "服务站列表",
                            event: "go_fix",
                            inquiry_id: "",
                            product_id: e
                        }), this.setMaintainInfo([ "checkedOptions", this.checkedOptions ]), wx.navigateTo({
                            url: "/pages/nbs-confirm/main?productId=" + e + "&attributeId=" + n + "&attributeValueId=" + i
                        });
                    }
                }
            })
        };
    },
    DG8m: function(t, e, n) {
        "use strict";
        var i = n("4Oyz"), c = n("TYM3");
        var a = function(t) {
            n("r8/k");
        }, s = n("ybqe")(i.a, c.a, a, "data-v-0f1e34da", null);
        e.a = s.exports;
    },
    TYM3: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "trouble-list",
                    class: t.isIphoneX && "isIphoneX"
                }, [ t._l(t.trouble_list, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "trouble-item"
                    }, [ n("p", {
                        staticClass: "title"
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), n("ul", {
                        staticClass: "trouble-item-options"
                    }, t._l(e.items, function(e, c) {
                        return n("li", {
                            key: c,
                            class: e.checked && "checked",
                            attrs: {
                                eventid: "0-" + i + "-" + c
                            },
                            on: {
                                click: function(n) {
                                    t.handleItem(e);
                                }
                            }
                        }, [ n("div", {
                            staticClass: "option-title global-line"
                        }, [ t._v(t._s(e.name)) ]), t._v(" "), n("div", [ n("span", {
                            staticClass: "price"
                        }, [ t._v(t._s(e.price > 0 ? e.price : "待检测")) ]), t._v(" "), e.checked ? t._e() : n("img", {
                            attrs: {
                                src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/maintain/default.png",
                                alt: ""
                            }
                        }), t._v(" "), e.checked ? n("img", {
                            attrs: {
                                src: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/miniapps/earth/maintain/checked.png",
                                alt: ""
                            }
                        }) : t._e() ]) ]);
                    })) ], 1);
                }), t._v(" "), n("div", {
                    staticClass: "footer",
                    class: t.isIphoneX && "isIphoneX"
                }, [ n("div", {
                    staticClass: "left"
                }, [ n("p", {
                    class: t.canSubmit && "price"
                }, [ t.canSubmit ? [ n("span", [ t._v("合计: ") ]), n("span", [ t._v(t._s(t.totalPrice > 0 ? t.totalPrice : "待检测")) ]) ] : [ t._v("\n          请选择故障\n        ") ] ], 2), t._v(" "), n("p", [ t._v("维修成功后支付") ]) ], 1), t._v(" "), n("div", {
                    staticClass: "right",
                    class: t.canSubmit && "active",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.next
                    }
                }, [ t._v("下一步") ]) ]) ], 2);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "r8/k": function(t, e) {}
}, [ "2fT3" ]);