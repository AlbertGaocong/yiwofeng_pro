
define(['app'],function(app){
    //app.service('getData',function($http){
    //    this.data = function(){
    //        return  $http.get('./serive/t.json');
    //    }
    //});

    return app.controller('homeCtrl',['$scope',function($scope){
        $scope.home = "这是home";

    }])
});



