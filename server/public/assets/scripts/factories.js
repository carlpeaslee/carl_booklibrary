myApp.factory("BookService", ["$http", function($http){

    var getData = function(){
       $http.get("/books").then(function(response){
          console.log(response.data);
       });
    };

    var postData = function(data){
       $http.post("/books", data).then(function(response){
           console.log(response);
       });
    };

    return {
      postData: postData,
      getData: getData
    };
}]);
