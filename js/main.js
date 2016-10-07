$(function() {

	entranceLoad();

	function entranceLoad() {
		setTimeout(function() {
			$('.menu, .logo, .author').addClass('load');
			defaultLoad();
		}, 500)	
	}

	function defaultLoad() {
		setTimeout(function() {
			$('.menu, .logo, .author').removeClass('enter load');
			$('.nav, .hand').addClass('enter');
			menuLoad();
		}, 1800)
	}

	function menuLoad() {
		setTimeout(function() {
			$('.menu').addClass('loaded')
		} ,600)
	}
	
});