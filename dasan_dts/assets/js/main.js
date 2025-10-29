$(function(){
    
    // 버튼 ani
    $(".btnViewmore").each(function(){
        var offset = 3;
        if($(window).width() <= 1660){
            offset = 5;
        }

        var $btn = $(this);
        var btn_width = $btn.outerWidth() - offset;
        var $bg =  $btn.find("i");
        var tl = new TimelineMax({paused:true});
        var dotted_width = $btn.find("i").width();
        var dotted_left = (btn_width - dotted_width);
        
        tl.to($bg, .3, { width: btn_width+"px", left: "0",force3D: true});
        tl.to($bg, .3, { width: dotted_width+"px", left: dotted_left+"px",force3D: true});

        $btn.mouseenter(function(){
            tl.play();

        }).mouseleave(function(){
            var currentTime = tl.time();
            tl.reverse(currentTime);

        });
    });
  
    // 메인비주얼 슬라이드
    let visualSwiper = new Swiper(".visualSwiper", {
        effect : "fade",
        centeredSlides: true,
        speed: 1000,
        loop: false,
        touchRatio: 0, //드래그 금지
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".visualControl .swiper-button-next",
            prevEl: ".visualControl .swiper-button-prev",
        },
        pagination: {
            el: ".visualControl .pagination",
            type: "fraction",
            formatFractionCurrent: function (number) {
                return number < 10 ? "0" + number : number;
            },
            formatFractionTotal: function (number) {
                return number < 10 ? "0" + number : number;
            },
        },
    });
    $(".swiper-button-autoplay").click(function () {
        if ($(this).hasClass("on")) {
            visualSwiper.autoplay.start();
        } else {
            visualSwiper.autoplay.stop();
        }
        $(this).toggleClass("on");
    });

    // fullpage
    $("#fullpage").fullpage({
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        // fullpage 해제할 브라우저 너비와 높이
        responsiveWidth : 1199,
        responsiveHeight : 800,
        anchors : ["DASAN DTS", "PRODUCT", "CEO", "ABOUT US"],
        sectionsColor : ["#000", "#FFF", "#2448E3", "#FFF"],
        css3: true,
        easing: "easeInOutCubic",
        easingcss3: "ease",
        scrollingSpeed: 1000,
        //normalScrollElements: "#section2",
        scrollOverflow: true,
        navigation : true,
        navigationPosition : "left",
        navigationTooltips : ["DASAN DTS", "PRODUCT", "CEO", "ABOUT US"],
        showActiveTooltip: true,
        //loopBottom : true,
        afterLoad : function (anchorLink, index) {
            if($(".section").hasClass("on")){
                $(".section.active .aos-init").addClass("aos-animate");
            } else {
                $(".section .aos-init").removeClass("aos-animate");
            }
            $(".section.active .aos-init").addClass("aos-animate");
            if (index == 2 || index == 3 || index == 4) {
                $("#header").addClass("show");
                $("#btnTop").addClass("show");
                $("#fp-nav").addClass("black");
            } else {
                $("#header").removeClass("show");
                $("#btnTop").removeClass("show");
                $("#fp-nav").removeClass("black");
            }
            if (index == 4) {
                $("#section4").addClass("ani");
            } else {
                $("#section4").removeClass("ani");
            }
        },
    });

    $("#btnTop").click(function() {
        $.fn.fullpage.moveTo("DASAN DTS");
    });
});