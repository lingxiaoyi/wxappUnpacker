getApp();

Page({
    data: {
        menu: [ {
            title: "添加垃圾",
            path: "/pages/admin/new_trash/new_trash"
        }, {
            title: "垃圾列表",
            path: "/pages/admin/trash_list/trash_list"
        }, {
            title: "垃圾提交列表",
            path: "/pages/admin/submit_list/submit_list"
        } ]
    },
    tapItem: function(t) {
        wx.navigateTo({
            url: t.currentTarget.dataset.path
        });
    }
});