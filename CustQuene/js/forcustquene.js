/*
 *Author :Zhangkun
 *wait for the useful table
 *
 */
$(document).ready(function() {
    //获取屏幕尺寸
    var g_width = $(window).width();
    var g_height = $(window).height();
    $('.wholescreen').width(g_width) - 20;
    $('.wholescreen').height(g_height) - 20;

    $('#popupDiv').width(g_width) - 20;
    $('#popupDiv').height(g_height) - 20;

    //信息输入
    $('#toOnQuene').click(function() {
        $('#popupDiv').css('display', 'block');
    });
    //信息提交
    $('#confirmCustInfo').click(function() {
        alert("已进入提交函数");
        // var custNum = $("#custNum").selectedIndex.value;
        var custNum = $("#custNum").find("option:selected").attr("value");
        var custPhone = $("#custPhone").val();
        var custName = $("#custName").val();
        alert("用餐人数：" + custNum + "联系方式：" + custPhone);
        $.ajax({
            type: 'post',
            url: '', //修改
            dataType: 'json',
            data: {
                custNum: custNum,
                custPhone: custNum,
                custName: custName
            },
            success: function(data) {
                if (data == 0) {
                    alert("排队信息提交成功，请耐心等候...");
                }
            }
        });
    });
    //取消
    $('#cancelCustInfo').click(function() {
        $('#popupDiv').css('display', 'none');
    });
});