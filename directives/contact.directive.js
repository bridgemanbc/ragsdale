(function() {
	'use strict';

	function Contact() {
		return {
			restrict : 'EA',
			controller : 'ContactController',
			controllerAs : 'contact',
			bindToController : true,
			templateUrl : './templates/contact.html'
		};
	}

	angular.module('family').directive('contact', Contact)

}())