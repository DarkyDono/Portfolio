/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
    // Ifame Event Handler
    $(".first").on("click", function(){
      let url = '';
      $('#vtuber').attr('vid',$(this).attr('cid'));
      if(($(this).attr('cid'))==1){
        url = 'https://www.youtube.com/embed/G-pBKZlb5Wo';
        $("#portfolioModalLabel").html("Rogue Liliana");
        $("#vtuber").html("Vtuber - Rogue Liliana").attr("href", "https://rogueliliana.com");
        $("#artist").html("Artist - Ji Kim").attr("href", "http://jikim.carrd.co");
      } else if(($(this).attr('cid'))==2){
        $("#portfolioModalLabel").html("Kitsune");
        url = 'https://www.youtube.com/embed/CLV3zEMcPlw';
        $("#vtuber").html("Vtuber - Kitsune ").attr("href", "https://twitter.com/AikoKitome");
        $("#artist").html("Artist - Rentya").attr("href", "https://twitter.com/ren_rentya");
      }else if(($(this).attr('cid'))==3){
        $("#portfolioModalLabel").html("Zephyr Koban");
        url = 'https://www.youtube.com/embed/805Z3WLlzN0';
        $("#vtuber").html("Vtuber - Zephyr Koban").attr("href", "https://www.twitch.tv/ZephyrKoban");
        $("#artist").html("Artist - JuberiiArt").attr("href", "https://twitter.com/JuberiiArt");
      }
      else if(($(this).attr('cid'))==4){
        $("#portfolioModalLabel").html("Octavia Astra");
        url = 'https://www.youtube.com/embed/S8yeG3kxnRM';
        $("#vtuber").html("Vtuber - Octavia Astra").attr("href", "https://www.twitch.tv/octaviaastra");
        $("#artist").html("Artist - Ji Kim").attr("href", "http://jikim.carrd.co");
      }else if(($(this).attr('cid'))==5){
        $("#portfolioModalLabel").html("Mellowdius");
        url = 'https://www.youtube.com/embed/oYGqo5OjDlo';
        $("#vtuber").html("Vtuber - Mellowdius ").attr("href", "https://www.twitch.tv/mellowdius");
        $("#artist").html("Artist - Ji Kim").attr("href", "http://jikim.carrd.co");
      }else{
        $("#portfolioModalLabel").html("Ellcrys");
        url = 'https://www.youtube.com/embed/oYGqo5OjDlo';
        $("#vtuber").html("Vtuber - Ellcrys ").attr("href", "https://www.twitch.tv/ellcrysvt");
        $("#artist").html("Artist - cheeren_art").attr("href", "https://cheerenart.carrd.co");
      }
      url += '?autoplay=1&mute=1&loop=1';
      $("#iframe").attr('src',url);
      $('#portfolioModal').modal('show');
    });
    $('#vtuber').click(function(){
        window.open($("#vtuber").attr('href'), "_blank");

    });
    $('#artist').click(function(){
        window.open($("#artist").attr('href'), "_blank");

    });
  })(jQuery); // End of use strict
