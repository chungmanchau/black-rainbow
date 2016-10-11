(function() {
	'use strict';

	angular.module('blackRainbow')
	.controller('MainController', MainController);

	MainController.$inject = ['$scope', '$timeout', '$animate'];

	/* @ngInject */
	function MainController(scope, timeout, animate) {
		var vm = this;
		vm.title = 'MainController';
		vm.viewNav = false;
		vm.viewContent = false;
		vm.enterAnimation = true;
		vm.viewMenu = false;
        vm.openNav = true;
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
        		}, 1500);
        	}, 500);
        }

        vm.showContent = function() {
        	if(!vm.enterAnimation) {
                vm.openNav = false;
        		vm.viewContent = true;
        	}
        };

        vm.hideContent = function() {
        	if(!vm.enterAnimation) {
        		vm.viewContent = false;
        	}
        };

        vm.showMenu = function() {
        	if(!vm.enterAnimation) {
        		vm.viewMenu = true;
        	}
        };

        vm.hideMenu = function() {
        	vm.viewMenu = false;
        };

        vm.toggleNav = function() {
            vm.openNav = !vm.openNav;
            console.log(vm.openNav)
        }

        vm.closeNav = function() {
            vm.openNav = false;
        }
  }
})();