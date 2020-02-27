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
        rating: 3.5,
        starWidth: "14px",
        readOnly: true,
        normalFill: "#fff",
        ratedFill: "#ffc000"
    });



    $('.weekly__slider').slick({
        prevArrow: '<button class="slick-arrow slick-prev lnr lnr-chevron-left"></button>',
        nextArrow: '<button class="slick-arrow slick-next lnr lnr-chevron-right"></button>',
    });

    $('select').styler();

    var mixer = mixitup('.newest__items');

});
