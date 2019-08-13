var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/config")), t = require("../../utils/utils");

Page({
    data: {
        settings: {
            language: {
                key: "language",
                title: {
                    cn: "语言",
                    en: "Language"
                },
                data: [ {
                    name: "中文",
                    key: "cn"
                }, {
                    name: "English",
                    key: "en"
                } ]
            },
            city: {
                key: "city",
                title: {
                    cn: "城市",
                    en: "City"
                }
            }
        },
        language: "cn",
        i18n: t.i18n.cn
    },
    onLoad: function() {
        var a = wx.getStorageSync("english") ? "en" : "cn";
        (0, t.setNavBarTitle)(a, "settings"), (0, t.setTabBarTitles)(a);
        var n = [];
        for (var i in e.default.cities) n.push(e.default.cities[i]);
        n.sort(function(e, t) {
            for (var a = e.i.split(""), n = t.i.split(""), i = Math.max(a.length, n.length), s = 0; s < i; s++) {
                if (s > a.length - 1) return -1;
                if (s > n.length - 1) return 1;
                if (a[s] < n[s]) return -1;
                if (a[s] > n[s]) return 1;
            }
            return 0;
        }), this.setData({
            language: a,
            i18n: t.i18n[a],
            cities: n,
            city: (0, t.getCity)()
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShow: function() {
        var e = wx.getStorageSync("english") ? "en" : "cn";
        this.data.language !== e && ((0, t.setNavBarTitle)(e, "settings"), (0, t.setTabBarTitles)(e), 
        this.setData({
            language: e,
            i18n: t.i18n[e]
        }));
    },
    onShareAppMessage: function(e) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index",
            imageUrl: "/images/cover_1.png"
        };
    },
    chooseLanguage: function(e) {
        var a = e.currentTarget.dataset.itemKey;
        a !== this.data.language && ("cn" === a ? (wx.removeStorageSync("english"), this.setData({
            language: "cn",
            i18n: t.i18n.cn
        })) : (wx.setStorageSync("english", "1"), this.setData({
            language: "en",
            i18n: t.i18n.en
        })), (0, t.setNavBarTitle)(a, "settings"), (0, t.setTabBarTitles)(a));
    },
    chooseCity: function(e) {
        var t = e.currentTarget.dataset.itemKey;
        t !== this.data.city && (wx.setStorageSync("city", t), this.setData({
            city: t
        }));
    }
});