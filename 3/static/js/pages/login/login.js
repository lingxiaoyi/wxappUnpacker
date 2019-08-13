global.webpackJsonp([ 9 ], {
    "5Pio": function(t, e) {},
    GG4c: function(t, e, s) {
        "use strict";
        var a = s("Xxa5"), i = s.n(a), n = s("exGp"), o = s.n(n), c = s("Dd8w"), r = s.n(c), h = s("WnIq"), p = s("VsUZ"), l = s("NYxO"), u = getApp();
        e.a = {
            data: function() {
                return {
                    phoneNumber: "",
                    isPhoneFinish: !1,
                    isSmsCodeFinish: !1,
                    isSendingCode: !1,
                    smsCode: "",
                    getCode: "获取验证码",
                    verifyTimer: null,
                    count: 60,
                    isShowCaptchPopup: !1,
                    isImgCaptchError: !1,
                    imgCaptchText: "",
                    captchImgUrl: "",
                    piwikSource: "",
                    successRedirectUrl: null,
                    cover: "https://sr.aihuishou.com/appgateway/homenav/loginbanner@2x.png?id=1",
                    showCancel: !1
                };
            },
            components: {
                cancel: h.a
            },
            computed: {},
            onLoad: function(t) {
                t.url && (this.successRedirectUrl = decodeURIComponent(t.url));
            },
            onUnload: function() {
                this.phoneNumber = "", this.isPhoneFinish = !1, this.isSmsCodeFinish = !1, this.isSendingCode = !1, 
                this.smsCode = "", this.getCode = "获取验证码", this.verifyTimer = null, clearInterval(this.verifyTimer), 
                this.count = 60, this.isShowCaptchPopup = !1, this.isImgCaptchError = !1, this.imgCaptchText = "", 
                this.captchImgUrl = "", this.piwikSource = "", this.successRedirectUrl = null, this.cover = "https://sr.aihuishou.com/appgateway/homenav/loginbanner@2x.png?id=1", 
                this.showCancel = !1;
            },
            methods: r()({}, Object(l.b)([ "setGlobalInfo" ]), {
                toggleShow: function() {
                    this.isShowCaptchPopup = !1, this.showCancel = !1;
                },
                handleOnPhoneNumberInput: function() {
                    var t = this.phoneNumber;
                    this.isPhoneFinish = /^1\d{10}$/.test(t), this.phoneNumber = t;
                },
                clearAll: function() {
                    this.phoneNumber = "", this.isPhoneFinish = !1;
                },
                handleOnSmsCodeInput: function(t) {
                    var e = this.smsCode;
                    this.isSmsCodeFinish = /^\d{6}$/.test(e), this.smsCode = e;
                },
                handleOnTapCaptcha: function() {
                    var t = this, e = this.isPhoneFinish, s = this.isSendingCode, a = this.phoneNumber, i = this.imgCaptchText;
                    e && !s && this.$axios({
                        url: "/captcha/sms-captcha",
                        params: {
                            type: "Login",
                            mobile: a,
                            imgCaptcha: i
                        },
                        code: !0
                    }).then(function(e) {
                        return 1008 === e.code ? (t.isShowCaptchPopup = !1, void (t.showCancel = !0)) : 0 === e.code ? (t.isShowCaptchPopup = !1, 
                        t.isImgCaptchError = !1, wx.showToast({
                            title: "验证码发送成功",
                            icon: "success",
                            duration: 3e3
                        }), void (t.verifyTimer = setInterval(function() {
                            var e = t.count - 1;
                            t.count = e, t.getCode = e + "s后重新获取", t.isSendingCode = !0, e < 1 && (clearInterval(t.verifyTimer), 
                            t.count = 60, t.getCode = "重新获取", t.isSendingCode = !1);
                        }, 1e3))) : 3001 === e.code ? (t.isShowCaptchPopup = !0, t.captchImgUrl = e.data.captchaUrl, 
                        void (t.imgCaptchText = "")) : 3002 === e.code ? (t.isImgCaptchError = !0, t.captchImgUrl = e.data.captchaUrl, 
                        void (t.imgCaptchText = "")) : void wx.showToast({
                            title: e.message,
                            icon: "none",
                            duration: 3e3
                        });
                    });
                },
                handleOnFormSubmit: function() {
                    var t = this;
                    return o()(i.a.mark(function e() {
                        var s, a, n, o, c;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return s = t.phoneNumber, a = t.smsCode, n = t.successRedirectUrl, e.next = 3, t.$axios({
                                    url: "/user/login",
                                    params: {
                                        mobile: s,
                                        smsCaptcha: a
                                    },
                                    method: "POST",
                                    code: !0
                                });

                              case 3:
                                return o = e.sent, e.next = 6, Object(p.d)();

                              case 6:
                                if (c = e.sent, t.setGlobalInfo([ "userInfo", c || {} ]), wx.setStorageSync("userKey", c ? c.userKey : ""), 
                                getApp().sensors.registerApp({
                                    platform: "miniapp",
                                    app_name: "earth",
                                    app_channel: "",
                                    user_key: wx.getStorageSync("userKey") && wx.getStorageSync("userKey") || "0",
                                    union_id: wx.getStorageSync("unionId") ? wx.getStorageSync("unionId") : ""
                                }), 1008 === o.code && (t.isShowCaptchPopup = !1, t.showCancel = !0), 0 !== o.code) {
                                    e.next = 15;
                                    break;
                                }
                                return u.saveCache("user-phone-info", {
                                    phone: s
                                }), n && n.length ? wx.redirectTo({
                                    url: n
                                }) : wx.navigateBack({
                                    delta: 1
                                }), e.abrupt("return");

                              case 15:
                                wx.showToast({
                                    title: o.message,
                                    icon: "none",
                                    duration: 700
                                });

                              case 16:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                checkCaptchSubmit: function(t) {
                    var e = this.imgCaptchText;
                    /^\d{4}$/.test(e) ? (this.imgCaptchText = e, this.handleOnTapCaptcha()) : this.isImgCaptchError = !0;
                },
                setCaptchUrl: function() {
                    var t = this;
                    this.$axios({
                        url: "/foundation/getimagecaptcha",
                        code: !0
                    }).then(function(e) {
                        t.captchImgUrl = e.data || "";
                    });
                }
            })
        };
    },
    "K+2Y": function(t, e) {},
    RTvR: function(t, e, s) {
        "use strict";
        e.a = {
            name: "cancel_box",
            data: function() {
                return {};
            },
            methods: {
                toggle: function() {
                    this.$emit("toggleModel");
                }
            }
        };
    },
    WnIq: function(t, e, s) {
        "use strict";
        var a = s("RTvR"), i = s("bC2m");
        var n = function(t) {
            s("5Pio");
        }, o = s("ybqe")(a.a, i.a, n, "data-v-af209cd8", null);
        e.a = o.exports;
    },
    ZmUt: function(t, e, s) {
        "use strict";
        var a = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "login-page"
                }, [ s("div", {
                    staticClass: "header-banner"
                }, [ s("img", {
                    attrs: {
                        src: t.cover,
                        alt: ""
                    }
                }) ]), t._v(" "), s("form", {
                    staticClass: "form"
                }, [ s("div", {
                    staticClass: "input-comp"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.phoneNumber,
                        expression: "phoneNumber"
                    } ],
                    staticClass: "info-phonenumber",
                    attrs: {
                        name: "phoneNumber",
                        type: "number",
                        placeholder: "请输入手机号码",
                        maxlength: "11",
                        eventid: "0"
                    },
                    domProps: {
                        value: t.phoneNumber
                    },
                    on: {
                        input: [ function(e) {
                            e.target.composing || (t.phoneNumber = e.target.value);
                        }, t.handleOnPhoneNumberInput ]
                    }
                }), t._v(" "), t.phoneNumber.length ? s("img", {
                    staticClass: "clearAll",
                    attrs: {
                        src: "https://sr.aihuishou.com/miniapps/earth/public/icon-cancel.png",
                        eventid: "1"
                    },
                    on: {
                        tap: t.clearAll
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "info-getcaptch",
                    class: t.isSendingCode ? "" : t.isPhoneFinish ? "active" : "",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        tap: t.handleOnTapCaptcha
                    }
                }, [ s("text", [ t._v(t._s(t.getCode)) ]) ]) ]), t._v(" "), s("div", {
                    staticClass: "input-comp"
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.smsCode,
                        expression: "smsCode"
                    } ],
                    staticClass: "info-phonenumber",
                    attrs: {
                        name: "codeNumber",
                        type: "number",
                        placeholder: "请输入短信验证码",
                        maxlength: "6",
                        eventid: "3"
                    },
                    domProps: {
                        value: t.smsCode
                    },
                    on: {
                        input: [ function(e) {
                            e.target.composing || (t.smsCode = e.target.value);
                        }, t.handleOnSmsCodeInput ]
                    }
                }) ]), t._v(" "), s("div", [ s("span", {
                    staticClass: "setphone-btn",
                    class: t.isSmsCodeFinish && t.isPhoneFinish ? "active" : "",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        tap: t.handleOnFormSubmit
                    }
                }, [ t._v("登录") ]) ]), t._v(" "), s("text", {
                    staticClass: "desc",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        tap: t.handleOnFormSubmit
                    }
                }, [ t._v("未注册过的手机号将自动创建爱回收账户") ]) ]), t._v(" "), s("div", {
                    staticClass: "captch-popup-wrap",
                    class: t.isShowCaptchPopup ? "show" : "",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        catchtouchmove: t.stopBubble
                    }
                }, [ s("div", {
                    staticClass: "captch-popup"
                }, [ s("form", {
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        submit: t.checkCaptchSubmit
                    }
                }, [ s("div", {
                    staticClass: "captch-content"
                }, [ s("div", {
                    staticClass: "captch-input-wrap",
                    class: t.isImgCaptchError ? "error" : ""
                }, [ s("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.imgCaptchText,
                        expression: "imgCaptchText"
                    } ],
                    staticClass: "captch-input",
                    attrs: {
                        name: "captch",
                        type: "number",
                        "placeholder-style": "color:#BABABA",
                        maxlength: "4",
                        placeholder: "请输入右侧验证码",
                        eventid: "6"
                    },
                    domProps: {
                        value: t.imgCaptchText
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.imgCaptchText = e.target.value);
                        }
                    }
                }), t._v(" "), s("image", {
                    staticClass: "captch-img",
                    attrs: {
                        mode: "aspectFit",
                        src: t.captchImgUrl,
                        eventid: "7"
                    },
                    on: {
                        click: t.setCaptchUrl
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "captch-error",
                    class: t.isImgCaptchError ? "show" : ""
                }, [ t._v("验证码输入有误") ]) ]), t._v(" "), s("div", {
                    staticClass: "captch-bottom"
                }, [ s("button", {
                    staticClass: "check-captch",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ t._v("提交验证") ]) ], 1) ]) ], 1) ]), t._v(" "), s("image", {
                    staticClass: "piwik-image-placeholder",
                    attrs: {
                        src: t.piwikSource
                    }
                }), t._v(" "), t.showCancel ? s("cancel", {
                    attrs: {
                        eventid: "10",
                        mpcomid: "0"
                    },
                    on: {
                        toggleModel: t.toggleShow
                    }
                }) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    bC2m: function(t, e, s) {
        "use strict";
        var a = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "cancel-box"
                }, [ e("div", {
                    staticClass: "cancel-mask"
                }), this._v(" "), e("div", {
                    staticClass: "cancel"
                }, [ e("p", {
                    staticClass: "title"
                }, [ this._v("该账号已被注销") ]), this._v(" "), e("p", {
                    staticClass: "content"
                }, [ this._v("您的爱回收账号已注销账号，无法注册或登录。") ]), this._v(" "), e("p", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: this.toggle
                    }
                }, [ e("span", [ this._v("我知道了") ]) ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    jT7l: function(t, e, s) {
        "use strict";
        var a = s("GG4c"), i = s("ZmUt");
        var n = function(t) {
            s("K+2Y");
        }, o = s("ybqe")(a.a, i.a, n, "data-v-4f131e5a", null);
        e.a = o.exports;
    },
    uvAE: function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = s("5nAL"), i = s.n(a), n = s("jT7l");
        new i.a(n.a).$mount(), e.default = {
            config: {
                navigationBarBackgroundColor: "#ffffff",
                navigationBarTextStyle: "black",
                navigationBarTitleText: "手机号快捷登录",
                backgroundColor: "#ffffff",
                backgroundTextStyle: "light"
            }
        };
    }
}, [ "uvAE" ]);