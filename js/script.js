$(function () {
    $(".head-a").on('click',function () {
        $(this).toggleClass("head-a-click")
    });
    //toys add block
    //
    // function toysAdd(str) {
    //     var a=
    //     $(".toys").append()
    // }


    // move home img
    $(document).on('scroll',function (event) {
        var proc=-450;
        if($(window).scrollTop()>=0){
            $(".home").css('background-position-y',(proc+$(window).scrollTop())+'px');
        }
    });

    // $('.head-a').click(function(event) {
    //     var target = event.target;
    //     if(target.getAttribute('href')=="#home"){
    //         $('html, body').animate(500);
    //         return false;
    //     }
    //     if(target.getAttribute('href')=="#toys"){
    //         $('html, body').animate(500);
    //         return false;
    //     }
    // });

    // button ud and down
    $(document).on('scroll',function (event) {
        console.log($(window).scrollTop());
        if($(window).scrollTop()>527){
            $(".upDiv").addClass("upShow");
            $(".downDiv").addClass("downShow");
        }
        if($(window).scrollTop()<527){
            $(".upDiv").removeClass("upShow");
            $(".downDiv").removeClass("downShow");
        }
    });
});