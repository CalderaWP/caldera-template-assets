var cfAddons = angular.module('cf-addons', ['ui.router', 'ngResource' ]);

cfAddons.config(function($stateProvider, $urlRouterProvider) {
    var template = jQuery( '#cf-addon-template' ).html();

    $stateProvider.state({
        name: 'all',
        url: '/all',
        template: template,
        //templateUrl: 'templates/cf-addons.html',
        controller: 'all'
    });

    $stateProvider.state({
        name: 'email',
        url: '/email',
        template: template,
        controller: 'email'
    });

    $stateProvider.state({
        name: 'tools',
        url: '/tools',
        template: template,
        controller: 'tools'
    });

    $stateProvider.state({
        name: 'free',
        url: '/free',
        template: template,
        controller: 'free'
    });

    $stateProvider.state({
        name: 'payment',
        url: '/payment',
        template: template,
        controller: 'payment'
    });

    $urlRouterProvider.otherwise("/all")
});

cfAddons.controller('all', ['$scope', 'addonsAPI', function($scope,addonsAPI) {
    $scope.addons = addonsAPI.get( { type:'all'} );
}]);
cfAddons.controller('email', ['$scope', 'addonsAPI', function($scope,addonsAPI) {
    $scope.addons = addonsAPI.get( { type:'email'} );
}]);
cfAddons.controller('tools', ['$scope', 'addonsAPI', function($scope,addonsAPI) {
    $scope.addons = addonsAPI.get( { type:'tools'} );
}]);
cfAddons.controller('free', ['$scope', 'addonsAPI', function($scope,addonsAPI) {
    $scope.addons = addonsAPI.get( { type:'free'} );
}]);
cfAddons.controller('payment', ['$scope', 'addonsAPI', function($scope,addonsAPI) {
    $scope.addons = addonsAPI.get( { type:'payment'} );
}]);

cfAddons.factory( 'addonsAPI', function($resource){
    return $resource( 'https://calderawp.com/wp-json/calderawp_api/v2/products/cf-addons?category=:type', {
        type: 'all'
    });
});