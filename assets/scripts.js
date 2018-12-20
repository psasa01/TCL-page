
if ($(window).width() > 960) {
	$('#fullpage').addClass('fpage');
} else {
	$('#fullpage').addClass('nofpage');
}

if ($(window).width() < 960) {
	$('.saznajte-vise').removeClass('float-right');
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

$('.otvori-garanciju').on('click', function () {
	$('.garancija-mobile-content').addClass('garancija-active');
	$('.otvori-garanciju').addClass("otvori-garanciju-hide");
})

$('.btn-povratak').on('click', function () {
	$('.garancija-mobile-content').removeClass('garancija-active');
	$('.otvori-garanciju').removeClass("otvori-garanciju-hide");
})

$('.button-registracija').on('click', function () {
	$()
})

$(window).scroll(function () {

	var fromBot = $(document).height() - 100 - $(window).height();

	if ($(this).scrollTop() > 200 && $(document).scrollTop() < fromBot) {
		$('.garancija-mobile').show();
	} else {
		$('.garancija-mobile').hide();
	}
});

new fullpage('.fpage', {

	afterRender: function () {
		setInterval(function () {
			fullpage_api.moveSlideRight();
		}, 15000);
	},
	//options here
	menu: '#myMenu',
	lockAnchors: false,
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
	showActiveTooltip: false,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
	anchors: ['section0', 'section1', 'section2', 'section3'],
	autoScrolling: true,
	scrollHorizontally: true,
	continuousHorizontal: true,
	loopHorizontal: true,
	responsiveWidth: 960

});



//methods
fullpage_api.setAllowScrolling(true);



