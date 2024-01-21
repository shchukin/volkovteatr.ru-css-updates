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
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 16,
    breakpoints: {
        600: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 16,
        },
        900: {
            slidesPerView: 4,
            slidesPerGroup: 3,
            spaceBetween: 16,
        },
        1200: { /* Здесь так же 4-ре слайда, как и выше, но это уже десктопные, увеличенные слайды. И параметр spaceBetween больше  */
            slidesPerView: 4,
            slidesPerGroup: 3,
            spaceBetween: 24,
        },
    }
});
