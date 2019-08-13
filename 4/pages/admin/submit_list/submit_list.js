function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = e(require("../../../utils/md5.js")), n = e(require("../../../utils/config"));

getApp();

Page({
    data: {},
    onLoad: function() {
        var e = this, t = new Date().getTime().toString().slice(0, -3), r = (0, a.default)("logS_Slog" + t);
        wx.request({
            url: n.default.url + "/mn/messages",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: {
                ts: t,
                vv: r
            },
            success: function(t) {
                var a = Object.values(t.data.data);
                e.setData({
                    data: a
                });
            }
        });
    },
    check: function(e) {
        if (0 === parseInt(this.data.data[e.currentTarget.dataset.messageIndex].is_finished)) {
            var r = "data[" + e.currentTarget.dataset.messageIndex + "].is_finished";
            this.setData(t({}, r, 1));
            var i = e.currentTarget.dataset.itemId, s = new Date().getTime().toString().slice(0, -3), u = (0, 
            a.default)(i + "logS_Slog" + s);
            wx.request({
                url: n.default.url + "/mn/setFinished",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    ts: s,
                    vv: u,
                    id: i
                },
                method: "POST",
                success: function(e) {},
                complete: function(e) {}
            });
        }
    }
});