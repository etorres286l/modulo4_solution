(function(){
	'use strict';

	angular.module('Data')
		.controller('CategoriesController', CategoriesController);

		CategoriesController.$inject = ['item'];
		function CategoriesController(item){
			var ctrl = this;
			ctrl.categories = item;
		}

})();