$(function(){
    document.body,addEventListener('touchstar',function(){});//兼容
    $('#tanTel').hide()/*请输入您的手机号码 加载时隐藏*/
    $('#yizhi').hide()/*号码一致 加载时隐藏*/
    $('#chenggong').hide()/*充值成功 加载时隐藏*/
    $('#weiai').hide()/*为爱充值 加载时隐藏*/

    //充值按钮选择点击 事件开始
    $('.btn>button').click(function(){
        var id=this.id;
        if(id=="wushi")
        {
            $("#yibai").removeClass("no");
            $("#zdy").removeClass("no");
            $("#zdyspan").show();
            $("#zdyinput").hide()
        }
        else if(id=="yibai")
        {
            $("#wushi").removeClass("no");
            $("#zdy").removeClass("no");
            $("#zdyspan").show();
            $("#zdyinput").hide()
        }else if(id=='shisanshisi')
        {
            $("#yibai").removeClass("no");
            $("#wushi").removeClass("no");
            $("#zdy").removeClass("no");
            $("#zdyspan").show();
            $("#zdyinput").hide()
        }
        else
        {
            $("#yibai").removeClass("no");
            $("#wushi").removeClass("no");
            $("#zdyspan").hide();
            $("#zdyinput").show()
        }
        $(this).attr('class','no');
    });
    //充值按钮选择点击 事件结束



    //活动规则 事件开始
    $('.huodonggz').click(function(){
        $('.dic').fadeIn();//淡入
    });
    $('.yes').click(function(){
        $('.dic').fadeOut();//淡出
    })
    //活动规则 事件结束


    //立即支付 事件开始
    $("#sumbTel").click(function(){
        var tel=$('#ChongTel').val();/*获取值*/
        if(tel==''){
            return alert('请输入号码')
        }
        var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(tel)) {
            return alert('请输入正确的手机号码')
        }
        $('#tanTel').show()/*显示出来*/
    })
    //立即支付 事件结束


    //取消按钮 事件开始
    $('.qux').click(function(){
        $('#tanTel').hide();/*请输入您的手机号码 隐藏*/
    })
    //取消按钮 事件结束


    //确认按钮 事件开始
    $('.qur').click(function(){
        var tel2=$('#tel2').val();
        if(tel2==''){
            return alert('请输入号码')
        }
        var myreg=/^[1][3,4,5,7,8,9][0-9]{9}$/;
        if (!myreg.test(tel2)) {
            return alert('请输入正确的手机号码')
        }
        var tel1=$('#ChongTel').val();
        if(tel1==tel2){
            $('#yizhi').show();/*充值一致显示出来*/
        }else{
            $('#home').hide();/*首页隐藏起来*/
            $('#weiai').show();/*为爱充值显示出来*/
        }
    })
    //确认按钮 事件结束


    //号码一致 取消按钮 事件开始
    $('.qux2').click(function(){
        $('#yizhi').hide();/*号码一致 隐藏*/
    })
    //号码一致取消按钮 事件开始


    //号码一致确认按钮 事件开始
    $('.qur2').click(function(){
        $('#tanTel').hide();/*输入第二个号码弹窗 隐藏起来*/
        $('#yizhi').hide();/*充值号码一致 隐藏起来*/
        $('#home').hide();/*首页隐藏起来*/
        $('#chenggong').show();/*充值成功 显示出来*/
    })
    //号码一致确认按钮 事件结束



































});