'use strict';

(function(angular) {
	angular
		.module('demo-1')
		.controller('TodoController', TodoController);

	TodoController.$inject = [];

	function TodoController() {
		var _this = this;

		_this.tasks = [];
		_this.newTask = '';
		_this.filter = 'active';
		_this.filterList = false;

		_this.addTask = addTask;
		_this.removeTask = removeTask;
		_this.changeFilter = changeFilter;

		function addTask() {
			_this.tasks.push({
				description: _this.newTask,
				done: false
			});

			_this.newTask = '';
		}

		function removeTask(index) {
			_this.tasks.splice(index, 1);
		}

		function changeFilter(filter) {
			_this.filter = filter;

			switch (filter) {
				case 'completed':
					_this.filterList = true;
					break;
				default:
					_this.filterList = false;
					break;
			}
		}
	}
})(angular);