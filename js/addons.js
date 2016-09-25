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
    $scope.addons = addonsAPI.get( { type:$state.current.name } );
    $scope.trustAsHtml = $sce.trustAsHtml;
}]);


cfAddons.factory( 'addonsAPI', function($resource){
    return $resource( 'https://calderawp.com/wp-json/calderawp_api/v2/products/cf-addons?category=:type', {
        type: 'all'
    });
});