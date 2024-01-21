(function($) {

    $('.collapse__handler').on('click', function () {
        $(this).parents('.collapse').toggleClass('collapse--expanded');
    });

})(jQuery);
