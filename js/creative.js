(function($) {
  "use strict"; // Start of use strictjQuery
  // jQuery.noConflict();

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length)
      {
        var $secElm = $("section");
        $.each($secElm, function() {
          $(this).addClass("animeted-false");
        });

        $(this.hash).removeClass("animeted-false");
        
        var $t = $(this.hash).find(".viewed");
        // console.log("L: "+ $t.length);
        $.each($t, function(){
          var $tar = $(this);
          // console.log($tar);
          $tar.removeClass("viewed");
        });
        
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
      // below is my custom codes
      var $el = $(".viewed");
      $.each($el, function(){
          var $elm = $(this);
          $elm.removeClass("viewed");
      });
      var $secElm = $("section");
        $.each($secElm, function() {
          $(this).removeClass("animeted-false");
        });
        // end of my custom codes
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Magnific popup calls
  $('#portfolio-section').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

  
})(jQuery); // End of use strict