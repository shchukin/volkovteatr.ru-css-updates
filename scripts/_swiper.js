scheduleDayList = new Swiper(".elements-swiper", {
    navigation: {
        prevEl: '.elements-swiper-button-prev',
        nextEl: '.elements-swiper-button-next',
    },
    pagination: {
        el: ".elements-swiper-pagination",
        clickable: true,
    },
    mousewheel: {
        forceToAxis: true,
    },
    slidesPerView: 4,
    slidesPerGroup: 3,
    spaceBetween: 16,
    breakpoints: {
        1500: {
            slidesPerView: 5,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
    }
});
