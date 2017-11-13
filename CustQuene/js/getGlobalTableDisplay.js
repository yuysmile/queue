// 全局显示空桌数
$.ajax({
    type: 'post',
    async: true,
    url: '', //修改
    dataType: 'json',
    success: function(data) {

    },
    error: function(data) {
        data = {
            '1': '富贵厅1号桌',
            '2': '富贵厅2号桌',
            '3': '富贵厅3号桌',
            '4': '富贵厅4号桌',
            '5': '富贵厅5号桌',
            '6': '富贵厅6号桌',
            '7': '富贵厅1号桌',
            '8': '富贵厅8号桌',
            '9': '富贵厅9号桌',
            '10': '富贵厅10号桌',
            '11': '富贵厅11号桌',
            '12': '富贵厅12号桌',
            '13': '富贵厅13号桌',
            '14': '富贵厅14号桌',
            '15': '富贵厅15号桌',
        }
        for (var attr in data) {
            var tab5 = document.getElementById('tab5');
            tab5.innerHTML += '<span class="table">' + '<a href="#">' + data[attr] + '</a></span>';
        }
    }
});




// 全局显示空桌数