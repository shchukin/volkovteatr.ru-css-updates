(function($) {

    const $html = $('html');
    let rememberedPageScrollPosition = 0;

    $('.elements-header__burger').on('click', function () {

        if( ! $html.hasClass('burger-expanded') ) {
            rememberedPageScrollPosition = $(window).scrollTop(); /* Запомнить скролл пользователя, так как display: none на .page его сбросит (смотри .burger-expanded .page) */
            $html.addClass('burger-expanded');
            $(window).scrollTop(0); /* При открытии меню его скролл должен быть в начале */
        } else {
            $html.removeClass('burger-expanded');
            $('.nav__item').removeClass('nav__item--expanded');
            $(window).scrollTop(rememberedPageScrollPosition);/* При закрытии меню скролл должен быть там, где пользователь его оставил */
        }
    });

    $('.elements-header__link').on('click', function () {
        $html.removeClass('burger-expanded');
    });

})(jQuery);
