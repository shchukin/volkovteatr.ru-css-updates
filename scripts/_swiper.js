scheduleDayList = new Swiper(".swiper--init-partners", {
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: {
        forceToAxis: true,
    },
    slidesPerView: 3,
    slidesPerGroup: 2,
    spaceBetween: 16,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 3,
            spaceBetween: 24,
        },
    }
});
