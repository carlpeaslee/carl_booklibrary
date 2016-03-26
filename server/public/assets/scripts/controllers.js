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

    $scope.deleteData = bookService.deleteData;

    $scope.predicate = 'title';
    $scope.reverse = true;
    $scope.order = function(predicate) {
        $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
        $scope.predicate = predicate;
  };


}]);
