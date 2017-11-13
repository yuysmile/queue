// 桌面显示
$.ajax({
    type: 'post',
    async: true,
    url: '', //修改
    dataType: 'json',
    success: function(data) {

    },
    error: function(data) {
        data = {
            '2': [{
                    "name": "富贵厅1号桌",
                    "id": "15",
                    "num": "2"
                },
                {
                    "name": "复古厅5号桌",
                    "id": "29",
                    "num": "2"
                },
                {
                    "name": "富贵厅2号桌",
                    "id": "20",
                    "num": "2"
                },
                {
                    "name": "迎宾厅5号桌",
                    "id": "23",
                    "num": "2"
                }
            ],
            '3': [{
                "name": "富贵厅3号桌",
                "id": "1",
                "num": "3"
            }],
            '4': [{
                    "name": "迎宾厅2号桌",
                    "id": "8",
                    "num": "4"
                },
                {
                    "name": "富贵厅15号桌",
                    "id": "27",
                    "num": "10"
                },
                {
                    "name": "富贵厅4号桌",
                    "id": "21",
                    "num": "4"
                },
                {
                    "name": "复古厅6号桌",
                    "id": "30",
                    "num": "4"
                },
                {
                    "name": "富贵厅5号桌",
                    "id": "9",
                    "num": "4"
                },
                {
                    "name": "迎宾厅6号桌",
                    "id": "24",
                    "num": "4"
                }, {
                    "name": "富贵厅14号桌",
                    "id": "27",
                    "num": "10"
                },
                {
                    "name": "清风厅3号桌",
                    "id": "25",
                    "num": "4"
                },
                {
                    "name": "富贵厅13号桌",
                    "id": "27",
                    "num": "10"
                }
            ],
            '5': [{
                    "name": "富贵厅6号桌",
                    "id": "2",
                    "num": "5"
                },
                {
                    "name": "富贵厅5号桌",
                    "id": "27",
                    "num": "10"
                }
            ],
            '6': [{
                    "name": "清风厅2号桌",
                    "id": "18",
                    "num": "6"
                },
                {
                    "name": "怀旧厅1号桌",
                    "id": "26",
                    "num": "6"
                },
                {
                    "name": "富贵厅12号桌",
                    "id": "27",
                    "num": "10"
                }
            ],
            '8': [{
                    "name": "富贵厅7号桌",
                    "id": "31",
                    "num": "8"
                },
                {
                    "name": "迎宾厅3号桌",
                    "id": "11",
                    "num": "8"
                },
                {
                    "name": "富贵厅8号桌",
                    "id": "22",
                    "num": "8"
                },
                {
                    "name": "怀旧厅9号桌",
                    "id": "28",
                    "num": "8"
                },
                {
                    "name": "富贵厅11号桌",
                    "id": "27",
                    "num": "10"
                }
            ],
            '10': [{
                    "name": "富贵厅9号桌",
                    "id": "27",
                    "num": "10"
                },
                {
                    "name": "富贵厅10号桌",
                    "id": "27",
                    "num": "10"
                }
            ]

        };

        for (var attr in data) {
            if (attr == 2 || attr == 1) {
                var tab1 = document.getElementById('tab1');
                for (var i = 0; i < data[attr].length; i++) {
                    tab1.innerHTML += '<span class="table">' + '<a href="#">' + data[attr][i].name + '</a></span>';
                }
            } else if (attr == 3 || attr == 4) {
                var tab2 = document.getElementById('tab2');
                for (var i = 0; i < data[attr].length; i++) {
                    tab2.innerHTML += '<span class="table">' + '<a href="#">' + data[attr][i].name + '</a></span>';
                }
            } else if (attr == 5 || attr == 6) {
                var tab3 = document.getElementById('tab3');
                for (var i = 0; i < data[attr].length; i++) {
                    tab3.innerHTML += '<span class="table">' + '<a href="#" onclick="upTable(this)">' + data[attr][i].name + '</a></span>';
                }
            } else {
                var tab4 = document.getElementById('tab4');
                for (var i = 0; i < data[attr].length; i++) {
                    tab4.innerHTML += '<span class="table">' + '<a href="#">' + data[attr][i].name + '</a></span>';
                }
            }
        }


    }





});