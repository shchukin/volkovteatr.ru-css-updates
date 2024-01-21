(function($) {

    const scrollSpeedPer100ms = 200; /* 200px per 100ms */

    $('.anchor').on('click', function (event) {
        event.preventDefault();

        const $target = $( $(this).attr('href') );
        const headerHeight = $('.elements-header').css('position') === 'fixed' ? $('.elements-header').outerHeight() : 0;
        const scrollDistance = $target.offset().top - $(this).offset().top - headerHeight;
        const animationDuration = Math.max(Math.abs(scrollDistance) / scrollSpeedPer100ms * 100, 300); /* Not less than 300ms (for short distance) */
        const scrollCoordinate = $target.offset().top - headerHeight;

        if( $target.length ) {
            $('html, body').animate({
                scrollTop: scrollCoordinate
            }, animationDuration);
        }
    });

})(jQuery);
