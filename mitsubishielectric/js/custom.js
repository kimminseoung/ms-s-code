$(function () {
  // navigation
  $('.hd_navi').mouseenter(function () {
    $('.submenu').stop().addClass('active');
    $('header').addClass('active');
  });
  $('.hd_navi').mouseleave(function () {
    $('.submenu').stop().removeClass('active');
    $('header').removeClass('active');
  })

  // navigation scroll
  $(window).scroll(function(){
    if($(this).scrollTop() < 10){
      $('header').removeClass('fiexd');
      $('#responsidebtn').removeClass('active');
      $('.hd_logo a img').attr("src","img/logo2.png")
    }else if($(this).scrollTop() > 100){
      $('header').addClass('fiexd');
      $('#responsidebtn').addClass('active');
      $('.hd_logo a img').attr("src","img/logo.png")
    }
  })

  // sitemap modal
  $('.hd_btn_sitemap').click(function(){
    $('.sitemap').addClass('active');
  })
  $('.closebtn').click(function(){
    $('.sitemap').removeClass('active');
  })

  // main banner
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 8000
    },
    breakpoints: {
      '767': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }
  });
  // gallery img
  var swiper1 = new Swiper('.project-gallery', {
    loop: true,
    autoplay: {
      delay: 2000
    },
    breakpoints: {
      '767': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '768': {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      '1024': {
        slidesPerView: 6,
        spaceBetween: 10,
      }
    }
  });
  
  new WOW().init();

  $('.responmenu ul li h6').click(function(){
    $(this).siblings('ul').slideToggle().toggleClass('open');
    $(this).parents('li').siblings().children('ul').slideUp().removeClass('open');
  })
  $('.responsidebtn').click(function(){
    $('.responsivebar').addClass('active')
    $('body').addClass('active')
  })
  $('.responbtnclose').click(function(){
    $('.responsivebar').removeClass('active')
    $('body').removeClass('active')
  })
})