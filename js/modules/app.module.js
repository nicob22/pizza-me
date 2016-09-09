(function () {
    'use strict';

    angular.module('app', ['ui.router', 'order', 'ui.bootstrap', 'uiSwitch'])
        .config(function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('first', {
                    url: '/',
                    templateUrl: 'first.html'
                })
                .state('address', {
                    url: '/address',
                    templateUrl: 'address.html'
                })
                .state('finish', {
                    url: '/finish',
                    templateUrl: 'finish.html'
                })
                .state('thanks', {
                    url: '/thanks',
                    templateUrl: 'thanks.html'
                })
                .state('order', {
                    url: '/order',
                    templateUrl: 'order.html'
                });

        });


}());