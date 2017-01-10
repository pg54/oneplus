/**
 * Created by pangang on 16/7/6.
 */
$(function () {
    $(window).scroll(function () {
        var length = $(document).scrollTop();
        if (length >= 80) {
            $('#fixedNav').css({'position':'fixed','top':'0','left':'0'});
        }
        else {
            $('#fixedNav').css('position','relative');
        }
        $('.container-fluid img').each(function () {
            dymaAdd($(this));
        })

    })

    function dymaAdd(ele) {
        var  win_h = $(window).height()/2;
        var itemTop = ele.offset().top;
        var length = $(document).scrollTop();
        if (itemTop-length < win_h){
            ele.addClass('dyma');
            
        }
    }
    
    
    
})