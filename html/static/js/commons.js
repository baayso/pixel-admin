// 兼容IE8的无console问题
// http://www.cnblogs.com/xxcanghai/p/4569926.html
window._console = window.console; // 将原始console对象缓存
window.console = (function (orgConsole) {
    var consoleObj = {}; // 最终被替换的console对象
    var consoleFnArr = ["log", "debug", "info", "warn", "exception", "assert",
        "dir", "dirxml", "trace", "group", "groupCollapsed", "groupEnd", "profile",
        "profileEnd", "count", "clear", "time", "timeEnd", "timeStamp", "table",
        "error", "memory", "markTimeline", "timeline", "timelineEnd"];
    $.each(consoleFnArr, function (i, n) {
        consoleObj[n] = function actionConsole() {
            if (typeof (orgConsole) !== "object") return; // IE8不开控制台时console为undefined
            if (typeof (orgConsole[n]) === "function") { // 调用标准浏览器内部console函数
                return orgConsole[n].apply(orgConsole, Array.prototype.slice.call(arguments));
            }
            else {
                // IE8下开启控制台时且console.log可用的情况下，执行typeof console.log返回"object"而不是"function"
                try {
                    return orgConsole[n].apply(orgConsole, Array.prototype.slice.call(arguments));
                }
                catch (ex) {
                    return null;
                }
            }
        };
    });
    return consoleObj;
}(window._console));

/**
 * 根据访问地址获取文本内容。
 *
 * @param url 访问地址
 * @returns {string} 文本
 */
function getHtml(url) {

    var text = '';

    $.ajax({
        url: url,
        async: false,
        success: function (data) {
            text = data;
        }
    });

    return text;
}
