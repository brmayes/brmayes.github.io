// Switches out the main site nav#access with a select box
// Minimizes nav#access on mobile devices
// Now lets load the JS when the DOM is ready
jQuery(document).ready(function($){

    // Generic show and hide wrapper class
    window.show_hide_wrapper = function(){
        $(".wrap").on({
            mouseover: function() {
                $(".hide", this).stop().fadeTo(300, 1.0); // This sets 100% on hover
                $(".fade", this).stop().fadeTo(300, 0.7); // This sets 70% on hover
                $(".show", this).stop().fadeTo(300, 0.2); // This sets 100% on hover

            },
            mouseout: function() {
                $(".hide", this).stop().fadeTo(300, 0); // This should set the opacity back to 0% on mouseout
                $(".fade", this).stop().fadeTo(300, 1.0); // This sets 80% on hover
                $(".show", this).stop().fadeTo(300, 1.0); // This should set the opacity back to 0% on mouseout
            }
        });
    }
    show_hide_wrapper();


    // Responsive Menu

	var $masthead = $( '#branding' ),
        timeout = false;

    $.fn.smallMenu = function() {
        $masthead.find( '.site-navigation' ).removeClass( 'main-navigation' ).addClass( 'main-small-navigation' );
        $masthead.find( '.site-navigation h1' ).removeClass( 'assistive-text' ).addClass( 'menu-toggle' );

        $( '.menu-toggle' ).unbind( 'click' ).click( function() {
            $masthead.find( '.menu' ).toggle();
            $( this ).toggleClass( 'toggled-on' );
        } );
    };

    // Check viewport width on first load.
    if ( $( window ).width() < 600 )
        $.fn.smallMenu();

    // Check viewport width when user resizes the browser window.
    $( window ).resize( function() {
        var browserWidth = $( window ).width();

        if ( false !== timeout )
            clearTimeout( timeout );

        timeout = setTimeout( function() {
            if ( browserWidth < 600 ) {
                $.fn.smallMenu();
            } else {
                $masthead.find( '.site-navigation' ).removeClass( 'main-small-navigation' ).addClass( 'main-navigation' );
                $masthead.find( '.site-navigation h1' ).removeClass( 'menu-toggle' ).addClass( 'assistive-text' );
                $masthead.find( '.menu' ).removeAttr( 'style' );
            }
        }, 200 );
    } );

    // Tabs

	var tabs = $('dl.tabs');
		tabsContent = $('ul.tabs-content');

	tabs.each(function(i) {
		//Get all tabs
		var tab = $(this).children('dd').children('a');
		tab.click(function(e) {

			//Get Location of tab's content
			var contentLocation = $(this).attr("href");
			contentLocation = contentLocation + "tab";

			//Let go if not a hashed one
			if(contentLocation.charAt(0)=="#") {

				e.preventDefault();

				//Make Tab Active
				tab.removeClass('active');
				$(this).addClass('active');

				//Show Tab Content
				$(contentLocation).parent('.tabs-content').children('li').css({"display":"none"});
				$(contentLocation).css({"display":"block"});

			}
		});
	});

	$(".post").fitVids();
	$(".single-format-gallery .gallery").find("br").remove();
});