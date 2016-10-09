
(function (){
	'use strict';
	
	angular.module('Data')
	.service('MenuDataService', MenuDataService);

    console.log("menudataservice");



	MenuDataService.$inject = ['$http'];
	function MenuDataService($http){
		var service = this;
        service.categories = [];





        service.getAllCategories=function(){

            return  $http({
                method : 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'

            }).then(function (response) {
                for (var i=0; response.data.length > i ;i++){
                    service.categories.push(response.data[i]);
                }
                return service.categories;
            }, function (response) {
                 console.log(response.error);
            });
        }



  //  }

    /*
    service.getAllCategories=function(){
        console.log("getAll");


        var response= $http({
                        method: "GET",
                           url: ("https://davids-restaurant.herokuapp.com/categories.json")
                  });
        return response;
    }

    /*service.getItemsForCategory=function(categoryShortName){
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
                    return filtered;
                })
                  .catch(function (error) {
                    console.log("Something went terribly wrong.");
                })

    };*/




	}


})();





