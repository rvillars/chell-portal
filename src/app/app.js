/*jshint globalstrict: true*/
'use strict';

var chellPortal = angular.module('chell-portal', [
    'templates-app',
    'templates-common',
    'chell-portal.dashboard',
    'chell-portal.contentman',
    'chell-portal.searchresults',
    'chell-portal.useradmin',
    'chell-portal.profile',
    'ui.router',
    'chell-iam',
    'chell-portlet',
    'chell-cms',
    'chell-search',
    'chell-bookapp',
    'translations',
    'ngMockE2E'
]);

chellPortal.config(function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/dashboard');
});

chellPortal.run(function run($httpBackend) {
    $httpBackend.whenGET(/.*/).passThrough();
});

