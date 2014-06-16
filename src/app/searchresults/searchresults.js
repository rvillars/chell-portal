angular.module( 'chell-portal.searchresults', [
  'ui.router',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'searchresults', {
    url: '/searchresults',
    views: {
      "main": {
        controller: 'SearchResultsCtrl',
        templateUrl: 'searchresults/searchresults.tpl.html'
      }
    },
    data:{ pageTitle: 'Search Results' }
  });
})

.controller( 'SearchResultsCtrl', function SearchResultsCtrl( $scope ) {
 
})

;
