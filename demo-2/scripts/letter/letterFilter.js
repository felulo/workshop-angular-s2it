'use strict';

(function(angular) {
	angular
		.module('demo-2')
		.filter('letter', Letter);

	Letter.$inject = [];

	function Letter() {
		return function(input) {
			return String.fromCharCode(65 + Number(input));
		};
	}
})(angular);