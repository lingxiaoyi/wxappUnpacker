function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../utils/md5.js")), a = t(require("../../utils/config")), s = require("../../utils/utils");

getApp();

Page({
    data: {
        extraCats: [ "", "", "", "", {
            cn: "不属于日常生活垃圾",
            en: "None-household Waste"
        }, {
            cn: "装修垃圾，请咨询物业",
            en: "Decoration Waste, please consult property management"
        }, {
            cn: "大件垃圾，请咨询物业",
            en: "Bulky Waste, please consult property management"
        } ],
        searching: !1,
        searchText: "",
        searchResults: [],
        searchWithNoResults: !1,
        searchTextFocus: !0,
        submitKeywordStatus: "",
        magnifierSrc: "../../images/tab_bar_icon_magnifier.png",
        talkIconSrc: "../../images/talk.png",
        shareIconSrc: "../../images/share.png",
        qrIconSrc: "../../images/qr.png",
        wsgQrSrc: "/images/wsg_qr.jpg",
        crySrc: "../../images/cry.png",
        showingDetail: !1,
        sendingFeedback: !1,
        sent: !1,
        showQr: !1,
        writePhotosAlbumStatus: 0,
        page: "search",
        language: "cn",
        i18n: s.i18n.cn
    },
    onLoad: function() {
        var t = getCurrentPages(), e = t[t.length - 2];
        this.setData({
            data: e.data.data,
            language: e.data.language,
            i18n: e.data.i18n,
            city: e.data.city,
            config: a.default
        }), (0, s.setNavBarTitle)(this.data.language, "search"), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage: function(t) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index",
            success: function(t) {}
        };
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
    searchOnFocus: function(t) {
        this.setData({
            searching: !0
        });
    },
    searchOffFocus: function(t) {
        "" === t.detail.value.trim() && this.setData({
            searching: !1
        });
    },
    searchOnTyping: function(t) {
        var e = this;
        this.setData({
            searchResults: [],
            searchWithNoResults: !1,
            submittedKeyword: !1
        });
        var a = [], s = t.detail.value.trim();
        this.setData({
            searchText: s
        }), s.length > 0 && ("zzmmqqkkmm702" === s && "develop" === __wxConfig.envVersion ? wx.navigateTo({
            url: "../admin/index/index"
        }) : (this.data.data.forEach(function(t) {
            t.forEach(function(t) {
                (-1 !== t.n.toLowerCase().indexOf(s.toLowerCase()) || "cn" === e.data.language && -1 !== t.a.toLowerCase().indexOf(s.toLowerCase())) && a.push(t);
            });
        }), this.setData({
            searchResults: a
        }), 0 === a.length && this.setData({
            searchWithNoResults: !0
        })));
    },
    clearSearchText: function(t) {
        this.setData({
            searchText: "",
            searchResults: [],
            searchWithNoResults: !1,
            submittedKeyword: !1,
            searchTextFocus: !0
        });
    },
    cancelSearch: function(t) {
        wx.navigateBack({
            delta: 1
        });
    },
    logKeyword: function(t) {
        var s = new Date().getTime().toString().slice(0, -3), i = (0, e.default)(t + "logS_Slog" + s);
        wx.request({
            url: a.default.url + "/mn/logS",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                keyword: t,
                ts: s,
                vv: i
            },
            method: "POST",
            success: function(t) {}
        });
    },
    submitKeyword: function() {
        var t = this;
        this.setData({
            submittedKeyword: !0,
            submitKeywordStatus: "提交中..."
        });
        var s = this.data.searchText, i = new Date().getTime().toString().slice(0, -3), o = (0, 
        e.default)("提交垃圾logS_Slog" + i);
        wx.request({
            url: a.default.url + "/mn/saveFeedback",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                contact_info: "提交垃圾",
                content: s,
                ts: i,
                vv: o
            },
            method: "POST",
            complete: function(e) {
                t.setData({
                    submitKeywordStatus: "感谢您的反馈!"
                });
            }
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
    }
});