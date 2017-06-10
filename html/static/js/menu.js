
// jQuery.support.cors = true;
$.ajax({
    url: "static/js/menu.json",
    // type: 'POST',
    // data: requestParam,
    async: false,
    success: function (result) {
        var data = {
            data: result
        };

        document.getElementById('navigation').innerHTML = template('tpl-menu', data);
    },
    error: function (e) {
    }
});
