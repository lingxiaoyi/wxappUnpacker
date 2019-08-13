global.webpackJsonp([ 11 ], {
    "/FGr": function(t, i) {},
    "5jUU": function(t, i, n) {
        "use strict";
        var e = {
            render: function() {
                var t = this, i = t.$createElement, n = t._self._c || i;
                return n("div", {
                    staticClass: "shop-list-container"
                }, [ n("div", {
                    staticClass: "top-banner"
                }, [ n("scroll-view", {
                    attrs: {
                        "scroll-x": !0,
                        "scroll-with-animation": !0
                    }
                }, [ n("ul", t._l(t.arr, function(i, e) {
                    return n("li", {
                        key: i.id,
                        class: e === t.chosenIndex ? "active" : "",
                        attrs: {
                            eventid: "0-" + e
                        },
                        on: {
                            click: function(i) {
                                t.handleClickRegion(e);
                            }
                        }
                    }, [ n("span", [ t._v("\n            " + t._s(i.name) + "(" + t._s(i.arrShops.length) + ")\n          ") ]) ]);
                })) ], 1) ], 1), t._v(" "), n("div", {
                    staticClass: "shops-container"
                }, [ n("scroll-view", {
                    attrs: {
                        "scroll-y": !0,
                        "scroll-with-animation": !0
                    }
                }, [ n("div", {
                    staticClass: "scroll-view-container"
                }, t._l(t.arrShops, function(i, e) {
                    return n("dl", {
                        key: i.id
                    }, [ n("dt", {
                        attrs: {
                            eventid: "1-" + e
                        },
                        on: {
                            click: function(n) {
                                t.handleToMapAnother(i, e);
                            }
                        }
                    }, [ n("div", [ n("p", {
                        staticClass: "title"
                    }, [ n("span", {
                        staticClass: "shop-name"
                    }, [ t._v(t._s(i.name)) ]), t._v(" "), t.isLocationCity && t.arr && t.arr.length && i.id === t.arr[0].arrShops[0].id && i._dis ? n("span", {
                        staticClass: "icon"
                    }, [ t._v("最近") ]) : t._e() ]), t._v(" "), n("p", {
                        staticClass: "shop-address"
                    }, [ t._v(t._s(i.address)) ]), t._v(" "), n("p", {
                        staticClass: "shop-service"
                    }, [ n("span", [ t._v("回收") ]), t._v(" "), i.newMachineServiceEnable ? n("span", [ t._v("以旧换新") ]) : t._e(), t._v(" "), i.repairServiceEnable ? n("span", [ t._v("维修") ]) : t._e(), t._v(" "), n("i") ], 1), t._v(" "), i.repairServiceEnable ? n("p", {
                        staticClass: "shop-activity"
                    }, t._l(t.repairTags, function(i, e) {
                        return n("span", {
                            key: e
                        }, [ t._v(t._s(i)) ]);
                    })) : t._e() ], 1), t._v(" "), t.isLocationCity && i._dis ? n("span", {
                        staticClass: "dis"
                    }, [ t._v("\n              " + t._s(i.dis) + "\n            ") ]) : t._e() ]), t._v(" "), n("dd", [ n("div", {
                        attrs: {
                            eventid: "2-" + e
                        },
                        on: {
                            click: function(n) {
                                t.handleContact(i);
                            }
                        }
                    }, [ n("i"), t._v(" "), n("span", [ t._v("联系" + t._s(t.isTab ? "服务站" : "门店")) ]) ], 1), t._v(" "), n("div", {
                        attrs: {
                            eventid: "3-" + e
                        },
                        on: {
                            click: function(n) {
                                t.handleToMap(i);
                            }
                        }
                    }, [ n("i"), t._v(" "), n("span", [ t._v("查看地图") ]) ], 1) ]) ], 1);
                })) ]) ], 1), t._v(" "), t.isTab ? n("nav-footer", {
                    attrs: {
                        index: 5,
                        forceShowShop: !0,
                        cityId: t.cityId,
                        mpcomid: "0"
                    }
                }) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        i.a = e;
    },
    "7e99": function(t, i, n) {
        "use strict";
        var e = n("MICi"), a = n.n(e), o = n("Gu7T"), s = n.n(o), r = n("//Fk"), c = n.n(r), d = n("Xxa5"), u = n.n(d), l = n("exGp"), p = n.n(l), h = n("Dd8w"), f = n.n(h), v = n("Qc0q"), g = n("vLgD"), _ = n("jV6A"), b = n("0xDb"), m = (n.n(b), 
        n("NYxO")), y = n("X/E/"), S = getApp();
        i.a = {
            components: {
                NavFooter: v.a
            },
            data: function() {
                return {
                    arr: [],
                    chosenIndex: 0,
                    cityId: 0,
                    isCheckShop: !1,
                    isTab: !1,
                    repairTags: []
                };
            },
            computed: f()({}, Object(m.d)({
                chosenCity: function(t) {
                    return t.global.chosenCity;
                },
                locationCity: function(t) {
                    return t.global.locationCity;
                },
                locationInfo: function(t) {
                    return t.global.locationInfo;
                }
            }), Object(m.c)([ "cityInfo" ]), {
                isLocationCity: function() {
                    return !!this.locationInfo.latitude && (!this.chosenCity.id || this.chosenCity.id === this.locationCity.id);
                },
                arrShops: function() {
                    return this.arr && this.arr.length > 0 ? this.arr[this.chosenIndex].arrShops : [];
                }
            }),
            watch: {
                cityInfo: function() {
                    this.getShops();
                }
            },
            onShow: function() {
                var t = this;
                return p()(u.a.mark(function i() {
                    var n;
                    return u.a.wrap(function(i) {
                        for (;;) switch (i.prev = i.next) {
                          case 0:
                            wx.hideShareMenu(), n = t.$root.$mp.query.isTab, t.isTab = !!n, n && wx.setNavigationBarTitle({
                                title: "服务站"
                            }), t.getShops(), t.$axios_dubai({
                                url: "/shops/shop-activities"
                            }).then(function(i) {
                                i && i.length ? t.repairTags = i.map(function(t) {
                                    return t.subTitle;
                                }) : t.repairTags = [];
                            });

                          case 6:
                          case "end":
                            return i.stop();
                        }
                    }, i, t);
                }))();
            },
            methods: f()({}, Object(m.b)([ "setMaintainInfo" ]), {
                getShops: function() {
                    var t = this;
                    return p()(u.a.mark(function i() {
                        var n, e, o, r, d, l, p, h, v, g, m;
                        return u.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return t.isCheckShop = t.$mp.query.isCheckShop || !1, n = t.$root.$mp.query, e = n.cityId, 
                                o = n.isRepair, t.cityId = e || t.cityInfo.id, i.next = 5, c.a.all([ t._getAllRegions(t.cityId), t._getAllShops(t.cityId) ]);

                              case 5:
                                r = i.sent, d = r[0] || [], l = r[1] || [], p = wx.getStorageSync("curLocation"), 
                                h = void 0, v = void 0, g = void 0, m = void 0, p && (h = p.code.latitude, v = p.code.longitude, 
                                g = b.coordtransform.wgs84togcj02(v, h), m = b.coordtransform.gcj02tobd09(g[0], g[1])), 
                                o && (l = l.filter(function(t) {
                                    return t.repairServiceEnable;
                                })), l.forEach(function(i) {
                                    var n = i.regionId;
                                    m && (i.dis = t._getDis(m, i));
                                    var e = d.find(function(t) {
                                        return Object(_.f)(t.id, n);
                                    });
                                    e && (e.arrShops = [].concat(s()(e.arrShops || []), [ i ]));
                                }), d.forEach(function(t) {
                                    t.arrShops && t.arrShops.length && (t.arrShops = t.arrShops.sort(function(t, i) {
                                        return t.dis - i.dis;
                                    }).map(function(t) {
                                        return f()({}, t, {
                                            _dis: !!t.dis && !a()(t.dis),
                                            dis: t.dis ? t.dis > 1 ? Math.floor(t.dis) + "km" : Math.floor(1e3 * t.dis) + "m" : 0
                                        });
                                    }));
                                }), t.arr = [ {
                                    id: -1,
                                    name: t.isLocationCity ? "附近" : "全部",
                                    arrShops: l.sort(function(t, i) {
                                        return t.dis - i.dis;
                                    }).map(function(t) {
                                        return f()({}, t, {
                                            _dis: !!t.dis && !a()(t.dis),
                                            dis: t.dis ? t.dis > 1 ? Math.floor(t.dis) + "km" : Math.floor(1e3 * t.dis) + "m" : 0
                                        });
                                    })
                                } ].concat(s()(d.filter(function(t) {
                                    return t.arrShops && t.arrShops.length > 0;
                                })));

                              case 15:
                              case "end":
                                return i.stop();
                            }
                        }, i, t);
                    }))();
                },
                getRepairShops: function(t) {
                    return this.$axios_dubai({
                        url: "/jikexiu/repair/city/shop/" + t
                    });
                },
                handleClickRegion: function(t) {
                    this.chosenIndex = t;
                },
                handleContact: function(t) {
                    this._piwik("pages/shop/main", "miniapp/storePage", "contactstore", "abtest"), wx.makePhoneCall({
                        phoneNumber: t.mobile
                    });
                },
                handleToMap: function(t) {
                    this._piwik("pages/shop/main", "miniapp/storePage", "viewmap", "abtest"), wx.openLocation({
                        latitude: t.latitude,
                        longitude: t.longitude,
                        name: t.name,
                        address: t.address
                    });
                },
                handleToMapAnother: function(t, i) {
                    this._piwik("pages/shop/main", "miniapp/storePage", "viewstore", "abtest");
                    var n = this.$mp.query, e = n.reservaShopId, a = n.isReservation, o = n.isTab;
                    if (a) return e ? void this.jumpToWebview(Object(y.e)(t.id)) : void this.jumpToWebview(Object(y.b)(this.cityInfo.id, t.id));
                    if (o) return this._shencePoint({
                        title: "服务站列表",
                        event: "store_click",
                        store_id: t.id,
                        rank: i
                    }), void wx.navigateTo({
                        url: "/pages/nbs-shopdetail/main?shopid=" + t.id
                    });
                    if (this.isCheckShop) {
                        var s = t;
                        return S.saveCache("status.didPageChanged", !0), S.globalData.inquiryInfo.shopid = S.globalData.shopid = s.id, 
                        void wx.navigateBack();
                    }
                    wx.openLocation(t);
                },
                _getDis: function(t, i) {
                    return Object(b.getDistance)(t[1], t[0], i.latitude, i.longitude);
                },
                _getAllRegions: function(t) {
                    return Object(g.a)({
                        url: "/foundation/getchildregions",
                        params: {
                            cityId: t
                        }
                    }).catch(function() {
                        return [];
                    });
                },
                _getAllShops: function(t) {
                    return Object(g.a)({
                        url: "/foundation/getshops",
                        params: {
                            cityId: t
                        }
                    }).catch(function() {
                        return [];
                    });
                }
            })
        };
    },
    A678: function(t, i) {},
    K16t: function(t, i, n) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var e = n("5nAL"), a = n.n(e), o = n("aiZS"), s = n("jV6A"), r = getApp();
        a.a.prototype._piwik = function() {
            for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
            return s.j.apply(void 0, [ r.globalData.scene ].concat(i));
        }, new a.a(o.a).$mount(), i.default = {
            config: {
                backgroundColor: "#f8f8f8",
                navigationBarTitleText: "门店列表"
            }
        };
    },
    aiZS: function(t, i, n) {
        "use strict";
        var e = n("7e99"), a = n("5jUU");
        var o = function(t) {
            n("/FGr"), n("dWdB"), n("A678");
        }, s = n("ybqe")(e.a, a.a, o, "data-v-0da20f22", null);
        i.a = s.exports;
    },
    dWdB: function(t, i) {}
}, [ "K16t" ]);