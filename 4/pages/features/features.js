var e = require("../../utils/utils");

Page({
    data: {
        features: [ {
            title: {
                cn: "小龙虾",
                en: "Crayfish"
            },
            feature: "lobster",
            imageSrc: "/images/lobster.png"
        }, {
            title: {
                cn: "粽子",
                en: "Zongzi"
            },
            feature: "zongzi",
            imageSrc: "/images/zongzi.png"
        }, {
            title: {
                cn: "奶茶",
                en: "Milk Tea"
            },
            feature: "naicha",
            imageSrc: "/images/naichabei.png"
        }, {
            title: {
                cn: "电池",
                en: "Battery"
            },
            feature: "battery",
            imageSrc: "/images/dry_battery.png"
        }, {
            title: {
                cn: "外卖",
                en: "Takeout"
            },
            feature: "takeout",
            imageSrc: "/images/packing.png"
        }, {
            title: {
                cn: "化妆品",
                en: "Cosmetics"
            },
            feature: "cosmetics",
            imageSrc: "/images/lipstick.png"
        } ],
        language: "cn",
        i18n: e.i18n.cn
    },
    onLoad: function() {
        var a = wx.getStorageSync("english") ? "en" : "cn";
        (0, e.setNavBarTitle)(a, "features"), (0, e.setTabBarTitles)(a), this.setData({
            language: a,
            i18n: e.i18n[a]
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShow: function() {
        var a = wx.getStorageSync("english") ? "en" : "cn";
        this.data.language !== a && ((0, e.setNavBarTitle)(a, "features"), (0, e.setTabBarTitles)(a), 
        this.setData({
            language: a,
            i18n: e.i18n[a]
        }));
    },
    onShareAppMessage: function(e) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index",
            imageUrl: "/images/cover_1.png"
        };
    },
    goToFeature: function(e) {
        wx.navigateTo({
            url: "/pages/feature/feature?feature=" + this.data.features[e.currentTarget.dataset.featureIndex].feature
        });
    }
});