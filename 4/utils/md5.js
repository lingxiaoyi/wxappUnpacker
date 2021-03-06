function r(r) {
    return o(u(e(r), 8 * r.length));
}

function n(r) {
    for (var n, t = d ? "0123456789ABCDEF" : "0123456789abcdef", e = "", o = 0; o < r.length; o++) n = r.charCodeAt(o), 
    e += t.charAt(n >>> 4 & 15) + t.charAt(15 & n);
    return e;
}

function t(r) {
    for (var n, t, e = "", o = -1; ++o < r.length; ) n = r.charCodeAt(o), t = o + 1 < r.length ? r.charCodeAt(o + 1) : 0, 
    55296 <= n && n <= 56319 && 56320 <= t && t <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & t), 
    o++), n <= 127 ? e += String.fromCharCode(n) : n <= 2047 ? e += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? e += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (e += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));
    return e;
}

function e(r) {
    for (var n = Array(r.length >> 2), t = 0; t < n.length; t++) n[t] = 0;
    for (t = 0; t < 8 * r.length; t += 8) n[t >> 5] |= (255 & r.charCodeAt(t / 8)) << t % 32;
    return n;
}

function o(r) {
    for (var n = "", t = 0; t < 32 * r.length; t += 8) n += String.fromCharCode(r[t >> 5] >>> t % 32 & 255);
    return n;
}

function u(r, n) {
    r[n >> 5] |= 128 << n % 32, r[14 + (n + 64 >>> 9 << 4)] = n;
    for (var t = 1732584193, e = -271733879, o = -1732584194, u = 271733878, f = 0; f < r.length; f += 16) {
        var g = t, d = e, l = o, v = u;
        e = h(e = h(e = h(e = h(e = i(e = i(e = i(e = i(e = c(e = c(e = c(e = c(e = a(e = a(e = a(e = a(e, o = a(o, u = a(u, t = a(t, e, o, u, r[f + 0], 7, -680876936), e, o, r[f + 1], 12, -389564586), t, e, r[f + 2], 17, 606105819), u, t, r[f + 3], 22, -1044525330), o = a(o, u = a(u, t = a(t, e, o, u, r[f + 4], 7, -176418897), e, o, r[f + 5], 12, 1200080426), t, e, r[f + 6], 17, -1473231341), u, t, r[f + 7], 22, -45705983), o = a(o, u = a(u, t = a(t, e, o, u, r[f + 8], 7, 1770035416), e, o, r[f + 9], 12, -1958414417), t, e, r[f + 10], 17, -42063), u, t, r[f + 11], 22, -1990404162), o = a(o, u = a(u, t = a(t, e, o, u, r[f + 12], 7, 1804603682), e, o, r[f + 13], 12, -40341101), t, e, r[f + 14], 17, -1502002290), u, t, r[f + 15], 22, 1236535329), o = c(o, u = c(u, t = c(t, e, o, u, r[f + 1], 5, -165796510), e, o, r[f + 6], 9, -1069501632), t, e, r[f + 11], 14, 643717713), u, t, r[f + 0], 20, -373897302), o = c(o, u = c(u, t = c(t, e, o, u, r[f + 5], 5, -701558691), e, o, r[f + 10], 9, 38016083), t, e, r[f + 15], 14, -660478335), u, t, r[f + 4], 20, -405537848), o = c(o, u = c(u, t = c(t, e, o, u, r[f + 9], 5, 568446438), e, o, r[f + 14], 9, -1019803690), t, e, r[f + 3], 14, -187363961), u, t, r[f + 8], 20, 1163531501), o = c(o, u = c(u, t = c(t, e, o, u, r[f + 13], 5, -1444681467), e, o, r[f + 2], 9, -51403784), t, e, r[f + 7], 14, 1735328473), u, t, r[f + 12], 20, -1926607734), o = i(o, u = i(u, t = i(t, e, o, u, r[f + 5], 4, -378558), e, o, r[f + 8], 11, -2022574463), t, e, r[f + 11], 16, 1839030562), u, t, r[f + 14], 23, -35309556), o = i(o, u = i(u, t = i(t, e, o, u, r[f + 1], 4, -1530992060), e, o, r[f + 4], 11, 1272893353), t, e, r[f + 7], 16, -155497632), u, t, r[f + 10], 23, -1094730640), o = i(o, u = i(u, t = i(t, e, o, u, r[f + 13], 4, 681279174), e, o, r[f + 0], 11, -358537222), t, e, r[f + 3], 16, -722521979), u, t, r[f + 6], 23, 76029189), o = i(o, u = i(u, t = i(t, e, o, u, r[f + 9], 4, -640364487), e, o, r[f + 12], 11, -421815835), t, e, r[f + 15], 16, 530742520), u, t, r[f + 2], 23, -995338651), o = h(o, u = h(u, t = h(t, e, o, u, r[f + 0], 6, -198630844), e, o, r[f + 7], 10, 1126891415), t, e, r[f + 14], 15, -1416354905), u, t, r[f + 5], 21, -57434055), o = h(o, u = h(u, t = h(t, e, o, u, r[f + 12], 6, 1700485571), e, o, r[f + 3], 10, -1894986606), t, e, r[f + 10], 15, -1051523), u, t, r[f + 1], 21, -2054922799), o = h(o, u = h(u, t = h(t, e, o, u, r[f + 8], 6, 1873313359), e, o, r[f + 15], 10, -30611744), t, e, r[f + 6], 15, -1560198380), u, t, r[f + 13], 21, 1309151649), o = h(o, u = h(u, t = h(t, e, o, u, r[f + 4], 6, -145523070), e, o, r[f + 11], 10, -1120210379), t, e, r[f + 2], 15, 718787259), u, t, r[f + 9], 21, -343485551), 
        t = C(t, g), e = C(e, d), o = C(o, l), u = C(u, v);
    }
    return Array(t, e, o, u);
}

function f(r, n, t, e, o, u) {
    return C(g(C(C(n, r), C(e, u)), o), t);
}

function a(r, n, t, e, o, u, a) {
    return f(n & t | ~n & e, r, n, o, u, a);
}

function c(r, n, t, e, o, u, a) {
    return f(n & e | t & ~e, r, n, o, u, a);
}

function i(r, n, t, e, o, u, a) {
    return f(n ^ t ^ e, r, n, o, u, a);
}

function h(r, n, t, e, o, u, a) {
    return f(t ^ (n | ~e), r, n, o, u, a);
}

function C(r, n) {
    var t = (65535 & r) + (65535 & n);
    return (r >> 16) + (n >> 16) + (t >> 16) << 16 | 65535 & t;
}

function g(r, n) {
    return r << n | r >>> 32 - n;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e) {
    return n(r(t(e)));
};

var d = 0;