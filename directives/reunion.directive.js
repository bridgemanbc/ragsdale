(function() {
	'use strict';

	function Reunion() {
		return {
			restrict : 'EA',
			controller : 'ReunionController',
			controllerAs : 'reunion',
			bindToController : true,
			templateUrl : './templates/reunion.html'
		};
	}

	angular.module('family').directive('reunion', Reunion)

}())