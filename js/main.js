(function ($) {
  "use strict";

  //Start wow.js
  new WOW().init();

  // Hide Loading Animation after page is load
  $(window).on('load', function () {
    $(".spinner-overlay").fadeOut("slow");
  });

  // Shrink Nav After User Scroll
  $(function () {
    var nav = $("nav");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
        nav.removeClass("padding-25-15");
      } else {
        nav.addClass("padding-25-15");
      }
    });
  });

  //Show Burger Menu and Mobile Navigation after click
  $('.burger, .overlay').click(function () {
    $('.burger').toggleClass('clicked');
    if ($(window).width() < 991.8 && !$(".sidenav").hasClass("side")) {
      $(".sidenav").addClass("side");
    }else {
      $(".sidenav").removeClass("side");
    }
  });
  //Close sidebar if its open and window width is larger then 767.8px
  $(window).resize(function () {
    if ($(window).width() > 974.8) {
      $(".sidenav").removeClass("side");
      $('.burger').removeClass('clicked');
    }
  })  

  //Scroll To Section of page
  $('a[href^="#"]').click(function () {
    var target = $(this.hash);
    if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
    if (target.length == 0) target = $('html');
    $(".sidenav").removeClass("side");
    $('.burger').removeClass('clicked');
    $('html, body').animate({ 
      scrollTop: target.offset().top - 100 
    }, 1000);
    return false;
  });

  //Slick Drag Slider for testimonials
  $('.testimonials-slider').slick({
    prevArrow: false,
    nextArrow: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false
  });

  //Slick Drag Slider for portfolio
  $('.portfolio-gallery').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    prevArrow: "<button type='button' class='slick-prev pull-left portfolio-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right portfolio-next'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 991.8,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 767.8,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
})(jQuery);







