$( document ).ready( () => {
    $( "a.page-scroll" ).bind( "click", ( event ) => {
        let element = $( event.currentTarget );
        $( "html, body" ).stop().animate( {
            scrollTop: $( $( element ).attr( "href" ) ).offset().top
        }, 1500, "easeInOutExpo" );
        event.preventDefault();
    } );

    $( ".navbar-collapse ul li a" ).click( ( event ) => {
        $(".navbar-toggle:visible").click();
    } );

    new WOW().init();
} );