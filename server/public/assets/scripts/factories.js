myApp.factory("BookService", ["$http", function($http){

    var getData = function(){
       $http.get("/books").then(function(response){
          library.contents = response.data;
       });
    };

    var postData = function(data){
       $http.post("/books", data).then(function(response){
           getData();
       });
    };

    var deleteData = function(data){
        console.log(data);
        $http.delete("/books/" + data).then(function(response){
           getData();
       });
    };

    var initialCall = function(){
      if(library.contents === undefined){
        $http.get("/books").then(function(response){
            library.contents = response.data;
        });
      }
    };

    var library = {};

    return {
      postData: postData,
      getData: getData,
      initialCall: initialCall,
      library: library,
      deleteData: deleteData
    };
}]);
