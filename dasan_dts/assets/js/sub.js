$(function(){

    // 토글 기능
    $(".toggleGroup dl").each(function() {
        if (!$(this).hasClass("on")) {
            $(this).children("dd").hide();
        } else {
            $(this).children("dd").show();
        }
    });
    $(".toggleGroup dt a").on("click", function(e) {
        e.preventDefault();
        const $parent = $(this).closest("dl");

        if ($parent.hasClass("on")) {
            $parent.removeClass("on").children("dd").stop().slideUp();
        } else {
            $parent.addClass("on").children("dd").stop().slideDown();
        }
    });

    // project 슬라이드
    let projectSwiper = new Swiper(".projectSwiper", {
        centeredSlides: true,
        speed: 1000,
        loop: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".projectControl .swiper-button-next",
            prevEl: ".projectControl .swiper-button-prev",
        },
        pagination: {
            el: ".projectControl .pagination",
            clickable: true,
           renderBullet: function (index, className) {
                const number = (index + 1).toString().padStart(2, '0');
                return '<span class="' + className + '">' + number + '</span>';
            },
        },
    });

	// 상단으로
	let btnTop = document.querySelector("#btnTop"),
        headerH = 70;

    window.addEventListener("scroll", () => {
        if (window.scrollY > headerH) {
            btnTop.classList.add("show");
        } else {
            btnTop.classList.remove("show");
        }
    });
    $("#btnTop").on("click", function(){
		$("html, body").stop().animate({ scrollTop: 0 });
	});

});