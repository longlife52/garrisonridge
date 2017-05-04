
$(document).ready(function() {

    //mmenu
        $('#menu').mmenu({
        // options
        // preventDefault is needed because href points to # on same page
        // if menu linked to other pages, would not need to set
        // preventDefault to false
        //close: true needed because when did above, only, menu stayed open
            onClick: {
                close: true,
                preventDefault: false
            }
        }, {

        // configuration
            offCanvas: {
                pageSelector: '#wrapper'
            }
        });

        var mainMenu = $('#menu').data('mmenu');

        $('#menu-button').click(function () {
            mainMenu.open();
        });

        //owlcarousel
        $('.owl-carousel').owlCarousel();

        //for fancybox
        $('.fancybox').fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                media: {}
            }
        });


});
