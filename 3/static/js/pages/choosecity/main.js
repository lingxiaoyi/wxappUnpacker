global.webpackJsonp([ 35 ], {
    "9AWT": function(t, e, n) {
        "use strict";
        var r = n("o7Z+"), i = n("z+BQ");
        var o = function(t) {
            n("S3sG");
        }, a = n("ybqe")(r.a, i.a, o, "data-v-18da106e", null);
        e.a = a.exports;
    },
    PmM7: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = n("5nAL"), i = n.n(r), o = n("9AWT");
        new i.a(o.a).$mount();
    },
    S3sG: function(t, e) {},
    "o7Z+": function(t, e, n) {
        "use strict";
        var r = n("Xxa5"), i = n.n(r), o = n("exGp"), a = n.n(o), s = n("Dd8w"), c = n.n(s), u = n("vLgD"), l = n("VsUZ"), f = n("NYxO");
        e.a = {
            data: function() {
                return {
                    scrollToView: "",
                    isLoading: !0,
                    isShowLetterTag: !1,
                    currentTab: null,
                    redirectUrl: null,
                    cityLetterList: null,
                    cityInfo: null
                };
            },
            computed: c()({}, Object(f.d)({
                locationCity: function(t) {
                    return t.global.locationCity;
                }
            }), Object(f.c)([ "cityInfo" ])),
            mounted: function() {
                this.setOptions(), this.setCityInfo(), this.initCityList();
            },
            onShow: function() {},
            methods: c()({}, Object(f.b)([ "setGlobalInfo" ]), {
                handleOnTouchLetterToViewEnd: function() {
                    this.isShowLetterTag = !1;
                },
                handleOnClickLetterToViewStart: function(t) {
                    this.scrollToView = t, this.isShowLetterTag = !0;
                },
                handleOnClickCityItem: function(t) {
                    var e = this;
                    return a()(i.a.mark(function n() {
                        var r;
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (r = e.redirectUrl, !t) {
                                    n.next = 5;
                                    break;
                                }
                                return wx.setStorageSync("choose_city", t), n.next = 5, e.setGlobalInfo([ "chosenCity", t ]);

                              case 5:
                                r ? wx.redirectTo({
                                    url: r
                                }) : wx.navigateBack();

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                initCityList: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        var n, r;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = t.currentTab, e.next = 3, t.getCityList();

                              case 3:
                                if (r = e.sent, r = t.filterSortAllCityList(r), 5 !== n) {
                                    e.next = 11;
                                    break;
                                }
                                return e.next = 8, t.setCitySupportShop(r);

                              case 8:
                                r = e.sent, e.next = 15;
                                break;

                              case 11:
                                if (1 !== n) {
                                    e.next = 15;
                                    break;
                                }
                                return e.next = 14, t.setCitySupportOnDoor(r);

                              case 14:
                                r = e.sent;

                              case 15:
                                t.setCityLetterIndex(r);

                              case 16:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                filterSortAllCityList: function(t) {
                    return String.prototype.localeCompare ? t.sort(function(t, e) {
                        return t.firstLetter > e.firstLetter ? 1 : -1;
                    }) : null;
                },
                setCityInfo: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(l.e)();

                              case 2:
                                t.cityInfo = e.sent, t.isLoading = !1;

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                setOptions: function() {
                    var t = this.$root.$mp.query, e = t.currentTab, n = t.redirecturl;
                    this.currentTab = e ? parseInt(e) : null, this.redirectUrl = n ? decodeURIComponent(n) : null;
                },
                setCitySupportShop: function(t) {
                    var e = this;
                    return a()(i.a.mark(function n() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", t.filter(function(t) {
                                    return t.supportShop;
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, n, e);
                    }))();
                },
                setCitySupportOnDoor: function(t) {
                    var e = this;
                    return a()(i.a.mark(function n() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.abrupt("return", t.filter(function(t) {
                                    return t.supportOnDoor;
                                }));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, n, e);
                    }))();
                },
                setCityLetterIndex: function(t) {
                    var e = 0, n = "", r = {}, i = null, o = [];
                    t.forEach(function(t) {
                        e++, n = t.firstLetter, r.name !== n ? (r = i = {
                            id: e,
                            name: n,
                            list: [ t ]
                        }, o.push(i)) : i.list.push(t);
                    }), this.cityLetterList = o;
                },
                getCityList: function() {
                    var t = this;
                    return a()(i.a.mark(function e() {
                        var n;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = null, t.prev = 1, t.next = 4, Object(u.a)({
                                    url: "/foundation/getallcities"
                                });

                              case 4:
                                n = t.sent, t.next = 10;
                                break;

                              case 7:
                                t.prev = 7, t.t0 = t.catch(1), console.log(t.t0);

                              case 10:
                                return t.abrupt("return", n || null);

                              case 11:
                              case "end":
                                return t.stop();
                            }
                        }, e, t, [ [ 1, 7 ] ]);
                    }))();
                }
            })
        };
    },
    "z+BQ": function(t, e, n) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "choosecity-container"
                }, [ n("header", [ n("h1", [ t._v("当前定位城市") ]), t._v(" "), t.isLoading ? n("p", [ t._v("加载中...") ]) : t._e(), t._v(" "), t.cityInfo || t.isLoading ? t._e() : n("P", {
                    attrs: {
                        mpcomid: "0"
                    }
                }, [ t._v("定位失败") ]), t._v(" "), t.cityInfo && !t.isLoading ? n("p", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.handleOnClickCityItem(t.cityInfo);
                        }
                    }
                }, [ t._v(t._s(!!t.cityInfo && t.cityInfo.name)) ]) : t._e() ], 1), t._v(" "), n("main", [ n("p", [ t._v("服务开通城市") ]), t._v(" "), n("scroll-view", {
                    attrs: {
                        "scroll-y": "",
                        "scroll-into-view": t.scrollToView
                    }
                }, t._l(t.cityLetterList, function(e, r) {
                    return t.cityLetterList && t.cityLetterList.length > 0 ? n("dl", {
                        key: e.name
                    }, [ n("dt", {
                        attrs: {
                            id: e.name
                        }
                    }, [ t._v(t._s(e.name)) ]), t._v(" "), t._l(e.list, function(e, i) {
                        return n("dd", {
                            key: i,
                            attrs: {
                                eventid: "1-" + r + "-" + i
                            },
                            on: {
                                click: function(n) {
                                    t.handleOnClickCityItem(e);
                                }
                            }
                        }, [ t._v(t._s(e.name)) ]);
                    }) ], 2) : t._e();
                })), t._v(" "), n("ul", t._l(t.cityLetterList, function(e, r) {
                    return n("li", {
                        key: e.name,
                        attrs: {
                            eventid: "2-" + r
                        },
                        on: {
                            touchstart: function(n) {
                                t.handleOnClickLetterToViewStart(e.name);
                            },
                            touchend: t.handleOnTouchLetterToViewEnd
                        }
                    }, [ t._v(t._s(e.name)) ]);
                })), t._v(" "), t.isShowLetterTag ? n("div", {
                    staticClass: "index-letter"
                }, [ t._v(t._s(t.scrollToView)) ]) : t._e() ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = r;
    }
}, [ "PmM7" ]);