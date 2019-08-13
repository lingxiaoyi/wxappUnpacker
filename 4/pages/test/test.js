function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../data/trash")), e = t(require("../../data/en")), i = t(require("../../utils/config")), s = require("../../utils/utils");

Page({
    data: {
        cats: [ {
            title: "湿垃圾",
            imageSrc: "../../images/household_food_waste_icon_s.png"
        }, {
            title: "干垃圾",
            imageSrc: "../../images/residual_waste_icon_s.png"
        }, {
            title: "可回收物",
            imageSrc: "../../images/recyclable_waste_icon_s.png"
        }, {
            title: "有害垃圾",
            imageSrc: "../../images/hazardous_waste_icon_s.png"
        } ],
        testTitleSrc: "../../images/exam_title.png",
        currentQ: 0,
        totalQuizzes: 10,
        answers: [],
        score: 80,
        page: "test",
        withAd: !0,
        language: "cn",
        i18n: s.i18n.cn,
        city: "shanghai"
    },
    onLoad: function() {
        this.initData();
        for (var t = [], a = 0; a < this.data.totalQuizzes; a++) {
            var e = Math.floor(4 * Math.random()), i = this.data.data[e][Math.floor(Math.random() * this.data.data[e].length)];
            i.c = parseInt(i.c), t.push(i);
        }
        this.setData({
            quizzes: t
        }), wx.showShareMenu({
            withShareTicket: !0
        });
    },
    initData: function() {
        void 0 === wx.getStorageSync("city") || 0 === wx.getStorageSync("city").length ? wx.setStorageSync("city", this.data.city) : this.setData({
            city: wx.getStorageSync("city")
        });
        var t = wx.getStorageSync("english") ? "en" : "cn";
        (0, s.setNavBarTitle)(t, "test"), (0, s.setTabBarTitles)(t), this.setData({
            language: t,
            i18n: s.i18n[t],
            config: i.default
        }), this.updateData();
    },
    onShow: function() {
        wx.getStorageSync("city") !== this.data.city && this.setData({
            city: wx.getStorageSync("city")
        });
        var t = wx.getStorageSync("english") ? "en" : "cn";
        t !== this.data.language && ((0, s.setNavBarTitle)(t, "test"), (0, s.setTabBarTitles)(t), 
        this.setData({
            language: t,
            i18n: s.i18n[t]
        }), this.updateData(), this.restart());
    },
    onShareAppMessage: function(t) {
        return {
            title: "全市垃圾分类统一考试",
            path: "/pages/test/test",
            imageUrl: "../../images/cover_test.png"
        };
    },
    select: function(t) {
        var a = this, e = t.currentTarget.dataset.quizIndex;
        if (void 0 === this.data.answers[e]) {
            var i = e, s = parseInt(t.currentTarget.dataset.optionIndex), n = this.data.answers;
            if (n[i] = s, this.setData({
                currentQ: ++i,
                answers: n
            }), i > this.data.totalQuizzes - 1) {
                var r = 0;
                n.forEach(function(t, e) {
                    t === parseInt(a.data.quizzes[e].c) - 1 && (r += 1 / a.data.totalQuizzes * 100);
                }), this.setData({
                    score: r,
                    showShare: !1
                });
            }
        }
    },
    restart: function(t) {
        for (var a = [], e = 0; e < this.data.totalQuizzes; e++) {
            var i = Math.floor(4 * Math.random()), s = this.data.data[i][Math.floor(Math.random() * this.data.data[i].length)];
            s.c = parseInt(s.c), a.push(s);
        }
        this.setData({
            quizzes: a,
            currentQ: 0,
            answers: [],
            score: 0,
            showShare: !0
        });
    },
    share: function() {},
    toIndex: function() {
        wx.switchTab({
            url: "/pages/index/index"
        });
    },
    withAd: function() {
        this.setData({
            withAd: !0,
            page: "test"
        });
    },
    withoutAd: function() {
        this.setData({
            withAd: !1,
            page: "testNoAd"
        });
    },
    closeAd: function() {
        this.setData({
            withAd: !1,
            page: "testNoAd"
        });
    },
    updateData: function() {
        var t = [];
        if ("cn" === this.data.language) {
            for (var i in a.default.data) {
                var s = a.default.data[i];
                t.push(s);
            }
            this.setData({
                data: t
            });
        } else {
            for (var n in e.default.data) {
                var r = e.default.data[n];
                t.push(r);
            }
            this.setData({
                data: t
            });
        }
    }
});