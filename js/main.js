$(function() {

	initialise();
	
	$('.sidebar').click(function() {
		toggleSidebar();
	});

	function toggleSidebar() {
		$('.sidebar').toggleClass('active');
		$('.sidebar').toggleClass('collapse');
		$('.main').toggleClass('open');
		$('.main').toggleClass('active');
	}

	function initialise() {
		$('.sidebar').addClass('initial-state');
		setTimeout(function() {
			$('.sidebar').addClass('entering');
			defaultLoad();
		}, 500)	
	}

	function defaultLoad() {
		setTimeout(function() {
			$('.sidebar').removeClass('initial-state entering');
			$('.sidebar').addClass('active');
			menuLoad();
		}, 1800)
	}
	
});