var n = require("../../../utils/utils");

Page({
    data: {
        cities: [ {
            name: {
                cn: "上海",
                en: "Shanghai"
            },
            key: "shanghai"
        }, {
            name: {
                cn: "西安",
                en: "Xi'an"
            },
            key: "xian"
        } ],
        language: "cn",
        i18n: n.i18n.cn
    },
    onLoad: function() {
        var e = wx.getStorageSync("english") ? "en" : "cn";
        this.setData({
            language: e,
            i18n: n.i18n[e]
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShow: function() {},
    onShareAppMessage: function(n) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index",
            imageUrl: "/images/cover_1.png"
        };
    }
});