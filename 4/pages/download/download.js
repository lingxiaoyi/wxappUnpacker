var t = require("../../utils/utils");

Page({
    data: {
        cats: [ {
            title: "湿垃圾",
            imageSrc: "../../images/household_food_waste_icon.png"
        }, {
            title: "干垃圾",
            imageSrc: "../../images/residual_waste_icon.png"
        }, {
            title: "可回收物",
            imageSrc: "../../images/recyclable_waste_icon.png"
        }, {
            title: "有害垃圾",
            imageSrc: "../../images/hazardous_waste_icon.png"
        } ],
        downloads: [ "/images/wsg_poster.png", "/images/wsg_office_poster.png" ],
        writePhotosAlbumStatus: 0,
        language: "cn",
        i18n: t.i18n.cn
    },
    onLoad: function() {
        var e = wx.getStorageSync("english") ? "en" : "cn";
        (0, t.setNavBarTitle)(e, "downloads"), (0, t.setTabBarTitles)(e), this.setData({
            language: e,
            i18n: t.i18n[e]
        });
        var a = this;
        wx.getSetting({
            success: function(t) {
                void 0 === t.authSetting["scope.writePhotosAlbum"] ? a.setData({
                    writePhotosAlbumStatus: 0
                }) : !0 === t.authSetting["scope.writePhotosAlbum"] ? a.setData({
                    writePhotosAlbumStatus: 1
                }) : !1 === t.authSetting["scope.writePhotosAlbum"] && a.setData({
                    writePhotosAlbumStatus: 2
                });
            }
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShow: function() {
        var e = wx.getStorageSync("english") ? "en" : "cn";
        this.data.language !== e && ((0, t.setNavBarTitle)(e, "downloads"), (0, t.setTabBarTitles)(e), 
        this.setData({
            language: e,
            i18n: t.i18n[e]
        }));
    },
    onShareAppMessage: function(t) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index",
            imageUrl: "../../images/cover_1.png"
        };
    },
    saveImageToAlbum: function(t) {
        var e = this;
        wx.saveImageToPhotosAlbum({
            filePath: this.data.downloads[t.currentTarget.dataset.downloadIndex],
            success: function() {
                e.setData({
                    writePhotosAlbumStatus: 3
                }), setTimeout(function() {
                    e.setData({
                        writePhotosAlbumStatus: 1
                    });
                }, 1e3);
            }
        });
    },
    authorizeWritePhotosAlbum: function(t) {
        var e = this;
        wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function() {
                e.saveImageToAlbum(t);
            },
            fail: function() {
                e.setData({
                    writePhotosAlbumStatus: 2
                });
            }
        });
    },
    openSetting: function(t) {
        void 0 === t.detail.authSetting["scope.writePhotosAlbum"] ? this.setData({
            writePhotosAlbumStatus: 0
        }) : !0 === t.detail.authSetting["scope.writePhotosAlbum"] ? (this.setData({
            writePhotosAlbumStatus: 1
        }), this.saveImageToAlbum(t)) : 0 == t.detail.authSetting["scope.writePhotosAlbum"] && this.setData({
            writePhotosAlbumStatus: 2
        });
    }
});