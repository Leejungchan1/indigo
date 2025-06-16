$(function(){

    $(".slider").slick({
        autoplay:true,
        autoplaySpeed:2000,
        arrows:true,
        dots:true,
        fade:true,
        responsive:[
            {
                breakpoint:1000,
                settings:{
                    dots:false,
                    arrows:false,
                }
            },{
                breakpoint:600,
                settings:{
                    dots:true,
                    arrows:false
                }
            }
        ]
    }) /* 슬릭은 높이를 설정해줘야됨 */

    $(".header .menu-toggle-btn").click(function(){
        $(this).toggleClass("on")
        $(".m_nav").slideToggle();
    })

    $("a").click(function(event){
        event.preventDefault();
    })
})