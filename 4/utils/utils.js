function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.getCity = exports.i18n = exports.setNavBarTitle = exports.setTabBarTitles = exports.log = void 0;

var a = e(require("./md5")), t = e(require("./config")), r = {
    cn: {
        throwingRequirements: "投放要求：",
        friendlyReminder: "友情提示",
        reminder: "本查询系统仅供参考，具体分类要求以属地专业管理部门为准。如果您发现有不正确的地方请给我们留言指出，谢谢！",
        belong: "属于",
        searchPlaceholder: "搜索垃圾查看对应分类",
        addToMyMiniPrograms: "添加到我的小程序",
        share: "分享",
        feedback: "留言",
        points: "分",
        testAgain: "再考一次",
        testFriends: "考考别人",
        viewMore: "查看更多垃圾分类",
        saveQrCodeToAlbum: "保存二维码到相册",
        authorizeSaveQrCodeToAlbum: "授权保存二维码到相册",
        allowSaveQrCodeToAlbum: "允许保存二维码到相册",
        savedSuccessfully: "保存成功！",
        saveImageToAlbum: "保存到相册",
        authorizeSaveImageToAlbum: "授权保存到相册",
        allowSaveImageToAlbum: "允许保存到相册",
        cancel: "取消",
        tabBarTitles: {
            index: "指南",
            test: "测试",
            features: "专题",
            downloads: "下载",
            settings: "设置"
        },
        navBarTitles: {
            index: "垃圾分类指南",
            search: "垃圾分类指南",
            test: "随堂测试",
            features: "专题",
            downloads: "下载",
            settings: "设置"
        }
    },
    en: {
        throwingRequirements: "Throwing Requirements:",
        friendlyReminder: "Reminder",
        reminder: "This searching system is for reference only, and the specific classification requirements are subject to the local professional management department. If you find anything wrong, please leave a message. Thank you!",
        belong: "is",
        searchPlaceholder: "Search",
        addToMyMiniPrograms: "Add To My Mini Programs",
        share: "Share",
        feedback: "Feedback",
        points: "",
        testAgain: "Try Again",
        testFriends: "Share",
        viewMore: "View More Guides",
        saveQrCodeToAlbum: "Save QR Code To Album",
        authorizeSaveQrCodeToAlbum: "Authorize Save To Album",
        allowSaveQrCodeToAlbum: "Allow Save To Album",
        savedSuccessfully: "Saved Successfully",
        saveImageToAlbum: "Save Image To Album",
        authorizeSaveImageToAlbum: "Authorize Save To Album",
        allowSaveImageToAlbum: "Allow Save To Album",
        cancel: "Cancel",
        tabBarTitles: {
            index: "Guide",
            test: "Test",
            features: "Features",
            downloads: "Downloads",
            settings: "Settings"
        },
        navBarTitles: {
            index: "Guide",
            search: "Search",
            test: "Test",
            features: "Features",
            downloads: "Downloads",
            settings: "Settings"
        }
    }
};

exports.log = function(e, r) {
    var s = new Date().getTime().toString().slice(0, -3), o = (0, a.default)("mnc20F%f*" + s + "1609");
    wx.request({
        url: t.default.url + "/wb/index",
        header: {
            "content-type": "application/x-www-form-urlencoded"
        },
        data: {
            app_code: "mnc",
            method: "log",
            type: e,
            message: r,
            create_ts: s,
            token: o,
            uid: "1609"
        },
        method: "POST",
        success: function(e) {}
    });
}, exports.setTabBarTitles = function(e) {
    var a = 0;
    for (var t in r[e].tabBarTitles) wx.setTabBarItem({
        index: a++,
        text: r[e].tabBarTitles[t]
    });
}, exports.setNavBarTitle = function(e, a) {
    wx.setNavigationBarTitle({
        title: r[e].navBarTitles[a]
    });
}, exports.i18n = r, exports.getCity = function() {
    var e = wx.getStorageSync("city");
    return void 0 !== e && 0 !== e.length || (e = "shanghai"), e;
};