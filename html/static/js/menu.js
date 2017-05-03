avalon.config({debug: false});

var vm = avalon.define({
    $id: 'menu',
    ccc: "测试内容",
    data: []
});


// jQuery.support.cors = true;
$.ajax({
    url: "static/js/menu.json",
    // type: 'POST',
    // data: requestParam,
    async: false,
    success: function (result) {
        vm.data = result;
    },
    error: function (e) {
    }
});
