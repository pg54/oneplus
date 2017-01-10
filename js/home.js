/**
 * Created by pangang on 16/7/5.
 */
$(function () {
    console.log('haha1');
    $('.top_bar_search').click(function () {
        $('.searchbox').css('visibility','visible')
        $('.top_menu').css('opacity','0');
    })
    $('.top_bar_menu').click(function (ev) {
        console.log('haha');
        $('.top_nav').attribute()
    })
    $('#sidebar').click(function () {
        var rightLen = $('#sidebar').css('right');
        console.log(rightLen);
        if (rightLen == '0px') {
            $(this).css('right','-160px');
            $('.toggleBtn span').text('⇚');
        } else {
            $(this).css('right','0');
            $('.toggleBtn span').text('⇛');
            
        }

    })

})