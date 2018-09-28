(function($){
  $(function(){

    $('.sidenav').sidenav();
    // $('.parallax').parallax();
    $('.carousel').carousel({
      fullWidth: true,
      duration: 500
    });

    setTimeout(autoplay, 4500);
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 3000);
    }

  }); // end of document ready
})(jQuery); // end of jQuery name space


