global.webpackJsonp([ 39 ], {
    "6N7S": function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "cabinetlist-container"
                }, [ n("header", [ n("dl", [ n("dt", [ n("u", {
                    class: t.inputStr ? "icon-search left50" : "icon-search"
                }), t._v(" "), n("span", {
                    class: t.inputStr ? "span-justify" : "",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleOnClickInput
                    }
                }, [ t._v(t._s(t.inputStr ? t.inputStr : "输入地址，查看快递柜分布")) ]) ], 1), t._v(" "), n("i", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.getInputStrLocation
                    }
                }) ], 1), t._v(" "), n("p", [ t._v("当前位置："), n("span", [ t._v(t._s(t.location)) ]), n("i", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleOnClickRefresh
                    }
                }) ], 1) ], 1), t._v(" "), n("footer", [ n("ul", t._l(t.cabinetList, function(e, i) {
                    return n("li", {
                        key: i
                    }, [ n("div", {
                        staticClass: "item-left"
                    }, [ n("dl", [ n("dd", [ t._v(t._s(e.boxName)), 0 === i ? n("span", [ t._v("最近") ]) : t._e() ]), t._v(" "), n("dt", [ t._v(t._s(e.address)) ]), t._v(" "), n("dt", {
                        staticClass: "tips"
                    }, [ t._v("剩余：小箱" + t._s(e.usableSmallBoxCount) + " 中箱" + t._s(e.usableMediumBoxCount) + " 大箱" + t._s(e.usableBigBoxCount)) ]) ], 1) ], 1), t._v(" "), n("div", {
                        staticClass: "item-right",
                        attrs: {
                            eventid: "3-" + i
                        },
                        on: {
                            click: function(n) {
                                t.navigateToMap(e);
                            }
                        }
                    }, [ n("i"), t._v(" "), n("span", [ t._v(t._s(e.showDistance)) ]) ], 1) ]);
                })) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    ChdL: function(t, e, n) {
        "use strict";
        var i = n("//Fk"), a = n.n(i), s = n("Dd8w"), r = n.n(s), o = n("Xxa5"), c = n.n(o), u = n("exGp"), l = n.n(u), d = n("jV6A"), p = n("vLgD"), f = new (n("X/nZ"))({
            key: "YIRBZ-YINCK-VF6JG-AQIFP-RQYNJ-ICFWN"
        });
        e.a = {
            data: function() {
                return {
                    options: "",
                    cabinetList: [],
                    cabinetNewList: [],
                    cabinetDistanceList: [],
                    location: "",
                    locationByMySelf: {},
                    city: "",
                    inputStr: "",
                    isFistEntry: !0,
                    isShowKm: !1
                };
            },
            created: function() {},
            mounted: function() {
                this.removeStorage();
            },
            onUnload: function() {
                this.isFistEntry = !0, this.inputStr = "";
            },
            onShow: function() {
                if (this.options = this.$root.$mp.query, this.options.cabinetType && wx.setStorageSync("cabinetType", this.options.cabinetType), 
                this.isFistEntry) this.initCabinetList(), this.getLocation(), this.isFistEntry = !1; else {
                    var t = wx.getStorageSync("cabinetUserChooseLocation"), e = wx.getStorageSync("cabinetUserChooseAddress");
                    t && this.updateCabinetList(t), e && (this.inputStr = e);
                }
            },
            methods: {
                handleOnClickInput: function() {
                    var t = this.city, e = this.location;
                    wx.navigateTo({
                        url: "/pages/searchcabinet/searchcabinet?currentCity=" + t + "&currentStreet=" + e
                    });
                },
                handleOnClickRefresh: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        var n;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.getLocation();

                              case 2:
                                n = e.sent, t.updateCabinetList(n);

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                updateCabinetList: function(t) {
                    var e = this;
                    return l()(c.a.mark(function n() {
                        var i, a, s;
                        return c.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = wx.getStorageSync("cabinetType"), t = {
                                    latitude: t.latitude ? t.latitude : t.lat,
                                    longitude: t.longitude ? t.longitude : t.lng,
                                    channel: i
                                }, n.next = 4, e.getNearCabinetList(t);

                              case 4:
                                if (a = n.sent) {
                                    n.next = 8;
                                    break;
                                }
                                return wx.showToast({
                                    title: "当前地址附近没有快递柜",
                                    icon: "none"
                                }), n.abrupt("return");

                              case 8:
                                return wx.setStorageSync("cabinetList", a), n.next = 11, e.getCabinetDistanceList(a);

                              case 11:
                                s = n.sent, e.reSetCabinetList(a, s);

                              case 13:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                removeStorage: function() {
                    wx.removeStorageSync("cabinetUserChooseLocation"), wx.removeStorageSync("cabinetUserChooseAddress");
                },
                initCabinetList: function() {
                    var t = this.options, e = wx.getStorageSync("cabinetList"), n = wx.getStorageSync("cabinetDistanceList");
                    e && e.length > 0 && n && n.length > 0 && !t.cabinetType ? (e = (e = e.map(function(t, e) {
                        return (t = r()({}, t, {
                            distance: parseInt(n[e])
                        })).showDistance = n[e] >= 1e3 ? (n[e] / 1e3).toFixed(1) + "km" : n[e] + "m", t;
                    })).sort(this.objCompare("distance")), this.cabinetList = e) : this.handleOnClickRefresh();
                },
                reSetCabinetList: function(t, e) {
                    var n = this.cabinetList;
                    t && e && (n = (n = t.map(function(t, n) {
                        return (t = r()({}, t, {
                            distance: parseInt(e[n])
                        })).showDistance = e[n] >= 1e3 ? (e[n] / 1e3).toFixed(1) + "km" : e[n] + "m", t;
                    })).sort(this.objCompare("distance")), this.cabinetList = n);
                },
                objCompare: function(t) {
                    return function(e, n) {
                        return e[t] > n[t] ? 1 : e[t] < n[t] ? -1 : 0;
                    };
                },
                getLocation: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        var n;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t, e.abrupt("return", new a.a(function(e, i) {
                                    wx.getLocation({
                                        type: "wgs84",
                                        altitude: "true",
                                        success: function(a) {
                                            var s = {
                                                latitude: a.latitude,
                                                longitude: a.longitude
                                            };
                                            t.locationByMySelf = s, f.reverseGeocoder({
                                                location: s,
                                                success: function(t) {
                                                    n.location = t.result.address, n.city = t.result.ad_info.city, e(t.result.ad_info.location);
                                                },
                                                fail: function() {
                                                    wx.showToast({
                                                        title: "定位失败，请稍后尝试！",
                                                        icon: "none"
                                                    }), i();
                                                }
                                            });
                                        },
                                        fail: function() {
                                            return console.log(null);
                                        }
                                    });
                                }));

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                getNearCabinetList: function(t) {
                    var e = this;
                    return l()(c.a.mark(function n() {
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(p.a)({
                                    url: "/express-cabinet",
                                    params: t
                                }).catch(function() {
                                    return null;
                                });

                              case 2:
                                return e.abrupt("return", e.sent);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, n, e);
                    }))();
                },
                getCabinetDistanceList: function(t) {
                    var e = this;
                    return l()(c.a.mark(function n() {
                        var i, s, r, o;
                        return c.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = null, s = !0, r = null, n.next = 5, e.getLocation();

                              case 5:
                                return o = n.sent, n.abrupt("return", new a.a(function(n, a) {
                                    r = t.map(function(t) {
                                        var e = {
                                            latitude: o.latitude ? o.latitude : o.lat,
                                            longitude: o.longitude ? o.longitude : o.lng
                                        }, n = {
                                            latitude: t.latitude,
                                            longitude: t.longitude
                                        }, a = Object(d.b)(e, n).toFixed(0);
                                        return i = a < i || s ? a : i, s = !1, a;
                                    }), e.cabinetDistanceList = r, wx.setStorageSync("cabinetDistanceList", r), wx.setStorageSync("nearestCabinetDistance", i), 
                                    n(r);
                                }));

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                getInputStrLocation: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                wx.getStorageSync("cabinetUserChooseLocation") || wx.setStorageSync("cabinetUserChooseLocation", t.locationByMySelf), 
                                wx.navigateTo({
                                    url: "/pages/cabinetmap/cabinetmap"
                                });

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                navigateToMap: function(t) {
                    wx.getStorageSync("cabinetUserChooseLocation") || wx.setStorageSync("cabinetUserChooseLocation", this.locationByMySelf);
                    var e = {
                        latitude: t.latitude ? t.latitude : t.lat,
                        longitude: t.longitude ? t.longitude : t.lng
                    };
                    wx.setStorageSync("cabinetUserChooseMarker", e), wx.navigateTo({
                        url: "/pages/cabinetmap/cabinetmap"
                    });
                }
            }
        };
    },
    NZ9a: function(t, e, n) {
        "use strict";
        var i = n("ChdL"), a = n("6N7S");
        var s = function(t) {
            n("vrnB");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-bd56fe00", null);
        e.a = r.exports;
    },
    hdj4: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), a = n.n(i), s = n("NZ9a");
        new a.a(s.a).$mount();
    },
    vrnB: function(t, e) {}
}, [ "hdj4" ]);