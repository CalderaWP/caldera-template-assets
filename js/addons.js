var cfAddons = angular.module('cf-addons', ['ui.router', 'ngResource', 'ngSanitize' ]);

cfAddons.config(function($stateProvider, $urlRouterProvider) {
    var template = jQuery( '#cf-addon-template' ).html();

    $stateProvider.state({
        name: 'all',
        url: '/all',
        template: template,
        controller: 'addons'
    });

    $stateProvider.state({
        name: 'email',
        url: '/email',
        template: template,
        controller: 'addons'
    });

    $stateProvider.state({
        name: 'tools',
        url: '/tools',
        template: template,
        controller: 'addons'
    });

    $stateProvider.state({
        name: 'free',
        url: '/free',
        template: template,
        controller: 'addons'
    });

    $stateProvider.state({
        name: 'payment',
        url: '/payment',
        template: template,
        controller: 'addons'
    });

    $urlRouterProvider.otherwise("/all")
});

cfAddons.controller( 'addons', ['$scope', 'addonsAPI', '$state', '$sce', function($scope, addonsAPI, $state, $sce ) {
    $scope.addons = addonsAPI.get( { 
        type:$state.current.name,
        per_page: 50
    } );
    $scope.trustAsHtml = $sce.trustAsHtml;
}]);


cfAddons.factory( 'addonsAPI', function($resource){
    var api;
    if( 'object' == typeof CFADDONS && 'string' == typeof CFADDONS.api ){
        api = CFADDONS.api;
    }else{
        api = 'http://54.197.87.54/wp-json/calderawp_api/v2/products/cf-addons';
    }
    return $resource( api + '?category=:type', {
        type: 'all'
    });
});
