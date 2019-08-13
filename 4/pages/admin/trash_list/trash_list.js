function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../utils/md5.js")), a = t(require("../../../utils/config"));

getApp();

Page({
    data: {
        cats: [ "湿垃圾", "干垃圾", "可回收物", "有害垃圾", "不属于日常生活垃圾", "装修垃圾", "大件垃圾" ],
        magnifierSrc: "../../../images/tab_bar_icon_magnifier.png",
        searching: !1,
        searchText: "",
        searchResults: []
    },
    onLoad: function() {
        var t = this, n = new Date().getTime().toString().slice(0, -3), r = this.generateNonce(), i = (0, 
        e.default)("catS_Cats" + n + r);
        wx.request({
            url: a.default.url + "/mn/cat_list",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                ts: n,
                nonce: r,
                vv: i,
                ver: 0
            },
            success: function(e) {
                var a = Object.values(e.data.data);
                a.forEach(function(t) {
                    t.sort(function(t, e) {
                        for (var a = t.i.split(""), n = e.i.split(""), r = Math.max(a.length, n.length), i = 0; i < r; i++) {
                            if (i > a.length - 1) return -1;
                            if (i > n.length - 1) return 1;
                            if (a[i] < n[i]) return -1;
                            if (a[i] > n[i]) return 1;
                        }
                        return 0;
                    });
                }), t.setData({
                    data: a
                });
            }
        });
    },
    showItem: function(t) {
        wx.navigateTo({
            url: "/pages/admin/new_trash/new_trash?id=" + t.currentTarget.dataset.itemId + "&name=" + t.currentTarget.dataset.itemName + "&initials=" + t.currentTarget.dataset.itemInitials + "&alias=" + t.currentTarget.dataset.itemAlias + "&cat=" + t.currentTarget.dataset.itemCat
        });
    },
    searchOnFocus: function(t) {
        this.setData({
            searching: !0
        });
    },
    searchOnTyping: function(t) {
        this.setData({
            searchResults: []
        });
        var e = [], a = t.detail.value.trim();
        a.length > 0 && (this.data.data.forEach(function(t) {
            t.forEach(function(t) {
                -1 === t.n.indexOf(a) && -1 === t.a.indexOf(a) || e.push(t);
            });
        }), this.setData({
            searchResults: e
        }));
    },
    cancelSearch: function(t) {
        this.setData({
            searching: !1,
            searchText: ""
        });
    },
    generateNonce: function() {
        for (var t = "", e = 0; e < 8; e++) {
            var a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*(){}[]<>?";
            t += a[Math.floor(Math.random() * a.length)];
        }
        return t;
    }
});