/* jq */
$(function (){
    /* menu_btn */
    const menu_btn=$('.menu_btn');
    const toggle_on=$('.lnb');

    menu_btn.click(function(){
        $(this).toggleClass("on");
        toggle_on.toggleClass("on");
    })

    /* slide */
    $('.slide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      dots: true,
    });

    /* footer */
    const lang=$('.language')
    const kor=$('.korean')
    lang.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollBottom:0},500);
    })
    kor.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollBottom:0},500);
    })
    /* top button */
    const btt=$('.to_top');
    $(window).scroll(function(){
        if($(window).scrollTop()>300){
            btt.addClass('visible');
        }else{
            btt.removeClass('visible');
        }
    })

    btt.click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},500);
    })
});