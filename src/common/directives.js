/*jshint globalstrict: true*/
'use strict';

var chellPortal = angular.module('chell-portal');

chellPortal.directive("chellPortalMenuToggle", function() {
    return {
        restrict: "A",
        controller: function($scope, $element){
            $scope.menuHidden = true;
            $scope.toggleMenu = function() {
                $scope.menuHidden = !($scope.menuHidden);
            };
        },
        link: function (scope, element, attrs) {
            $(element).click(function() {
                scope.toggleMenu();
                scope.$digest();
            });
            scope.$watch('menuHidden', function(isMenuHidden) {
                if (isMenuHidden) {
                    $('body').addClass("hidden-menu");
                } else {
                    $('body').removeClass("hidden-menu");
                }
            });
        }
    };
});
