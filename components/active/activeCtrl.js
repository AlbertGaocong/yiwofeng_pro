
define(['app'],function(app){
    //app.service('getData',function($http){
    //    this.data = function(){
    //        return  $http.get('./serive/t.json');
    //    }
    //});
    return app.controller('activeCtrl',['$scope',function($scope){
        $scope.active = "这是active";
    }])
});


