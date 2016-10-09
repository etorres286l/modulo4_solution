(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);


	RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider) {

		//redirect home to page if no other URL matches
		$urlRouterProvider.otherwise('/');

		// Set Up UI States
		$stateProvider

			.state('home', {
				url: '/',
				templateUrl: 'templates/home.template.html'
			})

			.state('categories', {
				url: '/categories',
				templateUrl: 'templates/categories.template.html',
				controller: 'CategoriesController',
				resolve: {
					items: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			});

	}

})();