$(function(){

    $(window).on("load", function () {
        AOS.refresh();
    });
    AOS.init({
        once : true,
        throttleDelay : 99,
        duration: 1000
    });

    $(window).on("scroll", function(){
        const wh = $(window).scrollTop();
        if(wh <= 0){
            $("#header").removeClass("show");
        } else {
            $("#header").addClass("show");
        }
    });
    $("#gnb").mouseover(function(){
        $("#header").addClass("show");
    });

    // gnb
    $(document).on("mouseenter", "#gnb > ul > li", function () {
        $("#gnb").removeClass("on");
        $(this).addClass("active").siblings("li").removeClass("active");
        $(this).children("ul").stop().slideDown();
        return false;
    }).on("mouseleave", "#gnb > ul > li", function () {
        $("#gnb").removeClass("on");
        $(this).removeClass("active");
        $(this).children("ul").stop().slideUp();
        return false;
    });

    // sitemap
    $(document).off("click", ".btnSitemapOpen").on("click", ".btnSitemapOpen", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeIn();
        $(".langsGroup").removeClass("active");
        $(".swiper-button-autoplay").click();
        $("body").addClass("scrollLock");
        $("body").on("scroll touchmove mousewheel", function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
        $(".sitemapBody > ul > li .aos-init").removeClass("aos-animate");
        $(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","0s");
        setTimeout(() => {
            $(`[data-aos][data-aos][data-aos-duration="1000"], body[data-aos-duration="1000"] [data-aos]`).css("transition-duration","1s");
            $(".sitemapBody > ul > li .aos-init").addClass("aos-animate");
        } , 100);
    });
    $(document).off("click", ".btnSitemapClose").on("click", ".btnSitemapClose", function(e) {
        e.preventDefault();
        $(".sitemapWrap").fadeOut();
        $(".swiper-button-autoplay").click();
        $("body").removeClass("scrollLock");
        $("body").off("scroll touchmove mousewheel");
    });

    function bindSitemapClickForMobile() {
        $(document).off("click.sitemap");
    
        if (window.innerWidth <= 1199) {
            $(document).on("click.sitemap", ".sitemapBody > ul > li > a", function (e) {
                if ($(this).next("ul").length > 0) {
                    e.preventDefault();
    
                    $(this).parent("li").toggleClass("on").siblings("li").removeClass("on");
    
                    $(".sitemapBody > ul > li").each(function () {
                        let onCheck = $(this).hasClass("on");
                        if (onCheck) {
                            $(this).children("ul").slideDown();
                        } else {
                            $(this).children("ul").slideUp();
                        }
                    });
                }
            });
        }
    }
    
    bindSitemapClickForMobile();
    
    $(window).on("resize", function () {
        bindSitemapClickForMobile();
    });

    $(document).on("mouseenter", ".sitemapBody > ul > li", function () {
        $(this).addClass("active").siblings("li").removeClass("active");
        return false;
    });

    // 언어선택
    $(".langsGroup button").on("click", function () {
        $(this).parent().toggleClass("active");
    });

    // 패밀리사이트선택
    $(".familyGroup button").on("click", function () {
        $(this).parent().toggleClass("active");
    });

});