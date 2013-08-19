(function ($) {
jQuery(document).ready(function(){

	// Navigation
    if ( jQuery(window).width() <= 768 ) {
        jQuery( '#header ul.menu' ).hide();
    }
	jQuery( '.site-navigation h1.assistive-text' ).click(function(e) {
        jQuery( '#header ul.menu' ).slideToggle();
    });

    jQuery( 'body' ).fitVids();

    // Fix the post box when scrolling
    var breakpoint  = 1200;
    var bh          = $('body').height();
    var wh          = $(window).height();
    var pbh         = $('#postbox .postboxcontent').height();
    var pos         = $('#postbox .postboxcontent').position();

    if (jQuery(window).width() > breakpoint && wh > pbh ) {

        $(window).scroll(function() {

            var c = $(document).scrollTop();
            var b = $(window).height();
            var w = $(document).width();

            if (jQuery(window).width() > breakpoint) {
                if (c > -120+pos.top){
                    $('#postbox .postboxcontent').css('position','fixed').css('width',$('#postbox').width()).addClass('fixed');
                } else {
                    $('#postbox .postboxcontent').removeAttr('style').removeClass('fixed');
                }
            } else {
               $('#postbox .postboxcontent').removeAttr('style').removeClass('fixed');
            }

        });
        $(window).resize(function(){
            if (jQuery(window).width() > breakpoint) {
                $('#postbox .postboxcontent').removeAttr('style').removeClass('fixed');
            } else {
                $('#postbox .postboxcontent').css('width',$('#postbox').width());
            }
        });
    }

    // Post submit button scrolls to top
    jQuery( '#postbox .inputarea textarea' ).click(function () {
        jQuery( 'body,html' ).animate({
            scrollTop: 0
        }, 800);
        return false;
    });

});
jQuery(window).resize(function(){

    // Navigation
    if ( jQuery(window).width() > 768 ) {
        jQuery( '#header ul.menu' ).show();
    } else {
        jQuery( '#header ul.menu' ).hide();
    }

});
}(jQuery));