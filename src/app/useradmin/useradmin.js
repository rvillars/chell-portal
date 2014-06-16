angular.module( 'chell-portal.useradmin', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'useradmin', {
    url: '/useradmin',
    views: {
      "main": {
        controller: 'UserAdminCtrl',
        templateUrl: 'useradmin/useradmin.tpl.html'
      }
    },
    data:{ pageTitle: 'User Administration' }
  });
})

.controller( 'UserAdminCtrl', function UserAdminCtrl( $scope ) {
 
})

;
