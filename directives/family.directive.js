(function() {
	'use strict';

	function Family() {
		return {
			restrict : 'EA',
			controller : 'FamilyController',
			controllerAs : 'family',
			bindToController : true,
			templateUrl : './templates/family.html'
		};
	}

	angular.module('family').directive('family', Family)

}())