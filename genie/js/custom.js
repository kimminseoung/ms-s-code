$(function () {
  // ranking top 10
  $('.hd_rnk').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    verticalSwiping: true,
    vertical: true
  });
 
  // slick 01
  $('.welcome-slick').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  $('.hotalbum-inner').slick({
    dots: false,
		autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1
  });
	
	$('.pageup').click(function(){
		$('aside').toggleClass('active')
	})
	$('.hd_btn span').click(function(){
		$('.lang-modal').addClass('active')
		$('body').addClass('active')
	})
	$('.lang-modal-overlay').click(function(){
		$('.lang-modal').removeClass('active')
		$('body').removeClass('active')
	})
	$('.lang-close').click(function(){
		$('.lang-modal').removeClass('active')
		$('body').removeClass('active')
	})
	$('.event-close').click(function(){
		$('.event-modal').addClass('active')
		$('body').removeClass('active')
	})

	$('.music-modal').click(function(){
		$('.musicvideo-modal').addClass('active')
		$('body').addClass('active')
	})
	$('.musicvideo-close').click(function(){
		$('.musicvideo-modal').removeClass('active')
		$('body').removeClass('active')
	})
	$('.musicvideo-modal-overlay').click(function(){
		$('.musicvideo-modal').removeClass('active')
		$('body').removeClass('active')
	})
	$('.optionbox').mouseenter(function(){
		$(this).children('.option-menu').addClass('active')
	})
	$('.option-menu').mouseleave(function(){
		$(this).removeClass('active')
	})

  // live timer
  function timer() {
    var day = new Date();
    var y = day.getFullYear();
    var m = day.getMonth()+1;
    var d = day.getDate();
  /*   var t = day.getHours();
    var min = day.getMinutes(); */
    document.getElementById("timer").innerHTML = y+"."+m+"."+d;
    // document.getElementById("timer").innerHTML = y+"."+m+"."+d+''+t+":"+min;
  }
  timer();
})

  

