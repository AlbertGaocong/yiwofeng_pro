
define(['app'], function(app) {

    return  app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
                $urlRouterProvider.otherwise('/home');
                $stateProvider
                .state('home',{
                    url:'/home',
                    templateUrl: './components/home/home.html',
                    controller: 'homeCtrl',
                    css:'./components/home/home.css'})
                .state('fun',{
                    url:'/fun',
                    templateUrl: './components/fun/fun.html',
                    controller: 'funCtrl',
                    css:'./components/fun/fun.css'})
                .state('product',{
                    url:'/product',
                    templateUrl: './components/product/product.html',
                    controller: 'productCtrl',
                    css:'./components/product/product.css'})
                .state('active',{
                    url:'/active',
                    templateUrl: './components/active/active.html',
                    controller: 'activeCtrl',
                    css:'./components/active/active.css'})

                }]);
});




