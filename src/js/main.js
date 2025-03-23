$(".header-burger").on("click", function () {
    $(".header-menu").slideToggle();
    $(this).toggleClass("active");
});

$(".header-menu-nav-item-header").on("click", function () {
    $(this).find(".header-menu-nav-item-icon").toggleClass("header-menu-nav-item-icon-rotate");
    $(this).next(".header-menu-nav-item-list").toggleClass("is-none");
});

$(".info-select-btn").on("click", function () {
    const data_info = $(this).attr("data-info");
    const info = $(this).closest(".info");

    $(this).siblings().removeClass("info-select-btn-active");
    $(this).addClass("info-select-btn-active");

    info.find('.info-container:not(".is-none")').addClass("is-none");
    info.find(`.info-container[data-info="${data_info}"]`).removeClass("is-none");
});

$(".info-btn-text").on("click", function () {
    $(this).addClass("is-none");
    $(this).prev(".info-text").addClass("is-none");
    $(this).next(".info-hide-text-container").removeClass("is-none");
});

$(".faq-item-question").on("click", function () {
    $(this).find(".faq-item-question-icon").toggleClass("rotate");
    $(this).next(".faq-item-answer").slideToggle(200);
});

const swiper = new Swiper(".interesting-swiper", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    spaceBetween: 24,
});
