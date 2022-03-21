'use strict'
// Search Button
$(document).ready(function() {
    $('#header_search_item_box_BTN').on('click', function() {
        $('#header_search_form_BOX').toggle();
    });

});

$(document).ready(function() {
    //Team Member Slider
    $('.team-slider').slick({
        slidesToShow: 4,
        cssEase: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        easing: 'ease-in',
        dots: false,
        arrows: true,
        autoplay: true,
        nextArrow: '<i class="fas fa-chevron-right team_slide_arrow team_slide_arrow_next"></i>',
        prevArrow: '<i class="fas fa-chevron-left team_slide_arrow team_slide_arrow_prev"></i>',
    });
    // Veno Box Video CTA
    new VenoBox({
        selector: ".vdeo_cta_btn",
        autoplay: false,
    });
    //Client Review Slider
    $('.clnt_review_slider').slick({
        slidesToShow: 1,
        // cssEase: 'cubic-bezier(0.115, 1.15, 0.35, 1.15)',
        easing: 'ease-in',
        dots: false,
        arrows: true,
        autoplay: true,
        nextArrow: '<i class="fas fa-chevron-right Client_reviewSlideBtn Client_reviewSlideBtn_NextBtn "></i>',
        prevArrow: '<i class="fas fa-chevron-left Client_reviewSlideBtn Client_reviewSlideBtn_PrevBtn "></i>',
    });
    //Footer Slider
    $('.logo_slider').slick({
        slidesToShow: 6,
        // cssEase: 'cubic-bezier(0.115, 1.15, 0.35, 1.15)',
        easing: 'ease-in',
        dots: false,
        arrows: true,
        autoplay: true,
        nextArrow: '<i class="fas fa-chevron-right footer_slider_btn footer_slider_Nextbtn"></i>',
        prevArrow: '<i class="fas fa-chevron-left footer_slider_btn footer_slider_Prevbtn"></i>',
    });
});