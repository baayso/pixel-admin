/**
 * 带自动过期功能的localStorage。
 */
var storeWithExpiration = {

    set: function (key, val, exp) {
        var valueWithExp = {
            val: val,
            exp: exp,
            time: new Date().getTime()
        };

        localStorage.setItem(key, JSON.stringify(valueWithExp));
    },

    get: function (key) {
        var json = localStorage.getItem(key);

        if (!json) {
            return null;
        }

        var info = JSON.parse(json);

        var nowTime = new Date().getTime();
        var time = info.time;
        var exp = info.exp;

        localStorage.removeItem(key);

        if (nowTime - time > exp) {
            return null;
        }

        var val = info.val;

        storeWithExpiration.set(key, val, exp);

        return val;
    },

    del: function (key) {
        localStorage.removeItem(key);
    }
};
