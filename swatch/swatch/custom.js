$(function(){
  // lightgalley plungin
  lightGallery(document.getElementById('lightgallery'));
  lightGallery(document.getElementById('lightgallery1'));
  lightGallery(document.getElementById('lightgallery2'));
  // video modal
  $('.video-modal-btn').click(function () {
    $('body').addClass('active')
    $('.video-modal').addClass('active')
  })
  $('.video-close').click(function () {
    $('.video-modal').removeClass('active')
    $('body').removeClass('active')
  })
	 $('.video-modal').click(function () {
    $('.video-modal').removeClass('active')
    $('body').removeClass('active')
  })
  // favorite botton
  $('.love').click(function () {
    $('.love').toggleClass('active')
  })
  // up btn
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header').addClass('active')
      $('.up').addClass('active')
    } else {
      $('header').removeClass('active')
      $('.up').removeClass('active')
    }
  })
  // wow plungin	
  new WOW().init();
  // slick
  $('.welcome').slick({
    arrows:true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    fade: true,
    cssEase: 'linear',
    responsive: [ 
      { 
        breakpoint: 768,
        settings: {	
          infinite : true, 
          slidesToShow:1 
        } 
      }
    ]

  });
})
$(function(){
  $('.header').load('header.html',function(){
    // search modal
  $('.searchbtn').click(function () {
    $('.search').addClass('active')
    $('body').addClass('active')
  })
  $('.search-close').click(function () {
    $('.search').removeClass('active')
    $('body').removeClass('active')
  })
  $('.search-overlay').click(function(){
    $('.search').removeClass('active')
    $('body').removeClass('active')
  })

  $('.men').mouseenter(function(){
    $('.tab2').addClass('active')
    $('.header-menu').slideDown().addClass('active')
    $(this).siblings().mouseenter(function(){
      $('.tab2').removeClass('active')
    })
  })
  $('.woman').mouseenter(function(){
    $('.tab1').addClass('active')
    $('.header-menu').slideDown().addClass('active')
    $(this).siblings().mouseenter(function(){
      $('.tab1').removeClass('active')
    })
  })
  $('.kids').mouseenter(function(){
    $('.tab3').addClass('active')
    $('.header-menu').slideDown().addClass('active')
    $(this).siblings().mouseenter(function(){
      $('.tab3').removeClass('active')
    })
  })
  $('.collection').mouseenter(function(){
    $('.tab4').addClass('active')
    $('.header-menu').slideDown().addClass('active')
    $(this).siblings().mouseenter(function(){
      $('.tab4').removeClass('active')
    })
  })
  $('.all').mouseenter(function(){
    $('.tab5').addClass('active')
    $('.header-menu').slideDown().addClass('active')
    $(this).siblings().mouseenter(function(){
      $('.tab5').removeClass('active')
    })
  })
  $('.tab2').mouseleave(function(){
    $(this).removeClass('active')
    $('.header-menu').slideUp().removeClass('active')
  })
  $('.tab1').mouseleave(function(){
    $(this).removeClass('active')
    $('.header-menu').slideUp().removeClass('active')
  })
  $('.tab3').mouseleave(function(){
    $(this).removeClass('active')
    $('.header-menu').slideUp().removeClass('active')
  })
  $('.tab4').mouseleave(function(){
    $(this).removeClass('active')
    $('.header-menu').slideUp().removeClass('active')
  })
  $('.tab5').mouseleave(function(){
    $(this).removeClass('active')
    $('.header-menu').slideUp().removeClass('active')
  })
  $('.home , .custom').mouseenter(function(){
    $('.header-menu').removeClass('active')
  })
  // login start
  $('.loginbtn').mouseenter(function(){
      $(this).addClass('active')
      $('.login-menu').siblings('.cart-menu').removeClass('active')
      $('.login-menu').addClass('active')
    })
    $('.loginbtn').mouseleave(function(){
      $(this).removeClass('active')
      $('.login-menu').removeClass('active')
    })
    $('.login-menu').mouseenter(function(){
      $('.loginbtn').addClass('active')
      $(this).addClass('active')
    })
    $('.login-menu').mouseleave(function(){
      $('.loginbtn').removeClass('active')
      $(this).removeClass('active')
    })
  //login end
  // cart start
    $('.cartbtn').mouseenter(function(){
      $(this).addClass('active')
      $('.cart-menu').siblings('.login-menu').removeClass('active')
      $('.cart-menu').addClass('active')
    })
    $('.cartbtn').mouseleave(function(){
      $(this).removeClass('active')
    })
    $('.cart-menu').mouseenter(function(){
      $(this).addClass('active')
      $('.cartbtn').addClass('active')
    })
    $('.cart-menu').mouseleave(function(){
      $(this).removeClass('active')
      $('.cartbtn').removeClass('active')
    })
  // cart end
});
  $('.footer').load('footer.html');
})