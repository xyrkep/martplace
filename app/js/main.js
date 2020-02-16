$(function(){

$('.search__inner-btn_view').on('click', function(){
    $('.search__inner-btn_view').addClass('search__inner-btn_active');
    $('.search__inner-btn_popular').addClass('search__inner-btn');
    $('.search__inner-btn_view').removeClass('search__inner-btn');
    $('.search__inner-btn_popular').removeClass('search__inner-btn_active');
});

$('.search__inner-btn_popular').on('click', function(){
    $('.search__inner-btn_popular').addClass('search__inner-btn_active');
    $('.search__inner-btn_view').addClass('search__inner-btn');
    $('.search__inner-btn_popular').removeClass('search__inner-btn');
    $('.search__inner-btn_view').removeClass('search__inner-btn_active');
});

});
