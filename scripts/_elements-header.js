(function($) {

    $('.elements-header__link').on('click', function (event) {
        event.preventDefault();

        /* Сначала закрываем бургердигт */
        closeBurger();

        /* Якорь */
        const $target = $( $(this).attr('href') );
        const headerHeight = ($('.elements-header__desktop-panel').css('position') === 'fixed' || $('.elements-header__mobile-panel').css('position') === 'fixed') ? $('.elements-header').outerHeight() : 0;

        if( $target.length ) {
            $('html, body').animate({
                scrollTop: $target.offset().top - headerHeight
            }, 800);
        }

    });



    const $html = $('html');
    let rememberedPageScrollPosition = 0;

    function expandBurger() {
        rememberedPageScrollPosition = $(window).scrollTop(); /* Запомнить скролл пользователя, так как display: none на .page его сбросит (смотри .burger-expanded .page) */
        $html.addClass('burger-expanded');
        $(window).scrollTop(0); /* При открытии меню его скролл должен быть в начале */
    }

    function closeBurger() {
        $html.removeClass('burger-expanded');
        $('.nav__item').removeClass('nav__item--expanded');
        $(window).scrollTop(rememberedPageScrollPosition);/* При закрытии меню скролл должен быть там, где пользователь его оставил */
    }

    $('.elements-header__burger').on('click', function () {

        if( ! $html.hasClass('burger-expanded') ) {
            expandBurger();
        } else {
            closeBurger();
        }
    });


})(jQuery);
