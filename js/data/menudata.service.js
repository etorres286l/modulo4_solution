
(function (){
	'use strict';
	
	angular.module('Data')
	.service('MenuDataService', MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");



	MenuDataService.$inject = ['$http','ApiBasePath'];
	function MenuDataService($http,ApiBasePath){
		var service = this;

		service.categories=[];


		service.getAllCategories=function(){

			 return  $http({
        					method: "GET",
       						url: (ApiBasePath + "/categories.json")
     				 }).then (function(resolve){
     				 		service.categories=resolve.data;
     				 	    return resolve.data;
        				
        			})
     				 .catch(function (error) {
            			console.log("Something went terribly wrong.");
            		})
        };
		
		service.getItemsForCategory=function(categoryShortName){
			return  $http({
        					method: "GET",
       						url: (ApiBasePath + "/menu.items.json?category="+categoryShortName)
     				 }).then (function(resolve){
     				 	    return resolve.data;
        				/*	var items = resolve.data['menu_items'];
        
       						var filtered=[];
        					for (var i=0;i<items.length;i++){
         						if (items[i].description.indexOf(searchTerm)!=-1) filtered.push(items[i]);
        					}
        				return filtered;*/
        			})
     				 .catch(function (error) {
            			console.log("Something went terribly wrong.");
            		})

		};




	}


})();





