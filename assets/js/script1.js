
$(function () {


    // =====01. header 영역=====

    $(function () {
        const header = $('#header');
        const headerLogo = $('.header-logo');

        // 스크롤 이벤트
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                header.addClass('scrolled');       // 헤더 배경
                headerLogo.addClass('scrolled');   // 로고 색상 전환
            } else {
                header.removeClass('scrolled');
                headerLogo.removeClass('scrolled');
            }
        });

        // 나머지 기존 기능 유지 (로그인, 메뉴, 팝업 등)
        $(".login-btn").click(function (e) {
            e.preventDefault();
            $(".login-popup-overlay").addClass("active");
            $("body").css("overflow", "hidden");
        });

        $(".login-popup-close").click(function () {
            $(".login-popup-overlay").removeClass("active");
            $("body").css("overflow", "auto");
        });

        $(".login-popup-overlay").click(function (e) {
            if ($(e.target).hasClass("login-popup-overlay")) {
                $(this).removeClass("active");
                $("body").css("overflow", "auto");
            }
        });

        $(".login-form").submit(function (e) {
            e.preventDefault();
            alert("로그인 기능은 백엔드 연동이 필요합니다.");
        });

        $(".allmenu-btn").click(function () {
            $(".fullmenu-overlay").addClass("active");
            $("body").css("overflow", "hidden");
            $(this).addClass("active");
        });

        $(".fullmenu-close, .fullmenu-list a").click(function () {
            $(".fullmenu-overlay").removeClass("active");
            $("body").css("overflow", "auto");
            $(".allmenu-btn").removeClass("active");
        });

        $(".fullmenu-overlay").click(function (e) {
            if ($(e.target).hasClass("fullmenu-overlay")) {
                $(this).removeClass("active");
                $("body").css("overflow", "auto");
                $(".allmenu-btn").removeClass("active");
            }
        });

        function checkHeaderTop() {
            if ($(window).scrollTop() === 0) {
                $("#header").addClass("top");
            } else {
                $("#header").removeClass("top");
            }
        }

        // (추가 tops)01-1 모바일 최상단 투명배경s
        function checkHeaderTop() {
            if ($(window).scrollTop() === 0) {
                $("#header").addClass("tops");
            } else {
                $("#header").removeClass("tops");
            }
        }

        // 01-1 모바일 메뉴 토글-01
        $(".mo-btn").click(function () {
            $(".header-nav").toggleClass("on");
            $(".header-dim").toggleClass("on");
            $(".menu-wrap").toggleClass("open");
            $("#header").toggleClass("menu-open");
            $("body").toggleClass("menu-open");
            checkHeaderTop(); // 메뉴 열림 후 최상단 확인
        });

        // 01-1 페이지 로드 및 스크롤 이벤트-02
        $(document).ready(checkHeaderTop);
        $(window).on("scroll", checkHeaderTop);


        // 헤더 로고
        $(".header-logo").on("click", function () {
            $(".header-nav").removeClass("on");
            $("#header").removeClass("menu-open");
            $("body").removeClass("menu-open");
            $(".menu-wrap").removeClass("open");
            $(".header-dim").removeClass("on");
        });

        $(".sub-menu a").on("click", function () {
            $(".header-nav").removeClass("on");
            $(".menu-wrap").removeClass("open");
            $("#header").removeClass("menu-open");
            $("body").removeClass("menu-open");
            $(".header-dim").removeClass("on");
        });

        $(".header-menu > li > a").on("click", function (e) {
            if (window.innerWidth <= 1024 && $(this).siblings('.sub-menu').length > 0) {
                e.preventDefault();

                const $parent = $(this).closest('li');
                const $submenu = $parent.find('.sub-menu');
                const $toggle = $parent.find('.sub-toggle');

                // 다른 메뉴들의 active/on 클래스 제거 및 패딩 복원
                $parent.siblings().removeClass('on');
                // $parent.siblings().css('padding', '0 20px');  // ✅ 패딩 복원
                $parent.siblings().find('.sub-menu').removeClass('active');
                $parent.siblings().find('.sub-toggle').removeClass('active');
                $parent.siblings().find('a.links').removeClass('on');

                // 현재 메뉴 토글
                $submenu.toggleClass('active');
                $toggle.toggleClass('active');
                $(this).toggleClass('on');
                $parent.toggleClass('on');

                // on 클래스 여부에 따라 패딩 조절
                // if ($parent.hasClass('on')) {
                //     $parent.css('padding', '0');  // ✅ on 클래스 있으면 패딩 0
                // } else {
                //     $parent.css('padding', '0 20px');  // ✅ on 클래스 없으면 패딩 복원
                // }
            }


        });

        $(".consult-btn").click(function () {
            window.location.href = "/consult.html";
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                $(".fullmenu-overlay").removeClass("active");
                $(".login-popup-overlay").removeClass("active");
                $("body").css("overflow", "auto");
                $(".allmenu-btn").removeClass("active");

                if ($("#header").hasClass("menu-open")) {
                    $(".header-nav").removeClass("on");
                    $("#header").removeClass("menu-open");
                    $("body").removeClass("menu-open");
                    $(".menu-wrap").removeClass("open");
                    $(".header-dim").removeClass("on");
                }
            }
        });
    });



    // =====02. 메인 비주얼=====

    var mainSwiper = new Swiper(".main_slide", {
        loop: true,
        speed: 800,
        pagination: {
            el: ".kv-sec .pager",
            bulletActiveClass: 'on',
            clickable: true
        },
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false,
        // },
    });



    // =====03. 팀 케어 전문인력=====

    // 기존버전
    // feather.replace();
    // var imgSwiper1 = new Swiper(".team-slide .team-list", {
    //     speed: 700,
    //     slidesPerView: '1.5',
    //     spaceBetween: 10,
    //     autoHeight: true,
    //     loop: true,
    //     centeredSlides: true,
    //     // autoplay: {
    //     //     delay: 3000,
    //     //     disableOnInteraction: false
    //     // },

    //     navigation: {
    //         nextEl: ".team-sec .swiper-button-next",
    //         prevEl: ".team-sec .swiper-button-prev"
    //     },

    //     pagination: {
    //         el: ".team-sec .swiper-pagination",
    //         type: "progressbar"
    //     },

    //     breakpoints: {
    //         1280: {
    //             slidesPerView: '4',
    //             spaceBetween: 60,
    //             centeredSlides: false
    //         },

    //         1024: {
    //             slidesPerView: '3.5',
    //             spaceBetween: 40,
    //             centeredSlides: false
    //         },

    //         768: {
    //             slidesPerView: '2.5',
    //             spaceBetween: 30,
    //             centeredSlides: true
    //         },

    //         480: {
    //             slidesPerView: '2.5',
    //             spaceBetween: 20,
    //             centeredSlides: false
    //         }
    //     }
    // });




    // 지피티 추가버전
    var imgSwiper1 = new Swiper(".team-slide .team-list", {
        loop: false,
        slidesPerGroup: 1,
        grabCursor: true,
        speed: 800,
        slidesPerView: '1',
        spaceBetween: 10,
        centeredSlides: false,
        pagination: {
            el: ".team-sec .swiper-pagination",
            type: "progressbar"
        },
        breakpoints: {
            1280: { slidesPerView: 4.5, spaceBetween: 60, centeredSlides: false },
            1024: { slidesPerView: 3.5, spaceBetween: 40, centeredSlides: false },
            768: { slidesPerView: 2.5, spaceBetween: 30, centeredSlides: false },
            480: { slidesPerView: 1.5, spaceBetween: 20, centeredSlides: false }
        },
    });

    // 현재 화면에서 slidesPerView 값 가져오기
    function getSlidesPerView(swiper) {
        const width = window.innerWidth;
        const breakpoints = swiper.params.breakpoints;
        let slidesView = swiper.params.slidesPerView || 1;
        for (let bp in breakpoints) {
            if (width >= bp) slidesView = breakpoints[bp].slidesPerView;
        }
        return slidesView;
    }

    // 왼쪽 버튼 클릭
    document.querySelector(".team-sec .swiper-button-prev").addEventListener("click", () => {
        if (imgSwiper1.activeIndex === 0) {
            const lastIndex = imgSwiper1.slides.length - getSlidesPerView(imgSwiper1);
            imgSwiper1.slideTo(lastIndex, 800);
        } else {
            imgSwiper1.slidePrev(800);
        }
    });

    // 오른쪽 버튼 클릭
    document.querySelector(".team-sec .swiper-button-next").addEventListener("click", () => {
        const slidesPerView = getSlidesPerView(imgSwiper1);
        const lastIndex = imgSwiper1.slides.length - slidesPerView;

        if (imgSwiper1.activeIndex >= lastIndex) {
            imgSwiper1.slideTo(0, 800);
        } else {
            imgSwiper1.slideNext(800);
        }
    });

    // 드래그 방향 감지 변수
    let touchStartX = 0;

    imgSwiper1.on('touchStart', (swiper, e) => {
        touchStartX = e.touches ? e.touches[0].clientX : e.clientX;
    });

    imgSwiper1.on('touchEnd', (swiper, e) => {
        const touchEndX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const deltaX = touchEndX - touchStartX; // 오른쪽 드래그: deltaX > 20, 왼쪽 드래그: deltaX < -20

        const slidesPerView = getSlidesPerView(imgSwiper1);
        const lastIndex = imgSwiper1.slides.length - slidesPerView;

        // 첫 슬라이드에서 오른쪽 드래그 시 맨 끝 슬라이드로 이동
        if (imgSwiper1.activeIndex === 0 && deltaX > 20) {
            imgSwiper1.slideTo(lastIndex, 800);
        }

        // 끝 슬라이드에서 왼쪽 드래그 시 첫 슬라이드로 이동
        if (imgSwiper1.activeIndex >= lastIndex && deltaX < -20) {
            imgSwiper1.slideTo(0, 800);
        }
    });






    // =====04. 갤러리 활동 사진=====

    // 지피티추가버전
    feather.replace();
    var imgSwiper2 = new Swiper(".gallery-slide .gallery-list", {
        speed: 700,
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: true,
        loop: false, // loop 끔
        centeredSlides: false, // 중심 정렬 끔
        navigation: {
            nextEl: ".gallery-sec .swiper-button-next",
            prevEl: ".gallery-sec .swiper-button-prev"
        }
    });

    // 기존버전
    // feather.replace();
    // var imgSwiper2 = new Swiper(".gallery-slide .gallery-list", {
    //     speed: 700,
    //     slidesPerView: '1',
    //     spaceBetween: 10,
    //     autoHeight: false,
    //     loop: true,
    //     centeredSlides: false,

    //     effect: "slide",
    //     crossFade: true, //fade 이펙트 겹침 현상 시 해결

    //     // autoplay: {
    //     //     delay: 3000,
    //     //     disableOnInteraction: false
    //     // },

    //     navigation: {
    //         nextEl: ".gallery-sec .swiper-button-next",
    //         prevEl: ".gallery-sec .swiper-button-prev"
    //     },

    //     pagination: {
    //         el: ".gallery-sec .swiper-pagination",
    //         // type: "progressbar"
    //     }

    // });





    // =====05. 복지센터 소식=====
    feather.replace();
    var imgSwiper3 = new Swiper(".notice-slide .notice-list", {
        speed: 700,
        slidesPerView: '1',
        spaceBetween: 10,
        autoHeight: true,
        loop: true,
        centeredSlides: true,

        effect: "slide",
        // 기본값은 좌우이동("slide" 따옴표를 비우면 됨)
        // 전환 효과. 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative'또는'cards'

        crossFade: true, //fade 이펙트 겹침 현상 시 해결

        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: ".notice-sec .swiper-button-next",
            prevEl: ".notice-sec .swiper-button-prev"
        },

        pagination: {
            el: ".notice-sec .swiper-pagination",
            // type: "progressbar"
        },

        breakpoints: {
            1280: {
                slidesPerView: '4',
                spaceBetween: 60,
                centeredSlides: false
            },

            1024: {
                slidesPerView: '3.5',
                spaceBetween: 40,
                centeredSlides: false
            },

            768: {
                slidesPerView: '2.5',
                spaceBetween: 30,
                centeredSlides: true
            },

            480: {
                slidesPerView: '1.5',
                spaceBetween: 20,
                centeredSlides: false
            }
        }

    });







});//끝 닫힘