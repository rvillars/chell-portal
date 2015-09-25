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
        $scope.detail = false;
        $scope.list = true;

        $scope.showDetail = function() {
            $scope.detail = true;
            $scope.list = false;
        };

        $scope.showList = function() {
            $scope.detail = false;
            $scope.list = true;
        };

        $scope.readOnly = function() {
            return true;
        };

        $scope.currentUser = function() {
            return 'testUser';
        };
    });
