var e = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../utils/config")), t = require("../../utils/utils");

Page({
    data: {
        extraCats: [ "", "", "", "", {
            cn: "倒掉",
            en: "Pour Away"
        } ],
        features: {
            lobster: {
                title: {
                    cn: "小龙虾专题",
                    en: "Crayfish"
                },
                data: [ {
                    title: {
                        cn: "整只小龙虾",
                        en: "Whole Crayfish"
                    },
                    imageSrc: "/images/lobster.png",
                    cat: 0
                }, {
                    title: {
                        cn: "去黄龙虾头",
                        en: "Head"
                    },
                    imageSrc: "/images/lobster_head.png",
                    cat: 0
                }, {
                    title: {
                        cn: "龙虾壳",
                        en: "Shell"
                    },
                    imageSrc: "/images/lobster_shell.png",
                    cat: 0
                }, {
                    title: {
                        cn: "龙虾肉",
                        en: "Meat"
                    },
                    imageSrc: "/images/lobster_meat.png",
                    cat: 0
                }, {
                    title: {
                        cn: "龙虾黄",
                        en: "Roe"
                    },
                    imageSrc: "/images/lobster_yellow.png",
                    cat: 0
                } ]
            },
            zongzi: {
                title: {
                    cn: "粽子专题",
                    en: "Zongzi"
                },
                data: [ {
                    title: {
                        cn: "整只粽子",
                        en: "Whole Zongzi"
                    },
                    imageSrc: "/images/zongzi.png",
                    cat: 0
                }, {
                    title: {
                        cn: "粽叶",
                        en: "Reed Leaves"
                    },
                    imageSrc: "/images/zongye.png",
                    cat: 1
                }, {
                    title: {
                        cn: "粽子馅",
                        en: "Fillings"
                    },
                    imageSrc: "/images/zongzixian.png",
                    cat: 0
                }, {
                    title: {
                        cn: "粽子绳",
                        en: "Strings"
                    },
                    imageSrc: "/images/zongzisheng.png",
                    cat: 1
                }, {
                    title: {
                        cn: "蛋黄",
                        en: "Yolk"
                    },
                    imageSrc: "/images/danhuang.png",
                    cat: 0
                } ]
            },
            naicha: {
                title: {
                    cn: "奶茶专题",
                    en: "Milk Tea"
                },
                data: [ {
                    title: {
                        cn: "没喝完的奶茶",
                        en: "Remaining"
                    },
                    imageSrc: "/images/daonaicha.png",
                    cat: 4
                }, {
                    title: {
                        cn: "奶茶杯",
                        en: "Cup"
                    },
                    imageSrc: "/images/naichabei.png",
                    cat: 1
                }, {
                    title: {
                        cn: "奶茶杯盖",
                        en: "Cover"
                    },
                    imageSrc: "/images/naichabeigai.png",
                    cat: 1
                }, {
                    title: {
                        cn: "奶茶杯身",
                        en: "Cup without Cover"
                    },
                    imageSrc: "/images/naichabeishen.png",
                    cat: 1
                }, {
                    title: {
                        cn: "珍珠",
                        en: "Tapioca"
                    },
                    imageSrc: "/images/zhenzhu.png",
                    cat: 0
                } ]
            },
            battery: {
                title: {
                    cn: "电池专题",
                    en: "Battery"
                },
                data: [ {
                    title: {
                        cn: "无汞干电池",
                        en: "Mercury-free Dry Battery"
                    },
                    imageSrc: "/images/dry_battery.png",
                    cat: 1
                }, {
                    title: {
                        cn: "充电宝",
                        en: "Power Bank"
                    },
                    imageSrc: "/images/power_bank.png",
                    cat: 2
                }, {
                    title: {
                        cn: "手机电池",
                        en: "Cellphone Battery"
                    },
                    imageSrc: "/images/cellphone_battery.png",
                    cat: 3
                }, {
                    title: {
                        cn: "蓄电池",
                        en: "Storage Battery"
                    },
                    imageSrc: "/images/storage_battery.png",
                    cat: 3
                } ]
            },
            takeout: {
                title: {
                    cn: "外卖专题",
                    en: "Takeout"
                },
                data: [ {
                    title: {
                        cn: "剩菜剩饭",
                        en: "Leftovers"
                    },
                    imageSrc: "/images/food_residue.png",
                    cat: 0
                }, {
                    title: {
                        cn: "快餐盒",
                        en: "Food Box"
                    },
                    imageSrc: "/images/meal_box.png",
                    cat: 1
                }, {
                    title: {
                        cn: "一次性塑料勺子",
                        en: "Disposable Spoon"
                    },
                    imageSrc: "/images/spoon.png",
                    cat: 1
                }, {
                    title: {
                        cn: "外卖袋",
                        en: "Takeout Bag"
                    },
                    imageSrc: "/images/packing.png",
                    cat: 1
                }, {
                    title: {
                        cn: "一次性餐盒",
                        en: "Disposable Meal Box"
                    },
                    imageSrc: "/images/doggy_box.png",
                    cat: 1
                } ]
            },
            cosmetics: {
                title: {
                    cn: "化妆品专题",
                    en: "Cosmetics"
                },
                data: [ {
                    title: {
                        cn: "指甲油",
                        en: "Nail Polish"
                    },
                    imageSrc: "/images/nail_polish.png",
                    cat: 3
                }, {
                    title: {
                        cn: "指甲油瓶",
                        en: "Nail Polish Bottle"
                    },
                    imageSrc: "/images/nail_polish_empty_bottle.png",
                    cat: 3
                }, {
                    title: {
                        cn: "口红",
                        en: "Lipstick"
                    },
                    imageSrc: "/images/lipstick.png",
                    cat: 1
                }, {
                    title: {
                        cn: "面霜瓶",
                        en: "Face Cream Bottle"
                    },
                    imageSrc: "/images/face_cream_bottle.png",
                    cat: 2
                } ]
            }
        },
        language: "cn",
        i18n: t.i18n.cn,
        city: "shanghai"
    },
    onLoad: function(a) {
        if (-1 !== Object.keys(this.data.features).indexOf(a.feature)) {
            this.setData({
                feature: a.feature
            });
            var i = wx.getStorageSync("english") ? "en" : "cn";
            wx.setNavigationBarTitle({
                title: this.data.features[a.feature].title[i]
            }), this.setData({
                language: i,
                i18n: t.i18n[i],
                featureData: this.data.features[a.feature].data,
                cats: e.default.cities[(0, t.getCity)()].cats,
                allCats: e.default.cats
            });
        }
        wx.showShareMenu({
            withShareTicket: !0
        });
    },
    onShareAppMessage: function(e) {
        return {
            title: "垃圾分类指南",
            path: "/pages/index/index",
            imageUrl: "/images/cover_1.png"
        };
    }
});