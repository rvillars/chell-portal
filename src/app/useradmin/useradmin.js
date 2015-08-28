angular.module( 'chell-portal.useradmin', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'useradmin', {
    url: '/useradmin',
    views: {
      "main": {
        templateUrl: 'useradmin/useradmin.tpl.html'
      }
    },
    data:{ pageTitle: 'User Administration' }
  });
})

.controller('ExampleGroupController', function($scope, CurrentUserService) {
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
    return !CurrentUserService.hasGroupId('e9e30dba-f08f-4109-8486-d5c6a331660a');
  };
})

.controller('ExampleUserController', function($scope, CurrentUserService) {
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
    return !CurrentUserService.hasGroupId('e9e30dba-f08f-4109-8486-d5c6a331660a');
  };
});
