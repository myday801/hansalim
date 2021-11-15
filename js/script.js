// html 이 준비가 되면 실행한다.
$(document).ready(function () {

    // 상단 고정 메뉴 기능
    // 1. 오른쪽에 있는 스크롤바가 몇 픽셀 내려왔는지
    let scroll_y = $(window).scrollTop();
    let header = $('.header');
    let body = $('body');

    $(window).scroll(function () {
        scroll_y = $(window).scrollTop();
        // console.log(scroll_y);
        if (scroll_y > 70) {
            header.addClass('header-fix');
            body.addClass('body-fix');
        } else {
            header.removeClass('header-fix');
            body.removeClass('body-fix');
        }

    });

    // 위로가기
    // 1. .gotop 저장
    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });


    // center-menu 기능
    // 1.  .center-menu 를 저장한다.
    let center_menu = $('.center-menu');
    // 2. .center-submenu 를 저장한다.
    let center_submenu = $('.center-submenu');
    // 3. .center-menu 를 클릭한다.
    //   : href 는 막아야한다.
    center_menu.click(function (event) {
        event.preventDefault();
        // 4. .center-submenu 를 토글시킨다.
        center_submenu.toggle();
        center_menu.toggleClass('center-menu-active');
    });


    // category-list-2 를 토글한다
    let category_list_more = $('.category-list-more');
    let category_list_2 = $('.category-list-2');
    category_list_more.click(function (event) {
        event.preventDefault();
        category_list_2.toggle();
        $(this).toggleClass('.category-list-more-active');

        see_more_list.hide();
        see_more_bt_open.show();
        see_more_bt_close.hide();
    });

    // see-more-bt 를 토글한다.
    let see_more_bt = $('.see-more-bt');
    let see_more_bt_open = $('.see-more-bt-open');
    let see_more_bt_close = $('.see-more-bt-close');
    see_more_bt_close.hide();

    let see_more_list = $('.see-more-list');
    see_more_bt.click(function (event) {
        event.preventDefault();
        see_more_bt_open.toggle();
        see_more_bt_close.toggle();
        see_more_list.toggle();

        category_list_2.hide();
        category_list_more.removeClass('.category-list-more-active');
    });

    // visual slide
    let sw_visual = new Swiper('.sw-visual', {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        Loop: true,
        navigation: {
            nextEl: ".sw-visual-next",
            prevEl: ".sw-visual-prev",
        },
        pagination: {
            el: ".sw-visual-pg",
            type: "fraction",
        },
    });



    // sw-visual 콘트롤
    // 버튼을 저장한다.
    let sw_visual_bt = $('.sw-visual-bt');
    sw_visual_bt.click(function () {
        $(this).toggleClass('sw-visual-bt-play');
        // 현재 아이콘 상태를 임시로 저장한다.
        let temp = $(this).hasClass('sw-visual-bt-play');
        console.log(temp);

        // 아이콘이 > 이라면 temp ==true
        // 멈추고

        // 그렇지 않다면 (||)
        // 자동실행하라

        if (temp == true) {
            sw_visual.autoplay.stop();
        } else {
            sw_visual.autoplay.start();
        }

    });

    // 알뜰물품 슬라이드
    new Swiper('.sw-sales', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-sales-next",
            prevEl: ".sw-sales-prev",
        },
        pagination: {
            el: ".sw-sales-pg",
            type: "fraction",
        },
    });

    // 추천상품 슬라이드
    new Swiper('.sw-pick', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-pick-next",
            prevEl: ".sw-pick-prev",
        },
        pagination: {
            el: ".sw-pick-pg",
            type: "fraction",
        },
    });

    // 인기상품 슬라이드
    new Swiper('.sw-famous', {
        slidesPerView: 7,
        slidesPerGroup: 7,
        spaceBetween: 10,
        navigation: {
            nextEl: ".sw-famous-next",
            prevEl: ".sw-famous-prev",
        },
    });

    // famous를 위한 기능
    let famous_good_box = $('.famous .good-box');
    $.each(famous_good_box, function () {
        // good-box-special 찾아본다.
        let temp = $(this).find('.good-box-special');
        if (temp.length > 0) {

        } else {
            $(this).find('.good-box-price').css('bottom', '3rem');
            $(this).find('.good-box-cart').css('bottom', '3rem');
        }

    });
    // 목록을 보여주는 버튼들
    let famous_icon = $('.sw-famous .swiper-slide>a');
    // 목록을 찾아라
    let famous_good_list = $('.famous .good-list');
    famous_good_list.eq(0).show();

    $.each(famous_icon, function (index, item) {
        $(this).click(function (event) {
            // a 태그의 href를 막는다.
            event.preventDefault();
            famous_good_list.hide();
            famous_good_list.eq(index).show();
        });
    });

    // 브랜드관 슬라이드
    new Swiper('.sw-brand', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-brand-next",
            prevEl: ".sw-brand-prev",
        },
        pagination: {
            el: ".sw-brand-pg",
            type: "fraction",
        },
    });

    // 배너 슬라이드
    new Swiper('.sw-banner', {
        slidesPerView: 2,
        slidesPerGroup: 1,
        loop: true,
        navigation: {
            nextEl: ".sw-banner-next",
            prevEl: ".sw-banner-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    // 레시피 스크롤바
    $(".recipe-con-scroll").niceScroll({
        cursoropacitymax: 0.4,
        cursorwidth: "0.8rem",
    });

    // 후기영역 슬라이드
    new Swiper('.sw-review', {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 16,
        navigation: {
            nextEl: ".sw-review-next",
            prevEl: ".sw-review-prev",
        },
        pagination: {
            el: ".sw-review-pg",
            type: "fraction",
        },
    });

    // recipe 장바구니 기능
    // recipe-con-item-bt 를 저장
    let recipe_con_item_bt = $('.recipe-con-item-bt');
    // recipe-con-count 를 저장
    let recipe_con_count = $('.recipe-con-count .count-recipe');
    let recipe_con_count_bt = $('.recipe-con-count-bt');
    // recipe-con-buy b 를 저장
    let recipe_con_buy_b = $('.recipe-con-buy b');

    $.each(recipe_con_item_bt, function (index, item) {
        $(this).click(function () {
            $(this).toggleClass('recipe-con-item-bt-active');
            카운트();
        });
    });

    function 카운트() {
        // hasClass('recipe-con-item-bt-active');
        // 1  총 몇개를 가지고 있는가?
        let total = 5;
        let minus = 0;

        // 전체 금액을 계산한다.
        let total_money = 0;

        $.each(recipe_con_item_bt, function (index, item) {
            let temp = $(this).hasClass('recipe-con-item-bt-active');
            if (temp == true) {
                minus = minus + 1;
            }

            // 전체 금액을 계산한다.
            let temp_money = $(this).attr('data-money');
            // 글자를 숫자로 바꾸어야 한다.
            temp_money = parseInt(temp_money);

            if (temp == false) {
                total_money = total_money + temp_money;
            }
        });

        // 가격을 표시한다.
        total_money = total_money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        recipe_con_buy_b.text(total_money);

        total = total - minus;
        // recipe_con_count.text('전체 선택 ' + total + '개');
        recipe_con_count.text(`전체 선택 ${total}개`);

        if (total != 5) {
            recipe_con_count_bt.addClass('recipe-con-count-bt-active');
        } else {
            recipe_con_count_bt.removeClass('recipe-con-count-bt-active');
        }
    }
    // 처음에 시작하면 가격을 표시해야 한다.
    // 그래서 선택을 하든 아니든 함수를 실행해줘야 한다.
    카운트();

    recipe_con_count_bt.click(function () {
        $(this).click(function () {
            recipe_con_count_bt.toggleClass('recipe-con-count-bt-active');
            let temp = $(this).hasClass('recipe-con-count-bt-active');
            if (temp == true) {
                해제();
            } else {
                모두();
            }
            // 금액을 다시 계산
            카운트();
        });
    });

    function 해제() {
        $.each(recipe_con_item_bt, function (index, item) {
            $(this).addClass('recipe-con-item-bt-active');
        });
        recipe_con_count.text('전체 선택 0개');
    }

    function 모두() {
        $.each(recipe_con_item_bt, function (index, item) {
            $(this).removeClass('recipe-con-item-bt-active');
        });
        recipe_con_count.text('전체 선택 5개');
    }

    // allmap 기능 관련
    // .sitemap
    let sitemap = $('.sitemap');
    // .sitemap > a 
    let sitemap_a = $('.sitemap > a');
    // .allmap
    let allmap = $('.allmap');
    // .allmap-close
    let allmap_close = $('.allmap-close');
    // .sitemap > a 를 클릭하면 
    sitemap_a.click(function(event){
        // href 막기
        event.preventDefault();
        allmap.stop().slideToggle();
        // 색상넣기
        sitemap.toggleClass('sitemap-active');
    });

    // .allmap_close 클릭하면
    allmap_close.click(function(){
        allmap.stop().slideUp();
        // 색상빼기
        sitemap.removeClass('sitemap-active');
    });


});