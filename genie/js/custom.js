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
  // welcome section banner
  $('.welcome-slick').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
	// new album tab 
  $('.hotalbum-inner').slick({
    dots: false,
		autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1
  });
	// top botton
	$('.pageup').click(function(){
		$('aside').toggleClass('active')
	})
	// lang chioce modal 
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
	// event modal  
	$('.event-close').click(function(){
		$('.event-modal').addClass('active')
		$('body').removeClass('active')
	})
	// music video modal 
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
    document.getElementById("timer").innerHTML = y+"."+m+"."+d;
  }
  timer();

	// function event() {
	// 	if( $('.event-close').click(function(){
	// 		$('.event-modal').addClass('active');
	// 	})) {
	// 		setInterval(function(){
	// 			$('.event-modal').removeClass('active');
	// 		},259200);
	// 	}
	// }
	// event();
	var result = getCookie('popup0520');
	if (result == 'end') {
		 return false;
	}
	else {
		 window.open('popup', '/popup.html');
	}
	function setCookie(cname, value, expire) {
		var todayValue = new Date();
		todayValue.setDate(todayValue.getDate() + expire);
		document.cookie = cname + "=" + encodeURI(value) + "; expires=" + todayValue.toGMTString() + "; path=/;";
 }
 function getCookie(name) {
	var cookieName = name + "=";
	var x = 0;
	while ( x <= document.cookie.length ) {
		 var y = (x+cookieName.length);
		 if ( document.cookie.substring( x, y ) == cookieName) {
				if ((lastChrCookie=document.cookie.indexOf(";", y)) == -1)
					 lastChrCookie = document.cookie.length;
				return decodeURI(document.cookie.substring(y, lastChrCookie));
		 }
		 x = document.cookie.indexOf(" ", x ) + 1;
		 if ( x == 0 )
				break;
		 }
	return "";
}
$(function() {
	var closeTodayBtn = $('.closeTodayBtn');
	closeTodayBtn.click(function() {
		 setCookie( "popup20150530", "end" , 1);
		 window.close();
	});
});
})

  

