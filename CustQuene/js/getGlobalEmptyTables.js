$.ajax({
            type: 'post',
            async:true,
            url: '', //修改
            dataType: 'json',
            success: function(data) {

            },
            error:function(data){
                data={
                    '2':1,
                    '4':1,
                    '6':1,
                    '8':1
                };
                for (var attr in data ){
                    if (data[attr] != '') {
                        if( attr == 1 || attr == 2){
                            var circle1 = document.getElementById('circle1');
                            circle1.innerText=data[attr];
                            circle1.style.background='red';
                            circle1.style.color="white";
                        }
                        else if(attr == 3 || attr == 4){
                            var circle2 = document.getElementById('circle2');
                            circle2.innerText=data[attr];
                            circle2.style.background='red';
                            circle2.style.color="white";
                        }
                        else if(attr == 5 || attr == 6){
                            var circle3 = document.getElementById('circle3');
                            circle3.innerText=data[attr];
                            circle3.style.background='red';
                            circle3.style.color="white";
                        }
                        else{
                            var circle4 = document.getElementById('circle4');
                            circle4.innerText=data[attr];
                            circle4.style.background='red';
                            circle4.style.color="white";
                        }
                    }
                }
                
            }
    });
        