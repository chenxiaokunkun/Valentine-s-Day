$(function(){
    document.body,addEventListener('touchstar',function(){});//兼容


    $('.btn>button').click(function(){

        $(this).addClass('no').siblings().removeClasses('no');

        if($(this).hasClass('wei')){
            $(this).children('input').focus();
        };

    });

    //活动规则
    $('.huodonggz').click(function(){
        $('.dic').fadeIn();//淡入
    });
    $('.yes').click(function(){
        $('.dic').fadeOut();//淡出
    })








});