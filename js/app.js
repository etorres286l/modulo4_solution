(function () {
'use strict';
  
  angular.module('MenuApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', FoundItems);


function FoundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narrow',
    bindToController: true
  };

  return ddo;
}





	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService){
  
    var narrow = this;
    narrow.searchTerm="";
    narrow.items=[];
    narrow.first=true;
   
  

    //narrow.items= MenuSearchService.getMachedMenuItems();

    narrow.findToMe = function () {
     
      narrow.first=false;
     

      if (narrow.searchTerm!==""){
       
        var promise=MenuSearchService.getMachedMenuItems(narrow.searchTerm.toLowerCase().trim());
      

        promise.then(function (response) {
          narrow.items = response;
           
        })
        .catch(function (error) {
            console.log("Something went terribly wrong.");
        });
   
      }
      else {
               narrow.items=[];

               
      }
    } //end findToMe

    narrow.delete=function(indexItem){
      narrow.items.splice(indexItem, 1);
    }

    narrow.nothing=function(){
      
        if (narrow.items.length==0) return true
        else return false;
    
    }
 		
	} //end NarrowItDownController

  MenuSearchService.$inject = ['$http', 'ApiBasePath']
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    //service.found=[];

    service.getMachedMenuItems = function (searchTerm) {
      return  $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then (function(resolve){
        var items = resolve.data['menu_items'];
        
        var filtered=[];
        for (var i=0;i<items.length;i++){
          if (items[i].description.indexOf(searchTerm)!=-1) filtered.push(items[i]);
        }
        return filtered;


      })
    }// end getMachedMenuItems

   

  } //end service MenuSearchService


})();


