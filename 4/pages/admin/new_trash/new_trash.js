function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../utils/md5.js")), i = t(require("../../../utils/config"));

getApp();

Page({
    data: {
        cat_index: 0,
        cats: [ "湿垃圾", "干垃圾", "可回收物", "有害垃圾", "不属于日常生活垃圾", "装修垃圾", "大件垃圾" ],
        id: "",
        name: "",
        initials: "",
        alias: "",
        submitting: !1,
        success: !1,
        editing: !1
    },
    onLoad: function(t) {
        void 0 !== t.name && this.setData({
            editing: !0,
            id: t.id,
            name: t.name,
            initials: t.initials,
            alias: t.alias,
            cat_index: parseInt(t.cat) - 1
        });
    },
    changeCat: function(t) {
        this.setData({
            cat_index: t.detail.value
        });
    },
    submitNewTrash: function(t) {
        var e = this;
        this.setData({
            success: !1
        });
        var s = t.detail.value.name.trim(), n = t.detail.value.initials.trim(), l = t.detail.value.alias.trim(), d = this.data.cat_index;
        if (s.length > 0 && n.length > 0) {
            this.setData({
                submitting: !0
            });
            var u = new Date().getTime().toString().slice(0, -3), c = (0, a.default)(n + "logS_Slog" + u);
            wx.request({
                url: i.default.url + "/mn/catSave",
                header: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                data: {
                    name: s,
                    cats_id: parseInt(d) + 1,
                    alias: l,
                    id: this.data.id,
                    ts: u,
                    first_letter: n,
                    vv: c,
                    ver: 1
                },
                method: "POST",
                success: function(t) {
                    -99 === t.data.code ? wx.showToast({
                        title: "出问题了，请找包子",
                        icon: "none",
                        duration: 5e3
                    }) : e.setData({
                        success: !0
                    });
                },
                complete: function(t) {
                    e.setData({
                        submitting: !1,
                        name: "",
                        initials: "",
                        alias: ""
                    });
                }
            });
        }
    }
});