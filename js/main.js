$(function() {

	entranceLoad();
	
	$('.menu, .logo, .nav__item').click(function() {
		openMain();
	});

	function openMain() {
		$('.sidebar').toggleClass('collapse');
		$('.main').toggleClass('open');
		$('.menu').removeClass('loaded');
		$('.main').toggleClass('active');
	}

	function entranceLoad() {
		setTimeout(function() {
			$('.menu, .logo, .author').addClass('load');
			defaultLoad();
		}, 500)	
	}

	function defaultLoad() {
		setTimeout(function() {
			$('.menu, .logo, .author').removeClass('enter load');
			$('.nav').addClass('enter');
			menuLoad();
		}, 1800)
	}

	function menuLoad() {
		setTimeout(function() {
			$('.menu').addClass('loaded')
		} ,600)
	}
	
});