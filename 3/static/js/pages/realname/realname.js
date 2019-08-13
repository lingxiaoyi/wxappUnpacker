global.webpackJsonp([ 20 ], {
    Fade: function(t, e, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "realname-container"
                }, [ a("dl", [ a("dd", [ a("p", [ t._v("为了保障资金安全，请先进行实名认证") ]), t._v(" "), a("p", [ t._v("认证后，交易钱款只能打入该实名信息的微信钱包与银行卡，有效防止他人盗取") ]) ], 1), t._v(" "), a("dt", [ a("span", [ t._v("真实姓名") ]), a("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.inputName,
                        expression: "inputName"
                    } ],
                    attrs: {
                        type: "text",
                        placeholder: "请输入真实姓名",
                        eventid: "0"
                    },
                    domProps: {
                        value: t.inputName
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.inputName = e.target.value);
                        }
                    }
                }) ]), t._v(" "), a("dt", [ a("span", [ t._v("身份证号") ]), a("input", {
                    directives: [ {
                        name: "model",
                        rawName: "v-model",
                        value: t.inputIdCard,
                        expression: "inputIdCard"
                    } ],
                    attrs: {
                        type: "idcard",
                        placeholder: "请输入身份证号",
                        eventid: "1"
                    },
                    domProps: {
                        value: t.inputIdCard
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.inputIdCard = e.target.value);
                        }
                    }
                }) ]), t._v(" "), a("dt", {
                    staticClass: "realname-tips"
                }, [ t._v("特别提示：请填写本人真实信息 审核后不可修改") ]) ], 1), t._v(" "), a("button", {
                    class: t.isPass ? "btn-light" : "",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.handleOneClickConfirm
                    }
                }, [ t._v("确认") ]), t._v(" "), a("div", {
                    staticClass: "problem-tips"
                }, [ t._v("身份验证遇到问题，请联系爱回收在线客服") ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    YrE1: function(t, e, a) {
        "use strict";
        var n = a("mQTL"), i = a("Fade");
        var r = function(t) {
            a("mGuT");
        }, s = a("ybqe")(n.a, i.a, r, "data-v-6b097515", null);
        e.a = s.exports;
    },
    eGCo: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), i = a.n(n), r = a("YrE1");
        new i.a(r.a).$mount();
    },
    mGuT: function(t, e) {},
    mQTL: function(t, e, a) {
        "use strict";
        e.a = {
            data: function() {
                return {
                    inputName: "",
                    inputIdCard: ""
                };
            },
            computed: {
                isPass: function() {
                    var t = this.inputName, e = this.inputIdCard;
                    return t && e;
                }
            },
            methods: {
                handleOneClickConfirm: function() {
                    var t = this.inputName, e = this.inputIdCard;
                    if (t && e) {
                        var a = {
                            name: t,
                            idCard: e
                        };
                        wx.setStorageSync("realInfo", a), wx.navigateBack({
                            delta: 1
                        });
                    } else wx.showToast({
                        title: "请填写完整的信息",
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        };
    }
}, [ "eGCo" ]);