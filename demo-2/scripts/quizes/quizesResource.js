'use strict';

(function(angular) {
	angular
		.module('demo-2')
		.service('QuizesResource', QuizesResource);

	QuizesResource.$inject = [
		'$q',
		'$http'
	];

	function QuizesResource($q, $http) {
		var _this = this;
		var _quizesUrl = [
			'assets/data/quiz-1.json',
			'assets/data/quiz-2.json',
			'assets/data/quiz-3.json'
		];

		_this.getQuizes = getQuizes;

		function getQuizes() {
			var _arrayPromises = [];

			_quizesUrl.forEach(function(el) {
				_arrayPromises.push($http.get(el));
			});

			return $q.all(_arrayPromises).then(function(res) {
				res = res.map(function(el) {
					return el.data;
				});

				return res;
			});
		}
	}
})(angular);