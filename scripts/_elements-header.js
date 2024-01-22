(function($) {

    /* Бургер */

    const $html = $('html');
    let rememberedPageScrollPosition = 0;

    function expandBurger() {
        rememberedPageScrollPosition = $(window).scrollTop(); /* Запомнить скролл пользователя, так как display: none на .page его сбросит (смотри .burger-expanded .page) */
        $html.addClass('burger-expanded');
        $(window).scrollTop(0); /* При открытии меню его скролл должен быть в начале */
    }

    function closeBurger() {
        if( $html.hasClass('burger-expanded') ) {
            $html.removeClass('burger-expanded');
            $(window).scrollTop(rememberedPageScrollPosition);/* При закрытии меню скролл должен быть там, где пользователь его оставил */
        }
    }

    $('.elements-header__burger').on('click', function () {

        if( ! $html.hasClass('burger-expanded') ) {
            expandBurger();
        } else {
            closeBurger();
        }
    });



    /* Якорь */

    $('.elements-header__link').on('click', function (event) {
        event.preventDefault();


        /* Сначала закрываем бургер */
        closeBurger();


        /* Непосредственно якорь */

        const $target = $( $(this).attr('href') );
        const headerHeight = ($('.elements-header__desktop-panel').css('position') === 'fixed' || $('.elements-header__mobile-panel').css('position') === 'fixed') ? $('.elements-header').outerHeight() : 0;

        if( $target.length ) {
            $('html, body').animate({
                scrollTop: $target.offset().top - headerHeight
            }, 800);
        }

    });


})(jQuery);
