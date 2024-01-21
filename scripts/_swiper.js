scheduleDayList = new Swiper(".swiper", {
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
