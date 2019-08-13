function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/md5.js")), a = t(require("../../data/trash")), i = t(require("../../data/en")), n = t(require("../../utils/config")), s = require("../../utils/utils");

getApp();

Page({
    data: {
        activeSectionId: 0,
        magnifierSrc: "/images/tab_bar_icon_magnifier.png",
        qrBSrc: "/images/qr_b.png",
        wsgQrSrc: "/images/wsg_qr.jpg",
        showingDetail: !1,
        showingTips: !1,
        showQr: !1,
        writePhotosAlbumStatus: 0,
        page: "indexNoAd",
        withAd: !1,
        language: "cn",
        i18n: s.i18n.cn,
        loadedItems: [ 20, 20, 20, 20 ],
        city: "shanghai"
    },
    onLoad: function() {
        this.initData(), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    initData: function() {
        var t = wx.getStorageSync("english") ? "en" : "cn";
        (0, s.setNavBarTitle)(t, "index"), (0, s.setTabBarTitles)(t), void 0 === wx.getStorageSync("city") || 0 === wx.getStorageSync("city").length ? wx.setStorageSync("city", this.data.city) : this.setData({
            city: wx.getStorageSync("city")
        }), this.setData({
            language: t,
            i18n: s.i18n[t],
            config: n.default
        }), this.updateData();
    },
    onShow: function() {
        var t = wx.getStorageSync("english") ? "en" : "cn";
        t !== this.data.language && ("cn" === t ? (wx.removeStorageSync("english"), this.setData({
            language: "cn",
            i18n: s.i18n.cn
        })) : (wx.setStorageSync("english", "1"), this.setData({
            language: "en",
            i18n: s.i18n.en
        })), (0, s.setNavBarTitle)(this.data.language, "index"), (0, s.setTabBarTitles)(this.data.language), 
        this.updateData(), this.setData({
            loadedItems: [ 20, 20, 20, 20 ]
        })), wx.getStorageSync("city") !== this.data.city && this.setData({
            city: wx.getStorageSync("city")
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index"
        };
    },
    switchSection: function(t) {
        this.setData({
            activeSectionId: t.currentTarget.id.slice(3)
        });
    },
    listOnScroll: function(t) {
        var e = this;
        if (void 0 === this.data.sectionThresholds && function() {
            for (var t = wx.createSelectorQuery(), a = [], i = [ 0 ], n = e, s = 0; s < 4; s++) !function(e) {
                t.select("#section" + e).boundingClientRect(function(t) {
                    if (a[e] = t.height, e > 0) {
                        i[e] = 0;
                        for (var s = 0; s < e; s++) i[e] += a[s];
                    }
                    3 === e && n.setData({
                        sectionThresholds: i
                    });
                }).exec();
            }(s);
        }(), this.data.sectionThresholds) for (var a = 3; a >= 0; a--) if (t.detail.scrollTop >= this.data.sectionThresholds[a]) {
            this.setData({
                activeSectionId: a
            });
            break;
        }
    },
    showDetail: function(t) {
        this.setData({
            showingDetail: !0,
            detailItemName: t.currentTarget.dataset.itemName,
            detailCatIndex: t.currentTarget.dataset.catIndex
        });
    },
    hideDetail: function(t) {
        this.setData({
            showingDetail: !1
        });
    },
    logKeyword: function(t) {
        var a = new Date().getTime().toString().slice(0, -3), i = (0, e.default)(t + "logS_Slog" + a);
        wx.request({
            url: n.default.url + "/mn/logS",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                keyword: t,
                ts: a,
                vv: i
            },
            method: "POST",
            success: function(t) {}
        });
    },
    startSearch: function(t) {
        wx.navigateTo({
            url: "../search/search"
        });
    },
    submitFeedback: function(t) {
        var a = this;
        if (!this.data.sendingFeedback) {
            this.setData({
                sendingFeedback: !0,
                talkFeedbackEmpty: !1,
                talkContactInfoEmpty: !1
            });
            var i = t.detail.value.talkFeedback.trim(), s = t.detail.value.talkContactInfo.trim(), o = new Date().getTime().toString().slice(0, -3), r = (0, 
            e.default)(s + "logS_Slog" + o);
            0 === i.length && this.setData({
                talkFeedbackEmpty: !0,
                sendingFeedback: !1
            }), 0 === s.length && this.setData({
                talkContactInfoEmpty: !0,
                sendingFeedback: !1
            }), i.length > 0 && s.length > 0 && wx.request({
                url: n.default.url + "/mn/saveFeedback",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    contact_info: s,
                    content: i,
                    ts: o,
                    vv: r
                },
                method: "POST",
                success: function(t) {
                    a.setData({
                        sent: !0
                    });
                },
                complete: function(t) {
                    a.setData({
                        sendingFeedback: !1
                    });
                }
            });
        }
    },
    showTips: function(t) {
        this.setData({
            showingTips: !0
        });
    },
    hideTips: function(t) {
        this.setData({
            showingTips: !1
        });
    },
    showQr: function(t) {
        var e = this;
        wx.getSetting({
            success: function(t) {
                void 0 === t.authSetting["scope.writePhotosAlbum"] ? e.setData({
                    writePhotosAlbumStatus: 0
                }) : !0 === t.authSetting["scope.writePhotosAlbum"] ? e.setData({
                    writePhotosAlbumStatus: 1
                }) : !1 === t.authSetting["scope.writePhotosAlbum"] && e.setData({
                    writePhotosAlbumStatus: 2
                });
            }
        }), this.setData({
            showQr: !0
        });
    },
    hideQr: function(t) {
        this.setData({
            showQr: !1
        });
    },
    saveQrToAlbum: function(t) {
        var e = this;
        wx.saveImageToPhotosAlbum({
            filePath: e.data.wsgQrSrc,
            success: function() {
                e.setData({
                    writePhotosAlbumStatus: 3
                });
            }
        });
    },
    authorizeWritePhotosAlbum: function(t) {
        var e = this;
        wx.authorize({
            scope: "scope.writePhotosAlbum",
            success: function() {
                e.saveQrToAlbum();
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
        }), this.saveQrToAlbum()) : 0 == t.detail.authSetting["scope.writePhotosAlbum"] && this.setData({
            writePhotosAlbumStatus: 2
        });
    },
    generateNonce: function() {
        for (var t = "", e = 0; e < 8; e++) {
            var a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^*(){}[]<>";
            t += a[Math.floor(Math.random() * a.length)];
        }
        return t;
    },
    withAd: function() {
        this.setData({
            withAd: !0,
            page: "index"
        });
    },
    withoutAd: function() {
        this.setData({
            withAd: !1,
            page: "indexNoAd"
        });
    },
    closeAd: function() {
        this.setData({
            withAd: !1,
            page: "indexNoAd"
        });
    },
    updateData: function() {
        var t = [];
        if ("cn" === this.data.language) {
            for (var e in a.default.data) {
                var n = a.default.data[e];
                t.push(n);
            }
            t.forEach(function(t) {
                t.sort(function(t, e) {
                    for (var a = t.i.split(""), i = e.i.split(""), n = Math.max(a.length, i.length), s = 0; s < n; s++) {
                        if (s > a.length - 1) return -1;
                        if (s > i.length - 1) return 1;
                        if (a[s] < i[s]) return -1;
                        if (a[s] > i[s]) return 1;
                    }
                    return 0;
                });
            }), this.setData({
                data: t
            });
        } else {
            for (var s in i.default.data) {
                var o = i.default.data[s];
                t.push(o);
            }
            t.forEach(function(t) {
                t.sort(function(t, e) {
                    for (var a = t.n.split(""), i = e.n.split(""), n = Math.max(a.length, i.length), s = 0; s < n; s++) {
                        if (s > a.length - 1) return -1;
                        if (s > i.length - 1) return 1;
                        if (a[s] < i[s]) return -1;
                        if (a[s] > i[s]) return 1;
                    }
                    return 0;
                });
            }), this.setData({
                data: t
            });
        }
    },
    loadMoreItems: function() {
        var t = this.data.loadedItems, e = Math.min(this.data.loadedItems[this.data.activeSectionId] + 20, this.data.data[this.data.activeSectionId].length);
        t[this.data.activeSectionId] = e, this.setData({
            loadedItems: t
        });
    }
});