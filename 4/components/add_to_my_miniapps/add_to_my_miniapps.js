var t = require("../../utils/utils");

Component({
    data: {
        showFavHint: !1,
        i18n: t.i18n
    },
    properties: {
        language: String
    },
    attached: function() {
        var t = this;
        wx.getStorage({
            key: "hideFavHint",
            success: function(t) {},
            fail: function(i) {
                t.setData({
                    showFavHint: !0
                });
            }
        });
    },
    methods: {
        hideFavHint: function(t) {
            wx.setStorage({
                key: "hideFavHint",
                value: 1
            }), this.setData({
                showFavHint: !1
            });
        }
    }
});