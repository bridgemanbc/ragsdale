(function() {
	'use strict';

	function History() {
		return {
			restrict : 'EA',
			controller : 'HistoryController',
			controllerAs : 'history',
			bindToController : true,
			templateUrl : './templates/history.html'
		};
	}

	angular.module('family').directive('history', History)

}())