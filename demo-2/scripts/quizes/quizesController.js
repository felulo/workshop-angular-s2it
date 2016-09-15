'use strict';

(function(angular) {
	angular
		.module('demo-2')
		.controller('QuizesController', QuizesController);

	QuizesController.$inject = [
		'QuizesResource'
	];

	function QuizesController(QuizesResource) {
		var _this = this;

		_this.status = 'quiz';
		_this.currentQuiz = 0;
		_this.prevQuiz = prevQuiz;
		_this.nextQuiz = nextQuiz;
		_this.endQuiz = endQuiz;
		_this.newQuiz = newQuiz;

		_init();

		function prevQuiz() {
			_this.currentQuiz--;
		}

		function nextQuiz() {
			_this.currentQuiz++;
		}

		function endQuiz() {
			_this.status = 'end';
		}

		function newQuiz() {
			_this.status = 'quiz';
			_this.currentQuiz = 0;

			_this.quizes.forEach(function(el) {
				el.response = undefined;
			});
		}

		function _init() {
			_getQuizes();
		}

		function _getQuizes() {
			QuizesResource.getQuizes().then(function(data) {
				_this.quizes = data;
			});
		}
	}
})(angular);