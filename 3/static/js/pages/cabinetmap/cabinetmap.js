global.webpackJsonp([ 38 ], {
    "4M1x": function(t, e) {},
    PG1O: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), a = n.n(i), s = n("VUk5");
        new a.a(s.a).$mount();
    },
    PTEF: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "map-container"
                }, [ n("header", [ n("u", {
                    class: t.inputStr ? "icon-search left50" : "icon-search"
                }), t._v(" "), n("span", {
                    class: t.inputStr ? "span-justify" : "",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.handleOnClickInput
                    }
                }, [ t._v(t._s(t.inputStr ? t.inputStr : "输入地址，查看快递柜分布")) ]) ], 1), t._v(" "), n("main", [ t.location && t.markers.length > 0 ? n("map", {
                    style: t.isiPhoneX ? "height: 1100rpx;" : "",
                    attrs: {
                        name: "",
                        longitude: t.location.longitude,
                        latitude: t.location.latitude,
                        markers: t.markers,
                        scale: t.scale,
                        "show-location": !0,
                        eventid: "1"
                    },
                    on: {
                        markertap: t.handleOnClickMarkersItem
                    }
                }) : t._e() ], 1), t._v(" "), t.cabinetList ? n("footer", [ n("dl", [ n("dd", [ t._v(t._s(t.cabinetList[t.cabinetChooseIndex].boxName)) ]), t._v(" "), n("dt", {
                    class: t.isShowBoxCount ? "" : "padding-bottom15"
                }, [ t._v(t._s(t.cabinetList[t.cabinetChooseIndex].address)) ]), t._v(" "), t.isShowBoxCount ? n("dt", {
                    staticClass: "tips"
                }, [ t._v("剩余：小箱" + t._s(t.cabinetList[t.cabinetChooseIndex].usableSmallBoxCount) + " 中箱" + t._s(t.cabinetList[t.cabinetChooseIndex].usableMediumBoxCount) + " 大箱" + t._s(t.cabinetList[t.cabinetChooseIndex].usableBigBoxCount)) ]) : t._e() ], 1) ], 1) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    VUk5: function(t, e, n) {
        "use strict";
        var i = n("i5fb"), a = n("PTEF");
        var s = function(t) {
            n("4M1x");
        }, r = n("ybqe")(i.a, a.a, s, "data-v-1d814df0", null);
        e.a = r.exports;
    },
    i5fb: function(t, e, n) {
        "use strict";
        var i = n("Gu7T"), a = n.n(i), s = n("Dd8w"), r = n.n(s), o = n("Xxa5"), c = n.n(o), u = n("exGp"), l = n.n(u), d = n("vLgD"), h = n("VsUZ"), b = "/resource/images/cabinet/redmark.png", p = "/resource/images/cabinet/bluemark.png", g = "/resource/images/cabinet/startmark.png", f = new (n("X/nZ"))({
            key: "YIRBZ-YINCK-VF6JG-AQIFP-RQYNJ-ICFWN"
        });
        e.a = {
            data: function() {
                return {
                    inputStr: "",
                    location: null,
                    markerLocation: null,
                    isFirstEntry: !0,
                    city: "",
                    scale: 15,
                    markers: [],
                    isiPhoneX: !1,
                    cabinetList: [ {
                        address: "",
                        usableSmallBoxCount: 0,
                        usableMediumBoxCount: 0,
                        usableBigBoxCount: 0
                    } ],
                    cabinetChooseIndex: 0
                };
            },
            computed: {
                isShowBoxCount: function() {
                    var t = this.cabinetList, e = this.cabinetChooseIndex;
                    return !!(t && t[e] && t[e].usableSmallBoxCount && t[e].usableMediumBoxCount && t[e].usableBigBoxCount);
                }
            },
            mounted: function() {
                this.initIsiPhoneX();
            },
            onUnload: function() {
                this.inputStr = "", this.isFirstEntry = !0, wx.removeStorageSync("cabinetUserChooseMarker");
            },
            onShow: function() {
                var t = this.isFirstEntry, e = wx.getStorageSync("cabinetUserChooseAddress"), n = wx.getStorageSync("cabinetUserChooseLocation"), i = wx.getStorageSync("cabinetUserChooseMarker");
                t && i ? this.initMapInfo() : n && (this.scale = 15, this.updateCabinetList(n)), 
                this.inputStr = e || "";
            },
            methods: {
                handleOnClickInput: function() {
                    var t = wx.getStorageSync("CurCity");
                    t && wx.navigateTo({
                        url: "/pages/searchcabinet/searchcabinet?currentCity=" + t + "&currentStreet="
                    });
                },
                handleOnBlur: function() {
                    var t = this.inputStr, e = this;
                    f.geocoder({
                        address: t,
                        success: function(t) {
                            var n = {
                                latitude: t.result.location.lat,
                                longitude: t.result.location.lng
                            };
                            wx.setStorageSync("cabinetUserChooseLocation", n), e.updateCabinetList(n);
                        },
                        fail: function(t) {
                            wx.showToast({
                                title: t.message,
                                icon: "none"
                            });
                        }
                    });
                },
                updateCabinetList: function(t) {
                    var e = this;
                    return l()(c.a.mark(function n() {
                        var i, a;
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
                                e.reSetCabinetList(a), e.initLocation(t), e.initMarkers(a, t);

                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                getNearCabinetList: function(t) {
                    var e = this;
                    return l()(c.a.mark(function n() {
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(d.a)({
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
                reSetCabinetList: function(t) {
                    t && (this.cabinetList = t);
                },
                handleOnClickMarkersItem: function(t) {
                    var e = this.cabinetList, n = this.markers, i = t.mp.markerId;
                    if (this.scale = 18, 0 !== i) {
                        var a = t.mp.markerId - 1;
                        this.cabinetChooseIndex = i - 1, n = n.map(function(t, e) {
                            return t.id > 0 && (t.iconPath = t.id === i ? p : b), t;
                        }), this.markers = n, this.location = {
                            latitude: parseFloat(e[a].latitude),
                            longitude: parseFloat(e[a].longitude)
                        };
                    }
                },
                initMapInfo: function() {
                    var t = wx.getStorageSync("cabinetUserChooseMarker"), e = wx.getStorageSync("cabinetList");
                    this.cabinetList = e, this.initLocation(t), this.initMarkers(e, t);
                },
                initLocation: function(t) {
                    this.location = {
                        latitude: parseFloat(t.latitude),
                        longitude: parseFloat(t.longitude)
                    };
                },
                initMarkers: function(t, e) {
                    var n = this, i = this.isFirstEntry, s = e.latitude, o = e.longitude, c = !1, u = t.map(function(t, e) {
                        var i = t.latitude, a = t.longitude, u = {
                            id: e + 1,
                            latitude: i,
                            longitude: a,
                            iconPath: b
                        };
                        return i === s && a === o && (u = r()({}, u, {
                            iconPath: p
                        }), n.cabinetChooseIndex = e, c = !0), u;
                    });
                    c || i || (u = [ {
                        id: 0,
                        latitude: s,
                        longitude: o,
                        iconPath: g
                    } ].concat(a()(u))), this.isFirstEntry = !1, this.markers = u;
                },
                initIsiPhoneX: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        var n;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, Object(h.c)();

                              case 3:
                                (n = e.sent) && n.model && "string" == typeof n.model && n.model.indexOf("iPhone X") > -1 && (t.isiPhoneX = !0), 
                                e.next = 9;
                                break;

                              case 7:
                                e.prev = 7, e.t0 = e.catch(0);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 0, 7 ] ]);
                    }))();
                }
            }
        };
    }
}, [ "PG1O" ]);