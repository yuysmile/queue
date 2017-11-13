// 队列显示
		$.ajax({
            type: 'post',
            async:true,
            url: '', //修改
            dataType: 'json',
            success: function(data) {

            },
            error:function(data){
                data={
                    '2':[{
                      "id": "12",
                      "tel": "13507683367",
                      "num": "21",
                      "begin_time": "1508662196"
                    },
                    {
                      "id": "13",
                      "tel": "13507683367",
                      "num": "22",
                      "begin_time": "1508662196"
                    },
                    {
                      "id": "14",
                      "tel": "13507683367",
                      "num": "23",
                      "begin_time": "1508662196"
                    },
                    {
                      "id": "15",
                      "tel": "13507683367",
                      "num": "24",
                      "begin_time": "1508662196"
                    },
                    {
                      "id": "16",
                      "tel": "13507683367",
                      "num": "25",
                      "begin_time": "1508662196"
                    },{
                      "id": "17",
                      "tel": "13507683367",
                      "num": "26",
                      "begin_time": "1508662196"
                    },
                    {
                      "id": "18",
                      "tel": "13507683367",
                      "num": "27",
                      "begin_time": "1508662196"
                    }],
                    // 创建排队队列列表
                   '3':[{
                      "id":"2",
                      "tel":"15811786011",
                      "num":"3",
                      "begin_time":''
                   }],
                   '4':[
                    {
                      "id":"3",
                      "tel": "15811785201",
                      "num": "4",
                      "begin_time": ''
                    },
                    {
                      "id":"13",
                      "tel":"13507683367",
                      "num":"4",
                      "begin_time": "1508662199"
                    },
                    {
                      "id":"14",
                      "tel":"13507683367",
                      "num": "4",
                      "begin_time":"1508663157"
                    },
                    {
                      "id": "15",
                      "tel":"13507683367",
                      "num":"4",
                      "begin_time": "1508664753"
                    }
                   ],
                   '5':[
                    {
                      "id": "1",
                      "tel": "15811586011",
                      "num": "5",
                      "begin_time": ''
                    }
                   ],
                   '6':[
                    {
                      "id": "4",
                      "tel": "15811785201",
                      "num": "6",
                      "begin_time": ''
                    },
                    {
                      "id":"16",
                      "tel": "13507683367",
                      "num": "6",
                      "begin_time": "1508727679"
                    },
                    {
                      "id": "17",
                      "tel": "13507683367",
                      "num": "6",
                      "begin_time": "1508727702"
                    }
                   ],
                   '8':[
                    {
                      "id": "10",
                      "tel": "13507683367",
                      "num": "8",
                      "begin_time": "1508662167"
                    },
                    {
                      "id": "11",
                      "tel": "13507683367",
                      "num": "8",
                      "begin_time": "1508662190"
                    }
                   ]
                };
                var tbody = document.getElementById('tbMain'); 
                for(var attr in data){
                    if (attr == 2 || attr == 1) {
                        for (var i in data[attr]) {
                            var row = document.createElement('tr');
                            var idCol = document.createElement('td');
                            row.appendChild(idCol);
                            var telCol = document.createElement('td');
                            telCol.innerHTML=data[attr][i].tel;
                            row.appendChild(telCol);
                            var numCol = document.createElement('td');
                            numCol.innerHTML=data[attr][i].num;
                            row.appendChild(numCol);
                            var btn = document.createElement('td');
                            var del = document.createElement('a');
                            del.innerText="过号";
                            var top = document.createElement('a');
                            top.innerText="上桌";
                            btn.append(del);
                            btn.append(top);
                            row.appendChild(btn);
                            var tabTable1 = document.getElementById('tabTable1');
                            tabTable1.append(row);
                            // var msg =row.rowIndex;
                            idCol.innerText=row.rowIndex;
                            del.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable1').deleteRow(i);
                            }
                            top.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable1').deleteRow(i);
                            }
                        } 
                    }
                    else if (attr == 3 || attr == 4) {
                        for (var i in data[attr]) {
                          var row = document.createElement('tr');
                          var idCol = document.createElement('td');
                          //idCol.innerHTML=data[attr][i].id;
                          row.appendChild(idCol);
                          var telCol = document.createElement('td');
                          telCol.innerHTML=data[attr][i].tel;
                          row.appendChild(telCol);
                          var numCol = document.createElement('td');
                          numCol.innerHTML=data[attr][i].num;
                          row.appendChild(numCol);
                          var btn = document.createElement('td');
                            var del = document.createElement('a');
                            del.innerText="过号";
                            var top = document.createElement('a');
                            top.innerText="上桌";
                            btn.append(del);
                            btn.append(top);
                            row.appendChild(btn);
                            var tabTable2 = document.getElementById('tabTable2');
                            tabTable2.append(row);
                            idCol.innerText=row.rowIndex;
                            del.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable2').deleteRow(i);
                            }
                            top.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable2').deleteRow(i);
                            }
                        }
                    }
                    else if (attr == 5 || attr == 6) {
                        for (var i in data[attr]) {
                            var row = document.createElement('tr');
                            var idCol = document.createElement('td');

                            //idCol.innerHTML=data[attr][i].id;
                            row.appendChild(idCol);
                            var telCol = document.createElement('td');
                            telCol.innerHTML=data[attr][i].tel;
                            row.appendChild(telCol);
                            var numCol = document.createElement('td');
                            numCol.innerHTML=data[attr][i].num;
                            row.appendChild(numCol);
                            var btn = document.createElement('td');
                            var del = document.createElement('a');
                            del.innerText="过号";
                            var top = document.createElement('a');
                            top.innerText="上桌";
                            btn.append(del);
                            btn.append(top);
                            row.appendChild(btn);
                            var tabTable3 = document.getElementById('tabTable3');
                            tabTable3.append(row);
                            idCol.innerText=row.rowIndex;
                            del.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable3').deleteRow(i);
                            }
                            top.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable3').deleteRow(i);
                            }
                        }
                    }
                    else{
                        for (var i in data[attr]) {
                              var row = document.createElement('tr');
                              var idCol = document.createElement('td');
                              //idCol.innerHTML=data[attr][i].id;
                              row.appendChild(idCol);
                              var telCol = document.createElement('td');
                              telCol.innerHTML=data[attr][i].tel;
                              row.appendChild(telCol);
                              var numCol = document.createElement('td');
                              numCol.innerHTML=data[attr][i].num;
                              row.appendChild(numCol);
                              var btn = document.createElement('td');
                              var del = document.createElement('a');
                              del.innerText="过号";
                              var top = document.createElement('a');
                              top.innerText="上桌";
                              btn.append(del);
                              btn.append(top);
                              row.appendChild(btn);
                              var tabTable4 = document.getElementById('tabTable4');
                              tabTable4.append(row);
                              idCol.innerText=row.rowIndex;
                              del.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable4').deleteRow(i);
                            }
                            top.onclick=function deleteRow()
                            {
                              var i=this.parentNode.parentNode.rowIndex;
                              document.getElementById('tabTable4').deleteRow(i);
                            }
                          }
                    }
                }
                for(var attr in data){
                    for (var i in data[attr]) {
                              var row = document.createElement('tr');
                              var idCol = document.createElement('td');
                              //idCol.innerHTML=data[attr][i].id;
                              row.appendChild(idCol);
                              var telCol = document.createElement('td');
                              telCol.innerHTML=data[attr][i].tel;
                              row.appendChild(telCol);
                              var numCol = document.createElement('td');
                              numCol.innerHTML=data[attr][i].num;
                              row.appendChild(numCol);
                              var tabTable5 = document.getElementById('tabTable5');
                              tabTable5.append(row);
                              idCol.innerText=row.rowIndex;
                        }
                }
                

            }


    });
        