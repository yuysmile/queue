/*array(1) {
  [0] => array(3) {
    ["id"] => string(1) "8"
    ["name"] => string(18) "富贵厅二号桌"
    ["num"] => string(1) "4"
  }
}*/
/*遍历后发给我的is_leave=1的数据*/
$.ajax({
    type: 'post',
    async: true,
    url: '', //修改
    dataType: 'json',
    success: function(data) {

    },
    error: function(data) {
        data = {
            // '1': [{
            //     "name": "富贵厅1号桌",
            //     "id": "15",
            //     "num": "2"
            // }],
            '2': [{
                "name": "富贵厅2号桌",
                "id": "15",
                "num": "2"
            }],
            // '3': [{
            //     "name": "富贵厅3号桌",
            //     "id": "3",
            //     "num": "2"
            // }],

            '4': [{
                "name": "富贵厅4号桌",
                "id": "8",
                "num": "4"
            }],
            // '5': [{
            //     "name": "富贵厅5号桌",
            //     "id": "15",
            //     "num": "2"
            // }],

            '6': [{
                "name": "富贵厅6号桌",
                "id": "18",
                "num": "6"
            }],
            // '7': [{
            //     "name": "富贵厅7号桌",
            //     "id": "27",
            //     "num": "10"
            // }],
            '8': [{
                "name": "富贵厅8号桌",
                "id": "27",
                "num": "10"
            }]
            // ,
            // '9': [{
            //     "name": "富贵厅9号桌",
            //     "id": "27",
            //     "num": "10"
            // }],
            // '10': [{
            //     "name": "富贵厅10号桌",
            //     "id": "27",
            //     "num": "10"
            // }]
        };
        //传参：1.alltable 2.data[attr]
        var allEmptyTable = $('#tab5').children('.table');
        for (var attr in data) {
            if (attr == 1 || attr == 2) {
                var allTable = $('#tab1').children('.table');
                showEmptyTable(allTable, data[attr]);
                // showEmptyTable(allTable, data[2]);
                showEmptyTable(allEmptyTable, data[attr]);
                // showEmptyTable(allEmptyTable, data[2]);

            } else if (attr == 3 || attr == 4) {
                var allTable = $('#tab2').children('.table');
                showEmptyTable(allTable, data[attr]);
                // showEmptyTable(allTable, data[4]);
                showEmptyTable(allEmptyTable, data[attr]);
                // showEmptyTable(allEmptyTable, data[4]);
            } else if (attr == 5 || attr == 6) {
                var allTable = $('#tab3').children('.table');
                showEmptyTable(allTable, data[attr]);
                // showEmptyTable(allTable, data[6]);
                showEmptyTable(allEmptyTable, data[attr]);
                // showEmptyTable(allEmptyTable, data[6]);
            } else {
                var allTable = $('#tab4').children('.table');
                showEmptyTable(allTable, data[attr]);
                showEmptyTable(allEmptyTable, data[attr]);
            }
        }

    }
});

function showEmptyTable(allTable, arr) {
    $(allTable).each(function() {
        for (var i = 0; i < $(arr).length; i++) {
            if ($(this).children('a').text() == arr[i].name) {
                $(this).addClass('bluetable');
            }
        }
    });

}