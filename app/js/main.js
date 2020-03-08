$(function () {

    $('.search__inner-btn_view').on('click', function () {
        $('.search__inner-btn_view').addClass('search__inner-btn_active');
        $('.search__inner-btn_popular').addClass('search__inner-btn');
        $('.search__inner-btn_view').removeClass('search__inner-btn');
        $('.search__inner-btn_popular').removeClass('search__inner-btn_active');
    });

    $('.search__inner-btn_popular').on('click', function () {
        $('.search__inner-btn_popular').addClass('search__inner-btn_active');
        $('.search__inner-btn_view').addClass('search__inner-btn');
        $('.search__inner-btn_popular').removeClass('search__inner-btn');
        $('.search__inner-btn_view').removeClass('search__inner-btn_active');
    });

    $('.rate-star').rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true,
        normalFill: "#fff",
        ratedFill: "#ffc000",
        spacing: "3px"
    });

    $('.weekly__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
    });

    $('.followers__slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        //        variableWidth: true,
        //        centerMode: false,
        prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>'
    });

    $(window).on("load", function () {
        $(".weekly__slider-text").mCustomScrollbar({
            theme: "inset-2-dark"
        });
    });


    $('.menu__list-item').hover(function () {
        $('.circle__menu').addClass('animated fadeIn');
    }, function () {
        $('.circle__menu').removeClass('animated fadeIn');
    });

    $('.header__user-item').hover(function () {
        $('.drop__menu').addClass('animated fadeIn');
    }, function () {
        $('.drop__menu').removeClass('animated fadeIn');
    });

    $('.newest__item-images').hover(function () {
        $('.newest__item-more').addClass('animated fadeIn');
    }, function () {
        $('.newest__item-more').removeClass('animated fadeIn');
    });

    $('select').styler();

    new WOW().init();

    var mixer = mixitup('.newest__items');

});
