
require.config({
        paths :{
            'angular': './lib/ag_components/angular/angular.min',
            'uiRouter': './lib/ag_components/angular-ui-router/release/angular-ui-router.min',
            'angularCSS': './lib/ag_components/angular-css/angular-css.min',
            'jquery':       './lib/jquery',
            'autoWidth':       './lib/autoWidth',
            //'bootstrap': './lib/bootstrap.min',
            'homeCtrl':'./components/home/homeCtrl',
            'funCtrl':'./components/fun/funCtrl',
            'productCtrl':'./components/product/productCtrl',
            'activeCtrl':'./components/active/activeCtrl',
            "app" : "app",
            "router" : "router"
        },
        shim: {
            'angular' :{
                deps: ['jquery'],
                exports : 'angular'
            },
            'uiRouter':{
                deps: ["angular"],
                exports: 'uiRouter'
            },
            'angularCSS':{
                deps: ["angular"],
                exports: 'angularCSS'
            }
        }
});

require([
            'jquery',
            'angular',
            'uiRouter',
            'autoWidth',
            'angularCSS',
            'homeCtrl',
            'funCtrl',
            'productCtrl',
            'activeCtrl',
            'router',
            'app'
    ],function($,angular,uiRouter){
        console.log(angular);
        console.log(uiRouter);
        $(document).ready(function(){
           angular.bootstrap(document,['myapp']);
        });


})