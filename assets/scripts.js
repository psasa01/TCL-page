
if ($(window).width() > 960) {
	$('#fullpage').addClass('fpage');
} else {
	$('#fullpage').addClass('nofpage');
}

$('.hamburger').click(function () {
	$('.hamburger').toggleClass('is-active');
	$('.mobile-links').toggleClass('mobile-links-active');
})

$('.mobile-link').click(function () {
	$('.hamburger').toggleClass('is-active');
	$('.mobile-links').toggleClass('mobile-links-active');
})

$('.iframe').click(function () {
	$('iframe').css('pointerEvents', 'auto')
})

if ($('#mobile-links').hasClass('mobile-links-active')) {

	$(document.body).click(function () {
		$('.mobile-links').toggleClass('mobile-links-active');

		$(".mobile-links").click(function (e) {
			e.stopPropagation(); // this stops the event from bubbling up to the body
		});
	});
}

$('a.menu').click(function () {
	$('a.menu').removeClass("activen");
	$(this).addClass("activen");
});

new fullpage('.fpage', {
	//options here
	menu: '#myMenu',
	lockAnchors: false,
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',
	anchors: ['section0', 'section1', 'section2', 'section3'],
	autoScrolling: true,
	scrollHorizontally: true,
	loopHorizontal: false,
	responsiveWidth: 960
});

//methods
fullpage_api.setAllowScrolling(true);



