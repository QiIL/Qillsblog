$(function(){
    $('#guide .drop:first li:first').click(function(){
        $('#groundBg').fadeIn(100);
        $('#articleList').fadeIn(200);
        $('#articleNameList').fadeOut(200);
    })
    
    $('#articleList button.continue').click(function(){
        $('#articleList').fadeOut(100);
        $('#articleNameList').fadeIn(200);
    })

    $('#articleList button.back').click(function(){
        $('#groundBg').fadeOut(100);
        $('#articleList').fadeOut(200);
    })

    $('#articleNameList button.continue').click(function(){
        $('#articleNameList').fadeOut(100);
        $('#groundBg').fadeOut(100);
    })

    $('#articleNameList button.back').click(function(){
        $('#articleList').fadeIn(200);
        $('#articleNameList').fadeOut(100);
    })

    $(':image').click(function(){
        $('#groundBg').fadeOut(100);
        $('#articleList').fadeOut(100);
        $('#articleNameList').fadeOut(100);
    })

})
