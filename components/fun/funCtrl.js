

define(['app'],function(app){
    //app.service('getData',function($http){
    //    this.data = function(){
    //        return  $http.get('./serive/t.json');
    //    }
    //});
    return app.controller('funCtrl',['$scope',function($scope){
        $scope.fun = "这是fun";
    }])
});

