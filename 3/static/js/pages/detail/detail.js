global.webpackJsonp([ 1 ], {
    "+qNY": function(t, e, n) {
        "use strict";
        var i = getApp();
        e.a = {
            props: {
                objInfo: Object,
                productInfo: Object,
                index: Number,
                canClick: Boolean
            },
            computed: {
                viewId: function() {
                    return this.objInfo && this.objInfo.id ? "view-" + this.objInfo.id : "";
                },
                showDesc: function() {
                    var t = this.objInfo;
                    return t.text && t.text.length || t.imgs && t.imgs.length || "";
                }
            },
            methods: {
                handleClickTitleDesc: function() {
                    this.showDesc && this.$emit("showModal", this.objInfo.imgs, this.objInfo.text);
                },
                handleSelectItem: function(t) {
                    this.canClick && (!t.isNoAdditional || t.isEnvironmentalRecycling ? this.$emit("changeItem", this.objInfo.id, t.id) : i.jumpToWebview("https://m.aihuishou.com/n/#/page/privacy"));
                },
                handleClickItemDesc: function(t) {
                    this.$emit("showModal", t.imgs, t.text);
                }
            }
        };
    },
    "/Fln": function(t, e, n) {
        "use strict";
        var i = n("xy8G"), r = n("wzlM");
        var a = function(t) {
            n("j8CK");
        }, o = n("ybqe")(i.a, r.a, a, "data-v-7ed9b67d", null);
        e.a = o.exports;
    },
    "0vfx": function(t, e) {},
    "63T1": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), r = n.n(i), a = n("/Fln");
        new r.a(a.a).$mount(), e.default = {
            config: {
                navigationBarTitleText: ""
            }
        };
    },
    "83c5": function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "modal-container",
                    style: t.show ? "" : "display: none",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        tap: function(e) {
                            t.$emit("closeModal");
                        }
                    }
                }, [ n("div", {
                    staticClass: "inner"
                }, [ n("dl", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ t.imgs && t.imgs.length > 1 ? n("dt", [ n("swiper", {
                    attrs: {
                        "indicator-dots": t.imgs.length > 1,
                        "indicator-color": "rgba(0, 0, 0, .25)",
                        "indicator-active-color": "rgba(249,231,44,1)"
                    }
                }, t._l(t.imgs, function(t, e) {
                    return n("swiper-item", {
                        key: t,
                        staticClass: "swiper-item",
                        attrs: {
                            mpcomid: "0-" + e
                        }
                    }, [ n("img", {
                        attrs: {
                            src: t,
                            mode: "widthFix"
                        }
                    }) ]);
                })) ], 1) : t._e(), t._v(" "), t.imgs && t.imgs.length < 2 ? n("dt", {
                    staticClass: "imageOnly"
                }, [ n("img", {
                    attrs: {
                        src: t.imgs[0],
                        mode: "widthFix"
                    }
                }) ]) : t._e(), t._v(" "), t.arrContent && t.arrContent.length ? n("dd", t._l(t.arrContent, function(e, i) {
                    return n("text", {
                        key: i
                    }, [ t._v("\n          " + t._s(e) + "\n        ") ]);
                })) : t._e() ], 1), t._v(" "), n("div", {
                    staticClass: "close icon-close"
                }) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "8fpc": function(t, e) {},
    "9DrA": function(t, e) {},
    I9SI: function(t, e, n) {
        "use strict";
        var i = n("NaTZ"), r = n("mu1A");
        var a = function(t) {
            n("OsH3");
        }, o = n("ybqe")(i.a, r.a, a, "data-v-adfa5a4a", null);
        e.a = o.exports;
    },
    JVdd: function(t, e, n) {
        "use strict";
        e.a = {
            props: {
                index: Number,
                arr: Array
            },
            methods: {
                handleSelectItem: function(t) {
                    this.$emit("changeItem", t.id);
                },
                handleClickItemDesc: function(t) {
                    this.$emit("showModal", t.imgs, t.content);
                }
            }
        };
    },
    KfI0: function(t, e) {},
    KxXl: function(t, e, n) {
        "use strict";
        var i = n("+qNY"), r = n("t4em");
        var a = function(t) {
            n("9DrA");
        }, o = n("ybqe")(i.a, r.a, a, "data-v-706feb65", null);
        e.a = o.exports;
    },
    NaTZ: function(t, e, n) {
        "use strict";
        var i = n("SSgB"), r = n.n(i);
        e.a = {
            props: {
                total: Number,
                current: Number
            },
            computed: {
                percent: function() {
                    return r()(this.total) && r()(this.current) ? 100 * this.current / this.total : 0;
                }
            }
        };
    },
    OsH3: function(t, e) {},
    Pr6w: function(t, e, n) {
        "use strict";
        var i = n("gf6Z"), r = n("fDgp");
        var a = function(t) {
            n("RUuX");
        }, o = n("ybqe")(i.a, r.a, a, "data-v-0307062c", null);
        e.a = o.exports;
    },
    RUuX: function(t, e) {},
    fDgp: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "captch-popup-container",
                    style: t.show ? "" : "display: none"
                }, [ n("dl", [ n("dt", [ n("p", {
                    staticClass: "title"
                }, [ t._v("查看了这么多次定价，我也来问问你吧") ]), t._v(" "), n("div", {
                    class: t.isRight ? "" : "wrong"
                }, [ n("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.strCaptch,
                        expression: "strCaptch"
                    } ],
                    attrs: {
                        type: "number",
                        placeholder: "请输入右侧验证码",
                        "placeholder-style": "color: #bababa",
                        eventid: "0"
                    },
                    domProps: {
                        value: t.strCaptch
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.strCaptch = e.target.value);
                        }
                    }
                }), t._v(" "), n("img", {
                    attrs: {
                        src: t.imgSrc,
                        mode: "aspectFit",
                        eventid: "1"
                    },
                    on: {
                        tap: t.handleChangeImage
                    }
                }) ]), t._v(" "), t.isRight ? t._e() : n("p", {
                    staticClass: "tips"
                }, [ t._v("验证码输入有误") ]) ], 1), t._v(" "), n("dd", [ n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "2"
                    },
                    on: {
                        submit: t.handleSubmit
                    }
                }, [ n("button", {
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v("提交验证") ]) ], 1) ], 1) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    gf6Z: function(t, e, n) {
        "use strict";
        var i = n("Xxa5"), r = n.n(i), a = n("exGp"), o = n.n(a), s = n("vLgD");
        e.a = {
            props: {
                img: String,
                right: Boolean,
                show: Boolean
            },
            data: function() {
                return {
                    isRight: this.right,
                    strCaptch: "",
                    imgSrc: this.img
                };
            },
            watch: {
                right: function(t) {
                    !1 === t && (this.isRight = !1);
                },
                img: function(t) {
                    t && (this.imgSrc = t);
                }
            },
            methods: {
                handleChangeImage: function() {
                    var t = this;
                    return o()(r.a.mark(function e() {
                        var n;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return wx.showToast({
                                    icon: "loading",
                                    title: "获取中..."
                                }), e.next = 3, t._getImageCaptcha();

                              case 3:
                                (n = e.sent) ? t.imgSrc = n : wx.showToast({
                                    icon: "none",
                                    title: "请重试"
                                }), wx.hideToast();

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                handleSubmit: function(t) {
                    var e = this.strCaptch;
                    /^\d{4}$/.test(e) ? (this.isRight = !0, this.$emit("submit", t, e)) : this.isRight = !1;
                },
                _getImageCaptcha: function() {
                    return Object(s.a)({
                        url: "/foundation/getimagecaptcha"
                    }).catch(function() {
                        return "";
                    });
                }
            }
        };
    },
    j8CK: function(t, e) {},
    mu1A: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.total ? n("div", {
                    staticClass: "process-container"
                }, [ n("progress", {
                    attrs: {
                        percent: t.percent,
                        "stroke-width": 25,
                        color: "#FFD000",
                        activeColor: "#FFD000",
                        backgroundColor: "#FFFFFF",
                        active: !0,
                        "active-mode": "forwards"
                    }
                }), t._v(" "), n("div", {
                    staticClass: "process-text"
                }, [ n("span", [ t._v("选择结果和实际情况相符，将以最快速度收款") ]), t._v(" "), t.total ? n("p", {
                    staticClass: "process-number"
                }, [ n("span", {
                    staticClass: "current-percent"
                }, [ t._v(t._s(t.current)) ]), t._v(" / " + t._s(t.total) + "\n    ") ]) : t._e() ], 1) ], 1) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    nGvJ: function(t, e, n) {
        "use strict";
        var i = n("JVdd"), r = n("oxho");
        var a = function(t) {
            n("8fpc");
        }, o = n("ybqe")(i.a, r.a, a, "data-v-36b85f72", null);
        e.a = o.exports;
    },
    oxho: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("dl", {
                    staticClass: "checkbox-container",
                    attrs: {
                        id: "view-checkbox"
                    }
                }, [ n("dt", [ n("span", [ t._v(t._s(t.index) + ". 功能情况") ]), n("span", [ t._v("（可多选，若无问题点击查看定价）") ]) ]), t._v(" "), n("dd", [ n("ul", t._l(t.arr, function(e, i) {
                    return e && e.arr && 1 !== e.arr.length ? n("li", {
                        key: e.id,
                        class: {
                            "no-border": i === t.arr.length - 1
                        },
                        attrs: {
                            eventid: "1-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.handleSelectItem(e);
                            }
                        }
                    }, [ n("i", {
                        class: [ e.selected ? "active" : "" ]
                    }), t._v(" "), n("p", [ n("span", [ t._v(t._s(e.title)) ]), t._v(" "), e.content ? n("img", {
                        attrs: {
                            src: "https://sr.aihuishou.com/miniapps/earth/public/question-gray.png",
                            eventid: "0-" + i
                        },
                        on: {
                            tap: function(n) {
                                n.stopPropagation(), t.handleClickItemDesc(e);
                            }
                        }
                    }) : t._e() ]) ], 1) : t._e();
                })) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    t4em: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("dl", {
                    staticClass: "radio-box-container",
                    attrs: {
                        id: t.viewId
                    }
                }, [ n("dt", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        tap: t.handleClickTitleDesc
                    }
                }, [ n("span", [ t._v(t._s(t.index + 1) + t._s(".") + "  " + t._s(t.objInfo.name)) ]), t._v(" "), t.showDesc ? n("img", {
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/public/question-white.png"
                    }
                }) : t._e() ]), t._v(" "), n("dd", [ n("ul", t._l(t.objInfo.values, function(e, i) {
                    return n("li", {
                        key: e.id,
                        class: {
                            "no-border": i === t.objInfo.values.length - 1,
                            "no-additional": e.isEnvironmentalRecycling
                        },
                        attrs: {
                            eventid: "2-" + i
                        },
                        on: {
                            tap: function(n) {
                                t.handleSelectItem(e);
                            }
                        }
                    }, [ n("i", {
                        class: [ e.selected ? "active" : "" ]
                    }), t._v(" "), n("p", {
                        staticClass: "item-line"
                    }, [ n("span", {
                        staticClass: "value"
                    }, [ t._v(t._s(e.value)) ]), t._v(" "), e.isEnvironmentalRecycling ? n("span", {
                        staticClass: "tips"
                    }, [ t._v("因隐私安全，仅支持环保回收") ]) : t._e(), t._v(" "), e.text && e.text.length || e.imgs && e.imgs.length ? n("img", {
                        attrs: {
                            src: "https://sr.aihuishou.com/miniapps/earth/public/question-gray.png",
                            eventid: "1-" + i
                        },
                        on: {
                            tap: function(n) {
                                n.stopPropagation(), t.handleClickItemDesc(e);
                            }
                        }
                    }) : t._e() ]) ], 1);
                })) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    uWi6: function(t, e, n) {
        "use strict";
        var i = n("jV6A");
        e.a = {
            props: {
                show: Boolean,
                imgs: Array,
                content: String
            },
            computed: {
                arrContent: function() {
                    return Object(i.n)(this.content);
                }
            }
        };
    },
    uc3G: function(t, e, n) {
        "use strict";
        var i = n("uWi6"), r = n("83c5");
        var a = function(t) {
            n("KfI0"), n("0vfx");
        }, o = n("ybqe")(i.a, r.a, a, "data-v-7171a519", null);
        e.a = o.exports;
    },
    wzlM: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "inquire-procress-container"
                }, [ n("process", {
                    attrs: {
                        current: t.current,
                        total: t.isEnvironmentalFlag ? t.current : t.arrRadiosTodos.length,
                        mpcomid: "0"
                    }
                }), t._v(" "), n("scroll-view", {
                    style: t.showSubmitContainer ? "padding-bottom: 140rpx" : "",
                    attrs: {
                        "scroll-y": !0,
                        "scroll-with-animation": !0,
                        "enable-back-to-top": !0,
                        "scroll-into-view": t.viewId
                    }
                }, [ t._l(t.arrRadios, function(e, i) {
                    return n("radio-box", {
                        key: e.id,
                        attrs: {
                            index: i,
                            objInfo: e,
                            productInfo: t.product,
                            canClick: t.canClick,
                            eventid: "0-" + i,
                            mpcomid: "1-" + i
                        },
                        on: {
                            changeItem: t.handleClickRadioItem,
                            showModal: t.handleShowModal
                        }
                    });
                }), t._v(" "), t.showCheckBoxContainer ? n("check-box", {
                    attrs: {
                        index: t.arrRadiosTodos.length + 1,
                        arr: t.arrCheckBoxs,
                        eventid: "1",
                        mpcomid: "2"
                    },
                    on: {
                        changeItem: t.handleClickCheckbox,
                        showModal: t.handleShowModal
                    }
                }) : t._e() ], 2), t._v(" "), t.showSubmitContainer && t.userInfo.mobileLoginToken ? n("form", {
                    attrs: {
                        "report-submit": !0,
                        eventid: "2"
                    },
                    on: {
                        submit: t.handleLoginSubmit
                    }
                }, [ n("button", {
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v("查看定价") ]) ], 1) : t._e(), t._v(" "), t.showSubmitContainer && !t.userInfo.mobileLoginToken ? n("button", {
                    staticClass: "noLogin",
                    attrs: {
                        "open-type": "getPhoneNumber",
                        eventid: "3"
                    },
                    on: {
                        getphonenumber: t.getPhoneNumber
                    }
                }, [ t._v("\n    查看定价\n  ") ]) : t._e(), t._v(" "), n("modal", {
                    attrs: {
                        show: t.isShowModal,
                        imgs: t.imgs,
                        content: t.content,
                        eventid: "4",
                        mpcomid: "3"
                    },
                    on: {
                        closeModal: t.handleCloseModal
                    }
                }), t._v(" "), t.showShareModel ? n("ShareDialog", {
                    attrs: {
                        close: t.handleCloseModel,
                        mpcomid: "4"
                    }
                }) : t._e(), t._v(" "), n("captch-popup", {
                    attrs: {
                        show: t.isShowCaptch,
                        img: t.strCaptchImgSrc,
                        right: t.isCaptchRight,
                        eventid: "5",
                        mpcomid: "5"
                    },
                    on: {
                        submit: t.handleSubmit
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    xy8G: function(t, e, n) {
        "use strict";
        var i = n("woOf"), r = n.n(i), a = n("lHA8"), o = n.n(a), s = n("mvHQ"), c = n.n(s), u = n("Gu7T"), d = n.n(u), l = n("Dd8w"), h = n.n(l), p = n("Xxa5"), m = n.n(p), f = n("exGp"), v = n.n(f), g = n("I9SI"), w = n("uc3G"), b = n("Pr6w"), x = n("KxXl"), C = n("nGvJ"), I = n("+Ui8"), k = n("jV6A"), _ = n("VsUZ"), y = n("NYxO"), S = n("QmSG"), R = getApp(), T = !1, q = [];
        e.a = {
            components: {
                process: g.a,
                modal: w.a,
                captchPopup: b.a,
                radioBox: x.a,
                checkBox: C.a,
                ShareDialog: I.a
            },
            data: function() {
                return {
                    showShareModel: !1,
                    total: 0,
                    current: 0,
                    isShowModal: !1,
                    imgs: [],
                    content: "",
                    viewId: "",
                    showCheckBoxContainer: !1,
                    showSubmitContainer: !1,
                    isShowCaptch: !1,
                    strCaptchImgSrc: "",
                    isCaptchRight: !0,
                    isShowShare: !1,
                    userInfo: {},
                    selectedOverProtectIndex: -1,
                    product: {},
                    propertyNames: [],
                    arrRadios: [],
                    arrRadiosTodos: [],
                    arrCheckBoxs: [],
                    arrCheckBoxsTodos: [],
                    isEnvironmentalFlag: !1,
                    isEnvironmentalRecycling: !1,
                    quickItem: null,
                    canClick: !0
                };
            },
            onUnload: function() {
                this.resetData();
            },
            onShow: function() {
                var t = this;
                return v()(m.a.mark(function e() {
                    return m.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.productId = t.$mp.query.productId || t.$root.$mp.query.productId || "", t.initModel(), 
                            Object(_.d)().then(function(e) {
                                e && (t.userInfo = e);
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            mounted: function() {
                var t = this;
                return v()(m.a.mark(function e() {
                    return m.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.resetData(), e.next = 3, t.getProduct();

                          case 3:
                            if (!t.isEnvironmentalRecycling) {
                                e.next = 5;
                                break;
                            }
                            return e.abrupt("return");

                          case 5:
                            return e.next = 7, t.$axios({
                                url: "/v2/product/quick-inquiry-item",
                                params: {
                                    productId: t.productId
                                }
                            }).then(function(e) {
                                if (e) {
                                    t.quickItem = e;
                                    var n = {
                                        name: e.name,
                                        values: e.items,
                                        isQuick: !0
                                    };
                                    t.arrRadios.push(n), t.arrRadiosTodos.push(n);
                                }
                            });

                          case 7:
                            if (!t.quickItem) {
                                e.next = 9;
                                break;
                            }
                            return e.abrupt("return");

                          case 9:
                            t.getPropertyDetail();

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            methods: h()({}, Object(y.b)([ "doLoginWithButton" ]), {
                getProduct: function() {
                    var t = this;
                    return v()(m.a.mark(function e() {
                        return m.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, t.$axios({
                                    url: "/product/getproduct",
                                    params: {
                                        productId: t.productId
                                    }
                                }).then(function(e) {
                                    t.product = e, e.isEnvironmentalRecycling ? (t.isEnvironmentalRecycling = !0, t.getEnvironmentalPrice()) : wx.setNavigationBarTitle({
                                        title: e.name
                                    });
                                });

                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                getPropertyDetail: function() {
                    var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return v()(m.a.mark(function n() {
                        return m.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, t.$axios({
                                    url: "/v2/product/price-property",
                                    params: {
                                        productId: t.productId,
                                        quickInquiryValue: e
                                    }
                                }).then(function() {
                                    var e = v()(m.a.mark(function e(n) {
                                        var i;
                                        return m.a.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                if (n) {
                                                    e.next = 2;
                                                    break;
                                                }
                                                return e.abrupt("return", wx.navigateTo({
                                                    url: "/pages/nosku/nosku"
                                                }));

                                              case 2:
                                                q = n.skus, t.propertyNames = n.propertyNames, t.quickItem ? (i = t.arrRadiosTodos.splice(0, 1), 
                                                t.arrRadiosTodos = [].concat(d()(i), d()(n.propertyNames.filter(function(t) {
                                                    return 2 !== t.type;
                                                })))) : t.arrRadiosTodos = n.propertyNames.filter(function(t) {
                                                    return 2 !== t.type;
                                                }), t.arrCheckBoxsTodos = n.propertyNames.filter(function(t) {
                                                    return 2 === t.type;
                                                }), t.arrRadiosTodos.length ? t.arrRadios.length || (t.arrRadios = [ t.arrRadiosTodos[0] ]) : (t.arrCheckBoxs = JSON.parse(c()(t.arrCheckBoxsTodos)), 
                                                t.arrCheckBoxs = t.arrCheckBoxs.map(function(e) {
                                                    return t._serializeCheckbox(e);
                                                }), t.showCheckBoxContainer = !0, t.showSubmitContainer = !0);

                                              case 7:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e, t);
                                    }));
                                    return function(t) {
                                        return e.apply(this, arguments);
                                    };
                                }()).catch(function(t) {
                                    return console.log(t);
                                });

                              case 2:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                getEnvironmentalPrice: function(t, e) {
                    wx.showLoading(), this.$axios({
                        url: "/v2/product/environmental-inquiry",
                        method: "POST",
                        params: {
                            productId: this.productId,
                            ppvIds: t || [],
                            phenomenonItemIds: e || []
                        }
                    }).then(function(e) {
                        wx.hideLoading(), wx.setStorageSync("lastInquiryKey", e), R.globalData.inquiryInfo.needFresh = !0, 
                        t ? wx.navigateTo({
                            url: "/pages/inquiry/inquiry?inquiryKey=" + e
                        }) : wx.redirectTo({
                            url: "/pages/inquiry/inquiry?inquiryKey=" + e
                        });
                    });
                },
                initModel: function() {
                    wx.getStorageSync("lastInquiryKey") && !k.m.get(S.f.POPUP_SHOW_SHARE_KEY) && (this.showShareModel = !0, 
                    k.m.setExpires("showShare", 1));
                },
                handleCloseModel: function() {
                    this.showShareModel = !1;
                },
                resetData: function() {
                    this.total = 0, this.current = 0, this.isShowModal = !1, this.imgs = [], this.content = "", 
                    this.arrRadios = [], this.arrRadiosTodos = [], this.arrCheckBoxs = [], this.arrCheckBoxsTodos = [], 
                    this.viewId = "", this.showCheckBoxContainer = !1, this.showSubmitContainer = !1, 
                    this.isShowCaptch = !1, this.strCaptchImgSrc = "", this.isCaptchRight = !0, this.isEnvironmentalFlag = !1, 
                    this.isEnvironmentalRecycling = !1, this.quickItem = null, this.canClick = !0;
                },
                handleClickCheckbox: function(t) {
                    var e = this.arrCheckBoxs;
                    e.find(function(e) {
                        return Object(k.f)(e.id, t);
                    }).selected = !e.find(function(e) {
                        return Object(k.f)(e.id, t);
                    }).selected;
                },
                handleClickRadioItem: function(t, e) {
                    var n = this;
                    return v()(m.a.mark(function i() {
                        var r, a, o, s, c, u, d;
                        return m.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (n.canClick = !1, n.viewId = "", n.isEnvironmentalFlag = !1, -1 !== (r = n.arrRadios.findIndex(function(e) {
                                    return e.id === t;
                                }))) {
                                    i.next = 6;
                                    break;
                                }
                                return i.abrupt("return");

                              case 6:
                                if (a = n.arrRadios.slice(0, r + 1), (o = n.arrRadios[r]).values.forEach(function(t) {
                                    return t.selected = !1;
                                }), (s = o.values.find(function(t) {
                                    return t.id === e;
                                })).selected = !0, !o.isQuick || s.isEnvironmentalRecycling) {
                                    i.next = 14;
                                    break;
                                }
                                return i.next = 14, n.getPropertyDetail(s.valueEnum);

                              case 14:
                                if (!s.isEnvironmentalRecycling) {
                                    i.next = 22;
                                    break;
                                }
                                return n.isEnvironmentalFlag = !0, n.current = r + 1, n.showCheckBoxContainer = !1, 
                                n.showSubmitContainer = !0, n.arrRadios.length = r + 1, n.canClick = !0, i.abrupt("return");

                              case 22:
                                o.isPhenomenon && (n.arrRadiosTodos = n.arrRadiosTodos.filter(function(e) {
                                    return e.parentId !== t;
                                }), n.arrCheckBoxsTodos = n.arrCheckBoxsTodos.filter(function(e) {
                                    return e.parentId !== t;
                                }), s.shouldRelease && (o.releaseItems.forEach(function(e) {
                                    return e.parentId = t;
                                }), c = n.arrRadiosTodos.slice(r + 1, n.arrRadiosTodos.length).concat(o.releaseItems.filter(function(t) {
                                    return 2 !== t.type;
                                })).sort(function(t, e) {
                                    return t.weight - e.weight;
                                }), u = n.arrCheckBoxsTodos.concat(o.releaseItems.filter(function(t) {
                                    return 2 === t.type;
                                })).sort(function(t, e) {
                                    return t.weight - e.weight;
                                }), n.arrRadiosTodos = n.arrRadiosTodos.slice(0, r + 1).concat(c), n.arrCheckBoxsTodos = u)), 
                                (d = n.getNextDataset(a)) ? (n.current = a.length, n.arrRadios = a, setTimeout(function() {
                                    n.canClick = !0, n.arrRadios.push(d), n.viewId = "view-" + d.id;
                                }, 0)) : (n.canClick = !0, n.viewId = "view-checkbox");

                              case 25:
                              case "end":
                                return i.stop();
                            }
                        }, i, n);
                    }))();
                },
                getNextDataset: function(t) {
                    var e = this;
                    if (t.length === this.arrRadiosTodos.length) return this.showSubmitContainer = !0, 
                    this.current = this.arrRadiosTodos.length, this.arrCheckBoxsTodos.length && (this.showCheckBoxContainer = !0, 
                    this.arrCheckBoxs = JSON.parse(c()(this.arrCheckBoxsTodos)), this.arrCheckBoxs = this.arrCheckBoxs.map(function(t) {
                        return e._serializeCheckbox(t);
                    })), !1;
                    this.showCheckBoxContainer = !1, this.showSubmitContainer = !1;
                    var n = JSON.parse(c()(this.arrRadiosTodos[t.length]));
                    if (q && q.length && 1 === parseInt(n.type)) {
                        var i = t.filter(function(t) {
                            return 1 === parseInt(t.type);
                        }).map(function(t) {
                            return t.values.find(function(t) {
                                return !0 === t.selected;
                            }).id;
                        }), a = n.values.map(function(t) {
                            return t.id;
                        }), s = q.reduce(function(t, e) {
                            var n = [];
                            return Object(k.e)(e, i).length === i.length && (n = e), [].concat(d()(new o.a([].concat(d()(t), d()(n)))));
                        }, []), u = Object(k.e)(a, s), l = n.values.filter(function(t) {
                            return ~u.findIndex(function(e) {
                                return Object(k.f)(e, t.id);
                            });
                        });
                        n = r()({}, n, {
                            values: l
                        });
                    }
                    var h = t.map(function(t) {
                        return t.values.find(function(t) {
                            return !0 === t.selected && t.isOverProtection;
                        });
                    }).filter(function(t) {
                        return !!t;
                    });
                    return h && h.length && (n = r()({}, n, {
                        values: n.values.filter(function(t) {
                            return !t.isPerfect;
                        })
                    })), n;
                },
                getPhoneNumber: function(t) {
                    var e = this;
                    return v()(m.a.mark(function n() {
                        var i, r, a, o;
                        return m.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e._piwik("pages/detail/`detailnew", "miniapp/detailPage", "priceclick"), i = t.target, 
                                r = i.iv, a = i.encryptedData, !r || !a) {
                                    n.next = 9;
                                    break;
                                }
                                return n.next = 5, e.doLoginWithButton([ t, e ]);

                              case 5:
                                (o = n.sent).mobile ? (e.userInfo = o, R.saveCache("userLoginInfo", {
                                    token: o.mobileLoginToken,
                                    mobile: o.mobile
                                }), e._shencePoint({
                                    mobile: o.mobile,
                                    event: "login"
                                }), e._piwik("pages/detail/`detailnew", "miniapp/detailPage", "authorizeclick;mobile/" + o.mobile, "basicInfo"), 
                                e.handleSubmit(t)) : console.log(o, "错误"), n.next = 10;
                                break;

                              case 9:
                                e._piwik("pages/detail/`detailnew", "miniapp/detailPage", "authorizecancel", "basicInfo");

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                handleLoginSubmit: function(t) {
                    this.handleSubmit(t), !this.userInfo.mobileLoginToken && this._piwik("pages/detail/`detailnew", "miniapp/detailPage", "priceclick/A", "abtest");
                },
                handleSubmit: function(t) {
                    var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return v()(m.a.mark(function i() {
                        var r, a, o, s, u, d, l;
                        return m.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (wx.showToast({
                                    title: "提交中...",
                                    icon: "loading"
                                }), !e.arrRadios.length) {
                                    i.next = 6;
                                    break;
                                }
                                if (!(r = e.arrRadios[0].values.find(function(t) {
                                    return !0 === t.selected;
                                })).isEnvironmentalRecycling) {
                                    i.next = 6;
                                    break;
                                }
                                return e.getEnvironmentalPrice(r.ppvIds), i.abrupt("return");

                              case 6:
                                if (a = e._getAllPropertyValues(), o = a.phenomenonItemIds, s = a.ppvIds, !e.isEnvironmentalFlag) {
                                    i.next = 10;
                                    break;
                                }
                                return i.abrupt("return", e.getEnvironmentalPrice(s, o));

                              case 10:
                                if (!T) {
                                    i.next = 12;
                                    break;
                                }
                                return i.abrupt("return");

                              case 12:
                                return T = !0, i.next = 15, e._submitInquiry({
                                    phenomenonItemIds: o,
                                    ppvIds: s,
                                    productId: e.$root.$mp.query.productId,
                                    formId: t.target ? t.target.formId : "",
                                    imgCaptcha: n
                                });

                              case 15:
                                if (u = i.sent, T = !1, 0 === u.code) {
                                    try {
                                        e._piwik("pages/detail/`detailnew", "miniapp/detailPage", "abt/detailnew", "basicInfo"), 
                                        d = {
                                            page_url: "/pages/inquiry/inquiry",
                                            app_id: "10001",
                                            app_version: "0.0.1",
                                            user_unique_key: Object(k.i)(),
                                            type: "1",
                                            type_object: c()(u)
                                        }, (l = wx.getStorageSync("ad_click_id") || null) && (d.market_channel_params = c()({
                                            click_id: l
                                        }), d.market_channel = "1"), e.$axios({
                                            url: "https://vito.aihuishou.com/action",
                                            method: "POST",
                                            data: d
                                        }).then(function(t) {
                                            console.log(t, "上报数据埋点");
                                        });
                                    } catch (t) {
                                        console.log(t);
                                    }
                                    R.globalData.inquiryInfo.needFresh = !0, wx.setStorageSync("lastInquiryKey", u.data), 
                                    wx.navigateTo({
                                        url: "../inquiry/inquiry?inquiryKey=" + u.data + "&uuid=" + Object(k.i)()
                                    }), e.isShowCaptch = !1;
                                } else 1003 === u.code ? e.showAuthCode() : 1004 === u.code ? e.isCaptchRight = !1 : (u.code, 
                                e._gotoNoSku());
                                wx.hideToast();

                              case 19:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                showAuthCode: function() {
                    var t = this;
                    return v()(m.a.mark(function e() {
                        var n;
                        return m.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.viewId = "", e.next = 3, t._getImageCaptcha();

                              case 3:
                                (n = e.sent) ? (t.strCaptchImgSrc = n, t.isCaptchRight = !0, t.isShowCaptch = !0) : t._gotoNoSku();

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                _gotoNoSku: function() {
                    wx.navigateTo({
                        url: "../nosku/nosku?name=" + this.product.name
                    });
                },
                _getImageCaptcha: function() {
                    return this.$axios({
                        url: "/foundation/getimagecaptcha"
                    }).catch(function() {
                        return "";
                    });
                },
                _submitInquiry: function(t) {
                    return this.$axios({
                        url: "/v2/product/inquiry",
                        data: t,
                        method: "POST",
                        code: !0
                    });
                },
                _serializeCheckbox: function(t) {
                    var e = t.values, n = e.find(function(t) {
                        return !1 === t.isPreferred;
                    }), i = e.find(function(t) {
                        return !0 === t.isPreferred;
                    }) || {};
                    return {
                        id: t.id,
                        title: n && n.value,
                        arr: n ? [ i.id, n.id ] : [ i.id ],
                        imgs: n && n.imgs,
                        text: n && n.text,
                        selected: !1
                    };
                },
                _getAllPropertyValues: function() {
                    var t = this.arrRadios.map(function(t) {
                        var e = t.values.find(function(t) {
                            return !0 === t.selected;
                        });
                        return t.isPhenomenon ? {
                            phenomenonItemIds: e.id,
                            ppvIds: e.ppvIds
                        } : {
                            ppvIds: e.ppvIds
                        };
                    }), e = t.filter(function(t) {
                        return t.phenomenonItemIds;
                    }), n = t.filter(function(t) {
                        return t.ppvIds;
                    });
                    return {
                        phenomenonItemIds: [].concat(d()(e.length ? e.map(function(t) {
                            return t.phenomenonItemIds;
                        }) : [])),
                        ppvIds: [].concat(d()(n.length ? t.filter(function(t) {
                            return t.ppvIds;
                        }).map(function(t) {
                            return [].concat(d()(t.ppvIds));
                        }).reduce(function(t, e) {
                            return [].concat(d()(t), d()(e));
                        }) : []), d()(this.arrCheckBoxs.map(function(t) {
                            return t.arr[t.selected ? 1 : 0];
                        }))).filter(function(t) {
                            return !!t;
                        })
                    };
                },
                handleShowModal: function(t, e) {
                    this.imgs = t, this.content = e, this.isShowModal = !0, this.viewId = "";
                },
                handleCloseModal: function() {
                    this.isShowModal = !1, this.imgs = [], this.content = "";
                }
            })
        };
    }
}, [ "63T1" ]);