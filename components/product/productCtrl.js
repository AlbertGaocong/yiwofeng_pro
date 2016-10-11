

define(['app'],function(app){
    //app.service('getData',function($http){
    //    this.data = function(){
    //        return  $http.get('./serive/t.json');
    //    }
    //});
    return app.controller('productCtrl',['$scope',function($scope){
        $scope.product = "这是product";
    }])
});


