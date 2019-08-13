var r = require("../../utils/utils");

Component({
    data: {
        talkIconSrc: "/images/talk.png",
        shareIconSrc: "/images/share.png",
        qrIconSrc: "/images/qr.png",
        i18n: r.i18n
    },
    properties: {
        page: String,
        language: String
    }
});