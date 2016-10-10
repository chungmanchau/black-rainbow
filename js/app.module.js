(function() {
	var myApp = angular.module('blackRainbow', ['ui.router', 'ngAnimate']);

	myApp.config(function($stateProvider, $urlRouterProvider) {
		var aboutState = {
			name: 'about',
			url: '/about',
			templateUrl: 'js/templates/about.html'
		}

		var servicesState = {
			name: 'services',
			url: '/services',
			templateUrl: 'js/templates/services.html'
		}

		var workState = {
			name: 'work',
			url: '/work',
			templateUrl: 'js/templates/work.html'
		}

		var contactState = {
			name: 'contact',
			url: '/contact',
			templateUrl: 'js/templates/contact.html'
		}
		var braywealthState = {
			name: 'braywealth',
			url: '/braywealth',
			templateUrl: 'js/templates/braywealth.html'
		}
		var colorPaletteState = {
			name: 'color-palette',
			url: '/color-palette',
			templateUrl: 'js/templates/color-palette.html'
		}
		var cssWavesState = {
			name: 'css-waves',
			url: '/css-waves',
			templateUrl: 'js/templates/css-waves.html'
		}
		var hexagonalPickerState = {
			name: 'hexagonal-picker',
			url: '/hexagonal-picker',
			templateUrl: 'js/templates/hexagonal-picker.html'
		}
		var parallaxTestState = {
			name: 'parallax-test',
			url: '/parallax-test',
			templateUrl: 'js/templates/parallax-test.html'
		}
		var morphingDevicesState = {
			name: 'morphing-devices',
			url: '/morphing-devices',
			templateUrl: 'js/templates/morphing-devices.html'
		}
		var timeZoneState = {
			name: 'time-zone',
			url: '/time-zone',
			templateUrl: 'js/templates/time-zone.html'
		}
		var menuConceptState = {
			name: 'menu-concept',
			url: '/menu-concept',
			templateUrl: 'js/templates/menu-concept.html'
		}

		$stateProvider.state(aboutState);
		$stateProvider.state(servicesState);
		$stateProvider.state(workState);
		$stateProvider.state(contactState);
		$stateProvider.state(braywealthState);
		$stateProvider.state(colorPaletteState);
		$stateProvider.state(cssWavesState);
		$stateProvider.state(hexagonalPickerState);
		$stateProvider.state(parallaxTestState);
		$stateProvider.state(morphingDevicesState);
		$stateProvider.state(timeZoneState);
		$stateProvider.state(menuConceptState);
		$urlRouterProvider.otherwise('/');
	});
})();
