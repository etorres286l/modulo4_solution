(function(){
	'use strict';

	angular.module('Data')
	.component('categories', {
		templateUrl : 'templates/categories.template.html',
		controller : 'CategoriesController as catctrl',
		bindings : {
			categories : '<'
		}

	});

})();