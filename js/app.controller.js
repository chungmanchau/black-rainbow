(function() {
	'use strict';

	angular.module('blackRainbow')
	.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$timeout'];

	/* @ngInject */
	function MainController(scope, timeout) {
		var vm = this;
		vm.title = 'MainController';
		vm.viewNav = false;
		vm.viewContent = false;
		vm.enterAnimation = true;
		vm.viewMenu = false;
		activate();

        ////////////////

        function activate() {
        	$('.sidebar').removeClass('active');
        	timeout(function() {
        		$('.sidebar').addClass('entering');
        		timeout(function() {
        			$('.sidebar').removeClass('initial-state entering');
        			vm.viewNav = true;
        			vm.enterAnimation = false;
        		}, 1500)
        	}, 500)	
        }

        scope.showContent = function() {
        	if(!vm.enterAnimation) {
        		vm.viewContent = true;
        	}

        }

        scope.hideContent = function() {
        	if(!vm.enterAnimation) {
        		vm.viewContent = false;
        	}
        }

        scope.showMenu = function() {
        	if(!vm.enterAnimation) {
        		vm.viewMenu = true;
        		// vm.viewNav = false;
        	}
        }

        scope.hideMenu = function() {
        	vm.viewMenu = false;
        	// vm.viewNav = true;
        }


    }
})();