angular.module('cursorApp', ['ionic', 'starter.menu', 'starter.list', 'starter.about', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function(){});
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'js/menu/menu.html',
        controller: 'AplicationController as appCtrl'
    })

    .state('app.list', {
        url: '/list',
        views: {
            'menuContent': {
                templateUrl: 'js/list/list.html',
                controller: 'listPersonController as listCtrl'
            }
        }
    })

    .state('app.about', {
        url: '/about',
        views: {
            'menuContent': {
                templateUrl: 'js/about/about.html',
                controller: 'aboutUsController as aboutCtrl'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/list');
});
