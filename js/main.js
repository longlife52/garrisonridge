
$(document).ready(function() {
    //backstretch
    $.backstretch('images/white-wood.png');

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

        //scrollup - default elements listed - I may change them
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '300', // Distance from top before showing element (px)
            topSpeed: 300, // Speed back to top (ms)
            animation: 'fade', // Fade, slide, none
            animationInSpeed: 200, // Animation in speed (ms)
            animationOutSpeed: 200, // Animation out speed (ms)
            scrollText: 'scroll up', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
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

/* custom jQuery code on index.html page
that when hovered/mouseover - image changes
on mouseout - image returns to original. Used
for hover on resume button. id is placed on img
*/
    $('#resume').mouseover(function () {
        $(this).attr('src', 'images/resumebuttongreen.png');
    });

    $('#resume').mouseout(function () {
        $(this).attr('src', 'images/pdf-button.png');
    });
