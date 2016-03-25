myApp.controller("AddController", ["$scope", "BookService", function($scope, BookService){
    var bookObject = {};
    var bookService = BookService;
    //POST HERE
    $scope.submit = function(data){
      bookService.postData(data);
    };
}]);

myApp.controller("ShowController", ["$scope", "BookService", function($scope, BookService){
    var bookService = BookService;
    bookService.getData();
}]);
