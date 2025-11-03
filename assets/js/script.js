
$(function () {

    // =====01. header 영역=====

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

    // 딤 바탕화면 클릭시 창 닫히는 기능
    $(".login-popup-overlay").click(function (e) {
        // if ($(e.target).hasClass("login-popup-overlay")) {
        //     $(this).removeClass("active");
        //     $("body").css("overflow", "auto");
        // }
    });

    //기존버전

    // $(".login-form").submit(function (e) {
    //     e.preventDefault();
    //     alert("로그인 기능은 백엔드 연동이 필요합니다.");
    // });

    //수정버전

    $(".login-form").on("submit", function (e) {
        e.preventDefault(); // 기본 전송 막기

        let username = $.trim($("#username").val());
        let password = $.trim($("#password").val());

        // 1️⃣ 아이디 확인
        if (username === "") {
            alert("아이디를 입력해주세요.");
            $("#username").focus();
            return false;
        }

        // 2️⃣ 비밀번호 확인
        if (password === "") {
            alert("비밀번호를 입력해주세요.");
            $("#password").focus();
            return false;
        }

        // 3️⃣ 가짜 로그인 검증
        // if (username !== "admin" || password !== "1234") {
        //     alert("아이디 또는 비밀번호가 올바르지 않습니다.");
        //     return false;
        // }

        // ✅ 모든 입력이 완료된 경우
        alert("로그인이 완료되었습니다!-테스트버전 입니다");

        // 🔹 입력값 초기화 (폼 리셋)
        $(this).trigger("reset");
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


    // 01-2 헤더 메뉴 링크 변환
    // #header 내부의 a태그 중, href가 #menu로 시작하는 경우만 선택

    // header 내부의 링크 변환
    $('#header a[href^="#menu"]').each(function () {
        let href = $(this).attr('href');
        // '#' 제거하고 .html 붙이기
        let newHref = href.replace('#', '') + '.html';
        $(this).attr('href', newHref);
    });

    // fullmenu-overlay 내부의 링크 변환
    $('.fullmenu-overlay a[href^="#menu"]').each(function () {
        let href = $(this).attr('href');
        // '#' 제거하고 .html 붙이기
        let newHref = href.replace('#', '') + '.html';
        $(this).attr('href', newHref);
    });

    console.log("✅ header 및 fullmenu 내부의 #menu 링크가 .html로 자동 변환되었습니다.");



    // 01-3 snb-list 내부의 a태그 중 href가 #menu로 시작하는 경우
    $('.sub-list-wrap.snb-list a[href^="#menu"]').each(function () {
        let href = $(this).attr('href');
        let newHref = href.replace('#', '') + '.html';
        $(this).attr('href', newHref);
    });

    console.log("✅ snb-list 내부의 #menu 링크가 .html로 자동 변환되었습니다.");







    // =====02. 메인 비주얼=====

    var mainSwiper = new Swiper(".main_slide", {
        loop: true,
        speed: 800,
        pagination: {
            el: ".kv-sec .pager",
            bulletActiveClass: 'on',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });



    // =====03. 팀 케어 전문인력=====
    // 기존버전
    feather.replace();
    var imgSwiper1 = new Swiper(".team-slide .team-list", {
        speed: 700,
        slidesPerView: '1.5',
        spaceBetween: 10,
        autoHeight: true,
        loop: true,
        centeredSlides: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },

        navigation: {
            nextEl: ".team-sec .swiper-button-next",
            prevEl: ".team-sec .swiper-button-prev"
        },

        pagination: {
            el: ".team-sec .swiper-pagination",
            type: "progressbar"
        },

        breakpoints: {
            1280: {
                slidesPerView: '4.5',
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
                slidesPerView: '2.5',
                spaceBetween: 20,
                centeredSlides: false
            }
        }
    });



    // =====04. 갤러리 활동 사진=====
    feather.replace();
    var imgSwiper2 = new Swiper(".gallery-slide .gallery-list", {
        speed: 700,
        slidesPerView: '1',
        spaceBetween: 10,
        loop: true,
        autoHeight: false,
        centeredSlides: false,

        effect: "slide",
        // 기본값은 좌우이동("slide" 따옴표를 비우면 됨)
        // 전환 효과. 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative'또는'cards'

        crossFade: true, //fade 이펙트 겹침 현상 시 해결

        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: false
        // },

        navigation: {
            nextEl: ".gallery-sec .swiper-button-next",
            prevEl: ".gallery-sec .swiper-button-prev"
        },

        pagination: {
            el: ".gallery-sec .swiper-pagination",
            // type: "progressbar"
        }

    });





    // =====05. 복지센터 소식=====
    feather.replace();
    var imgSwiper3 = new Swiper(".notice-slide .notice-list", {
        speed: 700,
        slidesPerView: '1.5',
        spaceBetween: 10,
        autoHeight: true,
        loop: true,
        centeredSlides: true,

        effect: "slide",
        // 기본값은 좌우이동("slide" 따옴표를 비우면 됨)
        // 전환 효과. 'slide', 'fade', 'cube', 'coverflow', 'flip', 'creative'또는'cards'

        crossFade: true, //fade 이펙트 겹침 현상 시 해결

        // autoplay: {
        //     delay: 2000,
        //     disableOnInteraction: false
        // },

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



    // =====06. 자원봉사 신청 레어어팝업=====
    // 기존버전

    // $(".close-btn").on("click", function () {
    //     $(".popup-wrap").fadeOut(200);
    // });

    // $(".check-list .more").on("click", function (e) {
    //     e.preventDefault(); //팝업이 뜰 때 다른 클릭 동작을 초기화하도록 설정:
    //     $(".popup-wrap").fadeIn(200);
    // });

    // //스크롤 막기

    // $('.popup-wrap').on('scroll touchmove mousewheel', function (event) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     return false;
    // });


    // 추가버전
    // =====06. 자원봉사 신청 레이어팝업 =====

    // 팝업 닫기
    $(".close-btn").on("click", function () {
        $(".popup-wrap").fadeOut(200);
    });

    // 팝업 열기
    $(".check-list .more").on("click", function (e) {
        e.preventDefault();//팝업이 뜰 때 다른 클릭 동작을 초기화하도록 설정:
        $(".popup-wrap").fadeIn(200);

        // 스크롤 차단
        $('.popup-wrap').on("scroll touchmove mousewheel", function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });


    });

    // =====07. 폼 유효성 검사 =====
    $("#appFrm").on("submit", function (e) {
        e.preventDefault(); // 기본 전송 막기

        let name = $.trim($("input[name='name']").val());
        let email = $.trim($("input[name='email']").val());
        let agree = $("#volunteer-letter-check").is(":checked");

        // 1️⃣ 이름 확인
        if (name === "") {
            alert("이름을 입력해주세요.");
            $("input[name='name']").focus();
            return false;
        }

        // 2️⃣ 이메일 확인
        if (email === "") {
            alert("이메일 주소를 입력해주세요.");
            $("input[name='email']").focus();
            return false;
        }

        //  3️⃣ 이메일 형식 검사 (간단한 정규식)
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("올바른 이메일 주소를 입력해주세요.");
            $("input[name='email']").focus();
            return false;
        }

        //  4️⃣ 개인정보 동의 체크
        if (!agree) {
            alert("개인정보 수집/이용 동의가 필요합니다.");
            $("#volunteer-letter-check").focus();
            return false;
        }

        // ✅ 모든 조건 통과 시
        alert("자원봉사 신청이 완료되었습니다!-테스트 버전입니다");
        // 실제 전송하려면 아래 주석을 해제
        // this.submit();

        // 🔹 입력값 초기화 (폼 리셋)
        $(this).trigger("reset");

    });





    // =====08. 우측 TOP 탑 버튼 =====

    //  08-1. 자바스크립트 버전
    // let btnTop = document.querySelector("#btnTop"),
    //     headerH = 70;

    // window.addEventListener("scroll", () => {
    //     if (window.scrollY > headerH) {
    //         btnTop.classList.add("show");
    //     } else {
    //         btnTop.classList.remove("show");
    //     }
    // });
    // $("#btnTop").on("click", function () {
    //     $("html, body").stop().animate({ scrollTop: 0 });
    // });


    //08-2. 제이쿼리 버전
    const headerH = 70;

    //$(window).on("scroll") → 스크롤 이벤트 감지
    $(window).on("scroll", function () {

        //$(this).scrollTop() → 현재 스크롤 위치 가져오기
        if ($(this).scrollTop() > headerH) {

            //addClass("show"), removeClass("show") → 버튼 표시/숨김
            $("#btnTop").addClass("show");
        } else {
            $("#btnTop").removeClass("show");
        }
    });

    $("#btnTop").on("click", function () {

        //부드럽게 맨 위로 스크롤 (400ms 속도)
        $("html, body").stop().animate({ scrollTop: 0 }, 400);
    });





    // =====09. 서브 슬라이딩 탭 모션=====

    const $items = $('.snb-list ul li');
    const $activeBg = $('.active-bg');

    // 활성 배경 위치 설정
    function setActiveBg($li) {
        const index = $li.index();
        const itemWidth = 100 / $items.length;

        $activeBg.css({
            'left': (index * itemWidth) + '%',
            'width': itemWidth + '%'
        });
    }

    // 초기 active 위치
    const $activeItem = $('.snb-list ul li.active');
    if ($activeItem.length) {
        setActiveBg($activeItem);
    }

    // 탭 클릭 이벤트
    $items.find('a').on('click', function (e) {
        const $this = $(this);
        const $parent = $this.parent();
        const href = $this.attr('href');
        const target = $this.attr('target');

        // 이미 활성화된 항목이면 기본 이동
        if ($parent.hasClass('active')) return;

        // 링크 즉시 이동 막기
        e.preventDefault();

        // active 변경
        $items.removeClass('active');
        $parent.addClass('active');

        // 배경 이동
        setActiveBg($parent);

        // 애니메이션 후 이동
        setTimeout(() => {
            if (target === '_blank') {
                window.open(href, '_blank');
            } else {
                window.location.href = href;
            }
        }, 400);
    });

    // 창 크기 변경 시 위치 재조정
    $(window).on('resize', function () {
        const $activeItem = $('.snb-list ul li.active');
        if ($activeItem.length) {
            setActiveBg($activeItem);
        }
    });

    // ✅ 추가: 활성 메뉴 자동 스크롤 (모바일 대응)
    $(window).on('load', function () {
        const $wrap = $('.snb-list ul');
        const $active = $('.snb-list ul li.active');

        if ($wrap.length && $active.length) {
            const wrapWidth = $wrap.outerWidth();
            const activePos = $active.position().left;
            const activeWidth = $active.outerWidth();
            const scrollPos = activePos - (wrapWidth / 2) + (activeWidth / 2);

            $wrap.scrollLeft(scrollPos); // 중앙으로 오도록 스크롤 이동
        }
    });




    // =====10. 연혁=====


    // 히스토리
    // 히스토리
    var scrollBar = {
        init: function () {
            $(window).on("scroll resize", function () {
                scrollBar.bar();
            });
            scrollBar.bar();
        },
        bar: function () {
            const $wrap = $(".history-box");
            if ($wrap.length === 0) return; // ✅ 요소 없으면 함수 중단

            const winScroll = $(window).scrollTop();
            const winHeight = $(window).height();

            const wrapTop = $wrap.offset().top;
            const wrapHeight = $wrap.outerHeight();

            const startScroll = wrapTop - winHeight;
            const endScroll = wrapTop + wrapHeight - winHeight;
            const totalScroll = endScroll - startScroll;

            let currentScroll = winScroll - startScroll;
            currentScroll = Math.max(0, Math.min(currentScroll, totalScroll));

            const percent = (currentScroll / totalScroll) * 100;
            const adjustedPercent = Math.max(0, percent - 9);

            $(".scroll-bar > .bar").css({ height: adjustedPercent + "%" });
        }
    };
    $(function () {
        scrollBar.init(); // ✅ DOM 로드 후 실행
    });










});//끝 닫힘