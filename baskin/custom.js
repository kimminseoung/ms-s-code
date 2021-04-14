// detail page info accodinon
$(function () {
	$('.detail-acodion div h3').click(function () {
		$(this).siblings('ul').toggleClass('active')
		$(this).parent().siblings().children('ul').removeClass('active')
		$(this).toggleClass('active')
		$(this).parent().siblings().children('h3').removeClass('active')
	});
})
// detail-page recommnd menu
$(function () {
	$('.detail-items').slick({
		arrows: false,
		dots: true
	});
})

// index-page tigger
$(function () {
	$('.detail-hambtn').click(function () {
		$(this).toggleClass('active');
		$('.sidebar').toggleClass('active');
		$('body').toggleClass('active');
	});

	// sidebar accodinon
	$('.container .sidebar-menu ul li h1').click(function () {
		$(this).parent().siblings().children('h1').removeClass('active')
		$(this).parent().siblings().children('div').slideUp().removeClass('active')
		$(this).toggleClass('active')
		$(this).siblings('div').slideToggle().toggleClass('active')
	})
})

// index page swiper slide
$(function () {
	var swiper = new Swiper('.swiper-container', {
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		}
	});

})
// wow reveal js
$(function () {
	wow = new WOW({
		boxClass: 'wow', 
		animateClass: 'animated', 
		offset: 0, 
		mobile: true,
		live: true
	})
	wow.init();
})
