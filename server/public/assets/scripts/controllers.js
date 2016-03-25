myApp.controller("AddController", ["$scope", "BookService", function($scope, BookService){
    var bookService = BookService;

    $scope.bookObject = {};
    $scope.submit = function(data){
        bookService.postData(data);
        $scope.bookObject = {};
    };
}]);

myApp.controller("ShowController", ["$scope", "BookService", function($scope, BookService){
    var bookService = BookService;
    bookService.initialCall();
    $scope.library = bookService.library;
}]);
