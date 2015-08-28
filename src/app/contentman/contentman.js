angular.module('chell-portal.contentman', [
    'ui.router',
    'ui.bootstrap'
])

    .config(function config($stateProvider) {
        $stateProvider.state('contentman', {
            url: '/contentman',
            views: {
                "main": {
                    controller: 'ContentManCtrl',
                    templateUrl: 'contentman/contentman.tpl.html'
                }
            },
            data: {pageTitle: 'Content Managment'}
        });
    })

    .controller('ContentManCtrl', function ContentManCtrl($scope) {
        $scope.readOnly = function () {
            return true;
        };
    });
