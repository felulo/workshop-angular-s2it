'use strict';

(function(angular) {
	angular
		.module('demo-2')
		.directive('quiz', Quiz);

	Quiz.$inject = [];

	function Quiz() {
		return {
			templateUrl: 'scripts/quiz/quizView.html',
			restrict: 'E',
			replace: true,
			scope: {
				type: '=',
				question: '=',
				answers: '=',
				response: '='
			}
		};
	}
})(angular);