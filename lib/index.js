$( document ).ready(function() {
  $( "#oh-hi" ).on({
      mouseenter: function() {
        $( '#initial' ).removeClass( "show-me" );
        $( '#initial' ).addClass( "hide-me" );
        $( '#hover' ).removeClass( "hide-me" );
        $( '#hover' ).addClass( "show-me" );
      },
      mouseleave: function() {
        $( '#hover' ).removeClass( "show-me" );
        $( '#hover' ).addClass( "hide-me" );
        $( '#initial' ).removeClass( "hide-me" );
        $( '#initial' ).addClass( "show-me" );
      }
  });
});
